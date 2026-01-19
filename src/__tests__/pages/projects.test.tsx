import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Projects from '../../pages/projects';

describe('Projects page', () => {
  it('renders the projects heading', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: 'Segmantics' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Aqua Cars' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Target Offices' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Instant Offices' })).toBeInTheDocument();
  });

  it('renders project descriptions', () => {
    render(<Projects />);
    expect(screen.getByText(/risk management webapp/)).toBeInTheDocument();
    expect(screen.getByText(/third largest taxi company/)).toBeInTheDocument();
  });

  it('renders external links', () => {
    render(<Projects />);
    expect(screen.getByText('www.segmantics.com')).toHaveAttribute(
      'href',
      'http://www.segmantics.com',
    );
    expect(screen.getByText('www.aquacars.co.uk')).toHaveAttribute(
      'href',
      'http://www.aquacars.co.uk',
    );
  });
});
