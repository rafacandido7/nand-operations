import readline from 'readline';

export function getInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}
