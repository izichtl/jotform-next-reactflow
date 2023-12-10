import { NODE_AREA, PRIMARY_GRAY, PRIMARY_GREEN, SECONDARY_GRAY } from "@/utils/colors";
import styled from "styled-components";

export const MainContainer = styled(styled.div``)`
  padding: 0px 12vh;
  @media (max-width: 768px) {
    padding: 0px 2vh;
  }
  
`;

export const FormContainer = styled(styled.div``)`
  display: flex;
  height: 200px;
  width: 100%;
  
`;
export const ListOfMapsContainer = styled(styled.div``)`
  display: flex;
  flex-direction: column;
  /* height: 200px; */
  width: 100%;
`;
export const StyledTR = styled(styled.tr``)`
  height: 50px;
`;

export const NewSearchButton = styled.button`
  display: flex;
  width: 379px;
  height: 52px;
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

export const NoDataContainer = styled(styled.div``)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;  
`;

export const NoDataText = styled.p`
  color: ${PRIMARY_GRAY};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 7px 5px; 
  @media (max-width: 768px) {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;