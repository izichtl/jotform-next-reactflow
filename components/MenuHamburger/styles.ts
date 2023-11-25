// modalStyles.tsx
import styled from "styled-components";
// @ts-ignore
import Modal from "react-modal";

export const CustomModal = styled(Modal)`
  position: fixed;
  top: 94px;

  background-color: #fff;
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

export const MenuItem = styled.a`
  font-weight: 500;
  font-size: 1rem;
  margin: 10px 0;
  color: #333;

  &:hover {
    color: #121926;
  }
`;
