console.log("hello world");

let isMouseDown = false; // ✅ Declare before using it

document.body.onmousedown = () => isMouseDown = true;
document.body.onmouseup = () => isMouseDown = false;

const container = document.querySelector("#container");

function startGrid() {
  let N = prompt("Enter the grid size (1-100)", 16);
  N = Number(N);

  if (isNaN(N) || N < 1 || N > 100) {
    alert("Please enter a number from 1 to 100");
    startGrid();
    return;
  }

  generateGrid(N);
}

function generateGrid(N) {
  container.innerHTML = ""; // Clear old grid

  for (let i = 0; i < N * N; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.style.width = `${100 / N}%`;
    square.style.height = `${100 / N}%`;

    square.addEventListener("mousedown", () => {
      square.style.backgroundColor = "black";
    });

    square.addEventListener("mouseover", () => {
      if (isMouseDown) {
        square.style.backgroundColor = "black";
      }
    });

    container.appendChild(square);
  }
}

function reset() {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach(square => {
    square.style.backgroundColor = "white";
  });
}

startGrid(); // Start the program
