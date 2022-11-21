class Button { 
  constructor (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width; 
    this.colour = "black";
    this.hovercolor = "gray"; 
  }
  display(){
    if (this.isInside(mouseX, mouseY)) {
      fill(this.hovercolor); 
    }
    else {
      fill(this.colour); 
    }

    rect(this.x, this.y, this.width, this.height); 
  }
  isInside(x,y) {
    let leftSide = this.x; 
    let rightSide = this.x + this.width; 
    let topSide = this.y; 
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide && y > topSide && y < bottomSide; 
  }
}

let button1 = new Button(200, 300, 150, 75); 
let button2 = new Button(200, 600, 150, 75);
let backgroundColor = "lightgrey"; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(backgroundColor);
  button1.display();
  button2.display(); 
}

function mousePressed() {
  if (button1.isInside(mouseX, mouseY)) {
    backgroundColor = "red";
  }
  if (button2.isInside(mouseX, mouseY)) {
    backgroundColor = "blue";
  }
}



