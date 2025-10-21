const button = document.getElementById("submit-button");

const element = document.createElement("h1");
element.style.fontSize = "2em";
element.style.color = "red";
element.textContent = "Jake Padhai Krle !!!";

button.addEventListener("click", () => {
  button.textContent = "Loading...";
  setTimeout(() => {
    button.textContent = "🤣";
    button.after(element);
  }, 2000);
});
