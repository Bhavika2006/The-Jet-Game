class Form{
constructor(){
this.button = createButton("PLAY");
}
display(){
   var  button = createButton("PLAY")
   button.mousePressed(function(){
       playerCount +=1
       if(playerCount ===2){
           game.play()
       }else{
           fill("red")
           text("WAITING FOR THE OTHER PLAYERS",200,200,)

       }
   })
}
}