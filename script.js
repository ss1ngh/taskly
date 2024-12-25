const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("no input found, please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveDataOnRefresh();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
        saveDataOnRefresh();
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveDataOnRefresh();
    }
},false)

function saveDataOnRefresh(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTaskOnOpen(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTaskOnOpen();