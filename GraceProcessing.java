import java.lang.reflect.Method;
import java.util.*;

import grace.lang.*;

import processing.core.PApplet;

/**
 * A class for interoperability with the Processing graphics library in Grace.
 * 
 * @author Timothy Jones
 */
public final class GraceProcessing extends GraceObject {

  private static GraceProcessing $module;

  public static GraceProcessing $module() {
    return $module == null ? $module = new GraceProcessing() : $module;
  }

  private static float fl(GraceObject num) {
    return (float) ((GraceNumber) num).value;
  }
  
  private static int i(GraceObject num) {
    return (int) ((GraceNumber) num).value;
  }
  
  private static int col(GraceObject col) {
    return ((Color) col).color;
  }

  private static Applet applet = new Applet();

  private boolean started = false;

  public GraceObject start() {
    if (!started) {
      String[] args = { "GraceProcessing$Applet" };
      PApplet.runSketch(args, applet);
      started = true;
    }

    return $void;
  }

  public GraceObject size(GraceObject width, GraceObject height) {
    applet.size(i(width), i(height));
    return $void;
  }

  public GraceObject width() {
    return $num(applet.width);
  }

  public GraceObject height() {
    return $num(applet.height);
  }

  public GraceObject loop() {
    applet.loop();
    return $void;
  }

  public GraceObject noLoop() {
    applet.noLoop();
    return $void;
  }

  public GraceObject exit() {
    applet.exit();
    return $void;
  }

  private static final List<GraceObject> onSetup =
      new LinkedList<GraceObject>();

  public GraceObject onSetup(GraceObject block) {
    onSetup.add(block);
    return $void;
  }

  private static final List<GraceObject> onDraw = new LinkedList<GraceObject>();

  public GraceObject onDraw(GraceObject block) {
    onDraw.add(block);
    return $void;
  }

  private static final Mouse mouse = new Mouse();

  public GraceObject mouse() {
    return mouse;
  }

  private static final Keyboard keyboard = new Keyboard();

  public GraceObject keyboard() {
    return keyboard;
  }

  public GraceObject color(GraceObject value) {
    return new Color(i(value));
  }

  public GraceObject color$withAlpha(GraceObject value, GraceObject alpha) {
    return new Color(applet.color(i(value), i(alpha)));
  }

  public GraceObject r$g$b(GraceObject r, GraceObject g, GraceObject b) {
    return new Color(applet.color(i(r), i(g), i(b)));
  }

  public GraceObject r$g$b$withAlpha(GraceObject r, GraceObject g, GraceObject b,
      GraceObject alpha) {
    return new Color(applet.color(i(r), i(g), i(b), i(alpha)));
  }

  public GraceObject background(GraceObject color) {
    applet.background(col(color));
    return $void;
  }
  
  public GraceObject fill(GraceObject color) {
    applet.fill(col(color));
    return $void;
  }
  
  public GraceObject stroke(GraceObject color) {
    applet.stroke(col(color));
    return $void;
  }
  
  public GraceObject noFill() {
    applet.noFill();
    return $void;
  }
  
  public GraceObject noStroke() {
    applet.noStroke();
    return $void;
  }
  
  public GraceObject strokeWeight(GraceObject weight) {
    applet.strokeWeight(fl(weight));
    return $void;
  }

  public GraceObject arc(GraceObject x, GraceObject y, GraceObject width,
      GraceObject height, GraceObject start, GraceObject end) {
    applet.arc(fl(x), fl(y), fl(width), fl(height), fl(start), fl(end));
    return $void;
  }

  public GraceObject ellipse(GraceObject x, GraceObject y, GraceObject width,
      GraceObject height) {
    applet.ellipse(fl(x), fl(y), fl(width), fl(height));
    return $void;
  }

  public GraceObject line(GraceObject x1, GraceObject y1, GraceObject x2,
      GraceObject y2) {
    applet.line(fl(x1), fl(y1), fl(x2), fl(y2));
    return $void;
  }

