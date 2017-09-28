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
        
        enemy.destroy();
        
        timer.stop();
        
        livesText.kill();
        timerText.kill();
        
        // setTimeout(() => {
        //   game.add.tween(cherryred).to({y: -1000}, 2000, Phaser.Easing.Quadratic.Out, true); 
        // }, 3000);
        
        
        // let explosion = game.add.sprite(enemy.x - 55, enemy.y, 'explosion');
        // let boom = explosion.animations.add('boom');
        // explosion.scale.setTo(2.5, 2.5);
        // explosion.animations.play('boom', 30, false, true);
        // setTimeout(() => {window.location = 'win.html'}, 500);
    }
}