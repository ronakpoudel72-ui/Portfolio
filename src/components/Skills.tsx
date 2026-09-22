import { useState } from 'react';
import {
  Code,
  ShieldCheck,
  Database,
  Network,
  Cpu,
  Wrench,
  Check,
  Sparkles,
  FileCheck,
  PenTool,
  LucideIcon,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const iconMap: Record<string, LucideIcon> = {
    code: Code,
    qa: ShieldCheck,
    database: Database,
    network: Network,
    iot: Cpu,
    tools: Wrench,
    moderation: FileCheck,
    writing: PenTool,
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-24 border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-wider font-mono text-zinc-600 block mb-2">
            Technical Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            Skills & Tooling
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-2xl">
            A comprehensive inventory of programming languages, QA methodologies, embedded systems, and networking protocols applied across projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-zinc-900 text-stone-50'
                    : 'bg-stone-100 text-zinc-600 hover:bg-stone-200 hover:text-zinc-900 border border-stone-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayedCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Code;
            return (
              <div
                key={category.title}
                className="p-5 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-stone-300 transition-colors"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-stone-200/70 text-zinc-800 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills (Clean tags, NO fake percentages) */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-stone-100 text-zinc-800 border border-stone-200 hover:border-stone-300 hover:bg-stone-200/70 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Practical Note */}
        <div className="mt-8 p-4 rounded-xl bg-stone-100/60 border border-stone-200 text-xs text-zinc-600 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
          <p>
            Skills represent practical hands-on application in codebases, network testbenches, circuit prototypes, and structured test documentation rather than theoretical familiarity alone.
          </p>
        </div>
      </div>
    </section>
  );
}
