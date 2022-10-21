// Terrian
// Anjana Samarasighe

let theHeights = [];
let startLocation = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeights = generateHeights(20000);
}

function draw() {
  background(220);
  for (let i = startLocation; i < startLocation + width; i++) {
    displayRectangle(i - startLocation, theHeights[i], 1);
  }
  if (keyIsPressed) {
    startLocation += 100; 
  }
}

function generateHeights(howMany) {
  let tempArray = []; 
  let time = random(10000);
  for (let i = 0; i < howMany; i++) {
    tempArray.push(noise(time) * height);
    time += 0.001; 
  }
  return tempArray; 
}

function displayRectangle (x, rectHeight, rectWidth) {
  let y = height - rectHeight; 
  rect(x, y, rectWidth, rectHeight); 
}