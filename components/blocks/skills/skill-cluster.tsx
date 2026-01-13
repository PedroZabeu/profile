'use client';

import { SkillItem } from './skill-item';
import { SkillCluster as SkillClusterType } from '@/types/skills';
import { cn } from '@/lib/utils';

interface SkillClusterProps {
  cluster: SkillClusterType;
  delay?: number;
}

export function SkillCluster({ cluster, delay = 0 }: SkillClusterProps) {
  return (
    <div
      className={cn(
        'bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 md:p-8 hover:border-teal-500/50 hover:scale-[1.02] transition-all duration-300',
        'animate-in fade-in slide-in-from-bottom-4'
      )}
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-4 border-b border-neutral-800">
        {cluster.title}
      </h2>
      <div className="space-y-3 md:space-y-4">
        {cluster.skills.map((skill, idx) => (
          <SkillItem key={skill.name} skill={skill} delay={idx * 100} />
        ))}
      </div>
    </div>
  );
}
