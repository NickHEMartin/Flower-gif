var time = 0;
var r = 185;
var g = 66;
var b = 26;

function setup() {
  createCanvas(600,600);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(185,66,26);
}

function draw() {
  noStroke();
  background(r,g,b,5);
  
  translate(300,300);
  scale(sin(time));
  //rotate(time);
  
  for(i = 0; i < 20; i++){
    var x = i + frameCount / 200.0;
    var y = i + frameCount / 200.0;
    var z = 0;
    
    x = map(cos(time + z), -1, 1, -200, 200);
    y = map(sin(time + z), -1, 1, -200, 200);
    
    fill(224,214,172,20);
    ellipse(x,y,50,50);
    ellipse(y,x,50,50);
    ellipse(-x,-y,50,50);
    ellipse(-y,-x,50,50);
    rotate(45);
    ellipse(x,y,50,50);
    ellipse(y,x,50,50);
    ellipse(-x,-y,50,50);
    ellipse(-y,-x,50,50);
    
    z = z + 50;
  }  
    for(i = 0; i < 20; i++){
    var x = i + frameCount / 200.0;
    var y = i + frameCount / 200.0;
    var z = 0;
    
    x = map(cos(time + z), -1, 1, -150, 150);
    y = map(sin(time + z), -1, 1, -150, 150);
    
    fill(200,200,150,20);
    ellipse(x,y,25,25);
    ellipse(y,x,25,25);
    ellipse(-x,-y,25,25);
    ellipse(-y,-x,25,25);
    rotate(45);
    ellipse(x,y,25,25);
    ellipse(y,x,25,25);
    ellipse(-x,-y,25,25);
    ellipse(-y,-x,25,25);
    
    z = z + 24;
  }  
  for(i = 0; i < 20; i++){
    var x = i + frameCount / 200.0;
    var y = i + frameCount / 200.0;
    var z = 0;
    
    x = map(cos(time + z), -1, 1, -250, 250);
    y = map(sin(time + z), -1, 1, -250, 250);
    
    fill(200,200,150);
    ellipse(x,y,25,25);
    ellipse(y,x,25,25);
    ellipse(-x,-y,25,25);
    ellipse(-y,-x,25,25);
    rotate(45);
    ellipse(x,y,25,25);
    ellipse(y,x,25,25);
    ellipse(-x,-y,25,25);
    ellipse(-y,-x,25,25);
    if(time>10){
      scale(cos(time));
    }
    
    z = z + 24;
  }  

  time++;
}