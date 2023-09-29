displayEl = document.getElementById("display");
countEl = document.getElementById("count");
lightEl = document.getElementById("light");
resetEl = document.getElementById("reset");

let count = 0;

countEl.addEventListener("click", function() {
  count += 1;
  displayEl.innerText = count;
});

resetEl.addEventListener("click", function() {
  count = 0;
  displayEl.innerText = count;
});

lightEl.addEventListener("click", function() {
    displayEl.style.backgroundColor = red
});
lightEl.addEventListener("click", function() {
    displayEl.style.backgroundColor = "blue";
    setTimeout(function() {
        displayEl.style.backgroundColor ="rgba(39, 248, 126, 0.836)"; 
      }, 3000);
});

