const updateClock = () => {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const second = now.getSeconds().toString().padStart(2, 0);

    const meridium = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const timeString = `${hours}:${minutes}:${second} ${meridium}`;

    const clockTitle = document.getElementById("clock-title");

    clockTitle.textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);