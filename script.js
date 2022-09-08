const createGrid = (height, length) => {
  console.log("creating grid!");
  let grid = document.createElement("table");
  grid.className = "grid";
  const container = document.getElementById("container");
  container.appendChild(grid);

  // for each row (height):
  for (let i = 0; i < height; i++) {
    console.log("creating row!");
    // create new table row
    let row = document.createElement("tr");
    row.cellName = "row";

    // then: for each row, create "length" # of cells
    for (let j = 0; j < length; j++) {
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

createGrid(4, 3);
/* expected output: 
    _   _   _
    _   _   _
    _   _   _
    _   _   _
*/
