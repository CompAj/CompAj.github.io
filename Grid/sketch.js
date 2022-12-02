// Tic Tac Toe
// Is a 2 player game where each player gets to put down a letter (X or O) in a turn based system and if you either get a column, row or diagonal with your letters you win!
// Anjana Samarasighe
// December 2, 2022

//Defintions
let grid;
//These Never Change
const ROWS = 3; 
const COLMS = 3; 
//Images and Backgrounds
let oBg; 
let xBg;
//Whaat Point You Are In the Game
let state;
//Score
let score1; 
let score2;
// turn
let turn;
//Begging Screen
let starterScreen;
//X and O Images
let xImg;
let oImg;
//Background
let drawImg;
//Adds Truns To keep Track of A Draw  
let truns;
//Checks Who Wins
let winner; 

//Loads Images Before
function preload() {
  starterScreen = loadImage("Tic-tac-toe.png");
  xImg = loadImage("X.png");
  oImg = loadImage("O.png");
  oBg = loadImage("oBackground.png"); 
  xBg = loadImage("xBackground.png"); 
  drawImg = loadImage("drawBackground.png");
}

// Where most Of the Let Statments Are Defined
function setup() {
  createCanvas(windowWidth, windowHeight);
  score1 = 0; 
  score2 = 0; 
  turn = "player1"; 
  grid = create2dArray(ROWS, COLMS);
  state = "startScreen"
  turns = 0; 
}

// A Draw That Is Used To Display the Code
function draw() {

  if (state === "finish") {
    if (winner === "p1") {
      image(oBg, 0, 0, width, height);
      socrePlace();
      playAgain(); 
    }
    if (winner === "p2") {
      image(xBg, 0, 0, width, height);
      socrePlace();
      playAgain(); 
    }
    if (winner === "nobody") {
      image(drawImg, 0,0,width, height)
      socrePlace();
      playAgain(); 
    }
  }
  


  else if (state === "startScreen") {
    image(starterScreen, 0, 0, width, height);
    startScreen(); 
    
  }
  else if (state === "playGame") {
  background(220);
  displayGrid(grid);
  winCondition();
  }
}

//Checks When the Mouse Is Being Pressed and Also Checks the States
function mousePressed() {

  console.log(mouseX, mouseY);
  let cellWidth = width / ROWS
  let cellHeight = height / COLMS; 

  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);

  if (grid[y][x] === 0) {
    turnChange();
  }

  if (state === "finish" && mouseInsideRect(windowWidth / 2 - 150, windowWidth / 2 - 150 + 300, windowHeight / 2 + 150, windowHeight / 2 + 300)) {
    state = "startScreen";
  }
  
  if (state === "startScreen" && mouseInsideRect(windowWidth / 2 - 150, windowWidth / 2 - 150 + 300, windowHeight / 2, windowHeight / 2 + 150)) {
    state = "playGame";
  }

  else if (grid[y][x] === 0 && turn === "player1") {
    grid[y][x] = 1;
  }

  else if (grid[y][x] === 0 && turn === "player2") {
    grid[y][x] = 2;
  }
}

//Displays Grid and Checks Whats Being Pushed and Applies the Images 
function displayGrid(grid) {

  
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;
  

  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        fill("white");
      }
      else if (grid[y][x] === 1) {
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(oImg, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
        
        
      }

      else if (grid[y][x] === 2) {
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        
        image(xImg, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
      
    }
  }
}

//Creates 2d Array By Pushing Zeros Into An Empty Array
function create2dArray(COLMS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLMS; x++) {
        emptyArray[y].push(0);
       }
  }
  return emptyArray;
}


