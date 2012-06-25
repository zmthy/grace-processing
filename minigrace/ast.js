function gracecode_ast() {
  lineNumber = 2
  lineNumber = 1
  var var_kwyj1 = new GraceNum(1);
var func0 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_kwyj1
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["kwyj1"] = func0;
var func1 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_kwyj1 = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["kwyj1:="] = func1;
  lineNumber = 3
  lineNumber = 2
  var var_kwyj2 = new GraceNum(2);
  lineNumber = 1
var func2 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 2
  return var_kwyj2
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["kwyj2"] = func2;
  lineNumber = 1
var func3 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_kwyj2 = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["kwyj2:="] = func3;
  lineNumber = 22
// Import of util
  var var_util = do_import("util", gracecode_util);
  lineNumber = 1
var func4 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 22
  return var_forNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["forNode"] = func4;
  lineNumber = 1
  var obj5 = Grace_allocObject();
  obj5.outer = this;
    var reader_ast_outer6 = function() {
    return this.outer;
  }
  obj5.methods["outer"] = reader_ast_outer6;
function obj_init_5() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func7 = function(argcv) {
  var curarg = 1;
  var var_over = arguments[curarg];
  curarg++;
  var var_body__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj8 = Grace_allocObject();
  obj8.outer = this;
    var reader_ast_outer9 = function() {
    return this.outer;
  }
  obj8.methods["outer"] = reader_ast_outer9;
function obj_init_8() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 23
  var string10 = new GraceString("for");
  obj8.data["kind"] = string10;
    var reader_ast_kind11 = function() {
    return this.data["kind"];
  }
  reader_ast_kind11.def = true;
  obj8.methods["kind"] = reader_ast_kind11;
  lineNumber = 24
  obj8.data["value"] = var_over;
    var reader_ast_value12 = function() {
    return this.data["value"];
  }
  reader_ast_value12.def = true;
  obj8.methods["value"] = reader_ast_value12;
  lineNumber = 25
  obj8.data["body"] = var_body__39__;
    var reader_ast_body13 = function() {
    return this.data["body"];
  }
  reader_ast_body13.def = true;
  obj8.methods["body"] = reader_ast_body13;
  lineNumber = 26
  var string14 = new GraceString("");
  obj8.data["register"] = string14;
    var reader_ast_register15 = function() {
    return this.data["register"];
  }
  obj8.methods["register"] = reader_ast_register15;
  obj8.data["register"] = string14;
  var writer_ast_register15 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj8.methods["register:="] = writer_ast_register15;
obj8.mutable = true;
  lineNumber = 28
  lineNumber = 1
  lineNumber = 27
  var call16 = callmethod(var_util,"linenum", [0]);
  obj8.data["line"] = call16;
    var reader_ast_line17 = function() {
    return this.data["line"];
  }
  reader_ast_line17.def = true;
  obj8.methods["line"] = reader_ast_line17;
var func18 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 31
  lineNumber = 29
  var call20 = callmethod(var_visitor,"visitFor", [1], this);
  if (Grace_isTrue(call20)) {
  lineNumber = 30
  lineNumber = 31
  lineNumber = 1
  lineNumber = 30
  var call21 = callmethod(this,"value", [0]);
  var call22 = callmethod(call21,"accept", [1], var_visitor);
  lineNumber = 31
  lineNumber = 32
  lineNumber = 1
  lineNumber = 31
  var call23 = callmethod(this,"body", [0]);
  var call24 = callmethod(call23,"accept", [1], var_visitor);
  var if19 = call24;
}
  return if19
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func18.paramTypes = [];
func18.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj8.methods["accept"] = func18;
var func25 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 36
  lineNumber = 35
  var string26 = new GraceString("");
  var var_spc = string26;
  lineNumber = 38
  lineNumber = 36
  var opresult28 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 38
  var block29 = Grace_allocObject();
  block29.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block29.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block29.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block29.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block29.receiver = this;
  block29.className = 'block<ast:38>';
  block29.real = function(
var_i
) {
  lineNumber = 37
  var string30 = new GraceString("  ");
  var opresult32 = callmethod(var_spc, "++", [1], string30);
  var_spc = opresult32;
  return opresult32;
};
  var call33 = callmethod(Grace_prelude,"for()do", [1, 1], opresult28, block29);
  lineNumber = 40
  lineNumber = 39
  var string34 = new GraceString("For\n");
  var var_s = string34;
  lineNumber = 40
  lineNumber = 41
  lineNumber = 40
  var opresult36 = callmethod(var_s, "++", [1], var_spc);
  var opresult38 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 41
  lineNumber = 1
  lineNumber = 40
  var call39 = callmethod(this,"value", [0]);
  var call40 = callmethod(call39,"pretty", [1], opresult38);
  var opresult42 = callmethod(opresult36, "++", [1], call40);
  var_s = opresult42;
  lineNumber = 42
  lineNumber = 41
  var string43 = new GraceString("\n");
  var opresult45 = callmethod(var_s, "++", [1], string43);
  var_s = opresult45;
  lineNumber = 43
  lineNumber = 42
  var opresult47 = callmethod(var_s, "++", [1], var_spc);
  var string48 = new GraceString("Do:");
  var opresult50 = callmethod(opresult47, "++", [1], string48);
  var_s = opresult50;
  lineNumber = 43
  lineNumber = 44
  lineNumber = 43
  var string51 = new GraceString("\n");
  var opresult53 = callmethod(var_s, "++", [1], string51);
  var opresult55 = callmethod(opresult53, "++", [1], var_spc);
  var string56 = new GraceString("  ");
  var opresult58 = callmethod(opresult55, "++", [1], string56);
  var opresult60 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 44
  lineNumber = 1
  lineNumber = 43
  var call61 = callmethod(this,"body", [0]);
  var call62 = callmethod(call61,"pretty", [1], opresult60);
  var opresult64 = callmethod(opresult58, "++", [1], call62);
  var_s = opresult64;
  lineNumber = 44
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj8.methods["pretty"] = func25;
var func65 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 48
  lineNumber = 47
  var string66 = new GraceString("");
  var var_spc = string66;
  lineNumber = 50
  lineNumber = 48
  var diff68 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult70 = callmethod(new GraceNum(0), "..", [1], diff68);
  lineNumber = 50
  var block71 = Grace_allocObject();
  block71.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block71.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block71.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block71.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block71.receiver = this;
  block71.className = 'block<ast:50>';
  block71.real = function(
var_i
) {
  lineNumber = 49
  var string72 = new GraceString("    ");
  var opresult74 = callmethod(var_spc, "++", [1], string72);
  var_spc = opresult74;
  return opresult74;
};
  var call75 = callmethod(Grace_prelude,"for()do", [1, 1], opresult70, block71);
  lineNumber = 51
  var string76 = new GraceString("for (");
  lineNumber = 52
  lineNumber = 1
  lineNumber = 51
  var call77 = callmethod(this,"value", [0]);
  var call78 = callmethod(call77,"toGrace", [1], new GraceNum(0));
  var opresult80 = callmethod(string76, "++", [1], call78);
  var string81 = new GraceString(") do ");
  var opresult83 = callmethod(opresult80, "++", [1], string81);
  var var_s = opresult83;
  lineNumber = 52
  lineNumber = 53
  lineNumber = 1
  lineNumber = 52
  var call84 = callmethod(this,"body", [0]);
  var call85 = callmethod(call84,"toGrace", [1], var_depth);
  var opresult87 = callmethod(var_s, "++", [1], call85);
  var_s = opresult87;
  lineNumber = 53
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func65.paramTypes = [];
func65.paramTypes.push([type_Number, "depth"]);
  obj8.methods["toGrace"] = func65;
  superDepth = origSuperDepth;
}
obj_init_8.apply(obj8, []);
  return obj8
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj5.methods["new"] = func7;
  superDepth = origSuperDepth;
}
obj_init_5.apply(obj5, []);
  var var_forNode = obj5;
  lineNumber = 56
  lineNumber = 1
var func88 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 56
  return var_whileNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["whileNode"] = func88;
  lineNumber = 1
  var obj89 = Grace_allocObject();
  obj89.outer = this;
    var reader_ast_outer90 = function() {
    return this.outer;
  }
  obj89.methods["outer"] = reader_ast_outer90;
function obj_init_89() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func91 = function(argcv) {
  var curarg = 1;
  var var_cond = arguments[curarg];
  curarg++;
  var var_body__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj92 = Grace_allocObject();
  obj92.outer = this;
    var reader_ast_outer93 = function() {
    return this.outer;
  }
  obj92.methods["outer"] = reader_ast_outer93;
function obj_init_92() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 57
  var string94 = new GraceString("while");
  obj92.data["kind"] = string94;
    var reader_ast_kind95 = function() {
    return this.data["kind"];
  }
  reader_ast_kind95.def = true;
  obj92.methods["kind"] = reader_ast_kind95;
  lineNumber = 58
  obj92.data["value"] = var_cond;
    var reader_ast_value96 = function() {
    return this.data["value"];
  }
  reader_ast_value96.def = true;
  obj92.methods["value"] = reader_ast_value96;
  lineNumber = 59
  obj92.data["body"] = var_body__39__;
    var reader_ast_body97 = function() {
    return this.data["body"];
  }
  reader_ast_body97.def = true;
  obj92.methods["body"] = reader_ast_body97;
  lineNumber = 60
  var string98 = new GraceString("");
  obj92.data["register"] = string98;
    var reader_ast_register99 = function() {
    return this.data["register"];
  }
  obj92.methods["register"] = reader_ast_register99;
  obj92.data["register"] = string98;
  var writer_ast_register99 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj92.methods["register:="] = writer_ast_register99;
obj92.mutable = true;
  lineNumber = 62
  lineNumber = 1
  lineNumber = 61
  var call100 = callmethod(var_util,"linenum", [0]);
  obj92.data["line"] = call100;
    var reader_ast_line101 = function() {
    return this.data["line"];
  }
  reader_ast_line101.def = true;
  obj92.methods["line"] = reader_ast_line101;
var func102 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 66
  lineNumber = 63
  var call104 = callmethod(var_visitor,"visitWhile", [1], this);
  if (Grace_isTrue(call104)) {
  lineNumber = 64
  lineNumber = 65
  lineNumber = 1
  lineNumber = 64
  var call105 = callmethod(this,"value", [0]);
  var call106 = callmethod(call105,"accept", [1], var_visitor);
  lineNumber = 66
  lineNumber = 65
  lineNumber = 1
  lineNumber = 65
  var call107 = callmethod(this,"body", [0]);
  lineNumber = 66
  var block108 = Grace_allocObject();
  block108.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block108.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block108.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block108.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block108.receiver = this;
  block108.className = 'block<ast:66>';
  block108.real = function(
var_x
) {
  var call109 = callmethod(var_x,"accept", [1], var_visitor);
  return call109;
};
  var call110 = callmethod(Grace_prelude,"for()do", [1, 1], call107, block108);
  var if103 = call110;
}
  return if103
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func102.paramTypes = [];
func102.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj92.methods["accept"] = func102;
var func111 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 72
  lineNumber = 71
  var string112 = new GraceString("");
  var var_spc = string112;
  lineNumber = 74
  lineNumber = 72
  var opresult114 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 74
  var block115 = Grace_allocObject();
  block115.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block115.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block115.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block115.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block115.receiver = this;
  block115.className = 'block<ast:74>';
  block115.real = function(
var_i
) {
  lineNumber = 73
  var string116 = new GraceString("  ");
  var opresult118 = callmethod(var_spc, "++", [1], string116);
  var_spc = opresult118;
  return opresult118;
};
  var call119 = callmethod(Grace_prelude,"for()do", [1, 1], opresult114, block115);
  lineNumber = 76
  lineNumber = 75
  var string120 = new GraceString("While\n");
  var var_s = string120;
  lineNumber = 76
  lineNumber = 77
  lineNumber = 76
  var opresult122 = callmethod(var_s, "++", [1], var_spc);
  var opresult124 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 77
  lineNumber = 1
  lineNumber = 76
  var call125 = callmethod(this,"value", [0]);
  var call126 = callmethod(call125,"pretty", [1], opresult124);
  var opresult128 = callmethod(opresult122, "++", [1], call126);
  var_s = opresult128;
  lineNumber = 78
  lineNumber = 77
  var string129 = new GraceString("\n");
  var opresult131 = callmethod(var_s, "++", [1], string129);
  var_s = opresult131;
  lineNumber = 79
  lineNumber = 78
  var opresult133 = callmethod(var_s, "++", [1], var_spc);
  var string134 = new GraceString("Do:");
  var opresult136 = callmethod(opresult133, "++", [1], string134);
  var_s = opresult136;
  lineNumber = 80
  lineNumber = 79
  lineNumber = 1
  lineNumber = 79
  var call137 = callmethod(this,"body", [0]);
  lineNumber = 80
  var block138 = Grace_allocObject();
  block138.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block138.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block138.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block138.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block138.receiver = this;
  block138.className = 'block<ast:80>';
  block138.real = function(
var_x
) {
  lineNumber = 81
  lineNumber = 80
  var string139 = new GraceString("\n  ");
  var opresult141 = callmethod(var_s, "++", [1], string139);
  var opresult143 = callmethod(opresult141, "++", [1], var_spc);
  var opresult145 = callmethod(var_depth, "+", [1], new GraceNum(2));
  var call146 = callmethod(var_x,"pretty", [1], opresult145);
  var opresult148 = callmethod(opresult143, "++", [1], call146);
  var_s = opresult148;
  return opresult148;
};
  var call149 = callmethod(Grace_prelude,"for()do", [1, 1], call137, block138);
  lineNumber = 82
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj92.methods["pretty"] = func111;
var func150 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 86
  lineNumber = 85
  var string151 = new GraceString("");
  var var_spc = string151;
  lineNumber = 88
  lineNumber = 86
  var diff153 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult155 = callmethod(new GraceNum(0), "..", [1], diff153);
  lineNumber = 88
  var block156 = Grace_allocObject();
  block156.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block156.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block156.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block156.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block156.receiver = this;
  block156.className = 'block<ast:88>';
  block156.real = function(
var_i
) {
  lineNumber = 87
  var string157 = new GraceString("    ");
  var opresult159 = callmethod(var_spc, "++", [1], string157);
  var_spc = opresult159;
  return opresult159;
};
  var call160 = callmethod(Grace_prelude,"for()do", [1, 1], opresult155, block156);
  lineNumber = 89
  var string161 = new GraceString("while {");
  var opresult163 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 90
  lineNumber = 1
  lineNumber = 89
  var call164 = callmethod(this,"value", [0]);
  var call165 = callmethod(call164,"toGrace", [1], opresult163);
  var opresult167 = callmethod(string161, "++", [1], call165);
  var string168 = new GraceString("} do {");
  var opresult170 = callmethod(opresult167, "++", [1], string168);
  var var_s = opresult170;
  lineNumber = 91
  lineNumber = 90
  lineNumber = 1
  lineNumber = 90
  var call171 = callmethod(this,"body", [0]);
  lineNumber = 91
  var block172 = Grace_allocObject();
  block172.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block172.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block172.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block172.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block172.receiver = this;
  block172.className = 'block<ast:91>';
  block172.real = function(
var_x
) {
  lineNumber = 92
  lineNumber = 91
  var string173 = new GraceString("\n");
  var opresult175 = callmethod(var_s, "++", [1], string173);
  var opresult177 = callmethod(opresult175, "++", [1], var_spc);
  var string178 = new GraceString("    ");
  var opresult180 = callmethod(opresult177, "++", [1], string178);
  var opresult182 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call183 = callmethod(var_x,"toGrace", [1], opresult182);
  var opresult185 = callmethod(opresult180, "++", [1], call183);
  var_s = opresult185;
  return opresult185;
};
  var call186 = callmethod(Grace_prelude,"for()do", [1, 1], call171, block172);
  lineNumber = 94
  lineNumber = 93
  var string187 = new GraceString("\n");
  var opresult189 = callmethod(var_s, "++", [1], string187);
  var opresult191 = callmethod(opresult189, "++", [1], var_spc);
  var string192 = new GraceString("}");
  var opresult194 = callmethod(opresult191, "++", [1], string192);
  var_s = opresult194;
  lineNumber = 94
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func150.paramTypes = [];
func150.paramTypes.push([type_Number, "depth"]);
  obj92.methods["toGrace"] = func150;
  superDepth = origSuperDepth;
}
obj_init_92.apply(obj92, []);
  return obj92
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj89.methods["new"] = func91;
  superDepth = origSuperDepth;
}
obj_init_89.apply(obj89, []);
  var var_whileNode = obj89;
  lineNumber = 97
  lineNumber = 1
var func195 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 97
  return var_ifNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["ifNode"] = func195;
  lineNumber = 1
  var obj196 = Grace_allocObject();
  obj196.outer = this;
    var reader_ast_outer197 = function() {
    return this.outer;
  }
  obj196.methods["outer"] = reader_ast_outer197;
function obj_init_196() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func198 = function(argcv) {
  var curarg = 1;
  var var_cond = arguments[curarg];
  curarg++;
  var var_thenblock__39__ = arguments[curarg];
  curarg++;
  var var_elseblock__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj199 = Grace_allocObject();
  obj199.outer = this;
    var reader_ast_outer200 = function() {
    return this.outer;
  }
  obj199.methods["outer"] = reader_ast_outer200;
function obj_init_199() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 98
  var string201 = new GraceString("if");
  obj199.data["kind"] = string201;
    var reader_ast_kind202 = function() {
    return this.data["kind"];
  }
  reader_ast_kind202.def = true;
  obj199.methods["kind"] = reader_ast_kind202;
  lineNumber = 99
  obj199.data["value"] = var_cond;
    var reader_ast_value203 = function() {
    return this.data["value"];
  }
  reader_ast_value203.def = true;
  obj199.methods["value"] = reader_ast_value203;
  lineNumber = 100
  obj199.data["thenblock"] = var_thenblock__39__;
    var reader_ast_thenblock204 = function() {
    return this.data["thenblock"];
  }
  reader_ast_thenblock204.def = true;
  obj199.methods["thenblock"] = reader_ast_thenblock204;
  lineNumber = 101
  obj199.data["elseblock"] = var_elseblock__39__;
    var reader_ast_elseblock205 = function() {
    return this.data["elseblock"];
  }
  reader_ast_elseblock205.def = true;
  obj199.methods["elseblock"] = reader_ast_elseblock205;
  lineNumber = 102
  var string206 = new GraceString("");
  obj199.data["register"] = string206;
    var reader_ast_register207 = function() {
    return this.data["register"];
  }
  obj199.methods["register"] = reader_ast_register207;
  obj199.data["register"] = string206;
  var writer_ast_register207 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj199.methods["register:="] = writer_ast_register207;
obj199.mutable = true;
  lineNumber = 104
  lineNumber = 1
  lineNumber = 103
  var call208 = callmethod(var_util,"linenum", [0]);
  obj199.data["line"] = call208;
    var reader_ast_line209 = function() {
    return this.data["line"];
  }
  reader_ast_line209.def = true;
  obj199.methods["line"] = reader_ast_line209;
  lineNumber = 104
  var bool210 = new GraceBoolean(false)
  obj199.data["handledIdentifiers"] = bool210;
    var reader_ast_handledIdentifiers211 = function() {
    return this.data["handledIdentifiers"];
  }
  obj199.methods["handledIdentifiers"] = reader_ast_handledIdentifiers211;
  obj199.data["handledIdentifiers"] = bool210;
  var writer_ast_handledIdentifiers211 = function(argcv, o) {
    this.data["handledIdentifiers"] = o;
  }
  obj199.methods["handledIdentifiers:="] = writer_ast_handledIdentifiers211;
obj199.mutable = true;
var func212 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 112
  lineNumber = 106
  var call214 = callmethod(var_visitor,"visitIf", [1], this);
  if (Grace_isTrue(call214)) {
  lineNumber = 107
  lineNumber = 108
  lineNumber = 1
  lineNumber = 107
  var call215 = callmethod(this,"value", [0]);
  var call216 = callmethod(call215,"accept", [1], var_visitor);
  lineNumber = 109
  lineNumber = 108
  lineNumber = 1
  lineNumber = 108
  var call217 = callmethod(this,"thenblock", [0]);
  lineNumber = 109
  var block218 = Grace_allocObject();
  block218.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block218.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block218.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block218.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block218.receiver = this;
  block218.className = 'block<ast:109>';
  block218.real = function(
var_ix
) {
  var call219 = callmethod(var_ix,"accept", [1], var_visitor);
  return call219;
};
  var call220 = callmethod(Grace_prelude,"for()do", [1, 1], call217, block218);
  lineNumber = 112
  lineNumber = 111
  lineNumber = 1
  lineNumber = 111
  var call221 = callmethod(this,"elseblock", [0]);
  lineNumber = 112
  var block222 = Grace_allocObject();
  block222.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block222.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block222.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block222.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block222.receiver = this;
  block222.className = 'block<ast:112>';
  block222.real = function(
var_ix
) {
  var call223 = callmethod(var_ix,"accept", [1], var_visitor);
  return call223;
};
  var call224 = callmethod(Grace_prelude,"for()do", [1, 1], call221, block222);
  var if213 = call224;
}
  return if213
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func212.paramTypes = [];
func212.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj199.methods["accept"] = func212;
var func225 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 118
  lineNumber = 117
  var string226 = new GraceString("");
  var var_spc = string226;
  lineNumber = 120
  lineNumber = 118
  var opresult228 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 120
  var block229 = Grace_allocObject();
  block229.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block229.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block229.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block229.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block229.receiver = this;
  block229.className = 'block<ast:120>';
  block229.real = function(
var_i
) {
  lineNumber = 119
  var string230 = new GraceString("  ");
  var opresult232 = callmethod(var_spc, "++", [1], string230);
  var_spc = opresult232;
  return opresult232;
};
  var call233 = callmethod(Grace_prelude,"for()do", [1, 1], opresult228, block229);
  lineNumber = 122
  lineNumber = 121
  var string234 = new GraceString("If\n");
  var var_s = string234;
  lineNumber = 122
  lineNumber = 123
  lineNumber = 122
  var opresult236 = callmethod(var_s, "++", [1], var_spc);
  var opresult238 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 123
  lineNumber = 1
  lineNumber = 122
  var call239 = callmethod(this,"value", [0]);
  var call240 = callmethod(call239,"pretty", [1], opresult238);
  var opresult242 = callmethod(opresult236, "++", [1], call240);
  var_s = opresult242;
  lineNumber = 124
  lineNumber = 123
  var string243 = new GraceString("\n");
  var opresult245 = callmethod(var_s, "++", [1], string243);
  var_s = opresult245;
  lineNumber = 125
  lineNumber = 124
  var opresult247 = callmethod(var_s, "++", [1], var_spc);
  var string248 = new GraceString("Then:");
  var opresult250 = callmethod(opresult247, "++", [1], string248);
  var_s = opresult250;
  lineNumber = 126
  lineNumber = 125
  lineNumber = 1
  lineNumber = 125
  var call251 = callmethod(this,"thenblock", [0]);
  lineNumber = 126
  var block252 = Grace_allocObject();
  block252.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block252.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block252.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block252.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block252.receiver = this;
  block252.className = 'block<ast:126>';
  block252.real = function(
var_ix
) {
  lineNumber = 127
  lineNumber = 126
  var string253 = new GraceString("\n  ");
  var opresult255 = callmethod(var_s, "++", [1], string253);
  var opresult257 = callmethod(opresult255, "++", [1], var_spc);
  var opresult259 = callmethod(var_depth, "+", [1], new GraceNum(2));
  var call260 = callmethod(var_ix,"pretty", [1], opresult259);
  var opresult262 = callmethod(opresult257, "++", [1], call260);
  var_s = opresult262;
  return opresult262;
};
  var call263 = callmethod(Grace_prelude,"for()do", [1, 1], call251, block252);
  lineNumber = 129
  lineNumber = 128
  var string264 = new GraceString("\n");
  var opresult266 = callmethod(var_s, "++", [1], string264);
  var_s = opresult266;
  lineNumber = 130
  lineNumber = 129
  var opresult268 = callmethod(var_s, "++", [1], var_spc);
  var string269 = new GraceString("Else:");
  var opresult271 = callmethod(opresult268, "++", [1], string269);
  var_s = opresult271;
  lineNumber = 131
  lineNumber = 130
  lineNumber = 1
  lineNumber = 130
  var call272 = callmethod(this,"elseblock", [0]);
  lineNumber = 131
  var block273 = Grace_allocObject();
  block273.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block273.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block273.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block273.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block273.receiver = this;
  block273.className = 'block<ast:131>';
  block273.real = function(
var_ix
) {
  lineNumber = 132
  lineNumber = 131
  var string274 = new GraceString("\n  ");
  var opresult276 = callmethod(var_s, "++", [1], string274);
  var opresult278 = callmethod(opresult276, "++", [1], var_spc);
  var opresult280 = callmethod(var_depth, "+", [1], new GraceNum(2));
  var call281 = callmethod(var_ix,"pretty", [1], opresult280);
  var opresult283 = callmethod(opresult278, "++", [1], call281);
  var_s = opresult283;
  return opresult283;
};
  var call284 = callmethod(Grace_prelude,"for()do", [1, 1], call272, block273);
  lineNumber = 133
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj199.methods["pretty"] = func225;
var func285 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 137
  lineNumber = 136
  var string286 = new GraceString("");
  var var_spc = string286;
  lineNumber = 139
  lineNumber = 137
  var diff288 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult290 = callmethod(new GraceNum(0), "..", [1], diff288);
  lineNumber = 139
  var block291 = Grace_allocObject();
  block291.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block291.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block291.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block291.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block291.receiver = this;
  block291.className = 'block<ast:139>';
  block291.real = function(
var_i
) {
  lineNumber = 138
  var string292 = new GraceString("    ");
  var opresult294 = callmethod(var_spc, "++", [1], string292);
  var_spc = opresult294;
  return opresult294;
};
  var call295 = callmethod(Grace_prelude,"for()do", [1, 1], opresult290, block291);
  lineNumber = 140
  var string296 = new GraceString("if (");
  lineNumber = 141
  lineNumber = 1
  lineNumber = 140
  var call297 = callmethod(this,"value", [0]);
  var call298 = callmethod(call297,"toGrace", [1], new GraceNum(0));
  var opresult300 = callmethod(string296, "++", [1], call298);
  var string301 = new GraceString(") then {");
  var opresult303 = callmethod(opresult300, "++", [1], string301);
  var var_s = opresult303;
  lineNumber = 142
  lineNumber = 141
  lineNumber = 1
  lineNumber = 141
  var call304 = callmethod(this,"thenblock", [0]);
  lineNumber = 142
  var block305 = Grace_allocObject();
  block305.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block305.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block305.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block305.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block305.receiver = this;
  block305.className = 'block<ast:142>';
  block305.real = function(
var_ix
) {
  lineNumber = 143
  lineNumber = 142
  var string306 = new GraceString("\n");
  var opresult308 = callmethod(var_s, "++", [1], string306);
  var opresult310 = callmethod(opresult308, "++", [1], var_spc);
  var string311 = new GraceString("    ");
  var opresult313 = callmethod(opresult310, "++", [1], string311);
  var opresult315 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call316 = callmethod(var_ix,"toGrace", [1], opresult315);
  var opresult318 = callmethod(opresult313, "++", [1], call316);
  var_s = opresult318;
  return opresult318;
};
  var call319 = callmethod(Grace_prelude,"for()do", [1, 1], call304, block305);
  lineNumber = 147
  lineNumber = 150
  lineNumber = 1
  lineNumber = 150
  lineNumber = 1
  lineNumber = 144
  var call321 = callmethod(this,"elseblock", [0]);
  var call322 = callmethod(call321,"size", [0]);
  var opresult324 = callmethod(call322, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult324)) {
  lineNumber = 146
  lineNumber = 145
  var string325 = new GraceString("\n");
  var opresult327 = callmethod(var_s, "++", [1], string325);
  var opresult329 = callmethod(opresult327, "++", [1], var_spc);
  var string330 = new GraceString("} else {");
  var opresult332 = callmethod(opresult329, "++", [1], string330);
  var_s = opresult332;
  lineNumber = 147
  lineNumber = 146
  lineNumber = 1
  lineNumber = 146
  var call333 = callmethod(this,"elseblock", [0]);
  lineNumber = 147
  var block334 = Grace_allocObject();
  block334.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block334.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block334.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block334.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block334.receiver = this;
  block334.className = 'block<ast:147>';
  block334.real = function(
var_ix
) {
  lineNumber = 148
  lineNumber = 147
  var string335 = new GraceString("\n");
  var opresult337 = callmethod(var_s, "++", [1], string335);
  var opresult339 = callmethod(opresult337, "++", [1], var_spc);
  var string340 = new GraceString("    ");
  var opresult342 = callmethod(opresult339, "++", [1], string340);
  var opresult344 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call345 = callmethod(var_ix,"toGrace", [1], opresult344);
  var opresult347 = callmethod(opresult342, "++", [1], call345);
  var_s = opresult347;
  return opresult347;
};
  var call348 = callmethod(Grace_prelude,"for()do", [1, 1], call333, block334);
  var if320 = call348;
}
  lineNumber = 151
  lineNumber = 150
  var string349 = new GraceString("\n");
  var opresult351 = callmethod(var_s, "++", [1], string349);
  var opresult353 = callmethod(opresult351, "++", [1], var_spc);
  var string354 = new GraceString("}");
  var opresult356 = callmethod(opresult353, "++", [1], string354);
  var_s = opresult356;
  lineNumber = 151
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func285.paramTypes = [];
func285.paramTypes.push([type_Number, "depth"]);
  obj199.methods["toGrace"] = func285;
  superDepth = origSuperDepth;
}
obj_init_199.apply(obj199, []);
  return obj199
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj196.methods["new"] = func198;
  superDepth = origSuperDepth;
}
obj_init_196.apply(obj196, []);
  var var_ifNode = obj196;
  lineNumber = 154
  lineNumber = 1
var func357 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 154
  return var_blockNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["blockNode"] = func357;
  lineNumber = 1
  var obj358 = Grace_allocObject();
  obj358.outer = this;
    var reader_ast_outer359 = function() {
    return this.outer;
  }
  obj358.methods["outer"] = reader_ast_outer359;
