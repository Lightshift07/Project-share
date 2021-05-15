var cat, mouse;
var catImg, mouseImg;
var catWalk, mouseTaunt;
var treesImg, trees;
var mouse2, cat2;

function preload() {
    //load the images here
    treesImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    catWalk = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg = loadAnimation("images/mouse1.png");
    mouseTaunt = loadAnimation("images/mouse2.png","images/mouse3.png");
    cat2 = loadAnimation("images/cat4.png");
    mouse2 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,600,20,20);
    cat.addAnimation("cat", catImg);
    cat.scale = 0.1;

    mouse = createSprite(300,600,20,20);
    mouse.addAnimation("mouse",mouseImg);
    mouse.scale = 0.1;

   trees = createSprite(500,400);
   trees.addImage("trees", treesImg);


}

function draw() {

    background(255);

mouse.depth = trees.depth;
mouse.depth = mouse.depth + 1;
cat.depth = trees.depth;
cat.depth = cat.depth + 1;

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < cat.width/2 + mouse.width/2){
        cat.velocityX = 0;
        mouse.addAnimation("mouse2", mouse2)
        mouse.changeAnimation("mouse2");
        cat.addAnimation("cat2", cat2);
        cat.changeAnimation("cat");
    }    
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.addAnimation("catWalk", catWalk);
    cat.changeAnimation("catWalk");
    mouse.addAnimation("mouseTaunt",mouseTaunt);
    mouse.changeAnimation("mouseTaunt");
    cat.velocityX = -2;
    
}

}
