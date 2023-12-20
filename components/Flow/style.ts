import { NODE_AREA, NODE_SUBAREA } from '@/utils/colors'
import styled, { css } from 'styled-components'

export const FlowContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: 650px;
  width: 100%;
  margin: 0px;
  @media (max-width: 768px) {
    width: 100%;
    height: 650px;
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
`
export const StatusNodeText = styled.strong`
  position: relative;
  font-size: 12px;
  color: #fff;
  letter-spacing: 1.1px;
`


export const StatusControl = styled(styled.p``)<any>`
  position: relative;
  /* top: 4px; */
  font-size: 15px;
  padding: 0px 15px;
  font-weight: 600;
  letter-spacing: 1.1px;
  color: #fff;
  text-align: center;
`
export const StatusBox = styled(styled.div``)<any>`
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 40px;
  border-radius: 10px;
  ${props => props.statusColor && css`
    background-color: ${props.statusColor};
  `}
`
