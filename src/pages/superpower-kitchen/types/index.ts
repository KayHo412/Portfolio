export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  icon: string;
  description: string;
  yearsOfExperience: number;
  projects: number;
  metaphor: {
    type: 'cooking' | 'badminton';
    item: string;
    description: string;
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
  description: string;
}

// Removed Achievement interface (no longer used)

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  skills: string[];
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  skillCategory: string;
}

export interface SkillComparison {
  skill: string;
  myLevel: number;
  industryAverage: number;
  topPerformers: number;
}