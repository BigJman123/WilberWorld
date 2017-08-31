function playerAssets () {
    
    game.load.image('cherryred', 'assets/cherryred.png', 149, 300);
    
}

function playerCreate () {
    
    // adds player car to the game
    cherryred = game.add.sprite(487, 450, 'cherryred');
    cherryred.anchor.setTo(0.5, 0.5);
    cherryred.scale.setTo(.6, .6);
    
    // enables physics on player
    game.physics.arcade.enable(cherryred);
    cherryred.body.collideWorldBounds = true;
    
}

function playerUpdate () {
    
    cherryred.body.velocity.x = 0;
    cherryred.body.velocity.y = 0;
    
    // these are the arrow controls that move the player character
    if (speed.isDown) {
        cherryred.body.velocity.y -= 350;
    }
    else if (brake.isDown) {
        cherryred.body.velocity.y += 350;
    }

    if (left.isDown) {
        cherryred.body.velocity.x -= 400;
        cherryred.angle = -10;
    }
    else if (right.isDown) {
        cherryred.body.velocity.x += 400;
        cherryred.angle = +10;
    }
    else {
        cherryred.rotation = 0;
    }
    
}