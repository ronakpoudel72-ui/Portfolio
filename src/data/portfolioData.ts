import {
  Project,
  SkillCategory,
  Capability,
  WorkExperienceItem,
  ExperienceItem,
  EducationItem,
  ActivityItem,
  HonorItem,
  ReferenceItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Ronak Poudel',
  role: 'IT Professional | QA & Technology Enthusiast',
  headline: 'Building practical technology solutions through software, testing, data, and problem-solving.',
  email: 'ronakpoudel72@gmail.com',
  phone: '9845349148',
  location: 'Koteshwor, Kathmandu, Nepal',
  status: 'Moderator at Hora Tech • Chief Advisor at Yuva Samaj Sewa Rautahat • BIT Graduate',
  bio: "Versatile professional with experience in platform moderation, content writing, and community leadership. Currently working as a Moderator at Hora Technology, monitoring user activity and enforcing community guidelines. Serves as Chief Advisor at Yuva Samaj Sewa Rautahat (yuvasamajsewarautahat.org.np), advising on youth welfare and community development. Holds a Bachelor's degree in Information Technology with strong coding, QA, and problem-solving skills.",
  socialLinks: {
    linkedin: 'https://linkedin.com/in/ronakpoudel',
    email: 'mailto:ronakpoudel72@gmail.com',
  },
  languages: [
    { name: 'Nepali', proficiency: 'Native' },
    { name: 'English', proficiency: 'Professional / Fluent' },
    { name: 'Hindi', proficiency: 'Fluent' },
  ],
  interests: ['Computer Networking', 'Playing Cricket', 'Social Work & Community Outreach'],
};

export const ABOUT_ME = {
  lead: 'Versatile IT professional with experience spanning platform moderation, content writing, software testing, community leadership, and applied technology.',
  paragraphs: [
    "I am currently working as a Moderator at Hora Technology, monitoring user activity, handling escalations, and enforcing platform compliance guidelines, while crafting structured digital content for social media groups on a freelance basis.",
    "Holding a Bachelor of Information Technology (BIT) from Padmashree College (Kathmandu), I combine theoretical knowledge with applied engineering across software development, computer networking, relational databases, Internet of Things (IoT), and machine learning.",
    "Committed to community empowerment, I serve as Chief Advisor at Yuva Samaj Sewa Rautahat (yuvasamajsewarautahat.org.np), guiding youth welfare programs and social development, alongside volunteering for flood relief in Nuwakot, blood donation campaigns, and educational donation drives.",
  ],
  pillars: [
    { title: 'Problem-Solving', desc: 'Methodical diagnostic thinking to identify defects, edge cases, and compliance issues.' },
    { title: 'Quality Assurance', desc: 'Rigorous attention to detail, manual testing, test case authoring, and platform integrity.' },
    { title: 'Practical Development', desc: 'Building functional, maintainable code in HTML, CSS, JavaScript, Python, and SQL.' },
    { title: 'Leadership & Advisory', desc: 'Guiding social welfare initiatives and youth development as Chief Advisor at Yuva Samaj Sewa Rautahat.' },
    { title: 'Teamwork & Moderation', desc: 'Calm escalation handling, cross-team coordination, and clear technical communication.' },
  ],
};

