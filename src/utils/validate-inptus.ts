export function validateInputs(inputs: string[]) {
  const regex = /^-?\d+$/;

  inputs.forEach((n) => {
    if (!regex.test(n)) {
      throw new Error(`The input ${n} is not a valid decimal number.`);
    }
  });
}
