
/* ==========================================
   RENU & PAVANI WEDDING INVITATION
   COMPLETE RESPONSIVE DESIGN
   AUTOMATIC FULL-SCREEN PRESENTATION
========================================== */


/* ==========================================
   1. GLOBAL VARIABLES
========================================== */

:root {
  --brown: #4b2818;
  --brown-light: #754526;
  --gold: #c49a50;
  --gold-light: #f5dfa9;
  --cream: #fff8e9;
  --text: #513522;
  --rose: #8b4b48;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  color: var(--text);
  background: #f7ecd7;

  font-family: Georgia, "Times New Roman", serif;
}

button,
a {
  font: inherit;
}

a {
  -webkit-tap-highlight-color: transparent;
}


/* ==========================================
   2. AUTOMATIC FULL-SCREEN SLIDES
========================================== */

.slide {
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100vh;
  height: 100svh;

  min-height: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: auto;
  overflow-x: hidden;

  padding: 25px 20px;

  text-align: center;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  transform: scale(1.025);

  z-index: 1;

  transition:
    opacity 0.7s ease,
    transform 0.7s ease,
    visibility 0.7s ease;
}

.slide.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;

  transform: scale(1);

  z-index: 2;
}


/* ==========================================
   3. COMMON TYPOGRAPHY
========================================== */

.eyebrow {
  font-family: Arial, sans-serif;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 2.5px;

  color: #9a713d;
}

.content-page h1 {
  font-size: clamp(27px, 4vw, 43px);
  color: #70421f;

  margin: 12px 0 18px;
}

.ornament {
  color: #b18a4e;
  font-size: 36px;

  margin-bottom: 10px;
}

.section-mantra {
  color: #9a6426;
  font-size: 24px;

  margin: 8px 0;
}

.gold-divider {
  width: 100px;
  height: 2px;

  background: linear-gradient(
    90deg,
    transparent,
    #b58c52,
    transparent
  );

  margin: 20px auto;
}


/* ==========================================
   4. PAGE 1 - GRAND ENTRANCE
========================================== */

.entrance {
  background:
    radial-gradient(
      ellipse at 50% 0%,
      #fffdf2 0%,
      transparent 60%
    ),
    linear-gradient(
      135deg,
      #f2dfb8,
      #fff6e4 52%,
      #e8d1a4
    );
}

.entrance-content {
  width: min(100%, 950px);

  display: flex;
  flex-direction: column;
  align-items: center;
}


/* ==========================================
   5. GANESHA ARCH
========================================== */

.ganesha-arch {
  width: 150px;
  height: 112px;

  margin-bottom: -2px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 5px solid #b98a3d;
  border-bottom: 0;

  border-radius: 100px 100px 0 0;

  background: linear-gradient(
    145deg,
    #fff7df,
    #e8ce98
  );

  box-shadow:
    0 0 0 4px #f6e7c3,
    0 5px 15px #50300f30;

  position: relative;
  z-index: 4;
}

.ganesha-arch img {
  width: 88px;
  height: 88px;

  object-fit: contain;
}

.ganesha-fallback {
  color: #855522;
  font-size: 16px;
}

.top-mantra {
  color: #95652d;

  font-size: 18px;

  margin: 12px 0 5px;
}

.entrance h1 {
  color: #70421f;

  font-size: clamp(22px, 4vw, 34px);

  margin: 5px 0 7px;
}

.entrance-instruction {
  color: #89633a;

  margin: 8px 0 17px;

  font-size: 14px;
}


/* ==========================================
   6. WOODEN DOOR FRAME
========================================== */

.door-frame {
  width: min(88vw, 690px);

  height: clamp(350px, 58vh, 590px);

  min-height: 350px;

  display: flex;

  position: relative;

  perspective: 1800px;
  isolation: isolate;

  border: 10px solid #b47d2b;
  border-radius: 5px;

  background: #482414;

  box-shadow:
    0 14px 35px #3e230f55,
    inset 0 0 0 4px #e7c078;

  overflow: visible;
}


/* ==========================================
   7. COUNTDOWN INSIDE DOORS
========================================== */

