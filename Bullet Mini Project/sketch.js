// Bullet
class Bullet {
  constructor(x , y){
    this.x = 200; 
    this.y = 500; 
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
    circle(this.x, this.y, this.radius*2); 
  }
  isDead() {
    return this.x >= width; 
  }
}


let someBullet = new Bullet;
let bullets = [];  

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let someBullet of bullets) {
    someBullet.move(); 
    someBullet.display();
  }
}




function keyPressed() {
  let someBullet = new Bullet();
  bullets.push(someBullet); 
}