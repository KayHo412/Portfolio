import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4">
    <div className="h-px flex-1 bg-border" />
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">
      {label}
    </span>
    <div className="h-px flex-1 bg-border" />
  </div>
);

const Homepage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Khoa Ho - Portfolio</title>
        <meta
          name="description"
          content="Khoa Ho - Software Engineering Student working on web and game projects with React, Node.js, Unity, and C#."
        />
      </Helmet>

      <div className="min-h-screen bg-base text-ink">
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 md:px-8">
          <section className="space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                Software Engineering Student &amp; Game Developer
              </p>
              <div className="space-y-3">
                <h1 className="max-w-[10ch] text-[clamp(3.8rem,9vw,72px)] leading-[0.95] tracking-[-0.03em] text-ink md:max-w-none">
                  Khoa Ho
                  <span
                    aria-hidden="true"
                    className="ml-1 inline-block align-baseline bg-amber"
                    style={{ width: '6px', height: '0.85em', animation: 'blink 1.1s step-end infinite' }}
                  />
                </h1>
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim">
                  {['Software Engineering Student', 'Web & Game Developer', 'React / Unity / C#', 'Tampere, Finland'].map((tag, index) => (
                    <span
                      key={tag}
                      className={`border px-3 py-1 ${index === 0 ? 'border-border-strong text-amber' : 'border-border text-ink-dim'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="max-w-[480px] text-[15px] leading-[1.75] text-ink-dim">
                Software engineering student in Tampere, Finland, working on web and game projects with React, Node.js, Unity, and C#. I value practical problem-solving, teamwork, and steady learning through real projects.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-border bg-surface p-6">
                <SectionDivider label="overview" />
                <div className="mt-6 grid grid-cols-2 gap-4 text-[11px] font-mono uppercase tracking-[0.08em]">
                  <div className="space-y-1">
                    <p className="text-ink-dim">Years Experience</p>
                    <p className="text-ink">3+</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-ink-dim">Primary Focus</p>
                    <p className="text-ink">WEB / GAME DEV</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-ink-dim">Specialization</p>
                    <p className="text-ink">REACT / UNITY / C#</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-ink-dim">Location</p>
                    <p className="text-ink">TAMPERE, FINLAND</p>
                  </div>
                </div>
              </div>

              <div className="border border-border bg-surface p-6">
                <SectionDivider label="status" />
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-sage">AVAILABLE</p>
                    <p className="text-[13px] leading-[1.75] text-ink-dim">
                      Open to internships, graduate roles, freelance work, and game or web projects.
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-dim">Core technologies</p>
                    <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-dim">
                      {['React', 'Node.js', 'Unity', 'C#'].map((item, index) => (
                        <span
                          key={item}
                          className={`border px-3 py-1 ${index === 0 ? 'border-border-strong text-amber' : 'border-border text-ink-dim'}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SectionDivider label="skills" />

          <section className="space-y-6">
            <div className="space-y-4">
              {[
                ['Frontend Development', 78],
                ['Backend Development', 88],
                ['Game Development', 72],
                ['DevOps & Tooling', 91],
                ['Team Collaboration', 93],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center gap-4 font-mono text-[11px]">
                  <div className="w-40 shrink-0 uppercase tracking-[0.08em] text-ink">{label}</div>
                  <div className="h-[2px] flex-1 bg-border">
                    <div className="h-full bg-amber" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <SectionDivider label="links" />

          <section className="grid gap-3 md:grid-cols-3">
            <Link
              to="/superpower-kitchen"
              className="border border-border-strong px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2"
            >
              VIEW SKILLS
            </Link>
            <Link
              to="/about"
              className="border border-border-strong px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2"
            >
              ABOUT ME
            </Link>
            <a
              href="https://kaho412.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border-strong px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2"
            >
              GAME PROJECTS
            </a>
          </section>

        </main>
      </div>
    </>
  );
};

export default Homepage;