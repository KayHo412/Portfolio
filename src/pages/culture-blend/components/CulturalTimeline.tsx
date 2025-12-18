import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { TimelineEvent } from '../types';

interface CulturalTimelineProps {
  events: TimelineEvent[];
}

const CulturalTimeline = ({ events }: CulturalTimelineProps) => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const getTypeColor = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'education':
        return 'text-primary border-primary';
      case 'work':
        return 'text-secondary border-secondary';
      case 'cultural':
        return 'text-accent border-accent';
      case 'achievement':
        return 'text-success border-success';
      default:
        return 'text-foreground border-foreground';
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent neon-glow-primary hidden md:block" />

      <div className="space-y-8">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`relative pl-0 md:pl-20 transition-all duration-500 ${
              activeEvent === event.id ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setActiveEvent(event.id)}
            onMouseLeave={() => setActiveEvent(null)}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-6 top-6 w-5 h-5 rounded-full border-4 ${getTypeColor(
                event.type
              )} bg-background hidden md:block ${
                activeEvent === event.id ? 'scale-150 neon-glow-primary' : ''
              } transition-all duration-300`}
            />

            {/* Content Card */}
            <div
              className={`bg-card rounded-xl border-2 ${
                activeEvent === event.id ? 'border-primary neon-glow-primary' : 'border-border'
              } p-6 transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {event.image && (
                  <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={event.image}
                      alt={event.alt || `${event.title} at ${event.location}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name={event.icon} size={24} className={getTypeColor(event.type)} />
                        <span className="text-sm font-fira-code text-accent">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-orbitron font-bold text-foreground mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Icon name="MapPin" size={14} className="mr-1" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalTimeline;