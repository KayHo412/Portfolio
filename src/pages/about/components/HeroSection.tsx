import { PersonalInfo } from '../types';
import Icon from '../../../components/AppIcon';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

const HeroSection = ({ personalInfo }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient & Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80" />
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse opacity-20 delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse opacity-20 delay-500" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-center">
          <div className="space-y-8 animate-fade-in-up max-w-3xl w-full">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full border-0">
              <Icon name="Sparkles" size={18} className="text-primary" />
              <span className="text-sm font-semibold text-foreground">Full-Stack Developer</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="gradient-text-primary">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
                {personalInfo.title}
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Info Cards */}
            <div className="flex flex-wrap gap-3">
              <div className="glass-card px-4 py-3 rounded-lg border-0 flex items-center space-x-2 hover:shadow-md transition-smooth">
                <Icon name="MapPin" size={18} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{personalInfo.location}</span>
              </div>
              <div className="glass-card px-4 py-3 rounded-lg border-0 flex items-center space-x-2 hover:shadow-md transition-smooth">
                <Icon name="Globe" size={18} className="text-secondary" />
                <span className="text-sm font-medium text-foreground">{personalInfo.nationality}</span>
              </div>
            </div>

            {/* Language Pills */}
            <div className="flex flex-wrap gap-2">
              {personalInfo.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="glass-card px-3 py-2 rounded-lg border-0 hover:shadow-md transition-smooth inline-flex items-center space-x-2"
                >
                  <span className="text-lg">{lang.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-foreground">{lang.name}</span>
                    <span className="text-xs text-muted-foreground">{lang.proficiency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-20 p-8 sm:p-10 glass-card rounded-2xl border-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg text-foreground/90 leading-relaxed text-center lg:text-left">
            {personalInfo.bio}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float-subtle">
        <Icon name="ChevronDown" size={28} className="text-primary/60 hover:text-primary transition-smooth" />
      </div>
    </section>
  );
};

export default HeroSection;