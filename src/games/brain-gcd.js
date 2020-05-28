import startGame from '../index.js';
import getRandomInt from '../utils.js';

const getGreatestCommonDivisor = (num1, num2) => {
  let result = (num1 >= num2 ? num2 : num1);
  while (num1 % result !== 0 || num2 % result !== 0) result -= 1;
  return result;
};

const getGameData = () => {
  const randomNum1 = getRandomInt(1, 100);
  const randomNum2 = getRandomInt(1, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const rightAnswer = getGreatestCommonDivisor(randomNum1, randomNum2);
  const gameData = [question, String(rightAnswer)];
  return gameData;
};

const gcdBrain = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  startGame(task, getGameData);
};

export default gcdBrain;
