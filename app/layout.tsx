'use client'
import './css/style.css'
import { Oxygen, Noto_Serif } from 'next/font/google'
import StyleRegistry from './registry'
import Banner from '@/components/banner'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400','700'],
  variable: '--font-oxygen',
})

const noto_Serif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-noto-Serif',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const theme = createTheme({
    palette: {
      primary: {
        main: '#018868',
      },
      secondary: {
        main: '#A52A2A',
      },
      success: {
        main: '#83C16C',
      },
      error: {
        main: '#D32F2F',
      },
      warning: {
        main: '#EF6C00',
      },
      info: {
        main: '#D32F2F',
      },
      background: {
        // @ts-ignore
        default: '#E3E5E5',
      },
    },
  });

  return (
    <html lang="en">
      <body className={`${noto_Serif.variable} ${oxygen.variable} antialiased bg-white text-gray-900 tracking-tight`}>
      <ThemeProvider theme={theme}>
        <StyleRegistry>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
            <Banner />
          </div>
      </StyleRegistry>
      </ThemeProvider>
      </body>
    </html>
  )
}


