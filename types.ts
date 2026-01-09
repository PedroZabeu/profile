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

// Enhanced Motion Props with better typing
export interface EnhancedMotionProps {
  initial?: { opacity?: number; y?: number; filter?: string; scale?: number };
  animate?: { opacity?: number; y?: number; filter?: string; scale?: number };
  exit?: { opacity?: number; y?: number; filter?: string; scale?: number };
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
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

// ProjectEntryHook Types (reaproveitando HeroTexts structure)
export interface ProjectEntryTexts {
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  cta: Record<Language, string>;
}

export interface ProjectEntryHookProps {
  language: Language;
  className?: string;
  onAutoScrollComplete?: () => void;
  autoScrollDelay?: number; // ms, padrão 3000
  onCtaClick?: () => void; // Handler para click no CTA
  enableAutoScroll?: boolean; // Controle de auto-scroll
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

// Textos i18n para o ProjectEntryHook
export const PROJECT_ENTRY_TEXTS: ProjectEntryTexts = {
  title: {
    pt: 'De problemas reais para produtos reais',
    en: 'From real problems to real products'
  },
  subtitle: {
    pt: 'Onde faltam ferramentas eficientes, surgem produtos pensados para resolver dores reais',
    en: 'Where efficient tools are missing, products are created to solve real-world pains'
  },
  cta: {
    pt: 'Explore',
    en: 'Explore'
  }
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

// Sistema unificado de cores SSOT (Single Source of Truth)
export const COLOR_SYSTEM = {
  teal: { oklch: 'oklch(0.85 0.21 200)', rgb: [0.49, 0.99, 1.0] },
  blue: { oklch: 'oklch(0.62 0.18 240)', rgb: [0.2, 0.4, 0.9] },
  violet: { oklch: 'oklch(0.65 0.22 290)', rgb: [0.5, 0.3, 0.8] },
  emerald: { oklch: 'oklch(0.65 0.15 160)', rgb: [0.1, 0.7, 0.4] },
  rose: { oklch: 'oklch(0.68 0.24 350)', rgb: [0.9, 0.3, 0.4] },
  cyan: { oklch: 'oklch(0.65 0.18 190)', rgb: [0.1, 0.7, 0.8] },
  amber: { oklch: 'oklch(0.78 0.15 70)', rgb: [0.9, 0.7, 0.1] },
  pink: { oklch: 'oklch(0.68 0.22 340)', rgb: [0.9, 0.4, 0.6] },
} as const;

// Tipo para o sistema de cores
export type ColorSystemKey = keyof typeof COLOR_SYSTEM;

// Helper para obter cor RGB para WebGL threads
export function getThreadColor(color: ColorTheme): [number, number, number] {
  return [...COLOR_SYSTEM[color].rgb] as [number, number, number];
}

// Helper para obter cor OKLCH para CSS
export function getCssColor(color: ColorTheme): string {
  return COLOR_SYSTEM[color].oklch;
}

// Helper para detectar e converter cores automaticamente
export function colorToRgb(color: string | [number, number, number]): [number, number, number] {
  if (Array.isArray(color)) {
    return [...color] as [number, number, number];
  }
  
  // Se for string OKLH, converter para RGB (simplificado)
  if (color.startsWith('oklch')) {
    // Para o Betting Management, vamos usar teal como padrão
    return [...COLOR_SYSTEM.teal.rgb] as [number, number, number];
  }
  
  // Fallback para teal
  return [...COLOR_SYSTEM.teal.rgb] as [number, number, number];
}

// Tipos para projetos
export interface ProjectData {
  id: string;
  name: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  features: Array<{
    icon: string; // Nome do ícone do lucide-react
    text: Record<Language, string>;
  }>;
  url: string;
  color: ColorTheme;
}

// Project Section Types
export interface ProjectSectionProps {
  className?: string;
  motionProps?: MotionProps;
  includeEntryHook?: boolean; // Controle se inclui o ProjectEntryHook
}

export interface ProjectFeatureProps {
  children: React.ReactNode;
  className?: string;
  motionProps?: MotionProps;
}

// Client Only Types
export interface ClientOnlyProps {
  children: React.ReactNode;
}

// Project Feature Types
export interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

export interface ProjectFeatureDemoProps {
  children: React.ReactNode;
  className?: string;
}

export interface ProjectFeatureTextProps {
  appName?: string;
  title: string;
  description: string;
  features: FeatureItem[];
  language?: Language;
  className?: string;
}

// UI Component Props - Using type aliases instead of empty interfaces
export type CardProps = React.ComponentProps<"div">;
export type CardHeaderProps = React.ComponentProps<"div">;
export type CardTitleProps = React.ComponentProps<"div">;
export type CardDescriptionProps = React.ComponentProps<"div">;
export type CardActionProps = React.ComponentProps<"div">;
export type CardContentProps = React.ComponentProps<"div">;
export type CardFooterProps = React.ComponentProps<"div">;

export type InputProps = React.ComponentProps<"input">;

export interface ButtonProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
}

// Note: Animated Lucide icons keep their original types due to motion/react complexity
// DashboardIcon, UsersIcon, LayoutGridIcon, ChartBarIcon, ChartAreaIcon, ShieldCheckIcon

// Hero Component Types
export interface HeroStaticTitleProps {
  text: string;
  size?: SizeVariant;
  className?: string;
}

export interface HeroSubtitleProps {
  text: string;
  size?: SizeVariant;
  className?: string;
}

export interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  className?: string;
}

// Dados do Betting Management
export const BETTING_MGMT_DATA: ProjectData = {
  id: 'betting-mgmt',
  name: 'Betting Management',
  title: {
    pt: 'Sistema Completo para Gestão de Apostas',
    en: 'Complete System for Betting Management'
  },
  description: {
    pt: 'Centralize todas as operações em uma única plataforma, eliminando planilhas e oferecendo controle total para diferentes níveis de acesso.',
    en: 'Centralize all operations in a single platform, eliminating spreadsheets and offering complete control for different access levels.'
  },
  features: [
    {
      icon: 'LayoutGrid',
      text: {
        pt: 'Elimina a necessidade de múltiplas planilhas',
        en: 'Eliminates the need for multiple spreadsheets'
      }
    },
    {
      icon: 'ChartBar',
      text: {
        pt: 'Resultados detalhados e consolidados em tempo real',
        en: 'Detailed and consolidated results in real-time'
      }
    },
    {
      icon: 'Users',
      text: {
        pt: 'Acesso protegido para apostadores, investidores e operadores',
        en: 'Protected access for bettors, investors and operators'
      }
    },
    {
      icon: 'ShieldCheck',
      text: {
        pt: 'Gestão integrada de fornecedores',
        en: 'Integrated supplier management'
      }
    }
  ],
  url: 'https://bettingmgmt.vercel.app/',
  color: 'teal'
};

// Tipos específicos para o School of Bets (reaproveitando estrutura existente)
export interface SchoolModuleData {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly totalLessons: number;
  readonly completedLessons: number;
  readonly progress: number; // percentage 0-100
  readonly isLocked: boolean;
  readonly nextLesson?: string;
}

export interface SchoolProgressData {
  readonly currentModule: number;
  readonly totalModules: number;
  readonly overallProgress: number; // percentage 0-100
  readonly modulesCompleted: number;
  readonly estimatedHoursLeft: number;
}

export interface SchoolCourseProps {
  readonly progress: SchoolProgressData;
  readonly currentModule: SchoolModuleData;
  readonly onContinueLearning: () => void;
  readonly className?: string;
  readonly motionProps?: MotionProps;
}

// Dados do School of Bets (seguindo padrão BETTING_MGMT_DATA)
export const SCHOOL_OF_BETS_DATA: ProjectData = {
  id: 'school-of-bets',
  name: 'School of Bets',
  title: {
    pt: 'Plataforma Educacional para Formação de Apostadores (Beta)',
    en: 'Educational Platform for Bettor Development (Beta)'
  },
  description: {
    pt: 'Um ambiente de ensino voltado para quem quer entender apostas com base em fundamentos matemáticos e estatísticos — sem complexidade desnecessária. Os conteúdos são apresentados de forma prática, com exercícios guiados, simulações e atividades que mostram como aplicar conceitos como probabilidade, valor esperado e variabilidade nas decisões de aposta.',
    en: 'A learning environment designed for those who want to understand betting through mathematical and statistical fundamentals — without unnecessary complexity. The content is presented in a practical way, with guided exercises, simulations, and activities that demonstrate how to apply concepts such as probability, expected value, and variance to betting decisions.'
  },
  features: [
    {
      icon: 'TrendingUp',
      text: {
        pt: 'Conteúdo progressivo com foco em aplicação no mundo real',
        en: 'Progressive content focused on real-world application'
      }
    },
    {
      icon: 'Calculator',
      text: {
        pt: 'Explicação simplificada de conceitos quantitativos essenciais',
        en: 'Simplified explanations of essential quantitative concepts'
      }
    },
    {
      icon: 'PlayCircle',
      text: {
        pt: 'Simulações práticas que conectam teoria e tomada de decisão',
        en: 'Practical simulations that connect theory to decision-making'
      }
    },
    {
      icon: 'CheckSquare',
      text: {
        pt: 'Exercícios com feedback em tempo real para reforço do aprendizado',
        en: 'Exercises with real-time feedback to reinforce learning'
      }
    },
    {
      icon: 'RefreshCw',
      text: {
        pt: 'Plataforma aprimorada continuamente ao longo do beta',
        en: 'Platform continuously improved throughout the beta phase'
      }
    }
  ],
  url: 'https://school-of-bets.vercel.app/',
  color: 'teal'
};

// ============================================
// ABOUT SECTION TYPES (Feature 1.6)
// ============================================

// Enums para tags específicas - evita string genérica
export enum AboutFeatureTag {
  // Executive/Entrepreneur
  EXECUTIVE = 'executive',
  ENTREPRENEUR = 'entrepreneur',
  // Builder
  R = 'R',
  PYTHON = 'python',
  REACT = 'react',
  // AI-Powered
  CLAUDE = 'claude',
  CURSOR = 'cursor',
  AGENTS = 'agents',
  AICODING = 'aicoding',
}

// Enum para ícones específicos
export enum AboutFeatureIcon {
  TRENDING_UP = 'TrendingUp',
  CODE = 'Code',
  BRAIN = 'Brain',
}

export type AboutFeatureIconType = AboutFeatureIcon.TRENDING_UP | AboutFeatureIcon.CODE | AboutFeatureIcon.BRAIN;

// Tipo para texto multilíngue
export interface AboutFeatureText {
  readonly en: string;
  readonly pt: string;
}

// Tipo readonly para conjunto de tags
export type AboutFeatureTags = ReadonlyArray<AboutFeatureTag>;

// Tipo específico para dados de um card
export interface AboutCardData {
  readonly id: string;
  readonly icon: AboutFeatureIcon;
  readonly title: AboutFeatureText;
  readonly description: AboutFeatureText;
  readonly tags: AboutFeatureTags;
}

// Enum para categorias de cards
export enum AboutFeatureCategory {
  STRATEGIC_THINKER = 'strategic-thinker',
  BUILDER = 'builder',
  AI_POWERED = 'ai-powered',
}

// Props do componente AboutSection
export interface AboutSectionProps {
  readonly className?: string;
}

// Props do componente AboutCardDecorator
export interface AboutCardDecoratorProps {
  readonly icon: AboutFeatureIcon;
  readonly className?: string;
}

// Props do componente individual do card
export interface AboutCardProps {
  readonly data: AboutCardData;
  readonly className?: string;
}

// Dados tipados para Card 1 - Strategic Thinker
export const STRATEGIC_THINKER_DATA: AboutCardData = {
  id: AboutFeatureCategory.STRATEGIC_THINKER,
  icon: 'TrendingUp' as AboutFeatureIcon,
  title: {
    en: 'Strategic Thinker',
    pt: 'Pensamento Estratégico',
  },
  description: {
    en: 'Former CFO and finance executive with 10+ years framing complex decisions, risk, and incentives — now applying strategic mindset to data-driven products.',
    pt: 'Ex-CFO e executivo financeiro com 10+ anos estruturando decisões complexas, risco e incentivos — hoje aplicando mentalidade estratégica em produtos orientados por dados.',
  },
  tags: [AboutFeatureTag.EXECUTIVE, AboutFeatureTag.ENTREPRENEUR],
} as const;

// Dados tipados para Card 2 - Builder
export const BUILDER_DATA: AboutCardData = {
  id: AboutFeatureCategory.BUILDER,
  icon: 'Code' as AboutFeatureIcon,
  title: {
    en: 'Builder',
    pt: 'Construtor',
  },
  description: {
    en: 'Builds end-to-end systems using Python, R, and TypeScript — from ML models and APIs to production-ready apps with persistent data and permissions.',
    pt: 'Desenvolve sistemas ponta a ponta com Python, R e TypeScript — de modelos ML e APIs a aplicações em produção com dados persistentes e controle de permissões.',
  },
  tags: [AboutFeatureTag.R, AboutFeatureTag.PYTHON, AboutFeatureTag.REACT],
} as const;

// Dados tipados para Card 3 - AI-Powered
export const AI_POWERED_DATA: AboutCardData = {
  id: AboutFeatureCategory.AI_POWERED,
  icon: 'Brain' as AboutFeatureIcon,
  title: {
    en: 'AI-POWERED',
    pt: 'AI-POWERED',
  },
  description: {
    en: 'Embraces AI coding agents as core tools — using Cursor and Claude Code to deliver faster iterations, cleaner code, and more efficient development cycles.',
    pt: 'Adota agentes de codificação IA como ferramentas centrais — usando Cursor e Claude Code para entregar iterações mais rápidas, código mais limpo e ciclos de desenvolvimento mais eficientes.',
  },
  tags: [AboutFeatureTag.CLAUDE, AboutFeatureTag.CURSOR, AboutFeatureTag.AGENTS, AboutFeatureTag.AICODING],
} as const;

// Array tipado com todos os cards
export const ABOUT_FEATURES_DATA: readonly AboutCardData[] = [
  STRATEGIC_THINKER_DATA,
  BUILDER_DATA,
  AI_POWERED_DATA,
];

// Type guards para validação
export function isAboutFeatureTag(value: string): value is AboutFeatureTag {
  return Object.values(AboutFeatureTag).includes(value as AboutFeatureTag);
}

export function isAboutFeatureIcon(value: string): value is AboutFeatureIcon {
  return Object.values(AboutFeatureIcon).includes(value as AboutFeatureIcon);
}

export function isAboutFeatureCategory(value: string): value is AboutFeatureCategory {
  return Object.values(AboutFeatureCategory).includes(value as AboutFeatureCategory);
}

// Tipo para mapeamento de card por ID
export type AboutFeatureCardsMap = Record<AboutFeatureCategory, AboutCardData>;

// Tipo para renderização de ícones (componentes Lucide)
export type LucideIconComponent = React.ComponentType<{ className?: string }>;

// Mapeamento de enum para componente Lucide (declarado para ser preenchido no componente)
export const ABOUT_ICON_MAP: Record<string, LucideIconComponent> = {
  TrendingUp: {} as LucideIconComponent,
  Code: {} as LucideIconComponent,
  Brain: {} as LucideIconComponent,
};

// Textos i18n para o About Section
export const ABOUT_SECTION_TEXTS: Record<Language, { title: string; subtitle: string }> = {
  en: {
    title: 'About me',
    subtitle: 'You think like strategist, build like engineer, execute with AI.',
  },
  pt: {
    title: 'Sobre mim',
    subtitle: 'Você pensa como estrategista, constrói como engenheiro e executa com IA.',
  },
};