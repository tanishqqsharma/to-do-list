var myNodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        this.parentElement.remove();
    }
}

var task = document.getElementById("task-input");
var addTaskBtn = document.getElementById("add-task");
var tasks = document.getElementById("tasks");

addTaskBtn.addEventListener("click", addTask);
function addTask() {
    var taskText = task.value;
    var t = document.createTextNode(taskText);
    if (taskText !== "") {
        var li = document.createElement("li");
        li.appendChild(t);
        tasks.appendChild(li);

        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                this.parentElement.remove();
            }
        }
    }
    else {
        alert("you must write a task!");
    }
    task.value = "";
}
tasks.addEventListener("click", checkTask);
function checkTask(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
}
