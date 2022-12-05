// Local Storage
// Anjana Samarasinghe
// Dec 5, 2022


let numberofClicks = 0;
let highestEver = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  if ( getItem("highscore") !== null){
    highestEver = getItem("highscore"); 
  }
  
  else {
    storeItem("highscore", 0); 
  }
}

function draw() {
  background(220);

  fill("green"); 
  textSize(100); 
  text(numberofClicks, width/2, height/2);
  
  fill("red"); 
  text(highestEver, 50, height - 100); 
}

function mousePressed() {
  numberofClicks++;

  if(numberofClicks > getItem("highscore")) {
    storeItem("highscore", numberofClicks); 
  }
  highestEver = numberofClicks; 
}
