document.addEventListener("DOMContentLoaded", function () {

    var gridContainer = document.getElementById("grid-container");
    var inputColorValue = document.getElementById("brush-color");
    var buttonsList = Array.from(document.getElementsByClassName("buttons"));
    var n=0;
    n=30*10;

    /*if(window.innerWidth <= 977) n=400;
    else if(window.innerWidth*/

    for (let i = 0; i < n; i++) {
        let gridCell = document.createElement("div");
        gridContainer.appendChild(gridCell).className = "grid-cell";
    }

    //color button
    var gridCells = Array.from(document.getElementsByClassName("grid-cell"));
    var mouseIsDown = false;

    for (let i = 0; i < n; i++) {
        gridCells[i].addEventListener('mousedown', function () { mouseIsDown = true });
    }

    for (let i = 0; i < n; i++) {
        gridCells[i].addEventListener('mouseup', function () { mouseIsDown = false });
    }

    for (let i = 0; i < n; i++) {
        gridCells[i].addEventListener('mousemove', function () {
            if (mouseIsDown) {
                gridCells[i].style.backgroundColor = inputColorValue.value;
            }
        })
    }

    //reinitializing color
    inputColorValue.addEventListener("click", function () {
        for (let i = 0; i < n; i++) {
            gridCells[i].addEventListener('mousemove', function () {
                if (mouseIsDown) {
                    gridCells[i].style.backgroundColor = inputColorValue.value;
                }
            })
        }
    });

    //eraser button
    buttonsList[0].addEventListener("click", function () {
        for (let i = 0; i < n; i++) {
            gridCells[i].addEventListener('mousemove', function () {
                if (mouseIsDown) {
                    gridCells[i].style.backgroundColor = "#fff";
                }
            })
        }
    });

    //clear button
    buttonsList[1].addEventListener("click", function () {
        for (let i = 0; i < n; i++) {
            gridCells[i].style.backgroundColor = "#fff";
        }
    });
});