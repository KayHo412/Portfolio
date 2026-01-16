import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import type { SocialLink } from '../types';

interface CTASectionProps {
  socialLinks: SocialLink[];
}

const CTASection = ({ socialLinks }: CTASectionProps) => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-4xl mx-auto">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text-primary">
              Let's Build Something Exceptional
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm passionate about crafting elegant solutions that combine technical precision with creative excellence. Ready to collaborate?
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/about">
              <Button
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50 hover:shadow-xl"
              >
                Explore My Work
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              iconName="Download"
              iconPosition="left"
              className="border-primary/30 text-foreground hover:glass-dark"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Portfolio/KhoaHo_CV.docx';
                link.download = 'KhoaHo_CV.docx';
                link.click();
              }}
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="pt-12 border-t border-primary/10">
            <p className="text-sm text-muted-foreground mb-8 font-medium">
              Connect & Follow
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:shadow-lg transition-smooth border-0"
                  aria-label={link.platform}
                >
                  <Icon
                    name={link.icon}
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-125"
                    style={{ color: link.color }}
                  />

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md pointer-events-none"
                    style={{ backgroundColor: link.color }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;