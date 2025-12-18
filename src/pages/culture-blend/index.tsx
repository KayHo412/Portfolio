import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LanguageCard from './components/LanguageCard';
import CulturalTimeline from './components/CulturalTimeline';
// ProjectShowcase removed
import CompetencyGrid from './components/CompetencyGrid';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import {
  Language,
  TimelineEvent,
  CulturalCompetency } from
'./types';

const CultureBlend = () => {
  const languages: Language[] = [
  {
    id: 'english',
    name: 'English',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1024px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
    proficiency: 95,
    level: 'Native/Fluent',
    description: 'Primary language for professional communication, technical documentation, and international collaboration. Used extensively in software development, academic research, and cross-cultural team environments.',
    certifications: ['IELTS Academic - Band 7.5', 'Cambridge Advanced English (CAE)']
  },
  {
    id: 'finnish',
    name: 'Finnish',
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
    proficiency: 60,
    level: 'Basic-Intermediate',
    description: 'Acquired through immersive experience living and studying in Finland. Enables basic communication in everyday situations.',
    certifications: ['YKI Test - Level A2.2 (Soon to be B1)', 'Finnish Language Course - Tampere University of Applied Sciences']
  },
  {
    id: 'vietnamese',
    name: 'Vietnamese',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png",
    proficiency: 100,
    level: 'Native',
    description: 'Mother tongue providing deep cultural understanding and connection to Vietnamese heritage. Enables effective communication with diverse Asian markets and multicultural team members from Southeast Asia.',
    certifications: ['Native Speaker']
  },
  ];


  const timelineEvents: TimelineEvent[] = [
  {
    id: 'event1',
    year: '2023',
    title: 'Arrival in Finland',
    location: 'Helsinki, Finland',
    description: 'Began international student journey at Finnish university, immersing in Nordic culture while pursuing computer science degree. Quickly adapted to Finnish education system and embraced local tech community.',
    type: 'cultural',
    icon: 'Plane',
    image: "https://www.helsinkitimes.fi/images/2023/03/helsinki_airport_apron_and_air_traffic_control_tower.jpg",
    alt: 'Helsinki cityscape with modern architecture and waterfront during sunset'
  },
  {
    id: 'event2',
    year: '2023',
    title: 'First Freshman Party',
    location: 'Tampere, Finland',
    description: 'My first ever Finnish student party where I connected with peers from diverse backgrounds, experiencing Finnish social customs and traditions firsthand. This event marked the beginning of my multicultural integration and understanding of Nordic culture.',
    type: 'cultural',
    icon: 'Users',
    image: "https://esnlpr.fi/wp-content/uploads/2024/01/rsz_00454-wappu-2023-scaled.jpg.pagespeed.ce.c0NJrAJFMz.jpg",
    alt: 'Group of international students celebrating at a Finnish student party with decorations and traditional attire'
  },
  {
    id: 'event3',
    year: '2023',
    title: 'First Sauna Experience',
    location: 'Tampere, Finland',
    description: 'Experienced my first traditional Finnish sauna. Learned about the importance of sauna in Finnish culture as a place for relaxation, socializing, and connecting with nature.',
    type: 'cultural',
    icon: 'HotTub',
    image: "https://cdn.matkasuomi.fi/2022/04/Rauhaniemi-sauna-summer-Laura-Vanzo-scaled.jpg",
    alt: 'Wooden Finnish sauna interior with warm lighting and benches'
  },
  {
    id: 'event4',
    year: '2024',
    title: 'Celebrating Vappu',
    location: 'Tampere, Finland',
    description: 'Participated in Vappu, the Finnish May Day celebration. Enjoyed traditional foods like sima and tippaleipä, joined student marches, and experienced the vibrant city-wide festivities.',
    type: 'cultural',
    icon: 'PartyPopper',
    image: "https://images.cdn.yle.fi/image/upload/c_crop,h_3078,w_5472,x_0,y_235/ar_1.7777777777777777,c_fill,g_faces,h_431,w_767/dpr_2.0/q_auto:eco/f_auto/fl_lossy/v1682945690/39-1106922644fb6128a76a",
    alt: 'Crowds celebrating Vappu festival with colorful balloons and student caps'
  },
  {
    id: 'event5',
    year: '2024',
    title: 'Autumn Berry Picking',
    location: 'Tampere, Finland',
    description: 'Joined locals for traditional autumn berry picking in Finnish forests. Learned about Finnish connection to nature, sustainable practices, and the cultural importance of berries in local cuisine.',
    type: 'cultural',
    icon: 'Leaf',
    image: "https://adagioblog.com/wp-content/uploads/2014/11/BenefitsofFreshBerries.jpg",
    alt: 'Person picking wild berries in Finnish forest during autumn'
  },
  {
    id: 'event6',
    year: '2025',
    title: 'Winter Festival and Ice Swimming',
    location: 'Rovaniemi, Finland',
    description: 'Experienced a Finnish winter festival in Lapland. Attended ice sculpture exhibitions, tried ice swimming followed by sauna, and embraced Finnish winter traditions in a snowy, magical environment.',
    type: 'cultural',
    icon: 'Snowflake',
    image: "https://rakastampere.fi/wp-content/uploads/2025/10/Christmas_2023_Tallipiha_Visit_Tampere_Laura_Vanzo-2.jpg",
    alt: 'Frozen lake in Lapland with people enjoying winter festival and snowy landscape'
  },
  {
    id: 'event7',
    year: '2025',
    title: 'Achieved A2.2 Finnish Proficiency',
    location: 'Tampere, Finland',
    description: 'Completed the A2.2 level in Finnish, allowing me to communicate more confidently in everyday situations. This milestone deepened my understanding of Finnish language, culture, and social interactions.',
    type: 'cultural',
    icon: 'BookOpen',
    image: "https://www.hangmoon.fi/content/images/2023/08/IMG_6807-2.jpg",
    alt: 'Student studying Finnish language with textbook and notes on a desk'
  }
 ];


  const culturalCompetencies: CulturalCompetency[] = [
  {
    id: 'comp1',
    category: 'Cross-Cultural Communication',
    icon: 'MessageSquare',
    skills: [
    'Active Listening',
    'Cultural Sensitivity',
    'Conflict Resolution',
    'Non-Verbal Communication'],

    examples: [
    'Successfully mediated technical disagreements between Finnish and Asian team members by understanding different communication styles',
    'Adapted presentation style for Nordic audiences emphasizing directness vs. Asian audiences preferring contextual communication',
    'Created communication guidelines for multicultural teams reducing misunderstandings by 60%']

  },
  {
    id: 'comp2',
    category: 'Global Team Leadership',
    icon: 'Users',
    skills: ['Remote Management', 'Time Zone Coordination', 'Cultural Adaptation', 'Inclusive Leadership'],
    examples: [
    'Led distributed team across 5 time zones with 95% project delivery success rate',
    'Implemented flexible working hours respecting cultural holidays and work-life balance preferences',
    'Developed mentorship program pairing developers from different cultural backgrounds']

  },
  {
    id: 'comp3',
    category: 'Cultural Intelligence',
    icon: 'Brain',
    skills: ['Cultural Awareness', 'Adaptability', 'Empathy', 'Global Mindset'],
    examples: [
    'Quickly adapted to Finnish workplace culture while maintaining Vietnamese cultural identity',
    'Recognized and respected different decision-making processes across cultures in project planning',
    'Created cultural onboarding materials for new international team members']

  },
  {
    id: 'comp4',
    category: 'Language & Localization',
    icon: 'Languages',
    skills: ['Multilingual Communication', 'Technical Translation', 'Cultural Localization', 'Content Adaptation'],
    examples: [
    'Translated technical documentation across 5 languages maintaining accuracy and cultural relevance',
    'Implemented localization strategies for software products serving 10+ countries',
    'Conducted user research in multiple languages to understand diverse user needs']

  }];


  return (
    <>
      <Helmet>
        <title>Culture Blend - Khoa's Digital Playground</title>
        <meta
          name="description"
          content="Explore Khoa's multicultural journey, language proficiency, and cross-cultural collaboration experiences. Discover how global perspective shapes innovative software solutions." />

      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-16 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <HeroSection />

            {/* Language Proficiency Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Icon name="Languages" size={32} className="text-primary" />
                <h2 className="text-3xl font-orbitron font-bold text-foreground">
                  Language Mastery
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Multilingual proficiency enabling seamless communication across diverse teams and markets.
                Click any card to explore detailed language capabilities and certifications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {languages.map((language) =>
                <LanguageCard key={language.id} language={language} />
                )}
              </div>
            </section>

            {/* Cultural Timeline Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Icon name="Calendar" size={32} className="text-secondary" />
                <h2 className="text-3xl font-orbitron font-bold text-foreground">
                  Cultural Journey
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                A chronological exploration of multicultural experiences, achievements, and milestones
                that shaped my global perspective and cross-cultural competencies.
              </p>
              <CulturalTimeline events={timelineEvents} />
            </section>

            {/* International Collaborations section removed */}

            {/* Cultural Competencies Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Icon name="Target" size={32} className="text-success" />
                <h2 className="text-3xl font-orbitron font-bold text-foreground">
                  Cultural Competencies
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Core skills and frameworks developed through multicultural experiences.
                Click each card to explore specific examples and real-world applications.
              </p>
              <CompetencyGrid competencies={culturalCompetencies} />
            </section>

            {/* Call to Action Section */}
            <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border-2 border-primary/30 p-8 md:p-12 text-center">
              <Icon name="Handshake" size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-orbitron font-bold text-foreground mb-4">
                Let's Build Something Global Together
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Looking for a developer who brings both technical expertise and cultural intelligence?
                Let's connect and explore how my multicultural perspective can add value to your team.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  iconName="Mail"
                  iconPosition="left"
                  className="bg-cta hover:bg-cta/90 text-cta-foreground neon-glow-cta">
                  <a href="mailto:khoaphan412@gmail.com">Get In Touch</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  iconName="Download"
                  iconPosition="left"
                  className="border-primary text-primary hover:bg-primary/10">
                  <a href="https://drive.google.com/uc?export=download&id=1Pudg10VOAYvQmUmeDH2kdqurinyyiRwT" target="_blank" rel="noopener noreferrer" download="Khoa_Ho_CV.pdf">Download CV</a>
                </Button>
                <Button
                  variant="outline"
                  iconName="Linkedin"
                  iconPosition="left"
                  className="border-secondary text-secondary hover:bg-secondary/10">

                  <a href="https://www.linkedin.com/in/khoa-phan-ho-75771b2a9/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                </Button>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Khoa's Digital Playground. Crafted with precision and cultural awareness.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/KayHo412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="GitHub Profile">

                  <Icon name="Github" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/khoa-phan-ho-75771b2a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200"
                  aria-label="LinkedIn Profile">

                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>);

};

export default CultureBlend;