import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { SocialLink } from '../types';

interface CTASectionProps {
  socialLinks: SocialLink[];
}

const CTASection = ({ socialLinks }: CTASectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent text-shadow-glow">
              Ready to Create Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's combine precision coding with creative innovation to build your next project
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/the-lab">
            <Button
              size="xl"
              iconName="Rocket"
              iconPosition="right"
              className="bg-cta hover:bg-cta/90 text-cta-foreground neon-glow-cta text-lg px-10 py-6"
            >
              Let's Cook Up Something Amazing
            </Button>
          </Link>

          <Button
            size="xl"
            variant="outline"
            iconName="Download"
            iconPosition="left"
            className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-10 py-6"
            onClick={() => {
            const link = document.createElement('a');
            link.href = '/public/first_resume.pdf';
            link.download = 'first_resume.pdf';
            link.click();
  }}
          >
            Download My Recipe Book
          </Button>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-6">Connect with me on social media</p>
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 rounded-full flex items-center justify-center border-2 border-border hover:border-primary transition-all duration-300"
                style={{ backgroundColor: `${link.color}10` }}
                aria-label={link.platform}
              >
                <Icon
                  name={link.icon}
                  size={24}
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ color: link.color }}
                />
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: link.color }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;