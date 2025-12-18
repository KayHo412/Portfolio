import { PersonalInfo } from '../types';
import Image from '../../../components/AppImage';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 neon-glow-primary">
              <Icon name="Sparkles" size={20} className="text-primary" />
              <span className="text-sm font-rajdhani font-semibold text-primary">The Chef's Story</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-foreground leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-glow-primary">
                {personalInfo.name}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-rajdhani font-semibold text-secondary">
              {personalInfo.title}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg border border-border">
                <Icon name="MapPin" size={18} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg border border-border">
                <Icon name="Globe" size={18} className="text-secondary" />
                <span className="text-sm font-medium text-foreground">{personalInfo.nationality}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
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

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 neon-glow-primary">
                <Image
                  src={personalInfo.image}
                  alt={personalInfo.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center border-4 border-background neon-glow-accent animate-bounce-playful">
                <Icon name="ChefHat" size={40} className="text-accent-foreground" />
              </div>
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