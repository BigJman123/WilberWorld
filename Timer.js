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
    if(minute === 0) {
        timer.stop();
        
        setTimeout(() => {window.location = 'win.html'}, 500);
    }
}