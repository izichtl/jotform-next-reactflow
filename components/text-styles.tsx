import { LIGHT_GRAY, NODE_AREA, PRIMARY_GRAY, PRIMARY_GREEN, SECONDARY_GRAY } from "@/utils/colors";
import styled from "styled-components";

export const PageTitle = styled.h4`
  color: ${PRIMARY_GRAY};
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 40px;
  margin-bottom: 19px;
  @media (max-width: 768px) {
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 110% */
    margin-top: 27px;
    margin-bottom: 13px; 
    line-height: 140%;
  }
  `;

export const PageSubtitle = styled.p`
  color: ${PRIMARY_GRAY};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    line-height: 140%;
  }
`;

export const SecondTitle = styled.h4`
  color: ${PRIMARY_GRAY};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 35.2px; /* 110% */
  margin-bottom: 19px;
  @media (max-width: 768px) {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 110% */
    margin-bottom: 13px; 
  }
  `;

export const FormDivider = styled.div`
  background-color: ${LIGHT_GRAY};
  width: 100%;
  height: 2px;
  margin: 27px 0px;
  @media (max-width: 768px) {
  }
`;
