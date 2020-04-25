import mainFunc from '../index.js';
import getRandomInt from '../utils.js';

const funcParameters = () => {
  const questionText = 'Find the greatest common divisor of given numbers.';
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const questionData = `${randomNum1} ${randomNum2}`;
  let rightAnswer = (randomNum1 >= randomNum2 ? randomNum2 : randomNum1);
  while (randomNum1 % rightAnswer !== 0 || randomNum2 % rightAnswer !== 0) rightAnswer -= 1;
  rightAnswer = String(rightAnswer);
  const gameParameters = [questionText, questionData, rightAnswer];
  return gameParameters;
};

const gcdBrain = () => {
  mainFunc(funcParameters);
};

export default gcdBrain;
