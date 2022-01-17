input.onPinPressed(TouchPin.P0, function () {
    Τιμή += 1
    basic.showNumber(Τιμή)
})
input.onButtonPressed(Button.A, function () {
    while (Τιμή > 10) {
        Τιμή += 1
        basic.showNumber(Τιμή)
    }
})
input.onButtonPressed(Button.B, function () {
    while (Τιμή < 10) {
        Τιμή += 1
        basic.showNumber(Τιμή)
    }
})
let Τιμή = 0
if (true) {
    basic.showNumber(Τιμή)
}
