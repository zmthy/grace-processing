import grace.lang.Bool;
import grace.lang.Nothing;
import grace.lang.Num;
import grace.lang.Prelude;
import grace.lang.Str;
import grace.lang.Obj;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import processing.core.PApplet;

/**
 * A class for interoperability with the Processing graphics library in Grace.
 * 
 * @author Timothy Jones
 */
public final class GraceProcessing extends Prelude {
	
	private static GraceProcessing $module;
	
	public static GraceProcessing $module() {
		return $module == null ? $module = new GraceProcessing() : $module;
	}
	
	private static int toColor(Obj col) {
		return ((Color) col).color;
	}
	
	private static Applet applet = new Applet();
	
	private boolean started = false;
	
	public Nothing start(Obj self) {
		if (!started) {
			String[] args = { "GraceProcessing$Applet" };
			PApplet.runSketch(args, applet);
			started = true;
		}
		
		return nothing;
	}
	
	public Nothing size(Obj self, Obj width, Obj height) {
		applet.size($javaInteger(width), $javaInteger(height));
		return nothing;
	}
	
	public Num width(Obj self) {
		return $number(applet.width);
	}
	
	public Num height(Obj self) {
		return $number(applet.height);
	}
	
	public Nothing loop(Obj self) {
		applet.loop();
		return nothing;
	}
	
	public Nothing noLoop(Obj self) {
		applet.noLoop();
		return nothing;
	}
	
	public Nothing exit(Obj self) {
		applet.exit();
		return nothing;
	}
	
	private static final List<Obj> onSetup = new LinkedList<Obj>();
	
	public Nothing onSetup(Obj self, Obj block) {
		onSetup.add(block);
		return nothing;
	}
	
	private static final List<Obj> onDraw = new LinkedList<Obj>();
	
	public Nothing onDraw(Obj self, Obj block) {
		onDraw.add(block);
		return nothing;
	}
	
	private static final Mouse mouse = new Mouse();
	
	public Mouse mouse(Obj self) {
		return mouse;
	}
	
	private static final Keyboard keyboard = new Keyboard();
	
	public Keyboard keyboard(Obj self) {
		return keyboard;
	}
	
	public Color color(Obj self, Obj value) {
		return new Color($javaInteger(value));
	}
	
	public Color color$withAlpha(Obj self, Obj value, Obj alpha) {
		return new Color(applet.color($javaInteger(value), $javaInteger(alpha)));
	}
	
	public Color r$g$b(Obj self, Obj r, Obj g, Obj b) {
		return new Color(applet.color($javaInteger(r), $javaInteger(g),
		    $javaInteger(b)));
	}
	
	public Color r$g$b$withAlpha(Obj self, Obj r, Obj g, Obj b, Obj alpha) {
		return new Color(applet.color($javaInteger(r), $javaInteger(g),
		    $javaInteger(b), $javaInteger(alpha)));
	}
	
	public Nothing background(Obj self, Obj color) {
		applet.background(toColor(color));
		return nothing;
	}
	
	public Nothing fill(Obj self, Obj color) {
		applet.fill(toColor(color));
		return nothing;
	}
	
	public Nothing stroke(Obj self, Obj color) {
		applet.stroke(toColor(color));
		return nothing;
	}
	
	public Nothing noFill(Obj self) {
		applet.noFill();
		return nothing;
	}
	
	public Nothing noStroke(Obj self) {
		applet.noStroke();
		return nothing;
	}
	
	public Nothing strokeWeight(Obj self, Obj weight) {
		applet.strokeWeight($javaFloat(weight));
		return nothing;
	}
	
	public Nothing arc(Obj self, Obj x, Obj y, Obj width, Obj height,
	    Obj start, Obj end) {
		applet.arc($javaFloat(x), $javaFloat(y), $javaFloat(width),
		    $javaFloat(height), $javaFloat(start), $javaFloat(end));
		return nothing;
	}
	
	public Nothing ellipse(Obj self, Obj x, Obj y, Obj width, Obj height) {
		applet.ellipse($javaFloat(x), $javaFloat(y), $javaFloat(width),
		    $javaFloat(height));
		return nothing;
	}
	
	public Nothing line(Obj self, Obj x1, Obj y1, Obj x2, Obj y2) {
		applet.line($javaFloat(x1), $javaFloat(y1), $javaFloat(x2), $javaFloat(y2));
		return nothing;
	}
	
	public Nothing point(Obj self, Obj x, Obj y) {
		applet.point($javaFloat(x), $javaFloat(y));
		return nothing;
	}
	
	public Nothing quad(Obj self, Obj x1, Obj y1, Obj x2, Obj y2,
	    Obj x3, Obj y3, Obj x4, Obj y4) {
		applet.quad($javaFloat(x1), $javaFloat(y1), $javaFloat(x2), $javaFloat(y2),
		    $javaFloat(x3), $javaFloat(y3), $javaFloat(x4), $javaFloat(y4));
		return nothing;
	}
	
	public Nothing rect(Obj self, Obj x, Obj y, Obj width, Obj height) {
		applet.rect($javaFloat(x), $javaFloat(y), $javaFloat(width),
		    $javaFloat(height));
		return nothing;
	}
	
	public Nothing triangle(Obj self, Obj x1, Obj y1, Obj x2, Obj y2,
	    Obj x3, Obj y3) {
		applet.triangle($javaFloat(x1), $javaFloat(y1), $javaFloat(x2),
		    $javaFloat(y2), $javaFloat(x3), $javaFloat(y3));
		return nothing;
	}
	
