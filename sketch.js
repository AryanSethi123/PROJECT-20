var bg
var cat1,cat2
var mouse1,mouse2
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    cat1=loadImage("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    mouse1=loadImage("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(200,600,70,70);
    cat=createSprite(800,600,70,70);
    tom.addImage(mouse1);
    tom.scale=0.07;
    cat.addImage(cat1);
    cat.scale=0.05;

}

function draw() {

    background(bg);
    cat.x=mouseX
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-tom.x<(cat.width-tom.width)/2)
    cat.x=tom.x

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.addAnimation("mouse2",mouse2)
    tom.changeAnimation("mouse2")
    cat.addAnimation("cat2",cat2)
    cat.changeAnimation("cat2")
}


}
