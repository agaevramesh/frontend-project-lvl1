import mainFunc from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (number) => {
  let isPrimeAnswer = '';
  let i = Math.floor(number / 2);
  while (i > 1) {
    if (number % i === 0) {
      isPrimeAnswer = 'no';
      break;
    }
    i -= 1;
  }
  if (i === 1) isPrimeAnswer = 'yes';
  return isPrimeAnswer;
};

const funcParameters = () => {
  const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionData = getRandomInt(2, 103);
  const rightAnswer = isPrime(questionData);
  const gameParameters = [questionText, questionData, rightAnswer];
  return gameParameters;
};

const primeBrain = () => {
  mainFunc(funcParameters);
};

export default primeBrain;
