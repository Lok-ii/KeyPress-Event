let keyName = document.querySelector(".keyName");
let keyCode = document.querySelector(".keyCode");
let text = document.querySelector(".text");

let list = document.querySelector(".keyHistory");
let audio = new Audio("./keyPress.mp3");
document.addEventListener("keydown", (e) =>{
    audio.play();
    let name = e.key;
    if(e.key === " "){
        keyName.innerText = "SpaceBar";
        name = "SpaceBar";
    }else{
        keyName.innerText = name;
        
    }
    text.innerText = "You Pressed "
    keyCode.innerText = e.keyCode;

    let li = document.createElement("li");
    li.innerText = `${name} : ${e.code}`;
    insertAfter(li, list.firstElementChild);
    // list.appendChild(li);
});

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}