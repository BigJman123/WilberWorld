function gameOver() {
    
    if(lives === 0) {
        setTimeout(() => game.add.text(325, 800, 'Game Over', { fontSize: '75px', fill: '#000' }), 1500);
        
        setTimeout(() => gameOverText = game.add.text(350, 1000, 'Retry?: ' + gameover, { fontSize: '75px', fill: '#000' }), 1500);
        
        // if(gameover === 0) {
        //     window.location = 'index.html';
        // }
    }
    
}