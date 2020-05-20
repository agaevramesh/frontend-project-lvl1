import mainFunc from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (number) => {
  let i = Math.floor(number / 2);
  while (i > 1) {
    if (number % i === 0) return false;
    i -= 1;
  }
  return true;
};

const getGameParameters = () => {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionData = getRandomInt(2, 103);
  const rightAnswer = isPrime(questionData) ? 'yes' : 'no';
  const gameParameters = [taskDescription, questionData, rightAnswer];
  return gameParameters;
};

const primeBrain = () => {
  mainFunc(getGameParameters);
};

export default primeBrain;
