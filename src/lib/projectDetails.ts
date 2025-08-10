interface Project {
  title: string,
  technologies: string[],
  description: string,
  subdescriptions: string[],
  images: string[],
  link: string | null,
}

const projects: Project[] = [
  {
    title: 'MedLink',
    technologies: [
      "Git", 
      "Svelte", 
      "SvelteKit", 
      "Typescript", 
      "PostgreSQL", 
      "PrismaORM", 
      "Supabase", 
      "Vercel"
    ],
    description: "MedLink lets patients quickly search for the medical service they need and see which nearby facilities offer it, complete with real-time availability. (Disclaimer: Site operates on test data for now)",
    subdescriptions: [
      "One of the top 10, among 30 start-up pitches during the BIG3.STARTUP.SHOWDOWN at Maya HQ, Mandaluyong",
      "Implemented Client-Server communication",
      "Team of 5 over 1 year using Agile Software Development and deployed using Vercel",
    ],
    images: [

    ],
    link: "https://cs-192-med-link.vercel.app/",
  },
  {
    title: 'Shogimon',
    technologies: [
      "Git", 
      "Go", 
      "PureScript", 
      "Python"
    ],
    description: "Shogimon is a board game with an 8x8 board, chess-like piece movements, with shogi like rules, and pokemon sprites.", //" Full game rules in the game page",
    subdescriptions: [
      "Implemented the PureScript Client and did behavioral testing for both the PureScript and Python clients",
      "Extended the game to have server-side state management using Go",
      "Collaborated in a team of 4 over 1.5 months",
    ],
    images: [

    ],
    link: null,
  },
  {
    title: 'Sugarcare',
    technologies: [
      "Python", 
      "Pandas", 
      "Google Colab", 
      "Tensorflow", 
      "PyTorch", 
      "Keras",
      "Plotly"
    ],
    description: "Sugarcare was our output for our Artificial Intelligence Capstone project where we were tasked to create ML models to identify Sugarcane Leaf Diseases with Computer Vision using only the provided dataset.",
    subdescriptions: [
      "Implemented the *Deep-learning based Computer Vision model via transfer learning with Tiny Swin Transformer* with an average *test accuracy and f1-score* of around *95%* to classify the disease or health of sugarcane leaves",
      "Explored other architectures such as using ViT, and an ensemble architecture which combined ViT and EfficientNet",
      "Collaborated in a team of 3 over 1 month",
    ],
    images: [

    ],
    link: null,
  },
  {
    title: 'DynaMic',
    technologies: [
      "Git", 
      "C", 
      "Python", 
      "FastAPI", 
      "DigitalOcean",
      "LoRa Communication",
      "Sony's Neural Network Console",
      "Sony's Spresense Microcontroller"
    ],
    description: "DynaMic is a dynamite explosion detection system designed to address blast fishing by providing automated real-time detection and alerts using long range communication and machine learning.",
    subdescriptions: [
      "Collaborated in a team of 6 over 1.5 months and deployed using DigitalOcean",
    ],
    images: [

    ],
    link: null,
  },
  {
    title: "IO-ko na: Input-Output tables to determine the feasibility of Mindanao's independence",
    technologies: [
      "Python", 
      "Google Colab", 
      "Pandas", 
      "Scikit Learn", 
      "Seaborn", 
    ],
    description: "Project to answer the interest in the economic structure of a separate Mindanao in terms of its production and use of resources in the form of Input-Output Tables.",
    subdescriptions: [
      "Data exploration, analysis, and visualization on economic production export, and import for the major island groups in the Philippines to gauge the potential of Mindanao as an independent state using  Python, SciPy, Numpy, and Seaborn, and deployed using Vercel",
      "Created a predictive model using Scikit Learn to predict the future Input-Output Tables given the industry inputs",
      "Collaborated in a team of 3 over 2 months and deployed the findings on GitHub Pages",
    ],
    images: [

    ],
    link: "https://skiym.github.io/ph-industry-interdependence/",
  },
  {
    title: 'Portfolio Website',
    technologies: [
      "Git", 
      "Svelte", 
      "SvelteKit",
      "Typescript"
    ],
    description: "This website",
    subdescriptions: [
      "string"
    ],
    images: [

    ],
    link: "https://aeisenhowerii.vercel.app/",
  },
]


const papers: Project[] = [
  {
    title: 'Optimizing Bulletproof Natural Fiber-Reinforced Polymer Composite Materials Using a Hybrid Computational Simulation and Machine Learning Approach',
    technologies: [
      "Python", 
      "Google Colab", 
      "Pandas", 
      "Scikit Learn", 
      "Plotly",
      "Seaborn", 
    ],
    description: "This study investigates the optimization of natural fiber-reinforced polymer composite (NFRPCs) creation for bulletproof applications by integrating computational simulation and machine learning (ML). We incorporate abaca (Musa textilis) or pineapple leaf fibers (Piñatex), along with aramid and carbon fibers, into layered composite plates. Ballistic performance was modeled and predicted using simulated data from ANSYS Explicit Dynamics and validated through live bullet testing. ML models, such as Support Vector Machine (SVM) and Random Forest (RF) with optimized hyperparameters, achieved up to 80% prediction accuracy and an F1-score of 82% for abaca-reinforced composites, closely aligning with experimental results. However, lower prediction accuracy was observed for Piñatex-based composites, due to fiber variability and other factors identified in the study. This hybrid methodology highlights the potential of combining simulation and ML to reduce reliance on extensive live bullet testing, providing a data-driven pathway for the efficient development of high-performance bulletproof composite materials.",
    subdescriptions: [
      "Presenting at the 11th International Exchange and Innovation Conference on Engineering & Sciences (IEICES 2025) on October 30-31, 2025, at Kyushu University, Fukuoka Japan"
    ],
      
    images: [
      // microscope.svg
    ],
    link: ""
  },
]

export {
  projects,
  papers
}
