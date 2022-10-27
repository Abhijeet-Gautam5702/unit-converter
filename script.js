const title = document.getElementById("title");
title.textContent = "Metric to Imperial Unit Converter";

const display = document.getElementById("input-container");
display.value = "20";

const inputNum = document.querySelectorAll(".input-num");
inputNum.forEach(function(item){
    item.textContent = "40"
})
