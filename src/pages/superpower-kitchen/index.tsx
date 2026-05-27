import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PixelButton from '../../components/game-ui/PixelButton';
import PixelBox from '../../components/game-ui/PixelBox';
import PixelDivider from '../../components/game-ui/PixelDivider';
import SkillCard from '../../components/game-ui/SkillCard';
import {
  SkillCategory,
  Skill,
} from './types';

const SuperpowerKitchen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      name: 'Languages',
      icon: 'Code2',
      color: 'from-primary to-accent',
      description: 'Programming languages and linguistic tools',
      skills: [],
    },
    {
      id: 'frameworks',
      name: 'Frameworks',
      icon: 'Layers',
      color: 'from-secondary to-primary',
      description: 'Libraries and frameworks for rapid development',
      skills: [],
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: 'Wrench',
      color: 'from-accent to-secondary',
      description: 'Development tools and deployment utilities',
      skills: [],
    },
    {
      id: 'soft',
      name: 'Soft Skills',
      icon: 'Users',
      color: 'from-trust to-accent',
      description: 'Communication and collaboration abilities',
      skills: [],
    },
  ];

  const allSkills: Skill[] = [
    { id: 'react', name: 'React', category: 'Frameworks', proficiency: 95, icon: 'Code2', description: 'Dynamic UI development', yearsOfExperience: 3, metaphor: { type: 'cooking', item: "Chef's Knife", description: 'Like a chef\'s knife for every cutting task, React handles all UI challenges with precision.' } },
    { id: 'typescript', name: 'TypeScript', category: 'Languages', proficiency: 92, icon: 'FileCode', description: 'Type-safe JavaScript development', yearsOfExperience: 3, metaphor: { type: 'badminton', item: 'Precision Racket', description: 'TypeScript provides exact control and catches errors before they become problems.' } },
    { id: 'nodejs', name: 'Node.js', category: 'Frameworks', proficiency: 88, icon: 'Server', description: 'Server-side JavaScript runtime', yearsOfExperience: 2.5, metaphor: { type: 'cooking', item: 'Pressure Cooker', description: 'Handles multiple tasks simultaneously, cooking up server responses quickly.' } },
    { id: 'springboot', name: 'Java Spring Boot', category: 'Frameworks', proficiency: 85, icon: 'Code', description: 'Enterprise Java framework', yearsOfExperience: 2, metaphor: { type: 'cooking', item: 'Professional Kitchen', description: 'Enterprise-grade infrastructure for building scalable, production-ready applications.' } },
    { id: 'git', name: 'Git & GitHub', category: 'Tools & DevOps', proficiency: 90, icon: 'GitBranch', description: 'Version control and collaboration', yearsOfExperience: 3, metaphor: { type: 'badminton', item: 'Rally Counter', description: 'Tracks every move, lets you review past plays, and coordinates team strategies.' } },
    { id: 'docker', name: 'Docker', category: 'Tools & DevOps', proficiency: 82, icon: 'Package', description: 'Containerization and deployment', yearsOfExperience: 1.5, metaphor: { type: 'cooking', item: 'Meal Prep Container', description: 'Packages everything in a consistent, portable format that works anywhere.' } },
    { id: 'communication', name: 'Communication', category: 'Soft Skills', proficiency: 93, icon: 'MessageSquare', description: 'Cross-cultural technical communication', yearsOfExperience: 4, metaphor: { type: 'badminton', item: 'Doubles Partner', description: 'Like being a great partner: anticipate moves, coordinate strategies, work in sync.' } },
    { id: 'problem-solving', name: 'Problem Solving', category: 'Soft Skills', proficiency: 91, icon: 'Lightbulb', description: 'Analytical thinking and creative solutions', yearsOfExperience: 4, metaphor: { type: 'cooking', item: 'Recipe Adaptation', description: 'Taking what you have and creating something that works perfectly for the situation.' } },
    { id: 'javascript', name: 'JavaScript', category: 'Languages', proficiency: 94, icon: 'Code2', description: 'Full-stack dynamic language', yearsOfExperience: 3.5, metaphor: { type: 'cooking', item: 'Universal Ingredient', description: 'The foundational ingredient that enables countless creations across the stack.' } },
    { id: 'python', name: 'Python', category: 'Languages', proficiency: 80, icon: 'Code', description: 'Data and automation scripting', yearsOfExperience: 1.5, metaphor: { type: 'cooking', item: 'Seasoning', description: 'Simple yet powerful, enhances any project with elegance and clarity.' } },
    { id: 'tailwind', name: 'Tailwind CSS', category: 'Frameworks', proficiency: 87, icon: 'Palette', description: 'Utility-first CSS framework', yearsOfExperience: 2, metaphor: { type: 'cooking', item: 'Spice Rack', description: 'Pre-measured ingredients that combine to create beautiful, consistent designs.' } },
    { id: 'postman', name: 'Postman', category: 'Tools & DevOps', proficiency: 85, icon: 'Send', description: 'API testing and documentation', yearsOfExperience: 2, metaphor: { type: 'badminton', item: 'Serve Analyzer', description: 'Tests every serve, provides feedback, ensures perfect delivery every time.' } },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? allSkills
      : allSkills.filter((skill) => {
          const cat = skillCategories.find((c) => c.id === activeCategory);
          return skill.category === cat?.name;
        });

  const levelMap = (proficiency: number) => {
    if (proficiency >= 90) return 'STRONG';
    if (proficiency >= 75) return 'SOLID';
    return 'LEARNING';
  };

  return (
    <>
      <Helmet>
        <title>Khoa Ho - Skills</title>
        <meta
          name="description"
          content="Khoa Ho's technical skills, tools, and experience presented in a clear professional format."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-12">
          {/* === HEADER === */}
          <PixelBox variant="primary" borderWidth={4} title="SKILLS OVERVIEW">
            <p className="text-xs md:text-sm font-mono text-foreground">
              Technical skills grouped by category. Select a category to filter or view all.
            </p>
          </PixelBox>

          {/* === CATEGORY FILTER === */}
          <div className="space-y-3">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              CATEGORY FILTER:
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`pixel-btn text-xs ${
                  activeCategory === 'all'
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-foreground border-border hover:border-primary'
                }`}
              >
                ALL SKILLS
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`pixel-btn text-xs ${
                    activeCategory === cat.id
                      ? 'bg-accent text-accent-foreground border-accent'
                      : 'bg-card text-foreground border-border hover:border-accent'
                  }`}
                >
                  [{cat.name.toUpperCase()}]
                </button>
              ))}
            </div>
          </div>

          {/* === SKILLS DISPLAY === */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} levelMap={levelMap} />
            ))}
          </div>

          {/* === SUMMARY === */}
          <PixelDivider variant="primary" />

          <PixelBox variant="primary" borderWidth={3} title="SKILL SUMMARY">
            <div className="space-y-3 text-xs md:text-sm font-mono">
              <div className="flex justify-between">
                <span>Total Skills Mapped:</span>
                <span className="text-primary neon-primary font-bold">{allSkills.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Average Proficiency:</span>
                <span className="text-secondary font-bold">
                  {Math.round(allSkills.reduce((sum, s) => sum + s.proficiency, 0) / allSkills.length)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>Strong Skills (90%+):</span>
                <span className="text-accent neon-accent font-bold">
                  {allSkills.filter((s) => s.proficiency >= 90).length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Years Experience:</span>
                <span className="text-warning font-bold">
                  {(allSkills.reduce((sum, s) => sum + s.yearsOfExperience, 0) / allSkills.length).toFixed(1)} avg
                </span>
              </div>
            </div>
          </PixelBox>

          {/* === CALL TO ACTION === */}
          <div className="flex gap-3 justify-center flex-wrap">
            <PixelButton
              asLink
              href="/about"
              variant="secondary"
              className="text-center"
            >
              VIEW EXPERIENCE
            </PixelButton>
            <PixelButton
              asLink
              href="mailto:khoaphan412@gmail.com"
              variant="primary"
              className="text-center"
            >
              CONTACT
            </PixelButton>
          </div>
        </main>
      </div>
    </>
  );
};

export default SuperpowerKitchen;
