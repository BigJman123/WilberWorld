function backgroundAssets () {
    
    game.load.image('highway', 'assets/road.png', 840, 650);
    game.load.image('wall', 'assets/wall.png', 300, 650);
    
}

function backgroundCreate () {
    
    // adds background to game as a tileSprite
    highway = game.add.tileSprite(0, 0, 840, 650, 'highway', 0);

    bounds = game.add.group();
    bounds.enableBody = true;
    
    wallLeft = bounds.create(-160, 0, 'wall');
    wallLeft.body.immovable = true;
    
    wallRight = bounds.create(705, 0, 'wall');
    wallRight.body.immovable = true;
    
}

function backgroundUpdate () {
    
    // this is what makes the background scroll
    highway.tilePosition.y += 10;
    
}