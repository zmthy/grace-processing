function gracecode_lexer() {
  lineNumber = 2
// Import of io
  var var_io = do_import("io", gracecode_io);
  lineNumber = 3
// Import of sys
  var var_sys = do_import("sys", gracecode_sys);
  lineNumber = 4
// Import of util
  var var_util = do_import("util", gracecode_util);
  lineNumber = 7
// Import of unicode
  var var_unicode = do_import("unicode", gracecode_unicode);
  lineNumber = 18
var func0 = function(argcv) {
  var curarg = 1;
  var var_c = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 9
  lineNumber = 8
  var string2 = new GraceString("0");
  var string3 = new GraceString("1");
  var string4 = new GraceString("2");
  var string5 = new GraceString("3");
  var string6 = new GraceString("4");
  var string7 = new GraceString("5");
  var string8 = new GraceString("6");
  var string9 = new GraceString("7");
  var string10 = new GraceString("8");
  lineNumber = 9
  var string11 = new GraceString("9");
  var string12 = new GraceString("a");
  var string13 = new GraceString("b");
  var string14 = new GraceString("c");
  var string15 = new GraceString("d");
  var string16 = new GraceString("e");
  var string17 = new GraceString("f");
  var array1 = new GraceList([
string2,
string3,
string4,
string5,
string6,
string7,
string8,
string9,
string10,
string11,
string12,
string13,
string14,
string15,
string16,
string17,
]);

  var var_chars = array1;
  lineNumber = 11
  lineNumber = 10
  var var_ret = new GraceNum(0);
  lineNumber = 12
  lineNumber = 11
  var var_i = new GraceNum(0);
  lineNumber = 17
  lineNumber = 12
  lineNumber = 17
  var block18 = Grace_allocObject();
  block18.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block18.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block18.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block18.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block18.receiver = this;
  block18.className = 'block<lexer:17>';
  block18.real = function(
var_cr
) {
  lineNumber = 15
  lineNumber = 16
  lineNumber = 13
  var opresult21 = callmethod(var_cr, "==", [1], var_c);
  if (Grace_isTrue(opresult21)) {
  lineNumber = 15
  lineNumber = 14
  var_ret = var_i;
  var if19 = var_i;
}
  lineNumber = 17
  lineNumber = 16
  var opresult23 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult23;
  return opresult23;
};
  var call24 = callmethod(Grace_prelude,"for()do", [1, 1], var_chars, block18);
  lineNumber = 18
  return var_ret
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["hexdecchar"] = func0;
  lineNumber = 659
  var obj25 = Grace_allocObject();
  obj25.outer = this;
    var reader_lexer_outer26 = function() {
    return this.outer;
  }
  obj25.methods["outer"] = reader_lexer_outer26;
function obj_init_25() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func27 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 24
  lineNumber = 23
  var var_lineNumber = new GraceNum(1);
  lineNumber = 25
  lineNumber = 24
  var var_linePosition = new GraceNum(0);
  lineNumber = 26
  lineNumber = 25
  var var_startPosition = new GraceNum(1);
  lineNumber = 28
  lineNumber = 26
  var var_indentLevel = new GraceNum(0);
  lineNumber = 28
  lineNumber = 1
  var obj28 = Grace_allocObject();
  obj28.outer = this;
    var reader_lexer_outer29 = function() {
    return this.outer;
  }
  obj28.methods["outer"] = reader_lexer_outer29;
function obj_init_28() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func30 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj31 = Grace_allocObject();
  obj31.outer = this;
    var reader_lexer_outer32 = function() {
    return this.outer;
  }
  obj31.methods["outer"] = reader_lexer_outer32;
function obj_init_31() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 29
  var string33 = new GraceString("identifier");
  obj31.data["kind"] = string33;
    var reader_lexer_kind34 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind34.def = true;
  obj31.methods["kind"] = reader_lexer_kind34;
  lineNumber = 30
  obj31.data["value"] = var_s;
    var reader_lexer_value35 = function() {
    return this.data["value"];
  }
  reader_lexer_value35.def = true;
  obj31.methods["value"] = reader_lexer_value35;
  lineNumber = 31
  obj31.data["line"] = var_lineNumber;
    var reader_lexer_line36 = function() {
    return this.data["line"];
  }
  reader_lexer_line36.def = true;
  obj31.methods["line"] = reader_lexer_line36;
  lineNumber = 32
  obj31.data["indent"] = var_indentLevel;
    var reader_lexer_indent37 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent37.def = true;
  obj31.methods["indent"] = reader_lexer_indent37;
  lineNumber = 33
  obj31.data["linePos"] = var_startPosition;
    var reader_lexer_linePos38 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos38.def = true;
  obj31.methods["linePos"] = reader_lexer_linePos38;
  superDepth = origSuperDepth;
}
obj_init_31.apply(obj31, []);
  return obj31
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj28.methods["new"] = func30;
  superDepth = origSuperDepth;
}
obj_init_28.apply(obj28, []);
  var var_IdentifierToken = obj28;
  lineNumber = 35
  lineNumber = 1
  var obj39 = Grace_allocObject();
  obj39.outer = this;
    var reader_lexer_outer40 = function() {
    return this.outer;
  }
  obj39.methods["outer"] = reader_lexer_outer40;
function obj_init_39() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func41 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj42 = Grace_allocObject();
  obj42.outer = this;
    var reader_lexer_outer43 = function() {
    return this.outer;
  }
  obj42.methods["outer"] = reader_lexer_outer43;
function obj_init_42() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 36
  var string44 = new GraceString("string");
  obj42.data["kind"] = string44;
    var reader_lexer_kind45 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind45.def = true;
  obj42.methods["kind"] = reader_lexer_kind45;
  lineNumber = 37
  obj42.data["value"] = var_s;
    var reader_lexer_value46 = function() {
    return this.data["value"];
  }
  reader_lexer_value46.def = true;
  obj42.methods["value"] = reader_lexer_value46;
  lineNumber = 38
  obj42.data["line"] = var_lineNumber;
    var reader_lexer_line47 = function() {
    return this.data["line"];
  }
  reader_lexer_line47.def = true;
  obj42.methods["line"] = reader_lexer_line47;
  lineNumber = 39
  obj42.data["indent"] = var_indentLevel;
    var reader_lexer_indent48 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent48.def = true;
  obj42.methods["indent"] = reader_lexer_indent48;
  lineNumber = 40
  obj42.data["linePos"] = var_startPosition;
    var reader_lexer_linePos49 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos49.def = true;
  obj42.methods["linePos"] = reader_lexer_linePos49;
  superDepth = origSuperDepth;
}
obj_init_42.apply(obj42, []);
  return obj42
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj39.methods["new"] = func41;
  superDepth = origSuperDepth;
}
obj_init_39.apply(obj39, []);
  var var_StringToken = obj39;
  lineNumber = 42
  lineNumber = 1
  var obj50 = Grace_allocObject();
  obj50.outer = this;
    var reader_lexer_outer51 = function() {
    return this.outer;
  }
  obj50.methods["outer"] = reader_lexer_outer51;
function obj_init_50() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func52 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj53 = Grace_allocObject();
  obj53.outer = this;
    var reader_lexer_outer54 = function() {
    return this.outer;
  }
  obj53.methods["outer"] = reader_lexer_outer54;
function obj_init_53() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 43
  var string55 = new GraceString("octets");
  obj53.data["kind"] = string55;
    var reader_lexer_kind56 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind56.def = true;
  obj53.methods["kind"] = reader_lexer_kind56;
  lineNumber = 44
  obj53.data["value"] = var_s;
    var reader_lexer_value57 = function() {
    return this.data["value"];
  }
  reader_lexer_value57.def = true;
  obj53.methods["value"] = reader_lexer_value57;
  lineNumber = 45
  obj53.data["line"] = var_lineNumber;
    var reader_lexer_line58 = function() {
    return this.data["line"];
  }
  reader_lexer_line58.def = true;
  obj53.methods["line"] = reader_lexer_line58;
  lineNumber = 46
  obj53.data["indent"] = var_indentLevel;
    var reader_lexer_indent59 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent59.def = true;
  obj53.methods["indent"] = reader_lexer_indent59;
  lineNumber = 47
  obj53.data["linePos"] = var_startPosition;
    var reader_lexer_linePos60 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos60.def = true;
  obj53.methods["linePos"] = reader_lexer_linePos60;
  superDepth = origSuperDepth;
}
obj_init_53.apply(obj53, []);
  return obj53
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj50.methods["new"] = func52;
  superDepth = origSuperDepth;
}
obj_init_50.apply(obj50, []);
  var var_OctetsToken = obj50;
  lineNumber = 55
  lineNumber = 1
  var obj61 = Grace_allocObject();
  obj61.outer = this;
    var reader_lexer_outer62 = function() {
    return this.outer;
  }
  obj61.methods["outer"] = reader_lexer_outer62;
function obj_init_61() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func63 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj64 = Grace_allocObject();
  obj64.outer = this;
    var reader_lexer_outer65 = function() {
    return this.outer;
  }
  obj64.methods["outer"] = reader_lexer_outer65;
function obj_init_64() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 50
  var string66 = new GraceString("lbrace");
  obj64.data["kind"] = string66;
    var reader_lexer_kind67 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind67.def = true;
  obj64.methods["kind"] = reader_lexer_kind67;
  lineNumber = 51
  var string68 = new GraceString("{");
  obj64.data["value"] = string68;
    var reader_lexer_value69 = function() {
    return this.data["value"];
  }
  reader_lexer_value69.def = true;
  obj64.methods["value"] = reader_lexer_value69;
  lineNumber = 52
  obj64.data["line"] = var_lineNumber;
    var reader_lexer_line70 = function() {
    return this.data["line"];
  }
  reader_lexer_line70.def = true;
  obj64.methods["line"] = reader_lexer_line70;
  lineNumber = 53
  obj64.data["indent"] = var_indentLevel;
    var reader_lexer_indent71 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent71.def = true;
  obj64.methods["indent"] = reader_lexer_indent71;
  lineNumber = 54
  obj64.data["linePos"] = var_startPosition;
    var reader_lexer_linePos72 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos72.def = true;
  obj64.methods["linePos"] = reader_lexer_linePos72;
  superDepth = origSuperDepth;
}
obj_init_64.apply(obj64, []);
  return obj64
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj61.methods["new"] = func63;
  superDepth = origSuperDepth;
}
obj_init_61.apply(obj61, []);
  var var_LBraceToken = obj61;
  lineNumber = 62
  lineNumber = 1
  var obj73 = Grace_allocObject();
  obj73.outer = this;
    var reader_lexer_outer74 = function() {
    return this.outer;
  }
  obj73.methods["outer"] = reader_lexer_outer74;
function obj_init_73() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func75 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj76 = Grace_allocObject();
  obj76.outer = this;
    var reader_lexer_outer77 = function() {
    return this.outer;
  }
  obj76.methods["outer"] = reader_lexer_outer77;
function obj_init_76() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 57
  var string78 = new GraceString("rbrace");
  obj76.data["kind"] = string78;
    var reader_lexer_kind79 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind79.def = true;
  obj76.methods["kind"] = reader_lexer_kind79;
  lineNumber = 58
  var string80 = new GraceString("}");
  obj76.data["value"] = string80;
    var reader_lexer_value81 = function() {
    return this.data["value"];
  }
  reader_lexer_value81.def = true;
  obj76.methods["value"] = reader_lexer_value81;
  lineNumber = 59
  obj76.data["line"] = var_lineNumber;
    var reader_lexer_line82 = function() {
    return this.data["line"];
  }
  reader_lexer_line82.def = true;
  obj76.methods["line"] = reader_lexer_line82;
  lineNumber = 60
  obj76.data["indent"] = var_indentLevel;
    var reader_lexer_indent83 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent83.def = true;
  obj76.methods["indent"] = reader_lexer_indent83;
  lineNumber = 61
  obj76.data["linePos"] = var_startPosition;
    var reader_lexer_linePos84 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos84.def = true;
  obj76.methods["linePos"] = reader_lexer_linePos84;
  superDepth = origSuperDepth;
}
obj_init_76.apply(obj76, []);
  return obj76
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj73.methods["new"] = func75;
  superDepth = origSuperDepth;
}
obj_init_73.apply(obj73, []);
  var var_RBraceToken = obj73;
  lineNumber = 69
  lineNumber = 1
  var obj85 = Grace_allocObject();
  obj85.outer = this;
    var reader_lexer_outer86 = function() {
    return this.outer;
  }
  obj85.methods["outer"] = reader_lexer_outer86;
function obj_init_85() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func87 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj88 = Grace_allocObject();
  obj88.outer = this;
    var reader_lexer_outer89 = function() {
    return this.outer;
  }
  obj88.methods["outer"] = reader_lexer_outer89;
function obj_init_88() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 64
  var string90 = new GraceString("lparen");
  obj88.data["kind"] = string90;
    var reader_lexer_kind91 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind91.def = true;
  obj88.methods["kind"] = reader_lexer_kind91;
  lineNumber = 65
  var string92 = new GraceString("(");
  obj88.data["value"] = string92;
    var reader_lexer_value93 = function() {
    return this.data["value"];
  }
  reader_lexer_value93.def = true;
  obj88.methods["value"] = reader_lexer_value93;
  lineNumber = 66
  obj88.data["line"] = var_lineNumber;
    var reader_lexer_line94 = function() {
    return this.data["line"];
  }
  reader_lexer_line94.def = true;
  obj88.methods["line"] = reader_lexer_line94;
  lineNumber = 67
  obj88.data["indent"] = var_indentLevel;
    var reader_lexer_indent95 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent95.def = true;
  obj88.methods["indent"] = reader_lexer_indent95;
  lineNumber = 68
  obj88.data["linePos"] = var_startPosition;
    var reader_lexer_linePos96 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos96.def = true;
  obj88.methods["linePos"] = reader_lexer_linePos96;
  superDepth = origSuperDepth;
}
obj_init_88.apply(obj88, []);
  return obj88
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj85.methods["new"] = func87;
  superDepth = origSuperDepth;
}
obj_init_85.apply(obj85, []);
  var var_LParenToken = obj85;
  lineNumber = 76
  lineNumber = 1
  var obj97 = Grace_allocObject();
  obj97.outer = this;
    var reader_lexer_outer98 = function() {
    return this.outer;
  }
  obj97.methods["outer"] = reader_lexer_outer98;
