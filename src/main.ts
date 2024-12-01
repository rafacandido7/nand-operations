import chalk from 'chalk';
import { getInput } from './infra/get-line';
import { binaryToDecimal, stringToBinaryWithSign, validateInputs } from './utils';
import { add, sub } from './logic/operations';

async function main() {
  console.log(chalk.bold.blue('Welcome to the Calculator!'));
  console.log(chalk.blue('Enter two numbers separated by space (e.g., "5 -3" for addition and subtraction).\n'));

  const input = await getInput(chalk.blue());
  const numbers = input.split(' ').filter((n) => n !== '');

  validateInputs(numbers);

  const binaryNumbers = numbers.map((n) => stringToBinaryWithSign(n));

  // Sum
  const sumBinary = add(binaryNumbers[0], binaryNumbers[1]);
  const sumDecimal = binaryToDecimal(sumBinary);

  // Sub
  const subtractionBinary = sub(binaryNumbers[0], binaryNumbers[1]);
  const subtractionDecimal = binaryToDecimal(subtractionBinary);

  console.log(chalk.green(`Addition Result: ${sumDecimal}`));
  console.log(chalk.green(`Subtraction Result: ${subtractionDecimal}`));
}

main();
