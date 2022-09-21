// _____________ COLORS / COLOR PICKER ______________
const colorWheel = document.getElementById("colorWheel");

const BG_DEFAULT = "rgba(211, 203, 192, 0.5)";
const PAINT_DEFAULT = colorWheel.value;
let paint_color = PAINT_DEFAULT;

const updateColor = () => {
  paint_color = colorWheel.value;
  console.log("color updated");
};

// ________________ INITIAL GRID __________________
let grid = document.querySelector(".grid");
let gridSize = 16;

const createGrid = (x) => {
  // for each row (height):
  for (let i = 0; i < x; i++) {
    // create new table row
    let row = document.createElement("tr");
    row.className = "row";

    // for each row, create # of cells
    for (let j = 0; j < x; j++) {
      // create & add cell to row
      let cell = document.createElement("td");
      cell.className = "cell";
      cell.textContent = "";
      row.appendChild(cell);
    }
    // add the current row to the grid
    grid.appendChild(row);
  }
};

createGrid(gridSize);
grid.style.backgroundColor = BG_DEFAULT;

// _____________ LISTEN FOR COLOR UPDATE ________________
colorWheel.addEventListener("input", updateColor);

// ________________ RESET BUTTON _________________
const cells = document.getElementsByClassName("cell");
const button = document.getElementById("reset-button");

button.addEventListener("click", () => {
  Array.from(cells).forEach((cell) => {
    cell.style.backgroundColor = "rgba(0, 0, 0, 0)"; // clear
  });
});

// ________________ PAINTING FUNCTIONALITY __________________
let painting = false;

const paint = (cell) => {
  painting ? (cell.style["background-color"] = `${paint_color}`) : false;
};

// grid listeners:
grid.addEventListener("mouseleave", () => (painting = false));
grid.addEventListener("mouseup", () => (painting = false));

// cell listeners:
Array.from(cells).forEach((cell) => {
  cell.addEventListener("mousedown", () => {
    painting = true;
    paint(cell);
  });
  cell.addEventListener("mouseenter", () => paint(cell));
});
