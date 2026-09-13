import { SkillCategoryGroup } from '../core/models/skill.model';

export const SKILLS_DATA: SkillCategoryGroup[] = [
  {
    id: 'backend',
    title: 'Distributed Systems & Backend',
    description: 'High-throughput enterprise backends, concurrent services, and REST/gRPC endpoints.',
    skills: [
      { name: 'Java & Spring Boot', category: 'backend', level: 75, yearsExperience: 3, highlight: true },
      { name: 'Java Collections Framework & Concurrency', category: 'backend', level: 72, yearsExperience: 3, highlight: true },
      { name: 'Microservices Architecture', category: 'backend', level: 70, yearsExperience: 2, highlight: true },
      { name: 'Node.js & Express / NestJS', category: 'backend', level: 56, yearsExperience: 2 },
      { name: 'RESTful API & RPC Design', category: 'backend', level: 64, yearsExperience: 3, highlight: true },
      { name: 'System Design & High Availability', category: 'backend', level: 68, yearsExperience: 2 }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Modern Web',
    description: 'Component architecture, reactive state management, and modern responsive interfaces.',
    skills: [
      { name: 'Angular 22 / Standalone', category: 'frontend', level: 54, yearsExperience: 3, highlight: true },
      { name: 'TypeScript 6.x', category: 'frontend', level: 45, yearsExperience: 3, highlight: true },
      { name: 'Angular Signals & RxJS', category: 'frontend', level: 42, yearsExperience: 3, highlight: true },
      { name: 'Tailwind CSS 4.x', category: 'frontend', level: 50, yearsExperience: 2, highlight: true },
      { name: 'Web Accessibility (WCAG / a11y)', category: 'frontend', level: 55, yearsExperience: 2 },
      { name: 'HTML5 Semantic / Responsive Layouts', category: 'frontend', level: 66, yearsExperience: 3 }
    ]
  },
  {
    id: 'database',
    title: 'Data, Messaging & Caching',
    description: 'Streaming brokers, distributed caches, and ACID relational databases.',
    skills: [
      { name: 'PostgreSQL & Query Optimization', category: 'database', level: 65, yearsExperience: 3, highlight: true },
      { name: 'Apache Kafka & Zookeeper', category: 'database', level: 38, yearsExperience: 2, highlight: true },
      { name: 'Redis (Caching, Pub/Sub)', category: 'database', level: 42, yearsExperience: 2, highlight: true },
      { name: 'Normalized Data Modeling', category: 'database', level: 51, yearsExperience: 3 },
      { name: 'SQLite / Embedded DBs', category: 'database', level: 39, yearsExperience: 2 }
    ]
  },
  {
    id: 'ai-ml',
    title: 'Agentic AI & Machine Learning',
    description: 'Multi-agent orchestration, RAG retrieval architectures, and local LLM runtime optimization.',
    skills: [
      { name: 'LangChain & LangGraph Orchestration', category: 'ai-ml', level: 55, yearsExperience: 2, highlight: true },
      { name: 'Agentic Self-Correction Loops', category: 'ai-ml', level: 51, yearsExperience: 2, highlight: true },
      { name: 'Retrieval-Augmented Generation (RAG)', category: 'ai-ml', level: 52, yearsExperience: 2 },
      { name: 'Triton Inference Server', category: 'ai-ml', level: 48, yearsExperience: 1 },
      { name: 'Local Model Inference (llama-cpp)', category: 'ai-ml', level: 37, yearsExperience: 1 },
      { name: 'Vector Databases & Embeddings', category: 'ai-ml', level: 45, yearsExperience: 2 }
    ]
  },
  {
    id: 'devops',
    title: 'Cloud, Containers & DevOps',
    description: 'Containerization, automated deployment pipelines, and environment provisioning.',
    skills: [
      { name: 'Docker & Multi-Stage Builds', category: 'devops', level: 60, yearsExperience: 2, highlight: true },
      { name: 'GitHub Actions CI/CD Pipelines', category: 'devops', level: 58, yearsExperience: 2, highlight: true },
      { name: 'Linux Administration & Shell Scripting', category: 'devops', level: 44, yearsExperience: 3 },
      { name: 'Static Site Hosting & CDN (GitHub Pages)', category: 'devops', level: 42, yearsExperience: 3 },
      { name: 'Git Distributed Version Control', category: 'devops', level: 46, yearsExperience: 4, highlight: true }
    ]
  },
  {
    id: 'tools',
    title: 'Core CS, Testing & Tooling',
    description: 'Foundational computer science principles, testing suites, and developer productivity.',
    skills: [
      { name: 'Data Structures & Algorithms', category: 'tools', level: 61, yearsExperience: 3, highlight: true },
      { name: 'Computer Networking & Protocol Stacks', category: 'tools', level: 46, yearsExperience: 3 },
      { name: 'Operating Systems & Concurrency Models', category: 'tools', level: 45, yearsExperience: 3 },
      { name: 'Unit & Integration Testing (Vitest/Jest)', category: 'tools', level: 47, yearsExperience: 2 },
      { name: 'ESLint, Prettier & Code Quality', category: 'tools', level: 66, yearsExperience: 3 }
    ]
  }
];
