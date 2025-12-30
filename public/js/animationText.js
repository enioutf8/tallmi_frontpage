gsap.registerPlugin(SplitText);

/* =========================
   VARIÁVEIS
========================= */

let split;
let animation;

let split2;
let animation2;

/* =========================
   ANIMAÇÕES - TEXT
========================= */

function animateChars(delay = 0) {
  animation && animation.revert();

  animation = gsap.from(split.chars, {
    x: 150,
    opacity: 0,
    duration: 3,
    ease: "power4.out",
    stagger: 0.04,
    delay,
    onStart: () => {
      gsap.set(".text", { autoAlpha: 1 });
    },
  });
}

function animateWords() {
  animation && animation.revert();

  animation = gsap.from(split.words, {
    y: -100,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 0.7,
    ease: "back.out(1.7)",
    stagger: 0.15,
  });
}

function animateLines() {
  animation && animation.revert();

  animation = gsap.from(split.lines, {
    rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 0.1,
    ease: "power3.out",
    stagger: 0.25,
  });
}

/* =========================
   ANIMAÇÃO - TEXT2 (LINES)
========================= */

function animateLinesText2(delay = 0) {
  animation2 && animation2.revert();

  animation2 = gsap.from(split2.lines, {
    rotationX: -90,
    transformOrigin: "50% 50% -120px",
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    delay,
    onStart: () => {
      gsap.set(".text2", { autoAlpha: 1 });
    },
  });
}

/* =========================
   SETUP
========================= */

function setup() {
  split && split.revert();
  animation && animation.revert();

  gsap.set(".text", { autoAlpha: 0 });

  split = SplitText.create(".text", {
    type: "chars,words,lines",
  });

  animateChars(0.3);
}

function setupText2() {
  split2 && split2.revert();
  animation2 && animation2.revert();

  gsap.set(".text2", { autoAlpha: 0 });

  split2 = SplitText.create(".text2", {
    type: "lines",
  });

  // anima automaticamente ao renderizar
  animateLinesText2(0.6);
}

/* =========================
   INIT
========================= */

window.addEventListener("load", () => {
  setup();
  setupText2();
});

window.addEventListener("resize", () => {
  setup();
  setupText2();
});