function obj_init_358() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func360 = function(argcv) {
  var curarg = 1;
  var var_params__39__ = arguments[curarg];
  curarg++;
  var var_body__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj361 = Grace_allocObject();
  obj361.outer = this;
    var reader_ast_outer362 = function() {
    return this.outer;
  }
  obj361.methods["outer"] = reader_ast_outer362;
function obj_init_361() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 155
  var string363 = new GraceString("block");
  obj361.data["kind"] = string363;
    var reader_ast_kind364 = function() {
    return this.data["kind"];
  }
  reader_ast_kind364.def = true;
  obj361.methods["kind"] = reader_ast_kind364;
  lineNumber = 156
  var string365 = new GraceString("block");
  obj361.data["value"] = string365;
    var reader_ast_value366 = function() {
    return this.data["value"];
  }
  reader_ast_value366.def = true;
  obj361.methods["value"] = reader_ast_value366;
  lineNumber = 157
  obj361.data["params"] = var_params__39__;
    var reader_ast_params367 = function() {
    return this.data["params"];
  }
  reader_ast_params367.def = true;
  obj361.methods["params"] = reader_ast_params367;
  lineNumber = 158
  obj361.data["body"] = var_body__39__;
    var reader_ast_body368 = function() {
    return this.data["body"];
  }
  reader_ast_body368.def = true;
  obj361.methods["body"] = reader_ast_body368;
  lineNumber = 159
  var bool369 = new GraceBoolean(true)
  obj361.data["selfclosure"] = bool369;
    var reader_ast_selfclosure370 = function() {
    return this.data["selfclosure"];
  }
  reader_ast_selfclosure370.def = true;
  obj361.methods["selfclosure"] = reader_ast_selfclosure370;
  lineNumber = 160
  var string371 = new GraceString("");
  obj361.data["register"] = string371;
    var reader_ast_register372 = function() {
    return this.data["register"];
  }
  obj361.methods["register"] = reader_ast_register372;
  obj361.data["register"] = string371;
  var writer_ast_register372 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj361.methods["register:="] = writer_ast_register372;
obj361.mutable = true;
  lineNumber = 161
  var bool373 = new GraceBoolean(false)
  obj361.data["matchingPattern"] = bool373;
    var reader_ast_matchingPattern374 = function() {
    return this.data["matchingPattern"];
  }
  obj361.methods["matchingPattern"] = reader_ast_matchingPattern374;
  obj361.data["matchingPattern"] = bool373;
  var writer_ast_matchingPattern374 = function(argcv, o) {
    this.data["matchingPattern"] = o;
  }
  obj361.methods["matchingPattern:="] = writer_ast_matchingPattern374;
obj361.mutable = true;
  lineNumber = 163
  lineNumber = 1
  lineNumber = 162
  var call375 = callmethod(var_util,"linenum", [0]);
  obj361.data["line"] = call375;
    var reader_ast_line376 = function() {
    return this.data["line"];
  }
  reader_ast_line376.def = true;
  obj361.methods["line"] = reader_ast_line376;
var func377 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 172
  lineNumber = 164
  var call379 = callmethod(var_visitor,"visitBlock", [1], this);
  if (Grace_isTrue(call379)) {
  lineNumber = 166
  lineNumber = 165
  lineNumber = 1
  lineNumber = 165
  var call380 = callmethod(this,"params", [0]);
  lineNumber = 166
  var block381 = Grace_allocObject();
  block381.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block381.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block381.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block381.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block381.receiver = this;
  block381.className = 'block<ast:166>';
  block381.real = function(
var_mx
) {
  var call382 = callmethod(var_mx,"accept", [1], var_visitor);
  return call382;
};
  var call383 = callmethod(Grace_prelude,"for()do", [1, 1], call380, block381);
  lineNumber = 169
  lineNumber = 168
  lineNumber = 1
  lineNumber = 168
  var call384 = callmethod(this,"body", [0]);
  lineNumber = 169
  var block385 = Grace_allocObject();
  block385.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block385.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block385.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block385.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block385.receiver = this;
  block385.className = 'block<ast:169>';
  block385.real = function(
var_mx
) {
  var call386 = callmethod(var_mx,"accept", [1], var_visitor);
  return call386;
};
  var call387 = callmethod(Grace_prelude,"for()do", [1, 1], call384, block385);
  lineNumber = 172
  lineNumber = 174
  lineNumber = 1
  lineNumber = 171
  var call389 = callmethod(this,"matchingPattern", [0]);
  var bool390 = new GraceBoolean(false)
  var opresult392 = callmethod(call389, "!=", [1], bool390);
  if (Grace_isTrue(opresult392)) {
  lineNumber = 172
  lineNumber = 173
  lineNumber = 1
  lineNumber = 172
  var call393 = callmethod(this,"matchingPattern", [0]);
  var call394 = callmethod(call393,"accept", [1], var_visitor);
  var if388 = call394;
}
  var if378 = if388;
}
  return if378
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func377.paramTypes = [];
func377.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj361.methods["accept"] = func377;
var func395 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 178
  lineNumber = 177
  var string396 = new GraceString("");
  var var_spc = string396;
  lineNumber = 180
  lineNumber = 178
  var opresult398 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 180
  var block399 = Grace_allocObject();
  block399.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block399.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block399.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block399.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block399.receiver = this;
  block399.className = 'block<ast:180>';
  block399.real = function(
var_i
) {
  lineNumber = 179
  var string400 = new GraceString("  ");
  var opresult402 = callmethod(var_spc, "++", [1], string400);
  var_spc = opresult402;
  return opresult402;
};
  var call403 = callmethod(Grace_prelude,"for()do", [1, 1], opresult398, block399);
  lineNumber = 182
  lineNumber = 181
  var string404 = new GraceString("Block\n");
  var var_s = string404;
  lineNumber = 183
  lineNumber = 182
  var opresult406 = callmethod(var_s, "++", [1], var_spc);
  var string407 = new GraceString("Parameters:");
  var opresult409 = callmethod(opresult406, "++", [1], string407);
  var_s = opresult409;
  lineNumber = 184
  lineNumber = 183
  lineNumber = 1
  lineNumber = 183
  var call410 = callmethod(this,"params", [0]);
  lineNumber = 184
  var block411 = Grace_allocObject();
  block411.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block411.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block411.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block411.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block411.receiver = this;
  block411.className = 'block<ast:184>';
  block411.real = function(
var_mx
) {
  lineNumber = 185
  lineNumber = 184
  var string412 = new GraceString("\n  ");
  var opresult414 = callmethod(var_s, "++", [1], string412);
  var opresult416 = callmethod(opresult414, "++", [1], var_spc);
  var opresult418 = callmethod(var_depth, "+", [1], new GraceNum(2));
  var call419 = callmethod(var_mx,"pretty", [1], opresult418);
  var opresult421 = callmethod(opresult416, "++", [1], call419);
  var_s = opresult421;
  return opresult421;
};
  var call422 = callmethod(Grace_prelude,"for()do", [1, 1], call410, block411);
  lineNumber = 187
  lineNumber = 186
  var string423 = new GraceString("\n");
  var opresult425 = callmethod(var_s, "++", [1], string423);
  var_s = opresult425;
  lineNumber = 188
  lineNumber = 187
  var opresult427 = callmethod(var_s, "++", [1], var_spc);
  var string428 = new GraceString("Body:");
  var opresult430 = callmethod(opresult427, "++", [1], string428);
  var_s = opresult430;
  lineNumber = 189
  lineNumber = 188
  lineNumber = 1
  lineNumber = 188
  var call431 = callmethod(this,"body", [0]);
  lineNumber = 189
  var block432 = Grace_allocObject();
  block432.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block432.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block432.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block432.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block432.receiver = this;
  block432.className = 'block<ast:189>';
  block432.real = function(
var_mx
) {
  lineNumber = 190
  lineNumber = 189
  var string433 = new GraceString("\n  ");
  var opresult435 = callmethod(var_s, "++", [1], string433);
  var opresult437 = callmethod(opresult435, "++", [1], var_spc);
  var opresult439 = callmethod(var_depth, "+", [1], new GraceNum(2));
  var call440 = callmethod(var_mx,"pretty", [1], opresult439);
  var opresult442 = callmethod(opresult437, "++", [1], call440);
  var_s = opresult442;
  return opresult442;
};
  var call443 = callmethod(Grace_prelude,"for()do", [1, 1], call431, block432);
  lineNumber = 194
  lineNumber = 196
  var call445 = callmethod(this,"matchingPattern", [0]);
  lineNumber = 191
  var bool446 = new GraceBoolean(false)
  var opresult448 = callmethod(call445, "!=", [1], bool446);
  if (Grace_isTrue(opresult448)) {
  lineNumber = 193
  lineNumber = 192
  var string449 = new GraceString("\n");
  var opresult451 = callmethod(var_s, "++", [1], string449);
  var_s = opresult451;
  lineNumber = 194
  lineNumber = 193
  var opresult453 = callmethod(var_s, "++", [1], var_spc);
  var string454 = new GraceString("Pattern:");
  var opresult456 = callmethod(opresult453, "++", [1], string454);
  var_s = opresult456;
  lineNumber = 194
  lineNumber = 195
  lineNumber = 194
  var string457 = new GraceString("\n  ");
  var opresult459 = callmethod(var_s, "++", [1], string457);
  var opresult461 = callmethod(opresult459, "++", [1], var_spc);
  var opresult463 = callmethod(var_depth, "+", [1], new GraceNum(2));
  lineNumber = 195
  var call464 = callmethod(this,"matchingPattern", [0]);
  var call465 = callmethod(call464,"pretty", [1], opresult463);
  var opresult467 = callmethod(opresult461, "++", [1], call465);
  var_s = opresult467;
  var if444 = opresult467;
}
  lineNumber = 196
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj361.methods["pretty"] = func395;
var func468 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 200
  lineNumber = 199
  var string469 = new GraceString("");
  var var_spc = string469;
  lineNumber = 202
  lineNumber = 200
  var diff471 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult473 = callmethod(new GraceNum(0), "..", [1], diff471);
  lineNumber = 202
  var block474 = Grace_allocObject();
  block474.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block474.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block474.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block474.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block474.receiver = this;
  block474.className = 'block<ast:202>';
  block474.real = function(
var_i
) {
  lineNumber = 201
  var string475 = new GraceString("    ");
  var opresult477 = callmethod(var_spc, "++", [1], string475);
  var_spc = opresult477;
  return opresult477;
};
  var call478 = callmethod(Grace_prelude,"for()do", [1, 1], opresult473, block474);
  lineNumber = 204
  lineNumber = 203
  var string479 = new GraceString("{");
  var var_s = string479;
  lineNumber = 217
  lineNumber = 220
  lineNumber = 1
  lineNumber = 220
  lineNumber = 1
  lineNumber = 204
  var call481 = callmethod(this,"params", [0]);
  var call482 = callmethod(call481,"size", [0]);
  var opresult484 = callmethod(call482, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult484)) {
  lineNumber = 206
  lineNumber = 205
  var string485 = new GraceString(" ");
  var opresult487 = callmethod(var_s, "++", [1], string485);
  var_s = opresult487;
  lineNumber = 217
  lineNumber = 206
  lineNumber = 1
  lineNumber = 206
  lineNumber = 1
  lineNumber = 206
  var call488 = callmethod(this,"params", [0]);
  var call489 = callmethod(call488,"indices", [0]);
  lineNumber = 217
  var block490 = Grace_allocObject();
  block490.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block490.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block490.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block490.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block490.receiver = this;
  block490.className = 'block<ast:217>';
  block490.real = function(
var_i
) {
  lineNumber = 208
  lineNumber = 1
  lineNumber = 207
  var call491 = callmethod(this,"params", [0]);
  var idxres492 = call491.methods["[]"].call(call491, [1], var_i);
  var var_p = idxres492;
  lineNumber = 211
  lineNumber = 213
  var call494 = callmethod(this,"matchingPattern", [0]);
  lineNumber = 208
  var bool495 = new GraceBoolean(false)
  var opresult497 = callmethod(call494, "!=", [1], bool495);
  if (Grace_isTrue(opresult497)) {
  lineNumber = 209
  lineNumber = 210
  lineNumber = 209
  var string498 = new GraceString("(");
  var opresult500 = callmethod(var_s, "++", [1], string498);
  var call501 = callmethod(var_p,"toGrace", [1], new GraceNum(0));
  var opresult503 = callmethod(opresult500, "++", [1], call501);
  var string504 = new GraceString(")");
  var opresult506 = callmethod(opresult503, "++", [1], string504);
  var_s = opresult506;
  var if493 = opresult506;
  } else {
  lineNumber = 211
  var call507 = callmethod(var_p,"toGrace", [1], new GraceNum(0));
  var opresult509 = callmethod(var_s, "++", [1], call507);
  var_s = opresult509;
  var if493 = opresult509;
}
  lineNumber = 217
  lineNumber = 218
  lineNumber = 213
  lineNumber = 218
  lineNumber = 1
  lineNumber = 218
  lineNumber = 1
  lineNumber = 213
  var call511 = callmethod(this,"params", [0]);
  var call512 = callmethod(call511,"size", [0]);
  var opresult514 = callmethod(var_i, "<", [1], call512);
  if (Grace_isTrue(opresult514)) {
  lineNumber = 215
  lineNumber = 214
  var string515 = new GraceString(", ");
  var opresult517 = callmethod(var_s, "++", [1], string515);
  var_s = opresult517;
  var if510 = opresult517;
  } else {
  lineNumber = 217
  lineNumber = 216
  var string518 = new GraceString(" ->");
  var opresult520 = callmethod(var_s, "++", [1], string518);
  var_s = opresult520;
  var if510 = opresult520;
}
  return if510;
};
  var call521 = callmethod(Grace_prelude,"for()do", [1, 1], call489, block490);
  var if480 = call521;
}
  lineNumber = 221
  lineNumber = 220
  lineNumber = 1
  lineNumber = 220
  var call522 = callmethod(this,"body", [0]);
  lineNumber = 221
  var block523 = Grace_allocObject();
  block523.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block523.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block523.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block523.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block523.receiver = this;
  block523.className = 'block<ast:221>';
  block523.real = function(
var_mx
) {
  lineNumber = 222
  lineNumber = 221
  var string524 = new GraceString("\n");
  var opresult526 = callmethod(var_s, "++", [1], string524);
  var opresult528 = callmethod(opresult526, "++", [1], var_spc);
  var string529 = new GraceString("    ");
  var opresult531 = callmethod(opresult528, "++", [1], string529);
  var opresult533 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call534 = callmethod(var_mx,"toGrace", [1], opresult533);
  var opresult536 = callmethod(opresult531, "++", [1], call534);
  var_s = opresult536;
  return opresult536;
};
  var call537 = callmethod(Grace_prelude,"for()do", [1, 1], call522, block523);
  lineNumber = 224
  lineNumber = 223
  var string538 = new GraceString("\n");
  var opresult540 = callmethod(var_s, "++", [1], string538);
  var opresult542 = callmethod(opresult540, "++", [1], var_spc);
  var string543 = new GraceString("}");
  var opresult545 = callmethod(opresult542, "++", [1], string543);
  var_s = opresult545;
  lineNumber = 224
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func468.paramTypes = [];
func468.paramTypes.push([type_Number, "depth"]);
  obj361.methods["toGrace"] = func468;
  superDepth = origSuperDepth;
}
obj_init_361.apply(obj361, []);
  return obj361
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj358.methods["new"] = func360;
  superDepth = origSuperDepth;
}
obj_init_358.apply(obj358, []);
  var var_blockNode = obj358;
  lineNumber = 227
  lineNumber = 1
var func546 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 227
  return var_matchCaseNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["matchCaseNode"] = func546;
  lineNumber = 1
  var obj547 = Grace_allocObject();
  obj547.outer = this;
    var reader_ast_outer548 = function() {
    return this.outer;
  }
  obj547.methods["outer"] = reader_ast_outer548;
function obj_init_547() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func549 = function(argcv) {
  var curarg = 1;
  var var_matchee = arguments[curarg];
  curarg++;
  var var_cases__39__ = arguments[curarg];
  curarg++;
  var var_elsecase__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj550 = Grace_allocObject();
  obj550.outer = this;
    var reader_ast_outer551 = function() {
    return this.outer;
  }
  obj550.methods["outer"] = reader_ast_outer551;
function obj_init_550() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 228
  var string552 = new GraceString("matchcase");
  obj550.data["kind"] = string552;
    var reader_ast_kind553 = function() {
    return this.data["kind"];
  }
  reader_ast_kind553.def = true;
  obj550.methods["kind"] = reader_ast_kind553;
  lineNumber = 229
  obj550.data["value"] = var_matchee;
    var reader_ast_value554 = function() {
    return this.data["value"];
  }
  reader_ast_value554.def = true;
  obj550.methods["value"] = reader_ast_value554;
  lineNumber = 230
  obj550.data["cases"] = var_cases__39__;
    var reader_ast_cases555 = function() {
    return this.data["cases"];
  }
  reader_ast_cases555.def = true;
  obj550.methods["cases"] = reader_ast_cases555;
  lineNumber = 231
  obj550.data["elsecase"] = var_elsecase__39__;
    var reader_ast_elsecase556 = function() {
    return this.data["elsecase"];
  }
  reader_ast_elsecase556.def = true;
  obj550.methods["elsecase"] = reader_ast_elsecase556;
  lineNumber = 232
  var string557 = new GraceString("");
  obj550.data["register"] = string557;
    var reader_ast_register558 = function() {
    return this.data["register"];
  }
  obj550.methods["register"] = reader_ast_register558;
  obj550.data["register"] = string557;
  var writer_ast_register558 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj550.methods["register:="] = writer_ast_register558;
obj550.mutable = true;
  lineNumber = 234
  lineNumber = 1
  lineNumber = 233
  var call559 = callmethod(var_util,"linenum", [0]);
  obj550.data["line"] = call559;
    var reader_ast_line560 = function() {
    return this.data["line"];
  }
  reader_ast_line560.def = true;
  obj550.methods["line"] = reader_ast_line560;
var func561 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 241
  lineNumber = 235
  var call563 = callmethod(var_visitor,"visitMatchCase", [1], this);
  if (Grace_isTrue(call563)) {
  lineNumber = 236
  lineNumber = 237
  lineNumber = 1
  lineNumber = 236
  var call564 = callmethod(this,"value", [0]);
  var call565 = callmethod(call564,"accept", [1], var_visitor);
  lineNumber = 238
  lineNumber = 237
  lineNumber = 1
  lineNumber = 237
  var call566 = callmethod(this,"cases", [0]);
  lineNumber = 238
  var block567 = Grace_allocObject();
  block567.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block567.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block567.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block567.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block567.receiver = this;
  block567.className = 'block<ast:238>';
  block567.real = function(
var_mx
) {
  var call568 = callmethod(var_mx,"accept", [1], var_visitor);
  return call568;
};
  var call569 = callmethod(Grace_prelude,"for()do", [1, 1], call566, block567);
  lineNumber = 241
  lineNumber = 243
  lineNumber = 1
  lineNumber = 240
  var call571 = callmethod(this,"elsecase", [0]);
  var bool572 = new GraceBoolean(false)
  var opresult574 = callmethod(call571, "!=", [1], bool572);
  if (Grace_isTrue(opresult574)) {
  lineNumber = 241
  lineNumber = 242
  lineNumber = 1
  lineNumber = 241
  var call575 = callmethod(this,"elsecase", [0]);
  var call576 = callmethod(call575,"accept", [1], var_visitor);
  var if570 = call576;
}
  var if562 = if570;
}
  return if562
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func561.paramTypes = [];
func561.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj550.methods["accept"] = func561;
var func577 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 247
  lineNumber = 246
  var string578 = new GraceString("");
  var var_spc = string578;
  lineNumber = 249
  lineNumber = 247
  var opresult580 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 249
  var block581 = Grace_allocObject();
  block581.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block581.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block581.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block581.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block581.receiver = this;
  block581.className = 'block<ast:249>';
  block581.real = function(
var_i
) {
  lineNumber = 248
  var string582 = new GraceString("  ");
  var opresult584 = callmethod(var_spc, "++", [1], string582);
  var_spc = opresult584;
  return opresult584;
};
  var call585 = callmethod(Grace_prelude,"for()do", [1, 1], opresult580, block581);
  lineNumber = 251
  lineNumber = 250
  var string586 = new GraceString("Match\n");
  var var_s = string586;
  lineNumber = 251
  lineNumber = 252
  lineNumber = 251
  var opresult588 = callmethod(var_s, "++", [1], var_spc);
  var opresult590 = callmethod(var_depth, "+", [1], new GraceNum(2));
  var call591 = callmethod(var_matchee,"pretty", [1], opresult590);
  var opresult593 = callmethod(opresult588, "++", [1], call591);
  var_s = opresult593;
  lineNumber = 253
  lineNumber = 252
  lineNumber = 1
  lineNumber = 252
  var call594 = callmethod(this,"cases", [0]);
  lineNumber = 253
  var block595 = Grace_allocObject();
  block595.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block595.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block595.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block595.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block595.receiver = this;
  block595.className = 'block<ast:253>';
  block595.real = function(
var_mx
) {
  lineNumber = 254
  lineNumber = 253
  var string596 = new GraceString("\n");
  var opresult598 = callmethod(string596, "++", [1], var_spc);
  var string599 = new GraceString("Case:\n");
  var opresult601 = callmethod(opresult598, "++", [1], string599);
  var opresult603 = callmethod(opresult601, "++", [1], var_spc);
  var string604 = new GraceString("  ");
  var opresult606 = callmethod(opresult603, "++", [1], string604);
  var opresult608 = callmethod(var_depth, "+", [1], new GraceNum(2));
  var call609 = callmethod(var_mx,"pretty", [1], opresult608);
  var opresult611 = callmethod(opresult606, "++", [1], call609);
  var string612 = new GraceString("");
  var opresult614 = callmethod(opresult611, "++", [1], string612);
  var opresult616 = callmethod(var_s, "++", [1], opresult614);
  var_s = opresult616;
  return opresult616;
};
  var call617 = callmethod(Grace_prelude,"for()do", [1, 1], call594, block595);
  lineNumber = 256
  lineNumber = 258
  lineNumber = 255
  var bool619 = new GraceBoolean(false)
  lineNumber = 258
  var call620 = callmethod(this,"elsecase", [0]);
  var opresult622 = callmethod(bool619, "!=", [1], call620);
  if (Grace_isTrue(opresult622)) {
  lineNumber = 256
  lineNumber = 257
  lineNumber = 256
  var string623 = new GraceString("\n");
  var opresult625 = callmethod(string623, "++", [1], var_spc);
  var string626 = new GraceString("Else:\n");
  var opresult628 = callmethod(opresult625, "++", [1], string626);
  var opresult630 = callmethod(opresult628, "++", [1], var_spc);
  var string631 = new GraceString("  ");
  var opresult633 = callmethod(opresult630, "++", [1], string631);
  var opresult635 = callmethod(var_depth, "+", [1], new GraceNum(2));
  lineNumber = 257
  var call636 = callmethod(this,"elsecase", [0]);
  var call637 = callmethod(call636,"pretty", [1], opresult635);
  var opresult639 = callmethod(opresult633, "++", [1], call637);
  lineNumber = 256
  var string640 = new GraceString("");
  var opresult642 = callmethod(opresult639, "++", [1], string640);
  var opresult644 = callmethod(var_s, "++", [1], opresult642);
  var_s = opresult644;
  var if618 = opresult644;
}
  lineNumber = 258
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj550.methods["pretty"] = func577;
var func645 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 262
  lineNumber = 261
  var string646 = new GraceString("");
  var var_spc = string646;
  lineNumber = 264
  lineNumber = 262
  var diff648 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult650 = callmethod(new GraceNum(0), "..", [1], diff648);
  lineNumber = 264
  var block651 = Grace_allocObject();
  block651.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block651.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block651.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block651.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block651.receiver = this;
  block651.className = 'block<ast:264>';
  block651.real = function(
var_i
) {
  lineNumber = 263
  var string652 = new GraceString("    ");
  var opresult654 = callmethod(var_spc, "++", [1], string652);
  var_spc = opresult654;
  return opresult654;
};
  var call655 = callmethod(Grace_prelude,"for()do", [1, 1], opresult650, block651);
  lineNumber = 265
  var string656 = new GraceString("match(");
  lineNumber = 266
  lineNumber = 1
  lineNumber = 265
  var call657 = callmethod(this,"value", [0]);
  var call658 = callmethod(call657,"toGrace", [1], new GraceNum(0));
  var opresult660 = callmethod(string656, "++", [1], call658);
  var string661 = new GraceString(")");
  var opresult663 = callmethod(opresult660, "++", [1], string661);
  var var_s = opresult663;
  lineNumber = 267
  lineNumber = 266
  lineNumber = 1
  lineNumber = 266
  var call664 = callmethod(this,"cases", [0]);
  lineNumber = 267
  var block665 = Grace_allocObject();
  block665.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block665.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block665.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block665.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block665.receiver = this;
  block665.className = 'block<ast:267>';
  block665.real = function(
var_case
) {
  lineNumber = 268
  lineNumber = 267
  var string666 = new GraceString("\n");
  var opresult668 = callmethod(var_s, "++", [1], string666);
  var opresult670 = callmethod(opresult668, "++", [1], var_spc);
  var string671 = new GraceString("    ");
  var opresult673 = callmethod(opresult670, "++", [1], string671);
  var string674 = new GraceString("case ");
  var opresult676 = callmethod(opresult673, "++", [1], string674);
  var opresult678 = callmethod(var_depth, "+", [1], new GraceNum(2));
  var call679 = callmethod(var_case,"toGrace", [1], opresult678);
  var opresult681 = callmethod(opresult676, "++", [1], call679);
  var_s = opresult681;
  return opresult681;
};
  var call682 = callmethod(Grace_prelude,"for()do", [1, 1], call664, block665);
  lineNumber = 270
  lineNumber = 272
  var call684 = callmethod(this,"elsecase", [0]);
  lineNumber = 269
  var bool685 = new GraceBoolean(false)
  var opresult687 = callmethod(call684, "!=", [1], bool685);
  if (Grace_isTrue(opresult687)) {
  lineNumber = 270
  lineNumber = 271
  lineNumber = 270
  var string688 = new GraceString("\n");
  var opresult690 = callmethod(var_s, "++", [1], string688);
  var opresult692 = callmethod(opresult690, "++", [1], var_spc);
  var string693 = new GraceString("    ");
  var opresult695 = callmethod(opresult692, "++", [1], string693);
  var string696 = new GraceString("else ");
  var opresult698 = callmethod(opresult695, "++", [1], string696);
  var opresult700 = callmethod(var_depth, "+", [1], new GraceNum(2));
  lineNumber = 271
  var call701 = callmethod(this,"elsecase", [0]);
  var call702 = callmethod(call701,"toGrace", [1], opresult700);
  var opresult704 = callmethod(opresult698, "++", [1], call702);
  var_s = opresult704;
  var if683 = opresult704;
}
  lineNumber = 272
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func645.paramTypes = [];
func645.paramTypes.push([type_Number, "depth"]);
  obj550.methods["toGrace"] = func645;
  superDepth = origSuperDepth;
}
obj_init_550.apply(obj550, []);
  return obj550
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj547.methods["new"] = func549;
  superDepth = origSuperDepth;
}
obj_init_547.apply(obj547, []);
  var var_matchCaseNode = obj547;
  lineNumber = 275
  lineNumber = 1
var func705 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 275
  return var_methodTypeNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["methodTypeNode"] = func705;
  lineNumber = 1
  var obj706 = Grace_allocObject();
  obj706.outer = this;
    var reader_ast_outer707 = function() {
    return this.outer;
  }
  obj706.methods["outer"] = reader_ast_outer707;
function obj_init_706() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func708 = function(argcv) {
  var curarg = 1;
  var var_name__39__ = arguments[curarg];
  curarg++;
  var var_signature__39__ = arguments[curarg];
  curarg++;
  var var_rtype__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj709 = Grace_allocObject();
  obj709.outer = this;
    var reader_ast_outer710 = function() {
    return this.outer;
  }
  obj709.methods["outer"] = reader_ast_outer710;
function obj_init_709() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 291
  var string711 = new GraceString("methodtype");
  obj709.data["kind"] = string711;
    var reader_ast_kind712 = function() {
    return this.data["kind"];
  }
  reader_ast_kind712.def = true;
  obj709.methods["kind"] = reader_ast_kind712;
  lineNumber = 292
  obj709.data["value"] = var_name__39__;
    var reader_ast_value713 = function() {
    return this.data["value"];
  }
  reader_ast_value713.def = true;
  obj709.methods["value"] = reader_ast_value713;
  lineNumber = 293
  obj709.data["signature"] = var_signature__39__;
    var reader_ast_signature714 = function() {
    return this.data["signature"];
  }
  reader_ast_signature714.def = true;
  obj709.methods["signature"] = reader_ast_signature714;
  lineNumber = 294
  obj709.data["rtype"] = var_rtype__39__;
    var reader_ast_rtype715 = function() {
    return this.data["rtype"];
  }
  reader_ast_rtype715.def = true;
  obj709.methods["rtype"] = reader_ast_rtype715;
  lineNumber = 296
  lineNumber = 1
  lineNumber = 295
  var call716 = callmethod(var_util,"linenum", [0]);
  obj709.data["line"] = call716;
    var reader_ast_line717 = function() {
    return this.data["line"];
  }
  reader_ast_line717.def = true;
  obj709.methods["line"] = reader_ast_line717;
  lineNumber = 296
  var string718 = new GraceString("");
  obj709.data["register"] = string718;
    var reader_ast_register719 = function() {
    return this.data["register"];
  }
  obj709.methods["register"] = reader_ast_register719;
  obj709.data["register"] = string718;
  var writer_ast_register719 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj709.methods["register:="] = writer_ast_register719;
obj709.mutable = true;
var func720 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 307
  lineNumber = 298
  var call722 = callmethod(var_visitor,"visitMethodType", [1], this);
  if (Grace_isTrue(call722)) {
  lineNumber = 300
  lineNumber = 302
  lineNumber = 1
  lineNumber = 299
  var call724 = callmethod(this,"rtype", [0]);
  var bool725 = new GraceBoolean(false)
  var opresult727 = callmethod(call724, "!=", [1], bool725);
  if (Grace_isTrue(opresult727)) {
  lineNumber = 300
  lineNumber = 301
  lineNumber = 1
  lineNumber = 300
  var call728 = callmethod(this,"rtype", [0]);
  var call729 = callmethod(call728,"accept", [1], var_visitor);
  var if723 = call729;
}
  lineNumber = 307
  lineNumber = 302
  lineNumber = 1
  lineNumber = 302
  var call730 = callmethod(this,"signature", [0]);
  lineNumber = 307
  var block731 = Grace_allocObject();
  block731.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block731.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block731.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block731.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block731.receiver = this;
  block731.className = 'block<ast:307>';
  block731.real = function(
var_part
) {
  lineNumber = 304
  lineNumber = 303
  lineNumber = 1
  lineNumber = 303
  var call732 = callmethod(var_part,"params", [0]);
  lineNumber = 304
  var block733 = Grace_allocObject();
  block733.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block733.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block733.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block733.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block733.receiver = this;
  block733.className = 'block<ast:304>';
  block733.real = function(
var_p
) {
  var call734 = callmethod(var_p,"accept", [1], var_visitor);
  return call734;
};
  var call735 = callmethod(Grace_prelude,"for()do", [1, 1], call732, block733);
  lineNumber = 307
  lineNumber = 309
  lineNumber = 1
  lineNumber = 306
  var call737 = callmethod(var_part,"vararg", [0]);
  var bool738 = new GraceBoolean(false)
  var opresult740 = callmethod(call737, "!=", [1], bool738);
  if (Grace_isTrue(opresult740)) {
  lineNumber = 307
  lineNumber = 308
  lineNumber = 1
  lineNumber = 307
  var call741 = callmethod(var_part,"vararg", [0]);
  var call742 = callmethod(call741,"accept", [1], var_visitor);
  var if736 = call742;
}
  return if736;
};
  var call743 = callmethod(Grace_prelude,"for()do", [1, 1], call730, block731);
  var if721 = call743;
}
  return if721
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func720.paramTypes = [];
func720.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj709.methods["accept"] = func720;
var func744 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 314
  lineNumber = 313
  var string745 = new GraceString("");
  var var_spc = string745;
  lineNumber = 316
  lineNumber = 314
  var opresult747 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 316
  var block748 = Grace_allocObject();
  block748.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block748.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block748.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block748.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block748.receiver = this;
  block748.className = 'block<ast:316>';
  block748.real = function(
var_i
) {
  lineNumber = 315
  var string749 = new GraceString("  ");
  var opresult751 = callmethod(var_spc, "++", [1], string749);
  var_spc = opresult751;
  return opresult751;
};
  var call752 = callmethod(Grace_prelude,"for()do", [1, 1], opresult747, block748);
  lineNumber = 318
  lineNumber = 317
  var string753 = new GraceString("MethodType\n");
  var var_s = string753;
  lineNumber = 319
  lineNumber = 318
  var string754 = new GraceString("");
  var opresult756 = callmethod(string754, "++", [1], var_s);
  var string757 = new GraceString("");
  var opresult759 = callmethod(opresult756, "++", [1], string757);
  var opresult761 = callmethod(opresult759, "++", [1], var_spc);
  var string762 = new GraceString("Name: ");
  var opresult764 = callmethod(opresult761, "++", [1], string762);
  lineNumber = 319
  var call765 = callmethod(this,"value", [0]);
  var opresult767 = callmethod(opresult764, "++", [1], call765);
  lineNumber = 318
  var string768 = new GraceString("\n");
  var opresult770 = callmethod(opresult767, "++", [1], string768);
  var_s = opresult770;
  lineNumber = 321
  lineNumber = 322
  var call772 = callmethod(this,"rtype", [0]);
  lineNumber = 319
  var bool773 = new GraceBoolean(false)
  var opresult775 = callmethod(call772, "/=", [1], bool773);
  if (Grace_isTrue(opresult775)) {
  lineNumber = 321
  lineNumber = 320
  var string776 = new GraceString("");
  var opresult778 = callmethod(string776, "++", [1], var_s);
  var string779 = new GraceString("");
  var opresult781 = callmethod(opresult778, "++", [1], string779);
  var opresult783 = callmethod(opresult781, "++", [1], var_spc);
  var string784 = new GraceString("Returns:\n  ");
  var opresult786 = callmethod(opresult783, "++", [1], string784);
  var opresult788 = callmethod(opresult786, "++", [1], var_spc);
  var string789 = new GraceString("");
  var opresult791 = callmethod(opresult788, "++", [1], string789);
  lineNumber = 321
  lineNumber = 1
  lineNumber = 321
  var call792 = callmethod(this,"rtype", [0]);
  var call793 = callmethod(call792,"value", [0]);
  var opresult795 = callmethod(opresult791, "++", [1], call793);
  lineNumber = 320
  var string796 = new GraceString("\n");
  var opresult798 = callmethod(opresult795, "++", [1], string796);
  var_s = opresult798;
  var if771 = opresult798;
}
  lineNumber = 323
  lineNumber = 322
  var string799 = new GraceString("");
  var opresult801 = callmethod(string799, "++", [1], var_s);
  var string802 = new GraceString("");
  var opresult804 = callmethod(opresult801, "++", [1], string802);
  var opresult806 = callmethod(opresult804, "++", [1], var_spc);
  var string807 = new GraceString("Signature:");
  var opresult809 = callmethod(opresult806, "++", [1], string807);
  var_s = opresult809;
  lineNumber = 330
  lineNumber = 323
  var call810 = callmethod(this,"signature", [0]);
  lineNumber = 330
  var block811 = Grace_allocObject();
  block811.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block811.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block811.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block811.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block811.receiver = this;
  block811.className = 'block<ast:330>';
  block811.real = function(
var_part
) {
  lineNumber = 325
  lineNumber = 324
  var string812 = new GraceString("");
  var opresult814 = callmethod(string812, "++", [1], var_s);
  var string815 = new GraceString("\n  ");
  var opresult817 = callmethod(opresult814, "++", [1], string815);
  var opresult819 = callmethod(opresult817, "++", [1], var_spc);
  var string820 = new GraceString("Part: ");
  var opresult822 = callmethod(opresult819, "++", [1], string820);
  lineNumber = 325
  lineNumber = 1
  lineNumber = 324
  var call823 = callmethod(var_part,"name", [0]);
  var opresult825 = callmethod(opresult822, "++", [1], call823);
  var string826 = new GraceString("");
  var opresult828 = callmethod(opresult825, "++", [1], string826);
  var_s = opresult828;
  lineNumber = 326
  lineNumber = 325
  var string829 = new GraceString("");
  var opresult831 = callmethod(string829, "++", [1], var_s);
  var string832 = new GraceString("\n    ");
  var opresult834 = callmethod(opresult831, "++", [1], string832);
  var opresult836 = callmethod(opresult834, "++", [1], var_spc);
  var string837 = new GraceString("Parameters:");
  var opresult839 = callmethod(opresult836, "++", [1], string837);
  var_s = opresult839;
  lineNumber = 327
  lineNumber = 326
  lineNumber = 1
  lineNumber = 326
  var call840 = callmethod(var_part,"params", [0]);
  lineNumber = 327
  var block841 = Grace_allocObject();
  block841.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block841.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block841.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block841.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block841.receiver = this;
  block841.className = 'block<ast:327>';
  block841.real = function(
var_p
) {
  lineNumber = 328
  lineNumber = 327
  var string842 = new GraceString("");
  var opresult844 = callmethod(string842, "++", [1], var_s);
  var string845 = new GraceString("\n      ");
  var opresult847 = callmethod(opresult844, "++", [1], string845);
  var opresult849 = callmethod(opresult847, "++", [1], var_spc);
  var string850 = new GraceString("");
  var opresult852 = callmethod(opresult849, "++", [1], string850);
  var opresult854 = callmethod(var_depth, "+", [1], new GraceNum(4));
  var call855 = callmethod(var_p,"pretty", [1], opresult854);
  var opresult857 = callmethod(opresult852, "++", [1], call855);
  var string858 = new GraceString("");
  var opresult860 = callmethod(opresult857, "++", [1], string858);
  var_s = opresult860;
  return opresult860;
};
  var call861 = callmethod(Grace_prelude,"for()do", [1, 1], call840, block841);
  lineNumber = 330
  lineNumber = 332
  lineNumber = 1
  lineNumber = 329
  var call863 = callmethod(var_part,"vararg", [0]);
  var bool864 = new GraceBoolean(false)
  var opresult866 = callmethod(call863, "!=", [1], bool864);
  if (Grace_isTrue(opresult866)) {
  lineNumber = 330
  lineNumber = 331
  lineNumber = 330
  var string867 = new GraceString("");
  var opresult869 = callmethod(string867, "++", [1], var_s);
  var string870 = new GraceString("\n    ");
  var opresult872 = callmethod(opresult869, "++", [1], string870);
  var opresult874 = callmethod(opresult872, "++", [1], var_spc);
  var string875 = new GraceString("Vararg: ");
  var opresult877 = callmethod(opresult874, "++", [1], string875);
  var opresult879 = callmethod(var_depth, "+", [1], new GraceNum(3));
  lineNumber = 331
  lineNumber = 1
  lineNumber = 330
  var call880 = callmethod(var_part,"vararg", [0]);
  var call881 = callmethod(call880,"pretty", [1], opresult879);
  var opresult883 = callmethod(opresult877, "++", [1], call881);
  var string884 = new GraceString("");
  var opresult886 = callmethod(opresult883, "++", [1], string884);
  var_s = opresult886;
  var if862 = opresult886;
}
  return if862;
};
  var call887 = callmethod(Grace_prelude,"for()do", [1, 1], call810, block811);
  lineNumber = 333
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj709.methods["pretty"] = func744;
var func888 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 337
  lineNumber = 336
  var string889 = new GraceString("");
  var var_s = string889;
  lineNumber = 352
  lineNumber = 337
  lineNumber = 1
  lineNumber = 337
  var call890 = callmethod(this,"signature", [0]);
  lineNumber = 352
  var block891 = Grace_allocObject();
  block891.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block891.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block891.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block891.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block891.receiver = this;
  block891.className = 'block<ast:352>';
  block891.real = function(
var_part
) {
  lineNumber = 339
  lineNumber = 338
  lineNumber = 339
  lineNumber = 1
  lineNumber = 338
  var call892 = callmethod(var_part,"name", [0]);
  var opresult894 = callmethod(var_s, "++", [1], call892);
  var_s = opresult894;
  lineNumber = 352
  lineNumber = 353
  lineNumber = 1
  lineNumber = 353
  lineNumber = 1
  lineNumber = 339
  var call896 = callmethod(var_part,"params", [0]);
  var call897 = callmethod(call896,"size", [0]);
  var opresult899 = callmethod(call897, ">", [1], new GraceNum(0));
  lineNumber = 353
  lineNumber = 1
  lineNumber = 339
  var call900 = callmethod(var_part,"vararg", [0]);
  var bool901 = new GraceBoolean(false)
  var opresult903 = callmethod(call900, "!=", [1], bool901);
  var opresult905 = callmethod(opresult899, "|", [1], opresult903);
  if (Grace_isTrue(opresult905)) {
  lineNumber = 341
  lineNumber = 340
  var string906 = new GraceString("(");
  var opresult908 = callmethod(var_s, "++", [1], string906);
  var_s = opresult908;
  lineNumber = 346
  lineNumber = 341
  lineNumber = 1
  lineNumber = 341
  lineNumber = 1
  lineNumber = 341
  var call909 = callmethod(var_part,"params", [0]);
  var call910 = callmethod(call909,"indices", [0]);
  lineNumber = 346
  var block911 = Grace_allocObject();
  block911.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block911.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block911.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block911.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block911.receiver = this;
  block911.className = 'block<ast:346>';
  block911.real = function(
var_pnr
) {
  lineNumber = 343
  lineNumber = 1
  lineNumber = 342
  var call912 = callmethod(var_part,"params", [0]);
  var idxres913 = call912.methods["[]"].call(call912, [1], var_pnr);
  var var_p = idxres913;
  lineNumber = 343
  var opresult915 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call916 = callmethod(var_p,"toGrace", [1], opresult915);
  var opresult918 = callmethod(var_s, "++", [1], call916);
  var_s = opresult918;
  lineNumber = 346
  lineNumber = 347
  lineNumber = 344
  lineNumber = 347
  lineNumber = 1
  lineNumber = 347
  lineNumber = 1
  lineNumber = 344
  var call920 = callmethod(var_part,"params", [0]);
  var call921 = callmethod(call920,"size", [0]);
  var opresult923 = callmethod(var_pnr, "<", [1], call921);
  lineNumber = 347
  lineNumber = 1
  lineNumber = 344
  var call924 = callmethod(var_part,"vararg", [0]);
  var bool925 = new GraceBoolean(false)
  var opresult927 = callmethod(call924, "!=", [1], bool925);
  var opresult929 = callmethod(opresult923, "|", [1], opresult927);
  if (Grace_isTrue(opresult929)) {
  lineNumber = 346
  lineNumber = 345
  var string930 = new GraceString(", ");
  var opresult932 = callmethod(var_s, "++", [1], string930);
  var_s = opresult932;
  var if919 = opresult932;
}
  return if919;
};
  var call933 = callmethod(Grace_prelude,"for()do", [1, 1], call910, block911);
  lineNumber = 350
  lineNumber = 351
  lineNumber = 1
  lineNumber = 348
  var call935 = callmethod(var_part,"vararg", [0]);
  var bool936 = new GraceBoolean(false)
  var opresult938 = callmethod(call935, "!=", [1], bool936);
  if (Grace_isTrue(opresult938)) {
  lineNumber = 350
  lineNumber = 349
  var string939 = new GraceString("*");
  var opresult941 = callmethod(var_s, "++", [1], string939);
  lineNumber = 350
  lineNumber = 1
  lineNumber = 350
  lineNumber = 1
  lineNumber = 349
  var call942 = callmethod(var_part,"vararg", [0]);
  var call943 = callmethod(call942,"value", [0]);
  var opresult945 = callmethod(opresult941, "++", [1], call943);
  var_s = opresult945;
  var if934 = opresult945;
}
  lineNumber = 352
  lineNumber = 351
  var string946 = new GraceString(")");
  var opresult948 = callmethod(var_s, "++", [1], string946);
  var_s = opresult948;
  var if895 = opresult948;
}
  return if895;
};
  var call949 = callmethod(Grace_prelude,"for()do", [1, 1], call890, block891);
  lineNumber = 355
  lineNumber = 357
  lineNumber = 1
  lineNumber = 354
  var call951 = callmethod(this,"rtype", [0]);
  var bool952 = new GraceBoolean(false)
  var opresult954 = callmethod(call951, "!=", [1], bool952);
  if (Grace_isTrue(opresult954)) {
  lineNumber = 355
  lineNumber = 356
  lineNumber = 355
  var string955 = new GraceString(" -> ");
  var opresult957 = callmethod(var_s, "++", [1], string955);
  var opresult959 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 356
  lineNumber = 1
  lineNumber = 355
  var call960 = callmethod(this,"rtype", [0]);
  var call961 = callmethod(call960,"toGrace", [1], opresult959);
  var opresult963 = callmethod(opresult957, "++", [1], call961);
  var_s = opresult963;
  var if950 = opresult963;
}
  lineNumber = 357
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func888.paramTypes = [];
func888.paramTypes.push([type_Number, "depth"]);
  obj709.methods["toGrace"] = func888;
  superDepth = origSuperDepth;
}
obj_init_709.apply(obj709, []);
  return obj709
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj706.methods["new"] = func708;
  superDepth = origSuperDepth;
}
obj_init_706.apply(obj706, []);
  var var_methodTypeNode = obj706;
  lineNumber = 360
  lineNumber = 1
