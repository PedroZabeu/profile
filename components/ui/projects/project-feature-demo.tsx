import { ReactNode } from 'react';

interface ProjectFeatureDemoProps {
  children: ReactNode;
  className?: string;
}

export function ProjectFeatureDemo({ 
  children, 
  className = '' 
}: ProjectFeatureDemoProps) {
  return (
    <div className={`lg:col-span-3 ${className}`}>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-lg">
        <div className="aspect-[76/59] overflow-hidden rounded-2xl bg-background">
          {children}
        </div>
      </div>
    </div>
  );
}