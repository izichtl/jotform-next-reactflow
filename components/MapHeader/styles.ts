import { PRIMARY_GRAY, PRIMARY_GREEN, SECONDARY_GRAY } from '@/utils/colors'
import styled from 'styled-components'


export const MapHeaderContainer = styled.div`
  display: flex;
  /* flex-grow: 1; */
  height: max-content;
  padding-top: 16px;
  padding-bottom: 16px;
  /* background: ${PRIMARY_GREEN};
  color: white;
  border-top: 5px solid ${SECONDARY_GRAY};
  box-sizing: border-box;
  margin-top: 100px; */
`

export const CompanyInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    line-height: 20px;
    @media (max-width: 768px) {
      font-size: 12px;
    }
`

export const Copyright = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3vh 12vw;
    font-weight: 400;
    font-size: 16px;
    color: ${PRIMARY_GRAY};
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 15px;
    }
`