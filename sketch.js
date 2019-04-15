var r;
function setup(){
  createCanvas(1500,1500);
  r = new rocket();
}
function draw(){
  background(100);
  r.show();

  r.update();
}
function keyPressed(){
  r.move();
}
rocket = function(){
  let a=random(50,1450);
  let b=random(50,1450);
  this.orient = PI/2;
  this.position = new vector(a,b);
  this.velocity = new vector(0,0);
  this.friction=0.97;
}
rocket.prototype.show = function(){
  if(this.position.x>width){
    this.position.setX(0);
  }
  if(this.position.x<0){
    this.position.setX(width);
  }
  if(this.position.y>height){
    this.position.setY(0);
  }
  if(this.position.y<0){
    this.position.setY(height);
  }
  let x =this.position.x;
  let y=this.position.y;
  translate(x,y);
  rotate(this.orient-PI/2);
  stroke(0);
  strokeWeight(5);
  line(0,0,-20,40);
  line(0,0,20,40)
  line(-20,40,-20,70);
  line(20,40,20,70);
  line(-20,60,20,60);
}
rocket.prototype.move = function(){
  if (keyCode == 38){
    this.velocity.setR(20);
    this.velocity.setAngle(this.orient-PI);

  }
  else if (keyCode == 37){
    this.velocity.setR(0);
    this.orient-=(PI/4);
  }
  else if (keyCode == 39){
    this.velocity.setR(0);
    this.orient+=(PI/4);
  }
  else if (keyCode == 40){
    this.velocity.setR(0);
  }
}
rocket.prototype.update = function(){
  this.velocity.setR(this.friction* this.velocity.getR());
  this.position.x+=this.velocity.x;
  this.position.y+=this.velocity.y;
  this.velocity.setR(this.velocity.getR()+0.001);
}
