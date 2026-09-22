import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-stone-100 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <span className="text-base font-semibold text-zinc-900 block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-zinc-600 font-mono mt-0.5 block">
              {PERSONAL_INFO.role}
            </span>
            <span className="text-xs text-zinc-600 block mt-1">
              Based in {PERSONAL_INFO.location}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-stone-200/80 transition-colors"
              aria-label="Ronak Poudel on LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socialLinks.email}
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-stone-200/80 transition-colors"
              aria-label="Email Ronak Poudel"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-stone-200/80 transition-colors ml-2"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600 font-mono">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <p>Clean • Reliable • Technically Skilled</p>
        </div>
      </div>
    </footer>
  );
}
