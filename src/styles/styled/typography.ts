'use client';

import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Heading2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 30px;
`;

export const Heading3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Heading4 = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Paragraph = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
  font-family: ${({ theme }) => theme.fonts.serif};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