function obj_init_97() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func99 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj100 = Grace_allocObject();
  obj100.outer = this;
    var reader_lexer_outer101 = function() {
    return this.outer;
  }
  obj100.methods["outer"] = reader_lexer_outer101;
function obj_init_100() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 71
  var string102 = new GraceString("rparen");
  obj100.data["kind"] = string102;
    var reader_lexer_kind103 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind103.def = true;
  obj100.methods["kind"] = reader_lexer_kind103;
  lineNumber = 72
  var string104 = new GraceString(")");
  obj100.data["value"] = string104;
    var reader_lexer_value105 = function() {
    return this.data["value"];
  }
  reader_lexer_value105.def = true;
  obj100.methods["value"] = reader_lexer_value105;
  lineNumber = 73
  obj100.data["line"] = var_lineNumber;
    var reader_lexer_line106 = function() {
    return this.data["line"];
  }
  reader_lexer_line106.def = true;
  obj100.methods["line"] = reader_lexer_line106;
  lineNumber = 74
  obj100.data["indent"] = var_indentLevel;
    var reader_lexer_indent107 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent107.def = true;
  obj100.methods["indent"] = reader_lexer_indent107;
  lineNumber = 75
  obj100.data["linePos"] = var_startPosition;
    var reader_lexer_linePos108 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos108.def = true;
  obj100.methods["linePos"] = reader_lexer_linePos108;
  superDepth = origSuperDepth;
}
obj_init_100.apply(obj100, []);
  return obj100
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj97.methods["new"] = func99;
  superDepth = origSuperDepth;
}
obj_init_97.apply(obj97, []);
  var var_RParenToken = obj97;
  lineNumber = 83
  lineNumber = 1
  var obj109 = Grace_allocObject();
  obj109.outer = this;
    var reader_lexer_outer110 = function() {
    return this.outer;
  }
  obj109.methods["outer"] = reader_lexer_outer110;
function obj_init_109() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func111 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj112 = Grace_allocObject();
  obj112.outer = this;
    var reader_lexer_outer113 = function() {
    return this.outer;
  }
  obj112.methods["outer"] = reader_lexer_outer113;
function obj_init_112() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 78
  var string114 = new GraceString("lsquare");
  obj112.data["kind"] = string114;
    var reader_lexer_kind115 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind115.def = true;
  obj112.methods["kind"] = reader_lexer_kind115;
  lineNumber = 79
  var string116 = new GraceString("[");
  obj112.data["value"] = string116;
    var reader_lexer_value117 = function() {
    return this.data["value"];
  }
  reader_lexer_value117.def = true;
  obj112.methods["value"] = reader_lexer_value117;
  lineNumber = 80
  obj112.data["line"] = var_lineNumber;
    var reader_lexer_line118 = function() {
    return this.data["line"];
  }
  reader_lexer_line118.def = true;
  obj112.methods["line"] = reader_lexer_line118;
  lineNumber = 81
  obj112.data["indent"] = var_indentLevel;
    var reader_lexer_indent119 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent119.def = true;
  obj112.methods["indent"] = reader_lexer_indent119;
  lineNumber = 82
  obj112.data["linePos"] = var_startPosition;
    var reader_lexer_linePos120 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos120.def = true;
  obj112.methods["linePos"] = reader_lexer_linePos120;
  superDepth = origSuperDepth;
}
obj_init_112.apply(obj112, []);
  return obj112
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj109.methods["new"] = func111;
  superDepth = origSuperDepth;
}
obj_init_109.apply(obj109, []);
  var var_LSquareToken = obj109;
  lineNumber = 90
  lineNumber = 1
  var obj121 = Grace_allocObject();
  obj121.outer = this;
    var reader_lexer_outer122 = function() {
    return this.outer;
  }
  obj121.methods["outer"] = reader_lexer_outer122;
function obj_init_121() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func123 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj124 = Grace_allocObject();
  obj124.outer = this;
    var reader_lexer_outer125 = function() {
    return this.outer;
  }
  obj124.methods["outer"] = reader_lexer_outer125;
function obj_init_124() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 85
  var string126 = new GraceString("rsquare");
  obj124.data["kind"] = string126;
    var reader_lexer_kind127 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind127.def = true;
  obj124.methods["kind"] = reader_lexer_kind127;
  lineNumber = 86
  var string128 = new GraceString("]");
  obj124.data["value"] = string128;
    var reader_lexer_value129 = function() {
    return this.data["value"];
  }
  reader_lexer_value129.def = true;
  obj124.methods["value"] = reader_lexer_value129;
  lineNumber = 87
  obj124.data["line"] = var_lineNumber;
    var reader_lexer_line130 = function() {
    return this.data["line"];
  }
  reader_lexer_line130.def = true;
  obj124.methods["line"] = reader_lexer_line130;
  lineNumber = 88
  obj124.data["indent"] = var_indentLevel;
    var reader_lexer_indent131 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent131.def = true;
  obj124.methods["indent"] = reader_lexer_indent131;
  lineNumber = 89
  obj124.data["linePos"] = var_startPosition;
    var reader_lexer_linePos132 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos132.def = true;
  obj124.methods["linePos"] = reader_lexer_linePos132;
  superDepth = origSuperDepth;
}
obj_init_124.apply(obj124, []);
  return obj124
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj121.methods["new"] = func123;
  superDepth = origSuperDepth;
}
obj_init_121.apply(obj121, []);
  var var_RSquareToken = obj121;
  lineNumber = 97
  lineNumber = 1
  var obj133 = Grace_allocObject();
  obj133.outer = this;
    var reader_lexer_outer134 = function() {
    return this.outer;
  }
  obj133.methods["outer"] = reader_lexer_outer134;
function obj_init_133() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func135 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj136 = Grace_allocObject();
  obj136.outer = this;
    var reader_lexer_outer137 = function() {
    return this.outer;
  }
  obj136.methods["outer"] = reader_lexer_outer137;
function obj_init_136() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 92
  var string138 = new GraceString("comma");
  obj136.data["kind"] = string138;
    var reader_lexer_kind139 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind139.def = true;
  obj136.methods["kind"] = reader_lexer_kind139;
  lineNumber = 93
  var string140 = new GraceString(",");
  obj136.data["value"] = string140;
    var reader_lexer_value141 = function() {
    return this.data["value"];
  }
  reader_lexer_value141.def = true;
  obj136.methods["value"] = reader_lexer_value141;
  lineNumber = 94
  obj136.data["line"] = var_lineNumber;
    var reader_lexer_line142 = function() {
    return this.data["line"];
  }
  reader_lexer_line142.def = true;
  obj136.methods["line"] = reader_lexer_line142;
  lineNumber = 95
  obj136.data["indent"] = var_indentLevel;
    var reader_lexer_indent143 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent143.def = true;
  obj136.methods["indent"] = reader_lexer_indent143;
  lineNumber = 96
  obj136.data["linePos"] = var_startPosition;
    var reader_lexer_linePos144 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos144.def = true;
  obj136.methods["linePos"] = reader_lexer_linePos144;
  superDepth = origSuperDepth;
}
obj_init_136.apply(obj136, []);
  return obj136
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj133.methods["new"] = func135;
  superDepth = origSuperDepth;
}
obj_init_133.apply(obj133, []);
  var var_CommaToken = obj133;
  lineNumber = 104
  lineNumber = 1
  var obj145 = Grace_allocObject();
  obj145.outer = this;
    var reader_lexer_outer146 = function() {
    return this.outer;
  }
  obj145.methods["outer"] = reader_lexer_outer146;
function obj_init_145() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func147 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj148 = Grace_allocObject();
  obj148.outer = this;
    var reader_lexer_outer149 = function() {
    return this.outer;
  }
  obj148.methods["outer"] = reader_lexer_outer149;
function obj_init_148() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 99
  var string150 = new GraceString("colon");
  obj148.data["kind"] = string150;
    var reader_lexer_kind151 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind151.def = true;
  obj148.methods["kind"] = reader_lexer_kind151;
  lineNumber = 100
  var string152 = new GraceString(":");
  obj148.data["value"] = string152;
    var reader_lexer_value153 = function() {
    return this.data["value"];
  }
  reader_lexer_value153.def = true;
  obj148.methods["value"] = reader_lexer_value153;
  lineNumber = 101
  obj148.data["line"] = var_lineNumber;
    var reader_lexer_line154 = function() {
    return this.data["line"];
  }
  reader_lexer_line154.def = true;
  obj148.methods["line"] = reader_lexer_line154;
  lineNumber = 102
  obj148.data["indent"] = var_indentLevel;
    var reader_lexer_indent155 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent155.def = true;
  obj148.methods["indent"] = reader_lexer_indent155;
  lineNumber = 103
  obj148.data["linePos"] = var_startPosition;
    var reader_lexer_linePos156 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos156.def = true;
  obj148.methods["linePos"] = reader_lexer_linePos156;
  superDepth = origSuperDepth;
}
obj_init_148.apply(obj148, []);
  return obj148
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj145.methods["new"] = func147;
  superDepth = origSuperDepth;
}
obj_init_145.apply(obj145, []);
  var var_ColonToken = obj145;
  lineNumber = 111
  lineNumber = 1
  var obj157 = Grace_allocObject();
  obj157.outer = this;
    var reader_lexer_outer158 = function() {
    return this.outer;
  }
  obj157.methods["outer"] = reader_lexer_outer158;
function obj_init_157() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func159 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj160 = Grace_allocObject();
  obj160.outer = this;
    var reader_lexer_outer161 = function() {
    return this.outer;
  }
  obj160.methods["outer"] = reader_lexer_outer161;
function obj_init_160() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 106
  var string162 = new GraceString("dot");
  obj160.data["kind"] = string162;
    var reader_lexer_kind163 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind163.def = true;
  obj160.methods["kind"] = reader_lexer_kind163;
  lineNumber = 107
  var string164 = new GraceString(".");
  obj160.data["value"] = string164;
    var reader_lexer_value165 = function() {
    return this.data["value"];
  }
  reader_lexer_value165.def = true;
  obj160.methods["value"] = reader_lexer_value165;
  lineNumber = 108
  obj160.data["line"] = var_lineNumber;
    var reader_lexer_line166 = function() {
    return this.data["line"];
  }
  reader_lexer_line166.def = true;
  obj160.methods["line"] = reader_lexer_line166;
  lineNumber = 109
  obj160.data["indent"] = var_indentLevel;
    var reader_lexer_indent167 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent167.def = true;
  obj160.methods["indent"] = reader_lexer_indent167;
  lineNumber = 110
  obj160.data["linePos"] = var_startPosition;
    var reader_lexer_linePos168 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos168.def = true;
  obj160.methods["linePos"] = reader_lexer_linePos168;
  superDepth = origSuperDepth;
}
obj_init_160.apply(obj160, []);
  return obj160
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj157.methods["new"] = func159;
  superDepth = origSuperDepth;
}
obj_init_157.apply(obj157, []);
  var var_DotToken = obj157;
  lineNumber = 112
  lineNumber = 1
  var obj169 = Grace_allocObject();
  obj169.outer = this;
    var reader_lexer_outer170 = function() {
    return this.outer;
  }
  obj169.methods["outer"] = reader_lexer_outer170;
function obj_init_169() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func171 = function(argcv) {
  var curarg = 1;
  var var_v = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj172 = Grace_allocObject();
  obj172.outer = this;
    var reader_lexer_outer173 = function() {
    return this.outer;
  }
  obj172.methods["outer"] = reader_lexer_outer173;
function obj_init_172() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 113
  var string174 = new GraceString("num");
  obj172.data["kind"] = string174;
    var reader_lexer_kind175 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind175.def = true;
  obj172.methods["kind"] = reader_lexer_kind175;
  lineNumber = 114
  obj172.data["value"] = var_v;
    var reader_lexer_value176 = function() {
    return this.data["value"];
  }
  reader_lexer_value176.def = true;
  obj172.methods["value"] = reader_lexer_value176;
  lineNumber = 115
  obj172.data["line"] = var_lineNumber;
    var reader_lexer_line177 = function() {
    return this.data["line"];
  }
  reader_lexer_line177.def = true;
  obj172.methods["line"] = reader_lexer_line177;
  lineNumber = 116
  obj172.data["indent"] = var_indentLevel;
    var reader_lexer_indent178 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent178.def = true;
  obj172.methods["indent"] = reader_lexer_indent178;
  lineNumber = 117
  obj172.data["linePos"] = var_startPosition;
    var reader_lexer_linePos179 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos179.def = true;
  obj172.methods["linePos"] = reader_lexer_linePos179;
  superDepth = origSuperDepth;
}
obj_init_172.apply(obj172, []);
  return obj172
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj169.methods["new"] = func171;
  superDepth = origSuperDepth;
}
obj_init_169.apply(obj169, []);
  var var_NumToken = obj169;
  lineNumber = 119
  lineNumber = 1
  var obj180 = Grace_allocObject();
  obj180.outer = this;
    var reader_lexer_outer181 = function() {
    return this.outer;
  }
  obj180.methods["outer"] = reader_lexer_outer181;
function obj_init_180() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func182 = function(argcv) {
  var curarg = 1;
  var var_v = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj183 = Grace_allocObject();
  obj183.outer = this;
    var reader_lexer_outer184 = function() {
    return this.outer;
  }
  obj183.methods["outer"] = reader_lexer_outer184;
function obj_init_183() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 120
  var string185 = new GraceString("keyword");
  obj183.data["kind"] = string185;
    var reader_lexer_kind186 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind186.def = true;
  obj183.methods["kind"] = reader_lexer_kind186;
  lineNumber = 121
  obj183.data["value"] = var_v;
    var reader_lexer_value187 = function() {
    return this.data["value"];
  }
  reader_lexer_value187.def = true;
  obj183.methods["value"] = reader_lexer_value187;
  lineNumber = 122
  obj183.data["line"] = var_lineNumber;
    var reader_lexer_line188 = function() {
    return this.data["line"];
  }
  reader_lexer_line188.def = true;
  obj183.methods["line"] = reader_lexer_line188;
  lineNumber = 123
  obj183.data["indent"] = var_indentLevel;
    var reader_lexer_indent189 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent189.def = true;
  obj183.methods["indent"] = reader_lexer_indent189;
  lineNumber = 124
  obj183.data["linePos"] = var_startPosition;
    var reader_lexer_linePos190 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos190.def = true;
  obj183.methods["linePos"] = reader_lexer_linePos190;
  superDepth = origSuperDepth;
}
obj_init_183.apply(obj183, []);
  return obj183
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj180.methods["new"] = func182;
  superDepth = origSuperDepth;
}
obj_init_180.apply(obj180, []);
  var var_KeywordToken = obj180;
  lineNumber = 126
  lineNumber = 1
  var obj191 = Grace_allocObject();
  obj191.outer = this;
    var reader_lexer_outer192 = function() {
    return this.outer;
  }
  obj191.methods["outer"] = reader_lexer_outer192;
