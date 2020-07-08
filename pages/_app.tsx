import React           from 'react';
import {AppProps}                 from 'next/app'
import {mainTheme, ThemeProvider} from '@Templates/theming';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider value={mainTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp