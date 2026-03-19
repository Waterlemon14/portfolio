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

export const experiences: Experience[] = [
  {
    title: 'AI Intern',
    company: 'Stratpoint Global Outsourcing Inc.',
    period: 'Feb 2026 - May 2026',
    description:
      'Individual product research, implementation, and deployment of AI products using LLMs and Computer Vision.',
    highlights: [
      'Built Identif.ai — a real-time face recognition system with anti-spoofing for access control, featuring occupancy tracking, event logging, dashboard, and an AI chat agent for querying history',
      'Developed the CV pipeline (PyTorch, ChromaDB), LLM chat agent (LangChain), frontend (Streamlit), and tracking database (SQLite)',
      'Built Chatty — a chatbot that matches user queries to FAQs and returns corresponding answers or escalates to a live agent',
      'Dataset refinement, improvement benchmarking (LangChain), and testing using agile software development',
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
    technologies: ['Go', 'Python', 'Django', 'PostgreSQL', 'Supabase', 'AWS', 'ESP32'],
    description:
      'Full-stack IoT security architecture integrating human identity (MOSIP) with device identity (PKI) for a thesis on secure machine-to-machine communication.',
    subdescriptions: [
      'Deployed across multi-region AWS EC2 instances with Django, Go, and PostgreSQL on Supabase',
      'Developed ESP32/ESP8266 firmware for on-device ECC key generation, certificate signing requests, and mTLS-secured telemetry',
      'Server-side anomaly detection and Certificate Authority functions',
    ],
    images: [],
    link: null,
  },
  {
    title: 'Identif.ai',
    role: 'AI Engineer & Full-stack Developer',
    technologies: ['Python', 'PyTorch', 'LangChain', 'Streamlit', 'ChromaDB', 'SQLite'],
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
    technologies: ['Git', 'Svelte', 'TypeScript', 'PostgreSQL', 'PrismaORM', 'Supabase', 'Vercel'],
    description:
      'Healthcare platform that lets patients search for medical services and see real-time facility availability.',
    subdescriptions: [
      'Ranked top 10 among 30 start-up pitches at BIG3.STARTUP.SHOWDOWN, Maya HQ',
      'Implemented client-server communication using Svelte/SvelteKit, TypeScript, and PostgreSQL',
      'Team of 5 over 1 year using Agile Software Development',
    ],
    images: [],
    link: 'https://cs-192-med-link.vercel.app/',
  },
  {
    title: 'Sugarcare',
    role: 'AI Model Architect',
    technologies: ['Python', 'Pandas', 'Google Colab', 'Tensorflow', 'PyTorch', 'Keras', 'Plotly'],
    description:
      'Deep learning-based CV system to classify sugarcane leaf disease/health using transfer learning.',
    subdescriptions: [
      'Implemented Tiny Swin Transformer via transfer learning achieving ~95% test accuracy and F1-score',
      'Explored ViT and ViT-EfficientNet ensemble architectures',
      'Collaborated in a team of 3 over 1 month',
    ],
    images: [],
    link: null,
  },
  {
    title: 'Shogimon',
    role: 'Backend Engineer & Tester',
    technologies: ['Git', 'Go', 'PureScript', 'Python'],
    description:
      'Multiplayer strategy board game using Shogi-like mechanics on an 8x8 board with chess-like movements and pokemon sprites.',
    subdescriptions: [
      'Implemented the PureScript client and behavioral testing for both PureScript and Python clients',
      'Extended with server-side state management in Go',
      'Collaborated in a team of 4 over 1.5 months',
    ],
    images: [],
    link: null,
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
  },
  {
    title: "Feasibility Analysis on Mindanao's Independence",
    role: 'Data Analyst & Model Architect',
    technologies: ['Python', 'Google Colab', 'Pandas', 'Scikit Learn', 'Seaborn'],
    description:
      'Economic feasibility analysis on Mindanao\'s independence through data exploration, analysis, and visualization of production, export, and import across the Philippines.',
    subdescriptions: [
      'Created predictive models for Input-Output Tables using Python, SciPy, NumPy, Seaborn, and Scikit-Learn',
      'Deployed findings on GitHub Pages',
      'Collaborated in a team of 3 over 2 months',
    ],
    images: [],
    link: 'https://skiym.github.io/ph-industry-interdependence/',
  },
  {
    title: 'Portfolio Website',
    role: 'Full-stack Developer',
    technologies: ['Git', 'Svelte', 'TypeScript', 'TailwindCSS'],
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
      'Optimizing Bulletproof Natural Fiber-Reinforced Polymer Composite Materials Using a Hybrid Computational Simulation and Machine Learning Approach',
    technologies: ['Python', 'Google Colab', 'Pandas', 'Scikit Learn', 'Plotly', 'Seaborn'],
    description:
      'This study investigates the optimization of natural fiber-reinforced polymer composite (NFRPCs) creation for bulletproof applications by integrating computational simulation and machine learning (ML). We incorporate abaca (Musa textilis) or pineapple leaf fibers (Pi\u00f1atex), along with aramid and carbon fibers, into layered composite plates. Ballistic performance was modeled and predicted using simulated data from ANSYS Explicit Dynamics and validated through live bullet testing. ML models, such as Support Vector Machine (SVM) and Random Forest (RF) with optimized hyperparameters, achieved up to 80% prediction accuracy and an F1-score of 82% for abaca-reinforced composites.',
    subdescriptions: [
      'Presented at the 11th International Exchange and Innovation Conference on Engineering & Sciences (IEICES 2025) at Kyushu University, Fukuoka, Japan',
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
