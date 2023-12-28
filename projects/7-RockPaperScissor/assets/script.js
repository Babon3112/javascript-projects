let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_score = document.querySelector("#user-score");
const bot_score = document.querySelector("#bot-score");

const generatebotchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

const drawgame = () => {
  msg.innerText = "It's a tie. Play Again!";
  msg.style.backgroundColor = "#0a3a70";
};

const showinner = (userwin, userchoice, botchoice) => {
  if (userwin) {
    msg.innerText = `You won! Your ${userchoice} beats bot's ${botchoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    user_score.innerText = userScore;
  } else {
    msg.innerText = `Better luck next time!! Bot's ${botchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
    botScore++;
    bot_score.innerText = botScore;
  }
};

const playgame = (userchoice) => {
  const botchoice = generatebotchoice();
  if (userchoice === botchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = botchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = botchoice === "scissor" ? false : true;
    } else {
      userwin = botchoice === "rock" ? false : true;
    }
    showinner(userwin, userchoice, botchoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
