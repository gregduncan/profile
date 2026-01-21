'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Input, TextArea, Button } from '../../styles/styled';
import { FormContainer, SuccessMessage, ErrorMessage } from './contact-form.styles';

const FORMSPREE_FORM_ID = 'mdaadbqw';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactForm = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<SubmitStatus>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    try {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'Website', {
          event_category: 'Contact us',
          event_label: `Name: ${form.name};Email:${form.email};Message:${form.message}`,
        });
      }
    } catch {
      // Ignore gtag errors
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isFormValid = form.name && form.message && isValidEmail;

  if (status === 'success') {
    return (
      <SuccessMessage>
        <h2>Thank you!</h2>
        <p>Your enquiry has been received and Greg will be in contact within 24hrs.</p>
      </SuccessMessage>
    );
  }

  return (
    <FormContainer onSubmit={onSubmit}>
      <ul>
        <li>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
          />
        </li>
        <li>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
          />
        </li>
        <li>
          <TextArea
            name="message"
            placeholder="Message"
            required
            value={form.message}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
          />
        </li>
        <li>
          <Button type="submit" disabled={!isFormValid || status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Send'}
          </Button>
          {status === 'error' && (
            <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
          )}
        </li>
      </ul>
    </FormContainer>
  );
};
