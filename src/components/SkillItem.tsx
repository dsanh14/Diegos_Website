'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';

interface SkillItemProps {
  name: string;
  icon: IconType;
  level?: string;
}

export default function SkillItem({ name, icon: Icon, level }: SkillItemProps) {
  return (
    <div className="group relative flex items-center gap-4 rounded-lg border border-stone-200 bg-white/50 p-4 transition-all duration-300 hover:border-stone-300 hover:bg-white hover:shadow-lg dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-stone-700 dark:hover:bg-stone-900">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-stone-100 text-stone-900 transition-colors group-hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-100 dark:group-hover:bg-stone-700">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium text-stone-900 dark:text-stone-100">{name}</h3>
        {level && (
          <p className="text-sm text-stone-600 dark:text-stone-400">{level}</p>
        )}
      </div>
    </div>
  );
} 