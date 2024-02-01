import styled, { css } from 'styled-components'


export const Container = styled(styled.div``)<any>`
  padding: 0px;
  ${props => props.background !== undefined && css`
      background-color: ${props.background};
  `}
`

