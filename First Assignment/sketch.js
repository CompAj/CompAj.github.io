// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 0
let y = 0
let a = 100
let b = 100
let circleSize = 50;
let circleSpeed = 5;
let dx = 3;
let dy = 2;
let squareSize = 50;
let squareColor;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  squareColor = color(255, 0, 0);
}
 
function draw() {
  background(220);
  handleKeys();
  drawCircle();
  drawSquare();
  moveSquare();
  bounceIfNeeded();
}
function drawCircle() {
  fill("rgb(0,50,255)");
  noStroke();
  circle(a , b, circleSize);
}
 
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
function mouseWheel(event) {
  // console.log(event.delta);
  if (event.delta < 0) {
    //sanity check for max size
    if (squareSize < height * 0.75 &&
        squareSize < width * 0.75) {
      squareSize += 5;
    }
  }
  else {
    //sanity check for min size
    if (squareSize > 10) {
      squareSize -= 5;
    }
  }
}
 
function mousePressed() {
  dx = random(-5, 5);
  dy = random(-5, 5);
}
 
function drawSquare() {
  fill(squareColor);
  square(x, y, squareSize);
}
 
function moveSquare() {
  x += dx;
  y += dy;
}
 
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
 
function changeSquareColor() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  squareColor = color(r, g, b);
}
 
 

