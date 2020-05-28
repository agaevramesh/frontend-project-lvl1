import startGame from '../index.js';
import getRandomInt from '../utils.js';

const getGameData = () => {
  const question = getRandomInt(1, 100);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  const gameData = [question, rightAnswer];
  return gameData;
};

const evenBrain = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(task, getGameData);
};

export default evenBrain;
