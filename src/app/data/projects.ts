import { Project } from '../core/models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
    slug: 'microservices-telemetry-engine',
    title: 'Distributed Microservices Telemetry Engine',
    tagline: 'High-throughput distributed event streaming and real-time observability pipeline for industrial sensors.',
    description: 'An enterprise-grade telemetry ingestion pipeline architected on Spring Boot microservices, Apache Kafka event streams, Redis cache clusters, and PostgreSQL. Handles thousands of concurrent telemetry sensor payloads with strict schema validation, partitioned deduplication, and real-time dashboard subscriptions.',
    featured: true,
    status: 'completed',
    thumbnail: 'assets/projects/microservices-telemetry.svg',
    heroImage: 'assets/projects/microservices-telemetry.svg',
    technologies: [
      { name: 'Spring Boot', category: 'backend' },
      { name: 'Apache Kafka', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Docker', category: 'devops' },
      { name: 'Angular', category: 'frontend' }
    ],
    category: ['Distributed Systems', 'Backend', 'Full-Stack'],
    problem: 'Industrial monitoring systems produce volatile bursts of telemetry data from factory equipment. Traditional synchronous monolithic backends suffer from thread starvation, write locks on relational databases, and single-point-of-failure bottlenecks during machine anomalies.',
    solution: 'Engineered an asynchronous, decoupled event-driven architecture using Kafka message brokers partitioned by machine cluster ID. Implemented a write-behind Redis caching strategy to instantly acknowledge device ingestion while batch-persisting validated time-series telemetry into PostgreSQL.',
    architecture: 'Edge sensors emit JSON telemetry packets -> API Gateway rate limits and validates JWT -> Producer Microservice publishes to partitioned Kafka topics -> Multi-threaded Consumer Workers evaluate threshold alerts in Redis -> Persistent Storage worker syncs metrics to PostgreSQL -> WebSocket service broadcasts live alerts to Angular frontend.',
    challenges: [
      'Mitigating broker consumer lag during sudden machine alert spikes of over 25,000 events/sec.',
      'Guaranteeing exactly-once event processing semantics across distributed consumer partitions without degrading throughput.',
      'Minimizing connection pool exhaustion on PostgreSQL under intensive batch writes.'
    ],
    outcomes: [
      'Sustained 25K+ events/sec throughput with sub-25ms end-to-end ingestion latency.',
      'Reduced database write I/O overhead by 68% via Redis buffer staging.',
      'Zero message loss across automated chaos engineering broker failovers.'
    ],
    githubUrl: 'https://github.com/suprabhatbanerjee/microservices-telemetry-engine',
    liveUrl: 'https://suprabhatbanerjee.github.io/projects/microservices-telemetry-engine',
    startDate: '2026-01',
    endDate: '2026-05'
  },
  {
    slug: 'agentic-ai-orchestration-mesh',
    title: 'Agentic AI Orchestration Mesh',
    tagline: 'Autonomous multi-agent execution framework with self-correction reflection loops and RAG memory.',
    description: 'An autonomous agent framework powered by LangChain and LangGraph that decomposes complex engineering objectives into dynamic dependency DAGs. Features deterministic tool-calling guardrails, self-correcting validation loops, and hybrid vector retrieval.',
    featured: true,
    status: 'completed',
    thumbnail: 'assets/projects/agentic-ai-mesh.svg',
    heroImage: 'assets/projects/agentic-ai-mesh.svg',
    technologies: [
      { name: 'LangGraph', category: 'other' },
      { name: 'LangChain', category: 'other' },
      { name: 'Python', category: 'backend' },
      { name: 'Triton Server', category: 'cloud' },
      { name: 'llama-cpp', category: 'other' },
      { name: 'TypeScript', category: 'frontend' }
    ],
    category: ['AI & Machine Learning', 'Distributed Systems'],
    problem: 'Standard generative LLM workflows hallucinate tool invocation parameters and fail catastrophically when intermediate subtasks encounter runtime API errors or schema mismatches.',
    solution: 'Implemented stateful actor graphs in LangGraph with explicit evaluation nodes. Each tool execution output is verified by a deterministic critic agent before the state advances; failed steps re-enter a reflection prompt loop with memory-preserved error diffs.',
    architecture: 'User Objective -> Task Decomposition Agent -> Execution DAG Compiler -> Parallel Tool Invokers -> Output Validation Critic -> [Pass: State Advance / Fail: Reflection Loop] -> Final Synthesis & Citation Generator.',
    challenges: [
      'Preventing infinite loops when an external API permanently errors or rate-limits.',
      'Compiling and optimizing llama-cpp-python C++ bindings across different CPU/GPU host environments.',
      'Synchronizing multi-agent memory checkpoints without bloating token context limits.'
    ],
    outcomes: [
      'Achieved 94.2% autonomous task completion rate on complex multi-step research benchmarks.',
      'Reduced context token consumption by 40% through hierarchical state pruning.',
      'Zero unchecked schema execution failures across 1,000+ simulated evaluation runs.'
    ],
    githubUrl: 'https://github.com/suprabhatbanerjee/agentic-ai-orchestration-mesh',
    liveUrl: 'https://suprabhatbanerjee.github.io/projects/agentic-ai-orchestration-mesh',
    startDate: '2025-10',
    endDate: '2026-04'
  },
  {
    slug: 'smart-iot-attendance-platform',
    title: 'Smart IoT Classroom Attendance Platform',
    tagline: 'Automated proximity BLE verification, cross-device timetable matching, and real-time attendance analytics.',
    description: 'An end-to-end smart attendance ecosystem combining IoT hardware signal scanners, edge proximity verification, backend scheduling services, and an Angular web application for students, faculty, and university administrators.',
    featured: true,
    status: 'completed',
    thumbnail: 'assets/projects/smart-iot-attendance.svg',
    heroImage: 'assets/projects/smart-iot-attendance.svg',
    technologies: [
      { name: 'Angular 22', category: 'frontend' },
      { name: 'Java', category: 'backend' },
      { name: 'Spring Boot', category: 'backend' },
      { name: 'SQLite / Postgres', category: 'database' },
      { name: 'BLE Protocols', category: 'other' },
      { name: 'Tailwind CSS', category: 'frontend' }
    ],
    category: ['IoT & Hardware', 'Full-Stack', 'Web'],
    problem: 'Manual paper roll calls and RFID badge lines in lecture halls waste 15+ minutes per session, suffer from proxy attendance fraud, and lack centralized real-time administrative visibility.',
    solution: 'Developed dynamic cryptographically rotating Bluetooth Low Energy (BLE) beacons scanned by student devices within classroom geolocation geo-fences, cross-referencing university timetable slots to verify attendance in under 5 seconds.',
    architecture: 'Classroom IoT Gateway advertises ephemeral rolling token -> Student PWA / Mobile app captures token and transmits with device signature -> Spring Boot backend verifies timetable slot and classroom coordinates -> Instant audit record persisted -> Angular admin portal displays real-time attendance heatmaps.',
    challenges: [
      'Preventing token relay attacks (students transmitting the beacon code to absent peers outside the room).',
      'Handling sudden bursts of 150+ students checking in simultaneously at the start of a class hour.'
    ],
    outcomes: [
      'Decreased lecture check-in time from 15 minutes to under 5 seconds per student.',
      'Eliminated proxy attendance by rotating encryption nonces every 1500ms.',
      'Successfully piloted across departmental engineering lecture rooms.'
    ],
    githubUrl: 'https://github.com/suprabhatbanerjee/smart-iot-attendance-platform',
    liveUrl: 'https://suprabhatbanerjee.github.io/projects/smart-iot-attendance-platform',
    startDate: '2025-08',
    endDate: '2025-12'
  },
  {
    slug: 'farmora-crop-intelligence-ai',
    title: 'Farmora Crop Intelligence AI',
    tagline: 'Multi-spectral satellite imagery fusion and IoT soil intelligence for early plant pathogen detection.',
    description: 'An AI-powered agricultural intelligence platform fusing ground-level IoT moisture/temperature telemetry with multispectral satellite vegetation indices to diagnose crop diseases and deliver integrated pest management recommendations.',
    featured: false,
    status: 'completed',
    thumbnail: 'assets/projects/farmora-crop-ai.svg',
    heroImage: 'assets/projects/farmora-crop-ai.svg',
    technologies: [
      { name: 'Python', category: 'backend' },
      { name: 'PyTorch', category: 'other' },
      { name: 'Angular', category: 'frontend' },
      { name: 'PostgreSQL / PostGIS', category: 'database' },
      { name: 'Docker', category: 'devops' }
    ],
    category: ['AI & Machine Learning', 'Web'],
    problem: 'Smallholder agricultural producers lose up to 40% of seasonal yields to late-stage blight and pest infestations that are invisible to the naked eye until irreversible damage occurs.',
    solution: 'Combined Sentinel satellite Normalized Difference Vegetation Index (NDVI) time-series analysis with local soil sensor readings and computer vision leaf scans, alerting farmers 7-10 days before visible epidemic outbreaks.',
    architecture: 'Satellite raster tiles ingestion -> PostGIS spatial indexing -> PyTorch CV classifier identifies anomaly masks -> Weather forecasting API correlates fungal risk parameters -> Push notification system alerts growers via progressive web app.',
    challenges: [
      'Optimizing high-resolution satellite imagery tiles for low-bandwidth rural mobile networks.',
      'Balancing false-positive alerts during seasonal cloud coverage.'
    ],
    outcomes: [
      'Attained 91.8% diagnostic accuracy across 18 common agricultural crop pathologies.',
      'Delivered early blight alerts up to 9 days prior to canopy symptoms.'
    ],
    githubUrl: 'https://github.com/suprabhatbanerjee/farmora-crop-intelligence-ai',
    startDate: '2026-06',
    endDate: '2026-09'
  },
  {
    slug: 'synapse-node-urban-commons',
    title: 'Synapse Node — Urban Focus Commons',
    tagline: 'Off-grid acoustic timber telemetry node and environmental acoustic intelligence system.',
    description: 'An innovative urban smart infrastructure node combining passive acoustic timber layering, off-grid solar micro-generation, and real-time environmental noise abatement telemetry.',
    featured: false,
    status: 'in-progress',
    thumbnail: 'assets/projects/synapse-node.svg',
    heroImage: 'assets/projects/synapse-node.svg',
    technologies: [
      { name: 'IoT Telemetry', category: 'other' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'Tailwind CSS', category: 'frontend' }
    ],
    category: ['IoT & Hardware', 'Distributed Systems'],
    problem: 'Urban density creates high acoustic pollution zones that destroy concentration, while traditional study pods consume heavy grid electricity and lack environmental self-monitoring.',
    solution: 'Designed an off-grid timber acoustic sanctuary equipped with ambient decibel telemetry, solar power load balancers, and an open-access web dashboard tracking micro-climate performance.',
    challenges: [
      'Calibrating low-cost MEMS microphones for accurate decibel weighting (dBA/dBC).',
      'Engineering ultra-low-power microcontrollers for 72-hour cloudy weather solar reserve.'
    ],
    outcomes: [
      'Demonstrated 28dB passive noise reduction without active energy consumption.',
      'Formulated open hardware specs for university innovation funding pitch.'
    ],
    githubUrl: 'https://github.com/suprabhatbanerjee/synapse-node',
    startDate: '2026-07',
    endDate: '2026-09'
  },
  {
    slug: 'daikibo-machine-health-portal',
    title: 'Daikibo Factory Telemetry Portal',
    tagline: 'Private intranet industrial machine health dashboard monitoring 9 machines across 4 factories.',
    description: 'High-security intranet dashboard application providing real-time vibration, thermal, and electrical load monitoring across industrial machine assets with automated maintenance scheduling.',
    featured: false,
    status: 'completed',
    thumbnail: 'assets/projects/daikibo-health-monitor.svg',
    heroImage: 'assets/projects/daikibo-health-monitor.svg',
    technologies: [
      { name: 'Angular', category: 'frontend' },
      { name: 'Spring Boot', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Docker', category: 'devops' }
    ],
    category: ['Distributed Systems', 'Full-Stack'],
    problem: 'Industrial plant managers had no unified view of multi-facility machinery degradation, resulting in unexpected factory floor downtime and costly component replacements.',
    solution: 'Engineered an isolated intranet dashboard aggregating multi-factory PLC data into a single responsive view with automated threshold alerts and ISO-compliant maintenance logging.',
    challenges: [
      'Strict intranet air-gap constraints prohibiting external CDN or cloud dependencies.',
      'Normalizing conflicting legacy PLC protocols into a unified schema.'
    ],
    outcomes: [
      'Achieved 100% air-gapped self-hosted deployment with zero external internet dependencies.',
      'Reduced scheduled inspection overhead by 45% through predictive vibration warnings.'
    ],
    githubUrl: 'https://github.com/suprabhatbanerjee/daikibo-machine-health-portal',
    startDate: '2025-09',
    endDate: '2025-11'
  }
];
