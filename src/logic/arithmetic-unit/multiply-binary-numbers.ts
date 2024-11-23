import { getLength } from "../../utils";
import { add } from "../operations";

/**
 * Multiplica dois números binários usando apenas somas e deslocamentos.
 * @param binaryA Primeiro número em binário.
 * @param binaryB Segundo número em binário.
 * @returns Resultado da multiplicação em binário.
 */
export function multiplyBinaryNumbers(binaryA: string, binaryB: string): string {
  let result = '0';
  let multiplier = binaryB;

  while (multiplier !== '0') {
    const multiplierLength = getLength(multiplier);
    const lastBit = multiplier[multiplierLength - 1];

    if (lastBit === '1') {
      result = add(result, binaryA);
    }

    binaryA += '0';

    multiplier = multiplier.slice(0, multiplierLength - 1);
  }

  return result;
}