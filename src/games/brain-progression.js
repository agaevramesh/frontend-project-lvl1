import mainFunc from '../index.js';
import getRandomInt from '../utils.js';

const funcParameters = () => {
  const questionText = 'What number is missing in the progression?';
  const randomStart = getRandomInt(0, 10);
  const randomStep = getRandomInt(1, 11);
  const randomPos = getRandomInt(0, 10);
  let questionData = '';
  const sizeOfProgression = 10;
  for (let i = 0; i < sizeOfProgression; i += 1) {
    if (i === randomPos) questionData += '.. ';
    else questionData += `${randomStart + randomStep * i} `;
  }
  const rightAnswer = String(randomStart + randomStep * randomPos);
  const gameParameters = [questionText, questionData, rightAnswer];
  return gameParameters;
};

const progressionBrain = () => {
  mainFunc(funcParameters);
};

export default progressionBrain;
