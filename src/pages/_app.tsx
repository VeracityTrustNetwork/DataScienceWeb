import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'theme'
import './app.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Data Science Workshop</title>
        <link rel="shortcut icon" href="/img/fav.png" />
        <link rel="apple-touch-icon" href="/img/fav.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Data Science Event - VTN" />
      </Head>
      
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
