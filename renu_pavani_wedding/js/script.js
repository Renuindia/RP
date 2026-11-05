
/* ==========================================
   RENU & PAVANI WEDDING WEBSITE
   JAVASCRIPT
========================================== */


/* ==========================================
   OPEN THE WOODEN DOORS
========================================== */

function openWeddingDoors() {

    const entrance = document.getElementById("entrance");

    if (!entrance) {
        return;
    }

    if (entrance.classList.contains("open")) {
        return;
    }

    entrance.classList.add("open");
}


/* ==========================================
   WEDDING COUNTDOWN
   26 NOVEMBER 2026
   05:30 AM INDIAN STANDARD TIME
========================================== */

const weddingDate = new Date(
    "2026-11-26T05:30:00+05:30"
).getTime();


function updateCountdown() {

    const difference = weddingDate - Date.now();

    const countdownElements = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds")
    };

    if (!countdownElements.days) {
        return;
    }

    if (difference <= 0) {

        Object.values(countdownElements).forEach(element => {
            if (element) {
                element.textContent = "00";
            }
        });

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    countdownElements.days.textContent =
        String(days).padStart(2, "0");

    countdownElements.hours.textContent =
        String(hours).padStart(2, "0");

    countdownElements.minutes.textContent =
        String(minutes).padStart(2, "0");

    countdownElements.seconds.textContent =
        String(seconds).padStart(2, "0");
}


/* UPDATE COUNTDOWN IMMEDIATELY AND EVERY SECOND */

updateCountdown();

setInterval(updateCountdown, 1000);
