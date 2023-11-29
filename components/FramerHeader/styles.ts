import styled from "styled-components";
import { PRIMARY_GRAY, PRIMARY_GREEN, SECONDARY_GRAY } from "@/utils/colors";

// export const Container = styled.div`
//   display: flex;
//   height: 70px;
//   background: ${PRIMARY_GREEN};
//   color: ${PRIMARY_GRAY};
//   padding: 3vh 12vw;
//   border-bottom: 1px solid ${SECONDARY_GRAY};
//   @media (max-width: 768px) {
//     height: 63px;
//     padding: 16px;
//   }
// `;
export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.07);
  border-left-width: 0px;
  border-right-width: 0px;
  border-style: solid;
  border-top-width: 0px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  opacity: 1;
  /* display: flex;
  height: 70px;
  background: ${PRIMARY_GREEN};
  color: ${PRIMARY_GRAY};
  padding: 3vh 12vw;
  border-bottom: 1px solid ${SECONDARY_GRAY}; */
  height: 64px;
  padding: 20px 55px;
  @media (max-width: 768px) {
    height: 60px;
    padding: 20px 30px;
  }
`;
export const InsiderContainer = styled.nav`
  width: 100%;
  height: 36px;
  display: flex;
  flex-direction: row;
  
  @media (max-width: 768px) {
    height: 36px;
  }
`;

export const LogoBox = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row */
  width: 36px;
  height: 36px;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row
  width: 150px;
  height: 36px;
  @media (max-width: 768px) {
    width: 150px;
    height: 36px;
  }
`;
export const LogoText = styled.p`
  font-style: normal;
  font-weight: 600;
  color: #333;
  font-size: 16px;
  letter-spacing: 0;
  text-transform: none;
  text-decoration: none;
  line-height: 1.2em;
  text-align: start;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Spacer = styled.div`
  /* width: 100%; */
  flex-grow: 1;
  @media (max-width: 768px) {
    /* width: 150px;
    height: 36px; */
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row
  width: max-content;
  height: 36px;
  @media (max-width: 768px) {
  }
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
  margin-right: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
    display: none;
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