import { Value } from '../types';
import Icon from '../../../components/AppIcon';

interface ValuesSectionProps {
  values: Value[];
}

const ValuesSection = ({ values }: ValuesSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 neon-glow-primary mb-4">
            <Icon name="Compass" size={20} className="text-primary" />
            <span className="text-sm font-rajdhani font-semibold text-primary">Core Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-foreground mb-4">
            What <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Drives Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The values that guide my work and life decisions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="group relative bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 neon-glow-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon name={value.icon} size={32} className="text-primary" />
                </div>

                <h3 className="text-xl font-orbitron font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;