import { mainFunc, getRandomInt } from '../index.js';

const funcParameters = () => {
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const gameQuestionParametr = `${randomNum1} ${randomNum2}`;

  let gameAnswerParametr = (randomNum1 >= randomNum2 ? randomNum2 : randomNum1);
  // eslint-disable-next-line max-len
  while (randomNum1 % gameAnswerParametr !== 0 || randomNum2 % gameAnswerParametr !== 0) gameAnswerParametr -= 1;
  gameAnswerParametr = String(gameAnswerParametr);
  const funcOutput = [gameQuestionParametr, gameAnswerParametr];
  return funcOutput;
};

const gcdBrain = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  mainFunc(gameQuestion, funcParameters);
};

export default gcdBrain;
