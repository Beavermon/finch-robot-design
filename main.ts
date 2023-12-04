function isosceles () {
    finch.setMove(MoveDir.Forward, 10, 100)
    finch.setTurn(RLDir.Right, 90, 100)
    finch.setMove(MoveDir.Forward, 10, 100)
    finch.setTurn(RLDir.Right, 135, 100)
    finch.setMove(MoveDir.Forward, 14.142, 500)
    finch.setTurn(RLDir.Right, 135, 500)
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    isosceles()
})
finch.startFinch()
