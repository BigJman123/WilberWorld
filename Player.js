function playerAssets() {
    
    game.load.image('cherryred', 'assets/cherryred.png', 149, 300);
    
}

function playerCreate() {
    
    // adds player car to the game
    cherryred = game.add.sprite(625, 2500, 'cherryred');
    cherryred.anchor.setTo(0.5, 0.5);
    cherryred.scale.setTo(.8, .8);
    
    // enables physics on player
    game.physics.arcade.enable(cherryred);
    cherryred.body.gravity.y = 100;
    
    // sets a timeout of 2 seconds for the cherryred to recieve collision with world bounds
    
    
    playerTween = game.add.tween(cherryred).to({y: 1000}, 2000, Phaser.Easing.Quadratic.Out, true);

    
}

function playerUpdate() {
    
    // if(minute > 0) {
    //     setTimeout(() => {cherryred.body.collideWorldBounds = true}, 3000);
    // }
    // else {
    //     cherryred.body.collideWorldBounds = false;
    // }
    
    cherryred.body.velocity.x = 0;
    cherryred.body.velocity.y = 0;
    
    // these are the arrow controls that move the player character
    
    setTimeout(() => {
        if (speed.isDown) {
        cherryred.body.velocity.y -= 500;
        }
        else if (brake.isDown) {
            cherryred.body.velocity.y += 700;
        }
    
        if (left.isDown) {
            cherryred.body.velocity.x -= 600;
            cherryred.angle = -10;
        }
        else if (right.isDown) {
            cherryred.body.velocity.x += 600;
            cherryred.angle = +10;
        }
        else {
            cherryred.rotation = 0;
        }
    }, 7000);
    
}