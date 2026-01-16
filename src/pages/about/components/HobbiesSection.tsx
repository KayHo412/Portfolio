import { Hobby } from '../types';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

interface HobbiesSectionProps {
  hobbies: Hobby[];
}

const HobbiesSection = ({ hobbies }: HobbiesSectionProps) => {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full border-0 mb-4">
            <Icon name="Heart" size={18} className="text-accent" />
            <span className="text-sm font-semibold text-foreground">Beyond Code</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text-primary">Passions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where precision meets creativity - my hobbies shape my approach to development
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.id}
              className="group relative glass-card rounded-2xl overflow-hidden border-0 hover:shadow-xl hover:shadow-primary/20 transition-smooth animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <Image
                  src={hobby.image}
                  alt={hobby.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 bg-accent/90 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg">
                  <Icon name={hobby.icon} size={28} className="text-accent-foreground" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {hobby.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {hobby.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {hobby.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 glass-card rounded-lg text-xs font-semibold text-foreground/80 hover:text-accent transition-smooth border-0"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;