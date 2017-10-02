function gameOverTimerCreate() {
    
    //  Create our Timer
    gameOverTimer = game.time.create(false);

    //  Set a TimerEvent to occur after 1 seconds
    gameOverTimer.loop(Phaser.Timer.SECOND, gameOverUpdateCounter, this);

    //  Start the timer running
    gameOverTimer.start();
    
    // console.log('hey');
    
}

function gameOverUpdateCounter() {

    gameover--;

    gameOverText.setText("Retry?: " + gameover);
    
    // console.log(minute);

}