import processing

def applet = processing.applet

def bounds = 500
def animations = []

var alpha := applet.r(255) g(255) b(0) withAlpha(64)

applet.onSetup {
    applet.size(bounds, bounds)
    applet.background(applet.color(255))
    applet.fill(applet.color(255) withAlpha(8))

    def red = applet.r(255) g(0) b(0)
    animations.push(BounceAnimation.withSpeed(10) onDraw { i ->
        applet.stroke(red)
        applet.line(0, i, bounds, i)
    })

    def green = applet.r(0) g(255) b(0)
    animations.push(BounceAnimation.withSpeed(3) onDraw { i ->
        applet.stroke(green)
        applet.line(i, 0, i, bounds)
    })

    def blue = applet.r(0) g(0) b(255)
    animations.push(BounceAnimation.withSpeed(6) onDraw { i ->
        applet.stroke(blue)
        applet.line(0, i * 2, bounds, (i * 2) - bounds)
    })

    animations.push(BounceAnimation.withSpeed(10) onDraw { i ->
        applet.stroke(alpha)
        applet.line(0, i * 2, bounds, bounds - (i * 2))
    })
}

applet.onDraw {
    applet.noStroke
    applet.rect(0, 0, bounds, bounds)
    
    for(animations) do { animation ->
        animation.step
        animation.draw
    }
}

var yellow := true

applet.mouse.left.onClick {
    if(yellow) then {
        alpha := applet.r(255) g(0) b(255) withAlpha(64)
    } else {
        alpha := applet.r(255) g(255) b(0) withAlpha(64)
    }

    yellow := yellow.not
}

applet.keyboard.onType { key ->
    print(key)
}

class BounceAnimation.withSpeed(speed : Number) onDraw(block : Block) {

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
        applet.strokeWeight(speed * 2)
        block.apply(i)
    }

}

applet.start
