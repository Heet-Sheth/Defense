const changerButton = [...document.getElementsByClassName("button")];
const picker = document.getElementById("color-picker");
const body = document.body;

changerButton.forEach((button) =>
  button.addEventListener(
    "click",
    () => (body.style.backgroundColor = button.classList[1])
  )
);

picker.addEventListener(
  "input",
  () => (body.style.backgroundColor = picker.value)
);
