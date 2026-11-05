/* ==========================================
   RENU & PAVANI WEDDING INVITATION
   DOOR OPENING + COUNTDOWN
========================================== */

(() => {

    "use strict";

    /* ======================================
       WEDDING DATE
       26 NOVEMBER 2026
       05:30 AM INDIAN STANDARD TIME
    ====================================== */

    const weddingDate = new Date(
        "2026-11-26T05:30:00+05:30"
    ).getTime();


    /* ======================================
       HTML ELEMENTS
    ====================================== */

    const entrance = document.getElementById("entrance");

    const openButton = document.getElementById("openDoorBtn");

    const scrollHint = document.getElementById("scrollHint");

    const countdownIds = [
        "days",
        "hours",
        "minutes",
        "seconds"
    ];

    let countdownTimer = null;

    let doorsOpened = false;


    /* ======================================
       UPDATE COUNTDOWN
    ====================================== */

    function showCountdown() {

        const remaining = weddingDate - Date.now();

        const elements = {
            days: document.getElementById("days"),
            hours: document.getElementById("hours"),
            minutes: document.getElementById("minutes"),
            seconds: document.getElementById("seconds")
        };


        /* WEDDING DAY REACHED */

        if (remaining <= 0) {

            countdownIds.forEach(id => {

                if (elements[id]) {
                    elements[id].textContent = "00";
                }

            });

            if (scrollHint) {

                scrollHint.textContent =
                    "The wedding day is here! Scroll down for the invitation.";

            }

            if (countdownTimer) {
                clearInterval(countdownTimer);
            }

            return;
        }


        /* CALCULATE REMAINING TIME */

        const days = Math.floor(
            remaining / 86400000
        );

        const hours = Math.floor(
            (remaining % 86400000) / 3600000
        );

        const minutes = Math.floor(
            (remaining % 3600000) / 60000
        );

        const seconds = Math.floor(
            (remaining % 60000) / 1000
        );


        /* DISPLAY COUNTDOWN */

        elements.days.textContent =
            String(days).padStart(2, "0");

        elements.hours.textContent =
            String(hours).padStart(2, "0");

        elements.minutes.textContent =
            String(minutes).padStart(2, "0");

        elements.seconds.textContent =
            String(seconds).padStart(2, "0");

    }


    /* ======================================
       OPEN WEDDING DOORS
    ====================================== */

    function openWeddingDoors() {

        if (doorsOpened) {
            return;
        }

        doorsOpened = true;


        /* START DOOR ANIMATION */

        entrance.classList.add("open");


        /* UPDATE BUTTON */

        openButton.textContent =
            "The Celebration Awaits";

        openButton.disabled = true;


        /* START COUNTDOWN AFTER CLICK */

        showCountdown();

        countdownTimer = window.setInterval(
            showCountdown,
            1000
        );


        /* UPDATE SCROLL MESSAGE */

        if (scrollHint) {

            scrollHint.textContent =
                "Doors are open! Scroll down to discover the invitation ↓";

        }

    }


    /* ======================================
       BUTTON CLICK EVENT
    ====================================== */

    openButton.addEventListener(
        "click",
        openWeddingDoors
    );


    /* ======================================
       CLICK DIRECTLY ON WOODEN DOORS
    ====================================== */

    document.querySelectorAll(".door").forEach(door => {

        door.addEventListener(
            "click",
            openWeddingDoors
        );

    });

})();
