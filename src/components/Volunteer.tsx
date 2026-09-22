import { Heart, MapPin, Calendar, ExternalLink, Droplet, HandHeart, Shield } from 'lucide-react';
import { ACTIVITIES } from '../data/portfolioData';

export default function Volunteer() {
  const getIcon = (title: string, role: string) => {
    if (role.toLowerCase().includes('advisor') || title.toLowerCase().includes('samaj')) {
      return <Shield className="w-4 h-4 text-zinc-700" />;
    }
    if (title.toLowerCase().includes('blood') || title.toLowerCase().includes('water')) {
      return <Droplet className="w-4 h-4 text-zinc-700" />;
    }
    if (title.toLowerCase().includes('relief') || title.toLowerCase().includes('flood')) {
      return <HandHeart className="w-4 h-4 text-zinc-700" />;
    }
    return <Heart className="w-4 h-4 text-zinc-700" />;
  };

  return (
    <section id="volunteer" className="py-20 md:py-24 border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-wider font-mono text-zinc-600 block mb-2">
            Social Responsibility & Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            Community Activities & Advisory Roles
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl">
            Active organizational leadership, advisory roles, and grassroots volunteer work across Nepal.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="p-5 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs hover:border-stone-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-stone-200/70 flex items-center justify-center shrink-0">
                      {getIcon(act.title, act.role)}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 leading-tight">
                        {act.title}
                      </h3>
                      <p className="text-xs font-medium text-zinc-600 mt-0.5">
                        {act.role}
                      </p>
                    </div>
                  </div>

                  {act.link && (
                    <a
                      href={act.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-600 hover:text-zinc-900 bg-stone-100 hover:bg-stone-200 px-2 py-0.5 rounded border border-stone-200 transition-colors shrink-0"
                      title={`Visit ${act.title}`}
                    >
                      <span>Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-2">
                  {act.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{act.location}</span>
                </span>
                {act.period && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{act.period}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
