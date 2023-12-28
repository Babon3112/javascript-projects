let guessnum = parseInt(Math.random() * 100 + 1);
// console.log(guessnum);

const submit = document.querySelector("#subt");
const usertinput = document.querySelector(".guessField");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const loworhi = document.querySelector(".loworhi");
const startover = document.querySelector(".resultParas");
const newgamebtn = document.querySelector(".newgamebtn");

let prevguess = [];
let remainingguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(usertinput.value);
    // console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("Enter a number betweeen 1 to 100");
  } else {
    prevguess.push(guess);
    if (remainingguess === 10) {
      displyguess(guess);
      displaymessage(`Game Over! The number was ${guessnum}`);
      endgame();
    } else {
      displyguess(guess);
      checkguess(guess);
    }
  }
}
function checkguess(guess) {
  if (guess === guessnum) {
    displaymessage(`You won the game`);
    endgame();
  } else if (guess > guessnum) {
    displaymessage(`Number is smaller than you entered`);
  } else if (guess < guessnum) {
    displaymessage(`Number is greater than you entered`);
  }
}

function displyguess(guess) {
  usertinput.value = "";
  guessslot.innerHTML += `${guess}, `;
  remainingguess++;
  remaining.innerHTML = `${11 - remainingguess}`;
}

function displaymessage(message) {
  loworhi.innerText = `${message}`;
}

function endgame() {
  usertinput.value = "";
  usertinput.setAttribute("disabled", "");
  playgame = false;
  newgamebtn.classList.remove("hide");
  newgame();
}
function newgame() {
  const newgamebutton = document.querySelector(".newgamebtn");
  newgamebutton.addEventListener("click", function (e) {
    guessnum = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    remainingguess = 1;
    guessslot.innerHTML = "";
    remaining.innerHTML = `${11 - remainingguess}`;
    usertinput.removeAttribute("disabled");
    playgame = true;
    loworhi.innerText = `Try to Guess the Number`;
    newgamebtn.classList.add("hide");
  });
}
