console.log("hello world");

let N = 16;

let isMouseDown = false;


//set the movements for the whole body

document.body.onmousedown = () => isMouseDown = true;
document.body.onmouseup = () => isMouseDown = false;


const container = document.querySelector("#container");
container.innerHTML = ""; // Clear if needed

for (let i = 0; i < N * N; i++) {
  const square = document.createElement("div");
  square.classList.add("grid-square");

  // Set width and height dynamically
  square.style.width = `${100 / N}%`;
  square.style.height = `${100 / N}%`;

  square.addEventListener("mousedown", () => {
    square.style.backgroundColor = "black";
  });

  square.addEventListener("mouseover", () => {
    if(isMouseDown) {
      square.style.backgroundColor = "black"
    }
  })

  container.appendChild(square);
}
