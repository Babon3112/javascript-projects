const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const usertinput = document.querySelector(".inputcolor");
const submit = document.querySelector("#subt");
const enteredslot = document.querySelector(".enteredslot");
let inputcolors = []

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (E) {
    console.log(E);
    console.log(E.target);
    // switch (E.target.id) {
    //     case "grey":
    //         body.style.backgroundColor = E.target.id;
    //         break;
    //     case "white":
    //         body.style.backgroundColor = E.target.id;
    //         break;
    //     case "blue":
    //         body.style.backgroundColor = E.target.id;
    //         break;
    //     case "yellow":
    //         body.style.backgroundColor = E.target.id;
    //         break;

    if (E.target.id === "black") {
      body.style.backgroundColor = E.target.id;
    }
    if (E.target.id === "red") {
      body.style.backgroundColor = E.target.id;
    }
    if (E.target.id === "green") {
      body.style.backgroundColor = E.target.id;
    }
    if (E.target.id === "blue") {
      body.style.backgroundColor = E.target.id;
    }
    if (E.target.id === "white") {
      body.style.backgroundColor = E.target.id;
    }
  });
});
submit.addEventListener("click", function (e) {
  e.preventDefault();
  body.style.backgroundColor = usertinput.value;
  const inputcolor = usertinput.value;
  // console.log(inputcolor);
  inputcolors.push(inputcolor)
  enteredslot.innerHTML += `${inputcolor}, `

  usertinput.value = "";
});

document.querySelector('.restore').addEventListener('click', function(e){
  document.body.style.backgroundColor = '#212121';

})
