import styled from "styled-components";
import { PRIMARY_GRAY, PRIMARY_GREEN, SECONDARY_GRAY } from "@/utils/colors";

export const Container = styled.div`
  display: flex;
  height: 70px;
  background: ${PRIMARY_GREEN};
  color: ${PRIMARY_GRAY};
  padding: 3vh 12vw;
  border-bottom: 1px solid ${SECONDARY_GRAY};
  @media (max-width: 768px) {
    height: 63px;
    padding: 16px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1728px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const LogoBox = styled.div`
  /* margin-right: 60px; */
  width: 60px;
  height: 60px;
  
  @media (max-width: 1640px) {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    height: 45px;
    width: 45px;
    /* padding: 16px; */
  }
`;

export const ImgSwitch = styled.img``;

export const VerticalDivider = styled.div`
  width: 4px;
  height: 40px;
  background-color: ${PRIMARY_GRAY};
  border-radius: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HalfHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;
export const LogoText = styled.strong`
  position: relative;
  left: -30px;
  @media (max-width: 768px) {
    left: -3px;
  }
`;
export const LinkText = styled.strong`
  font-size: 17px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const OtherHalf = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

export const MenuOptionContainer = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MenuOptionText = styled.a`
  font-weight: 500;
  font-size: 1rem;
`;

export const HamburgerIconContainer = styled.div`
  display: none; 

  @media (max-width: 1000px) {
    display: block; 
    cursor: pointer;
  }
`;

export const HamburgerIcon = styled.img`
  display: block;
`;
