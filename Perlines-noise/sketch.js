// Perline noise demo

let x;
let y; 
let radius;
let time = 0;

let allCircles = []; 

function keyIsPressed(){
  
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(50, 100), 
    time: random(5000),
  }; 
  allCircles.push(theBall); 
}
    

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  fill("black");


  for (let i = 0; i < allCircles.length; i++){
    allCircles[i].x = noise(allCircles[i].time) * width;
    allCircles[i].y = noise(allCircles[i].5000) * ; 
    x = noise(time) * width;
    y = noise(time + 5000) * height; 
  
    //increase time along perlin noise
    time += 0.01;
    circle(x, y, radius*2); 
  }
}
