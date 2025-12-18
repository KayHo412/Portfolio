import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background rounded-2xl border-2 border-primary/30 p-8 md:p-12 mb-12 neon-glow-primary">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Icon name="Globe" size={32} className="text-primary" />
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Culture Blend
          </h1>
        </div>

        <p className="text-lg md:text-xl text-foreground mb-6 max-w-3xl leading-relaxed">
          Where Finnish precision meets global perspective. A journey through multicultural experiences,
          language mastery, and cross-cultural collaboration that shapes innovative solutions.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            iconName="Languages"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-primary"
          >
            Explore Languages
          </Button>
          <Button
            variant="outline"
            iconName="Users"
            iconPosition="left"
            className="border-secondary text-secondary hover:bg-secondary/10"
          >
            View Collaborations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;