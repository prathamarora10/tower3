class Hexagon
{
    constructor(x,y){
       
       

        this.body = Bodies.rectangle(x,y,20,20)
        this.image = loadImage("download.png")
        World.add(world,this.body)
    }
    display(){

        var pos = this.body.position

        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)
    }
}