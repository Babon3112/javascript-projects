const form = document.querySelector("form");
// This will give you empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  const BMI = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    if (BMI < 18.6) {
      result.innerHTML = `<span>Your BMI is ${BMI} so, You are underweight</span>`;
    } else if (BMI > 24.9) {
      result.innerHTML = `<span>Your BMI is ${BMI} so, You are overweight</span>`;
    } else {
      result.innerHTML = `<span>Your BMI is ${BMI} so, You are in normal range</span>`;
    }
  }
});
