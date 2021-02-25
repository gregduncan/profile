import React, { useState } from 'react';

export const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', msg: '' });
    const [sent, setSent] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        const body = '\n<table>\n<tbody>\n<tr>\n<td>Name:</td>\n<td>'
            .concat(form.name, '</td>\n</tr>\n<tr>\n<td>Email:</td>\n<td>')
            .concat(form.email, '</td>\n</tr>\n<tr>\n<td>Message:</td>\n<td>')
            .concat(form.msg, '</td>\n</tr>\n</tbody>\n</table>');

        try {
            gtag('event', 'Website', {
                event_category: 'Contact us',
                event_label: `Name: ${form.name};Email:${form.email};Message:${form.msg}`,
            });
        } catch (e) {}

        try {
            Email.send({
                Host: 'eu-smtp-outbound-1.mimecast.com',
                Username: 'no-reply@aquacars.co.uk',
                Password: 'FKoed83jd!d2',
                To: 'mail@gregduncan.co.uk',
                From: 'no-reply@aquacars.co.uk',
                Subject: 'Greg Duncan Website enquiry',
                Body: body,
            }).then(function (msg) {
                setSent(true);
            });
        } catch (error) {
            setSent(true);
        }
    }

    return (
        <>
            {!sent && (
                <form onSubmit={onSubmit}>
                    <ul>
                        <li>
                            <input type="text" placeholder="Name" className="form-control" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </li>
                        <li>
                            <input type="text" placeholder="Email" className="form-control" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        </li>
                        <li>
                            <textarea placeholder="Message" className="form-control" required value={form.mesg} onChange={(e) => setForm({ ...form, msg: e.target.value })}></textarea>
                        </li>
                        <li>
                            <button
                                type="submit"
                                className="btn btn-default"
                                disabled={
                                    !form.name ||
                                    !form.msg ||
                                    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                                        form.email
                                    )
                                }
                            >
                                Send
                            </button>
                        </li>
                    </ul>
                </form>
            )}
            {sent && (
                <div>
                    <h2 className="margin-bottom-15">Thank you!</h2>
                    <p className="p-default">Your enquiry has been received and Greg will be in contact within 24hrs.</p>
                </div>
            )}
        </>
    );
};
