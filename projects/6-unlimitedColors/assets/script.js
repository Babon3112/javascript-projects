const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
// generate a random color
const randomcolor = function () {
  const hex = "123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};


let intervalid;
const startchangingcolor = function () {
  function changeBgcolor() {
    document.body.style.backgroundColor = randomcolor();
    console.log(randomcolor());
  }
  if(intervalid == null){
    intervalid = setInterval(changeBgcolor, 1000);
  }
  // intervalid = setInterval(changeBgcolor, 1000);
};
const stopchangingcolor = function () {
    clearInterval(intervalid);
    intervalid = null;
    document.body.style.backgroundColor = '#0a192f';
};

start.addEventListener("click", startchangingcolor);
stop.addEventListener("click", stopchangingcolor);
