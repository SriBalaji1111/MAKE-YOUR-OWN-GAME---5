class Player{
	
	constructor(){
		this.distance = 50;
		this.name = null;
		this.playerCount = 0 ;
	}
	
	getCount(){
		
		database.ref('playerCount').on("value" ,function(data){
			playerCount = data.val();
		})
	}
	update(count){
		database.ref('/').update({
		  playerCount: count
		})
	}
	updateName(){
		
		database.ref('players/player' + this.index).update({
			name: this.name,
			distance : this.distance
		})
		
	}
	static getPlayerInfo(){
		
		database.ref('players').on("value" , function(data){
			allPlayers = data.val();
		})
		
	}
	
	
}