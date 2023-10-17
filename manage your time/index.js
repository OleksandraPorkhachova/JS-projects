const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");

function addTask() {
  if(inputBox.value === ''){
    alert("You must write something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listCont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData()
}

listCont.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
}, false);

const userInput =  document.getElementById("user_input");
var expression = "";

press = (num) => {
  expression += num;
  userInput.value = expression;
}

equal = () => {
  userInput.value = eval(expression);
  expression = "";
}

erase = () => {
  expression = "";
  userInput.value = expression;
}

function saveData(){
  localStorage.setItem("data", listCont.innerHTML);
}

function showTask(){
  listCont.innerHTML = localStorage.getItem("data");
}
showTask();

const subscrBtn = document.getElementById("subscribe_btn");
const inputBoxSubscr = document.getElementById("inputBox");

subscrBtn.addEventListener("click", function(e){
  if(inputBoxSubscr.value === ''){
    alert("You must write something!");
  }
  else{
    alert ("Thank you for your subscribtion!")
  }
  inputBoxSubscr.value = "";
})