var checkbox = [];

function setup() {
	createCanvas(600,400);
	for(var x = 0; x < width/50; x++) {
		for(var y = 0; y < height/50; y++) {
			checkbox[x+y*width/50] = createCheckbox("", false);
			checkbox[x+y*width/50].position(x*50, y*50);
			checkbox[x+y*width/50].changed(myCheckedEvent);
		}
	}
	
	
}

function draw() {
  background (200);
}

function myCheckedEvent() {
	if(this.checked()) {
		var r = int(random(checkbox.length));
		checkbox[r].checked(true);
	}
}