  public GraceObject point(GraceObject x, GraceObject y) {
    applet.point(fl(x), fl(y));
    return $void;
  }

  public GraceObject quad(GraceObject x1, GraceObject y1, GraceObject x2,
      GraceObject y2, GraceObject x3, GraceObject y3, GraceObject x4,
      GraceObject y4) {
    applet.quad(fl(x1), fl(y1), fl(x2), fl(y2), fl(x3), fl(y3), fl(x4),
        fl(y4));
    return $void;
  }

  public GraceObject rect(GraceObject x, GraceObject y, GraceObject width,
      GraceObject height) {
    applet.rect(fl(x), fl(y), fl(width), fl(height));
    return $void;
  }

  public GraceObject triangle(GraceObject x1, GraceObject y1, GraceObject x2,
      GraceObject y2, GraceObject x3, GraceObject y3) {
    applet.triangle(fl(x1), fl(y1), fl(x2), fl(y2), fl(x3), fl(y3));
    return $void;
  }

  /**
   * The PApplet that will route calls and events to and from the Grace
   * object.
   */
  @SuppressWarnings("serial")
  public static final class Applet extends PApplet {
    
    public void setup() {
      smooth();
      for (GraceObject block : onSetup) {
        block.invoke("apply");
      }
    }

    public void draw() {
      for (GraceObject block : onDraw) {
        block.invoke("apply");
      }
    }

    public void mousePressed() {
      MouseButton button = getMouseButton();

      button.isPressed = true;
      applyAll(mouse.onPress, button);
      applyAll(button.onPress, button);
    }

    public void mouseReleased() {
      MouseButton button = getMouseButton();

      button.isPressed = true;
      applyAll(mouse.onRelease, button);
      applyAll(button.onRelease, button);
    }

    public void mouseClicked() {
      MouseButton button = getMouseButton();

      applyAll(mouse.onClick, button);
      applyAll(button.onClick, button);
    }

    public void mouseMoved() {
      applyAll(mouse.onMove, $num(mouseX), $num(mouseY));
    }

    public void mouseDragged() {
      applyAll(mouse.onDrag, $num(mouseX), $num(mouseY));
    }

    public void keyPressed() {
      Key key = new Key(this.key, keyCode);

      keyboard.keys.put(keyCode, key);
      applyAll(keyboard.onPress, key);
    }

    public void keyReleased() {
      Key key = keyboard.keys.get(keyCode);

      keyboard.keys.remove(keyCode);
      applyAll(keyboard.onRelease, key);
    }

    public void keyTyped() {
      applyAll(keyboard.onType, new Key(key, keyCode));
    }

  }

  /**
   * The Grace object representing the state of the mouse.
   */
  protected static final class Mouse extends GraceObject {

    private final MouseButton left = new MouseButton();
    private final MouseButton right = new MouseButton();
    private final MouseButton center = new MouseButton();

    public GraceObject x() {
      return $num(applet.mouseX);
    }

    public GraceObject y() {
      return $num(applet.mouseY);
    }

    public GraceObject left() {
      return left;
    }

    public GraceObject right() {
      return right;
    }

    public GraceObject center() {
      return center;
    }

    private final List<GraceObject> onPress = new LinkedList<GraceObject>();

    public GraceObject onPress(GraceObject block) {
      onPress.add(block);
      return $void;
    }

    private final List<GraceObject> onRelease = new LinkedList<GraceObject>();

    public GraceObject onRelease(GraceObject block) {
      onRelease.add(block);
      return $void;
    }

    private final List<GraceObject> onClick = new LinkedList<GraceObject>();

    public GraceObject onClick(GraceObject block) {
      onClick.add(block);
      return $void;
    }

    private final List<GraceObject> onMove = new LinkedList<GraceObject>();

    public GraceObject onMove(GraceObject block) {
      onMove.add(block);
      return $void;
    }

    private final List<GraceObject> onDrag = new LinkedList<GraceObject>();

    public GraceObject onDrag(GraceObject block) {
      onDrag.add(block);
      return $void;
    }

