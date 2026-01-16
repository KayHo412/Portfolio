import { Experience } from '../types';
import Icon from '../../../components/AppIcon';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full border-0 mb-4">
            <Icon name="Briefcase" size={18} className="text-secondary" />
            <span className="text-sm font-semibold text-foreground">Professional Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text-secondary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, learning, and professional development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-transparent hidden lg:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-stretch ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="glass-card p-8 rounded-2xl border-0 hover:shadow-lg hover:shadow-primary/20 transition-smooth group h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        {exp.organization && (
                          <p className="text-secondary font-semibold text-sm mb-1">{exp.organization}</p>
                        )}
                        {exp.period && (
                          <p className="text-xs text-muted-foreground">{exp.period}</p>
                        )}
                      </div>
                      <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                        <Icon name={exp.icon} size={24} className="text-primary" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 mb-6 leading-relaxed flex-1">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Icon name="CheckCircle2" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full items-center justify-center border-4 border-background shadow-lg shadow-primary/40 z-10 flex-shrink-0">
                  <Icon name={exp.icon} size={28} className="text-white" />
                </div>

                {/* Empty space for layout */}
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