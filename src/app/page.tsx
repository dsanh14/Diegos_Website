import { Metadata } from 'next';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Diego Sanchez - Portfolio',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-16">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
} 