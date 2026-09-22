import {
  CheckCircle2,
  Sparkles,
  Target,
  BookOpen,
  Users,
  Award,
  Globe2,
  Heart,
  FileText,
} from 'lucide-react';
import { ABOUT_ME, PERSONAL_INFO, HONORS_AND_ACHIEVEMENTS } from '../data/portfolioData';

export default function About() {
  const iconMap: Record<string, typeof Target> = {
    'Problem-Solving': Target,
    'Quality Assurance': CheckCircle2,
    'Practical Development': Sparkles,
    'Continuous Learning': BookOpen,
    'Teamwork & Moderation': Users,
  };

  return (
    <section id="about" className="py-20 md:py-24 border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-wider font-mono text-zinc-600 block mb-2">
            Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            About Me
          </h2>
        </div>

        {/* Narrative */}
        <div className="space-y-4 text-zinc-700 leading-relaxed text-base sm:text-lg mb-12">
          {ABOUT_ME.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Key Professional Pillars */}
        <div className="mb-12">
          <h3 className="text-sm uppercase tracking-wider font-mono text-zinc-600 mb-6">
            Core Principles & Working Approach
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ABOUT_ME.pillars.map((pillar) => {
              const Icon = iconMap[pillar.title] || CheckCircle2;
              return (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-stone-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="p-1.5 rounded-md bg-stone-200/60 text-zinc-800">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h4 className="text-sm font-semibold text-zinc-900">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}

            {/* Quick Profile Meta */}
            <div className="p-4 rounded-xl bg-zinc-900 text-stone-100 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block mb-1">
                  Location & Readiness
                </span>
                <p className="text-sm font-semibold text-stone-100">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-xs text-zinc-300 mt-1">
                  Open to IT, software testing, QA engineering, and platform support roles.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-stone-100 hover:text-white underline underline-offset-4"
              >
                Let's discuss an opening →
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Info: Honors, Languages, Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-stone-200/70">
          {/* Honors & Achievements */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/90">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-zinc-700" />
              <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-800 font-semibold">
                Honors & Achievements
              </h4>
            </div>
            <div className="space-y-3">
              {HONORS_AND_ACHIEVEMENTS.map((honor, i) => (
                <div key={i} className="text-xs">
                  <span className="font-semibold text-zinc-900 block">
                    {honor.title}
                  </span>
                  <span className="text-zinc-600 leading-relaxed block mt-0.5">
                    {honor.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/90">
            <div className="flex items-center gap-2 mb-3">
              <Globe2 className="w-4 h-4 text-zinc-700" />
              <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-800 font-semibold">
                Languages
              </h4>
            </div>
            <div className="space-y-2">
              {PERSONAL_INFO.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-xs">
                  <span className="font-medium text-zinc-800">{lang.name}</span>
                  <span className="text-zinc-500 font-mono text-[11px] px-2 py-0.5 bg-stone-100 rounded border border-stone-200">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/90">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4 text-zinc-700" />
              <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-800 font-semibold">
                Personal Interests
              </h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {PERSONAL_INFO.interests.map((interest) => (
                <span
                  key={interest}
                  className="text-xs font-medium px-2.5 py-1 rounded bg-stone-100 text-zinc-700 border border-stone-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
