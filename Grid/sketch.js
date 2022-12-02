// Grid
// Anjana Samarasighe
// Oct 25, 2022

let grid; 
const rows = 3; 
const colms = 3; 
let state; 
let score1; 
let score2;
let turn;  
function setup() {
  createCanvas(windowWidth, windowHeight);
  score1 = 0; 
  score2 = 0; 
  turn = random(0, 2);
  console.log(turn);
  grid = create2dArray(rows, colms);
}


function draw() {
  background(220);
  displayGrid(grid); 
}

function mousePressed() {
  console.log(mouseX, mouseY);
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;

  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);

  if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
  else if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
}

//Displays Grid and Checks Whats Being Pushed 
function displayGrid(grid) {
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

//Creates 2d Array 
function create2dArray(colms, rows) {
  let emptyArray = [];
  for (let y=0; y<rows; y++) {
    emptyArray.push([]);
    for (let x=0; x<colms; x++) {
        emptyArray[y].push(0);
       }
  }
  return emptyArray;
}

// function player1Win () { 
//   if (grid)
// }