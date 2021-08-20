function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

// The same as doing: background(220); or --> background(220,220,220);

function draw() {
  background("#e76f51");

  translate(width / 2, height / 2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  noFill();
  strokeWeight(4);

  push();
  stroke("#264653");
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);
  pop();

  push();
  rotate(secondAngle);
  stroke("#3d405b");
  line(0, 0, 140, 0);
  pop();

  push();
  stroke("#2a9d8f");
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, minuteAngle);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#023047");
  line(0, 0, 120, 0);
  pop();

  push();
  stroke("#e9c46a");
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 220, 220, 0, hourAngle);
  pop();

  push();
  rotate(hourAngle);
  stroke("#073b4c");
  line(0, 0, 100, 0);
  pop();

  push();
  stroke("#f4a261");
  strokeWeight(5);
  point(0, 0);
  pop();
}
