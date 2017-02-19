function setup() {
createCanvas (740, 600); //selve canvaset
background ('rgba(0,255,0, 0.25)'); // grøn baggrundsfarve
}

function draw() {
noStroke(); // ingen streg rundt om trekant
fill('#fae'); // pink farve
rect(30, 280, 80, 80); //trekant (x-akse,y-akse,width,hight)

rect(150, 280, 80, 80); // x-akse altid + 120, y-akse altid det samme

rect(270, 280, 80, 80);

rect(390, 280, 80, 80);

rect(630, 280, 80, 80);

stroke('red');
strokeWeight (4);
line(510, 320, 590, 320);

fill('red');
textAlign(CENTER);
textFont("Georgia");
textSize(100);
text("ERROR!", 370, 120);
}