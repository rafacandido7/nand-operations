import { getLength } from "../utils/get-length";

export function normalizeBinaryLength(binA: string, binB: string): { binA: string; binB: string } {
  let binALength = getLength(binA);
  let binBLength = getLength(binB);

  while (binALength < binBLength) {
    binA = '0' + binA;
    binALength = getLength(binA);
  }

  while (binBLength < binALength) {
    binB = '0' + binB;
    binBLength = getLength(binB);
  }

  return { binA, binB };
}