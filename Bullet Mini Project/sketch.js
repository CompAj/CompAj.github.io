// Bullet
class Bullet {
  constructor(x , y){
    this.x = x; 
    this.y = y; 
    this.radius = 3;  
    this.dx = 5;
    this.theColor = color(255, 0 ,0); 
  }
  move() { 
    this.x += this.dx; 
    this.y += this.dy; 
  }

  display() {
    fill("red"); 
    noStroke(); 
    circle(this.x, this.y, this.radius); 
  }
}


let theCircle = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  let newBullet = new Bullet(300, 300);
  theCircle.push(newBullet); 
}

function draw() {
  background(220);
  for (let i = 0; i < theCircle.length; i++) {
    theCircle[i].move();
    theCircle[i].display();  
  }
}

function mousePressed() {
  let newBullet  = new Bullet(300, 300); 
  theCircle.push(newBullet); 
}
