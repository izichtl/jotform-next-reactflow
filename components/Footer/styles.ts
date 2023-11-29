import { DARK_GRAY, PRIMARY_GRAY, PRIMARY_GREEN, SECONDARY_GRAY } from '@/utils/colors'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background: ${DARK_GRAY};
  color: white;
  box-sizing: border-box;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
    font-weight: 500;
    font-size: 16px;
    color: #FFF;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 15px;
    }
`