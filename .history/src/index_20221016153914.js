const range = document.querySelector('.range');
const guess = document.querySelector('.guess');
const result = document.querySelector('.result');

function handleGuess(e) {
  e.preventDefault();
  const guessInput = guess.querySelector('input');
  const max = range.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);
  const resultBox = result.querySelector('h1');
  resultBox.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br /><br />
  ${userGuess === random ? '🎊YOU WON🎉' : '💩YOU LOST💩'}
  `;
}

guess.addEventListener('submit', handleGuess);
