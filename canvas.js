var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var c = canvas.getContext("2d")
var win = true

// mouse object
var mouse = {
  x: undefined,
  y: undefined
}

//takes mouse coordinates and bounds player object within playble area
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x
  mouse.y = event.y
  if (mouse.x < 300)
    mouse.x = 300;
  if (mouse.x > window.innerWidth - 300)
    mouse.x = window.innerWidth - 300;
  if (mouse.y < 25)
    mouse.y = 25;
  if (mouse.y > window.innerHeight - 25)
    mouse.y = window.innerHeight - 25;
})

//resizes canvas to window size
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  init();
})

//*********************************************************************************************** */
// function for checking colision detection
//*********************************************************************************************** */
function colDetection(x1, x2, y1, y2) {
  dist1x = x1 - mouse.x
  dist1y = y1 - mouse.y
  dist1 = Math.sqrt(Math.pow(dist1x, 2) + Math.pow(dist1y, 2))

  dist2x = x2 - mouse.x;
  dist2y = y2 - mouse.y;
  dist2 = Math.sqrt(Math.pow(dist2x, 2) + Math.pow(dist2y, 2))

  dist3x = x1 - x2;
  dist3y = y1 - y2;
  dist3 = Math.sqrt(Math.pow(dist3x, 2) + Math.pow(dist3y, 2))
  if ((dist1 + dist2 <= dist3 + .4)) {
    location.reload()
  }
}

//*********************************************************************************************** */
// function for drawing octagons with different part missing
//*********************************************************************************************** */
function octDraw(x, y, eSpeedb, ) {
  this.x = x;
  this.y = y;
  this.eSpeedb = eSpeedb;
  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x - this.eSpeedb, this.y - this.eSpeedb);
    c.lineTo(this.x, this.y - this.eSpeedb * 2);//2
    c.lineTo(this.x + this.eSpeedb * 1.5, this.y - this.eSpeedb * 2);//3
    c.lineTo(this.x + this.eSpeedb * 2.5, this.y - this.eSpeedb);//4
    c.lineTo(this.x + this.eSpeedb * 2.5, this.y + this.eSpeedb * 0.5);//5
    c.lineTo(this.x + this.eSpeedb * 1.5, this.y + this.eSpeedb * 1.5);//6
    c.lineTo(this.x, this.y + this.eSpeedb * 1.5);//7
    c.lineTo(this.x - this.eSpeedb, this.y + this.eSpeedb * 0.5);//8
    c.strokeStyle = "white"
    c.stroke();

    colDetection(this.x - this.eSpeedb, this.x, this.y - this.eSpeedb, this.y - this.eSpeedb * 2);
    colDetection(this.x, this.x + this.eSpeedb * 1.5, this.y - this.eSpeedb * 2, this.y - this.eSpeedb * 2);
    colDetection(this.x + this.eSpeedb * 1.5, this.x + this.eSpeedb * 2.5, this.y - this.eSpeedb * 2, this.y - this.eSpeedb);
    colDetection(this.x + this.eSpeedb * 2.5, this.x + this.eSpeedb * 2.5, this.y - this.eSpeedb, this.y + this.eSpeedb * 0.5);
    colDetection(this.x + this.eSpeedb * 2.5, this.x + this.eSpeedb * 1.5, this.y + this.eSpeedb * 0.5, this.y + this.eSpeedb * 1.5);
    colDetection(this.x + this.eSpeedb * 1.5, this.x, this.y + this.eSpeedb * 1.5, this.y + this.eSpeedb * 1.5);
    colDetection(this.x, this.x - this.eSpeedb, this.y + this.eSpeedb * 1.5, this.y + this.eSpeedb * .5);
  }
  this.update = function () {
    this.eSpeedb = this.eSpeedb + eSpeedb;
    this.draw();
  }
}

