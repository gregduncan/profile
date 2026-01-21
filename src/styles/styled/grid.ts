'use client';

import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  max-width: 1175px;
  margin: 0 auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const Column = styled.div<{ $span: number }>`
  grid-column: span ${({ $span }) => $span};
  padding-right: 15px;
  padding-left: 15px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: auto;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-bottom: 20px;
  }
`;