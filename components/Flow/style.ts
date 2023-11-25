import styled, { css } from 'styled-components'


export const FlowContainer = styled.div`
  padding: 0px;
  height: 700px;
  width: 100%;
`

//  ICON NODE STYLES
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



// STATUS NODE STYLES
export const NodeStyleContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 12px;
  /* :hover {
    HOVER INFO BALLON
    background-color: yellow;
  } */
`
export const StatusControl = styled.p`
  position: relative;
  top: 10px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.1px;
`
