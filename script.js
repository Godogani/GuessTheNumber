function gameStarter() {
  answer = Math.floor(Math.random() * 20 + 1);
  score = Number(document.querySelector(".score").textContent);
  highscore = Number(document.querySelector(".highscore").textContent);
  document.querySelector(".message").innerHTML = "Start guessing...";

}

window.onload = gameStarter;

document.querySelector(".check").addEventListener("click", () => {
  var guess = document.querySelector(".guess").value;

  document.querySelector(".number").textContent = guess;

  if (guess < answer) {
    score -= 1;
    document.querySelector(".score").innerHTML = score;
    document.querySelector(".message").innerHTML = "Higher";
  } else if (guess > answer) {
    score -= 1;
    document.querySelector(".score").innerHTML = score;
    document.querySelector(".message").innerHTML = "Lower";
  } else {
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").innerHTML = highscore;
    }
    document.querySelector(".message").innerHTML = "Gotcha";
  }
});
