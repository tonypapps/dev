var inc = 0.01;
var scl = 10;
var cols, rows;
var zoff = 0;
var particles = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB,255);
  cols = floor(width/scl);
  rows = floor(height/scl);
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 100; i++) {
    particles[i] = new Particle();
  }
  background(26);
}
function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    xoff = 0;
    for(var x = 0; x < cols; x++){
      var index = x + y * cols;
      var angle = noise(xoff,yoff,zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(5);
      flowfield[index] = v;
      xoff += inc;
      stroke(0,50);
    }
    yoff += inc;
    zoff+= 0.0003;
  }
  for (var i = 0; i < particles.length; i++) {
  particles[i].follow(flowfield);
  particles[i].update();
  particles[i].edges();
  particles[i].show();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(26);
}
