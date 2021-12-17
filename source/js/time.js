const year = document.querySelector('.year');
const time = document.querySelector('.time');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const loading = document.querySelector('.loading');
const countdown = document.querySelector('.countdown');
let nowyear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${nowyear + 1} 00:00:00`);
year.innerHTML = `${nowyear+1}`;


function updateCountdown() {
    const nowTime = new Date();
    const relective = newYearTime - nowTime;
    let day = Math.floor(relective / 1000 / 60 / 60 / 24);
    day = day >= 10 ? day : `0${day}`; //bling
    let hour = Math.floor(relective / 1000 / 60 / 60 % 24);
    hour = hour >= 10 ? hour : `0${hour}`; //bling
    let minute = Math.floor(relective / 1000 / 60 % 60);
    minute = minute >= 10 ? minute : `0${minute}`; //bling
    let second = Math.floor(relective / 1000 % 60);
    second = second >= 10 ? second : `0${second}`; //bling
    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
}
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000); //嘿嘿
setInterval(updateCountdown, 1000);