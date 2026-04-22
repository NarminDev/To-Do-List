const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);


const title = document.createElement("h2");
title.textContent = "To Do List";
title.classList.add("title");
container.appendChild(title);


const form = document.createElement("form");
form.classList.add("input-row");

const input = document.createElement("input");
input.placeholder = "Add new task";
input.classList.add("input");

const addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.classList.add("add-btn");
addBtn.type = "submit";

form.append(input, addBtn);
container.appendChild(form);


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
        if (text.style.textDecoration === "line-through") {
            text.style.textDecoration = "none";
            text.style.color = "black";
        } else {
            text.style.textDecoration = "line-through";
            text.style.color = "green";
        }
    });


    removeBtn.addEventListener("click", function () {
        li.remove();
    });

    li.append(text, doneBtn, removeBtn);
    ul.appendChild(li);

    input.value = "";
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
});