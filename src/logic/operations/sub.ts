import { complementTwo } from "../arithmetic-unit";
import { add } from "./add";

export function sub(a: string, b: string) {
  const invertedB = complementTwo(b);

  return add(a, invertedB);
}