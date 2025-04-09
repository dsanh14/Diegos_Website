import type { Metadata } from 'next'
import ProjectSection from '../../components/ProjectSection'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My personal, hackathon, and research projects in software development.',
}

interface Project {
  title: string;
  description: string;
  techStack: string;
  link: string;
  image: string;
  award?: string;
}

const personalProjects: Project[] = [
  {
    title: 'ACE NY Energy Project Web App',
    description: 'Building a full-stack web app for a non-profit to visualize real-time data of all proposed and ongoing energy projects on Google Maps for the state of New York.',
    techStack: 'React.js, Google Maps API, TypeScript, Supabase, HTML, CSS, Next.js',
    link: 'https://github.com/yourusername/ace-ny-energy',
    image: '/projects/ace-ny.png',
  },
  {
    title: 'Basic Needs Center Food Pantry Web App',
    description: 'Lead a team to develop new features for and maintain web application for Berkeley\'s high-traffic food pantry serving thousands of students and staff weekly.',
    techStack: 'React.js, JavaScript, Firebase, HTML, TailwindCSS, Next.js',
    link: 'https://github.com/yourusername/food-pantry',
    image: '/projects/food-pantry.png',
  },
]

const hackathonProjects: Project[] = [
  {
    title: 'TreeHacks 2025: Hearti',
    description: 'Developed an AI-powered web application for visualizing and diagnosing congenital heart disease (CHD) using 3D representations of CMRI scans, multi-classification models, and custom heart segmentation. Optimized the model for accuracy, real-time query with VersaAI, and integrated a user-friendly AI voice chat for doctor-patient interactions.',
    techStack: 'React.js, PyTorch, FastAPI, Python, TypeScript, VegaAI, HTML, TailwindCSS, Next.js',
    link: 'https://github.com/yourusername/hearti',
    image: '/projects/hearti.png',
    award: '🏆 Won Most Impactful Grand Prize Award!',
  },
  {
    title: 'HackMIT 2024: Mindscape',
    description: 'Created a web app to render 3D interactive visualizations of brain MRI scans, enabling precise tumor localization. Developed a NERF-generated data pipeline to transform 2D slices into real-time, instant volumetric data.',
    techStack: 'React.js, PyTorch, Python, TypeScript, HTML, TailwindCSS, Next.js',
    link: 'https://github.com/yourusername/mindscape',
    image: '/projects/mindscape.png',
    award: '🏆 Won Best Healthcare Hack Award!',
  },
]

const researchProjects: Project[] = [
  {
    title: 'Self-Supervised Deep Learning-Based Cell Tracking in C. elegans',
    description: 'Developed a novel deep learning approach for automated cell tracking in C. elegans embryos, achieving state-of-the-art accuracy in cell detection and lineage tracing.',
    techStack: 'Python, PyTorch, TensorFlow, OpenCV',
    link: 'https://github.com/yourusername/cell-tracking',
    image: '/projects/cell-tracking.png',
    award: '🏆 Won Top 4 CS Research Presentation Award at the 2023 NDSTEM Conference',
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-16 py-12">
      <h1 className="text-4xl font-bold">Projects</h1>
      
      <ProjectSection 
        title="Personal Projects" 
        projects={personalProjects} 
      />
      
      <ProjectSection 
        title="Hackathon Projects" 
        projects={hackathonProjects} 
      />
      
      <ProjectSection 
        title="Research Projects" 
        projects={researchProjects} 
      />
    </div>
  )
} 