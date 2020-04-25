import mainFunc from '../index.js';
import getRandomInt from '../utils.js';

const funcParameters = () => {
  const questionText = 'What is the result of the expression?';
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const allOperators = ['+', '-', '*'];
  const randOperator = allOperators[getRandomInt(0, 1 * allOperators.length)];
  let rightAnswer = 0;
  switch (randOperator) {
    case '+':
      rightAnswer = (String)(randomNum1 + randomNum2);
      break;
    case '-':
      rightAnswer = (String)(randomNum1 - randomNum2);
      break;
    case '*':
      rightAnswer = (String)(randomNum1 * randomNum2);
      break;
    default:
      console.log('random operator error');
  }
  const questionData = randomNum1 + randOperator + randomNum2;
  const gameParameters = [questionText, questionData, rightAnswer];
  return gameParameters;
};

const calcBrain = () => {
  mainFunc(funcParameters);
};

export default calcBrain;
