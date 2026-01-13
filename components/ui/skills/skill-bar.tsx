'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  score: number;
  className?: string;
}

export function SkillBar({ score, className }: SkillBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(score * 10);
    }, 300);
  }, [score]);

  const getColorClass = (score: number): string => {
    if (score >= 9) return 'bg-gradient-to-r from-green-500 to-emerald-400';
    if (score >= 8) return 'bg-gradient-to-r from-teal-500 to-cyan-400';
    return 'bg-gradient-to-r from-sky-500 to-blue-400';
  };

  return (
    <div className={cn('h-3 md:h-4 w-full bg-neutral-800 rounded-full overflow-hidden', className)}>
      <div
        className={cn(
          'h-full rounded-full transition-all duration-1000 ease-out',
          getColorClass(score)
        )}
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 20px currentColor'
        }}
      />
    </div>
  );
}
