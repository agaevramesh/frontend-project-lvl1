import mainFunc from '../index.js';
import getRandomInt from '../utils.js';

const getGameParameters = () => {
  const randomStart = getRandomInt(0, 10);
  const randomStep = getRandomInt(1, 11);
  const sizeOfProgression = 10;
  const randomPos = getRandomInt(0, sizeOfProgression);
  let questionData = '';
  for (let i = 0; i < sizeOfProgression; i += 1) {
    if (i === randomPos) questionData += '..';
    else questionData += `${randomStart + randomStep * i}`;
    if (i !== sizeOfProgression - 1) questionData += ' ';
  }
  const rightAnswer = String(randomStart + randomStep * randomPos);
  const gameParameters = [questionData, rightAnswer];
  return gameParameters;
};

const progressionBrain = () => {
  const taskDescription = 'What number is missing in the progression?';
  mainFunc(taskDescription, getGameParameters);
};

export default progressionBrain;
