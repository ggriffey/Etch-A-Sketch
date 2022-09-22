// _____________ COLORS / COLOR PICKER ______________
const colorWheel = document.getElementById("colorWheel");

const BG_DEFAULT = "rgba(211, 203, 192, 0.5)";
const PAINT_DEFAULT = colorWheel.value;
let paint_color = PAINT_DEFAULT;

const updateColor = () => (paint_color = colorWheel.value);

// ________________ INITIAL GRID __________________
const container = document.getElementById("container");
let grid = document.querySelector(".grid");
let defaultSize = 20;
let gridExists = false;

const createGrid = (size) => {
  // remove previous grid (if any)
  if (gridExists) {
    container.removeChild(grid);
    let newGrid = document.createElement("table");
    grid = newGrid;
    grid.classList.add("grid");
    container.appendChild(grid);
  }

  // for each row (height):
  for (let i = 0; i < size; i++) {
    // create new table row
    let row = document.createElement("tr");
    row.className = "row";

    // for each row, create # of cells
    for (let j = 0; j < size; j++) {
      // create & add cell to row
      let cell = document.createElement("td");
      cell.className = "cell";
      cell.textContent = "";
      row.appendChild(cell);
    }
    // add the current row to the grid
    grid.appendChild(row);
  }
  gridExists = true;
  grid.style.backgroundColor = BG_DEFAULT;
};

createGrid(defaultSize);

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

const addGridListeners = () => {
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
};

addGridListeners();

// ________________ UPDATE GRID __________________
const GRID_SIZES = [16, 20, 24];

const small = document.getElementById("small");
const medium = document.getElementById("med");
const large = document.getElementById("large");

small.addEventListener("click", () => {
  createGrid(GRID_SIZES[0]);
  addGridListeners();
});

medium.addEventListener("click", () => {
  createGrid(GRID_SIZES[1]);
  addGridListeners();
});

large.addEventListener("click", () => {
  createGrid(GRID_SIZES[2]);
  addGridListeners();
});
