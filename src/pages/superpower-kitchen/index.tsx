import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  SkillCategory,
  Skill,
} from './types';

const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4">
    <div className="h-px flex-1 bg-border" />
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">{label}</span>
    <div className="h-px flex-1 bg-border" />
  </div>
);

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

      <div className="min-h-screen bg-base text-ink">
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-14 md:px-8">
          <section className="space-y-4 border border-border bg-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-dim">
              SKILLS OVERVIEW
            </p>
            <p className="max-w-2xl text-[13px] leading-[1.75] text-ink-dim">
              Technical skills grouped by category. Select a category to filter or view all.
            </p>
          </section>

          <SectionDivider label="category filter" />

          <section className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim">
            <button
              onClick={() => setActiveCategory('all')}
              className={`border px-3 py-2 transition-colors ${activeCategory === 'all' ? 'border-border-strong text-amber bg-surface-2' : 'border-border text-ink-dim hover:text-amber hover:bg-surface-2'}`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`border px-3 py-2 transition-colors ${activeCategory === cat.id ? 'border-border-strong text-amber bg-surface-2' : 'border-border text-ink-dim hover:text-amber hover:bg-surface-2'}`}
              >
                {cat.name}
              </button>
            ))}
          </section>

          <SectionDivider label="tools" />

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredSkills.map((skill) => (
              <article key={skill.id} className="border border-border bg-surface p-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-sage">
                        {skill.category}
                      </p>
                      <h2 className="text-[17px] leading-tight text-ink">{skill.name}</h2>
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-amber">
                      {levelMap(skill.proficiency)}
                    </p>
                  </div>

                  <div className="h-[2px] bg-border">
                    <div className="h-full bg-amber" style={{ width: `${skill.proficiency}%` }} />
                  </div>

                  <p className="text-[12px] leading-[1.7] text-ink-dim">
                    {skill.description}
                  </p>
                </div>
              </article>
            ))}
          </section>

          <SectionDivider label="summary" />

          <section className="grid gap-3 border border-border bg-surface p-6 text-[13px] font-mono text-ink-dim md:grid-cols-2">
            <div className="flex justify-between gap-4">
              <span>Total Skills Mapped:</span>
              <span className="text-ink">{allSkills.length}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Average Proficiency:</span>
              <span className="text-ink">
                {Math.round(allSkills.reduce((sum, s) => sum + s.proficiency, 0) / allSkills.length)}%
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Strong Skills (90%+):</span>
              <span className="text-ink">{allSkills.filter((s) => s.proficiency >= 90).length}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Total Years Experience:</span>
              <span className="text-ink">
                {(allSkills.reduce((sum, s) => sum + s.yearsOfExperience, 0) / allSkills.length).toFixed(1)} avg
              </span>
            </div>
          </section>

          <SectionDivider label="contact" />

          <section className="flex gap-3 flex-wrap">
            <Link to="/about" className="border border-border-strong px-4 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2">
              View Experience
            </Link>
            <Link to="/contact" className="border border-border-strong px-4 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-surface-2">
              Contact
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};

export default SuperpowerKitchen;
