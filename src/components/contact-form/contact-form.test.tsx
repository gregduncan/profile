import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ContactForm } from '.';

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (window as typeof window & { Email: { send: ReturnType<typeof vi.fn> } }).Email = {
      send: vi.fn().mockResolvedValue('OK'),
    };
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

  it('calls Email.send on form submit', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe');
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('Message'), 'Test message');

    const submitButton = screen.getByRole('button', { name: 'Send' });
    await user.click(submitButton);

    expect(window.Email.send).toHaveBeenCalledWith(
      expect.objectContaining({
        To: 'mail@gregduncan.co.uk',
        Subject: 'Greg Duncan Website enquiry',
      }),
    );
  });

  it('shows thank you message after successful submit', async () => {
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
});
