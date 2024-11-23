import { add } from "date-fns";

export function langSum(inputs: string[]): string {
  return inputs.reduce((acc, curr) => {
    return add(acc, curr);
  }, '0');
}