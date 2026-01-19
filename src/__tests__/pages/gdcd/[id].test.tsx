import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useRouter } from 'next/router';
import GDCD from '../../../pages/gdcd/[id]';

vi.mock('next/router', () => ({
    useRouter: vi.fn(),
}));

const mockRouter = (id: string) => {
    vi.mocked(useRouter).mockReturnValue({
        pathname: `/gdcd/${id}`,
        query: { id },
        asPath: `/gdcd/${id}`,
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
};

describe('GDCD page', () => {
    beforeEach(() => {
        mockRouter('2013');
    });

    it('renders the GDCD heading', () => {
        render(<GDCD />);
        expect(screen.getByRole('heading', { name: 'GDCD' })).toBeInTheDocument();
    });

    it('renders year navigation links', () => {
        render(<GDCD />);
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
        mockRouter('2013');
        render(<GDCD />);
        expect(screen.getByText('#1 Fragment Two')).toBeInTheDocument();
        expect(screen.getByText('These New Puritans')).toBeInTheDocument();
    });

    it('shows content for 2012', () => {
        mockRouter('2012');
        render(<GDCD />);
        expect(screen.getByText('#1 Hail Bop')).toBeInTheDocument();
        expect(screen.getByText('Django Django')).toBeInTheDocument();
    });

    it('shows content for 2004', () => {
        mockRouter('2004');
        render(<GDCD />);
        expect(screen.getByText('#1 All These Things That I Have Done')).toBeInTheDocument();
        expect(screen.getByText('The Killers')).toBeInTheDocument();
    });

    it('renders Spotify link for 2013', () => {
        mockRouter('2013');
        render(<GDCD />);
        const spotifyLink = screen.getByTitle('Open in Spotify');
        expect(spotifyLink).toHaveAttribute('href', 'http://open.spotify.com/user/gregduncan/playlist/7xAfI24YbblgfzBE0l7ZSZ');
    });

    it('applies active class to selected year', () => {
        mockRouter('2013');
        render(<GDCD />);
        const yearLink = screen.getByRole('link', { name: '2013' }).closest('li');
        expect(yearLink).toHaveClass('active');
    });
});
