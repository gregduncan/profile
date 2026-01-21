'use client';

export const theme = {
  colors: {
    primary: '#5f5050',
    primaryHover: '#776d6d',
    white: '#ffffff',
    text: '#333',
    textAlt: '#444348',
    grey: '#999999',
    orange: '#ffa500',
    background: '#efede4',
    backgroundHover: '#cbc9c1',
  },
  breakpoints: {
    md: '992px',
    mobile: '1070px',
  },
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '15px',
    lg: '30px',
    xl: '40px',
    xxl: '50px',
    xxxl: '60px',
  },
  fonts: {
    heading: "'Archivo Black', sans-serif",
    body: "'Open Sans', sans-serif",
    serif: 'Georgia',
  },
} as const;

export type Theme = typeof theme;
