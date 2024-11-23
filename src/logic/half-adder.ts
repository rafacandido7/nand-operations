import { and } from './and';
import { xor } from './xor';

export function halfAdder(a: string, b: string): { sum: string; carry: string } {
  const sum = xor(a, b);
  const carry = and(a, b);
  return { sum, carry };
}