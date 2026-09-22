import { X, Printer, Download, MapPin, Mail, Phone, Calendar, Building2, GraduationCap, Award, Heart } from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION,
  WORK_EXPERIENCES,
  ACTIVITIES,
  HONORS_AND_ACHIEVEMENTS,
  REFERENCES,
} from '../data/portfolioData';

const profilePhoto = '/ronak-poudel.jpg';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto print:border-none print:shadow-none print:w-full print:max-w-none">
        {/* Modal Top Bar (hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-stone-100 border-b border-stone-200 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-zinc-900">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-stone-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible font-sans text-zinc-900 text-sm">
          {/* Header Banner */}
          <div className="border-b border-zinc-300 pb-6 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-1">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base text-zinc-700 font-medium mb-3">
                {PERSONAL_INFO.role}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{PERSONAL_INFO.phone}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{PERSONAL_INFO.email}</span>
                </span>
              </div>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-zinc-300 shrink-0 bg-stone-100 shadow-xs">
              <img
                src={profilePhoto}
                alt="Ronak Poudel photo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column (1/3): Skills, Honors, References, Interests, Languages */}
            <div className="space-y-6">
              {/* Skills */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                  Skills
                </h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-semibold block text-zinc-800">Moderation</span>
                    <span className="text-zinc-600">Platform Moderation, Community Guidelines Enforcement</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-zinc-800">Writing</span>
                    <span className="text-zinc-600">Research Skills, Content Structuring, Social Media Writing</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-zinc-800">Coding</span>
                    <span className="text-zinc-600">HTML, CSS, JavaScript, Python, Debugging</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                  Languages
                </h3>
                <div className="space-y-1 text-xs text-zinc-700">
                  {PERSONAL_INFO.languages.map((l) => (
                    <div key={l.name} className="flex justify-between">
                      <span>{l.name}</span>
                      <span className="text-zinc-500 text-[11px] font-mono">{l.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Honors & Achievements */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                  Honors & Achievements
                </h3>
                <div className="space-y-2 text-xs">
                  {HONORS_AND_ACHIEVEMENTS.map((h, i) => (
                    <div key={i}>
                      <span className="font-semibold text-zinc-800 block">{h.title}</span>
                      <span className="text-zinc-600 text-[11px] leading-relaxed block">{h.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* References */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                  References
                </h3>
                <div className="space-y-2.5 text-xs">
                  {REFERENCES.map((r, i) => (
                    <div key={i} className="text-zinc-700">
                      <span className="font-semibold block text-zinc-900">{r.name}</span>
                      <span className="text-[11px] text-zinc-600 block">{r.role}, {r.organization}</span>
                      <span className="text-[11px] font-mono text-zinc-500 block">Phone: {r.phone}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                  Interests
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Networking, Playing Cricket, Social Work.
                </p>
              </div>
            </div>

            {/* Right Column (2/3): Profile, Education, Work Experience, Activities */}
            <div className="md:col-span-2 space-y-6">
              {/* Profile */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                  Profile
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-zinc-900 border-b border-zinc-200 pb-1 mb-3">
                  Education
                </h3>
                <div className="space-y-3">
                  {EDUCATION.map((edu) => (
                    <div key={edu.id} className="text-xs">
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-zinc-900">{edu.institution}</span>
                        <span className="font-mono text-zinc-500 text-[11px]">{edu.year}</span>
                      </div>
                      <div className="flex justify-between text-zinc-700 mt-0.5">
                        <span>{edu.degree}</span>
                        {edu.gpa && <span className="font-mono text-[11px] font-medium text-emerald-800">{edu.gpa}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-zinc-900 border-b border-zinc-200 pb-1 mb-3">
                  Work Experience
                </h3>
                <div className="space-y-4">
                  {WORK_EXPERIENCES.map((work) => (
                    <div key={work.id} className="text-xs">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-zinc-900">{work.company}</span>
                        <span className="font-mono text-zinc-500 text-[11px]">{work.period}</span>
                      </div>
                      <p className="font-medium text-zinc-700 mb-1.5">{work.role}</p>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600 pl-1">
                        {work.responsibilities.map((r, ri) => (
                          <li key={ri} className="leading-relaxed">{r}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-zinc-900 border-b border-zinc-200 pb-1 mb-3">
                  Activities & Volunteering
                </h3>
                <div className="space-y-3">
                  {ACTIVITIES.map((act) => (
                    <div key={act.id} className="text-xs">
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-zinc-900">{act.title}</span>
                        {act.period && <span className="font-mono text-zinc-500 text-[11px]">{act.period}</span>}
                      </div>
                      <p className="text-zinc-700 font-medium">{act.role}</p>
                      <p className="text-zinc-600 text-[11px] leading-relaxed mt-0.5">{act.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
