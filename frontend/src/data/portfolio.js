// Central content store for the portfolio. Edit here to update across the site.

export const PERSON = {
  name: "Krishna Vamsi Gangisetty",
  shortName: "Krishna Vamsi",
  monogram: "KV",
  tagline: "Software Engineer building scalable systems & shipping GenAI features.",
  location: "Pune, India",
  email: "gangisettykrishnavamsi@gmail.com",
  phone: "+91 7780150531",
  github: "https://github.com/gkrishnavamsi8",
  linkedin: "https://linkedin.com/in/gkrishnavamsi8",
  resumeUrl: "/Krishna_Vamsi_Resume.pdf",
  yearsOfExperience: "3+",
};

export const ABOUT = [
  "I'm a Software Developer with 3+ years of experience building scalable, high-availability backend systems on Java and Spring Boot. At Amdocs I work on telecom platforms for Comcast and AT&T that quietly handle a million customer requests a day.",
  "Lately, I've been pushing engineering rigor into the GenAI side of the house — designing Agentic AI platforms with LangChain, LangGraph, MCP servers, RAG over pgvector, and Azure OpenAI. SDE by day, agent-builder by night.",
];

export const EXPERIENCE = {
  role: "Software Developer",
  company: "Amdocs",
  location: "Pune, India",
  period: "Jul 2023 — Present",
  blurb:
    "Backend & cloud engineer on telecom platforms for Comcast and AT&T. Also lead engineer on AskMiPaaS — an internal Agentic AI platform.",
  bullets: [
    {
      tag: "BACKEND",
      text: "Built Java 17 / Spring Boot microservices powering cloud-native workflows that handle 1M+ daily customer requests in production.",
    },
    {
      tag: "EVENTS",
      text: "Implemented Kafka-based event-driven communication across 8+ microservices — 50K+ events/day at sub-200ms latency, +35% downstream throughput.",
    },
    {
      tag: "PERFORMANCE",
      text: "Tuned REST APIs in Spring Boot — improved p95 by ~45% with query tuning, indexing, and Redis-backed lookup caches.",
    },
    {
      tag: "PLATFORM",
      text: "Containerized 10+ services on Docker, Kubernetes & OpenShift across 4 environments — deploy time from 2h to under 15m, with auto-scaling.",
    },
    {
      tag: "CI/CD",
      text: "Maintained Jenkins, GitHub Actions, Maven & Git pipelines across 6+ services — release cycle time down ~60%.",
    },
    {
      tag: "CLOUD",
      text: "Migrated 15+ AT&T customer workloads from on-prem to cloud-native distributed platforms with zero downtime.",
    },
    {
      tag: "AGENTIC AI",
      text: "AskMiPaaS — Agentic AI platform with LangChain, LangGraph, RAG over pgvector, and Azure OpenAI. 60% drop in defect-investigation effort, 70% less manual prompt-eval work.",
    },
    {
      tag: "DEVTOOLS",
      text: "Built custom MCP-based tooling integrated with Cursor — natural-language driven Kafka, K8s and log workflows that saved the team 5+ hours/week.",
    },
    {
      tag: "OBSERVABILITY",
      text: "Spring Boot Actuator, centralized logging, K8s probes — MTTD down ~40%, sustained 99.9% production uptime.",
    },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Distributed Payment Orchestration & Fraud Intelligence",
    type: "SDE FLAGSHIP",
    span: "lg:col-span-2",
    description:
      "Cloud-native payment orchestrator with dynamic multi-provider failover (Stripe, Razorpay, PayPal) via Resilience4j circuit breakers — sub-1200ms routing. Exactly-once processing via Redis-backed idempotency + Transactional Outbox, Kafka Streams windowing for real-time velocity checks, and a hybrid fraud engine combining Redis rules with pgvector semantic similarity and a Spring AI RAG analyst.",
    highlights: [
      "Sub-1200ms routing latency across providers",
      "Exactly-once payments via outbox pattern",
      "Hybrid rules + vector + RAG fraud engine",
    ],
    tech: ["Java 21", "Spring Boot 3.3", "Kafka Streams", "PostgreSQL", "pgvector", "Redis", "Spring AI", "Docker", "K8s", "Helm"],
  },
  {
    id: 2,
    title: "AskMiPaaS — Enterprise Agentic AI",
    type: "GENAI FLAGSHIP",
    span: "lg:col-span-1",
    description:
      "Enterprise Agentic AI platform for internal teams — multi-agent orchestration with tool calling, RAG, and human-in-the-loop approvals. Automated KB ingestion into pgvector ensures agent grounding stays current.",
    highlights: [
      "60% drop in defect-investigation effort",
      "70% reduction in manual prompt evaluation",
      "80% less KB-maintenance overhead",
    ],
    tech: ["Python", "LangChain", "LangGraph", "Azure OpenAI", "pgvector", "RAG", "MCP"],
  },
  {
    id: 3,
    title: "Build a Plan — Churn Prediction Pipeline",
    type: "ML PIPELINE",
    span: "lg:col-span-1",
    description:
      "End-to-end ML pipeline for telecom churn — preprocessing, feature engineering, and model comparison across Logistic Regression, Random Forest, XGBoost, and K-Means segmentation.",
    highlights: ["0.91 ROC-AUC", "0.80 Recall", "Production-ready feature pipeline"],
    tech: ["Python", "scikit-learn", "XGBoost", "Pandas", "NumPy"],
  },
  {
    id: 4,
    title: "Grocery Recommendation System",
    type: "IEEE OCIT 2022 · PUBLICATION",
    span: "lg:col-span-2",
    description:
      "Recommendation engine using an improvised Apriori algorithm with Chi-Square statistical testing for seasonal-pattern identification across 14,000+ transactions. Published at IEEE OCIT 2022.",
    highlights: [
      "14,000+ transaction dataset",
      "Improved Apriori with seasonal weighting",
      "Peer-reviewed at IEEE OCIT 2022",
    ],
    tech: ["Python", "Apriori", "Chi-Square Test", "Pandas"],
  },
];

