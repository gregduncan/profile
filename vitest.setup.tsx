import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Mock next/router
vi.mock('next/router', () => ({
  useRouter: vi.fn(() => ({
    pathname: '/',
    query: {},
    asPath: '/',
    push: vi.fn(),
    replace: vi.fn(),
    reload: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn().mockResolvedValue(undefined),
    beforePopState: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
    isFallback: false,
    isReady: true,
    isPreview: false,
  })),
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  },
}));

// Mock next/head
vi.mock('next/head', () => ({
  default: ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
  },
}));

// Mock window.Email (SMTP.js)
Object.defineProperty(window, 'Email', {
  value: {
    send: vi.fn().mockResolvedValue('OK'),
  },
  writable: true,
});

// Mock window.gtag (Google Analytics)
Object.defineProperty(window, 'gtag', {
  value: vi.fn(),
  writable: true,
});

// Mock window.dataLayer
Object.defineProperty(window, 'dataLayer', {
  value: [],
  writable: true,
});
