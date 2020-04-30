import { compose, init } from 'stamp-utils';

let initGame = (function (rows) {
    const grid = document.getElementById('tic-tac-toe-board-id');
    let gridRows = document.getElementsByClassName("rowsGrid");
    let gridCols = document.getElementsByClassName("cell");

    const elementObject = init(function () {
        Object.assign(this, {
            addChild(type, className) {
                const child = document.createElement(type);
                child.className = className;
                this.appendChild(type);
                return (this);
            }
        });
    });

    const overideGrid = init(function(elementObject) {
        Object.assign(this, elementObject);
    })

    function gridCreation(rows) { //call createRows and createCols with good values
        if (typeof rows === 'number') {
            createRows(rows);
            createCols(rows);
        }
    }

    function createRows(rows) { // init rows

        for (let r = 0; r < rows; r++) {
            overideGrid.addChild("div", "rowsGrid");
            // const cell = document.createElement("div");
            // cell.className = "rowsGrid";
            // grid.appendChild(cell);
        }
    }
    function createCols(cols) { // init all cells
        for (let c = 0; c < gridRows.length; c++) {
            for (let r = 0; r < cols; r++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                gridRows[c].appendChild(cell);
            }
        }
    }

    initGame.gridCreation(rows);
})(prompt('A square of how many rows do you want ?'))