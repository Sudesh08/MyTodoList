const inputText =document.getElementById("input-text");
const list =document.getElementById("list");
// console.log("hello");
function addTask(){
    if(inputText.value === ''){
        alert("Please write something !");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputText.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputText.value="";
    saveDate();
}
list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
},false);

function saveDate(){
    localStorage.setItem("data",list.innerHTML);
}
function showData(){
    list.innerHTML=localStorage.getItem("data");
}
showData();