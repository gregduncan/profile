'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/styled/theme';
import { GlobalStyles } from '../styles/styled/globalStyles';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
