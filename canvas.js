var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d")




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
var dRdius = 2;
var eSpeedb = 3;

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
// creating octaagon
//
function octDraw(x, y, eSpeedb, ) {
  this.x = x;
  this.y = y;
  this.eSpeedb = eSpeedb;

  this.draw = function () {

    c.beginPath();
    c.moveTo(this.x - this.eSpeedb, this.y - this.eSpeedb);
    c.lineTo(this.x, this.y - this.eSpeedb * 2);
    c.lineTo(this.x + this.eSpeedb * 1.5, this.y - this.eSpeedb * 2);
    c.lineTo(this.x + this.eSpeedb * 2.5, this.y - this.eSpeedb);
    c.lineTo(this.x + this.eSpeedb * 2.5, this.y + this.eSpeedb * 0.5);
    c.lineTo(this.x + this.eSpeedb * 1.5, this.y + this.eSpeedb * 1.5);
    c.lineTo(this.x, this.y + this.eSpeedb * 1.5);
    c.lineTo(this.x - this.eSpeedb, this.y + this.eSpeedb * 0.5);
    c.strokeStyle = "white"
    c.stroke();
  }
  this.update = function () {

    this.eSpeedb = this.eSpeedb + eSpeedb;
    //inercativity
    this.draw();
  }

}

//
// adding octagon draw to an array
//

var octArray = [];
function initOct() {
  octArray = [];

  for (var i = 0; i < 5; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeedb = 5;
    octArray.push(new octDraw(xS, yS, eSpeedb))
  }
}
initOct();

//
//creating sqares
//
function squareDraw(x, y, eSpeed, ) {
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
  }
  this.update = function () {

    this.eSpeed = this.eSpeed + eSpeed;
    //inercativity
    this.draw();
  }

}

//
//adding squares to an array
//

var sqareArray = [];
function initSqare() {
  sqareArray = [];

  for (var i = 0; i < 5; i++) {
    var xS = window.innerWidth / 2
    var yS = window.innerHeight / 2
    eSpeed = .1;
    sqareArray.push(new squareDraw(xS, yS, eSpeed))
  }
}
initSqare();

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
    c.stroke();
  }
  this.update = function () {
    this.x = mouse.x;
    this.y = mouse.y
    this.draw();
  }
}

// assiging mouse object to a variable
playerCircle = new mouseCircle(mouse.x, mouse.y, 30, 0, 10, false)

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

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
    sqareArray[i].update();
    octArray[i].update();
  }
  playerCircle.update();

}



animate();


