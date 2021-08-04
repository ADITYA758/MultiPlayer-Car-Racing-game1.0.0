class Form {
   constructor() {
      this.title = createElement('h1')
      this.input = createInput("Name")
      this.button = createButton("Play")
      this.greeting = createElement('h3')
      this.reset = createButton('Reset')
   }
   hideForm() {
      this.greeting.hide();
      this.input.hide();
      this.button.hide();
      this.title.hide();
   }

   display() {

      this.title.html("Car Racing Game")
      this.title.position(displayWidth/2-50, displayHeight-750)

      this.input.position(displayWidth/2-50, 200)

      this.button.position(displayWidth /2+200, 200)

      this.reset.position(displayHeight-100,20)

      this.button.mousePressed(() => {
         this.input.hide();
         this.button.hide();
         player.name = this.input.value();
         playerCount = playerCount + 1;
         player.index = playerCount;
         player.updateCount(playerCount);
         this.greeting.html("Hello " + player.name);
         this.greeting.position(475, 200);
      });

      this.reset.mousePressed(() =>
      {
         player.updateCount(0)
      game.updateState(0)
   }
      )
   }

};