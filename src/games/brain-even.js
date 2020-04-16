import { mainFunc, getRandomInt } from '../index.js';

const funcParameters = () => {
  const gameQuestionParametr = getRandomInt(0, 100);
  const gameAnswerParametr = gameQuestionParametr % 2 === 0 ? 'yes' : 'no';
  const funcOutput = [gameQuestionParametr, gameAnswerParametr];
  return funcOutput;
};

const evenBrain = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  mainFunc(gameQuestion, funcParameters);
};

export default evenBrain;
