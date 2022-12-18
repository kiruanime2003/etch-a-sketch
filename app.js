document.addEventListener("DOMContentLoaded", function () {

    var gridContainer = document.getElementById("grid-container");
    var inputColorValue = document.getElementById("brush-color");
    var buttonsList = Array.from(document.getElementsByClassName("buttons"));

    let w = window.innerWidth;
    var n;

    if (w > 1213) {
        n = 900;
        gridCreation(n);
    }
    else if (w <= 1213 && w >= 935) {
        n = 900;
        gridCreation(n);
    }
    else if (w < 935 && w >= 800) {
        n = 729;
        gridCreation(n);
    }
    else if (w < 800 && w >= 600) {
        n = 576;
        gridCreation(n);
    }
    else {
        n = 196;
        gridCreation(n);
    }

    //refreshing page when the viewport changes
    window.onresize = function (event) {
        history.go(0); //to reload a page
    }

    function gridCreation(a) {

        for (let i = 0; i < a; i++) {
            let gridCell = document.createElement("div");
            gridContainer.appendChild(gridCell).className = "grid-cell";
        }

        var gridCells = Array.from(document.getElementsByClassName("grid-cell"));

        //touch event
        for (let i = 0; i < a; i++) {
            gridCells[i].addEventListener('touchend', function () {
                gridCells[i].style.backgroundColor = inputColorValue.value;
            })
        }

        //color button
        var mouseIsDown = false;

        for (let i = 0; i < a; i++) {
            gridCells[i].addEventListener('mousedown', function () { mouseIsDown = true });
        }

        for (let i = 0; i < a; i++) {
            gridCells[i].addEventListener('mouseup', function () { mouseIsDown = false });
        }

        for (let i = 0; i < a; i++) {
            gridCells[i].addEventListener('mousemove', function () {
                if (mouseIsDown) {
                    gridCells[i].style.backgroundColor = inputColorValue.value;
                }
            })
        }


        //reinitializing color
        inputColorValue.addEventListener("click", function () {
            for (let i = 0; i < a; i++) {
                gridCells[i].addEventListener('mousemove', function () {
                    if (mouseIsDown) {
                        gridCells[i].style.backgroundColor = inputColorValue.value;
                    }
                })
            }
        });

        //eraser button
        buttonsList[0].addEventListener("click", function () {
            for (let i = 0; i < a; i++) {
                gridCells[i].addEventListener('mousemove', function () {
                    if (mouseIsDown) {
                        gridCells[i].style.backgroundColor = "#fff";
                    }
                })
            }
        });

        //clear button
        buttonsList[1].addEventListener("click", function () {
            for (let i = 0; i < a; i++) {
                gridCells[i].style.backgroundColor = "#fff";
            }
        });
    }
});