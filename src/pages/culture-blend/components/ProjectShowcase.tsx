import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { CrossCulturalProject } from '../types';

interface ProjectShowcaseProps {
  projects: CrossCulturalProject[];
}

const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-card rounded-xl border-2 border-border hover:border-secondary transition-all duration-300 overflow-hidden group neon-glow-secondary"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-orbitron font-bold text-primary mb-2">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.countries.map((country, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-rajdhani font-semibold rounded-full border border-secondary/30"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6">
            <p className="text-sm text-foreground mb-4 leading-relaxed">{project.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-muted-foreground">
                <Icon name="Users" size={18} className="mr-2 text-primary" />
                <span className="text-sm">{project.teamSize} Team Members</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Icon name="Clock" size={18} className="mr-2 text-secondary" />
                <span className="text-sm">{project.duration}</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-rajdhani font-semibold text-accent mb-2 flex items-center">
                <Icon name="Code2" size={16} className="mr-2" />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-foreground text-xs font-fira-code rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-rajdhani font-semibold text-success mb-2 flex items-center">
                <Icon name="Target" size={16} className="mr-2" />
                Key Outcomes
              </h4>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-start">
                    <Icon name="CheckCircle2" size={14} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="outline"
              fullWidth
              iconName="ExternalLink"
              iconPosition="right"
              className="border-primary text-primary hover:bg-primary/10"
            >
              View Project Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;