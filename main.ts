controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveUp()
})
function moveRight () {
    mySprite.x += 2 * direction
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = -1 * direction
    if (direction == -1) {
        mySprite.say("I feel dizzy :(", 1000)
    } else {
        mySprite.say("I feel better :)", 1000)
    }
})
function moveUp () {
    mySprite.y += -2 * direction
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    moveUp()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti, 2000)
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    moveRight()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    moveLeft()
})
function moveDown () {
    mySprite.y += 2 * direction
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    moveRight()
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    moveDown()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moveDown()
})
function moveLeft () {
    mySprite.x += -2 * direction
}
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    moveLeft()
})
let direction = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(8)
direction = 1
