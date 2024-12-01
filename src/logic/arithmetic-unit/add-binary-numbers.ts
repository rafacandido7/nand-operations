import { fullAdder } from "../full-adder";

import { normalizeBinaryLength } from "../../usecases";

export function addBinaryNumbers(binaryA: string, binaryB: string): string {
  const { binA, binB } = normalizeBinaryLength(binaryA, binaryB);

  let carry = '0';
  let result = '';

  for (let i = binA.length - 1; i >= 0; i--) {
    const bitA = binA[i];
    const bitB = binB[i];

    const { sum, carryOut } = fullAdder(bitA, bitB, carry);

    result = sum + result;
    carry = carryOut;
  }

  // Limitar o resultado a 32 bits
  return result.slice(-32);
}
