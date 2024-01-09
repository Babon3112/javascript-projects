let input = document.querySelector(".inputbox");
let list = document.querySelector(".list");

input.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addItem(this.value);
    this.value = "";
  }
});

let addItem = (input) => {
  let listitem = document.createElement("li");
  listitem.innerHTML = `${input} <i></i>`;

  listitem.addEventListener("click",function () {
    this.classList.toggle("done");
  })

  listitem.querySelector("i").addEventListener("click",function () {
    listitem.remove();
  })

  list.appendChild(listitem);
};
