// Tipos globais da aplicação

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