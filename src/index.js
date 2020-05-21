import readlineSync from 'readline-sync';

const mainFunc = (taskDescription, funcParameters) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(taskDescription);
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const gameParameters = funcParameters();
    const userAnswer = readlineSync.question(`Question: ${gameParameters[0]}\nYour answer: `);
    if (userAnswer === gameParameters[1]) console.log('Correct!');
    else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameParameters[1]}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default mainFunc;
