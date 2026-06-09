import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Image from '../../components/AppImage';
import { Language, TimelineEvent, CulturalCompetency } from './types';

const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4">
    <div className="h-px flex-1 bg-border" />
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">{label}</span>
    <div className="h-px flex-1 bg-border" />
  </div>
);

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

      <div className="min-h-screen bg-base text-ink">
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-14 md:px-8">
          <section className="space-y-4 border border-border bg-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">
              CULTURE &amp; LANGUAGE
            </p>
            <p className="max-w-2xl text-[13px] leading-[1.75] text-ink-dim">
              International background combining Vietnamese heritage, Nordic experience, and professional communication.
            </p>
          </section>

          <SectionDivider label="languages" />

          <section className="grid gap-4 md:grid-cols-3">
            {languages.map((lang) => (
              <article key={lang.id} className="border border-border bg-surface p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-[22px] text-ink">{lang.name}</h2>
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim">{lang.level}</p>
                  </div>
                  <div className="h-[2px] bg-border">
                    <div className="h-full bg-amber" style={{ width: `${lang.proficiency}%` }} />
                  </div>
                  <p className="text-[13px] leading-[1.75] text-ink-dim">{lang.description}</p>
                  {lang.certifications && lang.certifications.length > 0 && (
                    <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-dim">
                      {lang.certifications.map((cert) => (
                        <span key={cert} className="border border-border px-3 py-1">
                          {cert}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </section>

          <SectionDivider label="timeline" />

          <section className="space-y-4">
            {timelineEvents.map((event) => (
              <article key={event.id} className="border border-border bg-surface p-6">
                <div className="grid gap-4 md:grid-cols-[240px_1fr]">
                  {event.image && (
                    <Image
                      src={event.image}
                      alt={event.alt}
                      className="block h-40 w-full object-cover"
                    />
                  )}
                  <div className="space-y-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">
                      {event.year}
                    </p>
                    <h2 className="text-[24px] text-ink">{event.title}</h2>
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-amber">
                      {event.location}
                    </p>
                    <p className="text-[13px] leading-[1.75] text-ink-dim">{event.description}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-sage">
                      {event.type}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <SectionDivider label="competencies" />

          <section className="grid gap-4 md:grid-cols-2">
            {culturalCompetencies.map((comp) => (
              <article key={comp.id} className="border border-border bg-surface p-6">
                <h2 className="text-[22px] text-ink">{comp.category}</h2>
                <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-dim">
                  {comp.skills.map((skill) => (
                    <span key={skill} className="border border-border px-3 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4 space-y-2 border-l border-amber pl-4">
                  {comp.examples.map((ex) => (
                    <p key={ex} className="text-[13px] leading-[1.75] text-ink-dim">
                      {ex}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <SectionDivider label="contact" />

          <section className="border border-border bg-surface p-6 space-y-4">
            <p className="max-w-2xl text-[13px] leading-[1.75] text-ink-dim">
              Open to opportunities where cultural awareness, communication, and technical skills add value to the team.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="border border-border-strong px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2">
                CONTACT
              </Link>
              <a href="https://www.linkedin.com/in/khoa-phan-ho-75771b2a9/" target="_blank" rel="noopener noreferrer" className="border border-border-strong px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2">
                LINKEDIN
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CultureBlend;
