function isosceles () {
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setTurn(RLDir.Right, 90, 50)
    finch.setMove(MoveDir.Forward, 10, 50)
    finch.setTurn(RLDir.Right, 45, 50)
    finch.setMove(MoveDir.Forward, 14.142, 50)
    finch.setTurn(RLDir.Right, 45, 50)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    isosceles()
})
finch.startFinch()
