import { Helmet } from 'react-helmet';
import HealthBar from '../../components/game-ui/HealthBar';
import PixelBox from '../../components/game-ui/PixelBox';
import PixelDivider from '../../components/game-ui/PixelDivider';
import BadgeLabel from '../../components/game-ui/BadgeLabel';
import PixelButton from '../../components/game-ui/PixelButton';
import { Language, TimelineEvent, CulturalCompetency } from './types';

const CultureBlend = () => {
  const languages: Language[] = [
    {
      id: 'english',
      name: 'English',
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1024px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
      proficiency: 95,
      level: 'Fluent',
      description: 'Primary language for professional communication and technical documentation.',
      certifications: ['IELTS Academic - Band 7.5', 'Cambridge Advanced English (CAE)']
    },
    {
      id: 'finnish',
      name: 'Finnish',
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
      proficiency: 60,
      level: 'Intermediate',
      description: 'Acquired through immersive experience living and studying in Finland.',
      certifications: ['YKI Test - Level A2.2', 'Finnish Language Course - TAMK']
    },
    {
      id: 'vietnamese',
      name: 'Vietnamese',
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png",
      proficiency: 100,
      level: 'Native',
      description: 'Mother tongue providing deep cultural connection to Vietnamese heritage.',
      certifications: ['Native Speaker']
    },
  ];

  const timelineEvents: TimelineEvent[] = [
    { id: 'event1', year: '2023', title: 'Arrival in Finland', location: 'Helsinki', description: 'Began international student journey at Finnish university. Quickly adapted to Finnish education system and local tech community.', type: 'cultural', icon: 'Plane', image: "https://www.helsinkitimes.fi/images/2023/03/helsinki_airport_apron_and_air_traffic_control_tower.jpg", alt: 'Helsinki cityscape' },
    { id: 'event2', year: '2023', title: 'First Freshman Party', location: 'Tampere', description: 'Connected with peers from diverse backgrounds, experiencing Finnish social customs and traditions firsthand.', type: 'cultural', icon: 'Users', image: "https://esnlpr.fi/wp-content/uploads/2024/01/rsz_00454-wappu-2023-scaled.jpg.pagespeed.ce.c0NJrAJFMz.jpg", alt: 'Finnish student celebration' },
    { id: 'event3', year: '2023', title: 'First Sauna Experience', location: 'Tampere', description: 'Experienced traditional Finnish sauna culture. Learned about the importance of sauna in Finnish life and relaxation.', type: 'cultural', icon: 'Zap', image: "https://cdn.matkasuomi.fi/2022/04/Rauhaniemi-sauna-summer-Laura-Vanzo-scaled.jpg", alt: 'Finnish sauna' },
    { id: 'event4', year: '2024', title: 'Celebrating Vappu', location: 'Tampere', description: 'Participated in Vappu, the Finnish May Day celebration with traditional foods and vibrant festivities.', type: 'cultural', icon: 'Smile', image: "https://images.cdn.yle.fi/image/upload/c_crop,h_3078,w_5472,x_0,y_235/ar_1.7777777777777777,c_fill,g_faces,h_431,w_767/dpr_2.0/q_auto:eco/f_auto/fl_lossy/v1682945690/39-1106922644fb6128a76a", alt: 'Vappu celebration' },
    { id: 'event5', year: '2024', title: 'Autumn Berry Picking', location: 'Tampere', description: 'Joined locals for traditional autumn berry picking in Finnish forests. Learned about Finnish connection to nature.', type: 'cultural', icon: 'Leaf', image: "https://adagioblog.com/wp-content/uploads/2014/11/BenefitsofFreshBerries.jpg", alt: 'Berry picking' },
    { id: 'event6', year: '2025', title: 'Winter Festival & Ice Swimming', location: 'Rovaniemi', description: 'Experienced Finnish winter festival in Lapland. Attended ice sculpture exhibitions and tried ice swimming traditions.', type: 'cultural', icon: 'Snowflake', image: "https://rakastampere.fi/wp-content/uploads/2025/10/Christmas_2023_Tallipiha_Visit_Tampere_Laura_Vanzo-2.jpg", alt: 'Winter festival' },
    { id: 'event7', year: '2025', title: 'Achieved A2.2 Finnish Proficiency', location: 'Tampere', description: 'Completed A2.2 level in Finnish, allowing confident communication in everyday situations.', type: 'cultural', icon: 'BookOpen', image: "https://www.hangmoon.fi/content/images/2023/08/IMG_6807-2.jpg", alt: 'Language study' }
  ];

  const culturalCompetencies: CulturalCompetency[] = [
    { id: 'comp1', category: 'Cross-Cultural Communication', icon: 'MessageSquare', skills: ['Active Listening', 'Cultural Sensitivity', 'Conflict Resolution', 'Non-Verbal Communication'], examples: ['Successfully mediated technical disagreements between Finnish and Asian team members', 'Adapted presentation style for Nordic vs Asian audiences', 'Created communication guidelines for multicultural teams'] },
    { id: 'comp2', category: 'Global Team Leadership', icon: 'Users', skills: ['Remote Management', 'Time Zone Coordination', 'Cultural Adaptation', 'Inclusive Leadership'], examples: ['Led distributed team across 5 time zones with 95% delivery success', 'Implemented flexible working hours respecting cultural holidays', 'Developed mentorship program for cross-cultural pairs'] },
    { id: 'comp3', category: 'Cultural Intelligence', icon: 'Brain', skills: ['Cultural Awareness', 'Adaptability', 'Empathy', 'Global Mindset'], examples: ['Quickly adapted to Finnish workplace culture while maintaining Vietnamese identity', 'Recognized and respected different decision-making processes', 'Created cultural onboarding materials for international teams'] },
    { id: 'comp4', category: 'Language & Localization', icon: 'Languages', skills: ['Multilingual Communication', 'Technical Translation', 'Cultural Localization', 'Content Adaptation'], examples: ['Translated technical documentation across 5 languages', 'Implemented localization strategies for 10+ countries', 'Conducted user research in multiple languages'] }
  ];

  return (
    <>
      <Helmet>
        <title>Khoa Ho - Culture & Language</title>
        <meta
          name="description"
          content="Khoa Ho's language skills, international background, and cross-cultural collaboration experience."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-12">
          {/* === HEADER === */}
          <PixelBox variant="primary" borderWidth={4} title="CULTURE & LANGUAGE">
            <p className="text-xs md:text-sm font-mono text-foreground">
              International background combining Vietnamese heritage, Nordic experience, and professional communication.
            </p>
          </PixelBox>

          {/* === LANGUAGE MATRIX === */}
          <PixelDivider variant="primary" />

          <PixelBox variant="secondary" borderWidth={3} title="LANGUAGE PROFICIENCY">
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.id} className="space-y-2 pb-4 border-b-2 border-border last:border-b-0 last:pb-0">
                  <HealthBar
                    label={lang.name}
                    current={lang.proficiency}
                    max={100}
                    barColor={lang.proficiency === 100 ? 'primary' : lang.proficiency >= 90 ? 'secondary' : 'accent'}
                    showPercentage={false}
                  />
                  <p className="text-xs text-foreground font-mono">{lang.description}</p>
                  {lang.certifications && lang.certifications.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {lang.certifications.map((cert) => (
                        <BadgeLabel key={cert} text={cert} variant="primary" />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </PixelBox>

          {/* === TIMELINE === */}
          <PixelDivider variant="secondary" />

          <PixelBox variant="accent" borderWidth={3} title="INTERNATIONAL EXPERIENCE">
            <div className="space-y-3">
              {timelineEvents.map((event) => (
                <div key={event.id} className="pixel-border-2 border-accent p-3 space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1">
                      <h3 className="font-pixel text-xs text-accent neon-accent">
                        [{event.year}] {event.title.toUpperCase()}
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono">
                        LOCATION: {event.location}
                      </p>
                    </div>
                    <BadgeLabel text={event.type.toUpperCase()} variant="secondary" />
                  </div>
                  <p className="text-xs text-foreground font-mono leading-relaxed">{event.description}</p>
                  {event.image && (
                    <img src={event.image} alt={event.alt} className="w-full h-24 object-cover pixel-border-2 border-accent opacity-75" />
                  )}
                </div>
              ))}
            </div>
          </PixelBox>

          {/* === COMPETENCIES === */}
          <PixelDivider variant="accent" />

          <div className="space-y-3">
            <h2 className="font-pixel text-xl text-secondary neon-secondary">▶ COLLABORATION STRENGTHS</h2>
            {culturalCompetencies.map((comp) => (
              <PixelBox key={comp.id} variant="primary" borderWidth={2}>
                <h3 className="font-pixel text-xs md:text-sm text-primary neon-primary mb-2">
                  {comp.category.toUpperCase()}
                </h3>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {comp.skills.map((skill) => (
                      <BadgeLabel key={skill} text={skill} variant="secondary" />
                    ))}
                  </div>
                  <div className="pt-2 border-t-2 border-border">
                    {comp.examples.map((ex, i) => (
                      <div key={i} className="text-xs text-foreground font-mono mb-1">
                        → {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </PixelBox>
            ))}
          </div>

          {/* === CTA === */}
          <PixelDivider variant="primary" />

          <PixelBox variant="primary" borderWidth={4} title="CONTACT">
            <p className="text-xs md:text-sm font-mono text-foreground mb-4">
              Open to opportunities where cultural awareness, communication, and technical skills add value to the team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PixelButton
                asLink
                href="mailto:khoaphan412@gmail.com"
                variant="primary"
                className="flex-1 text-center"
              >
                EMAIL
              </PixelButton>
              <PixelButton
                asLink
                href="https://www.linkedin.com/in/khoa-phan-ho-75771b2a9/"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="flex-1 text-center"
              >
                LINKEDIN
              </PixelButton>
            </div>
          </PixelBox>
        </main>
      </div>
    </>
  );
};

export default CultureBlend;
