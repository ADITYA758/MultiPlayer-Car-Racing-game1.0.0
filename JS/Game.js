class Game {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) { gameState = data.val() });
    }

    updateState(state) {
        database.ref('/').update({ gameState: state })
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");

            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();

            car1 = createSprite(365,535,50,50);
            car1.addImage("car1",c1i);

            car2 = createSprite(465,535,50,50);
            car2.addImage("car2",c2i);

            car3 = createSprite(765,535,50,50);
            car3.addImage("car3",c3i);

            car4 = createSprite(965,535,50,50);
            car4.addImage("car4",c4i);

            cars = [car1,car2,car3,car4];
           
            
        }
    }

    play() {
        form.hideForm();
        textSize(30)
        text("Game is Started", 120, 100)
        player.getPlayerInfo();
        player.getfinishedPlayer();

        if (allPlayers !== undefined) {
            // var display_position = 130;
            // textSize(15);
            image(tracking,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index = 0;
            var x=220;
            var y;

            //text(allPlayers, 120, display_position); Since, firebase database structure is of JSON type, the players data will be stored as JSON
            for (var plr in allPlayers) // The in operator will take the first key from the key-value pair in the first iteration & store it in variable plr
            {
                index = index+1;
                x=x+200
                y=displayHeight - allPlayers[plr].distance
                cars[index-1].x=x;
                cars[index-1].y=y;

                if (index===player.index) {
                    cars[index-1].shapeColor="red"
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;

                    console.log(cars[index-1].y)

                } else {
                    cars[index-1].shapeColor="black"
                }

                if (plr === "player" + player.index) {
                    fill("red");
                }
                else {
                    fill("black");
                }
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_position);
                display_position = display_position + 20;
            }
        }

    

    if(keyIsDown(UP_ARROW)) 
    {
    player.distance = player.distance + 50;
    player.update();
}

 if (player.distance >=4000) 
 {
     gameState = 2;
     player.rank = player.rank+1;
     //game.updateState(2);
     text("Rank : " + player.rank , 100 , -3200)
     player.updateFinishedplayers();
 }

   drawSprites();
}   

end()
{
    console.log("Game Ended")
    
}
};