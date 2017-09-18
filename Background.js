function backgroundAssets() {
    
    game.load.image('highway', 'assets/road.png', 840, 650);
    game.load.image('highway2', 'assets/road2.png', 1024, 768);
    game.load.image('highway3', 'assets/road3.png', 1080, 1920);
    game.load.image('wall', 'assets/wall.png', 300, 650);
    
}

function backgroundCreate() {
    
    // adds background to game as a tileSprite
    highway = game.add.tileSprite(0, 0, 1080, 1920, 'highway3', 0);

    bounds = game.add.group();
    bounds.enableBody = true;
    
    wallLeft = bounds.create(-115, 0, 'wall');
    wallLeft.body.immovable = true;
    
    wallRight = bounds.create(860, 0, 'wall');
    wallRight.body.immovable = true;
    
}

function backgroundUpdate() {
    
    // this is what makes the background scroll
    highway.tilePosition.y += 15;
    
}