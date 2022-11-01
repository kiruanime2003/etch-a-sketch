document.addEventListener("DOMContentLoaded", function () {

    var gridContainer = document.getElementById("grid-container");
    var inputColorValue = document.getElementById("brush-color");
    var buttonsList = Array.from(document.getElementsByClassName("buttons"));

    for (let i = 0; i < 900; i++) {
        let gridCell = document.createElement("div");
        gridContainer.appendChild(gridCell).className = "grid-cell";
    }

    var gridCells = Array.from(document.getElementsByClassName("grid-cell"));
    var mouseIsDown = false;

    for (let i = 0; i < 900; i++) {
        gridCells[i].addEventListener('mousedown', function () { mouseIsDown = true });
    }

    for (let i = 0; i < 900; i++) {
        gridCells[i].addEventListener('mouseup', function () { mouseIsDown = false });
    }

    for (let i = 0; i < 900; i++) {
        gridCells[i].addEventListener('mousemove', function () {
            if (mouseIsDown) {
                gridCells[i].style.backgroundColor = inputColorValue.value;
            }
        })
    }

    buttonsList[1].addEventListener("click", function () {
        for (let i = 0; i < 900; i++) {
            gridCells[i].style.backgroundColor = "#fff";
        }
    });

    buttonsList[2].addEventListener("click", function(){
        let art = document.getElementById("grid-container");
        html2canvas(art).then(canvas => {
            document.body.appendChild(canvas);
        });
    });
});