	/**
	 * The PApplet that will route calls and events to and from the Grace object.
	 */
	@SuppressWarnings("serial")
	public static final class Applet extends PApplet {
		
		public void setup() {
			smooth();
			for (Obj block : onSetup) {
				block.invoke("apply");
			}
		}
		
		public void draw() {
			for (Obj block : onDraw) {
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
			applyAll(mouse.onMove, $number(mouseX), $number(mouseY));
		}
		
		public void mouseDragged() {
			applyAll(mouse.onDrag, $number(mouseX), $number(mouseY));
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
	protected static final class Mouse extends Obj {
		
		private final MouseButton left = new MouseButton();
		private final MouseButton right = new MouseButton();
		private final MouseButton center = new MouseButton();
		
		public Num x(Obj self) {
			return $number(applet.mouseX);
		}
		
		public Num y(Obj self) {
			return $number(applet.mouseY);
		}
		
		public MouseButton left(Obj self) {
			return left;
		}
		
		public MouseButton right(Obj self) {
			return right;
		}
		
		public MouseButton center(Obj self) {
			return center;
		}
		
		private final List<Obj> onPress = new LinkedList<Obj>();
		
		public Nothing onPress(Obj self, Obj block) {
			onPress.add(block);
			return nothing;
		}
		
		private final List<Obj> onRelease = new LinkedList<Obj>();
		
		public Nothing onRelease(Obj self, Obj block) {
			onRelease.add(block);
			return nothing;
		}
		
		private final List<Obj> onClick = new LinkedList<Obj>();
		
		public Nothing onClick(Obj self, Obj block) {
			onClick.add(block);
			return nothing;
		}
		
		private final List<Obj> onMove = new LinkedList<Obj>();
		
		public Nothing onMove(Obj self, Obj block) {
			onMove.add(block);
			return nothing;
		}
		
		private final List<Obj> onDrag = new LinkedList<Obj>();
		
		public Nothing onDrag(Obj self, Obj block) {
			onDrag.add(block);
			return nothing;
		}
		
		protected Object invoke(Method method, Object[] args) throws Exception {
			return method.invoke(this, args);
		}
		
	}
	
	/**
	 * The Grace objects representing the three mouse buttons.
	 */
	protected static final class MouseButton extends Obj {
		
		private boolean isPressed;
		
		public Bool isPressed(Obj self) {
			return isPressed ? $true : $false;
		}
		
		private final List<Obj> onPress = new LinkedList<Obj>();
		
		public Nothing onPress(Obj self, Obj block) {
			onPress.add(block);
			return nothing;
		}
		
		private final List<Obj> onRelease = new LinkedList<Obj>();
		
		public Nothing onRelease(Obj self, Obj block) {
			onRelease.add(block);
			return nothing;
		}
		
		private final List<Obj> onClick = new LinkedList<Obj>();
		
		public Nothing onClick(Obj self, Obj block) {
			onClick.add(block);
			return nothing;
		}
		
		protected Object invoke(Method method, Object[] args) throws Exception {
			return method.invoke(this, args);
		}
		
	}
	
	/**
	 * The Grace object representing the state of the keyboard.
	 */
	protected static final class Keyboard extends Obj {
		
		private final Map<Integer, Key> keys = new HashMap<Integer, Key>();
		
		public grace.lang.List keys(Obj self) {
			return $list(keys.values().toArray(new Obj[keys.size()]));
		}
		
		private final List<Obj> onPress = new LinkedList<Obj>();
		
		public Nothing onPress(Obj self, Obj block) {
			onPress.add(block);
			return nothing;
		}
		
		private final List<Obj> onRelease = new LinkedList<Obj>();
		
		public Nothing onRelease(Obj self, Obj block) {
			onRelease.add(block);
			return nothing;
		}
		
		private final List<Obj> onType = new LinkedList<Obj>();
		
		public Nothing onType(Obj self, Obj block) {
			onType.add(block);
			return nothing;
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
	protected static final class Key extends Obj {
		
		private int code;
		
		public Key(char c, int code) {
			inherits($string(Character.toString(c)));
			
			this.code = code;
		}
		
		public Num code(Obj self) {
			return $number(code);
		}
		
		protected Object invoke(Method method, Object[] args) throws Exception {
			return method.invoke(this, args);
		}
		
	}
	
	/**
	 * The Grace objects representing colors.
	 */
	protected static final class Color extends Obj {
		
		private int color;
		
		public Color(int color) {
			this.color = color;
		}
		
		public Num red(Obj self) {
			return $number(applet.red(color));
		}
		
		public Num green(Obj self) {
			return $number(applet.green(color));
		}
		
		public Num blue(Obj self) {
			return $number(applet.blue(color));
		}
		
		public Num hue(Obj self) {
			return $number(applet.hue(color));
		}
		
		public Num saturation(Obj self) {
			return $number(applet.saturation(color));
		}
		
		public Num brightness(Obj self) {
			return $number(applet.brightness(color));
		}
		
		public Num alpha(Obj self) {
			return $number(applet.alpha(color));
		}
		
		public Str hex(Obj self) {
			return $string(PApplet.hex(color));
		}
		
		public Str asString(Obj self) {
			return $string("#" + PApplet.hex(color));
		}
		
		protected Object invoke(Method method, Object[] args) throws Exception {
			return method.invoke(this, args);
		}
		
	}
	
	private static void applyAll(List<Obj> blocks, Obj... args) {
		for (Obj block : blocks) {
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
