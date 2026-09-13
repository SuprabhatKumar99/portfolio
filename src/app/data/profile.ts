import { Profile } from '../core/models/profile.model';

export const PROFILE_DATA: Profile = {
  name: 'Suprabhat Kumar | S.C.B',
  title: 'Full-Stack Systems Engineer & AI Architect',
  tagline: 'Engineering resilient distributed architectures, event-driven backends, and self-correcting agentic AI systems.',
  bio: [
    'I am a software engineer and computer science researcher focused on building mission-critical backend microservices, real-time streaming architectures, and modern reactive web applications.',
    'With deep expertise spanning Spring Boot, PostgreSQL, Apache Kafka, Redis, Angular, and Agentic AI workflows (LangChain / LangGraph), I design software systems that emphasize sub-millisecond execution, fault tolerance, and clean architectural boundaries.',
    'I actively explore the convergence of edge computing, IoT telemetry pipelines, and localized LLM inference engines (Triton / llama-cpp), turning complex algorithmic challenges into high-impact, observable enterprise solutions.'
  ],
  location: 'West Bengal, India',
  email: 'suprabhat.kumar.scb@gmail.com',
  availability: 'Available for high-impact engineering roles & distributed systems consulting',
  avatarUrl: 'assets/images/self.jpg',
  resumeUrl: 'assets/resume/resume.pdf',
  githubUrl: 'https://github.com/SuprabhatKumar99',
  linkedinUrl: 'https://www.linkedin.com/in/suprabhat-kumar-scb',
  stats: [
    { label: 'Event Throughput', value: '25K+ msg/s', detail: 'Distributed streaming pipelines' },
    { label: 'System Uptime', value: '99.98%', detail: 'Production microservice clusters' },
    { label: 'Projects Built', value: '14+', detail: 'Enterprise & open-source software' },
    { label: 'Latency Reduction', value: '35%', detail: 'Optimized inference caching layers' }
  ],
  philosophies: [
    {
      title: 'Architect for Determinism',
      description: 'Distributed complexity must be tamed through idempotent APIs, strict contracts, and predictable event choreographies.',
      icon: 'cpu'
    },
    {
      title: 'Zero-Bloat UI Engineering',
      description: 'Modern frontends should be blazing fast, strictly typed, signal-driven, and accessible to every user on any network.',
      icon: 'zap'
    },
    {
      title: 'Agentic Self-Correction',
      description: 'AI is most transformative when engineered into closed feedback loops with automated validation and structured guardrails.',
      icon: 'shield-check'
    }
  ]
};
