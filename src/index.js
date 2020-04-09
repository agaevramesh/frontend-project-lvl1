import readlineSync from 'readline-sync';

const helloName = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomInt = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue; // Максимум не включается
};

const repeatFunc = (userName, userFunc) => {
  for (let i = 0; i <= 2; i += 1) {
    if (userFunc() === 0) {
      console.log(`Let's try again, ${userName}!`);
      return 0;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

const evenBrain = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNum = getRandomInt(0, 100);
  const randomAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
  if ((randomNum % 2 === 0 && randomAnswer === 'yes') || (randomNum % 2 === 1 && randomAnswer === 'no'))
    return console.log('Correct!');
  else {
    console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was `, randomNum % 2 === 0 ? '"yes"' : '"no"');
    return 0;
  }
};

const calcBrain = () => {
  console.log('What is the result of the expression?');
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const randomNum3 = (getRandomInt(0, 3) === 0 ? '+' : 1 ? '-' : 2 ? '*' : null);
  const randomAnswer = readlineSync.question(`Question: ${randomNum1} ${randomNum3} ${randomNum2}\nYour answer: `);
  const tempAnswer = (randomNum3 === '+' ? randomNum1 + randomNum2 : '-' ? randomNum1 - randomNum2 : '*' ? randomNum1 * randomNum2 : null);
  if (String(tempAnswer) === randomAnswer)
    return console.log('Correct!');
  else {
    console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was "${tempAnswer}"`);
    return 0;
  }
};

const gcdBrain = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const randomAnswer = Number(readlineSync.question(`Question: ${randomNum1} ${randomNum2}\nYour answer: `));
  let tempAnswer = (randomNum1 >= randomNum2 ? randomNum2 : randomNum1);
  while (randomNum1 % tempAnswer !== 0 || randomNum2 % tempAnswer !== 0) {
    tempAnswer = tempAnswer - 1;
  } 
  if (tempAnswer == randomAnswer)
    return console.log('Correct!');
  else {
    console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was "${tempAnswer}"`);
    return 0;
  }
};

const progressionBrain = () => {
  console.log('What number is missing in the progression?');
  const randomStart = getRandomInt(0, 10);
  const randomStep = getRandomInt(1, 11);
  const randomPos = getRandomInt(0, 10);
  let strProg = '';
  for (let i = 0; i < 10; i++) {
    if (i === randomPos) {
      strProg += '.. ';
      continue;
    }
    strProg += `${randomStart + randomStep * i} `;
  }
  const randomAnswer = readlineSync.question(`Question: ${strProg}\nYour answer: `);
  if (randomAnswer === String(randomStart + randomStep * randomPos)) {
    return console.log('Correct!'); 
  }
  else {
    console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was "${randomStart + randomStep * randomPos}"`);
    return 0;
  }
};

const primeBrain = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randomNum = getRandomInt(2, 103);
  let i = Math.floor(randomNum / 2);
  const randomAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
  while (i > 1) {
    if (randomNum % i === 0) {
      if (randomAnswer === 'no')
        return console.log('Correct!');
      else {
        console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was `, randomAnswer === 'yes' ? '"no"' : '"yes"');
        return 0;
      }
    }
    i -= 1;
  }
  if (randomAnswer === 'yes' && i === 1)
    return console.log('Correct!');
  console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was `, randomAnswer === 'yes' ? '"no"' : '"yes"');
  return 0;
};

export { helloName, evenBrain, calcBrain, repeatFunc, gcdBrain, progressionBrain, primeBrain };
