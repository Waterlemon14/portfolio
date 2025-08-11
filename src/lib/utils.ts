import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export const TechMappings: Record<string, string> = { 
	"Git"																		: "skill-icons:github-dark",
  
  "Svelte"																: "skill-icons:svelte",
  "React"                                 : "skill-icons:react-dark",
  "FastAPI"																: "skill-icons:fastapi",

  "TailwindCSS"                           : "skill-icons:tailwindcss-dark",

  "JavaScript"														: "skill-icons:javascript",
  "TypeScript"														: "skill-icons:typescript",
  "Go"																		: "skill-icons:golang",
  "PureScript"														: "skill-icons:purescript",
  "Python"																: "skill-icons:python-dark",
  "C"																			: "skill-icons:c",
  "Visual Basic Script"										: "devicon:visualbasic",

  "PostgreSQL"														: "skill-icons:postgresql-dark",
  "MySQL"                                 : "devicon:mysql",
  "PrismaORM"															: "skill-icons:prisma",

  "Supabase"															: "skill-icons:supabase-dark",
  "DigitalOcean"													: "devicon:digitalocean",
  "Vercel"																: "skill-icons:vercel-dark",
  
  "Pandas"																: "devicon:pandas",
	"Google Colab"													: "devicon:googlecolab",
	"Tensorflow"														: "skill-icons:tensorflow-dark",
	"PyTorch"																: "skill-icons:pytorch-dark",
	"Scikit Learn"													: "skill-icons:scikitlearn-dark", 
	"Keras"																	: "devicon:keras",
	"Plotly"																: "devicon:plotly",
  "Seaborn"																: "logos:seaborn-icon",
  
  "LoRa Communication"										: "iconoir:antenna",
  "Sony's Neural Network Console"					: "eos-icons:neural-network",
  "Sony's Spresense Microcontroller"			: "simple-icons:sony",
}
