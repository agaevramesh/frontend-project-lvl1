import readlineSync from 'readline-sync';

const helloName = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

function getRandomInt(min, max) {
  const min = Math.ceil(min);
  const max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается 
}

const fEvenBrain = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const randomNum = getRandomInt(0, 100);
    const randomAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    if ((randomNum % 2 === 0 && randomAnswer === 'yes') || (randomNum % 2 === 1 && randomAnswer === 'no')) {
      console.log('Correct!'); }
    else {
      console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was `, randomNum % 2 === 0 ? '"yes"' : '"no"');
      console.log(`Let's try again, ${userName}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const fCalcBrain = (userName) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i <= 2; i += 1) {
    const randomNum1 = getRandomInt(0, 100);
    const randomNum2 = getRandomInt(0, 100);
    const randomNum3 = (getRandomInt(0, 3) === 0 ? '+' : 1 ? '-' : 2 ? '*' : null);
    const randomAnswer = readlineSync.question(`Question: ${randomNum1} ${randomNum3} ${randomNum2}\nYour answer: `);
    const tempAnswer = (randomNum3 === '+' ? randomNum1 + randomNum2 : '-' ? randomNum1 - randomNum2 : '*' ? randomNum1 * randomNum2 : null);
    if (tempAnswer == randomAnswer) {
      console.log('Correct!'); }
    else {
      console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was "${tempAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { helloName, fEvenBrain, fCalcBrain };
