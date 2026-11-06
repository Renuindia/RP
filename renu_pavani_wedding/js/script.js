
/* ==========================================
   RENU & PAVANI WEDDING INVITATION
   DOOR OPENING + BACKGROUND MUSIC
   MANUAL SCROLLING
========================================== */

(() => {

  "use strict";

  /* ======================================
     WEDDING MUHURTAM - IST
     26 NOVEMBER 2026, 04:40 AM
  ====================================== */

  const weddingDate = new Date(
    "2026-11-26T04:40:00+05:30"
  ).getTime();


  /* ======================================
     HTML ELEMENTS
  ====================================== */

  const entrance = document.getElementById("entrance");

  const openButton = document.getElementById("openDoorBtn");

  const scrollHint = document.getElementById("scrollHint");

  const musicNote = document.getElementById("musicNote");

  const music = document.getElementById("weddingMusic");

  let doorsOpened = false;

  let countdownTimer = null;


  /* ======================================
     COUNTDOWN
  ====================================== */

  function showCountdown() {

    const remaining = weddingDate - Date.now();

    const elements = {
      days: document.getElementById("days"),
      hours: document.getElementById("hours"),
      minutes: document.getElementById("minutes"),
      seconds: document.getElementById("seconds")
    };

    if (remaining <= 0) {

      Object.values(elements).forEach(element => {
        if (element) element.textContent = "00";
      });

      if (countdownTimer) {
        clearInterval(countdownTimer);
      }

      return;
    }

    const days = Math.floor(remaining / 86400000);

    const hours = Math.floor(
      (remaining % 86400000) / 3600000
    );

    const minutes = Math.floor(
      (remaining % 3600000) / 60000
    );

    const seconds = Math.floor(
      (remaining % 60000) / 1000
    );

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
     BACKGROUND MUSIC
  ====================================== */

  function startWeddingMusic() {

    if (!music) {

      console.error("Wedding music element not found.");

      if (musicNote) {
        musicNote.textContent = "Wedding music element not found.";
      }

      return;
    }

    /*
      Do not call load() here.
      Start playback directly from the user's click.
    */

    music.volume = 0.75;
    music.loop = true;

    const playPromise = music.play();

    if (playPromise !== undefined) {

      playPromise.then(() => {

        console.log("Wedding music started successfully.");

        if (musicNote) {
          musicNote.textContent =
            "♫ Wedding music is playing in the background";
        }

      }).catch(error => {

        console.error("Wedding music playback failed:", error);

        if (musicNote) {
          musicNote.textContent =
            "Music playback failed: " + error.message;
        }

      });

    }

  }


  /* ======================================
     MUSIC ERROR DIAGNOSTICS
  ====================================== */

  if (music) {

    music.addEventListener("error", () => {

      const mediaError = music.error;

      console.error(
        "Audio loading error:",
        mediaError ? mediaError.code : "Unknown"
      );

      if (musicNote) {
        musicNote.textContent =
          "Unable to load wedding music. Check audio file and format.";
      }

    });

    music.addEventListener("ended", () => {

      console.log("Wedding music ended.");

    });

  }


  /* ======================================
     OPEN WEDDING DOORS
  ====================================== */

  function openWeddingDoors() {

    if (doorsOpened) {
      return;
    }

    doorsOpened = true;

    /*
      Start music immediately within
      the original user click event.
    */

    startWeddingMusic();

    /*
      Open both wooden doors.
    */

    entrance.classList.add("open");

    /*
      Update button.
    */

    openButton.textContent =
      "The Celebration Awaits";

    openButton.disabled = true;

    /*
      Start countdown.
    */

    showCountdown();

    countdownTimer = window.setInterval(
      showCountdown,
      1000
    );

    /*
      Update scroll message.
    */

    if (scrollHint) {

      scrollHint.textContent =
        "Doors are open! Scroll down to discover our invitation ↓";

    }

  }


  /* ======================================
     MAIN BUTTON CLICK
  ====================================== */

  openButton.addEventListener(
    "click",
    openWeddingDoors
  );


  /* ======================================
     CLICK ON WOODEN DOORS
  ====================================== */

  document.querySelectorAll(".door").forEach(door => {

    door.addEventListener(
      "click",
      openWeddingDoors
    );

  });


  /* ======================================
     INITIALIZATION
  ====================================== */

  showCountdown();

})();
