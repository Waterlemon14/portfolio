export interface Project {
  title: string
  role?: string
  technologies: string[]
  description: string
  subdescriptions: string[]
  images: string[]
  link: string | null
  github?: string | null
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
}

export interface Award {
  title: string
  detail: string
  year: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'Go', 'JavaScript', 'TypeScript', 'C', 'PureScript', 'Visual Basic Script'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['FastAPI', 'LangChain', 'PyTorch', 'Svelte', 'Streamlit', 'Seaborn', 'Pandas', 'Scikit Learn', 'Plotly', 'SQLAlchemy', 'TailwindCSS'],
  },
  {
    category: 'Technologies',
    items: ['Git', 'AWS', 'Docker', 'PostgreSQL', 'MySQL', 'Vercel', 'Fly.io'],
  },
]

export const experiences: Experience[] = [
  {
    title: 'AI Intern',
    company: 'Stratpoint Global Outsourcing Inc.',
    period: 'Feb 2026 - May 2026',
    description:
      'Individual product research, implementation, and deployment of AI products using LLMs and Computer Vision.',
    highlights: [
      'Built identif.ai — a real-time face recognition system with anti-spoofing for access control, featuring occupancy tracking, event logging, dashboard, and an AI chat agent for querying history',
      'Developed the CV pipeline (PyTorch, ChromaDB), LLM chat agent (LangChain), frontend (Streamlit), and tracking database (SQLite)',
      'Dataset refinement, model improvement, and testing of AI products (LangChain, FastAPI, AWS) in collaboration with cross-functional teams'
    ],
    technologies: ['Python', 'FastAPI', 'LangChain', 'Streamlit', 'PyTorch', 'AWS'],
  },
  {
    title: 'Cybersecurity Intern',
    company: 'Asia United Bank',
    period: 'Jun 2025 - Jul 2025',
    description:
      'Conducted information security activities and automated security review processes.',
    highlights: [
      'Automated firewall review using a Python OCR program, reducing review time by 20 hours per month',
      'Conducted banking threat reports and audit log reviews with the Information Security Officer',
    ],
    technologies: ['Python'],
  },
  {
    title: 'Research Assistant',
    company: 'AeroComp Project',
    period: 'Aug 2024 - Jun 2025',
    description:
      'Built predictive ML models for materials science research including composite parameter tuning and compressive strength prediction.',
    highlights: [
      'Built predictive ML models (Scikit-Learn) for ballistic protection composite optimization and concrete compressive strength prediction',
      'Data processing using Python, SciPy, NumPy, and Seaborn',
      'Presented research at IEICES 2025, Kyushu University, Fukuoka, Japan',
    ],
    technologies: ['Python', 'Scikit Learn', 'Seaborn', 'Pandas'],
  },
]

