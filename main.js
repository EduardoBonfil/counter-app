
var welcomeEl = document.getElementById("welcome-el")

var myName = "Eduardo"
var greeting = "Welcome back "

welcomeEl.innerText = greeting + myName + "!"




var countEl = document.getElementById("counter")


var count = 0 
function incrementCount(){
    count += 1;
    countEl.innerText = count; 
    
}


var saveEl = document.getElementById("save-el")

function save() {
    var countStr = count + " - " ;
    saveEl.textContent += countStr;
    count = 0; 
    countEl.innerText = count; 
    
}

