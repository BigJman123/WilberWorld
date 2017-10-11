function gameOverTimerCreate() {
    //  Create our Timer
    timer = game.time.create(false);

    //  Set a TimerEvent to occur after 1 seconds
    timer.loop(Phaser.Timer.SECOND, updateCounter, this);

    //  Start the timer running
    timer.start();
    
}

function updateCounter() {

    minute--;

    timerText.setText("Retry?: " + minute);
    
    // console.log(minute);

}