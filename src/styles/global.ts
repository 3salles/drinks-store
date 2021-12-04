import {  css } from "@emotion/react";

export const  GlobalStyle = css`
  :root {
    --white: #ffffff;
    --gray-100: #E7E9EE;
    --pink-300: #EE5B96;
    --pink-500: #8B0E40;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }
  body {
    background: var(--gray-100);
    -webkit-font-smoothing: antialiased;
  }
  border-style, input, textarea, button {
    font-family: 'M PLUS 1', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
    outline: 0;
    border: 0;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
 }

 .react-modal-overlay {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  .flags-select {
    width: 18.75rem;
  }
`