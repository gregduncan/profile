import { render, screen } from '@testing-library/react';
import { useParams } from 'next/navigation';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import GDCDPage from '../../../app/gdcd/[id]/page';

vi.mock('next/navigation', () => ({
  useParams: vi.fn(),
}));

const mockParams = (id: string) => {
  vi.mocked(useParams).mockReturnValue({ id });
};

describe('GDCD page', () => {
  beforeEach(() => {
    mockParams('2013');
  });

  it('renders the GDCD heading', () => {
    render(<GDCDPage />);
    expect(screen.getByRole('heading', { name: 'GDCD' })).toBeInTheDocument();
  });

  it('renders year navigation links', () => {
    render(<GDCDPage />);
    expect(screen.getByRole('link', { name: '2013' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '2012' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '2011' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '2010' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '2009' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '2008' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '2007' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '2005' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '2004' })).toBeInTheDocument();
  });

  it('shows content for 2013', () => {
    mockParams('2013');
    render(<GDCDPage />);
    expect(screen.getByText('#1 Fragment Two')).toBeInTheDocument();
    expect(screen.getByText('These New Puritans')).toBeInTheDocument();
  });

  it('shows content for 2012', () => {
    mockParams('2012');
    render(<GDCDPage />);
    expect(screen.getByText('#1 Hail Bop')).toBeInTheDocument();
    expect(screen.getByText('Django Django')).toBeInTheDocument();
  });

  it('shows content for 2004', () => {
    mockParams('2004');
    render(<GDCDPage />);
    expect(screen.getByText('#1 All These Things That I Have Done')).toBeInTheDocument();
    expect(screen.getByText('The Killers')).toBeInTheDocument();
  });

  it('renders Spotify link for 2013', () => {
    mockParams('2013');
    render(<GDCDPage />);
    const spotifyLink = screen.getByTitle('Open in Spotify');
    expect(spotifyLink).toHaveAttribute(
      'href',
      'http://open.spotify.com/user/gregduncan/playlist/7xAfI24YbblgfzBE0l7ZSZ',
    );
  });

  it('applies active class to selected year', () => {
    mockParams('2013');
    render(<GDCDPage />);
    const yearLink = screen.getByRole('link', { name: '2013' }).closest('li');
    expect(yearLink).toHaveClass('active');
  });
});
