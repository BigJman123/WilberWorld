let playerControlsEnabled = false;

function controlCreate() {
    
    game.input.gamepad.start();
    
    pad1 = game.input.gamepad.pad1;
    
}

function controlUpdate() {
    
    cherryred.body.velocity.x = 0;
    cherryred.body.velocity.y = 0;
    
    if(playerControlsEnabled) {
        
        if(pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1) {
            console.log('left');
            cherryred.body.velocity.x -= 600;
            cherryred.angle = -10;
        }
        
        else if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1){
            console.log('right');
            cherryred.body.velocity.x += 600;
            cherryred.angle = +10;
        }
        
        if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1){
            console.log('up');
            cherryred.body.velocity.y -= 500;
        }
        
        else if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1){
            console.log('down');
            cherryred.body.velocity.y += 700;
        }
        
        else {
            cherryred.rotation = 0;
        }
        
    }
    
}