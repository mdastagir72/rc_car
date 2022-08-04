radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kitronik_servo_lite.forward()
    } else if (receivedNumber == 2) {
        kitronik_servo_lite.backward()
    } else if (receivedNumber == 3) {
        kitronik_servo_lite.turnRight(22.5)
    } else if (receivedNumber == 4) {
        kitronik_servo_lite.turnLeft(22.5)
    } else {
        kitronik_servo_lite.stop()
    }
})
radio.setGroup(100)
basic.forever(function () {
	
})