export const WORK_EXPERIENCES: WorkExperienceItem[] = [
  {
    id: 'work-yuva-samaj-sewa',
    company: 'Yuva Samaj Sewa Rautahat',
    role: 'Chief Advisor',
    period: 'Current / Advisory',
    type: 'Leadership & Advisory',
    website: 'https://www.yuvasamajsewarautahat.org.np/',
    responsibilities: [
      'Provide strategic guidance, organizational planning, and leadership advisory for youth and social welfare initiatives across Rautahat.',
      'Advise executive committee members on community empowerment, humanitarian assistance programs, and educational outreach campaigns.',
      'Support institutional development, public communications, and digital outreach for the organization.',
    ],
  },
  {
    id: 'work-hora-tech',
    company: 'Hora Technology',
    role: 'Moderator',
    period: 'November 2025 – August 2026',
    type: 'Professional Role',
    responsibilities: [
      'Monitored user activity and reviewed reported content to enforce community and platform guidelines.',
      'Handled escalations and flagged violations, helping maintain a safe and compliant platform environment.',
      'Coordinated with the wider moderation team to resolve user issues promptly.',
    ],
  },
  {
    id: 'work-social-media',
    company: 'Multiple Social Media Groups',
    role: 'Freelance Content Writer',
    period: 'Ongoing / Remote',
    type: 'Freelance',
    responsibilities: [
      'Research, write, and structure content for social media groups on a remote, ongoing basis.',
      'Had an article featured online, reflecting strong writing quality and audience engagement.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-padmashree',
    degree: 'Bachelor of Information Technology (BIT)',
    institution: 'Padmashree College',
    location: 'Tinkune, Kathmandu, Nepal',
    year: 'Jan 2023 - Jan 2026',
    notes: 'Completed undergraduate degree in Information Technology with coursework in software engineering, networking protocols, databases, and practical project development.',
  },
  {
    id: 'edu-capitol-hill',
    degree: '+2 Science',
    institution: 'Capitol Hill Academy',
    location: 'Kathmandu, Nepal',
    year: 'May 2020 - Aug 2022',
    gpa: 'GPA: 3.5 / 4.0',
    notes: 'Higher secondary education with specialization in Science, mathematics, and foundational computer science.',
  },
  {
    id: 'edu-souvenir',
    degree: 'Class 9-10 (SEE)',
    institution: 'Shree Souvenir Boarding School',
    location: 'Bidur, Nuwakot, Nepal',
    year: 'Apr 2018 - Jul 2020',
    gpa: 'GPA: 3.75 / 4.0',
    notes: 'Secondary Education Examination (SEE) completed with high academic standing.',
  },
];

export const HONORS_AND_ACHIEVEMENTS: HonorItem[] = [
  {
    title: 'Article Featured Online',
    description: 'Recognized for quality content and structured writing published to a wider online audience.',
  },
  {
    title: 'Donation Program Organizer',
    description: 'Coordinated stationery donation to Shree Ganesh Malika Secondary School, Lamjung, to support needy students.',
  },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    id: 'act-yuva-samaj-sewa',
    title: 'Yuva Samaj Sewa Rautahat',
    role: 'Chief Advisor',
    period: 'Current',
    location: 'Rautahat, Nepal',
    link: 'https://www.yuvasamajsewarautahat.org.np/',
    description: 'Serving as Chief Advisor providing organizational leadership and strategic guidance on youth empowerment, social services, and community welfare programs.',
  },
  {
    id: 'act-flood-relief',
    title: 'Flood Relief Fund',
    role: 'Volunteer',
    period: 'Aug 2026',
    location: 'Nuwakot, Nepal',
    description: 'Provided relief fund support to residents of Nuwakot affected by the massive flash flood.',
  },
  {
    id: 'act-lions-club',
    title: 'Lions Club of Kathmandu',
    role: 'Blood Donation Program Volunteer',
    location: 'Kathmandu, Nepal',
    description: 'Volunteered in a community blood donation drive assisting medical staff and donors.',
  },
  {
    id: 'act-pashupatinath',
    title: 'Pashupatinath Temple (Maha Shivaratri)',
    role: 'Water Donation Program Volunteer',
    location: 'Kathmandu, Nepal',
    description: 'Helped distribute free drinking water to thousands of pilgrims and devotees during Maha Shivaratri.',
  },
  {
    id: 'act-lamjung-donation',
    title: 'Stationery Donation Initiative',
    role: 'Co-Organizer & Volunteer',
    period: '2022',
    location: 'Lamjung, Nepal',
    description: 'Coordinated stationery supplies and educational support materials to students of Shree Ganesh Malika Secondary School, Lamjung.',
  },
];

export const REFERENCES: ReferenceItem[] = [
  {
    name: 'Bivesh Lamsal',
    role: 'BIT Coordinator',
    organization: 'Padmashree College',
    phone: '9860060487',
  },
  {
    name: 'Kamal Pariyar',
    role: 'Manager',
    organization: 'Hora Technology',
    phone: '98023436514',
  },
];

