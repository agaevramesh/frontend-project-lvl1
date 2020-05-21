import mainFunc from '../index.js';
import getRandomInt from '../utils.js';

const getGameParameters = () => {
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const operators = ['+', '-', '*'];
  const randOperator = operators[getRandomInt(0, 1 * operators.length)];
  let rightAnswer;
  switch (randOperator) {
    case '+':
      rightAnswer = randomNum1 + randomNum2;
      break;
    case '-':
      rightAnswer = randomNum1 - randomNum2;
      break;
    case '*':
      rightAnswer = randomNum1 * randomNum2;
      break;
    default:
      return null;
  }
  rightAnswer = (String)(rightAnswer);
  const questionData = `${randomNum1} ${randOperator} ${randomNum2}`;
  const gameParameters = [questionData, rightAnswer];
  return gameParameters;
};

const calcBrain = () => {
  const taskDescription = 'What is the result of the expression?';
  mainFunc(taskDescription, getGameParameters);
};

export default calcBrain;
