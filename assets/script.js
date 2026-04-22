
const container = document.createElement("div");
document.body.appendChild(container);
container.classList.add("container");

const title = document.createElement("h2");
title.textContent = "To Do List";
title.classList.add("title");
container.appendChild(title);

const inputRow = document.createElement("div");
inputRow.classList.add("input-row");

const input = document.createElement("input");
input.placeholder = "Add new task";
input.classList.add("input");

const addBtn = document.createElement("button");
addBtn.textContent = "+";
addBtn.classList.add("add-btn");

inputRow.append(input, addBtn);
container.appendChild(inputRow);

const ul = document.createElement("ul");
ul.classList.add("list");
container.appendChild(ul);

function addTask() {
    const value = input.value.trim();

    if (value === "") {
        alert("Task boş olmamalıdır !");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("item");

    const text = document.createElement("span");
    text.textContent = value;
    text.classList.add("text");

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✔";
    doneBtn.classList.add("done");

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✖";
    removeBtn.classList.add("remove");

    doneBtn.addEventListener("click", function () {
        text.style.textDecoration = "line-through";
        text.style.color = "green";
    });

    removeBtn.addEventListener("click", function () {
        li.remove();
    });

    li.append(text, doneBtn, removeBtn);
    ul.appendChild(li);

    input.value = "";
}


addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});