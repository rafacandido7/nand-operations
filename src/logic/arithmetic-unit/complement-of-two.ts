import { getLength } from "../../utils";
import { add } from "../operations";

export function complementTwo(binary: string): string {
  const inverted = binary
    .split('')
    .map((bit) => (bit === '1' ? '0' : '1'))
    .join('');

  const binaryOne = '1'.padStart(binary.length, '0');

  return add(inverted, binaryOne).slice(-getLength(binary));
}
