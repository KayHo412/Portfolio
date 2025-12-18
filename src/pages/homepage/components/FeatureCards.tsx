import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import type { FeatureCard } from '../types';

interface FeatureCardsProps {
  features: FeatureCard[];
}

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Explore My Digital Playground
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate through different sections to discover my journey, projects, and skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.id}
              to={feature.link}
              className="group relative bg-card rounded-xl p-8 border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: feature.color }}
              />

              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon
                    name={feature.icon}
                    size={32}
                    className="transition-colors duration-300"
                    style={{ color: feature.color }}
                  />
                </div>

                <h3 className="text-2xl font-rajdhani font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-fira-code">
                  <span
                    className="transition-colors duration-300"
                    style={{ color: feature.color }}
                  >
                    Explore
                  </span>
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                    style={{ color: feature.color }}
                  />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;