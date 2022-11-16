// Fireworks
// Anjana

class Partical {
  constructor(x , y) {
    this.x = x; 
    this.y = y; 
    this.dx = random(-5 ,5);
    this.dy = random(-5, 5);
    this.diameter = 2; 
    this.r = random(255); 
    this.g = random(255); 
    this.b = random(255); 
    this.alpha = 255; 
    this.color = color(this.r, this.g, this.b, this.alpha); 
  }
  update() {
    this.x += this.dx; 
    this.y += this.dy;
    this.alpha --;
    this.color = color(this.r, this.g, this.b, this.alpha); 
  }

  display() {
    fill(this.color); 
    stroke(this.color);
    circle(this.x, this.y, this.diameter);
  }

  isDead () {
    return this.alpha <= 0; 
  }
}

let fireWorks = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < fireWorks.length; i++) {
    fireWorks[i].update();
    if (fireWorks[i].isDead()) {
      fireWorks.splice(i, 1); 
    } 

    else {
      fireWorks[i].display(); 
    }
  }
}

function mousePressed () {
  for (let i = 0; i < 100; i++) {
    let somePartical = new Partical(mouseX, mouseY);
    fireWorks.push(somePartical); 
  }
}