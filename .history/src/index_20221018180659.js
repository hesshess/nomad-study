const clockTitle = document.querySelector('.js-clock');

function calculateTime() {
  const eve = new Date('2022-12-24:00:00:00');
  const now = new Date();
  const left = new Date(eve - now);
  const secondsLeft = Math.floor(left / 1000);
  const minutesLeft = Math.floor(secondsLeft / 60);
  const hoursLeft = Math.floor(minutesLeft / 60);
  const days = Math.floor(hoursLeft / 24);
  const seconds = secondsLeft % 60;
  const minutes = minutesLeft % 60;
  const hours = hoursLeft % 24;
  const daysResult = `${days}d`;
  const hoursResult = `${hours}h`;
  const minutesResult = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsResult = `${seconds < 10 ? `0${seconds}` : seconds}s`;

  clockTitle.innerHTML = `${daysResult} ${hoursResult} ${minutesResult} ${secondsResult}`;
}

function init() {
  calculateTime();
  setInterval(calculateTime, 1000);
}

init();
