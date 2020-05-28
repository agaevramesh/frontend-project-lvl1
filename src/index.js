import readlineSync from 'readline-sync';

const startGame = (task, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, rightAnswer] = getGameData();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === rightAnswer) console.log('Correct!');
    else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
