'use client'
import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { redirect } from 'next/navigation'
import axios from 'axios'

export default function LoadingContainer() {

  const searchParams = useSearchParams()
  const search = searchParams.get('hash')
  const [userData, setUserData] = useState<any>(null)  

  async function getStaticProps() {
    try {
      const response = await axios.get(`/api/form-handler?hash=${search}`)
      
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

  const handleNavigate = () => {
    const jsonString = JSON.stringify(userData);
    const base64String = btoa(jsonString); // Base64 encoding to avoid special characters
    const encodedBase64String = encodeURIComponent(base64String);
    redirect(`/map?hashData=${encodedBase64String}`)
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

  return (
  <ReactLoading
    type={'spinningBubbles'}
    color={'#0fa454'}
    height={'100%'}
    width={'100%'} />
    )
}
