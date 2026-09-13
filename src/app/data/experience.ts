import { ExperienceItem } from '../core/models/experience.model';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  // {
  //   id: 'any-where',
  //   role: 'Software Engineering Fellow / Member',
  //   company: 'azmth Labs',
  //   companyUrl: '#',
  //   location: 'Remote',
  //   period: '2025 — Present',
  //   type: 'fellowship',
  //   description: 'Spearheading development of ethical, low-power super AI orchestration and resilient distributed communication modules.',
  //   highlights: [
  //     'Designed self-correcting agent execution loops with LangChain, LangGraph, and Triton Inference Server.',
  //     'Optimized local inference pipelines (llama-cpp-python), decreasing memory overhead by 35% on resource-constrained hardware.',
  //     'Engineered asynchronous message brokers to streamline inference job queues under heavy concurrent requests.'
  //   ],
  //   technologies: ['LangGraph', 'Python', 'Triton Server', 'llama-cpp', 'Docker', 'Linux']
  // },
  {
    id: 'zidio-dev',
    role: 'Java Full Stack Development Intern',
    company: 'Zidio Development',
    companyUrl: 'https://zidio.in/',
    location: 'Remote',
    period: '2025',
    type: 'internship',
    description: 'Built enterprise-grade web applications and microservices for distributed business workflows.',
    highlights: [
      'Engineered backend RESTful services using Java, Spring Boot, and PostgreSQL with normalized data models and indexing.',
      'Developed responsive, accessible Angular single-page applications with reactive forms and modular component architecture.',
      'Collaborated in Agile sprints, performing code reviews, unit testing, and Docker containerization.'
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'REST APIs', 'Git']
  },
  {
    id: 'gdg-siliguri-hackathon',
    role: 'Hackathon Competitor & Agentic AI Specialist',
    company: 'Build with AI: Agentic Premier League (GDG Siliguri)',
    companyUrl: 'https://gdg.community.dev',
    location: 'Siliguri, India',
    period: 'April 2026',
    type: 'contract',
    description: 'Participated in intense agentic AI development sprints hosted by Google Developer Group Siliguri.',
    highlights: [
      'Constructed a functional autonomous agent prototype implementing multi-turn memory and external tool calling within a 24-hour sprint.',
      'Demonstrated resilient error handling and validation guardrails preventing model hallucination during real-time evaluations.'
    ],
    technologies: ['Agentic AI', 'LangChain', 'Python', 'FastAPI', 'Vibe Coding']
  }
];
