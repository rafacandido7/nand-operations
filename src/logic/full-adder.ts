import { and } from "./and";
import { or } from "./or";
import { xor } from "./xor";

export function fullAdder(a: string, b: string, carryIn: string): { sum: string; carryOut: string } {
  const xorAB = xor(a, b);
  const sum = xor(xorAB, carryIn);
  const carryOut = or(and(a, b), and(xorAB, carryIn));
  return { sum, carryOut };
}