'use client'

import Footer from '@/components/Footer/index'
import { StyledMain } from '../general-styles'
import FrameHeader from '@/components/FramerHeader'
import { Container } from './style'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return (
    <Container>
      <FrameHeader />
        <StyledMain>
        {children}
        </StyledMain>
      <Footer />
    </Container>
  )
}
