'use client';

import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Software Engineer',
      'Full Stack Developer',
      'Problem Solver',
      'Tech Enthusiast',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Diego Sanchez"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm Diego Sanchez
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-400 mb-6">
            I'm a{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {text}
            </span>
            <Cursor cursorColor="#3B82F6" />
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            I build exceptional digital experiences that make a difference.
            Let's work together to bring your ideas to life.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 text-lg font-medium text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 