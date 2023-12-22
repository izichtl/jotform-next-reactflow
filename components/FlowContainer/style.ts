import { NODE_AREA, PRIMARY_GRAY, SECONDARY_GRAY } from '@/utils/colors';
import styled, { css } from 'styled-components'


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px;
`

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
`;

export const ModalTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  margin-top: 30px;
  padding: 10px;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: rgb(228,238,225);
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 30px;
  background-color: rgb(228,238,225);
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

export const NewSearchButton = styled.button`
  display: flex;
  width: 300px;
  height: 40px;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 30px;
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: 0.08px;
  background: ${NODE_AREA};
  margin: 20px auto;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 90%;
    margin: 20px auto;
  }
`;