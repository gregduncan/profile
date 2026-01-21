'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  a, abbr, acronym, address, article, aside, audio, b, blockquote, body,
  center, canvas, caption, cite, code, command, datalist, dd, del, details,
  dfn, dl, div, dt, em, embed, fieldset, figcaption, figure, footer, form,
  h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd,
  keygen, label, legend, li, meter, nav, object, ol, output, p, pre,
  progress, q, s, samp, section, small, span, source, strong, sub, sup,
  table, tbody, tfoot, thead, th, tr, td, video, u, ul, var {
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    background: transparent;
    vertical-align: top;
    font-size: 100%;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  table, table td {
    padding: 0;
    border: none;
    border-collapse: collapse;
  }

  img {
    vertical-align: bottom;
  }

  a img {
    border: none;
  }

  embed {
    vertical-align: top;
  }

  a {
    cursor: pointer;
  }

  iframe {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  /* Global styles */
  body {
    background: url('/images/bg.png');
    font-family: ${({ theme }) => theme.fonts.body};
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
  }

  /* Utility classes */
  .overflow {
    overflow: hidden;
  }

  .margin-bottom-15 {
    margin-bottom: 15px;
  }

  .margin-bottom-30 {
    margin-bottom: 30px;
  }

  .margin-top-10 {
    margin-top: 10px;
  }

  /* Responsive utilities */
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    iframe {
      width: 100% !important;
      max-width: 350px;
    }

    h2 {
      font-size: 24px;
    }
  }
`;
