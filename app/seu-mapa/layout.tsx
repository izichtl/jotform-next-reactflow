'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer/index'
import { StyledMain } from '../general-styles'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return (
    <>
      <Header />
        <StyledMain>
        {children}
        </StyledMain>
      <Footer />
    </>
  )
}
