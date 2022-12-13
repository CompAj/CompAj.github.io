class Player {
  constructor(postion, velocity) {
    this.velocity = velocity; 
    this.postion = postion;
    
  }
}

let player = new player({
  postion: {
    x: 0,
    y: 0, 
  }, 
  velocity: {
    x:0,
    y:0
  }



}); 



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
