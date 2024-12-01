import { add } from "../logic/operations";

/**
 * Converte um número binário para decimal.
 * @param binary Número binário como string.
 * @returns Número decimal como string.
 */
export function binaryToDecimal(binary: string): number {
  const isNegative = binary[0] === '1'

  if (isNegative) {
    const invertedBinary = binary
      .split('')
      .map((bit) => (bit === '1' ? '0' : '1'))
      .join('');
    const magnitude = parseInt(add(invertedBinary, '1'), 2);

    return -magnitude;
  }

  return parseInt(binary, 2);
}
