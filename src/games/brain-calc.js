import startGame from '../index.js';
import getRandomInt from '../utils.js';

const getGameData = () => {
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];
  let rightAnswer;
  switch (randomOperator) {
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
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const gameData = [question, String(rightAnswer)];
  return gameData;
};

const calcBrain = () => {
  const task = 'What is the result of the expression?';
  startGame(task, getGameData);
};

export default calcBrain;
