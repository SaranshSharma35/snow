class snow{
constructor(x,y){
    var options={
restitution:1,
friction:0.0


    }
    this.x=x
    this.y=y
    this.r=30
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    this.image=loadImage("snow4.webp")
    World.add(world,this.body)
}

display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    image(this.image,0,0,this.r*2,this.r*2)
    pop()
}

}