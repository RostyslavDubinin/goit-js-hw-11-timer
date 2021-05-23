
class CountdownTimer {
    constructor({ onTick }) {
        this.onTick = onTick;
    }
    start() { 
        const startTime = new Date("jun 17, 2021 12:00:00");
        setInterval (() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
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
    onTick: updateClockFace,
  });

  timer.start();

function updateClockFace({ days, hours, mins, secs }) {
    document.querySelector('[data-value="days"]').innerHTML = `${days}`;
    document.querySelector('[data-value="hours"]').innerHTML = `${hours}`;
    document.querySelector('[data-value="mins"]').innerHTML = `${mins}`;
    document.querySelector('[data-value="secs"]').innerHTML = `${secs}`;
}; 

