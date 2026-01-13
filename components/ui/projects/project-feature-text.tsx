import { ProjectFeatureTextProps } from '@/types';

export function ProjectFeatureText({
  title,
  description,
  features,
  // language - TODO: Implement language support
  className = ''
}: ProjectFeatureTextProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold text-cv-text-primary lg:text-5xl leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-foreground text-lg leading-relaxed">
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