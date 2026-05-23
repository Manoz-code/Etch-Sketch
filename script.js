console.log("welcome to the game.")


const container = document.querySelector("#container");
const gridBtn = document.querySelector("#size-btn");
const resetBtn = document.querySelector("#reset-btn");

let size = 16 * 16;
const defaultSize = 16 * 16;

// handle boxes customize the gird size
function handleBoxes(customSize){
    size = Number(customSize * customSize);
    console.log(size);
    container.innerHTML = "";
    runloop();
    
}

// get custom size
function handleGridBtn(){
    const customSize = prompt("Provide a size."); 
    if(customSize === ""){
        alert("Empty Size can't create Grid.");
        return
    }
    if(customSize > 100){
        alert("Please Press below than 100.");
        return;
    } 
      handleBoxes(customSize);

}

// Run loop for boxes
function runloop(){
    for(let i = 0; i < size;i++){
        const box= document.createElement("div");
         box.className = "box";
         container.appendChild(box);
    }
}
runloop();

// Handle the background-color of grid
function handleColor(e){
    const maxHex =  16777216;
    const randomNum = Math.floor(Math.random()*maxHex);
    const randomColor = "#" + randomNum.toString(16);
   const box = e.target.closest(".box");
   box.style.backgroundColor = randomColor;

}

// Reload the Window
function handleReset(){
    location.reload();
}

// Add Events to Nodes
gridBtn.addEventListener("click",handleGridBtn);
container.addEventListener("click",handleColor);
resetBtn.addEventListener("click",handleReset);