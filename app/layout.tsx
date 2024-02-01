'use client'
import './css/style.css'
import { Inter, Oxygen, Roboto, Roboto_Mono } from 'next/font/google'
import StyleRegistry from './registry'
import Banner from '@/components/banner'
import { useTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400','700']
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400','700'],
  variable: '--font-roboto',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const theme = useTheme();

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
      <body className={`${oxygen.className} ${roboto.className} ${robotoMono.variable} antialiased bg-white text-gray-900 tracking-tight`}>
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