.door-inner {
  position: absolute;
  inset: 9px;

  z-index: 1;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 16px;

  text-align: center;

  color: #fff0ce;

  background:
    radial-gradient(
      ellipse at center,
      #75472d,
      #482414 78%
    );

  border: 2px solid #d5aa59;

  overflow: hidden;
}

.door-inner::before {
  content: "";

  position: absolute;
  inset: 10px;

  border: 1px solid #e7c07855;

  pointer-events: none;
}

.inside-mantra {
  color: #f2c66f;

  font-size: clamp(16px, 2.2vw, 23px);

  margin-bottom: 10px;
}

.inside-eyebrow {
  color: #e6c68c;

  font: 10px Arial, sans-serif;

  letter-spacing: 2.5px;
}

.inside-title {
  color: #ffe5ad;

  font-size: clamp(27px, 4vw, 43px);

  margin: 9px 0 16px;
}


/* COUNTDOWN BOXES */

.inside-countdown {
  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  gap: 9px;

  margin: 8px 0 15px;
}

.count-box {
  width: clamp(58px, 10vw, 88px);

  padding: 10px 4px;

  color: #4b2a16;

  background: linear-gradient(
    145deg,
    #fff0c6,
    #c99a4c
  );

  border: 1px solid #fff0c7;

  border-radius: 7px;

  box-shadow: 0 4px 12px #0004;
}

.count-box strong {
  display: block;

  font-size: clamp(20px, 3vw, 30px);
}

.count-box span {
  display: block;

  font: 10px Arial, sans-serif;

  margin-top: 4px;
}

.inside-date {
  color: #ffe3a4;

  font-size: clamp(16px, 2.5vw, 23px);

  font-weight: bold;

  letter-spacing: 1px;
}

.inside-time {
  color: #fff2d5;

  font: 14px Arial, sans-serif;

  margin-top: 7px;
}

.inside-blessing {
  color: #e5c99d;

  font-size: 13px;

  font-style: italic;

  margin-top: 13px;
}


/* ==========================================
   8. WOODEN DOORS
========================================== */

.door {
  appearance: none;
  -webkit-appearance: none;

  width: 50%;
  flex: 0 0 50%;

  height: 100%;

  position: relative;

  z-index: 3;

  display: block;

  cursor: pointer;

  border: 5px solid #d5a64d;

  background:
    repeating-linear-gradient(
      90deg,
      #2d14084d 0,
      transparent 8px,
      #ffc16e1f 15px,
      transparent 25px
    ),
    linear-gradient(
      90deg,
      #492313,
      #96552d,
      #603017,
      #a56837,
      #542713
    );

  transform-style: preserve-3d;

  transition:
    transform 2.5s cubic-bezier(.68, -.15, .25, 1.2),
    box-shadow 2s;

  backface-visibility: visible;

  box-shadow:
    inset 0 0 18px #140802a6,
    inset 0 0 5px #e8b55d;

  padding: 0;
}

.left-door {
  transform-origin: left center;

  border-right: 3px solid #e6bd69;
}

.right-door {
  transform-origin: right center;

  border-left: 3px solid #e6bd69;
}


/* WOOD GRAIN */

.door::before {
  content: "";

  position: absolute;
  inset: 0;

  background:
    repeating-linear-gradient(
      90deg,
      transparent 0,
      #ffcf8726 4px,
      transparent 9px,
      #1e0a0233 15px
    );

  pointer-events: none;
}


/* CARVED PANELS */

.door-carving {
  position: absolute;

  left: 10%;

  width: 80%;

  border: 4px solid #c89540;

  border-radius: 8px;

  background:
    repeating-linear-gradient(
      90deg,
      #572a14,
      #99582e 10px,
      #693318 20px,
      #a66a3b 30px
    );

  box-shadow:
    inset 0 0 10px #0008,
    0 0 8px #0005;
}

.top-carving {
  top: 5%;
  height: 25%;
}

.middle-carving {
  top: 36%;
  height: 28%;
}

.bottom-carving {
  bottom: 5%;
  height: 25%;
}


/* DOOR HANDLES */

.door-handle {
  position: absolute;

  top: 45%;

  width: 15px;
  height: 76px;

  border-radius: 20px;

  background: linear-gradient(
    90deg,
    #b67c23,
    #ffe18b,
    #a56c1f
  );

  box-shadow: 0 0 8px #ffdc8280;
}

