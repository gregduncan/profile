import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Toggle } from './toggle';

describe('Toggle', () => {
    it('renders children when visible is true', () => {
        render(
            <Toggle visible={true}>
                <span>Test Content</span>
            </Toggle>
        );
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders nothing when visible is false', () => {
        render(
            <Toggle visible={false}>
                <span>Test Content</span>
            </Toggle>
        );
        expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
    });
});
