'use client'

import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import styles from './page.module.css'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = createTheme()

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={styles.container}>
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