function octDraw2(x, y, eSpeedb) {
  this.x = x;
  this.y = y;
  this.eSpeedb = eSpeedb;
  speedIncrease = Math.random() * 3
  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x, this.y - this.eSpeedb * 2);//2
    c.lineTo(this.x + this.eSpeedb * 1.5, this.y - this.eSpeedb * 2);//3
    c.lineTo(this.x + this.eSpeedb * 2.5, this.y - this.eSpeedb);//4
    c.lineTo(this.x + this.eSpeedb * 2.5, this.y + this.eSpeedb * 0.5);//5
    c.lineTo(this.x + this.eSpeedb * 1.5, this.y + this.eSpeedb * 1.5);//6
    c.lineTo(this.x, this.y + this.eSpeedb * 1.5);//7
    c.lineTo(this.x - this.eSpeedb, this.y + this.eSpeedb * 0.5);//8
    c.lineTo(this.x - this.eSpeedb, this.y - this.eSpeedb);
    c.strokeStyle = "white"
    c.stroke();

    colDetection(this.x, this.x + this.eSpeedb * 1.5, this.y - this.eSpeedb * 2, this.y - this.eSpeedb * 2);
    colDetection(this.x + this.eSpeedb * 1.5, this.x + this.eSpeedb * 2.5, this.y - this.eSpeedb * 2, this.y - this.eSpeedb);
    colDetection(this.x + this.eSpeedb * 2.5, this.x + this.eSpeedb * 2.5, this.y - this.eSpeedb, this.y + this.eSpeedb * 0.5);
    colDetection(this.x + this.eSpeedb * 2.5, this.x + this.eSpeedb * 1.5, this.y + this.eSpeedb * 0.5, this.y + this.eSpeedb * 1.5);
    colDetection(this.x + this.eSpeedb * 1.5, this.x, this.y + this.eSpeedb * 1.5, this.y + this.eSpeedb * 1.5);
    colDetection(this.x, this.x - this.eSpeedb, this.y + this.eSpeedb * 1.5, this.y + this.eSpeedb * .5);
    colDetection(this.x - this.eSpeedb, this.x - this.eSpeedb, this.y + this.eSpeedb * 0.5, this.y - this.eSpeedb);
  }
  this.update = function () {
    this.eSpeedb = this.eSpeedb + speedIncrease;
    this.draw();
  }
}

function octDraw3(x, y, eSpeed3) {
  this.x = x;
  this.y = y;
  this.eSpeed3 = eSpeed3;
  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x + this.eSpeed3 * 1.5, this.y - this.eSpeed3 * 2);//3
    c.lineTo(this.x + this.eSpeed3 * 2.5, this.y - this.eSpeed3);//4
    c.lineTo(this.x + this.eSpeed3 * 2.5, this.y + this.eSpeed3 * 0.5);//5
    c.lineTo(this.x + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * 1.5);//6
    c.lineTo(this.x, this.y + this.eSpeed3 * 1.5);//7
    c.lineTo(this.x - this.eSpeed3, this.y + this.eSpeed3 * 0.5);//8
    c.lineTo(this.x - this.eSpeed3, this.y - this.eSpeed3);
    c.lineTo(this.x, this.y - this.eSpeed3 * 2);//2
    c.strokeStyle = "white"
    c.stroke();

    colDetection(this.x + this.eSpeed3 * 1.5, this.x + this.eSpeed3 * 2.5, this.y - this.eSpeed3 * 2, this.y - this.eSpeed3);
    colDetection(this.x + this.eSpeed3 * 2.5, this.x + this.eSpeed3 * 2.5, this.y - this.eSpeed3, this.y + this.eSpeed3 * 0.5);
    colDetection(this.x + this.eSpeed3 * 2.5, this.x + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * 0.5, this.y + this.eSpeed3 * 1.5);
    colDetection(this.x + this.eSpeed3 * 1.5, this.x, this.y + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * 1.5);
    colDetection(this.x, this.x - this.eSpeed3, this.y + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * .5);
    colDetection(this.x - this.eSpeed3, this.x - this.eSpeed3, this.y + this.eSpeed3 * 0.5, this.y - this.eSpeed3);
    colDetection(this.x - this.eSpeed3, this.x, this.y - this.eSpeed3, this.y - this.eSpeed3 * 2);
  }
  this.update = function () {
    this.eSpeed3 = this.eSpeed3 + eSpeed3;
    this.draw();
  }
}

