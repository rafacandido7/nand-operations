export function stringToBinary(str: string): string {
  const number = parseInt(str, 10);

  return number.toString(2);
}

