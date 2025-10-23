const form = document.querySelector("form");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskName = document.getElementById("task").value;

  const taskElement = document.createElement("div");
  const doneButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  taskElement.title = taskName;

  doneButton.textContent = "\u2713";
  deleteButton.textContent = "X";

  doneButton.addEventListener("click", () => {
    const doneElement = document.createElement("div");
    doneElement.textContent = taskElement.title;
    doneList.appendChild(doneElement);
    todoList.removeChild(taskElement);
  });
  deleteButton.addEventListener("click", () =>
    todoList.removeChild(taskElement)
  );

  taskElement.appendChild(document.createTextNode(taskName));
  taskElement.appendChild(doneButton);
  taskElement.appendChild(deleteButton);

  todoList.appendChild(taskElement);

  //   form.reset();
});