function octDraw4(x, y, eSpeed3) {
  this.x = x;
  this.y = y;
  this.eSpeed3 = eSpeed3;
  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x + this.eSpeed3 * 2.5, this.y - this.eSpeed3);//4
    c.lineTo(this.x + this.eSpeed3 * 2.5, this.y + this.eSpeed3 * 0.5);//5
    c.lineTo(this.x + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * 1.5);//6
    c.lineTo(this.x, this.y + this.eSpeed3 * 1.5);//7
    c.lineTo(this.x - this.eSpeed3, this.y + this.eSpeed3 * 0.5);//8
    c.lineTo(this.x - this.eSpeed3, this.y - this.eSpeed3);
    c.lineTo(this.x, this.y - this.eSpeed3 * 2);//2
    c.lineTo(this.x + this.eSpeed3 * 1.5, this.y - this.eSpeed3 * 2);//3
    c.strokeStyle = "white"
    c.stroke();

    colDetection(this.x + this.eSpeed3 * 2.5, this.x + this.eSpeed3 * 2.5, this.y - this.eSpeed3, this.y + this.eSpeed3 * 0.5);
    colDetection(this.x + this.eSpeed3 * 2.5, this.x + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * 0.5, this.y + this.eSpeed3 * 1.5);
    colDetection(this.x + this.eSpeed3 * 1.5, this.x, this.y + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * 1.5);
    colDetection(this.x, this.x - this.eSpeed3, this.y + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * .5);
    colDetection(this.x - this.eSpeed3, this.x - this.eSpeed3, this.y + this.eSpeed3 * 0.5, this.y - this.eSpeed3);
    colDetection(this.x - this.eSpeed3, this.x, this.y - this.eSpeed3, this.y - this.eSpeed3 * 2);
    colDetection(this.x, this.x + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * 2, this.y - this.eSpeed3 * 2);
  }
  this.update = function () {
    this.eSpeed3 = this.eSpeed3 + eSpeed3;
    this.draw();
  }
}

function octDraw5(x, y, eSpeed3) {
  this.x = x;
  this.y = y;
  this.eSpeed3 = eSpeed3;
  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x + this.eSpeed3 * 2.5, this.y + this.eSpeed3 * 0.5);//5
    c.lineTo(this.x + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * 1.5);//6
    c.lineTo(this.x, this.y + this.eSpeed3 * 1.5);//7
    c.lineTo(this.x - this.eSpeed3, this.y + this.eSpeed3 * 0.5);//8
    c.lineTo(this.x - this.eSpeed3, this.y - this.eSpeed3);
    c.lineTo(this.x, this.y - this.eSpeed3 * 2);//2
    c.lineTo(this.x + this.eSpeed3 * 1.5, this.y - this.eSpeed3 * 2);//3
    c.lineTo(this.x + this.eSpeed3 * 2.5, this.y - this.eSpeed3);//4
    c.strokeStyle = "white"
    c.stroke();

    colDetection(this.x + this.eSpeed3 * 2.5, this.x + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * 0.5, this.y + this.eSpeed3 * 1.5);
    colDetection(this.x + this.eSpeed3 * 1.5, this.x, this.y + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * 1.5);
    colDetection(this.x, this.x - this.eSpeed3, this.y + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * .5);
    colDetection(this.x - this.eSpeed3, this.x - this.eSpeed3, this.y + this.eSpeed3 * 0.5, this.y - this.eSpeed3);
    colDetection(this.x - this.eSpeed3, this.x, this.y - this.eSpeed3, this.y - this.eSpeed3 * 2);
    colDetection(this.x, this.x + this.eSpeed3 * 1.5, this.y + this.eSpeed3 * 2, this.y - this.eSpeed3 * 2);
    colDetection(this.x + this.eSpeed3 * 1.5, this.x + this.eSpeed3 * 2.5, this.y - this.eSpeed3 * 2, this.y - this.eSpeed3);
  }
  this.update = function () {
    this.eSpeed3 = this.eSpeed3 + eSpeed3;
    //inercativity
    this.draw();
  }

}

