'use client'
import { useEffect, useState } from 'react'
import MapForm from '../MapForm';
import { FormContainer, FormDivider, MainContainer, NewSearchButton, NoDataContainer, NoDataText, PageSubtitle, PageTitle, StyledTR } from './styles';
import MapsTable from '../MapsTable';

const startTitle = 'Busca de Mapas'
const startSubtitle = 'Informe seu email e sua data de nascimento para buscar seus mapas da vida!'
const startMapData = {
  success: false,
  data: []
}

export default function MapListContainer() {
  const screenLimit = 762
  let innerWidth: number = 0
  if (typeof window !== 'undefined') {
    innerWidth = window.innerWidth
  }
  const [screenWidth, setScreenWidth] = useState(innerWidth)
  let isMobile = screenWidth < screenLimit
  
  const [mapList, setMapList] = useState<any>(startMapData)
  const [title, setTitle] = useState<string>(startTitle)
  const [subtitle, setSubTitle] = useState<string>(startSubtitle)

  const handleWindowSizeChange = (): void => {
    if (typeof window !== 'undefined') {
        setScreenWidth(window.innerWidth)
        isMobile = screenWidth < screenLimit
      }
  }

  const cleanSearch = () => {
    setTitle(startTitle)
    setSubTitle(startSubtitle)
    setMapList(startMapData)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, []) 

  useEffect(()=>{
    if(mapList.success) {
      setTitle('Listagem de mapas cadastrados')
      setSubTitle('Selecione o mapa desejado para visualizar')
    }
  },[mapList] )

  return (
    <MainContainer>
      <PageTitle>{title}</PageTitle>
      <PageSubtitle>{subtitle}</PageSubtitle>
      <FormDivider />
      {(mapList.success && mapList.data[0] !== undefined) && (
        <>
        <MapsTable data={mapList.data} isMobile={isMobile} />
        <NewSearchButton onClick={cleanSearch}>Nova Busca</NewSearchButton>
        </>
      )}
      {(!mapList.success && mapList.data[0] === undefined) && (
        <FormContainer>
          <MapForm
            setMapList={setMapList}
          />
        </FormContainer>
      )}
      {(!mapList.success && mapList.data[0] !== undefined) && (
        <NoDataContainer>
          <NoDataText>{'Não foram encontrados mapas com os dados informados'}</NoDataText>
          <NoDataText>{'Tente novamente!'}</NoDataText>
          <NewSearchButton onClick={cleanSearch}>Nova Busca</NewSearchButton>
        </NoDataContainer>
      )}
    </MainContainer>
    )
}
