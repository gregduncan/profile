'use client';

import styled from 'styled-components';

export const CDListing = styled.div`
  p {
    font-size: 14px;
    margin-bottom: 15px;
    font-family: ${({ theme }) => theme.fonts.serif};
  }

  ul.listing {
    overflow: hidden;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
    font-style: italic;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.serif};
    margin-bottom: 30px;

    li {
      float: left;
      margin-right: 15px;

      a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }

      &.active a {
        color: ${({ theme }) => theme.colors.orange};
      }
    }
  }
`;

export const SpotifyButton = styled.a`
  width: 72px;
  height: 72px;
  background: url('/images/spotify.png') no-repeat center center;
  display: inline-block;

  &:hover {
    opacity: 0.8;
  }
`;
