import { createGlobalStyle } from 'styled-components'
import { fluidFontSize } from './utils'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: sans-serif;
  }
  html {
    font-size: 100%;
    line-height: 1.15;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body,
  #___gatsby {
    margin: 0;
    min-height: 100vh;
  }
  #gatsby-focus-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  main {
    flex: 1;
    display: block;
  }
  hr {
    height: 0;
    overflow: visible;
  }
  a {
    background-color: transparent;
    text-decoration: 'none',
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  ul,
  ul[class] {
    padding: 0;
    list-style: none;
  }
  b,
  strong {
    font-weight: bolder;
  }
  h1 {
   ${fluidFontSize(26, 50)}
  }
  h2 {
    ${fluidFontSize(28, 48)}
  }
  h3 {
    ${fluidFontSize(24, 38)}
  }
  h4 {
    ${fluidFontSize(18, 32)}
  }
  h5 {
    ${fluidFontSize(16, 28)}
  }
  p, 
  li {
    ${fluidFontSize(14, 20)}
  }
  small {
    ${fluidFontSize(7, 9)}
  }
  img {
    display: block;
    max-width: 100%;
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    border-style: none;
    padding: 0;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    padding: 0;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  details {
    display: block;
  }
  [hidden] {
    display: none;
  }
`

export default GlobalStyle