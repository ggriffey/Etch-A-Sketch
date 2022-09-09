// create initial grid:
const createGrid = (x) => {
  console.log("creating grid!");
  let grid = document.createElement("table");
  grid.className = "grid";
  const container = document.getElementById("container");
  container.appendChild(grid);

  // for each row (height):
  for (let i = 0; i < x; i++) {
    console.log("creating row!");
    // create new table row
    let row = document.createElement("tr");
    row.cellName = "row";

    // then: for each row, create "length" # of cells
    for (let j = 0; j < x; j++) {
      console.log("creating cell!");
      // create and add cell to row
      let cell = document.createElement("td");
      cell.className = "cell";
      cell.textContent = "";
      row.appendChild(cell);
    }

    // add the current row to the grid
    grid.appendChild(row);
  }
};

createGrid(16);

const cells = document.getElementsByClassName("cell");

// reset button logic
const button = document.getElementById("reset-button");
// Querying elements from the DOM returns an HTMLCollection...
// Thus, we cannot treat the result as an array and use foreach
// in the usual manner. However, there is THIS workaround:
button.addEventListener("click", () => {
  Array.from(cells).forEach((cell) => {
    cell.classList.remove("fill");
  });
});

// listen for mouseover event
Array.from(cells).forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.classList.add("fill");
  });
});
