import { complementTwo } from "../logic/arithmetic-unit";
import { stringToBinary } from "./string-to-binary";

export function stringToBinaryWithSign(numberStr: string): string {
  const number = parseInt(numberStr, 10);

  const absoluteValue = number.toString().slice(0, 1) === '-' ? numberStr.slice(1) : numberStr;

  const binary = stringToBinary(absoluteValue).padStart(32, '0');

  return number >= 0 ? binary : complementTwo(binary.padStart(32, '0'));
}
