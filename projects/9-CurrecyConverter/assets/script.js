const dropdown = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const exchangerate = document.querySelector(".exchange");
const msg = document.querySelector(".msg");

window.addEventListener("load", () => {
  updateexchngerate();
});

const updateexchngerate = async () => {
  let amount = document.querySelector(".amount input");
  let amountvalue = amount.value;
  if (amountvalue === "" || amountvalue < 1) {
    amountvalue = 1;
    amount.value = 1;
  }
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
  let reponse = await fetch(url);
  let data = await reponse.json();
  let rate = data[tocurr.value.toLowerCase()];

  let finalamount = amountvalue * rate;
  msg.innerText = `${amountvalue} ${fromcurr.value} = ${finalamount} ${tocurr.value}`;
  exchangerate.innerText = `Exchange Rate: ${rate}`;
};

for (let select of dropdown) {
  for (currcode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = currcode;
    newoption.value = currcode;
    if (select.name === "from" && currcode === "USD") {
      newoption.selected = "selected";
    } else if (select.name === "to" && currcode === "INR") {
      newoption.selected = "selected";
    }
    select.append(newoption);
  }
  select.addEventListener("change", async(evt) => {
    updateflag(evt.target);
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
  let reponse = await fetch(url);
  let data = await reponse.json();
  let rate = data[tocurr.value.toLowerCase()];
    exchangerate.innerText = `Exchange Rate:${rate}`
  });
}

const updateflag = (element) => {
  let currcode = element.value;
  let countrycode = countryList[currcode];
  let newsrc = `https://flagsapi.com/${countrycode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  updateexchngerate();
});
