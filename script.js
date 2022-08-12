const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const SELECTIONS = [
  { name: "rock", emoji: "✊🏿", beats: "scissors" },
  { name: "paper", emoji: "✋🏿", beats: "rock" },
  { name: "scissors", emoji: "✌🏿", beats: "paper" },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (SELECTION) => SELECTION.name === selectionName
    );

    makeSelection(selection);
  });
});

const makeSelection = (selection) => {
  const computerSelection = randomSelection();
  const youWin = isWinner(selection, computerSelection);
  const computerWin = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWin);
  addSelectionResult(selection, youWin);
};

const addSelectionResult = (selectn, win) => {
  const div = document.createElement("div");
  div.innerText = selectn.emoji;
  div.classList.add("result-selection");
  if (win) div.classList.add("winner");
  finalColumn.after(div);
};

const isWinner = (pick, opponentPick) => {
  return pick.beats === opponentPick.name;
};
const randomSelection = () => {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  //   console.log(randomIndex);
  return SELECTIONS[randomIndex];
};
