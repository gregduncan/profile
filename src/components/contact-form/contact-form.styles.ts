'use client';

import styled from 'styled-components';

export const FormContainer = styled.form`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 15px;
    }
  }
`;

export const SuccessMessage = styled.div`
  h2 {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    line-height: 25px;
  }

  p {
    font-size: 14px;
    margin-bottom: 15px;
    font-family: ${({ theme }) => theme.fonts.serif};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 14px;
`;
