const selectionButtons = document.querySelectorAll("[data-selection]");
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
    const computerSelection = randomSelection();
    const youWin = isWinner(selection, computerSelection);
    const computerWin = isWinner(computerSelection, selection);
    makeSelection(computerSelection);
  });
});

const makeSelection = (selection) => {
  console.log(selection);
};

const isWinner = (pick, opponentPick) => {
  return pick.beats === opponentPick.name;
};
const randomSelection = () => {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  //   console.log(randomIndex);
  return SELECTIONS[randomIndex];
};
