'use client'
import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation'


import axios from 'axios'

export default function LoadingContainer() {

  const searchParams = useSearchParams()
  const search = searchParams.get('hash')
  // const router = useRouter();

  const [userData, setUserData] = useState<any>(null)

  // alert(search)
  

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
    console.debug(base64String)
    const encodedBase64String = encodeURIComponent(base64String);

    redirect(`/?hashData=${encodedBase64String}`)
    // router.push({
    //   pathname: '/',
    //   query: { data: base64String }, // Pass the data in the query parameter
    // }, undefined, { scroll: false });
  };

  useEffect(()=>{
    const fetchData = async () => {
      const data = await getStaticProps().then(r=> r)
      console.debug(data)
      setUserData(data)
    };
    fetchData()
    // setUserData(userData)
  }, [search])
  useEffect(()=>{
    if (userData !== null) {
      alert('renderizou')
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



// const YourComponent = () => {

//   const handleNavigate = () => {
//     const dataToSend = { /* your data here */ };
//     const queryString = new URLSearchParams(dataToSend).toString();

//     router.push({
//       pathname: '/dashboard',
//       search: queryString,
//     }, undefined, { scroll: false });
//   };

//   return (
//     <button onClick={handleNavigate}>
//       Navigate to Dashboard with Data
//     </button>
//   );
// };

// export default YourComponent;