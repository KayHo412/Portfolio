import { Value } from '../types';
import Icon from '../../../components/AppIcon';

interface ValuesSectionProps {
  values: Value[];
}

const ValuesSection = ({ values }: ValuesSectionProps) => {
  return (
    <section className="py-32 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full border-0 mb-4">
            <Icon name="Compass" size={18} className="text-primary" />
            <span className="text-sm font-semibold text-foreground">Core Principles</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What <span className="gradient-text-primary">Drives Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The values that guide my work and decisions
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="group relative glass-card p-8 rounded-2xl border-0 hover:shadow-lg hover:shadow-primary/20 transition-smooth animate-fade-in-up h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <Icon name={value.icon} size={28} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {value.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;