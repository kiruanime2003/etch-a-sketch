document.addEventListener("DOMContentLoaded", function () {

    var gridContainer = document.getElementById("grid-container");
    var inputColorValue = document.getElementById("brush-color");
    var buttonsList = Array.from(document.getElementsByClassName("buttons"));

    let w = window.innerWidth;

    var n=0;

    if(w <= 1213) n=200;
    else if(w)

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