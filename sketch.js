var player1,player2;

var database;
var player1Img,player2Img;
var allPlayers;
var form;
var game;
var player;
var bg;
var players = [];
var text
var playerCount = 0;
var gameState = 0;

function preload(){
	player1Img = loadAnimation('man_1.png','man_2.png','man_3.png','man_4.png')
	player2Img = loadAnimation('young_man_1.png','young_man_2.png','young_man_3.png','young_man_4.png')
	
	bg = loadImage('background.jpg')
}
function setup(){
	var canvas = createCanvas(1200,600);

	database = firebase.database();
	
	game = new Game();
	
	game.getState();

	if(gameState === 0){
		game.start()
	}
	

}
function draw(){
	
	if(playerCount === 2){
		game.update(1);			
	}
	
	
	if(gameState === 1){
		
		game.play();
		
	}
	
	
	if(gameState === 2){
		game.end();
	}
}