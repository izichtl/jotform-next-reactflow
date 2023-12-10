'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Flow from '@/components/Flow'
import {
  ChipsContainer,
  Container,
  NotSelectedReasonsChips,
  ReasonsChips,
} from './style'

import {
  PageSubtitle,
  PageTitle,
  FormDivider,
  SecondTitle
} from '../text-styles'

export default function FlowContainer() {
  const searchParams = useSearchParams()
  const search = searchParams.get('hashData')
  const [data, setData] = useState<any>(null)

  const screenLimit = 762
  let innerWidth: number = 0
  if (typeof window !== 'undefined') {
    innerWidth = window.innerWidth
  }
  const [screenWidth, setScreenWidth] = useState(innerWidth)
  let isMobile = screenWidth < screenLimit


  useEffect(()=>{
    if (search !== null) {
      const decodeString = decodeURIComponent(search as string)
      const jsonString = atob(decodeString)
      const jsonObject = JSON.parse(jsonString) 
      const userObject = JSON.parse(jsonObject.mapjson)
      setData(userObject)
    }
  },[search])


  const handleWindowSizeChange = (): void => {
    if (typeof window !== 'undefined') {
        setScreenWidth(window.innerWidth)
        isMobile = screenWidth < screenLimit
      }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, []) 


const objectives = [ 
"Organizar o dia a dia", 
"Focar nos objetivos", 
"Melhorar a saúde", 
"Praticar exercícios", 
"Melhorar a alimentação", 
"Melhorar minhas finanças", 
"Estar mais tempo com a família", 
"Me dedicar a hobbies e projetos"
]

  useEffect(()=>{
  },[data])
  // console.debug(data)
  return (
    <Container>
            <PageTitle>{'Mapa da Vida'}</PageTitle>
      <PageSubtitle>{'Veja áreas da sua vida. Trace planos. Priorize o que é importante'}</PageSubtitle>
      <FormDivider />
      <SecondTitle>{'Meus Objetivos'}</SecondTitle>
      <ChipsContainer>
      {data !== null && (
        objectives.map((item: any) => {
          const index = data.reasons.indexOf(item)
          return (<>
            {index !== -1 && (              
              <ReasonsChips>{item}</ReasonsChips>
            )}  
            {index === -1 && (              
              <NotSelectedReasonsChips>{item}</NotSelectedReasonsChips>
            )}  
          </>
          )
        })
        
      )}
      </ChipsContainer>
      {data !== null && (
        <Flow
          isMobile={isMobile}
          data={data}
          mind={data.maps[0]}
          body={data.maps[1]}
          spirit={data.maps[2]}
        />
        )}
  </Container>)
}