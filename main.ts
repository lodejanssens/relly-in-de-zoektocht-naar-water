enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Rolly = SpriteKind.create()
    export const Schoen = SpriteKind.create()
    export const tvbakske = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    current_level += 1
    StartLevel()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Relly.vy == 0) {
        Relly.vy = -120
    }
})
function StartLevel () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level_0`)
        game.showLongText("Pas op voor boze Robbe wanneer je zijn schoenen aanraakt! Verzamel Rolly's om punten te verdienen.", DialogLayout.Bottom)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level_1`)
        game.showLongText("Dat was niet zo moeilijk hé, goed bezig Relly!", DialogLayout.Bottom)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level_2`)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            99999999999999999999999999999999999999999999dddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999dddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            9999999999999999999999999999999999999999cccccccccccccccccccccccccccddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999ccccbccccccccccccccccccccccddddd9999999999999999999999999999999999999999999999999999999999999999999999911111111111199999
            999999999999999999999999999999999999999cccccbcccccccccccccccccccccdddddd9999999999999999999999999999999999999999999999999999999999999111111111111111111111111999
            999999999999999999999999999999999999999cccccbcccccbcccccccccccccccdddddd9999999999999999999999999999999999999999999999999999999999991111111111111111111111111199
            999999999999999999999999999999999999999cccccbcccccbccccccccccccccddddddd9999999999999999999999999999999999999999999999999999999999991111111111111111111111111199
            999999999999999999999999999999999999999cccccbcccccbccccccccccccccddddddd9999999999999999999999999999999999999999999999999999999999911111111111111111111111111199
            999999999999999999999999999999999999999cccccbcccccbccccccccccccccddddddd9999999999999999999999999999999999999999999999999999999999911166661661161161666161111199
            999999999999999999999999999999999999999cccccbcccccbccccccccccccccddddddd9999999999999999999999999999999999999999999999999999999999911111611666161161161161111199
            999999999999999999999999999999999999999cccccbcccccbccccccccccccccddddddd9999999999999999999999999999999999999999999999999999999999991111611661161161161161111999
            999999999999999999999999999999999999999cccccbcccccbccccccccccccccddddddd9999999999999999999999999999999999999999999999999999999999991111611666161161161161111999
            999999999999999999999999999999999999999cccccbcccccbcccccccccccccccdddddd999999999999999999999999999999d99ddd9999999999444444499999991111611616161161161111111999
            999999999999999999999999999999999999999cccccbcccccbcccccccccccccccdddddd99999999999999999999999999999dd99ddd9999999944444444449999991111611616616611161161111999
            999999999999999999999999999999999999999cccccbcccccbccccccccbccccccdddddd999999999999999999999999999ddddddddd9999944444444444444999911111111111111111111111111999
            999999999999999999999999999999999999999cccccbccccccbcccccccbccccccdddddd999999999999999999999999999dddddddd99999994444444444444999111111111111111111111111119999
            999999999999999999999999999999999999999ccccccbcccccbcccccccbccccccdddddd9999999999999999999999999999ddddddd9999999d444444dd4449991111111111111111111111111199999
            999999999999999999999999999999999999999ccccccbccccccbcccccccbcccccdddddd9999999999999999999999999dddddddddd9999999ddd444ddddd99991111119111111111111119999999999
            999999999999999999999999999999999999999ccccccbccccccbcccccccbcccccdddddd9999999999999999999999999dddddddddd9899999ddd9dddd9dd99991111199999999999999999999999999
            9999999999999999999999999999999999999999ccccccbccccccbccccccbccccccddddd99999999999999999999999999dddddddd88899999ddddddddddd99999111999999999999999999999999999
            9999999999999999999999999999999999999999ccccccbccccccbcccccccbccccccdddd9999999999999999999999999999999ddd888999944ddddbddddd99999999999999999999999999999999999
            fffffffffffffffffffffffffffffffffffffffffccccccbccccccbccccccbcccccccddd99999999999999999999999999999999888889999944ddddddd4d49999999999999999999999999999999999
            fffffffffffffffffffffffffffffffffffffffffccccccbcccccccbcccccbccccccccddfffffffffffffffffffffffffffffff888888fffff444dddd44444ffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffcccccbcccccccbccccccbccccccccdfffffffffffffffffffffffffffffff8888888ffff44444444444fffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffccccccbcccccccbcccccbccccccccdfffffffffffffffffffffffffffffff8888888ffffff444444ffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffccccccbcccccccbcccccbccccccccdfffffffffffffffffffffffffffffff8888888fffffffdddddffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffccccccbcccccccbccccbcccccccccfffffffffffffffffffffffffffffff8888888ff88888888888888ffffffffffffffffffffffffffffffffff
            fffffffffff77fffffffffffffffffffffffffffffffccccccbccccccbcccccbccccccccffffffffffffffffffffffffffffffff88888888888888888888888fffffffffffffffffffffffffffffffff
            fffff777777777777fffffffffffffffffffffffffffccccccbcccccccbccccbcccccccccffffffffffffffffffffffffffffffff8888888888888888888888fffffffffffffffffffffffffffffffff
            7f77777777777777777fffffffffffffffffffffffffccccccbccccccccbcccbcccccccccffffffffffffffffffffffffffffffff88888888888888888888888ffffffffffffffffffffffffffffffff
            777777777777777777777777777fffffffffffffffffdccccccbcccccccbccccbcccccccccf7777777777777fffffffffffffffff88888888888888888888888ffffffffffffffff777777777777ffff
            77777777777777777777777777777777777777777777dccccccbcccccccbccccbcccccccccc777777777777777777777fffffffff88888888888888888888888ff777777777777777777777777777777
            77777777777777777777777777777777777777777777ddccccccbccccccbcccccbccccccccc77777777777777777777777ffffffff888888888888888888887777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddcccccccbcccccbccccccbcccccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777dddccccccbccccccbcccccbcccccccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777dddcccccccbcccccbccccccbcccccccc777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddddccccccbccccccbcccccbcccccccc777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            777777777777cccc7777777777777777777777777777ddddccccccbccccccbcccccbcccccccc777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            777777777ccc777c7777777777777777777777777777ddddcccccccbcccccbcccccbcccccccc777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777cc7777777c777777777777777777777777777dddddccccccbcccccbcccccbcccccccb777777777777cccccc777777777777777777777777777cc7777777777777777777777777cccc77777777
            777777c7777777777ccccc7777777777777777777777ddddddccccccbccccbccccccbcccccbb777777777ccc777777ccc77777777777777777777777777ccc77777777777777777777777777ccc77777
            77777777777777777777777777777777777777777777ddddddccccccbcccccbcccccbcccccbc777777ccc777777777777ccccccc7777777777777777777777cccccc7777777777777777777777cc7777
            77777777777777777777777777777777777777777777ddddddccccccbcccccbccccccbcccbbc7777777777777777777777c77777777777777777777777777777777c77777777777777777777777c7777
            77777777777777777777777777777777777777777777dddddddcccccbcccccbccccccbcccbcc77777777777777777777777777777777777777777777777777777777ccccccc777777777777777777777
            77777777777777777777777777777cc7777777777777dddddddcccccbcccccbccccccbcccbcc777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            777777777777777777777777777cc77cc77777777777dddddddccccccbccccbccccccbcccbcc777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777cc777777c7777777777dddddddccccccbcccccbcccccbcccbcc777777777777777777777777777777777777777c77777777777777777777777777777777777777777777
            777777777777777777777777777777777ccc77777777dddddddccccccbcccccbcccccbcccbcc777777777777777777777ccccccccccc77ccccc777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddddddddccccccbccccbcccccbcccbcc777777777777777cccccc77777777777cc77777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddddddddccccccbccccbcccccbcccbcc777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddddddddccccccbccccbcccccbcccbccc77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddddddddccccccbcccbccccccbcccbccc77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddddddddccccccbcccbccccccbcccbccc77777777777777777777777777777777777777777777777777777777777777777777777c77777777777
            77777777777777777777777777777777777777777777ddddddddccccccbcccbccccccbcccbccc77777777777777777777777777777777777777777777777777777777777777777777ccc777777777777
            7777777777777777cccccccccccc7777777777777777ddddddddccccccbcccbccccccbcccbccc77777777777777777777777777777777777777777777777777cccccccccc777777cc777777777777777
            777777777777777c7777777777777777777777777777ddddddddccccccbcccbccccccbcccbccc77777777777777777777777777ccccccc777777777777777777777777777cccccc77777777777777777
            77777777777777c77777777777777777777777777777ddddddddccccccbcccbccccccbcccbccc777777777777777777777ccccc7777777c7777777777777777777777777777777777777777777777777
            7777777777777c777777777777777777777777777777ddddddddcccccbccccbccccccbcccbccc77777777777777777cccc7777777777777c777777777777777777777777777777777777777777777777
            77777777777cc7777777777777777777777777777777ddddddddcccccbccccbccccccbcccbccc777777777777777cc777777777777777777cc7777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddddddddcccccbccccbccccccbcccbccc7777777777777777777777777777777777777cccc77cc77777777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddddddddcccccbccccbccccccbcccbccc77777777777777777777777777777777777777777cc7777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddddddddcccccbccccbcccccbccccbccc77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777dddddddccccccbccccbcccccbccccbccc77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777dddddddccccccbccccbcccccbccccbccc77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddddddccccccbccccbccccccbccccbccc77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777ddddddccccccbccccbccccccbcccbcccc77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777eeeeddddddccccccbccccbcccccbccccbcccc777777777777777eeeedeeeeeee7777777777777777777777eeeeeeeeeeeeedeeeeeedeeeeeeeedeeee
            eeedeeeeeeeedeeeeeeedeeeeeeedeeeeeeedeeeeeeedddddccccccbcccccbcccccbccccbcccceeeedeeeeedeeeeeeeedeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeedeeeeeeeedeeee
            eeedeeeeeeedeeeeeeeedeeeeeeedeeeeeeedeeeeeeddddddccccccbcccccbcccccbccccbcccceeedeeeeeedeeeeeeeedeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeedeeeeeeeedeeee
            eeedeeeeeeedeeeeeeeedeeeeeeedeeeeeeedeeeeeeddddddccccccbcccccbcccccbccccbcccceeedeeeeeedeeeeeeeedeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeedeeeeeeeedeeee
            eedeeeeeeedeeeeeeeedeeeeeeedeeeeeeeedeeeeeeddddddccccccbcccccbccccbcccccbcccceeedeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeedeeeeeeedeeeeeeeedeeee
            eedeeeeeeedeeeeeeeedeeeeeeedeeeeeeeedeeeeeeddddddccccccbcccccbccccbcccccbcccceedeeeeeedeeeeeeeedeeeeeeeeedeeeeeeedeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeedeeee
            edeeeeeeeedeeeeeeedeeeeeeedeeeeeeeedeeeeeededdddccccccbccccccbccccbcccccbcccceedeeeeeedeeeeeeeedeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeedeeeee
            edeeeeeeedeeeeeeeedeeeeeeedeeeeeeeedeeeeeededdddccccccbccccccbccccbcccccbccceedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeedeeeeeeeedeeeee
            edeeeeeeedeeeeeeeedeeeeeeedeeeeeeeedeeeeeededddccccccbcccccccbccccbcccccbccceedeeeeeedeeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeedeeeeeeeedeeeee
            deeeeeeedeeeeeeeedeeeeeeedeeeeeeeedeeeeeeededddccccccbccccccbccccbcccccbcccceedeeeeeedeeeeeeeedeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeedeeeeeeedeeeeeeeedeeeee
            eeeeeeeedeeeeeeeedeeeeeeedeeeeeeeedeeeeeedeedddcccccbcccccccbccccbcccccbccccedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeedeeeee
            eeeeeeedeeeeeeeedeeeeeeeedeeeeeeeedeeeeeedeeddcccccbccccccccbccccbcccccbccceedeeeeeedeeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeedeeeeee
            eeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeedeeddcccccbcccccccbcccccbcccccbccceedeeeeeedeeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeedeeeeee
            eeeeeeedeeeeeeedeeeeeeeedeeeeeeeedeeeeeeedeedcccccbccccccccbccccbccccccbcceedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeedeeeeeeedeeeeeeeedeeeeee
            eeeeeedeeeeeeeedeeeeeeeedeeeeeeeedeeeeeedeeeccccccbccccccccbccccbccccccbcceedeeeeeedeeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeedeeeeee
            eeeeeedeeeeeeedeeeeeeeedeeeeeeeeedeeeeeedeeecccccbcccccccccbcccbccccccbcccedeeeeeeedeeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeedeeeeeed
            eeeeedeeeeeeeedeeeeeeeedeeeeeeeeedeeeeeedeeccccccbccccccccbccccbcccccbccccedeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeedeeeeeed
            eeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeecccccbccccccccbcccccbcccccbccceedeeeeeedeeeeeeeedeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeedeeeeeed
            eeeeedeeeeeeedeeeeeeeedeeeeeeeeedeeeeeeedecccccbbccccccccbcccccbcccccbcccedeeeeeeedeeeeeeeedeeeeeeeeedeeeeeeeedeeeeeedeeeeeeeeedeeeeeeedeeeeeeeedeeeeeeedeeeeeed
            eeeedeeeeeeeedeeeeeeeedeeeeeeeeedeeeeeedeecccccbccccccccbccccccbccccbccceedeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeedeeeeeed
            eeeedeeeeeeedeeeeeeeedeeeeeeeeedeeeeeeedeccccccbccccccccbccccccbccccbccceedeeeeeedeeeeeeeedeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeedeeeeeeed
            eeedeeeeeeeedeeeeeeeedeeeeeeeeedeeeeeeedecccccbccccccccbcccccccbccccbccdedeeeeeeedeeeeeeeedeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeedeeeeeeed
            eeedeeeeeeedeeeeeeeeedeeeeeeeeedeeeeeeedecccccbccccccccbcccccccbccccbccdedeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeeedeeeeeedeeeeeeeeedeeeeeeedeeeeeeeedeeeeeeedeeeeeeed
            eedeeeeeeeedeeeeeeeedeeeeeeeeeedeeeeeedeecccccbcccccccbcccccccbbcccbccdddeeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeeedeeeeeeedeeeeeede
            eedeeeeeeedeeeeeeeeedeeeeeeeeedeeeeeeedecccccbcccccccbccccccccbcccbccddddeeeeeeedeeeeeeeedeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeeedeeeeeeedeeeeeede
            eedeeeeeeedeeeeeeeeedeeeeeeeeedeeeeeeedecccccbcccccccbccccccccbccccccddddeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeedeeeeeeede
            edeeeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeedecccccbbcccccbccccccccbcccccccdddeeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeedeeeeeeedeeeeeeede
            edeeeeeeedeeeeeeeeedeeeeeeeeedeeeeeeedeeccccccbcccccbccccccccbccccccddddeeeeeeedeeeeeeeedeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeeedeeeeeeedeeeeeeede
            deeeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeedeeccccccbcccccbccccccccbccccccddddeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeeedeeeeeeedeeeeeeede
            eeeeeeeedeeeeeeeeedeeeeeeeeeedeeeeeeedeeccccccbcccccbcccccccbbcccccdddddeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeeedeeeeeeedeeeeeeede
            eeeeeeeedeeeeeeeeedeeeeeeeeeedeeeeeeedeeccccccccccccbcccccccbccccccdddddeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeeedeeeeeedeeeeeeeede
            eeeeeeedeeeeeeeeedeeeeeeeeeedeeeeeeedeeecccccccccccccccccccccccccccddddeeeeeedeeeeeeeedeeeeeeeeeedeeeeeeeedeeeeeeedeeeeeeeeedeeeeeeedeeeeeeeedeeeeeeedeeeeeeedee
            `)
        game.showLongText("Oei Robbe is heel kwaad. Let op de tv bakjes die hij gooit!", DialogLayout.Bottom)
    } else {
        game.over(true, effects.hearts)
    }
    tiles.placeOnRandomTile(Relly, myTiles.tile10)
    for (let value of tiles.getTilesByType(myTiles.tile10)) {
        tiles.setTileAt(value, myTiles.transparency16)
    }
    scene.cameraFollowSprite(Relly)
    info.setLife(4)
    music.setVolume(15)
    music.playMelody("C5 B A G F E D C ", 500)
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Rolly)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Schoen)) {
        value4.destroy()
    }
    for (let value5 of tiles.getTilesByType(myTiles.tile4)) {
        Rolly2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 . . . . 1 . . . . . 
            . . . . 1 1 1 . . . 1 1 . . . . 
            . . . 1 1 1 1 . . 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 9 1 1 1 9 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 c c c 1 b 1 c c 1 1 . . . 
            . 1 c 1 1 c b 1 b 1 1 c c . . . 
            . 1 1 1 c 1 1 1 1 c 1 1 1 1 . . 
            . 1 1 c 1 1 1 1 1 1 c c 1 1 1 . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Rolly)
        animation.runImageAnimation(
        Rolly2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 . . . . 1 . . . . . 
            . . . . 1 1 1 . . . 1 1 . . . . 
            . . . 1 1 1 1 . . 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 9 1 1 1 9 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 c c c 1 b 1 c c 1 1 . . . 
            . 1 c 1 1 c b 1 b 1 1 c c . . . 
            . 1 1 1 c 1 1 1 1 c 1 1 1 1 . . 
            . 1 1 c 1 1 1 1 1 1 c c 1 1 1 . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . 1 . . . . . 1 . . . . . . 
            . . . 1 1 . . . . 1 1 . . . . . 
            . . . 1 1 1 . . . 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 9 1 1 1 9 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 c c c 1 b 1 c c 1 1 . . . 
            . 1 c 1 1 c b 1 b 1 1 c c . . . 
            . 1 1 1 c 1 1 1 1 c 1 1 1 1 . . 
            . 1 1 c 1 1 1 1 1 1 c c 1 1 1 . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 . . . . 1 . . . . . 
            . . . . 1 1 1 . . . 1 1 . . . . 
            . . . 1 1 1 1 . . 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 9 1 1 1 9 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 c c 1 1 1 1 1 1 1 1 1 . . 
            . . c 1 1 c 1 b 1 1 1 1 1 . . . 
            . 1 1 1 c c b 1 b c c 1 1 . . . 
            . 1 c c 1 1 1 1 c 1 1 c c 1 . . 
            . 1 1 1 1 1 1 1 1 c 1 1 1 1 1 . 
            . . . . . 1 1 1 1 1 c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . 1 . . . . . 1 . . . . . . 
            . . . 1 1 . . . . 1 1 . . . . . 
            . . . 1 1 1 . . . 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 9 1 1 1 9 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 c c c 1 b 1 c c 1 1 . . . 
            . 1 c 1 1 c b 1 b 1 1 c c . . . 
            . 1 1 1 c 1 1 1 1 c 1 1 1 1 . . 
            . 1 1 c 1 1 1 1 1 1 c c 1 1 1 . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 . . . . 1 . . . . . 
            . . . . 1 1 1 . . . 1 1 . . . . 
            . . . 1 1 1 1 . . 1 1 1 . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 1 9 1 1 1 9 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 c c c 1 b 1 c c 1 1 . . . 
            . 1 c 1 1 c b 1 b 1 1 c c . . . 
            . 1 1 1 c 1 1 1 1 c 1 1 1 1 . . 
            . 1 1 c 1 1 1 1 1 1 c c 1 1 1 . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(Rolly2, value5)
        tiles.setTileAt(value5, myTiles.transparency16)
    }
    for (let value6 of tiles.getTilesByType(myTiles.tile5)) {
        Schoen2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b b . . . . 
            . . . . . . . . . b . b . . . . 
            . . . c c c e e e b b . . . . . 
            . . . e e e e e e . b b . . . . 
            . . . e e e e e c b . . b . . . 
            . . . e e e f c . . b b . . . . 
            . . . e e e e c . . . . . . . . 
            . . . e e e f e e e e e e . . . 
            . . . e e e e e e e e e e e . . 
            . . . e e e e e e e e e e e . . 
            . . . e e e e e e e e e e e . . 
            . . . . c c e e e c c c c . . . 
            `, SpriteKind.Schoen)
        tiles.placeOnTile(Schoen2, value6)
        tiles.setTileAt(value6, myTiles.transparency16)
    }
    for (let value7 of tiles.getTilesByType(myTiles.tile13)) {
        tvbakske2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . . c c b b c c . . 
            . . . . . . . c c b b b b c c . 
            . . . . . . c b b d b 7 b c c . 
            . . . . . c c b d b d b c c . . 
            . . . c c c b d b d b c c . . . 
            . . . c b b d b d b c c . . . . 
            . . c c b b b d b b c . . . . . 
            . . c c b b b b b c c . . . . . 
            . . . c c c b b c c . . . . . . 
            . . . . . c c c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.tvbakske)
        tiles.placeOnTile(tvbakske2, value7)
        tiles.setTileAt(value7, myTiles.transparency16)
        animation.runMovementAnimation(
        tvbakske2,
        "c 0 -50 0 50 0 0",
        2000,
        true
        )
        tvbakske2.startEffect(effects.starField)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Schoen, function (sprite, otherSprite) {
    otherSprite.destroy()
    Robbe = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Robbe,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . 4 4 d d 4 d . . . . . 
        . . . . . d e d d e d . . . . . 
        . . . . . d d d d d d . d . . . 
        . . . . . d d b d d d . 6 . . . 
        . . . . . . d d d d . . 6 . . . 
        . . . . . . . . 6 6 . . 6 . . . 
        . . . . . . 6 6 6 6 6 6 . . . . 
        . . . . . 6 . 6 6 6 6 . . . . . 
        . . . . . 6 . 6 6 6 6 . . . . . 
        . . . . . 6 . 6 6 6 6 . . . . . 
        . . . . . d . e e e e . . . . . 
        . . . . . . . e . e e . . . . . 
        . . . . . . e e . . e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 4 4 . . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . 4 4 d d 4 d . . . . . 
        . . . . . d e d d e d . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d . d b b d . . . . . . 
        . . . . 6 . d d d d . . . . . . 
        . . . . 6 . . . 6 6 . . . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . . . . 6 6 6 6 . 6 . . . 
        . . . . . . . 6 6 6 6 . 6 . . . 
        . . . . . . . 6 6 6 6 . 6 . . . 
        . . . . . . . e e e e . d . . . 
        . . . . . . . e . e e . . . . . 
        . . . . . . e e . . e . . . . . 
        `],
    200,
    true
    )
    Robbe.setPosition(Relly.x - 80, Relly.y - 80)
    Robbe.follow(Relly)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tvbakske, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rolly, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Relly.y < otherSprite.y) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