function obj_init_191() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func193 = function(argcv) {
  var curarg = 1;
  var var_v = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj194 = Grace_allocObject();
  obj194.outer = this;
    var reader_lexer_outer195 = function() {
    return this.outer;
  }
  obj194.methods["outer"] = reader_lexer_outer195;
function obj_init_194() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 127
  var string196 = new GraceString("op");
  obj194.data["kind"] = string196;
    var reader_lexer_kind197 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind197.def = true;
  obj194.methods["kind"] = reader_lexer_kind197;
  lineNumber = 128
  obj194.data["value"] = var_v;
    var reader_lexer_value198 = function() {
    return this.data["value"];
  }
  reader_lexer_value198.def = true;
  obj194.methods["value"] = reader_lexer_value198;
  lineNumber = 129
  obj194.data["line"] = var_lineNumber;
    var reader_lexer_line199 = function() {
    return this.data["line"];
  }
  reader_lexer_line199.def = true;
  obj194.methods["line"] = reader_lexer_line199;
  lineNumber = 130
  obj194.data["indent"] = var_indentLevel;
    var reader_lexer_indent200 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent200.def = true;
  obj194.methods["indent"] = reader_lexer_indent200;
  lineNumber = 131
  obj194.data["linePos"] = var_startPosition;
    var reader_lexer_linePos201 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos201.def = true;
  obj194.methods["linePos"] = reader_lexer_linePos201;
  superDepth = origSuperDepth;
}
obj_init_194.apply(obj194, []);
  return obj194
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj191.methods["new"] = func193;
  superDepth = origSuperDepth;
}
obj_init_191.apply(obj191, []);
  var var_OpToken = obj191;
  lineNumber = 139
  lineNumber = 1
  var obj202 = Grace_allocObject();
  obj202.outer = this;
    var reader_lexer_outer203 = function() {
    return this.outer;
  }
  obj202.methods["outer"] = reader_lexer_outer203;
function obj_init_202() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func204 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj205 = Grace_allocObject();
  obj205.outer = this;
    var reader_lexer_outer206 = function() {
    return this.outer;
  }
  obj205.methods["outer"] = reader_lexer_outer206;
function obj_init_205() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 134
  var string207 = new GraceString("arrow");
  obj205.data["kind"] = string207;
    var reader_lexer_kind208 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind208.def = true;
  obj205.methods["kind"] = reader_lexer_kind208;
  lineNumber = 135
  var string209 = new GraceString("->");
  obj205.data["value"] = string209;
    var reader_lexer_value210 = function() {
    return this.data["value"];
  }
  reader_lexer_value210.def = true;
  obj205.methods["value"] = reader_lexer_value210;
  lineNumber = 136
  obj205.data["line"] = var_lineNumber;
    var reader_lexer_line211 = function() {
    return this.data["line"];
  }
  reader_lexer_line211.def = true;
  obj205.methods["line"] = reader_lexer_line211;
  lineNumber = 137
  obj205.data["indent"] = var_indentLevel;
    var reader_lexer_indent212 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent212.def = true;
  obj205.methods["indent"] = reader_lexer_indent212;
  lineNumber = 138
  obj205.data["linePos"] = var_startPosition;
    var reader_lexer_linePos213 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos213.def = true;
  obj205.methods["linePos"] = reader_lexer_linePos213;
  superDepth = origSuperDepth;
}
obj_init_205.apply(obj205, []);
  return obj205
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj202.methods["new"] = func204;
  superDepth = origSuperDepth;
}
obj_init_202.apply(obj202, []);
  var var_ArrowToken = obj202;
  lineNumber = 146
  lineNumber = 1
  var obj214 = Grace_allocObject();
  obj214.outer = this;
    var reader_lexer_outer215 = function() {
    return this.outer;
  }
  obj214.methods["outer"] = reader_lexer_outer215;
function obj_init_214() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func216 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj217 = Grace_allocObject();
  obj217.outer = this;
    var reader_lexer_outer218 = function() {
    return this.outer;
  }
  obj217.methods["outer"] = reader_lexer_outer218;
function obj_init_217() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 141
  var string219 = new GraceString("bind");
  obj217.data["kind"] = string219;
    var reader_lexer_kind220 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind220.def = true;
  obj217.methods["kind"] = reader_lexer_kind220;
  lineNumber = 142
  var string221 = new GraceString(":=");
  obj217.data["value"] = string221;
    var reader_lexer_value222 = function() {
    return this.data["value"];
  }
  reader_lexer_value222.def = true;
  obj217.methods["value"] = reader_lexer_value222;
  lineNumber = 143
  obj217.data["line"] = var_lineNumber;
    var reader_lexer_line223 = function() {
    return this.data["line"];
  }
  reader_lexer_line223.def = true;
  obj217.methods["line"] = reader_lexer_line223;
  lineNumber = 144
  obj217.data["indent"] = var_indentLevel;
    var reader_lexer_indent224 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent224.def = true;
  obj217.methods["indent"] = reader_lexer_indent224;
  lineNumber = 145
  obj217.data["linePos"] = var_startPosition;
    var reader_lexer_linePos225 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos225.def = true;
  obj217.methods["linePos"] = reader_lexer_linePos225;
  superDepth = origSuperDepth;
}
obj_init_217.apply(obj217, []);
  return obj217
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj214.methods["new"] = func216;
  superDepth = origSuperDepth;
}
obj_init_214.apply(obj214, []);
  var var_BindToken = obj214;
  lineNumber = 153
  lineNumber = 1
  var obj226 = Grace_allocObject();
  obj226.outer = this;
    var reader_lexer_outer227 = function() {
    return this.outer;
  }
  obj226.methods["outer"] = reader_lexer_outer227;
function obj_init_226() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func228 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj229 = Grace_allocObject();
  obj229.outer = this;
    var reader_lexer_outer230 = function() {
    return this.outer;
  }
  obj229.methods["outer"] = reader_lexer_outer230;
function obj_init_229() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 148
  var string231 = new GraceString("semicolon");
  obj229.data["kind"] = string231;
    var reader_lexer_kind232 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind232.def = true;
  obj229.methods["kind"] = reader_lexer_kind232;
  lineNumber = 149
  var string233 = new GraceString(";");
  obj229.data["value"] = string233;
    var reader_lexer_value234 = function() {
    return this.data["value"];
  }
  reader_lexer_value234.def = true;
  obj229.methods["value"] = reader_lexer_value234;
  lineNumber = 150
  obj229.data["line"] = var_lineNumber;
    var reader_lexer_line235 = function() {
    return this.data["line"];
  }
  reader_lexer_line235.def = true;
  obj229.methods["line"] = reader_lexer_line235;
  lineNumber = 151
  obj229.data["indent"] = var_indentLevel;
    var reader_lexer_indent236 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent236.def = true;
  obj229.methods["indent"] = reader_lexer_indent236;
  lineNumber = 152
  obj229.data["linePos"] = var_startPosition;
    var reader_lexer_linePos237 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos237.def = true;
  obj229.methods["linePos"] = reader_lexer_linePos237;
  superDepth = origSuperDepth;
}
obj_init_229.apply(obj229, []);
  return obj229
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj226.methods["new"] = func228;
  superDepth = origSuperDepth;
}
obj_init_226.apply(obj226, []);
  var var_SemicolonToken = obj226;
  lineNumber = 160
  lineNumber = 1
  var obj238 = Grace_allocObject();
  obj238.outer = this;
    var reader_lexer_outer239 = function() {
    return this.outer;
  }
  obj238.methods["outer"] = reader_lexer_outer239;
function obj_init_238() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func240 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj241 = Grace_allocObject();
  obj241.outer = this;
    var reader_lexer_outer242 = function() {
    return this.outer;
  }
  obj241.methods["outer"] = reader_lexer_outer242;
function obj_init_241() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 155
  var string243 = new GraceString("lgeneric");
  obj241.data["kind"] = string243;
    var reader_lexer_kind244 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind244.def = true;
  obj241.methods["kind"] = reader_lexer_kind244;
  lineNumber = 156
  var string245 = new GraceString("<");
  obj241.data["value"] = string245;
    var reader_lexer_value246 = function() {
    return this.data["value"];
  }
  reader_lexer_value246.def = true;
  obj241.methods["value"] = reader_lexer_value246;
  lineNumber = 157
  obj241.data["line"] = var_lineNumber;
    var reader_lexer_line247 = function() {
    return this.data["line"];
  }
  reader_lexer_line247.def = true;
  obj241.methods["line"] = reader_lexer_line247;
  lineNumber = 158
  obj241.data["indent"] = var_indentLevel;
    var reader_lexer_indent248 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent248.def = true;
  obj241.methods["indent"] = reader_lexer_indent248;
  lineNumber = 159
  obj241.data["linePos"] = var_startPosition;
    var reader_lexer_linePos249 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos249.def = true;
  obj241.methods["linePos"] = reader_lexer_linePos249;
  superDepth = origSuperDepth;
}
obj_init_241.apply(obj241, []);
  return obj241
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj238.methods["new"] = func240;
  superDepth = origSuperDepth;
}
obj_init_238.apply(obj238, []);
  var var_LGenericToken = obj238;
  lineNumber = 167
  lineNumber = 1
  var obj250 = Grace_allocObject();
  obj250.outer = this;
    var reader_lexer_outer251 = function() {
    return this.outer;
  }
  obj250.methods["outer"] = reader_lexer_outer251;
function obj_init_250() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func252 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj253 = Grace_allocObject();
  obj253.outer = this;
    var reader_lexer_outer254 = function() {
    return this.outer;
  }
  obj253.methods["outer"] = reader_lexer_outer254;
function obj_init_253() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 162
  var string255 = new GraceString("rgeneric");
  obj253.data["kind"] = string255;
    var reader_lexer_kind256 = function() {
    return this.data["kind"];
  }
  reader_lexer_kind256.def = true;
  obj253.methods["kind"] = reader_lexer_kind256;
  lineNumber = 163
  var string257 = new GraceString(">");
  obj253.data["value"] = string257;
    var reader_lexer_value258 = function() {
    return this.data["value"];
  }
  reader_lexer_value258.def = true;
  obj253.methods["value"] = reader_lexer_value258;
  lineNumber = 164
  obj253.data["line"] = var_lineNumber;
    var reader_lexer_line259 = function() {
    return this.data["line"];
  }
  reader_lexer_line259.def = true;
  obj253.methods["line"] = reader_lexer_line259;
  lineNumber = 165
  obj253.data["indent"] = var_indentLevel;
    var reader_lexer_indent260 = function() {
    return this.data["indent"];
  }
  reader_lexer_indent260.def = true;
  obj253.methods["indent"] = reader_lexer_indent260;
  lineNumber = 166
  obj253.data["linePos"] = var_startPosition;
    var reader_lexer_linePos261 = function() {
    return this.data["linePos"];
  }
  reader_lexer_linePos261.def = true;
  obj253.methods["linePos"] = reader_lexer_linePos261;
  superDepth = origSuperDepth;
}
obj_init_253.apply(obj253, []);
  return obj253
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj250.methods["new"] = func252;
  superDepth = origSuperDepth;
}
obj_init_250.apply(obj250, []);
  var var_RGenericToken = obj250;
  lineNumber = 659
  var obj262 = Grace_allocObject();
  obj262.outer = this;
    var reader_lexer_outer263 = function() {
    return this.outer;
  }
  obj262.methods["outer"] = reader_lexer_outer263;