export const SKILLS = {
  sde: {
    title: "SDE STACK",
    subtitle: "Primary — what I ship every day",
    groups: [
      { label: "Languages", items: ["Java 17 / 21", "Python", "SQL", "YAML"] },
      { label: "Frameworks", items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "Resilience4j"] },
      { label: "Cloud & Containers", items: ["AWS", "Docker", "Kubernetes", "OpenShift", "Helm"] },
      { label: "Messaging", items: ["Apache Kafka", "Kafka Streams"] },
      { label: "Databases", items: ["PostgreSQL", "Cassandra", "Redis", "pgvector"] },
      { label: "DevOps", items: ["Jenkins", "GitHub Actions", "Maven", "Nexus", "CI/CD"] },
    ],
  },
  genai: {
    title: "GENAI STACK",
    subtitle: "Secondary — the differentiator",
    groups: [
      { label: "Agent Frameworks", items: ["LangChain", "LangGraph", "MCP Servers", "CrewAI (familiar)"] },
      { label: "LLM Providers", items: ["Azure OpenAI", "OpenAI", "Spring AI"] },
      { label: "Patterns", items: ["RAG", "Tool Calling", "Multi-Agent Orchestration", "Human-in-the-loop"] },
      { label: "Prompt", items: ["Prompt Engineering", "Prompt Evaluation", "Semantic Search"] },
      { label: "Vector & Retrieval", items: ["pgvector", "FAISS", "Embeddings"] },
      { label: "Classical ML", items: ["scikit-learn", "XGBoost", "PyTorch (exposure)", "TensorFlow (exposure)"] },
    ],
  },
};

export const EDUCATION = {
  school: "Vellore Institute of Technology",
  degree: "B.Tech, Computer Science (AI & ML Specialization)",
  location: "Chennai, India",
  period: "2019 — 2023",
  cgpa: "8.3 / 10",
  highlight: "Published at IEEE OCIT 2022 — Grocery Recommendation using improvised Apriori + Chi-Square.",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const METRICS = [
  { value: "1M+", label: "Daily requests handled" },
  { value: "99.9%", label: "Production uptime" },
  { value: "60%", label: "Faster release cycle" },
  { value: "3+", label: "Years shipping in prod" },
];
