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
        
        
        endOfLevel = true;
        playerControlsEnabled = false;
        cherryred.angle = 0;

        enemyDestroyAll();
        
        timer.stop();
        
        livesText.kill();
        timerText.kill();
        
        setTimeout(() => {
          game.add.tween(cherryred).to({y: -500}, 2000, Phaser.Easing.Quadratic.In, true); 
        }, 3000);

        // setTimeout(() => {window.location = 'win.html'}, 6000);
    }
}