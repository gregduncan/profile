import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from '../../pages/skills';

describe('Skills page', () => {
    it('renders the skills heading', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
    });

    it('renders client side skills category', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: 'Client Side' })).toBeInTheDocument();
        expect(screen.getByText('Knockout.js')).toBeInTheDocument();
        expect(screen.getByText('Angular.js')).toBeInTheDocument();
        expect(screen.getByText('jQuery')).toBeInTheDocument();
    });

    it('renders programming skills category', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: 'Programming' })).toBeInTheDocument();
        expect(screen.getByText('C#')).toBeInTheDocument();
        expect(screen.getByText('PHP')).toBeInTheDocument();
    });

    it('renders database skills category', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: 'Database' })).toBeInTheDocument();
        expect(screen.getByText('MSSQL')).toBeInTheDocument();
        expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    });

    it('renders Microsoft Technologies category', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: 'Microsoft Technologies' })).toBeInTheDocument();
        expect(screen.getByText('.NET 5 Framework')).toBeInTheDocument();
        expect(screen.getByText('Azure')).toBeInTheDocument();
    });
});
