import { PRIMARY_GRAY, PRIMARY_GREEN, SECONDARY_GRAY } from '@/utils/colors'
import styled from 'styled-components'

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
    padding: 0px 100px;
    background-color: "#F8F8FF";
    @media (max-width: 768px) {
    padding: 30px;
  }
`
