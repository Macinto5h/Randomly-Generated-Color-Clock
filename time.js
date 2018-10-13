//This code makes the base of the clock :)
var canvas = document.getElementById('timePiece');
var context = canvas.getContext('2d');
var radius = 200;
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
//-----------Function Below is in Charge of Base of an analog Clock------------
function drawClockBase( ){

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.stroke();
}
//Length is a ratio of the length of hand compared to clock face radius
function drawHand(length, width, angle){
  context.beginPath( );
  context.lineWidth = width;
  context.lineCap = "round";
  context.moveTo(centerX, centerY);
  var handLength = length * radius;
  var xOffset = Math.cos(degreesToRadians(angle-90))*handLength;
  var yOffset = Math.sin(degreesToRadians(angle-90))*handLength;
  context.lineTo(centerX+xOffset,centerY+yOffset);
  context.stroke();
}
//Need this function since trig functions are in radians.
function degreesToRadians(d){
  return d * (Math.PI / 180);
}

function simpleAnalogClock( ){
  context.clearRect(0,0,canvas.width,canvas.height);//Clear canvas
  drawClockBase( );

  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes( );
  var second = now.getSeconds( );
  var millisecond = now.getMilliseconds();

  hour %= 12;
  var hourAngle = (hour*30)+(minute*0.5)+(second*0.0083);
  var minuteAngle = (minute*6)+(second*0.1);
  var secondAngle = second*6;
  //hour stuff
  drawHand(0.6,5,hourAngle);
  //minute stuff
  drawHand(0.75,3,minuteAngle);
  //second stuff
  drawHand(0.9,1,secondAngle);

}

setInterval( simpleAnalogClock, 1000 );
