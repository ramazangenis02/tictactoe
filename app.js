const gameBoard = (() => {
  let startBtn = document.querySelector(".start-btn");
  let resetBtn = document.querySelector(".reset-btn");
  let infoWrapper = document.querySelector(".info-wrapper");
  let playerInfo = document.querySelector(".player");
  let startGame = false;

  let arr = [];

  let remainBoxs = 9;

  startBtn.addEventListener("click", () => {
    startGame = true;

    startBtn.style.display = "none";
    infoWrapper.style.display = "flex";
    resetBtn.style.display = "none";

    let allSquare = document.querySelectorAll(".square-content");

    allSquare.forEach(e => {
      e.style.pointerEvents = "all";
    });

    remainBoxs = 9;
  });

  resetBtn.addEventListener("click", () => {
    playerInfo.innerHTML = "Player 1's Turn";
    let allSquare = document.querySelectorAll(".square-content");
    allSquare.forEach(e => {
      e.innerHTML = "";
    });

    for (let i = 0; i < boxs.length; i++) {
      boxs[i].value = "";
    }

    playerInfo.classList.remove("active");

    startGame = false;

    infoWrapper.style.display = "none";

    startBtn.style.display = "block";
  });

  let turnRound = e => {
    playerInfo.classList.toggle("active");
    if (
      playerInfo.classList.contains("active") &&
      e.innerHTML == "" &&
      startGame == true
    ) {
      e.innerHTML = "X";
      e.style.pointerEvents = "none";
      playerInfo.innerHTML = "Player 2's Turn";
      arr.push("X");
    }

    if (
      !playerInfo.classList.contains("active") &&
      e.innerHTML == "" &&
      startGame == true
    ) {
      e.innerHTML = "O";
      e.style.pointerEvents = "none";
      playerInfo.innerHTML = "Player 1's Turn";

      arr.push("O");
    }
  };

  let id = 0;

  const gameBoardWrapper = document.querySelector(".gameboard-wrapper");

  let check = (id, value) => {
    if (id == 0) {
      boxs[0].id = id;
      boxs[0].value = value;
    } else if (id == 1) {
      boxs[1].id = id;
      boxs[1].value = value;
    } else if (id == 2) {
      boxs[2].id = id;
      boxs[2].value = value;
    } else if (id == 3) {
      boxs[3].id = id;
      boxs[3].value = value;
    } else if (id == 4) {
      boxs[4].id = id;
      boxs[4].value = value;
    } else if (id == 5) {
      boxs[5].id = id;
      boxs[5].value = value;
    } else if (id == 6) {
      boxs[6].id = id;
      boxs[6].value = value;
    } else if (id == 7) {
      boxs[7].id = id;
      boxs[7].value = value;
    } else if (id == 8) {
      boxs[8].id = id;
      boxs[8].value = value;
    }
  };

  let boxs = [
    {
      id: 1,
      value: "",
    },
    {
      id: 2,
      value: "",
    },
    {
      id: 3,
      value: "",
    },
    {
      id: 0,
      value: "",
    },
    {
      id: 0,
      value: "",
    },
    {
      id: 0,
      value: "",
    },
    {
      id: 0,
      value: "",
    },
    {
      id: 0,
      value: "",
    },
    {
      id: 0,
      value: "",
    },
  ];

  let checkWin = e => {
    let allSquare = document.querySelectorAll(".square-content");
    let resetClick = () => {
      allSquare.forEach(e => {
        e.style.pointerEvents = "none";
      });

      resetBtn.style.display = "block";
    };

    let combineOneX =
      boxs[0].value == "X" && boxs[3].value == "X" && boxs[6].value == "X";

    let combineTwoX =
      boxs[0].value == "X" && boxs[1].value == "X" && boxs[2].value == "X";

    let combineThreeX =
      boxs[2].value == "X" && boxs[5].value == "X" && boxs[8].value == "X";

    let combineFourX =
      boxs[6].value == "X" && boxs[7].value == "X" && boxs[8].value == "X";

    let combineFiveX =
      boxs[1].value == "X" && boxs[4].value == "X" && boxs[7].value == "X";

    let combineSixX =
      boxs[0].value == "X" && boxs[4].value == "X" && boxs[8].value == "X";

    let combineSevenX =
      boxs[3].value == "X" && boxs[4].value == "X" && boxs[5].value == "X";

    let combineEightX =
      boxs[2].value == "X" && boxs[4].value == "X" && boxs[6].value == "X";

    //O

    let combineOneO =
      boxs[0].value == "O" && boxs[3].value == "O" && boxs[6].value == "O";

    let combineTwoO =
      boxs[0].value == "O" && boxs[1].value == "O" && boxs[2].value == "O";

    let combineThreeO =
      boxs[2].value == "O" && boxs[5].value == "O" && boxs[8].value == "O";

    let combineFourO =
      boxs[6].value == "O" && boxs[7].value == "O" && boxs[8].value == "O";

    let combineFiveO =
      boxs[1].value == "O" && boxs[4].value == "O" && boxs[7].value == "O";

    let combineSixO =
      boxs[0].value == "O" && boxs[4].value == "O" && boxs[8].value == "O";

    let combineSevenO =
      boxs[3].value == "O" && boxs[4].value == "O" && boxs[5].value == "O";

    let combineEightO =
      boxs[2].value == "O" && boxs[4].value == "O" && boxs[6].value == "O";

    if (combineOneX) {
      playerInfo.innerHTML = "Winner: Player 1!";
      resetClick();
    } else if (combineTwoX) {
      playerInfo.innerHTML = "Winner: Player 1!";
      resetClick();
    } else if (combineThreeX) {
      playerInfo.innerHTML = "Winner: Player 1!";
      resetClick();
    } else if (combineFourX) {
      playerInfo.innerHTML = "Winner: Player 1!";
      resetClick();
    } else if (combineFiveX) {
      playerInfo.innerHTML = "Winner: Player 1!";
      resetClick();
    } else if (combineSixX) {
      playerInfo.innerHTML = "Winner: Player 1!";
      resetClick();
    } else if (combineSevenX) {
      playerInfo.innerHTML = "Winner: Player 1!";
      resetClick();
    } else if (combineEightX) {
      playerInfo.innerHTML = "Winner: Player 1!";
      resetClick();
    }

    if (combineOneO) {
      playerInfo.innerHTML = "Winner: Player 2!";
      resetClick();
    } else if (combineTwoO) {
      playerInfo.innerHTML = "Winner: Player 2!";
      resetClick();
    } else if (combineThreeO) {
      playerInfo.innerHTML = "Winner: Player 2!";
      resetClick();
    } else if (combineFourO) {
      playerInfo.innerHTML = "Winner: Player 2!";
      resetClick();
    } else if (combineFiveO) {
      playerInfo.innerHTML = "Winner: Player 2!";
      resetClick();
    } else if (combineSixO) {
      playerInfo.innerHTML = "Winner: Player 2!";
      resetClick();
    } else if (combineSevenO) {
      playerInfo.innerHTML = "Winner: Player 2!";
      resetClick();
    } else if (combineEightO) {
      playerInfo.innerHTML = "Winner: Player 2!";
      resetClick();
    }

    return { resetClick };
  };

  function tie() {
    remainBoxs--;

    if (remainBoxs == 0) {
      playerInfo.innerHTML = "It's a tie!";
      checkWin().resetClick();
    }
  }

  for (let i = 0; i < 9; i++) {
    let squareContainer = document.createElement("div");
    squareContainer.classList.add("square");

    let squareContent = document.createElement("div");
    squareContent.classList.add("square-content");

    squareContainer.appendChild(squareContent);
    gameBoardWrapper.appendChild(squareContainer);
    id = i;
    squareContent.id = id;

    squareContent.addEventListener("click", e => {
      turnRound(e.target);
      check(e.target.id, e.target.innerHTML);
      checkWin(e);
      tie();
    });
  }
})();
