let boxes = document.querySelectorAll(".box");
let resetgame = document.querySelector(".reset");
let newgame = document.querySelector(".new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");

let turnO = true;
let count = 0;
const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const reset_game = () => {
  turnO = true;
  enabledboxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Box clicked");
    if (turnO) {
      // player O
      box.innerHTML = '<h1 style="color: #4B0082">O</h1>';
      turnO = false;
    } else {
      // player X
      box.innerHTML = '<h1 style="color: #006600">X</h1>';
      turnO = true;
    }
    box.disabled = true;
    count++;
    let iswinner = checkwinner();
    if (count === 9 && !iswinner) {
      gamedraw();
    }
  });
});

const gamedraw = () => {
  msg.innerText = `Game was a draw`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
};

const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showwinner = (Winner) => {
  msg.innerText = `Congratulations, ${Winner} wins the game`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
};

const checkwinner = () => {
  for (let pattern of winningPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        // console.log("Winner", pos1val);
        showwinner(pos1val);
      }
    }
  }
};

newgame.addEventListener("click", reset_game);
resetgame.addEventListener("click", reset_game);
