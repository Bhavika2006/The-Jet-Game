class Game{
    constructor(){}
    
   start(){
       if(gameState ===0){
           form = new Form()
           form.display()
           player = new Player()
       }
   }


    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }


    updateState(state){
        database.ref('/').update({
          gameState: state
        })
      }


      getplayerScore(){
        var playerScoreRef = database.ref('players/player').on('value',(data)=>{
          playerScore = data.val()
        })
    }

        updateScore(score){
            database.ref('/').update({
             playerScore:score
            });
          }
        
          reset(){
              if(player.y<0 && playerScore<5){
                  playerScore+=1
                
              }

              if(player.isTouching(particles)){
                
              }
          }
        
        }