var func964 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 360
  return var_typeNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["typeNode"] = func964;
  lineNumber = 1
  var obj965 = Grace_allocObject();
  obj965.outer = this;
    var reader_ast_outer966 = function() {
    return this.outer;
  }
  obj965.methods["outer"] = reader_ast_outer966;
function obj_init_965() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func967 = function(argcv) {
  var curarg = 1;
  var var_name__39__ = arguments[curarg];
  curarg++;
  var var_methods__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj968 = Grace_allocObject();
  obj968.outer = this;
    var reader_ast_outer969 = function() {
    return this.outer;
  }
  obj968.methods["outer"] = reader_ast_outer969;
function obj_init_968() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 361
  var string970 = new GraceString("type");
  obj968.data["kind"] = string970;
    var reader_ast_kind971 = function() {
    return this.data["kind"];
  }
  reader_ast_kind971.def = true;
  obj968.methods["kind"] = reader_ast_kind971;
  lineNumber = 362
  obj968.data["value"] = var_name__39__;
    var reader_ast_value972 = function() {
    return this.data["value"];
  }
  reader_ast_value972.def = true;
  obj968.methods["value"] = reader_ast_value972;
  lineNumber = 363
  obj968.data["methods"] = var_methods__39__;
    var reader_ast_methods973 = function() {
    return this.data["methods"];
  }
  reader_ast_methods973.def = true;
  obj968.methods["methods"] = reader_ast_methods973;
  lineNumber = 365
  var array974 = new GraceList([
]);

  obj968.data["unionTypes"] = array974;
    var reader_ast_unionTypes975 = function() {
    return this.data["unionTypes"];
  }
  reader_ast_unionTypes975.def = true;
  obj968.methods["unionTypes"] = reader_ast_unionTypes975;
  lineNumber = 366
  var array976 = new GraceList([
]);

  obj968.data["intersectionTypes"] = array976;
    var reader_ast_intersectionTypes977 = function() {
    return this.data["intersectionTypes"];
  }
  reader_ast_intersectionTypes977.def = true;
  obj968.methods["intersectionTypes"] = reader_ast_intersectionTypes977;
  lineNumber = 367
  lineNumber = 1
  lineNumber = 366
  var call978 = callmethod(var_util,"linenum", [0]);
  obj968.data["line"] = call978;
    var reader_ast_line979 = function() {
    return this.data["line"];
  }
  reader_ast_line979.def = true;
  obj968.methods["line"] = reader_ast_line979;
  lineNumber = 368
  var array980 = new GraceList([
]);

  obj968.data["generics"] = array980;
    var reader_ast_generics981 = function() {
    return this.data["generics"];
  }
  obj968.methods["generics"] = reader_ast_generics981;
  obj968.data["generics"] = array980;
  var writer_ast_generics981 = function(argcv, o) {
    this.data["generics"] = o;
  }
  obj968.methods["generics:="] = writer_ast_generics981;
obj968.mutable = true;
  var bool982 = new GraceBoolean(false)
  obj968.data["nominal"] = bool982;
    var reader_ast_nominal983 = function() {
    return this.data["nominal"];
  }
  obj968.methods["nominal"] = reader_ast_nominal983;
  obj968.data["nominal"] = bool982;
  var writer_ast_nominal983 = function(argcv, o) {
    this.data["nominal"] = o;
  }
  obj968.methods["nominal:="] = writer_ast_nominal983;
obj968.mutable = true;
  lineNumber = 369
  var string984 = new GraceString("");
  obj968.data["register"] = string984;
    var reader_ast_register985 = function() {
    return this.data["register"];
  }
  obj968.methods["register"] = reader_ast_register985;
  obj968.data["register"] = string984;
  var writer_ast_register985 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj968.methods["register:="] = writer_ast_register985;
obj968.mutable = true;
var func986 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 383
  lineNumber = 371
  var call988 = callmethod(var_visitor,"visitType", [1], this);
  if (Grace_isTrue(call988)) {
  lineNumber = 374
  lineNumber = 377
  lineNumber = 1
  lineNumber = 377
  lineNumber = 1
  lineNumber = 372
  var call990 = callmethod(this,"unionTypes", [0]);
  var call991 = callmethod(call990,"size", [0]);
  var opresult993 = callmethod(call991, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult993)) {
  lineNumber = 374
  lineNumber = 373
  lineNumber = 1
  lineNumber = 373
  var call994 = callmethod(this,"unionTypes", [0]);
  lineNumber = 374
  var block995 = Grace_allocObject();
  block995.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block995.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block995.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block995.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block995.receiver = this;
  block995.className = 'block<ast:374>';
  block995.real = function(
var_ut
) {
  var call996 = callmethod(var_ut,"accept", [1], var_visitor);
  return call996;
};
  var call997 = callmethod(Grace_prelude,"for()do", [1, 1], call994, block995);
  var if989 = call997;
}
  lineNumber = 379
  lineNumber = 382
  lineNumber = 1
  lineNumber = 382
  lineNumber = 1
  lineNumber = 377
  var call999 = callmethod(this,"intersectionTypes", [0]);
  var call1000 = callmethod(call999,"size", [0]);
  var opresult1002 = callmethod(call1000, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1002)) {
  lineNumber = 379
  lineNumber = 378
  lineNumber = 1
  lineNumber = 378
  var call1003 = callmethod(this,"intersectionTypes", [0]);
  lineNumber = 379
  var block1004 = Grace_allocObject();
  block1004.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1004.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1004.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1004.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1004.receiver = this;
  block1004.className = 'block<ast:379>';
  block1004.real = function(
var_it
) {
  var call1005 = callmethod(var_it,"accept", [1], var_visitor);
  return call1005;
};
  var call1006 = callmethod(Grace_prelude,"for()do", [1, 1], call1003, block1004);
  var if998 = call1006;
}
  lineNumber = 383
  lineNumber = 382
  lineNumber = 1
  lineNumber = 382
  var call1007 = callmethod(this,"methods", [0]);
  lineNumber = 383
  var block1008 = Grace_allocObject();
  block1008.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1008.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1008.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1008.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1008.receiver = this;
  block1008.className = 'block<ast:383>';
  block1008.real = function(
var_mx
) {
  var call1009 = callmethod(var_mx,"accept", [1], var_visitor);
  return call1009;
};
  var call1010 = callmethod(Grace_prelude,"for()do", [1, 1], call1007, block1008);
  var if987 = call1010;
}
  return if987
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func986.paramTypes = [];
func986.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj968.methods["accept"] = func986;
var func1011 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 389
  lineNumber = 388
  var string1012 = new GraceString("");
  var var_spc = string1012;
  lineNumber = 391
  lineNumber = 389
  var opresult1014 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 391
  var block1015 = Grace_allocObject();
  block1015.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1015.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1015.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1015.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1015.receiver = this;
  block1015.className = 'block<ast:391>';
  block1015.real = function(
var_i
) {
  lineNumber = 390
  var string1016 = new GraceString("  ");
  var opresult1018 = callmethod(var_spc, "++", [1], string1016);
  var_spc = opresult1018;
  return opresult1018;
};
  var call1019 = callmethod(Grace_prelude,"for()do", [1, 1], opresult1014, block1015);
  lineNumber = 393
  lineNumber = 392
  var string1020 = new GraceString("Type\n");
  var var_s = string1020;
  lineNumber = 394
  lineNumber = 393
  var string1021 = new GraceString("");
  var opresult1023 = callmethod(string1021, "++", [1], var_s);
  var string1024 = new GraceString("");
  var opresult1026 = callmethod(opresult1023, "++", [1], string1024);
  var opresult1028 = callmethod(opresult1026, "++", [1], var_spc);
  var string1029 = new GraceString("Name: ");
  var opresult1031 = callmethod(opresult1028, "++", [1], string1029);
  lineNumber = 394
  var call1032 = callmethod(this,"value", [0]);
  var opresult1034 = callmethod(opresult1031, "++", [1], call1032);
  lineNumber = 393
  var string1035 = new GraceString("\n");
  var opresult1037 = callmethod(opresult1034, "++", [1], string1035);
  var_s = opresult1037;
  lineNumber = 398
  lineNumber = 400
  lineNumber = 1
  lineNumber = 400
  var call1039 = callmethod(this,"unionTypes", [0]);
  var call1040 = callmethod(call1039,"size", [0]);
  lineNumber = 394
  var opresult1042 = callmethod(call1040, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1042)) {
  lineNumber = 396
  lineNumber = 395
  var string1043 = new GraceString("");
  var opresult1045 = callmethod(string1043, "++", [1], var_s);
  var string1046 = new GraceString("");
  var opresult1048 = callmethod(opresult1045, "++", [1], string1046);
  var opresult1050 = callmethod(opresult1048, "++", [1], var_spc);
  var string1051 = new GraceString("Union of:\n");
  var opresult1053 = callmethod(opresult1050, "++", [1], string1051);
  var_s = opresult1053;
  lineNumber = 398
  lineNumber = 396
  var call1054 = callmethod(this,"unionTypes", [0]);
  lineNumber = 398
  var block1055 = Grace_allocObject();
  block1055.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1055.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1055.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1055.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1055.receiver = this;
  block1055.className = 'block<ast:398>';
  block1055.real = function(
var_ut
) {
  lineNumber = 397
  var string1056 = new GraceString("");
  var opresult1058 = callmethod(string1056, "++", [1], var_s);
  var string1059 = new GraceString("");
  var opresult1061 = callmethod(opresult1058, "++", [1], string1059);
  var opresult1063 = callmethod(opresult1061, "++", [1], var_spc);
  var string1064 = new GraceString("  ");
  var opresult1066 = callmethod(opresult1063, "++", [1], string1064);
  lineNumber = 398
  lineNumber = 1
  lineNumber = 397
  var call1067 = callmethod(var_ut,"value", [0]);
  var opresult1069 = callmethod(opresult1066, "++", [1], call1067);
  var string1070 = new GraceString("\n");
  var opresult1072 = callmethod(opresult1069, "++", [1], string1070);
  var_s = opresult1072;
  return opresult1072;
};
  var call1073 = callmethod(Grace_prelude,"for()do", [1, 1], call1054, block1055);
  var if1038 = call1073;
}
  lineNumber = 404
  lineNumber = 406
  lineNumber = 1
  lineNumber = 406
  var call1075 = callmethod(this,"intersectionTypes", [0]);
  var call1076 = callmethod(call1075,"size", [0]);
  lineNumber = 400
  var opresult1078 = callmethod(call1076, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1078)) {
  lineNumber = 402
  lineNumber = 401
  var string1079 = new GraceString("");
  var opresult1081 = callmethod(string1079, "++", [1], var_s);
  var string1082 = new GraceString("");
  var opresult1084 = callmethod(opresult1081, "++", [1], string1082);
  var opresult1086 = callmethod(opresult1084, "++", [1], var_spc);
  var string1087 = new GraceString("Intersection of:\n");
  var opresult1089 = callmethod(opresult1086, "++", [1], string1087);
  var_s = opresult1089;
  lineNumber = 404
  lineNumber = 402
  var call1090 = callmethod(this,"intersectionTypes", [0]);
  lineNumber = 404
  var block1091 = Grace_allocObject();
  block1091.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1091.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1091.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1091.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1091.receiver = this;
  block1091.className = 'block<ast:404>';
  block1091.real = function(
var_it
) {
  lineNumber = 403
  var string1092 = new GraceString("");
  var opresult1094 = callmethod(string1092, "++", [1], var_s);
  var string1095 = new GraceString("");
  var opresult1097 = callmethod(opresult1094, "++", [1], string1095);
  var opresult1099 = callmethod(opresult1097, "++", [1], var_spc);
  var string1100 = new GraceString("  ");
  var opresult1102 = callmethod(opresult1099, "++", [1], string1100);
  lineNumber = 404
  lineNumber = 1
  lineNumber = 403
  var call1103 = callmethod(var_it,"value", [0]);
  var opresult1105 = callmethod(opresult1102, "++", [1], call1103);
  var string1106 = new GraceString("\n");
  var opresult1108 = callmethod(opresult1105, "++", [1], string1106);
  var_s = opresult1108;
  return opresult1108;
};
  var call1109 = callmethod(Grace_prelude,"for()do", [1, 1], call1090, block1091);
  var if1074 = call1109;
}
  lineNumber = 407
  lineNumber = 406
  var opresult1111 = callmethod(var_s, "++", [1], var_spc);
  var string1112 = new GraceString("Methods:");
  var opresult1114 = callmethod(opresult1111, "++", [1], string1112);
  var_s = opresult1114;
  lineNumber = 408
  lineNumber = 407
  var call1115 = callmethod(this,"methods", [0]);
  lineNumber = 408
  var block1116 = Grace_allocObject();
  block1116.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1116.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1116.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1116.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1116.receiver = this;
  block1116.className = 'block<ast:408>';
  block1116.real = function(
var_mx
) {
  lineNumber = 409
  lineNumber = 408
  var string1117 = new GraceString("\n  ");
  var opresult1119 = callmethod(var_s, "++", [1], string1117);
  var opresult1121 = callmethod(opresult1119, "++", [1], var_spc);
  var opresult1123 = callmethod(var_depth, "+", [1], new GraceNum(2));
  var call1124 = callmethod(var_mx,"pretty", [1], opresult1123);
  var opresult1126 = callmethod(opresult1121, "++", [1], call1124);
  var_s = opresult1126;
  return opresult1126;
};
  var call1127 = callmethod(Grace_prelude,"for()do", [1, 1], call1115, block1116);
  lineNumber = 411
  lineNumber = 410
  var string1128 = new GraceString("\n");
  var opresult1130 = callmethod(var_s, "++", [1], string1128);
  var_s = opresult1130;
  lineNumber = 411
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj968.methods["pretty"] = func1011;
var func1131 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 415
  lineNumber = 414
  var string1132 = new GraceString("");
  var var_spc = string1132;
  lineNumber = 417
  lineNumber = 415
  var diff1134 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult1136 = callmethod(new GraceNum(0), "..", [1], diff1134);
  lineNumber = 417
  var block1137 = Grace_allocObject();
  block1137.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1137.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1137.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1137.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1137.receiver = this;
  block1137.className = 'block<ast:417>';
  block1137.real = function(
var_i
) {
  lineNumber = 416
  var string1138 = new GraceString("    ");
  var opresult1140 = callmethod(var_spc, "++", [1], string1138);
  var_spc = opresult1140;
  return opresult1140;
};
  var call1141 = callmethod(Grace_prelude,"for()do", [1, 1], opresult1136, block1137);
  lineNumber = 419
  lineNumber = 418
  var string1142 = new GraceString("");
  var var_s = string1142;
  lineNumber = 419
  lineNumber = 420
  lineNumber = 1
  lineNumber = 419
  var call1143 = callmethod(this,"value", [0]);
  var call1144 = callmethod(call1143,"substringFrom()to", [1, 1], new GraceNum(2), new GraceNum(6));
  var string1145 = new GraceString("Anon_");
  var opresult1147 = callmethod(call1144, "==", [1], string1145);
  var var_isanon = opresult1147;
  lineNumber = 421
  lineNumber = 420
  lineNumber = 422
  lineNumber = 1
  lineNumber = 420
  var call1148 = callmethod(this,"value", [0]);
  var call1149 = callmethod(call1148,"substringFrom()to", [1, 1], new GraceNum(1), new GraceNum(6));
  var string1150 = new GraceString("Union<");
  var opresult1152 = callmethod(call1149, "==", [1], string1150);
  lineNumber = 421
  lineNumber = 420
  lineNumber = 1
  lineNumber = 421
  var call1153 = callmethod(this,"value", [0]);
  var call1154 = callmethod(call1153,"substringFrom()to", [1, 1], new GraceNum(1), new GraceNum(13));
  var string1155 = new GraceString("Intersection<");
  var opresult1157 = callmethod(call1154, "==", [1], string1155);
  var opresult1159 = callmethod(opresult1152, "|", [1], opresult1157);
  var var_isadhoc = opresult1159;
  lineNumber = 435
  lineNumber = 436
  lineNumber = 422
  var call1161 = callmethod(var_isanon,"prefix!", [0]);
  lineNumber = 436
  lineNumber = 422
  var call1162 = callmethod(var_isadhoc,"prefix!", [0]);
  var opresult1164 = callmethod(call1161, "&", [1], call1162);
  if (Grace_isTrue(opresult1164)) {
  lineNumber = 424
  lineNumber = 423
  var string1165 = new GraceString("type ");
  lineNumber = 424
  lineNumber = 1
  lineNumber = 423
  var call1166 = callmethod(this,"value", [0]);
  var opresult1168 = callmethod(string1165, "++", [1], call1166);
  var string1169 = new GraceString("");
  var opresult1171 = callmethod(opresult1168, "++", [1], string1169);
  var_s = opresult1171;
  lineNumber = 433
  lineNumber = 434
  lineNumber = 1
  lineNumber = 434
  var call1173 = callmethod(this,"generics", [0]);
  var call1174 = callmethod(call1173,"size", [0]);
  lineNumber = 424
  var opresult1176 = callmethod(call1174, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1176)) {
  lineNumber = 426
  lineNumber = 425
  var string1177 = new GraceString("<");
  var opresult1179 = callmethod(var_s, "++", [1], string1177);
  var_s = opresult1179;
  lineNumber = 430
  lineNumber = 426
  lineNumber = 1
  lineNumber = 426
  var call1180 = callmethod(this,"generics", [0]);
  var call1181 = callmethod(call1180,"indices", [0]);
  lineNumber = 430
  var block1182 = Grace_allocObject();
  block1182.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1182.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1182.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1182.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1182.receiver = this;
  block1182.className = 'block<ast:430>';
  block1182.real = function(
var_i
) {
  lineNumber = 428
  lineNumber = 427
  lineNumber = 428
  lineNumber = 1
  lineNumber = 428
  var call1183 = callmethod(this,"generics", [0]);
  lineNumber = 427
  var idxres1184 = call1183.methods["[]"].call(call1183, [1], var_i);
  var call1185 = callmethod(idxres1184,"value", [0]);
  var opresult1187 = callmethod(var_s, "++", [1], call1185);
  var_s = opresult1187;
  lineNumber = 430
  lineNumber = 431
  lineNumber = 428
  lineNumber = 431
  lineNumber = 1
  lineNumber = 431
  var call1189 = callmethod(this,"generics", [0]);
  var call1190 = callmethod(call1189,"size", [0]);
  var opresult1192 = callmethod(var_i, "<", [1], call1190);
  if (Grace_isTrue(opresult1192)) {
  lineNumber = 430
  lineNumber = 429
  var string1193 = new GraceString(", ");
  var opresult1195 = callmethod(var_s, "++", [1], string1193);
  var_s = opresult1195;
  var if1188 = opresult1195;
}
  return if1188;
};
  var call1196 = callmethod(Grace_prelude,"for()do", [1, 1], call1181, block1182);
  lineNumber = 433
  lineNumber = 432
  var string1197 = new GraceString(">");
  var opresult1199 = callmethod(var_s, "++", [1], string1197);
  var_s = opresult1199;
  var if1172 = opresult1199;
}
  lineNumber = 435
  lineNumber = 434
  var string1200 = new GraceString(" = ");
  var opresult1202 = callmethod(var_s, "++", [1], string1200);
  var_s = opresult1202;
  var if1160 = opresult1202;
}
  lineNumber = 439
  lineNumber = 441
  lineNumber = 436
  var call1204 = callmethod(var_isadhoc,"prefix!", [0]);
  lineNumber = 441
  lineNumber = 1
  lineNumber = 441
  lineNumber = 1
  lineNumber = 436
  var call1205 = callmethod(this,"unionTypes", [0]);
  var call1206 = callmethod(call1205,"size", [0]);
  var opresult1208 = callmethod(call1206, "==", [1], new GraceNum(0));
  var opresult1210 = callmethod(call1204, "&", [1], opresult1208);
  lineNumber = 441
  lineNumber = 1
  lineNumber = 441
  lineNumber = 1
  lineNumber = 437
  var call1211 = callmethod(this,"intersectionTypes", [0]);
  var call1212 = callmethod(call1211,"size", [0]);
  var opresult1214 = callmethod(call1212, "==", [1], new GraceNum(0));
  var opresult1216 = callmethod(opresult1210, "&", [1], opresult1214);
  if (Grace_isTrue(opresult1216)) {
  lineNumber = 439
  lineNumber = 438
  var string1217 = new GraceString("{");
  var opresult1219 = callmethod(var_s, "++", [1], string1217);
  var_s = opresult1219;
  var if1203 = opresult1219;
}
  lineNumber = 453
  lineNumber = 456
  lineNumber = 1
  lineNumber = 456
  lineNumber = 1
  lineNumber = 441
  var call1221 = callmethod(this,"unionTypes", [0]);
  var call1222 = callmethod(call1221,"size", [0]);
  var opresult1224 = callmethod(call1222, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1224)) {
  lineNumber = 446
  lineNumber = 442
  lineNumber = 1
  lineNumber = 442
  lineNumber = 1
  lineNumber = 442
  var call1225 = callmethod(this,"unionTypes", [0]);
  var call1226 = callmethod(call1225,"indices", [0]);
  lineNumber = 446
  var block1227 = Grace_allocObject();
  block1227.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1227.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1227.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1227.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1227.receiver = this;
  block1227.className = 'block<ast:446>';
  block1227.real = function(
var_i
) {
  lineNumber = 443
  lineNumber = 444
  lineNumber = 1
  lineNumber = 443
  var call1228 = callmethod(this,"unionTypes", [0]);
  var idxres1229 = call1228.methods["[]"].call(call1228, [1], var_i);
  var call1230 = callmethod(idxres1229,"toGrace", [1], new GraceNum(0));
  var opresult1232 = callmethod(var_s, "++", [1], call1230);
  var_s = opresult1232;
  lineNumber = 446
  lineNumber = 447
  lineNumber = 444
  lineNumber = 447
  lineNumber = 1
  lineNumber = 447
  lineNumber = 1
  lineNumber = 444
  var call1234 = callmethod(this,"unionTypes", [0]);
  var call1235 = callmethod(call1234,"size", [0]);
  var opresult1237 = callmethod(var_i, "<", [1], call1235);
  if (Grace_isTrue(opresult1237)) {
  lineNumber = 446
  lineNumber = 445
  var string1238 = new GraceString(" | ");
  var opresult1240 = callmethod(var_s, "++", [1], string1238);
  var_s = opresult1240;
  var if1233 = opresult1240;
}
  return if1233;
};
  var call1241 = callmethod(Grace_prelude,"for()do", [1, 1], call1226, block1227);
  var if1220 = call1241;
  } else {
  lineNumber = 453
  lineNumber = 456
  lineNumber = 1
  lineNumber = 456
  lineNumber = 1
  lineNumber = 448
  var call1243 = callmethod(this,"intersectionTypes", [0]);
  var call1244 = callmethod(call1243,"size", [0]);
  var opresult1246 = callmethod(call1244, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1246)) {
  lineNumber = 453
  lineNumber = 449
  lineNumber = 1
  lineNumber = 449
  lineNumber = 1
  lineNumber = 449
  var call1247 = callmethod(this,"intersectionTypes", [0]);
  var call1248 = callmethod(call1247,"indices", [0]);
  lineNumber = 453
  var block1249 = Grace_allocObject();
  block1249.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1249.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1249.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1249.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1249.receiver = this;
  block1249.className = 'block<ast:453>';
  block1249.real = function(
var_i
) {
  lineNumber = 450
  lineNumber = 451
  lineNumber = 1
  lineNumber = 450
  var call1250 = callmethod(this,"intersectionTypes", [0]);
  var idxres1251 = call1250.methods["[]"].call(call1250, [1], var_i);
  var call1252 = callmethod(idxres1251,"toGrace", [1], new GraceNum(0));
  var opresult1254 = callmethod(var_s, "++", [1], call1252);
  var_s = opresult1254;
  lineNumber = 453
  lineNumber = 454
  lineNumber = 451
  lineNumber = 454
  lineNumber = 1
  lineNumber = 454
  lineNumber = 1
  lineNumber = 451
  var call1256 = callmethod(this,"intersectionTypes", [0]);
  var call1257 = callmethod(call1256,"size", [0]);
  var opresult1259 = callmethod(var_i, "<", [1], call1257);
  if (Grace_isTrue(opresult1259)) {
  lineNumber = 453
  lineNumber = 452
  var string1260 = new GraceString(" & ");
  var opresult1262 = callmethod(var_s, "++", [1], string1260);
  var_s = opresult1262;
  var if1255 = opresult1262;
}
  return if1255;
};
  var call1263 = callmethod(Grace_prelude,"for()do", [1, 1], call1248, block1249);
  var if1242 = call1263;
}
  var if1220 = if1242;
}
  lineNumber = 457
  lineNumber = 456
  lineNumber = 1
  lineNumber = 456
  var call1264 = callmethod(this,"methods", [0]);
  lineNumber = 457
  var block1265 = Grace_allocObject();
  block1265.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1265.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1265.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1265.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1265.receiver = this;
  block1265.className = 'block<ast:457>';
  block1265.real = function(
var_mx
) {
  lineNumber = 458
  lineNumber = 457
  var string1266 = new GraceString("\n");
  var opresult1268 = callmethod(var_s, "++", [1], string1266);
  var opresult1270 = callmethod(opresult1268, "++", [1], var_spc);
  var string1271 = new GraceString("    ");
  var opresult1273 = callmethod(opresult1270, "++", [1], string1271);
  var opresult1275 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call1276 = callmethod(var_mx,"toGrace", [1], opresult1275);
  var opresult1278 = callmethod(opresult1273, "++", [1], call1276);
  var_s = opresult1278;
  return opresult1278;
};
  var call1279 = callmethod(Grace_prelude,"for()do", [1, 1], call1264, block1265);
  lineNumber = 462
  lineNumber = 463
  lineNumber = 459
  var call1281 = callmethod(var_isadhoc,"prefix!", [0]);
  lineNumber = 463
  lineNumber = 1
  lineNumber = 463
  lineNumber = 1
  lineNumber = 459
  var call1282 = callmethod(this,"unionTypes", [0]);
  var call1283 = callmethod(call1282,"size", [0]);
  var opresult1285 = callmethod(call1283, "==", [1], new GraceNum(0));
  var opresult1287 = callmethod(call1281, "&", [1], opresult1285);
  lineNumber = 463
  lineNumber = 1
  lineNumber = 463
  lineNumber = 1
  lineNumber = 460
  var call1288 = callmethod(this,"intersectionTypes", [0]);
  var call1289 = callmethod(call1288,"size", [0]);
  var opresult1291 = callmethod(call1289, "==", [1], new GraceNum(0));
  var opresult1293 = callmethod(opresult1287, "&", [1], opresult1291);
  if (Grace_isTrue(opresult1293)) {
  lineNumber = 462
  lineNumber = 461
  var string1294 = new GraceString("\n");
  var opresult1296 = callmethod(var_s, "++", [1], string1294);
  var opresult1298 = callmethod(opresult1296, "++", [1], var_spc);
  var string1299 = new GraceString("}");
  var opresult1301 = callmethod(opresult1298, "++", [1], string1299);
  var_s = opresult1301;
  var if1280 = opresult1301;
}
  lineNumber = 463
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1131.paramTypes = [];
func1131.paramTypes.push([type_Number, "depth"]);
  obj968.methods["toGrace"] = func1131;
  superDepth = origSuperDepth;
}
obj_init_968.apply(obj968, []);
  return obj968
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj965.methods["new"] = func967;
  superDepth = origSuperDepth;
}
obj_init_965.apply(obj965, []);
  var var_typeNode = obj965;
  lineNumber = 466
  lineNumber = 1
var func1302 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 466
  return var_methodNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["methodNode"] = func1302;
  lineNumber = 1
  var obj1303 = Grace_allocObject();
  obj1303.outer = this;
    var reader_ast_outer1304 = function() {
    return this.outer;
  }
  obj1303.methods["outer"] = reader_ast_outer1304;
