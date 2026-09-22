export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Software & Web' | 'IoT & Embedded' | 'AI & ML' | 'Networking';
  technologies: string[];
  demoUrl?: string;
  highlightNotes?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  iconName: 'code' | 'qa' | 'database' | 'network' | 'iot' | 'tools' | 'writing' | 'moderation';
}

export interface Capability {
  title: string;
  description: string;
  iconName: 'code' | 'qa' | 'data' | 'iot';
  keyFocus: string[];
}

export interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  website?: string;
  responsibilities: string[];
}

export interface ExperienceItem {
  id: string;
  domain: string;
  title: string;
  description: string;
  highlights: string[];
  type: 'project' | 'academic';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  gpa?: string;
  notes?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  role: string;
  period?: string;
  location?: string;
  link?: string;
  description: string;
}

export interface HonorItem {
  title: string;
  description: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  organization: string;
  phone: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
