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
let starterScreen;

function preload() {
  starterScreen = loadImage("Tic-tac-toe.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  score1 = 0; 
  score2 = 0; 
  turn = random(1,2);
  grid = create2dArray(rows, colms);
  state = "startScreen"
}


function draw() {
  if (state === "startScreen") {
    image(starterScreen, 0, 0, width, height);
    startScreen();
  }
  if (state === "playGame") {
  background(220);
  displayGrid(grid);
  }
}

function mousePressed() {
  
  console.log(mouseX, mouseY);
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;

  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);
  
  if (state === "startScreen" && mouseInsideRect(windowWidth / 2 - 150, windowWidth / 2 - 150 + 300, windowHeight / 2, windowHeight / 2 + 150)) {
    state = "playGame";
  }

  else if (grid[y][x] === 0) {
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


function winConditionP1() {
  
//Rows
  if (grid[0][0] === 1 && grid[0][1] === 1 && grid[0][2] === 1) { //Top Row 
      console.log("win");
  }
  
  if (grid[1][0] === 1 && grid[1][1] === 1 && grid[1][2] === 1) { //Middle Row 
    console.log("win");
}

  if (grid[2][0] === 1 && grid[2][1] === 1  && grid[2][2] === 1) { //Bottom Row 
  console.log("win");
}


//Colmbs
  if (grid[0][0] === 1 && grid[1][0] === 1  && grid[2][0] === 1) { //First Columb  
    console.log("win"); 
}

  if (grid[0][1] === 1 && grid[1][1] === 1 && grid[2][1] === 1) { //Second Columb  
    console.log("win");
}

if (grid[0][2] === 1 && grid[1][2] === 1 && grid[2][2] === 1) { //Third Columb  
  console.log("win");
}

//Diagonals 

if (grid[0][0] === 1 && grid[1][1] === 1 && grid[2][2] === 1) { //Left-Right Diagonal   
  console.log("win");
}

if (grid[0][2] === 1 && grid[1][1] === 1 && grid[2][0] === 1) { //Left-Right Diagonal   
  console.log("win");
}

}

function winConditionP2() {
  if (grid[0][0] === 2 && grid[0][1] === 2 && grid[0][2] === 2) { //Top Row 
    console.log("win");
  }

  if (grid[1][0] === 2 && grid[1][1] === 2 && grid[1][2] === 2) { //Middle Row 
    console.log("win");
  }

  if (grid[2][0] === 2 && grid[2][1] === 2 && grid[2][2] === 2) { //Bottom Row 
  console.log("win");
  }
  

  //Colmbs
  if (grid[0][0] === 2 && grid[1][0] === 2 && grid[2][0] === 2) { //First Columb  
    console.log("win");
  }

  if (grid[0][1] === 2 && grid[1][1] === 2 && grid[2][1] === 2) { //Second Columb  
    console.log("win");
  }

  if (grid[0][2] === 2 && grid[1][2] === 2 && grid[2][2] === 2) { //Third Columb  
  console.log("win");
  }

  //Diagonals 

  if (grid[0][0] === 2 && grid[1][1] === 2 && grid[2][2] === 2) { //Left-Right Diagonal   
  console.log("win");
  }

  if (grid[0][2] === 2 && grid[1][1] === 2 && grid[2][0] === 2) { //Left-Right Diagonal   
  console.log("win");
  }

}

function startScreen() {
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