function obj_init_1303() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func1305 = function(argcv) {
  var curarg = 1;
  var var_name__39__ = arguments[curarg];
  curarg++;
  var var_signature__39__ = arguments[curarg];
  curarg++;
  var var_body__39__ = arguments[curarg];
  curarg++;
  var var_dtype__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj1306 = Grace_allocObject();
  obj1306.outer = this;
    var reader_ast_outer1307 = function() {
    return this.outer;
  }
  obj1306.methods["outer"] = reader_ast_outer1307;
function obj_init_1306() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 482
  var string1308 = new GraceString("method");
  obj1306.data["kind"] = string1308;
    var reader_ast_kind1309 = function() {
    return this.data["kind"];
  }
  reader_ast_kind1309.def = true;
  obj1306.methods["kind"] = reader_ast_kind1309;
  lineNumber = 483
  obj1306.data["value"] = var_name__39__;
    var reader_ast_value1310 = function() {
    return this.data["value"];
  }
  reader_ast_value1310.def = true;
  obj1306.methods["value"] = reader_ast_value1310;
  lineNumber = 484
  obj1306.data["signature"] = var_signature__39__;
    var reader_ast_signature1311 = function() {
    return this.data["signature"];
  }
  reader_ast_signature1311.def = true;
  obj1306.methods["signature"] = reader_ast_signature1311;
  lineNumber = 485
  obj1306.data["body"] = var_body__39__;
    var reader_ast_body1312 = function() {
    return this.data["body"];
  }
  reader_ast_body1312.def = true;
  obj1306.methods["body"] = reader_ast_body1312;
  lineNumber = 486
  obj1306.data["dtype"] = var_dtype__39__;
    var reader_ast_dtype1313 = function() {
    return this.data["dtype"];
  }
  obj1306.methods["dtype"] = reader_ast_dtype1313;
  obj1306.data["dtype"] = var_dtype__39__;
  var writer_ast_dtype1313 = function(argcv, o) {
    this.data["dtype"] = o;
  }
  obj1306.methods["dtype:="] = writer_ast_dtype1313;
obj1306.mutable = true;
  lineNumber = 487
  var bool1314 = new GraceBoolean(false)
  obj1306.data["varargs"] = bool1314;
    var reader_ast_varargs1315 = function() {
    return this.data["varargs"];
  }
  obj1306.methods["varargs"] = reader_ast_varargs1315;
  obj1306.data["varargs"] = bool1314;
  var writer_ast_varargs1315 = function(argcv, o) {
    this.data["varargs"] = o;
  }
  obj1306.methods["varargs:="] = writer_ast_varargs1315;
obj1306.mutable = true;
  lineNumber = 488
  var bool1316 = new GraceBoolean(false)
  obj1306.data["selfclosure"] = bool1316;
    var reader_ast_selfclosure1317 = function() {
    return this.data["selfclosure"];
  }
  obj1306.methods["selfclosure"] = reader_ast_selfclosure1317;
  obj1306.data["selfclosure"] = bool1316;
  var writer_ast_selfclosure1317 = function(argcv, o) {
    this.data["selfclosure"] = o;
  }
  obj1306.methods["selfclosure:="] = writer_ast_selfclosure1317;
obj1306.mutable = true;
  lineNumber = 489
  var string1318 = new GraceString("");
  obj1306.data["register"] = string1318;
    var reader_ast_register1319 = function() {
    return this.data["register"];
  }
  obj1306.methods["register"] = reader_ast_register1319;
  obj1306.data["register"] = string1318;
  var writer_ast_register1319 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj1306.methods["register:="] = writer_ast_register1319;
obj1306.mutable = true;
  lineNumber = 491
  lineNumber = 1
  lineNumber = 490
  var call1320 = callmethod(var_util,"linenum", [0]);
  obj1306.data["line"] = call1320;
    var reader_ast_line1321 = function() {
    return this.data["line"];
  }
  reader_ast_line1321.def = true;
  obj1306.methods["line"] = reader_ast_line1321;
var func1322 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 506
  lineNumber = 492
  var call1324 = callmethod(var_visitor,"visitMethod", [1], this);
  if (Grace_isTrue(call1324)) {
  lineNumber = 493
  lineNumber = 494
  lineNumber = 1
  lineNumber = 493
  var call1325 = callmethod(this,"value", [0]);
  var call1326 = callmethod(call1325,"accept", [1], var_visitor);
  lineNumber = 495
  lineNumber = 497
  lineNumber = 1
  lineNumber = 494
  var call1328 = callmethod(this,"dtype", [0]);
  var bool1329 = new GraceBoolean(false)
  var opresult1331 = callmethod(call1328, "!=", [1], bool1329);
  if (Grace_isTrue(opresult1331)) {
  lineNumber = 495
  lineNumber = 496
  lineNumber = 1
  lineNumber = 495
  var call1332 = callmethod(this,"dtype", [0]);
  var call1333 = callmethod(call1332,"accept", [1], var_visitor);
  var if1327 = call1333;
}
  lineNumber = 502
  lineNumber = 497
  lineNumber = 1
  lineNumber = 497
  var call1334 = callmethod(this,"signature", [0]);
  lineNumber = 502
  var block1335 = Grace_allocObject();
  block1335.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1335.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1335.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1335.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1335.receiver = this;
  block1335.className = 'block<ast:502>';
  block1335.real = function(
var_part
) {
  lineNumber = 499
  lineNumber = 498
  lineNumber = 1
  lineNumber = 498
  var call1336 = callmethod(var_part,"params", [0]);
  lineNumber = 499
  var block1337 = Grace_allocObject();
  block1337.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1337.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1337.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1337.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1337.receiver = this;
  block1337.className = 'block<ast:499>';
  block1337.real = function(
var_p
) {
  var call1338 = callmethod(var_p,"accept", [1], var_visitor);
  return call1338;
};
  var call1339 = callmethod(Grace_prelude,"for()do", [1, 1], call1336, block1337);
  lineNumber = 502
  lineNumber = 504
  lineNumber = 1
  lineNumber = 501
  var call1341 = callmethod(var_part,"vararg", [0]);
  var bool1342 = new GraceBoolean(false)
  var opresult1344 = callmethod(call1341, "!=", [1], bool1342);
  if (Grace_isTrue(opresult1344)) {
  lineNumber = 502
  lineNumber = 503
  lineNumber = 1
  lineNumber = 502
  var call1345 = callmethod(var_part,"vararg", [0]);
  var call1346 = callmethod(call1345,"accept", [1], var_visitor);
  var if1340 = call1346;
}
  return if1340;
};
  var call1347 = callmethod(Grace_prelude,"for()do", [1, 1], call1334, block1335);
  lineNumber = 506
  lineNumber = 505
  lineNumber = 1
  lineNumber = 505
  var call1348 = callmethod(this,"body", [0]);
  lineNumber = 506
  var block1349 = Grace_allocObject();
  block1349.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1349.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1349.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1349.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1349.receiver = this;
  block1349.className = 'block<ast:506>';
  block1349.real = function(
var_mx
) {
  var call1350 = callmethod(var_mx,"accept", [1], var_visitor);
  return call1350;
};
  var call1351 = callmethod(Grace_prelude,"for()do", [1, 1], call1348, block1349);
  var if1323 = call1351;
}
  return if1323
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1322.paramTypes = [];
func1322.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj1306.methods["accept"] = func1322;
var func1352 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 512
  lineNumber = 511
  var string1353 = new GraceString("");
  var var_spc = string1353;
  lineNumber = 514
  lineNumber = 512
  var opresult1355 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 514
  var block1356 = Grace_allocObject();
  block1356.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1356.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1356.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1356.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1356.receiver = this;
  block1356.className = 'block<ast:514>';
  block1356.real = function(
var_i
) {
  lineNumber = 513
  var string1357 = new GraceString("  ");
  var opresult1359 = callmethod(var_spc, "++", [1], string1357);
  var_spc = opresult1359;
  return opresult1359;
};
  var call1360 = callmethod(Grace_prelude,"for()do", [1, 1], opresult1355, block1356);
  lineNumber = 516
  lineNumber = 515
  var string1361 = new GraceString("Method\n");
  var var_s = string1361;
  lineNumber = 516
  lineNumber = 517
  lineNumber = 516
  var opresult1363 = callmethod(var_s, "++", [1], var_spc);
  var string1364 = new GraceString("Name: ");
  var opresult1366 = callmethod(opresult1363, "++", [1], string1364);
  var opresult1368 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 517
  lineNumber = 1
  lineNumber = 516
  var call1369 = callmethod(this,"value", [0]);
  var call1370 = callmethod(call1369,"pretty", [1], opresult1368);
  var opresult1372 = callmethod(opresult1366, "++", [1], call1370);
  var_s = opresult1372;
  lineNumber = 518
  lineNumber = 517
  var string1373 = new GraceString("\n");
  var opresult1375 = callmethod(var_s, "++", [1], string1373);
  var_s = opresult1375;
  lineNumber = 519
  lineNumber = 518
  var string1376 = new GraceString("");
  var opresult1378 = callmethod(string1376, "++", [1], var_s);
  var string1379 = new GraceString("");
  var opresult1381 = callmethod(opresult1378, "++", [1], string1379);
  var opresult1383 = callmethod(opresult1381, "++", [1], var_spc);
  var string1384 = new GraceString("Signature:");
  var opresult1386 = callmethod(opresult1383, "++", [1], string1384);
  var_s = opresult1386;
  lineNumber = 526
  lineNumber = 519
  var call1387 = callmethod(this,"signature", [0]);
  lineNumber = 526
  var block1388 = Grace_allocObject();
  block1388.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1388.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1388.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1388.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1388.receiver = this;
  block1388.className = 'block<ast:526>';
  block1388.real = function(
var_part
) {
  lineNumber = 521
  lineNumber = 520
  var string1389 = new GraceString("");
  var opresult1391 = callmethod(string1389, "++", [1], var_s);
  var string1392 = new GraceString("\n  ");
  var opresult1394 = callmethod(opresult1391, "++", [1], string1392);
  var opresult1396 = callmethod(opresult1394, "++", [1], var_spc);
  var string1397 = new GraceString("Part: ");
  var opresult1399 = callmethod(opresult1396, "++", [1], string1397);
  lineNumber = 521
  lineNumber = 1
  lineNumber = 520
  var call1400 = callmethod(var_part,"name", [0]);
  var opresult1402 = callmethod(opresult1399, "++", [1], call1400);
  var string1403 = new GraceString("");
  var opresult1405 = callmethod(opresult1402, "++", [1], string1403);
  var_s = opresult1405;
  lineNumber = 522
  lineNumber = 521
  var string1406 = new GraceString("");
  var opresult1408 = callmethod(string1406, "++", [1], var_s);
  var string1409 = new GraceString("\n    ");
  var opresult1411 = callmethod(opresult1408, "++", [1], string1409);
  var opresult1413 = callmethod(opresult1411, "++", [1], var_spc);
  var string1414 = new GraceString("Parameters:");
  var opresult1416 = callmethod(opresult1413, "++", [1], string1414);
  var_s = opresult1416;
  lineNumber = 523
  lineNumber = 522
  lineNumber = 1
  lineNumber = 522
  var call1417 = callmethod(var_part,"params", [0]);
  lineNumber = 523
  var block1418 = Grace_allocObject();
  block1418.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1418.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1418.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1418.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1418.receiver = this;
  block1418.className = 'block<ast:523>';
  block1418.real = function(
var_p
) {
  lineNumber = 524
  lineNumber = 523
  var string1419 = new GraceString("");
  var opresult1421 = callmethod(string1419, "++", [1], var_s);
  var string1422 = new GraceString("\n      ");
  var opresult1424 = callmethod(opresult1421, "++", [1], string1422);
  var opresult1426 = callmethod(opresult1424, "++", [1], var_spc);
  var string1427 = new GraceString("");
  var opresult1429 = callmethod(opresult1426, "++", [1], string1427);
  var opresult1431 = callmethod(var_depth, "+", [1], new GraceNum(4));
  var call1432 = callmethod(var_p,"pretty", [1], opresult1431);
  var opresult1434 = callmethod(opresult1429, "++", [1], call1432);
  var string1435 = new GraceString("");
  var opresult1437 = callmethod(opresult1434, "++", [1], string1435);
  var_s = opresult1437;
  return opresult1437;
};
  var call1438 = callmethod(Grace_prelude,"for()do", [1, 1], call1417, block1418);
  lineNumber = 526
  lineNumber = 528
  lineNumber = 1
  lineNumber = 525
  var call1440 = callmethod(var_part,"vararg", [0]);
  var bool1441 = new GraceBoolean(false)
  var opresult1443 = callmethod(call1440, "!=", [1], bool1441);
  if (Grace_isTrue(opresult1443)) {
  lineNumber = 526
  lineNumber = 527
  lineNumber = 526
  var string1444 = new GraceString("");
  var opresult1446 = callmethod(string1444, "++", [1], var_s);
  var string1447 = new GraceString("\n    ");
  var opresult1449 = callmethod(opresult1446, "++", [1], string1447);
  var opresult1451 = callmethod(opresult1449, "++", [1], var_spc);
  var string1452 = new GraceString("Vararg: ");
  var opresult1454 = callmethod(opresult1451, "++", [1], string1452);
  var opresult1456 = callmethod(var_depth, "+", [1], new GraceNum(3));
  lineNumber = 527
  lineNumber = 1
  lineNumber = 526
  var call1457 = callmethod(var_part,"vararg", [0]);
  var call1458 = callmethod(call1457,"pretty", [1], opresult1456);
  var opresult1460 = callmethod(opresult1454, "++", [1], call1458);
  var string1461 = new GraceString("");
  var opresult1463 = callmethod(opresult1460, "++", [1], string1461);
  var_s = opresult1463;
  var if1439 = opresult1463;
}
  return if1439;
};
  var call1464 = callmethod(Grace_prelude,"for()do", [1, 1], call1387, block1388);
  lineNumber = 530
  lineNumber = 529
  var string1465 = new GraceString("\n");
  var opresult1467 = callmethod(var_s, "++", [1], string1465);
  var_s = opresult1467;
  lineNumber = 531
  lineNumber = 530
  var opresult1469 = callmethod(var_s, "++", [1], var_spc);
  var string1470 = new GraceString("Body:");
  var opresult1472 = callmethod(opresult1469, "++", [1], string1470);
  var_s = opresult1472;
  lineNumber = 532
  lineNumber = 531
  lineNumber = 1
  lineNumber = 531
  var call1473 = callmethod(this,"body", [0]);
  lineNumber = 532
  var block1474 = Grace_allocObject();
  block1474.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1474.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1474.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1474.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1474.receiver = this;
  block1474.className = 'block<ast:532>';
  block1474.real = function(
var_mx
) {
  lineNumber = 533
  lineNumber = 532
  var string1475 = new GraceString("\n  ");
  var opresult1477 = callmethod(var_s, "++", [1], string1475);
  var opresult1479 = callmethod(opresult1477, "++", [1], var_spc);
  var opresult1481 = callmethod(var_depth, "+", [1], new GraceNum(2));
  var call1482 = callmethod(var_mx,"pretty", [1], opresult1481);
  var opresult1484 = callmethod(opresult1479, "++", [1], call1482);
  var_s = opresult1484;
  return opresult1484;
};
  var call1485 = callmethod(Grace_prelude,"for()do", [1, 1], call1473, block1474);
  lineNumber = 534
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj1306.methods["pretty"] = func1352;
var func1486 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 538
  lineNumber = 537
  var string1487 = new GraceString("");
  var var_spc = string1487;
  lineNumber = 540
  lineNumber = 538
  var diff1489 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult1491 = callmethod(new GraceNum(0), "..", [1], diff1489);
  lineNumber = 540
  var block1492 = Grace_allocObject();
  block1492.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1492.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1492.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1492.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1492.receiver = this;
  block1492.className = 'block<ast:540>';
  block1492.real = function(
var_i
) {
  lineNumber = 539
  var string1493 = new GraceString("    ");
  var opresult1495 = callmethod(var_spc, "++", [1], string1493);
  var_spc = opresult1495;
  return opresult1495;
};
  var call1496 = callmethod(Grace_prelude,"for()do", [1, 1], opresult1491, block1492);
  lineNumber = 542
  lineNumber = 541
  var string1497 = new GraceString("method ");
  var var_s = string1497;
  lineNumber = 557
  lineNumber = 542
  lineNumber = 1
  lineNumber = 542
  var call1498 = callmethod(this,"signature", [0]);
  lineNumber = 557
  var block1499 = Grace_allocObject();
  block1499.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1499.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1499.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1499.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1499.receiver = this;
  block1499.className = 'block<ast:557>';
  block1499.real = function(
var_part
) {
  lineNumber = 544
  lineNumber = 543
  lineNumber = 544
  lineNumber = 1
  lineNumber = 543
  var call1500 = callmethod(var_part,"name", [0]);
  var opresult1502 = callmethod(var_s, "++", [1], call1500);
  var_s = opresult1502;
  lineNumber = 557
  lineNumber = 558
  lineNumber = 1
  lineNumber = 558
  lineNumber = 1
  lineNumber = 544
  var call1504 = callmethod(var_part,"params", [0]);
  var call1505 = callmethod(call1504,"size", [0]);
  var opresult1507 = callmethod(call1505, ">", [1], new GraceNum(0));
  lineNumber = 558
  lineNumber = 1
  lineNumber = 544
  var call1508 = callmethod(var_part,"vararg", [0]);
  var bool1509 = new GraceBoolean(false)
  var opresult1511 = callmethod(call1508, "!=", [1], bool1509);
  var opresult1513 = callmethod(opresult1507, "|", [1], opresult1511);
  if (Grace_isTrue(opresult1513)) {
  lineNumber = 546
  lineNumber = 545
  var string1514 = new GraceString("(");
  var opresult1516 = callmethod(var_s, "++", [1], string1514);
  var_s = opresult1516;
  lineNumber = 551
  lineNumber = 546
  lineNumber = 1
  lineNumber = 546
  lineNumber = 1
  lineNumber = 546
  var call1517 = callmethod(var_part,"params", [0]);
  var call1518 = callmethod(call1517,"indices", [0]);
  lineNumber = 551
  var block1519 = Grace_allocObject();
  block1519.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1519.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1519.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1519.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1519.receiver = this;
  block1519.className = 'block<ast:551>';
  block1519.real = function(
var_pnr
) {
  lineNumber = 548
  lineNumber = 1
  lineNumber = 547
  var call1520 = callmethod(var_part,"params", [0]);
  var idxres1521 = call1520.methods["[]"].call(call1520, [1], var_pnr);
  var var_p = idxres1521;
  lineNumber = 548
  var opresult1523 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call1524 = callmethod(var_p,"toGrace", [1], opresult1523);
  var opresult1526 = callmethod(var_s, "++", [1], call1524);
  var_s = opresult1526;
  lineNumber = 551
  lineNumber = 552
  lineNumber = 549
  lineNumber = 552
  lineNumber = 1
  lineNumber = 552
  lineNumber = 1
  lineNumber = 549
  var call1528 = callmethod(var_part,"params", [0]);
  var call1529 = callmethod(call1528,"size", [0]);
  var opresult1531 = callmethod(var_pnr, "<", [1], call1529);
  lineNumber = 552
  lineNumber = 1
  lineNumber = 549
  var call1532 = callmethod(var_part,"vararg", [0]);
  var bool1533 = new GraceBoolean(false)
  var opresult1535 = callmethod(call1532, "!=", [1], bool1533);
  var opresult1537 = callmethod(opresult1531, "|", [1], opresult1535);
  if (Grace_isTrue(opresult1537)) {
  lineNumber = 551
  lineNumber = 550
  var string1538 = new GraceString(", ");
  var opresult1540 = callmethod(var_s, "++", [1], string1538);
  var_s = opresult1540;
  var if1527 = opresult1540;
}
  return if1527;
};
  var call1541 = callmethod(Grace_prelude,"for()do", [1, 1], call1518, block1519);
  lineNumber = 555
  lineNumber = 556
  lineNumber = 1
  lineNumber = 553
  var call1543 = callmethod(var_part,"vararg", [0]);
  var bool1544 = new GraceBoolean(false)
  var opresult1546 = callmethod(call1543, "!=", [1], bool1544);
  if (Grace_isTrue(opresult1546)) {
  lineNumber = 555
  lineNumber = 554
  var string1547 = new GraceString("*");
  var opresult1549 = callmethod(var_s, "++", [1], string1547);
  lineNumber = 555
  lineNumber = 1
  lineNumber = 555
  lineNumber = 1
  lineNumber = 554
  var call1550 = callmethod(var_part,"vararg", [0]);
  var call1551 = callmethod(call1550,"value", [0]);
  var opresult1553 = callmethod(opresult1549, "++", [1], call1551);
  var_s = opresult1553;
  var if1542 = opresult1553;
}
  lineNumber = 557
  lineNumber = 556
  var string1554 = new GraceString(")");
  var opresult1556 = callmethod(var_s, "++", [1], string1554);
  var_s = opresult1556;
  var if1503 = opresult1556;
}
  return if1503;
};
  var call1557 = callmethod(Grace_prelude,"for()do", [1, 1], call1498, block1499);
  lineNumber = 560
  lineNumber = 562
  lineNumber = 1
  lineNumber = 559
  var call1559 = callmethod(this,"dtype", [0]);
  var bool1560 = new GraceBoolean(false)
  var opresult1562 = callmethod(call1559, "!=", [1], bool1560);
  if (Grace_isTrue(opresult1562)) {
  lineNumber = 560
  var string1563 = new GraceString(" -> ");
  lineNumber = 561
  lineNumber = 1
  lineNumber = 560
  var call1564 = callmethod(this,"dtype", [0]);
  var call1565 = callmethod(call1564,"toGrace", [1], new GraceNum(0));
  var opresult1567 = callmethod(string1563, "++", [1], call1565);
  var string1568 = new GraceString("");
  var opresult1570 = callmethod(opresult1567, "++", [1], string1568);
  var opresult1572 = callmethod(var_s, "++", [1], opresult1570);
  var_s = opresult1572;
  var if1558 = opresult1572;
}
  lineNumber = 563
  lineNumber = 562
  var string1573 = new GraceString(" {");
  var opresult1575 = callmethod(var_s, "++", [1], string1573);
  var_s = opresult1575;
  lineNumber = 564
  lineNumber = 563
  lineNumber = 1
  lineNumber = 563
  var call1576 = callmethod(this,"body", [0]);
  lineNumber = 564
  var block1577 = Grace_allocObject();
  block1577.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1577.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1577.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1577.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1577.receiver = this;
  block1577.className = 'block<ast:564>';
  block1577.real = function(
var_mx
) {
  lineNumber = 565
  lineNumber = 564
  var string1578 = new GraceString("\n");
  var opresult1580 = callmethod(var_s, "++", [1], string1578);
  var opresult1582 = callmethod(opresult1580, "++", [1], var_spc);
  var string1583 = new GraceString("    ");
  var opresult1585 = callmethod(opresult1582, "++", [1], string1583);
  var opresult1587 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call1588 = callmethod(var_mx,"toGrace", [1], opresult1587);
  var opresult1590 = callmethod(opresult1585, "++", [1], call1588);
  var_s = opresult1590;
  return opresult1590;
};
  var call1591 = callmethod(Grace_prelude,"for()do", [1, 1], call1576, block1577);
  lineNumber = 567
  lineNumber = 566
  var string1592 = new GraceString("\n");
  var opresult1594 = callmethod(var_s, "++", [1], string1592);
  var opresult1596 = callmethod(opresult1594, "++", [1], var_spc);
  var string1597 = new GraceString("}");
  var opresult1599 = callmethod(opresult1596, "++", [1], string1597);
  var_s = opresult1599;
  lineNumber = 567
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1486.paramTypes = [];
func1486.paramTypes.push([type_Number, "depth"]);
  obj1306.methods["toGrace"] = func1486;
  superDepth = origSuperDepth;
}
obj_init_1306.apply(obj1306, []);
  return obj1306
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj1303.methods["new"] = func1305;
  superDepth = origSuperDepth;
}
obj_init_1303.apply(obj1303, []);
  var var_methodNode = obj1303;
  lineNumber = 570
  lineNumber = 1
var func1600 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 570
  return var_callNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["callNode"] = func1600;
  lineNumber = 1
  var obj1601 = Grace_allocObject();
  obj1601.outer = this;
    var reader_ast_outer1602 = function() {
    return this.outer;
  }
  obj1601.methods["outer"] = reader_ast_outer1602;
function obj_init_1601() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func1603 = function(argcv) {
  var curarg = 1;
  var var_what = arguments[curarg];
  curarg++;
  var var_with__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj1604 = Grace_allocObject();
  obj1604.outer = this;
    var reader_ast_outer1605 = function() {
    return this.outer;
  }
  obj1604.methods["outer"] = reader_ast_outer1605;
function obj_init_1604() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 584
  var string1606 = new GraceString("call");
  obj1604.data["kind"] = string1606;
    var reader_ast_kind1607 = function() {
    return this.data["kind"];
  }
  reader_ast_kind1607.def = true;
  obj1604.methods["kind"] = reader_ast_kind1607;
  lineNumber = 585
  obj1604.data["value"] = var_what;
    var reader_ast_value1608 = function() {
    return this.data["value"];
  }
  reader_ast_value1608.def = true;
  obj1604.methods["value"] = reader_ast_value1608;
  lineNumber = 586
  obj1604.data["with"] = var_with__39__;
    var reader_ast_with1609 = function() {
    return this.data["with"];
  }
  reader_ast_with1609.def = true;
  obj1604.methods["with"] = reader_ast_with1609;
  lineNumber = 588
  lineNumber = 587
  lineNumber = 588
  lineNumber = 1
  lineNumber = 587
  var call1610 = callmethod(var_util,"linenum", [0]);
  var opresult1612 = callmethod(new GraceNum(0), "+", [1], call1610);
  obj1604.data["line"] = opresult1612;
    var reader_ast_line1613 = function() {
    return this.data["line"];
  }
  reader_ast_line1613.def = true;
  obj1604.methods["line"] = reader_ast_line1613;
  lineNumber = 588
  var string1614 = new GraceString("");
  obj1604.data["register"] = string1614;
    var reader_ast_register1615 = function() {
    return this.data["register"];
  }
  obj1604.methods["register"] = reader_ast_register1615;
  obj1604.data["register"] = string1614;
  var writer_ast_register1615 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj1604.methods["register:="] = writer_ast_register1615;
obj1604.mutable = true;
var func1616 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 594
  lineNumber = 590
  var call1618 = callmethod(var_visitor,"visitCall", [1], this);
  if (Grace_isTrue(call1618)) {
  lineNumber = 591
  lineNumber = 592
  lineNumber = 1
  lineNumber = 591
  var call1619 = callmethod(this,"value", [0]);
  var call1620 = callmethod(call1619,"accept", [1], var_visitor);
  lineNumber = 594
  lineNumber = 592
  lineNumber = 1
  lineNumber = 592
  var call1621 = callmethod(this,"with", [0]);
  lineNumber = 594
  var block1622 = Grace_allocObject();
  block1622.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1622.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1622.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1622.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1622.receiver = this;
  block1622.className = 'block<ast:594>';
  block1622.real = function(
var_part
) {
  lineNumber = 593
  lineNumber = 1
  lineNumber = 593
  var call1623 = callmethod(var_part,"args", [0]);
  lineNumber = 594
  var block1624 = Grace_allocObject();
  block1624.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1624.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1624.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1624.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1624.receiver = this;
  block1624.className = 'block<ast:594>';
  block1624.real = function(
var_arg
) {
  var call1625 = callmethod(var_arg,"accept", [1], var_visitor);
  return call1625;
};
  var call1626 = callmethod(Grace_prelude,"for()do", [1, 1], call1623, block1624);
  return call1626;
};
  var call1627 = callmethod(Grace_prelude,"for()do", [1, 1], call1621, block1622);
  var if1617 = call1627;
}
  return if1617
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1616.paramTypes = [];
func1616.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj1604.methods["accept"] = func1616;
var func1628 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 601
  lineNumber = 600
  var string1629 = new GraceString("");
  var var_spc = string1629;
  lineNumber = 603
  lineNumber = 601
  var opresult1631 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 603
  var block1632 = Grace_allocObject();
  block1632.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1632.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1632.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1632.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1632.receiver = this;
  block1632.className = 'block<ast:603>';
  block1632.real = function(
var_i
) {
  lineNumber = 602
  var string1633 = new GraceString("  ");
  var opresult1635 = callmethod(var_spc, "++", [1], string1633);
  var_spc = opresult1635;
  return opresult1635;
};
  var call1636 = callmethod(Grace_prelude,"for()do", [1, 1], opresult1631, block1632);
  lineNumber = 605
  lineNumber = 604
  var string1637 = new GraceString("Call\n");
  var var_s = string1637;
  lineNumber = 605
  lineNumber = 606
  lineNumber = 605
  var opresult1639 = callmethod(var_s, "++", [1], var_spc);
  var string1640 = new GraceString("Method: ");
  var opresult1642 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 606
  lineNumber = 1
  lineNumber = 605
  var call1643 = callmethod(this,"value", [0]);
  var call1644 = callmethod(call1643,"pretty", [1], opresult1642);
  var opresult1646 = callmethod(string1640, "++", [1], call1644);
  var string1647 = new GraceString("");
  var opresult1649 = callmethod(opresult1646, "++", [1], string1647);
  var opresult1651 = callmethod(opresult1639, "++", [1], opresult1649);
  var_s = opresult1651;
  lineNumber = 607
  lineNumber = 606
  var string1652 = new GraceString("\n");
  var opresult1654 = callmethod(var_s, "++", [1], string1652);
  var_s = opresult1654;
  lineNumber = 608
  lineNumber = 607
  var opresult1656 = callmethod(var_s, "++", [1], var_spc);
  var string1657 = new GraceString("Arguments:");
  var opresult1659 = callmethod(opresult1656, "++", [1], string1657);
  var_s = opresult1659;
  lineNumber = 611
  lineNumber = 608
  lineNumber = 1
  lineNumber = 608
  var call1660 = callmethod(this,"with", [0]);
  lineNumber = 611
  var block1661 = Grace_allocObject();
  block1661.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1661.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1661.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1661.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1661.receiver = this;
  block1661.className = 'block<ast:611>';
  block1661.real = function(
var_part
) {
  lineNumber = 610
  lineNumber = 609
  var string1662 = new GraceString("\n  ");
  var opresult1664 = callmethod(var_s, "++", [1], string1662);
  var opresult1666 = callmethod(opresult1664, "++", [1], var_spc);
  var string1667 = new GraceString("Part: ");
  var opresult1669 = callmethod(opresult1666, "++", [1], string1667);
  lineNumber = 610
  lineNumber = 1
  lineNumber = 609
  var call1670 = callmethod(var_part,"name", [0]);
  var opresult1672 = callmethod(opresult1669, "++", [1], call1670);
  var_s = opresult1672;
  lineNumber = 611
  lineNumber = 610
  lineNumber = 1
  lineNumber = 610
  var call1673 = callmethod(var_part,"args", [0]);
  lineNumber = 611
  var block1674 = Grace_allocObject();
  block1674.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1674.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1674.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1674.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1674.receiver = this;
  block1674.className = 'block<ast:611>';
  block1674.real = function(
var_arg
) {
  lineNumber = 612
  lineNumber = 611
  var string1675 = new GraceString("\n    ");
  var opresult1677 = callmethod(var_s, "++", [1], string1675);
  var opresult1679 = callmethod(opresult1677, "++", [1], var_spc);
  var opresult1681 = callmethod(var_depth, "+", [1], new GraceNum(3));
  var call1682 = callmethod(var_arg,"pretty", [1], opresult1681);
  var opresult1684 = callmethod(opresult1679, "++", [1], call1682);
  var_s = opresult1684;
  return opresult1684;
};
  var call1685 = callmethod(Grace_prelude,"for()do", [1, 1], call1673, block1674);
  return call1685;
};
  var call1686 = callmethod(Grace_prelude,"for()do", [1, 1], call1660, block1661);
  lineNumber = 614
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj1604.methods["pretty"] = func1628;
var func1687 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 618
  lineNumber = 617
  var string1688 = new GraceString("");
  var var_spc = string1688;
  lineNumber = 620
  lineNumber = 618
  var diff1690 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult1692 = callmethod(new GraceNum(0), "..", [1], diff1690);
  lineNumber = 620
  var block1693 = Grace_allocObject();
  block1693.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1693.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1693.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1693.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1693.receiver = this;
  block1693.className = 'block<ast:620>';
  block1693.real = function(
var_i
) {
  lineNumber = 619
  var string1694 = new GraceString("    ");
  var opresult1696 = callmethod(var_spc, "++", [1], string1694);
  var_spc = opresult1696;
  return opresult1696;
};
  var call1697 = callmethod(Grace_prelude,"for()do", [1, 1], opresult1692, block1693);
  lineNumber = 623
  lineNumber = 621
  var string1698 = new GraceString("");
  var var_s = string1698;
  lineNumber = 629
  lineNumber = 631
  lineNumber = 1
  lineNumber = 631
  lineNumber = 1
  lineNumber = 623
  var call1700 = callmethod(this,"value", [0]);
  var call1701 = callmethod(call1700,"kind", [0]);
  var string1702 = new GraceString("member");
  var opresult1704 = callmethod(call1701, "==", [1], string1702);
  if (Grace_isTrue(opresult1704)) {
  lineNumber = 625
  lineNumber = 1
  lineNumber = 624
  var call1705 = callmethod(this,"value", [0]);
  var var_member = call1705;
  lineNumber = 627
  lineNumber = 625
  lineNumber = 629
  lineNumber = 1
  lineNumber = 625
  var call1707 = callmethod(var_member,"value", [0]);
  var call1708 = callmethod(call1707,"substringFrom()to", [1, 1], new GraceNum(1), new GraceNum(6));
  var string1709 = new GraceString("prefix");
  var opresult1711 = callmethod(call1708, "==", [1], string1709);
  if (Grace_isTrue(opresult1711)) {
  lineNumber = 626
  lineNumber = 1
  lineNumber = 626
  lineNumber = 1
  lineNumber = 626
  var call1712 = callmethod(var_member,"value", [0]);
  var call1713 = callmethod(call1712,"size", [0]);
  lineNumber = 627
  lineNumber = 1
  lineNumber = 626
  var call1714 = callmethod(var_member,"value", [0]);
  var call1715 = callmethod(call1714,"substringFrom()to", [1, 1], new GraceNum(7), call1713);
  var_s = call1715;
  lineNumber = 627
  lineNumber = 628
  lineNumber = 1
  lineNumber = 627
  var call1716 = callmethod(var_member,"in", [0]);
  var call1717 = callmethod(call1716,"toGrace", [1], new GraceNum(0));
  var opresult1719 = callmethod(var_s, "++", [1], call1717);
  return opresult1719
  var if1706 = undefined;
}
  lineNumber = 629
  lineNumber = 630
  lineNumber = 1
  lineNumber = 629
  var call1720 = callmethod(var_member,"in", [0]);
  var call1721 = callmethod(call1720,"toGrace", [1], new GraceNum(0));
  var string1722 = new GraceString(".");
  var opresult1724 = callmethod(call1721, "++", [1], string1722);
  var_s = opresult1724;
  var if1699 = opresult1724;
}
  lineNumber = 643
  lineNumber = 631
  lineNumber = 1
  lineNumber = 631
  var call1725 = callmethod(this,"with", [0]);
  lineNumber = 643
  var block1726 = Grace_allocObject();
  block1726.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1726.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1726.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1726.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1726.receiver = this;
  block1726.className = 'block<ast:643>';
  block1726.real = function(
var_part
) {
  lineNumber = 633
  lineNumber = 632
  lineNumber = 633
  lineNumber = 1
  lineNumber = 632
  var call1727 = callmethod(var_part,"name", [0]);
  var opresult1729 = callmethod(var_s, "++", [1], call1727);
  var_s = opresult1729;
  lineNumber = 643
  lineNumber = 644
  lineNumber = 1
  lineNumber = 644
  lineNumber = 1
  lineNumber = 633
  var call1731 = callmethod(var_part,"args", [0]);
  var call1732 = callmethod(call1731,"size", [0]);
  var opresult1734 = callmethod(call1732, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1734)) {
  lineNumber = 635
  lineNumber = 634
  var string1735 = new GraceString("(");
  var opresult1737 = callmethod(var_s, "++", [1], string1735);
  var_s = opresult1737;
  lineNumber = 640
  lineNumber = 635
  lineNumber = 1
  lineNumber = 635
  lineNumber = 1
  lineNumber = 635
  var call1738 = callmethod(var_part,"args", [0]);
  var call1739 = callmethod(call1738,"indices", [0]);
  lineNumber = 640
  var block1740 = Grace_allocObject();
  block1740.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1740.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1740.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1740.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1740.receiver = this;
  block1740.className = 'block<ast:640>';
  block1740.real = function(
var_anr
) {
  lineNumber = 637
  lineNumber = 1
  lineNumber = 636
  var call1741 = callmethod(var_part,"args", [0]);
  var idxres1742 = call1741.methods["[]"].call(call1741, [1], var_anr);
  var var_arg = idxres1742;
  lineNumber = 637
  var opresult1744 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call1745 = callmethod(var_arg,"toGrace", [1], opresult1744);
  var opresult1747 = callmethod(var_s, "++", [1], call1745);
  var_s = opresult1747;
  lineNumber = 640
  lineNumber = 641
  lineNumber = 638
  lineNumber = 641
  lineNumber = 1
  lineNumber = 641
  lineNumber = 1
  lineNumber = 638
  var call1749 = callmethod(var_part,"args", [0]);
  var call1750 = callmethod(call1749,"size", [0]);
  var opresult1752 = callmethod(var_anr, "<", [1], call1750);
  if (Grace_isTrue(opresult1752)) {
  lineNumber = 640
  lineNumber = 639
  var string1753 = new GraceString(", ");
  var opresult1755 = callmethod(var_s, "++", [1], string1753);
  var_s = opresult1755;
  var if1748 = opresult1755;
}
  return if1748;
};
  var call1756 = callmethod(Grace_prelude,"for()do", [1, 1], call1739, block1740);
  lineNumber = 643
  lineNumber = 642
  var string1757 = new GraceString(")");
  var opresult1759 = callmethod(var_s, "++", [1], string1757);
  var_s = opresult1759;
  var if1730 = opresult1759;
}
  return if1730;
};
  var call1760 = callmethod(Grace_prelude,"for()do", [1, 1], call1725, block1726);
  lineNumber = 645
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1687.paramTypes = [];
func1687.paramTypes.push([type_Number, "depth"]);
  obj1604.methods["toGrace"] = func1687;
  superDepth = origSuperDepth;
}
obj_init_1604.apply(obj1604, []);
  return obj1604
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj1601.methods["new"] = func1603;
  superDepth = origSuperDepth;
}
obj_init_1601.apply(obj1601, []);
  var var_callNode = obj1601;
  lineNumber = 648
  lineNumber = 1
var func1761 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 648
  return var_classNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["classNode"] = func1761;
  lineNumber = 1
  var obj1762 = Grace_allocObject();
  obj1762.outer = this;
    var reader_ast_outer1763 = function() {
    return this.outer;
  }
  obj1762.methods["outer"] = reader_ast_outer1763;
