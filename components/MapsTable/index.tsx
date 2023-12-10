'use client'
import React, { FC, ReactElement, useEffect, useState } from 'react'
// import Icon from '../icon'
// import { PRIMARY_BLUE_03 } from '../utils/dash-colors'
import {  
  ActionTH,  
  EmailTH, 
   ButtonIconBox, DataActionTH, 
   DataNameTH, DataTH, MainContainer, MobileBox, MobileButtonBox, MobileButtonIconBox, MobileContainer, MobileDivider, MobileUpperBox, MobileVerticalDivider, NameTH, RegistrationTH, Spacer, StrongText, StyledDataTR, StyledTable, StyledThead, StyledTR, TextBox, UpperDataText, DataDateTH, DataEmailTH, THtext } from './styles'
import Image from "next/image";
import logo from "../../public/images/svg/logo.svg";
import { converterFormatoData } from '../utils/data-format';


const accountData = [
  {
    id: 8437,
    nationalRegistration: '110.659.947-02',
    accountOwner: 'Ivan Zichtl Santos',
    agency: '1234',
    accountNumber: '56789',
    accountDigit: '0',
    accountType: 'ccorrente',
    accountIdentifier: 'CONTA TESTE IVAN99',
    bank: '075',
    bankName: 'Banco ABN AMRO S.A.'
  },
  {
    id: 8439,
    nationalRegistration: '111.222.222-332',
    accountOwner: 'Ivan Teste Edit AccountXXX',
    agency: '1234299',
    accountNumber: '56789',
    accountDigit: '0',
    accountType: 'ccorrente',
    accountIdentifier: 'TESTE PUT REQUEST',
    bank: '025',
    bankName: 'Banco Alfa S.A.'
  },
  {
    id: 8442,
    nationalRegistration: '05.311.244/0001-09',
    accountOwner: 'Ivan Zichtl Santos',
    agency: '1234299',
    accountNumber: '1012101',
    accountDigit: null,
    accountType: 'ccorrente',
    accountIdentifier: 'CONTA PUT TESTE SETTIMEOUT',
    bank: '024',
    bankName: 'Banco BANDEPE S.A.'
  },
  {
    id: 8439,
    nationalRegistration: '111.222.222-332',
    accountOwner: 'Ivan Teste Edit AccountXXX',
    agency: '1234299',
    accountNumber: '56789299X',
    accountDigit: '0',
    accountType: 'ccorrente',
    accountIdentifier: 'TESTE PUT REQUEST',
    bank: '025',
    bankName: 'Banco Alfa S.A.'
  },
  {
    id: 8442,
    nationalRegistration: '05.311.244/0001-09',
    accountOwner: 'Ivan Zichtl Santos',
    agency: '1234299',
    accountNumber: '1012101',
    accountDigit: '0',
    accountType: 'ccorrente',
    accountIdentifier: 'CONTA PUT TESTE SETTIMEOUT',
    bank: '024',
    bankName: 'Banco BANDEPE S.A.'
  },
  {
    id: 8439,
    nationalRegistration: '111.222.222-332',
    accountOwner: 'Ivan Teste Edit AccountXXX',
    agency: '1234299',
    accountNumber: '56789299X',
    accountDigit: null,
    accountType: 'ccorrente',
    accountIdentifier: 'TESTE PUT REQUEST',
    bank: '025',
    bankName: 'Banco Alfa S.A.'
  },
  {
    id: 8442,
    nationalRegistration: '05.311.244/0001-09',
    accountOwner: 'Ivan Zichtl Santos',
    bank: '024',
    bankName: 'Banco BANDEPE S.A.',
    agency: '1234299',
    accountType: 'ccorrente',
    accountNumber: '1012101',
    accountDigit: '0',
    accountIdentifier: 'CONTA PUT TESTE SETTIMEOUT'
  }
]



const TabelaDados = ({ data }: any) => {
  return (
    <StyledTable>
    <StyledThead>
      <StyledTR>
        <NameTH>NOME</NameTH>
        <EmailTH>EMAIL</EmailTH>
        <DataTH>DATA</DataTH>
        <ActionTH></ActionTH>
      </StyledTR>
    </StyledThead>
    <tbody>
      {data.map((item: any) => {
        const userData = JSON.parse(item.mapjson)
        return (
          <StyledDataTR key={item.id}>
            <DataNameTH>
              <THtext>
                {userData.fullName}
              </THtext>
              </DataNameTH>
            <DataEmailTH>{userData.email}</DataEmailTH>
            <DataDateTH>{`${converterFormatoData(item.data)} - ${item.data.slice(11, 16)}`}</DataDateTH>
            {/* <DataDateTH>{`${converterFormatoData(item.data)} - ${item.data.slice(14, 19)}`}</DataDateTH> */}
            <DataActionTH>
            <a href={`loading?hash=${item.hash}`} target={'_blank'}>
              <ButtonIconBox
              >ACESSAR
              </ButtonIconBox>
              </a>
            </DataActionTH>
          </StyledDataTR>
      )
      })}
    </tbody>
  </StyledTable>
  );
};

export interface IInitalAddValues {
  id: number 
  birth: string
  data: string
  email: string
  hash: string
  agency: string
  mapjson: string
  submission_id: string
}

export interface InputProps {
  data: IInitalAddValues[]
  isMobile: boolean
}

const MapsTable: FC<InputProps> = (
  { data, isMobile } 
): ReactElement => {

    // console.debug(isMobile)

    return (
    <MainContainer>
      { isMobile && (
        <MobileContainer>
            {data.map((item: any, index: any) => {
              const userData = JSON.parse(item.mapjson)
              return (
                <MobileBox
                  key={index}
                >
                  <MobileUpperBox>

                  <TextBox>
                  <StrongText>{userData.fullName}</StrongText>
                  <UpperDataText>{userData.email}</UpperDataText>
                  <UpperDataText>{item.data}</UpperDataText>
                  </TextBox>
                  <Spacer />
                  <MobileButtonBox>
                    <a href={`loading?hash=${item.hash}`} target={'_blank'}>                  
                      <MobileButtonIconBox>
                        {'Acessar'}
                      </MobileButtonIconBox>
                    </a>
                  </MobileButtonBox>
                  </MobileUpperBox>
                </MobileBox>
              )
            })}
        </MobileContainer>
      )}
      { !isMobile && (
        <TabelaDados 
          data={data}
        />
      )}
    </MainContainer>
  )
}

export default MapsTable
