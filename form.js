class Form{
constructor(){
this.button = createButton("PLAY");
this.reset =createButton("RESET");
this.greeting = createElement('h2');
}

hide(){
    this.button.hide();
    this.reset.hide();
    this.greeting.hide();
}

display(){
   this.button.position(width/2-20,height/2);
   this.reset.position(width-100,50);
   
   this.button.mousePressed(()=>{
       this.button.hide()
       playerCount+=1
       player.index = playerCount;
       player.updateCount(playerCount);
       player.update();
       fill("blue")
       this.greeting.html("Waiting for other player");
       this.greeting.position(width/4,height/2);
       
   })

   this.reset.mousePressed(()=>{
       player.updateCount(0);
       game.updateState(0);
   })
}
}



      