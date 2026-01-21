'use client';

import styled from 'styled-components';

export const TrackContainer = styled.div`
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.serif};
  margin-bottom: 30px;

  > img {
    float: left;
    margin-right: 10px;
  }

  > h3 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  > h4 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 12px;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 5px;
  }

  > p {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 12px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    > img {
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`;