function obj_init_1762() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func1764 = function(argcv) {
  var curarg = 1;
  var var_name__39__ = arguments[curarg];
  curarg++;
  var var_signature__39__ = arguments[curarg];
  curarg++;
  var var_body__39__ = arguments[curarg];
  curarg++;
  var var_superclass__39__ = arguments[curarg];
  curarg++;
  var var_constructor__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj1765 = Grace_allocObject();
  obj1765.outer = this;
    var reader_ast_outer1766 = function() {
    return this.outer;
  }
  obj1765.methods["outer"] = reader_ast_outer1766;
function obj_init_1765() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 664
  var string1767 = new GraceString("class");
  obj1765.data["kind"] = string1767;
    var reader_ast_kind1768 = function() {
    return this.data["kind"];
  }
  reader_ast_kind1768.def = true;
  obj1765.methods["kind"] = reader_ast_kind1768;
  lineNumber = 665
  obj1765.data["value"] = var_body__39__;
    var reader_ast_value1769 = function() {
    return this.data["value"];
  }
  reader_ast_value1769.def = true;
  obj1765.methods["value"] = reader_ast_value1769;
  lineNumber = 666
  obj1765.data["name"] = var_name__39__;
    var reader_ast_name1770 = function() {
    return this.data["name"];
  }
  reader_ast_name1770.def = true;
  obj1765.methods["name"] = reader_ast_name1770;
  lineNumber = 667
  obj1765.data["constructor"] = var_constructor__39__;
    var reader_ast_constructor1771 = function() {
    return this.data["constructor"];
  }
  reader_ast_constructor1771.def = true;
  obj1765.methods["constructor"] = reader_ast_constructor1771;
  lineNumber = 668
  obj1765.data["signature"] = var_signature__39__;
    var reader_ast_signature1772 = function() {
    return this.data["signature"];
  }
  reader_ast_signature1772.def = true;
  obj1765.methods["signature"] = reader_ast_signature1772;
  lineNumber = 669
  var string1773 = new GraceString("");
  obj1765.data["register"] = string1773;
    var reader_ast_register1774 = function() {
    return this.data["register"];
  }
  obj1765.methods["register"] = reader_ast_register1774;
  obj1765.data["register"] = string1773;
  var writer_ast_register1774 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj1765.methods["register:="] = writer_ast_register1774;
obj1765.mutable = true;
  lineNumber = 671
  lineNumber = 1
  lineNumber = 670
  var call1775 = callmethod(var_util,"linenum", [0]);
  obj1765.data["line"] = call1775;
    var reader_ast_line1776 = function() {
    return this.data["line"];
  }
  reader_ast_line1776.def = true;
  obj1765.methods["line"] = reader_ast_line1776;
  lineNumber = 671
  obj1765.data["superclass"] = var_superclass__39__;
    var reader_ast_superclass1777 = function() {
    return this.data["superclass"];
  }
  reader_ast_superclass1777.def = true;
  obj1765.methods["superclass"] = reader_ast_superclass1777;
var func1778 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 688
  lineNumber = 673
  var call1780 = callmethod(var_visitor,"visitClass", [1], this);
  if (Grace_isTrue(call1780)) {
  lineNumber = 674
  lineNumber = 675
  lineNumber = 1
  lineNumber = 674
  var call1781 = callmethod(this,"name", [0]);
  var call1782 = callmethod(call1781,"accept", [1], var_visitor);
  lineNumber = 675
  lineNumber = 676
  lineNumber = 1
  lineNumber = 675
  var call1783 = callmethod(this,"constructor", [0]);
  var call1784 = callmethod(call1783,"accept", [1], var_visitor);
  lineNumber = 677
  lineNumber = 679
  lineNumber = 1
  lineNumber = 676
  var call1786 = callmethod(this,"superclass", [0]);
  var bool1787 = new GraceBoolean(false)
  var opresult1789 = callmethod(call1786, "!=", [1], bool1787);
  if (Grace_isTrue(opresult1789)) {
  lineNumber = 677
  lineNumber = 678
  lineNumber = 1
  lineNumber = 677
  var call1790 = callmethod(this,"superclass", [0]);
  var call1791 = callmethod(call1790,"accept", [1], var_visitor);
  var if1785 = call1791;
}
  lineNumber = 684
  lineNumber = 679
  lineNumber = 1
  lineNumber = 679
  var call1792 = callmethod(this,"signature", [0]);
  lineNumber = 684
  var block1793 = Grace_allocObject();
  block1793.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1793.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1793.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1793.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1793.receiver = this;
  block1793.className = 'block<ast:684>';
  block1793.real = function(
var_part
) {
  lineNumber = 681
  lineNumber = 680
  lineNumber = 1
  lineNumber = 680
  var call1794 = callmethod(var_part,"params", [0]);
  lineNumber = 681
  var block1795 = Grace_allocObject();
  block1795.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1795.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1795.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1795.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1795.receiver = this;
  block1795.className = 'block<ast:681>';
  block1795.real = function(
var_p
) {
  var call1796 = callmethod(var_p,"accept", [1], var_visitor);
  return call1796;
};
  var call1797 = callmethod(Grace_prelude,"for()do", [1, 1], call1794, block1795);
  lineNumber = 684
  lineNumber = 686
  lineNumber = 1
  lineNumber = 683
  var call1799 = callmethod(var_part,"vararg", [0]);
  var bool1800 = new GraceBoolean(false)
  var opresult1802 = callmethod(call1799, "!=", [1], bool1800);
  if (Grace_isTrue(opresult1802)) {
  lineNumber = 684
  lineNumber = 685
  lineNumber = 1
  lineNumber = 684
  var call1803 = callmethod(var_part,"vararg", [0]);
  var call1804 = callmethod(call1803,"accept", [1], var_visitor);
  var if1798 = call1804;
}
  return if1798;
};
  var call1805 = callmethod(Grace_prelude,"for()do", [1, 1], call1792, block1793);
  lineNumber = 688
  lineNumber = 687
  lineNumber = 1
  lineNumber = 687
  var call1806 = callmethod(this,"value", [0]);
  lineNumber = 688
  var block1807 = Grace_allocObject();
  block1807.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1807.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1807.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1807.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1807.receiver = this;
  block1807.className = 'block<ast:688>';
  block1807.real = function(
var_x
) {
  var call1808 = callmethod(var_x,"accept", [1], var_visitor);
  return call1808;
};
  var call1809 = callmethod(Grace_prelude,"for()do", [1, 1], call1806, block1807);
  var if1779 = call1809;
}
  return if1779
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1778.paramTypes = [];
func1778.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj1765.methods["accept"] = func1778;
var func1810 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 694
  lineNumber = 693
  var string1811 = new GraceString("");
  var var_spc = string1811;
  lineNumber = 696
  lineNumber = 694
  var opresult1813 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 696
  var block1814 = Grace_allocObject();
  block1814.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1814.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1814.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1814.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1814.receiver = this;
  block1814.className = 'block<ast:696>';
  block1814.real = function(
var_i
) {
  lineNumber = 695
  var string1815 = new GraceString("  ");
  var opresult1817 = callmethod(var_spc, "++", [1], string1815);
  var_spc = opresult1817;
  return opresult1817;
};
  var call1818 = callmethod(Grace_prelude,"for()do", [1, 1], opresult1813, block1814);
  lineNumber = 697
  var string1819 = new GraceString("Class(");
  lineNumber = 698
  lineNumber = 1
  lineNumber = 697
  var call1820 = callmethod(this,"name", [0]);
  var call1821 = callmethod(call1820,"pretty", [1], new GraceNum(0));
  var opresult1823 = callmethod(string1819, "++", [1], call1821);
  var string1824 = new GraceString(")");
  var opresult1826 = callmethod(opresult1823, "++", [1], string1824);
  var var_s = opresult1826;
  lineNumber = 700
  lineNumber = 702
  lineNumber = 1
  lineNumber = 698
  var call1828 = callmethod(this,"superclass", [0]);
  var bool1829 = new GraceBoolean(false)
  var opresult1831 = callmethod(call1828, "/=", [1], bool1829);
  if (Grace_isTrue(opresult1831)) {
  lineNumber = 700
  lineNumber = 699
  var string1832 = new GraceString("\n");
  var opresult1834 = callmethod(var_s, "++", [1], string1832);
  var opresult1836 = callmethod(opresult1834, "++", [1], var_spc);
  var string1837 = new GraceString("Superclass:");
  var opresult1839 = callmethod(opresult1836, "++", [1], string1837);
  var_s = opresult1839;
  lineNumber = 700
  lineNumber = 701
  lineNumber = 700
  var string1840 = new GraceString("\n  ");
  var opresult1842 = callmethod(var_s, "++", [1], string1840);
  var opresult1844 = callmethod(opresult1842, "++", [1], var_spc);
  var opresult1846 = callmethod(var_depth, "+", [1], new GraceNum(2));
  lineNumber = 701
  lineNumber = 1
  lineNumber = 700
  var call1847 = callmethod(this,"superclass", [0]);
  var call1848 = callmethod(call1847,"pretty", [1], opresult1846);
  var opresult1850 = callmethod(opresult1844, "++", [1], call1848);
  var_s = opresult1850;
  var if1827 = opresult1850;
}
  lineNumber = 703
  lineNumber = 702
  var string1851 = new GraceString("\n");
  var opresult1853 = callmethod(var_s, "++", [1], string1851);
  var_s = opresult1853;
  lineNumber = 704
  lineNumber = 703
  var string1854 = new GraceString("");
  var opresult1856 = callmethod(string1854, "++", [1], var_s);
  var string1857 = new GraceString("");
  var opresult1859 = callmethod(opresult1856, "++", [1], string1857);
  var opresult1861 = callmethod(opresult1859, "++", [1], var_spc);
  var string1862 = new GraceString("Signature:");
  var opresult1864 = callmethod(opresult1861, "++", [1], string1862);
  var_s = opresult1864;
  lineNumber = 711
  lineNumber = 704
  var call1865 = callmethod(this,"signature", [0]);
  lineNumber = 711
  var block1866 = Grace_allocObject();
  block1866.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1866.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1866.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1866.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1866.receiver = this;
  block1866.className = 'block<ast:711>';
  block1866.real = function(
var_part
) {
  lineNumber = 706
  lineNumber = 705
  var string1867 = new GraceString("");
  var opresult1869 = callmethod(string1867, "++", [1], var_s);
  var string1870 = new GraceString("\n  ");
  var opresult1872 = callmethod(opresult1869, "++", [1], string1870);
  var opresult1874 = callmethod(opresult1872, "++", [1], var_spc);
  var string1875 = new GraceString("Part: ");
  var opresult1877 = callmethod(opresult1874, "++", [1], string1875);
  lineNumber = 706
  lineNumber = 1
  lineNumber = 705
  var call1878 = callmethod(var_part,"name", [0]);
  var opresult1880 = callmethod(opresult1877, "++", [1], call1878);
  var string1881 = new GraceString("");
  var opresult1883 = callmethod(opresult1880, "++", [1], string1881);
  var_s = opresult1883;
  lineNumber = 707
  lineNumber = 706
  var string1884 = new GraceString("");
  var opresult1886 = callmethod(string1884, "++", [1], var_s);
  var string1887 = new GraceString("\n    ");
  var opresult1889 = callmethod(opresult1886, "++", [1], string1887);
  var opresult1891 = callmethod(opresult1889, "++", [1], var_spc);
  var string1892 = new GraceString("Parameters:");
  var opresult1894 = callmethod(opresult1891, "++", [1], string1892);
  var_s = opresult1894;
  lineNumber = 708
  lineNumber = 707
  lineNumber = 1
  lineNumber = 707
  var call1895 = callmethod(var_part,"params", [0]);
  lineNumber = 708
  var block1896 = Grace_allocObject();
  block1896.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1896.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1896.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1896.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1896.receiver = this;
  block1896.className = 'block<ast:708>';
  block1896.real = function(
var_p
) {
  lineNumber = 709
  lineNumber = 708
  var string1897 = new GraceString("");
  var opresult1899 = callmethod(string1897, "++", [1], var_s);
  var string1900 = new GraceString("\n      ");
  var opresult1902 = callmethod(opresult1899, "++", [1], string1900);
  var opresult1904 = callmethod(opresult1902, "++", [1], var_spc);
  var string1905 = new GraceString("");
  var opresult1907 = callmethod(opresult1904, "++", [1], string1905);
  var opresult1909 = callmethod(var_depth, "+", [1], new GraceNum(4));
  var call1910 = callmethod(var_p,"pretty", [1], opresult1909);
  var opresult1912 = callmethod(opresult1907, "++", [1], call1910);
  var string1913 = new GraceString("");
  var opresult1915 = callmethod(opresult1912, "++", [1], string1913);
  var_s = opresult1915;
  return opresult1915;
};
  var call1916 = callmethod(Grace_prelude,"for()do", [1, 1], call1895, block1896);
  lineNumber = 711
  lineNumber = 713
  lineNumber = 1
  lineNumber = 710
  var call1918 = callmethod(var_part,"vararg", [0]);
  var bool1919 = new GraceBoolean(false)
  var opresult1921 = callmethod(call1918, "!=", [1], bool1919);
  if (Grace_isTrue(opresult1921)) {
  lineNumber = 711
  lineNumber = 712
  lineNumber = 711
  var string1922 = new GraceString("");
  var opresult1924 = callmethod(string1922, "++", [1], var_s);
  var string1925 = new GraceString("\n    ");
  var opresult1927 = callmethod(opresult1924, "++", [1], string1925);
  var opresult1929 = callmethod(opresult1927, "++", [1], var_spc);
  var string1930 = new GraceString("Vararg: ");
  var opresult1932 = callmethod(opresult1929, "++", [1], string1930);
  var opresult1934 = callmethod(var_depth, "+", [1], new GraceNum(3));
  lineNumber = 712
  lineNumber = 1
  lineNumber = 711
  var call1935 = callmethod(var_part,"vararg", [0]);
  var call1936 = callmethod(call1935,"pretty", [1], opresult1934);
  var opresult1938 = callmethod(opresult1932, "++", [1], call1936);
  var string1939 = new GraceString("");
  var opresult1941 = callmethod(opresult1938, "++", [1], string1939);
  var_s = opresult1941;
  var if1917 = opresult1941;
}
  return if1917;
};
  var call1942 = callmethod(Grace_prelude,"for()do", [1, 1], call1865, block1866);
  lineNumber = 715
  lineNumber = 714
  var string1943 = new GraceString("\n");
  var opresult1945 = callmethod(var_s, "++", [1], string1943);
  var opresult1947 = callmethod(opresult1945, "++", [1], var_spc);
  var string1948 = new GraceString("Body:");
  var opresult1950 = callmethod(opresult1947, "++", [1], string1948);
  var_s = opresult1950;
  lineNumber = 716
  lineNumber = 715
  lineNumber = 1
  lineNumber = 715
  var call1951 = callmethod(this,"value", [0]);
  lineNumber = 716
  var block1952 = Grace_allocObject();
  block1952.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1952.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1952.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1952.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1952.receiver = this;
  block1952.className = 'block<ast:716>';
  block1952.real = function(
var_x
) {
  lineNumber = 717
  lineNumber = 716
  var string1953 = new GraceString("\n  ");
  var opresult1955 = callmethod(var_s, "++", [1], string1953);
  var opresult1957 = callmethod(opresult1955, "++", [1], var_spc);
  var opresult1959 = callmethod(var_depth, "+", [1], new GraceNum(2));
  var call1960 = callmethod(var_x,"pretty", [1], opresult1959);
  var opresult1962 = callmethod(opresult1957, "++", [1], call1960);
  var_s = opresult1962;
  return opresult1962;
};
  var call1963 = callmethod(Grace_prelude,"for()do", [1, 1], call1951, block1952);
  lineNumber = 718
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj1765.methods["pretty"] = func1810;
var func1964 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 722
  lineNumber = 721
  var string1965 = new GraceString("");
  var var_spc = string1965;
  lineNumber = 724
  lineNumber = 722
  var diff1967 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult1969 = callmethod(new GraceNum(0), "..", [1], diff1967);
  lineNumber = 724
  var block1970 = Grace_allocObject();
  block1970.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1970.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1970.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1970.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1970.receiver = this;
  block1970.className = 'block<ast:724>';
  block1970.real = function(
var_i
) {
  lineNumber = 723
  var string1971 = new GraceString("    ");
  var opresult1973 = callmethod(var_spc, "++", [1], string1971);
  var_spc = opresult1973;
  return opresult1973;
};
  var call1974 = callmethod(Grace_prelude,"for()do", [1, 1], opresult1969, block1970);
  lineNumber = 725
  var string1975 = new GraceString("class ");
  lineNumber = 726
  lineNumber = 1
  lineNumber = 725
  var call1976 = callmethod(this,"name", [0]);
  var call1977 = callmethod(call1976,"toGrace", [1], new GraceNum(0));
  var opresult1979 = callmethod(string1975, "++", [1], call1977);
  var string1980 = new GraceString("");
  var opresult1982 = callmethod(opresult1979, "++", [1], string1980);
  var var_s = opresult1982;
  lineNumber = 744
  lineNumber = 747
  lineNumber = 1
  lineNumber = 747
  lineNumber = 1
  lineNumber = 726
  var call1984 = callmethod(this,"name", [0]);
  var call1985 = callmethod(call1984,"kind", [0]);
  var string1986 = new GraceString("generic");
  var opresult1988 = callmethod(call1985, "!=", [1], string1986);
  if (Grace_isTrue(opresult1988)) {
  lineNumber = 729
  lineNumber = 728
  var string1989 = new GraceString(".");
  var opresult1991 = callmethod(var_s, "++", [1], string1989);
  var_s = opresult1991;
  lineNumber = 744
  lineNumber = 729
  lineNumber = 1
  lineNumber = 729
  var call1992 = callmethod(this,"signature", [0]);
  lineNumber = 744
  var block1993 = Grace_allocObject();
  block1993.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1993.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1993.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1993.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1993.receiver = this;
  block1993.className = 'block<ast:744>';
  block1993.real = function(
var_part
) {
  lineNumber = 731
  lineNumber = 730
  lineNumber = 731
  lineNumber = 1
  lineNumber = 730
  var call1994 = callmethod(var_part,"name", [0]);
  var opresult1996 = callmethod(var_s, "++", [1], call1994);
  var_s = opresult1996;
  lineNumber = 744
  lineNumber = 745
  lineNumber = 1
  lineNumber = 745
  lineNumber = 1
  lineNumber = 731
  var call1998 = callmethod(var_part,"params", [0]);
  var call1999 = callmethod(call1998,"size", [0]);
  var opresult2001 = callmethod(call1999, ">", [1], new GraceNum(0));
  lineNumber = 745
  lineNumber = 1
  lineNumber = 731
  var call2002 = callmethod(var_part,"vararg", [0]);
  var bool2003 = new GraceBoolean(false)
  var opresult2005 = callmethod(call2002, "!=", [1], bool2003);
  var opresult2007 = callmethod(opresult2001, "|", [1], opresult2005);
  if (Grace_isTrue(opresult2007)) {
  lineNumber = 733
  lineNumber = 732
  var string2008 = new GraceString("(");
  var opresult2010 = callmethod(var_s, "++", [1], string2008);
  var_s = opresult2010;
  lineNumber = 738
  lineNumber = 733
  lineNumber = 1
  lineNumber = 733
  lineNumber = 1
  lineNumber = 733
  var call2011 = callmethod(var_part,"params", [0]);
  var call2012 = callmethod(call2011,"indices", [0]);
  lineNumber = 738
  var block2013 = Grace_allocObject();
  block2013.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2013.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2013.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2013.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2013.receiver = this;
  block2013.className = 'block<ast:738>';
  block2013.real = function(
var_pnr
) {
  lineNumber = 735
  lineNumber = 1
  lineNumber = 734
  var call2014 = callmethod(var_part,"params", [0]);
  var idxres2015 = call2014.methods["[]"].call(call2014, [1], var_pnr);
  var var_p = idxres2015;
  lineNumber = 735
  var opresult2017 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call2018 = callmethod(var_p,"toGrace", [1], opresult2017);
  var opresult2020 = callmethod(var_s, "++", [1], call2018);
  var_s = opresult2020;
  lineNumber = 738
  lineNumber = 739
  lineNumber = 736
  lineNumber = 739
  lineNumber = 1
  lineNumber = 739
  lineNumber = 1
  lineNumber = 736
  var call2022 = callmethod(var_part,"params", [0]);
  var call2023 = callmethod(call2022,"size", [0]);
  var opresult2025 = callmethod(var_pnr, "<", [1], call2023);
  lineNumber = 739
  lineNumber = 1
  lineNumber = 736
  var call2026 = callmethod(var_part,"vararg", [0]);
  var bool2027 = new GraceBoolean(false)
  var opresult2029 = callmethod(call2026, "!=", [1], bool2027);
  var opresult2031 = callmethod(opresult2025, "|", [1], opresult2029);
  if (Grace_isTrue(opresult2031)) {
  lineNumber = 738
  lineNumber = 737
  var string2032 = new GraceString(", ");
  var opresult2034 = callmethod(var_s, "++", [1], string2032);
  var_s = opresult2034;
  var if2021 = opresult2034;
}
  return if2021;
};
  var call2035 = callmethod(Grace_prelude,"for()do", [1, 1], call2012, block2013);
  lineNumber = 742
  lineNumber = 743
  lineNumber = 1
  lineNumber = 740
  var call2037 = callmethod(var_part,"vararg", [0]);
  var bool2038 = new GraceBoolean(false)
  var opresult2040 = callmethod(call2037, "!=", [1], bool2038);
  if (Grace_isTrue(opresult2040)) {
  lineNumber = 742
  lineNumber = 741
  var string2041 = new GraceString("*");
  var opresult2043 = callmethod(var_s, "++", [1], string2041);
  lineNumber = 742
  lineNumber = 1
  lineNumber = 742
  lineNumber = 1
  lineNumber = 741
  var call2044 = callmethod(var_part,"vararg", [0]);
  var call2045 = callmethod(call2044,"value", [0]);
  var opresult2047 = callmethod(opresult2043, "++", [1], call2045);
  var_s = opresult2047;
  var if2036 = opresult2047;
}
  lineNumber = 744
  lineNumber = 743
  var string2048 = new GraceString(")");
  var opresult2050 = callmethod(var_s, "++", [1], string2048);
  var_s = opresult2050;
  var if1997 = opresult2050;
}
  return if1997;
};
  var call2051 = callmethod(Grace_prelude,"for()do", [1, 1], call1992, block1993);
  var if1983 = call2051;
}
  lineNumber = 748
  lineNumber = 747
  var string2052 = new GraceString(" {");
  var opresult2054 = callmethod(var_s, "++", [1], string2052);
  var_s = opresult2054;
  lineNumber = 749
  lineNumber = 748
  lineNumber = 1
  lineNumber = 748
  var call2055 = callmethod(this,"value", [0]);
  lineNumber = 749
  var block2056 = Grace_allocObject();
  block2056.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2056.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2056.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2056.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2056.receiver = this;
  block2056.className = 'block<ast:749>';
  block2056.real = function(
var_mx
) {
  lineNumber = 750
  lineNumber = 749
  var string2057 = new GraceString("\n");
  var opresult2059 = callmethod(var_s, "++", [1], string2057);
  var opresult2061 = callmethod(opresult2059, "++", [1], var_spc);
  var string2062 = new GraceString("    ");
  var opresult2064 = callmethod(opresult2061, "++", [1], string2062);
  var opresult2066 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call2067 = callmethod(var_mx,"toGrace", [1], opresult2066);
  var opresult2069 = callmethod(opresult2064, "++", [1], call2067);
  var_s = opresult2069;
  return opresult2069;
};
  var call2070 = callmethod(Grace_prelude,"for()do", [1, 1], call2055, block2056);
  lineNumber = 752
  lineNumber = 751
  var string2071 = new GraceString("\n");
  var opresult2073 = callmethod(var_s, "++", [1], string2071);
  var opresult2075 = callmethod(opresult2073, "++", [1], var_spc);
  var string2076 = new GraceString("}");
  var opresult2078 = callmethod(opresult2075, "++", [1], string2076);
  var_s = opresult2078;
  lineNumber = 752
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1964.paramTypes = [];
func1964.paramTypes.push([type_Number, "depth"]);
  obj1765.methods["toGrace"] = func1964;
  superDepth = origSuperDepth;
}
obj_init_1765.apply(obj1765, []);
  return obj1765
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj1762.methods["new"] = func1764;
  superDepth = origSuperDepth;
}
obj_init_1762.apply(obj1762, []);
  var var_classNode = obj1762;
  lineNumber = 755
  lineNumber = 1
var func2079 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 755
  return var_objectNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["objectNode"] = func2079;
  lineNumber = 1
  var obj2080 = Grace_allocObject();
  obj2080.outer = this;
    var reader_ast_outer2081 = function() {
    return this.outer;
  }
  obj2080.methods["outer"] = reader_ast_outer2081;
function obj_init_2080() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2082 = function(argcv) {
  var curarg = 1;
  var var_body = arguments[curarg];
  curarg++;
  var var_superclass__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2083 = Grace_allocObject();
  obj2083.outer = this;
    var reader_ast_outer2084 = function() {
    return this.outer;
  }
  obj2083.methods["outer"] = reader_ast_outer2084;
function obj_init_2083() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 756
  var string2085 = new GraceString("object");
  obj2083.data["kind"] = string2085;
    var reader_ast_kind2086 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2086.def = true;
  obj2083.methods["kind"] = reader_ast_kind2086;
  lineNumber = 757
  obj2083.data["value"] = var_body;
    var reader_ast_value2087 = function() {
    return this.data["value"];
  }
  reader_ast_value2087.def = true;
  obj2083.methods["value"] = reader_ast_value2087;
  lineNumber = 758
  var string2088 = new GraceString("");
  obj2083.data["register"] = string2088;
    var reader_ast_register2089 = function() {
    return this.data["register"];
  }
  obj2083.methods["register"] = reader_ast_register2089;
  obj2083.data["register"] = string2088;
  var writer_ast_register2089 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2083.methods["register:="] = writer_ast_register2089;
obj2083.mutable = true;
  lineNumber = 760
  lineNumber = 1
  lineNumber = 759
  var call2090 = callmethod(var_util,"linenum", [0]);
  obj2083.data["line"] = call2090;
    var reader_ast_line2091 = function() {
    return this.data["line"];
  }
  reader_ast_line2091.def = true;
  obj2083.methods["line"] = reader_ast_line2091;
  lineNumber = 760
  obj2083.data["superclass"] = var_superclass__39__;
    var reader_ast_superclass2092 = function() {
    return this.data["superclass"];
  }
  reader_ast_superclass2092.def = true;
  obj2083.methods["superclass"] = reader_ast_superclass2092;
  lineNumber = 761
  var bool2093 = new GraceBoolean(false)
  obj2083.data["otype"] = bool2093;
    var reader_ast_otype2094 = function() {
    return this.data["otype"];
  }
  obj2083.methods["otype"] = reader_ast_otype2094;
  obj2083.data["otype"] = bool2093;
  var writer_ast_otype2094 = function(argcv, o) {
    this.data["otype"] = o;
  }
  obj2083.methods["otype:="] = writer_ast_otype2094;
obj2083.mutable = true;
  lineNumber = 762
  var string2095 = new GraceString("object");
  obj2083.data["classname"] = string2095;
    var reader_ast_classname2096 = function() {
    return this.data["classname"];
  }
  obj2083.methods["classname"] = reader_ast_classname2096;
  obj2083.data["classname"] = string2095;
  var writer_ast_classname2096 = function(argcv, o) {
    this.data["classname"] = o;
  }
  obj2083.methods["classname:="] = writer_ast_classname2096;
obj2083.mutable = true;
var func2097 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 769
  lineNumber = 764
  var call2099 = callmethod(var_visitor,"visitObject", [1], this);
  if (Grace_isTrue(call2099)) {
  lineNumber = 766
  lineNumber = 768
  lineNumber = 1
  lineNumber = 765
  var call2101 = callmethod(this,"superclass", [0]);
  var bool2102 = new GraceBoolean(false)
  var opresult2104 = callmethod(call2101, "!=", [1], bool2102);
  if (Grace_isTrue(opresult2104)) {
  lineNumber = 766
  lineNumber = 767
  lineNumber = 1
  lineNumber = 766
  var call2105 = callmethod(this,"superclass", [0]);
  var call2106 = callmethod(call2105,"accept", [1], var_visitor);
  var if2100 = call2106;
}
  lineNumber = 769
  lineNumber = 768
  lineNumber = 1
  lineNumber = 768
  var call2107 = callmethod(this,"value", [0]);
  lineNumber = 769
  var block2108 = Grace_allocObject();
  block2108.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2108.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2108.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2108.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2108.receiver = this;
  block2108.className = 'block<ast:769>';
  block2108.real = function(
var_x
) {
  var call2109 = callmethod(var_x,"accept", [1], var_visitor);
  return call2109;
};
  var call2110 = callmethod(Grace_prelude,"for()do", [1, 1], call2107, block2108);
  var if2098 = call2110;
}
  return if2098
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2097.paramTypes = [];
func2097.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2083.methods["accept"] = func2097;
var func2111 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 775
  lineNumber = 774
  var string2112 = new GraceString("");
  var var_spc = string2112;
  lineNumber = 777
  lineNumber = 775
  var opresult2114 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 777
  var block2115 = Grace_allocObject();
  block2115.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2115.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2115.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2115.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2115.receiver = this;
  block2115.className = 'block<ast:777>';
  block2115.real = function(
var_i
) {
  lineNumber = 776
  var string2116 = new GraceString("  ");
  var opresult2118 = callmethod(var_spc, "++", [1], string2116);
  var_spc = opresult2118;
  return opresult2118;
};
  var call2119 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2114, block2115);
  lineNumber = 779
  lineNumber = 778
  var string2120 = new GraceString("Object");
  var var_s = string2120;
  lineNumber = 784
  lineNumber = 785
  lineNumber = 1
  lineNumber = 779
  var call2122 = callmethod(this,"superclass", [0]);
  var bool2123 = new GraceBoolean(false)
  var opresult2125 = callmethod(call2122, "/=", [1], bool2123);
  if (Grace_isTrue(opresult2125)) {
  lineNumber = 781
  lineNumber = 780
  var string2126 = new GraceString("\n");
  var opresult2128 = callmethod(var_s, "++", [1], string2126);
  var opresult2130 = callmethod(opresult2128, "++", [1], var_spc);
  var string2131 = new GraceString("Superclass:");
  var opresult2133 = callmethod(opresult2130, "++", [1], string2131);
  var_s = opresult2133;
  lineNumber = 781
  lineNumber = 782
  lineNumber = 781
  var string2134 = new GraceString("\n  ");
  var opresult2136 = callmethod(var_s, "++", [1], string2134);
  var opresult2138 = callmethod(opresult2136, "++", [1], var_spc);
  var opresult2140 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 782
  lineNumber = 1
  lineNumber = 781
  var call2141 = callmethod(this,"superclass", [0]);
  var call2142 = callmethod(call2141,"pretty", [1], opresult2140);
  var opresult2144 = callmethod(opresult2138, "++", [1], call2142);
  var_s = opresult2144;
  lineNumber = 783
  lineNumber = 782
  var string2145 = new GraceString("\n");
  var opresult2147 = callmethod(var_s, "++", [1], string2145);
  var opresult2149 = callmethod(opresult2147, "++", [1], var_spc);
  var string2150 = new GraceString("Body:");
  var opresult2152 = callmethod(opresult2149, "++", [1], string2150);
  var_s = opresult2152;
  lineNumber = 784
  lineNumber = 783
  var opresult2154 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var_depth = opresult2154;
  var if2121 = opresult2154;
}
  lineNumber = 786
  lineNumber = 785
  lineNumber = 1
  lineNumber = 785
  var call2155 = callmethod(this,"value", [0]);
  lineNumber = 786
  var block2156 = Grace_allocObject();
  block2156.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2156.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2156.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2156.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2156.receiver = this;
  block2156.className = 'block<ast:786>';
  block2156.real = function(
var_x
) {
  lineNumber = 787
  lineNumber = 786
  var string2157 = new GraceString("\n");
  var opresult2159 = callmethod(var_s, "++", [1], string2157);
  var opresult2161 = callmethod(opresult2159, "++", [1], var_spc);
  var opresult2163 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call2164 = callmethod(var_x,"pretty", [1], opresult2163);
  var opresult2166 = callmethod(opresult2161, "++", [1], call2164);
  var_s = opresult2166;
  return opresult2166;
};
  var call2167 = callmethod(Grace_prelude,"for()do", [1, 1], call2155, block2156);
  lineNumber = 788
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2083.methods["pretty"] = func2111;
var func2168 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 792
  lineNumber = 791
  var string2169 = new GraceString("");
  var var_spc = string2169;
  lineNumber = 794
  lineNumber = 792
  var diff2171 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult2173 = callmethod(new GraceNum(0), "..", [1], diff2171);
  lineNumber = 794
  var block2174 = Grace_allocObject();
  block2174.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2174.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2174.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2174.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2174.receiver = this;
  block2174.className = 'block<ast:794>';
  block2174.real = function(
var_i
) {
  lineNumber = 793
  var string2175 = new GraceString("    ");
  var opresult2177 = callmethod(var_spc, "++", [1], string2175);
  var_spc = opresult2177;
  return opresult2177;
};
  var call2178 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2173, block2174);
  lineNumber = 796
  lineNumber = 795
  var string2179 = new GraceString("object {");
  var var_s = string2179;
  lineNumber = 797
  lineNumber = 796
  lineNumber = 1
  lineNumber = 796
  var call2180 = callmethod(this,"value", [0]);
  lineNumber = 797
  var block2181 = Grace_allocObject();
  block2181.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2181.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2181.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2181.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2181.receiver = this;
  block2181.className = 'block<ast:797>';
  block2181.real = function(
var_x
) {
  lineNumber = 798
  lineNumber = 797
  var string2182 = new GraceString("\n");
  var opresult2184 = callmethod(var_s, "++", [1], string2182);
  var opresult2186 = callmethod(opresult2184, "++", [1], var_spc);
  var string2187 = new GraceString("    ");
  var opresult2189 = callmethod(opresult2186, "++", [1], string2187);
  var opresult2191 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call2192 = callmethod(var_x,"toGrace", [1], opresult2191);
  var opresult2194 = callmethod(opresult2189, "++", [1], call2192);
  var_s = opresult2194;
  return opresult2194;
};
  var call2195 = callmethod(Grace_prelude,"for()do", [1, 1], call2180, block2181);
  lineNumber = 800
  lineNumber = 799
  var string2196 = new GraceString("\n");
  var opresult2198 = callmethod(var_s, "++", [1], string2196);
  var opresult2200 = callmethod(opresult2198, "++", [1], var_spc);
  var string2201 = new GraceString("}");
  var opresult2203 = callmethod(opresult2200, "++", [1], string2201);
  var_s = opresult2203;
  lineNumber = 800
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2168.paramTypes = [];
func2168.paramTypes.push([type_Number, "depth"]);
  obj2083.methods["toGrace"] = func2168;
  superDepth = origSuperDepth;
}
obj_init_2083.apply(obj2083, []);
  return obj2083
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2080.methods["new"] = func2082;
  superDepth = origSuperDepth;
}
obj_init_2080.apply(obj2080, []);
  var var_objectNode = obj2080;
  lineNumber = 803
  lineNumber = 1
var func2204 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 803
  return var_arrayNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["arrayNode"] = func2204;
  lineNumber = 1
  var obj2205 = Grace_allocObject();
  obj2205.outer = this;
    var reader_ast_outer2206 = function() {
    return this.outer;
  }
  obj2205.methods["outer"] = reader_ast_outer2206;
function obj_init_2205() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2207 = function(argcv) {
  var curarg = 1;
  var var_values = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2208 = Grace_allocObject();
  obj2208.outer = this;
    var reader_ast_outer2209 = function() {
    return this.outer;
  }
  obj2208.methods["outer"] = reader_ast_outer2209;
function obj_init_2208() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 804
  var string2210 = new GraceString("array");
  obj2208.data["kind"] = string2210;
    var reader_ast_kind2211 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2211.def = true;
  obj2208.methods["kind"] = reader_ast_kind2211;
  lineNumber = 805
  obj2208.data["value"] = var_values;
    var reader_ast_value2212 = function() {
    return this.data["value"];
  }
  reader_ast_value2212.def = true;
  obj2208.methods["value"] = reader_ast_value2212;
  lineNumber = 806
  var string2213 = new GraceString("");
  obj2208.data["register"] = string2213;
    var reader_ast_register2214 = function() {
    return this.data["register"];
  }
  obj2208.methods["register"] = reader_ast_register2214;
  obj2208.data["register"] = string2213;
  var writer_ast_register2214 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2208.methods["register:="] = writer_ast_register2214;
obj2208.mutable = true;
  lineNumber = 808
  lineNumber = 1
  lineNumber = 807
  var call2215 = callmethod(var_util,"linenum", [0]);
  obj2208.data["line"] = call2215;
    var reader_ast_line2216 = function() {
    return this.data["line"];
  }
  reader_ast_line2216.def = true;
  obj2208.methods["line"] = reader_ast_line2216;
var func2217 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 811
  lineNumber = 809
  var call2219 = callmethod(var_visitor,"visitArray", [1], this);
  if (Grace_isTrue(call2219)) {
  lineNumber = 811
  lineNumber = 810
  lineNumber = 1
  lineNumber = 810
  var call2220 = callmethod(this,"value", [0]);
  lineNumber = 811
  var block2221 = Grace_allocObject();
  block2221.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2221.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2221.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2221.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2221.receiver = this;
  block2221.className = 'block<ast:811>';
  block2221.real = function(
var_ax
) {
  var call2222 = callmethod(var_ax,"accept", [1], var_visitor);
  return call2222;
};
  var call2223 = callmethod(Grace_prelude,"for()do", [1, 1], call2220, block2221);
  var if2218 = call2223;
}
  return if2218
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2217.paramTypes = [];
func2217.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2208.methods["accept"] = func2217;
var func2224 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 817
  lineNumber = 816
  var string2225 = new GraceString("");
  var var_spc = string2225;
  lineNumber = 819
  lineNumber = 817
  var opresult2227 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 819
  var block2228 = Grace_allocObject();
  block2228.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2228.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2228.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2228.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2228.receiver = this;
  block2228.className = 'block<ast:819>';
  block2228.real = function(
var_ai
) {
  lineNumber = 818
  var string2229 = new GraceString("  ");
  var opresult2231 = callmethod(var_spc, "++", [1], string2229);
  var_spc = opresult2231;
  return opresult2231;
};
  var call2232 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2227, block2228);
  lineNumber = 821
  lineNumber = 820
  var string2233 = new GraceString("Array");
  var var_s = string2233;
  lineNumber = 822
  lineNumber = 821
  lineNumber = 1
  lineNumber = 821
  var call2234 = callmethod(this,"value", [0]);
  lineNumber = 822
  var block2235 = Grace_allocObject();
  block2235.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2235.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2235.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2235.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2235.receiver = this;
  block2235.className = 'block<ast:822>';
  block2235.real = function(
var_ax
) {
  lineNumber = 823
  lineNumber = 822
  var string2236 = new GraceString("\n");
  var opresult2238 = callmethod(var_s, "++", [1], string2236);
  var opresult2240 = callmethod(opresult2238, "++", [1], var_spc);
  var opresult2242 = callmethod(var_depth, "+", [1], new GraceNum(1));
  var call2243 = callmethod(var_ax,"pretty", [1], opresult2242);
  var opresult2245 = callmethod(opresult2240, "++", [1], call2243);
  var_s = opresult2245;
  return opresult2245;
};
  var call2246 = callmethod(Grace_prelude,"for()do", [1, 1], call2234, block2235);
  lineNumber = 824
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2208.methods["pretty"] = func2224;
var func2247 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 828
  lineNumber = 827
  var string2248 = new GraceString("[");
  var var_s = string2248;
  lineNumber = 832
  lineNumber = 828
  lineNumber = 1
  lineNumber = 828
  lineNumber = 1
  lineNumber = 828
  var call2249 = callmethod(this,"value", [0]);
  var call2250 = callmethod(call2249,"indices", [0]);
  lineNumber = 832
  var block2251 = Grace_allocObject();
  block2251.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2251.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2251.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2251.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2251.receiver = this;
  block2251.className = 'block<ast:832>';
  block2251.real = function(
var_i
) {
  lineNumber = 829
  lineNumber = 830
  lineNumber = 1
  lineNumber = 829
  var call2252 = callmethod(this,"value", [0]);
  var idxres2253 = call2252.methods["[]"].call(call2252, [1], var_i);
  var call2254 = callmethod(idxres2253,"toGrace", [1], new GraceNum(0));
  var opresult2256 = callmethod(var_s, "++", [1], call2254);
  var_s = opresult2256;
  lineNumber = 832
  lineNumber = 833
  lineNumber = 830
  lineNumber = 833
  lineNumber = 1
  lineNumber = 833
  lineNumber = 1
  lineNumber = 830
  var call2258 = callmethod(this,"value", [0]);
  var call2259 = callmethod(call2258,"size", [0]);
  var opresult2261 = callmethod(var_i, "<", [1], call2259);
  if (Grace_isTrue(opresult2261)) {
  lineNumber = 832
  lineNumber = 831
  var string2262 = new GraceString(", ");
  var opresult2264 = callmethod(var_s, "++", [1], string2262);
  var_s = opresult2264;
  var if2257 = opresult2264;
}
  return if2257;
};
  var call2265 = callmethod(Grace_prelude,"for()do", [1, 1], call2250, block2251);
  lineNumber = 835
  lineNumber = 834
  var string2266 = new GraceString("]");
  var opresult2268 = callmethod(var_s, "++", [1], string2266);
  var_s = opresult2268;
  lineNumber = 835
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2247.paramTypes = [];
func2247.paramTypes.push([type_Number, "depth"]);
  obj2208.methods["toGrace"] = func2247;
  superDepth = origSuperDepth;
}
obj_init_2208.apply(obj2208, []);
  return obj2208
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2205.methods["new"] = func2207;
  superDepth = origSuperDepth;
}
obj_init_2205.apply(obj2205, []);
  var var_arrayNode = obj2205;
  lineNumber = 838
  lineNumber = 1
