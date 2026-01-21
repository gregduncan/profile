'use client';

import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0;

  h4 {
    color: #333333;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 16px;
    font-style: italic;
    padding-bottom: 5px;
    font-weight: bold;
  }

  ul {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 13px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;
