import { useState } from 'react';
import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Clock,
  Building2,
  Code2,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { WORK_EXPERIENCES, ACADEMIC_PROJECT_EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'projects'>('work');

  return (
    <section id="experience" className="py-20 md:py-24 border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-wider font-mono text-zinc-600 block mb-2">
            Career & Projects
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                Experience
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl">
                Professional industry experience in platform moderation and content writing alongside applied academic and software engineering projects.
              </p>
            </div>

            {/* Toggle Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg border border-stone-200/80 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab('work')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeTab === 'work'
                    ? 'bg-zinc-900 text-stone-50 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Work Experience ({WORK_EXPERIENCES.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('projects')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeTab === 'projects'
                    ? 'bg-zinc-900 text-stone-50 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Project Practice ({ACADEMIC_PROJECT_EXPERIENCES.length})
              </button>
            </div>
          </div>
        </div>

        {/* Work Experience Tab */}
        {activeTab === 'work' && (
          <div className="space-y-6">
            {WORK_EXPERIENCES.map((work) => (
              <div
                key={work.id}
                className="p-6 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs hover:border-stone-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-stone-200/80 text-zinc-800 flex items-center justify-center">
                        <Building2 className="w-4 h-4" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-lg font-semibold text-zinc-900 leading-snug">
                            {work.company}
                          </h3>
                          {work.website && (
                            <a
                              href={work.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-600 hover:text-zinc-900 bg-stone-100 hover:bg-stone-200 px-2 py-0.5 rounded border border-stone-200 transition-colors"
                              title={`Visit ${work.company}`}
                            >
                              <span>Official Site</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-sm font-medium text-zinc-700">
                          {work.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 self-start sm:self-auto pl-10 sm:pl-0">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{work.period}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-zinc-600">
                      {work.type}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200/60 space-y-2 pl-0 sm:pl-10">
                  <span className="text-[11px] uppercase font-mono tracking-wider text-zinc-600 block">
                    Core Responsibilities & Impact
                  </span>
                  {work.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                      <ChevronRight className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Academic & Project Practice Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {ACADEMIC_PROJECT_EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs hover:border-stone-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-600">
                    {exp.domain}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 text-zinc-600 border border-stone-200 self-start sm:self-auto">
                    Applied Engineering
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-2">
                  {exp.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-stone-200/60">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Next Career Milestone Marker */}
        <div className="mt-8 p-5 rounded-xl border border-stone-300/80 bg-stone-50 text-zinc-600 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-zinc-600 shrink-0" />
            <div>
              <span className="font-semibold text-zinc-900 block">
                Actively Seeking: Software Testing, QA & IT Opportunities
              </span>
              <span className="text-zinc-600">
                Ready to contribute diligence, technical skills, and reliable moderation / QA execution.
              </span>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 text-stone-50 hover:bg-zinc-800 transition-colors shrink-0"
          >
            <span>Inquire for Roles</span>
          </a>
        </div>
      </div>
    </section>
  );
}
