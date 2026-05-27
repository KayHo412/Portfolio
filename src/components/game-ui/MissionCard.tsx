import React from 'react';
import PixelButton from './PixelButton';

interface MissionCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  thumbnail?: string;
  alt?: string;
}

/* GAME UI MISSION CARD - Project board entry with flickering border on hover */
const MissionCard: React.FC<MissionCardProps> = ({
  title,
  description,
  technologies,
  demoUrl,
  codeUrl,
  thumbnail,
  alt,
}) => {
  return (
    <div className="game-box pixel-border-3 overflow-hidden hover:flicker-hover transition-all">
      {/* Thumbnail */}
      {thumbnail && (
        <div className="w-full h-32 md:h-40 bg-card border-b-2 border-border overflow-hidden">
          <img
            src={thumbnail}
            alt={alt || title}
            className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4 md:p-5 space-y-3">
        {/* Title */}
        <h3 className="font-pixel text-xs md:text-sm text-primary neon-primary">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-foreground font-mono leading-relaxed">
          {description}
        </p>

        {/* Tech badges */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="pixel-border-2 border-secondary px-2 py-1 text-xs font-mono text-secondary"
              >
                [{tech}]
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        {(demoUrl || codeUrl) && (
          <div className="flex gap-2 pt-3">
            {demoUrl && (
              <PixelButton
                asLink
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                iconName="ExternalLink"
                iconPosition="right"
                className="text-xs flex-1 text-center"
              >
                ▶ DEMO
              </PixelButton>
            )}
            {codeUrl && (
              <PixelButton
                asLink
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                iconName="Code2"
                iconPosition="right"
                className="text-xs flex-1 text-center"
              >
                &lt;/&gt; CODE
              </PixelButton>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionCard;
