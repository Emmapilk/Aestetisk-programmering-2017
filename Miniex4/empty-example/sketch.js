var diameter = 30;

var posX;
var posY;

var score = 0

function setup() {
createCanvas(800,600);
frameRate(20);

posX = random(0,800);
posY = random (0,600);
}

function draw() {
background(64, 164, 223);
textAlign (CENTER, TOP);
textSize (100);
text('Bubble Burster', width/2, 10)
fill(255,255,255,80);
stroke (255,255,255,128);

textSize (35);
textAlign (LEFT,BOTTOM);

push();
if (score < 0) {fill (155,0,0);}
else {fill (0,255,0);}
text('score: '+score,10,height-10);
pop();

ellipse(posX,posY,diameter,diameter);
diameter = diameter + 3
if (diameter >= 200) {
	diameter = 30;

score = score-1;

posX = random (0,800);
posY = random (0,600);

}
}
function mouseClicked() {
if (dist(posX, posY, mouseX, mouseY) <= diameter/2){
		diameter = 30;

score = score+1;

posX = random (0,800);
posY = random (0,600);

} else {score = score-1;}
return false;

}