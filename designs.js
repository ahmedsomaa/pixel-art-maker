// retrieve UI elements
const sizePicker = document.getElementById("sizePicker");       // sizePicker
const inputHeight = document.getElementById("inputHeight");     // inputHeight 
const inputWidth = document.getElementById("inputWidth");       // inputWidth 
const pixelCanvas = document.getElementById('pixelCanvas');     // pixelCanvas


// Select color input
// Select size input
let gridHeight, gridWidth;


function makeGrid(gh, gw) {                                         // gh: gridHeight       gw: gridWidth

  let grid = '';                                                    // initial grid: empty

  // loop over each row
  for(var hi = 1; hi <= gh; hi++){                                  // hi: heightIndex

    // add a row to the current grid
    grid += '<tr class="row-' + hi + '">';                         

    // loop over each cell
    for(var wi = 1; wi <= gw; wi++){                                // wi: widthIndex

      // add number of cells for each row
      grid += '<td class="cell" id="row-' + hi + '_cell-' + wi + '"></td>';
    }

    // end the current row
    // start a new one
    grid += '</tr>';   
  }

  // add final grid into table element
  pixelCanvas.innerHTML = grid;

  // handle cell click once the grid is created
  handleCell();
};


function handleCell() {

  // retrieve grid cells
  const gridCells = document.getElementsByClassName('cell');

  // retrieve colorPicker
  const colorPicker = document.getElementById("colorPicker");    
  
  // store number of cells in size
  let size = gridCells.length;

  for (let i = 0; i < size; i++) {
    gridCells[i].addEventListener("click", function (event) {
        let clickedCell = event.target;
        clickedCell.style.backgroundColor = colorPicker.value;
    });
  };

};


// when form is submitted call makeGrid()
sizePicker.onsubmit = function (event) {

  event.preventDefault();
  // retrieve grid height, and width
  // store them in gridHeight and gridWidth
  gridHeight = inputHeight.value;         // gridHeight
  gridWidth = inputWidth.value;           // gridWidth

  // call makeGrid()
  makeGrid(gridHeight, gridWidth);

};