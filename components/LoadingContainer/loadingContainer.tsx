'use client'
import ReactLoading from 'react-loading';
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { redirect } from 'next/navigation'
import axios from 'axios'
import LoadingBar from 'react-top-loading-bar';
import { LoadingText } from './styles';

export default function LoadingContainer() {

  const searchParams = useSearchParams()
  const search = searchParams.get('hash')
  const [userData, setUserData] = useState<any>(null)  
  const [base64Data, setBase64Data] = useState<string>('')  
  
  const [progress, setProgress] = useState(0);
  const [loadMsg, setLoadMsg] = useState('Transferindo seus dados');

  async function getStaticProps() {
    try {
      const response = await axios.get(`/api/map-handler?hash=${search}`)
      
      const data = response.data;
      return data
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return {
        data: {
          success: false,
        },
      };
    }
  }

  const updateLoading = (percent: number, msg: string) => {
    setProgress(percent)
    setLoadMsg(msg)
  }

  const lazyLoading = () => {
    setTimeout(()=> updateLoading(10, 'Transferindo seus dados'), 800)
    setTimeout(()=> updateLoading(40, 'Processando as informações'), 1600)
    setTimeout(()=> updateLoading(65, 'Construindo seu mapa'), 3200)
    setTimeout(()=> updateLoading(100, 'Finalizando'), 4800)
  }

  const handleNavigate = () => {
    const jsonString = JSON.stringify(userData);
    const base64String = btoa(jsonString); // Base64 encoding to avoid special characters
    const encodedBase64String = encodeURIComponent(base64String);
    setBase64Data(encodedBase64String)
    lazyLoading()
  };

  const navigateUser = () => {
    redirect(`/map?hashData=${base64Data}`)
  };

  useEffect(()=>{
    const fetchData = async () => {
      const data = await getStaticProps().then(r=> r)
      setUserData(data)
    };
    fetchData()
  }, [search])
  
  useEffect(()=>{
    if (userData !== null) {
      handleNavigate()
    }
  }, [userData])

  useEffect(()=>{
    if (progress === 100) {
      navigateUser()
    }
  }, [progress])

  return (
    <>
      <LoadingBar
        color={'#0fa454'}
        progress={progress}
        />
        <LoadingText className="text-center mt-5">{loadMsg}!</LoadingText>
    </>
    )
}
