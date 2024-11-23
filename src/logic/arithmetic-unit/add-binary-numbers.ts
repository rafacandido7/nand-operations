import { fullAdder } from "..";
import { normalizeBinaryLength } from "../../usecases";
import { getLength } from "../../utils";

export function addBinaryNumbers(binaryA: string, binaryB: string): string {
  const { binA, binB } = normalizeBinaryLength(binaryA, binaryB);

  const binsLength = getLength(binA);

  let carry = '0';
  let result = '';

  for (let i = binsLength - 1; i >= 0; i--) {
    const bitA = binA[i];
    const bitB = binB[i];

    const { sum, carryOut } = fullAdder(bitA, bitB, carry);

    result = sum + result;
    carry = carryOut;
  }

  if (carry === '1') {
    result = carry + result;
  }

  return result;
}