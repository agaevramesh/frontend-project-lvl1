import startGame from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (number) => {
  if (number <= 1) return false;
  let i = 2;
  while (i <= Math.sqrt(number)) {
    if (number % i === 0) return false;
    i += 1;
  }
  return true;
};

const getGameData = () => {
  const question = getRandomInt(0, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const gameData = [question, rightAnswer];
  return gameData;
};

const primeBrain = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(task, getGameData);
};

export default primeBrain;
