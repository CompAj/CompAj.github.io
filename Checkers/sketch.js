// Checkers 
// Anjana Samarasinghe 
// Oct 31, 2022 

let grid; 
let rows = 8; 
let colms = 8; 
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = create2dArray(colms, rows);
  cellWidth = width/colms;
  cellHeight = height/rows;
}

function draw() {
  background(220);
  displayGrid(grid); 
}

// function createRandom2dArray(colms, rows) {
//   let emptyArray = [];
//   for (let y=0; y<rows; y++) {
//     emptyArray.push([]);
//     for (let x=0; x<colms; x++) {
//       if (random(100) < 50) {
//         emptyArray[y].push(0);
//       }
//       else {
//         emptyArray[y].push(1);
//       }
//     }
//   }
//   return emptyArray;
// }


function displayGrid(grid) {
  for (let y=0; y<rows; y++) {
    for (let x=0; x<colms; x++) {
      if (grid[y][x] === 0) {
        fill("red");
      }
      // if (grid[y][x] === 3) {
      //   fill("red"); 
      // }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(colms, rows) {
  let emptyArray = [];
  for (let y=0; y<rows; y++) {
    emptyArray.push([]);
    for (let x=0; x<colms; x++) {
      if (y % 2 === 0) {
        emptyArray[y].push(1);
      }
      else {
        emptyArray[y].push(0);
      }
      
    }
  }
  return emptyArray;
}