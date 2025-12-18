import { SocialLink } from '../types';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

interface CTASectionProps {
  socialLinks: SocialLink[];
}

const CTASection = ({ socialLinks }: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cta rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cta/10 rounded-full border border-cta/20 neon-glow-cta mb-6">
            <Icon name="Rocket" size={20} className="text-cta" />
            <span className="text-sm font-rajdhani font-semibold text-cta">Let's Connect</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-foreground mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-cta to-primary bg-clip-text text-transparent">
              Cook Up Something Amazing?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for a developer who brings both technical precision and creative flair, or just want to chat about badminton and code, I'd love to hear from you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              iconName="Mail"
              iconPosition="left"
              className="bg-cta hover:bg-cta/90 text-cta-foreground neon-glow-cta w-full sm:w-auto"
            >
              Send Me an Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
            >
              Download My CV
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-card rounded-full flex items-center justify-center border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                aria-label={`Visit ${link.platform} profile`}
              >
                <Icon
                  name={link.icon}
                  size={24}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-card rounded text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {link.username}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;