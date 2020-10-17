class Box extends baseclass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("blue.png");
    this.visibilitiy=255;
  }
display(){
//console.log(this.body.speed)
if(this.body.speed<3){
  super.display();
}else{
World.remove(world,this.body)
push();
this.visibilitiy=this.visibilitiy-10;
tint(255,this.visibilitiy)
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop();
}

}
score(){

  if(this.Visiblity<0 && this.Visiblity>-1005){

score++;

  }
}
};