.left-door .door-handle {
  right: 5%;
}

.right-door .door-handle {
  left: 5%;
}


/* DOOR HINGES */

.door-hinges {
  position: absolute;

  top: 12%;
  bottom: 12%;

  width: 7px;

  border-radius: 10px;

  background: linear-gradient(
    90deg,
    #9c671e,
    #f6d47a,
    #a16b21
  );
}

.left-door .door-hinges {
  left: 1%;
}

.right-door .door-hinges {
  right: 1%;
}


/* ==========================================
   9. DOOR OPENING ANIMATION
========================================== */

.entrance.open .left-door {
  transform: rotateY(-112deg);

  box-shadow: 0 0 20px #0003;
}

.entrance.open .right-door {
  transform: rotateY(112deg);

  box-shadow: 0 0 20px #0003;
}


/* ==========================================
   10. OPEN BUTTON AND MUSIC MESSAGE
========================================== */

.open-door-btn {
  margin-top: 20px;

  padding: 13px 28px;

  border: 2px solid #e3bd72;

  border-radius: 30px;

  background: linear-gradient(
    135deg,
    #80502b,
    #4c2917
  );

  color: #fff0ce;

  font-weight: bold;

  cursor: pointer;

  box-shadow: 0 5px 15px #41250f40;

  transition:
    transform .25s,
    background .25s;
}

.open-door-btn:hover {
  transform: translateY(-2px);

  background: #a36b34;
}

.open-door-btn:disabled {
  opacity: .7;

  cursor: default;
}

.door-scroll-hint,
.music-note {
  color: #8b6235;

  font: 12px Arial, sans-serif;

  margin-top: 12px;

  letter-spacing: .3px;
}


/* ==========================================
   11. PAGE 2 - WEDDING INVITATION
========================================== */

.invitation-page {
  background:
    radial-gradient(
      ellipse at center,
      #fffdf5,
      transparent 75%
    ),
    #f3e5ca;
}

