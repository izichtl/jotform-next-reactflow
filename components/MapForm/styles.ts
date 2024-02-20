// modalStyles.tsx
import styled, {css} from "styled-components";
// @ts-ignore
import Modal from "react-modal";
import { NODE_AREA, PRIMARY_ERROR, PRIMARY_GRAY, PRIMARY_GREEN, SECONDARY_BLUE, SECONDARY_GRAY } from "@/utils/colors";

export const StyledForm = styled(styled.form``)`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
`;
export const FormEmailContainer = styled(styled.div``)`
  display: flex;
  /* height: 200px; */
  width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
  `;
export const DayContainer = styled(styled.div``)`
  width: 25%;
  `;
export const MountContainer = styled(styled.div``)`
  width: 25%;
  `;
export const YearContainer = styled(styled.div``)`
  width: 50%;
  `;
export const FormBirthContainer = styled(styled.div``)`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 110px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const CellContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5px;
  height: 110px;
  width: 100%;
`;

export const NameField = styled(styled.label``)`
  color: ${PRIMARY_GRAY};
  font-family: var(--font-noto-Serif);
  font-size: 15px;
  font-weight: 500;
`;
export const ErrorMsg = styled(styled.div``)`
  color: ${PRIMARY_ERROR};
  font-size: 12px;
  font-weight: 500;
`;
export const StyledInput = styled(styled.input``)<any>`
  color: ${PRIMARY_GRAY};
  border-radius: 5px;
  border: 1px solid ${PRIMARY_GRAY};
  font-size: 14px;
  font-weight: 500;
  ${props => props.error && css`
    border: 1px solid ${PRIMARY_ERROR};
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 5px;
  height: 110px;
  width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  width: 240px;
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
  line-height: 150%;
  letter-spacing: 0.08px;
  background: ${NODE_AREA};
  cursor: pointer;
  margin:5px;
  @media (max-width: 768px) {
    width: 50%;
    margin:5px;
  }
`;

export const CancelButton = styled.button`
  display: flex;
  width: 240px;
  height: 52px;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid ${SECONDARY_GRAY};
  color: ${SECONDARY_GRAY};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: 0.08px;
  background: ${SECONDARY_BLUE};
  cursor: pointer;
  margin:5px;
  @media (max-width: 768px) {
    width: 50%;
    /* max-width: 50%; */
    margin:5px;
  }
`;