import { Phone, Building, UserCheck } from 'lucide-react';
import { REFERENCES } from '../data/portfolioData';

export default function References() {
  return (
    <section id="references" className="py-16 md:py-20 border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs uppercase tracking-wider font-mono text-zinc-600 block mb-2">
            Verification & Recommendations
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            Professional & Academic References
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl">
            Available for direct contact regarding academic conduct, work ethic, and professional performance.
          </p>
        </div>

        {/* References Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REFERENCES.map((ref, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs hover:border-stone-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-stone-200/80 text-zinc-800 flex items-center justify-center font-semibold text-sm">
                    {ref.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 leading-snug">
                      {ref.name}
                    </h3>
                    <p className="text-xs text-zinc-600 font-medium">
                      {ref.role}, {ref.organization}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono">Contact Phone</span>
                <a
                  href={`tel:${ref.phone}`}
                  className="inline-flex items-center gap-1.5 font-medium text-zinc-900 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{ref.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
