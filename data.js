// ================================================================
//  data.js — SOVEREIGN CORE CONFIGURATION
//
//  This is the only file you need to edit to update the page.
//  Change text, add products, add partners — all in here.
//  Save the file and refresh the browser to see changes.
// ================================================================


// ----- Site-wide text -----
// Change these to update the brand name, page title, etc.
const SITE = {
  brandName:    "Sovereign Core",
  pageTitle:    "Sovereign Core Ecosystem",
  heroTitle:    "Sovereign Core Ecosystem",
  heroSubtitle: "Explore platform products, partner technologies, and services for the Sovereign Core showcase.",
  footerNote:   "Sovereign Core — internal showcase concept page.",
};


// ----- Filter categories -----
// These appear in the dropdown filter on the left.
// The "All categories" option is added automatically.
//
// To add a category:
//   { id: "Your Category", label: "Your Category" },
//
// The id must exactly match the category field used in PRODUCTS or PARTNERS below.
const CATEGORIES = [
  { id: "AI & Data Platforms",                  label: "AI & Data Platforms" },
  { id: "Business Applications & Automation",   label: "Business Applications & Automation" },
  { id: "Data Management & Databases",          label: "Data Management & Databases" },
  { id: "Integration & Data Movement",          label: "Integration & Data Movement" },
  { id: "Engineering Tools",                    label: "Engineering Tools" },
  { id: "AI Dev Tools",                         label: "AI-powered Dev Tools" },
  { id: "Integration",                          label: "Integration" },
  { id: "IT Operations & Asset Management",     label: "IT Operations & Asset Management" },
  { id: "Consulting & Lifecycle Services",      label: "Consulting & Lifecycle Services" },
  { id: "Asset Management",                     label: "Asset Management" },
  { id: "Infrastructure",                       label: "Infrastructure (Partner)" },
  { id: "MSP",                                  label: "IT Service Provider (Partner)" },
  { id: "Security",                             label: "Security (Partner)" },
  { id: "Systems Integrator",                   label: "Systems Integrator (Partner)" },
  { id: "Migration",                            label: "Migration (Partner)" },
];


