const days = document.querySelector('.timer__days');
const hours = document.querySelector('.timer__hours');
const minutes = document.querySelector('.timer__minutes');
const seconds = document.querySelector('.timer__seconds');

let milisecInSec = 1000;
let milisecInMin = 60 * milisecInSec;
let milisecInHour = 60 * milisecInMin;
let milisecInDays = 24 * milisecInHour;

let deadline = new Date(2023, 4, 31).getTime();

document.addEventListener('DOMContentLoaded', () => {
    setInterval(getTime, 1000);
});

function getTime() {
    let currentTime = new Date();
    let diff = deadline - currentTime;

    let countDays = Math.floor(diff / milisecInDays);
    diff = diff - (countDays * milisecInDays);

    let countHours = Math.floor(diff / milisecInHour);
    diff = diff - (countHours * milisecInHour);

    let countMin = Math.floor(diff / milisecInMin);
    diff = diff - (countMin * milisecInMin);

    let countSec = Math.floor(diff / milisecInSec);

    days.textContent = `${countDays}`.padStart(2, '0');
    hours.textContent = `${countHours}`.padStart(2, '0');
    minutes.textContent = `${countMin}`.padStart(2, '0');
    seconds.textContent = `${countSec}`.padStart(2, '0');
}
