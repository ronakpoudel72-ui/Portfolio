import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  ExternalLink,
  Linkedin,
  Globe,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-b border-stone-200/70 bg-stone-100/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider font-mono text-zinc-600 block mb-2">
            Direct Reach
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 mt-2 max-w-xl">
            Interested in collaboration, technology discussions, QA/IT roles, or community initiatives? Reach out directly through any of the channels below.
          </p>
        </div>

        {/* Primary Direct Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email Card */}
          <div
            id="contact-email-card"
            className="p-6 sm:p-7 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-stone-200/70 flex items-center justify-center text-zinc-900 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Primary Contact
                </span>
              </div>

              <h3 className="text-lg font-semibold text-zinc-900 leading-snug">
                Email Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 mb-4 leading-relaxed">
                For job opportunities, software testing, QA consultations, and general professional inquiries.
              </p>

              <div className="p-3 rounded-lg bg-stone-100/80 border border-stone-200/80 font-mono text-sm text-zinc-900 break-all select-all flex items-center justify-between gap-2">
                <span>{PERSONAL_INFO.email}</span>
                <button
                  type="button"
                  id="contact-copy-email-btn"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-stone-200 transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200/70 flex flex-wrap items-center gap-3">
              <a
                id="contact-send-email-link"
                href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20from%20Portfolio`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-zinc-900 text-stone-50 hover:bg-zinc-800 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Write Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
              <button
                type="button"
                id="contact-copy-email-btn-secondary"
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="px-3.5 py-2.5 rounded-lg text-sm font-medium border border-stone-300 text-zinc-700 hover:text-zinc-900 hover:bg-stone-100 transition-colors"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Phone & Direct Voice Card */}
          <div
            id="contact-phone-card"
            className="p-6 sm:p-7 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-stone-200/70 flex items-center justify-center text-zinc-900 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 bg-stone-200/60 border border-stone-300 px-2 py-0.5 rounded-full">
                  Direct Line
                </span>
              </div>

              <h3 className="text-lg font-semibold text-zinc-900 leading-snug">
                Phone & Direct Call
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1 mb-4 leading-relaxed">
                Available for phone screenings, direct discussions, and urgent professional correspondence.
              </p>

              <div className="p-3 rounded-lg bg-stone-100/80 border border-stone-200/80 font-mono text-sm text-zinc-900 flex items-center justify-between gap-2">
                <span>+977 {PERSONAL_INFO.phone}</span>
                <button
                  type="button"
                  id="contact-copy-phone-btn"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-stone-200 transition-colors shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200/70 flex flex-wrap items-center gap-3">
              <a
                id="contact-call-phone-link"
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-zinc-900 text-stone-50 hover:bg-zinc-800 transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Direct</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
              <button
                type="button"
                id="contact-copy-phone-btn-secondary"
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="px-3.5 py-2.5 rounded-lg text-sm font-medium border border-stone-300 text-zinc-700 hover:text-zinc-900 hover:bg-stone-100 transition-colors"
              >
                {copiedPhone ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Info & Profiles Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Location Card */}
          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-stone-200/70 flex items-center justify-center text-zinc-800 mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-600 mb-1">
                Location & Base
              </h4>
              <p className="text-sm font-semibold text-zinc-900">
                {PERSONAL_INFO.location}
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                Timezone: NPT (UTC+5:45)
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-xs text-zinc-500">
              Open to local & remote opportunities
            </div>
          </div>

          {/* Availability & Response Time Card */}
          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-stone-200/70 flex items-center justify-center text-zinc-800 mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-600 mb-1">
                Availability
              </h4>
              <p className="text-sm font-semibold text-zinc-900">
                Fast Turnaround
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                Typically responds within 24 hours on business days.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Professional Networks Card */}
          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-stone-200/70 flex items-center justify-center text-zinc-800 mb-3">
                <Globe className="w-4 h-4" />
              </div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-600 mb-1">
                Networks & Advisory
              </h4>
              <div className="space-y-2 mt-2">
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs text-zinc-700 hover:text-zinc-950 font-medium py-1 px-2 rounded-md hover:bg-stone-200/60 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>

                <a
                  href="https://www.yuvasamajsewarautahat.org.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs text-zinc-700 hover:text-zinc-950 font-medium py-1 px-2 rounded-md hover:bg-stone-200/60 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-600" />
                    <span>Yuva Samaj Sewa</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-stone-200/60 text-[11px] text-zinc-500 font-mono">
              Verified Profiles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
