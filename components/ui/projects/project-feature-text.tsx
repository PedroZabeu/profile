import { ReactNode } from 'react';
import { Language } from '@/types';

interface FeatureItem {
  icon: ReactNode;
  text: string;
}

interface ProjectFeatureTextProps {
  appName?: string;
  title: string;
  description: string;
  features: FeatureItem[];
  language?: Language;
  className?: string;
}

export function ProjectFeatureText({
  appName,
  title,
  description,
  features,
  language,
  className = ''
}: ProjectFeatureTextProps) {
  return (
    <div className={`lg:col-span-2 space-y-6 ${className}`}>
      {appName && (
        <div className="text-sm font-medium text-cv-accent">
          {appName}
        </div>
      )}
      
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold text-cv-text-primary lg:text-5xl">
          {title}
        </h2>
        
        <p className="mt-6 text-foreground text-lg leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-8 space-y-1">
        <ul className="divide-y divide-border border-border">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-center gap-3 py-3"
            >
              <span className="size-5 flex-shrink-0 text-cv-accent">
                {feature.icon}
              </span>
              <span className="text-foreground">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}