import readlineSync from 'readline-sync';

const mainFunc = (funcParameters) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(funcParameters()[0]);
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const gameParameters = funcParameters();
    const userAnswer = readlineSync.question(`Question: ${gameParameters[1]}\nYour answer: `);
    if (userAnswer === gameParameters[2]) console.log('Correct!');
    else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameParameters[2]}"`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default mainFunc;
