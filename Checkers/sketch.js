// Checkers 
// Anjana Samarasinghe 
// Oct 31, 2022 

let grid; 
let rows = 8; 
let colms = 8; 
let cellWidth;
let cellHeight;
let state;
let startScreen;
let gamepiece1; 

function preload() {
  startScreen = loadImage("Checkers.png");
  gamepiece1 = loadImage("red-piece.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = create2dArray(rows, colms); 
  cellWidth = width/colms;
  cellHeight = height/rows;
  state = "start"; 
}

function draw() {
  if (state === "start"){
    image(startScreen, 0, 0, width, height); 
    starterScreen(); 
  }

  if (state === "main") {
  background(220);
  displayGrid(grid);
  }
}




function displayGrid(grid) {
  for (let y=0; y<rows; y++) {
    for (let x=0; x<colms; x++) {
      if (grid[y][x] === 0) {
        fill("red");
      }
      if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function starterScreen () {
  if (mouseInsideRect(windowWidth / 2 - 150, windowWidth / 2 - 150 + 300, windowHeight / 2, windowHeight / 2 + 150)) {
    fill("yellow");
  }
  else {
    fill("blue");
  }
  rect(windowWidth / 2 - 150 , windowHeight / 2, 300, 150);
  fill("white");
  textSize(50);
  text("Start", windowWidth / 2 - 150 + 80, windowHeight / 2 + 90);
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right &&
         mouseY >= top && mouseY <= bottom;
}
function mousePressed() {
  if (state === "start" && mouseInsideRect(windowWidth / 2 - 150, windowWidth / 2 - 150 + 300, windowHeight / 2, windowHeight / 2 + 150)) {
    state = "main";
  }
}

function displayPieces () {
 for (let i = 0; i < 12; i++) {
   image(gamepiece1, )
 }


  }

function create2dArray(colms, rows) {
  let emptyArray = [];
  for (let y=0; y<rows; y++) {
    emptyArray.push([]);
    for (let x=0; x<colms; x++) {
      // if (y % 2 === 0) {
      //   emptyArray[y].push(1);
      // }
      if (y % 2 ===0 && x % 2 === 0){
        emptyArray[y].push(1);
      }
      
      if (y % 2 !== 0) {
        emptyArray[y].push(1);
      }
      
      else {
        emptyArray[y].push(0);
        // emptyArray[y].push(1);
      }
     
    }
  }
  return emptyArray;
}