function squareDraw(x, y, eSpeed) {
  this.x = x;
  this.y = y;
  this.eSpeed = eSpeed;
  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x - this.eSpeed, this.y - this.eSpeed);
    c.lineTo(this.x + this.eSpeed, this.y - this.eSpeed);
    c.lineTo(this.x + this.eSpeed, this.y + this.eSpeed);
    c.lineTo(this.x - this.eSpeed, this.y + this.eSpeed);
    c.strokeStyle = "white"
    c.stroke();

    colDetection(this.x - this.eSpeed, this.x + this.eSpeed, this.y - this.eSpeed, this.y - this.eSpeed);
    colDetection(this.x + this.eSpeed, this.x + this.eSpeed, this.y - this.eSpeed, this.y + this.eSpeed);
    colDetection(this.x + this.eSpeed, this.x - this.eSpeed, this.y + this.eSpeed, this.y + this.eSpeed);
  }
  this.update = function () {
    this.eSpeed = this.eSpeed + eSpeed;
    this.draw();
  }
}

function squareDraw2(x, y, eSpeed) {
  this.x = x;
  this.y = y;
  this.eSpeed = eSpeed;
  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x + this.eSpeed, this.y + this.eSpeed);
    c.lineTo(this.x - this.eSpeed, this.y + this.eSpeed);
    c.lineTo(this.x - this.eSpeed, this.y - this.eSpeed);
    c.lineTo(this.x + this.eSpeed, this.y - this.eSpeed);
    c.strokeStyle = "white"
    c.stroke();
    colDetection(this.x + this.eSpeed, this.x - this.eSpeed, this.y + this.eSpeed, this.y + this.eSpeed);
    colDetection(this.x - this.eSpeed, this.x - this.eSpeed, this.y + this.eSpeed, this.y - this.eSpeed);
    colDetection(this.x - this.eSpeed, this.x + this.eSpeed, this.y - this.eSpeed, this.y - this.eSpeed);
  }
  this.update = function () {
    this.eSpeed = this.eSpeed + eSpeed;
    this.draw();
  }
}

// creating the bounderies for playble area
function container() {
  c.beginPath();
  c.moveTo(300, 25);
  c.lineTo(window.innerWidth - 300, 25);
  c.lineTo(window.innerWidth - 300, window.innerHeight - 25);
  c.lineTo(300, window.innerHeight - 25);
  c.lineTo(300, 25);
  c.strokeStyle = "red"
  c.stroke();
}

// creating mouse object function;
function mouseCircle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRad = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = "white"
    c.fillStyle = "white"
    c.fill()
    c.stroke();
  }
  this.update = function () {
    this.x = mouse.x;
    this.y = mouse.y
    this.draw();
  }
}
// assiging mouse object to a variable
playerCircle = new mouseCircle(mouse.x, mouse.y, 30, 0, 3, false)

// pushing the shapes into arrays.
var oct5Array = [];
function initOct5() {
  oct4Array = [];
  for (var i = 0; i < 100; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeed5 = Math.random();
    oct5Array.push(new octDraw5(xS, yS, eSpeed5))
  }
}
initOct5();

var oct4Array = [];
function initOct4() {
  oct4Array = [];
  for (var i = 0; i < 100; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeed4 = Math.random() / 2;
    oct4Array.push(new octDraw4(xS, yS, eSpeed4))
  }
}
initOct4();

var oct3Array = [];
function initOct3() {
  oct3Array = [];
  for (var i = 0; i < 100; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeed3 = Math.random();
    oct3Array.push(new octDraw3(xS, yS, eSpeed3))
  }
}
initOct3();

var oct2Array = [];
function initOct2() {
  oct2Array = [];
  for (var i = 0; i < 100; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeedb = Math.random();
    oct2Array.push(new octDraw2(xS, yS, eSpeedb))
  }
}
initOct2();

var octArray = [];
function initOct() {
  octArray = [];
  for (var i = 0; i < 100; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeedb = Math.random() / 3;
    octArray.push(new octDraw(xS, yS, eSpeedb))
  }
}
initOct();

var square2Array = [];
function initSqare2() {
  square2Array = [];
  for (var i = 0; i < 100; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeedd = .05;
    square2Array.push(new squareDraw2(xS, yS, eSpeedd))
  }
}
initSqare2()

