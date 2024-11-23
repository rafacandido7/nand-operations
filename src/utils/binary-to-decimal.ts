/**
 * Converte um número binário para decimal.
 * @param binary Número binário como string.
 * @returns Número decimal como string.
 */
export function binaryToDecimal(binary: string): string {
  return parseInt(binary, 2).toString();
}
