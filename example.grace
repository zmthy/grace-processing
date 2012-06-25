def bounds = 500
def animations = []

class bounce.withSpeed(speed : Number) onDraw(block : Block) {

    var dir := true
    var i := 0

    method step {
        i := i + if(dir) then { speed } else { -speed }
        if(i >= bounds) then {
            dir := false
        } elseif(i <= 0) then {
            dir := true
        }
    }

    method draw {
        processing.strokeWeight(speed * 2)
        block.apply(i)
    }

}

var alpha := processing.color(255, 255, 0, 64)

processing.size(bounds, bounds)
processing.background(processing.color(255))
processing.fill(processing.color(255, 8))

def red = processing.color(255, 0, 0)
animations.push(bounce.withSpeed(10) onDraw { i ->
    processing.stroke(red)
    processing.line(0, i, bounds, i)
})

def green = processing.color(0, 255, 0)
animations.push(bounce.withSpeed(3) onDraw { i ->
    processing.stroke(green)
    processing.line(i, 0, i, bounds)
})

def blue = processing.color(0, 0, 255)
animations.push(bounce.withSpeed(6) onDraw { i ->
    processing.stroke(blue)
    processing.line(0, i * 2, bounds, (i * 2) - bounds)
})

animations.push(bounce.withSpeed(10) onDraw { i ->
    processing.stroke(alpha)
    processing.line(0, i * 2, bounds, bounds - (i * 2))
})

processing.onDraw {
    processing.noStroke
    processing.rect(0, 0, bounds, bounds)
    
    for(animations) do { animation ->
        animation.step
        animation.draw
    }
}

var yellow := true

processing.onMouseClicked {
    if(yellow) then {
        alpha := processing.color(255, 0, 255, 64)
    } else {
        alpha := processing.color(255, 255, 0, 64)
    }

    yellow := yellow.not
}

processing.onKeyPressed {
    print(processing.key)
}
