import { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import SkillsShowcase from './components/SkillsShowcase';
import CTASection from './components/CTASection';
import ParticleBackground from './components/ParticleBackground';
import type {
  HeroSection as HeroSectionType,
  FeatureCard,
  Skill,
  SocialLink,
} from './types';

const Homepage = () => {
  useEffect(() => {
    document.title = "Khoa's Digital Playground - Code Chef & Shuttlecock Master";
  }, []);

  const heroData: HeroSectionType = {
    title: "Khoa's Digital Playground",
    subtitle: "Code Chef & Digital Shuttlecock Master",
    description:
      "I code with the precision of a badminton champion and the creativity of a master chef. Welcome to my funky, neon-lit corner of the internet where technical excellence meets playful innovation.",
    primaryCTA: {
      text: "Let's Cook Up Something Amazing",
      icon: "Rocket",
    },
    secondaryCTA: {
      text: "Download My Recipe Book",
      icon: "Download",
    },
  };

  const features: FeatureCard[] = [
    {
      id: "kitchen",
      icon: "ChefHat",
      title: "Superpower Kitchen",
      description:
        "Discover my skills visualized through cooking utensils and badminton equipment metaphors with proficiency meters.",
      color: "#FFD700",
      link: "/superpower-kitchen",
    },
    {
      id: "story",
      icon: "User",
      title: "The Chef's Story",
      description:
        "Read my personal narrative blending Finnish student life, multicultural experiences, and passion projects.",
      color: "#FF6B35",
      link: "/about",
    },
    {
      id: "culture",
      icon: "Globe",
      title: "Culture Blend",
      description:
        "Experience my multicultural perspective and language skills that bridge different worlds and communities.",
      color: "#4A90E2",
      link: "/culture-blend",
    },
    {
      id: "contact",
      icon: "Mail",
      title: "Serve & Volley",
      description:
        "Get in touch with playful CTAs and multiple engagement options. Let's start a conversation!",
      color: "#00FF7F",
      link: "/about",
    },
  ];

  const skills: Skill[] = [
    { name: "React", icon: "Code2", level: 90, category: "frontend" },
    { name: "TypeScript", icon: "FileCode", level: 85, category: "backend" },
    { name: "Next.js", icon: "Layers", level: 80, category: "frontend" },
    { name: "Tailwind CSS", icon: "Palette", level: 70, category: "frontend" },
    { name: "Node.js", icon: "Server", level: 85, category: "backend" },
    { name: "PostgreSQL", icon: "Database", level: 80, category: "backend" },
    { name: "MongoDB", icon: "Database", level: 75, category: "backend" },
    { name: "Git", icon: "GitBranch", level: 90, category: "tools" },
    { name: "Docker", icon: "Box", level: 70, category: "tools" },
  ];

  const socialLinks: SocialLink[] = [
    {
      platform: "GitHub",
      icon: "Github",
      url: "https://github.com/KayHo412",
      color: "#FF1493",
    },
    {
      platform: "LinkedIn",
      icon: "Linkedin",
      url: "https://www.linkedin.com/in/khoa-phan-ho-75771b2a9/",
      color: "#00BFFF",
    },
    {
      platform: "Email",
      icon: "Mail",
      url: "mailto:khoaphan412@gmail.com",
      color: "#FF6B35",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Header />

      <main className="relative z-10">
        <HeroSection data={heroData} />
        <FeatureCards features={features} />
        <SkillsShowcase skills={skills} />
        <CTASection socialLinks={socialLinks} />
      </main>

      <footer className="relative z-10 bg-card border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground font-fira-code text-sm">
            © {new Date().getFullYear()} Khoa's Digital Playground. Crafted with{" "}
            <span className="text-primary">♥</span> and{" "}
            <span className="text-secondary">code</span>
          </p>
          <p className="text-muted-foreground font-fira-code text-xs mt-2">
            Smashing bugs and serving solutions, one commit at a time
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;