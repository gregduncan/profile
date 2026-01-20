import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { GDCDContent } from '../../../app/gdcd/[id]/gdcd-content';
import gdcdData from '../../../data/gdcd.json';
import type { YearData } from '../../../types/gdcd';

const allYears = gdcdData.years.map((y) => y.year);

const getYearData = (year: string): YearData => {
  const data = gdcdData.years.find((y) => y.year === year);
  if (!data) throw new Error(`Year ${year} not found`);
  return data as YearData;
};

describe('GDCD page', () => {
  it('renders the GDCD heading', () => {
    render(<GDCDContent yearData={getYearData('2013')} allYears={allYears} />);
    expect(screen.getByRole('heading', { name: 'GDCD' })).toBeInTheDocument();
  });

  it('renders year navigation links', () => {
    render(<GDCDContent yearData={getYearData('2013')} allYears={allYears} />);
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
    render(<GDCDContent yearData={getYearData('2013')} allYears={allYears} />);
    expect(screen.getByText('#1 Fragment Two')).toBeInTheDocument();
    expect(screen.getByText('These New Puritans')).toBeInTheDocument();
  });

  it('shows content for 2012', () => {
    render(<GDCDContent yearData={getYearData('2012')} allYears={allYears} />);
    expect(screen.getByText('#1 Hail Bop')).toBeInTheDocument();
    expect(screen.getByText('Django Django')).toBeInTheDocument();
  });

  it('shows content for 2004', () => {
    render(<GDCDContent yearData={getYearData('2004')} allYears={allYears} />);
    expect(screen.getByText('#1 All These Things That I Have Done')).toBeInTheDocument();
    expect(screen.getByText('The Killers')).toBeInTheDocument();
  });

  it('renders Spotify link for 2013', () => {
    render(<GDCDContent yearData={getYearData('2013')} allYears={allYears} />);
    const spotifyLink = screen.getByTitle('Open in Spotify');
    expect(spotifyLink).toHaveAttribute(
      'href',
      'http://open.spotify.com/user/gregduncan/playlist/7xAfI24YbblgfzBE0l7ZSZ',
    );
  });

  it('does not render Spotify link for years without one', () => {
    render(<GDCDContent yearData={getYearData('2008')} allYears={allYears} />);
    expect(screen.queryByTitle('Open in Spotify')).not.toBeInTheDocument();
  });

  it('applies active class to selected year', () => {
    render(<GDCDContent yearData={getYearData('2013')} allYears={allYears} />);
    const yearLink = screen.getByRole('link', { name: '2013' }).closest('li');
    expect(yearLink).toHaveClass('active');
  });

  it('renders all tracks for a year', () => {
    render(<GDCDContent yearData={getYearData('2013')} allYears={allYears} />);
    // 2013 has 10 tracks
    expect(screen.getByText('#1 Fragment Two')).toBeInTheDocument();
    expect(screen.getByText('#10 Nothing Arrived')).toBeInTheDocument();
  });

  it('renders 12 tracks for years with more tracks', () => {
    render(<GDCDContent yearData={getYearData('2004')} allYears={allYears} />);
    // 2004 has 12 tracks
    expect(screen.getByText('#1 All These Things That I Have Done')).toBeInTheDocument();
    expect(screen.getByText('#12 Dry Your Eyes')).toBeInTheDocument();
  });
});
