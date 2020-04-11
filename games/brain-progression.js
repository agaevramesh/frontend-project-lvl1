import { readlineSync, getRandomInt } from '../src/index.js';

const progressionBrain = () => {
  console.log('What number is missing in the progression?');
  const randomStart = getRandomInt(0, 10);
  const randomStep = getRandomInt(1, 11);
  const randomPos = getRandomInt(0, 10);
  let strProg = '';
  for (let i = 0; i < 10; i += 1) {
    if (i === randomPos) strProg += '.. ';
    else strProg += `${randomStart + randomStep * i} `;
  }
  const randomAnswer = readlineSync.question(`Question: ${strProg}\nYour answer: `);
  if (randomAnswer === String(randomStart + randomStep * randomPos)) return console.log('Correct!');
  console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was "${randomStart + randomStep * randomPos}"`);
  return 0;
};

export default progressionBrain;
