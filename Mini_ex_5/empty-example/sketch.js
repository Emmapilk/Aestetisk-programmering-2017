var longstring;
var poems;
var img;
var currentPoem;
var cnv;

function preload (){
	img = loadImage ("toilet.jpg")
	longstring = loadStrings("data/Toilet_poetry.txt");
}

function setup() {
	cnv = createCanvas(736, 736);
	cnv.mousePressed (changePoem);
	image(img, 0, 0);
console.log("hello world");
splitString(longstring);
currentPoem = poems [0];
}

function splitString(result){
	var joinedtext = join (result, '\n');
	poems = split (joinedtext, '!');
	for (var i = 0; i < poems.length; i ++) {
		console.log(poems [i]);
	}
}

function draw() {
	fill (255);
	noStroke();
	rect (0, 10, width, 270);
	fill(0);
	textAlign (CENTER,CENTER);
	textSize(16);
	text(currentPoem, width/2, 140);

}

function changePoem() {
	currentPoem = poems [int (random (poems.length - 1))];
	}