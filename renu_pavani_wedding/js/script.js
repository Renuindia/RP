
/* ==========================================
   RENU & PAVANI WEDDING INVITATION
   DOOR OPENING + MUSIC + AUTO SLIDESHOW
========================================== */

(() => {

  "use strict";


  /* ======================================
     WEDDING MUHURTAM
     26 NOVEMBER 2026
     04:40 AM IST
  ====================================== */

  const weddingDate = new Date(
    "2026-11-26T04:40:00+05:30"
  ).getTime();


  /* ======================================
     ELEMENTS
  ====================================== */

  const entrance = document.getElementById("entrance");

  const openButton = document.getElementById("openDoorBtn");

  const scrollHint = document.getElementById("scrollHint");

  const musicNote = document.getElementById("musicNote");

  const music = document.getElementById("weddingMusic");

  const slides = Array.from(
    document.querySelectorAll(".slide")
  );


  /* ======================================
     SETTINGS
  ====================================== */

  const SLIDE_INTERVAL = 2000;

  const DOOR_ANIMATION_DELAY = 2600;

  let countdownTimer = null;

  let slideTimer = null;

  let doorsOpened = false;

  let currentSlide = 0;


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

        if (element) {
          element.textContent = "00";
        }

      });

      if (countdownTimer) {
        clearInterval(countdownTimer);
      }

      return;
    }


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
     START WEDDING MUSIC
  ====================================== */

  async function startWeddingMusic() {

    if (!music) {
      return;
    }

    try {

      music.volume = 0.65;

      music.loop = true;

      music.load();

      await music.play();

      if (musicNote) {

        musicNote.textContent =
          "♫ Our wedding celebration music is playing";

      }

    } catch (error) {

      console.error(
        "Wedding music playback failed:",
        error
      );

      if (musicNote) {

        musicNote.textContent =
          "Music could not play. Please check the audio file format and path.";

      }

    }

  }


  /* ======================================
     CHANGE PRESENTATION PAGE
  ====================================== */

  function showSlide(index) {

    if (index < 0 || index >= slides.length) {
      return;
    }

    slides.forEach((slide, i) => {

      slide.classList.toggle(
        "active",
        i === index
      );

    });

    currentSlide = index;

  }


  /* ======================================
     AUTOMATIC SLIDESHOW
     EVERY 2 SECONDS
  ====================================== */

  function startAutomaticSlideshow() {

    if (slideTimer) {
      clearInterval(slideTimer);
    }

    /*
      Wait for the wooden doors to finish opening.
    */

    window.setTimeout(() => {

      showSlide(1);

      slideTimer = window.setInterval(() => {

        const nextSlide = currentSlide + 1;

        /*
          Stop at the final wedding page.
        */

        if (nextSlide >= slides.length) {

          clearInterval(slideTimer);

          slideTimer = null;

          showSlide(slides.length - 1);

          return;
        }

        showSlide(nextSlide);

      }, SLIDE_INTERVAL);

    }, DOOR_ANIMATION_DELAY);

  }


  /* ======================================
     OPEN WEDDING DOORS
  ====================================== */

  function openWeddingDoors() {

    if (doorsOpened) {
      return;
    }

    doorsOpened = true;


    /* OPEN BOTH DOORS */

    entrance.classList.add("open");


    /* UPDATE BUTTON */

    openButton.textContent =
      "The Celebration Awaits";

    openButton.disabled = true;


    /* START COUNTDOWN */

    showCountdown();

    countdownTimer = window.setInterval(
      showCountdown,
      1000
    );


    /* START MUSIC */

    startWeddingMusic();


    /* UPDATE MESSAGE */

    if (scrollHint) {

      scrollHint.textContent =
        "Doors are open! Welcome to our wedding celebration.";

    }


    /* START AUTOMATIC PAGE TRANSITIONS */

    startAutomaticSlideshow();

  }


  /* ======================================
     OPEN USING MAIN BUTTON
  ====================================== */

  openButton.addEventListener(
    "click",
    openWeddingDoors
  );


  /* ======================================
     OPEN BY CLICKING WOODEN DOORS
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

  showSlide(0);


})();
