class Form{
constructor(){
this.button = createButton("PLAY");
}
display(){
   var  button = createButton("PLAY")
   button.mousePressed(function(){
       this.button.hide()
       playerCount +=1
       player.index = playerCount;
       if(playerCount ===2){
           particles();
           player1 = createSprite(100,350)
           player1.addImage(playerImg)
           player2 = createSprite(250,350)
           player2.addImage(playerImg)
           if(keyIsDown("UP_ARROW")){
            player.y-=5
        }
        if(keyIsDown("DOWN_ARROW")&&player.y<=355){
            player.y+=5
        }
          
       }else{
           fill("red")
           text("WAITING FOR THE OTHER PLAYERS",200,200,)

       }
   })
}
}



      