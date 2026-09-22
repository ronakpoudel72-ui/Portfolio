import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-24 border-b border-stone-200/70 bg-stone-100/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-wider font-mono text-zinc-600 block mb-2">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            Education
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl">
            Formal academic background in Information Technology, Science, and secondary education in Nepal.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-4">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs hover:border-stone-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-stone-200/80 text-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-semibold text-zinc-900 leading-snug">
                        {edu.degree}
                      </h3>
                      {edu.gpa && (
                        <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {edu.gpa}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-700 font-medium mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-600 sm:self-start pl-13 sm:pl-0">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{edu.year}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>

              {edu.notes && (
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-0 sm:pl-13 mt-2">
                  {edu.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