var squareArray = [];
function initSqare() {
  squareArray = [];
  for (var i = 0; i < 100; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeed = Math.random() * 8;
    squareArray.push(new squareDraw(xS, yS, eSpeed))
  }
}
initSqare()

// score and countdown functions
var score = 0;
function drawScore() {
  c.font = "16px Arial";
  c.fillStyle = "white";
  c.fillText("Score: " + score, 8, 20);
}
var time = 0;
function countTime(time) {
  c.font = "70px Arial";
  c.fillStyle = "grey";
  c.fillText(time, innerWidth / 2, innerHeight / 2);
  return time
}

//*********************************************************************************************** */
// creating and calling functions for constant animation (request animation frame)
//*********************************************************************************************** */
var i = 0
start = Date.now()
let x = 0
countdownStart = Date.now()
function background() {
  countdown = Date.now()
  countdownDifference = countdown - countdownStart;
  if (countdownDifference < 1000) {
    c.clearRect(0, 0, innerWidth, innerHeight);
    time = "3";
    countTime(time)
  } else if (countdownDifference < 2000) {
    c.clearRect(0, 0, innerWidth, innerHeight);
    time = "2";
    countTime(time)
  } else if (countdownDifference < 3000) {
    c.clearRect(0, 0, innerWidth, innerHeight);
    time = "1";
    countTime(time)
  } else if (countdownDifference < 4000) {
    c.clearRect(0, 0, innerWidth, innerHeight);
    time = "0";
    countTime(time)
  }
  drawScore()
  container()
  requestAnimationFrame(background)
}

var delayRandom = Math.random() * 6;
function animate() {
  newElement = Date.now()
  c.clearRect(0, 0, innerWidth, innerHeight);
  requestAnimationFrame(animate)
  background()
  for (i = x; i >= 0; i--) {
    octArray[i].update();
  }
  makeElement = newElement - start;
  if (makeElement > 3000 * delayRandom) {
    delayRandom = Math.random() * 6;
    x++;
    score++
    start = Date.now()
    if (x == octArray.length - 1) {
      x = 0
    }
  }

  playerCircle.update();
}
z = 0;
start2 = Date.now()
function animate2() {
  newElement2 = Date.now()
  requestAnimationFrame(animate2)
  for (i = z; i >= 0; i--) {
    oct2Array[i].update();
  }
  makeElement2 = newElement2 - start2;
  if (makeElement2 > 8000) {
    z++;
    score++
    start2 = Date.now()
    if (z == oct2Array.length - 1) {
      z = 0
    }
  }
}

start3 = Date.now()
x1 = 0
function animate3() {
  newElement3 = Date.now()
  requestAnimationFrame(animate3)
  for (i = x1; i >= 0; i--) {
    oct3Array[i].update();
  }
  makeElement3 = newElement3 - start3;
  if (makeElement3 > 10000) {
    x1++;
    score++
    start3 = Date.now()
    if (x1 == oct3Array.length - 1) {
      x1 = 0
    }
  }
}

start4 = Date.now()
x2 = 0
function animate4() {
  newElement4 = Date.now()
  requestAnimationFrame(animate4)
  for (i = x2; i >= 0; i--) {
    squareArray[i].update();
  }
  makeElement4 = newElement4 - start4;
  if (makeElement4 > 8000) {
    score++
    x2++;
    start4 = Date.now()
    if (x2 == squareArray.length - 1) {
      x2 = 0
    }
  }
}

start5 = Date.now()
x3 = 0
function animate5() {
  newElement5 = Date.now()
  requestAnimationFrame(animate5)
  for (i = x3; i >= 0; i--) {
    square2Array[i].update();
  }
  makeElement5 = newElement5 - start5;
  if (makeElement5 > 12000) {
    score++
    x3++;
    start5 = Date.now()
    if (x3 == square2Array.length - 1) {
      x3 = 0
    }
  }
}

background()
setTimeout(() => {
  animate()
  setTimeout(() => {
    animate2()
  }, 3000)
  setTimeout(() => {
    animate3()
  }, 4000)
  setTimeout(() => {
    animate4()
  }, 7000)
  setTimeout(() => {
    animate5()
  }, 10000)
}, 4000)