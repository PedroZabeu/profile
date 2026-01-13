'use client';

import { useState, useEffect } from 'react';
import { SkillBar } from '@/components/ui/skills/skill-bar';
import { SkillTooltip } from '@/components/ui/skills/skill-tooltip';
import { Skill } from '@/types/skills';
import { cn } from '@/lib/utils';

interface SkillItemProps {
  skill: Skill;
  delay?: number;
}

export function SkillItem({ skill, delay = 0 }: SkillItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileTooltipOpen, setIsMobileTooltipOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (isMobile) {
      setIsMobileTooltipOpen(true);
    }
  };

  return (
    <div
      className={cn(
        'relative group cursor-pointer',
        isMounted && 'animate-in fade-in slide-in-from-left-2',
        isMobile ? 'select-none' : ''
      )}
      style={{
        animationDelay: `${delay}ms`
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (isMobile) {
            setIsMobileTooltipOpen(true);
          }
        }
      }}
      aria-label={`${skill.name}, ${skill.score} out of 10`}
    >
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-base md:text-lg font-semibold text-neutral-100 group-hover:text-white transition-colors">
          {skill.name}
        </h3>
        <div className="w-2 h-2 rounded-full bg-neutral-600 group-hover:bg-teal-500 transition-colors" />
      </div>
      <SkillBar score={skill.score} />
      <SkillTooltip
        skill={skill}
        isOpen={isHovered || isMobileTooltipOpen}
        onClose={() => setIsMobileTooltipOpen(false)}
        isMobile={isMobile}
      />
    </div>
  );
}
