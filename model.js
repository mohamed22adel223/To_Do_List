//var
let inputBox = document.getElementById("to_input");

let listContainer = document.getElementById("list-container");

let addButton = document.getElementById("button");
//add tasks
addButton.onclick = function(){
    if(inputBox.value === ""){
        alert("You Must Write Task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //add remove object
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData ()
};
// task done
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData ()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData ()
    }
}, false);
//save data
function saveData (){
    localStorage.setItem("data", listContainer.innerHTML);
};
function showTask (){
    listContainer.innerHTML = localStorage.getItem("data");
};
showTask ()