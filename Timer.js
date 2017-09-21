function timerCreate() {
    //  Create our Timer
    timer = game.time.create(false);

    //  Set a TimerEvent to occur after 1 seconds
    timer.loop(Phaser.Timer.SECOND, updateCounter, this);

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();
}

function updateCounter() {

    minute--;
    
    console.log(minute);

}