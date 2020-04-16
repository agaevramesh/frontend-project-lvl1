import { mainFunc, getRandomInt } from '../index.js';

const funcParameters = () => {
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const allOperators = ['+', '-', '*'];
  const randOperator = allOperators[getRandomInt(0, 1 * allOperators.length)];
  let gameAnswerParametr = 0;
  if (randOperator === '+') gameAnswerParametr = (String)(randomNum1 + randomNum2);
  else if (randOperator === '-') gameAnswerParametr = (String)(randomNum1 - randomNum2);
  else gameAnswerParametr = (String)(randomNum1 * randomNum2);
  const gameQuestionParametr = randomNum1 + randOperator + randomNum2;
  const funcOutput = [gameQuestionParametr, gameAnswerParametr];
  return funcOutput;
};

const calcBrain = () => {
  const gameQuestion = 'What is the result of the expression?';
  mainFunc(gameQuestion, funcParameters);
};

export default calcBrain;
