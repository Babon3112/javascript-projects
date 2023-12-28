const clock = document.getElementById("clock");
const dates = document.getElementById("date");
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleString();
  // clock.innerHTML = date.toLocaleDateString() + " " + date.toLocaleTimeString();
  // clock.innerHTML = ;
}, 1000);
