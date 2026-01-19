import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from '../../pages/skills';

describe('Skills page', () => {
    it('renders the skills heading', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
    });

    it('renders frameworks category', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: 'Frameworks' })).toBeInTheDocument();
        expect(screen.getByText('React 19')).toBeInTheDocument();
        expect(screen.getByText('Next.js 15')).toBeInTheDocument();
        expect(screen.getByText('Astro')).toBeInTheDocument();
    });

    it('renders languages category', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: 'Languages' })).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
        expect(screen.getByText('Rust')).toBeInTheDocument();
    });

    it('renders testing category', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: 'Testing' })).toBeInTheDocument();
        expect(screen.getByText('Vitest')).toBeInTheDocument();
        expect(screen.getByText('Playwright')).toBeInTheDocument();
    });

    it('renders cloud and infrastructure category', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: 'Cloud & Infrastructure' })).toBeInTheDocument();
        expect(screen.getByText('Vercel')).toBeInTheDocument();
        expect(screen.getByText('Docker')).toBeInTheDocument();
    });

    it('renders AI and tooling category', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: 'AI & Tooling' })).toBeInTheDocument();
        expect(screen.getByText('Claude / Copilot')).toBeInTheDocument();
        expect(screen.getByText('LLM Integration')).toBeInTheDocument();
    });
});
