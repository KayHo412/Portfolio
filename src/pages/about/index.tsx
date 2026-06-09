import { Helmet } from 'react-helmet';
import Image from '../../components/AppImage';
import {
  PersonalInfo,
  Experience,
  Hobby,
  Value,
  SocialLink } from
'./types';

const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4">
    <div className="h-px flex-1 bg-border" />
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">{label}</span>
    <div className="h-px flex-1 bg-border" />
  </div>
);

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
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG-NsDcWWydlg/profile-displayphoto-crop_800_800/B4DZ5loAkdGQAM-/0/1779821450616?e=1782345600&v=beta&t=bA8q9Nj7VjpEFwyNSL_TOSfe4SwdT4LCUStpwk1bHIU",
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

      <div className="min-h-screen bg-base text-ink">
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-14 md:px-8">
          <section className="space-y-8">
            <div className="grid gap-6 border border-border bg-surface p-6 md:grid-cols-2">
              <div className="w-full md:w-[240px]">
                <Image
                  src={personalInfo.image}
                  alt={personalInfo.alt}
                  className="block h-48 md:h-[240px] w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                  {personalInfo.title}
                </p>
                <h1 className="text-[clamp(2rem,6vw,48px)] md:text-[clamp(2.75rem,6vw,64px)] leading-[0.95] tracking-[-0.03em] text-ink">
                  {personalInfo.name}
                </h1>
                <p className="max-w-2xl text-[15px] leading-[1.75] text-ink-dim">
                  {personalInfo.bio}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim">
                  <span className="border border-border-strong px-3 py-1 text-amber">{personalInfo.location}</span>
                  <span className="border border-border px-3 py-1">{personalInfo.nationality}</span>
                </div>
              </div>
            </div>
          </section>

          <SectionDivider label="languages" />

          <section className="space-y-4 border border-border bg-surface p-6">
              <div className="grid gap-4">
              {personalInfo.languages.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.08em]">
                    <span className="text-ink">{lang.flag} {lang.name}</span>
                    <span className="text-ink-dim">{lang.proficiency}</span>
                  </div>
                  <div className="h-[2px] bg-border">
                    <div className="h-full bg-amber" style={{ width: `${lang.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <SectionDivider label="experience" />

          <section className="space-y-4">
            {experiences.map((exp) => (
              <article key={exp.id} className="border border-border bg-surface p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">
                      {exp.period}
                    </p>
                    <h2 className="text-[20px] md:text-[26px] text-ink">{exp.title}</h2>
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-amber">
                      {exp.organization}
                    </p>
                  </div>
                  {exp.id === 'exp1' && (
                    <span className="border border-border-strong px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-amber">
                      IN PROGRESS
                    </span>
                  )}
                </div>
                <p className="mt-4 max-w-3xl text-[13px] leading-[1.75] text-ink-dim">
                  {exp.description}
                </p>
                <div className="mt-5 space-y-2 border-l border-amber pl-4">
                  {exp.highlights.map((highlight) => (
                    <p key={highlight} className="font-mono text-[13px] leading-[1.7] text-ink-dim">
                      {highlight}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <SectionDivider label="interests" />

          <section className="grid gap-6 md:grid-cols-2">
            {hobbies.map((hobby) => (
              <article key={hobby.id} className="border border-border bg-surface p-6">
                <h2 className="text-[20px] md:text-[28px] text-ink">{hobby.name}</h2>
                <p className="mt-2 text-[13px] leading-[1.75] text-ink-dim">{hobby.description}</p>
                {hobby.image && (
                  <Image
                    src={hobby.image}
                    alt={hobby.alt}
                    className="mt-4 block h-40 md:h-48 w-full object-cover"
                  />
                )}
                <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-dim">
                  {hobby.skills.map((skill) => (
                    <span key={skill} className="border border-border px-3 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <SectionDivider label="values" />

          <section className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.id} className="border border-border bg-surface p-6">
                <h2 className="text-[18px] md:text-[22px] text-ink">{value.title}</h2>
                <p className="mt-3 text-[13px] leading-[1.75] text-ink-dim">{value.description}</p>
              </article>
            ))}
          </section>

          <SectionDivider label="contact" />

          <section className="border border-border bg-surface p-6 space-y-4">
            <p className="max-w-2xl text-[13px] leading-[1.75] text-ink-dim">
              Interested in collaboration, internships, or full-time opportunities? Reach out through any of the channels below:
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border-strong px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2"
                >
                  {link.platform}
                </a>
              ))}
              <a
                href="https://kaho412.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border-strong px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-amber transition-colors hover:bg-surface-2"
              >
                Itch.io
              </a>
            </div>
            <div className="border-t border-border pt-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1Pudg10VOAYvQmUmeDH2kdqurinyyiRwT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-border-strong px-4 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2"
              >
                Download CV
              </a>
            </div>
          </section>
        </main>
      </div>
    </>);

};

export default About;