'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import axios from 'axios'
import Flow from '@/components/Flow'

const baseData = [
  {
    title: 'Saúde',
    status: 'Neutro'
  },
]
const baseTag = ['Saúde Mental', 'Atividade Física', 'Alimentação']
const teste = [
  {
    title: 'Saúde',
    status: 'Neutro'
  },
  {
    title: 'Saúde Mental',
    status: 'Bom'
  },
  {
    title: 'Atividade Física',
    status: 'Regular'
  },
  {
    title: 'Alimentação',
    status: 'Ruim'
  }
]

const mock = {
  accept:"Sim",
  email:"aizichtl@gmail.com",
  firstName:"12121212",
  health:['Bom', 'Bom', 'Bom'],
  lastName:"12121",
  motivo: "1212121212121"
}
// http://localhost:3000/loading?hash=79d7b993-d1ee-480f-b568-2bf61dc2ba66
export default function FlowContainer() {
  const searchParams = useSearchParams()
  const search = searchParams.get('hashData')
  const decodeString = decodeURIComponent(search as string)
  const jsonString = atob(decodeString)
  const jsonObject = JSON.parse(jsonString)

  console.debug(jsonObject)
  const [nodeData, setNodeData] = useState<any>([])
  const [userData, setUserData] = useState<any>(null)




  async function getStaticProps() {
    try {
      const response = await axios.get(`http://localhost:3000/api/form-handler?hash=${search}`)
        .then(r=>r)
      console.debug(response, 'request')
      
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

  useEffect(()=>{
    // getStaticProps().then(r=>setUserData(r))
    // console.debug(data, 'return')
    // setUserData(userData)
  },[search])


  useEffect(()=>{
    if (userData !== null ){

      baseTag.forEach((item, index) => {
        if (baseData.length >= 4) return
          baseData.push(
              {
                  title: item,
                  status: userData.health[index]
                },
              )
            })
            // console.debug(baseData, '@')
            setNodeData(baseData)
            // console.debug(userData, 'effect')
            // console.debug(userData.health, 'effect')
          }
      
  },[userData])

  // useEffect(()=>{
  // },[nodeData])
  // console.debug(baseData, 'render')
  return (
    <>
    { userData !== null && (
      <div className="flex flex-col items-center justify-center h-screen p-20">
      <div className="flex flex-col w-full max-w-[700px] items-start p-2">
      <p className="text-2xl">{userData.firstName} {userData.lastName}</p>
      <p className="text-xl mb-10">{userData.email}</p>
      <p className="text-xl">{'Não esqueça porque está aqui!'}</p>
      <p className="text-xl mb-10">{userData.motivo}</p>
      </div>
      {
        nodeData.length > 1 && (
        <Flow
        dataArray={nodeData}
        />
        )
      }
      </div>
  )}
  </>)
}