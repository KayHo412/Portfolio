import { Hobby } from '../types';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

interface HobbiesSectionProps {
  hobbies: Hobby[];
}

const HobbiesSection = ({ hobbies }: HobbiesSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 neon-glow-accent mb-4">
            <Icon name="Heart" size={20} className="text-accent" />
            <span className="text-sm font-rajdhani font-semibold text-accent">Beyond Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-foreground mb-4">
            My <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Passions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where precision meets creativity - my hobbies shape my approach to development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={hobby.image}
                  alt={hobby.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 right-4 w-16 h-16 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center neon-glow-accent">
                  <Icon name={hobby.icon} size={32} className="text-accent-foreground" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {hobby.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{hobby.description}</p>

                <div className="flex flex-wrap gap-2">
                  {hobby.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground hover:bg-accent/20 hover:text-accent transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;