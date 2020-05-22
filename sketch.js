const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();
    binPart1 = new Dustbin(902,535,10,90);
    binPart2 = new Dustbin(967,575,120,10);
    binPart3 = new Dustbin(1024,535,10,90);
}

function draw(){
    background(0);
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);
    
    fill("Aqua");
    textSize(40);
    text("CRUMPLED BALLS -1",385,40);

    fill("Magenta");
    textSize(20);
    text("Press the up arrow key to throw the crumpled ball into the dustbin",300,100);
    
    ground.display();
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display();   
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:90,y:-90});
    }
}
