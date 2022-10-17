//First Assignment: (Bouncers)
//Anjana Samarasinghe
//Oct.17, 2022
//Extra for experts: I took on a few tasks for additional experts. The installation of a scoreboard is the first point I want to make. While the game is running, it maintains track of the player's score and resets when the player tries again. The second thing I tried to do was to occasionally have the square travel quicker, which made the game harder as it advanced to a certain point. Consequently, the speed of the square would grow to a specific degree whenever the player's score is divisible by three. Additionally, adjusting the speed limit will alter how difficult the game is since doing so will force the square's speed to scale until it reaches your set limit.


//Set Varibles

//Makes it so the Game Knows to Put it to the Start Screen
let state = "start";

//Loads Start Screen Image
let gameImg;

//Sets the Postion of X at the Start of the Game
let x = 0;

//Sets the Postion of Y at the Start of the Game
let y = 0;

//Sets the Postion of A or the Player's X Coordinate at the Start of the Game
let a = 400;

//Sets the Postion of B or the Player's Y Coordinate at the Start of the Game
let b = 400;

//Sets the Diameter of the Circle
let circleSize = 10;

//Sets the Speed of the Circle
let circleSpeed = 5;

//Speeds of the Square in the Y and X direction
let dx = 3;
let dy = 2;

//Sets the Width and Length of the Square
let squareSize = 50;

//Sets the Color of the Square
let squareColor;

//Also a Speed for the Circle in the X and Y directions
let ax = 3;
let bx = 2;

//Loads End Screen Image
let gameEnd;

//Sets the Inital Score to 0
let score = 0;

//How Fast You Want For the Square to End Up Going
let speedLimit = 33; 

//Main Code
//Loads Images Right Away
function preload() {
  gameImg = loadImage("game-img.jpg");
  gameEnd = loadImage("gameOverimg.jpg");
}
//Creates the Screen For the Game
function setup() {
  createCanvas(windowWidth, windowHeight);
  squareColor = color(255, 0, 0);
}
//Keeps a Constant Loop of All of the Functions
function draw() {
  //Asks What Point the Game is at Ex. Beggining, Middle or End
  if (state === "end") {
    endGame(); 
  }
  if (state === "start") {
  //Sets the New X and Y Coordinate For the Player and Square
    x = windowWidth / 2;
    y = windowHeight / 2;
    a = 100;
    b = 100;
    
    //Sets New Speed on Square abd Score
    dx = 3;
    dy = 2; 
    score = 0; 
    //Loads Beggining Image
    image(gameImg, 0, 0, width, height);
    startScreen();
  }
  //Checks to See If the Game is Going to End
  if (state === "main") {
    if (getDistance(x,y,a,b) < squareSize + circleSize / 2 ) {
      image(gameEnd, 0, 0, width, height);
      state = "end"; 
    }
    //Runs the Main Functins (Functions Will Be Descirbed Futher Down)
    else{
      background(220);
      socrePlace();
      handleKeys();
      drawCircle();
      drawSquare();
      moveSquare();
      bounceIfNeeded();
      bounceIfneededcircle();
      scoreBoard();
      speedUp(); 
    }
  } 
}

//Draw The Main Player Which is a Circle
function drawCircle() {
  fill("rgb(0,50,255)");
  noStroke();
  circle(a , b, circleSize);
}
//All Movement Keys For the Player
function handleKeys() {
  if (keyIsDown(87)) { //w
    b -= circleSpeed;
  }
  if (keyIsDown(83)) { //s
    b += circleSpeed;
  }
  if (keyIsDown(68)) { //d
    a += circleSpeed;
  }
  if (keyIsDown(65)) { //a
    a -= circleSpeed;
  }
}

//Draws the Object You Are Trying to Avoid
function drawSquare() {
  fill(squareColor);
  square(x, y, squareSize);
}
//Moves the Object Around
function moveSquare() {
  x += dx;
  y += dy;
}

//Bounces the Object(Sqaure) Around the boarder of the Window
function bounceIfNeeded() {
  //bounce off right wall
  if (x >= width - squareSize) {
    dx *= -1;
    //don't get caught on wall
    x = width - squareSize - 1;
    changeSquareColor();
  }
  //bounce off left wall
  else if (x <= 0) {
    dx *= -1;
    //don't get caught on wall
    x = 1; 
    changeSquareColor();
  }
  //bounce off bottom wall
  if (y >= height - squareSize) {
    dy *= -1;
    //don't get caught on wall
    y = height - squareSize - 1; 
    changeSquareColor();
  }
  //bounce off top wall
  if (y <= 0) {
    dy *= -1;
    //don't get caught on wall
    y = 1; 
    changeSquareColor();
  }
}

//Changes the Square Color Everytime it hit's a Wall
function changeSquareColor() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  squareColor = color(r, g, b);
}

//Creates a Boarder That Does Not Allow the Player to Go Past
function bounceIfneededcircle() {
  if (a >= width - circleSize) {
    ax *= -1;
    //don't get caught on wall
    a = width - circleSize - 1;
  }
  //bounce off left wall
  else if (a <= 0 + circleSize) {
    ax *= -1;
    //don't get caught on wall
    a = circleSize; 
  }
  //bounce off bottom wall
  if (b >= height - circleSize) {
    bx *= -1;
    //don't get caught on wall
    b = height - circleSize - 1; 
  }
  //bounce off top wall
  if (b <= 0 + circleSize) {
    bx *= -1;
    //don't get caught on wall
    b = circleSize; 
  }
}

//Creates the Start Box At the Beggining of the Game and Keep track of where your Curser is
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

//Sees if Curser is inside the Rectangle
function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right &&
         mouseY >= top && mouseY <= bottom;
}

//Checks If the Mouse Was Pressed in the Right Area Ex.Rectangle
function mousePressed() {
  if (state === "start" && mouseInsideRect(windowWidth / 2 - 150, windowWidth / 2 - 150 + 300, windowHeight / 2, windowHeight / 2 + 150)) {
    state = "main";
  }
  if (state === "end" && mouseInsideRect(windowWidth / 2 - 150, windowWidth / 2 - 150 + 300, windowHeight / 2 + 150, windowHeight / 2 + 300)) {
    state = "start"; 
  }
} 
//Collision, Check How Far the Player is From the Square
function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1; 
  return sqrt(abs(pow(xDistance, 2) + pow(yDistance, 2)));
}

//Game Over Message & Makes Again Button
function endGame(){
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
  textSize(20);
  text("Score:" + " " + score, 10, 30);
  state = "end";
}

//Makes a Scoreboard During the "main" State of the Game
function scoreBoard() {
  while (state === "main") {
    score += 1; 
    return score; 
  }
}

//Places the Score At the Top Middle of the Screen
function socrePlace() {
  textSize(15);
  text("Score:" + " "+ score, windowWidth / 2, 15);
}

//Speeds Up the Sqaure Everytime the Score is Divisable By Three Hundred
function speedUp() {
  if(score / 300 === int(score / 300)){
    if (dx > 30 || dx < -30) {
      if (dx === abs(dx)) {
        dx = speedLimit;
      }
      if (dx === -33){
        dx = - speedLimit; 
      }
    }
    else {
      if (dx === abs(dx)) {
        dx = dx + 5;
      }
      else {
        dx = dx -5; 
      }
    }
  }
}
//End of Code
  
  
  
  
  
  
  
   