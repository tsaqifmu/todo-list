const forms = document.querySelector("main");
const input = document.querySelector("form > input");
const add = document.querySelector("form > button");

let newTask = (value) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("task");

  const newInput = document.createElement("input");
  newInput.classList.add("input");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("value", value);
  newInput.setAttribute("readonly", "");

  newDiv.appendChild(newInput);

  const buttonDel = document.createElement("button");
  buttonDel.setAttribute("id", "delete");
  const remove = document.createTextNode("❌");
  buttonDel.appendChild(remove);
  newDiv.appendChild(buttonDel);

  const buttonDone = document.createElement("button");
  buttonDone.setAttribute("id", "done");
  buttonDone.classList.add("hidden");
  const done = document.createTextNode("✔");
  buttonDone.appendChild(done);
  newDiv.appendChild(buttonDone);

  const buttonEdit = document.createElement("button");
  buttonEdit.setAttribute("id", "edit");
  const edit = document.createTextNode("✏");
  buttonEdit.appendChild(edit);
  newDiv.appendChild(buttonEdit);

  const taskField = document.querySelector("main");
  taskField.appendChild(newDiv);
};

add.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;
  if (text == "") return alert("task must be filled");
  newTask(text);
});

forms.addEventListener("click", (e) => {
  if (e.target.id == "delete") return e.target.parentElement.remove();
  if (e.target.id == "done") {
    e.target.parentElement.firstElementChild.classList.replace("edit", "input");
    e.target.classList.add("hidden");
    e.target.previousElementSibling.classList.remove("hidden");
    e.target.nextElementSibling.classList.remove("hidden");
    e.target.parentElement.firstElementChild.setAttribute("readonly", "");
    return;
  }
  if (e.target.id == "edit") {
    // remove attribute
    e.target.parentElement.firstElementChild.removeAttribute("readonly");
    e.target.parentElement.firstElementChild.focus();
    e.target.previousElementSibling.classList.remove("hidden");
    e.target.classList.add("hidden");
    e.target.previousElementSibling.previousElementSibling.classList.add("hidden");

    //to change input field color
    e.target.parentElement.firstElementChild.classList.replace("input", "edit");
    return;
  }
});