.krish-image {
  display: block;

  width: min(35vw, 180px);

  height: 125px;

  object-fit: contain;

  margin: 5px auto 10px;

  filter: drop-shadow(0 7px 9px #68411b24);
}

.invitation-intro,
.invitation-message {
  max-width: 650px;

  line-height: 1.7;

  font-size: 16px;
}

.couple-names {
  margin: 15px 0;
}

.couple-names h2 {
  font-size: clamp(23px, 4vw, 37px);

  color: #713f20;

  margin: 6px 0;
}

.couple-names span {
  display: block;

  color: #b18a4e;

  font-size: 27px;

  margin: 3px;
}


/* EVENT HIGHLIGHTS */

.event-highlight {
  width: min(100%, 430px);

  padding: 12px 18px;

  margin: 6px 0;

  border: 1px solid #d2b276;

  border-radius: 14px;

  background: #fffaf0c9;

  box-shadow: 0 5px 16px #55341410;
}

.event-label {
  color: #9a713d;

  font: bold 11px Arial, sans-serif;

  letter-spacing: 2px;

  margin-bottom: 7px;
}

.event-highlight h2 {
  color: #754923;

  font-size: 21px;

  margin-bottom: 5px;
}

.event-highlight p:last-child {
  line-height: 1.5;
}

.muhurtham-highlight {
  border-color: #b98a58;

  background: #f8edda;
}

.invitation-signoff {
  line-height: 1.7;

  color: #80552e;
}

.invitation-signoff strong {
  font-size: 22px;
}


/* ==========================================
   12. PAGE 3 - WEDDING VENUE
========================================== */

.venue-page {
  background:
    radial-gradient(
      circle at center,
      #fffaf0,
      transparent 70%
    ),
    #ead9b9;
}

.event-detail {
  width: min(100%, 450px);

  padding: 20px;

  margin: 12px 0;

  border-bottom: 1px solid #c6a16a;
}

.event-detail h2 {
  color: #754923;

  font-size: 28px;

  margin-bottom: 8px;
}

.event-date {
  font-size: 16px;
}


/* VENUE CARD */

.venue-card {
  width: min(100%, 500px);

  margin-top: 22px;

  padding: 30px 20px;

  border: 1px solid #b58c52;

  border-radius: 16px;

  background: #fffcefdd;

  box-shadow: 0 8px 25px #5534141f;
}

.venue-icon {
  font-size: 32px;

  color: #a87936;

  margin-bottom: 8px;
}

.venue-card h2 {
  color: #9a713d;

  margin: 10px 0;

  font-size: 24px;
}

.venue-card p:last-of-type {
  font-size: 17px;
}

.map-button {
  display: inline-block;

  margin-top: 20px;

  padding: 13px 22px;

  border-radius: 30px;

  background: #754923;

  color: white;

  text-decoration: none;

  font-weight: bold;
}

.map-button:hover {
  background: #a36b34;
}


/* ==========================================
   13. PAGE 4 - FINAL CELEBRATION
========================================== */

.blessings-page {
  background:
    radial-gradient(
      circle at top,
      #fffdf6,
      transparent 70%
    ),
    #f0dfc2;
}

.blessing-card {
  width: min(100%, 850px);

  padding: clamp(20px, 3vw, 38px);

  border: 1px solid #b58c52;

  border-radius: 22px;

  background: #fff9eced;

  box-shadow: 0 12px 35px #462a1226;
}

.blessing-card h1 {
  margin: 12px auto 15px;
}


/* COUPLE IMAGE - HALF WIDTH */

.final-couple-image {
  display: block;

  width: 50%;

  max-width: 420px;

  max-height: 300px;

  object-fit: contain;

  margin: 18px auto;

  border-radius: 14px;

  filter: drop-shadow(0 8px 12px #462a1220);
}

.heartfelt-message {
  max-width: 600px;

  margin: 12px auto;

  font-size: 19px;

  line-height: 1.8;

  color: #65452e;

  white-space: pre-line;
}

.final-names {
  color: #754923;

  font-size: clamp(23px, 4vw, 35px);

  margin-top: 20px;
}

.final-names span {
  color: #b18a4e;

  padding: 0 6px;
}

.final-date {
  color: #8b6030;

  margin-top: 14px;

  font-weight: bold;

  font-size: 17px;
}

.closing-line {
  margin-top: 15px;

  color: #9a713d;

  font-style: italic;

  line-height: 1.7;
}


/* ==========================================
   14. MOBILE RESPONSIVE DESIGN
========================================== */

@media (max-width: 600px) {

  .slide {
    padding: 18px 12px;

    min-height: 0;
  }

  .ganesha-arch {
    width: 115px;

    height: 85px;
  }

  .ganesha-arch img {
    width: 70px;

    height: 70px;
  }

  .entrance h1 {
    font-size: 22px;
  }

  .door-frame {
    width: 94vw;

    height: 48svh;

    min-height: 330px;

    border-width: 7px;
  }

  .door {
    border-width: 3px;
  }

  .door-carving {
    border-width: 2px;
  }

  .door-handle {
    width: 10px;

    height: 54px;
  }

  .door-inner {
    inset: 6px;

    padding: 8px 3px;
  }

  .inside-countdown {
    gap: 5px;
  }

  .count-box {
    width: 56px;

    padding: 8px 2px;
  }

  .count-box strong {
    font-size: 19px;
  }

  .count-box span {
    font-size: 9px;
  }

  .inside-eyebrow {
    font-size: 8px;

    letter-spacing: 1px;
  }

  .inside-blessing {
    font-size: 10px;
  }

  .krish-image {
    width: 125px;

    height: 100px;
  }

  .invitation-intro,
  .invitation-message {
    font-size: 14px;
  }

  .couple-names h2 {
    font-size: 25px;
  }

  .event-highlight {
    padding: 9px 12px;
  }

  .event-highlight h2 {
    font-size: 19px;
  }

  .venue-card {
    padding: 24px 15px;
  }

  .final-couple-image {
    width: 65%;

    max-height: 220px;
  }

  .heartfelt-message {
    font-size: 16px;
  }

  .final-names {
    font-size: 24px;
  }

  .final-date {
    font-size: 14px;
  }

}


/* ==========================================
   15. REDUCED MOTION ACCESSIBILITY
========================================== */

@media (prefers-reduced-motion: reduce) {

  .slide {
    transition: none;
  }

  .door {
    transition-duration: .01ms;
  }

}
