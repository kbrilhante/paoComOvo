var list;

initialize();

function initialize() {
    list = localStorage.getItem("list").split("\n");
    console.dir(list);
    fillList();
}

function fillList() {
    const divList = document.getElementById("list");
    divList.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        const item = list[i];

        const formCheck = document.createElement("div");
        formCheck.className = "form-check my-2";
        divList.appendChild(formCheck);

        const cBox = document.createElement("input");
        cBox.className = "form-check-input fs-4";
        cBox.type = "checkbox";
        cBox.value = "";
        cBox.id = item.replaceAll(" ", "");
        cBox.addEventListener('change', textHandle)
        formCheck.appendChild(cBox);

        const label = document.createElement("label");
        label.className = "form-check-label fs-4 fw-bold";
        label.htmlFor = cBox.id;
        label.textContent = item;
        formCheck.appendChild(label);
    }
}

function textHandle(e) {
    const cBox = e.target;
    const label = e.target.labels[0];
    console.log(cBox, label);
    const classes = label.classList;

    if (cBox.checked) {
        classes.remove("fw-bold");
        classes.add("fw-light");
        classes.add("text-decoration-line-through");
    } else {
        classes.add("fw-bold");
        classes.remove("fw-light");
        classes.remove("text-decoration-line-through");
    }
}

function edit() {
    location = "index.html";
}