var func2269 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 838
  return var_memberNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["memberNode"] = func2269;
  lineNumber = 1
  var obj2270 = Grace_allocObject();
  obj2270.outer = this;
    var reader_ast_outer2271 = function() {
    return this.outer;
  }
  obj2270.methods["outer"] = reader_ast_outer2271;
function obj_init_2270() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2272 = function(argcv) {
  var curarg = 1;
  var var_what = arguments[curarg];
  curarg++;
  var var_in__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2273 = Grace_allocObject();
  obj2273.outer = this;
    var reader_ast_outer2274 = function() {
    return this.outer;
  }
  obj2273.methods["outer"] = reader_ast_outer2274;
function obj_init_2273() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 839
  var string2275 = new GraceString("member");
  obj2273.data["kind"] = string2275;
    var reader_ast_kind2276 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2276.def = true;
  obj2273.methods["kind"] = reader_ast_kind2276;
  lineNumber = 840
  obj2273.data["value"] = var_what;
    var reader_ast_value2277 = function() {
    return this.data["value"];
  }
  obj2273.methods["value"] = reader_ast_value2277;
  obj2273.data["value"] = var_what;
  var writer_ast_value2277 = function(argcv, o) {
    this.data["value"] = o;
  }
  obj2273.methods["value:="] = writer_ast_value2277;
obj2273.mutable = true;
  lineNumber = 841
  obj2273.data["in"] = var_in__39__;
    var reader_ast_in2278 = function() {
    return this.data["in"];
  }
  reader_ast_in2278.def = true;
  obj2273.methods["in"] = reader_ast_in2278;
  lineNumber = 842
  var string2279 = new GraceString("");
  obj2273.data["register"] = string2279;
    var reader_ast_register2280 = function() {
    return this.data["register"];
  }
  obj2273.methods["register"] = reader_ast_register2280;
  obj2273.data["register"] = string2279;
  var writer_ast_register2280 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2273.methods["register:="] = writer_ast_register2280;
obj2273.mutable = true;
  lineNumber = 844
  lineNumber = 1
  lineNumber = 843
  var call2281 = callmethod(var_util,"linenum", [0]);
  obj2273.data["line"] = call2281;
    var reader_ast_line2282 = function() {
    return this.data["line"];
  }
  reader_ast_line2282.def = true;
  obj2273.methods["line"] = reader_ast_line2282;
var func2283 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 846
  lineNumber = 845
  var call2285 = callmethod(var_visitor,"visitMember", [1], this);
  if (Grace_isTrue(call2285)) {
  lineNumber = 846
  lineNumber = 847
  lineNumber = 1
  lineNumber = 846
  var call2286 = callmethod(this,"in", [0]);
  var call2287 = callmethod(call2286,"accept", [1], var_visitor);
  var if2284 = call2287;
}
  return if2284
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2283.paramTypes = [];
func2283.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2273.methods["accept"] = func2283;
var func2288 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 851
  lineNumber = 850
  var string2289 = new GraceString("");
  var var_spc = string2289;
  lineNumber = 853
  lineNumber = 851
  var opresult2291 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 853
  var block2292 = Grace_allocObject();
  block2292.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2292.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2292.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2292.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2292.receiver = this;
  block2292.className = 'block<ast:853>';
  block2292.real = function(
var_i
) {
  lineNumber = 852
  var string2293 = new GraceString("  ");
  var opresult2295 = callmethod(var_spc, "++", [1], string2293);
  var_spc = opresult2295;
  return opresult2295;
};
  var call2296 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2291, block2292);
  lineNumber = 855
  lineNumber = 854
  var string2297 = new GraceString("Member(");
  lineNumber = 855
  lineNumber = 1
  lineNumber = 854
  var call2298 = callmethod(this,"value", [0]);
  var opresult2300 = callmethod(string2297, "++", [1], call2298);
  var string2301 = new GraceString(")\n");
  var opresult2303 = callmethod(opresult2300, "++", [1], string2301);
  var var_s = opresult2303;
  lineNumber = 855
  lineNumber = 856
  lineNumber = 855
  var opresult2305 = callmethod(var_s, "++", [1], var_spc);
  var opresult2307 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 856
  lineNumber = 1
  lineNumber = 855
  var call2308 = callmethod(this,"in", [0]);
  var call2309 = callmethod(call2308,"pretty", [1], opresult2307);
  var opresult2311 = callmethod(opresult2305, "++", [1], call2309);
  var_s = opresult2311;
  lineNumber = 856
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2273.methods["pretty"] = func2288;
var func2312 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 860
  lineNumber = 859
  var string2313 = new GraceString("");
  var var_s = string2313;
  lineNumber = 864
  lineNumber = 860
  lineNumber = 866
  lineNumber = 1
  lineNumber = 860
  var call2315 = callmethod(this,"value", [0]);
  var call2316 = callmethod(call2315,"substringFrom()to", [1, 1], new GraceNum(1), new GraceNum(6));
  var string2317 = new GraceString("prefix");
  var opresult2319 = callmethod(call2316, "==", [1], string2317);
  if (Grace_isTrue(opresult2319)) {
  lineNumber = 861
  lineNumber = 1
  lineNumber = 861
  lineNumber = 1
  lineNumber = 861
  var call2320 = callmethod(this,"value", [0]);
  var call2321 = callmethod(call2320,"size", [0]);
  lineNumber = 862
  lineNumber = 1
  lineNumber = 861
  var call2322 = callmethod(this,"value", [0]);
  var call2323 = callmethod(call2322,"substringFrom()to", [1, 1], new GraceNum(7), call2321);
  var_s = call2323;
  lineNumber = 862
  lineNumber = 863
  lineNumber = 862
  var string2324 = new GraceString(" ");
  var opresult2326 = callmethod(var_s, "++", [1], string2324);
  lineNumber = 863
  lineNumber = 1
  lineNumber = 862
  var call2327 = callmethod(this,"in", [0]);
  var call2328 = callmethod(call2327,"toGrace", [1], new GraceNum(0));
  var opresult2330 = callmethod(opresult2326, "++", [1], call2328);
  var_s = opresult2330;
  var if2314 = opresult2330;
  } else {
  lineNumber = 864
  lineNumber = 865
  lineNumber = 1
  lineNumber = 864
  var call2331 = callmethod(this,"in", [0]);
  var call2332 = callmethod(call2331,"toGrace", [1], var_depth);
  var string2333 = new GraceString(".");
  var opresult2335 = callmethod(call2332, "++", [1], string2333);
  lineNumber = 1
  lineNumber = 864
  var call2336 = callmethod(this,"value", [0]);
  var opresult2338 = callmethod(opresult2335, "++", [1], call2336);
  var_s = opresult2338;
  var if2314 = opresult2338;
}
  lineNumber = 866
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2312.paramTypes = [];
func2312.paramTypes.push([type_Number, "depth"]);
  obj2273.methods["toGrace"] = func2312;
  superDepth = origSuperDepth;
}
obj_init_2273.apply(obj2273, []);
  return obj2273
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2270.methods["new"] = func2272;
  superDepth = origSuperDepth;
}
obj_init_2270.apply(obj2270, []);
  var var_memberNode = obj2270;
  lineNumber = 869
  lineNumber = 1
var func2339 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 869
  return var_genericNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["genericNode"] = func2339;
  lineNumber = 1
  var obj2340 = Grace_allocObject();
  obj2340.outer = this;
    var reader_ast_outer2341 = function() {
    return this.outer;
  }
  obj2340.methods["outer"] = reader_ast_outer2341;
function obj_init_2340() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2342 = function(argcv) {
  var curarg = 1;
  var var_base = arguments[curarg];
  curarg++;
  var var_params__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2343 = Grace_allocObject();
  obj2343.outer = this;
    var reader_ast_outer2344 = function() {
    return this.outer;
  }
  obj2343.methods["outer"] = reader_ast_outer2344;
function obj_init_2343() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 870
  var string2345 = new GraceString("generic");
  obj2343.data["kind"] = string2345;
    var reader_ast_kind2346 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2346.def = true;
  obj2343.methods["kind"] = reader_ast_kind2346;
  lineNumber = 871
  obj2343.data["value"] = var_base;
    var reader_ast_value2347 = function() {
    return this.data["value"];
  }
  reader_ast_value2347.def = true;
  obj2343.methods["value"] = reader_ast_value2347;
  lineNumber = 872
  obj2343.data["params"] = var_params__39__;
    var reader_ast_params2348 = function() {
    return this.data["params"];
  }
  reader_ast_params2348.def = true;
  obj2343.methods["params"] = reader_ast_params2348;
  lineNumber = 873
  var string2349 = new GraceString("");
  obj2343.data["register"] = string2349;
    var reader_ast_register2350 = function() {
    return this.data["register"];
  }
  obj2343.methods["register"] = reader_ast_register2350;
  obj2343.data["register"] = string2349;
  var writer_ast_register2350 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2343.methods["register:="] = writer_ast_register2350;
obj2343.mutable = true;
  lineNumber = 875
  lineNumber = 1
  lineNumber = 874
  var call2351 = callmethod(var_util,"linenum", [0]);
  obj2343.data["line"] = call2351;
    var reader_ast_line2352 = function() {
    return this.data["line"];
  }
  reader_ast_line2352.def = true;
  obj2343.methods["line"] = reader_ast_line2352;
var func2353 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 879
  lineNumber = 876
  var call2355 = callmethod(var_visitor,"visitGeneric", [1], this);
  if (Grace_isTrue(call2355)) {
  lineNumber = 877
  lineNumber = 878
  lineNumber = 1
  lineNumber = 877
  var call2356 = callmethod(this,"value", [0]);
  var call2357 = callmethod(call2356,"accept", [1], var_visitor);
  lineNumber = 879
  lineNumber = 878
  lineNumber = 1
  lineNumber = 878
  var call2358 = callmethod(this,"params", [0]);
  lineNumber = 879
  var block2359 = Grace_allocObject();
  block2359.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2359.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2359.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2359.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2359.receiver = this;
  block2359.className = 'block<ast:879>';
  block2359.real = function(
var_p
) {
  var call2360 = callmethod(var_p,"accept", [1], var_visitor);
  return call2360;
};
  var call2361 = callmethod(Grace_prelude,"for()do", [1, 1], call2358, block2359);
  var if2354 = call2361;
}
  return if2354
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2353.paramTypes = [];
func2353.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2343.methods["accept"] = func2353;
var func2362 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 885
  lineNumber = 884
  var string2363 = new GraceString("Generic(");
  lineNumber = 885
  lineNumber = 1
  lineNumber = 885
  lineNumber = 1
  lineNumber = 884
  var call2364 = callmethod(this,"value", [0]);
  var call2365 = callmethod(call2364,"value", [0]);
  var opresult2367 = callmethod(string2363, "++", [1], call2365);
  var string2368 = new GraceString("<");
  var opresult2370 = callmethod(opresult2367, "++", [1], string2368);
  var var_s = opresult2370;
  lineNumber = 888
  lineNumber = 885
  var call2371 = callmethod(this,"params", [0]);
  lineNumber = 888
  var block2372 = Grace_allocObject();
  block2372.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2372.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2372.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2372.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2372.receiver = this;
  block2372.className = 'block<ast:888>';
  block2372.real = function(
var_p
) {
  lineNumber = 886
  var call2373 = callmethod(var_p,"pretty", [1], new GraceNum(0));
  var opresult2375 = callmethod(var_s, "++", [1], call2373);
  var_s = opresult2375;
  lineNumber = 888
  lineNumber = 887
  var string2376 = new GraceString(",");
  var opresult2378 = callmethod(var_s, "++", [1], string2376);
  var_s = opresult2378;
  return opresult2378;
};
  var call2379 = callmethod(Grace_prelude,"for()do", [1, 1], call2371, block2372);
  lineNumber = 890
  lineNumber = 889
  var string2380 = new GraceString(">)");
  var opresult2382 = callmethod(var_s, "++", [1], string2380);
  return opresult2382
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2343.methods["pretty"] = func2362;
var func2383 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 893
  lineNumber = 1
  lineNumber = 893
  lineNumber = 1
  lineNumber = 892
  var call2384 = callmethod(this,"value", [0]);
  var call2385 = callmethod(call2384,"value", [0]);
  var string2386 = new GraceString("<");
  var opresult2388 = callmethod(call2385, "++", [1], string2386);
  var var_s = opresult2388;
  lineNumber = 897
  lineNumber = 893
  lineNumber = 1
  lineNumber = 893
  lineNumber = 1
  lineNumber = 893
  var call2389 = callmethod(this,"params", [0]);
  var call2390 = callmethod(call2389,"indices", [0]);
  lineNumber = 897
  var block2391 = Grace_allocObject();
  block2391.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2391.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2391.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2391.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2391.receiver = this;
  block2391.className = 'block<ast:897>';
  block2391.real = function(
var_i
) {
  lineNumber = 894
  lineNumber = 895
  lineNumber = 1
  lineNumber = 894
  var call2392 = callmethod(this,"params", [0]);
  var idxres2393 = call2392.methods["[]"].call(call2392, [1], var_i);
  var call2394 = callmethod(idxres2393,"toGrace", [1], new GraceNum(0));
  var opresult2396 = callmethod(var_s, "++", [1], call2394);
  var_s = opresult2396;
  lineNumber = 897
  lineNumber = 898
  lineNumber = 895
  lineNumber = 898
  lineNumber = 1
  lineNumber = 898
  lineNumber = 1
  lineNumber = 895
  var call2398 = callmethod(this,"params", [0]);
  var call2399 = callmethod(call2398,"size", [0]);
  var opresult2401 = callmethod(var_i, "<", [1], call2399);
  if (Grace_isTrue(opresult2401)) {
  lineNumber = 897
  lineNumber = 896
  var string2402 = new GraceString(", ");
  var opresult2404 = callmethod(var_s, "++", [1], string2402);
  var_s = opresult2404;
  var if2397 = opresult2404;
}
  return if2397;
};
  var call2405 = callmethod(Grace_prelude,"for()do", [1, 1], call2390, block2391);
  lineNumber = 900
  lineNumber = 899
  var string2406 = new GraceString(">");
  var opresult2408 = callmethod(var_s, "++", [1], string2406);
  var_s = opresult2408;
  lineNumber = 900
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2383.paramTypes = [];
func2383.paramTypes.push([type_Number, "depth"]);
  obj2343.methods["toGrace"] = func2383;
  superDepth = origSuperDepth;
}
obj_init_2343.apply(obj2343, []);
  return obj2343
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2340.methods["new"] = func2342;
  superDepth = origSuperDepth;
}
obj_init_2340.apply(obj2340, []);
  var var_genericNode = obj2340;
  lineNumber = 903
  lineNumber = 1
var func2409 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 903
  return var_identifierNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["identifierNode"] = func2409;
  lineNumber = 1
  var obj2410 = Grace_allocObject();
  obj2410.outer = this;
    var reader_ast_outer2411 = function() {
    return this.outer;
  }
  obj2410.methods["outer"] = reader_ast_outer2411;
function obj_init_2410() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2412 = function(argcv) {
  var curarg = 1;
  var var_n = arguments[curarg];
  curarg++;
  var var_dtype__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2413 = Grace_allocObject();
  obj2413.outer = this;
    var reader_ast_outer2414 = function() {
    return this.outer;
  }
  obj2413.methods["outer"] = reader_ast_outer2414;
function obj_init_2413() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 904
  var string2415 = new GraceString("identifier");
  obj2413.data["kind"] = string2415;
    var reader_ast_kind2416 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2416.def = true;
  obj2413.methods["kind"] = reader_ast_kind2416;
  lineNumber = 905
  obj2413.data["value"] = var_n;
    var reader_ast_value2417 = function() {
    return this.data["value"];
  }
  obj2413.methods["value"] = reader_ast_value2417;
  obj2413.data["value"] = var_n;
  var writer_ast_value2417 = function(argcv, o) {
    this.data["value"] = o;
  }
  obj2413.methods["value:="] = writer_ast_value2417;
obj2413.mutable = true;
  lineNumber = 906
  obj2413.data["dtype"] = var_dtype__39__;
    var reader_ast_dtype2418 = function() {
    return this.data["dtype"];
  }
  obj2413.methods["dtype"] = reader_ast_dtype2418;
  obj2413.data["dtype"] = var_dtype__39__;
  var writer_ast_dtype2418 = function(argcv, o) {
    this.data["dtype"] = o;
  }
  obj2413.methods["dtype:="] = writer_ast_dtype2418;
obj2413.mutable = true;
  lineNumber = 907
  var string2419 = new GraceString("");
  obj2413.data["register"] = string2419;
    var reader_ast_register2420 = function() {
    return this.data["register"];
  }
  obj2413.methods["register"] = reader_ast_register2420;
  obj2413.data["register"] = string2419;
  var writer_ast_register2420 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2413.methods["register:="] = writer_ast_register2420;
obj2413.mutable = true;
  lineNumber = 909
  lineNumber = 1
  lineNumber = 908
  var call2421 = callmethod(var_util,"linenum", [0]);
  obj2413.data["line"] = call2421;
    var reader_ast_line2422 = function() {
    return this.data["line"];
  }
  reader_ast_line2422.def = true;
  obj2413.methods["line"] = reader_ast_line2422;
var func2423 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 912
  lineNumber = 910
  var call2425 = callmethod(var_visitor,"visitIdentifier", [1], this);
  if (Grace_isTrue(call2425)) {
  lineNumber = 912
  lineNumber = 914
  lineNumber = 1
  lineNumber = 911
  var call2427 = callmethod(this,"dtype", [0]);
  var bool2428 = new GraceBoolean(false)
  var opresult2430 = callmethod(call2427, "!=", [1], bool2428);
  if (Grace_isTrue(opresult2430)) {
  lineNumber = 912
  lineNumber = 913
  lineNumber = 1
  lineNumber = 912
  var call2431 = callmethod(this,"dtype", [0]);
  var call2432 = callmethod(call2431,"accept", [1], var_visitor);
  var if2426 = call2432;
}
  var if2424 = if2426;
}
  return if2424
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2423.paramTypes = [];
func2423.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2413.methods["accept"] = func2423;
var func2433 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 918
  lineNumber = 917
  var string2434 = new GraceString("");
  var var_spc = string2434;
  lineNumber = 920
  lineNumber = 918
  var opresult2436 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 920
  var block2437 = Grace_allocObject();
  block2437.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2437.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2437.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2437.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2437.receiver = this;
  block2437.className = 'block<ast:920>';
  block2437.real = function(
var_i
) {
  lineNumber = 919
  var string2438 = new GraceString("  ");
  var opresult2440 = callmethod(var_spc, "++", [1], string2438);
  var_spc = opresult2440;
  return opresult2440;
};
  var call2441 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2436, block2437);
  lineNumber = 922
  lineNumber = 921
  var string2442 = new GraceString("Identifier(");
  lineNumber = 922
  lineNumber = 1
  lineNumber = 921
  var call2443 = callmethod(this,"value", [0]);
  var opresult2445 = callmethod(string2442, "++", [1], call2443);
  var string2446 = new GraceString(")");
  var opresult2448 = callmethod(opresult2445, "++", [1], string2446);
  var var_s = opresult2448;
  lineNumber = 924
  lineNumber = 926
  lineNumber = 1
  lineNumber = 922
  var call2450 = callmethod(this,"dtype", [0]);
  var bool2451 = new GraceBoolean(false)
  var opresult2453 = callmethod(call2450, "!=", [1], bool2451);
  if (Grace_isTrue(opresult2453)) {
  lineNumber = 924
  lineNumber = 923
  var string2454 = new GraceString("\n");
  var opresult2456 = callmethod(var_s, "++", [1], string2454);
  var opresult2458 = callmethod(opresult2456, "++", [1], var_spc);
  var string2459 = new GraceString("Type:");
  var opresult2461 = callmethod(opresult2458, "++", [1], string2459);
  var_s = opresult2461;
  lineNumber = 924
  lineNumber = 925
  lineNumber = 924
  var string2462 = new GraceString("\n");
  var opresult2464 = callmethod(var_s, "++", [1], string2462);
  var opresult2466 = callmethod(opresult2464, "++", [1], var_spc);
  var string2467 = new GraceString("  ");
  var opresult2469 = callmethod(opresult2466, "++", [1], string2467);
  var opresult2471 = callmethod(var_depth, "+", [1], new GraceNum(2));
  lineNumber = 925
  lineNumber = 1
  lineNumber = 924
  var call2472 = callmethod(this,"dtype", [0]);
  var call2473 = callmethod(call2472,"pretty", [1], opresult2471);
  var opresult2475 = callmethod(opresult2469, "++", [1], call2473);
  var_s = opresult2475;
  var if2449 = opresult2475;
}
  lineNumber = 926
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2413.methods["pretty"] = func2433;
var func2476 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 930
  lineNumber = 1
  lineNumber = 929
  var call2477 = callmethod(this,"value", [0]);
  var var_s = call2477;
  lineNumber = 931
  lineNumber = 933
  lineNumber = 1
  lineNumber = 930
  var call2479 = callmethod(this,"dtype", [0]);
  var bool2480 = new GraceBoolean(false)
  var opresult2482 = callmethod(call2479, "!=", [1], bool2480);
  if (Grace_isTrue(opresult2482)) {
  lineNumber = 931
  lineNumber = 932
  lineNumber = 931
  var string2483 = new GraceString(" : ");
  var opresult2485 = callmethod(var_s, "++", [1], string2483);
  var opresult2487 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 932
  lineNumber = 1
  lineNumber = 931
  var call2488 = callmethod(this,"dtype", [0]);
  var call2489 = callmethod(call2488,"toGrace", [1], opresult2487);
  var opresult2491 = callmethod(opresult2485, "++", [1], call2489);
  var_s = opresult2491;
  var if2478 = opresult2491;
}
  lineNumber = 933
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2476.paramTypes = [];
func2476.paramTypes.push([type_Number, "depth"]);
  obj2413.methods["toGrace"] = func2476;
  superDepth = origSuperDepth;
}
obj_init_2413.apply(obj2413, []);
  return obj2413
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2410.methods["new"] = func2412;
  superDepth = origSuperDepth;
}
obj_init_2410.apply(obj2410, []);
  var var_identifierNode = obj2410;
  lineNumber = 936
  lineNumber = 1
var func2492 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 936
  return var_octetsNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["octetsNode"] = func2492;
  lineNumber = 1
  var obj2493 = Grace_allocObject();
  obj2493.outer = this;
    var reader_ast_outer2494 = function() {
    return this.outer;
  }
  obj2493.methods["outer"] = reader_ast_outer2494;
function obj_init_2493() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2495 = function(argcv) {
  var curarg = 1;
  var var_n = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2496 = Grace_allocObject();
  obj2496.outer = this;
    var reader_ast_outer2497 = function() {
    return this.outer;
  }
  obj2496.methods["outer"] = reader_ast_outer2497;
function obj_init_2496() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 937
  var string2498 = new GraceString("octets");
  obj2496.data["kind"] = string2498;
    var reader_ast_kind2499 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2499.def = true;
  obj2496.methods["kind"] = reader_ast_kind2499;
  lineNumber = 938
  obj2496.data["value"] = var_n;
    var reader_ast_value2500 = function() {
    return this.data["value"];
  }
  reader_ast_value2500.def = true;
  obj2496.methods["value"] = reader_ast_value2500;
  lineNumber = 939
  var string2501 = new GraceString("");
  obj2496.data["register"] = string2501;
    var reader_ast_register2502 = function() {
    return this.data["register"];
  }
  obj2496.methods["register"] = reader_ast_register2502;
  obj2496.data["register"] = string2501;
  var writer_ast_register2502 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2496.methods["register:="] = writer_ast_register2502;
obj2496.mutable = true;
  lineNumber = 941
  lineNumber = 1
  lineNumber = 940
  var call2503 = callmethod(var_util,"linenum", [0]);
  obj2496.data["line"] = call2503;
    var reader_ast_line2504 = function() {
    return this.data["line"];
  }
  reader_ast_line2504.def = true;
  obj2496.methods["line"] = reader_ast_line2504;
var func2505 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 942
  var call2506 = callmethod(var_visitor,"visitOctets", [1], this);
  return call2506
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2505.paramTypes = [];
func2505.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2496.methods["accept"] = func2505;
var func2507 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 946
  lineNumber = 945
  var string2508 = new GraceString("Octets(");
  lineNumber = 946
  lineNumber = 1
  lineNumber = 945
  var call2509 = callmethod(this,"value", [0]);
  var opresult2511 = callmethod(string2508, "++", [1], call2509);
  var string2512 = new GraceString(")");
  var opresult2514 = callmethod(opresult2511, "++", [1], string2512);
  return opresult2514
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2496.methods["pretty"] = func2507;
var func2515 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 948
  lineNumber = 1
  lineNumber = 948
  var call2516 = callmethod(this,"value", [0]);
  return call2516
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2515.paramTypes = [];
func2515.paramTypes.push([type_Number, "depth"]);
  obj2496.methods["toGrace"] = func2515;
  superDepth = origSuperDepth;
}
obj_init_2496.apply(obj2496, []);
  return obj2496
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2493.methods["new"] = func2495;
  superDepth = origSuperDepth;
}
obj_init_2493.apply(obj2493, []);
  var var_octetsNode = obj2493;
  lineNumber = 951
  lineNumber = 1
var func2517 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 951
  return var_stringNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["stringNode"] = func2517;
  lineNumber = 1
  var obj2518 = Grace_allocObject();
  obj2518.outer = this;
    var reader_ast_outer2519 = function() {
    return this.outer;
  }
  obj2518.methods["outer"] = reader_ast_outer2519;
function obj_init_2518() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2520 = function(argcv) {
  var curarg = 1;
  var var_n = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2521 = Grace_allocObject();
  obj2521.outer = this;
    var reader_ast_outer2522 = function() {
    return this.outer;
  }
  obj2521.methods["outer"] = reader_ast_outer2522;
function obj_init_2521() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 952
  var string2523 = new GraceString("string");
  obj2521.data["kind"] = string2523;
    var reader_ast_kind2524 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2524.def = true;
  obj2521.methods["kind"] = reader_ast_kind2524;
  lineNumber = 953
  obj2521.data["value"] = var_n;
    var reader_ast_value2525 = function() {
    return this.data["value"];
  }
  obj2521.methods["value"] = reader_ast_value2525;
  obj2521.data["value"] = var_n;
  var writer_ast_value2525 = function(argcv, o) {
    this.data["value"] = o;
  }
  obj2521.methods["value:="] = writer_ast_value2525;
obj2521.mutable = true;
  lineNumber = 954
  var string2526 = new GraceString("");
  obj2521.data["register"] = string2526;
    var reader_ast_register2527 = function() {
    return this.data["register"];
  }
  obj2521.methods["register"] = reader_ast_register2527;
  obj2521.data["register"] = string2526;
  var writer_ast_register2527 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2521.methods["register:="] = writer_ast_register2527;
obj2521.mutable = true;
  lineNumber = 956
  lineNumber = 1
  lineNumber = 955
  var call2528 = callmethod(var_util,"linenum", [0]);
  obj2521.data["line"] = call2528;
    var reader_ast_line2529 = function() {
    return this.data["line"];
  }
  reader_ast_line2529.def = true;
  obj2521.methods["line"] = reader_ast_line2529;
var func2530 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 957
  var call2531 = callmethod(var_visitor,"visitString", [1], this);
  return call2531
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2530.paramTypes = [];
func2530.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2521.methods["accept"] = func2530;
var func2532 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 961
  lineNumber = 960
  var string2533 = new GraceString("String(");
  lineNumber = 961
  lineNumber = 1
  lineNumber = 960
  var call2534 = callmethod(this,"value", [0]);
  var opresult2536 = callmethod(string2533, "++", [1], call2534);
  var string2537 = new GraceString(")");
  var opresult2539 = callmethod(opresult2536, "++", [1], string2537);
  return opresult2539
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2521.methods["pretty"] = func2532;
var func2540 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 964
  lineNumber = 963
  var string2541 = new GraceString("\"");
  var var_s = string2541;
  lineNumber = 976
  lineNumber = 964
  lineNumber = 1
  lineNumber = 964
  var call2542 = callmethod(this,"value", [0]);
  lineNumber = 976
  var block2543 = Grace_allocObject();
  block2543.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2543.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2543.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2543.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2543.receiver = this;
  block2543.className = 'block<ast:976>';
  block2543.real = function(
var_c
) {
  lineNumber = 977
  lineNumber = 966
  var string2545 = new GraceString("\n");
  var opresult2547 = callmethod(var_c, "==", [1], string2545);
  if (Grace_isTrue(opresult2547)) {
  lineNumber = 968
  lineNumber = 967
  var string2548 = new GraceString("\\n");
  var opresult2550 = callmethod(var_s, "++", [1], string2548);
  var_s = opresult2550;
  var if2544 = opresult2550;
  } else {
  lineNumber = 976
  lineNumber = 970
  lineNumber = 968
  var string2552 = new GraceString("\u0009");
  var opresult2554 = callmethod(var_c, "==", [1], string2552);
  if (Grace_isTrue(opresult2554)) {
  lineNumber = 970
  lineNumber = 969
  var string2555 = new GraceString("\\t");
  var opresult2557 = callmethod(var_s, "++", [1], string2555);
  var_s = opresult2557;
  var if2551 = opresult2557;
  } else {
  lineNumber = 976
  lineNumber = 972
  lineNumber = 970
  var string2559 = new GraceString("\"");
  var opresult2561 = callmethod(var_c, "==", [1], string2559);
  if (Grace_isTrue(opresult2561)) {
  lineNumber = 972
  lineNumber = 971
  var string2562 = new GraceString("\\\"");
  var opresult2564 = callmethod(var_s, "++", [1], string2562);
  var_s = opresult2564;
  var if2558 = opresult2564;
  } else {
  lineNumber = 976
  lineNumber = 974
  lineNumber = 972
  var string2566 = new GraceString("\\");
  var opresult2568 = callmethod(var_c, "==", [1], string2566);
  if (Grace_isTrue(opresult2568)) {
  lineNumber = 974
  lineNumber = 973
  var string2569 = new GraceString("\\\\");
  var opresult2571 = callmethod(var_s, "++", [1], string2569);
  var_s = opresult2571;
  var if2565 = opresult2571;
  } else {
  lineNumber = 976
  lineNumber = 975
  var opresult2573 = callmethod(var_s, "++", [1], var_c);
  var_s = opresult2573;
  var if2565 = opresult2573;
}
  var if2558 = if2565;
}
  var if2551 = if2558;
}
  var if2544 = if2551;
}
  return if2544;
};
  var call2574 = callmethod(Grace_prelude,"for()do", [1, 1], call2542, block2543);
  lineNumber = 979
  lineNumber = 978
  var string2575 = new GraceString("\"");
  var opresult2577 = callmethod(var_s, "++", [1], string2575);
  var_s = opresult2577;
  lineNumber = 979
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2540.paramTypes = [];
func2540.paramTypes.push([type_Number, "depth"]);
  obj2521.methods["toGrace"] = func2540;
  superDepth = origSuperDepth;
}
obj_init_2521.apply(obj2521, []);
  return obj2521
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2518.methods["new"] = func2520;
  superDepth = origSuperDepth;
}
obj_init_2518.apply(obj2518, []);
  var var_stringNode = obj2518;
  lineNumber = 982
  lineNumber = 1
var func2578 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 982
  return var_numNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["numNode"] = func2578;
  lineNumber = 1
  var obj2579 = Grace_allocObject();
  obj2579.outer = this;
    var reader_ast_outer2580 = function() {
    return this.outer;
  }
  obj2579.methods["outer"] = reader_ast_outer2580;
function obj_init_2579() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2581 = function(argcv) {
  var curarg = 1;
  var var_n = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2582 = Grace_allocObject();
  obj2582.outer = this;
    var reader_ast_outer2583 = function() {
    return this.outer;
  }
  obj2582.methods["outer"] = reader_ast_outer2583;
function obj_init_2582() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 983
  var string2584 = new GraceString("num");
  obj2582.data["kind"] = string2584;
    var reader_ast_kind2585 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2585.def = true;
  obj2582.methods["kind"] = reader_ast_kind2585;
  lineNumber = 984
  obj2582.data["value"] = var_n;
    var reader_ast_value2586 = function() {
    return this.data["value"];
  }
  reader_ast_value2586.def = true;
  obj2582.methods["value"] = reader_ast_value2586;
  lineNumber = 985
  var string2587 = new GraceString("");
  obj2582.data["register"] = string2587;
    var reader_ast_register2588 = function() {
    return this.data["register"];
  }
  obj2582.methods["register"] = reader_ast_register2588;
  obj2582.data["register"] = string2587;
  var writer_ast_register2588 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2582.methods["register:="] = writer_ast_register2588;
obj2582.mutable = true;
  lineNumber = 987
  lineNumber = 1
  lineNumber = 986
  var call2589 = callmethod(var_util,"linenum", [0]);
  obj2582.data["line"] = call2589;
    var reader_ast_line2590 = function() {
    return this.data["line"];
  }
  reader_ast_line2590.def = true;
  obj2582.methods["line"] = reader_ast_line2590;
var func2591 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 988
  var call2592 = callmethod(var_visitor,"visitNum", [1], this);
  return call2592
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2591.paramTypes = [];
func2591.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2582.methods["accept"] = func2591;
var func2593 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 992
  lineNumber = 991
  var string2594 = new GraceString("Num(");
  lineNumber = 992
  lineNumber = 1
  lineNumber = 991
  var call2595 = callmethod(this,"value", [0]);
  var opresult2597 = callmethod(string2594, "++", [1], call2595);
  var string2598 = new GraceString(")");
  var opresult2600 = callmethod(opresult2597, "++", [1], string2598);
  return opresult2600
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2582.methods["pretty"] = func2593;
var func2601 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 994
  lineNumber = 1
  lineNumber = 994
  lineNumber = 1
  lineNumber = 994
  var call2602 = callmethod(this,"value", [0]);
  var call2603 = callmethod(call2602,"asString", [0]);
  return call2603
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2601.paramTypes = [];
func2601.paramTypes.push([type_Number, "depth"]);
  obj2582.methods["toGrace"] = func2601;
  superDepth = origSuperDepth;
}
obj_init_2582.apply(obj2582, []);
  return obj2582
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2579.methods["new"] = func2581;
  superDepth = origSuperDepth;
}
obj_init_2579.apply(obj2579, []);
  var var_numNode = obj2579;
  lineNumber = 997
  lineNumber = 1
