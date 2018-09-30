

// Setup
// Here it is possible to define line width, colors and length of pi line
const COLORS = [
    [22, 160, 133],
    [39, 174, 96],
    [41, 128, 185],
    [142, 68, 173],
    [241, 196, 15],
    [230, 126, 34],
    [243, 156, 18],
    [211, 84, 0],
    [192, 57, 43],
    [52, 73, 94]
];

// -----------------------------------------------------------------------------

let pi = '';

let x = 0;
let y = 0;
let show;
let counts;
let index=0;
function setup() {

  pi = PI.substr(2, PI.length);
  x = windowWidth/2;
  y = windowHeight/2;
console.log(pi.length);
show= pi.split("");
console.log(show);
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth/2, windowHeight/2);
  frameRate(100);
  background(0);
 stroke(255);
  fill(0);
  ellipse(0,0,800,800);

}

function draw() {

  translate(windowWidth/2, windowHeight/2);


  let digit = pi[index];
  let nextdigit = pi[index+1];
  index++;

  //  console.log(counts);
var diff = TWO_PI/10;
var range=random(0.1,0.5);
      var a = map(digit, 0, 10, 0, TWO_PI)+random(-diff,diff);
      var a2 = map(nextdigit, 0, 10, 0, TWO_PI)+random(-diff,diff);
      var x1 = 400* cos(a);
      var y1 = 400* sin(a);
      var x2 = 400* cos(a2);
      var y2 = 400* sin(a2);
      var z1 = map(digit, 0, 10, 0, TWO_PI);
      var z2 = map(nextdigit,0, 10, 0, TWO_PI);
      var w1 = 400* cos(z1);
      var q1 = 400* sin(z1);
      var w2 = 400* cos(z2);
      var q2 = 400* sin(z2);
      stroke(COLORS[digit]);
      line(x1,y1,x2,y2);
        stroke(0);
      line(w1,q1,w2,q2);

      ellipse(q2,w2,12,12);

}