export const projects: Project[] = [
  {
    title: 'Human-Machine Identity',
    role: 'Embedded, DevOps, & Go Server Handler',
    technologies: ['Go', 'Python', 'AWS', 'Git', 'Django', 'PostgreSQL', 'Supabase', 'Embedded C'],
    description:
      'Full-stack IoT security architecture integrating human identity (MOSIP) with device identity (PKI) for a thesis on secure machine-to-machine communication.',
    subdescriptions: [
      'Deployed across multi-region AWS EC2 instances with Django, Go, and PostgreSQL on Supabase',
      'Developed ESP32/ESP8266 firmware for on-device ECC key generation, certificate signing requests, and mTLS-secured telemetry',
      'Server-side anomaly detection and Certificate Authority functions',
    ],
    images: [],
    link: null,
    github: 'https://github.com/Waterlemon14/NDSL-HMI/tree/main/IoT',
  },
  {
    title: 'identif.ai',
    role: 'AI Engineer & Full-stack Developer',
    technologies: ['Python', 'PyTorch', 'LangChain', 'Streamlit', 'ChromaDB', 'SQLite', 'Git'],
    description:
      'Real-time face recognition system with anti-spoofing for access control, featuring occupancy tracking, event logging dashboard, and an AI chat agent for querying history.',
    subdescriptions: [
      'Developed the CV pipeline (PyTorch, ChromaDB) for face recognition with anti-spoofing',
      'Built an LLM chat agent (LangChain) for querying access history',
      'Built the frontend (Streamlit) and tracking database (SQLite)',
    ],
    images: [],
    link: null,
    github: 'https://github.com/Waterlemon14/identif.ai/',
  },
  {
    title: 'MedLink',
    role: 'Backend Engineer',
    technologies: ['TypeScript', 'Svelte', 'Git', 'PostgreSQL', 'PrismaORM', 'Supabase', 'Vercel'],
    description:
      'Healthcare platform that lets patients search for medical services and see real-time facility availability.',
    subdescriptions: [
      'Ranked top 10 among 30 start-up pitches at BIG3.STARTUP.SHOWDOWN, Maya HQ',
      'Implemented client-server communication using Svelte/SvelteKit, TypeScript, and PostgreSQL',
      'Team of 5 over 1 year using Agile Software Development',
    ],
    images: [],
    link: 'https://cs-192-med-link.vercel.app/',
    github: 'https://github.com/natecomsci/CS192MedLink',
  },
  {
    title: 'Sugarcare',
    role: 'AI Model Architect',
    technologies: ['Python', 'Git', 'Google Colab', 'Tensorflow', 'PyTorch', 'Keras', 'Pandas', 'Plotly'],
    description:
      'Deep learning-based CV system to classify sugarcane leaf disease/health using transfer learning.',
    subdescriptions: [
      'Implemented Tiny Swin Transformer via transfer learning achieving ~95% test accuracy and F1-score',
      'Explored ViT and ViT-EfficientNet ensemble architectures',
      'Collaborated in a team of 3 over 1 month',
    ],
    images: [],
    link: null,
    github: 'https://github.com/Waterlemon14/sugarcare',
  },
  {
    title: 'Shogimon',
    role: 'Backend Engineer & Tester',
    technologies: ['Go', 'PureScript', 'Python', 'Git'],
    description:
      'Multiplayer strategy board game using Shogi-like mechanics on an 8x8 board with chess-like movements and pokemon sprites.',
    subdescriptions: [
      'Implemented the PureScript client and behavioral testing for both PureScript and Python clients',
      'Extended with server-side state management in Go',
      'Collaborated in a team of 4 over 1.5 months',
    ],
    images: [],
    link: null,
    github: 'https://github.com/Waterlemon14/Shogimon',
  },
  {
    title: 'DynaMic',
    role: 'Hardware & Embedded Engineer',
    technologies: [
      'C',
      'Python',
      'FastAPI',
      'DigitalOcean',
      'LoRa Communication',
      "Sony's Spresense Microcontroller",
      "Sony's Neural Network Console",
    ],
    description:
      'Dynamite fishing monitoring system with ML-based classification, LoRa communication, live feed, and real-time coast guard notification.',
    subdescriptions: [
      'Implemented the hardware architecture and LoRa communication',
      'Deployed on Digital Ocean',
      'Collaborated in a team of 6 over 1.5 months',
    ],
    images: [],
    link: null,
    github: 'https://github.com/SkIym/DynaMic',
  },
  {
    title: "Feasibility Analysis on Mindanao's Independence",
    role: 'Data Analyst & Model Architect',
    technologies: ['Python', 'Git', 'Google Colab', 'Pandas', 'Scikit Learn', 'Seaborn'],
    description:
      'Economic feasibility analysis on Mindanao\'s independence through data exploration, analysis, and visualization of production, export, and import across the Philippines.',
    subdescriptions: [
      'Created predictive models for Input-Output Tables using Python, SciPy, NumPy, Seaborn, and Scikit-Learn',
      'Deployed findings on GitHub Pages',
      'Collaborated in a team of 3 over 2 months',
    ],
    images: [],
    link: 'https://skiym.github.io/ph-industry-interdependence/',
    github: 'https://github.com/SkIym/ph-industry-interdependence',
  },
  {
    title: 'muffiin',
    role: 'Full-stack Developer & AI Engineer',
    technologies: ['Python', 'TypeScript', 'FastAPI', 'Svelte', 'SQLAlchemy', 'PostgreSQL', 'TailwindCSS', 'Docker', 'Fly.io', 'Vercel'],
    description: 'Personal financial manager with budgeting, goals, and multi-account transaction tracking.',
    subdescriptions: [
      'SvelteKit 5 frontend — Google OAuth and HMAC-SHA256 session cookies',
      'FastAPI + SQLAlchemy 2.0 async backend on Neon PostgreSQL with Alembic migrations and Row Level Security',
      'soft deletes via archived_at; per-user data isolation enforced at the DB level',
    ],
    images: [],
    link: 'https://muffiin.vercel.app/',
    github: null,
  },
  {
    title: 'Sampaguita Dormitory Management System',
    role: 'Full-stack Developer',
    technologies: ['Python', 'TypeScript', 'FastAPI', 'Svelte', 'SQLAlchemy', 'PostgreSQL', 'TailwindCSS', 'Docker', 'Fly.io'],
    description: 'University dormitory management system with booking, payment, and file workflows across five configurable roles.',
    subdescriptions: [
      'SvelteKit + FastAPI + PostgreSQL deployed on Fly.io with CI/CD via GitHub Actions',
      'Runtime-configurable role permissions via role_permissions table — policy changes require no redeploy',
      'Booking overlap prevention via Postgres EXCLUDE USING gist',
    ],
    images: [],
    link: 'https://sampaguita-dorm-upd.fly.dev/',
    github: null,
  },
  {
    title: 'NCPAG Transparency Seal',
    role: 'Full-stack Developer',
    technologies: ['TypeScript', 'Svelte', 'Git', 'PostgreSQL', 'TailwindCSS', 'Vercel'],
    description: 'Internal finance portal and public Transparency Seal site for a student organization, with automated report generation and approval-gated publication.',
    subdescriptions: [
      'Finance Officer and Approver roles for event budgets, transactions, donations, and document management',
      'Public-facing report archive with approved financial records, event/month views, and donation flows',
      'Automated report drafting and pre-authorized publication rules; all public data gated by explicit approval',
    ],
    images: [],
    link: 'https://transparency-seal-ncpag.vercel.app/',
    github: null,
  },
  {
    title: 'Portfolio Website',
    role: 'Full-stack Developer',
    technologies: ['TypeScript', 'Svelte', 'Git', 'TailwindCSS'],
    description: 'This website — built with SvelteKit, TypeScript, and TailwindCSS.',
    subdescriptions: [],
    images: [],
    link: 'https://aeisenhowerii.vercel.app/',
    github: 'https://github.com/Waterlemon14/portfolio',
  },
]