let Robbe: Sprite = null
let tvbakske2: Sprite = null
let Schoen2: Sprite = null
let Rolly2: Sprite = null
let Relly: Sprite = null
let current_level = 0
scene.setBackgroundColor(12)
scene.setBackgroundImage(img`
    777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddddddddddddddddddddddddddddddddddddddddfddddddd
    7dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffddddd
    777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffddddd
    7dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff77ff777f7fff7ff7f7f7f7f7f7ff77ff777f7ff7f7ffddddd
    777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff7ffff7fff7fff7ff7f77ff77ff7f7ffff7fff77f7f7ffddddd
    777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff7f77f777f7fff7ff7f7f7f7f7f7f7f77f777f7f77f7ffddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff7ff7f7fff7fff7ff7f7f7f7f7f7f7ff7f7fff7ff7ffffddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff77ff777f777ff77ff7f7f7f7f7ff77ff777f7ff7f7ffddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffddddd
    ddddddddddddddddddddddddddddddddd77ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddd777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddd7777dd777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddd777bccc77cc777bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddd7dbbccc7cccc77bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddd7ddbbbbb7bbbb77bdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddd7ddddbbb7bbbbb77dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddd7ddddbcc7ccccb77dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddd7ddddbcc7ccccb77dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddd77dddbcc77cccb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddd77dddbcc77cccb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddd7dddbccc7cccb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddeeeee7eeeeeee7eeee7eeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddeeeee7eeeeee77eee77eeebbbbbbbbbbbbbbbbbbbeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddeeeee7eeeeee77eee7eeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddd4444444444ddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddeebbb7bbbbbb7bbbb7bbeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddd444444444444444444dddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddcdeeeee7eeeee77eee77eeeeeeeeeeeeeeeeeeeeeeeeeccddddddddddddddddddddddddddddddddd4444444444444444444ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddcddddddc7cccdd77ddd77ddddddddddddddddcccccdddddcddddddddddddddddddddddddddddddddd4444bbbbbbbbbb44444ddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddccddddddd7ddddd77ddd77ddddddddddddddddddddddddddccddddddddddddddddddddddddddddddd4444bbbbbbbbbbbbb444ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddcc55dddddd77dddd7dddd77dddddddddddddddddddddddddddcddddddddddddddddddddddddddddddd444bbbbbbbbbbbbbb444ddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddc5555dddddd77dddd7dddd77dddddddddddddddddddddddddd22cdddddddddddddddddddddddddddddd444bbbbbbbbbbbbbb444ddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddcc55555dddddd7ddddd7dddd777ddddddddddddddddddddddddd22cdddddddddddddddddddddddddddddd444bbbcccccccbbbb444ddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddc555555dddd777ddddd7dddd777dddddddddddddddddddddddd222cdddddddddddddddddddddddddddddd444bbcccccccccbbb444ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddc5555555dddd77dddddd7dddd777dddddddddddddddddddddddd2222cddddddddddddddddddddddddddddd444bbcc33333cccbb444ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddc555555555ddd77ddddddddddddd77dddddddddddddddddddddddd2222cddddddddddddddddddddddddddddd444bccc363363ccbb444ddddddddddddddddddddddddddddddddddddddd
    dddddddddddccdd55555555ddd7dddddddddddddd77dddddddddddddddddddddddd22222cdddddddddddddddddddddddddddd444bcc3333333ccbb444ddddddddddddddddddddddddddddddddddddddd
    dddddddddcc2ddd55555555ddd7dddddddddddddd7dddddddddddddddddddddddd2222222cddddddddddddddddddddddddddd44bbbc3333333ccbb444ddddddddddddddddddddddddddddddddddddddd
    ddddddddc222ddd55555555ddd7dddddddddddddd7dddddddddddddddddddddddd22222222cdddddddddddddddddddddddddd44bbbc3332233ccbb444ddddddddddddddddddddddddddddddddddddddd
    ddddddcc2222dddd5555555ddd7ddddddddddddd77dddddddddddddddddddddddd2222222dcdddddddddddddddddddddddddd44bbbcc333333ccbb444ddddddddddddddddddddddddddddddddddddddd
    dddddc2222222ddd5555555ddd77ddddddddddd77ddddddddddddddddddddddddd2222222ddcddddddddddddddddddddddddd44bbbccd333ddcbbb444ddddddddddddddddddddddddddddddddddddddd
    ccccc22222222dddd555555ddd77ddddddddddd7ddddddddddddddddddddddddd2222222ddddcdddddddddddddddddddddddd44bbbdcd333ddbbbb444ddddddddddddddddddddddddddddddddddddddd
    ddd222222222dddddd5555ddddd7dddddddddd77ddddddddddddddddddddddddd2222222dddddcddddddddddddddddddddddd44bbbdcdddddddbbb444ddddddddddddddddddddddddddddddddddddddd
    ddd222222222ddddddddddddddd77ddddddddd77ddddddddddddddddddddddddd222222ddddddcddddddddddddddddddddddd44bbbdddddddddbbb444ddddddddddddddddddddddddddddddddddddddd
    dddd22222222ddddddddddddddd77ddddddddd7dddddddddddddddddddddddddd222222ddddd5cccddddddddddddddddddddd4444bddbdddbddb44444ddddddddddddddddddddddddddddddddddddddd
    ddddd2222222ddddddddddddddd77ddddddddd7ddddddddddddddddddddddddddd22222ddddd5555cdddddddddddddddddddd44444444444444444444ddddddddddddddddddddddddddddddddddddddd
    dddddd222222ddddddddddddddd77ddddddddd77dddddddddddddddddddddddddd222ddddddd55555cddddddddddddddddddd44444444444444444444ddddddddddddddddddddddddddddddddddddddd
    ddddddd2222dddddddddddddddd77dddddddddd7ddddddddddddddddddddddddddd22ddddddd555555ccddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddccc
    ddddddddd22dddddddddddddddd77dddddddddd7dddddddddddddddddddddddddddddddddddd55555555cceebbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbeeeddddddddddddccc555
    ddddddddddddddddddddddddddd77dddddddddd7dddddddddddddddddddddddddddddddddddd55555555ddeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeccddddddcccccdd555
    ddddddddddddddddddddddddddd77dddddddddd7dddddddddddddddddddddddddddddddddddd55555555ddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedccccccc22ddddd555
    ddddddddddddddddddddddddddd77dddddddddd77ddddddddddddddddddddddddddddddddddd5555555dddddddcccccddddddddddddddddddddddddddddddddddddddcccccdddddddd222222dddddd55
    ddddddddddddddddddddddddddd77ddddddddddd77dddddddddddddddddddddddddddddddddd5555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222dddddd55
    ddddddddddddddddddddddddddd7dddddddddddd77dddddddddddddddddddddddddddddddddd5555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222dddddddd5
    ddddddddddddddddddddddddddddddddddddddddd7dddddddddddddddddddddddddddddddddd555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222dddddddd5
    dddddddddddddddddddddddddddddddddddddddd77dddddddddddddddddddddddddddddddddd55555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222dddddddd5
    dddddddddddddddddddddddddddddddddddddddd77dddddddddddddddddddddddddddddddddd5555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222dddddddddd
    dddddddddddddddddddddddddddddddddddddddd77dddddddddddddddddddddddddddddddddd5555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222dddddddddd
    dddddddddddddddddddddddddddddddddddddddd77dddddddddddddddddddddddddddddddddd5555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222dddddddddd
    ddddddddddddddddddddddddddddddddddddddd777dddddddddddddddddddddddddddddddddd555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222ddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222ddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22dddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
current_level = 0
Relly = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f . . . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . f . . . . . . . . . . . . 
    . . . f . . . . . . . . f f . . 
    . . . f . f f f f . f f f f . . 
    . . f f f f f f f f f f f f f . 
    . . f f f f f f f f f f f 6 f . 
    . . f f f f f f f f f f f f f . 
    . . . f f f f f f f f f f f f . 
    . . . f f f f f f f f f f f . . 
    . . . . . f . . . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Relly, 100, 0)
Relly.setFlag(SpriteFlag.BounceOnWall, false)
StartLevel()
game.onUpdate(function () {
    Relly.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f f . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        . . . f . . . . . . . . f f . . 
        . . . f . f f f f . f f f f . . 
        . . f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f 6 f . 
        . . f f f f f f f f f f f f f . 
        . . . f f f f f f f f f f f f . 
        . . . f f f f f f f f f f f . . 
        . . . . . f . . . . f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (Relly.vy < 0) {
        Relly.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . 
            . . . . . f f f f . f f f f . . 
            . . . f f f f f f f f f f f f . 
            . . . f f f f f f f f f f 6 f . 
            . . f f f f f f f f f f f f f . 
            . f . f f f f f f f f . f f . . 
            . f . f f f f f f f f . . . . . 
            . f . . . f . . . . f . . . . . 
            f . . . . . f . . . . f . . . . 
            . . . . . . f . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Relly.vy > 0) {
        Relly.setImage(img`
            . . f . . . . . . . . . . f . . 
            . . f . . . . . . . . . f f . . 
            . f . . . f f f f . f f f f . . 
            . f . f f f f f f f f f f 6 f . 
            . f . f f f f f f f f f f f f . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f . . . . f f . . . . 
            . . . . . . f . . . . f . . . . 
            . . . . . . f . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Relly.x % 2 == 0) {
        Relly.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . f . . . . . . . . . . . . . 
            . . f . . . . . . . . . . . . . 
            . f . . . . . . . . . . . . . . 
            . f . . . . . . . . . . . . . . 
            . . f . . . . . . . . . f f . . 
            . . f . f f f f . . f f f . . . 
            . . f f f f f f f f f f f f f . 
            . . f f f f f f f f f f f 6 f . 
            . . f f f f f f f f f f f f f . 
            . . . f f f f f f f f f f f f . 
            . . . f f f f f f f f f f f . . 
            . . . . f f . . . . f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
    if ((Relly.isHittingTile(CollisionDirection.Left) || Relly.isHittingTile(CollisionDirection.Right)) && Relly.vy >= 0) {
        Relly.vy = 0
        Relly.ay = 0
        Relly.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f f f f 6 f . . . 
            . . . . . . f f f f f f f . . . 
            . . . . . f f f f f f f f . f f 
            . . . . . f f f f f f f . f f . 
            . . . . . f f f f f f f f f . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f f f . . f f f 
            . . . . . f f f f f f f f f . . 
            . f . . . f f f f f f . . . . . 
            . f . . . . f f f f . . . . . . 
            . f f . . f . . . . . . . . . . 
            . . f f f . . . . . . . . . . . 
            `)
    } else {
        Relly.ay = 200
    }
    if (Relly.vx < 0 || Relly.isHittingTile(CollisionDirection.Left)) {
        Relly.image.flipX()
        Relly.setImage(Relly.image)
    }
})
