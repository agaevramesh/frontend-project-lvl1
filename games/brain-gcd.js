import { readlineSync, getRandomInt } from '../src/index.js';

const gcdBrain = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const randomAnswer = readlineSync.question(`Question: ${randomNum1} ${randomNum2}\nYour answer: `);
  let tempAnswer = (randomNum1 >= randomNum2 ? randomNum2 : randomNum1);
  while (randomNum1 % tempAnswer !== 0 || randomNum2 % tempAnswer !== 0) {
    tempAnswer -= 1;
  }
  if (String(tempAnswer) === randomAnswer) return console.log('Correct!');
  console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was "${tempAnswer}"`);
  return 0;
};

export default gcdBrain;
