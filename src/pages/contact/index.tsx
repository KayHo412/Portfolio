import { Helmet } from 'react-helmet';
import { useState } from 'react';

const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4">
    <div className="h-px flex-1 bg-border" />
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">{label}</span>
    <div className="h-px flex-1 bg-border" />
  </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  // simple copy handler
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('khoaphan412@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const openGmailCompose = (to = 'khoaphan412@gmail.com', subject = '', body = '') => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      window.open(gmailUrl, '_blank');
    } catch {
      // fallback: copy email
      void copyEmail();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open Gmail compose in a new tab with prefilled fields
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=khoaphan412@gmail.com&su=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;
    try {
      window.open(gmailUrl, '_blank');
    } catch {
      // fallback: try mailto
      const mailtoLink = `mailto:khoaphan412@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        body
      )}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <>
      <Helmet>
        <title>Khoa Ho - Contact</title>
        <meta
          name="description"
          content="Get in touch with Khoa Ho for internships, projects, or collaboration opportunities."
        />
      </Helmet>

      <div className="min-h-screen bg-base text-ink">
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 md:px-8">
          <section className="space-y-4">
            <div className="space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                Get In Touch
              </p>
              <h1 className="text-[clamp(2.75rem,6vw,64px)] leading-[0.95] tracking-[-0.03em] text-ink">
                Contact Me
              </h1>
              <p className="max-w-[480px] text-[15px] leading-[1.75] text-ink-dim">
                I'm open to internships, full-time opportunities, freelance projects, and collaboration. Feel free to reach out — I'd love to hear from you!
              </p>
            </div>
          </section>

          <SectionDivider label="direct channels" />

          <section className="grid gap-6 md:grid-cols-2">
            <article className="border border-border bg-surface p-6 space-y-4">
              <h2 className="text-[22px] text-ink">Email</h2>
              <p className="text-[13px] leading-[1.75] text-ink-dim">
                For inquiries, opportunities, or just to chat about projects and ideas.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => openGmailCompose('khoaphan412@gmail.com')}
                  className="inline-block border border-border-strong px-4 py-3 font-mono text-[11px] text-ink transition-colors hover:bg-surface-2"
                >
                  khoaphan412@gmail.com
                </button>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3 py-2 font-mono text-[11px] border border-border rounded transition-colors hover:bg-surface-2"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </article>

            <article className="border border-border bg-surface p-6 space-y-4">
              <h2 className="text-[22px] text-ink">Social & Professional</h2>
              <p className="text-[13px] leading-[1.75] text-ink-dim">
                Connect with me on LinkedIn, check out my code on GitHub, or play my games on itch.io.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/khoa-phan-ho-75771b2a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim transition-colors hover:text-amber hover:border-border-strong"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/KayHo412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim transition-colors hover:text-amber hover:border-border-strong"
                >
                  GitHub
                </a>
                <a
                  href="https://kaho412.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim transition-colors hover:text-amber hover:border-border-strong"
                >
                  itch.io
                </a>
              </div>
            </article>
          </section>

          <SectionDivider label="quick form" />

          <section className="max-w-2xl border border-border bg-surface p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-border bg-base px-4 py-3 font-mono text-[13px] text-ink placeholder-ink-dim focus:outline-none focus:border-border-strong transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-border bg-base px-4 py-3 font-mono text-[13px] text-ink placeholder-ink-dim focus:outline-none focus:border-border-strong transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-border bg-base px-4 py-3 font-mono text-[13px] text-ink placeholder-ink-dim focus:outline-none focus:border-border-strong transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border border-border bg-base px-4 py-3 font-mono text-[13px] text-ink placeholder-ink-dim focus:outline-none focus:border-border-strong transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="border border-border-strong px-6 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2 w-full md:w-auto"
              >
                Send Message
              </button>
            </form>

          </section>

          <SectionDivider label="response time" />

          <section className="border border-border bg-surface p-6">
            <p className="text-[13px] leading-[1.75] text-ink-dim">
              I typically respond to messages within <span className="text-ink">24-48 hours</span>. For urgent matters or time-sensitive opportunities, feel free to reach out on LinkedIn directly for faster communication.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
