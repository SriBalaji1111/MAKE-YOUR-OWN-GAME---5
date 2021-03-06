class Form {

  constructor() {
    this.input = createInput().attribute(
		'placeholder',
		'Name'
	);
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
	this.reset = createButton("Reset");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
	background("lightblue")
    this.title.html("Multiplayer Running Game");
    //this.title.position(displayWidth/2 - 100, 10);
	this.title.position(500, 10);

   // this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
	this.input.position(560 , 220);
	
	this.input.style('width', '200px');
    this.input.style('height', '20px');
    this.input.style('background', 'lavender');
	
    //this.button.position(displayWidth/2 - 40, displayHeight/2 );
	this.button.position(560, 300 );
	this.button.style('width', '200px');
    this.button.style('height', '40px');
	
	this.reset.position(1100,20);
	this.reset.style('width', '100px');
    this.reset.style('height', '30px');
	this.reset.style('background', 'lightpink');
	
	this.reset.mousePressed(()=>{
		player.update(0);
		game.update(0);
		database.ref('players').remove();
	})

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update(playerCount);
      player.updateName();
      this.greeting.html("Hello " + player.name)
      //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
	  this.greeting.position(530,150);
    });

  }
}
