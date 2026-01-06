import { LogoProps } from '@/types';

export default function Logo({ 
  size = 'md', 
  variant = 'default', 
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'text-[var(--cv-font-size-base)] md:text-[var(--cv-font-size-lg)]',
    md: 'text-[var(--cv-font-size-lg)] md:text-[var(--cv-font-size-xl)]',
    lg: 'text-[var(--cv-font-size-xl)] md:text-[var(--cv-font-size-2xl)]'
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
      <span className="text-cv-text-primary">
        PEDRO
      </span>
      <span className="text-cv-accent">
        .ZABEU
      </span>
    </div>
  );
}