export const papers: Project[] = [
  {
    title:
      'Integrating Digital National IDs with Public Key Infrastructure for Securing IoT Systems',
    technologies: ['Go', 'Python', 'Django', 'PostgreSQL', 'AWS', 'ESP32'],
    description:
      'Proposes a PKI architecture that integrates a digital national ID system (MOSIP) with IoT device certificates to tie human and machine identity together. Human identity is verified through MOSIP before device registration; ownership challenges verify physical possession; mTLS secures all device-server communication. Evaluated on ESP8266, Raspberry Pi Pico W, and ESP32 microcontrollers with 10,000 tests per key performance metric, showing increased security with minimal impact on device performance.',
    subdescriptions: [
      'Networks and Distributed Systems Laboratory / Philippine Identity Innovation and Digital Transformation Lab, UP Diliman',
      'Co-authored with Christopher Luis M. Senatin and Dr. Wilson M. Tan',
    ],
    images: [],
    link: '',
  },
  {
    title:
      'Optimizing Bulletproof Natural Fiber-Reinforced Polymer Composite Materials Using a Hybrid Computational Simulation and Machine Learning Approach',
    technologies: ['Python', 'Google Colab', 'Pandas', 'Scikit Learn', 'Plotly', 'Seaborn'],
    description:
      'This study investigates the optimization of natural fiber-reinforced polymer composite (NFRPCs) creation for bulletproof applications by integrating computational simulation and machine learning (ML). We incorporate abaca (Musa textilis) or pineapple leaf fibers (Pi\u00f1atex), along with aramid and carbon fibers, into layered composite plates. Ballistic performance was modeled and predicted using simulated data from ANSYS Explicit Dynamics and validated through live bullet testing. ML models, such as Support Vector Machine (SVM) and Random Forest (RF) with optimized hyperparameters, achieved up to 80% prediction accuracy and an F1-score of 82% for abaca-reinforced composites.',
    subdescriptions: [
      'Presented at the 11th International Exchange and Innovation Conference on Engineering & Sciences (IEICES 2025) at Kyushu University, Fukuoka, Japan',
      'Co-authored with Dr. Paul Rossener R. Regonia and Dr. Eduardo R. Magdaluyo Jr',
    ],
    images: [],
    link: '',
  },
]

export const awards: Award[] = [
  {
    title: 'Top 10 among 30 start-up pitches',
    detail: 'BIG3.STARTUP.SHOWDOWN',
    year: '2025',
  },
  {
    title: 'Philippine Scholarships Sponsors Association Scholarship Awardee',
    detail: '',
    year: '2022 - Present',
  },
  {
    title: 'University Scholar',
    detail: 'University of the Philippines Diliman',
    year: '2022 - Present',
  },
  {
    title: 'TOEFL iBT - 102/120',
    detail: 'English Proficiency Test',
    year: '2021',
  },
]
