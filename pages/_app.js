import * as React from 'react'
import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import '../styles/modern.css'
import '../styles/effects.css'

function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.style.display = 'block'
    document.body.style.visibility = 'visible'
  }, [])

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
