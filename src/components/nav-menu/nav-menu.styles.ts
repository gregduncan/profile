'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const NavContainer = styled.nav`
  position: absolute;
  top: 0;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.heading};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    position: relative;
    margin-bottom: 5px;
  }
`;

export const NavList = styled.ul`
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li<{ $active: boolean }>`
  float: left;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: 0 3px;
    float: none;
  }

  a {
    display: block;
    padding: 10px 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    text-decoration: none;
    background: ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
    color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.primary)};
    text-shadow: none;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
      padding: 5px;
      font-size: 14px;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      text-shadow: none;
    }
  }
`;
