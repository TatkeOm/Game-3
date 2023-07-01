class StateChange{
  constructor(){
    this.title = createElement('h1');
    this.playButton = createButton('PLAY');
    this.infoButton = createButton('INFO');
    this.backstory = createElement('h3')
  }

  display(){
    this.title.position(windowWidth/2-250,windowHeight/2 - 300);
    this.title.html("CLONE ESCAPE");
    this.title.class("gameTitle");
    this.playButton.position(windowWidth/2-300,windowHeight/2-50);
    this.playButton.class("customButton");
    this.infoButton.position(windowWidth/2+200,windowHeight/2-50);
    this.infoButton.class("customButton");
    this.infoButton.mousePressed(()=>{
      this.showInfo()
    })
    this.playButton.mousePressed(()=>{
      gameState="play";
      this.playButton.hide();
      this.infoButton.hide();
      this.backstory.hide();
      this.title.hide();
    })
  }

  showInfo(){
    var message = `The clone gets captured by ghosts and is now trying to escape their
    facility to get back home.\n
    He has to get through obstacles, traps, and make
    difficult jumps to make it back to his home`
    this.backstory.html(message)
    this.backstory.class("leadersText");
    this.backstory.position(windowWidth/2-800, windowHeight/2);
  }
}