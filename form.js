class Form{
constructor(){
this.button = createButton("PLAY");
this.reset = createButton("RESET");
}

hide(){
    this.button.hide();
    this.reset.hide();
}

display(){
   this.button.position(180,200);
   this.reset.position(180,300)
   this.reset.mousePressed(()=>{
       player.updateCount(0)
       game.updateState(0)
        
   })
   this.button.mousePressed(()=>{
       this.button.hide()
       playerCount+=1
       player.index = playerCount;
       player.updateCount(playerCount);
       player.update();
       if(playerCount ===2){
           game.updateState(1)
       }
      
   })
}
}



      