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
  console.log(mouse)
})

//variables for circle

var maxRadius = 60
var circleAmount = 800
var startRadius = 10
var dRdius = 1;

// comented code is taking collor from specified array

var colorArray = ["#1e4363", "#fcf2cb", "#ffb00d", "#ff8926", "#dc2d19"]
colorArray[Math.floor(Math.random() * colorArray.length)]

//resizes canvas when window resized
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  init();

})


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


// creating arcs:
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRad = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

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
var circleArray = [];

function init() {

  circleArray = [];



  for (var i = 0; i < 5; i++) {
    var radius = Math.random() * startRadius + 3;
    var x = window.innerWidth / 2
    var y = window.innerHeight / 2
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, 1, false));
  }
}

setInterval(() => {
  init()
}, 1000)

function animate() {
  requestAnimationFrame(animate)

  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {

    circleArray[i].update();

  }
  playerCircle.update();
}


setInterval(() => {
  animate();
}, 1000)



