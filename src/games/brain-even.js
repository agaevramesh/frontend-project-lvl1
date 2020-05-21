import mainFunc from '../index.js';
import getRandomInt from '../utils.js';


const getGameParameters = () => {
  const questionData = getRandomInt(1, 100);
  const rightAnswer = questionData % 2 === 0 ? 'yes' : 'no';
  const gameParameters = [questionData, rightAnswer];
  return gameParameters;
};

const evenBrain = () => {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  mainFunc(taskDescription, getGameParameters);
};

export default evenBrain;
