function ABR123G () {
    A = 0
    B = 0
    basic.showString("Ready !")
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.showString("GO !")
    basic.pause(10000)
}
function index () {
    for (let index2 = 0; index2 <= 1e+56; index2++) {
        if (A > B) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.clearScreen()
            basic.showString("win !")
        } else if (A < B) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.clearScreen()
            basic.showString("win !")
        } else if (A == B) {
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.clearScreen()
            basic.showString("Draw !")
        } else {
            basic.showString("#Be-Careful!ERROR(404)")
        }
    }
}
let B = 0
let A = 0
ABR123G()
index()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        A += 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        B += 1
    }
})
