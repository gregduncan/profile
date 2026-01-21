'use client';

import styled from 'styled-components';
import { NavContainer } from '../components/nav-menu/nav-menu.styles';

export const StyledContainer = styled.div`
  padding: 0;
  max-width: 1175px;
  margin: 0 auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;

export const NavWrapper = styled(NavContainer)``;

export const Content = styled.div`
  padding-right: 0;
  padding-left: 0;
`;

export const ContentInner = styled.div`
  min-height: 700px;
  padding-bottom: 50px;
`;

export const Masthead = styled.div`
  margin-left: 60px;
  height: 295px;
  background: url('/images/header.png') repeat-x bottom;

  &::before {
    position: relative;
    left: -60px;
    display: inline-block;
    float: left;
    width: 60px;
    height: 295px;
    background: url('/images/header-left.png') no-repeat bottom;
    content: '';
  }

  &::after {
    display: inline-block;
    float: right;
    width: 600px;
    height: 295px;
    background: url('/images/header-right-new-new.png') no-repeat bottom;
    content: '';
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
    height: auto;
    background: none;
    margin-bottom: 30px;

    &::before {
      display: none;
    }

    &::after {
      display: none;
    }
  }
`;

export const Logo = styled.a`
  position: relative;
  top: 68px;
  right: 40px;
  display: inline-block;
  width: 340px;
  height: 140px;
  background: url('/images/logo.png') no-repeat;

  &::after {
    position: relative;
    top: 150px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.primary};
    content: 'u.i developer / programmer';
    text-transform: uppercase;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
    top: 0;
    right: 0;
    display: inline-block;
    width: 340px;
    height: 140px;
    background: url('/images/logo.png') no-repeat;

    &::after {
      display: none;
    }
  }
`;

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const MainColumn = styled.div`
  grid-column: span 9;
  padding-right: 15px;
  padding-left: 15px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: auto;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
  }
`;

export const SidebarColumn = styled.div`
  grid-column: span 3;
  padding-right: 15px;
  padding-left: 15px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Sidebar = styled.div`
  width: 240px;
  padding: 40px 30px 0 30px;
  min-height: 240px;
  background: url('/images/rhs.png') no-repeat;
  float: right;
  margin-bottom: 50px;

  &::after {
    position: relative;
    right: 30px;
    display: block;
    width: 300px;
    height: 40px;
    background: url('/images/rhs-bottom.png') no-repeat bottom;
    content: '';
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    line-height: 25px;
  }

  h3 {
    margin: 40px 0 10px 0;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: 25px;
  }

  p {
    color: #fff;
  }

  ul > li {
    margin-bottom: 15px;
  }
`;

export const Recommends = styled.div`
  width: 224px;
  height: 224px;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background: url('/images/recommends.png') no-repeat bottom;

  > a {
    display: block;
    width: 224px;
    height: 180px;

    &:hover {
      background: #000;
      opacity: 0.3;
    }
  }
`;
