import { nand } from "./nand"

export function not(a: string): string {
  return nand(a, a);
}