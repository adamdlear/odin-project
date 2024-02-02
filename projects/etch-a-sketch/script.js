function createGrid(length = 16) {
  const container = document.querySelector(".container");

  for (let i = 0; i < length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.opacity = 0;
      row.appendChild(cell);
    }

    container.appendChild(row);
  }
}

function shadeCell() {
  const cells = document.querySelectorAll(".cell");
  for (const cell of cells) {
    cell.addEventListener("mouseover", () => (cell.style.opacity = 0.8));
  }
}

function clearSketch() {
  resetGrid();
  createGrid();
  shadeCell();
}

function resetGrid() {
  const container = document.querySelector(".container");
  container.innerHTML = '';
}

createGrid();
shadeCell();
