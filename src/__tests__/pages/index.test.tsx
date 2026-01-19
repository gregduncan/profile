import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../../pages/index';

describe('Home page', () => {
    it('renders the latest projects section', () => {
        render(<Home />);
        expect(screen.getByText('Latest projects')).toBeInTheDocument();
    });

    it('renders project cards', () => {
        render(<Home />);
        expect(screen.getByText('Segmantics')).toBeInTheDocument();
        expect(screen.getByText('Aqua Cars')).toBeInTheDocument();
    });

    it('renders the technologies section', () => {
        render(<Home />);
        expect(screen.getByText('Technologies')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Typescript')).toBeInTheDocument();
    });

    it('renders the about section', () => {
        render(<Home />);
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText(/Hi, my name is Greg Duncan/)).toBeInTheDocument();
    });

    it('renders the GDCD section', () => {
        render(<Home />);
        expect(screen.getByText('GDCD')).toBeInTheDocument();
    });
});
