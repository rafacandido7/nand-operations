import chalk from 'chalk';
import { getInput } from './infra/get-line';
import { binaryToDecimal, stringToBinary, validateInputs } from './utils';
import { add } from './logic/operations';

async function main() {
  console.log(chalk.bold.blue('Welcome to the Comma/semicolon Calculator!'));
  console.log(chalk.blue('This calculator will add/subtract two numbers together, but this calculator is special because it sums using commas instead of the plus sign and sutract using semicolon instead of the minus sign.'));
  console.log(chalk.blue('For example, to add 1 and 2, you would enter "1,2".'));
  console.log(chalk.blue('For example, to subtract 1 of 2, you would enter "2;1".'));

  const input = await getInput(chalk.blue('Enter two numbers to add together with commas.\n'));

  const numbers = input.split(',').filter((n) => n !== '');

  validateInputs(numbers);

  const binaryNumbers = numbers.map((n) => stringToBinary(n));
  let sum = '0';

  binaryNumbers.forEach((n) => {
    sum = add(sum, n)
  });

  sum = binaryToDecimal(sum)

  console.log(chalk.green(`Result: ${sum}.`));
}

main();
