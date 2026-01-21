'use client';

import styled from 'styled-components';

const inputStyles = `
  width: 200px;
  border: 3px solid #5f5050;
  border-radius: 3px;
  color: #5f5050;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  padding: 6px 12px;
  display: block;
  height: 34px;

  &:focus {
    outline: none;
    border-color: #5f5050;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
  height: 120px;
  resize: vertical;
`;
