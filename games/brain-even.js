import { readlineSync, getRandomInt } from '../src/index.js';

const evenBrain = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNum = getRandomInt(0, 100);
  const randomAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
  if ((randomNum % 2 === 0 && randomAnswer === 'yes') || (randomNum % 2 === 1 && randomAnswer === 'no')) {
    return console.log('Correct!');
  }
  console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was `, randomNum % 2 === 0 ? '"yes"' : '"no"');
  return 0;
};

export default evenBrain;
