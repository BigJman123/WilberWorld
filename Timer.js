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