import mainFunc from '../index.js';
import getRandomInt from '../utils.js';

const getNod = (num1, num2) => {
  let result = (num1 >= num2 ? num2 : num1);
  while (num1 % result !== 0 || num2 % result !== 0) result -= 1;
  return result;
};

const getGameParameters = () => {
  const taskDescription = 'Find the greatest common divisor of given numbers.';
  const randomNum1 = getRandomInt(1, 100);
  const randomNum2 = getRandomInt(1, 100);
  const questionData = `${randomNum1} ${randomNum2}`;
  const rightAnswer = String(getNod(randomNum1, randomNum2));
  const gameParameters = [taskDescription, questionData, rightAnswer];
  return gameParameters;
};

const gcdBrain = () => {
  mainFunc(getGameParameters);
};

export default gcdBrain;
