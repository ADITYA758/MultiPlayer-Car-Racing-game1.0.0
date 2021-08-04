class Player {
    constructor() 
    {
        this.index=null;
        this.name = null;
        this.distance = 0;
        this.rank = null;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function (data) { playerCount = data.val() })
    }

    updateCount(count) {
        database.ref('/').update({ playerCount: count , finishedPlayers : 0 })
    }

    update()
    {
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({name : this.name,distance : this.distance});
    }

    getPlayerInfo()
    {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",function (data) {allPlayers = data.val();});
     //console.log(allPlayers);
    }
    getfinishedPlayer()
    {
        database.ref('finishedPlayers').on("value",(data) =>{ this.rank = data.val();});
    }

    updateFinishedplayers()
    {
        database.ref('/').update({'finishedPlayers': this.rank});
    }
};



