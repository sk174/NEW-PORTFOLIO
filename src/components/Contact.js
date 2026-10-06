import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { profile } from '../data/portfolioData';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('info');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatusType('error');
      setStatus('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setStatusType('info');
    setStatus('Sending your message...');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio inquiry',
          message: form.message,
          _subject: `New portfolio message from ${form.name}`,
          _replyto: form.email,
          _template: 'table',
          _captcha: 'false',
          _honey: form.website,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Message service failed');
      }

      setStatusType('success');
      setStatus('Message sent successfully.');
      setForm(initialForm);
    } catch (error) {
      setStatusType('error');
      setStatus(`Sorry, the message could not be sent right now. Please email me directly at ${profile.email}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-paper px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="say hello"
          title="Let's Work Together"
          description="Have a project in mind or just want to connect? I would love to hear from you."
        />

        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-soft sm:p-9">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <input
              className="hidden"
              name="website"
              value={form.website}
              onChange={updateField}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-bold text-ink">
                Name *
                <input
                  className="mt-2 w-full rounded-lg border border-ink/10 px-4 py-3 text-sm font-medium outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/10"
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Your Name"
                />
              </label>
              <label className="text-xs font-bold text-ink">
                Email *
                <input
                  className="mt-2 w-full rounded-lg border border-ink/10 px-4 py-3 text-sm font-medium outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/10"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="text-xs font-bold text-ink">
              Subject
              <input
                className="mt-2 w-full rounded-lg border border-ink/10 px-4 py-3 text-sm font-medium outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/10"
                name="subject"
                value={form.subject}
                onChange={updateField}
                placeholder="Project inquiry / collaboration"
              />
            </label>

            <label className="text-xs font-bold text-ink">
              Message *
              <textarea
                className="mt-2 min-h-36 w-full resize-y rounded-lg border border-ink/10 px-4 py-3 text-sm font-medium outline-none transition focus:border-coral focus:ring-4 focus:ring-coral/10"
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder="Tell me about your project or how I can help..."
              />
            </label>

            <button
              className="rounded-lg bg-coral px-6 py-4 text-sm font-black text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#e85f48] disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p
                className={`rounded-lg px-4 py-3 text-center text-xs font-bold ${
                  statusType === 'success'
                    ? 'bg-mint/10 text-mint'
                    : statusType === 'error'
                      ? 'bg-coral/10 text-coral'
                      : 'bg-soft text-muted'
                }`}
              >
                {status}
              </p>
            )}
          </form>

          <div className="mt-7 flex flex-wrap justify-center gap-4 text-xs font-bold text-muted">
            <a className="hover:text-coral" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            <a className="hover:text-coral" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="hover:text-coral" href={profile.github}>GitHub</a>
            <a className="hover:text-coral" href={profile.linkedin}>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
