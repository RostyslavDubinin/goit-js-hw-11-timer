const targetDate = new Date("jun 17, 2021 12:00:00").getTime();
const timer = setInterval(function() {
const now = new Date().getTime();
const time = targetDate - now;
    
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    
    document.querySelector('[data-value="days"]').innerHTML = days;
    document.querySelector('[data-value="hours"]').innerHTML = ("0"+hours).slice(-2);
    document.querySelector('[data-value="mins"]').innerHTML = ("0"+mins).slice(-2);
    document.querySelector('[data-value="secs"]').innerHTML = ("0"+secs).slice(-2);
    
    
}, 1000);