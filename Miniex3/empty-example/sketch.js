function setup() {
	console.log("Hello World");
	createCanvas(800,600);
	background(99, 102, 99); //baggrundsfarve
	frameRate(60); //på et sekund vil koden løbe 60 gange.

}

function draw() {
	
	noStroke(); //ingen kontur
	fill(99, 102, 99);
	rect(0,0,width,height);
	translate (width/2,height/2); //transformerer koordinatet til at være 0,0 i midten af canvasset.
		fill(73, 16, 48);
		ellipse(0,0,135,135); //mørke lilla kant omkring urskiven.
	fill(160, 147, 165);
	ellipse(0,0,120,120); //lyselilla urskive.
	
	
	noStroke();
	fill(0,0,0);
	textAlign(CENTER,CENTER); //skriten placeres i midten. lettere at arbejde med x-, og y-koordinaterne fra midten af.
	textSize(20);
		text("12",0,-45);
		text("6",0,45);
		text("3",45,0);
		text("9",-45,0);
	
	
	push();
	var cir = 360/60*(frameCount%60);
	rotate(radians(cir));
	noStroke();
	fill(161, 224, 207);
	rect(-1.25, -1.5, 2.5, 45);
		//ellipse(0,0,6,6);
	pop();

	push();
	var cir = 360/720*(frameCount%720);
	rotate(radians(cir));
	noStroke();
	fill(161, 224, 207);
	rect(-1.75,-2.5,3.5,33);
	pop();


}