"use client"
import { FooterWrapper, CompanyInfo, Copyright } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Copyright>
        <CompanyInfo>
          <p>
            {'Copyright © 2023 '}
            <a
              target="_blank" 
              href='https://www.mapdavida.com.br'
              >
                {'Mapa da Vida'}
            </a>
          </p>
        </CompanyInfo>
      </Copyright>
    </FooterWrapper>
  )
}

export default Footer;