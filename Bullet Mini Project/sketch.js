// Bullet
class Bullet {
  constructor(theImage){
    this.x = 200; 
    this.y = 500; 
    this.radius = 3;  
    this.dx = 5;
    this.theColor = color(255, 0 ,0); 
    this.image = theImage; 
  }
  move() { 
    this.x += this.dx; 
    this.y += this.dy; 
  }

  display() {
    image(this.image, this.x, this.y, this.image.width * 0.3, this.image.height * 0.3); 
  }
  isDead() {
    return this.x >= width; 
  }
}

let bullets = [];
let bulletImg;   

let someBullet = new Bullet;


fucntion preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let someBullet of bullets) {
    someBullet.move(); 
    someBullet.display();
  }

  for ( i = bullets )
}




function keyPressed() {
  let someBullet = new Bullet();
  bullets.push(someBullet); 
}