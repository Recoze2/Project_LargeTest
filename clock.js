/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(hour, minute, second, millis, alarm) {
  	background(204); // light gray background
  	strokeWeight(8); // Stroke weight to 8 pixels
  	translate(480,250);
  	bb(second);
  	ba(millis);
};

function bb(second){
	rotate(radians(second*6));
  	rect(0, 0, 260, 20);
};

function ba(millis){
	rotate(radians(millis*0.38));
  	rect(0, 0, 260, 20);
};