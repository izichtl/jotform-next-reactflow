"use client"
import { FooterWrapper, CompanyInfo, Copyright, FooterWrapperX } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Copyright>
        <CompanyInfo>
          <p>Copyright © 2023 <a target="_blank" href='https://www.linkedin.com/in/lucas-soares/'>Soares</a> & <a target="_blank" href='https://www.linkedin.com/in/izichtl/'>Zichtl</a> - Todos os direitos reservados</p>
        </CompanyInfo>
      </Copyright>
    </FooterWrapper>
  )
}

export default Footer;