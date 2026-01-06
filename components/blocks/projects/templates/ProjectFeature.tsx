import { ProjectFeatureProps, MotionProps } from '@/types';

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

  const motionConfig = { ...defaultMotion, ...motionProps };

  return (
    <div
      {...motionConfig} 
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