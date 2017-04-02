var yoff = 0; // used for the noise to give the wings of the butterfly variation over time.

var insideCol = []; //Array of inside fills for butterflies
var outsideCol = []; //Array of outside fills
var outsideLine = []; //Array of outside stroke colours
var transition = [];  //Array of trasition stroke colours between inside and outside

//Javascript Classes defining positions of each butterfly
var butterfly0 = {
  x: 100,
  y: 100
};
var butterfly1 = {
  x: 100,
  y: 100
};
var butterfly2 = {
  x: 100,
  y: 100
};
var butterfly3 = {
  x: 100,
  y: 100
};
var butterfly4 = {
  x: 100,
  y: 100
};


function setup() {
  createCanvas(windowWidth, windowHeight);

  push();
  colorMode(HSB, 360);
  //Generate random colours for each butterfly
  for(var n = 0; n < 5; n++) {
    insideCol[n] = color(random(150,200), random(200,255), random(128,255));//insideCol = color(hue, saturation, brightness)
    outsideCol[n] = color(random(220,270), random(200,255), random(128,255));
    outsideLine[n] = color (random(150,270), random(200,255), random(128,255));
    transition[n] = lerpColor(insideCol[n], outsideCol[n], 0.5); // transition colour is defined as the midpoint between both inside and outside colours
  }
  pop();

//Top-Left
  butterfly0.x = random(100, width/2-100);
  butterfly0.y = random(100, height/2-100);

//Top-Right
  butterfly1.x = random(width/2+100, width-100);
  butterfly1.y = random(100, height/2-100);
  
//Bottom-Left
  butterfly2.x = random(100, width/2-100);
  butterfly2.y = random(height/2+100, height-100);

//Bottom-Right
  butterfly3.x = random(width/2+100, width-100);
  butterfly3.y = random(height/2+100, height-100);

//Center
  butterfly4.x = width/2;
  butterfly4.y = height/2;

}

function draw () {
  background (240,248,255);

  //Draw each butterfly
  butterfly(butterfly0, 0);
  butterfly(butterfly1, 1);
  butterfly(butterfly2, 2);
  butterfly(butterfly3, 3);
  butterfly(butterfly4, 4);
  
  yoff += 0.1;
}

function butterfly (bf, colorN) {
  push();
  translate (bf.x, bf.y); //translates to the center of the canvas. 
  rotate (PI/2); // Rotates so that it mirrors along the y-axis instead of the x-axis.
  
  var da = PI/100; // the number of points for each half of the butterfly.
  var dx = 0.1; // the smoothness of the noise
 

//Outside Shape Colours
  stroke (outsideLine[colorN]);
  fill (outsideCol[colorN]);
  strokeWeight (1);
  
//Outside Shape Points
  beginShape ();
  var xoff = 0;
  for (var a = -PI/2; a < PI/2; a += da) {
    var n = noise (xoff, yoff);
    var r = sin (2*a) * map (n, 0, 1, 50, 100);
    var x = r * cos (a);
    var y = r * sin (a) * sin (yoff); //sin(yoff) is used to create illusion of "flapping"
    xoff += dx;
    vertex (x,y);
}
  for (var a = PI/2; a <= 3 * PI/2; a += da) {
    var n = noise (xoff, yoff);
    var r = sin (2 * a) * map (n, 0, 1, 50, 100);
    var x = r * cos (a);
    var y = r * sin (a) * sin (yoff);
    xoff -= dx;
    vertex (x,y);
}
endShape ();

//Inside Shape and Transition Colours
  stroke (transition[colorN]);
  fill (insideCol[colorN]);
  strokeWeight (10); // this sets trasition colour to be 10 pixels wide

 //Inside shape points
  beginShape ();
  var xoff = 0;
  for (var a = -PI/2; a < PI/2; a += da) {
    var n = noise (xoff, yoff);
    var r = sin (2*a) * map (n, 0, 1, 25, 50); //Same shape as outer but half size/values
    var x = r * cos (a);
    var y = r * sin (a) * sin (yoff);
    xoff += dx;
    vertex (x,y);
}
  for (var a = PI/2; a <= 3 * PI/2; a += da) {
    var n = noise (xoff, yoff);
    var r = sin (2 * a) * map (n, 0, 1, 25, 50); // Same shape as outer but half size/values
    var x = r * cos (a);
    var y = r * sin (a) * sin (yoff);
    xoff -= dx;
    vertex (x,y);
}
endShape ();

pop();
} 