// ----- Products / Offerings -----
// Each entry creates one card in the Offerings section.
//
// To add a product — copy one block below, fill in the fields, save.
// To remove a product — delete its block (from { to the closing },).
//
// Fields:
//   title        — Product name shown on the card
//   subtitle     — Short tagline shown in the detail popup
//   category     — Must match one of the ids in CATEGORIES above
//   vendor       — Label at the top of the card (e.g. "IBM", "Partner", "Services")
//   description  — 1–2 sentences shown on the card
//   overview     — Longer paragraph shown in the detail popup
//   uses         — Bullet points shown in the detail popup ("Relevant uses")
//   sovereignty  — Sovereignty compliance rating 1–5
//   tier         — Application tier rating 1–5
const PRODUCTS = [

  // --- AI & Data Platforms ---
  {
    title:       "watsonx.ai",
    subtitle:    "AI studio and model platform",
    category:    "AI & Data Platforms",
    vendor:      "IBM",
    sovereignty: 4,
    tier:        1,
    description: "Foundation model and AI platform for governed, enterprise AI environments.",
    overview:    "Supports model development, inferencing, and AI application building in environments that need control, governance, and enterprise integration.",
    uses: [
      "Model development and tuning",
      "Prompt engineering and AI app building",
      "Enterprise AI deployment",
    ],
  },
  {
    title:       "watsonx.gov",
    subtitle:    "Government-oriented AI offering",
    category:    "AI & Data Platforms",
    vendor:      "IBM",
    sovereignty: 5,
    tier:        1,
    description: "AI offering for regulated, public-sector, and sovereignty-focused deployments.",
    overview:    "Positioned for public-sector and regulated settings that need operational control, deployment flexibility, and governance alignment.",
    uses: [
      "Government and public-sector workloads",
      "Controlled AI environments",
      "Policy-aware deployment",
    ],
  },
  {
    title:       "watsonx.data.*",
    subtitle:    "Data platform family",
    category:    "AI & Data Platforms",
    vendor:      "IBM",
    sovereignty: 4,
    tier:        1,
    description: "Data platform family for governed data access, analytics, and AI data preparation.",
    overview:    "Data-layer family for governed data access, analytics, and AI data preparation across hybrid environments.",
    uses: [
      "Lakehouse and analytics",
      "Data access for AI",
      "Governed enterprise data",
    ],
  },
  {
    title:       "wx.orchestrate",
    subtitle:    "Workflow and AI orchestration",
    category:    "AI & Data Platforms",
    vendor:      "IBM",
    sovereignty: 3,
    tier:        2,
    description: "Orchestration of tasks, assistants, and business workflows across enterprise systems.",
    overview:    "Highlights orchestration of tasks, assistants, and business workflows across enterprise systems and user journeys.",
    uses: [
      "Assistant-led workflows",
      "Task automation",
      "Cross-system orchestration",
    ],
  },
  {
    title:       "Cloud Pak for Data",
    subtitle:    "Unified data and AI platform",
    category:    "AI & Data Platforms",
    vendor:      "IBM",
    sovereignty: 4,
    tier:        1,
    description: "Integrated platform for data, analytics, and AI workloads in hybrid-cloud environments.",
    overview:    "IBM's integrated platform for data, analytics, and AI workloads, commonly used where hybrid-cloud operation and governance matter.",
    uses: [
      "Data and AI platform consolidation",
      "Governed analytics",
      "Multi-service platform environments",
    ],
  },
  {
    title:       "Cognos Analytics",
    subtitle:    "Business intelligence and reporting",
    category:    "AI & Data Platforms",
    vendor:      "IBM",
    sovereignty: 3,
    tier:        2,
    description: "Business intelligence and reporting for governed analytics on enterprise data.",
    overview:    "Focused on dashboards, reporting, and business visibility for governed analytics on top of enterprise data.",
    uses: [
      "Executive reporting",
      "Operational dashboards",
      "Governed business intelligence",
    ],
  },
  {
    title:       "Mistral AI",
    subtitle:    "AI ecosystem partner",
    category:    "AI & Data Platforms",
    vendor:      "Partner",
    sovereignty: 4,
    tier:        2,
    description: "AI ecosystem partner for model choice and partner-led AI motions.",
    overview:    "Ecosystem AI partner indicating model choice, openness, and partner-led AI in sovereign or regulated settings.",
    uses: [
      "Model ecosystem expansion",
      "European AI positioning",
      "Partner-led AI offerings",
    ],
  },

  // --- Business Applications & Automation ---
  {
    title:       "Cloud Pak for Business Automation",
    subtitle:    "Business automation platform",
    category:    "Business Applications & Automation",
    vendor:      "IBM",
    sovereignty: 3,
    tier:        2,
    description: "Business workflow, content, decisioning, and process automation platform.",
    overview:    "Brings workflow, content, decisioning, and process automation capabilities to enterprise transformation programs.",
    uses: [
      "Document and workflow automation",
      "Case management",
      "Decision-intensive processes",
    ],
  },

  // --- Integration & Data Movement ---
  {
    title:       "IBM Replication",
    subtitle:    "Data movement and synchronization",
    category:    "Integration & Data Movement",
    vendor:      "IBM",
    sovereignty: 4,
    tier:        3,
    description: "Data movement and synchronization across hybrid environments.",
    overview:    "Supports movement of data across systems for availability, modernization, migration, and analytics.",
    uses: [
      "Operational data movement",
      "Hybrid replication",
      "Migration and resilience",
    ],
  },

  // --- Data Management & Databases ---
  {
    title:       "IBM Db2",
    subtitle:    "Enterprise database platform",
    category:    "Data Management & Databases",
    vendor:      "IBM",
    sovereignty: 5,
    tier:        1,
    description: "Enterprise database platform for transactional and analytical workloads.",
    overview:    "Transactional and analytical database capabilities underpinning managed data services and regulated application estates.",
    uses: [
      "Core operational databases",
      "Managed database services",
      "Application data backbone",
    ],
  },
  {
    title:       "IBM Optim",
    subtitle:    "Test data, privacy, and archival",
    category:    "Data Management & Databases",
    vendor:      "IBM",
    sovereignty: 3,
    tier:        3,
    description: "Data lifecycle management, privacy, archival, and non-production data handling.",
    overview:    "Useful for lifecycle management, data privacy, archival, and non-production data handling in controlled environments.",
    uses: [
      "Test data management",
      "Data privacy workflows",
      "Archival and retention",
    ],
  },

  // --- Engineering Tools ---
  {
    title:       "ELM",
    subtitle:    "Engineering lifecycle management",
    category:    "Engineering Tools",
    vendor:      "IBM",
    sovereignty: 3,
    tier:        2,
    description: "Engineering lifecycle management for requirements, development, and testing.",
    overview:    "Supports requirements, development, testing, and traceability processes for engineering-intensive organizations.",
    uses: [
      "Requirements traceability",
      "Development governance",
      "Engineering workflow support",
    ],
  },

  // --- AI Dev Tools ---
  {
    title:       "Bob",
    subtitle:    "AI-powered software development tooling",
    category:    "AI Dev Tools",
    vendor:      "IBM",
    sovereignty: 2,
    tier:        3,
    description: "AI-powered software development tooling.",
    overview:    "AI-powered development tool for internal incubation and AI-assisted software engineering workflows.",
    uses: [
      "AI-assisted development",
      "Internal incubation programs",
      "Portfolio planning",
    ],
  },

  // --- Integration ---
  {
    title:       "webMethods Hybrid Integration",
    subtitle:    "Integration across environments",
    category:    "Integration",
    vendor:      "IBM",
    sovereignty: 3,
    tier:        2,
    description: "Application, API, and data integration across hybrid enterprise estates.",
    overview:    "Covers application, API, and integration patterns that connect data, apps, and workflows across hybrid estates.",
    uses: [
      "Application integration",
      "API-led architecture",
      "Cross-environment connectivity",
    ],
  },

  // --- IT Operations & Asset Management ---
  {
    title:       "HashiCorp products",
    subtitle:    "Infrastructure and secrets tooling",
    category:    "IT Operations & Asset Management",
    vendor:      "IBM",
    sovereignty: 4,
    tier:        2,
    description: "Infrastructure automation, secrets management, and platform operations tooling.",
    overview:    "Infrastructure automation, secrets, and platform operations tooling for controlled deployments.",
    uses: [
      "Secrets and vaulting",
      "Provisioning and automation",
      "Operational platform tooling",
    ],
  },
  {
    title:       "IBM Instana",
    subtitle:    "Observability and monitoring",
    category:    "IT Operations & Asset Management",
    vendor:      "IBM",
    sovereignty: 3,
    tier:        3,
    description: "Application and platform observability for performance and operational troubleshooting.",
    overview:    "Provides application and platform observability for performance visibility, issue detection, and operational troubleshooting.",
    uses: [
      "Application observability",
      "Performance monitoring",
      "Operational diagnostics",
    ],
  },
  {
    title:       "IBM Turbonomic",
    subtitle:    "Resource optimization",
    category:    "IT Operations & Asset Management",
    vendor:      "IBM",
    sovereignty: 3,
    tier:        3,
    description: "Application resource optimization and infrastructure efficiency.",
    overview:    "Focuses on application resource optimization and infrastructure efficiency to improve performance and control cost.",
    uses: [
      "Capacity optimization",
      "Performance and cost balance",
      "Resource decision support",
    ],
  },
  {
    title:       "Kubecost",
    subtitle:    "Kubernetes cost visibility",
    category:    "IT Operations & Asset Management",
    vendor:      "IBM",
    sovereignty: 2,
    tier:        4,
    description: "Cost transparency and usage visibility for Kubernetes-based environments.",
    overview:    "Provides cost transparency and usage visibility for Kubernetes-based environments and shared platform operations.",
    uses: [
      "Cluster cost allocation",
      "Chargeback and visibility",
      "Kubernetes financial operations",
    ],
  },

  // --- Consulting & Lifecycle Services ---
  {
    title:       "IBM Expert Lab Install and Migration Services",
    subtitle:    "Advisory and delivery services",
    category:    "Consulting & Lifecycle Services",
    vendor:      "Services",
    sovereignty: 3,
    tier:        3,
    description: "Implementation, onboarding, migration, and platform rollout services.",
    overview:    "Services-led offering for implementation, onboarding, migration, and platform rollout support.",
    uses: [
      "Deployment support",
      "Migration planning",
      "Accelerated onboarding",
    ],
  },

  // --- Asset Management ---
  {
    title:       "Maximo",
    subtitle:    "Asset and operations management",
    category:    "Asset Management",
    vendor:      "IBM",
    sovereignty: 3,
    tier:        2,
    description: "Asset and operations management for operational resilience.",
    overview:    "Supports operational resilience and asset-intensive environments needing visibility, maintenance, and process control.",
    uses: [
      "Asset-heavy industries",
      "Operational workflows",
      "Reliability and maintenance",
    ],
  },

];


