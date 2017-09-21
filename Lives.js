function livesCreate() {
    lives--;
            
    text.setText("Lives: " + lives);
        
    if(lives === 0) {
        cherryred.kill();
        
        setTimeout(() => game.add.text(325, 800, 'Game Over', { fontSize: '75px', fill: '#000' }), 1500);
        
        setTimeout(() => {window.location = 'index.html'}, 3500);
    }
    
    console.log(lives);
}