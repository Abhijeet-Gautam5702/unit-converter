//array of objects containing conversion factors
const unitConv = [
  {
    id: "length",
    fact: 3.28084,
  },
  {
    id: "volume",
    fact: 0.264172,
  },
  {
    id: "mass",
    fact: 2.20462,
  },
];

const title = document.getElementById("title");
title.textContent = "Metric to Imperial Unit Converter";

//Hide the results
document.addEventListener("DOMContentLoaded", function () {
  const displayUnitEl = document.querySelectorAll(".display-unit-container");
  displayUnitEl.forEach(function (item) {
    item.style.display = "none";
  });
});

const btn = document.getElementById("convert-btn");
btn.addEventListener("click", function () {
  //unhiding all the results
  const displayUnitEl = document.querySelectorAll(".display-unit-container");
  displayUnitEl.forEach(function (item) {
    item.style.display = "flex";
  });

  //displaying the input-number at all desired places
  const displayValue = document.getElementById("input-container").value;
  const inputNum = document.querySelectorAll(".input-num");
  inputNum.forEach(function (item) {
    item.textContent = displayValue;
  });

  //changing the metric/imperial units
  const metricUnitEls = document.querySelectorAll(".metric-unit");
  const imperialUnitEls = document.querySelectorAll(".imperial-unit");
  const n = imperialUnitEls.length;
  for (let i = 0; i < n; i++) {
    const convertedNum = metricUnitEls[i].querySelector(".converted-num");
    convertedNum.textContent = (displayValue * unitConv[i].fact).toFixed(3);

    const convertedNum2 = imperialUnitEls[i].querySelector(".converted-num");
    convertedNum2.textContent = (displayValue / unitConv[i].fact).toFixed(3);
  }
});
