import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SkillCard from './components/SkillCard';
import CategoryFilter from './components/CategoryFilter';
import SkillQuiz from './components/SkillQuiz';
import {
  SkillCategory,
  Skill,
  QuizQuestion,
} from './types';

const SuperpowerKitchen = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'skills'>(
    'skills'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: 'Palette',
      color: 'from-primary to-accent',
      description: 'User interface and experience technologies',
      skills: [],
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: 'Server',
      color: 'from-secondary to-primary',
      description: 'Server-side and database technologies',
      skills: [],
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: 'Wrench',
      color: 'from-accent to-secondary',
      description: 'Development tools and deployment',
      skills: [],
    },
    {
      id: 'soft',
      name: 'Soft Skills',
      icon: 'Users',
      color: 'from-trust to-accent',
      description: 'Communication and collaboration',
      skills: [],
    },
  ];

  const allSkills: Skill[] = [
    {
      id: 'react',
      name: 'React',
      category: 'Frontend',
      proficiency: 95,
      icon: 'Atom',
      description: 'Building dynamic user interfaces with hooks and modern patterns',
      yearsOfExperience: 3,
      projects: 15,
      metaphor: {
        type: 'cooking',
        item: 'Chef\'s Knife',
        description:
          'Like a chef\'s knife that handles every cutting task, React is my go-to tool for slicing through complex UI challenges with precision and efficiency.',
      },
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Frontend',
      proficiency: 92,
      icon: 'Code2',
      description: 'Type-safe JavaScript development for robust applications',
      yearsOfExperience: 3,
      projects: 12,
      metaphor: {
        type: 'badminton',
        item: 'Precision Racket',
        description:
          'TypeScript is like a precision-engineered badminton racket - it gives you exact control and catches errors before they become problems, just like a good racket prevents mishits.',
      },
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'Backend',
      proficiency: 88,
      icon: 'Server',
      description: 'Server-side JavaScript for scalable applications',
      yearsOfExperience: 2.5,
      projects: 10,
      metaphor: {
        type: 'cooking',
        item: 'Pressure Cooker',
        description:
          'Node.js is like a pressure cooker - it handles multiple tasks simultaneously, cooking up server responses quickly and efficiently under pressure.',
      },
    },
    {
      id: 'springboot',
      name: 'Java Spring Boot',
      category: 'Backend',
      proficiency: 85,
      icon: 'Code',
      description: 'Enterprise-grade Java framework for building robust microservices',
      yearsOfExperience: 2,
      projects: 8,
      metaphor: {
        type: 'cooking',
        item: 'Professional Kitchen System',
        description:
          'Spring Boot is like a fully-equipped professional kitchen - providing enterprise-grade infrastructure, organized workflows, and reliable tools for building scalable, production-ready applications.',
      },
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      category: 'Tools & DevOps',
      proficiency: 90,
      icon: 'GitBranch',
      description: 'Version control and collaborative development',
      yearsOfExperience: 3,
      projects: 20,
      metaphor: {
        type: 'badminton',
        item: 'Rally Counter',
        description:
          'Git is like keeping score in badminton - it tracks every move, lets you review past plays, and helps coordinate team strategies perfectly.',
      },
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'Tools & DevOps',
      proficiency: 82,
      icon: 'Package',
      description: 'Containerization for consistent deployment environments',
      yearsOfExperience: 1.5,
      projects: 6,
      metaphor: {
        type: 'cooking',
        item: 'Meal Prep Container',
        description:
          'Docker is like meal prep containers - it packages everything you need in a consistent, portable format that works anywhere.',
      },
    },
    {
      id: 'communication',
      name: 'Communication',
      category: 'Soft Skills',
      proficiency: 93,
      icon: 'MessageSquare',
      description: 'Clear technical communication across multicultural teams',
      yearsOfExperience: 4,
      projects: 25,
      metaphor: {
        type: 'badminton',
        item: 'Doubles Partner',
        description:
          'Good communication is like being a great doubles partner - anticipating moves, coordinating strategies, and working in perfect sync with your team.',
      },
    },
    {
      id: 'problem-solving',
      name: 'Problem Solving',
      category: 'Soft Skills',
      proficiency: 91,
      icon: 'Lightbulb',
      description: 'Analytical thinking and creative solution development',
      yearsOfExperience: 4,
      projects: 30,
      metaphor: {
        type: 'cooking',
        item: 'Recipe Adaptation',
        description:
          'Problem-solving is like adapting recipes - taking what you have, understanding the fundamentals, and creating something that works perfectly for the situation.',
      },
    },
  ];



  const quizQuestions: QuizQuestion[] = [
    {
      id: 'q1',
      question: 'What is the primary benefit of using TypeScript over JavaScript?',
      options: [
        'Faster execution speed',
        'Type safety and better tooling',
        'Smaller bundle size',
        'Built-in testing framework',
      ],
      correctAnswer: 1,
      explanation:
        'TypeScript provides type safety, which helps catch errors during development and enables better IDE support and refactoring tools.',
      skillCategory: 'Frontend',
    },
    {
      id: 'q2',
      question: 'Which React hook is used for side effects?',
      options: ['useState', 'useEffect', 'useContext', 'useMemo'],
      correctAnswer: 1,
      explanation:
        'useEffect is specifically designed for handling side effects like data fetching, subscriptions, and DOM manipulation.',
      skillCategory: 'Frontend',
    },
    {
      id: 'q3',
      question: 'What does Docker primarily help with?',
      options: [
        'Code compilation',
        'Application containerization',
        'Database management',
        'Frontend styling',
      ],
      correctAnswer: 1,
      explanation:
        'Docker creates containers that package applications with their dependencies, ensuring consistent environments across development and production.',
      skillCategory: 'Tools & DevOps',
    },
    {
      id: 'q4',
      question: 'In badminton terms, what does "continuous learning" resemble?',
      options: [
        'Winning every match',
        'Practicing different shots',
        'Buying new equipment',
        'Watching tournaments',
      ],
      correctAnswer: 1,
      explanation:
        'Like practicing different shots in badminton, continuous learning involves regularly developing new skills and techniques.',
      skillCategory: 'Soft Skills',
    },
    {
      id: 'q5',
      question: 'What is the main purpose of Git branching?',
      options: [
        'To make code run faster',
        'To work on features independently',
        'To reduce file size',
        'To compile code',
      ],
      correctAnswer: 1,
      explanation:
        'Git branching allows developers to work on different features or fixes independently without affecting the main codebase.',
      skillCategory: 'Tools & DevOps',
    },
  ];



  const filteredSkills =
    activeCategory === 'all'
      ? allSkills
      : allSkills.filter((skill) => skill.category === skillCategories.find((cat) => cat.id === activeCategory)?.name);

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setTimeout(() => {
      setShowQuiz(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Superpower Kitchen - Khoa's Digital Playground</title>
        <meta
          name="description"
          content="Explore Khoa's technical skills and expertise through an interactive, gamified interface combining cooking and badminton metaphors"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 neon-glow-primary">
                <Icon name="ChefHat" size={40} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-foreground mb-4">
                Superpower Kitchen
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Where technical skills meet culinary creativity and badminton precision. Explore
                my toolkit through interactive metaphors and gamified experiences.
              </p>
            </div>

            <div className="space-y-12">
                <div className="text-center">
                  <CategoryFilter
                    categories={skillCategories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map((skill, index) => (
                    <SkillCard key={skill.id} skill={skill} index={index} />
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary rounded-xl p-8 text-center">
                  <Icon name="Target" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
                    Test Your Knowledge
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Think you know your tech? Take our interactive quiz and see how you stack up
                    against industry standards!
                  </p>
                  <Button
                    onClick={() => setShowQuiz(true)}
                    iconName="PlayCircle"
                    iconPosition="left"
                    className="bg-gradient-to-r from-primary to-secondary text-white neon-glow-primary"
                  >
                    Start Skill Quiz
                  </Button>
                  {quizScore !== null && (
                    <div className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-success/20 border-2 border-success rounded-lg">
                      <Icon name="Trophy" size={20} className="text-success" />
                      <span className="text-success font-rajdhani font-semibold">
                        Last Score: {quizScore}%
                      </span>
                    </div>
                  )}
                </div>

                {showQuiz && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md animate-fade-in">
                    <div className="w-full max-w-2xl">
                      <div className="flex justify-end mb-4">
                        <button
                          onClick={() => setShowQuiz(false)}
                          className="p-2 rounded-lg bg-card border-2 border-border hover:border-error text-muted-foreground hover:text-error transition-all duration-200"
                        >
                          <Icon name="X" size={24} />
                        </button>
                      </div>
                      <SkillQuiz questions={quizQuestions} onComplete={handleQuizComplete} />
                    </div>
                  </div>
                )}
            </div>






          </div>
        </main>

        <footer className="bg-card border-t-2 border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Khoa's Digital Playground. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Icon name="Github" size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Icon name="Linkedin" size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SuperpowerKitchen;