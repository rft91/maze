scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    let score = 0
    info.changeScoreBy(1)
    if (score == 1) {
        tiles.setTilemap(tilemap`level_3`)
    } else if (score == 2) {
    	
    } else if (score == 3) {
    	
    } else if (score == 4) {
    	
    } else if (score == 5) {
    	
    } else if (score == 6) {
    	
    } else if (score == 7) {
    	
    } else if (score == 8) {
    	
    } else if (score == 9) {
    	
    } else if (score == 10) {
    	
    } else if (score == 11) {
    	
    } else {
    	
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestClosed)
    scene.cameraFollowSprite(mySprite)
    info.startCountdown(200)
})
let mySprite: Sprite = null
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 . . . . 
    . . . . . . 2 . . . . 2 . . . . 
    . . . . . 2 2 . 2 . 2 2 . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . 2 . . . . . 2 . . . . 
    . . . . . 2 2 2 . 2 2 2 . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . 2 2 . 2 . 2 2 . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . 2 2 . 2 2 . . . . . 
    . . . . . . 2 . . . 2 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_0`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestClosed)
scene.cameraFollowSprite(mySprite)
info.startCountdown(200)
