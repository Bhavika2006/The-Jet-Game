class Game{
    constructor(){}
    
   start(){
       if(gameState ===0){
           form = new Form()
           form.display()
           player = new Player()
           player.getCount();
       }

            player1 = createSprite(width/4,height-50)
            player1.addImage(playerImg)
            player1.scale = 0.1
            player2 = createSprite(3*width/4,height-50)
            player2.addImage(playerImg)
            player2.scale = 0.1
            players=[player1,player2];
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

          play(){
              form.hide()
            Player.getPlayerInfo();
         
            if(allPlayers!==undefined){
                background("black");
                //var pos = 350
                var index = 0;
                var pos = 50;

                for(var plr in allPlayers){
                    fill("white")
                   
                    text("Score: " + allPlayers[plr].score, pos,50)
                    
                    if(particlesGroup.isTouching(players[index])){
                        player.distance = 0;
                        player.update()
                    }

                    players[index].y = height-50 - allPlayers[plr].distance;

                    index = index+1
                    pos = width-100
                }
            }
            if(keyIsDown(UP_ARROW) && player.index!==null){
                
                player.distance+=10
                
                player.update();
            }
        
            if(player.distance>660){
                player.distance = 0;
                player.score+=1;
                player.update();
            }

            
          drawSprites(); 
          }
        
        }