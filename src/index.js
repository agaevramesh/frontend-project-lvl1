import readlineSync from 'readline-sync';

const helloName = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const fEvenBrain = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const randomNum = Math.round(Math.random() * 100);
    const randomAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    if (randomNum % 2 === 0 && randomAnswer === 'yes' || randomNum % 2 === 1 && randomAnswer === 'no') {
      console.log(`Correct!`);
    }
    else {
      console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was `, randomNum % 2 === 0 ? '"yes"': '"no"');
      console.log(`Let\'s try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export {helloName, fEvenBrain};