function winCondition() {
  
//ROWS
  if (grid[0][0] === 1 && grid[0][1] === 1 && grid[0][2] === 1) { //Top Row 
    player1Win();
  }
  
  else if (grid[1][0] === 1 && grid[1][1] === 1 && grid[1][2] === 1) { //Middle Row 
    player1Win(); 
}

  else if (grid[2][0] === 1 && grid[2][1] === 1  && grid[2][2] === 1) { //Bottom Row 
  player1Win(); 
}


//Colmbs
  else if (grid[0][0] === 1 && grid[1][0] === 1  && grid[2][0] === 1) { //First Columb  
    player1Win();  
}

  else if (grid[0][1] === 1 && grid[1][1] === 1 && grid[2][1] === 1) { //Second Columb  
    player1Win(); 
}

else if (grid[0][2] === 1 && grid[1][2] === 1 && grid[2][2] === 1) { //Third Columb  
  player1Win(); 
}

//Diagonals 

else if (grid[0][0] === 1 && grid[1][1] === 1 && grid[2][2] === 1) { //Left-Right Diagonal   
  player1Win(); 
}

else if (grid[0][2] === 1 && grid[1][1] === 1 && grid[2][0] === 1) { //Left-Right Diagonal   
  player1Win();
}

//Player 2 win Condition
else if (grid[0][0] === 2 && grid[0][1] === 2 && grid[0][2] === 2) { //Top Row 
  player2Win(); 
}

else if (grid[1][0] === 2 && grid[1][1] === 2 && grid[1][2] === 2) { //Middle Row 
  player2Win();
}

else if (grid[2][0] === 2 && grid[2][1] === 2 && grid[2][2] === 2) { //Bottom Row 
player2Win();
}


//Colmbs
else if (grid[0][0] === 2 && grid[1][0] === 2 && grid[2][0] === 2) { //First Columb  
  player2Win();
}

else if (grid[0][1] === 2 && grid[1][1] === 2 && grid[2][1] === 2) { //Second Columb  
  player2Win();
}

else if (grid[0][2] === 2 && grid[1][2] === 2 && grid[2][2] === 2) { //Third Columb  
player2Win();
}

//Diagonals 

else if (grid[0][0] === 2 && grid[1][1] === 2 && grid[2][2] === 2) { //Left-Right Diagonal   
player2Win();
}

else if (grid[0][2] === 2 && grid[1][1] === 2 && grid[2][0] === 2) { //Left-Right Diagonal   
player2Win();
}

//Check for a draw
  else if (turns / 9 === 1) {
    turns = turns + 1;
    winner = "nobody"; 
    endGame(); 
  }
}



//Displays Start Screen and Resets Game
function startScreen() {
  grid = create2dArray(COLMS, ROWS);
  turns = 0;

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

//Checks If the Mouse Is In A Specific Area
function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right &&
         mouseY >= top && mouseY <= bottom;
}

//Changes the Turns For Each Player
function turnChange() {
  if (state === "playGame"){
    if (turn === "player1") {
      turn = "player2";
      turns =  turns + 1; 
    }
    else if (turn === "player2") {
      turn = "player1";
      turns =  turns + 1; 
    }
  }
}

//X wins
function player1Win() {
  winner = "p1";
  score1 = score1 + 1;
  endGame(); 
}

//O wins
function player2Win() {
  winner = "p2"; 
  score2 = score2 + 1;
  endGame();
}

//Ends the Game
function endGame(){ 
  state = "finish"; 
}

//Displays Score Board
function socrePlace() {
  textSize(15);
  text("X's Score:" + " "+ score1, windowWidth / 2, 30);
  text("O's Score:" + " "+ score2, windowWidth / 2, 60);
}

//Returns To the Start Screen
function playAgain () {
  if (mouseInsideRect(windowWidth / 2 - 150, windowWidth / 2 - 150 + 300, windowHeight / 2 + 150, windowHeight / 2 + 300)) {
    fill("white");
  }
  else {
    fill("blue");
  }
  rect(windowWidth / 2 - 150 , windowHeight / 2 + 150, 300, 150);
  fill("black");
  textSize(50);
  text("Again?", windowWidth / 2 - 150 + 80, windowHeight / 2 + 150 + 90);
  fill("red"); 
  state = "finish";
}
//End Code