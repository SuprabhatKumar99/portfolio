import { Project } from '../core/models/project.model';


export const PROJECTS_DATA: Project[] = [
  {
    "slug": "task-management",
    "title": "Task Management System",
    "tagline": "A full-stack task management platform for organizing and tracking work efficiently.",
    "description": "A task management web application designed to manage tasks, track progress, and organize day-to-day work through a structured frontend and backend architecture.",
    "featured": true,
    "status": "completed",
    "thumbnail": "assets/projects/task-mg-thumbnail.png",
    "heroImage": "assets/projects/task-mg-hero.png",
    "technologies": [
      {
        "name": "Angular",
        "category": "frontend"
      },
      {
        "name": "Spring Boot",
        "category": "backend"
      }
    ],
    "category": [
      "Full-Stack",
      "Web Development"
    ],
    "problem": "Managing tasks without a centralized application makes it difficult to organize work, track progress, and maintain a clear view of responsibilities.",
    "solution": "Built a web-based task management application with a structured frontend and backend to provide centralized task creation, organization, and tracking.",
    "architecture": "Angular frontend -> backend REST APIs -> persistent application data layer.",
    "challenges": [
      "Designing a maintainable frontend architecture for task workflows.",
      "Connecting frontend features reliably with backend APIs.",
      "Handling application state and task lifecycle interactions."
    ],
    "outcomes": [
      "Completed a functional full-stack task management application.",
      "Implemented a structured web interface for task management.",
      "Strengthened practical experience with full-stack application development."
    ],
    "githubUrl": "",
    "liveUrl": "",
    "startDate": "",
    "endDate": ""
  },
  {
    "slug": "cinemax",
    "title": "Cinemax",
    "tagline": "A modern movie-focused web application for discovering and exploring films.",
    "description": "A movie web application focused on presenting cinema-related content through a modern user interface and interactive browsing experience.",
    "featured": true,
    "status": "completed",
    "thumbnail": "assets/projects/cinemax.png",
    "heroImage": "assets/projects/cinemax.png",
    "technologies": [

      {
        "name": "Angular",
        "category": "frontend"
      },
      {
        "name": "Spring Boot",
        "category": "backend"
      },
      {
        "name": "Apache Kafka",
        "category": "database"
      },
      {
        "name": "Redis",
        "category": "database"
      },
      {
        "name": "PostgreSQL",
        "category": "database"
      },
      {
        "name": "Docker",
        "category": "devops"
      },

    ],
    "category": [
      "Full-Stack",
      "Web Development"
    ],
    "problem": "Movie discovery interfaces can become difficult to navigate when content is not presented through a focused and intuitive browsing experience.",
    "solution": "Built Cinemax as a dedicated movie-focused web experience with an organized interface for browsing and exploring cinema content.",
    "architecture": "Web frontend -> application UI -> movie content/data layer.",
    "challenges": [
      "Creating a polished movie discovery interface.",
      "Organizing cinema content into an intuitive browsing experience.",
      "Building a responsive interface suitable for different screen sizes."
    ],
    "outcomes": [
      "Completed a dedicated movie web application.",
      "Built a modern interface focused on movie discovery.",
      "Improved practical frontend development and UI implementation skills."
    ],
    "githubUrl": "",
    "liveUrl": "",
    "startDate": "",
    "endDate": ""
  },

  {
    "slug": "ecommerce-customer-support-bot",
    "title": "E-Commerce Customer Support Bot with Human Escalation",
    "tagline": "Agentic AI customer support with RAG, transactional workflows, and intelligent human escalation.",
    "description": "A production-oriented e-commerce customer support platform built with FastAPI, LangChain, LangGraph, PostgreSQL, pgvector, and real-time Server-Sent Events. The system combines conversational AI, retrieval-augmented generation, deterministic order operations, persistent conversation history, and rule-based escalation to connect customers with human support agents when automation is insufficient.",
    "featured": true,
    "status": "completed",
    "thumbnail": "assets/projects/e-commerce-support-bot.png",
    "heroImage": "assets/projects/e-commerce-support-bot.png",
    "technologies": [
      {
        "name": "Python",
        "category": "backend"
      },
      {
        "name": "FastAPI",
        "category": "backend"
      },
      {
        "name": "LangChain",
        "category": "ai"
      },
      {
        "name": "LangGraph",
        "category": "ai"
      },
      {
        "name": "Google Gemini",
        "category": "ai"
      },
      {
        "name": "Hugging Face",
        "category": "ai"
      },
      {
        "name": "PostgreSQL",
        "category": "database"
      },
      {
        "name": "pgvector",
        "category": "database"
      },
      {
        "name": "SQLAlchemy",
        "category": "backend"
      },
      {
        "name": "Server-Sent Events",
        "category": "backend"
      },
      {
        "name": "Docker",
        "category": "devops"
      },
      {
        "name": "HTML/CSS/JavaScript",
        "category": "frontend"
      }
    ],
    "category": [
      "Agentic AI",
      "RAG",
      "Backend",
      "Full-Stack"
    ],
    "problem": "E-commerce support teams must handle repetitive questions about orders, cancellations, returns, refunds, delivery issues, and policies while still providing a safe escalation path for frustrated customers and sensitive disputes. A purely generative chatbot can also be risky when it is allowed to perform transactional operations without deterministic authorization and ownership checks.",
    "solution": "Built a stateful LangGraph support workflow that classifies customer intent, retrieves relevant policy knowledge through pgvector-based RAG, executes transactional operations through strongly typed application services, maintains conversation history, and automatically creates support tickets when escalation rules are triggered. Once escalated, the AI workflow is bypassed and customer-agent communication is streamed in real time using Server-Sent Events.",
    "architecture": "Customer Web Chat -> FastAPI Conversation API -> LangGraph Support Workflow -> Intent Classification -> RAG Retrieval / Deterministic Order Tools -> Response Generation -> PostgreSQL + pgvector persistence -> Escalation Engine -> Support Ticket -> SSE -> Agent Dashboard.",
    "challenges": [
      "Keeping AI-generated responses separated from transactional authorization by routing order operations through deterministic application services.",
      "Implementing reliable human escalation based on explicit handoff requests, frustration score, low classification confidence, repeated operational failures, and sensitive financial disputes.",
      "Maintaining conversational state and message history while switching seamlessly from the automated bot to a human agent.",
      "Building retrieval over support policies and FAQs using document chunking, embeddings, cosine similarity, and pgvector.",
      "Providing real-time customer-agent updates without introducing an external message broker in the MVP."
    ],
    "outcomes": [
      "Completed an end-to-end AI customer support MVP with automated and human-assisted support flows.",
      "Implemented RAG over shipping policies, return policies, and FAQs using PostgreSQL with pgvector.",
      "Implemented deterministic order status, cancellation, return, and refund workflows with customer ownership validation.",
      "Implemented rule-based escalation and persistent support ticket lifecycle management.",
      "Implemented real-time customer and agent communication using Server-Sent Events.",
      "Containerized the application and PostgreSQL/pgvector infrastructure with Docker Compose."
    ],
    "githubUrl": "",
    "liveUrl": "",
    "startDate": "",
    "endDate": ""
  },

  {
    "slug": "ricozknow",
    "title": "RicozKnow",
    "tagline": "Enterprise knowledge intelligence platform that puts the right answer in front of every customer before they need to ask.",
    "description": "An enterprise knowledge base and customer support intelligence platform designed to help organizations centralize, manage, retrieve, and deliver trusted knowledge across customer and support workflows. RicozKnow is designed around scalable knowledge management, intelligent retrieval, role-based access, multi-tenant architecture, and AI-assisted customer support.",
    "featured": true,
    "status": "in-progress",
    "thumbnail": "assets/projects/ricozknow-thumbnail.png",
    "heroImage": "assets/projects/ricozknow-hero.png",
    "technologies": [
      {
        "name": "Angular",
        "category": "frontend"
      },
      {
        "name": "TypeScript",
        "category": "frontend"
      },
      {
        "name": "Tailwind CSS",
        "category": "frontend"
      },
      {
        "name": "Spring Boot",
        "category": "backend"
      },
      {
        "name": "Java",
        "category": "backend"
      },
      {
        "name": "PostgreSQL",
        "category": "database"
      },
      {
        "name": "Redis",
        "category": "database"
      },
      {
        "name": "REST APIs",
        "category": "backend"
      },
      {
        "name": "JWT",
        "category": "security"
      },
      {
        "name": "Docker",
        "category": "devops"
      }
    ],
    "category": [
      "Enterprise",
      "Knowledge Management",
      "AI",
      "Full-Stack"
    ],
    "problem": "Enterprise support teams often struggle with fragmented documentation, outdated knowledge, inconsistent answers, and difficulty finding the right information quickly. As organizations scale, maintaining a reliable knowledge source across teams, products, and customer-facing workflows becomes increasingly difficult.",
    "solution": "Designed RicozKnow as a centralized, enterprise-grade knowledge platform that organizes organizational knowledge into structured, searchable content while providing controlled access through roles and tenant boundaries. The platform is designed to make relevant knowledge easier to discover and deliver across customer-support workflows.",
    "architecture": "Angular frontend -> Spring Boot REST API layer -> authentication and authorization -> multi-tenant knowledge management services -> PostgreSQL persistence -> Redis caching -> knowledge retrieval/search layer -> customer/support-facing knowledge delivery.",
    "challenges": [
      "Designing a multi-tenant architecture that keeps organizational knowledge isolated between tenants.",
      "Creating a scalable knowledge model capable of supporting structured enterprise content and evolving knowledge domains.",
      "Designing role-based access control for administrators, knowledge managers, support teams, and other organizational users.",
      "Building efficient knowledge retrieval so support users can quickly discover relevant information.",
      "Maintaining consistency and governance across knowledge creation, editing, publishing, and lifecycle management.",
      "Designing the platform so SSO can be integrated as a future authentication capability."
    ],
    "outcomes": [
      "Designed an enterprise-oriented knowledge management platform for scalable customer-support workflows.",
      "Established a multi-tenant application architecture for organizational knowledge isolation.",
      "Designed structured knowledge management and controlled access workflows.",
      "Built the platform architecture around Angular and Spring Boot for maintainable full-stack development.",
      "Prepared the architecture for caching, scalable retrieval, and future enterprise authentication capabilities."
    ],
    "githubUrl": "",
    "liveUrl": "",
    "startDate": "",
    "endDate": ""
  },

  {
  "slug": "aamts",
  "title": "AAMTS — Automatic Attendance Management & Tracking System",
  "tagline": "Smart attendance automation using BLE presence verification, real-time monitoring, and fraud detection.",
  "description": "An intelligent attendance management and tracking platform designed to automate classroom attendance using Bluetooth Low Energy (BLE) evidence, scheduled attendance sessions, registered student devices, real-time monitoring, and backend verification. The system combines Angular and Tailwind CSS with a Spring Boot backend, PostgreSQL persistence, JWT-based authentication, role-based access control, and real-time attendance updates.",
  "featured": true,
  "status": "completed",
  "thumbnail": "assets/projects/aamts-thumbnail.png",
  "heroImage": "assets/projects/aamts-hero.png",
  "technologies": [
    {
      "name": "Angular",
      "category": "frontend"
    },
    {
      "name": "TypeScript",
      "category": "frontend"
    },
    {
      "name": "Tailwind CSS",
      "category": "frontend"
    },
    {
      "name": "Java",
      "category": "backend"
    },
    {
      "name": "Spring Boot",
      "category": "backend"
    },
    {
      "name": "Spring Security",
      "category": "security"
    },
    {
      "name": "JWT",
      "category": "security"
    },
    {
      "name": "PostgreSQL",
      "category": "database"
    },
    {
      "name": "REST APIs",
      "category": "backend"
    },
    {
      "name": "WebSocket",
      "category": "backend"
    },
    {
      "name": "Bluetooth Low Energy",
      "category": "hardware"
    },
    {
      "name": "Docker",
      "category": "devops"
    }
  ],
  "category": [
    "Full-Stack",
    "IoT",
    "Distributed Systems",
    "Real-Time Systems"
  ],
  "problem": "Traditional classroom attendance systems require significant manual effort from faculty and can make it difficult to verify whether a student is physically present. Manual attendance also creates opportunities for proxy attendance, duplicate submissions, device misuse, and other anomalies.",
  "solution": "Built an automated attendance platform where faculty create scheduled attendance sessions and students provide BLE-based presence evidence from registered devices. The Spring Boot backend validates the beacon, active session, registered device, student section, timestamp, RSSI, duplicate submissions, replay attempts, and sustained presence before determining the attendance outcome.",
  "architecture": "Angular + Tailwind frontend -> Spring Boot REST API -> JWT authentication and RBAC -> academic management modules -> attendance session lifecycle -> BLE evidence verification -> PostgreSQL -> real-time REST snapshot + STOMP WebSocket updates -> faculty/student dashboards and attendance reports.",
  "challenges": [
    "Designing a reliable attendance verification flow where BLE acts as presence evidence rather than being treated as unconditional proof of attendance.",
    "Validating beacon identity, active attendance session, registered student device, section membership, timestamp skew, RSSI, duplicate submissions, and replay attempts.",
    "Supporting a complete attendance session lifecycle from SCHEDULED to OPEN to CLOSED.",
    "Providing real-time attendance updates to faculty through live REST snapshots and STOMP WebSocket events.",
    "Detecting suspicious attendance activity and maintaining auditable attendance records.",
    "Designing role-based access for SUPER_ADMIN, ADMIN, FACULTY, and STUDENT users."
  ],
  "outcomes": [
    "Built an end-to-end automatic attendance management platform using BLE-based presence verification.",
    "Implemented scheduled attendance sessions with OPEN and CLOSED lifecycle states.",
    "Implemented backend verification for beacon, device, session, timestamp, RSSI, duplicate, replay, and presence conditions.",
    "Implemented real-time attendance monitoring using REST live snapshots and STOMP WebSocket updates.",
    "Implemented student, faculty, academic, device, beacon, attendance, fraud-alert, reporting, and audit workflows.",
    "Implemented JWT authentication and role-based access control across the platform."
  ],
  "githubUrl": "",
  "liveUrl": "",
  "startDate": "",
  "endDate": ""
}
  
];