import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import HobbiesSection from './components/HobbiesSection';
import ValuesSection from './components/ValuesSection';
// Testimonials removed
import CulturalGallery from './components/CulturalGallery';
import CTASection from './components/CTASection';
import {
  PersonalInfo,
  Experience,
  Hobby,
  Value,
  Testimonial,
  CulturalExperience,
  SocialLink } from
'./types';

const About = () => {
  const personalInfo: PersonalInfo = {
    name: "Khoa Ho",
    title: "Full-Stack Developer & Digital Craftsman",
    tagline: "Coding with the precision of a badminton champion and the creativity of a master chef",
    location: "Tampere, Finland",
    nationality: "Vietnamese",
    languages: [
    { name: "Vietnamese", proficiency: "Native", level: 100, flag: "🇻🇳", alt: "Vietnamese flag" },
    { name: "English", proficiency: "Fluent", level: 95, flag: "🇬🇧", alt: "British flag" },
    { name: "Finnish", proficiency: "Intermediate", level: 60, flag: "🇫🇮", alt: "Finnish flag" }],

    bio: "I'm a software engineering student at Tampere University of Applied Sciences in Tampere, where I've earned many great experiences for my personal and professional growth. My journey combines technical precision with creative problem-solving, much like perfecting a badminton smash or crafting the perfect recipe. I believe the best code, like the best dishes, requires the right ingredients, careful preparation, and a dash of innovation.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE9xIJf1NrTDw/profile-displayphoto-crop_800_800/B4DZiskihcHwAI-/0/1755241922067?e=1766620800&v=beta&t=ZqcyyXcPtwsAhqG1kM1QBYh-Y0RbqD4PL8N3vEykakg",
    alt: "Portrait of Khoa Ho - Full-Stack Developer and Software Engineering Student"
  };

  const experiences: Experience[] = [
  {
    id: "exp1",
    title: "Software Engineering Student",
    organization: "Tampere University of Applied Sciences",
    period: "2023 - Present",
    description: "Pursuing Bachelor's degree in Software Engineering with focus on full-stack development.",
    highlights: [
    "Coursework in full-stack web development, DevOps, and software architecture",
    "Maintained YKI scholarship for 2 years with A2.2 Finnish proficiency (Soon to be B1)",
    "Led multiple team projects in agile development environments",
    "A friendly classmate for everyone"],

    icon: "GraduationCap"
  },
  {
    id: "exp2",
    title: "TAMK Ambassador",
    organization: "Tampere University of Applied Sciences",
    period: "Fall 2023 to Summer 2024",
    description: "Representing TAMK at events, providing campus tours, and assisting prospective students with admissions and orientation.",
    highlights: [
    "Conducted 20+ campus tours for prospective students and families",
    "Assisted prospective students with admissions and orientation processes",
    "Organized info sessions and Q&A panels",
    "Received positive feedback for friendly and informative guidance"],

    icon: "Code2"
  },
  {
    id: "exp3",
    title: "Restaurant Waiter",
    organization: "Oppa Korean BBQ Restaurant",
    period: "Fall 2024 - Summer 2025",
    description: "Providing excellent customer service in a fast-paced restaurant environment, taking orders, serving food, and ensuring customer satisfaction.",
    highlights: [
    "Managed high-volume customer service during peak hours",
    "Provided personalized recommendations on menu items",
    "Handle check-in system and payments accurately",
    "Managed inventory and restocked supplies efficiently"],

    icon: "Laptop"
  },
  {
    id: "exp4",
    title: "Soon to be more...",
    organization: "",
    period: "",
    description: "Stay tuned for upcoming experiences and adventures!",
    highlights: [
    "Exciting projects and roles on the horizon",
    "Opportunities for growth and learning",
    "New skills to be acquired",
    "More stories to share"],

    icon: "Users"
  }];


  const hobbies: Hobby[] = [
  {
    id: "hobby1",
    name: "Badminton",
    description: "Playing badminton has taught me the importance of precision, quick decision-making, and strategic thinking - skills that translate perfectly into software development. Every rally is like debugging: you need to anticipate, react quickly, and execute with accuracy.",
    icon: "Zap",
    image: "https://racketnow.com/cdn/shop/collections/TSA01246.jpg?v=1727253023&width=2400",
    alt: "Professional badminton player executing powerful smash shot on indoor court with dramatic lighting",
    skills: ["Precision", "Quick Thinking", "Strategy", "Teamwork"]
  },
  {
    id: "hobby2",
    name: "Cooking",
    description: "Cooking is my creative outlet where I experiment with flavors and techniques. Like coding, it requires following recipes (documentation), understanding ingredients (technologies), and knowing when to improvise. Both demand attention to detail and the courage to try new approaches.",
    icon: "ChefHat",
    image: "https://cdn.shopify.com/s/files/1/1186/5476/files/LIFESTYLE_2000x2000_48e752d7-2561-4472-831d-f164a3ea7405_1024x1024.jpg?v=1565717897",
    alt: "Chef preparing colorful Asian fusion dish in modern kitchen with fresh ingredients and cooking utensils",
    skills: ["Creativity", "Experimentation", "Patience", "Innovation"]
  }];


  const values: Value[] = [
  {
    id: "val1",
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and I'm committed to staying current through courses, projects, and community engagement.",
    icon: "BookOpen"
  },
  {
    id: "val2",
    title: "Quality Over Speed",
    description: "Like a well-crafted dish or a perfect smash, great code takes time. I prioritize clean, maintainable solutions over quick fixes.",
    icon: "Award"
  },
  {
    id: "val3",
    title: "Cultural Intelligence",
    description: "My multicultural background helps me understand diverse perspectives and collaborate effectively in international teams.",
    icon: "Globe"
  },
  {
    id: "val4",
    title: "Creative Problem-Solving",
    description: "I approach challenges with curiosity and creativity, drawing inspiration from my hobbies to find innovative solutions.",
    icon: "Lightbulb"
  }];


  // testimonials removed


  const culturalExperiences: CulturalExperience[] = [
  {
    id: "cult1",
    title: "Engineering Baptism",
    description: "My first party with Finnish engineering students where I experienced the traditional 'baptism' ceremony, symbolizing my initiation into Finnish student culture.",
    image: "https://images.cdn.yle.fi/image/upload/c_crop,h_3595,w_6392,x_0,y_617/ar_1.7777777777777777,c_fill,g_faces,h_431,w_767/dpr_2.0/q_auto:eco/f_auto/fl_lossy/v1692878328/39-116177564e72b2b2d937",
    alt: "Students celebrating outdoors in winter with traditional Finnish student caps and colorful overalls",
    date: "December 2023",
    category: "adaptation"
  },
  {
    id: "cult2",
    title: "First Finnish Winter",
    description: "Experiencing -25°C for the first time and learning to embrace the beauty of Nordic winters. Ice swimming became my new favorite challenge!",
    image: "https://images.ctfassets.net/ig11o1cdf11q/7bmq1NkvG5XGxh0WkUjTJx/414d4da7895deff2aeb5bbf91e5371fd/Winter_view_from_Pyynikin_n_k_torni_Matias_Ahonen_2.jpg.jpg",
    alt: "Snowy Finnish winter landscape with frozen lake",
    date: "December 2023",
    category: "culture"
  },
  {
    id: "cult3",
    title: "First White Christmas",
    description: "Experiencing my first white Christmas in Finland, surrounded by snow and festive traditions.",
    image: "https://whereisthemarket.com/wp-content/uploads/2023/11/juho-luomala-nK7WenuuHqY-unsplash-scaled.jpg",
    alt: "Snowy Finnish winter scene with Christmas decorations and lights",
    date: "December 2023",
    category: "culture"
  },
  {
    id: "cult4",
    title: "Aurora Borealis Night",
    description: "Observing the mesmerizing Northern Lights, a magical experience that deepened my appreciation for Finnish nature and culture.",
    image: "https://static.independent.co.uk/2023/10/02/12/iStock-163729324.jpg?width=1200&height=1200&fit=crop",
    alt: "Northern Lights (Aurora Borealis) dancing in the night sky over a snowy Finnish landscape",
    date: "February 2024",
    category: "culture"
  },
  {
    id: "cult5",
    title: "Embedded Project Win",
    description: "Led my team to victory in an embedded systems competition with a smart robotic automation vehicle, showcasing our technical skills and teamwork.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmThlvj5OpyvEtgxR6ES6CvD1JZ9DryJyvUja3PXT_MHZpc1GSdc3gXBiOtQdsmMXBJX4qFJueR6ueigmTvzJMYWJyzNhSKKCeatr_SAwyrlM-wSP14_HNRDbZmGYJe_mU_tk5yP9I_AzG/s1600/df_robotshop_rover_robot_2.jpg",
    alt: "Robotic vehicle navigating an obstacle course autonomously using embedded systems technology",
    date: "May 2024",
    category: "achievement"
  },
  {
    id: "cult6",
    title: "Sauna & Code Sessions",
    description: "Started a tradition of combining sauna sessions with casual coding discussions with friends - the most Finnish way to debug code!",
    image: "https://finlandnaturally.com/wp-content/uploads/2025/05/sauna-1030x773.jpg",
    alt: "Traditional Finnish wooden sauna interior with warm lighting and steam rising from hot stones",
    date: "Ongoing",
    category: "adaptation"
  },
  {
    id: "cult7",
    title: "YKI Language Milestone",
    description: "Achieved A2.2 proficiency in Finnish and maintained the YKI scholarship for 2 years, demonstrating my commitment to integrating into Finnish society.",
    image: "https://mediapankki.otava.fi/api/v1/assets/by-isbn/978-951-1-48695-4.jpg",
    alt: "Traditional Finnish wooden sauna interior with warm lighting and steam rising from hot stones",
    date: "July 2025",
    category: "achievement"
  }

];


  const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/KayHo412", icon: "Github", username: "@KayHo412" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/khoa-phan-ho-75771b2a9/", icon: "Linkedin", username: "Khoa Phan Ho" },
  { platform: "Instagram", url: "https://www.instagram.com/kp_phan/", icon: "Instagram", username: "@kp_phan" }];


  return (
    <>
      <Helmet>
        <title>About - Khoa's Digital Playground</title>
        <meta
          name="description"
          content="Meet Khoa Ho - Full-Stack Developer combining technical precision with creative flair. Software engineering student in Tampere with passion for badminton and cooking." />

      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <HeroSection personalInfo={personalInfo} />
          <ExperienceTimeline experiences={experiences} />
          <HobbiesSection hobbies={hobbies} />
          <ValuesSection values={values} />
          <CulturalGallery experiences={culturalExperiences} />
          <CTASection socialLinks={socialLinks} />
        </main>
      </div>
    </>);

};

export default About;