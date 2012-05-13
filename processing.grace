import GraceProcessing

method applet {
    GraceProcessing
}

type Applet = {

    // Starts the applet.
    start -> Void

    // Calls the given block once, when the applet is initialized.
    onSetup(block : Block) -> Void

    // Calls the given block directly after setup() and continuously executes
    // the block until the program is stopped or noLoop() is called.
    onDraw(block : Block) -> Void

    // Sets the size of the applet window to the given values.
    size(width : Number, height : Number) -> Void

    width -> Number
    height -> Number

    // Starts the draw loop. On by default.
    loop -> Void

    // Stops the draw loop.
    noLoop -> Void

    // Quits/stops/exits the program.
    exit -> Void

    // The applet mouse.
    mouse -> Mouse

    // The applet keyboard.
    keyboard -> Keyboard

    // Creates a color with the given value. Intended for creating black (0),
    // white (255) and the grays in between, but will work for any valid
    // Processing color. See their reference for more information.
    color(value : Number) -> Color

    // As above, but with an alpha (transparency) value.
    color(value : Number) withAlpha(alpha : Number) -> Color

    // Creates a color with the given RGB value.
    r(r : Number) g(g : Number) b(b : Number) -> Color

    // As above, but with an alpha (transparency) value.
    r(r : Number) g(g : Number) b(b : Number)
        withAlpha(alpha : Number) -> Color
    
    // Fills the entire screen with the given color.
    background(color : Color) -> Void

    // Sets the fill color to the given value.
    fill(color : Color) -> Void
    
    // Sets the stroke color to the given value.
    stroke(color : Color) -> Void
    
    // Sets the fill color to transparent.
    noFill -> Void
    
    // Sets the stroke color to transparent.
    noStroke -> Void
    
    // Sets the stroke weight to the given value.
    strokeWeight(weight : Number) -> Void

    // Draws an arc in the display window. Arcs are drawn along the outer edge
    // of an ellipse defined by the x, y, width and height parameters. The
    // start and stop parameters specify the angles at which to draw the arc.
    arc(x : Number, y : Number, width : Number, height : Number,
        start : Number, stop : Number) -> Void

    // Draws an ellipse (oval) in the display window.
    ellipse(x : Number, y : Number, width : Number, height : Number) -> Void

    // Draws a line (a direct path between two points) to the screen.
    line(x1 : Number, y1 : Number, x2 : Number, y2 : Number) -> Void

    // Draws a point, a coordinate in space at the dimension of one pixel.
    point(x : Number, y : Number) -> Void

    // A quad is a quadrilateral, a four sided polygon.
    quad(x1 : Number, y1 : Number, x2 : Number, y2 : Number,
         x3 : Number, y3 : Number, x4 : Number, y4 : Number) -> Void

    // Draws a rectangle to the screen.
    rect(x : Number, y : Number, width : Number, height : Number) -> Void

    // A triangle is a plane created by connecting three points.
    triangle(x1 : Number, y1 : Number, x2 : Number, y2 : Number,
             x3 : Number, y3 : Number) -> Void

}


type Color = {

    red -> Number
    green -> Number
    blue -> Number

    hue -> Number
    saturation -> Number
    brightness -> Number

    alpha -> Number

    hex -> String

    asString -> String

}


type MouseButton = {

    isPressed -> Boolean

    // Register a block to be run when this mouse button is clicked.
    onClick(block : Block) -> Void

    // Register a block to be run when this mouse button is pressed.
    onPress(block : Block) -> Void

    // Register a block to be run when this mouse button is pressed.
    onRelease(block : Block) -> Void

}

type Mouse = {

    x -> Number
    y -> Number

    left -> MouseButton
    right -> MouseButton
    center -> MouseButton

    // Register a block to be run on any mouse button click. The button clicked
    // will be passed to the block.
    onClick(block : Block) -> Void

    // Register a block to be run on any mouse button press. The button pressed
    // will be passed to the block.
    onPress(block : Block) -> Void

    // Register a block to be run on any mouse button release. The button
    // released will be passed to the block.
    onRelease(block : Block) -> Void

    // Register a block to be run when the mouse is dragged. The new position
    // of the mouse will be passed to the block.
    onDrag(block : Block) -> Void

    // Register a block to be run when the mouse is moved. The new position of
    // the mouse will be passed to the block.
    onMove(block : Block) -> Void

}


type Keyboard = {

    // A list of keys which are currently pressed.
    keys -> List

    // Register a block to be run when a key is pressed. The key which was
    // pressed will be passed to the block.
    onPress(block : Block) -> Void

    // Register a block to be run when a key is released. The key which was
    // released will be passed to the block.
    onRelease(block : Block) -> Void

    // Register a block to be run when a key is typed. The key which was typed
    // will be passed to the block.
    onType(block : Block) -> Void

}

type Key = {

    // The key code of the character of this key.
    code -> Number

} // & String