var func2604 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 997
  return var_opNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["opNode"] = func2604;
  lineNumber = 1
  var obj2605 = Grace_allocObject();
  obj2605.outer = this;
    var reader_ast_outer2606 = function() {
    return this.outer;
  }
  obj2605.methods["outer"] = reader_ast_outer2606;
function obj_init_2605() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2607 = function(argcv) {
  var curarg = 1;
  var var_op = arguments[curarg];
  curarg++;
  var var_l = arguments[curarg];
  curarg++;
  var var_r = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2608 = Grace_allocObject();
  obj2608.outer = this;
    var reader_ast_outer2609 = function() {
    return this.outer;
  }
  obj2608.methods["outer"] = reader_ast_outer2609;
function obj_init_2608() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 998
  var string2610 = new GraceString("op");
  obj2608.data["kind"] = string2610;
    var reader_ast_kind2611 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2611.def = true;
  obj2608.methods["kind"] = reader_ast_kind2611;
  lineNumber = 999
  obj2608.data["value"] = var_op;
    var reader_ast_value2612 = function() {
    return this.data["value"];
  }
  reader_ast_value2612.def = true;
  obj2608.methods["value"] = reader_ast_value2612;
  lineNumber = 1000
  obj2608.data["left"] = var_l;
    var reader_ast_left2613 = function() {
    return this.data["left"];
  }
  reader_ast_left2613.def = true;
  obj2608.methods["left"] = reader_ast_left2613;
  lineNumber = 1001
  obj2608.data["right"] = var_r;
    var reader_ast_right2614 = function() {
    return this.data["right"];
  }
  reader_ast_right2614.def = true;
  obj2608.methods["right"] = reader_ast_right2614;
  lineNumber = 1002
  var string2615 = new GraceString("");
  obj2608.data["register"] = string2615;
    var reader_ast_register2616 = function() {
    return this.data["register"];
  }
  obj2608.methods["register"] = reader_ast_register2616;
  obj2608.data["register"] = string2615;
  var writer_ast_register2616 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2608.methods["register:="] = writer_ast_register2616;
obj2608.mutable = true;
  lineNumber = 1004
  lineNumber = 1
  lineNumber = 1003
  var call2617 = callmethod(var_util,"linenum", [0]);
  obj2608.data["line"] = call2617;
    var reader_ast_line2618 = function() {
    return this.data["line"];
  }
  reader_ast_line2618.def = true;
  obj2608.methods["line"] = reader_ast_line2618;
var func2619 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1007
  lineNumber = 1005
  var call2621 = callmethod(var_visitor,"visitOp", [1], this);
  if (Grace_isTrue(call2621)) {
  lineNumber = 1006
  lineNumber = 1007
  lineNumber = 1
  lineNumber = 1006
  var call2622 = callmethod(this,"left", [0]);
  var call2623 = callmethod(call2622,"accept", [1], var_visitor);
  lineNumber = 1007
  lineNumber = 1008
  lineNumber = 1
  lineNumber = 1007
  var call2624 = callmethod(this,"right", [0]);
  var call2625 = callmethod(call2624,"accept", [1], var_visitor);
  var if2620 = call2625;
}
  return if2620
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2619.paramTypes = [];
func2619.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2608.methods["accept"] = func2619;
var func2626 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1012
  lineNumber = 1011
  var string2627 = new GraceString("");
  var var_spc = string2627;
  lineNumber = 1014
  lineNumber = 1012
  var opresult2629 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 1014
  var block2630 = Grace_allocObject();
  block2630.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2630.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2630.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2630.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2630.receiver = this;
  block2630.className = 'block<ast:1014>';
  block2630.real = function(
var_i
) {
  lineNumber = 1013
  var string2631 = new GraceString("  ");
  var opresult2633 = callmethod(var_spc, "++", [1], string2631);
  var_spc = opresult2633;
  return opresult2633;
};
  var call2634 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2629, block2630);
  lineNumber = 1016
  lineNumber = 1015
  var string2635 = new GraceString("Op(");
  lineNumber = 1016
  lineNumber = 1
  lineNumber = 1015
  var call2636 = callmethod(this,"value", [0]);
  var opresult2638 = callmethod(string2635, "++", [1], call2636);
  var string2639 = new GraceString(")");
  var opresult2641 = callmethod(opresult2638, "++", [1], string2639);
  var var_s = opresult2641;
  lineNumber = 1017
  lineNumber = 1016
  var string2642 = new GraceString("\n");
  var opresult2644 = callmethod(var_s, "++", [1], string2642);
  var_s = opresult2644;
  lineNumber = 1017
  lineNumber = 1018
  lineNumber = 1017
  var opresult2646 = callmethod(var_s, "++", [1], var_spc);
  var opresult2648 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1018
  lineNumber = 1
  lineNumber = 1017
  var call2649 = callmethod(this,"left", [0]);
  var call2650 = callmethod(call2649,"pretty", [1], opresult2648);
  var opresult2652 = callmethod(opresult2646, "++", [1], call2650);
  var_s = opresult2652;
  lineNumber = 1019
  lineNumber = 1018
  var string2653 = new GraceString("\n");
  var opresult2655 = callmethod(var_s, "++", [1], string2653);
  var_s = opresult2655;
  lineNumber = 1019
  lineNumber = 1020
  lineNumber = 1019
  var opresult2657 = callmethod(var_s, "++", [1], var_spc);
  var opresult2659 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1020
  lineNumber = 1
  lineNumber = 1019
  var call2660 = callmethod(this,"right", [0]);
  var call2661 = callmethod(call2660,"pretty", [1], opresult2659);
  var opresult2663 = callmethod(opresult2657, "++", [1], call2661);
  var_s = opresult2663;
  lineNumber = 1020
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2608.methods["pretty"] = func2626;
var func2664 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1024
  lineNumber = 1023
  var string2665 = new GraceString("");
  var var_s = string2665;
  lineNumber = 1027
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1024
  var call2667 = callmethod(this,"left", [0]);
  var call2668 = callmethod(call2667,"kind", [0]);
  var string2669 = new GraceString("op");
  var opresult2671 = callmethod(call2668, "==", [1], string2669);
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1024
  var call2672 = callmethod(this,"left", [0]);
  var call2673 = callmethod(call2672,"value", [0]);
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1024
  var call2674 = callmethod(this,"value", [0]);
  var opresult2676 = callmethod(call2673, "!=", [1], call2674);
  var opresult2678 = callmethod(opresult2671, "&", [1], opresult2676);
  if (Grace_isTrue(opresult2678)) {
  lineNumber = 1025
  var string2679 = new GraceString("(");
  lineNumber = 1026
  lineNumber = 1
  lineNumber = 1025
  var call2680 = callmethod(this,"left", [0]);
  var call2681 = callmethod(call2680,"toGrace", [1], new GraceNum(0));
  var opresult2683 = callmethod(string2679, "++", [1], call2681);
  var string2684 = new GraceString(")");
  var opresult2686 = callmethod(opresult2683, "++", [1], string2684);
  var_s = opresult2686;
  var if2666 = opresult2686;
  } else {
  lineNumber = 1027
  lineNumber = 1028
  lineNumber = 1
  lineNumber = 1027
  var call2687 = callmethod(this,"left", [0]);
  var call2688 = callmethod(call2687,"toGrace", [1], new GraceNum(0));
  var_s = call2688;
  var if2666 = call2688;
}
  lineNumber = 1033
  lineNumber = 1034
  lineNumber = 1
  lineNumber = 1029
  var call2690 = callmethod(this,"value", [0]);
  var string2691 = new GraceString("..");
  var opresult2693 = callmethod(call2690, "==", [1], string2691);
  if (Grace_isTrue(opresult2693)) {
  lineNumber = 1031
  lineNumber = 1030
  lineNumber = 1031
  lineNumber = 1
  lineNumber = 1030
  var call2694 = callmethod(this,"value", [0]);
  var opresult2696 = callmethod(var_s, "++", [1], call2694);
  var_s = opresult2696;
  var if2689 = opresult2696;
  } else {
  lineNumber = 1033
  lineNumber = 1032
  var string2697 = new GraceString(" ");
  var opresult2699 = callmethod(var_s, "++", [1], string2697);
  lineNumber = 1033
  lineNumber = 1
  lineNumber = 1032
  var call2700 = callmethod(this,"value", [0]);
  var opresult2702 = callmethod(opresult2699, "++", [1], call2700);
  var string2703 = new GraceString(" ");
  var opresult2705 = callmethod(opresult2702, "++", [1], string2703);
  var_s = opresult2705;
  var if2689 = opresult2705;
}
  lineNumber = 1037
  lineNumber = 1039
  lineNumber = 1
  lineNumber = 1039
  lineNumber = 1
  lineNumber = 1034
  var call2707 = callmethod(this,"right", [0]);
  var call2708 = callmethod(call2707,"kind", [0]);
  var string2709 = new GraceString("op");
  var opresult2711 = callmethod(call2708, "==", [1], string2709);
  lineNumber = 1039
  lineNumber = 1
  lineNumber = 1039
  lineNumber = 1
  lineNumber = 1034
  var call2712 = callmethod(this,"right", [0]);
  var call2713 = callmethod(call2712,"value", [0]);
  lineNumber = 1039
  lineNumber = 1
  lineNumber = 1034
  var call2714 = callmethod(this,"value", [0]);
  var opresult2716 = callmethod(call2713, "!=", [1], call2714);
  var opresult2718 = callmethod(opresult2711, "&", [1], opresult2716);
  if (Grace_isTrue(opresult2718)) {
  lineNumber = 1035
  lineNumber = 1036
  lineNumber = 1035
  var string2719 = new GraceString("(");
  var opresult2721 = callmethod(var_s, "++", [1], string2719);
  lineNumber = 1036
  lineNumber = 1
  lineNumber = 1035
  var call2722 = callmethod(this,"right", [0]);
  var call2723 = callmethod(call2722,"toGrace", [1], new GraceNum(0));
  var opresult2725 = callmethod(opresult2721, "++", [1], call2723);
  var string2726 = new GraceString(")");
  var opresult2728 = callmethod(opresult2725, "++", [1], string2726);
  var_s = opresult2728;
  var if2706 = opresult2728;
  } else {
  lineNumber = 1037
  lineNumber = 1038
  lineNumber = 1
  lineNumber = 1037
  var call2729 = callmethod(this,"right", [0]);
  var call2730 = callmethod(call2729,"toGrace", [1], new GraceNum(0));
  var opresult2732 = callmethod(var_s, "++", [1], call2730);
  var_s = opresult2732;
  var if2706 = opresult2732;
}
  lineNumber = 1039
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2664.paramTypes = [];
func2664.paramTypes.push([type_Number, "depth"]);
  obj2608.methods["toGrace"] = func2664;
  superDepth = origSuperDepth;
}
obj_init_2608.apply(obj2608, []);
  return obj2608
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2605.methods["new"] = func2607;
  superDepth = origSuperDepth;
}
obj_init_2605.apply(obj2605, []);
  var var_opNode = obj2605;
  lineNumber = 1042
  lineNumber = 1
var func2733 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1042
  return var_indexNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["indexNode"] = func2733;
  lineNumber = 1
  var obj2734 = Grace_allocObject();
  obj2734.outer = this;
    var reader_ast_outer2735 = function() {
    return this.outer;
  }
  obj2734.methods["outer"] = reader_ast_outer2735;
function obj_init_2734() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2736 = function(argcv) {
  var curarg = 1;
  var var_expr = arguments[curarg];
  curarg++;
  var var_index__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2737 = Grace_allocObject();
  obj2737.outer = this;
    var reader_ast_outer2738 = function() {
    return this.outer;
  }
  obj2737.methods["outer"] = reader_ast_outer2738;
function obj_init_2737() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1043
  var string2739 = new GraceString("index");
  obj2737.data["kind"] = string2739;
    var reader_ast_kind2740 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2740.def = true;
  obj2737.methods["kind"] = reader_ast_kind2740;
  lineNumber = 1044
  obj2737.data["value"] = var_expr;
    var reader_ast_value2741 = function() {
    return this.data["value"];
  }
  reader_ast_value2741.def = true;
  obj2737.methods["value"] = reader_ast_value2741;
  lineNumber = 1045
  obj2737.data["index"] = var_index__39__;
    var reader_ast_index2742 = function() {
    return this.data["index"];
  }
  reader_ast_index2742.def = true;
  obj2737.methods["index"] = reader_ast_index2742;
  lineNumber = 1046
  var string2743 = new GraceString("");
  obj2737.data["register"] = string2743;
    var reader_ast_register2744 = function() {
    return this.data["register"];
  }
  obj2737.methods["register"] = reader_ast_register2744;
  obj2737.data["register"] = string2743;
  var writer_ast_register2744 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2737.methods["register:="] = writer_ast_register2744;
obj2737.mutable = true;
  lineNumber = 1048
  lineNumber = 1
  lineNumber = 1047
  var call2745 = callmethod(var_util,"linenum", [0]);
  obj2737.data["line"] = call2745;
    var reader_ast_line2746 = function() {
    return this.data["line"];
  }
  reader_ast_line2746.def = true;
  obj2737.methods["line"] = reader_ast_line2746;
var func2747 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1051
  lineNumber = 1049
  var call2749 = callmethod(var_visitor,"visitIndex", [1], this);
  if (Grace_isTrue(call2749)) {
  lineNumber = 1050
  lineNumber = 1051
  lineNumber = 1
  lineNumber = 1050
  var call2750 = callmethod(this,"value", [0]);
  var call2751 = callmethod(call2750,"accept", [1], var_visitor);
  lineNumber = 1051
  lineNumber = 1052
  lineNumber = 1
  lineNumber = 1051
  var call2752 = callmethod(this,"index", [0]);
  var call2753 = callmethod(call2752,"accept", [1], var_visitor);
  var if2748 = call2753;
}
  return if2748
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2747.paramTypes = [];
func2747.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2737.methods["accept"] = func2747;
var func2754 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1056
  lineNumber = 1055
  var string2755 = new GraceString("");
  var var_spc = string2755;
  lineNumber = 1058
  lineNumber = 1056
  var opresult2757 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 1058
  var block2758 = Grace_allocObject();
  block2758.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2758.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2758.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2758.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2758.receiver = this;
  block2758.className = 'block<ast:1058>';
  block2758.real = function(
var_i
) {
  lineNumber = 1057
  var string2759 = new GraceString("  ");
  var opresult2761 = callmethod(var_spc, "++", [1], string2759);
  var_spc = opresult2761;
  return opresult2761;
};
  var call2762 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2757, block2758);
  lineNumber = 1060
  lineNumber = 1059
  var string2763 = new GraceString("Index");
  var var_s = string2763;
  lineNumber = 1061
  lineNumber = 1060
  var string2764 = new GraceString("\n");
  var opresult2766 = callmethod(var_s, "++", [1], string2764);
  var_s = opresult2766;
  lineNumber = 1061
  lineNumber = 1062
  lineNumber = 1061
  var opresult2768 = callmethod(var_s, "++", [1], var_spc);
  var opresult2770 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1062
  lineNumber = 1
  lineNumber = 1061
  var call2771 = callmethod(this,"value", [0]);
  var call2772 = callmethod(call2771,"pretty", [1], opresult2770);
  var opresult2774 = callmethod(opresult2768, "++", [1], call2772);
  var_s = opresult2774;
  lineNumber = 1063
  lineNumber = 1062
  var string2775 = new GraceString("\n");
  var opresult2777 = callmethod(var_s, "++", [1], string2775);
  var_s = opresult2777;
  lineNumber = 1063
  lineNumber = 1064
  lineNumber = 1063
  var opresult2779 = callmethod(var_s, "++", [1], var_spc);
  var opresult2781 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1064
  lineNumber = 1
  lineNumber = 1063
  var call2782 = callmethod(this,"index", [0]);
  var call2783 = callmethod(call2782,"pretty", [1], opresult2781);
  var opresult2785 = callmethod(opresult2779, "++", [1], call2783);
  var_s = opresult2785;
  lineNumber = 1064
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2737.methods["pretty"] = func2754;
var func2786 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1068
  lineNumber = 1067
  var string2787 = new GraceString("");
  var var_spc = string2787;
  lineNumber = 1070
  lineNumber = 1068
  var diff2789 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult2791 = callmethod(new GraceNum(0), "..", [1], diff2789);
  lineNumber = 1070
  var block2792 = Grace_allocObject();
  block2792.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2792.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2792.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2792.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2792.receiver = this;
  block2792.className = 'block<ast:1070>';
  block2792.real = function(
var_i
) {
  lineNumber = 1069
  var string2793 = new GraceString("    ");
  var opresult2795 = callmethod(var_spc, "++", [1], string2793);
  var_spc = opresult2795;
  return opresult2795;
};
  var call2796 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2791, block2792);
  lineNumber = 1071
  var opresult2798 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1072
  lineNumber = 1
  lineNumber = 1071
  var call2799 = callmethod(this,"value", [0]);
  var call2800 = callmethod(call2799,"toGrace", [1], opresult2798);
  var var_s = call2800;
  lineNumber = 1072
  lineNumber = 1073
  lineNumber = 1072
  var string2801 = new GraceString("[");
  var opresult2803 = callmethod(var_s, "++", [1], string2801);
  var opresult2805 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1073
  lineNumber = 1
  lineNumber = 1072
  var call2806 = callmethod(this,"index", [0]);
  var call2807 = callmethod(call2806,"toGrace", [1], opresult2805);
  var opresult2809 = callmethod(opresult2803, "++", [1], call2807);
  var string2810 = new GraceString("]");
  var opresult2812 = callmethod(opresult2809, "++", [1], string2810);
  var_s = opresult2812;
  lineNumber = 1073
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2786.paramTypes = [];
func2786.paramTypes.push([type_Number, "depth"]);
  obj2737.methods["toGrace"] = func2786;
  superDepth = origSuperDepth;
}
obj_init_2737.apply(obj2737, []);
  return obj2737
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2734.methods["new"] = func2736;
  superDepth = origSuperDepth;
}
obj_init_2734.apply(obj2734, []);
  var var_indexNode = obj2734;
  lineNumber = 1076
  lineNumber = 1
var func2813 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1076
  return var_bindNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["bindNode"] = func2813;
  lineNumber = 1
  var obj2814 = Grace_allocObject();
  obj2814.outer = this;
    var reader_ast_outer2815 = function() {
    return this.outer;
  }
  obj2814.methods["outer"] = reader_ast_outer2815;
function obj_init_2814() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2816 = function(argcv) {
  var curarg = 1;
  var var_dest__39__ = arguments[curarg];
  curarg++;
  var var_val__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2817 = Grace_allocObject();
  obj2817.outer = this;
    var reader_ast_outer2818 = function() {
    return this.outer;
  }
  obj2817.methods["outer"] = reader_ast_outer2818;
function obj_init_2817() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1077
  var string2819 = new GraceString("bind");
  obj2817.data["kind"] = string2819;
    var reader_ast_kind2820 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2820.def = true;
  obj2817.methods["kind"] = reader_ast_kind2820;
  lineNumber = 1078
  obj2817.data["dest"] = var_dest__39__;
    var reader_ast_dest2821 = function() {
    return this.data["dest"];
  }
  reader_ast_dest2821.def = true;
  obj2817.methods["dest"] = reader_ast_dest2821;
  lineNumber = 1079
  obj2817.data["value"] = var_val__39__;
    var reader_ast_value2822 = function() {
    return this.data["value"];
  }
  reader_ast_value2822.def = true;
  obj2817.methods["value"] = reader_ast_value2822;
  lineNumber = 1080
  var string2823 = new GraceString("");
  obj2817.data["register"] = string2823;
    var reader_ast_register2824 = function() {
    return this.data["register"];
  }
  obj2817.methods["register"] = reader_ast_register2824;
  obj2817.data["register"] = string2823;
  var writer_ast_register2824 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2817.methods["register:="] = writer_ast_register2824;
obj2817.mutable = true;
  lineNumber = 1082
  lineNumber = 1
  lineNumber = 1081
  var call2825 = callmethod(var_util,"linenum", [0]);
  obj2817.data["line"] = call2825;
    var reader_ast_line2826 = function() {
    return this.data["line"];
  }
  reader_ast_line2826.def = true;
  obj2817.methods["line"] = reader_ast_line2826;
var func2827 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1085
  lineNumber = 1083
  var call2829 = callmethod(var_visitor,"visitBind", [1], this);
  if (Grace_isTrue(call2829)) {
  lineNumber = 1084
  lineNumber = 1085
  lineNumber = 1
  lineNumber = 1084
  var call2830 = callmethod(this,"dest", [0]);
  var call2831 = callmethod(call2830,"accept", [1], var_visitor);
  lineNumber = 1085
  lineNumber = 1086
  lineNumber = 1
  lineNumber = 1085
  var call2832 = callmethod(this,"value", [0]);
  var call2833 = callmethod(call2832,"accept", [1], var_visitor);
  var if2828 = call2833;
}
  return if2828
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2827.paramTypes = [];
func2827.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2817.methods["accept"] = func2827;
var func2834 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1090
  lineNumber = 1089
  var string2835 = new GraceString("");
  var var_spc = string2835;
  lineNumber = 1092
  lineNumber = 1090
  var opresult2837 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 1092
  var block2838 = Grace_allocObject();
  block2838.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2838.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2838.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2838.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2838.receiver = this;
  block2838.className = 'block<ast:1092>';
  block2838.real = function(
var_i
) {
  lineNumber = 1091
  var string2839 = new GraceString("  ");
  var opresult2841 = callmethod(var_spc, "++", [1], string2839);
  var_spc = opresult2841;
  return opresult2841;
};
  var call2842 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2837, block2838);
  lineNumber = 1094
  lineNumber = 1093
  var string2843 = new GraceString("Bind");
  var var_s = string2843;
  lineNumber = 1095
  lineNumber = 1094
  var string2844 = new GraceString("\n");
  var opresult2846 = callmethod(var_s, "++", [1], string2844);
  var_s = opresult2846;
  lineNumber = 1095
  lineNumber = 1096
  lineNumber = 1095
  var opresult2848 = callmethod(var_s, "++", [1], var_spc);
  var opresult2850 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1096
  lineNumber = 1
  lineNumber = 1095
  var call2851 = callmethod(this,"dest", [0]);
  var call2852 = callmethod(call2851,"pretty", [1], opresult2850);
  var opresult2854 = callmethod(opresult2848, "++", [1], call2852);
  var_s = opresult2854;
  lineNumber = 1097
  lineNumber = 1096
  var string2855 = new GraceString("\n");
  var opresult2857 = callmethod(var_s, "++", [1], string2855);
  var_s = opresult2857;
  lineNumber = 1097
  lineNumber = 1098
  lineNumber = 1097
  var opresult2859 = callmethod(var_s, "++", [1], var_spc);
  var opresult2861 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1098
  lineNumber = 1
  lineNumber = 1097
  var call2862 = callmethod(this,"value", [0]);
  var call2863 = callmethod(call2862,"pretty", [1], opresult2861);
  var opresult2865 = callmethod(opresult2859, "++", [1], call2863);
  var_s = opresult2865;
  lineNumber = 1098
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2817.methods["pretty"] = func2834;
var func2866 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1102
  lineNumber = 1101
  var string2867 = new GraceString("");
  var var_spc = string2867;
  lineNumber = 1104
  lineNumber = 1102
  var diff2869 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult2871 = callmethod(new GraceNum(0), "..", [1], diff2869);
  lineNumber = 1104
  var block2872 = Grace_allocObject();
  block2872.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2872.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2872.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2872.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2872.receiver = this;
  block2872.className = 'block<ast:1104>';
  block2872.real = function(
var_i
) {
  lineNumber = 1103
  var string2873 = new GraceString("    ");
  var opresult2875 = callmethod(var_spc, "++", [1], string2873);
  var_spc = opresult2875;
  return opresult2875;
};
  var call2876 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2871, block2872);
  lineNumber = 1105
  var opresult2878 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1106
  lineNumber = 1
  lineNumber = 1105
  var call2879 = callmethod(this,"dest", [0]);
  var call2880 = callmethod(call2879,"toGrace", [1], opresult2878);
  var var_s = call2880;
  lineNumber = 1106
  lineNumber = 1107
  lineNumber = 1106
  var string2881 = new GraceString(" := ");
  var opresult2883 = callmethod(var_s, "++", [1], string2881);
  var opresult2885 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1107
  lineNumber = 1
  lineNumber = 1106
  var call2886 = callmethod(this,"value", [0]);
  var call2887 = callmethod(call2886,"toGrace", [1], opresult2885);
  var opresult2889 = callmethod(opresult2883, "++", [1], call2887);
  var_s = opresult2889;
  lineNumber = 1107
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2866.paramTypes = [];
func2866.paramTypes.push([type_Number, "depth"]);
  obj2817.methods["toGrace"] = func2866;
  superDepth = origSuperDepth;
}
obj_init_2817.apply(obj2817, []);
  return obj2817
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2814.methods["new"] = func2816;
  superDepth = origSuperDepth;
}
obj_init_2814.apply(obj2814, []);
  var var_bindNode = obj2814;
  lineNumber = 1110
  lineNumber = 1
var func2890 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1110
  return var_defDecNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["defDecNode"] = func2890;
  lineNumber = 1
  var obj2891 = Grace_allocObject();
  obj2891.outer = this;
    var reader_ast_outer2892 = function() {
    return this.outer;
  }
  obj2891.methods["outer"] = reader_ast_outer2892;
function obj_init_2891() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func2893 = function(argcv) {
  var curarg = 1;
  var var_name__39__ = arguments[curarg];
  curarg++;
  var var_val = arguments[curarg];
  curarg++;
  var var_dtype__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2894 = Grace_allocObject();
  obj2894.outer = this;
    var reader_ast_outer2895 = function() {
    return this.outer;
  }
  obj2894.methods["outer"] = reader_ast_outer2895;
function obj_init_2894() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1111
  var string2896 = new GraceString("defdec");
  obj2894.data["kind"] = string2896;
    var reader_ast_kind2897 = function() {
    return this.data["kind"];
  }
  reader_ast_kind2897.def = true;
  obj2894.methods["kind"] = reader_ast_kind2897;
  lineNumber = 1112
  obj2894.data["name"] = var_name__39__;
    var reader_ast_name2898 = function() {
    return this.data["name"];
  }
  reader_ast_name2898.def = true;
  obj2894.methods["name"] = reader_ast_name2898;
  lineNumber = 1113
  obj2894.data["value"] = var_val;
    var reader_ast_value2899 = function() {
    return this.data["value"];
  }
  reader_ast_value2899.def = true;
  obj2894.methods["value"] = reader_ast_value2899;
  lineNumber = 1114
  obj2894.data["dtype"] = var_dtype__39__;
    var reader_ast_dtype2900 = function() {
    return this.data["dtype"];
  }
  obj2894.methods["dtype"] = reader_ast_dtype2900;
  obj2894.data["dtype"] = var_dtype__39__;
  var writer_ast_dtype2900 = function(argcv, o) {
    this.data["dtype"] = o;
  }
  obj2894.methods["dtype:="] = writer_ast_dtype2900;
obj2894.mutable = true;
  lineNumber = 1115
  var string2901 = new GraceString("");
  obj2894.data["register"] = string2901;
    var reader_ast_register2902 = function() {
    return this.data["register"];
  }
  obj2894.methods["register"] = reader_ast_register2902;
  obj2894.data["register"] = string2901;
  var writer_ast_register2902 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj2894.methods["register:="] = writer_ast_register2902;
obj2894.mutable = true;
  lineNumber = 1117
  lineNumber = 1
  lineNumber = 1116
  var call2903 = callmethod(var_util,"linenum", [0]);
  obj2894.data["line"] = call2903;
    var reader_ast_line2904 = function() {
    return this.data["line"];
  }
  reader_ast_line2904.def = true;
  obj2894.methods["line"] = reader_ast_line2904;
var func2905 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1124
  lineNumber = 1118
  var call2907 = callmethod(var_visitor,"visitDefDec", [1], this);
  if (Grace_isTrue(call2907)) {
  lineNumber = 1119
  lineNumber = 1120
  lineNumber = 1
  lineNumber = 1119
  var call2908 = callmethod(this,"name", [0]);
  var call2909 = callmethod(call2908,"accept", [1], var_visitor);
  lineNumber = 1121
  lineNumber = 1123
  lineNumber = 1
  lineNumber = 1120
  var call2911 = callmethod(this,"dtype", [0]);
  var bool2912 = new GraceBoolean(false)
  var opresult2914 = callmethod(call2911, "!=", [1], bool2912);
  if (Grace_isTrue(opresult2914)) {
  lineNumber = 1121
  lineNumber = 1122
  lineNumber = 1
  lineNumber = 1121
  var call2915 = callmethod(this,"dtype", [0]);
  var call2916 = callmethod(call2915,"accept", [1], var_visitor);
  var if2910 = call2916;
}
  lineNumber = 1124
  lineNumber = 1126
  lineNumber = 1
  lineNumber = 1123
  var call2918 = callmethod(this,"value", [0]);
  var bool2919 = new GraceBoolean(false)
  var opresult2921 = callmethod(call2918, "!=", [1], bool2919);
  if (Grace_isTrue(opresult2921)) {
  lineNumber = 1124
  lineNumber = 1125
  lineNumber = 1
  lineNumber = 1124
  var call2922 = callmethod(this,"value", [0]);
  var call2923 = callmethod(call2922,"accept", [1], var_visitor);
  var if2917 = call2923;
}
  var if2906 = if2917;
}
  return if2906
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2905.paramTypes = [];
func2905.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj2894.methods["accept"] = func2905;
var func2924 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1130
  lineNumber = 1129
  var string2925 = new GraceString("");
  var var_spc = string2925;
  lineNumber = 1132
  lineNumber = 1130
  var opresult2927 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 1132
  var block2928 = Grace_allocObject();
  block2928.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2928.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2928.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2928.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2928.receiver = this;
  block2928.className = 'block<ast:1132>';
  block2928.real = function(
var_i
) {
  lineNumber = 1131
  var string2929 = new GraceString("  ");
  var opresult2931 = callmethod(var_spc, "++", [1], string2929);
  var_spc = opresult2931;
  return opresult2931;
};
  var call2932 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2927, block2928);
  lineNumber = 1134
  lineNumber = 1133
  var string2933 = new GraceString("defdec");
  var var_s = string2933;
  lineNumber = 1135
  lineNumber = 1134
  var string2934 = new GraceString("\n");
  var opresult2936 = callmethod(var_s, "++", [1], string2934);
  var_s = opresult2936;
  lineNumber = 1135
  lineNumber = 1136
  lineNumber = 1135
  var opresult2938 = callmethod(var_s, "++", [1], var_spc);
  lineNumber = 1136
  lineNumber = 1
  lineNumber = 1135
  var call2939 = callmethod(this,"name", [0]);
  var call2940 = callmethod(call2939,"pretty", [1], var_depth);
  var opresult2942 = callmethod(opresult2938, "++", [1], call2940);
  var_s = opresult2942;
  lineNumber = 1138
  lineNumber = 1140
  lineNumber = 1
  lineNumber = 1136
  var call2944 = callmethod(this,"dtype", [0]);
  var bool2945 = new GraceBoolean(false)
  var opresult2947 = callmethod(call2944, "!=", [1], bool2945);
  if (Grace_isTrue(opresult2947)) {
  lineNumber = 1138
  lineNumber = 1137
  var string2948 = new GraceString("\n");
  var opresult2950 = callmethod(var_s, "++", [1], string2948);
  var opresult2952 = callmethod(opresult2950, "++", [1], var_spc);
  var string2953 = new GraceString("Type:");
  var opresult2955 = callmethod(opresult2952, "++", [1], string2953);
  var_s = opresult2955;
  lineNumber = 1138
  lineNumber = 1139
  lineNumber = 1138
  var string2956 = new GraceString("\n");
  var opresult2958 = callmethod(var_s, "++", [1], string2956);
  var opresult2960 = callmethod(opresult2958, "++", [1], var_spc);
  var string2961 = new GraceString("  ");
  var opresult2963 = callmethod(opresult2960, "++", [1], string2961);
  var opresult2965 = callmethod(var_depth, "+", [1], new GraceNum(2));
  lineNumber = 1139
  lineNumber = 1
  lineNumber = 1138
  var call2966 = callmethod(this,"dtype", [0]);
  var call2967 = callmethod(call2966,"pretty", [1], opresult2965);
  var opresult2969 = callmethod(opresult2963, "++", [1], call2967);
  var_s = opresult2969;
  var if2943 = opresult2969;
}
  lineNumber = 1142
  lineNumber = 1144
  lineNumber = 1140
  var bool2971 = new GraceBoolean(false)
  lineNumber = 1144
  lineNumber = 1
  lineNumber = 1140
  var call2972 = callmethod(this,"value", [0]);
  var opresult2974 = callmethod(bool2971, "!=", [1], call2972);
  if (Grace_isTrue(opresult2974)) {
  lineNumber = 1142
  lineNumber = 1141
  var string2975 = new GraceString("\n");
  var opresult2977 = callmethod(var_s, "++", [1], string2975);
  var_s = opresult2977;
  lineNumber = 1142
  lineNumber = 1143
  lineNumber = 1142
  var opresult2979 = callmethod(var_s, "++", [1], var_spc);
  var opresult2981 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1143
  lineNumber = 1
  lineNumber = 1142
  var call2982 = callmethod(this,"value", [0]);
  var call2983 = callmethod(call2982,"pretty", [1], opresult2981);
  var opresult2985 = callmethod(opresult2979, "++", [1], call2983);
  var_s = opresult2985;
  var if2970 = opresult2985;
}
  lineNumber = 1144
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2894.methods["pretty"] = func2924;
var func2986 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1148
  lineNumber = 1147
  var string2987 = new GraceString("");
  var var_spc = string2987;
  lineNumber = 1150
  lineNumber = 1148
  var diff2989 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult2991 = callmethod(new GraceNum(0), "..", [1], diff2989);
  lineNumber = 1150
  var block2992 = Grace_allocObject();
  block2992.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2992.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2992.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2992.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2992.receiver = this;
  block2992.className = 'block<ast:1150>';
  block2992.real = function(
var_i
) {
  lineNumber = 1149
  var string2993 = new GraceString("    ");
  var opresult2995 = callmethod(var_spc, "++", [1], string2993);
  var_spc = opresult2995;
  return opresult2995;
};
  var call2996 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2991, block2992);
  lineNumber = 1151
  var string2997 = new GraceString("def ");
  lineNumber = 1152
  lineNumber = 1
  lineNumber = 1151
  var call2998 = callmethod(this,"name", [0]);
  var call2999 = callmethod(call2998,"toGrace", [1], new GraceNum(0));
  var opresult3001 = callmethod(string2997, "++", [1], call2999);
  var string3002 = new GraceString("");
  var opresult3004 = callmethod(opresult3001, "++", [1], string3002);
  var var_s = opresult3004;
  lineNumber = 1153
  lineNumber = 1155
  lineNumber = 1
  lineNumber = 1155
  lineNumber = 1
  lineNumber = 1152
  var call3006 = callmethod(this,"dtype", [0]);
  var call3007 = callmethod(call3006,"value", [0]);
  var string3008 = new GraceString("Dynamic");
  var opresult3010 = callmethod(call3007, "!=", [1], string3008);
  if (Grace_isTrue(opresult3010)) {
  lineNumber = 1153
  lineNumber = 1154
  lineNumber = 1153
  var string3011 = new GraceString(" : ");
  var opresult3013 = callmethod(var_s, "++", [1], string3011);
  lineNumber = 1154
  lineNumber = 1
  lineNumber = 1153
  var call3014 = callmethod(this,"dtype", [0]);
  var call3015 = callmethod(call3014,"toGrace", [1], new GraceNum(0));
  var opresult3017 = callmethod(opresult3013, "++", [1], call3015);
  var_s = opresult3017;
  var if3005 = opresult3017;
}
  lineNumber = 1156
  lineNumber = 1158
  lineNumber = 1
  lineNumber = 1155
  var call3019 = callmethod(this,"value", [0]);
  var bool3020 = new GraceBoolean(false)
  var opresult3022 = callmethod(call3019, "!=", [1], bool3020);
  if (Grace_isTrue(opresult3022)) {
  lineNumber = 1156
  lineNumber = 1157
  lineNumber = 1156
  var string3023 = new GraceString(" = ");
  var opresult3025 = callmethod(var_s, "++", [1], string3023);
  lineNumber = 1157
  lineNumber = 1
  lineNumber = 1156
  var call3026 = callmethod(this,"value", [0]);
  var call3027 = callmethod(call3026,"toGrace", [1], var_depth);
  var opresult3029 = callmethod(opresult3025, "++", [1], call3027);
  var_s = opresult3029;
  var if3018 = opresult3029;
}
  lineNumber = 1158
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2986.paramTypes = [];
func2986.paramTypes.push([type_Number, "depth"]);
  obj2894.methods["toGrace"] = func2986;
  superDepth = origSuperDepth;
}
obj_init_2894.apply(obj2894, []);
  return obj2894
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj2891.methods["new"] = func2893;
  superDepth = origSuperDepth;
}
obj_init_2891.apply(obj2891, []);
  var var_defDecNode = obj2891;
  lineNumber = 1161
  lineNumber = 1
