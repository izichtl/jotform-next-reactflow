import { PRIMARY_GRAY, PRIMARY_GREEN, SECONDARY_GRAY } from "@/utils/colors";
import styled from "styled-components";

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

export const PageTitle = styled.h4`
  color: ${PRIMARY_GRAY};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 35.2px; /* 110% */
  margin-top: 40px;
  margin-bottom: 19px;
  @media (max-width: 768px) {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 110% */
    margin-top: 27px;
    margin-bottom: 13px; 
  }
  `;
export const PageSubtitle = styled.p`
  color: ${PRIMARY_GRAY};
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const FormDivider = styled.div`
  background-color: ${SECONDARY_GRAY};
  width: 100%;
  height: 2px;
  margin-top: 29px;
  margin-bottom: 42px;
  @media (max-width: 768px) {
    margin-top: 29px;
    margin-bottom: 42px;
  }
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
  border-radius: 5px;
  color: ${PRIMARY_GRAY};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: 0.08px;
  background: ${PRIMARY_GREEN};
  margin: 20px auto;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 90%;
    /* max-width: 50%; */
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
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;