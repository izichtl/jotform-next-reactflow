'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
// import axios from 'axios'
import Flow from '@/components/Flow'
import MapHeader from '../MapHeader'
// import ReactLoading from 'react-loading';
// import {Container} from './style'

export default function FlowContainer() {
  const searchParams = useSearchParams()
  const search = searchParams.get('hashData')
  const [data, setData] = useState<any>(null)


  useEffect(()=>{
    if (search !== null) {
      const decodeString = decodeURIComponent(search as string)
      const jsonString = atob(decodeString)
      const jsonObject = JSON.parse(jsonString) 
      const userObject = JSON.parse(jsonObject.mapjson)
      // console.debug(userObject, 'userObject')
      setData(userObject)
    }
  },[search])




  useEffect(()=>{
  },[data])
  return (
    <>
      {/* <MapHeader /> */}
      {data !== null && (
        <Flow
        data={data}
        mind={data.maps[0]}
        body={data.maps[1]}
        spirit={data.maps[2]}
        />
        )}
  </>)
}