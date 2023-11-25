/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useState } from "react";
import MenuModal from "../MenuHamburger";

import {
  Container,
  HalfHeader,
  OtherHalf,
  VerticalDivider,
  ContentContainer,
  HamburgerIconContainer,
  LogoBox,
  LogoText,
  LinkText,
} from "./styles";
import logo from "../../public/images/svg/logo.svg";
import hamburgerIcon from "../../public/images/svg/menu-hamburger.svg";
import Image from "next/image";

interface Props {
  toggleTheme?(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <ContentContainer>
        <HalfHeader>
          <a href={'/'} target="_blank" rel="noreferrer">
            <LogoBox>
              <Image src={logo} alt="Logotipo Bilheteria digital" />
            </LogoBox>
          </a>
            <LogoText>{'MAPA DA VIDA'}</LogoText>
          <VerticalDivider />
        </HalfHeader>
        <OtherHalf>
          <a href={'/seu-mapa'} rel="noreferrer"><LinkText>{'Mapas'}</LinkText></a>
          <a href={'/comunidade'} target="_blank" rel="noreferrer"><LinkText>{'Comunidade'}</LinkText></a>
          <a href={'/sobre'} target="_blank" rel="noreferrer"><LinkText>{'Sobre'}</LinkText></a>
          <HamburgerIconContainer onClick={handleMenuToggle}>
            <Image src={hamburgerIcon} alt="Menu Hamburger" />
          </HamburgerIconContainer>
          <MenuModal isOpen={menuOpen} onRequestClose={handleMenuToggle} />
        </OtherHalf>
      </ContentContainer>
    </Container>
  );
};

export default Header;
