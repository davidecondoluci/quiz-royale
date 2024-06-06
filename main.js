import "./style.css";

import gsap from "gsap";
import Alpine from "alpinejs";

window.Alpine = Alpine;

gsap.to("#boss-img", {
  y: "5%",
  scaleY: 1.02,
  repeat: -1,
  duration: 1,
  ease: "sine.inOut",
  yoyo: true,
});

gsap.to("#player-img", {
  y: "5%",
  delay: 0.5,
  scaleY: 1.02,
  repeat: -1,
  duration: 1,
  ease: "sine.inOut",
  yoyo: true,
});

Alpine.data("quiz", () => ({
  state: "game",
  bossHp: 30,
  playerHp: 10,
  bossDamage: 0,
  playerDamage: 0,
  currentQuestionIndex: 0,
  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  },
  answerQuestion(answer) {
    if (answer === this.currentQuestion.risposta_corretta) {
      this.bossHp -= 1;
      this.bossDamage += 1;
    } else {
      this.playerHp -= 1;
      this.playerDamage += 1;
    }

    if (this.bossHp <= 0) {
      this.state = "win";
    } else if (this.playerHp <= 0) {
      this.state = "lose";
    }

    this.currentQuestionIndex++;
  },
  questions: [
    {
      domanda: "Quale evento segnò la fine della Prima Guerra Mondiale?",
      risposte: [
        "Pace di Westphalia",
        "Trattato di Versailles",
        "Accordo di Monaco",
        "Conferenza di Yalta",
      ],
      risposta_corretta: "Trattato di Versailles",
    },
    {
      domanda: "Chi fu il primo presidente degli Stati Uniti?",
      risposte: [
        "George Washington",
        "John Adams",
        "Thomas Jefferson",
        "Abraham Lincoln",
      ],
      risposta_corretta: "George Washington",
    },
    {
      domanda: "In che anno ebbe luogo la Rivoluzione Francese?",
      risposte: ["1815", "1789", "1765", "1848"],
      risposta_corretta: "1789",
    },
    {
      domanda: "Chi fu il fondatore dell'Impero Romano?",
      risposte: ["Marco Aurelio", "Nerone", "Augusto", "Caio Giulio Cesare"],
      risposta_corretta: "Augusto",
    },
    {
      domanda:
        "Chi guidò la marcia che portò alla fine dell'apartheid in Sudafrica?",
      risposte: [
        "Desmond Tutu",
        "F.W. de Klerk",
        "Oliver Tambo",
        "Nelson Mandela",
      ],
      risposta_corretta: "Nelson Mandela",
    },
    {
      domanda: "Qual è stato il periodo della Guerra Fredda?",
      risposte: ["1947-1991", "1914-1918", "1939-1945", "1989-1992"],
      risposta_corretta: "1947-1991",
    },
    {
      domanda: "Chi era il re d'Inghilterra durante la Rivoluzione Americana?",
      risposte: ["Giorgio II", "Giorgio IV", "Edoardo VII", "Giorgio III"],
      risposta_corretta: "Giorgio III",
    },
    {
      domanda: "Qual è stata la prima dinastia cinese?",
      risposte: ["Xia", "Shang", "Zhou", "Han"],
      risposta_corretta: "Xia",
    },
    {
      domanda:
        "Chi era il leader dell'Unione Sovietica al tempo della Seconda Guerra Mondiale?",
      risposte: [
        "Vladimir Lenin",
        "Leon Trotsky",
        "Joseph Stalin",
        "Nikita Khrushchev",
      ],
      risposta_corretta: "Joseph Stalin",
    },
    {
      domanda: "Chi ha scritto il Manifesto Comunista insieme a Karl Marx?",
      risposte: [
        "Friedrich Engels",
        "Joseph Stalin",
        "Leon Trotsky",
        "Vladimir Lenin",
      ],
      risposta_corretta: "Friedrich Engels",
    },

    {
      domanda: "Qual è stata la prima civiltà mesopotamica?",
      risposte: ["Assiri", "Babilonesi", "Sumeri", "Ittiti"],
      risposta_corretta: "Sumeri",
    },
    {
      domanda: "Chi era il primo imperatore romano?",
      risposte: ["Augusto", "Tiberio", "Nerone", "Caligola"],
      risposta_corretta: "Augusto",
    },
    {
      domanda:
        "Quale città fu distrutta dall'eruzione del Vesuvio nel 79 d.C.?",
      risposte: ["Atene", "Roma", "Pompei", "Cartagine"],
      risposta_corretta: "Pompei",
    },
    {
      domanda:
        "Qual è stato l'evento che ha scatenato la Prima Guerra Mondiale?",
      risposte: [
        "La caduta del muro di Berlino",
        "La rivoluzione russa",
        "L'attacco di Pearl Harbor",
        "L'assassinio di Francesco Ferdinando",
      ],
      risposta_corretta: "L'assassinio di Francesco Ferdinando",
    },
    {
      domanda: "Chi ha scritto l'opera epica 'Iliade'?",
      risposte: ["Omero", "Esiodo", "Virgilio", "Sofocle"],
      risposta_corretta: "Omero",
    },
    {
      domanda:
        "Quale fu l'effetto più significativo della Rivoluzione Industriale?",
      risposte: [
        "Fine della schiavitù",
        "Trasformazione economica e sociale",
        "Scoperta dell'America",
        "Espansione dell'Impero Romano",
      ],
      risposta_corretta: "Trasformazione economica e sociale",
    },
    {
      domanda:
        "Chi era la regina d'Egitto famosa per il suo fascino e ingegno politico?",
      risposte: ["Cleopatra", "Nefertiti", "Hatshepsut", "Iside"],
      risposta_corretta: "Cleopatra",
    },
    {
      domanda: "In quale anno fu fondata la città di Roma secondo la leggenda?",
      risposte: ["476 d.C.", "509 a.C.", "753 a.C.", "27 a.C."],
      risposta_corretta: "753 a.C.",
    },
    {
      domanda: "Chi era il leader della Rivoluzione Russa del 1917?",
      risposte: [
        "Iosif Stalin",
        "Niccolò Machiavelli",
        "Vladimir Lenin",
        "Leon Trotsky",
      ],
      risposta_corretta: "Vladimir Lenin",
    },
    {
      domanda:
        "Quale impero si estendeva dall'Asia orientale all'Europa orientale e durò per oltre 1000 anni?",
      risposte: [
        "Impero bizantino",
        "Impero persiano",
        "Impero mongolo",
        "Impero ottomano",
      ],
      risposta_corretta: "Impero bizantino",
    },
    {
      domanda:
        "Chi è stato il primo imperatore cinese a unificare il paese nel 221 a.C.?",
      risposte: ["Qin Shi Huang", "Mao Zedong", "Sun Tzu", "Confucio"],
      risposta_corretta: "Qin Shi Huang",
    },
    {
      domanda:
        "Quale città antica fu conosciuta come la 'Città dei Re' e fu capitale dell'antico Egitto per molti secoli?",
      risposte: ["Luxor", "Memphis", "Giza", "Tebe"],
      risposta_corretta: "Tebe",
    },
    {
      domanda:
        "Chi era il leader della resistenza francese durante la Seconda Guerra Mondiale?",
      risposte: [
        "Philippe Pétain",
        "Jacques Chirac",
        "Charles de Gaulle",
        "Napoleone Bonaparte",
      ],
      risposta_corretta: "Charles de Gaulle",
    },
    {
      domanda:
        "In quale anno è stata firmata la Dichiarazione d'Indipendenza degli Stati Uniti?",
      risposte: ["1804", "1812", "1789", "1776"],
      risposta_corretta: "1776",
    },
    {
      domanda:
        "Qual è stata la battaglia decisiva che ha posto fine alla guerra tra Sparta e Atene nel 404 a.C.?",
      risposte: [
        "Battaglia di Platea",
        "Battaglia delle Termopili",
        "Battaglia di Salamina",
        "Battaglia di Egospotami",
      ],
      risposta_corretta: "Battaglia di Egospotami",
    },
    {
      domanda: "Chi è stato il primo presidente della Repubblica Italiana?",
      risposte: [
        "Umberto II",
        "Giuseppe Saragat",
        "Alcide De Gasperi",
        "Enrico De Nicola",
      ],
      risposta_corretta: "Enrico De Nicola",
    },
    {
      domanda: "Qual è stato il regno più grande dell'antichità?",
      risposte: [
        "Impero romano",
        "Impero britannico",
        "Impero persiano",
        "Impero mongolo",
      ],
      risposta_corretta: "Impero mongolo",
    },
    {
      domanda:
        "Quale città antica fu distrutta da un'eruzione vulcanica nel 1628 a.C.?",
      risposte: ["Pompei", "Ercolano", "Atene", "Santorini (Thera)"],
      risposta_corretta: "Santorini (Thera)",
    },
    {
      domanda: "Chi fu il leader del movimento per l'indipendenza dell'India?",
      risposte: [
        "Indira Gandhi",
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Subhas Chandra Bose",
      ],
      risposta_corretta: "Mahatma Gandhi",
    },
    {
      domanda:
        "Qual è stato il trattato che pose fine alla Prima Guerra Mondiale?",
      risposte: [
        "Trattato di Trianon",
        "Trattato di Brest-Litovsk",
        "Trattato di Versailles",
        "Trattato di Rapallo",
      ],
      risposta_corretta: "Trattato di Versailles",
    },
  ],
}));

Alpine.start();
