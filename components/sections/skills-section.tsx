'use client';

import { SkillCluster } from '@/components/blocks/skills/skill-cluster';
import { skillsData } from '@/data/skills-data';

export function SkillsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Skills & Expertise
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hover over each skill to see detailed information about technologies and experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {skillsData.map((cluster, idx) => (
          <SkillCluster key={cluster.title} cluster={cluster} delay={idx * 200} />
        ))}
      </div>
    </section>
  );
}
