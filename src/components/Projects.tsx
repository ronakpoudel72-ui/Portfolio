import { useState } from 'react';
import {
  Layers,
  Sparkles,
  X,
  Code2,
  Cpu,
  Network,
  Eye,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Software & Web', 'IoT & Embedded', 'AI & ML', 'Networking'];

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'AI & ML':
        return <Sparkles className="w-3.5 h-3.5 text-zinc-600" />;
      case 'IoT & Embedded':
        return <Cpu className="w-3.5 h-3.5 text-zinc-600" />;
      case 'Networking':
        return <Network className="w-3.5 h-3.5 text-zinc-600" />;
      default:
        return <Code2 className="w-3.5 h-3.5 text-zinc-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-24 border-b border-stone-200/70 bg-stone-100/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-wider font-mono text-zinc-600 block mb-2">
            Portfolio
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                Featured Projects
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl">
                Demonstrating applied engineering across machine learning, IoT embedded telemetries, computer networking, and full-stack web applications.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Project filter">
              {categories.map((cat) => {
                const isActive = selectedFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedFilter(cat)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
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
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="p-6 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs hover:border-stone-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header & Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-stone-100 text-zinc-700 border border-stone-200">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Technical Highlight */}
                {project.highlightNotes && (
                  <p className="text-xs text-zinc-600 bg-stone-100/80 p-2.5 rounded-md border border-stone-200/60 mb-4">
                    <strong className="font-semibold text-zinc-700">Focus:</strong> {project.highlightNotes}
                  </p>
                )}
              </div>

              <div>
                {/* Technologies */}
                <div className="pt-3 border-t border-stone-200/70 mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 text-zinc-700 border border-stone-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-stone-100 text-zinc-900 border border-stone-300 hover:bg-stone-200 hover:border-stone-400 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-zinc-700" />
                    <span>View Specifications & Notes</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          >
            <div className="bg-stone-50 rounded-2xl max-w-lg w-full p-6 border border-stone-300 shadow-xl relative">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-800 hover:bg-stone-200/70"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-stone-200 text-zinc-800">
                  {activeModalProject.category}
                </span>
                <span className="text-xs text-zinc-600">Technical Overview</span>
              </div>

              <h3 id="modal-project-title" className="text-xl font-semibold text-zinc-900 mb-3">
                {activeModalProject.title}
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                {activeModalProject.description}
              </p>

              <div className="mb-4">
                <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-600 mb-2">
                  Stack & Components
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-stone-100 border border-stone-200 text-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {activeModalProject.highlightNotes && (
                <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-xs text-zinc-700 mb-6">
                  <span className="font-semibold block mb-1">Architecture Note:</span>
                  {activeModalProject.highlightNotes}
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-lg text-xs font-medium bg-zinc-900 text-stone-50 hover:bg-zinc-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