    protected Object invoke(Method method, Object[] args) throws Exception {
      return method.invoke(this, args);
    }

  }

  /**
   * The Grace objects representing the three mouse buttons.
   */
  protected static final class MouseButton extends GraceObject {

    private boolean isPressed;

    public GraceObject isPressed() {
      return isPressed ? $true : $false;
    }

    private final List<GraceObject> onPress = new LinkedList<GraceObject>();

    public GraceObject onPress(GraceObject block) {
      onPress.add(block);
      return $void;
    }

    private final List<GraceObject> onRelease = new LinkedList<GraceObject>();

    public GraceObject onRelease(GraceObject block) {
      onRelease.add(block);
      return $void;
    }

    private final List<GraceObject> onClick = new LinkedList<GraceObject>();

    public GraceObject onClick(GraceObject block) {
      onClick.add(block);
      return $void;
    }

    protected Object invoke(Method method, Object[] args) throws Exception {
      return method.invoke(this, args);
    }

  }

  /**
   * The Grace object representing the state of the keyboard.
   */
  protected static final class Keyboard extends GraceObject {

    private final Map<Integer, Key> keys = new HashMap<Integer, Key>();

    public GraceObject keys() {
      return $list(keys.values().toArray(new GraceObject[keys.size()]));
    }

    private final List<GraceObject> onPress = new LinkedList<GraceObject>();

    public GraceObject onPress(GraceObject block) {
      onPress.add(block);
      return $void;
    }

    private final List<GraceObject> onRelease = new LinkedList<GraceObject>();

    public GraceObject onRelease(GraceObject block) {
      onRelease.add(block);
      return $void;
    }

    private final List<GraceObject> onType = new LinkedList<GraceObject>();

    public GraceObject onType(GraceObject block) {
      onType.add(block);
      return $void;
    }

    protected Object invoke(Method method, Object[] args) throws Exception {
      return method.invoke(this, args);
    }

  }

  /**
   * The Grace objects representing keys for the keyboard object.
   * 
   * Extends a native Grace string, so it can be used as a single character
   * string, which is the character of the key pressed. Simply adds the code
   * method which returns the key code of the character.
   */
  protected static final class Key extends GraceObject {

    private int code;

    public Key(char c, int code) {
      super($str(Character.toString(c)), true);

      this.code = code;
    }

    public GraceObject code() {
      return $num(code);
    }
    
    public GraceObject asString() {
      return $super.asString();
    }

    protected Object invoke(Method method, Object[] args) throws Exception {
      return method.invoke(this, args);
    }

  }

  /**
   * The Grace objects representing colors.
   */
  protected static final class Color extends GraceObject {

    private int color;

    public Color(int color) {
      this.color = color;
    }
    
    public GraceObject red() {
      return $num(applet.red(color));
    }
    
    public GraceObject green() {
      return $num(applet.green(color));
    }
    
    public GraceObject blue() {
      return $num(applet.blue(color));
    }
    
    public GraceObject hue() {
      return $num(applet.hue(color));
    }
    
    public GraceObject saturation() {
      return $num(applet.saturation(color));
    }
    
    public GraceObject brightness() {
      return $num(applet.brightness(color));
    }
    
    public GraceObject alpha() {
      return $num(applet.alpha(color));
    }

    public GraceObject hex() {
      return $str(PApplet.hex(color));
    }

    public GraceObject asString() {
      return $str("#" + PApplet.hex(color));
    }

    protected Object invoke(Method method, Object[] args) throws Exception {
      return method.invoke(this, args);
    }

  }

  private static void applyAll(List<GraceObject> blocks, GraceObject... args) {
    for (GraceObject block : blocks) {
      block.invoke("apply", args);
    }
  }

  private static MouseButton getMouseButton() {
    switch (applet.mouseButton) {
    case PApplet.LEFT:
      return mouse.left;
    case PApplet.RIGHT:
      return mouse.right;
    case PApplet.CENTER:
      return mouse.center;
    }

    throw new RuntimeException("Grace-Processing internal exception: "
        + "unknown mouse button value.");
  }

}
