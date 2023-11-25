'use client'
import { useEffect, useRef, useState } from 'react'

import MapForm from '../MapForm';
import { FormContainer, FormDivider, NewSearchButton, NoDataContainer, NoDataText, PageSubtitle, PageTitle, StyledTR } from './styles';
import { obterPrimeiroNome } from '../utils/data-format';

const startTitle = 'Busca de Mapas'
const startSubtitle = 'Informe seu email e sua data de nascimento para buscar seus mapas da vida!'
const startMapData = {
  success: false,
  data: []
}

function converterFormatoData(dataString: string): string {
  const dataObj = new Date(dataString);
  
  // Obtendo componentes da data
  const dia = String(dataObj.getUTCDate()).padStart(2, '0');
  const mes = String(dataObj.getUTCMonth() + 1).padStart(2, '0'); // Adicionando 1, pois os meses começam do zero
  const ano = dataObj.getUTCFullYear();

  // Formatando a data no formato desejado
  const dataFormatada = `${dia}/${mes}/${ano}`;

  return dataFormatada;
}
const TabelaDados = ({ dados }: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Data</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item: any, index: number) => {
          const user = JSON.parse(item.mapjson)
          return (
          <StyledTR
            key={index}
          >
            <td>{'_' + obterPrimeiroNome(user.fullName)}</td>
            <td>{'_' + item.email}</td>
            <td>{'_' + converterFormatoData(item.data)}</td>
            <td><a href={`loading?hash=${item.hash}`} target={'_blank'}>ABRIR</a></td>
          </StyledTR>
        )})}
      </tbody>
    </table>
  );
};

export default function MapListContainer() {
  const [mapList, setMapList] = useState<any>(startMapData)
  const [title, setTitle] = useState<string>(startTitle)
  const [subtitle, setSubTitle] = useState<string>(startSubtitle)

  const cleanSearch = () => {
    setTitle(startTitle)
    setSubTitle(startSubtitle)
    setMapList(startMapData)
  }

  useEffect(()=>{
    console.debug(mapList, '@')
    if(mapList.success) {
      setTitle('Listagem de mapas cadastrados')
      setSubTitle('Selecione o mapa desejado para visualizar')
    }
  },[mapList] )
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <PageSubtitle>{subtitle}</PageSubtitle>
      <FormDivider />
      {(mapList.success && mapList.data[0] !== undefined) && (
        <>
        <TabelaDados dados={mapList.data} />
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
    </>
    )
}
