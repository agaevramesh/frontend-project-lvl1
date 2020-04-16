import { mainFunc, getRandomInt } from '../index.js';

const funcParameters = () => {
  const gameQuestionParametr = getRandomInt(2, 103);
  let gameAnswerParametr = '';
  let i = Math.floor(gameQuestionParametr / 2);
  while (i > 1) {
    if (gameQuestionParametr % i === 0) {
      gameAnswerParametr = 'no';
      break;
    }
    i -= 1;
  }
  if (i === 1) gameAnswerParametr = 'yes';
  const funcOutput = [gameQuestionParametr, gameAnswerParametr];
  return funcOutput;
};

const primeBrain = () => {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  mainFunc(gameQuestion, funcParameters);
};

export default primeBrain;
