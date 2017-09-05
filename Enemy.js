// Enemy = function (game, x, sprite) {
//     Phaser.Sprite.call(this, game, x, -200, sprite);
//     game.physics.enable(this, Phaser.Physics.ARCADE);
//     this.enableBody = true;
//     this.body.gravity.y = 20;
//     this.body.velocity.y = 50;
// }

// Enemy.prototype = Object.create(Phaser.Sprite.prototype);
// Enemy.prototype.constructor = Enemy;

// Enemy.prototype.update = function() {
    
//     game.physics.arcade.collide(this, platforms, function () {
        
//     });
    
// }
function enemyCreate(x, sprite) {
    
    enemy = game.add.group();
    enemy.enableBody = true;
    
    
    enemyCar1 = enemy.create(x, -200, sprite);
    enemyCar1.scale.setTo(.6, .6);
    enemyCar1.body.gravity.y = 20;
    
}

function resetCar() {
    
    // enemyCar1.kill();
    
    // if (enemyCar.kill) {
    //     console.log('car killed');
    // }
    
}

function enemyUpdate() {
    
    if (enemyCar1) {
        
    }   
    
    
}