// ----- Partner ecosystem -----
// Each entry creates one card in the Partner Ecosystem section.
//
// To add a partner — copy one line, fill in the fields, save.
// To remove a partner — delete its line.
//
// Fields:
//   name        — Partner name shown on the card
//   category    — Must match one of the ids in CATEGORIES above
//   description — Short text shown on the card
//   sovereignty — Sovereignty compliance rating 1–5
//   tier        — Application tier rating 1–5
const PARTNERS = [
  { name: "Dell",                          category: "Infrastructure",      sovereignty: 3, tier: 2, description: "Infrastructure ecosystem partner." },
  { name: "Intel",                         category: "Infrastructure",      sovereignty: 3, tier: 2, description: "Hardware and compute platform partner." },
  { name: "AMD",                           category: "Infrastructure",      sovereignty: 3, tier: 3, description: "Processor and infrastructure partner." },
  { name: "NVIDIA",                        category: "Infrastructure",      sovereignty: 4, tier: 2, description: "Infrastructure and AI acceleration partner." },
  { name: "NCI",                           category: "MSP",                sovereignty: 2, tier: 3, description: "Managed service provider." },
  { name: "Seclia",                        category: "MSP",                sovereignty: 2, tier: 3, description: "Managed service provider." },
  { name: "Computacenter",                 category: "MSP",                sovereignty: 2, tier: 3, description: "IT Service Provider" },
  { name: "Palo Alto",                     category: "Security",           sovereignty: 4, tier: 2, description: "Security-focused partner." },
  { name: "Deloitte",                      category: "Systems Integrator",  sovereignty: 2, tier: 3, description: "Systems integrator." },
  { name: "Red Hat VM Migration Services", category: "Migration",           sovereignty: 3, tier: 3, description: "Migration-oriented services." },
  { name: "Mistral AI",                    category: "AI & Data Platforms", sovereignty: 4, tier: 2, description: "AI partner for model choice." },
];


// ----- Rating descriptions -----
// These power the tooltip text in the modal badges.
// Edit the strings below to change what each level means.
const RATING_DESCRIPTIONS = {
  sovereignty: {
    1: "Minimal sovereignty alignment. Limited data residency controls; significant additional configuration required for regulated environments.",
    2: "Basic sovereignty features. Some data governance controls exist, but full compliance requires additional platform work.",
    3: "Moderate compliance. Meets key data residency and governance requirements for most regulated deployments.",
    4: "Strong sovereignty posture. Purpose-built controls for data governance, policy enforcement, and regulated environments.",
    5: "Full sovereignty compliance. Highest posture — designed specifically for public-sector, air-gapped, and classified deployments.",
  },
  tier: {
    1: "Core platform. Mission-critical capability at the centre of the Sovereign Core architecture.",
    2: "Supporting platform. Important capability that directly extends or complements the core.",
    3: "Enabling service. Operational or integration layer that enhances platform delivery.",
    4: "Supplementary tool. Specialist utility addressing specific use cases within the broader platform.",
    5: "Ecosystem component. Peripheral capability rounding out the partner and technology ecosystem.",
  },
};
