import styled from 'styled-components'
// import { DASHCOLORS } from '..'
import { NODE_AREA, PRIMARY_GRAY, PRIMARY_GREEN,  } from "@/utils/colors";

export const MainContainer = styled(styled.div``)`
`

// MOBILE VERSION
//
//
export const MobileContainer = styled(styled.div``)`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const MobileBox = styled(styled.div``)`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${PRIMARY_GRAY};
  background: #FFF;
  padding-bottom: 16px;
  margin-bottom: 16px;
`

export const MobileUpperBox = styled(styled.div``)`
  width: 100%;
  padding: 16px 16px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: row;
`

export const MobileBottomBox = styled(styled.div``)`
  padding: 0px 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
`

export const MobileButtonBox = styled(styled.div``)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export const StrongText = styled(styled.p``)`
  color: ${PRIMARY_GRAY};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 10.6px;
`
export const UpperDataText = styled(styled.p``)`
  color: ${PRIMARY_GRAY};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 13.6px;
  margin-top: 7px;
`
export const BottomDataText = styled(styled.p``)`
  color: ${PRIMARY_GREEN};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 13.6px;
`

export const TextBox = styled(styled.div``)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const MobileButtonIconBox = styled(styled.button``)`
  border-radius: 30px;
  background-color: ${NODE_AREA};
  display: flex;
  width: max-content;
  height: 36px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin-left: 6px;
  cursor: pointer;
  color: #fff;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 10.6px;
`
export const MobileDivider = styled.div`
  height: 1px;
  margin: 0px 16px;
  margin-top: 10px;
  margin-bottom: 16px;
  border-top: 1px solid ${PRIMARY_GREEN};
`

export const MobileVerticalDivider = styled.div`
  background-color: ${PRIMARY_GREEN};
  height: 12px;
  width: 1px;
  margin: 0px 16px;

`

export const Spacer = styled(styled.div``)`
  flex-grow: 1;
`

// DESKTOP VERSION
//
//
const nameWidth: string = '30%'
const cpfWidth: string = '25%'
const bankWidth: string = '25%'
const actionWidth: string = '20%'

export const Container = styled(styled.div``)`
  height: 100%;
`

export const StyledTable = styled(styled.table``)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
`

export const StyledThead = styled(styled.thead``)`
  display: flex;
  width: 100%;
`

export const StyledTR = styled(styled.tr``)`
  display: flex;
  width: 100%;
  height: 30px;
`

export const StyledDataTR = styled(styled.tr``)`
  display: flex;
  width: 100%;
  height: 40px;
`

export const BaseStyleTH = styled(styled.th``)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 17px;
  color: ${PRIMARY_GRAY};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.6px;
`

export const NameTH = styled(BaseStyleTH)`
  width: ${nameWidth};
`
export const EmailTH = styled(BaseStyleTH)`
  width: ${cpfWidth};
`
export const DataTH = styled(BaseStyleTH)`
  width: ${bankWidth};
`
export const ActionTH = styled(BaseStyleTH)`
  width: ${actionWidth};
`

export const BaseDataTH = styled(styled.th``)`
  align-items: center;
  background-color: #fff;
  margin-top: 16px;
  margin-bottom: 16px;
  color: ${PRIMARY_GRAY};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.6px;
  height: 22px;
`
export const THtext = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const DataNameTH = styled(BaseDataTH)`
  width: ${nameWidth};
  display: flex;
  justify-content: center;
  padding-left: 17px;
  border-right: 1px solid ${PRIMARY_GRAY};
  text-align: left;
`

export const DataEmailTH = styled(BaseDataTH)`
  width: ${cpfWidth};
  display: flex;
  justify-content: center;
  padding-left: 17px;
  border-right: 1px solid ${PRIMARY_GRAY};
  border-left: 1px solid ${PRIMARY_GRAY};
`

export const DataDateTH = styled(BaseDataTH)`
  width: ${bankWidth};
  display: flex;
  justify-content: center;
  padding-left: 17px;
  border-right: 1px solid ${PRIMARY_GRAY};
  border-left: 1px solid ${PRIMARY_GRAY};
`

export const DataActionTH = styled(BaseDataTH)`
  width: ${actionWidth};
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  border-left: 1px solid ${PRIMARY_GRAY};
`

export const ButtonIconBox = styled(styled.button``)`
  border-radius: 85px;
  border: 1px solid ${PRIMARY_GRAY};
  background-color: ${NODE_AREA};
  display: flex;
  width: max-content;
  height: 36px;
  padding: 10px;
  /* padding-top: 16px; */
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin-left: 6px;
  cursor: pointer;
  color: #fff;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 10.6px;
`

export const LogoBox = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
