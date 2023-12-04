import { PRIMARY_GRAY, SECONDARY_GRAY } from '@/utils/colors';
import styled, { css } from 'styled-components'


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px;
`



export const PageTitle = styled.h4`
  color: ${PRIMARY_GRAY};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 35.2px; /* 110% */
  margin-top: 40px;
  margin-bottom: 19px;
  @media (max-width: 768px) {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 110% */
    margin-top: 27px;
    margin-bottom: 13px; 
  }
  `;
export const SecondTitle = styled.h4`
  color: ${PRIMARY_GRAY};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 35.2px; /* 110% */
  margin-top: 40px;
  margin-bottom: 19px;
  @media (max-width: 768px) {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 110% */
    margin-top: 27px;
    margin-bottom: 13px; 
  }
  `;
export const PageSubtitle = styled.p`
  color: ${PRIMARY_GRAY};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const FormDivider = styled.div`
  background-color: ${SECONDARY_GRAY};
  width: 100%;
  height: 2px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 15px;
  /* background-color: rgb(1, 136, 104); */

`;
export const ReasonsChips = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  background-color: rgb(1, 136, 104);
  height: 30px;
  font-size: 14px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 50px;
  opacity: 1;
  margin: 5px 5px;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  letter-spacing: 0;
  text-transform: none;
  text-decoration: none;
  line-height: 1.2em;
  text-align: start;

  @media (max-width: 768px) {
    height: 24px;
  font-size: 12px;
  padding-left: 12px;
  padding-right: 12px;
  }
`;
export const NotSelectedReasonsChips = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: 30px;
  font-size: 14px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 50px;
  opacity: 1;
  margin: 5px 5px;
  font-style: normal;
  font-weight: 400;
  color: ${PRIMARY_GRAY};
  border: 1px solid ${PRIMARY_GRAY};
  letter-spacing: 0;
  text-transform: none;
  text-decoration: none;
  line-height: 1.2em;
  text-align: start;

  @media (max-width: 768px) {
    height: 24px;
  font-size: 12px;
  padding-left: 12px;
  padding-right: 12px;
  }
`;