import { readlineSync, getRandomInt } from '../src/index.js';

const calcBrain = () => {
  console.log('What is the result of the expression?');
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const randomNum3 = getRandomInt(0, 3);
  let randOperator = '';
  let tempAnswer = 0;
  switch (randomNum3) {
    case 0:
      tempAnswer = randomNum1 + randomNum2;
      randOperator = '+';
      break;
    case 1:
      tempAnswer = randomNum1 - randomNum2;
      randOperator = '-';
      break;
    case 2:
      tempAnswer = randomNum1 * randomNum2;
      randOperator = '*';
      break;
    default:
      console.log('default value, smth wrong');
  }
  const randomAnswer = readlineSync.question(`Question: ${randomNum1} ${randOperator} ${randomNum2}\nYour answer: `);
  if (String(tempAnswer) === randomAnswer) return console.log('Correct!');
  console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was "${tempAnswer}"`);
  return 0;
};

export default calcBrain;
