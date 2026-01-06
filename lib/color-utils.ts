// Helper functions para sistema unificado de cores

/**
 * Converte cor HEX para RGB normalizado (0-1) para WebGL
 * @param hex Cor em formato HEX (ex: "#7DFDFE")
 * @returns Array RGB normalizado [r, g, b] com valores 0-1
 */
export function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255
      ]
    : [0.49, 0.99, 1.0]; // fallback teal
}

/**
 * Converte cor OKLCH para RGB normalizado (simplificado)
 * @param oklch Cor em formato OKLCH (ex: "oklch(0.85 0.21 200)")
 * @returns Array RGB normalizado para WebGL
 */
export function oklchToRgb(oklch: string): [number, number, number] {
  // Fallback temporário para OKLCH (conversão completa requer implementação complexa)
  // Por enquanto usa mapeamento das cores conhecidas
  const oklchMap: Record<string, [number, number, number]> = {
    'oklch(0.85 0.21 200)': [0.49, 0.99, 1.0], // teal
    'oklch(0.62 0.18 240)': [0.2, 0.4, 0.9],   // blue
    'oklch(0.65 0.22 290)': [0.5, 0.3, 0.8],   // violet
    'oklch(0.65 0.15 160)': [0.1, 0.7, 0.4],   // emerald
    'oklch(0.68 0.24 350)': [0.9, 0.3, 0.4],   // rose
    'oklch(0.65 0.18 190)': [0.1, 0.7, 0.8],   // cyan
    'oklch(0.78 0.15 70)': [0.9, 0.7, 0.1],    // amber
    'oklch(0.68 0.22 340)': [0.9, 0.4, 0.6],   // pink
    'oklch(1 0 0)': [1.0, 1.0, 1.0],            // white
    'oklch(0 0 0)': [0.0, 0.0, 0.0],            // black
  };
  
  return oklchMap[oklch] || [0.49, 0.99, 1.0]; // fallback teal
}

/**
 * Detecta formato da cor e converte para RGB automaticamente
 * @param color Cor em formato HEX ou OKLCH
 * @returns Array RGB normalizado para WebGL
 */
export function colorToRgb(color: string): [number, number, number] {
  if (color.startsWith('oklch(')) {
    return oklchToRgb(color);
  } else if (color.startsWith('#')) {
    return hexToRgb(color);
  } else if (color.includes('oklch(1 0 0 /')) {
    // Handle rgba-style oklch with alpha (return base color)
    return oklchToRgb('oklch(1 0 0)');
  } else {
    // Assume it's a CSS variable reference - return fallback
    return [0.49, 0.99, 1.0];
  }
}

/**
 * Obtém cor do tema atual e converte para RGB
 * @param property Propriedade CSS (ex: '--cv-accent')
 * @returns Array RGB normalizado para WebGL
 */
export function getThemeColor(property: string): [number, number, number] {
  if (typeof window === 'undefined') {
    return [0.49, 0.99, 1.0]; // SSR fallback
  }

  const element = document.documentElement;
  const computedStyle = getComputedStyle(element);
  const colorValue = computedStyle.getPropertyValue(property).trim();
  
  return colorToRgb(colorValue);
}

/**
 * Verifica se duas cores RGB são aproximadamente iguais
 * @param color1 Primeira cor RGB
 * @param color2 Segunda cor RGB  
 * @param tolerance Tolerância de diferença (default: 0.01)
 */
export function colorsMatch(
  color1: [number, number, number], 
  color2: [number, number, number], 
  tolerance: number = 0.01
): boolean {
  return Math.abs(color1[0] - color2[0]) < tolerance &&
         Math.abs(color1[1] - color2[1]) < tolerance &&
         Math.abs(color1[2] - color2[2]) < tolerance;
}