function powerUpAssets() {
    game.load.spritesheet('power', 'assets/placeholder.png', 50, 50);
}

function powerUpCreate(x) {
    newPowerUp = powerUp.create(x, -100, 'power');
    newPowerUp.scale.setTo(.5,.5);
    newPowerUp.body.gravity.y = 20;
    newPowerUp.body.velocity.y = 75;
}