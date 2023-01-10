function show_join_screen () {
    color.startFadeFromCurrent(color.Poke, 500)
    player_1_joined = false
    player_2_joined = false
    while (!(player_1_joined && player_2_joined)) {
        scene.backgroundImage().fill(11)
        scene.backgroundImage().printCenter("lobby", 2, 1)
        if (controller.player1.isPressed(ControllerButton.A)) {
            player_1_joined = true
        }
        if (controller.player2.isPressed(ControllerButton.A)) {
            player_2_joined = true
        }
        if (player_1_joined) {
            scene.backgroundImage().printCenter("player 1 joined!", 20, 15)
        } else {
            scene.backgroundImage().printCenter("player 1: press A", 20, 15)
        }
        if (player_2_joined) {
            scene.backgroundImage().printCenter("player 2 joined!", 40, 15)
        } else {
            scene.backgroundImage().printCenter("player 2: press A", 40, 15)
        }
        pause(10)
    }
    scene.backgroundImage().printCenter("ok, let's go!", 90, 1)
    pause(1000)
    color.FadeToBlack.startScreenEffect(500)
    pause(500)
}
function init () {
    color.setPalette(
    color.Poke
    )
}
function run_game () {
    color.startFadeFromCurrent(color.Poke, 500)
    scene.backgroundImage().fillRect(0, 0, scene.screenWidth() / 2, scene.screenHeight(), 5)
    scene.backgroundImage().fillRect(scene.screenWidth() / 2, 0, scene.screenWidth() / 2, scene.screenHeight(), 13)
    mySprite = sprites.create(img`
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
        `, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    assets.animation`light_player`,
    200,
    false
    )
    mySprite.setPosition(125, 91)
    controller.moveSprite(mySprite)
}
function splash () {
    splash_done = false
    i = 0
    j = 0
    k = 0
    l = 0
    timer.background(function () {
        while (!(splash_done)) {
            scene.backgroundImage().fill(15)
            scene.backgroundImage().fillCircle(scene.screenWidth() / 2, scene.screenHeight() / 2, i, 12)
            scene.backgroundImage().fillCircle(scene.screenWidth() / 2, scene.screenHeight() / 2, j, 11)
            scene.backgroundImage().fillCircle(scene.screenWidth() / 2, scene.screenHeight() / 2, k, 5)
            if (l < 43) {
                scene.backgroundImage().printCenter("day and night", scene.screenHeight() - l, 1)
            } else {
                scene.backgroundImage().printCenter("day and night", scene.screenHeight() - l, 15)
            }
            pause(5)
        }
    })
    timer.after(0, function () {
        for (let index = 0; index < scene.screenHeight() / 2; index++) {
            pause(25)
            l += 1
        }
    })
    timer.after(0, function () {
        i = 0
        for (let index = 0; index < scene.screenWidth() / 1.5; index++) {
            pause(5)
            i += 1
        }
    })
    timer.after(500, function () {
        j = 0
        for (let index = 0; index < scene.screenWidth() / 2; index++) {
            pause(10)
            j += 1
        }
    })
    timer.after(1000, function () {
        k = 0
        for (let index = 0; index < scene.screenWidth() / 3; index++) {
            pause(13)
            k += 1
        }
        pause(1500)
        color.FadeToBlack.startScreenEffect(500)
        pause(500)
        splash_done = true
    })
    while (!(splash_done)) {
        pause(100)
    }
}
let l = 0
let k = 0
let j = 0
let i = 0
let splash_done = false
let mySprite: Sprite = null
let player_2_joined = false
let player_1_joined = false
init()
splash()
show_join_screen()
run_game()
