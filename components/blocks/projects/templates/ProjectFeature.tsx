import { ReactNode } from 'react';
import { MotionProps } from '@/types';

interface ProjectFeatureProps {
  children: ReactNode;
  className?: string;
  motionProps?: MotionProps;
}

export function ProjectFeature({ 
  children, 
  className = '',
  motionProps 
}: ProjectFeatureProps) {
  const defaultMotion: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const motion = { ...defaultMotion, ...motionProps };

  return (
    <div 
      className={`
        grid gap-12 lg:gap-24 xl:gap-32
        lg:grid-cols-5 lg:items-center
        ${className}
      `}
    >
      {children}
    </div>
  );
}