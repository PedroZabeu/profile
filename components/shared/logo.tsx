import { LogoProps } from '@/types';

export default function Logo({ 
  size = 'md', 
  variant = 'default', 
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl',
    lg: 'text-xl md:text-2xl'
  };

  const variantClasses = {
    default: '',
    compact: 'tracking-tighter'
  };

  const classes = [
    'font-semibold',
    sizeClasses[size],
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <span 
        className="text-cv-text-primary"
        style={{ color: 'var(--cv-text-primary)' }}
      >
        PEDRO
      </span>
      <span 
        className="text-cv-accent"
        style={{ color: 'var(--cv-accent)' }}
      >
        .ZABEU
      </span>
    </div>
  );
}