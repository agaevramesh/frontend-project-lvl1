import { mainFunc, getRandomInt } from '../index.js';

const funcParameters = () => {
  const randomStart = getRandomInt(0, 10);
  const randomStep = getRandomInt(1, 11);
  const randomPos = getRandomInt(0, 10);
  let gameQuestionParametr = '';
  for (let i = 0; i < 10; i += 1) {
    if (i === randomPos) gameQuestionParametr += '.. ';
    else gameQuestionParametr += `${randomStart + randomStep * i} `;
  }
  const gameAnswerParametr = String(randomStart + randomStep * randomPos);
  const funcOutput = [gameQuestionParametr, gameAnswerParametr];
  return funcOutput;
};

const progressionBrain = () => {
  const gameQuestion = 'What number is missing in the progression?';
  mainFunc(gameQuestion, funcParameters);
};

export default progressionBrain;
