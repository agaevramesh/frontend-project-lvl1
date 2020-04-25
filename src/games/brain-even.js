import mainFunc from '../index.js';
import getRandomInt from '../utils.js';


const funcParameters = () => {
  const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionData = getRandomInt(0, 100);
  const rightAnswer = questionData % 2 === 0 ? 'yes' : 'no';
  const gameParameters = [questionText, questionData, rightAnswer];
  return gameParameters;
};

const evenBrain = () => {
  mainFunc(funcParameters);
};

export default evenBrain;
