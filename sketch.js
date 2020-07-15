function setup() {
  createCanvas(1200,800);
}

function draw() {
  background("white");  
let h = hour();
textSize(50);
text("hr:"+ h, 5,50);

let m = minute();
textSize(50);
text("min:"+ m, 130,50);

let s = second();
textSize(50);
text("sec:"+ s,290,50);
}