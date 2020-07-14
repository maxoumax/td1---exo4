input.onButtonPressed(Button.A, function () {
    led.unplot(led2, 0)
    led.unplot(led2, 1)
    led.unplot(led2, 2)
    led.unplot(led2, 3)
    led.unplot(led2, 4)
    led2 += -1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(led2, 0)
    led.unplot(led2, 1)
    led.unplot(led2, 2)
    led.unplot(led2, 3)
    led.unplot(led2, 4)
    led2 += 1
})
let led2 = 0
led2 = 0
basic.forever(function () {
    if (led2 == 0) {
        led.plot(led2, 0)
    } else if (led2 == 0) {
        led.plot(led2, 1)
    } else if (led2 == 0) {
        led.plot(led2, 2)
    } else if (led2 == 0) {
        led.plot(led2, 3)
    } else {
        led.plot(led2, 4)
    }
})
