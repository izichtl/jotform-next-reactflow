'use client'
import { useTheme } from '@mui/material/styles';
import Footer from '@/components/Footer/index'
import { StyledMain } from '../general-styles'
import FrameHeader from '@/components/FramerHeader'
import { Container } from './style'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  const theme = useTheme();
  return (
    <Container
      background={theme.palette.background.default}
    >
      <FrameHeader />
        <StyledMain>
        {children}
        </StyledMain>
      <Footer />
    </Container>
  )
}
