import App from 'next/app';
import React from 'react';
import {ThemeProvider} from 'styled-components';

import {Logo} from '../components';
import {theme, GlobalStyle} from '../styles';

// const INCONSOLATA =
// 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@577&display=swap';
const INCONSOLATA_GARAMOND =
  'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,615;1,400;1,615&family=Inconsolata:wght@577&display=swap';

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
      <>
        <link href={INCONSOLATA_GARAMOND} rel="stylesheet" />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <Logo />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </>
    );
  }
}
