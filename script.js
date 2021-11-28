"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".secretnumber").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage("⛔️ No Number!");
    // document.querySelector(".message").textContent = "⛔️ No Number!";

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🤯 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   //when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "🤯 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   document.querySelector(".message").textContent = "📉 Too Low!";
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // } else {
  //   document.querySelector(".message").textContent = "🤯 You lost the game!";
  //   document.querySelector(".score").textContent = 0;
  // }

  //restart the game
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector(".number").textContent = "?";
    displayMessage("start guessing...");
    secretNumber = Math.ceil(Math.random() * 20);
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });
});