var func3030 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1161
  return var_varDecNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["varDecNode"] = func3030;
  lineNumber = 1
  var obj3031 = Grace_allocObject();
  obj3031.outer = this;
    var reader_ast_outer3032 = function() {
    return this.outer;
  }
  obj3031.methods["outer"] = reader_ast_outer3032;
function obj_init_3031() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func3033 = function(argcv) {
  var curarg = 1;
  var var_name__39__ = arguments[curarg];
  curarg++;
  var var_val__39__ = arguments[curarg];
  curarg++;
  var var_dtype__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj3034 = Grace_allocObject();
  obj3034.outer = this;
    var reader_ast_outer3035 = function() {
    return this.outer;
  }
  obj3034.methods["outer"] = reader_ast_outer3035;
function obj_init_3034() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1162
  var string3036 = new GraceString("vardec");
  obj3034.data["kind"] = string3036;
    var reader_ast_kind3037 = function() {
    return this.data["kind"];
  }
  reader_ast_kind3037.def = true;
  obj3034.methods["kind"] = reader_ast_kind3037;
  lineNumber = 1163
  obj3034.data["name"] = var_name__39__;
    var reader_ast_name3038 = function() {
    return this.data["name"];
  }
  reader_ast_name3038.def = true;
  obj3034.methods["name"] = reader_ast_name3038;
  lineNumber = 1164
  obj3034.data["value"] = var_val__39__;
    var reader_ast_value3039 = function() {
    return this.data["value"];
  }
  reader_ast_value3039.def = true;
  obj3034.methods["value"] = reader_ast_value3039;
  lineNumber = 1165
  obj3034.data["dtype"] = var_dtype__39__;
    var reader_ast_dtype3040 = function() {
    return this.data["dtype"];
  }
  obj3034.methods["dtype"] = reader_ast_dtype3040;
  obj3034.data["dtype"] = var_dtype__39__;
  var writer_ast_dtype3040 = function(argcv, o) {
    this.data["dtype"] = o;
  }
  obj3034.methods["dtype:="] = writer_ast_dtype3040;
obj3034.mutable = true;
  lineNumber = 1166
  var string3041 = new GraceString("");
  obj3034.data["register"] = string3041;
    var reader_ast_register3042 = function() {
    return this.data["register"];
  }
  obj3034.methods["register"] = reader_ast_register3042;
  obj3034.data["register"] = string3041;
  var writer_ast_register3042 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj3034.methods["register:="] = writer_ast_register3042;
obj3034.mutable = true;
  lineNumber = 1168
  lineNumber = 1
  lineNumber = 1167
  var call3043 = callmethod(var_util,"linenum", [0]);
  obj3034.data["line"] = call3043;
    var reader_ast_line3044 = function() {
    return this.data["line"];
  }
  reader_ast_line3044.def = true;
  obj3034.methods["line"] = reader_ast_line3044;
var func3045 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1175
  lineNumber = 1169
  var call3047 = callmethod(var_visitor,"visitVarDec", [1], this);
  if (Grace_isTrue(call3047)) {
  lineNumber = 1170
  lineNumber = 1171
  lineNumber = 1
  lineNumber = 1170
  var call3048 = callmethod(this,"name", [0]);
  var call3049 = callmethod(call3048,"accept", [1], var_visitor);
  lineNumber = 1172
  lineNumber = 1174
  lineNumber = 1
  lineNumber = 1171
  var call3051 = callmethod(this,"dtype", [0]);
  var bool3052 = new GraceBoolean(false)
  var opresult3054 = callmethod(call3051, "!=", [1], bool3052);
  if (Grace_isTrue(opresult3054)) {
  lineNumber = 1172
  lineNumber = 1173
  lineNumber = 1
  lineNumber = 1172
  var call3055 = callmethod(this,"dtype", [0]);
  var call3056 = callmethod(call3055,"accept", [1], var_visitor);
  var if3050 = call3056;
}
  lineNumber = 1175
  lineNumber = 1177
  lineNumber = 1
  lineNumber = 1174
  var call3058 = callmethod(this,"value", [0]);
  var bool3059 = new GraceBoolean(false)
  var opresult3061 = callmethod(call3058, "!=", [1], bool3059);
  if (Grace_isTrue(opresult3061)) {
  lineNumber = 1175
  lineNumber = 1176
  lineNumber = 1
  lineNumber = 1175
  var call3062 = callmethod(this,"value", [0]);
  var call3063 = callmethod(call3062,"accept", [1], var_visitor);
  var if3057 = call3063;
}
  var if3046 = if3057;
}
  return if3046
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func3045.paramTypes = [];
func3045.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj3034.methods["accept"] = func3045;
var func3064 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1181
  lineNumber = 1180
  var string3065 = new GraceString("");
  var var_spc = string3065;
  lineNumber = 1183
  lineNumber = 1181
  var opresult3067 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 1183
  var block3068 = Grace_allocObject();
  block3068.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3068.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3068.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3068.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3068.receiver = this;
  block3068.className = 'block<ast:1183>';
  block3068.real = function(
var_i
) {
  lineNumber = 1182
  var string3069 = new GraceString("  ");
  var opresult3071 = callmethod(var_spc, "++", [1], string3069);
  var_spc = opresult3071;
  return opresult3071;
};
  var call3072 = callmethod(Grace_prelude,"for()do", [1, 1], opresult3067, block3068);
  lineNumber = 1185
  lineNumber = 1184
  var string3073 = new GraceString("VarDec");
  var var_s = string3073;
  lineNumber = 1186
  lineNumber = 1185
  var string3074 = new GraceString("\n");
  var opresult3076 = callmethod(var_s, "++", [1], string3074);
  var_s = opresult3076;
  lineNumber = 1186
  lineNumber = 1187
  lineNumber = 1186
  var opresult3078 = callmethod(var_s, "++", [1], var_spc);
  var opresult3080 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1187
  lineNumber = 1
  lineNumber = 1186
  var call3081 = callmethod(this,"name", [0]);
  var call3082 = callmethod(call3081,"pretty", [1], opresult3080);
  var opresult3084 = callmethod(opresult3078, "++", [1], call3082);
  var_s = opresult3084;
  lineNumber = 1189
  lineNumber = 1191
  lineNumber = 1
  lineNumber = 1187
  var call3086 = callmethod(this,"dtype", [0]);
  var bool3087 = new GraceBoolean(false)
  var opresult3089 = callmethod(call3086, "!=", [1], bool3087);
  if (Grace_isTrue(opresult3089)) {
  lineNumber = 1189
  lineNumber = 1188
  var string3090 = new GraceString("\n");
  var opresult3092 = callmethod(var_s, "++", [1], string3090);
  var opresult3094 = callmethod(opresult3092, "++", [1], var_spc);
  var string3095 = new GraceString("Type:");
  var opresult3097 = callmethod(opresult3094, "++", [1], string3095);
  var_s = opresult3097;
  lineNumber = 1189
  lineNumber = 1190
  lineNumber = 1189
  var string3098 = new GraceString("\n");
  var opresult3100 = callmethod(var_s, "++", [1], string3098);
  var opresult3102 = callmethod(opresult3100, "++", [1], var_spc);
  var string3103 = new GraceString("  ");
  var opresult3105 = callmethod(opresult3102, "++", [1], string3103);
  var opresult3107 = callmethod(var_depth, "+", [1], new GraceNum(2));
  lineNumber = 1190
  lineNumber = 1
  lineNumber = 1189
  var call3108 = callmethod(this,"dtype", [0]);
  var call3109 = callmethod(call3108,"pretty", [1], opresult3107);
  var opresult3111 = callmethod(opresult3105, "++", [1], call3109);
  var_s = opresult3111;
  var if3085 = opresult3111;
}
  lineNumber = 1193
  lineNumber = 1195
  lineNumber = 1191
  var bool3113 = new GraceBoolean(false)
  lineNumber = 1195
  lineNumber = 1
  lineNumber = 1191
  var call3114 = callmethod(this,"value", [0]);
  var opresult3116 = callmethod(bool3113, "!=", [1], call3114);
  if (Grace_isTrue(opresult3116)) {
  lineNumber = 1193
  lineNumber = 1192
  var string3117 = new GraceString("\n");
  var opresult3119 = callmethod(var_s, "++", [1], string3117);
  var_s = opresult3119;
  lineNumber = 1193
  lineNumber = 1194
  lineNumber = 1193
  var opresult3121 = callmethod(var_s, "++", [1], var_spc);
  var opresult3123 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1194
  lineNumber = 1
  lineNumber = 1193
  var call3124 = callmethod(this,"value", [0]);
  var call3125 = callmethod(call3124,"pretty", [1], opresult3123);
  var opresult3127 = callmethod(opresult3121, "++", [1], call3125);
  var_s = opresult3127;
  var if3112 = opresult3127;
}
  lineNumber = 1195
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj3034.methods["pretty"] = func3064;
var func3128 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1199
  lineNumber = 1198
  var string3129 = new GraceString("");
  var var_spc = string3129;
  lineNumber = 1201
  lineNumber = 1199
  var diff3131 = callmethod(var_depth, "-", [1], new GraceNum(1));
  var opresult3133 = callmethod(new GraceNum(0), "..", [1], diff3131);
  lineNumber = 1201
  var block3134 = Grace_allocObject();
  block3134.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3134.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3134.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3134.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3134.receiver = this;
  block3134.className = 'block<ast:1201>';
  block3134.real = function(
var_i
) {
  lineNumber = 1200
  var string3135 = new GraceString("    ");
  var opresult3137 = callmethod(var_spc, "++", [1], string3135);
  var_spc = opresult3137;
  return opresult3137;
};
  var call3138 = callmethod(Grace_prelude,"for()do", [1, 1], opresult3133, block3134);
  lineNumber = 1202
  var string3139 = new GraceString("var ");
  lineNumber = 1203
  lineNumber = 1
  lineNumber = 1202
  var call3140 = callmethod(this,"name", [0]);
  var call3141 = callmethod(call3140,"toGrace", [1], new GraceNum(0));
  var opresult3143 = callmethod(string3139, "++", [1], call3141);
  var string3144 = new GraceString("");
  var opresult3146 = callmethod(opresult3143, "++", [1], string3144);
  var var_s = opresult3146;
  lineNumber = 1204
  lineNumber = 1206
  lineNumber = 1
  lineNumber = 1206
  lineNumber = 1
  lineNumber = 1203
  var call3148 = callmethod(this,"dtype", [0]);
  var call3149 = callmethod(call3148,"value", [0]);
  var string3150 = new GraceString("Dynamic");
  var opresult3152 = callmethod(call3149, "!=", [1], string3150);
  if (Grace_isTrue(opresult3152)) {
  lineNumber = 1204
  lineNumber = 1205
  lineNumber = 1204
  var string3153 = new GraceString(" : ");
  var opresult3155 = callmethod(var_s, "++", [1], string3153);
  lineNumber = 1205
  lineNumber = 1
  lineNumber = 1204
  var call3156 = callmethod(this,"dtype", [0]);
  var call3157 = callmethod(call3156,"toGrace", [1], new GraceNum(0));
  var opresult3159 = callmethod(opresult3155, "++", [1], call3157);
  var_s = opresult3159;
  var if3147 = opresult3159;
}
  lineNumber = 1207
  lineNumber = 1209
  lineNumber = 1
  lineNumber = 1206
  var call3161 = callmethod(this,"value", [0]);
  var bool3162 = new GraceBoolean(false)
  var opresult3164 = callmethod(call3161, "!=", [1], bool3162);
  if (Grace_isTrue(opresult3164)) {
  lineNumber = 1207
  lineNumber = 1208
  lineNumber = 1207
  var string3165 = new GraceString(" := ");
  var opresult3167 = callmethod(var_s, "++", [1], string3165);
  lineNumber = 1208
  lineNumber = 1
  lineNumber = 1207
  var call3168 = callmethod(this,"value", [0]);
  var call3169 = callmethod(call3168,"toGrace", [1], var_depth);
  var opresult3171 = callmethod(opresult3167, "++", [1], call3169);
  var_s = opresult3171;
  var if3160 = opresult3171;
}
  lineNumber = 1209
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func3128.paramTypes = [];
func3128.paramTypes.push([type_Number, "depth"]);
  obj3034.methods["toGrace"] = func3128;
  superDepth = origSuperDepth;
}
obj_init_3034.apply(obj3034, []);
  return obj3034
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj3031.methods["new"] = func3033;
  superDepth = origSuperDepth;
}
obj_init_3031.apply(obj3031, []);
  var var_varDecNode = obj3031;
  lineNumber = 1212
  lineNumber = 1
var func3172 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1212
  return var_importNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["importNode"] = func3172;
  lineNumber = 1
  var obj3173 = Grace_allocObject();
  obj3173.outer = this;
    var reader_ast_outer3174 = function() {
    return this.outer;
  }
  obj3173.methods["outer"] = reader_ast_outer3174;
function obj_init_3173() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func3175 = function(argcv) {
  var curarg = 1;
  var var_name = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj3176 = Grace_allocObject();
  obj3176.outer = this;
    var reader_ast_outer3177 = function() {
    return this.outer;
  }
  obj3176.methods["outer"] = reader_ast_outer3177;
function obj_init_3176() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1213
  var string3178 = new GraceString("import");
  obj3176.data["kind"] = string3178;
    var reader_ast_kind3179 = function() {
    return this.data["kind"];
  }
  reader_ast_kind3179.def = true;
  obj3176.methods["kind"] = reader_ast_kind3179;
  lineNumber = 1214
  obj3176.data["value"] = var_name;
    var reader_ast_value3180 = function() {
    return this.data["value"];
  }
  reader_ast_value3180.def = true;
  obj3176.methods["value"] = reader_ast_value3180;
  lineNumber = 1215
  var string3181 = new GraceString("");
  obj3176.data["register"] = string3181;
    var reader_ast_register3182 = function() {
    return this.data["register"];
  }
  obj3176.methods["register"] = reader_ast_register3182;
  obj3176.data["register"] = string3181;
  var writer_ast_register3182 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj3176.methods["register:="] = writer_ast_register3182;
obj3176.mutable = true;
  lineNumber = 1217
  lineNumber = 1
  lineNumber = 1216
  var call3183 = callmethod(var_util,"linenum", [0]);
  obj3176.data["line"] = call3183;
    var reader_ast_line3184 = function() {
    return this.data["line"];
  }
  reader_ast_line3184.def = true;
  obj3176.methods["line"] = reader_ast_line3184;
var func3185 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1219
  lineNumber = 1218
  var call3187 = callmethod(var_visitor,"visitImport", [1], this);
  if (Grace_isTrue(call3187)) {
  lineNumber = 1219
  lineNumber = 1220
  lineNumber = 1
  lineNumber = 1219
  var call3188 = callmethod(this,"value", [0]);
  var call3189 = callmethod(call3188,"accept", [1], var_visitor);
  var if3186 = call3189;
}
  return if3186
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func3185.paramTypes = [];
func3185.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj3176.methods["accept"] = func3185;
var func3190 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1224
  lineNumber = 1223
  var string3191 = new GraceString("");
  var var_spc = string3191;
  lineNumber = 1226
  lineNumber = 1224
  var opresult3193 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 1226
  var block3194 = Grace_allocObject();
  block3194.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3194.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3194.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3194.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3194.receiver = this;
  block3194.className = 'block<ast:1226>';
  block3194.real = function(
var_i
) {
  lineNumber = 1225
  var string3195 = new GraceString("  ");
  var opresult3197 = callmethod(var_spc, "++", [1], string3195);
  var_spc = opresult3197;
  return opresult3197;
};
  var call3198 = callmethod(Grace_prelude,"for()do", [1, 1], opresult3193, block3194);
  lineNumber = 1228
  lineNumber = 1227
  var string3199 = new GraceString("Import");
  var var_s = string3199;
  lineNumber = 1229
  lineNumber = 1228
  var string3200 = new GraceString("\n");
  var opresult3202 = callmethod(var_s, "++", [1], string3200);
  var_s = opresult3202;
  lineNumber = 1229
  lineNumber = 1230
  lineNumber = 1229
  var opresult3204 = callmethod(var_s, "++", [1], var_spc);
  var opresult3206 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1230
  lineNumber = 1
  lineNumber = 1229
  var call3207 = callmethod(this,"value", [0]);
  var call3208 = callmethod(call3207,"pretty", [1], opresult3206);
  var opresult3210 = callmethod(opresult3204, "++", [1], call3208);
  var_s = opresult3210;
  lineNumber = 1230
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj3176.methods["pretty"] = func3190;
var func3211 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1233
  var string3212 = new GraceString("import ");
  var opresult3214 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1234
  lineNumber = 1
  lineNumber = 1233
  var call3215 = callmethod(this,"value", [0]);
  var call3216 = callmethod(call3215,"toGrace", [1], opresult3214);
  var opresult3218 = callmethod(string3212, "++", [1], call3216);
  var var_s = opresult3218;
  lineNumber = 1234
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func3211.paramTypes = [];
func3211.paramTypes.push([type_Number, "depth"]);
  obj3176.methods["toGrace"] = func3211;
  superDepth = origSuperDepth;
}
obj_init_3176.apply(obj3176, []);
  return obj3176
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj3173.methods["new"] = func3175;
  superDepth = origSuperDepth;
}
obj_init_3173.apply(obj3173, []);
  var var_importNode = obj3173;
  lineNumber = 1237
  lineNumber = 1
var func3219 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1237
  return var_returnNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["returnNode"] = func3219;
  lineNumber = 1
  var obj3220 = Grace_allocObject();
  obj3220.outer = this;
    var reader_ast_outer3221 = function() {
    return this.outer;
  }
  obj3220.methods["outer"] = reader_ast_outer3221;
function obj_init_3220() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func3222 = function(argcv) {
  var curarg = 1;
  var var_expr = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj3223 = Grace_allocObject();
  obj3223.outer = this;
    var reader_ast_outer3224 = function() {
    return this.outer;
  }
  obj3223.methods["outer"] = reader_ast_outer3224;
function obj_init_3223() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1238
  var string3225 = new GraceString("return");
  obj3223.data["kind"] = string3225;
    var reader_ast_kind3226 = function() {
    return this.data["kind"];
  }
  reader_ast_kind3226.def = true;
  obj3223.methods["kind"] = reader_ast_kind3226;
  lineNumber = 1239
  obj3223.data["value"] = var_expr;
    var reader_ast_value3227 = function() {
    return this.data["value"];
  }
  reader_ast_value3227.def = true;
  obj3223.methods["value"] = reader_ast_value3227;
  lineNumber = 1240
  var string3228 = new GraceString("");
  obj3223.data["register"] = string3228;
    var reader_ast_register3229 = function() {
    return this.data["register"];
  }
  obj3223.methods["register"] = reader_ast_register3229;
  obj3223.data["register"] = string3228;
  var writer_ast_register3229 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj3223.methods["register:="] = writer_ast_register3229;
obj3223.mutable = true;
  lineNumber = 1242
  lineNumber = 1
  lineNumber = 1241
  var call3230 = callmethod(var_util,"linenum", [0]);
  obj3223.data["line"] = call3230;
    var reader_ast_line3231 = function() {
    return this.data["line"];
  }
  reader_ast_line3231.def = true;
  obj3223.methods["line"] = reader_ast_line3231;
var func3232 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1244
  lineNumber = 1243
  var call3234 = callmethod(var_visitor,"visitReturn", [1], this);
  if (Grace_isTrue(call3234)) {
  lineNumber = 1244
  lineNumber = 1245
  lineNumber = 1
  lineNumber = 1244
  var call3235 = callmethod(this,"value", [0]);
  var call3236 = callmethod(call3235,"accept", [1], var_visitor);
  var if3233 = call3236;
}
  return if3233
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func3232.paramTypes = [];
func3232.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj3223.methods["accept"] = func3232;
var func3237 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1249
  lineNumber = 1248
  var string3238 = new GraceString("");
  var var_spc = string3238;
  lineNumber = 1251
  lineNumber = 1249
  var opresult3240 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 1251
  var block3241 = Grace_allocObject();
  block3241.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3241.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3241.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3241.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3241.receiver = this;
  block3241.className = 'block<ast:1251>';
  block3241.real = function(
var_i
) {
  lineNumber = 1250
  var string3242 = new GraceString("  ");
  var opresult3244 = callmethod(var_spc, "++", [1], string3242);
  var_spc = opresult3244;
  return opresult3244;
};
  var call3245 = callmethod(Grace_prelude,"for()do", [1, 1], opresult3240, block3241);
  lineNumber = 1253
  lineNumber = 1252
  var string3246 = new GraceString("Return");
  var var_s = string3246;
  lineNumber = 1254
  lineNumber = 1253
  var string3247 = new GraceString("\n");
  var opresult3249 = callmethod(var_s, "++", [1], string3247);
  var_s = opresult3249;
  lineNumber = 1254
  lineNumber = 1255
  lineNumber = 1254
  var opresult3251 = callmethod(var_s, "++", [1], var_spc);
  var opresult3253 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1255
  lineNumber = 1
  lineNumber = 1254
  var call3254 = callmethod(this,"value", [0]);
  var call3255 = callmethod(call3254,"pretty", [1], opresult3253);
  var opresult3257 = callmethod(opresult3251, "++", [1], call3255);
  var_s = opresult3257;
  lineNumber = 1255
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj3223.methods["pretty"] = func3237;
var func3258 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1258
  var string3259 = new GraceString("return ");
  lineNumber = 1259
  lineNumber = 1
  lineNumber = 1258
  var call3260 = callmethod(this,"value", [0]);
  var call3261 = callmethod(call3260,"toGrace", [1], var_depth);
  var opresult3263 = callmethod(string3259, "++", [1], call3261);
  return opresult3263
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func3258.paramTypes = [];
func3258.paramTypes.push([type_Number, "depth"]);
  obj3223.methods["toGrace"] = func3258;
  superDepth = origSuperDepth;
}
obj_init_3223.apply(obj3223, []);
  return obj3223
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj3220.methods["new"] = func3222;
  superDepth = origSuperDepth;
}
obj_init_3220.apply(obj3220, []);
  var var_returnNode = obj3220;
  lineNumber = 1261
  lineNumber = 1
var func3264 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1261
  return var_inheritsNode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["inheritsNode"] = func3264;
  lineNumber = 1
  var obj3265 = Grace_allocObject();
  obj3265.outer = this;
    var reader_ast_outer3266 = function() {
    return this.outer;
  }
  obj3265.methods["outer"] = reader_ast_outer3266;
function obj_init_3265() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func3267 = function(argcv) {
  var curarg = 1;
  var var_expr = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj3268 = Grace_allocObject();
  obj3268.outer = this;
    var reader_ast_outer3269 = function() {
    return this.outer;
  }
  obj3268.methods["outer"] = reader_ast_outer3269;
function obj_init_3268() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1262
  var string3270 = new GraceString("inherits");
  obj3268.data["kind"] = string3270;
    var reader_ast_kind3271 = function() {
    return this.data["kind"];
  }
  reader_ast_kind3271.def = true;
  obj3268.methods["kind"] = reader_ast_kind3271;
  lineNumber = 1263
  obj3268.data["value"] = var_expr;
    var reader_ast_value3272 = function() {
    return this.data["value"];
  }
  reader_ast_value3272.def = true;
  obj3268.methods["value"] = reader_ast_value3272;
  lineNumber = 1264
  var string3273 = new GraceString("");
  obj3268.data["register"] = string3273;
    var reader_ast_register3274 = function() {
    return this.data["register"];
  }
  obj3268.methods["register"] = reader_ast_register3274;
  obj3268.data["register"] = string3273;
  var writer_ast_register3274 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj3268.methods["register:="] = writer_ast_register3274;
obj3268.mutable = true;
  lineNumber = 1266
  lineNumber = 1
  lineNumber = 1265
  var call3275 = callmethod(var_util,"linenum", [0]);
  obj3268.data["line"] = call3275;
    var reader_ast_line3276 = function() {
    return this.data["line"];
  }
  reader_ast_line3276.def = true;
  obj3268.methods["line"] = reader_ast_line3276;
var func3277 = function(argcv) {
  var curarg = 1;
  var var_visitor = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1268
  lineNumber = 1267
  var call3279 = callmethod(var_visitor,"visitInherits", [1], this);
  if (Grace_isTrue(call3279)) {
  lineNumber = 1268
  lineNumber = 1269
  lineNumber = 1
  lineNumber = 1268
  var call3280 = callmethod(this,"value", [0]);
  var call3281 = callmethod(call3280,"accept", [1], var_visitor);
  var if3278 = call3281;
}
  return if3278
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func3277.paramTypes = [];
func3277.paramTypes.push([type_ASTVisitor, "visitor"]);
  obj3268.methods["accept"] = func3277;
var func3282 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1273
  lineNumber = 1272
  var string3283 = new GraceString("");
  var var_spc = string3283;
  lineNumber = 1275
  lineNumber = 1273
  var opresult3285 = callmethod(new GraceNum(0), "..", [1], var_depth);
  lineNumber = 1275
  var block3286 = Grace_allocObject();
  block3286.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3286.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3286.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3286.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3286.receiver = this;
  block3286.className = 'block<ast:1275>';
  block3286.real = function(
var_i
) {
  lineNumber = 1274
  var string3287 = new GraceString("  ");
  var opresult3289 = callmethod(var_spc, "++", [1], string3287);
  var_spc = opresult3289;
  return opresult3289;
};
  var call3290 = callmethod(Grace_prelude,"for()do", [1, 1], opresult3285, block3286);
  lineNumber = 1277
  lineNumber = 1276
  var string3291 = new GraceString("Inherits");
  var var_s = string3291;
  lineNumber = 1278
  lineNumber = 1277
  var string3292 = new GraceString("\n");
  var opresult3294 = callmethod(var_s, "++", [1], string3292);
  var_s = opresult3294;
  lineNumber = 1278
  lineNumber = 1279
  lineNumber = 1278
  var opresult3296 = callmethod(var_s, "++", [1], var_spc);
  var opresult3298 = callmethod(var_depth, "+", [1], new GraceNum(1));
  lineNumber = 1279
  lineNumber = 1
  lineNumber = 1278
  var call3299 = callmethod(this,"value", [0]);
  var call3300 = callmethod(call3299,"pretty", [1], opresult3298);
  var opresult3302 = callmethod(opresult3296, "++", [1], call3300);
  var_s = opresult3302;
  lineNumber = 1279
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj3268.methods["pretty"] = func3282;
var func3303 = function(argcv) {
  var curarg = 1;
  var var_depth = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1282
  var string3304 = new GraceString("inherits ");
  lineNumber = 1
  lineNumber = 1282
  var call3305 = callmethod(this,"value", [0]);
  var call3306 = callmethod(call3305,"toGrace", [1], new GraceNum(0));
  var opresult3308 = callmethod(string3304, "++", [1], call3306);
  var string3309 = new GraceString("");
  var opresult3311 = callmethod(opresult3308, "++", [1], string3309);
  return opresult3311
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func3303.paramTypes = [];
func3303.paramTypes.push([type_Number, "depth"]);
  obj3268.methods["toGrace"] = func3303;
  superDepth = origSuperDepth;
}
obj_init_3268.apply(obj3268, []);
  return obj3268
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj3265.methods["new"] = func3267;
  superDepth = origSuperDepth;
}
obj_init_3265.apply(obj3265, []);
  var var_inheritsNode = obj3265;
  lineNumber = 1301
var func3312 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj3313 = Grace_allocObject();
  obj3313.outer = this;
    var reader_ast_outer3314 = function() {
    return this.outer;
  }
  obj3313.methods["outer"] = reader_ast_outer3314;
function obj_init_3313() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func3315 = function(argcv) {
  var curarg = 1;
  var var_values = new GraceList(Array.prototype.slice.call(arguments, curarg, curarg + argcv[0] - 0));
  curarg += argcv[0] - 0;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj3316 = Grace_allocObject();
  obj3316.outer = this;
    var reader_ast_outer3317 = function() {
    return this.outer;
  }
  obj3316.methods["outer"] = reader_ast_outer3317;
function obj_init_3316() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1290
  var string3318 = new GraceString("");
  obj3316.data["name"] = string3318;
    var reader_ast_name3319 = function() {
    return this.data["name"];
  }
  obj3316.methods["name"] = reader_ast_name3319;
  obj3316.data["name"] = string3318;
  var writer_ast_name3319 = function(argcv, o) {
    this.data["name"] = o;
  }
  obj3316.methods["name:="] = writer_ast_name3319;
obj3316.mutable = true;
  lineNumber = 1292
  var array3320 = new GraceList([
]);

  obj3316.data["params"] = array3320;
    var reader_ast_params3321 = function() {
    return this.data["params"];
  }
  obj3316.methods["params"] = reader_ast_params3321;
  obj3316.data["params"] = array3320;
  var writer_ast_params3321 = function(argcv, o) {
    this.data["params"] = o;
  }
  obj3316.methods["params:="] = writer_ast_params3321;
obj3316.mutable = true;
  var bool3322 = new GraceBoolean(false)
  obj3316.data["vararg"] = bool3322;
    var reader_ast_vararg3323 = function() {
    return this.data["vararg"];
  }
  obj3316.methods["vararg"] = reader_ast_vararg3323;
  obj3316.data["vararg"] = bool3322;
  var writer_ast_vararg3323 = function(argcv, o) {
    this.data["vararg"] = o;
  }
  obj3316.methods["vararg:="] = writer_ast_vararg3323;
obj3316.mutable = true;
  lineNumber = 1295
  lineNumber = 1296
  lineNumber = 1
  lineNumber = 1293
  var call3325 = callmethod(var_values,"size", [0]);
  var opresult3327 = callmethod(call3325, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult3327)) {
  lineNumber = 1295
  lineNumber = 1
  lineNumber = 1295
  lineNumber = 1294
  var idxres3328 = var_values.methods["[]"].call(var_values, [1], new GraceNum(1));
  lineNumber = 1295
  var call3329 = callmethod(this,"name:=", [1], idxres3328);
  var if3324 = call3329;
}
  lineNumber = 1298
  lineNumber = 1299
  lineNumber = 1
  lineNumber = 1296
  var call3331 = callmethod(var_values,"size", [0]);
  var opresult3333 = callmethod(call3331, ">", [1], new GraceNum(1));
  if (Grace_isTrue(opresult3333)) {
  lineNumber = 1298
  lineNumber = 1
  lineNumber = 1298
  lineNumber = 1297
  var idxres3334 = var_values.methods["[]"].call(var_values, [1], new GraceNum(2));
  lineNumber = 1298
  var call3335 = callmethod(this,"params:=", [1], idxres3334);
  var if3330 = call3335;
}
  lineNumber = 1301
  lineNumber = 1302
  lineNumber = 1
  lineNumber = 1299
  var call3337 = callmethod(var_values,"size", [0]);
  var opresult3339 = callmethod(call3337, ">", [1], new GraceNum(2));
  if (Grace_isTrue(opresult3339)) {
  lineNumber = 1301
  lineNumber = 1
  lineNumber = 1301
  lineNumber = 1300
  var idxres3340 = var_values.methods["[]"].call(var_values, [1], new GraceNum(3));
  lineNumber = 1301
  var call3341 = callmethod(this,"vararg:=", [1], idxres3340);
  var if3336 = call3341;
}
  superDepth = origSuperDepth;
}
obj_init_3316.apply(obj3316, []);
  return obj3316
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj3313.methods["new"] = func3315;
  superDepth = origSuperDepth;
}
obj_init_3313.apply(obj3313, []);
  return obj3313
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["signaturePart"] = func3312;
  lineNumber = 1333
var func3342 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj3343 = Grace_allocObject();
  obj3343.outer = this;
    var reader_ast_outer3344 = function() {
    return this.outer;
  }
  obj3343.methods["outer"] = reader_ast_outer3344;
function obj_init_3343() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func3345 = function(argcv) {
  var curarg = 1;
  var var_values = new GraceList(Array.prototype.slice.call(arguments, curarg, curarg + argcv[0] - 0));
  curarg += argcv[0] - 0;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj3346 = Grace_allocObject();
  obj3346.outer = this;
    var reader_ast_outer3347 = function() {
    return this.outer;
  }
  obj3346.methods["outer"] = reader_ast_outer3347;
function obj_init_3346() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1326
  var string3348 = new GraceString("");
  obj3346.data["name"] = string3348;
    var reader_ast_name3349 = function() {
    return this.data["name"];
  }
  obj3346.methods["name"] = reader_ast_name3349;
  obj3346.data["name"] = string3348;
  var writer_ast_name3349 = function(argcv, o) {
    this.data["name"] = o;
  }
  obj3346.methods["name:="] = writer_ast_name3349;
obj3346.mutable = true;
  lineNumber = 1328
  var array3350 = new GraceList([
]);

  obj3346.data["args"] = array3350;
    var reader_ast_args3351 = function() {
    return this.data["args"];
  }
  obj3346.methods["args"] = reader_ast_args3351;
  obj3346.data["args"] = array3350;
  var writer_ast_args3351 = function(argcv, o) {
    this.data["args"] = o;
  }
  obj3346.methods["args:="] = writer_ast_args3351;
obj3346.mutable = true;
  lineNumber = 1330
  lineNumber = 1331
  lineNumber = 1
  lineNumber = 1328
  var call3353 = callmethod(var_values,"size", [0]);
  var opresult3355 = callmethod(call3353, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult3355)) {
  lineNumber = 1330
  lineNumber = 1
  lineNumber = 1330
  lineNumber = 1329
  var idxres3356 = var_values.methods["[]"].call(var_values, [1], new GraceNum(1));
  lineNumber = 1330
  var call3357 = callmethod(this,"name:=", [1], idxres3356);
  var if3352 = call3357;
}
  lineNumber = 1333
  lineNumber = 1334
  lineNumber = 1
  lineNumber = 1331
  var call3359 = callmethod(var_values,"size", [0]);
  var opresult3361 = callmethod(call3359, ">", [1], new GraceNum(1));
  if (Grace_isTrue(opresult3361)) {
  lineNumber = 1333
  lineNumber = 1
  lineNumber = 1333
  lineNumber = 1332
  var idxres3362 = var_values.methods["[]"].call(var_values, [1], new GraceNum(2));
  lineNumber = 1333
  var call3363 = callmethod(this,"args:=", [1], idxres3362);
  var if3358 = call3363;
}
  superDepth = origSuperDepth;
}
obj_init_3346.apply(obj3346, []);
  return obj3346
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj3343.methods["new"] = func3345;
  superDepth = origSuperDepth;
}
obj_init_3343.apply(obj3343, []);
  return obj3343
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["callWithPart"] = func3342;
  lineNumber = 1366
var var_ASTVisitor = new GraceType("ASTVisitor");
var_ASTVisitor.typeMethods.push("visitFor");
var_ASTVisitor.typeMethods.push("visitWhile");
var_ASTVisitor.typeMethods.push("visitIf");
var_ASTVisitor.typeMethods.push("visitBlock");
var_ASTVisitor.typeMethods.push("visitMatchCase");
var_ASTVisitor.typeMethods.push("visitMethodType");
var_ASTVisitor.typeMethods.push("visitType");
var_ASTVisitor.typeMethods.push("visitMethod");
var_ASTVisitor.typeMethods.push("visitCall");
var_ASTVisitor.typeMethods.push("visitClass");
var_ASTVisitor.typeMethods.push("visitObject");
var_ASTVisitor.typeMethods.push("visitArray");
var_ASTVisitor.typeMethods.push("visitMember");
var_ASTVisitor.typeMethods.push("visitGeneric");
var_ASTVisitor.typeMethods.push("visitIdentifier");
var_ASTVisitor.typeMethods.push("visitOctets");
var_ASTVisitor.typeMethods.push("visitString");
var_ASTVisitor.typeMethods.push("visitNum");
var_ASTVisitor.typeMethods.push("visitOp");
var_ASTVisitor.typeMethods.push("visitIndex");
var_ASTVisitor.typeMethods.push("visitBind");
var_ASTVisitor.typeMethods.push("visitDefDec");
var_ASTVisitor.typeMethods.push("visitVarDec");
var_ASTVisitor.typeMethods.push("visitImport");
var_ASTVisitor.typeMethods.push("visitReturn");
var_ASTVisitor.typeMethods.push("visitInherits");
var type_ASTVisitor = var_ASTVisitor;
  return this;
}
