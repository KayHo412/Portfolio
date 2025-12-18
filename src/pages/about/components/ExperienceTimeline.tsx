import { Experience } from '../types';
import Icon from '../../../components/AppIcon';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 neon-glow-secondary mb-4">
            <Icon name="Briefcase" size={20} className="text-secondary" />
            <span className="text-sm font-rajdhani font-semibold text-secondary">Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-foreground mb-4">
            My <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Experience Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From student to professional, every step has been a learning adventure
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-orbitron font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-secondary font-rajdhani font-semibold mb-1">{exp.organization}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center neon-glow-primary group-hover:scale-110 transition-transform duration-300">
                        <Icon name={exp.icon} size={24} className="text-primary" />
                      </div>
                    </div>

                    <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full items-center justify-center border-4 border-background neon-glow-primary z-10">
                  <Icon name={exp.icon} size={28} className="text-white" />
                </div>

                <div className="hidden lg:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;