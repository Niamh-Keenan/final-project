controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 8 8 8 8 8 8 b b . . . 
        . . b b 8 8 8 8 8 8 8 8 b b . . 
        . b b 8 1 8 8 8 8 8 8 8 8 b b . 
        . b 8 1 8 8 8 8 8 1 1 1 8 8 b . 
        b 8 1 1 8 8 8 8 8 1 1 1 8 8 8 b 
        b 8 1 8 8 8 8 8 8 1 1 1 8 8 8 b 
        b 8 b 8 8 8 8 8 8 8 8 8 1 8 8 b 
        b 9 b 1 8 8 8 8 8 8 8 8 8 8 8 b 
        b 9 b b 8 8 8 8 8 8 8 8 8 1 8 b 
        b 9 1 b b 8 8 8 8 8 8 8 1 1 8 b 
        . b 9 b b b 1 8 8 8 8 1 1 9 b . 
        . b 1 9 b b b b b b b 1 9 b b . 
        . . b 1 9 1 b b b b 9 9 b b . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, fish, 0, -140)
    projectile2.startEffect(effects.fountain)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 200)
    sprite.startEffect(effects.spray, 200)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.startEffect(effects.disintegrate, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate, 200)
    sprite.startEffect(effects.spray, 200)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let healthsprite: Sprite = null
let projectile2: Sprite = null
let fish: Sprite = null
let duck = [
img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `
]
let shark = [
img`
    ..............cfff..............
    ............ccddbf..............
    ...........cbddbff.........ccc..
    ..........fccbbcf.........cbbc..
    ...fffffffccccccff.......cdbc...
    .ffcbbbbbbbbbbbbbcfff....cdbf...
    fcbbbbbbbbbcbbbbbbcccff.cdbf....
    fbcbbbbffbbbcbcbbbcccccffdcf....
    fbb1111ffbbbcbcbbbccccccbbcf....
    .fb11111111bbcbbbccccccccbbcf...
    ..fccc33cb11bbbbcccccccfffbbf...
    ...fc131c111bbbcccccbdbc..fbbf..
    ....f33c111cbbccdddddbc....fff..
    .....ff1111fdbbccddbcc..........
    .......cccccfdbbbfcc............
    .............fffff..............
    `,
img`
    ...........fffffff...ccfff..........
    ..........fbbbbbbbffcbbbbf..........
    ..........fbb111bbbbbffbf...........
    ..........fb11111ffbbbbff...........
    ..........f1cccc1ffbbbbbcff.........
    ..........ffc1c1c1bbcbcbcccf........
    ...........fcc3331bbbcbcbcccf..ccccc
    ............c333c1bbbcbcbccccfcddbbc
    ............c333c1bbbbbbbcccccddbcc.
    ............c333c11bbbbbccccccbbcc..
    ...........cc331c11bbbbccccccfbccf..
    ...........cc13c11cbbbcccccbbcfccf..
    ...........c111111cbbbfdddddc.fbbcf.
    ............cc1111fbdbbfdddc...fbbf.
    ..............cccfffbdbbfcc.....fbbf
    ....................fffff........fff
    `,
img`
    ....................................
    ....................................
    ....................................
    ...............ccffff...............
    ..............cddbbbf...............
    .......ffffffcddbbbf................
    .....ffbbbbbbbbbbbbbcfff.......ccccc
    ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
    ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
    .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
    .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
    .ffbb1111fffbbcbbbbcccccccbcffbccf..
    ..ff111111111bbbbccccccbbbcc..fbbcf.
    ....ccccccc111bdbbbfddbccc.....ffbbf
    ........ccccccfbdbbbfcc..........fff
    ...............ffffff...............
    `,
img`
    .................ccfff..............
    ................cddbbf..............
    ...............cddbbf...............
    .........ffffffccbbcf...............
    ......fffbbbbbbbbcccff..............
    .....fbbbbbbbbbbbbbbbcfff......ccccc
    .....bcbbbbbffbcbcbbbbcccff...cdbbbc
    .....bbb1111ffbbcbcbbbcccccffcddbbc.
    .....fb11111111bcbcbbbcccccccbdbbf..
    ......fccc33c11bbbbbbcccccccccbbcf..
    .......fc131cc11bbbbccccccccffbccf..
    ........f33c1111bbbcccccbdbc..fbbcf.
    .........ff1111cbbbfdddddcc....fbbf.
    ...........ccc1fbdbbfddcc.......fbbf
    ..............ccfbdbbfc..........fff
    .................fffff..............
    `,
img`
    ..................ccfff.............
    .................cddbbf.............
    ........fffffffffddbbf..............
    .......fbbbbbbbbbfcbcf..............
    .......fbbc111bffbbccffff...........
    .......fb111111ffbbbbbcccff....ccccc
    ........f1cc3311bbcbcbbccccf..cdbbbc
    ........fcc131c1bbbcbcbcccccfcddbbc.
    .........f111111bbbcbcbccccccbdbbf..
    .........f1111111bbbbbccccccccbbcf..
    ..........f111111bbbbcccccccffbccf..
    ...........c1111cbbbcccccbdbc.fbbcf.
    ............cc11cbbbfddddddc...fbbf.
    ..............cffbdbbfdddcc.....fbbf
    .................fbdbbfcc........fff
    ..................fffff.............
    `
]
fish = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . c d d d d d c . . . 
    . . . . . . c c c c c d c . . . 
    . . . . . c 4 4 4 4 d c c . . . 
    . . . . c d 4 4 4 4 4 1 c . . . 
    . . . c 4 4 1 4 4 4 4 4 1 c . . 
    . . c 4 4 4 4 1 4 4 4 4 1 c c c 
    . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
    . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
    f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
    f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
    . f 4 4 4 4 1 4 4 4 4 c b c f f 
    . . f f f d 4 4 4 4 c d d c . . 
    . . . . . f f f f f c c c . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
fish.setStayInScreen(true)
fish.bottom = 120
controller.moveSprite(fish, 100, 100)
info.setLife(3)
scene.setBackgroundColor(6)
effects.bubbles.startScreenEffect()
game.onUpdateInterval(5000, function () {
    healthsprite = sprites.createProjectileFromSide(duck[randint(1, duck.length - 1)], 0, 75)
    healthsprite.setKind(SpriteKind.Food)
    healthsprite.x = randint(10, 150)
})
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(shark[randint(0, shark.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
})
