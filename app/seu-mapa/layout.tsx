'use client'

import Footer from '@/components/Footer/index'
import { StyledMain } from '../general-styles'
import FrameHeader from '@/components/FramerHeader'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return (
    <>
      <FrameHeader />
        <StyledMain>
        {children}
        </StyledMain>
      <Footer />
    </>
  )
}
