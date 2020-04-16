import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue; // Максимум не включается
};

const mainFunc = (gameQuestion, funcParameters) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameQuestion);
  for (let i = 0; i <= 2; i += 1) {
    const gameParameters = funcParameters();
    const userAnswer = readlineSync.question(`Question: ${gameParameters[0]}\nYour answer: `);
    if (userAnswer === gameParameters[1]) console.log('Correct!');
    else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameParameters[1]}"`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export {
  getRandomInt, mainFunc,
};
