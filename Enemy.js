function enemyAssets() {
    game.load.image('car1', 'assets/car1.png', 136, 300);
    game.load.image('car2', 'assets/car2.png', 138, 299);
    game.load.image('car3', 'assets/car3.png', 136, 300);
    game.load.image('car4', 'assets/car4.png', 143, 300);
    game.load.image('car5', 'assets/car5.png', 149, 300);
    game.load.image('car6', 'assets/car6.png', 149, 300);
    game.load.image('car7', 'assets/car7.png', 149, 300);
    game.load.image('car8', 'assets/car8.png', 149, 300);
    game.load.image('car9', 'assets/car9.png', 149, 300);
    game.load.image('car10', 'assets/car10.png', 149, 300);
    game.load.spritesheet('explosion', 'assets/explosion.png', 96, 96);
}

function enemyCreate(x, sprite, multiplier) {

    enemyCars = enemy.create(x, -350, sprite);
    enemyCars.scale.setTo(.8, .8);
    enemyCars.body.immovable = true;
    
}

function enemyDestroy(enemy) {
    enemy.destroy();
    
    // cause explosion
    let explosion = game.add.sprite(enemy.x - 55, enemy.y, 'explosion');
    let boom = explosion.animations.add('boom');
    explosion.scale.setTo(2.5, 2.5);
    explosion.animations.play('boom', 30, false, true);
    
    
    // game canvas will flash red
    game.camera.flash(0xff0000, 200);
}

function enemyDestroyAll() {

    let enemies = enemy.children;

    // stop any further enemies from spawning
    enemySpawnTimes.forEach(function(id) {
        clearTimeout(id);
    });

    clearInterval(enemyInterval);

    enemies.forEach(function(enemy, i) {
        let e = enemy;
        setTimeout(function() {
            enemyDestroy(e);
        }, i * 250);
    });
}

function enemyUpdate() {
 
    let height = game.world.bounds.height + 500;

    let enemies = enemy.children;
    enemies.forEach(function(enemy) {
        enemy.y > height && enemy.destroy();
    })
}



let enemySpawnTimes = [];


// helper function
function setDeceleratingTimeout(callback, factor, times)
{
    var internalCallback = function(tick, counter) {
        return function() {
            if (--tick >= 0) {
                window.setTimeout(internalCallback, --counter * factor);
                callback(tick);
            }
        }
    }(times, 100);

    enemySpawnTimes.push(window.setTimeout(internalCallback, factor));
};