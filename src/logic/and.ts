import { nand } from './nand';
import { not } from './not';

export function and(a: string, b: string): string {
  const nandResult = nand(a, b);
  return not(nandResult);
}
