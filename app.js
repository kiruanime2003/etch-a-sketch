document.addEventListener("DOMContentLoaded", function(){
    
    var gridContainer = document.getElementById("grid-container");

    for(let i=0; i<900; i++){
        let gridCell = document.createElement("div");
        gridContainer.appendChild(gridCell).className="grid-cell";
    }
});