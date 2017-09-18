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
}

function enemyCreate(x, sprite) {

    enemyCars = enemy.create(x, -350, sprite);
    enemyCars.scale.setTo(.8, .8);
    enemyCars.body.immovable = true;
    enemyCars.body.gravity.y = 20;
    enemyCars.body.velocity.y = 50;
    
}

// function enemyUpdate() {
    
    
    
// }