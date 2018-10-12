function randomColor(){
  var h = Math.random();
  h += 0.618033988749895;
  h %= 1;
  h = Math.floor( h * 360 );

  return "hsl("+h+",80%,65%)";
}
function getColor( color ){
  document.body.style.backgroundColor = color;
}
var randColor = randomColor( );
getColor( randColor );
document.write(document.body.style.backgroundColor)
