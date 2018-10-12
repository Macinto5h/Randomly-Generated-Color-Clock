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

function drawHand(context, position, length, width){
  context.beginPath( );
  context.lineWidth = width;
  context.lineCap = "round";
  context.moveTo(centerX, centerY);
  context.rotate(position);
  context.lineTo(centerX, centerY - radius );
  context.stroke( );
  context.rotate(-position);
}

function simpleAnalogClock( ){

  drawClockBase( );

  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes( );
  var second = now.getSeconds( );
  //hour stuff
  hour = hour%12
  hour = (hour * Math.PI/6) + (minute*Math.PI/360) + (second*Math.PI/(360*60));
  drawHand(context, hour, radius*0.5, radius*0.03);
  //minute stuff
  minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(context, minute, radius*0.5, radius*0.03);
  //second stuff
  second = (second*Math.PI/30);
  drawHand(context,second,radius*0.75, radius*0.01);

}

setInterval( simpleAnalogClock, 1000 );
