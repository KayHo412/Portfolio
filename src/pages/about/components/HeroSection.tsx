import { PersonalInfo } from '../types';
import Icon from '../../../components/AppIcon';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

const HeroSection = ({ personalInfo }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-center">
          <div className="space-y-6 animate-fade-in-up max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 neon-glow-primary">
              <Icon name="Sparkles" size={20} className="text-primary" />
              <span className="text-sm font-rajdhani font-semibold text-primary">The Chef's Story</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-foreground leading-tight text-center">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-glow-primary">
                {personalInfo.name}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-rajdhani font-semibold text-secondary text-center">
              {personalInfo.title}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg border border-border">
                <Icon name="MapPin" size={18} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg border border-border">
                <Icon name="Globe" size={18} className="text-secondary" />
                <span className="text-sm font-medium text-foreground">{personalInfo.nationality}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 justify-center">
              {personalInfo.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center space-x-2 px-3 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200"
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-foreground">{lang.name}</span>
                    <span className="text-xs text-muted-foreground">{lang.proficiency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-foreground leading-relaxed text-center lg:text-left">
            {personalInfo.bio}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary neon-glow-primary" />
      </div>
    </section>
  );
};

export default HeroSection;