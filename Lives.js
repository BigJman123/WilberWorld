function livesCreate() {
    lives--;
    
    livesText.setText("Lives: " + lives);
        
    if(lives === 0) {
        let explosion = game.add.sprite(cherryred.x - 115, cherryred.y - 100, 'explosion');
        let boom = explosion.animations.add('boom');
        explosion.scale.setTo(2.5, 2.5);
        explosion.animations.play('boom', 30, false, true);
        
        cherryred.kill();
        
        setTimeout(() => game.add.text(325, 800, 'Game Over', { fontSize: '75px', fill: '#000' }), 1500);
        
        setTimeout(() => {window.location = 'index.html'}, 3500);
    }
    
    console.log(lives);
}