export const CAPABILITIES: Capability[] = [
  {
    title: 'Software & Web Development',
    description: 'Building practical, maintainable, and user-focused web and software solutions with HTML, CSS, JavaScript, and backend frameworks.',
    iconName: 'code',
    keyFocus: ['HTML5, CSS3, Modern JavaScript', 'Frontend Design & Layout', 'Clean Code & Debugging'],
  },
  {
    title: 'Quality Assurance & Moderation',
    description: 'Applying disciplined software testing, defect identification, and platform guidelines enforcement to maintain high product and community standards.',
    iconName: 'qa',
    keyFocus: ['Manual & Functional Testing', 'Platform Moderation & Guidelines', 'Escalation Handling & Reporting'],
  },
  {
    title: 'Data & Technology',
    description: 'Working with structured databases, data analysis, and technology-driven solutions to ensure data integrity and actionable insights.',
    iconName: 'data',
    keyFocus: ['SQL & MySQL Databases', 'Data Handling & Validation', 'XAMPP Local Server Environments'],
  },
  {
    title: 'IoT & Automation',
    description: 'Developing connected embedded systems using microcontrollers, analog/digital sensors, and cloud communication platforms.',
    iconName: 'iot',
    keyFocus: ['Sensor Integration', 'ESP8266 & Arduino Systems', 'Cloud Telemetry & Alerting'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Coding & Development',
    description: 'Web languages, programming paradigms, and debugging techniques.',
    iconName: 'code',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C#', 'SQL', 'Flask', 'Debugging'],
  },
  {
    title: 'Platform Moderation & Writing',
    description: 'Content operations, guideline enforcement, and professional communication.',
    iconName: 'moderation',
    skills: [
      'Platform Moderation',
      'Community Guidelines Enforcement',
      'Research Skills',
      'Content Structuring',
      'Social Media Writing',
    ],
  },
  {
    title: 'Testing & QA',
    description: 'Methodologies and practices focused on software verification and defect management.',
    iconName: 'qa',
    skills: [
      'Software Testing',
      'Manual Testing',
      'Test Case Design',
      'Bug Reporting',
      'Functional Testing',
      'Basic QA Concepts',
    ],
  },
  {
    title: 'Data & Databases',
    description: 'Tools and methodologies for data persistence, modeling, and management.',
    iconName: 'database',
    skills: ['SQL', 'MySQL', 'XAMPP', 'Data Analysis', 'Data Handling'],
  },
  {
    title: 'Networking',
    description: 'Network engineering, subnetting, and routing protocol configuration.',
    iconName: 'network',
    skills: ['VLAN', 'DHCP', 'Static Routing', 'RIP', 'OSPF', 'Network Configuration'],
  },
  {
    title: 'IoT & Embedded Systems',
    description: 'Hardware prototyping, sensor networks, and IoT cloud platforms.',
    iconName: 'iot',
    skills: ['Arduino', 'ESP8266 / NodeMCU', 'Sensors', 'Firebase', 'Blynk'],
  },
  {
    title: 'Tools & Environments',
    description: 'Development environments, version control, and productivity tooling.',
    iconName: 'tools',
    skills: ['Git', 'VS Code', 'XAMPP', 'Microsoft Office'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'animal-footprint-recognition',
    title: 'Domestic Animal Footprint Recognition',
    category: 'AI & ML',
    description:
      'A machine-learning project engineered to recognize domestic animal footprints using image classification and convolutional neural networks, served via a Flask web application.',
    technologies: ['Python', 'CNN', 'Flask', 'Machine Learning'],
    demoUrl: '#',
    highlightNotes: 'Image feature extraction, classification pipeline, and web inference interface.',
  },
  {
    id: 'smart-fire-safety',
    title: 'Smart Fire Safety & Environmental Monitoring System',
    category: 'IoT & Embedded',
    description:
      'An IoT-based safety system built to detect critical environmental hazards and potential fire outbreaks using sensors connected to an ESP8266 microcontroller and cloud telemetry.',
    technologies: ['ESP8266', 'Sensors', 'IoT', 'Firebase/Blynk'],
    demoUrl: '#',
    highlightNotes: 'Real-time hazard detection, automated alert dispatching, and remote cloud telemetry.',
  },
  {
    id: 'smart-kitchen-monitoring',
    title: 'Smart Kitchen Monitoring System',
    category: 'IoT & Embedded',
    description:
      'An automated IoT solution for continuous kitchen hazard monitoring using integrated temperature, gas, motion, and distance sensors with servo actuation and cloud notifications.',
    technologies: ['ESP8266', 'DHT11', 'MQ-6', 'PIR', 'Ultrasonic Sensor', 'Servo', 'Firebase/Blynk'],
    demoUrl: '#',
    highlightNotes: 'Multi-sensor data telemetry, gas leakage detection, and automated physical servo shutoff.',
  },
  {
    id: 'network-construction-admin',
    title: 'Network Construction & Administration',
    category: 'Networking',
    description:
      'A comprehensive computer networking deployment configuring isolated VLAN segments, dynamic IP addressing via DHCP, static routing, and dynamic routing protocols.',
    technologies: ['Cisco Networking', 'VLAN', 'DHCP', 'RIP', 'OSPF'],
    demoUrl: '#',
    highlightNotes: 'Subnet segmentation, routing convergence with RIP & OSPF, and access control testing.',
  },
  {
    id: 'ecommerce-web-project',
    title: 'E-commerce / Web Project',
    category: 'Software & Web',
    description:
      'A full-featured web-based e-commerce platform demonstrating catalog display, shopping cart workflows, product administration, and database persistence.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'SQL/XAMPP'],
    demoUrl: '#',
    highlightNotes: 'Product catalog filtering, cart state management, and relational database integration.',
  },
];

export const ACADEMIC_PROJECT_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-software-web',
    domain: 'Software & Web Systems',
    title: 'Web Application & Software Development',
    type: 'project',
    description:
      'Hands-on design, development, and debugging of web and software projects with focus on functional specifications and user requirements.',
    highlights: [
      'Engineered multi-tier web projects integrating HTML, CSS, JavaScript with SQL databases via XAMPP and Python backends.',
      'Applied clean separation of concerns, semantic markup, responsive design, and modular code structures.',
      'Conducted debugging, verification, and cross-browser responsiveness testing.',
    ],
  },
  {
    id: 'exp-testing-qa',
    domain: 'Testing & Quality Assurance',
    title: 'Software Quality Assurance & Defect Management',
    type: 'project',
    description:
      'Methodical execution of manual testing, functional requirement verification, and test case documentation across developed systems.',
    highlights: [
      'Authored comprehensive test cases covering positive pathways, negative boundary values, and system edge cases.',
      'Conducted end-to-end user workflow verification and logged detailed bug reports with reproducible steps.',
      'Validated input sanitization, error feedback clarity, and cross-platform functional stability.',
    ],
  },
  {
    id: 'exp-iot-systems',
    domain: 'IoT & Embedded Systems',
    title: 'Connected IoT Prototyping & Sensor Integration',
    type: 'project',
    description:
      'Prototyped and tested physical computing hardware interacting with real-time cloud data pipelines and mobile dashboards.',
    highlights: [
      'Interfaced microcontrollers (ESP8266 / NodeMCU, Arduino) with analog/digital sensors (DHT11, MQ-6, PIR, Ultrasonic).',
      'Configured Wi-Fi networking and real-time cloud communication using Firebase and Blynk APIs.',
      'Tested electrical circuit reliability, threshold-triggered alert logic, and servo actuator controls.',
    ],
  },
  {
    id: 'exp-ml-data',
    domain: 'Machine Learning & Data',
    title: 'Machine Learning Pipeline & Database Administration',
    type: 'project',
    description:
      'Exploration and practical implementation of classification algorithms and structured database architectures.',
    highlights: [
      'Trained and evaluated Convolutional Neural Network (CNN) models for image recognition tasks.',
      'Constructed relational database schemas (MySQL / SQL), drafted normalized queries, and verified data integrity.',
      'Developed lightweight web inference services using Flask for model evaluation.',
    ],
  },
  {
    id: 'exp-networking-collab',
    domain: 'Networking & Team Problem Solving',
    title: 'Network Administration & Academic Project Collaboration',
    type: 'academic',
    description:
      'Configured enterprise network protocols and coordinated with peers on technical deliverables, milestones, and documentation.',
    highlights: [
      'Implemented VLAN segmentation, DHCP servers, and dynamic routing architectures using RIP and OSPF.',
      'Diagnosed connectivity faults using packet tracing, ping diagnostics, and protocol status verification.',
      'Collaborated in academic project teams to meet technical milestones and assemble comprehensive project documentation.',
    ],
  },
];
