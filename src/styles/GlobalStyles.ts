import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --black: #000;
    --white: #FFF;
    --gray: #EEE;
    --text-black: #151812;
    --text-dark: #333333 ;
    --text-white: #f2f2f2;
    --primary: #d2ff4d;
    --secondary: #FFF;
    --shadow: #808080;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body #root {
    height: 100%;
  }

  body {
    font-family: 'Noto Sans JP', sans-serif;
  }
`