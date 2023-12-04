// modalStyles.tsx
import styled from "styled-components";
// @ts-ignore
import Modal from "react-modal";

export const CustomModal = styled(Modal)`
  position: fixed;
  top: 94px;
  background-color: #fff;;
  border: none;
  padding: 20px;
  width: 239px;
  height: 100%;
  max-width: 90%;
  outline: none;
  @media (max-width: 768px) {
    top: 63px;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.p`
  font-style: normal;
  font-weight: 500;
  color: #000;
  font-size: 16px;
  letter-spacing: 0;
  text-transform: none;
  text-decoration: none;
  line-height: 1.2em;
  text-align: start;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 36px;
  background-color: rgb(1, 136, 104);
  border-radius: 50px;
  opacity: 1;
  padding: 0px 15px;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0;
  text-transform: none;
  text-decoration: none;
  line-height: 1.2em;
  text-align: start;
  @media (max-width: 768px) {
  }
`;