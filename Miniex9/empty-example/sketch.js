// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background

var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=6db54f2902d5a2ae7a27a4100dbff6c1';
var input;

var drops = [];
var rainIntensity = 1000;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < rainIntensity; i++) {
    drops[i] = new Drop();
  }

  var button = createButton ('submit');
  button.position (width/2-10,height+40);
  button.mousePressed (citychange);

  input = createInput ('Århus');
  input.position(width/2-50, height+10);

  function citychange (){
  	var url = api + input.value () + apiKey;
  	loadJSON (url, gotData);
  }

  citychange();
}

function gotData (data){
	weather = data;
	console.log(weather);
	console.log(weather.weather[0].id);
	var wId = weather.weather[0].id;
	switch(wId) {
		case 200:
		case 230:
		case 300:
		case 310:
		case 500:
		case 520:
			//Light Rain
			rainIntensity = 100;
			break;
		case 201:
		case 231:
		case 301:
		case 311:
		case 313:
		case 321:
		case 501:
		case 521:
		case 531:
			//Medium Rain
			rainIntensity = 300;
			break;
		case 202:
		case 232:
		case 302:
		case 312:
		case 314:
		case 502:
		case 522:
			//Heavy Rain
			rainIntensity = 600;
			break;
		case 503:
		case 504:
			//EXTREEEEEEEMMMMMMMMMMMMMEEEEEEEEE RAIN!!!!!
			rainIntensity = 1000;
			break;
		default: 
			//No Rain
			rainIntensity = 5;
	}
	console.log(rainIntensity)
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < rainIntensity; i++) {
    drops[i].fall();
    drops[i].show();
  }
}