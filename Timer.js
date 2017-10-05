var endOfLevel = false;

function timerCreate() {
    //  Create our Timer
    timer = game.time.create(false);

    //  Set a TimerEvent to occur after 1 seconds
    timer.loop(Phaser.Timer.SECOND, updateCounter, this);

    //  Start the timer running
    setTimeout(() => {timer.start();}, 7000);
    
}

function updateCounter() {

    minute--;

    timerText.setText("Time: " + minute);
    
    // console.log(minute);

}

function timerUpdate() {
    if(! endOfLevel && minute === 0) {
        
        black = game.add.image(0, 0, 'black');
        black.alpha = 0;
        
        endOfLevel = true;
        playerControlsEnabled = false;
        cherryred.angle = 0;

        enemyDestroyAll();
        
        timer.stop();
        
        livesText.kill();
        timerText.kill();
        
        setTimeout(() => {
          game.add.tween(cherryred).to({y: -500}, 2000, Phaser.Easing.Quadratic.In, true); 
        }, 4000);
        
        setTimeout(() => {
            game.add.tween(black).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, false);
        }, 6000);

        // setTimeout(() => {window.location = 'win.html'}, 7000);
    }
}