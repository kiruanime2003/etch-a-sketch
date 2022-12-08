document.addEventListener("DOMContentLoaded", function () {

    var gridContainer = document.getElementById("grid-container");
    var inputColorValue = document.getElementById("brush-color");
    var buttonsList = Array.from(document.getElementsByClassName("buttons"));
    
    let w = window.innerWidth;
    var n;

    if (w < 1213 && w > 935) {
        n = 900;
        console.log(n);
        gridCreation(n);
    }

    else if (w < 935 && w > 800) {
        n = 450;
        console.log(n);
        gridCreation(n);
    }

    //refreshing page when the viewport changes
    window.onresize = function(event)
    {
        history.go(0);
    }

    function gridCreation(a) {

        for (let i = 0; i < a; i++) {
            let gridCell = document.createElement("div");
            gridContainer.appendChild(gridCell).className = "grid-cell";
        }

        var gridCells = Array.from(document.getElementsByClassName("grid-cell"));
        var mouseIsDown = false;

        //color button
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
            for (let i = 0; i <a; i++) {
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