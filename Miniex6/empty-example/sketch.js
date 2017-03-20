var angle = 45;
var r, g, b;

function setup() {
  createCanvas(600, 600);
  frameRate (2);

}

function draw() {
  if (frameCount %6 == 0){ //der er 2 frames pr second, og for hvert 6 frame, skal 'branch'-funktionen kaldes. 
background (0);
angleMode (DEGREES);
translate (width/2, height*0.8); //fordi det er grenens position som jeg gerne vil starte mit 0,0 koordinat fra, skal dette koordinatpunkt derfor translates (til i midten på bunden, hvor stamen på træet starter). Det virker at skrive 'width/2' idét det første koordinatpunkt hermed bliver i midten af x-aksen - derudover virker det også at skrive 'height' på y-positionen, fordi det betyder den 'maks-højde' af canvasset.
branch (100);

  }
}

function branch(len) {

  r = random (255);
  g = random (255);
  b = random (255);
  angle = random (90);

  push();
  stroke (r,g,b);
  line(0, 0, 0, -len); //det virker at minusse med 'len', fordi vi har defineret 'branch' i function draw til 100, og så når 'branch' bliver til en funktion, og man skriver (len) i funktionens parantes, lader det til at overflytte denne '100' enhed fra draw funktions branchen, over i branch funktionens 'len'. Derudover har vi som sagt defineret 0,0 koordinatet til at være den maks højde på Y-akesen (for vi starter 0.0 punktet i programmering ligger automatisk oppe i venstre hjørne), så for at få den rigtige længde på stammen, skal 100 (len) altså trækkes fra højden - derfor minus, i stedet for bare at skrive det som et positivt tal (i dette tilfælde ville stammen fortsætte nedad, og vi ville derfor ikke kunne se stammen på canvasset.)
  pop();
  translate(0, -len); //for at den næste branch ikke skal starte på samme sted som den første branch var placeret, rykker man 0,0 koordinatet hen hvor den anden linje slutter.
  if (len > 10) {
    
    push();
    rotate(0);
    branch (len*0.70);
    pop(); 

    push();
    rotate(angle); //jeg har defineret angle til at være 45 i min globale variable oppe i toppen af canvasset, så den ved allerede at det er en 45 graders vinkel som programmt skal starte en ny gren ud fra. Normalt regner man med 'radians' i kodesprog til vinkler, men fordi jeg har skrevet 'angleMode(DEGREES)', har det været muligt for mig at ændre det fra radians til grader i stedet, da det er lidt lettere at arbejde med.
    branch(len * 0.70); // Når man kalder branch inde i branch funktionen, så vil den blive ved med at loope det rundt, indtil man beder den om at stoppe, eller at den ikke længere kan bevæge sig (fordi der ikke er flere pixels at gøre med f.eks.).
    pop();
    
    push();
    rotate(-angle);
    branch(len * 0.70); 
    pop();
 
  }
}