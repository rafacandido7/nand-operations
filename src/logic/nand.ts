export const nandError = "The inputs must to be a binary numbers (0 ou 1).";

export function nand(a: string, b: string): string {
  if (!/^[01]$/.test(a) || !/^[01]$/.test(b)) {
    throw new Error(nandError);
  }

  if (a === '1' && b === '1') {
    return '0';
  } else {
    return '1';
  }
}
