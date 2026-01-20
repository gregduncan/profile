import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ContactForm } from '.';

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn();
    (window as typeof window & { gtag: ReturnType<typeof vi.fn> }).gtag = vi.fn();
  });

  it('renders the form initially', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
  });

  it('has submit button disabled when form is empty', () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: 'Send' });
    expect(submitButton).toBeDisabled();
  });

  it('has submit button disabled when email is invalid', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe');
    await user.type(screen.getByPlaceholderText('Email'), 'invalid-email');
    await user.type(screen.getByPlaceholderText('Message'), 'Test message');

    const submitButton = screen.getByRole('button', { name: 'Send' });
    expect(submitButton).toBeDisabled();
  });

  it('enables submit button when form is valid', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe');
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('Message'), 'Test message');

    const submitButton = screen.getByRole('button', { name: 'Send' });
    expect(submitButton).not.toBeDisabled();
  });

  it('calls Formspree API on form submit', async () => {
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
    } as Response);

    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe');
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('Message'), 'Test message');

    const submitButton = screen.getByRole('button', { name: 'Send' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('formspree.io'),
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Test message',
          }),
        }),
      );
    });
  });

  it('shows thank you message after successful submit', async () => {
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
    } as Response);

    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe');
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('Message'), 'Test message');

    const submitButton = screen.getByRole('button', { name: 'Send' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Thank you!')).toBeInTheDocument();
    });
    expect(screen.getByText(/Your enquiry has been received/)).toBeInTheDocument();
  });

  it('shows error message when submit fails', async () => {
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: false,
    } as Response);

    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe');
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('Message'), 'Test message');

    const submitButton = screen.getByRole('button', { name: 'Send' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    });
  });

  it('shows sending state while submitting', async () => {
    let resolvePromise: (value: Response) => void;
    vi.mocked(global.fetch).mockReturnValueOnce(
      new Promise((resolve) => {
        resolvePromise = resolve;
      }),
    );

    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe');
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('Message'), 'Test message');

    const submitButton = screen.getByRole('button', { name: 'Send' });
    await user.click(submitButton);

    expect(screen.getByRole('button', { name: 'Sending...' })).toBeDisabled();

    resolvePromise!({ ok: true } as Response);

    await waitFor(() => {
      expect(screen.getByText('Thank you!')).toBeInTheDocument();
    });
  });
});
