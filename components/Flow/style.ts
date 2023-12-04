import { NODE_AREA, NODE_SUBAREA } from '@/utils/colors'
import styled, { css } from 'styled-components'

export const FlowContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100vh;
  width: 100%;
  margin: 0px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`

//  MAIN NODE STYLES
export const NodeIconContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: -63px;
`
export const IconControl = styled.p`
  font-size: 35px;
  margin-bottom: 10px;
`
export const TextNode = styled.strong`
  font-size: 13px;
`

//  AREA NODE STYLES
export const AreaNodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${NODE_AREA};
  height: 36px;
  width: 100px;
  border-radius: 30px;
`
export const AreaIconControl = styled.p`
  font-size: 35px;
  width: 100%;
  text-align: center;
  margin-top: 5px;
`
export const AreaNodeText = styled.strong`
  font-size: 13px;
  color: #fff;
  font-weight: 400;
  letter-spacing: 1.2px;
`

// STATUS NODE STYLES
export const NodeStyleContainer = styled.div`
  width: 160px;
  background-color: ${NODE_SUBAREA};
  padding: 15px;
  border-radius: 5px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* :hover {
    HOVER INFO BALLON
    background-color: yellow;
  } */
`
export const StatusNodeText = styled.strong`
  position: relative;
  top: 10px;
  font-size: 12px;
  color: #fff;
  letter-spacing: 1.1px;
`


export const StatusControl = styled(styled.p``)<any>`
  position: relative;
  top: 12px;
  font-size: 10px;
  padding: 3px 10px;
  font-weight: 600;
  letter-spacing: 1.1px;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  width: max-content;
  ${props => props.statusColor && css`
    background-color: ${props.statusColor};
  `}

`
export const StatusBox = styled.div`
  width: 100%;
/* background-color: red; */
  /* position: relative; */
  padding: 10px;
  /* top: 10px; */
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.1px;
`
