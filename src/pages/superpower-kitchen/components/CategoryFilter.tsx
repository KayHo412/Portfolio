import Icon from '../../../components/AppIcon';
import { SkillCategory } from '../types';

interface CategoryFilterProps {
  categories: SkillCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => onCategoryChange('all')}
        className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-rajdhani font-semibold transition-all duration-300 ${
          activeCategory === 'all' ?'bg-gradient-to-r from-primary to-secondary text-white neon-glow-primary' :'bg-card border-2 border-border text-muted-foreground hover:border-primary hover:text-foreground'
        }`}
      >
        <Icon name="Layers" size={20} />
        <span>All Skills</span>
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-rajdhani font-semibold transition-all duration-300 ${
            activeCategory === category.id
              ? `bg-gradient-to-r ${category.color} text-white neon-glow-primary`
              : 'bg-card border-2 border-border text-muted-foreground hover:border-primary hover:text-foreground'
          }`}
        >
          <Icon name={category.icon} size={20} />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;