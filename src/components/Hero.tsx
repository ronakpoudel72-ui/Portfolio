import { ArrowRight, Linkedin, Mail, MapPin, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const profilePhoto = '/ronak-poudel.jpg';

interface HeroProps {
  onResumeClick?: () => void;
}

export default function Hero({ onResumeClick }: HeroProps) {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 border-b border-stone-200/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12">
          {/* Main Text Content */}
          <div className="flex-1 order-2 md:order-1">
            {/* Subtle status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs text-zinc-700 mb-6 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-zinc-600">{PERSONAL_INFO.status}</span>
            </div>

            {/* Hero Title & Subtitle */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.15] mb-3">
              {PERSONAL_INFO.name}
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-zinc-700 tracking-tight mb-5">
              {PERSONAL_INFO.role}
            </p>

            {/* Short introduction */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl mb-8">
              "{PERSONAL_INFO.headline}"
            </p>

            {/* Primary action buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                id="hero-view-work-btn"
                type="button"
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-zinc-900 text-stone-50 hover:bg-zinc-800 transition-colors shadow-xs"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onResumeClick && (
                <button
                  id="hero-view-resume-btn"
                  type="button"
                  onClick={onResumeClick}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-stone-100 text-zinc-900 border border-stone-300 hover:bg-stone-200 transition-colors shadow-xs"
                >
                  <FileText className="w-4 h-4 text-zinc-700" />
                  <span>View Resume / CV</span>
                </button>
              )}

              <button
                id="hero-contact-me-btn"
                type="button"
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-stone-50 text-zinc-800 border border-stone-300/80 hover:bg-stone-200/80 hover:border-stone-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-600" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Subtle social/contact links */}
            <div className="flex flex-wrap items-center gap-5 pt-5 border-t border-stone-200/70 text-sm text-zinc-600">
              <span className="text-xs uppercase tracking-wider font-mono text-zinc-600">
                Connect
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ronak Poudel on LinkedIn"
                  className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.email}
                  aria-label="Send email to Ronak Poudel"
                  className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 transition-colors"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-medium">{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Portrait Image Frame */}
          <div className="order-1 md:order-2 shrink-0 self-center md:self-start">
            <div className="relative group">
              <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden border-2 border-stone-300/90 shadow-md bg-stone-100">
                <img
                  src={profilePhoto}
                  alt="Ronak Poudel portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                />
              </div>
              {/* Badge underneath image */}
              <div className="mt-2.5 text-center">
                <span className="text-[11px] font-mono text-zinc-500 tracking-wide">
                  Ronak Poudel • IT Professional
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering quick focus tags */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {[
            'Platform Moderation',
            'Manual & Functional QA',
            'HTML, CSS, JavaScript',
            'Python & Web Development',
            'IoT & Embedded',
            'Cisco Networking',
            'Relational Databases',
          ].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono bg-stone-100 text-zinc-600 rounded border border-stone-200/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
