import { Helmet } from 'react-helmet';
import QuestCard from '../../components/game-ui/QuestCard';
import PixelBox from '../../components/game-ui/PixelBox';
import PixelDivider from '../../components/game-ui/PixelDivider';
import PixelButton from '../../components/game-ui/PixelButton';
import BadgeLabel from '../../components/game-ui/BadgeLabel';
import HealthBar from '../../components/game-ui/HealthBar';
import {
  PersonalInfo,
  Experience,
  Hobby,
  Value,
  SocialLink } from
'./types';

const About = () => {
  const personalInfo: PersonalInfo = {
    name: "Khoa Ho",
    title: "Software Engineering Student & Game Developer",
    tagline: "Building practical digital products and game projects with a focus on clarity, quality, and collaboration",
    location: "Tampere, Finland",
    nationality: "Vietnamese",
    languages: [
    { name: "Vietnamese", proficiency: "Native", level: 100, flag: "🇻🇳", alt: "Vietnamese flag" },
    { name: "English", proficiency: "Fluent", level: 95, flag: "🇬🇧", alt: "British flag" },
    { name: "Finnish", proficiency: "Intermediate", level: 60, flag: "🇫🇮", alt: "Finnish flag" }],

    bio: "I'm a software engineering student at Tampere University of Applied Sciences with experience in web development, Unity, C#, customer-facing work, and international collaboration. I value practical problem-solving, clean implementation, and steady learning through real projects.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE9xIJf1NrTDw/profile-displayphoto-crop_800_800/B4DZiskihcHwAI-/0/1755241922067?e=1766620800&v=beta&t=ZqcyyXcPtwsAhqG1kM1QBYh-Y0RbqD4PL8N3vEykakg",
    alt: "Portrait of Khoa Ho - Full-Stack Developer and Software Engineering Student"
  };

  const experiences: Experience[] = [
  {
    id: "exp1",
    title: "Software Engineering Student",
    organization: "Tampere University of Applied Sciences",
    period: "2023 - Present",
    description: "Pursuing a Bachelor's degree in Software Engineering with a focus on web development and game development.",
    highlights: [
    "Coursework in full-stack web development, DevOps, and software architecture",
    "Maintained YKI scholarship for 2 years with A2.2 Finnish proficiency",
    "Led multiple team projects in agile development environments",
    "Earned recognition for collaborative teamwork and mentorship"],

    icon: "GraduationCap"
  },
  {
    id: "exp2",
    title: "TAMK Ambassador",
    organization: "Tampere University of Applied Sciences",
    period: "Fall 2023 to Summer 2024",
    description: "Represented TAMK at events, provided campus tours, and supported prospective students.",
    highlights: [
    "Conducted 20+ campus tours for prospective students and families",
    "Assisted prospective students with admissions and orientation processes",
    "Organized info sessions and Q&A panels",
    "Received positive feedback for friendly and informative guidance"],

    icon: "Users"
  },
  {
    id: "exp3",
    title: "Restaurant Waiter",
    organization: "Oppa Korean BBQ Restaurant",
    period: "Fall 2024 - Summer 2025",
    description: "Delivered customer service in a fast-paced restaurant environment.",
    highlights: [
    "Managed high-volume customer service during peak hours",
    "Provided personalized recommendations on menu items",
    "Handled check-in system and payments accurately",
    "Managed inventory and restocked supplies efficiently"],

    icon: "Utensils"
  }];


  const hobbies: Hobby[] = [
  {
    id: "hobby1",
    name: "Badminton",
    description: "Badminton helps me stay disciplined, focused, and quick under pressure.",
    icon: "Zap",
    image: "https://racketnow.com/cdn/shop/collections/TSA01246.jpg?v=1727253023&width=2400",
    alt: "Badminton player executing powerful smash shot",
    skills: ["Precision", "Quick Thinking", "Strategy", "Teamwork"]
  },
  {
    id: "hobby2",
    name: "Cooking",
    description: "Cooking is a practical and creative interest that strengthens my planning and attention to detail.",
    icon: "ChefHat",
    image: "https://cdn.shopify.com/s/files/1/1186/5476/files/LIFESTYLE_2000x2000_48e752d7-2561-4472-831d-f164a3ea7405_1024x1024.jpg?v=1565717897",
    alt: "Chef preparing colorful Asian fusion dish",
    skills: ["Creativity", "Experimentation", "Patience", "Innovation"]
  }];


  const values: Value[] = [
  {
    id: "val1",
    title: "Continuous Learning",
    description: "I stay current through courses, projects, and professional engagement.",
    icon: "BookOpen"
  },
  {
    id: "val2",
    title: "Quality Over Speed",
    description: "I prioritize clean, maintainable solutions and thoughtful implementation.",
    icon: "Award"
  },
  {
    id: "val3",
    title: "Cultural Intelligence",
    description: "My multicultural background helps me collaborate effectively across different perspectives.",
    icon: "Globe"
  },
  {
    id: "val4",
    title: "Creative Problem-Solving",
    description: "I approach challenges with curiosity, adaptability, and attention to detail.",
    icon: "Lightbulb"
  }];

  const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/KayHo412", icon: "Github", username: "@KayHo412" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/khoa-phan-ho-75771b2a9/", icon: "Linkedin", username: "Khoa Phan Ho" },
  { platform: "Instagram", url: "https://www.instagram.com/kp_phan/", icon: "Instagram", username: "@kp_phan" }];


  return (
    <>
      <Helmet>
        <title>Khoa Ho - About</title>
        <meta
          name="description"
          content="Khoa Ho's background, education, experience, and professional interests in web and game development."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-12">
          {/* === PROFILE === */}
          <PixelBox variant="primary" borderWidth={4} title="ABOUT">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.alt}
                  className="w-40 h-40 md:w-48 md:h-48 pixel-border-3 border-primary"
                />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h1 className="font-pixel text-2xl md:text-3xl neon-primary mb-2">
                    {personalInfo.name}
                  </h1>
                  <p className="font-mono text-sm text-secondary font-bold">
                    [{personalInfo.title.toUpperCase()}]
                  </p>
                </div>
                <p className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {personalInfo.bio}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <BadgeLabel text={personalInfo.location} variant="secondary" />
                  <BadgeLabel text={personalInfo.nationality} variant="accent" />
                </div>
              </div>
            </div>
          </PixelBox>

          {/* === LANGUAGE PROFICIENCY === */}
          <PixelDivider variant="primary" />

          <PixelBox variant="secondary" borderWidth={3} title="LANGUAGE MATRIX">
            <div className="space-y-4">
              {personalInfo.languages.map((lang) => (
                <HealthBar
                  key={lang.name}
                  label={`${lang.flag} ${lang.name}`}
                  current={lang.level}
                  max={100}
                  barColor={lang.level === 100 ? 'primary' : lang.level >= 90 ? 'secondary' : 'accent'}
                  showPercentage={false}
                />
              ))}
            </div>
          </PixelBox>

          {/* === EXPERIENCE === */}
          <PixelDivider variant="secondary" />

          <div className="space-y-4">
            <h2 className="font-pixel text-xl md:text-2xl text-primary neon-primary">
              ▶ EXPERIENCE
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <QuestCard
                  key={exp.id}
                  title={exp.title}
                  company={exp.organization}
                  period={exp.period}
                  description={exp.description}
                  achievements={exp.highlights}
                  isInProgress={exp.id === 'exp1'}
                  icon={exp.icon}
                  experienceId={exp.id}
                />
              ))}
            </div>
          </div>

          {/* === INTERESTS === */}
          <PixelDivider variant="accent" />

          <PixelBox variant="accent" borderWidth={3} title="INTERESTS">
            <div className="space-y-6">
              {hobbies.map((hobby) => (
                <div key={hobby.id} className="pixel-border-2 border-accent p-4 space-y-3">
                  <h3 className="font-pixel text-sm md:text-base text-accent neon-accent">
                    {hobby.name.toUpperCase()}
                  </h3>
                  <p className="text-xs md:text-sm text-foreground font-mono">
                    {hobby.description}
                  </p>
                  {hobby.image && (
                    <img
                      src={hobby.image}
                      alt={hobby.alt}
                      className="w-full h-32 md:h-48 object-cover pixel-border-2 border-accent opacity-75"
                    />
                  )}
                  {hobby.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {hobby.skills.map((skill) => (
                        <BadgeLabel key={skill} text={skill} variant="secondary" />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </PixelBox>

          {/* === VALUES === */}
          <PixelDivider variant="primary" />

          <div>
            <h2 className="font-pixel text-xl md:text-2xl text-primary neon-primary mb-4">
              ▶ VALUES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value) => (
                <PixelBox key={value.id} variant="primary" borderWidth={2}>
                  <h3 className="font-pixel text-xs md:text-sm text-secondary mb-2">
                    {value.title.toUpperCase()}
                  </h3>
                  <p className="text-xs md:text-sm text-foreground font-mono">
                    {value.description}
                  </p>
                </PixelBox>
              ))}
            </div>
          </div>

          {/* === CONTACT === */}
          <PixelDivider variant="secondary" />

          <PixelBox variant="secondary" borderWidth={4} title="CONTACT">
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-mono text-foreground">
                Interested in collaboration, internships, or full-time opportunities? Reach out through any of the channels below:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {socialLinks.map((link) => (
                  <PixelButton
                    key={link.platform}
                    asLink
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="flex-1 text-center"
                  >
                    [{link.platform.toUpperCase()}]
                  </PixelButton>
                ))}
                <PixelButton
                  asLink
                  href="https://kaho412.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                  className="flex-1 text-center"
                >
                  [ITCH.IO]
                </PixelButton>
              </div>
              <div className="pt-2 border-t-2 border-border">
                <PixelButton asLink href="https://drive.google.com/uc?export=download&id=1Pudg10VOAYvQmUmeDH2kdqurinyyiRwT" target="_blank" rel="noopener noreferrer" variant="secondary" iconName="Download" className="w-full text-center">DOWNLOAD CV</PixelButton>
              </div>
            </div>
          </PixelBox>
        </main>
      </div>
    </>);

};

export default About;