function obj_init_262() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func264 = function(argcv) {
  var curarg = 1;
  var var_tokens = arguments[curarg];
  curarg++;
  var var_mode = arguments[curarg];
  curarg++;
  var var_accum = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 186
  lineNumber = 185
  var bool265 = new GraceBoolean(false)
  var var_done = bool265;
  lineNumber = 187
  lineNumber = 186
  var var_tok = new GraceNum(0);
  lineNumber = 296
  lineNumber = 299
  lineNumber = 187
  var string267 = new GraceString("n");
  var opresult269 = callmethod(var_mode, "/=", [1], string267);
  lineNumber = 299
  lineNumber = 1
  lineNumber = 187
  var call270 = callmethod(var_accum,"size", [0]);
  var opresult272 = callmethod(call270, ">", [1], new GraceNum(0));
  var opresult274 = callmethod(opresult269, "|", [1], opresult272);
  if (Grace_isTrue(opresult274)) {
  lineNumber = 199
  lineNumber = 200
  lineNumber = 188
  var string276 = new GraceString("i");
  var opresult278 = callmethod(var_mode, "==", [1], string276);
  if (Grace_isTrue(opresult278)) {
  lineNumber = 189
  var call279 = callmethod(var_IdentifierToken,"new", [1], var_accum);
  var_tok = call279;
  lineNumber = 195
  lineNumber = 197
  lineNumber = 190
  var string281 = new GraceString("object");
  var opresult283 = callmethod(var_accum, "==", [1], string281);
  lineNumber = 197
  lineNumber = 190
  var string284 = new GraceString("method");
  var opresult286 = callmethod(var_accum, "==", [1], string284);
  var opresult288 = callmethod(opresult283, "|", [1], opresult286);
  lineNumber = 197
  lineNumber = 191
  var string289 = new GraceString("var");
  var opresult291 = callmethod(var_accum, "==", [1], string289);
  var opresult293 = callmethod(opresult288, "|", [1], opresult291);
  lineNumber = 197
  lineNumber = 191
  var string294 = new GraceString("type");
  var opresult296 = callmethod(var_accum, "==", [1], string294);
  var opresult298 = callmethod(opresult293, "|", [1], opresult296);
  lineNumber = 197
  lineNumber = 192
  var string299 = new GraceString("import");
  var opresult301 = callmethod(var_accum, "==", [1], string299);
  var opresult303 = callmethod(opresult298, "|", [1], opresult301);
  lineNumber = 197
  lineNumber = 192
  var string304 = new GraceString("class");
  var opresult306 = callmethod(var_accum, "==", [1], string304);
  var opresult308 = callmethod(opresult303, "|", [1], opresult306);
  lineNumber = 197
  lineNumber = 193
  var string309 = new GraceString("return");
  var opresult311 = callmethod(var_accum, "==", [1], string309);
  var opresult313 = callmethod(opresult308, "|", [1], opresult311);
  lineNumber = 197
  lineNumber = 193
  var string314 = new GraceString("def");
  var opresult316 = callmethod(var_accum, "==", [1], string314);
  var opresult318 = callmethod(opresult313, "|", [1], opresult316);
  lineNumber = 197
  lineNumber = 194
  var string319 = new GraceString("inherits");
  var opresult321 = callmethod(var_accum, "==", [1], string319);
  var opresult323 = callmethod(opresult318, "|", [1], opresult321);
  if (Grace_isTrue(opresult323)) {
  lineNumber = 195
  var call324 = callmethod(var_KeywordToken,"new", [1], var_accum);
  var_tok = call324;
  var if280 = call324;
}
  lineNumber = 197
  var call325 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 199
  lineNumber = 198
  var bool326 = new GraceBoolean(true)
  var_done = bool326;
  var if275 = bool326;
}
  lineNumber = 240
  lineNumber = 241
  lineNumber = 200
  var string328 = new GraceString("I");
  var opresult330 = callmethod(var_mode, "==", [1], string328);
  if (Grace_isTrue(opresult330)) {
  lineNumber = 201
  var call331 = callmethod(var_IdentifierToken,"new", [1], var_accum);
  var_tok = call331;
  lineNumber = 202
  var call332 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 204
  lineNumber = 203
  var bool333 = new GraceBoolean(true)
  var_done = bool333;
  var if327 = bool333;
  } else {
  lineNumber = 240
  lineNumber = 208
  lineNumber = 204
  var string335 = new GraceString("\"");
  var opresult337 = callmethod(var_mode, "==", [1], string335);
  if (Grace_isTrue(opresult337)) {
  lineNumber = 205
  var call338 = callmethod(var_StringToken,"new", [1], var_accum);
  var_tok = call338;
  lineNumber = 206
  var call339 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 208
  lineNumber = 207
  var bool340 = new GraceBoolean(true)
  var_done = bool340;
  var if334 = bool340;
  } else {
  lineNumber = 240
  lineNumber = 212
  lineNumber = 208
  var string342 = new GraceString("x");
  var opresult344 = callmethod(var_mode, "==", [1], string342);
  if (Grace_isTrue(opresult344)) {
  lineNumber = 209
  var call345 = callmethod(var_OctetsToken,"new", [1], var_accum);
  var_tok = call345;
  lineNumber = 210
  var call346 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 212
  lineNumber = 211
  var bool347 = new GraceBoolean(true)
  var_done = bool347;
  var if341 = bool347;
  } else {
  lineNumber = 240
  lineNumber = 216
  lineNumber = 212
  var string349 = new GraceString(",");
  var opresult351 = callmethod(var_mode, "==", [1], string349);
  if (Grace_isTrue(opresult351)) {
  lineNumber = 214
  lineNumber = 1
  lineNumber = 213
  var call352 = callmethod(var_CommaToken,"new", [0]);
  var_tok = call352;
  lineNumber = 214
  var call353 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 216
  lineNumber = 215
  var bool354 = new GraceBoolean(true)
  var_done = bool354;
  var if348 = bool354;
  } else {
  lineNumber = 240
  lineNumber = 220
  lineNumber = 216
  var string356 = new GraceString(".");
  var opresult358 = callmethod(var_mode, "==", [1], string356);
  if (Grace_isTrue(opresult358)) {
  lineNumber = 218
  lineNumber = 1
  lineNumber = 217
  var call359 = callmethod(var_DotToken,"new", [0]);
  var_tok = call359;
  lineNumber = 218
  var call360 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 220
  lineNumber = 219
  var bool361 = new GraceBoolean(true)
  var_done = bool361;
  var if355 = bool361;
  } else {
  lineNumber = 240
  lineNumber = 224
  lineNumber = 220
  var string363 = new GraceString("{");
  var opresult365 = callmethod(var_mode, "==", [1], string363);
  if (Grace_isTrue(opresult365)) {
  lineNumber = 222
  lineNumber = 1
  lineNumber = 221
  var call366 = callmethod(var_LBraceToken,"new", [0]);
  var_tok = call366;
  lineNumber = 222
  var call367 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 224
  lineNumber = 223
  var bool368 = new GraceBoolean(true)
  var_done = bool368;
  var if362 = bool368;
  } else {
  lineNumber = 240
  lineNumber = 228
  lineNumber = 224
  var string370 = new GraceString("}");
  var opresult372 = callmethod(var_mode, "==", [1], string370);
  if (Grace_isTrue(opresult372)) {
  lineNumber = 226
  lineNumber = 1
  lineNumber = 225
  var call373 = callmethod(var_RBraceToken,"new", [0]);
  var_tok = call373;
  lineNumber = 226
  var call374 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 228
  lineNumber = 227
  var bool375 = new GraceBoolean(true)
  var_done = bool375;
  var if369 = bool375;
  } else {
  lineNumber = 240
  lineNumber = 232
  lineNumber = 228
  var string377 = new GraceString("(");
  var opresult379 = callmethod(var_mode, "==", [1], string377);
  if (Grace_isTrue(opresult379)) {
  lineNumber = 230
  lineNumber = 1
  lineNumber = 229
  var call380 = callmethod(var_LParenToken,"new", [0]);
  var_tok = call380;
  lineNumber = 230
  var call381 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 232
  lineNumber = 231
  var bool382 = new GraceBoolean(true)
  var_done = bool382;
  var if376 = bool382;
  } else {
  lineNumber = 240
  lineNumber = 236
  lineNumber = 232
  var string384 = new GraceString(")");
  var opresult386 = callmethod(var_mode, "==", [1], string384);
  if (Grace_isTrue(opresult386)) {
  lineNumber = 234
  lineNumber = 1
  lineNumber = 233
  var call387 = callmethod(var_RParenToken,"new", [0]);
  var_tok = call387;
  lineNumber = 234
  var call388 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 236
  lineNumber = 235
  var bool389 = new GraceBoolean(true)
  var_done = bool389;
  var if383 = bool389;
  } else {
  lineNumber = 240
  lineNumber = 241
  lineNumber = 236
  var string391 = new GraceString("[");
  var opresult393 = callmethod(var_mode, "==", [1], string391);
  if (Grace_isTrue(opresult393)) {
  lineNumber = 238
  lineNumber = 1
  lineNumber = 237
  var call394 = callmethod(var_LSquareToken,"new", [0]);
  var_tok = call394;
  lineNumber = 238
  var call395 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 240
  lineNumber = 239
  var bool396 = new GraceBoolean(true)
  var_done = bool396;
  var if390 = bool396;
}
  var if383 = if390;
}
  var if376 = if383;
}
  var if369 = if376;
}
  var if362 = if369;
}
  var if355 = if362;
}
  var if348 = if355;
}
  var if341 = if348;
}
  var if334 = if341;
}
  var if327 = if334;
}
  lineNumber = 296
  lineNumber = 298
  lineNumber = 241
  var string398 = new GraceString("]");
  var opresult400 = callmethod(var_mode, "==", [1], string398);
  if (Grace_isTrue(opresult400)) {
  lineNumber = 243
  lineNumber = 1
  lineNumber = 242
  var call401 = callmethod(var_RSquareToken,"new", [0]);
  var_tok = call401;
  lineNumber = 243
  var call402 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 245
  lineNumber = 244
  var bool403 = new GraceBoolean(true)
  var_done = bool403;
  var if397 = bool403;
  } else {
  lineNumber = 296
  lineNumber = 249
  lineNumber = 245
  var string405 = new GraceString("<");
  var opresult407 = callmethod(var_mode, "==", [1], string405);
  if (Grace_isTrue(opresult407)) {
  lineNumber = 247
  lineNumber = 1
  lineNumber = 246
  var call408 = callmethod(var_LGenericToken,"new", [0]);
  var_tok = call408;
  lineNumber = 247
  var call409 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 249
  lineNumber = 248
  var bool410 = new GraceBoolean(true)
  var_done = bool410;
  var if404 = bool410;
  } else {
  lineNumber = 296
  lineNumber = 253
  lineNumber = 249
  var string412 = new GraceString(">");
  var opresult414 = callmethod(var_mode, "==", [1], string412);
  if (Grace_isTrue(opresult414)) {
  lineNumber = 251
  lineNumber = 1
  lineNumber = 250
  var call415 = callmethod(var_RGenericToken,"new", [0]);
  var_tok = call415;
  lineNumber = 251
  var call416 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 253
  lineNumber = 252
  var bool417 = new GraceBoolean(true)
  var_done = bool417;
  var if411 = bool417;
  } else {
  lineNumber = 296
  lineNumber = 257
  lineNumber = 253
  var string419 = new GraceString(";");
  var opresult421 = callmethod(var_mode, "==", [1], string419);
  if (Grace_isTrue(opresult421)) {
  lineNumber = 255
  lineNumber = 1
  lineNumber = 254
  var call422 = callmethod(var_SemicolonToken,"new", [0]);
  var_tok = call422;
  lineNumber = 255
  var call423 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 257
  lineNumber = 256
  var bool424 = new GraceBoolean(true)
  var_done = bool424;
  var if418 = bool424;
  } else {
  lineNumber = 296
  lineNumber = 274
  lineNumber = 257
  var string426 = new GraceString("m");
  var opresult428 = callmethod(var_mode, "==", [1], string426);
  if (Grace_isTrue(opresult428)) {
  lineNumber = 258
  var call429 = callmethod(var_NumToken,"new", [1], var_accum);
  var_tok = call429;
  lineNumber = 259
  lineNumber = 260
  var call430 = callmethod(this,"makeNumToken", [1], var_accum);
  var_tok = call430;
  lineNumber = 268
  lineNumber = 272
  lineNumber = 1
  lineNumber = 260
  var call432 = callmethod(var_tokens,"size", [0]);
  var opresult434 = callmethod(call432, ">", [1], new GraceNum(1));
  if (Grace_isTrue(opresult434)) {
  lineNumber = 268
  lineNumber = 271
  lineNumber = 1
  lineNumber = 271
  lineNumber = 1
  lineNumber = 261
  var call436 = callmethod(var_tokens,"last", [0]);
  var call437 = callmethod(call436,"kind", [0]);
  var string438 = new GraceString("dot");
  var opresult440 = callmethod(call437, "==", [1], string438);
  if (Grace_isTrue(opresult440)) {
  lineNumber = 262
  lineNumber = 1
  lineNumber = 262
  var call441 = callmethod(var_tokens,"pop", [0]);
  lineNumber = 268
  lineNumber = 270
  lineNumber = 1
  lineNumber = 270
  lineNumber = 1
  lineNumber = 263
  var call443 = callmethod(var_tokens,"last", [0]);
  var call444 = callmethod(call443,"kind", [0]);
  var string445 = new GraceString("num");
  var opresult447 = callmethod(call444, "==", [1], string445);
  if (Grace_isTrue(opresult447)) {
  lineNumber = 265
  lineNumber = 1
  lineNumber = 264
  var call448 = callmethod(var_tokens,"pop", [0]);
  var_tok = call448;
  lineNumber = 265
  lineNumber = 1
  lineNumber = 265
  var call449 = callmethod(var_tok,"value", [0]);
  var string450 = new GraceString(".");
  var opresult452 = callmethod(call449, "++", [1], string450);
  var opresult454 = callmethod(opresult452, "++", [1], var_accum);
  var call455 = callmethod(var_NumToken,"new", [1], opresult454);
  var_tok = call455;
  var if442 = call455;
  } else {
  lineNumber = 268
  lineNumber = 267
  var string456 = new GraceString("found .");
  var opresult458 = callmethod(string456, "++", [1], var_accum);
  lineNumber = 268
  var string459 = new GraceString(", expected term");
  var opresult461 = callmethod(opresult458, "++", [1], string459);
  lineNumber = 267
  var call462 = callmethod(var_util,"syntax_error", [1], opresult461);
  var if442 = call462;
}
  var if435 = if442;
}
  var if431 = if435;
}
  lineNumber = 272
  var call463 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 274
  lineNumber = 273
  var bool464 = new GraceBoolean(true)
  var_done = bool464;
  var if425 = bool464;
  } else {
  lineNumber = 296
  lineNumber = 285
  lineNumber = 274
  var string466 = new GraceString("o");
  var opresult468 = callmethod(var_mode, "==", [1], string466);
  if (Grace_isTrue(opresult468)) {
  lineNumber = 275
  var call469 = callmethod(var_OpToken,"new", [1], var_accum);
  var_tok = call469;
  lineNumber = 282
  lineNumber = 283
  lineNumber = 276
  var string471 = new GraceString("->");
  var opresult473 = callmethod(var_accum, "==", [1], string471);
  if (Grace_isTrue(opresult473)) {
  lineNumber = 278
  lineNumber = 1
  lineNumber = 277
  var call474 = callmethod(var_ArrowToken,"new", [0]);
  var_tok = call474;
  var if470 = call474;
  } else {
  lineNumber = 282
  lineNumber = 280
  lineNumber = 278
  var string476 = new GraceString(":=");
  var opresult478 = callmethod(var_accum, "==", [1], string476);
  if (Grace_isTrue(opresult478)) {
  lineNumber = 280
  lineNumber = 1
  lineNumber = 279
  var call479 = callmethod(var_BindToken,"new", [0]);
  var_tok = call479;
  var if475 = call479;
  } else {
  lineNumber = 282
  lineNumber = 283
  lineNumber = 280
  var string481 = new GraceString(":");
  var opresult483 = callmethod(var_accum, "==", [1], string481);
  if (Grace_isTrue(opresult483)) {
  lineNumber = 282
  lineNumber = 1
  lineNumber = 281
  var call484 = callmethod(var_ColonToken,"new", [0]);
  var_tok = call484;
  var if480 = call484;
}
  var if475 = if480;
}
  var if470 = if475;
}
  lineNumber = 283
  var call485 = callmethod(var_tokens,"push", [1], var_tok);
  lineNumber = 285
  lineNumber = 284
  var bool486 = new GraceBoolean(true)
  var_done = bool486;
  var if465 = bool486;
  } else {
  lineNumber = 296
  lineNumber = 288
  lineNumber = 285
  var string488 = new GraceString("d");
  var opresult490 = callmethod(var_mode, "==", [1], string488);
  if (Grace_isTrue(opresult490)) {
  lineNumber = 287
  lineNumber = 1
  lineNumber = 286
  var call491 = callmethod(var_accum,"size", [0]);
  var_indentLevel = call491;
  lineNumber = 288
  lineNumber = 287
  var bool492 = new GraceBoolean(true)
  var_done = bool492;
  var if487 = bool492;
  } else {
  lineNumber = 296
  lineNumber = 290
  lineNumber = 288
  var string494 = new GraceString("n");
  var opresult496 = callmethod(var_mode, "==", [1], string494);
  if (Grace_isTrue(opresult496)) {
  lineNumber = 290
  lineNumber = 289
  var bool497 = new GraceBoolean(true)
  var_done = bool497;
  var if493 = bool497;
  } else {
  lineNumber = 296
  lineNumber = 292
  lineNumber = 290
  var string499 = new GraceString("c");
  var opresult501 = callmethod(var_mode, "==", [1], string499);
  if (Grace_isTrue(opresult501)) {
  lineNumber = 292
  lineNumber = 291
  var bool502 = new GraceBoolean(true)
  var_done = bool502;
  var if498 = bool502;
  } else {
  lineNumber = 296
  lineNumber = 292
  if (Grace_isTrue(var_done)) {
  var if503 = undefined;
  } else {
  lineNumber = 296
  lineNumber = 295
  var string504 = new GraceString("Lexing error: no handler for mode ");
  var opresult506 = callmethod(string504, "++", [1], var_mode);
  lineNumber = 296
  var string507 = new GraceString(" with accum ");
  var opresult509 = callmethod(opresult506, "++", [1], string507);
  var opresult511 = callmethod(opresult509, "++", [1], var_accum);
  lineNumber = 295
  var call512 = callmethod(var_util,"syntax_error", [1], opresult511);
  var if503 = call512;
}
  var if498 = if503;
}
  var if493 = if498;
}
  var if487 = if493;
}
  var if465 = if487;
}
  var if425 = if465;
}
  var if418 = if425;
}
  var if411 = if418;
}
  var if404 = if411;
}
  var if397 = if404;
}
  var if266 = if397;
}
  lineNumber = 300
  lineNumber = 299
  var_startPosition = var_linePosition;
  return var_linePosition
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj262.methods["modechange"] = func264;
var func513 = function(argcv) {
  var curarg = 1;
  var var_str = arguments[curarg];
  curarg++;
  var var_base = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 304
  lineNumber = 303
  var string514 = new GraceString("0123456789abcdefghijklmnopqrstuvqxyz");
  var var_digits = string514;
  lineNumber = 305
  lineNumber = 304
  var var_val = new GraceNum(0);
  lineNumber = 318
  lineNumber = 305
  lineNumber = 318
  var block515 = Grace_allocObject();
  block515.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block515.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block515.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block515.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block515.receiver = this;
  block515.className = 'block<lexer:318>';
  block515.real = function(
var_c
) {
  lineNumber = 307
  lineNumber = 1
  lineNumber = 306
  var call516 = callmethod(var_c,"ord", [0]);
  var var_n = call516;
  lineNumber = 308
  lineNumber = 307
  var prod518 = callmethod(var_val, "*", [1], var_base);
  var_val = prod518;
  lineNumber = 309
  lineNumber = 308
  var var_inc = new GraceNum(0);
  lineNumber = 313
  lineNumber = 314
  lineNumber = 309
  var opresult521 = callmethod(var_n, ">=", [1], new GraceNum(48));
  lineNumber = 314
  lineNumber = 309
  var opresult523 = callmethod(var_n, "<=", [1], new GraceNum(57));
  var opresult525 = callmethod(opresult521, "&", [1], opresult523);
  if (Grace_isTrue(opresult525)) {
  lineNumber = 311
  lineNumber = 310
  var diff527 = callmethod(var_n, "-", [1], new GraceNum(48));
  var_inc = diff527;
  var if519 = diff527;
  } else {
  lineNumber = 313
  lineNumber = 312
  var diff529 = callmethod(var_n, "-", [1], new GraceNum(87));
  var_inc = diff529;
  var if519 = diff529;
}
  lineNumber = 315
  lineNumber = 317
  lineNumber = 314
  var opresult532 = callmethod(var_inc, ">=", [1], var_base);
  if (Grace_isTrue(opresult532)) {
  lineNumber = 315
  var string533 = new GraceString("no such digit '");
  var opresult535 = callmethod(string533, "++", [1], var_c);
  var string536 = new GraceString("' in base ");
  var opresult538 = callmethod(opresult535, "++", [1], string536);
  var opresult540 = callmethod(opresult538, "++", [1], var_base);
  var string541 = new GraceString("");
  var opresult543 = callmethod(opresult540, "++", [1], string541);
  var call544 = callmethod(var_util,"syntax_error", [1], opresult543);
  var if530 = call544;
}
  lineNumber = 318
  lineNumber = 317
  var opresult546 = callmethod(var_val, "+", [1], var_inc);
  var_val = opresult546;
  return opresult546;
};
  var call547 = callmethod(Grace_prelude,"for()do", [1, 1], var_str, block515);
  lineNumber = 319
  return var_val
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj262.methods["fromBase"] = func513;
var func548 = function(argcv) {
  var curarg = 1;
  var var_accum = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 323
  lineNumber = 322
  var var_base = new GraceNum(10);
  lineNumber = 324
  lineNumber = 323
  var string549 = new GraceString("");
  var var_sofar = string549;
  lineNumber = 333
  lineNumber = 324
  lineNumber = 333
  var block550 = Grace_allocObject();
  block550.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block550.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block550.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block550.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block550.receiver = this;
  block550.className = 'block<lexer:333>';
  block550.real = function(
var_c
) {
  lineNumber = 334
  lineNumber = 325
  var string552 = new GraceString("x");
  var opresult554 = callmethod(var_c, "==", [1], string552);
  if (Grace_isTrue(opresult554)) {
  lineNumber = 327
  lineNumber = 1
  lineNumber = 326
  var call555 = callmethod(var_sofar,"asNumber", [0]);
  var_base = call555;
  lineNumber = 329
  lineNumber = 330
  lineNumber = 327
  var opresult558 = callmethod(var_base, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult558)) {
  lineNumber = 329
  lineNumber = 328
  var_base = new GraceNum(16);
  var if556 = new GraceNum(16);
}
  lineNumber = 331
  lineNumber = 330
  var string559 = new GraceString("");
  var_sofar = string559;
  var if551 = string559;
  } else {
  lineNumber = 333
  lineNumber = 332
  var opresult561 = callmethod(var_sofar, "++", [1], var_c);
  var_sofar = opresult561;
  var if551 = opresult561;
}
  return if551;
};
  var call562 = callmethod(Grace_prelude,"for()do", [1, 1], var_accum, block550);
  lineNumber = 335
  lineNumber = 1
  lineNumber = 335
  var call563 = callmethod(this,"fromBase", [2], var_sofar, var_base);
  var call564 = callmethod(call563,"asString", [0]);
  var call565 = callmethod(var_NumToken,"new", [1], call564);
  return call565
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj262.methods["makeNumToken"] = func548;
var func566 = function(argcv) {
  var curarg = 1;
  var var_ov = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 346
  lineNumber = 341
  var call568 = callmethod(var_unicode,"isLetter", [1], var_ov);
  var call569 = callmethod(var_unicode,"isNumber", [1], var_ov);
  var opresult571 = callmethod(call568, "|", [1], call569);
  lineNumber = 342
  var opresult573 = callmethod(var_ov, "==", [1], new GraceNum(95));
  var opresult575 = callmethod(opresult571, "|", [1], opresult573);
  lineNumber = 341
  lineNumber = 342
  var opresult577 = callmethod(var_ov, "==", [1], new GraceNum(39));
  var opresult579 = callmethod(opresult575, "|", [1], opresult577);
  if (Grace_isTrue(opresult579)) {
  lineNumber = 344
  var bool580 = new GraceBoolean(true)
  var if567 = bool580;
  } else {
  lineNumber = 346
  var bool581 = new GraceBoolean(false)
  var if567 = bool581;
}
  return if567
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj262.methods["isidentifierchar"] = func566;
var func582 = function(argcv) {
  var curarg = 1;
  var var_c = arguments[curarg];
  curarg++;
  var var_ordval = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 353
  lineNumber = 352
  var bool583 = new GraceBoolean(false)
  var var_ret = bool583;
  lineNumber = 359
  lineNumber = 360
  lineNumber = 353
  var string585 = new GraceString("-");
  var opresult587 = callmethod(var_c, "==", [1], string585);
  lineNumber = 360
  lineNumber = 353
  var string588 = new GraceString("&");
  var opresult590 = callmethod(var_c, "==", [1], string588);
  var opresult592 = callmethod(opresult587, "|", [1], opresult590);
  lineNumber = 360
  lineNumber = 353
  var string593 = new GraceString("|");
  var opresult595 = callmethod(var_c, "==", [1], string593);
  var opresult597 = callmethod(opresult592, "|", [1], opresult595);
  lineNumber = 360
  lineNumber = 353
  var string598 = new GraceString(":");
  var opresult600 = callmethod(var_c, "==", [1], string598);
  var opresult602 = callmethod(opresult597, "|", [1], opresult600);
  lineNumber = 360
  lineNumber = 354
  var string603 = new GraceString("%");
  var opresult605 = callmethod(var_c, "==", [1], string603);
  var opresult607 = callmethod(opresult602, "|", [1], opresult605);
  lineNumber = 360
  lineNumber = 354
  var string608 = new GraceString("^");
  var opresult610 = callmethod(var_c, "==", [1], string608);
  var opresult612 = callmethod(opresult607, "|", [1], opresult610);
  lineNumber = 360
  lineNumber = 355
  var string613 = new GraceString("*");
  var opresult615 = callmethod(var_c, "==", [1], string613);
  var opresult617 = callmethod(opresult612, "|", [1], opresult615);
  lineNumber = 360
  lineNumber = 355
  var string618 = new GraceString("/");
  var opresult620 = callmethod(var_c, "==", [1], string618);
  var opresult622 = callmethod(opresult617, "|", [1], opresult620);
  lineNumber = 360
  lineNumber = 355
  var string623 = new GraceString("+");
  var opresult625 = callmethod(var_c, "==", [1], string623);
  var opresult627 = callmethod(opresult622, "|", [1], opresult625);
  lineNumber = 360
  lineNumber = 355
  var string628 = new GraceString("!");
  var opresult630 = callmethod(var_c, "==", [1], string628);
  var opresult632 = callmethod(opresult627, "|", [1], opresult630);
  if (Grace_isTrue(opresult632)) {
  lineNumber = 357
  lineNumber = 356
  var bool633 = new GraceBoolean(true)
  var_ret = bool633;
  var if584 = bool633;
  } else {
  lineNumber = 359
  lineNumber = 357
  var call635 = callmethod(var_unicode,"isSymbolMathematical", [1], var_ordval);
  if (Grace_isTrue(call635)) {
  lineNumber = 359
  lineNumber = 358
  var bool636 = new GraceBoolean(true)
  var_ret = bool636;
  var if634 = bool636;
}
  var if584 = if634;
}
  lineNumber = 360
  return var_ret
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj262.methods["isoperatorchar"] = func582;
var func637 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 366
  lineNumber = 1
  lineNumber = 366
  var call638 = callmethod(var_util,"infile", [0]);
  lineNumber = 367
  var call639 = callmethod(this,"lexfile", [1], call638);
  return call639
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj262.methods["lexinput"] = func637;
var func640 = function(argcv) {
  var curarg = 1;
  var var_file = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 370
  var string641 = new GraceString("reading source.");
  var call642 = callmethod(var_util,"log_verbose", [1], string641);
  lineNumber = 373
  lineNumber = 1
  lineNumber = 371
  var call643 = callmethod(var_file,"read", [0]);
  var var_input = call643;
  lineNumber = 374
  var array644 = new GraceList([
]);

  var var_tokens = array644;
  lineNumber = 375
  lineNumber = 374
  var string645 = new GraceString("n");
  var var_mode = string645;
  lineNumber = 376
  lineNumber = 375
  var var_newmode = var_mode;
  lineNumber = 377
  lineNumber = 376
  var bool646 = new GraceBoolean(false)
  var var_instr = bool646;
  lineNumber = 378
  lineNumber = 377
  var bool647 = new GraceBoolean(false)
  var var_inBackticks = bool647;
  lineNumber = 379
  lineNumber = 378
  var bool648 = new GraceBoolean(false)
  var var_backtickIdent = bool648;
  lineNumber = 380
  lineNumber = 379
  var string649 = new GraceString("");
  var var_accum = string649;
  lineNumber = 381
  lineNumber = 380
  var bool650 = new GraceBoolean(false)
  var var_escaped = bool650;
  lineNumber = 382
  lineNumber = 381
  var string651 = new GraceString("");
  var var_prev = string651;
  lineNumber = 383
  lineNumber = 382
  var var_unichars = new GraceNum(0);
  lineNumber = 384
  lineNumber = 383
  var var_codepoint = new GraceNum(0);
  lineNumber = 385
  lineNumber = 384
  var var_interpdepth = new GraceNum(0);
  lineNumber = 386
  lineNumber = 385
  var bool652 = new GraceBoolean(false)
  var var_interpString = bool652;
  lineNumber = 387
  lineNumber = 386
  var bool653 = new GraceBoolean(true)
  var var_atStart = bool653;
  lineNumber = 388
  lineNumber = 387
  var_linePosition = new GraceNum(0);
  lineNumber = 388
  var string654 = new GraceString("lexing.");
  var call655 = callmethod(var_util,"log_verbose", [1], string654);
  lineNumber = 657
  lineNumber = 389
  lineNumber = 657
  var block656 = Grace_allocObject();
  block656.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block656.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block656.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block656.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block656.receiver = this;
  block656.className = 'block<lexer:657>';
  block656.real = function(
var_c
) {
  lineNumber = 391
  lineNumber = 390
  var opresult658 = callmethod(var_linePosition, "+", [1], new GraceNum(1));
  var_linePosition = opresult658;
  lineNumber = 391
  var call659 = callmethod(var_util,"setPosition", [2], var_lineNumber, var_linePosition);
  lineNumber = 393
  lineNumber = 392
  var string660 = new GraceString("");
  var var_ct = string660;
  lineNumber = 394
  lineNumber = 1
  lineNumber = 393
  var call661 = callmethod(var_c,"ord", [0]);
  var var_ordval = call661;
  lineNumber = 399
  lineNumber = 394
  var call663 = callmethod(var_unicode,"isSeparator", [1], var_ordval);
  var opresult665 = callmethod(var_ordval, "/=", [1], new GraceNum(32));
  var opresult667 = callmethod(call663, "&", [1], opresult665);
  lineNumber = 395
  var opresult669 = callmethod(var_ordval, "/=", [1], new GraceNum(8232));
  var opresult671 = callmethod(opresult667, "&", [1], opresult669);
  lineNumber = 394
  lineNumber = 395
  var opresult673 = callmethod(var_ordval, "==", [1], new GraceNum(9));
  var opresult675 = callmethod(opresult671, "|", [1], opresult673);
  if (Grace_isTrue(opresult675)) {
  lineNumber = 399
  lineNumber = 398
  var string676 = new GraceString("illegal whitespace in input: ");
  lineNumber = 399
  var string677 = new GraceString("");
  var opresult679 = callmethod(string677, "++", [1], var_ordval);
  var string680 = new GraceString(", ");
  var opresult682 = callmethod(opresult679, "++", [1], string680);
  var call683 = callmethod(var_unicode,"name", [1], var_c);
  var opresult685 = callmethod(opresult682, "++", [1], call683);
  var string686 = new GraceString("");
  var opresult688 = callmethod(opresult685, "++", [1], string686);
  var opresult690 = callmethod(string676, "++", [1], opresult688);
  lineNumber = 398
  var call691 = callmethod(var_util,"syntax_error", [1], opresult690);
  var if662 = call691;
}
  lineNumber = 407
  lineNumber = 401
  var call693 = callmethod(var_unicode,"isControl", [1], var_ordval);
  var opresult695 = callmethod(var_ordval, "/=", [1], new GraceNum(10));
  var opresult697 = callmethod(call693, "&", [1], opresult695);
  lineNumber = 402
  var opresult699 = callmethod(var_ordval, "/=", [1], new GraceNum(13));
  var opresult701 = callmethod(opresult697, "&", [1], opresult699);
  if (Grace_isTrue(opresult701)) {
  lineNumber = 407
  lineNumber = 405
  var string702 = new GraceString("illegal control character in ");
  lineNumber = 407
  lineNumber = 406
  var string703 = new GraceString("input: #");
  var opresult705 = callmethod(string703, "++", [1], var_ordval);
  var string706 = new GraceString(" on line ");
  var opresult708 = callmethod(opresult705, "++", [1], string706);
  var opresult710 = callmethod(opresult708, "++", [1], var_lineNumber);
  var string711 = new GraceString("");
  var opresult713 = callmethod(opresult710, "++", [1], string711);
  var opresult715 = callmethod(string702, "++", [1], opresult713);
  lineNumber = 407
  var string716 = new GraceString(" character ");
  var opresult718 = callmethod(string716, "++", [1], var_linePosition);
  var string719 = new GraceString(".");
  var opresult721 = callmethod(opresult718, "++", [1], string719);
  var opresult723 = callmethod(opresult715, "++", [1], opresult721);
  lineNumber = 405
  var call724 = callmethod(var_util,"syntax_error", [1], opresult723);
  var if692 = call724;
}
  lineNumber = 415
  lineNumber = 417
  lineNumber = 409
  lineNumber = 417
  lineNumber = 409
  var opresult727 = callmethod(var_linePosition, "==", [1], new GraceNum(1));
  var opresult729 = callmethod(var_atStart, "&", [1], opresult727);
  if (Grace_isTrue(opresult729)) {
  lineNumber = 415
  lineNumber = 416
  lineNumber = 410
  var string731 = new GraceString("#");
  var opresult733 = callmethod(var_c, "==", [1], string731);
  if (Grace_isTrue(opresult733)) {
  lineNumber = 412
  lineNumber = 411
  var string734 = new GraceString("c");
  var_mode = string734;
  lineNumber = 413
  lineNumber = 412
  var_newmode = var_mode;
  var if730 = var_mode;
  } else {
  lineNumber = 415
  lineNumber = 414
  var bool735 = new GraceBoolean(false)
  var_atStart = bool735;
  var if730 = bool735;
}
  var if725 = if730;
}
  lineNumber = 492
  lineNumber = 494
  lineNumber = 417
  var opresult738 = callmethod(var_instr, "|", [1], var_inBackticks);
  if (Grace_isTrue(opresult738)) {
  var if736 = undefined;
  } else {
  lineNumber = 492
  lineNumber = 494
  lineNumber = 419
  var string740 = new GraceString("c");
  var opresult742 = callmethod(var_mode, "/=", [1], string740);
  if (Grace_isTrue(opresult742)) {
  lineNumber = 423
  lineNumber = 424
  lineNumber = 421
  var string744 = new GraceString(" ");
  var opresult746 = callmethod(var_c, "==", [1], string744);
  lineNumber = 424
  lineNumber = 421
  var string747 = new GraceString("d");
  var opresult749 = callmethod(var_mode, "/=", [1], string747);
  var opresult751 = callmethod(opresult746, "&", [1], opresult749);
  if (Grace_isTrue(opresult751)) {
  lineNumber = 423
  lineNumber = 422
  var string752 = new GraceString("n");
  var_newmode = string752;
  var if743 = string752;
}
  lineNumber = 432
  lineNumber = 434
  lineNumber = 424
  var string754 = new GraceString("\"");
  var opresult756 = callmethod(var_c, "==", [1], string754);
  if (Grace_isTrue(opresult756)) {
  lineNumber = 427
  lineNumber = 426
  var string757 = new GraceString("\"");
  var_newmode = string757;
  lineNumber = 428
  lineNumber = 427
  var bool758 = new GraceBoolean(true)
  var_instr = bool758;
  lineNumber = 432
  lineNumber = 433
  lineNumber = 428
  var string760 = new GraceString("x");
  var opresult762 = callmethod(var_prev, "==", [1], string760);
  if (Grace_isTrue(opresult762)) {
  lineNumber = 431
  lineNumber = 430
  var string763 = new GraceString("x");
  var_newmode = string763;
  lineNumber = 432
  lineNumber = 431
  var string764 = new GraceString("n");
  var_mode = string764;
  var if759 = string764;
}
  var if753 = if759;
}
  lineNumber = 437
  lineNumber = 438
  lineNumber = 434
  var string766 = new GraceString("`");
  var opresult768 = callmethod(var_c, "==", [1], string766);
  if (Grace_isTrue(opresult768)) {
  lineNumber = 436
  lineNumber = 435
  var string769 = new GraceString("I");
  var_newmode = string769;
  lineNumber = 437
  lineNumber = 436
  var bool770 = new GraceBoolean(true)
  var_inBackticks = bool770;
  var if765 = bool770;
}
  lineNumber = 438
  lineNumber = 439
  var call771 = callmethod(this,"isidentifierchar", [1], var_ordval);
  var_ct = call771;
  lineNumber = 441
  lineNumber = 439
  if (Grace_isTrue(var_ct)) {
  lineNumber = 441
  lineNumber = 440
  var string773 = new GraceString("i");
  var_newmode = string773;
  var if772 = string773;
}
  lineNumber = 443
  lineNumber = 442
  var opresult775 = callmethod(var_ordval, ">=", [1], new GraceNum(48));
  lineNumber = 443
  lineNumber = 442
  var opresult777 = callmethod(var_ordval, "<=", [1], new GraceNum(57));
  var opresult779 = callmethod(opresult775, "&", [1], opresult777);
  var_ct = opresult779;
  lineNumber = 445
  lineNumber = 446
  lineNumber = 443
  lineNumber = 446
  lineNumber = 443
  var string781 = new GraceString("i");
  var opresult783 = callmethod(var_mode, "/=", [1], string781);
  var opresult785 = callmethod(var_ct, "&", [1], opresult783);
  if (Grace_isTrue(opresult785)) {
  lineNumber = 445
  lineNumber = 444
  var string786 = new GraceString("m");
  var_newmode = string786;
  var if780 = string786;
}
  lineNumber = 448
  lineNumber = 449
  lineNumber = 446
  var opresult789 = callmethod(var_ordval, ">=", [1], new GraceNum(97));
  lineNumber = 449
  lineNumber = 446
  var opresult791 = callmethod(var_ordval, "<=", [1], new GraceNum(122));
  var opresult793 = callmethod(opresult789, "&", [1], opresult791);
  lineNumber = 449
  lineNumber = 446
  var string794 = new GraceString("m");
  var opresult796 = callmethod(var_mode, "==", [1], string794);
  var opresult798 = callmethod(opresult793, "&", [1], opresult796);
  if (Grace_isTrue(opresult798)) {
  lineNumber = 448
  lineNumber = 447
  var string799 = new GraceString("m");
  var_newmode = string799;
  var if787 = string799;
}
  lineNumber = 459
  lineNumber = 460
  lineNumber = 449
  var string801 = new GraceString("i");
  var opresult803 = callmethod(var_mode, "==", [1], string801);
  lineNumber = 460
  lineNumber = 449
  var string804 = new GraceString("<");
  var opresult806 = callmethod(var_c, "==", [1], string804);
  var opresult808 = callmethod(opresult803, "&", [1], opresult806);
  if (Grace_isTrue(opresult808)) {
  lineNumber = 451
  lineNumber = 450
  var string809 = new GraceString("<");
  var_newmode = string809;
  var if800 = string809;
  } else {
  lineNumber = 459
  lineNumber = 457
  lineNumber = 451
  var string811 = new GraceString("i");
  var opresult813 = callmethod(var_mode, "==", [1], string811);
  lineNumber = 457
  lineNumber = 451
  var string814 = new GraceString(">");
  var opresult816 = callmethod(var_mode, "==", [1], string814);
  var opresult818 = callmethod(opresult813, "|", [1], opresult816);
  lineNumber = 457
  lineNumber = 452
  var string819 = new GraceString(">");
  var opresult821 = callmethod(var_c, "==", [1], string819);
  var opresult823 = callmethod(opresult818, "&", [1], opresult821);
  if (Grace_isTrue(opresult823)) {
  lineNumber = 454
  lineNumber = 456
  lineNumber = 453
  var string825 = new GraceString(">");
  var opresult827 = callmethod(var_mode, "==", [1], string825);
  if (Grace_isTrue(opresult827)) {
  lineNumber = 454
  lineNumber = 455
  var call828 = callmethod(this,"modechange", [3], var_tokens, var_mode, var_accum);
  var if824 = call828;
}
  lineNumber = 457
  lineNumber = 456
  var string829 = new GraceString(">");
  var_newmode = string829;
  var if810 = string829;
  } else {
  lineNumber = 459
  lineNumber = 457
  lineNumber = 460
  var call831 = callmethod(this,"isoperatorchar", [2], var_c, var_ordval);
  if (Grace_isTrue(call831)) {
  lineNumber = 459
  lineNumber = 458
  var string832 = new GraceString("o");
  var_newmode = string832;
  var if830 = string832;
}
  var if810 = if830;
}
  var if800 = if810;
}
  lineNumber = 464
  lineNumber = 465
  lineNumber = 460
  var string834 = new GraceString("(");
  var opresult836 = callmethod(var_c, "==", [1], string834);
  lineNumber = 465
  lineNumber = 460
  var string837 = new GraceString(")");
  var opresult839 = callmethod(var_c, "==", [1], string837);
  var opresult841 = callmethod(opresult836, "|", [1], opresult839);
  lineNumber = 465
  lineNumber = 460
  var string842 = new GraceString(",");
  var opresult844 = callmethod(var_c, "==", [1], string842);
  var opresult846 = callmethod(opresult841, "|", [1], opresult844);
  lineNumber = 465
  lineNumber = 460
  var string847 = new GraceString(".");
  var opresult849 = callmethod(var_c, "==", [1], string847);
  var opresult851 = callmethod(opresult846, "|", [1], opresult849);
  lineNumber = 465
  lineNumber = 461
  var string852 = new GraceString("{");
  var opresult854 = callmethod(var_c, "==", [1], string852);
  var opresult856 = callmethod(opresult851, "|", [1], opresult854);
  lineNumber = 465
  lineNumber = 461
  var string857 = new GraceString("}");
  var opresult859 = callmethod(var_c, "==", [1], string857);
  var opresult861 = callmethod(opresult856, "|", [1], opresult859);
  lineNumber = 465
  lineNumber = 461
  var string862 = new GraceString("[");
  var opresult864 = callmethod(var_c, "==", [1], string862);
  var opresult866 = callmethod(opresult861, "|", [1], opresult864);
  lineNumber = 465
  lineNumber = 461
  var string867 = new GraceString("]");
  var opresult869 = callmethod(var_c, "==", [1], string867);
  var opresult871 = callmethod(opresult866, "|", [1], opresult869);
  lineNumber = 465
  lineNumber = 462
  var string872 = new GraceString(";");
  var opresult874 = callmethod(var_c, "==", [1], string872);
  var opresult876 = callmethod(opresult871, "|", [1], opresult874);
  if (Grace_isTrue(opresult876)) {
  lineNumber = 464
  lineNumber = 463
  var_newmode = var_c;
  var if833 = var_c;
}
  lineNumber = 469
  lineNumber = 470
  lineNumber = 465
  var string878 = new GraceString(".");
  var opresult880 = callmethod(var_c, "==", [1], string878);
  lineNumber = 470
  lineNumber = 465
  var string881 = new GraceString(".");
  var opresult883 = callmethod(var_accum, "==", [1], string881);
  var opresult885 = callmethod(opresult880, "&", [1], opresult883);
  if (Grace_isTrue(opresult885)) {
  lineNumber = 468
  lineNumber = 467
  var string886 = new GraceString("o");
  var_mode = string886;
  lineNumber = 469
  lineNumber = 468
  var_newmode = var_mode;
  var if877 = var_mode;
}
  lineNumber = 474
  lineNumber = 475
  lineNumber = 470
  var string888 = new GraceString("/");
  var opresult890 = callmethod(var_c, "==", [1], string888);
  lineNumber = 475
  lineNumber = 470
  var string891 = new GraceString("/");
  var opresult893 = callmethod(var_accum, "==", [1], string891);
  var opresult895 = callmethod(opresult890, "&", [1], opresult893);
  if (Grace_isTrue(opresult895)) {
  lineNumber = 473
  lineNumber = 472
  var string896 = new GraceString("c");
  var_mode = string896;
  lineNumber = 474
  lineNumber = 473
  var_newmode = var_mode;
  var if887 = var_mode;
}
  lineNumber = 483
  lineNumber = 477
  lineNumber = 476
  lineNumber = 486
  lineNumber = 475
  var opresult899 = callmethod(var_newmode, "==", [1], var_mode);
  lineNumber = 486
  lineNumber = 475
  var string900 = new GraceString("n");
  var opresult902 = callmethod(var_mode, "==", [1], string900);
  var opresult904 = callmethod(opresult899, "&", [1], opresult902);
  lineNumber = 476
  lineNumber = 1
  lineNumber = 476
  var call905 = callmethod(var_unicode,"isSeparator", [1], var_ordval);
  var call906 = callmethod(call905,"not", [0]);
  var opresult908 = callmethod(opresult904, "&", [1], call906);
  lineNumber = 477
  lineNumber = 1
  lineNumber = 477
  var call909 = callmethod(var_unicode,"isControl", [1], var_ordval);
  var call910 = callmethod(call909,"not", [0]);
  var opresult912 = callmethod(opresult908, "&", [1], call910);
  if (Grace_isTrue(opresult912)) {
  lineNumber = 483
  lineNumber = 478
  lineNumber = 1
  lineNumber = 478
  var call914 = callmethod(var_unicode,"isSeparator", [1], var_ordval);
  var call915 = callmethod(call914,"not", [0]);
  lineNumber = 479
  var opresult917 = callmethod(var_ordval, "/=", [1], new GraceNum(10));
  var opresult919 = callmethod(call915, "&", [1], opresult917);
  lineNumber = 478
  lineNumber = 479
  var opresult921 = callmethod(var_ordval, "/=", [1], new GraceNum(13));
  var opresult923 = callmethod(opresult919, "&", [1], opresult921);
  lineNumber = 478
  lineNumber = 480
  var opresult925 = callmethod(var_ordval, "/=", [1], new GraceNum(32));
  var opresult927 = callmethod(opresult923, "&", [1], opresult925);
  if (Grace_isTrue(opresult927)) {
  lineNumber = 483
  lineNumber = 481
  var string928 = new GraceString("unknown character in ");
  lineNumber = 483
  lineNumber = 482
  var string929 = new GraceString("input: #");
  var opresult931 = callmethod(string929, "++", [1], var_ordval);
  var string932 = new GraceString("");
  var opresult934 = callmethod(opresult931, "++", [1], string932);
  var opresult936 = callmethod(string928, "++", [1], opresult934);
  lineNumber = 483
  var string937 = new GraceString(" '");
  var opresult939 = callmethod(string937, "++", [1], var_c);
  var string940 = new GraceString("', ");
  var opresult942 = callmethod(opresult939, "++", [1], string940);
  var call943 = callmethod(var_unicode,"name", [1], var_c);
  var opresult945 = callmethod(opresult942, "++", [1], call943);
  var string946 = new GraceString("");
  var opresult948 = callmethod(opresult945, "++", [1], string946);
  var opresult950 = callmethod(opresult936, "++", [1], opresult948);
  lineNumber = 481
  var call951 = callmethod(var_util,"syntax_error", [1], opresult950);
  var if913 = call951;
}
  var if897 = if913;
}
  lineNumber = 492
  lineNumber = 493
  lineNumber = 486
  var string953 = new GraceString(".");
  var opresult955 = callmethod(var_c, "==", [1], string953);
  lineNumber = 493
  lineNumber = 486
  var string956 = new GraceString("..");
  var opresult958 = callmethod(var_accum, "==", [1], string956);
  var opresult960 = callmethod(opresult955, "&", [1], opresult958);
  if (Grace_isTrue(opresult960)) {
  lineNumber = 489
  lineNumber = 488
  var string961 = new GraceString("n");
  var_mode = string961;
  lineNumber = 490
  lineNumber = 489
  var_newmode = var_mode;
  lineNumber = 490
  var string962 = new GraceString("i");
  var string963 = new GraceString("...");
  lineNumber = 491
  var call964 = callmethod(this,"modechange", [3], var_tokens, string962, string963);
  lineNumber = 492
  lineNumber = 491
  var string965 = new GraceString("");
  var_accum = string965;
  var if952 = string965;
}
  var if739 = if952;
}
  var if736 = if739;
}
  lineNumber = 498
  lineNumber = 499
  lineNumber = 494
  var string967 = new GraceString("x");
  var opresult969 = callmethod(var_mode, "==", [1], string967);
  lineNumber = 499
  lineNumber = 494
  var string970 = new GraceString("\"");
  var opresult972 = callmethod(var_c, "==", [1], string970);
  var opresult974 = callmethod(opresult969, "&", [1], opresult972);
  lineNumber = 499
  lineNumber = 1
  lineNumber = 494
  var call975 = callmethod(var_escaped,"not", [0]);
  var opresult977 = callmethod(opresult974, "&", [1], call975);
  if (Grace_isTrue(opresult977)) {
  lineNumber = 497
  lineNumber = 496
  var string978 = new GraceString("n");
  var_newmode = string978;
  lineNumber = 498
  lineNumber = 497
  var bool979 = new GraceBoolean(false)
  var_instr = bool979;
  var if966 = bool979;
}
  lineNumber = 508
  lineNumber = 510
  lineNumber = 499
  var string981 = new GraceString("\"");
  var opresult983 = callmethod(var_mode, "==", [1], string981);
  lineNumber = 510
  lineNumber = 499
  var string984 = new GraceString("\"");
  var opresult986 = callmethod(var_c, "==", [1], string984);
  var opresult988 = callmethod(opresult983, "&", [1], opresult986);
  lineNumber = 510
  lineNumber = 1
  lineNumber = 499
  var call989 = callmethod(var_escaped,"not", [0]);
  var opresult991 = callmethod(opresult988, "&", [1], call989);
  if (Grace_isTrue(opresult991)) {
  lineNumber = 502
  lineNumber = 501
  var string992 = new GraceString("n");
  var_newmode = string992;
  lineNumber = 503
  lineNumber = 502
  var bool993 = new GraceBoolean(false)
  var_instr = bool993;
  lineNumber = 508
  lineNumber = 503
  if (Grace_isTrue(var_interpString)) {
  lineNumber = 504
  lineNumber = 505
  var call995 = callmethod(this,"modechange", [3], var_tokens, var_mode, var_accum);
  var string996 = new GraceString(")");
  var string997 = new GraceString(")");
  lineNumber = 506
  var call998 = callmethod(this,"modechange", [3], var_tokens, string996, string997);
  lineNumber = 507
  lineNumber = 506
  var_mode = var_newmode;
  lineNumber = 508
  lineNumber = 507
  var bool999 = new GraceBoolean(false)
  var_interpString = bool999;
  var if994 = bool999;
}
  var if980 = if994;
}
  lineNumber = 515
  lineNumber = 516
  lineNumber = 510
  var string1001 = new GraceString("I");
  var opresult1003 = callmethod(var_mode, "==", [1], string1001);
  var opresult1005 = callmethod(opresult1003, "&", [1], var_inBackticks);
  lineNumber = 516
  lineNumber = 510
  var string1006 = new GraceString("`");
  var opresult1008 = callmethod(var_c, "==", [1], string1006);
  var opresult1010 = callmethod(opresult1005, "&", [1], opresult1008);
  if (Grace_isTrue(opresult1010)) {
  lineNumber = 513
  lineNumber = 512
  var string1011 = new GraceString("n");
  var_newmode = string1011;
  lineNumber = 514
  lineNumber = 513
  var bool1012 = new GraceBoolean(false)
  var_inBackticks = bool1012;
  lineNumber = 515
  lineNumber = 514
  var bool1013 = new GraceBoolean(true)
  var_backtickIdent = bool1013;
  var if1000 = bool1013;
}
  lineNumber = 639
  lineNumber = 640
  lineNumber = 516
  var opresult1016 = callmethod(var_newmode, "/=", [1], var_mode);
  if (Grace_isTrue(opresult1016)) {
  lineNumber = 519
  lineNumber = 520
  var call1017 = callmethod(this,"modechange", [3], var_tokens, var_mode, var_accum);
  lineNumber = 526
  lineNumber = 527
  lineNumber = 520
  var string1019 = new GraceString("}");
  var opresult1021 = callmethod(var_newmode, "==", [1], string1019);
  lineNumber = 527
  lineNumber = 520
  var opresult1023 = callmethod(var_interpdepth, ">", [1], new GraceNum(0));
  var opresult1025 = callmethod(opresult1021, "&", [1], opresult1023);
  if (Grace_isTrue(opresult1025)) {
  lineNumber = 521
  var string1026 = new GraceString(")");
  var string1027 = new GraceString(")");
  lineNumber = 522
  var call1028 = callmethod(this,"modechange", [3], var_tokens, string1026, string1027);
  var string1029 = new GraceString("o");
  var string1030 = new GraceString("++");
  lineNumber = 523
  var call1031 = callmethod(this,"modechange", [3], var_tokens, string1029, string1030);
  lineNumber = 524
  lineNumber = 523
  var string1032 = new GraceString("\"");
  var_newmode = string1032;
  lineNumber = 525
  lineNumber = 524
  var bool1033 = new GraceBoolean(true)
  var_instr = bool1033;
  lineNumber = 526
  lineNumber = 525
  var diff1035 = callmethod(var_interpdepth, "-", [1], new GraceNum(1));
  var_interpdepth = diff1035;
  var if1018 = diff1035;
}
  lineNumber = 528
  lineNumber = 527
  var_mode = var_newmode;
  lineNumber = 535
  lineNumber = 536
  lineNumber = 528
  var opresult1038 = callmethod(var_instr, "|", [1], var_inBackticks);
  if (Grace_isTrue(opresult1038)) {
  lineNumber = 533
  lineNumber = 532
  var string1039 = new GraceString("");
  var_accum = string1039;
  var if1036 = string1039;
  } else {
  lineNumber = 535
  lineNumber = 534
  var_accum = var_c;
  var if1036 = var_c;
}
  lineNumber = 543
  lineNumber = 544
  lineNumber = 536
  var string1041 = new GraceString("(");
  var opresult1043 = callmethod(var_mode, "==", [1], string1041);
  lineNumber = 544
  lineNumber = 536
  var string1044 = new GraceString(")");
  var opresult1046 = callmethod(var_mode, "==", [1], string1044);
  var opresult1048 = callmethod(opresult1043, "|", [1], opresult1046);
  lineNumber = 544
  lineNumber = 536
  var string1049 = new GraceString("[");
  var opresult1051 = callmethod(var_mode, "==", [1], string1049);
  var opresult1053 = callmethod(opresult1048, "|", [1], opresult1051);
  lineNumber = 544
  lineNumber = 537
  var string1054 = new GraceString("]");
  var opresult1056 = callmethod(var_mode, "==", [1], string1054);
  var opresult1058 = callmethod(opresult1053, "|", [1], opresult1056);
  lineNumber = 544
  lineNumber = 537
  var string1059 = new GraceString("{");
  var opresult1061 = callmethod(var_mode, "==", [1], string1059);
  var opresult1063 = callmethod(opresult1058, "|", [1], opresult1061);
  lineNumber = 544
  lineNumber = 538
  var string1064 = new GraceString("}");
  var opresult1066 = callmethod(var_mode, "==", [1], string1064);
  var opresult1068 = callmethod(opresult1063, "|", [1], opresult1066);
  if (Grace_isTrue(opresult1068)) {
  lineNumber = 539
  lineNumber = 540
  var call1069 = callmethod(this,"modechange", [3], var_tokens, var_mode, var_accum);
  lineNumber = 541
  lineNumber = 540
  var string1070 = new GraceString("n");
  var_mode = string1070;
  lineNumber = 542
  lineNumber = 541
  var string1071 = new GraceString("n");
  var_newmode = string1071;
  lineNumber = 543
  lineNumber = 542
  var string1072 = new GraceString("");
  var_accum = string1072;
  var if1040 = string1072;
}
  lineNumber = 545
  lineNumber = 544
  var bool1073 = new GraceBoolean(false)
  var_backtickIdent = bool1073;
  var if1014 = bool1073;
  } else {
  lineNumber = 639
  lineNumber = 545
  if (Grace_isTrue(var_instr)) {
  lineNumber = 552
  lineNumber = 555
  lineNumber = 546
  var string1076 = new GraceString("\n");
  var opresult1078 = callmethod(var_c, "==", [1], string1076);
  if (Grace_isTrue(opresult1078)) {
  lineNumber = 552
  lineNumber = 554
  lineNumber = 547
  var opresult1081 = callmethod(var_interpdepth, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1081)) {
  lineNumber = 549
  lineNumber = 548
  var string1082 = new GraceString("Runaway string ");
  lineNumber = 549
  var string1083 = new GraceString("interpolation");
  var opresult1085 = callmethod(string1082, "++", [1], string1083);
  lineNumber = 548
  var call1086 = callmethod(var_util,"syntax_error", [1], opresult1085);
  var if1079 = call1086;
  } else {
  lineNumber = 552
  lineNumber = 551
  var string1087 = new GraceString("Newlines not permitted ");
  lineNumber = 552
  var string1088 = new GraceString("in string literals");
  var opresult1090 = callmethod(string1087, "++", [1], string1088);
  lineNumber = 551
  var call1091 = callmethod(var_util,"syntax_error", [1], opresult1090);
  var if1079 = call1091;
}
  var if1075 = if1079;
}
  lineNumber = 624
  lineNumber = 555
  if (Grace_isTrue(var_escaped)) {
  lineNumber = 591
  lineNumber = 592
  lineNumber = 556
  var string1094 = new GraceString("n");
  var opresult1096 = callmethod(var_c, "==", [1], string1094);
  if (Grace_isTrue(opresult1096)) {
  lineNumber = 559
  lineNumber = 558
  var string1097 = new GraceString("\n");
  var opresult1099 = callmethod(var_accum, "++", [1], string1097);
  var_accum = opresult1099;
  var if1093 = opresult1099;
  } else {
  lineNumber = 591
  lineNumber = 564
  lineNumber = 559
  var string1101 = new GraceString("u");
  var opresult1103 = callmethod(var_c, "==", [1], string1101);
  if (Grace_isTrue(opresult1103)) {
  lineNumber = 563
  lineNumber = 562
  var_unichars = new GraceNum(4);
  lineNumber = 564
  lineNumber = 563
  var_codepoint = new GraceNum(0);
  var if1100 = new GraceNum(0);
  } else {
  lineNumber = 591
  lineNumber = 569
  lineNumber = 564
  var string1105 = new GraceString("U");
  var opresult1107 = callmethod(var_c, "==", [1], string1105);
  if (Grace_isTrue(opresult1107)) {
  lineNumber = 568
  lineNumber = 567
  var_unichars = new GraceNum(6);
  lineNumber = 569
  lineNumber = 568
  var_codepoint = new GraceNum(0);
  var if1104 = new GraceNum(0);
  } else {
  lineNumber = 591
  lineNumber = 572
  lineNumber = 569
  var string1109 = new GraceString("t");
  var opresult1111 = callmethod(var_c, "==", [1], string1109);
  if (Grace_isTrue(opresult1111)) {
  lineNumber = 572
  lineNumber = 571
  var string1112 = new GraceString("\u0009");
  var opresult1114 = callmethod(var_accum, "++", [1], string1112);
  var_accum = opresult1114;
  var if1108 = opresult1114;
  } else {
  lineNumber = 591
  lineNumber = 575
  lineNumber = 572
  var string1116 = new GraceString("r");
  var opresult1118 = callmethod(var_c, "==", [1], string1116);
  if (Grace_isTrue(opresult1118)) {
  lineNumber = 575
  lineNumber = 574
  var string1119 = new GraceString("\u000d");
  var opresult1121 = callmethod(var_accum, "++", [1], string1119);
  var_accum = opresult1121;
  var if1115 = opresult1121;
  } else {
  lineNumber = 591
  lineNumber = 578
  lineNumber = 575
  var string1123 = new GraceString("b");
  var opresult1125 = callmethod(var_c, "==", [1], string1123);
  if (Grace_isTrue(opresult1125)) {
  lineNumber = 578
  lineNumber = 577
  var string1126 = new GraceString("\u0008");
  var opresult1128 = callmethod(var_accum, "++", [1], string1126);
  var_accum = opresult1128;
  var if1122 = opresult1128;
  } else {
  lineNumber = 591
  lineNumber = 581
  lineNumber = 578
  var string1130 = new GraceString("l");
  var opresult1132 = callmethod(var_c, "==", [1], string1130);
  if (Grace_isTrue(opresult1132)) {
  lineNumber = 581
  lineNumber = 580
  var string1133 = new GraceString("\u8202");
  var opresult1135 = callmethod(var_accum, "++", [1], string1133);
  var_accum = opresult1135;
  var if1129 = opresult1135;
  } else {
  lineNumber = 591
  lineNumber = 584
  lineNumber = 581
  var string1137 = new GraceString("f");
  var opresult1139 = callmethod(var_c, "==", [1], string1137);
  if (Grace_isTrue(opresult1139)) {
  lineNumber = 584
  lineNumber = 583
  var string1140 = new GraceString("\u000c");
  var opresult1142 = callmethod(var_accum, "++", [1], string1140);
  var_accum = opresult1142;
  var if1136 = opresult1142;
  } else {
  lineNumber = 591
  lineNumber = 587
  lineNumber = 584
  var string1144 = new GraceString("e");
  var opresult1146 = callmethod(var_c, "==", [1], string1144);
  if (Grace_isTrue(opresult1146)) {
  lineNumber = 587
  lineNumber = 586
  var string1147 = new GraceString("\u00b1");
  var opresult1149 = callmethod(var_accum, "++", [1], string1147);
  var_accum = opresult1149;
  var if1143 = opresult1149;
  } else {
  lineNumber = 591
  lineNumber = 590
  var opresult1151 = callmethod(var_accum, "++", [1], var_c);
  var_accum = opresult1151;
  var if1143 = opresult1151;
}
  var if1136 = if1143;
}
  var if1129 = if1136;
}
  var if1122 = if1129;
}
  var if1115 = if1122;
}
  var if1108 = if1115;
}
  var if1104 = if1108;
}
  var if1100 = if1104;
}
  var if1093 = if1100;
}
  lineNumber = 593
  lineNumber = 592
  var bool1152 = new GraceBoolean(false)
  var_escaped = bool1152;
  var if1092 = bool1152;
  } else {
  lineNumber = 624
  lineNumber = 596
  lineNumber = 593
  var string1154 = new GraceString("\\");
  var opresult1156 = callmethod(var_c, "==", [1], string1154);
  if (Grace_isTrue(opresult1156)) {
  lineNumber = 596
  lineNumber = 595
  var bool1157 = new GraceBoolean(true)
  var_escaped = bool1157;
  var if1153 = bool1157;
  } else {
  lineNumber = 624
  lineNumber = 609
  lineNumber = 596
  var opresult1160 = callmethod(var_unichars, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1160)) {
  lineNumber = 602
  lineNumber = 601
  var diff1162 = callmethod(var_unichars, "-", [1], new GraceNum(1));
  var_unichars = diff1162;
  lineNumber = 603
  lineNumber = 602
  var prod1164 = callmethod(var_codepoint, "*", [1], new GraceNum(16));
  var_codepoint = prod1164;
  lineNumber = 603
  lineNumber = 604
  lineNumber = 1
  lineNumber = 604
  lineNumber = 1
  var call1165 = callmethod(superDepth, "outer", [0]);
  var call1166 = callmethod(call1165,"outer", [0]);
  var call1167 = callmethod(call1166,"hexdecchar", [1], var_c);
  var opresult1169 = callmethod(var_codepoint, "+", [1], call1167);
  var_codepoint = opresult1169;
  lineNumber = 607
  lineNumber = 609
  lineNumber = 604
  var opresult1172 = callmethod(var_unichars, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1172)) {
  lineNumber = 607
  var call1173 = callmethod(var_unicode,"create", [1], var_codepoint);
  var opresult1175 = callmethod(var_accum, "++", [1], call1173);
  var_accum = opresult1175;
  var if1170 = opresult1175;
}
  var if1158 = if1170;
  } else {
  lineNumber = 624
  lineNumber = 622
  lineNumber = 609
  var string1177 = new GraceString("{");
  var opresult1179 = callmethod(var_c, "==", [1], string1177);
  if (Grace_isTrue(opresult1179)) {
  lineNumber = 613
  lineNumber = 614
  lineNumber = 1
  lineNumber = 610
  var call1181 = callmethod(var_interpString,"not", [0]);
  if (Grace_isTrue(call1181)) {
  lineNumber = 611
  var string1182 = new GraceString("(");
  var string1183 = new GraceString("(");
  lineNumber = 612
  var call1184 = callmethod(this,"modechange", [3], var_tokens, string1182, string1183);
  lineNumber = 613
  lineNumber = 612
  var bool1185 = new GraceBoolean(true)
  var_interpString = bool1185;
  var if1180 = bool1185;
}
  lineNumber = 614
  lineNumber = 615
  var call1186 = callmethod(this,"modechange", [3], var_tokens, var_mode, var_accum);
  var string1187 = new GraceString("o");
  var string1188 = new GraceString("++");
  lineNumber = 616
  var call1189 = callmethod(this,"modechange", [3], var_tokens, string1187, string1188);
  var string1190 = new GraceString("(");
  var string1191 = new GraceString("(");
  lineNumber = 617
  var call1192 = callmethod(this,"modechange", [3], var_tokens, string1190, string1191);
  lineNumber = 618
  lineNumber = 617
  var string1193 = new GraceString("n");
  var_mode = string1193;
  lineNumber = 619
  lineNumber = 618
  var string1194 = new GraceString("n");
  var_newmode = string1194;
  lineNumber = 620
  lineNumber = 619
  var string1195 = new GraceString("");
  var_accum = string1195;
  lineNumber = 621
  lineNumber = 620
  var bool1196 = new GraceBoolean(false)
  var_instr = bool1196;
  lineNumber = 622
  lineNumber = 621
  var opresult1198 = callmethod(var_interpdepth, "+", [1], new GraceNum(1));
  var_interpdepth = opresult1198;
  var if1176 = opresult1198;
  } else {
  lineNumber = 624
  lineNumber = 623
  var opresult1200 = callmethod(var_accum, "++", [1], var_c);
  var_accum = opresult1200;
  var if1176 = opresult1200;
}
  var if1158 = if1176;
}
  var if1153 = if1158;
}
  var if1092 = if1153;
}
  var if1074 = if1092;
  } else {
  lineNumber = 639
  lineNumber = 625
  if (Grace_isTrue(var_inBackticks)) {
  lineNumber = 628
  lineNumber = 630
  lineNumber = 626
  var string1203 = new GraceString("\n");
  var opresult1205 = callmethod(var_c, "==", [1], string1203);
  if (Grace_isTrue(opresult1205)) {
  lineNumber = 628
  lineNumber = 627
  var string1206 = new GraceString("Newlines not permitted in");
  lineNumber = 628
  var string1207 = new GraceString("backtick identifiers");
  var opresult1209 = callmethod(string1206, "++", [1], string1207);
  lineNumber = 627
  var call1210 = callmethod(var_util,"syntax_error", [1], opresult1209);
  var if1202 = call1210;
}
  lineNumber = 631
  lineNumber = 630
  var opresult1212 = callmethod(var_accum, "++", [1], var_c);
  var_accum = opresult1212;
  var if1201 = opresult1212;
  } else {
  lineNumber = 639
  lineNumber = 637
  lineNumber = 631
  var string1214 = new GraceString("\n");
  var opresult1216 = callmethod(var_c, "==", [1], string1214);
  lineNumber = 637
  lineNumber = 631
  var string1217 = new GraceString("\u000d");
  var opresult1219 = callmethod(var_c, "==", [1], string1217);
  var opresult1221 = callmethod(opresult1216, "|", [1], opresult1219);
  if (Grace_isTrue(opresult1221)) {
  lineNumber = 633
  lineNumber = 634
  var call1222 = callmethod(this,"modechange", [3], var_tokens, var_mode, var_accum);
  lineNumber = 635
  lineNumber = 634
  var string1223 = new GraceString("d");
  var_mode = string1223;
  lineNumber = 636
  lineNumber = 635
  var string1224 = new GraceString("d");
  var_newmode = string1224;
  lineNumber = 637
  lineNumber = 636
  var string1225 = new GraceString("");
  var_accum = string1225;
  var if1213 = string1225;
  } else {
  lineNumber = 639
  lineNumber = 638
  var opresult1227 = callmethod(var_accum, "++", [1], var_c);
  var_accum = opresult1227;
  var if1213 = opresult1227;
}
  var if1201 = if1213;
}
  var if1074 = if1201;
}
  var if1014 = if1074;
}
  lineNumber = 645
  lineNumber = 640
  lineNumber = 646
  lineNumber = 640
  var string1229 = new GraceString("...");
  var opresult1231 = callmethod(var_accum, "==", [1], string1229);
  var block1232 = Grace_allocObject();
  block1232.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1232.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1232.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1232.receiver = this;
  block1232.className = 'block<lexer:640>';
  block1232.real = function(
) {
  var string1233 = new GraceString("o");
  var opresult1235 = callmethod(var_mode, "==", [1], string1233);
  return opresult1235;
};
  var opresult1237 = callmethod(opresult1231, "&&", [1], block1232);
  if (Grace_isTrue(opresult1237)) {
  lineNumber = 641
  var string1238 = new GraceString("i");
  var string1239 = new GraceString("...");
  lineNumber = 642
  var call1240 = callmethod(this,"modechange", [3], var_tokens, string1238, string1239);
  lineNumber = 643
  lineNumber = 642
  var string1241 = new GraceString("n");
  var_newmode = string1241;
  lineNumber = 644
  lineNumber = 643
  var_mode = var_newmode;
  lineNumber = 645
  lineNumber = 644
  var string1242 = new GraceString("");
  var_accum = string1242;
  var if1228 = string1242;
}
  lineNumber = 654
  lineNumber = 656
  lineNumber = 646
  var string1244 = new GraceString("\n");
  var opresult1246 = callmethod(var_c, "==", [1], string1244);
  if (Grace_isTrue(opresult1246)) {
  lineNumber = 652
  lineNumber = 651
  var opresult1248 = callmethod(var_lineNumber, "+", [1], new GraceNum(1));
  var_lineNumber = opresult1248;
  lineNumber = 653
  lineNumber = 652
  var_linePosition = new GraceNum(0);
  lineNumber = 654
  lineNumber = 653
  var_startPosition = new GraceNum(1);
  lineNumber = 654
  var call1249 = callmethod(var_util,"setPosition", [2], var_lineNumber, new GraceNum(0));
  var if1243 = call1249;
}
  lineNumber = 657
  lineNumber = 656
  var_prev = var_c;
  return var_c;
};
  var call1250 = callmethod(Grace_prelude,"for()do", [1, 1], var_input, block656);
  lineNumber = 658
  lineNumber = 659
  var call1251 = callmethod(this,"modechange", [3], var_tokens, var_mode, var_accum);
  return var_tokens
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj262.methods["lexfile"] = func640;
  superDepth = origSuperDepth;
}
obj_init_262.apply(obj262, []);
  return obj262
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj25.methods["new"] = func27;
  superDepth = origSuperDepth;
}
obj_init_25.apply(obj25, []);
  var var_LexerClass = obj25;
  lineNumber = 1
var func1252 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 21
  return var_LexerClass
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["LexerClass"] = func1252;
  lineNumber = 666
var func1253 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_LexerClass
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["Lexer"] = func1253;
  return this;
}
