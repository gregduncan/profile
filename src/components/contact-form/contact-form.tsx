'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';

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
      <div>
        <h2 className="margin-bottom-15">Thank you!</h2>
        <p className="p-default">
          Your enquiry has been received and Greg will be in contact within 24hrs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <ul>
        <li>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            required
            value={form.name}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
          />
        </li>
        <li>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            required
            value={form.email}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
          />
        </li>
        <li>
          <textarea
            name="message"
            placeholder="Message"
            className="form-control"
            required
            value={form.message}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
          ></textarea>
        </li>
        <li>
          <button
            type="submit"
            className="btn btn-default"
            disabled={!isFormValid || status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send'}
          </button>
          {status === 'error' && (
            <p style={{ color: 'red', marginTop: '10px' }}>
              Something went wrong. Please try again.
            </p>
          )}
        </li>
      </ul>
    </form>
  );
};
