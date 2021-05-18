class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
	  player.getCount();
     
      form = new Form()
      form.display();
    }
	player1 = createSprite(15,430,20,20);
	player1.addAnimation("running",player1Img)
	player2 = createSprite(10,425,20,20);
	player2.addAnimation('running',player2Img);
	players = [player1,player2];
  }

  play(){
    form.hide();
    
	Player.getPlayerInfo();
	
	
    if(allPlayers !== undefined){
		background(bg);
		var x;
        var y = 500;
		var index = 0;
		
		for(var plr in allPlayers){
			
			index += 1;
			
			x = allPlayers[plr].distance + 10
			y += 50
			
			players[index-1].x = x;
			players[index-1].y = y;
			
			if(index === player.index){
			   players[index-1].shapeColor = "red"
			   
			  camera.position.x = players[index-1].x
			  camera.position.y = 300
			   
			   //console.log(camera.position.x,camera.position.y)
			}
			
			
		}
		if(keyIsDown(RIGHT_ARROW) && player.index !== null){
			player.distance +=10
			player.updateName();
		}
		if(player.distance > 5000){
			
			gameState = 2
			
		}
		
		drawSprites();
		
	}
    
    
  }

  end(){
	  
    //console.log("Game Over")
	background("white")
	text = createElement('h2');
	text.html("Game Over");
	text.position(600,300)
  }
}
