let playerControlsEnabled = false;

function controlCreate() {
    
    game.input.gamepad.start();
    
    pad1 = game.input.gamepad.pad1;
    
}

function controlUpdate() {
    
    cherryred.body.velocity.x = 0;
    cherryred.body.velocity.y = 0;
    
    if(playerControlsEnabled) {
        
        if(pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1) {
            cherryred.body.velocity.x -= 600;
            cherryred.angle = -10;
        }
        
        else if (pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1){
            cherryred.body.velocity.x += 600;
            cherryred.angle = +10;
        }

        else {
            cherryred.rotation = 0;
        }
        
        if (pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1) {
            cherryred.body.velocity.y -= 500;
        }
        
        else if (pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1) {
            cherryred.body.velocity.y += 700;
        }
        
    }

    if (playerControlsEnabled) {
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
    }
    
}