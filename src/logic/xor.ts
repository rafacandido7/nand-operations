import { nand } from './nand';

export function xor(a: string, b: string): string {
  const nandAB = nand(a, b);
  const nandA = nand(a, nandAB);
  const nandB = nand(b, nandAB);
  return nand(nandA, nandB);
}
