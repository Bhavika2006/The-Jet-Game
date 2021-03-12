class Player{
    constructor(){
        this.index = null
        this.score = 0

    }
    getCount(){
        var playerCount = database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
        }
    
        updateCount(count){
            database.ref('/').update({
                playerCount:count
            })
        }

        getPlayerInfo(){
            var playerIndex = "players/player"+this.index
            database.ref(playerIndex).on("value",(data)=>{
                allPlayers = data.val()
            })
        }
}