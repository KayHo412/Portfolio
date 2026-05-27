import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import type { FeatureCard } from '../types';

interface FeatureCardsProps {
  features: FeatureCard[];
}

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">
              Explore My Digital World
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate through carefully crafted sections that showcase my journey, projects, and learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.id}
              to={feature.link}
              className="group glass-card p-8 rounded-2xl border-0 hover:shadow-lg hover:shadow-primary/20 transition-smooth overflow-hidden animate-fade-in-up h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: feature.color }}
              />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Icon Container */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-smooth group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    backgroundColor: `${feature.color}15`,
                    boxShadow: `0 0 20px ${feature.color}20`
                  }}
                >
                  <Icon
                    name={feature.icon}
                    size={28}
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {feature.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: feature.color }}>
                  <span className="group-hover:translate-x-1 transition-smooth">Explore</span>
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: feature.color }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;