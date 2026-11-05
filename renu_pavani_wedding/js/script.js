
function openWeddingDoors() {
    const entrance = document.getElementById("entrance");

    if (entrance.classList.contains("open")) {
        return;
    }

    entrance.classList.add("open");

    setTimeout(function () {
        document.getElementById("page2").scrollIntoView({
            behavior: "smooth"
        });
    }, 2600);
}


// COUNTDOWN TO 26 NOVEMBER 2026, 5:30 AM IST
const weddingDate = new Date("2026-11-26T05:30:00+05:30").getTime();

function updateCountdown() {
    const now = Date.now();
    const difference = weddingDate - now;

    const daysElement = document.getElementById("days");
    if (!daysElement) return;

    if (difference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
