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
var dRdius = 1;
var eSpeedb = .2;

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

    a1 = (this.x - this.eSpeedb) - (this.x)
    b1 = (this.y - this.eSpeedb) - (this.y - (this.eSpeedb * 2))
    c1 = Math.sqrt(Math.pow(a1, 2) + Math.pow(b1, 2))

    a2 = (this.x - this.eSpeedb) - mouse.x
    b2 = (this.y - this.eSpeedb) - mouse.y
    c2 = Math.sqrt(Math.pow(a2, 2) + Math.pow(b2, 2))

    a3 = (this.x) - mouse.x
    b3 = (this.y - this.eSpeedb * 2) - mouse.y
    c3 = Math.sqrt(Math.pow(a3, 2) + Math.pow(b3, 2))

    if ((c2 + c3 >= c1 - 1) && (c2 + c3 <= c1 + 1)) {
      console.log("colision hello")
    }

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
    eSpeedb = .5;
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

    a3 = (this.x - this.eSpeed) - (this.x + this.eSpeed)
    b3 = (this.y - this.eSpeed) - (this.y - this.eSpeed)
    c3 = Math.sqrt(Math.pow(a3, 2) + Math.pow(b3, 2))

    a6 = (this.x + this.eSpeed) - (this.x + this.eSpeed)
    b6 = (this.y - this.eSpeed) - (this.y + this.eSpeed)
    c6 = Math.sqrt(Math.pow(a6, 2) + Math.pow(b6, 2))

    a9 = (this.x + this.eSpeed) - (this.x - this.eSpeed)
    b9 = (this.y + this.eSpeed) - (this.y + this.eSpeed)
    c9 = Math.sqrt(Math.pow(a9, 2) + Math.pow(b9, 2))


    a1 = (this.x - this.eSpeed) - mouse.x
    b1 = (this.y - this.eSpeed) - mouse.y
    c1 = Math.sqrt(Math.pow(a1, 2) + Math.pow(b1, 2))


    a2 = (this.x + this.eSpeed) - mouse.x
    b2 = (this.y - this.eSpeed) - mouse.y
    c2 = Math.sqrt(Math.pow(a2, 2) + Math.pow(b2, 2))


    a4 = (this.x + this.eSpeed) - mouse.x
    b4 = (this.y - this.eSpeed) - mouse.y
    c4 = Math.sqrt(Math.pow(a4, 2) + Math.pow(b4, 2))
    c.beginPath();


    a5 = (this.x + this.eSpeed) - mouse.x
    b5 = (this.y + this.eSpeed) - mouse.y
    c5 = Math.sqrt(Math.pow(a5, 2) + Math.pow(b5, 2))


    a7 = (this.x + this.eSpeed) - mouse.x
    b7 = (this.y + this.eSpeed) - mouse.y
    c7 = Math.sqrt(Math.pow(a7, 2) + Math.pow(b7, 2))


    a8 = (this.x - this.eSpeed) - mouse.x
    b8 = (this.y + this.eSpeed) - mouse.y
    c8 = Math.sqrt(Math.pow(a8, 2) + Math.pow(b8, 2))
    if ((c1 + c2 >= c3 - 1) && (c1 + c2 <= c3 + 1)) {
      console.log("colision detected")
    }
    if ((c4 + c5 >= c6 - 1) && (c4 + c5 <= c6 + 1)) {
      console.log("colision detected")
    }
    if ((c7 + c8 >= c9 - 1) && (c7 + c8 <= c9 + 1)) {
      console.log("colision detected")
    }


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


