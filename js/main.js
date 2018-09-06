window.addEventListener("load", init);

const levels = {
  easy: 5,
  medium: 4,
  hard: 3
};

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "opponent",
  "hold",
  "urine",
  "consciousness",
  "warm",
  "ample",
  "scream",
  "psychology",
  "tight",
  "remunerate",
  "ring",
  "census",
  "shock",
  "lay",
  "crash",
  "breakfast",
  "crop",
  "bad",
  "medieval",
  "undress",
  "decorative",
  "arrange",
  "deputy",
  "electron",
  "dribble",
  "blackmail",
  "destruction",
  "jest",
  "brainstorm",
  "sum"
];

//initialize game
function init() {
  seconds.innerHTML = currentLevel;

  // load first word
  showWord(words);

  //start matching on input
  wordInput.addEventListener("input", startMatch);

  // call countdown
  setInterval(countdown, 1000);

  //CHECK STATUS
  setInterval(checkStatus, 500);
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score < 0) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//match active word to input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//pick first word
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);

  currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown() {
  // make sure time has not run out
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }

  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
