input.onButtonPressed(Button.A, function () {
    led.unplot(led2, ligne)
    led2 += -1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(led2, ligne)
    if (led2 == 5) {
        ligne += 1
    }
    led2 += 1
})
let ligne = 0
let led2 = 0
led2 = 0
ligne = 0
basic.forever(function () {
    led.plot(led2, ligne)
})
