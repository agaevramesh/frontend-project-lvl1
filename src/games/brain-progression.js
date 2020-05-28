import startGame from '../index.js';
import getRandomInt from '../utils.js';

const getGameData = () => {
  const randomStart = getRandomInt(0, 10);
  const randomStep = getRandomInt(1, 11);
  const sizeOfProgression = 10;
  const randomPosition = getRandomInt(0, sizeOfProgression - 1);
  let question = '';
  for (let i = 0; i < sizeOfProgression; i += 1) {
    if (i === randomPosition) question += '..';
    else question += `${randomStart + randomStep * i} `;
    question = question.trim();
  }
  const rightAnswer = randomStart + randomStep * randomPosition;
  const gameData = [question, String(rightAnswer)];
  return gameData;
};

const progressionBrain = () => {
  const task = 'What number is missing in the progression?';
  startGame(task, getGameData);
};

export default progressionBrain;
