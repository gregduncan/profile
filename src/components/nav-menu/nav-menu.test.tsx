import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { NavMenu } from '.';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('NavMenu', () => {
  beforeEach(() => {
    vi.mocked(useRouter).mockReturnValue({
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
      basePath: '',
      route: '/',
      forward: vi.fn(),
    });
  });

  it('renders all navigation links', () => {
    render(<NavMenu />);
    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('projects')).toBeInTheDocument();
    expect(screen.getByText('skills')).toBeInTheDocument();
    expect(screen.getByText('gdcd')).toBeInTheDocument();
  });

  it('applies active class to home link when on home page', () => {
    vi.mocked(useRouter).mockReturnValue({
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
      basePath: '',
      route: '/',
      forward: vi.fn(),
    });
    render(<NavMenu />);
    const homeLink = screen.getByText('home').closest('li');
    expect(homeLink).toHaveClass('active');
  });

  it('applies active class to projects link when on projects page', () => {
    vi.mocked(useRouter).mockReturnValue({
      pathname: '/projects',
      query: {},
      asPath: '/projects',
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
      basePath: '',
      route: '/projects',
      forward: vi.fn(),
    });
    render(<NavMenu />);
    const projectsLink = screen.getByText('projects').closest('li');
    expect(projectsLink).toHaveClass('active');
  });

  it('applies active class to gdcd link when on gdcd page', () => {
    vi.mocked(useRouter).mockReturnValue({
      pathname: '/gdcd/2013',
      query: { id: '2013' },
      asPath: '/gdcd/2013',
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
      basePath: '',
      route: '/gdcd/[id]',
      forward: vi.fn(),
    });
    render(<NavMenu />);
    const gdcdLink = screen.getByText('gdcd').closest('li');
    expect(gdcdLink).toHaveClass('active');
  });
});
