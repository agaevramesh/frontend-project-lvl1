import { readlineSync, getRandomInt } from '../src/index.js';

const primeBrain = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randomNum = getRandomInt(2, 103);
  let i = Math.floor(randomNum / 2);
  const randomAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
  while (i > 1) {
    if (randomNum % i === 0) {
      if (randomAnswer === 'no') return console.log('Correct!');
      console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was `, randomAnswer === 'yes' ? '"no"' : '"yes"');
      return 0;
    }
    i -= 1;
  }
  if (randomAnswer === 'yes' && i === 1) return console.log('Correct!');
  console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was `, randomAnswer === 'yes' ? '"no"' : '"yes"');
  return 0;
};

export default primeBrain;
