import { Code2, ShieldCheck, Database, Cpu, ArrowUpRight } from 'lucide-react';
import { CAPABILITIES } from '../data/portfolioData';

export default function WhatIDo() {
  const iconMap = {
    code: Code2,
    qa: ShieldCheck,
    data: Database,
    iot: Cpu,
  };

  return (
    <section id="what-i-do" className="py-20 md:py-24 border-b border-stone-200/70 bg-stone-100/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider font-mono text-zinc-600 block mb-2">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            What I Do
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl">
            Core technical proficiencies developed through coursework, hands-on laboratory setups, and end-to-end project implementations.
          </p>
        </div>

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CAPABILITIES.map((cap) => {
            const Icon = iconMap[cap.iconName] || Code2;
            return (
              <div
                key={cap.title}
                className="p-6 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs hover:border-stone-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-stone-200/70 text-zinc-900 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60">
                  <span className="text-[11px] uppercase font-mono tracking-wider text-zinc-600 block mb-2">
                    Key Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.keyFocus.map((focus) => (
                      <span
                        key={focus}
                        className="text-xs px-2.5 py-0.5 rounded bg-stone-100 text-zinc-700 border border-stone-200 font-medium"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
