'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skill } from '@/types/skills';

interface SkillTooltipProps {
  skill: Skill;
  isOpen: boolean;
  onClose: () => void;
  isMobile?: boolean;
}

export function SkillTooltip({ skill, isOpen, onClose, isMobile = false }: SkillTooltipProps) {
  if (!isOpen) return null;

  const getColorClass = (score: number): string => {
    if (score >= 9) return 'text-green-400';
    if (score >= 8) return 'text-teal-400';
    return 'text-sky-400';
  };

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="bg-neutral-800 border border-teal-500/30 rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">{skill.name}</h3>
              <p className={cn('text-5xl font-bold mt-2', getColorClass(skill.score))}>
                {skill.score}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-700 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-neutral-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-neutral-300 mb-2">Technologies:</h4>
              <ul className="space-y-1">
                {skill.technologies.map((tech, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2">•</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-300 mb-2">Experience:</h4>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute z-50 top-0 right-0 w-80 bg-neutral-800 border border-teal-500/30 rounded-lg p-4 shadow-2xl animate-in fade-in zoom-in-95">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-white">{skill.name}</h3>
        <span className={cn('text-4xl font-bold', getColorClass(skill.score))}>
          {skill.score}
        </span>
      </div>
      <div className="space-y-3">
        <div>
          <h4 className="text-xs font-semibold text-neutral-300 mb-1 uppercase tracking-wider">Technologies:</h4>
          <ul className="space-y-1">
            {skill.technologies.map((tech, idx) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-start">
                <span className="mr-2">•</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-neutral-300 mb-1 uppercase tracking-wider">Experience:</h4>
          <p className="text-xs text-muted-foreground">{skill.description}</p>
        </div>
      </div>
    </div>
  );
}
