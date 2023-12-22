'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Flow from '@/components/Flow'
import {
  ChipsContainer,
  Container,
  FormContainer,
  ModalTextContainer,
  NewSearchButton,
  NotSelectedReasonsChips,
  ReasonsChips,
} from './style'

import {
  PageSubtitle,
  PageTitle,
  FormDivider,
  SecondTitle
} from '../text-styles'
//@ts-ignore
import Modal from 'react-modal';


const customStyles = {
  content: {
    width: '95%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function FlowContainer() {
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
  const searchParams = useSearchParams()
  const search = searchParams.get('hashData')
  const [data, setData] = useState<any>(null)
  const [modalIsOpen, setIsOpen] = useState(false);

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

  useEffect(()=>{
  },[data])

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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
        <>
        <Flow
          isMobile={isMobile}
          data={data}
          mind={data.maps[0]}
          body={data.maps[1]}
          spirit={data.maps[2]}
          />
        <ModalTextContainer>
          <SecondTitle>{'Vamos construir uma experiência útil?'}</SecondTitle>
          <PageSubtitle>{'Gostaríamos de entender qual foi a sua percepção sincera sobre a ferramenta?'}</PageSubtitle>
          <NewSearchButton onClick={openModal}>Avaliar</NewSearchButton>
        </ModalTextContainer>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {true && (
              //@ts-ignore
              <iframe src="https://forms.gle/XbY6fgxi9ia4XCnP8?embedded=true" width="100%" height="700" frameborder="0" 
              marginheight="0" marginwidth="0">Loading…</iframe>
            )}
          <FormContainer>
            <NewSearchButton onClick={closeModal}>Fechar</NewSearchButton>
          </FormContainer>
        </Modal>
        </>
      )}
  </Container>)
}