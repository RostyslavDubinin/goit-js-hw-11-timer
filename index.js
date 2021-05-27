
class CountdownTimer {
    constructor({ selector,  targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        

    }
    start() { 
        
        setInterval (() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const timeUpdate = this.getTimeComponents(deltaTime);
            

            
            this.updateClockFace(timeUpdate);
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
    


    updateClockFace({ days, hours, mins, secs }) {
    const clock = document.querySelector(this.selector);
    const daysSpan = clock.querySelector('[data-value="days"]');
    const hoursSpan = clock.querySelector('[data-value="hours"]');
    const minutesSpan = clock.querySelector('[data-value="mins"]');
    const secondsSpan = clock.querySelector('[data-value="secs"]');

    
        daysSpan.textContent = `${days}`;
        hoursSpan.textContent = `${hours}`;
        minutesSpan.textContent = `${mins}`;
        secondsSpan.textContent = `${secs}`;
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date("jun 17, 2021 12:00:00"),
  });

  timer.start();

