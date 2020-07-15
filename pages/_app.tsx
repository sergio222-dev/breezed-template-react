import React                      from 'react';
import {AppProps}                 from 'next/app'
import {mainTheme, ThemeProvider} from '../settings/theming';
import {Provider}                 from 'react-redux';
import {store}                    from '../libs/framework';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider value={mainTheme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp