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
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue; //Максимум не включается, минимум включается 
};

const repeatFunc = (userName, userFunc) => {
  for (let i = 0; i <= 2; i += 1) {
    if (userFunc() === 0) {
      console.log(`Let's try again, ${userName}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const evenBrain = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNum = getRandomInt(0, 100);
  const randomAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
  if ((randomNum % 2 === 0 && randomAnswer === 'yes') || (randomNum % 2 === 1 && randomAnswer === 'no')) {
    console.log('Correct!'); }
  else {
    console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was `, randomNum % 2 === 0 ? '"yes"' : '"no"');
    return 0;
  }
};

const calcBrain = (userName) => {
  console.log('What is the result of the expression?');
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const randomNum3 = (getRandomInt(0, 3) === 0 ? '+' : 1 ? '-' : 2 ? '*' : null);
  const randomAnswer = readlineSync.question(`Question: ${randomNum1} ${randomNum3} ${randomNum2}\nYour answer: `);
  const tempAnswer = (randomNum3 === '+' ? randomNum1 + randomNum2 : '-' ? randomNum1 - randomNum2 : '*' ? randomNum1 * randomNum2 : null);
  if (tempAnswer == randomAnswer) {
    console.log('Correct!'); 
  }
  else {
    console.log(`"${randomAnswer}" is wrong answer ;(. Correct answer was "${tempAnswer}"`);
    return 0;
  }
};

export { helloName, evenBrain, calcBrain, repeatFunc};
