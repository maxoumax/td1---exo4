input.onButtonPressed(Button.A, function () {
    led.unplot(led2, 0)
    led2 += -1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(led2, 0)
    led2 += 1
    if (led2 < 0) {
        led2 = 0
    }
})
let led2 = 0
led2 = 0
basic.forever(function () {
    led.plot(Math.constrain(led2, 0, 4), 0)
})
