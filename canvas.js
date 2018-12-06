var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d")
var win = true



// mosue object

var mouse = {
  x: undefined,
  y: undefined
}

// tracking mouse position
const player = {};


window.addEventListener("mousemove", function (event) {
  mouse.x = event.x
  mouse.y = event.y
})

//variables for circle

var maxRadius = 60
var circleAmount = 800
var startRadius = 10
var dRdius = 1;
var eSpeedb = .2;
var eSpeed = .05;
var eSpeedd = .1;
var eSpeed3 = .4;
var eSpeed4 = .5;
var eSpeed5 = .5;

// comented code is taking collor from specified array

var colorArray = ["#1e4363", "#fcf2cb", "#ffb00d", "#ff8926", "#dc2d19"]
colorArray[Math.floor(Math.random() * colorArray.length)]

//resizes canvas when window resized
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  init();

})
//
//function for collision detection
//

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
    console.log("colision hello")
    location.reload()
  }


}


//
// creating octaagon
//
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
    //inercativity
    this.draw();
  }

}


function octDraw2(x, y, eSpeedb) {
  this.x = x;
  this.y = y;
  this.eSpeedb = eSpeedb;

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
    this.eSpeedb = this.eSpeedb + eSpeedb;
    //inercativity
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
    //inercativity
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
    //inercativity
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

var oct5Array = [];
function initOct5() {
  oct4Array = [];

  for (var i = 0; i < 100; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeed5 = eSpeed5 + 0.05;
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
    eSpeed4 = eSpeed4 + 0.5;
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
    eSpeed3 = eSpeed3 + .1;
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
    eSpeedb = eSpeedb + .5;
    oct2Array.push(new octDraw2(xS, yS, eSpeedb))
  }
}
initOct2();

//
// adding octagon draw to an array
//

var octArray = [];
function initOct() {
  octArray = [];

  for (var i = 0; i < 100; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeedb = .2;
    octArray.push(new octDraw(xS, yS, eSpeedb))
  }
}
initOct();

//
//creating sqares
//

function container() {
  c.beginPath();

  c.moveTo(300, 25);
  c.lineTo(window.innerWidth - 300, 25);
  c.lineTo(window.innerWidth - 300, window.innerHeight - 25);
  c.lineTo(300, window.innerHeight - 25);
  c.lineTo(300, 25);
  c.strokeStyle = "red"
  c.stroke();

  colDetection(300, window.innerWidth - 300, 50, 50);
  colDetection(window.innerWidth - 300, window.innerWidth - 300, 50, window.innerHeight - 25);
  colDetection(window.innerWidth - 300, 200, window.innerHeight - 25, window.innerHeight - 25);
  colDetection(300, 300, window.innerHeight - 25, 60);

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
    //inercativity
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
    //inercativity
    this.draw();
  }
}

var square2Array = [];
function initSqare2() {
  square2Array = [];

  for (var i = 0; i < 100; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeedd = eSpeedd + 0.2;
    square2Array.push(new squareDraw2(xS, yS, eSpeedd))
  }
}
initSqare2()

//
//adding squares to an array
//

var squareArray = [];
function initSqare() {
  squareArray = [];

  for (var i = 0; i < 100; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeed = eSpeed;
    squareArray.push(new squareDraw(xS, yS, eSpeed))
  }
}
initSqare()



//
// creating circle function with draw and update:
//

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRad = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 1, Math.PI * 2, false)
    c.strokeStyle = "white"
    c.stroke();


  }
  this.update = function () {

    this.radius = this.radius + dRdius;
    //inercativity
    this.draw();
  }
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
    c.fillStyle = "red"
    c.fill = "red"
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

//
//assigning circles to an array
//
var circleArray = [];
function init() {
  circleArray = [];

  for (var i = 0; i < 5; i++) {
    var radius = Math.random() * startRadius + 3;
    var x = window.innerWidth / 2
    var y = window.innerHeight / 2
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, .1, false))
  }

}
init()
//
// making shapes expand
//
playerCircle.update();



spawnRate = 1500
lastSpawn = -1
var i = 0
start = Date.now()

let x = 0
function animate() {
  newElement = Date.now()
  c.clearRect(0, 0, innerWidth, innerHeight);
  requestAnimationFrame(animate)
  for (i = x; i >= 0; i--) {
    octArray[i].update();
  }
  makeElement = newElement - start;
  if (makeElement > 5000) {
    x++;
    start = Date.now()
    if (x == octArray.length) {
      x = 0
    }
  }
  playerCircle.update();
}

function animate2() {
  requestAnimationFrame(animate2)
  oct2Array[1].update();
}
function animate3() {
  requestAnimationFrame(animate3)
  squareArray[1].update();
}

function animate4() {
  requestAnimationFrame(animate4)
  octArray[2].update();

}
function animate5() {
  requestAnimationFrame(animate5)
  oct2Array[4].update();

}
function animate6() {
  requestAnimationFrame(animate6)
  square2Array[2].update();
  oct3Array[0].update();


}
function animate6() {
  requestAnimationFrame(animate6)
  oct4Array[0].update();
  oct5Array[0].update();

}

animate()
// setTimeout(() => {
//   animate2()
// }, 5000)
// let x = 1
// setInterval(() => {
//   animate3()
//   x++
// }, 500 * x)

// setTimeout(() => {
//   animate4()
//   x++
// }, 8000)

// setTimeout(() => {
//   animate5()
//   x++
// }, 10000)

// setTimeout(() => {
//   animate6()
//   x++
// }, 12000)



// limit playing space - random player spawn? randomly place mouse somewhere?
// create function for creating obstacles
// make it beautiful - maybe obstacles changing colours close to red when user will get close to obstacle? Start page, instructions, score
// let's keep it black 'n white
// countdown before playing
// v2.0.0

// local storage for leaderboards and keeping scores
// randomizing obstacles
// adding more unpredictability to the game