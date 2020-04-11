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

export {
  helloName, getRandomInt, readlineSync, repeatFunc,
};
