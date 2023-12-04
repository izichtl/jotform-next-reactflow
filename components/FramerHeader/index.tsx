"use client"
import React, { useState } from "react";
import logo from "../../public/images/svg/logo.svg";
import Image from "next/image";
import { DivButton, HamburgerContainer, HamburgerIconContainer, HamburgerStripe, InsiderContainer, LogoBox, LogoContainer, LogoText, MenuContainer, MenuItem, NavContainer, Spacer } from "./styles";
import MenuModal from "../MenuHamburger";

interface Props {
  toggleTheme?(): void;
}

const FrameHeader: React.FC<Props> = ({ toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavContainer>
      <InsiderContainer>
        <LogoContainer
          href="http://mapadavida.com"
          target="_blank"
          rel="noopener"
        >
          <LogoBox>
              <Image src={logo} alt="Logotipo Bilheteria digital" />
              </LogoBox>
          <LogoText>
              {'mapadavida'}
          </LogoText>
        </LogoContainer>
        <Spacer />
        <MenuContainer>
        <MenuItem>
          <a
            href="https://lucassoares.substack.com/" 
            target="_blank"
            rel="noopener"
          >
            Newsletter
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://lifeflow.vercel.app/seu-mapa" 
            target="_blank"
            rel="noopener"
          >
            Meus Mapas
          </a>
        </MenuItem>
        <DivButton>
          <a
            href="https://form.jotform.com/232958011261653" 
            target="_blank"
            rel="noopener"
          >
            Crie seu mapa
          </a>
        </DivButton>

        <HamburgerIconContainer onClick={handleMenuToggle}>
            {/* <HamburgerIcon src={hamburgerIcon} alt="Menu Hamburger" /> */}
            {/* <HamburgerContainer> */}
              <HamburgerStripe />
              <HamburgerStripe />
            {/* </HamburgerContainer> */}
          </HamburgerIconContainer>
          <MenuModal isOpen={menuOpen} onRequestClose={handleMenuToggle} />
        </MenuContainer>
      </InsiderContainer>
    </NavContainer>
  );
};

export default FrameHeader;
