import grace.lang.Bool;
import grace.lang.Nothing;
import grace.lang.Num;
import grace.lang.Prelude;
import grace.lang.Str;
import grace.lang.Value;

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
	
	private static int toColor(Value col) {
		return ((Color) col).color;
	}
	
	private static Applet applet = new Applet();
	
	private boolean started = false;
	
	public Nothing start(Value self) {
		if (!started) {
			String[] args = { "GraceProcessing$Applet" };
			PApplet.runSketch(args, applet);
			started = true;
		}
		
		return nothing;
	}
	
	public Nothing size(Value self, Value width, Value height) {
		applet.size($javaInteger(width), $javaInteger(height));
		return nothing;
	}
	
	public Num width(Value self) {
		return $number(applet.width);
	}
	
	public Num height(Value self) {
		return $number(applet.height);
	}
	
	public Nothing loop(Value self) {
		applet.loop();
		return nothing;
	}
	
	public Nothing noLoop(Value self) {
		applet.noLoop();
		return nothing;
	}
	
	public Nothing exit(Value self) {
		applet.exit();
		return nothing;
	}
	
	private static final List<Value> onSetup = new LinkedList<Value>();
	
	public Nothing onSetup(Value self, Value block) {
		onSetup.add(block);
		return nothing;
	}
	
	private static final List<Value> onDraw = new LinkedList<Value>();
	
	public Nothing onDraw(Value self, Value block) {
		onDraw.add(block);
		return nothing;
	}
	
	private static final Mouse mouse = new Mouse();
	
	public Mouse mouse(Value self) {
		return mouse;
	}
	
	private static final Keyboard keyboard = new Keyboard();
	
	public Keyboard keyboard(Value self) {
		return keyboard;
	}
	
	public Color color(Value self, Value value) {
		return new Color($javaInteger(value));
	}
	
	public Color color$withAlpha(Value self, Value value, Value alpha) {
		return new Color(applet.color($javaInteger(value), $javaInteger(alpha)));
	}
	
	public Color r$g$b(Value self, Value r, Value g, Value b) {
		return new Color(applet.color($javaInteger(r), $javaInteger(g),
		    $javaInteger(b)));
	}
	
	public Color r$g$b$withAlpha(Value self, Value r, Value g, Value b, Value alpha) {
		return new Color(applet.color($javaInteger(r), $javaInteger(g),
		    $javaInteger(b), $javaInteger(alpha)));
	}
	
	public Nothing background(Value self, Value color) {
		applet.background(toColor(color));
		return nothing;
	}
	
	public Nothing fill(Value self, Value color) {
		applet.fill(toColor(color));
		return nothing;
	}
	
	public Nothing stroke(Value self, Value color) {
		applet.stroke(toColor(color));
		return nothing;
	}
	
	public Nothing noFill(Value self) {
		applet.noFill();
		return nothing;
	}
	
	public Nothing noStroke(Value self) {
		applet.noStroke();
		return nothing;
	}
	
	public Nothing strokeWeight(Value self, Value weight) {
		applet.strokeWeight($javaFloat(weight));
		return nothing;
	}
	
	public Nothing arc(Value self, Value x, Value y, Value width, Value height,
	    Value start, Value end) {
		applet.arc($javaFloat(x), $javaFloat(y), $javaFloat(width),
		    $javaFloat(height), $javaFloat(start), $javaFloat(end));
		return nothing;
	}
	
	public Nothing ellipse(Value self, Value x, Value y, Value width, Value height) {
		applet.ellipse($javaFloat(x), $javaFloat(y), $javaFloat(width),
		    $javaFloat(height));
		return nothing;
	}
	
	public Nothing line(Value self, Value x1, Value y1, Value x2, Value y2) {
		applet.line($javaFloat(x1), $javaFloat(y1), $javaFloat(x2), $javaFloat(y2));
		return nothing;
	}
	
	public Nothing point(Value self, Value x, Value y) {
		applet.point($javaFloat(x), $javaFloat(y));
		return nothing;
	}
	
	public Nothing quad(Value self, Value x1, Value y1, Value x2, Value y2,
	    Value x3, Value y3, Value x4, Value y4) {
		applet.quad($javaFloat(x1), $javaFloat(y1), $javaFloat(x2), $javaFloat(y2),
		    $javaFloat(x3), $javaFloat(y3), $javaFloat(x4), $javaFloat(y4));
		return nothing;
	}
	
	public Nothing rect(Value self, Value x, Value y, Value width, Value height) {
		applet.rect($javaFloat(x), $javaFloat(y), $javaFloat(width),
		    $javaFloat(height));
		return nothing;
	}
	
	public Nothing triangle(Value self, Value x1, Value y1, Value x2, Value y2,
	    Value x3, Value y3) {
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
			for (Value block : onSetup) {
				block.invoke("apply");
			}
		}
		
		public void draw() {
			for (Value block : onDraw) {
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
	protected static final class Mouse extends Value {
		
		private final MouseButton left = new MouseButton();
		private final MouseButton right = new MouseButton();
		private final MouseButton center = new MouseButton();
		
		public Num x(Value self) {
			return $number(applet.mouseX);
		}
		
		public Num y(Value self) {
			return $number(applet.mouseY);
		}
		
		public MouseButton left(Value self) {
			return left;
		}
		
		public MouseButton right(Value self) {
			return right;
		}
		
		public MouseButton center(Value self) {
			return center;
		}
		
		private final List<Value> onPress = new LinkedList<Value>();
		
		public Nothing onPress(Value self, Value block) {
			onPress.add(block);
			return nothing;
		}
		
		private final List<Value> onRelease = new LinkedList<Value>();
		
		public Nothing onRelease(Value self, Value block) {
			onRelease.add(block);
			return nothing;
		}
		
		private final List<Value> onClick = new LinkedList<Value>();
		
		public Nothing onClick(Value self, Value block) {
			onClick.add(block);
			return nothing;
		}
		
		private final List<Value> onMove = new LinkedList<Value>();
		
		public Nothing onMove(Value self, Value block) {
			onMove.add(block);
			return nothing;
		}
		
		private final List<Value> onDrag = new LinkedList<Value>();
		
		public Nothing onDrag(Value self, Value block) {
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
	protected static final class MouseButton extends Value {
		
		private boolean isPressed;
		
		public Bool isPressed(Value self) {
			return isPressed ? $true : $false;
		}
		
		private final List<Value> onPress = new LinkedList<Value>();
		
		public Nothing onPress(Value self, Value block) {
			onPress.add(block);
			return nothing;
		}
		
		private final List<Value> onRelease = new LinkedList<Value>();
		
		public Nothing onRelease(Value self, Value block) {
			onRelease.add(block);
			return nothing;
		}
		
		private final List<Value> onClick = new LinkedList<Value>();
		
		public Nothing onClick(Value self, Value block) {
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
	protected static final class Keyboard extends Value {
		
		private final Map<Integer, Key> keys = new HashMap<Integer, Key>();
		
		public grace.lang.List keys(Value self) {
			return $list(keys.values().toArray(new Value[keys.size()]));
		}
		
		private final List<Value> onPress = new LinkedList<Value>();
		
		public Nothing onPress(Value self, Value block) {
			onPress.add(block);
			return nothing;
		}
		
		private final List<Value> onRelease = new LinkedList<Value>();
		
		public Nothing onRelease(Value self, Value block) {
			onRelease.add(block);
			return nothing;
		}
		
		private final List<Value> onType = new LinkedList<Value>();
		
		public Nothing onType(Value self, Value block) {
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
	protected static final class Key extends Value {
		
		private int code;
		
		public Key(char c, int code) {
			inherits($string(Character.toString(c)));
			
			this.code = code;
		}
		
		public Num code(Value self) {
			return $number(code);
		}
		
		protected Object invoke(Method method, Object[] args) throws Exception {
			return method.invoke(this, args);
		}
		
	}
	
	/**
	 * The Grace objects representing colors.
	 */
	protected static final class Color extends Value {
		
		private int color;
		
		public Color(int color) {
			this.color = color;
		}
		
		public Num red(Value self) {
			return $number(applet.red(color));
		}
		
		public Num green(Value self) {
			return $number(applet.green(color));
		}
		
		public Num blue(Value self) {
			return $number(applet.blue(color));
		}
		
		public Num hue(Value self) {
			return $number(applet.hue(color));
		}
		
		public Num saturation(Value self) {
			return $number(applet.saturation(color));
		}
		
		public Num brightness(Value self) {
			return $number(applet.brightness(color));
		}
		
		public Num alpha(Value self) {
			return $number(applet.alpha(color));
		}
		
		public Str hex(Value self) {
			return $string(PApplet.hex(color));
		}
		
		public Str asString(Value self) {
			return $string("#" + PApplet.hex(color));
		}
		
		protected Object invoke(Method method, Object[] args) throws Exception {
			return method.invoke(this, args);
		}
		
	}
	
	private static void applyAll(List<Value> blocks, Value... args) {
		for (Value block : blocks) {
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
