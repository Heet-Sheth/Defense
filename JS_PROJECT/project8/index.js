const body = document.body;
const colors = [
  "red",
  "yellowgreen",
  "lightblue",
  "yellow",
  "cyan",
  "white",
  "orange",
  "pink",
  "blue",
];

const colorSize = colors.length;

body.addEventListener("click", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const index = Math.floor(Math.random() * colorSize);

  const bubble = document.createElement("div");

  bubble.className = "bubble";
  bubble.style.top = y + "px";
  bubble.style.left = x + "px";
  bubble.style.backgroundColor = colors[index];

  const textNode = document.createElement("span");
  textNode.textContent = "Hi";

  bubble.appendChild(textNode);
  body.appendChild(bubble);

  setTimeout(() => bubble.remove(), 4500);
});
