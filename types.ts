// Tipos globais da aplicação

export type Language = 'en' | 'pt';
export type SizeVariant = 'compact' | 'default' | 'large';
export type ColorTheme = 'teal' | 'blue' | 'violet' | 'emerald' | 'rose' | 'cyan' | 'amber' | 'pink';

// Tipos para motion e animações (compatível com Framer Motion)
export interface MotionProps {
  initial?: { opacity?: number; y?: number; filter?: string; scale?: number };
  animate?: { opacity?: number; y?: number; filter?: string; scale?: number };
  exit?: { opacity?: number; y?: number; filter?: string; scale?: number };
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
}


// Tipos do Logo
export interface LogoProps {
  /** Tamanho do logo */
  size?: 'sm' | 'md' | 'lg';
  /** Variante de exibição */
  variant?: 'default' | 'compact';
  /** Classes CSS adicionais */
  className?: string;
}

export type LogoSize = LogoProps['size'];
export type LogoVariant = LogoProps['variant'];

// Tipos do Hero
export interface HeroTexts {
  headline: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface ExpertiseAreas {
  pt: string[];
  en: string[];
}

export interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
  motionProps?: MotionProps;
}

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  children?: React.ReactNode;
}

export interface ThreadsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  /** Cor das threads: Hex string ou formato RGB [r, g, b] (0 a 1) */
  color?: [number, number, number] | string;
  /** Amplitude do movimento das threads */
  amplitude?: number;
  /** Distância entre as threads */
  distance?: number;
  /** Habilita interação com o mouse */
  enableMouseInteraction?: boolean;
}

export interface HeroThreadsProps {
  className?: string;
  color?: [number, number, number] | string;
}

// Configurações padrão para as Threads
export const THREADS_CONFIG = {
  lineCount: 40,
  lineWidth: 7.0,
  lineBlur: 10.0,
  amplitude: 2.5,
  distance: 0.8,
  opacity: 0.6,
} as const;

export interface HeroHeadlineProps {
  language: Language;
  showRotation?: boolean;
  size?: SizeVariant;
  className?: string;
  headlineClassName?: string;
}

export interface HeroCtaProps {
  language: Language;
  className?: string;
  variant?: 'default' | 'stacked';
}

// Textos i18n para o Hero
export const HERO_TEXTS: Record<Language, HeroTexts> = {
  pt: {
    headline: 'Criando vantagem competitiva para',
    subtitle: 'Projetando, construindo e entregando ferramentas que transformam complexidade em vantagem',
    ctaPrimary: 'Sobre mim',
    ctaSecondary: 'Meus projetos',
  },
  en: {
    headline: 'Creating an edge for',
    subtitle: 'Designing, building, and shipping tools that turn complexity into leverage',
    ctaPrimary: 'About me',
    ctaSecondary: 'My projects',
  },
};

// Configurações de tamanho do Hero
export const HERO_SIZE_CLASSES = {
  compact: {
    headline: 'text-3xl md:text-4xl lg:text-5xl',
    area: 'text-3xl md:text-4xl lg:text-5xl',
    subtitle: 'text-base md:text-lg',
  },
  default: {
    headline: 'text-4xl md:text-5xl lg:text-6xl',
    area: 'text-4xl md:text-5xl lg:text-6xl',
    subtitle: 'text-lg md:text-xl',
  },
  large: {
    headline: 'text-5xl md:text-6xl lg:text-7xl',
    area: 'text-5xl md:text-6xl lg:text-7xl',
    subtitle: 'text-xl md:text-2xl',
  },
} as const;

// Configurações de animação do Hero
export const HERO_ANIMATIONS = {
  blurFade: {
    initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -20, filter: 'blur(4px)' },
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  blurFadeDelay: {
    initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -20, filter: 'blur(4px)' },
    transition: { duration: 0.3, delay: 0.2, ease: 'easeOut' },
  },
  entrance: {
    initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.6, delay: 0.8 },
  },
  rotateWord: {
    initial: { opacity: 0, y: -30, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: 30, filter: 'blur(4px)' },
    transition: { duration: 0.4, ease: 'easeOut' },
  }
} as const;

// Áreas de expertise para rotação
export const EXPERTISE_AREAS: ExpertiseAreas = {
  pt: ['Equity Research', 'M&A', 'Varejo', 'Software', 'Machine Learning', 'Sports Betting'],
  en: ['Equity Research', 'M&A', 'Retail', 'Software', 'Machine Learning', 'Sports Betting'],
};

// Sistema unificado de cores para CSS e WebGL
export const COLOR_SYSTEM = {
  teal: { hex: '#7DFDFE', rgb: [0.49, 0.99, 1.0] },
  blue: { hex: '#3366E6', rgb: [0.2, 0.4, 0.9] },
  violet: { hex: '#804CCC', rgb: [0.5, 0.3, 0.8] },
  emerald: { hex: '#1AB399', rgb: [0.1, 0.7, 0.4] },
  rose: { hex: '#E64D80', rgb: [0.9, 0.3, 0.4] },
  cyan: { hex: '#1AB3CC', rgb: [0.1, 0.7, 0.8] },
  amber: { hex: '#E6B319', rgb: [0.9, 0.7, 0.1] },
  pink: { hex: '#E66699', rgb: [0.9, 0.4, 0.6] },
} as const;

// Tipo para o sistema de cores
export type ColorSystemKey = keyof typeof COLOR_SYSTEM;


// Cores normalizadas para threads WebGL (mantido para compatibilidade)
export const HERO_THREADS_COLORS: Record<string, [number, number, number]> = {
  teal: [...COLOR_SYSTEM.teal.rgb],
  blue: [...COLOR_SYSTEM.blue.rgb],
  violet: [...COLOR_SYSTEM.violet.rgb],
  emerald: [...COLOR_SYSTEM.emerald.rgb],
  rose: [...COLOR_SYSTEM.rose.rgb],
  cyan: [...COLOR_SYSTEM.cyan.rgb],
  amber: [...COLOR_SYSTEM.amber.rgb],
  pink: [...COLOR_SYSTEM.pink.rgb],
} as const;