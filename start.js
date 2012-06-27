$(function() {
  var draw = $("#draw");

  var processing = new Processing("draw", function() {});

  function addMethod(value, name) {
    value.methods[name] = function() {
      Array.prototype.splice.call(arguments, 0, 1);

      var length = arguments.length;
      for (var i = 0; i < length; i++) {
        arguments[i] = toJS(arguments[i]);
      }
      return toGrace(value[name].apply(value, arguments));
    }
  }

  function addGetter(value, name) {
    value.methods[name] = function() {
      return toGrace(value[name]);
    }
  }

  function addSetter(value, name) {
    value.methods[name + ":="] = function(_, value) {
      value[name] = toJS(value);
    }
  }

  function addCallback(name) {
    var upper = name.substring(0, 1).toUpperCase() + name.substring(1);
    processing.methods["on" + upper] = function(_, value) {
      processing[name] = toJS(value);
    }
  }

  function toJS(value) {
    if (!value.methods) {
      return value;
    }

    if (typeof value._value !== "undefined" && value._value !== null) {
      return value._value;
    }

    var apply = value.methods.apply;
    if (typeof apply === "function") {
      var f = function() {
        Array.prototype.splice.call(arguments, 0, 0, [arguments.length]);
        return apply.apply(value, arguments);
      };

      f.methods = value.methods;
      return f;
    }

    return value;
  }

  function toGrace(value, immutable) {
    var type = typeof value;
    if (type === "boolean") {
      return new GraceBoolean(value);
    } if (type === "number") {
      return new GraceNum(value);
    } if (type === "string") {
      return new GraceString(value);
    } if (type === "function") {
      return {methods: {apply: value}};
    } if (type === "undefined") {
      return var_noSuchValue;
    }

    if (value.methods) {
      return value;
    }

    value.methods = {};
    for (var name in value) {
      if (typeof value[name] === "function") {
        addMethod(value, name);
      } else {
        addGetter(value, name);
      }

      if (!immutable) {
        addSetter(value, name);
      }
    }

    if (typeof value.methods.asString === "undefined") {
      value.methods.asString = function() {
        return new GraceString(value.toString());
      };
    }

    return value;
  }

  toGrace(processing, true);

  addCallback("draw")

  var mouse = "Clicked Dragged Moved Out Over Pressed Released".split(" ");
  var length = mouse.length;
  for (var i = 0; i < length; i++) {
    addCallback("mouse" + mouse[i])
  }

  var key = "Pressed Released Typed".split(" ");
  length = key.length;
  for (i = 0; i < length; i++) {
    addCallback("key" + key[i]);
  }

  Grace_prelude.methods.processing = function() {
    return processing;
  };

  processing.draw = function() {};
  processing.size(500, 500);
  processing.background(255);
  processing.loop();

  var code, output, error;
  
  code = $("#code");
  output = $("#stdout_txt").val("");
  error = $("#stderr_txt").val("");

  window.stdin_txt = { value: "" };
  window.stdout_txt = {
    get value() {
      return output.val();
    },
    set value(value) {
      setAndScroll(output, value);
    }
  };
  window.stderr_txt = {
    get value() {
      return error.val();
    },
    set value(value) {
      setAndScroll(error, value);
    }
  };

  function setAndScroll(el, value) {
    el.val(value);
    var length = value.split("\n").length;
    el.scrollTop(parseInt(el.css("line-height"), 10) * length);
  }

  function compile(code) {
    importedModules = {};

    stdin_txt.value = code;

    var out = output.val();

    output.val("");

    try {
      gracecode_compiler.call({methods: {}});
    } catch (e) {
      if (e !== "SystemExit") {
        throw e;
      }
    }

    var code = output.val();

    output.val(out);

    return code;
  }

  function run(code) {
    try {
      eval(compile(code));
      gracecode_USER.call({methods: {}});  
    } catch (e) {
      if (e !== "ErrorExit") {
        stderr_txt.value += e;
      }
      throw e;
    }
  }

  $("#compile").click(function() {
    output.val("");
    error.val("");

    processing.size(500, 500);
    processing.background(255);
    
    run(code.val());
    draw.focus();
  });

  $("#repl").keyup(function(e) {
    if (e.which === 13) {
      error.val("");
      run("print(" + $(this).val() + ")");
      gracecode_USER.call({methods: {}});
    }
  });

});
