const days = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
//获取元素
const btn = document.querySelector('button');
const shizhong = document.querySelector('.shizhong');
const body = document.querySelector('body');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondsEl = document.querySelector('.seconds');
const time = document.querySelector('.time');
const shijianduan = document.querySelector('.shijianduan');
const shijian = document.querySelector('.shijian');
const dataEl = document.querySelector('.data');
let showTime = (hour) => {
        if (hour > 3 && hour <= 6) {
            shijianduan.innerHTML = '凌晨';
        } else if (hour > 6 && hour <= 8) {
            shijianduan.innerHTML = '早晨';
        } else if (hour > 8 && hour <= 11) {
            shijianduan.innerHTML = '上午';
        } else if (hour > 11 && hour <= 13) {
            shijianduan.innerHTML = '中午';
        } else if (hour > 13 && hour <= 17) {
            shijianduan.innerHTML = '下午';
        } else if (hour > 17 && hour <= 19) {
            shijianduan.innerHTML = '傍晚';
        } else if (hour > 19 && hour <= 23) {
            shijianduan.innerHTML = '晚上';
        } else if (hour > 23 && hour <= 3) {
            shijianduan.innerHTML = '深夜';
        }
    }
    //获取时间函数
let setDate = () => {
        const date = new Date();
        const month = date.getMonth(); //10
        const weeks = date.getDay(); //星期
        const day = date.getDate() //几号
        let hour = date.getHours();
        hour = hour < 10 ? '0' + hour : hour;
        let minute = date.getMinutes();
        minute = minute < 10 ? '0' + minute : minute;
        let secondes = date.getSeconds();
        secondes = secondes < 10 ? '0' + secondes : secondes;
        hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 12, 0, 360)}deg)`;
        minuteEl.style.transform = `translate(-50%, -100%) rotate(${minute*6}deg)`; //也可以暴力计算角度
        secondsEl.style.transform = `translate(-50%, -100%) rotate(${secondes*6}deg)`;
        shijian.innerHTML = `${hour}:${minute}`;
        dataEl.innerHTML = `${days[weeks]}, ${months[month]} <span class="circle">${day}</span>`
        showTime(hour);
    }
    //点击事件
btn.addEventListener('click', () => {
    btn.classList.toggle('qiehuan');
    body.classList.toggle('beijingqiehuan');
    time.classList.toggle('beijingqiehuan');
    hourEl.classList.toggle('beijingqiehuan');
});
//角度计算公式
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setDate();
setInterval(setDate, 1000);