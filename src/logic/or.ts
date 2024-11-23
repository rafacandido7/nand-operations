import { nand } from './nand';
import { not } from './not';

export function or(a: string, b: string): string {
  const notA = not(a);
  const notB = not(b);
  return nand(notA, notB);
}
