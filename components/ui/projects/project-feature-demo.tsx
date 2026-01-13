import { ProjectFeatureDemoProps } from '@/types';

export function ProjectFeatureDemo({
  children,
  className = ''
}: ProjectFeatureDemoProps) {
  return (
    <div className={`lg:col-span-3 h-full ${className}`}>
      <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-lg">
        <div className="h-full overflow-hidden rounded-2xl bg-background">
          {children}
        </div>
      </div>
    </div>
  );
}