function enemyCreate(x, sprite) {
    
    enemyCars = enemy.create(x, -180, sprite);
    enemyCars.scale.setTo(.6, .6);
    // enemyCars.body.immovable = true;
    enemyCars.body.gravity.y = 20;
    enemyCars.body.velocity.y = 50;
    
}

function resetCar() {
    
    // enemyCar1.kill();
    
    // if (enemyCar.kill) {
    //     console.log('car killed');
    // }
    
}

function enemyUpdate() {
    
}