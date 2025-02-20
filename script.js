function currentTime() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString();
    }
}

function updateClock() {
    const d = new Date();
    let utchr = d.getUTCHours();
    const timeDiff = -8; // Change this value for different time zones
    let adjTimeDiff = utchr + timeDiff;
    let timeZone;

    if (adjTimeDiff >= 24) adjTimeDiff -= 24;
    else if (adjTimeDiff < 0) adjTimeDiff += 24;

    if (timeDiff === -8) timeZone = "PST (Pacific Standard Time)";
    else if (timeDiff === -5) timeZone = "EST (Eastern Standard Time)";
    else timeZone = "UTC";

    const utcClock = document.getElementById('utcClock');
    if (utcClock) {
        utcClock.textContent = `${adjTimeDiff}:00 ${timeZone}`;
    }
}

setInterval(currentTime, 1000);
setInterval(updateClock, 1000);

document.addEventListener("DOMContentLoaded", function() {
    // Get all selectable cells
    const selectableCells = document.querySelectorAll(".selectable");

    // Add click event to toggle selection
    selectableCells.forEach(cell => {
        cell.addEventListener("click", function() {
            // Toggle highlight class
            this.classList.toggle("highlight");
        });
    });
});