function isosceles (leg: number) {
    leg2 = leg ** 2
    leg__leg = leg2 + leg2
    square_root = Math.sqrt(leg ** 2 + leg ** 2)
    finch.setMove(MoveDir.Forward, leg, 100)
    finch.setTurn(RLDir.Right, 90, 100)
    finch.setMove(MoveDir.Forward, leg, 100)
    finch.setTurn(RLDir.Right, 135, 100)
    finch.setMove(MoveDir.Forward, square_root, 100)
    finch.setTurn(RLDir.Right, 135, 100)
    basic.showIcon(IconNames.Yes)
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    isosceles(5)
})
let square_root = 0
let leg__leg = 0
let leg2 = 0
finch.startFinch()
