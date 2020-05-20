import mainFunc from '../index.js';
import getRandomInt from '../utils.js';


const getGameParameters = () => {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionData = getRandomInt(1, 100);
  const rightAnswer = questionData % 2 === 0 ? 'yes' : 'no';
  const gameParameters = [taskDescription, questionData, rightAnswer];
  return gameParameters;
};

const evenBrain = () => {
  mainFunc(getGameParameters);
};

export default evenBrain;
