const body = document.querySelector('body');
const button = document.querySelector('.check');
let hint = document.querySelector('.message');
let score = document.querySelector('.score').textContent;
let rightNumber = document.querySelector('.number');
let userGuess = document.querySelector('.guess').value;
let highscore = 0;
let randomNumber = getRandomNumber();

//
function getRandomNumber() {
  return Math.floor(Math.random() * 21);
}

//Function ,binded on check button, to play the game(Update user input everytime button check is used; evaluate equality of user input and number to guess and providing hints for guessing)
function playGame() {
  userGuess = document.querySelector('.guess').value;

  if (userGuess > randomNumber) {
    hint.textContent = 'Too high!';
  } else {
    hint.textContent = 'Too low!';
  }

  if (userGuess == '') {
    alert('Put some number there, boy.');
  } else if (userGuess != randomNumber) {
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else if (userGuess == randomNumber) {
    body.style.backgroundColor = 'rgb(0, 128, 0)';
    hint.textContent = 'Correct Number!';
    rightNumber.textContent = userGuess;
    button.disabled = true;

    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
    }
  }
}

//Function to restart all values and get new number for guessing
function restartGame() {
  randomNumber = getRandomNumber();

  body.style.backgroundColor = 'rgb(34,34,34)';
  score = 20;
  highscore = document.querySelector('.highscore').textContent;
  document.querySelector('.score').textContent = 20;
  rightNumber.textContent = '?';
  document.querySelector('.guess').value = '';
  button.disabled = false;
  document.querySelector('.message').textContent = 'Start guessing...';
}

//Binding function on DOM events.
button.addEventListener('click', playGame);

document.querySelector('.again').addEventListener('click', restartGame);

document.querySelector('.guess').addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    playGame();
  }
});
