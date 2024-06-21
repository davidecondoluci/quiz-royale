import "./style.css";

import gsap from "gsap";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.store("game", {
  topics: [
    { label: "🎥 Cinema", slug: "cinema" },
    { label: "🔢 Matematica", slug: "matematica" },
    { label: "🧜‍♂️ Mitologia", slug: "mitologia" },
    { label: "🎨 Design", slug: "design" },
    { label: "🏎️ Automobili", slug: "automobili" },
    { label: "🚀 Astronomia", slug: "astronomia" },
    { label: "🖼️ Arte", slug: "arte" },
    { label: "📚 Letteratura", slug: "letteratura" },
    { label: "💼 Economia", slug: "economia" },
    { label: "📺 Serie TV", slug: "serie-tv" },
    { label: "🍃 Natura", slug: "natura" },
    { label: "🦸‍♂️ Fumetti", slug: "fumetti" },
    { label: "🏛️ Storia", slug: "storia" },
    { label: "🔬 Fisica", slug: "fisica" },
    { label: "⚽ Sport", slug: "sport" },
    { label: "💻 Tecnologia", slug: "tecnologia" },
    { label: "🍕 Gastronomia", slug: "gastronomia" },
    { label: "⚖️ Diritto", slug: "diritto" },
    { label: "🐈 Animali", slug: "animali" },
    { label: "🎵 Musica", slug: "musica" },
    { label: "🌍 Geografia", slug: "geografia" },
    { label: "👕 Moda", slug: "moda" },
    { label: "🧪 Scienze", slug: "scienze" },
  ],
});

function flashDamage(target) {
  gsap.fromTo(
    target,
    { opacity: 1 },
    {
      opacity: 0,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      ease: "none",
    }
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  if (startButton) {
    gsap.to(startButton, {
      scale: 1.05,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }

  const bossImg = document.getElementById("boss-img");
  if (bossImg) {
    gsap.to("#boss-img", {
      y: "5%",
      scaleY: 1,
      repeat: -1,
      duration: 1,
      ease: "sine.inOut",
      yoyo: true,
    });
  }

  const playerImg = document.getElementById("player-img");
  if (playerImg) {
    gsap.to("#player-img", {
      x: "5%",
      delay: 0.5,
      scaleX: 1,
      repeat: -1,
      duration: 1,
      ease: "sine.inOut",
      yoyo: true,
    });
  }
});

Alpine.data("quiz", () => ({
  state: "game",
  bossHp: 30,
  playerHp: 10,
  bossDamage: 0,
  playerDamage: 0,
  currentQuestionIndex: 0,
  questionCounter: 1,
  playerImage: null,
  init() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const topic = urlParams.get("topic");

    if (!topic) {
      window.location.href = "topics.html";
    }

    fetch(`./data/${topic}.json`)
      .then((response) => {
        if (!response.ok) {
          window.location.href = "topics.html";
        }
        return response.json();
      })
      .then((data) => {
        this.questions = data.questions;
        this.playerImage = data.playerImage;
      })
      .catch(function (err) {
        window.location.href = "topics.html";
      });
  },
  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  },
  answerQuestion(answer) {
    if (answer === this.currentQuestion.risposta_corretta) {
      this.bossHp -= 1;
      this.bossDamage += 1;
      flashDamage("#boss-img");
    } else {
      this.playerHp -= 1;
      this.playerDamage += 1;
      flashDamage("#player-img");
    }

    this.currentQuestionIndex++;
    this.questionCounter++;

    if (this.questionCounter > 30) {
      this.state = "win";
    } else if (this.playerHp <= 0) {
      this.state = "lose";
    }
  },
  restartGame() {
    this.state = "game";
    this.bossHp = 30;
    this.playerHp = 10;
    this.bossDamage = 0;
    this.playerDamage = 0;
    this.currentQuestionIndex = 0;
    this.questionCounter = 1;
  },
  changeTopic() {
    window.location.href = "topics.html";
  },
  exitGame() {
    window.location.href = "index.html";
  },
}));

const logo = {
  main: document.querySelector("#logo"),
  letters: document.querySelectorAll("#logo path:not(#sword)"),
  l: document.querySelector("#l"),
  sword: document.querySelector("#sword"),
};

const timeline = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "power4.inOut",
  },
});

timeline
  .set(logo.sword, { opacity: 0 })
  .from(logo.letters, {
    opacity: 0,
    y: "-200%",
    stagger: 0.1,
  })
  .to("#logo g#left path", {
    x: -40,
    stagger: -0.05,
    repeat: 1,
    duration: 0.2,
    yoyo: true,
  })
  .to(
    "#logo g#right path",
    {
      x: 40,
      duration: 0.2,
    },
    "<"
  )

  .fromTo(
    logo.sword,
    {
      opacity: 0,
      y: "200%",
    },
    {
      ease: "back.out(1.5)",
      opacity: 1,
      y: 0,
    },
    "<"
  )
  .to(
    logo.l,
    {
      ease: "back.out(1.5)",
      opacity: 0,
      y: "-200%",
    },
    "<+0.1"
  )
  .to(
    "#logo g#right path",
    {
      x: 0,
      duration: 1,
    },
    "-=0.5"
  );

Alpine.start();
