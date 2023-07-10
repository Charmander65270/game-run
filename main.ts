namespace SpriteKind {
    export const shiel = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    enemy_speed += 50
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    shiel = sprites.create(img`
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222...........................
        222222222222222222222222222222
        222222222222222222222222222222
        222222222222222222222222222222
        `, SpriteKind.shiel)
    controller.moveSprite(shiel)
    shiel.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.shiel, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    pause(5000)
    sprites.destroy(shiel)
})
info.onCountdownEnd(function () {
    info.changeScoreBy(1)
    info.startCountdown(1)
})
info.onScore(100, function () {
    game.setGameOverEffect(true, effects.confetti)
    info.changeScoreBy(-1)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let projectile: Sprite = null
let shiel: Sprite = null
let mySprite: Sprite = null
let I = 0
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 3 3 . . . . . . . . . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    3 2 2 2 2 2 2 2 3 3 3 . . . . . 
    3 2 2 2 2 2 2 2 3 . . . . . . . 
    3 3 2 2 2 2 2 2 3 . . . . . . . 
    . 3 2 2 2 2 2 2 3 . . . . . . . 
    . 3 2 2 2 2 2 2 3 . . . . . . . 
    . 3 2 2 2 2 2 2 3 3 3 3 3 . . . 
    . 3 3 2 2 2 2 2 2 2 2 2 3 3 . . 
    . . 3 2 2 2 2 2 2 2 2 2 3 . . . 
    . . 3 3 3 3 3 2 2 2 2 3 . . . . 
    . . . . . . 3 3 2 2 2 3 . . . . 
    . . . . . . . . 3 3 3 . . . . . 
    . . . . . . . . . 3 3 . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 5, 100)
let enemy_speed = 50
scene.setBackgroundImage(assets.image`road`)
info.setLife(3)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(1)
forever(function () {
    projectile = sprites.createProjectileFromSide(img`
        7 . . . . 7 . . . 
        . 7 . . . . . 7 . 
        . . . . . . . . . 
        7 7 . . . 7 7 7 . 
        . e e e e e e 7 7 
        7 7 . . . 7 7 7 . 
        . . . . . . . . . 
        . 7 . . . . . 7 . 
        7 . . . . 7 . . . 
        `, randint(30, 50), 0)
    projectile.setPosition(0, randint(0, 150))
    projectile.setVelocity(enemy_speed, 0)
    pause(500)
})
game.onUpdateInterval(10000, function () {
    enemy_speed += 50
})
