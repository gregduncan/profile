'use client';

import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    border-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;
