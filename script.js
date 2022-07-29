let answer = Math.floor(Math.random() * 20 + 1);
let score = Number(document.querySelector(".score").textContent);
let highscore = Number(document.querySelector(".highscore").textContent);

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  document.querySelector(".number").textContent = guess;

  if (0 < guess && guess < answer) {
    score -= 1;
    document.querySelector(".score").innerHTML = score;
    document.querySelector(".message").innerHTML = "Higher";
    document.querySelector(".guess").value = "";
  } else if (21 > guess && guess > answer) {
    score -= 1;
    document.querySelector(".score").innerHTML = score;
    document.querySelector(".message").innerHTML = "Lower";
    console.log(guess);
    document.querySelector(".guess").value = "";
  } else if (guess <= 0 || guess >= 21) {
    document.querySelector(".message").innerHTML =
      "Please insert a valid number";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
  } else {
    document.querySelector(".message").innerHTML = "Gotcha";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").value = "";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").innerHTML = highscore;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").innerHTML = "Start guessing...";
  document.querySelector(".number").textContent = "?";

  answer = Math.floor(Math.random() * 20 + 1);
  guess = document.querySelector(".guess").value;
  document.querySelector(".score").textContent = 20;
});
