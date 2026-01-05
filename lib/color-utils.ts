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
  const hexColor = computedStyle.getPropertyValue(property).trim();
  
  return hexToRgb(hexColor);
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