const body = document.querySelector('body');
const button = document.querySelector('.check');
let hint = document.querySelector('.message');
let score = document.querySelector('.score').textContent;
let highscore = 0;
let rightNumber = document.querySelector('.number');
let userGuess = 0;

//Function expression to get random nubmer for guessing
const getAnswer = function () {
  return Math.floor(Math.random() * 21);
};
let randomNumber = getAnswer();

//Function to update user input
function getNumbers() {
  userGuess = document.querySelector('.guess').value;
  return userGuess;
}

//Code to clean input box on refreshing web-page.
window.onload = () => {
  document.querySelector('.guess').value = '';
};

//Function to restart all values and get new number for guessing
function restartGame() {
  getAnswer();
  body.style.backgroundColor = 'rgb(34,34,34)';
  randomNumber = getAnswer();
  console.log(randomNumber);
  document.querySelector('.score').textContent = 20;
  score = 20;
  highscore = document.querySelector('.highscore').textContent;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  button.disabled = false;
}

//Function ,binded on check button, to play the game(Update user input everytime button check is used; evaluate equality of user input and number to guess and providing hints for guessing)

document.querySelector('.check').addEventListener('click', function () {
  getNumbers();
  console.log(randomNumber);
  console.log(userGuess);
  if (userGuess == '') {
    alert('Put some number there, boy.');
  } else if (userGuess != randomNumber) {
    score -= 1;
    document.querySelector('.score').textContent = score;
    console.log('try again');
    if (userGuess > randomNumber) {
      document.querySelector('.message').textContent = 'Too high!';
    } else {
      document.querySelector('.message').textContent = 'Too low!';
    }
  } else if (userGuess == randomNumber) {
    body.style.backgroundColor = 'rgb(0, 128, 0)';
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = userGuess;
    button.disabled = true;
    if (highscore < score) {
      return (document.querySelector('.highscore').textContent = score);
    }
  }
});

//Function ,binded on 'again' button, to restart a game.
document.querySelector('.again').addEventListener('click', restartGame);
