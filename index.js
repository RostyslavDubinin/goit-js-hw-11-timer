
class CountdownTimer {
    constructor({ selector,  targetDate, onTick}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.onTick = onTick;

    }
    start() { 
        const targetDate = new Date("jun 17, 2021 12:00:00");
        setInterval (() => {
            const currentTime = Date.now();
            const deltaTime = targetDate - currentTime;
            const timeUpdate = this.getTimeComponents(deltaTime);
            

            
            this.onTick(timeUpdate);
        }, 1000);
    }


    pad(value) {
        return String(value).padStart(2, '0');
    }
    
    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
          
        return {days, hours, mins, secs };
    } 

    

}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
    onTick: updateClockFace
  });

  timer.start();

  const daysSpan = document.querySelector('[data-value="days"]');
  const hoursSpan = document.querySelector('[data-value="hours"]');
  const minutesSpan = document.querySelector('[data-value="mins"]');
  const secondsSpan = document.querySelector('[data-value="secs"]');


function updateClockFace({ days, hours, mins, secs }) {
    daysSpan.textContent = `${days}`;
    hoursSpan.textContent = `${hours}`;
    minutesSpan.textContent = `${mins}`;
    secondsSpan.textContent = `${secs}`;
}; 

