let displaytime = document.querySelector(".displaytime");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const flag = document.querySelector(".flag");
const lap = document.querySelector(".lap");
let timer = null;

let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

function stopwatch() {
  miliseconds++;
  if (miliseconds === 100) {
    miliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = miliseconds < 10 ? "0" + miliseconds : miliseconds;
  displaytime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function startwatch() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 10);
  play.parentElement.classList.add("hide");
  pause.parentElement.classList.remove("hide");
  reset.parentElement.classList.remove("hide");
  flag.parentElement.classList.remove("hide");
}

function pausewatch() {
  clearInterval(timer);
  play.parentElement.classList.remove("hide");
  pause.parentElement.classList.add("hide");
}

function resetwatch() {
  [seconds, minutes, hours, days] = [0, 0, 0, 0];
  displaytime.innerHTML = "00:00:00:00";
  clearInterval(timer);
  play.parentElement.classList.remove("hide");
  pause.parentElement.classList.add("hide");
  reset.parentElement.classList.add("hide");
  flag.parentElement.classList.add("hide");
  lap.innerHTML = "";
}

function flagwatch(){
  lap.innerHTML = `${lap.innerHTML}<div><h2>${displaytime.innerText}</h2></div>`;
}

play.onclick = startwatch;
pause.onclick = pausewatch;
reset.onclick = resetwatch;
flag.onclick = flagwatch;
