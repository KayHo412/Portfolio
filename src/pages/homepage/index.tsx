import { Helmet } from 'react-helmet';
import HealthBar from '../../components/game-ui/HealthBar';
import PixelButton from '../../components/game-ui/PixelButton';
import PixelBox from '../../components/game-ui/PixelBox';
import PixelDivider from '../../components/game-ui/PixelDivider';
import BadgeLabel from '../../components/game-ui/BadgeLabel';

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

      <div className="min-h-screen bg-background text-foreground">
        <main className="max-w-5xl mx-auto px-4 md:px-8 py-16 space-y-12">
          {/* === PROFILE OVERVIEW === */}
          <div className="game-box-primary pixel-border-4 p-6 md:p-8 space-y-4 animate-slide-up relative overflow-hidden">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full opacity-35 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="0,0 30,0 16,24" fill="#111820" />
              <polygon points="30,0 58,0 42,28" fill="#0d1118" />
              <polygon points="58,0 100,0 100,24 76,18" fill="#11141c" />
              <polygon points="0,24 16,24 36,56 0,44" fill="#0f141c" />
              <polygon points="16,24 42,28 36,56" fill="#10171f" />
              <polygon points="42,28 76,18 58,52" fill="#0d1218" />
              <polygon points="76,18 100,24 100,44 58,52" fill="#111820" />
              <polygon points="0,44 36,56 24,100 0,100" fill="#0b1016" />
              <polygon points="36,56 58,52 46,100 24,100" fill="#11131a" />
              <polygon points="58,52 100,44 100,100 46,100" fill="#0d1118" />
            </svg>
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="font-pixel text-2xl md:text-3xl neon-primary mb-2">
                  KHOA HO
                </h1>
                <p className="font-mono text-sm md:text-base text-foreground mb-3">
                  Software Engineering Student :: Web & Game Developer
                </p>
                <p className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  Software engineering student in Tampere, Finland, working on web and game
                  projects with React, Node.js, Unity, and C#. I value practical problem-solving,
                  teamwork, and steady learning through real projects.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQE9xIJf1NrTDw/profile-displayphoto-crop_800_800/B4DZiskihcHwAI-/0/1755241922067?e=1766620800&v=beta&t=ZqcyyXcPtwsAhqG1kM1QBYh-Y0RbqD4PL8N3vEykakg"
                  alt="Khoa Ho"
                  className="w-32 h-32 md:w-40 md:h-40 pixel-border-3 border-primary"
                />
              </div>
            </div>
          </div>

          {/* === HIGHLIGHTS === */}
          <PixelDivider variant="primary" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left: Core Details */}
            <PixelBox variant="primary" borderWidth={3} title="CORE DETAILS">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-xs md:text-sm font-mono">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">YEARS EXPERIENCE</p>
                    <p className="text-primary neon-primary font-bold text-lg">3+</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">PRIMARY FOCUS</p>
                    <p className="text-secondary font-bold text-lg">WEB / GAME DEV</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">SPECIALIZATION</p>
                    <p className="text-accent neon-accent font-bold">REACT / UNITY / C#</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">LOCATION</p>
                    <p className="text-secondary font-bold">TAMPERE, FINLAND</p>
                  </div>
                </div>
              </div>
            </PixelBox>

            {/* Right: Status & Tools */}
            <PixelBox variant="accent" borderWidth={3} title="STATUS">
              <div className="space-y-3">
                <div>
                  <BadgeLabel text="AVAILABLE" variant="primary" />
                  <p className="text-xs font-mono text-foreground mt-2">
                    Open to internships, graduate roles, freelance work, and game or web projects.
                  </p>
                </div>
                <div className="pt-2 border-t-2 border-border">
                  <p className="text-xs font-mono text-muted-foreground mb-2">CORE TECHNOLOGIES:</p>
                  <div className="flex flex-wrap gap-2">
                    <BadgeLabel text="REACT" variant="secondary" />
                    <BadgeLabel text="NODE.JS" variant="primary" />
                    <BadgeLabel text="UNITY" variant="accent" />
                    <BadgeLabel text="C#" variant="secondary" />
                  </div>
                </div>
              </div>
            </PixelBox>
          </div>

          {/* === SKILLS === */}
          <PixelDivider variant="secondary" />

          <PixelBox variant="secondary" borderWidth={3} title="SKILLS">
            <div className="space-y-6">
              <div>
                <HealthBar
                  label="Frontend Development"
                  current={78}
                  max={100}
                  barColor="primary"
                />
              </div>
              <div>
                <HealthBar
                  label="Backend Development"
                  current={88}
                  max={100}
                  barColor="secondary"
                />
              </div>
              <div>
                <HealthBar
                  label="Game Development"
                  current={72}
                  max={100}
                  barColor="accent"
                />
              </div>
              <div>
                <HealthBar
                  label="DevOps & Tooling"
                  current={91}
                  max={100}
                  barColor="warning"
                />
              </div>
              <div>
                <HealthBar
                  label="Team Collaboration"
                  current={93}
                  max={100}
                  barColor="secondary"
                />
              </div>
            </div>
          </PixelBox>

          {/* === QUICK ACTIONS === */}
          <PixelDivider variant="accent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <PixelButton
              asLink
              href="/superpower-kitchen"
              variant="primary"
              iconName="Zap"
              iconPosition="right"
              className="w-full py-3 text-center"
            >
              VIEW SKILLS
            </PixelButton>
            <PixelButton
              asLink
              href="/about"
              variant="secondary"
              iconName="Users"
              iconPosition="right"
              className="w-full py-3 text-center"
            >
              ABOUT ME
            </PixelButton>
            <PixelButton
              asLink
              href="mailto:khoaphan412@gmail.com"
              variant="accent"
              iconName="Mail"
              iconPosition="right"
              className="w-full py-3 text-center"
            >
              CONTACT
            </PixelButton>
            <PixelButton
              asLink
              href="https://kaho412.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              iconName="ExternalLink"
              iconPosition="right"
              className="w-full py-3 text-center"
            >
              GAME PROJECTS
            </PixelButton>
          </div>

          {/* === HIGHLIGHTED LINKS === */}
          <PixelDivider variant="primary" />

          <PixelBox variant="primary" title="HIGHLIGHTED SECTIONS">
            <div className="space-y-3 text-xs md:text-sm">
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <p className="text-foreground font-mono">
                  <span className="text-secondary">Culture & Language</span> — Learn about my international background and language skills
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <p className="text-foreground font-mono">
                  <span className="text-secondary">Technical Skills</span> — Review my web, game, and tooling experience
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <p className="text-foreground font-mono">
                  <span className="text-secondary">Experience</span> — Review my work history and responsibilities
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                <p className="text-foreground font-mono">
                  <span className="text-secondary">Contact</span> — Reach out for internships, projects, or collaboration
                </p>
              </div>
            </div>
          </PixelBox>
        </main>
      </div>
    </>
  );
};

export default Homepage;