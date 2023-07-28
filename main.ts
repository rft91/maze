scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    score += 1
})
let score = 0
let mySprite = sprites.create(img`
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
info.startCountdown(10)
forever(function () {
    while (score == 1) {
        info.startCountdown(10)
        tiles.setTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestClosed)
        scene.cameraFollowSprite(mySprite)
        info.startCountdown(10)
    }
})
