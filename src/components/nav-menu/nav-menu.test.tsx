import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { NavMenu } from '.';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('NavMenu', () => {
  beforeEach(() => {
    vi.mocked(usePathname).mockReturnValue('/');
  });

  it('renders all navigation links', () => {
    render(<NavMenu />);
    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('projects')).toBeInTheDocument();
    expect(screen.getByText('skills')).toBeInTheDocument();
    expect(screen.getByText('gdcd')).toBeInTheDocument();
  });

  it('applies active class to home link when on home page', () => {
    vi.mocked(usePathname).mockReturnValue('/');
    render(<NavMenu />);
    const homeLink = screen.getByText('home').closest('li');
    expect(homeLink).toHaveClass('active');
  });

  it('applies active class to projects link when on projects page', () => {
    vi.mocked(usePathname).mockReturnValue('/projects');
    render(<NavMenu />);
    const projectsLink = screen.getByText('projects').closest('li');
    expect(projectsLink).toHaveClass('active');
  });

  it('applies active class to gdcd link when on gdcd page', () => {
    vi.mocked(usePathname).mockReturnValue('/gdcd/2013');
    render(<NavMenu />);
    const gdcdLink = screen.getByText('gdcd').closest('li');
    expect(gdcdLink).toHaveClass('active');
  });
});
