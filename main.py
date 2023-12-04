def isosceles():
    finch.set_move(MoveDir.FORWARD, 10, 100)
    finch.set_turn(RLDir.RIGHT, 90, 100)
    finch.set_move(MoveDir.FORWARD, 10, 100)
    finch.set_turn(RLDir.RIGHT, 135, 100)
    finch.set_move(MoveDir.FORWARD, 14.142, 500)
    finch.set_turn(RLDir.RIGHT, 135, 500)

def on_logo_pressed():
    isosceles()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

finch.start_finch()