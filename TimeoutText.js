function timeoutText() {
    setTimeout(() => { 
        three = game.add.text(510, 300, '3', { fontSize: '100px', fill: '#fff' });
    }, 3000);
    
    setTimeout(() => {
        three.kill();
    }, 3750);
    
    setTimeout(() => {
        two = game.add.text(510, 300, '2', { fontSize: '100px', fill: '#fff' });
    }, 4250);
    
    setTimeout(() => {
        two.kill();
    }, 4750);
    
    setTimeout(() => {
        one = game.add.text(510, 300, '1', { fontSize: '100px', fill: '#fff' });
    }, 5250);
    
    setTimeout(() => {
        one.kill();
    }, 5750);
    
    setTimeout(() => { 
        go = game.add.text(460, 300, 'GO!', { fontSize: '100px', fill: '#fff' });
        playerControlsEnabled = true;
    }, 6250);
    
    setTimeout(() => {
        go.kill();
    }, 6750);
    
    setTimeout(() => {
        livesText = game.add.text(25, 1820, 'Lives: ' + lives, { fontSize: '35px', fill: '#fff' });
    }, 7000);
    
    setTimeout(() => {
        timerText = game.add.text(450, 100, 'Time: ' + minute, { fontSize: '50px', fill: '#fff'});
    }, 7000);
}