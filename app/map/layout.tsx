'use client'

import { useEffect } from 'react'

// import AOS from 'aos'
// import 'aos/dist/aos.css'

// import Footer from '@/components/ui/footer'
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
