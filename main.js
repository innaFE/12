const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const timerBlock = document.querySelector('.timer');

function Timer() {
    this.startTime  = '';
    this.stopTime = '';
    this.interval = '';
}

Timer.prototype.start = () => {
    startBtn.classList.add('btn--active');
    this.startTime = new Date().getTime();
    timerBlock.textContent = 'Timer is ON. Please click to stop';
}

Timer.prototype.stop = () => {
    stopBtn.classList.add('btn--active');
    this.stopTime = new Date().getTime();
    this.interval = this.stopTime - this.startTime;
    timerBlock.textContent = `${this.interval}ms have passed`;
    console.log(`${this.interval}ms`);
};

let timer1 = new Timer();

startBtn.addEventListener('click', timer1.start);
stopBtn.addEventListener('click', timer1.stop);