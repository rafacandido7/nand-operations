import { multiplyBinaryNumbers } from "../arithmetic-unit";

/**
 * Multiplica dois números binários usando apenas somas e deslocamentos.
 * @param binaryA Primeiro número em binário.
 * @param binaryB Segundo número em binário.
 * @returns Resultado da multiplicação em binário.
 */
export function multiply(a: string, b: string): string {
  return multiplyBinaryNumbers(a, b)
}