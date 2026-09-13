import { EducationItem } from '../core/models/experience.model';

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'sit-btech-it',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Information Technology',
    institution: 'Siliguri Institute of Technology',
    institutionUrl: 'https://sittechno.org',
    location: 'Siliguri, West Bengal, India',
    period: '2022 - 2026',
    description: 'Rigorous engineering curriculum focusing on computational theory, distributed systems, algorithms, and full-stack software development.',
    coursework: [
      'Data Structures & Algorithms in Java',
      'Database Management Systems (PostgreSQL / Relational Models)',
      'Computer Networking & Protocol Stacks (OSI, TCP/IP)',
      'Operating Systems & Concurrent Programming',
      'Object-Oriented Software Engineering',
      'Data Mining & Warehousing'
    ],
    achievements: [
      'Participant: Code Bites 5 organized by Computer Engineers\' Society (2026)',
      'Participant: Tata Crucible Campus Quiz (2026)',
      'Qualified Contender: Guidewire DEVTrails University Hackathon (2026)'
    ]
  },
  {
    id: 'certifications',
    degree: 'Specialized Professional Certifications',
    field: 'Distributed Systems & Advanced Artificial Intelligence',
    institution: 'Qualcomm Academy, Stanford Online & Google/Kaggle',
    location: 'Online',
    period: '2025 — 2026',
    description: 'Advanced certifications in production software systems, database engineering, and agentic workflows.',
    coursework: [
      '5-Day AI Agents Intensive — Google & Kaggle',
      'Advanced Relational Databases & SQL — Stanford University (edX)',
      'Wireless & Embedded Systems Fundamentals — Qualcomm Academy'
    ],
    achievements: [
      'Completed hands-on agentic system deployment with live RAG benchmarks.',
      'Mastered query execution planning, window functions, and indexing in relational engines.'
    ]
  }
];
