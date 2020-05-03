import App from 'next/app';
import React from 'react';
import {ThemeProvider} from 'styled-components';

import {Logo, Disclaimer} from '../components';
import {theme, GlobalStyle} from '../styles';

// const INCONSOLATA =
// 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@577&display=swap';
const INCONSOLATA_GARAMOND =
  '<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@0;1&family=Inconsolata:wght@420&display=swap" rel="stylesheet">';

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
            <Disclaimer />
          </>
        </ThemeProvider>
      </>
    );
  }
}
