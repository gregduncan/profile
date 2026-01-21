'use client';

import styled from 'styled-components';

export const Page = styled.div`
  padding-top: 20px;

  h2 {
    font-size: 30px;
  }
`;

export const RowTop = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    display: none;
  }
`;

export const RowBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    div:last-child {
      display: none;
    }
    display: block;
  }
`;

export const Paper = styled.div`
  height: 300px;
  background: url('/images/home-middle.png') repeat-x top;
  margin: 0 5px 50px 5px;
  padding: 15px;

  &::after {
    position: relative;
    left: 100%;
    top: -270px;
    display: block;
    width: 27px;
    height: 328px;
    background-image: url('/images/home-middle-tape.png');
    content: '';
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    display: none;
  }
`;

export const RowMiddle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    display: block;
  }
`;

export const GDCD = styled.div`
  width: 468px;
  height: 198px;
  background: #ffffff url('/images/gdcd.png') no-repeat center center;

  &::before {
    position: relative;
    right: 25px;
    top: -75px;
    display: block;
    width: 27px;
    height: 328px;
    background-image: url('/images/home-middle-tape.png');
    content: '';
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
    height: auto;
    min-height: 198px;
    background-size: contain;
  }
`;

export const Tech = styled.div`
  width: 300px;
  height: 198px;
  background: #ffffff;
  padding: 15px;
  color: #444348;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 20px;

  .row {
    padding: 3px 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0;
  }

  span {
    color: #999999;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
    height: auto;
  }
`;

export const Project = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.serif};
  margin-bottom: 60px;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: #333;
    font-size: 14px;
    margin-bottom: 5px;
  }

  &.full p {
    font-size: 12px;
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 18px;
  }

  &.full .external {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-style: italic;
    font-weight: bold;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  h3 {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-style: italic;
    font-weight: bold;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    overflow: hidden;

    /* Remove padding from nested Row/Column on phone */
    > div {
      padding: 0 !important;

      > div {
        padding: 0 !important;
      }
    }
  }
`;

export const ProjectImage = styled.div<{ $variant?: string }>`
  float: left;
  margin: 0 15px 0 5px;
  width: 147px;
  height: 130px;
  background-image: url('/images/projects/sprite.png');
  box-shadow: 1px 2px 7px #333;

  ${({ $variant }) => {
    switch ($variant) {
      case 'gigraptor':
        return `
          background-image: url('/images/projects/gigraptor.svg');
          background-size: cover;
          background-position: center;
        `;
      case 'adaptjs':
        return `
          background-image: url('/images/projects/adaptjs.svg');
          background-size: cover;
          background-position: center;
        `;
      case 'managemmychain':
        return 'background-position: 0 -130px;';
      case 'portchesterbiz':
        return 'background-position: 0 -260px;';
      case 'partybelles':
        return 'background-position: 0 -390px;';
      case 'moneybox':
        return 'background-position: 0 -520px;';
      case 'ethnicraft':
        return 'background-position: 0 -650px;';
      case 'aqua':
        return 'background-position: 0 -780px;';
      case 'easyoffice':
        return 'background-position: 0 -910px;';
      case 'grc':
        return 'background-position: 0 -1050px;';
      case 'segmantics':
        return 'background-position: 0 -1170px;';
      case 'instant':
        return 'background-position: 0 -1300px;';
      default:
        return '';
    }
  }}

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    float: left;
    margin: 0 15px 15px 0;
  }
`;

export const ProjectDescription = styled.div`
  float: left;
  width: 350px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    float: none;
    width: auto;
    overflow: hidden;
  }
`;

export const ReadLink = styled.a`
  background: #efede4;
  border-radius: 3px;
  display: table;
  font-size: 12px;
  padding: 2px 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.serif};

  &:hover {
    background: #cbc9c1;
    text-decoration: none;
  }
`;
