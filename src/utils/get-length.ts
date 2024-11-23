/**
 * Conta a quantidade de elementos em uma string.
 * @param str A string binária
 * @returns O número de bits na string
 */
export function getLength(str: string): number {
  let count = 0;
  let bit: string | undefined = str[0];

  while (bit !== undefined) {
    count++;
    bit = str[count];
  }

  return count;
}
