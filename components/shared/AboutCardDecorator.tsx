import { TrendingUp, Code, Brain } from 'lucide-react';
import type { AboutFeatureIcon } from '@/types';

export function AboutCardDecorator({ icon, className }: { icon: AboutFeatureIcon; className?: string }) {
  let IconComponent;
  switch (icon) {
    case 'TrendingUp':
      IconComponent = TrendingUp;
      break;
    case 'Code':
      IconComponent = Code;
      break;
    case 'Brain':
      IconComponent = Brain;
      break;
    default:
      IconComponent = TrendingUp;
  }

  return (
    <div
      className={`mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,white_25%,transparent)] group-hover:[--color-border:color-mix(in_oklab,white_35%,transparent)] ${className || ''}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
      />

      <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
        <IconComponent
          className="size-6 text-foreground"
          aria-hidden
        />
      </div>
    </div>
  );
}
