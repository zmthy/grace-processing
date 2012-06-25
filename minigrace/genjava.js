function gracecode_genjava() {
  lineNumber = 2
// Import of ast
  var var_ast = do_import("ast", gracecode_ast);
  lineNumber = 3
// Import of io
  var var_io = do_import("io", gracecode_io);
  lineNumber = 4
// Import of sys
  var var_sys = do_import("sys", gracecode_sys);
  lineNumber = 5
// Import of unicode
  var var_unicode = do_import("unicode", gracecode_unicode);
  lineNumber = 8
// Import of util
  var var_util = do_import("util", gracecode_util);
  lineNumber = 9
  lineNumber = 8
  var string0 = new GraceString("Obj");
  var var_obj = string0;
  lineNumber = 1
var func1 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 8
  return var_obj
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["obj"] = func1;
  lineNumber = 10
  lineNumber = 9
  var string2 = new GraceString("Block");
  var var_blk = string2;
  lineNumber = 1
var func3 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 9
  return var_blk
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["blk"] = func3;
  lineNumber = 11
  lineNumber = 10
  var string4 = new GraceString("Return");
  var var_ret = string4;
  lineNumber = 1
var func5 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 10
  return var_ret
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["ret"] = func5;
  lineNumber = 14
  lineNumber = 11
  var string6 = new GraceString("$javaBoolean");
  var var_bln = string6;
  lineNumber = 1
var func7 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 11
  return var_bln
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["bln"] = func7;
  lineNumber = 19
var var_ImmutableIndexedCollection = new GraceType("ImmutableIndexedCollection");
var_ImmutableIndexedCollection.typeMethods.push("[]");
var_ImmutableIndexedCollection.typeMethods.push("at");
var type_ImmutableIndexedCollection = var_ImmutableIndexedCollection;
  lineNumber = 79
var func9 = function(argcv) {
  var curarg = 1;
  var var_nodes = arguments[curarg];
  curarg++;
  var var_outFile = arguments[curarg];
  curarg++;
  var var_modName = arguments[curarg];
  curarg++;
  var var_runMode = arguments[curarg];
  curarg++;
  var var_buildType = arguments[curarg];
  curarg++;
  var var_libPath = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 53
  lineNumber = 58
  lineNumber = 21
  var string11 = new GraceString("make");
  var opresult13 = callmethod(var_runMode, "==", [1], string11);
  if (Grace_isTrue(opresult13)) {
  lineNumber = 22
  var string14 = new GraceString("checking imports.");
  var call15 = callmethod(var_util,"log_verbose", [1], string14);
  lineNumber = 30
  lineNumber = 24
  lineNumber = 30
  var block16 = Grace_allocObject();
  block16.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block16.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block16.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block16.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block16.receiver = this;
  block16.className = 'block<genjava:30>';
  block16.real = function(
var_node
) {
  lineNumber = 34
  lineNumber = 1
  lineNumber = 25
  var call17 = callmethod(var_node,"kind", [0]);
  var string18 = new GraceString("import");
  var opresult20 = callmethod(call17, "==", [1], string18);
  lineNumber = 30
  var block21 = Grace_allocObject();
  block21.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block21.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block21.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block21.receiver = this;
  block21.className = 'block<genjava:30>';
  block21.real = function(
) {
  lineNumber = 28
  lineNumber = 1
  lineNumber = 28
  lineNumber = 1
  lineNumber = 26
  var call22 = callmethod(var_node,"value", [0]);
  var call23 = callmethod(call22,"value", [0]);
  var var_name = call23;
  lineNumber = 30
  lineNumber = 28
  var string24 = new GraceString("");
  var opresult26 = callmethod(string24, "++", [1], var_name);
  var string27 = new GraceString(".grace");
  var opresult29 = callmethod(opresult26, "++", [1], string27);
  var call30 = callmethod(var_io,"exists", [1], opresult29);
  lineNumber = 30
  var block31 = Grace_allocObject();
  block31.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block31.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block31.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block31.receiver = this;
  block31.className = 'block<genjava:30>';
  block31.real = function(
) {
  lineNumber = 29
  lineNumber = 1
  lineNumber = 29
  var string32 = new GraceString("");
  var opresult34 = callmethod(string32, "++", [1], var_name);
  var string35 = new GraceString(".java");
  var opresult37 = callmethod(opresult34, "++", [1], string35);
  var call38 = callmethod(var_io,"exists", [1], opresult37);
  var call39 = callmethod(call38,"not", [0]);
  lineNumber = 30
  var block40 = Grace_allocObject();
  block40.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block40.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block40.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block40.receiver = this;
  block40.className = 'block<genjava:30>';
  block40.real = function(
) {
  lineNumber = 1
  lineNumber = 30
  var string41 = new GraceString("");
  var opresult43 = callmethod(string41, "++", [1], var_name);
  var string44 = new GraceString(".java");
  var opresult46 = callmethod(opresult43, "++", [1], string44);
  var string47 = new GraceString("");
  var opresult49 = callmethod(string47, "++", [1], var_name);
  var string50 = new GraceString(".grace");
  var opresult52 = callmethod(opresult49, "++", [1], string50);
  var call53 = callmethod(var_io,"newer", [2], opresult46, opresult52);
  var call54 = callmethod(call53,"not", [0]);
  return call54;
};
  var opresult56 = callmethod(call39, "||", [1], block40);
  return opresult56;
};
  var opresult58 = callmethod(call30, "&&", [1], block31);
  return opresult58;
};
  var opresult60 = callmethod(opresult20, "&&", [1], block21);
  return opresult60;
};
  lineNumber = 36
  var call61 = callmethod(this,"filter()with", [1, 1], var_nodes, block16);
  var var_imports = call61;
  lineNumber = 53
  lineNumber = 36
  lineNumber = 53
  var block62 = Grace_allocObject();
  block62.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block62.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block62.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block62.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block62.receiver = this;
  block62.className = 'block<genjava:53>';
  block62.real = function(
var_node
) {
  lineNumber = 39
  lineNumber = 1
  lineNumber = 39
  lineNumber = 1
  lineNumber = 37
  var call63 = callmethod(var_node,"value", [0]);
  var call64 = callmethod(call63,"value", [0]);
  var var_name = call64;
  lineNumber = 42
  lineNumber = 39
  var string65 = new GraceString("");
  lineNumber = 42
  lineNumber = 1
  lineNumber = 42
  lineNumber = 1
  lineNumber = 39
  var call66 = callmethod(var_sys,"argv", [0]);
  var call67 = callmethod(call66,"first", [0]);
  var opresult69 = callmethod(string65, "++", [1], call67);
  var string70 = new GraceString(" --target java --make ");
  var opresult72 = callmethod(opresult69, "++", [1], string70);
  lineNumber = 42
  lineNumber = 40
  var string73 = new GraceString("");
  var opresult75 = callmethod(string73, "++", [1], var_name);
  var string76 = new GraceString(".grace --gracelib \"");
  var opresult78 = callmethod(opresult75, "++", [1], string76);
  lineNumber = 42
  lineNumber = 1
  lineNumber = 40
  var call79 = callmethod(var_util,"gracelibPath", [0]);
  var opresult81 = callmethod(opresult78, "++", [1], call79);
  var string82 = new GraceString("\"");
  var opresult84 = callmethod(opresult81, "++", [1], string82);
  var opresult86 = callmethod(opresult72, "++", [1], opresult84);
  var var_cmd = opresult86;
  lineNumber = 44
  lineNumber = 46
  lineNumber = 1
  lineNumber = 42
  var call88 = callmethod(var_util,"verbosity", [0]);
  var opresult90 = callmethod(call88, ">", [1], new GraceNum(30));
  if (Grace_isTrue(opresult90)) {
  lineNumber = 44
  lineNumber = 43
  var string91 = new GraceString("");
  var opresult93 = callmethod(string91, "++", [1], var_cmd);
  var string94 = new GraceString(" --verbose");
  var opresult96 = callmethod(opresult93, "++", [1], string94);
  var_cmd = opresult96;
  var if87 = opresult96;
}
  lineNumber = 48
  lineNumber = 50
  lineNumber = 1
  lineNumber = 46
  var call98 = callmethod(var_util,"vtag", [0]);
  if (Grace_isTrue(call98)) {
  lineNumber = 48
  lineNumber = 47
  var string99 = new GraceString("");
  var opresult101 = callmethod(string99, "++", [1], var_cmd);
  var string102 = new GraceString(" --vtag ");
  var opresult104 = callmethod(opresult101, "++", [1], string102);
  lineNumber = 48
  lineNumber = 1
  lineNumber = 47
  var call105 = callmethod(var_util,"vtag", [0]);
  var opresult107 = callmethod(opresult104, "++", [1], call105);
  var_cmd = opresult107;
  var if97 = opresult107;
}
  lineNumber = 52
  lineNumber = 50
  var string108 = new GraceString("");
  var opresult110 = callmethod(string108, "++", [1], var_cmd);
  var string111 = new GraceString(" --noexec");
  var opresult113 = callmethod(opresult110, "++", [1], string111);
  var_cmd = opresult113;
  lineNumber = 53
  lineNumber = 52
  lineNumber = 1
  lineNumber = 52
  var call115 = callmethod(var_io,"system", [1], var_cmd);
  var call116 = callmethod(call115,"not", [0]);
  if (Grace_isTrue(call116)) {
  lineNumber = 53
  var string117 = new GraceString("failed processing import of ");
  var opresult119 = callmethod(string117, "++", [1], var_name);
  var string120 = new GraceString(".");
  var opresult122 = callmethod(opresult119, "++", [1], string120);
  var call123 = callmethod(var_util,"syntax_error", [1], opresult122);
  var if114 = call123;
}
  return if114;
};
  var call124 = callmethod(Grace_prelude,"for()do", [1, 1], var_imports, block62);
  var if10 = call124;
}
  lineNumber = 58
  var string125 = new GraceString("compiling to Java.");
  var call126 = callmethod(var_util,"log_verbose", [1], string125);
  lineNumber = 60
  lineNumber = 62
  var call127 = callmethod(this,"compileModule", [2], var_nodes, var_modName);
  var var_output = call127;
  var string128 = new GraceString("writing file.");
  var call129 = callmethod(var_util,"log_verbose", [1], string128);
  lineNumber = 64
  lineNumber = 65
  lineNumber = 1
  lineNumber = 64
  var call130 = callmethod(var_util,"outfile", [0]);
  var call131 = callmethod(call130,"write", [1], var_output);
  lineNumber = 65
  lineNumber = 1
  lineNumber = 65
  lineNumber = 1
  lineNumber = 65
  var call132 = callmethod(var_util,"outfile", [0]);
  var call133 = callmethod(call132,"close", [0]);
  lineNumber = 72
  lineNumber = 76
  lineNumber = 67
  var string135 = new GraceString("make");
  var opresult137 = callmethod(var_runMode, "==", [1], string135);
  if (Grace_isTrue(opresult137)) {
  lineNumber = 68
  var string138 = new GraceString("compiling Java code.");
  var call139 = callmethod(var_util,"log_verbose", [1], string138);
  lineNumber = 71
  lineNumber = 70
  var string140 = new GraceString("javac -cp \".:");
  lineNumber = 71
  lineNumber = 1
  lineNumber = 70
  var call141 = callmethod(var_util,"gracelibPath", [0]);
  var opresult143 = callmethod(string140, "++", [1], call141);
  var string144 = new GraceString("\" ");
  var opresult146 = callmethod(opresult143, "++", [1], string144);
  var opresult148 = callmethod(opresult146, "++", [1], var_modName);
  var string149 = new GraceString(".java");
  var opresult151 = callmethod(opresult148, "++", [1], string149);
  var var_cmd = opresult151;
  lineNumber = 72
  lineNumber = 71
  lineNumber = 1
  lineNumber = 71
  var call153 = callmethod(var_io,"system", [1], var_cmd);
  var call154 = callmethod(call153,"not", [0]);
  if (Grace_isTrue(call154)) {
  lineNumber = 72
  var string155 = new GraceString("failed Java compilation of ");
  var opresult157 = callmethod(string155, "++", [1], var_modName);
  var string158 = new GraceString(".");
  var opresult160 = callmethod(opresult157, "++", [1], string158);
  var call161 = callmethod(var_util,"syntax_error", [1], opresult160);
  var if152 = call161;
}
  var if134 = if152;
}
  lineNumber = 76
  var string162 = new GraceString("done.");
  var call163 = callmethod(var_util,"log_verbose", [1], string162);
  lineNumber = 79
  lineNumber = 81
  lineNumber = 78
  var string165 = new GraceString("run");
  var opresult167 = callmethod(var_buildType, "==", [1], string165);
  if (Grace_isTrue(opresult167)) {
  lineNumber = 79
  var string168 = new GraceString("java -cp \".:");
  lineNumber = 1
  lineNumber = 79
  var call169 = callmethod(var_util,"gracelibPath", [0]);
  var opresult171 = callmethod(string168, "++", [1], call169);
  var string172 = new GraceString("\" ");
  var opresult174 = callmethod(opresult171, "++", [1], string172);
  var opresult176 = callmethod(opresult174, "++", [1], var_modName);
  var string177 = new GraceString("");
  var opresult179 = callmethod(opresult176, "++", [1], string177);
  var call180 = callmethod(var_io,"system", [1], opresult179);
  var if164 = call180;
}
  return if164
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func9.paramTypes = [];
func9.paramTypes.push([]);
func9.paramTypes.push([]);
func9.paramTypes.push([type_String, "modName"]);
func9.paramTypes.push([type_String, "runMode"]);
func9.paramTypes.push([type_String, "buildType"]);
func9.paramTypes.push([]);
  this.methods["compile"] = func9;
  lineNumber = 141
var func181 = function(argcv) {
  var curarg = 1;
  var var_nodes = arguments[curarg];
  curarg++;
  var var_modName = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 85
  var array182 = new GraceList([
]);

  var var_packages = array182;
  lineNumber = 86
  lineNumber = 85
  var string183 = new GraceString("");
  var var_name = string183;
  lineNumber = 92
  lineNumber = 86
  lineNumber = 92
  var block184 = Grace_allocObject();
  block184.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block184.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block184.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block184.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block184.receiver = this;
  block184.className = 'block<genjava:92>';
  block184.real = function(
var_c
) {
  lineNumber = 93
  lineNumber = 87
  var string186 = new GraceString("/");
  var opresult188 = callmethod(var_c, "==", [1], string186);
  if (Grace_isTrue(opresult188)) {
  lineNumber = 88
  var call189 = callmethod(var_packages,"push", [1], var_name);
  lineNumber = 90
  lineNumber = 89
  var string190 = new GraceString("");
  var_name = string190;
  var if185 = string190;
  } else {
  lineNumber = 92
  lineNumber = 91
  var string191 = new GraceString("");
  var opresult193 = callmethod(string191, "++", [1], var_name);
  var string194 = new GraceString("");
  var opresult196 = callmethod(opresult193, "++", [1], string194);
  var opresult198 = callmethod(opresult196, "++", [1], var_c);
  var string199 = new GraceString("");
  var opresult201 = callmethod(opresult198, "++", [1], string199);
  var_name = opresult201;
  var if185 = opresult201;
}
  return if185;
};
  var call202 = callmethod(Grace_prelude,"for()do", [1, 1], var_modName, block184);
  lineNumber = 96
  var call203 = callmethod(this,"moduleScope", [0]);
  var var_scope = call203;
  lineNumber = 97
  lineNumber = 96
  var string204 = new GraceString("$module");
  var var_mod = string204;
  lineNumber = 100
  lineNumber = 97
  var string205 = new GraceString("StandardPrelude");
  var var_std = string205;
  lineNumber = 141
  lineNumber = 104
  lineNumber = 103
  lineNumber = 102
  lineNumber = 101
  lineNumber = 142
  lineNumber = 1
  lineNumber = 100
  var call207 = callmethod(var_packages,"size", [0]);
  var opresult209 = callmethod(call207, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult209)) {
  var string210 = new GraceString("");
  var if206 = string210;
  } else {
  lineNumber = 101
  var string211 = new GraceString("package ");
  var string212 = new GraceString(".");
  var call213 = callmethod(this,"join()separatedBy", [1, 1], var_packages, string212);
  var opresult215 = callmethod(string211, "++", [1], call213);
  var string216 = new GraceString("");
  var opresult218 = callmethod(opresult215, "++", [1], string216);
  var call219 = callmethod(var_scope,"line", [1], opresult218);
  var if206 = call219;
}
  lineNumber = 102
  var string220 = new GraceString("import grace.lang.*");
  var call221 = callmethod(var_scope,"line", [1], string220);
  var opresult223 = callmethod(if206, "++", [1], call221);
  lineNumber = 103
  var string224 = new GraceString("import grace.lib.*");
  var call225 = callmethod(var_scope,"line", [1], string224);
  var opresult227 = callmethod(opresult223, "++", [1], call225);
  lineNumber = 104
  var string228 = new GraceString("import java.lang.reflect.Method");
  var call229 = callmethod(var_scope,"line", [1], string228);
  var opresult231 = callmethod(opresult227, "++", [1], call229);
  lineNumber = 141
  lineNumber = 108
  lineNumber = 107
  var string232 = new GraceString("public final class ");
  lineNumber = 108
  var string233 = new GraceString("");
  var opresult235 = callmethod(string233, "++", [1], var_name);
  var string236 = new GraceString(" extends Prelude {");
  var opresult238 = callmethod(opresult235, "++", [1], string236);
  var opresult240 = callmethod(string232, "++", [1], opresult238);
  lineNumber = 140
  var block241 = Grace_allocObject();
  block241.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block241.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block241.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block241.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block241.receiver = this;
  block241.className = 'block<genjava:140>';
  block241.real = function(
var_scope__39__
) {
  lineNumber = 129
  lineNumber = 123
  lineNumber = 119
  lineNumber = 118
  lineNumber = 116
  lineNumber = 114
  lineNumber = 110
  lineNumber = 109
  var string242 = new GraceString("private static final ");
  var opresult244 = callmethod(string242, "++", [1], var_obj);
  var string245 = new GraceString(" prelude = ");
  var opresult247 = callmethod(opresult244, "++", [1], string245);
  var opresult249 = callmethod(opresult247, "++", [1], var_std);
  var string250 = new GraceString(".");
  var opresult252 = callmethod(opresult249, "++", [1], string250);
  var opresult254 = callmethod(opresult252, "++", [1], var_mod);
  var string255 = new GraceString("()");
  var opresult257 = callmethod(opresult254, "++", [1], string255);
  var call258 = callmethod(var_scope__39__,"line", [1], opresult257);
  lineNumber = 110
  var string259 = new GraceString("private static ");
  var opresult261 = callmethod(string259, "++", [1], var_name);
  var string262 = new GraceString(" ");
  var opresult264 = callmethod(opresult261, "++", [1], string262);
  var opresult266 = callmethod(opresult264, "++", [1], var_mod);
  var string267 = new GraceString("");
  var opresult269 = callmethod(opresult266, "++", [1], string267);
  var call270 = callmethod(var_scope__39__,"line", [1], opresult269);
  var opresult272 = callmethod(call258, "++", [1], call270);
  lineNumber = 114
  lineNumber = 111
  var string273 = new GraceString("public static ");
  var opresult275 = callmethod(string273, "++", [1], var_name);
  var string276 = new GraceString(" ");
  var opresult278 = callmethod(opresult275, "++", [1], string276);
  var opresult280 = callmethod(opresult278, "++", [1], var_mod);
  var string281 = new GraceString("() {");
  var opresult283 = callmethod(opresult280, "++", [1], string281);
  lineNumber = 113
  var block284 = Grace_allocObject();
  block284.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block284.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block284.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block284.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block284.receiver = this;
  block284.className = 'block<genjava:113>';
  block284.real = function(
var_scope__39____39__
) {
  lineNumber = 112
  var string285 = new GraceString("return ");
  var opresult287 = callmethod(string285, "++", [1], var_mod);
  var string288 = new GraceString(" == null ? ");
  var opresult290 = callmethod(opresult287, "++", [1], string288);
  var opresult292 = callmethod(opresult290, "++", [1], var_mod);
  var string293 = new GraceString(" = ");
  var opresult295 = callmethod(opresult292, "++", [1], string293);
  lineNumber = 113
  var string296 = new GraceString("new ");
  var opresult298 = callmethod(string296, "++", [1], var_name);
  var string299 = new GraceString("() : ");
  var opresult301 = callmethod(opresult298, "++", [1], string299);
  var opresult303 = callmethod(opresult301, "++", [1], var_mod);
  var string304 = new GraceString("");
  var opresult306 = callmethod(opresult303, "++", [1], string304);
  var opresult308 = callmethod(opresult295, "++", [1], opresult306);
  lineNumber = 112
  var call309 = callmethod(var_scope__39____39__,"line", [1], opresult308);
  return call309;
};
  lineNumber = 114
  var string310 = new GraceString("}");
  lineNumber = 111
  var call311 = callmethod(var_scope__39__,"stbl", [3], opresult283, block284, string310);
  var opresult313 = callmethod(opresult272, "++", [1], call311);
  lineNumber = 116
  var string314 = new GraceString("private static int $ret = 0");
  var call315 = callmethod(var_scope__39__,"line", [1], string314);
  var opresult317 = callmethod(opresult313, "++", [1], call315);
  lineNumber = 118
  var string318 = new GraceString("private final ");
  var opresult320 = callmethod(string318, "++", [1], var_obj);
  var string321 = new GraceString(" $self = this");
  var opresult323 = callmethod(opresult320, "++", [1], string321);
  var call324 = callmethod(var_scope__39__,"line", [1], opresult323);
  var opresult326 = callmethod(opresult317, "++", [1], call324);
  lineNumber = 119
  var string327 = new GraceString("private final ");
  var opresult329 = callmethod(string327, "++", [1], var_obj);
  var string330 = new GraceString(" $closure = this");
  var opresult332 = callmethod(opresult329, "++", [1], string330);
  var call333 = callmethod(var_scope__39__,"line", [1], opresult332);
  var opresult335 = callmethod(opresult326, "++", [1], call333);
  lineNumber = 123
  lineNumber = 119
  var call336 = callmethod(this,"compileDeclarations", [2], var_nodes, var_scope__39__);
  var opresult338 = callmethod(opresult335, "++", [1], call336);
  lineNumber = 129
  lineNumber = 126
  var string339 = new GraceString("private ");
  var opresult341 = callmethod(string339, "++", [1], var_name);
  var string342 = new GraceString("() {");
  var opresult344 = callmethod(opresult341, "++", [1], string342);
  lineNumber = 128
  var block345 = Grace_allocObject();
  block345.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block345.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block345.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block345.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block345.receiver = this;
  block345.className = 'block<genjava:128>';
  block345.real = function(
var_scope__39____39__
) {
  lineNumber = 127
  var string346 = new GraceString("final ");
  var opresult348 = callmethod(string346, "++", [1], var_obj);
  var string349 = new GraceString(" self = this");
  var opresult351 = callmethod(opresult348, "++", [1], string349);
  var call352 = callmethod(var_scope__39____39__,"line", [1], opresult351);
  lineNumber = 128
  lineNumber = 127
  var call353 = callmethod(this,"compileExecution", [2], var_nodes, var_scope__39____39__);
  var opresult355 = callmethod(call352, "++", [1], call353);
  return opresult355;
};
  lineNumber = 129
  var string356 = new GraceString("}");
  lineNumber = 126
  var call357 = callmethod(var_scope__39__,"stbl", [3], opresult344, block345, string356);
  var opresult359 = callmethod(opresult338, "++", [1], call357);
  lineNumber = 140
  lineNumber = 133
  lineNumber = 132
  var string360 = new GraceString("public static void ");
  lineNumber = 133
  var string361 = new GraceString("main(String[] args) {");
  var opresult363 = callmethod(string360, "++", [1], string361);
  lineNumber = 139
  var block364 = Grace_allocObject();
  block364.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block364.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block364.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block364.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block364.receiver = this;
  block364.className = 'block<genjava:139>';
  block364.real = function(
var_scope__39____39__
) {
  lineNumber = 134
  var string365 = new GraceString("grace.lib.sys.setArgs(args, \"");
  var opresult367 = callmethod(string365, "++", [1], var_name);
  var string368 = new GraceString("\")");
  var opresult370 = callmethod(opresult367, "++", [1], string368);
  var call371 = callmethod(var_scope__39____39__,"line", [1], opresult370);
  lineNumber = 139
  lineNumber = 135
  var string372 = new GraceString("try {");
  lineNumber = 136
  var block373 = Grace_allocObject();
  block373.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block373.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block373.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block373.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block373.receiver = this;
  block373.className = 'block<genjava:136>';
  block373.real = function(
var_scope__39____39____39__
) {
  var string374 = new GraceString("$module()");
  var call375 = callmethod(var_scope__39____39____39__,"line", [1], string374);
  return call375;
};
  lineNumber = 139
  lineNumber = 137
  var string376 = new GraceString("} catch (Exception e) {");
  lineNumber = 138
  var block377 = Grace_allocObject();
  block377.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block377.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block377.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block377.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block377.receiver = this;
  block377.className = 'block<genjava:138>';
  block377.real = function(
var_s
) {
  var string378 = new GraceString("Prelude.printException(e)");
  var call379 = callmethod(var_s,"line", [1], string378);
  return call379;
};
  lineNumber = 139
  var string380 = new GraceString("}");
  lineNumber = 137
  var call381 = callmethod(var_scope__39____39__,"block", [3], string376, block377, string380);
  lineNumber = 135
  var call382 = callmethod(var_scope__39____39__,"stbl", [3], string372, block373, call381);
  var opresult384 = callmethod(call371, "++", [1], call382);
  return opresult384;
};
  lineNumber = 140
  var string385 = new GraceString("}");
  lineNumber = 132
  var call386 = callmethod(var_scope__39__,"stbl", [3], opresult363, block364, string385);
  var opresult388 = callmethod(opresult359, "++", [1], call386);
  return opresult388;
};
  lineNumber = 141
  var string389 = new GraceString("}");
  lineNumber = 107
  var call390 = callmethod(var_scope,"decl", [3], opresult240, block241, string389);
  var call391 = callmethod(var_scope,"stmt", [1], call390);
  var opresult393 = callmethod(opresult231, "++", [1], call391);
  return opresult393
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func181.paramTypes = [];
func181.paramTypes.push([]);
func181.paramTypes.push([type_String, "modName"]);
  this.methods["compileModule"] = func181;
  lineNumber = 172
var func394 = function(argcv) {
  var curarg = 1;
  var var_nodes = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 170
  lineNumber = 165
  var string395 = new GraceString("for");
  lineNumber = 170
  var block396 = Grace_allocObject();
  block396.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block396.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block396.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block396.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block396.receiver = this;
  block396.className = 'block<genjava:170>';
  block396.real = function(
var_node
) {
  lineNumber = 167
  lineNumber = 1
  lineNumber = 167
  lineNumber = 1
  lineNumber = 166
  var call397 = callmethod(var_node,"body", [0]);
  var call398 = callmethod(call397,"params", [0]);
  var var_params = call398;
  lineNumber = 170
  lineNumber = 172
  lineNumber = 1
  lineNumber = 167
  var call400 = callmethod(var_params,"size", [0]);
  var opresult402 = callmethod(call400, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult402)) {
  var string403 = new GraceString("");
  var if399 = string403;
  } else {
  lineNumber = 168
  var idxres405 = var_params.methods["[]"].call(var_params, [1], new GraceNum(1));
  var call406 = callmethod(var_ast,"astdefdec", [3], idxres405, var_nothing, var_nothing);
  var array404 = new GraceList([
call406,
]);

  var var_param = array404;
  lineNumber = 170
  lineNumber = 169
  lineNumber = 171
  var call407 = callmethod(this,"compileDeclarations", [2], var_param, var_scope);
  lineNumber = 170
  lineNumber = 1
  lineNumber = 170
  lineNumber = 1
  lineNumber = 170
  var call408 = callmethod(var_node,"body", [0]);
  var call409 = callmethod(call408,"body", [0]);
  lineNumber = 169
  var call410 = callmethod(this,"compileDeclarations", [2], call409, var_scope);
  var opresult412 = callmethod(call407, "++", [1], call410);
  var if399 = opresult412;
}
  return if399;
};
  lineNumber = 164
  lineNumber = 163
  var string413 = new GraceString("while");
  lineNumber = 164
  var block414 = Grace_allocObject();
  block414.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block414.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block414.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block414.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block414.receiver = this;
  block414.className = 'block<genjava:164>';
  block414.real = function(
var_node
) {
  lineNumber = 1
  lineNumber = 164
  var call415 = callmethod(var_node,"body", [0]);
  lineNumber = 165
  var call416 = callmethod(this,"compileDeclarations", [2], call415, var_scope);
  return call416;
};
  lineNumber = 162
  lineNumber = 160
  var string417 = new GraceString("if");
  lineNumber = 162
  var block418 = Grace_allocObject();
  block418.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block418.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block418.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block418.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block418.receiver = this;
  block418.className = 'block<genjava:162>';
  block418.real = function(
var_node
) {
  lineNumber = 161
  lineNumber = 1
  lineNumber = 161
  var call419 = callmethod(var_node,"thenblock", [0]);
  lineNumber = 163
  var call420 = callmethod(this,"compileDeclarations", [2], call419, var_scope);
  lineNumber = 162
  lineNumber = 1
  lineNumber = 162
  var call421 = callmethod(var_node,"elseblock", [0]);
  lineNumber = 161
  var call422 = callmethod(this,"compileDeclarations", [2], call421, var_scope);
  var opresult424 = callmethod(call420, "++", [1], call422);
  return opresult424;
};
  lineNumber = 159
  lineNumber = 158
  var string425 = new GraceString("method");
  lineNumber = 159
  var block426 = Grace_allocObject();
  block426.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block426.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block426.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block426.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block426.receiver = this;
  block426.className = 'block<genjava:159>';
  block426.real = function(
var_node
) {
  lineNumber = 160
  var call427 = callmethod(this,"compileMethod", [2], var_node, var_scope);
  return call427;
};
  lineNumber = 154
  lineNumber = 147
  var string429 = new GraceString("vardec");
  var string430 = new GraceString("defdec");
  var string431 = new GraceString("class");
  var string432 = new GraceString("type");
  var array428 = new GraceList([
string429,
string430,
string431,
string432,
]);

  lineNumber = 154
  var block433 = Grace_allocObject();
  block433.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block433.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block433.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block433.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block433.receiver = this;
  block433.className = 'block<genjava:154>';
  block433.real = function(
var_node
) {
  lineNumber = 148
  lineNumber = 149
  var call434 = callmethod(this,"compileFieldName", [1], var_node);
  var var_name = call434;
  lineNumber = 154
  lineNumber = 149
  lineNumber = 1
  lineNumber = 149
  var call435 = callmethod(var_scope,"hasVariable", [1], var_name);
  var call436 = callmethod(call435,"not", [0]);
  lineNumber = 154
  var block437 = Grace_allocObject();
  block437.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block437.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block437.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block437.receiver = this;
  block437.className = 'block<genjava:154>';
  block437.real = function(
) {
  lineNumber = 150
  var call438 = callmethod(var_scope,"addVariable", [1], var_name);
  lineNumber = 154
  lineNumber = 151
  var call439 = callmethod(this,"compileField", [2], var_node, var_scope);
  var call440 = callmethod(var_scope,"line", [1], call439);
  lineNumber = 154
  lineNumber = 151
  lineNumber = 1
  lineNumber = 151
  var call441 = callmethod(var_scope,"isDecl", [0]);
  lineNumber = 154
  var block442 = Grace_allocObject();
  block442.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block442.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block442.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block442.receiver = this;
  block442.className = 'block<genjava:154>';
  block442.real = function(
) {
  lineNumber = 152
  lineNumber = 156
  lineNumber = 1
  lineNumber = 152
  var call443 = callmethod(var_scope,"indent", [0]);
  lineNumber = 156
  var call444 = callmethod(this,"compileGetter", [2], var_node, var_scope);
  var opresult446 = callmethod(call443, "++", [1], call444);
  lineNumber = 154
  lineNumber = 153
  lineNumber = 1
  lineNumber = 153
  var call447 = callmethod(var_node,"kind", [0]);
  var string448 = new GraceString("vardec");
  var opresult450 = callmethod(call447, "==", [1], string448);
  lineNumber = 154
  var block451 = Grace_allocObject();
  block451.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block451.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block451.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block451.receiver = this;
  block451.className = 'block<genjava:154>';
  block451.real = function(
) {
  lineNumber = 155
  lineNumber = 1
  lineNumber = 154
  var call452 = callmethod(var_scope,"indent", [0]);
  lineNumber = 155
  var call453 = callmethod(this,"compileSetter", [2], var_node, var_scope);
  var opresult455 = callmethod(call452, "++", [1], call453);
  return opresult455;
};
  lineNumber = 152
  var call456 = callmethod(this,"strIf()then", [1, 1], opresult450, block451);
  var opresult458 = callmethod(opresult446, "++", [1], call456);
  return opresult458;
};
  lineNumber = 151
  var call459 = callmethod(this,"strIf()then", [1, 1], call441, block442);
  var opresult461 = callmethod(call440, "++", [1], call459);
  return opresult461;
};
  lineNumber = 158
  var call462 = callmethod(this,"strIf()then", [1, 1], call436, block437);
  return call462;
};
  lineNumber = 146
  lineNumber = 145
  var string463 = new GraceString("import");
  lineNumber = 146
  var block464 = Grace_allocObject();
  block464.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block464.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block464.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block464.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block464.receiver = this;
  block464.className = 'block<genjava:146>';
  block464.real = function(
var_node
) {
  var call465 = callmethod(this,"compileImportDecl", [2], var_node, var_scope);
  var call466 = callmethod(var_scope,"line", [1], call465);
  return call466;
};
  lineNumber = 172
  var call467 = callmethod(this,"kind()do", [1, 1], string463, block464);
  var call468 = callmethod(call467,"kinds()do", [1, 1], array428, block433);
  var call469 = callmethod(call468,"kind()do", [1, 1], string425, block426);
  var call470 = callmethod(call469,"kind()do", [1, 1], string417, block418);
  var call471 = callmethod(call470,"kind()do", [1, 1], string413, block414);
  var call472 = callmethod(call471,"kind()do", [1, 1], string395, block396);
  var call473 = callmethod(call472,"in", [1], var_nodes);
  lineNumber = 173
  var call474 = callmethod(this,"join", [1], call473);
  return call474
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func394.paramTypes = [];
func394.paramTypes.push([]);
func394.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileDeclarations"] = func394;
  lineNumber = 216
var func475 = function(argcv) {
  var curarg = 1;
  var var_nodes = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 212
  var block476 = Grace_allocObject();
  block476.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block476.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block476.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block476.receiver = this;
  block476.className = 'block<genjava:212>';
  block476.real = function(
var_node
,
var_continue
) {
  lineNumber = 208
  lineNumber = 1
  lineNumber = 208
  lineNumber = 1
  lineNumber = 208
  var call478 = callmethod(var_node,"kind", [0]);
  var string480 = new GraceString("method");
  var string481 = new GraceString("type");
  var string482 = new GraceString("inherits");
  var array479 = new GraceList([
string480,
string481,
string482,
]);

  var call483 = callmethod(array479,"contains", [1], call478);
  var call484 = callmethod(call483,"not", [0]);
  if (Grace_isTrue(call484)) {
  lineNumber = 209
  var string485 = new GraceString("Unknown statement: ");
  lineNumber = 1
  lineNumber = 209
  var call486 = callmethod(var_node,"kind", [0]);
  var opresult488 = callmethod(string485, "++", [1], call486);
  var string489 = new GraceString("");
  var opresult491 = callmethod(opresult488, "++", [1], string489);
  var call492 = callmethod(var_util,"log_verbose", [1], opresult491);
  lineNumber = 210
  var string493 = new GraceString("/* ");
  lineNumber = 1
  lineNumber = 210
  var call494 = callmethod(var_node,"kind", [0]);
  var opresult496 = callmethod(string493, "++", [1], call494);
  var string497 = new GraceString(" */");
  var opresult499 = callmethod(opresult496, "++", [1], string497);
  var call500 = callmethod(var_scope,"stmt", [1], opresult499);
  var if477 = call500;
  } else {
  lineNumber = 212
  lineNumber = 1
  lineNumber = 212
  var call501 = callmethod(var_continue,"apply", [0]);
  var if477 = call501;
}
  return if477;
};
  lineNumber = 206
  lineNumber = 205
  var string502 = new GraceString("inherits");
  lineNumber = 206
  var block503 = Grace_allocObject();
  block503.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block503.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block503.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block503.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block503.receiver = this;
  block503.className = 'block<genjava:206>';
  block503.real = function(
var_node
) {
  var call504 = callmethod(this,"compileInherits", [2], var_node, var_scope);
  var call505 = callmethod(var_scope,"line", [1], call504);
  return call505;
};
  lineNumber = 204
  lineNumber = 203
  var string506 = new GraceString("matchcase");
  lineNumber = 204
  var block507 = Grace_allocObject();
  block507.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block507.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block507.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block507.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block507.receiver = this;
  block507.className = 'block<genjava:204>';
  block507.real = function(
var_node
) {
  var call508 = callmethod(this,"compileMatch", [2], var_node, var_scope);
  var call509 = callmethod(var_scope,"stmt", [1], call508);
  return call509;
};
  lineNumber = 202
  lineNumber = 201
  var string510 = new GraceString("object");
  lineNumber = 202
  var block511 = Grace_allocObject();
  block511.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block511.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block511.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block511.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block511.receiver = this;
  block511.className = 'block<genjava:202>';
  block511.real = function(
var_node
) {
  var call512 = callmethod(this,"compileObject", [2], var_node, var_scope);
  var call513 = callmethod(var_scope,"line", [1], call512);
  return call513;
};
  lineNumber = 200
  lineNumber = 199
  var string514 = new GraceString("class");
  lineNumber = 200
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
  block515.className = 'block<genjava:200>';
  block515.real = function(
var_node
) {
  lineNumber = 201
  var call516 = callmethod(this,"compileClass", [2], var_node, var_scope);
  return call516;
};
  lineNumber = 198
  lineNumber = 197
  var string517 = new GraceString("op");
  lineNumber = 198
  var block518 = Grace_allocObject();
  block518.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block518.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block518.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block518.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block518.receiver = this;
  block518.className = 'block<genjava:198>';
  block518.real = function(
var_node
) {
  var call519 = callmethod(this,"compileOp", [2], var_node, var_scope);
  var call520 = callmethod(var_scope,"line", [1], call519);
  return call520;
};
  lineNumber = 196
  lineNumber = 195
  var string521 = new GraceString("call");
  lineNumber = 196
  var block522 = Grace_allocObject();
  block522.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block522.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block522.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block522.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block522.receiver = this;
  block522.className = 'block<genjava:196>';
  block522.real = function(
var_node
) {
  var call523 = callmethod(this,"compileCall", [2], var_node, var_scope);
  var call524 = callmethod(var_scope,"line", [1], call523);
  return call524;
};
  lineNumber = 194
  lineNumber = 193
  var string525 = new GraceString("member");
  lineNumber = 194
  var block526 = Grace_allocObject();
  block526.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block526.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block526.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block526.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block526.receiver = this;
  block526.className = 'block<genjava:194>';
  block526.real = function(
var_node
) {
  var call527 = callmethod(this,"compileMember", [2], var_node, var_scope);
  var call528 = callmethod(var_scope,"line", [1], call527);
  return call528;
};
  lineNumber = 192
  lineNumber = 191
  var string529 = new GraceString("if");
  lineNumber = 192
  var block530 = Grace_allocObject();
  block530.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block530.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block530.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block530.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block530.receiver = this;
  block530.className = 'block<genjava:192>';
  block530.real = function(
var_node
) {
  var call531 = callmethod(this,"compileIf", [2], var_node, var_scope);
  var call532 = callmethod(var_scope,"line", [1], call531);
  return call532;
};
  lineNumber = 190
  lineNumber = 189
  var string533 = new GraceString("bind");
  lineNumber = 190
  var block534 = Grace_allocObject();
  block534.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block534.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block534.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block534.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block534.receiver = this;
  block534.className = 'block<genjava:190>';
  block534.real = function(
var_node
) {
  var call535 = callmethod(this,"compileBind", [2], var_node, var_scope);
  var call536 = callmethod(var_scope,"line", [1], call535);
  return call536;
};
  lineNumber = 188
  lineNumber = 187
  var string537 = new GraceString("type");
  lineNumber = 188
  var block538 = Grace_allocObject();
  block538.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block538.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block538.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block538.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block538.receiver = this;
  block538.className = 'block<genjava:188>';
  block538.real = function(
var_node
) {
  var call539 = callmethod(this,"compileType", [2], var_node, var_scope);
  var call540 = callmethod(var_scope,"line", [1], call539);
  return call540;
};
  lineNumber = 186
  lineNumber = 185
  var string541 = new GraceString("defdec");
  lineNumber = 186
  var block542 = Grace_allocObject();
  block542.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block542.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block542.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block542.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block542.receiver = this;
  block542.className = 'block<genjava:186>';
  block542.real = function(
var_node
) {
  var call543 = callmethod(this,"compileBindDecl", [2], var_node, var_scope);
  var call544 = callmethod(var_scope,"line", [1], call543);
  return call544;
};
  lineNumber = 184
  lineNumber = 181
  var string545 = new GraceString("vardec");
  lineNumber = 184
  var block546 = Grace_allocObject();
  block546.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block546.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block546.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block546.receiver = this;
  block546.className = 'block<genjava:184>';
  block546.real = function(
var_node
,
var_continue
) {
  lineNumber = 185
  lineNumber = 1
  lineNumber = 182
  var call548 = callmethod(var_node,"value", [0]);
  var bool549 = new GraceBoolean(false)
  var opresult551 = callmethod(call548, "/=", [1], bool549);
  if (Grace_isTrue(opresult551)) {
  lineNumber = 183
  var call552 = callmethod(this,"compileBindDecl", [2], var_node, var_scope);
  var call553 = callmethod(var_scope,"line", [1], call552);
  var if547 = call553;
  } else {
  lineNumber = 184
  lineNumber = 1
  lineNumber = 184
  var call554 = callmethod(var_continue,"apply", [0]);
  var if547 = call554;
}
  return if547;
};
  lineNumber = 180
  lineNumber = 178
  var string555 = new GraceString("return");
  lineNumber = 180
  var block556 = Grace_allocObject();
  block556.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block556.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block556.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block556.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block556.receiver = this;
  block556.className = 'block<genjava:180>';
  block556.real = function(
var_node
) {
  lineNumber = 179
  lineNumber = 1
  lineNumber = 179
  var call557 = callmethod(var_k,"stop", [0]);
  lineNumber = 180
  var call558 = callmethod(this,"compileReturn", [2], var_node, var_scope);
  var call559 = callmethod(var_scope,"line", [1], call558);
  return call559;
};
  lineNumber = 177
  lineNumber = 176
  var string560 = new GraceString("import");
  lineNumber = 177
  var block561 = Grace_allocObject();
  block561.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block561.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block561.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block561.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block561.receiver = this;
  block561.className = 'block<genjava:177>';
  block561.real = function(
var_node
) {
  var call562 = callmethod(this,"compileImportExec", [2], var_node, var_scope);
  var call563 = callmethod(var_scope,"stmt", [1], call562);
  return call563;
};
  lineNumber = 216
  var call564 = callmethod(this,"kind()do", [1, 1], string560, block561);
  var call565 = callmethod(call564,"kind()do", [1, 1], string555, block556);
  var call566 = callmethod(call565,"kind()do", [1, 1], string545, block546);
  var call567 = callmethod(call566,"kind()do", [1, 1], string541, block542);
  var call568 = callmethod(call567,"kind()do", [1, 1], string537, block538);
  var call569 = callmethod(call568,"kind()do", [1, 1], string533, block534);
  var call570 = callmethod(call569,"kind()do", [1, 1], string529, block530);
  var call571 = callmethod(call570,"kind()do", [1, 1], string525, block526);
  var call572 = callmethod(call571,"kind()do", [1, 1], string521, block522);
  var call573 = callmethod(call572,"kind()do", [1, 1], string517, block518);
  var call574 = callmethod(call573,"kind()do", [1, 1], string514, block515);
  var call575 = callmethod(call574,"kind()do", [1, 1], string510, block511);
  var call576 = callmethod(call575,"kind()do", [1, 1], string506, block507);
  var call577 = callmethod(call576,"kind()do", [1, 1], string502, block503);
  var call578 = callmethod(call577,"else", [1], block476);
  var var_k = call578;
  var call579 = callmethod(var_k,"in", [1], var_nodes);
  lineNumber = 217
  var call580 = callmethod(this,"join", [1], call579);
  return call580
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func475.paramTypes = [];
func475.paramTypes.push([]);
func475.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileExecution"] = func475;
  lineNumber = 253
var func581 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 252
  var block582 = Grace_allocObject();
  block582.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block582.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block582.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block582.receiver = this;
  block582.className = 'block<genjava:252>';
  block582.real = function(
) {
  lineNumber = 251
  var string583 = new GraceString("Unknown expression: ");
  lineNumber = 1
  lineNumber = 251
  var call584 = callmethod(var_node,"kind", [0]);
  var opresult586 = callmethod(string583, "++", [1], call584);
  var string587 = new GraceString("");
  var opresult589 = callmethod(opresult586, "++", [1], string587);
  var call590 = callmethod(var_util,"log_verbose", [1], opresult589);
  lineNumber = 252
  var string591 = new GraceString("/* ");
  lineNumber = 1
  lineNumber = 252
  var call592 = callmethod(var_node,"kind", [0]);
  var opresult594 = callmethod(string591, "++", [1], call592);
  var string595 = new GraceString(" */ nothing");
  var opresult597 = callmethod(opresult594, "++", [1], string595);
  return opresult597;
};
  lineNumber = 249
  lineNumber = 248
  var string598 = new GraceString("literal");
  lineNumber = 249
  var block599 = Grace_allocObject();
  block599.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block599.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block599.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block599.receiver = this;
  block599.className = 'block<genjava:249>';
  block599.real = function(
) {
  lineNumber = 1
  lineNumber = 249
  var call600 = callmethod(var_node,"value", [0]);
  return call600;
};
  lineNumber = 247
  lineNumber = 246
  var string601 = new GraceString("generic");
  lineNumber = 247
  var block602 = Grace_allocObject();
  block602.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block602.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block602.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block602.receiver = this;
  block602.className = 'block<genjava:247>';
  block602.real = function(
) {
  lineNumber = 1
  lineNumber = 247
  var call603 = callmethod(var_node,"value", [0]);
  lineNumber = 248
  var call604 = callmethod(this,"compileIdentifier", [2], call603, var_scope);
  return call604;
};
  lineNumber = 245
  lineNumber = 244
  var string605 = new GraceString("matchcase");
  lineNumber = 245
  var block606 = Grace_allocObject();
  block606.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block606.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block606.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block606.receiver = this;
  block606.className = 'block<genjava:245>';
  block606.real = function(
) {
  lineNumber = 246
  var call607 = callmethod(this,"compileMatch", [2], var_node, var_scope);
  return call607;
};
  lineNumber = 243
  lineNumber = 242
  var string608 = new GraceString("object");
  lineNumber = 243
  var block609 = Grace_allocObject();
  block609.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block609.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block609.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block609.receiver = this;
  block609.className = 'block<genjava:243>';
  block609.real = function(
) {
  lineNumber = 244
  var call610 = callmethod(this,"compileObject", [2], var_node, var_scope);
  return call610;
};
  lineNumber = 241
  lineNumber = 240
  var string611 = new GraceString("block");
  lineNumber = 241
  var block612 = Grace_allocObject();
  block612.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block612.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block612.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block612.receiver = this;
  block612.className = 'block<genjava:241>';
  block612.real = function(
) {
  lineNumber = 242
  var call613 = callmethod(this,"compileBlock", [2], var_node, var_scope);
  return call613;
};
  lineNumber = 239
  lineNumber = 238
  var string614 = new GraceString("array");
  lineNumber = 239
  var block615 = Grace_allocObject();
  block615.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block615.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block615.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block615.receiver = this;
  block615.className = 'block<genjava:239>';
  block615.real = function(
) {
  lineNumber = 240
  var call616 = callmethod(this,"compileArray", [2], var_node, var_scope);
  return call616;
};
  lineNumber = 237
  lineNumber = 236
  var string617 = new GraceString("op");
  lineNumber = 237
  var block618 = Grace_allocObject();
  block618.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block618.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block618.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block618.receiver = this;
  block618.className = 'block<genjava:237>';
  block618.real = function(
) {
  lineNumber = 238
  var call619 = callmethod(this,"compileOp", [2], var_node, var_scope);
  return call619;
};
  lineNumber = 235
  lineNumber = 234
  var string620 = new GraceString("index");
  lineNumber = 235
  var block621 = Grace_allocObject();
  block621.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block621.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block621.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block621.receiver = this;
  block621.className = 'block<genjava:235>';
  block621.real = function(
) {
  lineNumber = 236
  var call622 = callmethod(this,"compileIndex", [2], var_node, var_scope);
  return call622;
};
  lineNumber = 233
  lineNumber = 232
  var string623 = new GraceString("if");
  lineNumber = 233
  var block624 = Grace_allocObject();
  block624.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block624.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block624.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block624.receiver = this;
  block624.className = 'block<genjava:233>';
  block624.real = function(
) {
  lineNumber = 234
  var call625 = callmethod(this,"compileTernary", [2], var_node, var_scope);
  return call625;
};
  lineNumber = 231
  lineNumber = 230
  var string626 = new GraceString("call");
  lineNumber = 231
  var block627 = Grace_allocObject();
  block627.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block627.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block627.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block627.receiver = this;
  block627.className = 'block<genjava:231>';
  block627.real = function(
) {
  lineNumber = 232
  var call628 = callmethod(this,"compileCall", [2], var_node, var_scope);
  return call628;
};
  lineNumber = 229
  lineNumber = 228
  var string629 = new GraceString("member");
  lineNumber = 229
  var block630 = Grace_allocObject();
  block630.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block630.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block630.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block630.receiver = this;
  block630.className = 'block<genjava:229>';
  block630.real = function(
) {
  lineNumber = 230
  var call631 = callmethod(this,"compileMember", [2], var_node, var_scope);
  return call631;
};
  lineNumber = 227
  lineNumber = 226
  var string632 = new GraceString("bind");
  lineNumber = 227
  var block633 = Grace_allocObject();
  block633.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block633.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block633.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block633.receiver = this;
  block633.className = 'block<genjava:227>';
  block633.real = function(
) {
  var string634 = new GraceString("(");
  var call635 = callmethod(this,"compileBind", [2], var_node, var_scope);
  var opresult637 = callmethod(string634, "++", [1], call635);
  var string638 = new GraceString(")");
  var opresult640 = callmethod(opresult637, "++", [1], string638);
  return opresult640;
};
  lineNumber = 225
  lineNumber = 224
  var string641 = new GraceString("string");
  lineNumber = 225
  var block642 = Grace_allocObject();
  block642.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block642.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block642.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block642.receiver = this;
  block642.className = 'block<genjava:225>';
  block642.real = function(
) {
  lineNumber = 226
  var call643 = callmethod(this,"compileString", [2], var_node, var_scope);
  return call643;
};
  lineNumber = 223
  lineNumber = 222
  var string644 = new GraceString("num");
  lineNumber = 223
  var block645 = Grace_allocObject();
  block645.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block645.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block645.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block645.receiver = this;
  block645.className = 'block<genjava:223>';
  block645.real = function(
) {
  lineNumber = 224
  var call646 = callmethod(this,"compileNumber", [2], var_node, var_scope);
  return call646;
};
  lineNumber = 221
  lineNumber = 220
  var string647 = new GraceString("identifier");
  lineNumber = 221
  var block648 = Grace_allocObject();
  block648.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block648.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block648.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block648.receiver = this;
  block648.className = 'block<genjava:221>';
  block648.real = function(
) {
  lineNumber = 222
  var call649 = callmethod(this,"compileIdentifier", [2], var_node, var_scope);
  return call649;
};
  lineNumber = 254
  var call650 = callmethod(this,"kind()do", [1, 1], string647, block648);
  var call651 = callmethod(call650,"kind()do", [1, 1], string644, block645);
  var call652 = callmethod(call651,"kind()do", [1, 1], string641, block642);
  var call653 = callmethod(call652,"kind()do", [1, 1], string632, block633);
  var call654 = callmethod(call653,"kind()do", [1, 1], string629, block630);
  var call655 = callmethod(call654,"kind()do", [1, 1], string626, block627);
  var call656 = callmethod(call655,"kind()do", [1, 1], string623, block624);
  var call657 = callmethod(call656,"kind()do", [1, 1], string620, block621);
  var call658 = callmethod(call657,"kind()do", [1, 1], string617, block618);
  var call659 = callmethod(call658,"kind()do", [1, 1], string614, block615);
  var call660 = callmethod(call659,"kind()do", [1, 1], string611, block612);
  var call661 = callmethod(call660,"kind()do", [1, 1], string608, block609);
  var call662 = callmethod(call661,"kind()do", [1, 1], string605, block606);
  var call663 = callmethod(call662,"kind()do", [1, 1], string601, block602);
  var call664 = callmethod(call663,"kind()do", [1, 1], string598, block599);
  var call665 = callmethod(call664,"else", [1], block582);
  var call666 = callmethod(call665,"of", [1], var_node);
  return call666
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func581.paramTypes = [];
func581.paramTypes.push([]);
func581.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileExpression"] = func581;
  lineNumber = 259
var func667 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 257
  lineNumber = 1
  lineNumber = 257
  lineNumber = 1
  lineNumber = 257
  var call668 = callmethod(var_node,"value", [0]);
  var call669 = callmethod(call668,"value", [0]);
  lineNumber = 259
  var call670 = callmethod(this,"escape", [1], call669);
  var var_name = call670;
  var string671 = new GraceString("private ");
  var opresult673 = callmethod(string671, "++", [1], var_obj);
  var string674 = new GraceString(" ");
  var opresult676 = callmethod(opresult673, "++", [1], string674);
  var opresult678 = callmethod(opresult676, "++", [1], var_name);
  var string679 = new GraceString("");
  var opresult681 = callmethod(opresult678, "++", [1], string679);
  return opresult681
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func667.paramTypes = [];
func667.paramTypes.push([]);
func667.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileImportDecl"] = func667;
  lineNumber = 266
var func682 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 263
  lineNumber = 1
  lineNumber = 263
  lineNumber = 1
  lineNumber = 263
  var call683 = callmethod(var_node,"value", [0]);
  var call684 = callmethod(call683,"value", [0]);
  lineNumber = 264
  var call685 = callmethod(this,"escape", [1], call684);
  var var_name = call685;
  lineNumber = 266
  lineNumber = 264
  var string686 = new GraceString("");
  var opresult688 = callmethod(string686, "++", [1], var_name);
  var string689 = new GraceString(".class.getMethod(\"$module\").invoke(null);");
  var opresult691 = callmethod(opresult688, "++", [1], string689);
  var var_expr = opresult691;
  lineNumber = 266
  var string692 = new GraceString("try { ");
  var opresult694 = callmethod(string692, "++", [1], var_name);
  var string695 = new GraceString(" = (");
  var opresult697 = callmethod(opresult694, "++", [1], string695);
  var opresult699 = callmethod(opresult697, "++", [1], var_obj);
  var string700 = new GraceString(") ");
  var opresult702 = callmethod(opresult699, "++", [1], string700);
  var opresult704 = callmethod(opresult702, "++", [1], var_expr);
  var string705 = new GraceString(" } catch (Exception e) {}");
  var opresult707 = callmethod(opresult704, "++", [1], string705);
  return opresult707
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func682.paramTypes = [];
func682.paramTypes.push([]);
func682.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileImportExec"] = func682;
  lineNumber = 276
var func708 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 274
  lineNumber = 1
  lineNumber = 274
  var call709 = callmethod(var_scope,"isDecl", [0]);
  var string710 = new GraceString("private ");
  lineNumber = 276
  var call711 = callmethod(this,"strIf()then", [1, 1], call709, string710);
  var var_acc = call711;
  var string712 = new GraceString("");
  var opresult714 = callmethod(string712, "++", [1], var_acc);
  var string715 = new GraceString("");
  var opresult717 = callmethod(opresult714, "++", [1], string715);
  var opresult719 = callmethod(opresult717, "++", [1], var_obj);
  var string720 = new GraceString(" ");
  var opresult722 = callmethod(opresult719, "++", [1], string720);
  var call723 = callmethod(this,"compileFieldName", [1], var_node);
  var opresult725 = callmethod(opresult722, "++", [1], call723);
  var string726 = new GraceString("");
  var opresult728 = callmethod(opresult725, "++", [1], string726);
  return opresult728
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func708.paramTypes = [];
func708.paramTypes.push([]);
func708.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileField"] = func708;
  lineNumber = 286
var func729 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 282
  lineNumber = 284
  var call730 = callmethod(this,"compileFieldName", [1], var_node);
  var var_name = call730;
  lineNumber = 286
  lineNumber = 284
  var string731 = new GraceString("public ");
  var opresult733 = callmethod(string731, "++", [1], var_obj);
  var string734 = new GraceString(" ");
  var opresult736 = callmethod(opresult733, "++", [1], string734);
  var opresult738 = callmethod(opresult736, "++", [1], var_name);
  var string739 = new GraceString("(");
  var opresult741 = callmethod(opresult738, "++", [1], string739);
  var opresult743 = callmethod(opresult741, "++", [1], var_obj);
  var string744 = new GraceString(" self) {");
  var opresult746 = callmethod(opresult743, "++", [1], string744);
  lineNumber = 285
  var block747 = Grace_allocObject();
  block747.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block747.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block747.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block747.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block747.receiver = this;
  block747.className = 'block<genjava:285>';
  block747.real = function(
var_scope__39__
) {
  var string748 = new GraceString("return ");
  var opresult750 = callmethod(string748, "++", [1], var_name);
  var string751 = new GraceString("");
  var opresult753 = callmethod(opresult750, "++", [1], string751);
  var call754 = callmethod(var_scope__39__,"line", [1], opresult753);
  return call754;
};
  lineNumber = 286
  var string755 = new GraceString("}\n");
  lineNumber = 284
  var call756 = callmethod(var_scope,"block", [3], opresult746, block747, string755);
  return call756
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func729.paramTypes = [];
func729.paramTypes.push([]);
func729.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileGetter"] = func729;
  lineNumber = 296
var func757 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 290
  lineNumber = 292
  var call758 = callmethod(this,"compileFieldName", [1], var_node);
  var var_name = call758;
  lineNumber = 296
  lineNumber = 293
  lineNumber = 292
  var string759 = new GraceString("public ");
  var opresult761 = callmethod(string759, "++", [1], var_obj);
  var string762 = new GraceString(" ");
  var opresult764 = callmethod(opresult761, "++", [1], string762);
  var opresult766 = callmethod(opresult764, "++", [1], var_name);
  var string767 = new GraceString("$58$61");
  var opresult769 = callmethod(opresult766, "++", [1], string767);
  lineNumber = 293
  var string770 = new GraceString("(");
  var opresult772 = callmethod(string770, "++", [1], var_obj);
  var string773 = new GraceString(" self, ");
  var opresult775 = callmethod(opresult772, "++", [1], string773);
  var opresult777 = callmethod(opresult775, "++", [1], var_obj);
  var string778 = new GraceString(" value) {");
  var opresult780 = callmethod(opresult777, "++", [1], string778);
  var opresult782 = callmethod(opresult769, "++", [1], opresult780);
  lineNumber = 295
  var block783 = Grace_allocObject();
  block783.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block783.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block783.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block783.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block783.receiver = this;
  block783.className = 'block<genjava:295>';
  block783.real = function(
var_scope__39__
) {
  lineNumber = 294
  var string784 = new GraceString("this.");
  var opresult786 = callmethod(string784, "++", [1], var_name);
  var string787 = new GraceString(" = value");
  var opresult789 = callmethod(opresult786, "++", [1], string787);
  var call790 = callmethod(var_scope__39__,"line", [1], opresult789);
  lineNumber = 295
  var string791 = new GraceString("return nothing");
  var call792 = callmethod(var_scope__39__,"line", [1], string791);
  var opresult794 = callmethod(call790, "++", [1], call792);
  return opresult794;
};
  lineNumber = 296
  var string795 = new GraceString("}\n");
  lineNumber = 292
  var call796 = callmethod(var_scope,"block", [3], opresult782, block783, string795);
  return call796
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func757.paramTypes = [];
func757.paramTypes.push([]);
func757.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileSetter"] = func757;
  lineNumber = 306
var func797 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 307
  lineNumber = 1
  lineNumber = 301
  var call799 = callmethod(var_node,"kind", [0]);
  var string800 = new GraceString("type");
  var opresult802 = callmethod(call799, "==", [1], string800);
  if (Grace_isTrue(opresult802)) {
  lineNumber = 302
  lineNumber = 1
  lineNumber = 302
  var call803 = callmethod(var_node,"value", [0]);
  var if798 = call803;
  } else {
  lineNumber = 306
  lineNumber = 305
  lineNumber = 1
  lineNumber = 305
  lineNumber = 1
  lineNumber = 303
  var call805 = callmethod(var_node,"name", [0]);
  var call806 = callmethod(call805,"kind", [0]);
  var string807 = new GraceString("generic");
  var opresult809 = callmethod(call806, "==", [1], string807);
  if (Grace_isTrue(opresult809)) {
  lineNumber = 304
  lineNumber = 1
  lineNumber = 304
  lineNumber = 1
  lineNumber = 304
  lineNumber = 1
  lineNumber = 304
  var call810 = callmethod(var_node,"name", [0]);
  var call811 = callmethod(call810,"value", [0]);
  var call812 = callmethod(call811,"value", [0]);
  var if804 = call812;
  } else {
  lineNumber = 306
  lineNumber = 1
  lineNumber = 306
  lineNumber = 1
  lineNumber = 306
  var call813 = callmethod(var_node,"name", [0]);
  var call814 = callmethod(call813,"value", [0]);
  var if804 = call814;
}
  var if798 = if804;
}
  lineNumber = 308
  var call815 = callmethod(this,"escape", [1], if798);
  return call815
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileFieldName"] = func797;
  lineNumber = 338
var func816 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 311
  lineNumber = 1
  lineNumber = 311
  lineNumber = 1
  lineNumber = 311
  var call817 = callmethod(var_node,"value", [0]);
  var call818 = callmethod(call817,"value", [0]);
  lineNumber = 312
  var call819 = callmethod(this,"escape", [1], call818);
  var var_name = call819;
  lineNumber = 315
  lineNumber = 318
  lineNumber = 312
  var string820 = new GraceString("final ");
  var opresult822 = callmethod(string820, "++", [1], var_obj);
  var string823 = new GraceString(" self");
  var opresult825 = callmethod(opresult822, "++", [1], string823);
  lineNumber = 315
  lineNumber = 312
  lineNumber = 1
  lineNumber = 312
  lineNumber = 1
  lineNumber = 312
  var call826 = callmethod(var_node,"params", [0]);
  var call827 = callmethod(call826,"size", [0]);
  var opresult829 = callmethod(call827, ">", [1], new GraceNum(0));
  lineNumber = 315
  var block830 = Grace_allocObject();
  block830.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block830.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block830.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block830.receiver = this;
  block830.className = 'block<genjava:315>';
  block830.real = function(
) {
  lineNumber = 313
  var string831 = new GraceString(", ");
  lineNumber = 315
  lineNumber = 314
  lineNumber = 313
  lineNumber = 1
  lineNumber = 313
  var call832 = callmethod(var_node,"params", [0]);
  lineNumber = 314
  var block833 = Grace_allocObject();
  block833.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block833.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block833.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block833.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block833.receiver = this;
  block833.className = 'block<genjava:314>';
  block833.real = function(
var_param
) {
  var string834 = new GraceString("final ");
  var opresult836 = callmethod(string834, "++", [1], var_obj);
  var string837 = new GraceString(" _");
  var opresult839 = callmethod(opresult836, "++", [1], string837);
  lineNumber = 1
  lineNumber = 314
  var call840 = callmethod(var_param,"value", [0]);
  var call841 = callmethod(this,"escape", [1], call840);
  var opresult843 = callmethod(opresult839, "++", [1], call841);
  var string844 = new GraceString("");
  var opresult846 = callmethod(opresult843, "++", [1], string844);
  return opresult846;
};
  lineNumber = 315
  var call847 = callmethod(this,"map()with", [1, 1], call832, block833);
  var string848 = new GraceString(", ");
  lineNumber = 316
  var call849 = callmethod(this,"join()separatedBy", [1, 1], call847, string848);
  var opresult851 = callmethod(string831, "++", [1], call849);
  lineNumber = 315
  lineNumber = 1
  lineNumber = 315
  var call852 = callmethod(var_node,"varargs", [0]);
  var string853 = new GraceString(", final ");
  var opresult855 = callmethod(string853, "++", [1], var_obj);
  var string856 = new GraceString("... _");
  var opresult858 = callmethod(opresult855, "++", [1], string856);
  var call859 = callmethod(this,"strIf()then", [1, 1], call852, opresult858);
  var opresult861 = callmethod(opresult851, "++", [1], call859);
  return opresult861;
};
  lineNumber = 318
  var call862 = callmethod(this,"strIf()then", [1, 1], opresult829, block830);
  var opresult864 = callmethod(opresult825, "++", [1], call862);
  var var_params = opresult864;
  lineNumber = 338
  lineNumber = 318
  var string865 = new GraceString("public ");
  var opresult867 = callmethod(string865, "++", [1], var_obj);
  var string868 = new GraceString(" ");
  var opresult870 = callmethod(opresult867, "++", [1], string868);
  var opresult872 = callmethod(opresult870, "++", [1], var_name);
  var string873 = new GraceString("(");
  var opresult875 = callmethod(opresult872, "++", [1], string873);
  var opresult877 = callmethod(opresult875, "++", [1], var_params);
  var string878 = new GraceString(") {");
  var opresult880 = callmethod(opresult877, "++", [1], string878);
  lineNumber = 336
  var block881 = Grace_allocObject();
  block881.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block881.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block881.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block881.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block881.receiver = this;
  block881.className = 'block<genjava:336>';
  block881.real = function(
var_scope__39__
) {
  lineNumber = 338
  lineNumber = 1
  lineNumber = 338
  lineNumber = 1
  lineNumber = 321
  var call883 = callmethod(var_node,"body", [0]);
  var call884 = callmethod(call883,"size", [0]);
  var opresult886 = callmethod(call884, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult886)) {
  lineNumber = 322
  var string887 = new GraceString("return nothing");
  var call888 = callmethod(var_scope__39__,"line", [1], string887);
  var if882 = call888;
  } else {
  lineNumber = 336
  lineNumber = 329
  lineNumber = 324
  var string889 = new GraceString("final int $scope = $ret++");
  var call890 = callmethod(var_scope__39__,"line", [1], string889);
  lineNumber = 329
  lineNumber = 325
  var string891 = new GraceString("class $Return extends ");
  var opresult893 = callmethod(string891, "++", [1], var_ret);
  var string894 = new GraceString(" {");
  var opresult896 = callmethod(opresult893, "++", [1], string894);
  lineNumber = 328
  var block897 = Grace_allocObject();
  block897.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block897.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block897.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block897.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block897.receiver = this;
  block897.className = 'block<genjava:328>';
  block897.real = function(
var_scope__39____39__
) {
  lineNumber = 326
  var string898 = new GraceString("public $Return(");
  var opresult900 = callmethod(string898, "++", [1], var_obj);
  var string901 = new GraceString(" value) {");
  var opresult903 = callmethod(opresult900, "++", [1], string901);
  lineNumber = 327
  var block904 = Grace_allocObject();
  block904.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block904.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block904.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block904.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block904.receiver = this;
  block904.className = 'block<genjava:327>';
  block904.real = function(
var_scope__39____39____39__
) {
  var string905 = new GraceString("super($scope, value)");
  var call906 = callmethod(var_scope__39____39____39__,"line", [1], string905);
  return call906;
};
  lineNumber = 328
  var string907 = new GraceString("}");
  lineNumber = 326
  var call908 = callmethod(var_scope__39____39__,"stbl", [3], opresult903, block904, string907);
  return call908;
};
  lineNumber = 329
  var string909 = new GraceString("}");
  lineNumber = 325
  var call910 = callmethod(var_scope__39__,"stbl", [3], opresult896, block897, string909);
  var opresult912 = callmethod(call890, "++", [1], call910);
  lineNumber = 336
  lineNumber = 330
  var string913 = new GraceString("try {");
  lineNumber = 331
  var block914 = Grace_allocObject();
  block914.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block914.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block914.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block914.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block914.receiver = this;
  block914.className = 'block<genjava:331>';
  block914.real = function(
var_scope__39____39__
) {
  var string915 = new GraceString("return ");
  var call916 = callmethod(this,"compileParamClosure", [2], var_node, var_scope__39____39__);
  var opresult918 = callmethod(string915, "++", [1], call916);
  var string919 = new GraceString("");
  var opresult921 = callmethod(opresult918, "++", [1], string919);
  var call922 = callmethod(var_scope__39____39__,"line", [1], opresult921);
  return call922;
};
  lineNumber = 336
  lineNumber = 332
  var string923 = new GraceString("} catch ($Return $return) {");
  lineNumber = 335
  var block924 = Grace_allocObject();
  block924.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block924.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block924.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block924.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block924.receiver = this;
  block924.className = 'block<genjava:335>';
  block924.real = function(
var_scope__39____39__
) {
  lineNumber = 333
  var string925 = new GraceString("if ($return.scope != $scope) {");
  lineNumber = 334
  var block926 = Grace_allocObject();
  block926.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block926.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block926.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block926.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block926.receiver = this;
  block926.className = 'block<genjava:334>';
  block926.real = function(
var_scope__39____39____39__
) {
  var string927 = new GraceString("throw $return");
  var call928 = callmethod(var_scope__39____39____39__,"line", [1], string927);
  return call928;
};
  lineNumber = 335
  var string929 = new GraceString("}");
  lineNumber = 333
  var call930 = callmethod(var_scope__39____39__,"stbl", [3], string925, block926, string929);
  lineNumber = 335
  var string931 = new GraceString("return $return.value");
  var call932 = callmethod(var_scope__39____39__,"line", [1], string931);
  var opresult934 = callmethod(call930, "++", [1], call932);
  return opresult934;
};
  lineNumber = 336
  var string935 = new GraceString("}");
  lineNumber = 332
  var call936 = callmethod(var_scope__39__,"block", [3], string923, block924, string935);
  lineNumber = 330
  var call937 = callmethod(var_scope__39__,"stbl", [3], string913, block914, call936);
  var opresult939 = callmethod(opresult912, "++", [1], call937);
  var if882 = opresult939;
}
  return if882;
};
  lineNumber = 338
  var string940 = new GraceString("}");
  lineNumber = 318
  var call941 = callmethod(var_scope,"stbl", [3], opresult880, block881, string940);
  return call941
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func816.paramTypes = [];
func816.paramTypes.push([]);
func816.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileMethod"] = func816;
  lineNumber = 344
var func942 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 345
  lineNumber = 342
  var string943 = new GraceString("");
  lineNumber = 345
  lineNumber = 1
  lineNumber = 342
  var call944 = callmethod(var_node,"value", [0]);
  var opresult946 = callmethod(string943, "++", [1], call944);
  var string947 = new GraceString(" = new Type(");
  var opresult949 = callmethod(opresult946, "++", [1], string947);
  lineNumber = 344
  lineNumber = 343
  lineNumber = 342
  lineNumber = 1
  lineNumber = 342
  var call950 = callmethod(var_node,"methods", [0]);
  lineNumber = 343
  var block951 = Grace_allocObject();
  block951.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block951.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block951.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block951.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block951.receiver = this;
  block951.className = 'block<genjava:343>';
  block951.real = function(
var_meth
) {
  var string952 = new GraceString("\"");
  lineNumber = 1
  lineNumber = 343
  var call953 = callmethod(var_meth,"value", [0]);
  var opresult955 = callmethod(string952, "++", [1], call953);
  var string956 = new GraceString("\"");
  var opresult958 = callmethod(opresult955, "++", [1], string956);
  return opresult958;
};
  lineNumber = 344
  var call959 = callmethod(this,"map()with", [1, 1], call950, block951);
  var string960 = new GraceString(", ");
  lineNumber = 345
  var call961 = callmethod(this,"join()separatedBy", [1, 1], call959, string960);
  var opresult963 = callmethod(opresult949, "++", [1], call961);
  lineNumber = 344
  var string964 = new GraceString(")");
  var opresult966 = callmethod(opresult963, "++", [1], string964);
  return opresult966
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func942.paramTypes = [];
func942.paramTypes.push([]);
func942.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileType"] = func942;
  lineNumber = 366
var func967 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 352
  lineNumber = 348
  lineNumber = 1
  lineNumber = 348
  var call968 = callmethod(var_node,"params", [0]);
  lineNumber = 352
  var block969 = Grace_allocObject();
  block969.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block969.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block969.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block969.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block969.receiver = this;
  block969.className = 'block<genjava:352>';
  block969.real = function(
var_param
) {
  lineNumber = 349
  lineNumber = 1
  lineNumber = 349
  var call970 = callmethod(var_param,"value", [0]);
  lineNumber = 351
  var call971 = callmethod(this,"escape", [1], call970);
  var var_name = call971;
  lineNumber = 352
  lineNumber = 351
  var call972 = callmethod(var_ast,"astidentifier", [2], var_name, var_nothing);
  lineNumber = 352
  var string973 = new GraceString("_");
  var opresult975 = callmethod(string973, "++", [1], var_name);
  var string976 = new GraceString("");
  var opresult978 = callmethod(opresult975, "++", [1], string976);
  var call979 = callmethod(var_ast,"astidentifier", [2], opresult978, var_nothing);
  lineNumber = 351
  var call980 = callmethod(var_ast,"astvardec", [3], call972, call979, var_nothing);
  return call980;
};
  lineNumber = 355
  var call981 = callmethod(this,"map()with", [1, 1], call968, block969);
  var var_body = call981;
  lineNumber = 359
  lineNumber = 355
  lineNumber = 362
  lineNumber = 1
  lineNumber = 355
  var call983 = callmethod(var_node,"kind", [0]);
  var string984 = new GraceString("method");
  var opresult986 = callmethod(call983, "==", [1], string984);
  var block987 = Grace_allocObject();
  block987.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block987.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block987.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block987.receiver = this;
  block987.className = 'block<genjava:355>';
  block987.real = function(
) {
  lineNumber = 1
  lineNumber = 355
  var call988 = callmethod(var_node,"varargs", [0]);
  return call988;
};
  var opresult990 = callmethod(opresult986, "&&", [1], block987);
  if (Grace_isTrue(opresult990)) {
  lineNumber = 356
  lineNumber = 1
  lineNumber = 356
  lineNumber = 1
  lineNumber = 356
  var call991 = callmethod(var_node,"vararg", [0]);
  var call992 = callmethod(call991,"value", [0]);
  lineNumber = 358
  var call993 = callmethod(this,"escape", [1], call992);
  var var_name = call993;
  lineNumber = 359
  lineNumber = 358
  var call994 = callmethod(var_ast,"astidentifier", [2], var_name, var_nothing);
  lineNumber = 359
  var string996 = new GraceString("_");
  var call997 = callmethod(var_ast,"astidentifier", [2], string996, var_nothing);
  var array995 = new GraceList([
call997,
]);

  var call998 = callmethod(var_ast,"astarray", [1], array995);
  lineNumber = 358
  var call999 = callmethod(var_ast,"astvardec", [3], call994, call998, var_nothing);
  var call1000 = callmethod(var_body,"push", [1], call999);
  var if982 = call1000;
}
  lineNumber = 363
  lineNumber = 362
  lineNumber = 1
  lineNumber = 362
  var call1001 = callmethod(var_node,"body", [0]);
  lineNumber = 363
  var block1002 = Grace_allocObject();
  block1002.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1002.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1002.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1002.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1002.receiver = this;
  block1002.className = 'block<genjava:363>';
  block1002.real = function(
var_node__39__
) {
  var call1003 = callmethod(var_body,"push", [1], var_node__39__);
  return call1003;
};
  var call1004 = callmethod(Grace_prelude,"for()do", [1, 1], call1001, block1002);
  lineNumber = 366
  lineNumber = 367
  var call1005 = callmethod(this,"compileClosure", [2], var_body, var_scope);
  return call1005
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func967.paramTypes = [];
func967.paramTypes.push([]);
func967.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileParamClosure"] = func967;
  lineNumber = 376
var func1006 = function(argcv) {
  var curarg = 1;
  var var_body = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 370
  var string1007 = new GraceString("new ");
  var opresult1009 = callmethod(string1007, "++", [1], var_obj);
  var string1010 = new GraceString("($self, $closure) {");
  var opresult1012 = callmethod(opresult1009, "++", [1], string1010);
  lineNumber = 375
  var block1013 = Grace_allocObject();
  block1013.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1013.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1013.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1013.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1013.receiver = this;
  block1013.className = 'block<genjava:375>';
  block1013.real = function(
var_scope__39__
) {
  lineNumber = 372
  lineNumber = 371
  var string1014 = new GraceString("final ");
  var opresult1016 = callmethod(string1014, "++", [1], var_obj);
  var string1017 = new GraceString(" $closure = this");
  var opresult1019 = callmethod(opresult1016, "++", [1], string1017);
  var call1020 = callmethod(var_scope__39__,"line", [1], opresult1019);
  lineNumber = 372
  lineNumber = 371
  var call1021 = callmethod(this,"compileDeclarations", [2], var_body, var_scope__39__);
  var opresult1023 = callmethod(call1020, "++", [1], call1021);
  lineNumber = 375
  lineNumber = 373
  var string1024 = new GraceString("");
  var opresult1026 = callmethod(string1024, "++", [1], var_obj);
  var string1027 = new GraceString(" execute() {");
  var opresult1029 = callmethod(opresult1026, "++", [1], string1027);
  lineNumber = 374
  var block1030 = Grace_allocObject();
  block1030.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1030.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1030.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1030.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1030.receiver = this;
  block1030.className = 'block<genjava:374>';
  block1030.real = function(
var_scope__39____39__
) {
  var call1031 = callmethod(this,"forceReturn", [1], var_body);
  var call1032 = callmethod(this,"compileExecution", [2], call1031, var_scope__39____39__);
  lineNumber = 375
  var call1033 = callmethod(this,"join", [1], call1032);
  return call1033;
};
  var string1034 = new GraceString("}");
  lineNumber = 373
  var call1035 = callmethod(var_scope__39__,"stbl", [3], opresult1029, block1030, string1034);
  var opresult1037 = callmethod(opresult1023, "++", [1], call1035);
  return opresult1037;
};
  lineNumber = 376
  var string1038 = new GraceString("}.execute()");
  lineNumber = 370
  var call1039 = callmethod(var_scope,"block", [3], opresult1012, block1013, string1038);
  return call1039
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1006.paramTypes = [];
func1006.paramTypes.push([]);
func1006.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileClosure"] = func1006;
  lineNumber = 391
var func1040 = function(argcv) {
  var curarg = 1;
  var var_body = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 382
  lineNumber = 385
  lineNumber = 1
  lineNumber = 381
  var call1042 = callmethod(var_body,"size", [0]);
  var opresult1044 = callmethod(call1042, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1044)) {
  lineNumber = 382
  var string1046 = new GraceString("nothing");
  var call1047 = callmethod(this,"literal", [1], string1046);
  var call1048 = callmethod(this,"generateReturn", [1], call1047);
  var array1045 = new GraceList([
call1048,
]);

  return array1045
  var if1041 = undefined;
}
  lineNumber = 387
  lineNumber = 385
  lineNumber = 387
  lineNumber = 1
  lineNumber = 385
  var call1049 = callmethod(var_body,"size", [0]);
  var idxres1050 = var_body.methods["[]"].call(var_body, [1], call1049);
  var var_last = idxres1050;
  lineNumber = 388
  lineNumber = 391
  lineNumber = 1
  lineNumber = 387
  var call1052 = callmethod(var_last,"kind", [0]);
  var string1053 = new GraceString("return");
  var opresult1055 = callmethod(call1052, "/=", [1], string1053);
  if (Grace_isTrue(opresult1055)) {
  lineNumber = 388
  lineNumber = 1
  lineNumber = 389
  lineNumber = 1
  lineNumber = 388
  var call1056 = callmethod(var_body,"size", [0]);
  lineNumber = 389
  var call1057 = callmethod(this,"generateReturn", [1], var_last);
  lineNumber = 388
  var call1058 = callmethod(var_body,"[]:=", [2], call1056, call1057);
  var if1051 = call1058;
}
  lineNumber = 391
  return var_body
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1040.paramTypes = [];
func1040.paramTypes.push([]);
  this.methods["forceReturn"] = func1040;
  lineNumber = 397
var func1059 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 395
  var call1060 = callmethod(var_ast,"astreturn", [1], var_node);
  var_node = call1060;
  lineNumber = 397
  lineNumber = 1
  lineNumber = 396
  var string1061 = new GraceString("generated");
  var call1062 = callmethod(var_node,"register:=", [1], string1061);
  lineNumber = 397
  return var_node
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["generateReturn"] = func1059;
  lineNumber = 405
var func1063 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 407
  lineNumber = 1
  lineNumber = 402
  var call1065 = callmethod(var_node,"register", [0]);
  var string1066 = new GraceString("generated");
  var opresult1068 = callmethod(call1065, "==", [1], string1066);
  if (Grace_isTrue(opresult1068)) {
  lineNumber = 403
  var string1069 = new GraceString("return ");
  lineNumber = 1
  lineNumber = 403
  var call1070 = callmethod(var_node,"value", [0]);
  var call1071 = callmethod(this,"compileExpression", [2], call1070, var_scope);
  var opresult1073 = callmethod(string1069, "++", [1], call1071);
  var string1074 = new GraceString("");
  var opresult1076 = callmethod(opresult1073, "++", [1], string1074);
  var if1064 = opresult1076;
  } else {
  lineNumber = 405
  var string1077 = new GraceString("throw new $Return(");
  lineNumber = 1
  lineNumber = 405
  var call1078 = callmethod(var_node,"value", [0]);
  var call1079 = callmethod(this,"compileExpression", [2], call1078, var_scope);
  var opresult1081 = callmethod(string1077, "++", [1], call1079);
  var string1082 = new GraceString(")");
  var opresult1084 = callmethod(opresult1081, "++", [1], string1082);
  var if1064 = opresult1084;
}
  return if1064
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1063.paramTypes = [];
func1063.paramTypes.push([]);
func1063.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileReturn"] = func1063;
  lineNumber = 413
var func1085 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 410
  lineNumber = 411
  var call1086 = callmethod(this,"compileFieldName", [1], var_node);
  var var_name = call1086;
  lineNumber = 1
  lineNumber = 411
  var call1087 = callmethod(var_node,"value", [0]);
  lineNumber = 413
  var call1088 = callmethod(this,"compileExpression", [2], call1087, var_scope);
  var var_value = call1088;
  var string1089 = new GraceString("");
  var opresult1091 = callmethod(string1089, "++", [1], var_name);
  var string1092 = new GraceString(" = ");
  var opresult1094 = callmethod(opresult1091, "++", [1], string1092);
  var opresult1096 = callmethod(opresult1094, "++", [1], var_value);
  var string1097 = new GraceString("");
  var opresult1099 = callmethod(opresult1096, "++", [1], string1097);
  return opresult1099
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1085.paramTypes = [];
func1085.paramTypes.push([]);
func1085.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileBindDecl"] = func1085;
  lineNumber = 433
var func1100 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 418
  lineNumber = 1
  lineNumber = 417
  var call1101 = callmethod(var_node,"dest", [0]);
  var var_dest = call1101;
  lineNumber = 418
  lineNumber = 1
  lineNumber = 418
  var call1102 = callmethod(var_node,"value", [0]);
  lineNumber = 420
  var call1103 = callmethod(this,"compileExpression", [2], call1102, var_scope);
  var var_value = call1103;
  lineNumber = 433
  lineNumber = 435
  lineNumber = 1
  lineNumber = 420
  var call1105 = callmethod(var_dest,"kind", [0]);
  var string1106 = new GraceString("member");
  var opresult1108 = callmethod(call1105, "==", [1], string1106);
  if (Grace_isTrue(opresult1108)) {
  lineNumber = 422
  lineNumber = 1
  lineNumber = 421
  var call1109 = callmethod(var_dest,"value", [0]);
  var var_name = call1109;
  lineNumber = 422
  lineNumber = 1
  lineNumber = 422
  var call1110 = callmethod(var_dest,"in", [0]);
  lineNumber = 424
  var call1111 = callmethod(this,"compileExpression", [2], call1110, var_scope);
  var var_on = call1111;
  var string1112 = new GraceString("");
  var opresult1114 = callmethod(string1112, "++", [1], var_on);
  var string1115 = new GraceString(".invoke(\"");
  var opresult1117 = callmethod(opresult1114, "++", [1], string1115);
  var opresult1119 = callmethod(opresult1117, "++", [1], var_name);
  var string1120 = new GraceString(":=\", ");
  var opresult1122 = callmethod(opresult1119, "++", [1], string1120);
  var opresult1124 = callmethod(opresult1122, "++", [1], var_value);
  var string1125 = new GraceString(")");
  var opresult1127 = callmethod(opresult1124, "++", [1], string1125);
  var if1104 = opresult1127;
  } else {
  lineNumber = 433
  lineNumber = 430
  lineNumber = 1
  lineNumber = 425
  var call1129 = callmethod(var_dest,"kind", [0]);
  var string1130 = new GraceString("index");
  var opresult1132 = callmethod(call1129, "==", [1], string1130);
  if (Grace_isTrue(opresult1132)) {
  lineNumber = 426
  lineNumber = 1
  lineNumber = 426
  var call1133 = callmethod(var_dest,"value", [0]);
  lineNumber = 427
  var call1134 = callmethod(this,"compileExpression", [2], call1133, var_scope);
  var var_on = call1134;
  lineNumber = 1
  lineNumber = 427
  var call1135 = callmethod(var_dest,"index", [0]);
  lineNumber = 429
  var call1136 = callmethod(this,"compileExpression", [2], call1135, var_scope);
  var var_in = call1136;
  var string1137 = new GraceString("");
  var opresult1139 = callmethod(string1137, "++", [1], var_on);
  var string1140 = new GraceString(".invoke(\"[]:=\", ");
  var opresult1142 = callmethod(opresult1139, "++", [1], string1140);
  var opresult1144 = callmethod(opresult1142, "++", [1], var_in);
  var string1145 = new GraceString(", ");
  var opresult1147 = callmethod(opresult1144, "++", [1], string1145);
  var opresult1149 = callmethod(opresult1147, "++", [1], var_value);
  var string1150 = new GraceString(")");
  var opresult1152 = callmethod(opresult1149, "++", [1], string1150);
  var if1128 = opresult1152;
  } else {
  lineNumber = 431
  lineNumber = 433
  var call1153 = callmethod(this,"compileExpression", [2], var_dest, var_scope);
  var var_name = call1153;
  var string1154 = new GraceString("");
  var opresult1156 = callmethod(string1154, "++", [1], var_name);
  var string1157 = new GraceString(" = ");
  var opresult1159 = callmethod(opresult1156, "++", [1], string1157);
  var opresult1161 = callmethod(opresult1159, "++", [1], var_value);
  var string1162 = new GraceString("");
  var opresult1164 = callmethod(opresult1161, "++", [1], string1162);
  var if1128 = opresult1164;
}
  var if1104 = if1128;
}
  return if1104
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1100.paramTypes = [];
func1100.paramTypes.push([]);
func1100.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileBind"] = func1100;
  lineNumber = 449
var func1165 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 438
  lineNumber = 1
  lineNumber = 438
  var call1166 = callmethod(var_node,"value", [0]);
  lineNumber = 440
  var call1167 = callmethod(this,"compileExpression", [2], call1166, var_scope);
  var var_condition = call1167;
  lineNumber = 449
  lineNumber = 440
  var string1168 = new GraceString("if (");
  var opresult1170 = callmethod(string1168, "++", [1], var_bln);
  var string1171 = new GraceString("(");
  var opresult1173 = callmethod(opresult1170, "++", [1], string1171);
  var opresult1175 = callmethod(opresult1173, "++", [1], var_condition);
  var string1176 = new GraceString(")) {");
  var opresult1178 = callmethod(opresult1175, "++", [1], string1176);
  lineNumber = 441
  var block1179 = Grace_allocObject();
  block1179.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1179.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1179.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1179.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1179.receiver = this;
  block1179.className = 'block<genjava:441>';
  block1179.real = function(
var_scope__39__
) {
  lineNumber = 1
  lineNumber = 441
  var call1180 = callmethod(var_node,"thenblock", [0]);
  lineNumber = 442
  var call1181 = callmethod(this,"compileExecution", [2], call1180, var_scope__39__);
  return call1181;
};
  lineNumber = 449
  lineNumber = 442
  var string1182 = new GraceString("}");
  lineNumber = 449
  lineNumber = 442
  lineNumber = 1
  lineNumber = 442
  lineNumber = 1
  lineNumber = 442
  var call1183 = callmethod(var_node,"elseblock", [0]);
  var call1184 = callmethod(call1183,"size", [0]);
  var opresult1186 = callmethod(call1184, ">", [1], new GraceNum(0));
  lineNumber = 449
  var block1187 = Grace_allocObject();
  block1187.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1187.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1187.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1187.receiver = this;
  block1187.className = 'block<genjava:449>';
  block1187.real = function(
) {
  lineNumber = 451
  lineNumber = 1
  lineNumber = 451
  lineNumber = 1
  lineNumber = 443
  var call1189 = callmethod(var_node,"elseblock", [0]);
  var call1190 = callmethod(call1189,"size", [0]);
  var opresult1192 = callmethod(call1190, "==", [1], new GraceNum(1));
  lineNumber = 451
  lineNumber = 1
  lineNumber = 451
  lineNumber = 1
  lineNumber = 444
  var call1193 = callmethod(var_node,"elseblock", [0]);
  var idxres1194 = call1193.methods["[]"].call(call1193, [1], new GraceNum(1));
  var call1195 = callmethod(idxres1194,"kind", [0]);
  var string1196 = new GraceString("if");
  var opresult1198 = callmethod(call1195, "==", [1], string1196);
  var opresult1200 = callmethod(opresult1192, "&", [1], opresult1198);
  if (Grace_isTrue(opresult1200)) {
  lineNumber = 445
  var string1201 = new GraceString(" else ");
  lineNumber = 1
  lineNumber = 445
  var call1202 = callmethod(var_node,"elseblock", [0]);
  var idxres1203 = call1202.methods["[]"].call(call1202, [1], new GraceNum(1));
  lineNumber = 446
  var call1204 = callmethod(this,"compileIf", [2], idxres1203, var_scope);
  var opresult1206 = callmethod(string1201, "++", [1], call1204);
  var if1188 = opresult1206;
  } else {
  lineNumber = 449
  lineNumber = 447
  var string1207 = new GraceString(" else {");
  lineNumber = 448
  var block1208 = Grace_allocObject();
  block1208.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1208.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1208.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1208.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1208.receiver = this;
  block1208.className = 'block<genjava:448>';
  block1208.real = function(
var_scope__39__
) {
  lineNumber = 1
  lineNumber = 448
  var call1209 = callmethod(var_node,"elseblock", [0]);
  lineNumber = 449
  var call1210 = callmethod(this,"compileExecution", [2], call1209, var_scope__39__);
  return call1210;
};
  var string1211 = new GraceString("}");
  lineNumber = 447
  var call1212 = callmethod(var_scope,"block", [3], string1207, block1208, string1211);
  var if1188 = call1212;
}
  return if1188;
};
  lineNumber = 451
  var call1213 = callmethod(this,"strIf()then", [1, 1], opresult1186, block1187);
  var opresult1215 = callmethod(string1182, "++", [1], call1213);
  lineNumber = 440
  var call1216 = callmethod(var_scope,"block", [3], opresult1178, block1179, opresult1215);
  return call1216
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1165.paramTypes = [];
func1165.paramTypes.push([]);
func1165.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileIf"] = func1165;
  lineNumber = 459
var func1217 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 455
  lineNumber = 1
  lineNumber = 455
  var call1218 = callmethod(var_node,"value", [0]);
  lineNumber = 456
  var call1219 = callmethod(this,"compileExpression", [2], call1218, var_scope);
  var var_condition = call1219;
  lineNumber = 1
  lineNumber = 456
  var call1220 = callmethod(var_node,"thenblock", [0]);
  lineNumber = 457
  var call1221 = callmethod(this,"compileBlockExpression", [2], call1220, var_scope);
  var var_then = call1221;
  lineNumber = 1
  lineNumber = 457
  var call1222 = callmethod(var_node,"elseblock", [0]);
  lineNumber = 459
  var call1223 = callmethod(this,"compileBlockExpression", [2], call1222, var_scope);
  var var_else = call1223;
  var string1224 = new GraceString("(");
  var opresult1226 = callmethod(string1224, "++", [1], var_bln);
  var string1227 = new GraceString("(");
  var opresult1229 = callmethod(opresult1226, "++", [1], string1227);
  var opresult1231 = callmethod(opresult1229, "++", [1], var_condition);
  var string1232 = new GraceString(") ? ");
  var opresult1234 = callmethod(opresult1231, "++", [1], string1232);
  var opresult1236 = callmethod(opresult1234, "++", [1], var_then);
  var string1237 = new GraceString(" : ");
  var opresult1239 = callmethod(opresult1236, "++", [1], string1237);
  var opresult1241 = callmethod(opresult1239, "++", [1], var_else);
  var string1242 = new GraceString(")");
  var opresult1244 = callmethod(opresult1241, "++", [1], string1242);
  return opresult1244
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1217.paramTypes = [];
func1217.paramTypes.push([]);
func1217.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileTernary"] = func1217;
  lineNumber = 479
var func1245 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 481
  lineNumber = 1
  lineNumber = 463
  var call1247 = callmethod(var_node,"value", [0]);
  var string1248 = new GraceString("outer");
  var opresult1250 = callmethod(call1247, "==", [1], string1248);
  if (Grace_isTrue(opresult1250)) {
  lineNumber = 476
  lineNumber = 466
  lineNumber = 478
  lineNumber = 1
  lineNumber = 478
  lineNumber = 1
  lineNumber = 464
  var call1252 = callmethod(var_node,"in", [0]);
  var call1253 = callmethod(call1252,"kind", [0]);
  var string1254 = new GraceString("identifier");
  var opresult1256 = callmethod(call1253, "==", [1], string1254);
  lineNumber = 466
  var block1257 = Grace_allocObject();
  block1257.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1257.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1257.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1257.receiver = this;
  block1257.className = 'block<genjava:466>';
  block1257.real = function(
) {
  lineNumber = 1
  lineNumber = 466
  lineNumber = 1
  lineNumber = 465
  var call1258 = callmethod(var_node,"in", [0]);
  var call1259 = callmethod(call1258,"value", [0]);
  var string1260 = new GraceString("self");
  var opresult1262 = callmethod(call1259, "==", [1], string1260);
  return opresult1262;
};
  var opresult1264 = callmethod(opresult1256, "&&", [1], block1257);
  if (Grace_isTrue(opresult1264)) {
  lineNumber = 474
  var string1265 = new GraceString("$self.outer");
  var if1251 = string1265;
  } else {
  lineNumber = 476
  var string1266 = new GraceString("");
  lineNumber = 1
  lineNumber = 476
  var call1267 = callmethod(var_node,"in", [0]);
  var call1268 = callmethod(this,"compileExpression", [2], call1267, var_scope);
  var opresult1270 = callmethod(string1266, "++", [1], call1268);
  var string1271 = new GraceString(".outer");
  var opresult1273 = callmethod(opresult1270, "++", [1], string1271);
  var if1251 = opresult1273;
}
  var if1246 = if1251;
  } else {
  lineNumber = 479
  var array1274 = new GraceList([
]);

  var call1275 = callmethod(var_ast,"astcall", [2], var_node, array1274);
  lineNumber = 480
  var call1276 = callmethod(this,"compileCall", [2], call1275, var_scope);
  var if1246 = call1276;
}
  return if1246
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1245.paramTypes = [];
func1245.paramTypes.push([]);
func1245.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileMember"] = func1245;
  lineNumber = 495
var func1277 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 484
  lineNumber = 1
  lineNumber = 484
  lineNumber = 1
  lineNumber = 484
  var call1278 = callmethod(var_node,"value", [0]);
  var call1279 = callmethod(call1278,"value", [0]);
  lineNumber = 485
  var call1280 = callmethod(this,"escape", [1], call1279);
  var var_name = call1280;
  lineNumber = 1
  lineNumber = 485
  var call1281 = callmethod(var_node,"with", [0]);
  var block1282 = Grace_allocObject();
  block1282.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1282.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1282.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1282.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1282.receiver = this;
  block1282.className = 'block<genjava:485>';
  block1282.real = function(
var_a
) {
  var call1283 = callmethod(this,"compileExpression", [2], var_a, var_scope);
  return call1283;
};
  lineNumber = 486
  var call1284 = callmethod(this,"map()with", [1, 1], call1281, block1282);
  var var_args = call1284;
  lineNumber = 1
  lineNumber = 486
  var call1285 = callmethod(var_args,"size", [0]);
  var opresult1287 = callmethod(call1285, ">", [1], new GraceNum(0));
  var string1288 = new GraceString(", ");
  lineNumber = 487
  var call1289 = callmethod(this,"strIf()then", [1, 1], opresult1287, string1288);
  var var_comma = call1289;
  var string1290 = new GraceString(", ");
  lineNumber = 488
  var call1291 = callmethod(this,"join()separatedBy", [1, 1], var_args, string1290);
  var var_rest = call1291;
  lineNumber = 490
  lineNumber = 1
  lineNumber = 490
  lineNumber = 1
  lineNumber = 488
  var call1292 = callmethod(var_node,"value", [0]);
  var call1293 = callmethod(call1292,"kind", [0]);
  var string1294 = new GraceString("member");
  var opresult1296 = callmethod(call1293, "/=", [1], string1294);
  lineNumber = 490
  lineNumber = 488
  var string1297 = new GraceString("print");
  var opresult1299 = callmethod(var_name, "==", [1], string1297);
  var opresult1301 = callmethod(opresult1296, "|", [1], opresult1299);
  var var_direct = opresult1301;
  lineNumber = 495
  lineNumber = 490
  if (Grace_isTrue(var_direct)) {
  lineNumber = 491
  var string1303 = new GraceString("");
  var opresult1305 = callmethod(string1303, "++", [1], var_name);
  var string1306 = new GraceString("(self");
  var opresult1308 = callmethod(opresult1305, "++", [1], string1306);
  var opresult1310 = callmethod(opresult1308, "++", [1], var_comma);
  var string1311 = new GraceString("");
  var opresult1313 = callmethod(opresult1310, "++", [1], string1311);
  var opresult1315 = callmethod(opresult1313, "++", [1], var_rest);
  var string1316 = new GraceString(")");
  var opresult1318 = callmethod(opresult1315, "++", [1], string1316);
  var if1302 = opresult1318;
  } else {
  lineNumber = 493
  lineNumber = 1
  lineNumber = 493
  lineNumber = 1
  lineNumber = 493
  var call1319 = callmethod(var_node,"value", [0]);
  var call1320 = callmethod(call1319,"in", [0]);
  lineNumber = 495
  var call1321 = callmethod(this,"compileExpression", [2], call1320, var_scope);
  var var_in = call1321;
  var string1322 = new GraceString("");
  var opresult1324 = callmethod(string1322, "++", [1], var_in);
  var string1325 = new GraceString(".invoke(\"");
  var opresult1327 = callmethod(opresult1324, "++", [1], string1325);
  var opresult1329 = callmethod(opresult1327, "++", [1], var_name);
  var string1330 = new GraceString("\"");
  var opresult1332 = callmethod(opresult1329, "++", [1], string1330);
  var opresult1334 = callmethod(opresult1332, "++", [1], var_comma);
  var string1335 = new GraceString("");
  var opresult1337 = callmethod(opresult1334, "++", [1], string1335);
  var opresult1339 = callmethod(opresult1337, "++", [1], var_rest);
  var string1340 = new GraceString(")");
  var opresult1342 = callmethod(opresult1339, "++", [1], string1340);
  var if1302 = opresult1342;
}
  return if1302
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1277.paramTypes = [];
func1277.paramTypes.push([]);
func1277.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileCall"] = func1277;
  lineNumber = 513
var func1343 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 503
  lineNumber = 504
  lineNumber = 1
  lineNumber = 504
  lineNumber = 1
  lineNumber = 500
  var call1345 = callmethod(var_node,"name", [0]);
  var call1346 = callmethod(call1345,"kind", [0]);
  var string1347 = new GraceString("generic");
  var opresult1349 = callmethod(call1346, "==", [1], string1347);
  if (Grace_isTrue(opresult1349)) {
  lineNumber = 501
  lineNumber = 1
  lineNumber = 501
  lineNumber = 1
  lineNumber = 501
  lineNumber = 1
  lineNumber = 501
  var call1350 = callmethod(var_node,"name", [0]);
  var call1351 = callmethod(call1350,"value", [0]);
  var call1352 = callmethod(call1351,"value", [0]);
  var if1344 = call1352;
  } else {
  lineNumber = 503
  lineNumber = 1
  lineNumber = 503
  lineNumber = 1
  lineNumber = 503
  var call1353 = callmethod(var_node,"name", [0]);
  var call1354 = callmethod(call1353,"value", [0]);
  var if1344 = call1354;
}
  lineNumber = 506
  var call1355 = callmethod(this,"escape", [1], if1344);
  var var_name = call1355;
  lineNumber = 1
  lineNumber = 506
  var call1357 = callmethod(var_node,"value", [0]);
  var call1358 = callmethod(var_ast,"astobject", [2], call1357, var_nothing);
  var array1356 = new GraceList([
call1358,
]);

  var var_body = array1356;
  lineNumber = 507
  lineNumber = 1
  lineNumber = 507
  var call1359 = callmethod(var_node,"constructor", [0]);
  lineNumber = 1
  lineNumber = 507
  var call1360 = callmethod(var_node,"params", [0]);
  var call1361 = callmethod(var_ast,"astmethod", [4], call1359, call1360, var_body, var_nothing);
  var var_meth = call1361;
  lineNumber = 513
  lineNumber = 509
  var string1362 = new GraceString("");
  var opresult1364 = callmethod(string1362, "++", [1], var_name);
  var string1365 = new GraceString(" = new ");
  var opresult1367 = callmethod(opresult1364, "++", [1], string1365);
  var opresult1369 = callmethod(opresult1367, "++", [1], var_obj);
  var string1370 = new GraceString("($self, $closure) {");
  var opresult1372 = callmethod(opresult1369, "++", [1], string1370);
  lineNumber = 512
  var block1373 = Grace_allocObject();
  block1373.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1373.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1373.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1373.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1373.receiver = this;
  block1373.className = 'block<genjava:512>';
  block1373.real = function(
var_s__39__
) {
  lineNumber = 511
  var string1374 = new GraceString("private final ");
  var opresult1376 = callmethod(string1374, "++", [1], var_obj);
  var string1377 = new GraceString(" $self = this");
  var opresult1379 = callmethod(opresult1376, "++", [1], string1377);
  var call1380 = callmethod(var_s__39__,"line", [1], opresult1379);
  lineNumber = 512
  lineNumber = 511
  var call1381 = callmethod(this,"compileMethod", [2], var_meth, var_s__39__);
  var opresult1383 = callmethod(call1380, "++", [1], call1381);
  lineNumber = 512
  var call1384 = callmethod(this,"makeInvoke", [1], var_s__39__);
  var opresult1386 = callmethod(opresult1383, "++", [1], call1384);
  return opresult1386;
};
  lineNumber = 513
  var string1387 = new GraceString("}");
  lineNumber = 509
  var call1388 = callmethod(var_scope,"block", [3], opresult1372, block1373, string1387);
  var call1389 = callmethod(var_scope,"line", [1], call1388);
  return call1389
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1343.paramTypes = [];
func1343.paramTypes.push([]);
func1343.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileClass"] = func1343;
  lineNumber = 517
var func1390 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var string1391 = new GraceString("self.inherits(");
  lineNumber = 1
  lineNumber = 517
  var call1392 = callmethod(var_node,"value", [0]);
  var call1393 = callmethod(this,"compileExpression", [2], call1392, var_scope);
  var opresult1395 = callmethod(string1391, "++", [1], call1393);
  var string1396 = new GraceString(")");
  var opresult1398 = callmethod(opresult1395, "++", [1], string1396);
  return opresult1398
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1390.paramTypes = [];
func1390.paramTypes.push([]);
func1390.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileInherits"] = func1390;
  lineNumber = 521
var func1399 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var string1400 = new GraceString("$number(");
  lineNumber = 1
  lineNumber = 521
  var call1401 = callmethod(var_node,"value", [0]);
  var opresult1403 = callmethod(string1400, "++", [1], call1401);
  var string1404 = new GraceString(")");
  var opresult1406 = callmethod(opresult1403, "++", [1], string1404);
  return opresult1406
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1399.paramTypes = [];
func1399.paramTypes.push([]);
func1399.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileNumber"] = func1399;
  lineNumber = 544
var func1407 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 540
  lineNumber = 529
  var string1408 = new GraceString("\u000d");
  var string1409 = new GraceString("\\r");
  lineNumber = 528
  var string1410 = new GraceString("\n");
  var string1411 = new GraceString("\\n");
  lineNumber = 527
  var string1412 = new GraceString("\"");
  var string1413 = new GraceString("\\\"");
  lineNumber = 526
  var string1414 = new GraceString("\\");
  var string1415 = new GraceString("\\\\");
  lineNumber = 529
  lineNumber = 1
  lineNumber = 525
  var call1416 = callmethod(var_node,"value", [0]);
  var call1417 = callmethod(call1416,"replace()with", [1, 1], string1414, string1415);
  var call1418 = callmethod(call1417,"replace()with", [1, 1], string1412, string1413);
  var call1419 = callmethod(call1418,"replace()with", [1, 1], string1410, string1411);
  var call1420 = callmethod(call1419,"replace()with", [1, 1], string1408, string1409);
  lineNumber = 540
  var block1421 = Grace_allocObject();
  block1421.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1421.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1421.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1421.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1421.receiver = this;
  block1421.className = 'block<genjava:540>';
  block1421.real = function(
var_char
) {
  lineNumber = 532
  lineNumber = 1
  lineNumber = 530
  var call1422 = callmethod(var_char,"ord", [0]);
  var var_ord = call1422;
  lineNumber = 540
  lineNumber = 542
  lineNumber = 532
  var opresult1425 = callmethod(var_ord, "<", [1], new GraceNum(31));
  lineNumber = 542
  lineNumber = 532
  var opresult1427 = callmethod(var_ord, ">", [1], new GraceNum(126));
  var opresult1429 = callmethod(opresult1425, "|", [1], opresult1427);
  if (Grace_isTrue(opresult1429)) {
  lineNumber = 533
  var call1430 = callmethod(var_util,"hex", [1], var_ord);
  var var_hex = call1430;
  lineNumber = 536
  lineNumber = 534
  var block1431 = Grace_allocObject();
  block1431.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1431.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1431.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1431.receiver = this;
  block1431.className = 'block<genjava:534>';
  block1431.real = function(
) {
  lineNumber = 1
  lineNumber = 534
  var call1432 = callmethod(var_hex,"size", [0]);
  var opresult1434 = callmethod(call1432, "<", [1], new GraceNum(4));
  return opresult1434;
};
  lineNumber = 536
  var block1435 = Grace_allocObject();
  block1435.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1435.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1435.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1435.receiver = this;
  block1435.className = 'block<genjava:536>';
  block1435.real = function(
) {
  lineNumber = 535
  var string1436 = new GraceString("0");
  var opresult1438 = callmethod(string1436, "++", [1], var_hex);
  var_hex = opresult1438;
  return opresult1438;
};
  var call1439 = callmethod(Grace_prelude,"while()do", [1, 1], block1431, block1435);
  lineNumber = 539
  lineNumber = 538
  var string1440 = new GraceString("\\u");
  var opresult1442 = callmethod(string1440, "++", [1], var_hex);
  var if1423 = opresult1442;
  } else {
  lineNumber = 540
  var if1423 = var_char;
}
  return if1423;
};
  lineNumber = 542
  var call1443 = callmethod(this,"map()with", [1, 1], call1420, block1421);
  lineNumber = 544
  var call1444 = callmethod(this,"join", [1], call1443);
  var var_value = call1444;
  var string1445 = new GraceString("$string(\"");
  var opresult1447 = callmethod(string1445, "++", [1], var_value);
  var string1448 = new GraceString("\")");
  var opresult1450 = callmethod(opresult1447, "++", [1], string1448);
  return opresult1450
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1407.paramTypes = [];
func1407.paramTypes.push([]);
func1407.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileString"] = func1407;
  lineNumber = 552
var func1451 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj1452 = Grace_allocObject();
  obj1452.outer = this;
    var reader_genjava_outer1453 = function() {
    return this.outer;
  }
  obj1452.methods["outer"] = reader_genjava_outer1453;
function obj_init_1452() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 549
  var string1454 = new GraceString("member");
  obj1452.data["kind"] = string1454;
    var reader_genjava_kind1455 = function() {
    return this.data["kind"];
  }
  reader_genjava_kind1455.def = true;
  obj1452.methods["kind"] = reader_genjava_kind1455;
  lineNumber = 550
  var string1456 = new GraceString("[]");
  obj1452.data["value"] = string1456;
    var reader_genjava_value1457 = function() {
    return this.data["value"];
  }
  reader_genjava_value1457.def = true;
  obj1452.methods["value"] = reader_genjava_value1457;
  lineNumber = 552
  lineNumber = 1
  lineNumber = 551
  var call1458 = callmethod(var_node,"value", [0]);
  obj1452.data["in"] = call1458;
    var reader_genjava_in1459 = function() {
    return this.data["in"];
  }
  reader_genjava_in1459.def = true;
  obj1452.methods["in"] = reader_genjava_in1459;
  superDepth = origSuperDepth;
}
obj_init_1452.apply(obj1452, []);
  lineNumber = 552
  lineNumber = 1
  lineNumber = 552
  var call1461 = callmethod(var_node,"index", [0]);
  var array1460 = new GraceList([
call1461,
]);

  lineNumber = 548
  var call1462 = callmethod(var_ast,"astcall", [2], obj1452, array1460);
  lineNumber = 552
  lineNumber = 553
  var call1463 = callmethod(this,"compileCall", [2], call1462, var_scope);
  return call1463
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1451.paramTypes = [];
func1451.paramTypes.push([]);
func1451.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileIndex"] = func1451;
  lineNumber = 559
var func1464 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 556
  lineNumber = 1
  lineNumber = 556
  var call1465 = callmethod(var_node,"left", [0]);
  lineNumber = 557
  var call1466 = callmethod(this,"compileExpression", [2], call1465, var_scope);
  var var_left = call1466;
  lineNumber = 1
  lineNumber = 557
  var call1467 = callmethod(var_node,"right", [0]);
  lineNumber = 559
  var call1468 = callmethod(this,"compileExpression", [2], call1467, var_scope);
  var var_right = call1468;
  var string1469 = new GraceString("");
  var opresult1471 = callmethod(string1469, "++", [1], var_left);
  var string1472 = new GraceString(".binop(\"");
  var opresult1474 = callmethod(opresult1471, "++", [1], string1472);
  lineNumber = 1
  lineNumber = 559
  var call1475 = callmethod(var_node,"value", [0]);
  var opresult1477 = callmethod(opresult1474, "++", [1], call1475);
  var string1478 = new GraceString("\", ");
  var opresult1480 = callmethod(opresult1477, "++", [1], string1478);
  var opresult1482 = callmethod(opresult1480, "++", [1], var_right);
  var string1483 = new GraceString(")");
  var opresult1485 = callmethod(opresult1482, "++", [1], string1483);
  return opresult1485
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1464.paramTypes = [];
func1464.paramTypes.push([]);
func1464.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileOp"] = func1464;
  lineNumber = 581
var func1486 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 563
  lineNumber = 1
  lineNumber = 563
  var call1487 = callmethod(var_node,"body", [0]);
  lineNumber = 564
  var call1488 = callmethod(this,"forceReturn", [1], call1487);
  var var_body = call1488;
  lineNumber = 1
  lineNumber = 564
  var call1489 = callmethod(var_node,"params", [0]);
  var block1490 = Grace_allocObject();
  block1490.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1490.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1490.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1490.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1490.receiver = this;
  block1490.className = 'block<genjava:564>';
  block1490.real = function(
var_param
) {
  lineNumber = 1
  lineNumber = 564
  var call1491 = callmethod(var_param,"value", [0]);
  var call1492 = callmethod(this,"escape", [1], call1491);
  return call1492;
};
  lineNumber = 566
  var call1493 = callmethod(this,"map()with", [1, 1], call1489, block1490);
  var var_params = call1493;
  lineNumber = 581
  lineNumber = 566
  var string1494 = new GraceString("new ");
  var opresult1496 = callmethod(string1494, "++", [1], var_blk);
  var string1497 = new GraceString("(");
  var opresult1499 = callmethod(opresult1496, "++", [1], string1497);
  lineNumber = 1
  lineNumber = 566
  var call1500 = callmethod(var_params,"size", [0]);
  var opresult1502 = callmethod(opresult1499, "++", [1], call1500);
  var string1503 = new GraceString(", $self, $closure) {");
  var opresult1505 = callmethod(opresult1502, "++", [1], string1503);
  lineNumber = 580
  var block1506 = Grace_allocObject();
  block1506.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1506.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1506.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1506.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1506.receiver = this;
  block1506.className = 'block<genjava:580>';
  block1506.real = function(
var_scope__39__
) {
  lineNumber = 574
  lineNumber = 568
  lineNumber = 567
  var block1507 = Grace_allocObject();
  block1507.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1507.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1507.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1507.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1507.receiver = this;
  block1507.className = 'block<genjava:567>';
  block1507.real = function(
var_param
) {
  var string1508 = new GraceString("");
  var opresult1510 = callmethod(string1508, "++", [1], var_obj);
  var string1511 = new GraceString(" ");
  var opresult1513 = callmethod(opresult1510, "++", [1], string1511);
  var opresult1515 = callmethod(opresult1513, "++", [1], var_param);
  var string1516 = new GraceString("");
  var opresult1518 = callmethod(opresult1515, "++", [1], string1516);
  var call1519 = callmethod(var_scope__39__,"line", [1], opresult1518);
  return call1519;
};
  var call1520 = callmethod(this,"map()with", [1, 1], var_params, block1507);
  lineNumber = 581
  var call1521 = callmethod(this,"join", [1], call1520);
  lineNumber = 568
  lineNumber = 567
  var call1522 = callmethod(this,"compileDeclarations", [2], var_body, var_scope__39__);
  var opresult1524 = callmethod(call1521, "++", [1], call1522);
  lineNumber = 574
  lineNumber = 569
  var bool1525 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 569
  var call1526 = callmethod(var_node,"matchingPattern", [0]);
  var opresult1528 = callmethod(bool1525, "/=", [1], call1526);
  lineNumber = 574
  var block1529 = Grace_allocObject();
  block1529.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1529.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1529.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1529.receiver = this;
  block1529.className = 'block<genjava:574>';
  block1529.real = function(
) {
  lineNumber = 571
  lineNumber = 570
  var string1530 = new GraceString("public ");
  var opresult1532 = callmethod(string1530, "++", [1], var_obj);
  var string1533 = new GraceString(" match");
  var opresult1535 = callmethod(opresult1532, "++", [1], string1533);
  lineNumber = 571
  var string1536 = new GraceString("(");
  var opresult1538 = callmethod(string1536, "++", [1], var_obj);
  var string1539 = new GraceString(" _, ");
  var opresult1541 = callmethod(opresult1538, "++", [1], string1539);
  var opresult1543 = callmethod(opresult1541, "++", [1], var_obj);
  var string1544 = new GraceString("... $args) {");
  var opresult1546 = callmethod(opresult1543, "++", [1], string1544);
  var opresult1548 = callmethod(opresult1535, "++", [1], opresult1546);
  lineNumber = 573
  var block1549 = Grace_allocObject();
  block1549.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1549.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1549.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1549.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1549.receiver = this;
  block1549.className = 'block<genjava:573>';
  block1549.real = function(
var_scope__39____39__
) {
  lineNumber = 572
  lineNumber = 1
  lineNumber = 572
  var call1550 = callmethod(var_node,"matchingPattern", [0]);
  lineNumber = 573
  var call1551 = callmethod(this,"compileExpression", [2], call1550, var_scope__39____39__);
  var var_patt = call1551;
  var string1552 = new GraceString("return $match(self, ");
  var opresult1554 = callmethod(string1552, "++", [1], var_patt);
  var string1555 = new GraceString(", $args)");
  var opresult1557 = callmethod(opresult1554, "++", [1], string1555);
  var call1558 = callmethod(var_scope__39____39__,"line", [1], opresult1557);
  return call1558;
};
  lineNumber = 574
  var string1559 = new GraceString("}");
  lineNumber = 570
  var call1560 = callmethod(var_scope__39__,"stbl", [3], opresult1548, block1549, string1559);
  return call1560;
};
  lineNumber = 568
  var call1561 = callmethod(this,"strIf()then", [1, 1], opresult1528, block1529);
  var opresult1563 = callmethod(opresult1524, "++", [1], call1561);
  lineNumber = 580
  lineNumber = 576
  lineNumber = 575
  var string1564 = new GraceString("public ");
  var opresult1566 = callmethod(string1564, "++", [1], var_obj);
  var string1567 = new GraceString(" $apply");
  var opresult1569 = callmethod(opresult1566, "++", [1], string1567);
  lineNumber = 576
  var string1570 = new GraceString("(");
  var opresult1572 = callmethod(string1570, "++", [1], var_obj);
  var string1573 = new GraceString(" _, ");
  var opresult1575 = callmethod(opresult1572, "++", [1], string1573);
  var opresult1577 = callmethod(opresult1575, "++", [1], var_obj);
  var string1578 = new GraceString("... $args) {");
  var opresult1580 = callmethod(opresult1577, "++", [1], string1578);
  var opresult1582 = callmethod(opresult1569, "++", [1], opresult1580);
  lineNumber = 579
  var block1583 = Grace_allocObject();
  block1583.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1583.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1583.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1583.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1583.receiver = this;
  block1583.className = 'block<genjava:579>';
  block1583.real = function(
var_scope__39____39__
) {
  lineNumber = 578
  lineNumber = 577
  lineNumber = 578
  var block1584 = Grace_allocObject();
  block1584.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1584.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1584.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1584.receiver = this;
  block1584.className = 'block<genjava:578>';
  block1584.real = function(
var_param
,
var_i
) {
  var string1585 = new GraceString("");
  var opresult1587 = callmethod(string1585, "++", [1], var_param);
  var string1588 = new GraceString(" = $args[");
  var opresult1590 = callmethod(opresult1587, "++", [1], string1588);
  var diff1592 = callmethod(var_i, "-", [1], new GraceNum(1));
  var opresult1594 = callmethod(opresult1590, "++", [1], diff1592);
  var string1595 = new GraceString("]");
  var opresult1597 = callmethod(opresult1594, "++", [1], string1595);
  var call1598 = callmethod(var_scope__39____39__,"line", [1], opresult1597);
  return call1598;
};
  lineNumber = 579
  var call1599 = callmethod(this,"map()with", [1, 1], var_params, block1584);
  lineNumber = 580
  var call1600 = callmethod(this,"join", [1], call1599);
  lineNumber = 579
  lineNumber = 578
  var call1601 = callmethod(this,"compileExecution", [2], var_body, var_scope__39____39__);
  var opresult1603 = callmethod(call1600, "++", [1], call1601);
  return opresult1603;
};
  lineNumber = 580
  var string1604 = new GraceString("}");
  lineNumber = 575
  var call1605 = callmethod(var_scope__39__,"stbl", [3], opresult1582, block1583, string1604);
  var opresult1607 = callmethod(opresult1563, "++", [1], call1605);
  lineNumber = 580
  var call1608 = callmethod(this,"makeInvoke", [1], var_scope__39__);
  var opresult1610 = callmethod(opresult1607, "++", [1], call1608);
  return opresult1610;
};
  lineNumber = 581
  var string1611 = new GraceString("}");
  lineNumber = 566
  var call1612 = callmethod(var_scope,"block", [3], opresult1505, block1506, string1611);
  return call1612
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1486.paramTypes = [];
func1486.paramTypes.push([]);
func1486.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileBlock"] = func1486;
  lineNumber = 589
var func1613 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 587
  lineNumber = 586
  lineNumber = 585
  lineNumber = 1
  lineNumber = 585
  var call1614 = callmethod(var_node,"value", [0]);
  lineNumber = 586
  var block1615 = Grace_allocObject();
  block1615.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1615.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1615.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1615.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1615.receiver = this;
  block1615.className = 'block<genjava:586>';
  block1615.real = function(
var_value
) {
  lineNumber = 587
  var call1616 = callmethod(this,"compileExpression", [2], var_value, var_scope);
  return call1616;
};
  var call1617 = callmethod(this,"map()with", [1, 1], call1614, block1615);
  var string1618 = new GraceString(", ");
  lineNumber = 589
  var call1619 = callmethod(this,"join()separatedBy", [1, 1], call1617, string1618);
  var var_values = call1619;
  var string1620 = new GraceString("$list(");
  var opresult1622 = callmethod(string1620, "++", [1], var_values);
  var string1623 = new GraceString(")");
  var opresult1625 = callmethod(opresult1622, "++", [1], string1623);
  return opresult1625
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1613.paramTypes = [];
func1613.paramTypes.push([]);
func1613.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileArray"] = func1613;
  lineNumber = 604
var func1626 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 593
  lineNumber = 1
  lineNumber = 593
  var call1627 = callmethod(var_node,"value", [0]);
  lineNumber = 594
  var call1628 = callmethod(this,"compileEgal", [1], call1627);
  var var_egal = call1628;
  lineNumber = 596
  lineNumber = 1
  lineNumber = 594
  var call1629 = callmethod(var_node,"value", [0]);
  var var_body = call1629;
  lineNumber = 604
  lineNumber = 596
  var string1630 = new GraceString("new ");
  var opresult1632 = callmethod(string1630, "++", [1], var_obj);
  var string1633 = new GraceString("(");
  var opresult1635 = callmethod(opresult1632, "++", [1], string1633);
  var opresult1637 = callmethod(opresult1635, "++", [1], var_egal);
  var string1638 = new GraceString(", $self, $closure) {");
  var opresult1640 = callmethod(opresult1637, "++", [1], string1638);
  lineNumber = 603
  var block1641 = Grace_allocObject();
  block1641.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1641.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1641.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1641.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1641.receiver = this;
  block1641.className = 'block<genjava:603>';
  block1641.real = function(
var_scope__39__
) {
  lineNumber = 599
  lineNumber = 598
  lineNumber = 597
  var string1642 = new GraceString("private final ");
  var opresult1644 = callmethod(string1642, "++", [1], var_obj);
  var string1645 = new GraceString(" $self = this");
  var opresult1647 = callmethod(opresult1644, "++", [1], string1645);
  var call1648 = callmethod(var_scope__39__,"line", [1], opresult1647);
  lineNumber = 598
  var string1649 = new GraceString("private final ");
  var opresult1651 = callmethod(string1649, "++", [1], var_obj);
  var string1652 = new GraceString(" $closure = this");
  var opresult1654 = callmethod(opresult1651, "++", [1], string1652);
  var call1655 = callmethod(var_scope__39__,"line", [1], opresult1654);
  var opresult1657 = callmethod(call1648, "++", [1], call1655);
  lineNumber = 599
  lineNumber = 1
  lineNumber = 599
  var call1658 = callmethod(var_node,"value", [0]);
  lineNumber = 598
  var call1659 = callmethod(this,"compileDeclarations", [2], call1658, var_scope__39__);
  var opresult1661 = callmethod(opresult1657, "++", [1], call1659);
  lineNumber = 603
  lineNumber = 600
  var string1662 = new GraceString("{");
  lineNumber = 602
  var block1663 = Grace_allocObject();
  block1663.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1663.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1663.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1663.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1663.receiver = this;
  block1663.className = 'block<genjava:602>';
  block1663.real = function(
var_scope__39____39__
) {
  lineNumber = 601
  var string1664 = new GraceString("final ");
  var opresult1666 = callmethod(string1664, "++", [1], var_obj);
  var string1667 = new GraceString(" self = this");
  var opresult1669 = callmethod(opresult1666, "++", [1], string1667);
  var call1670 = callmethod(var_scope__39____39__,"line", [1], opresult1669);
  lineNumber = 602
  lineNumber = 1
  lineNumber = 602
  var call1671 = callmethod(var_node,"value", [0]);
  lineNumber = 601
  var call1672 = callmethod(this,"compileExecution", [2], call1671, var_scope__39____39__);
  var opresult1674 = callmethod(call1670, "++", [1], call1672);
  return opresult1674;
};
  lineNumber = 603
  var string1675 = new GraceString("}");
  lineNumber = 600
  var call1676 = callmethod(var_scope__39__,"stbl", [3], string1662, block1663, string1675);
  var opresult1678 = callmethod(opresult1661, "++", [1], call1676);
  lineNumber = 603
  var call1679 = callmethod(this,"makeInvoke", [1], var_scope__39__);
  var opresult1681 = callmethod(opresult1678, "++", [1], call1679);
  return opresult1681;
};
  lineNumber = 604
  var string1682 = new GraceString("}");
  lineNumber = 596
  var call1683 = callmethod(var_scope,"decl", [3], opresult1640, block1641, string1682);
  return call1683
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1626.paramTypes = [];
func1626.paramTypes.push([]);
func1626.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileObject"] = func1626;
  lineNumber = 618
var func1684 = function(argcv) {
  var curarg = 1;
  var var_body = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 610
  lineNumber = 608
  var bool1685 = new GraceBoolean(false)
  var var_closure = bool1685;
  lineNumber = 615
  lineNumber = 610
  lineNumber = 615
  var block1686 = Grace_allocObject();
  block1686.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1686.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1686.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1686.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1686.receiver = this;
  block1686.className = 'block<genjava:615>';
  block1686.real = function(
var_node
) {
  lineNumber = 616
  lineNumber = 1
  lineNumber = 611
  var call1688 = callmethod(var_node,"kind", [0]);
  var string1689 = new GraceString("vardec");
  var opresult1691 = callmethod(call1688, "==", [1], string1689);
  if (Grace_isTrue(opresult1691)) {
  lineNumber = 613
  lineNumber = 612
  var string1692 = new GraceString("Egal.Pointer");
  throw new ReturnException(string1692, returnTarget);
  var if1687 = undefined;
  } else {
  lineNumber = 615
  lineNumber = 616
  lineNumber = 1
  lineNumber = 613
  var call1694 = callmethod(var_node,"kind", [0]);
  var string1695 = new GraceString("method");
  var opresult1697 = callmethod(call1694, "==", [1], string1695);
  if (Grace_isTrue(opresult1697)) {
  lineNumber = 615
  lineNumber = 614
  var bool1698 = new GraceBoolean(true)
  var_closure = bool1698;
  var if1693 = bool1698;
}
  var if1687 = if1693;
}
  return if1687;
};
  var call1699 = callmethod(Grace_prelude,"for()do", [1, 1], var_body, block1686);
  lineNumber = 618
  if (Grace_isTrue(var_closure)) {
  var string1701 = new GraceString("Egal.Closure");
  var if1700 = string1701;
  } else {
  var string1702 = new GraceString("Egal.Value");
  var if1700 = string1702;
}
  return if1700
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1684.paramTypes = [];
func1684.paramTypes.push([]);
  this.methods["compileEgal"] = func1684;
  lineNumber = 630
var func1703 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 622
  lineNumber = 1
  lineNumber = 622
  var call1704 = callmethod(var_node,"value", [0]);
  lineNumber = 623
  var call1705 = callmethod(this,"compileExpression", [2], call1704, var_scope);
  var var_matchee = call1705;
  lineNumber = 625
  lineNumber = 624
  lineNumber = 623
  lineNumber = 1
  lineNumber = 623
  var call1706 = callmethod(var_node,"cases", [0]);
  lineNumber = 624
  var block1707 = Grace_allocObject();
  block1707.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1707.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1707.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1707.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1707.receiver = this;
  block1707.className = 'block<genjava:624>';
  block1707.real = function(
var_case
) {
  lineNumber = 625
  var call1708 = callmethod(this,"compileExpression", [2], var_case, var_scope);
  return call1708;
};
  var call1709 = callmethod(this,"map()with", [1, 1], call1706, block1707);
  var string1710 = new GraceString(", ");
  lineNumber = 626
  var call1711 = callmethod(this,"join()separatedBy", [1, 1], call1709, string1710);
  var var_params = call1711;
  lineNumber = 628
  lineNumber = 630
  lineNumber = 1
  lineNumber = 626
  var call1713 = callmethod(var_node,"elsecase", [0]);
  var bool1714 = new GraceBoolean(false)
  var opresult1716 = callmethod(call1713, "/=", [1], bool1714);
  if (Grace_isTrue(opresult1716)) {
  lineNumber = 627
  lineNumber = 1
  lineNumber = 627
  var call1717 = callmethod(var_node,"elsecase", [0]);
  lineNumber = 628
  var call1718 = callmethod(this,"compileExpression", [2], call1717, var_scope);
  var if1712 = call1718;
  } else {
  var string1719 = new GraceString("null");
  var if1712 = string1719;
}
  var var_else = if1712;
  lineNumber = 630
  var string1720 = new GraceString("$matchCase(");
  var opresult1722 = callmethod(string1720, "++", [1], var_matchee);
  var string1723 = new GraceString(", ");
  var opresult1725 = callmethod(opresult1722, "++", [1], string1723);
  var opresult1727 = callmethod(opresult1725, "++", [1], var_else);
  var string1728 = new GraceString(", ");
  var opresult1730 = callmethod(opresult1727, "++", [1], string1728);
  var opresult1732 = callmethod(opresult1730, "++", [1], var_params);
  var string1733 = new GraceString(")");
  var opresult1735 = callmethod(opresult1732, "++", [1], string1733);
  return opresult1735
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1703.paramTypes = [];
func1703.paramTypes.push([]);
func1703.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileMatch"] = func1703;
  lineNumber = 645
var func1736 = function(argcv) {
  var curarg = 1;
  var var_block = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 639
  lineNumber = 647
  lineNumber = 1
  lineNumber = 637
  var call1738 = callmethod(var_block,"size", [0]);
  var opresult1740 = callmethod(call1738, "==", [1], new GraceNum(1));
  lineNumber = 639
  var block1741 = Grace_allocObject();
  block1741.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1741.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1741.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1741.receiver = this;
  block1741.className = 'block<genjava:639>';
  block1741.real = function(
) {
  lineNumber = 1
  lineNumber = 638
  var idxres1742 = var_block.methods["[]"].call(var_block, [1], new GraceNum(1));
  var call1743 = callmethod(idxres1742,"kind", [0]);
  var string1744 = new GraceString("return");
  var opresult1746 = callmethod(call1743, "/=", [1], string1744);
  return opresult1746;
};
  var opresult1748 = callmethod(opresult1740, "&&", [1], block1741);
  if (Grace_isTrue(opresult1748)) {
  lineNumber = 640
  var idxres1749 = var_block.methods["[]"].call(var_block, [1], new GraceNum(1));
  lineNumber = 641
  var call1750 = callmethod(this,"compileExpression", [2], idxres1749, var_scope);
  var if1737 = call1750;
  } else {
  lineNumber = 645
  lineNumber = 644
  lineNumber = 1
  lineNumber = 641
  var call1752 = callmethod(var_block,"size", [0]);
  var opresult1754 = callmethod(call1752, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1754)) {
  lineNumber = 642
  var array1755 = new GraceList([
]);

  var call1756 = callmethod(var_ast,"astblock", [2], array1755, var_block);
  var var_expr = call1756;
  lineNumber = 643
  var string1757 = new GraceString("apply");
  var call1758 = callmethod(var_ast,"astmember", [2], string1757, var_expr);
  lineNumber = 644
  var call1759 = callmethod(this,"compileExpression", [2], call1758, var_scope);
  var if1751 = call1759;
  } else {
  lineNumber = 645
  var string1760 = new GraceString("nothing");
  var if1751 = string1760;
}
  var if1737 = if1751;
}
  return if1737
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1736.paramTypes = [];
func1736.paramTypes.push([]);
func1736.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileBlockExpression"] = func1736;
  lineNumber = 658
var func1761 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 654
  lineNumber = 1
  lineNumber = 652
  var call1762 = callmethod(var_node,"value", [0]);
  var var_name = call1762;
  lineNumber = 656
  lineNumber = 658
  lineNumber = 654
  var string1764 = new GraceString("super");
  var opresult1766 = callmethod(var_name, "==", [1], string1764);
  if (Grace_isTrue(opresult1766)) {
  lineNumber = 656
  lineNumber = 655
  var string1767 = new GraceString("self.getSuper()");
  return string1767
  var if1763 = undefined;
}
  lineNumber = 658
  lineNumber = 659
  var call1768 = callmethod(this,"escape", [1], var_name);
  return call1768
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1761.paramTypes = [];
func1761.paramTypes.push([]);
func1761.paramTypes.push([type_Scope, "scope"]);
  this.methods["compileIdentifier"] = func1761;
  lineNumber = 665
var func1769 = function(argcv) {
  var curarg = 1;
  var var_scope = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 663
  lineNumber = 662
  var string1770 = new GraceString("protected Object invoke(Method method, ");
  lineNumber = 663
  var string1771 = new GraceString("Object[] args) throws Exception {");
  var opresult1773 = callmethod(string1770, "++", [1], string1771);
  lineNumber = 664
  var block1774 = Grace_allocObject();
  block1774.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1774.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1774.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1774.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1774.receiver = this;
  block1774.className = 'block<genjava:664>';
  block1774.real = function(
var_scope__39__
) {
  var string1775 = new GraceString("return method.invoke(this, args)");
  var call1776 = callmethod(var_scope__39__,"line", [1], string1775);
  return call1776;
};
  lineNumber = 665
  var string1777 = new GraceString("}");
  lineNumber = 662
  var call1778 = callmethod(var_scope,"stbl", [3], opresult1773, block1774, string1777);
  return call1778
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1769.paramTypes = [];
func1769.paramTypes.push([type_Scope, "scope"]);
  this.methods["makeInvoke"] = func1769;
  lineNumber = 712
var var_Scope = new GraceType("Scope");
var_Scope.typeMethods.push("up");
var_Scope.typeMethods.push("isDecl");
var_Scope.typeMethods.push("addVariable");
var_Scope.typeMethods.push("hasVariable");
var_Scope.typeMethods.push("newVariable");
var_Scope.typeMethods.push("indent");
var_Scope.typeMethods.push("block");
var_Scope.typeMethods.push("decl");
var_Scope.typeMethods.push("stmt");
var_Scope.typeMethods.push("line");
var_Scope.typeMethods.push("stbl");
var type_Scope = var_Scope;
  lineNumber = 713
var func1780 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var bool1781 = new GraceBoolean(true)
  var call1782 = callmethod(var_ScopeFactory,"new", [3], new GraceNum(0), var_nothing, bool1781);
  return call1782
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["moduleScope"] = func1780;
  lineNumber = 716
  lineNumber = 1
var func1783 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 716
  return var_ScopeFactory
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["ScopeFactory"] = func1783;
  lineNumber = 1
  var obj1784 = Grace_allocObject();
  obj1784.outer = this;
    var reader_genjava_outer1785 = function() {
    return this.outer;
  }
  obj1784.methods["outer"] = reader_genjava_outer1785;
function obj_init_1784() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func1786 = function(argcv) {
  var curarg = 1;
  var var_ind = arguments[curarg];
  curarg++;
  var var_outer__39__ = arguments[curarg];
  curarg++;
  var var_decl__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj1787 = Grace_allocObject();
  obj1787.outer = this;
    var reader_genjava_outer1788 = function() {
    return this.outer;
  }
  obj1787.methods["outer"] = reader_genjava_outer1788;
function obj_init_1787() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 718
  obj1787.data["isDecl"] = var_decl__39__;
    var reader_genjava_isDecl1789 = function() {
    return this.data["isDecl"];
  }
  reader_genjava_isDecl1789.def = true;
  obj1787.methods["isDecl"] = reader_genjava_isDecl1789;
  lineNumber = 719
  obj1787.data["up"] = var_outer__39__;
    var reader_genjava_up1790 = function() {
    return this.data["up"];
  }
  reader_genjava_up1790.def = true;
  obj1787.methods["up"] = reader_genjava_up1790;
  lineNumber = 723
  var array1791 = new GraceList([
]);

  obj1787.data["variables"] = array1791;
    var reader_genjava_variables1792 = function() {
    return this.data["variables"];
  }
  reader_genjava_variables1792.def = true;
  obj1787.methods["variables"] = reader_genjava_variables1792;
var func1793 = function(argcv) {
  var curarg = 1;
  var var_name = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 725
  lineNumber = 724
  lineNumber = 1
  lineNumber = 724
  lineNumber = 727
  var call1795 = callmethod(this,"variables", [0]);
  var call1796 = callmethod(call1795,"contains", [1], var_name);
  var call1797 = callmethod(call1796,"not", [0]);
  if (Grace_isTrue(call1797)) {
  lineNumber = 725
  lineNumber = 726
  var call1798 = callmethod(this,"variables", [0]);
  var call1799 = callmethod(call1798,"push", [1], var_name);
  var if1794 = call1799;
}
  return if1794
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1793.paramTypes = [];
func1793.paramTypes.push([type_String, "name"]);
  obj1787.methods["addVariable"] = func1793;
var func1800 = function(argcv) {
  var curarg = 1;
  var var_name = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 730
  lineNumber = 731
  var call1801 = callmethod(this,"variables", [0]);
  var call1802 = callmethod(call1801,"contains", [1], var_name);
  return call1802
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1800.paramTypes = [];
func1800.paramTypes.push([type_String, "name"]);
  obj1787.methods["hasVariable"] = func1800;
var func1803 = function(argcv) {
  var curarg = 1;
  var var_prefix = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 736
  lineNumber = 734
  var var_i = new GraceNum(1);
  lineNumber = 738
  lineNumber = 736
  var block1804 = Grace_allocObject();
  block1804.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1804.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1804.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1804.receiver = this;
  block1804.className = 'block<genjava:736>';
  block1804.real = function(
) {
  var opresult1806 = callmethod(var_prefix, "++", [1], var_i);
  var call1807 = callmethod(this,"hasVariable", [1], opresult1806);
  return call1807;
};
  lineNumber = 738
  var block1808 = Grace_allocObject();
  block1808.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1808.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1808.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1808.receiver = this;
  block1808.className = 'block<genjava:738>';
  block1808.real = function(
) {
  lineNumber = 737
  var opresult1810 = callmethod(var_i, "+=", [1], new GraceNum(1));
  return opresult1810;
};
  var call1811 = callmethod(Grace_prelude,"while()do", [1, 1], block1804, block1808);
  lineNumber = 742
  lineNumber = 740
  var opresult1813 = callmethod(var_prefix, "++", [1], var_i);
  var var_name = opresult1813;
  lineNumber = 742
  lineNumber = 744
  var call1814 = callmethod(this,"addVariable", [1], var_name);
  return var_name
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1803.paramTypes = [];
func1803.paramTypes.push([type_String, "prefix"]);
  obj1787.methods["newVariable"] = func1803;
  lineNumber = 747
  obj1787.data["indentAmount"] = var_ind;
    var reader_genjava_indentAmount1815 = function() {
    return this.data["indentAmount"];
  }
  reader_genjava_indentAmount1815.def = true;
  obj1787.methods["indentAmount"] = reader_genjava_indentAmount1815;
  lineNumber = 749
  var bool1816 = new GraceBoolean(false)
  obj1787.data["indent'"] = bool1816;
    var reader_genjava_indent__39__1817 = function() {
    return this.data["indent'"];
  }
  obj1787.methods["indent'"] = reader_genjava_indent__39__1817;
  obj1787.data["indent'"] = bool1816;
  var writer_genjava_indent__39__1817 = function(argcv, o) {
    this.data["indent'"] = o;
  }
  obj1787.methods["indent':="] = writer_genjava_indent__39__1817;
obj1787.mutable = true;
var func1818 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 761
  lineNumber = 763
  var call1820 = callmethod(this,"indent'", [0]);
  lineNumber = 751
  var bool1821 = new GraceBoolean(false)
  var opresult1823 = callmethod(call1820, "==", [1], bool1821);
  if (Grace_isTrue(opresult1823)) {
  lineNumber = 753
  lineNumber = 752
  var string1824 = new GraceString("");
  var var_string = string1824;
  lineNumber = 755
  lineNumber = 753
  var var_i = new GraceNum(0);
  lineNumber = 758
  lineNumber = 755
  var block1825 = Grace_allocObject();
  block1825.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1825.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1825.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1825.receiver = this;
  block1825.className = 'block<genjava:755>';
  block1825.real = function(
) {
  var call1826 = callmethod(this,"indentAmount", [0]);
  var opresult1828 = callmethod(var_i, "<", [1], call1826);
  return opresult1828;
};
  lineNumber = 758
  var block1829 = Grace_allocObject();
  block1829.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1829.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1829.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1829.receiver = this;
  block1829.className = 'block<genjava:758>';
  block1829.real = function(
) {
  lineNumber = 757
  lineNumber = 756
  var string1830 = new GraceString("  ");
  var opresult1832 = callmethod(var_string, "++", [1], string1830);
  var_string = opresult1832;
  lineNumber = 758
  lineNumber = 757
  var opresult1834 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult1834;
  return opresult1834;
};
  var call1835 = callmethod(Grace_prelude,"while()do", [1, 1], block1825, block1829);
  lineNumber = 761
  lineNumber = 1
  lineNumber = 760
  lineNumber = 761
  var call1836 = callmethod(this,"indent':=", [1], var_string);
  var if1819 = call1836;
}
  lineNumber = 763
  var call1837 = callmethod(this,"indent'", [0]);
  return call1837
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj1787.methods["indent"] = func1818;
var func1838 = function(argcv) {
  var curarg = 1;
  var var_left = arguments[curarg];
  curarg++;
  var var_inner = arguments[curarg];
  curarg++;
  var var_right = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 767
  var call1839 = callmethod(this,"indentAmount", [0]);
  var opresult1841 = callmethod(call1839, "+", [1], new GraceNum(1));
  var bool1842 = new GraceBoolean(false)
  var call1843 = callmethod(var_ScopeFactory,"new", [3], opresult1841, this, bool1842);
  var var_scope = call1843;
  lineNumber = 768
  lineNumber = 769
  lineNumber = 768
  var string1844 = new GraceString("\n");
  var opresult1846 = callmethod(var_left, "++", [1], string1844);
  var call1847 = callmethod(var_inner,"apply", [1], var_scope);
  var opresult1849 = callmethod(opresult1846, "++", [1], call1847);
  var call1850 = callmethod(this,"indent", [0]);
  var opresult1852 = callmethod(opresult1849, "++", [1], call1850);
  var opresult1854 = callmethod(opresult1852, "++", [1], var_right);
  return opresult1854
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1838.paramTypes = [];
func1838.paramTypes.push([type_String, "left"]);
func1838.paramTypes.push([type_Block, "inner"]);
func1838.paramTypes.push([type_String, "right"]);
  obj1787.methods["block"] = func1838;
var func1855 = function(argcv) {
  var curarg = 1;
  var var_left = arguments[curarg];
  curarg++;
  var var_inner = arguments[curarg];
  curarg++;
  var var_right = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 772
  var call1856 = callmethod(this,"indentAmount", [0]);
  var opresult1858 = callmethod(call1856, "+", [1], new GraceNum(1));
  var bool1859 = new GraceBoolean(true)
  var call1860 = callmethod(var_ScopeFactory,"new", [3], opresult1858, this, bool1859);
  var var_scope = call1860;
  lineNumber = 773
  lineNumber = 774
  lineNumber = 773
  var string1861 = new GraceString("\n");
  var opresult1863 = callmethod(var_left, "++", [1], string1861);
  var call1864 = callmethod(var_inner,"apply", [1], var_scope);
  var opresult1866 = callmethod(opresult1863, "++", [1], call1864);
  var call1867 = callmethod(this,"indent", [0]);
  var opresult1869 = callmethod(opresult1866, "++", [1], call1867);
  var opresult1871 = callmethod(opresult1869, "++", [1], var_right);
  return opresult1871
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1855.paramTypes = [];
func1855.paramTypes.push([type_String, "left"]);
func1855.paramTypes.push([type_Block, "inner"]);
func1855.paramTypes.push([type_String, "right"]);
  obj1787.methods["decl"] = func1855;
var func1872 = function(argcv) {
  var curarg = 1;
  var var_string = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 777
  var string1873 = new GraceString("");
  var call1874 = callmethod(this,"indent", [0]);
  var opresult1876 = callmethod(string1873, "++", [1], call1874);
  var string1877 = new GraceString("");
  var opresult1879 = callmethod(opresult1876, "++", [1], string1877);
  var opresult1881 = callmethod(opresult1879, "++", [1], var_string);
  var string1882 = new GraceString("\n");
  var opresult1884 = callmethod(opresult1881, "++", [1], string1882);
  return opresult1884
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1872.paramTypes = [];
func1872.paramTypes.push([type_String, "string"]);
  obj1787.methods["stmt"] = func1872;
var func1885 = function(argcv) {
  var curarg = 1;
  var var_string = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 781
  var string1886 = new GraceString("");
  var call1887 = callmethod(this,"indent", [0]);
  var opresult1889 = callmethod(string1886, "++", [1], call1887);
  var string1890 = new GraceString("");
  var opresult1892 = callmethod(opresult1889, "++", [1], string1890);
  var opresult1894 = callmethod(opresult1892, "++", [1], var_string);
  var string1895 = new GraceString(";\n");
  var opresult1897 = callmethod(opresult1894, "++", [1], string1895);
  return opresult1897
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1885.paramTypes = [];
func1885.paramTypes.push([type_String, "string"]);
  obj1787.methods["line"] = func1885;
var func1898 = function(argcv) {
  var curarg = 1;
  var var_left = arguments[curarg];
  curarg++;
  var var_inner = arguments[curarg];
  curarg++;
  var var_right = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 785
  var call1899 = callmethod(this,"block", [3], var_left, var_inner, var_right);
  lineNumber = 786
  var call1900 = callmethod(this,"stmt", [1], call1899);
  return call1900
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1898.paramTypes = [];
func1898.paramTypes.push([type_String, "left"]);
func1898.paramTypes.push([type_Block, "inner"]);
func1898.paramTypes.push([type_String, "right"]);
  obj1787.methods["stbl"] = func1898;
  superDepth = origSuperDepth;
}
obj_init_1787.apply(obj1787, []);
  return obj1787
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1786.paramTypes = [];
func1786.paramTypes.push([type_Number, "ind"]);
func1786.paramTypes.push([]);
func1786.paramTypes.push([type_Boolean, "decl'"]);
  obj1784.methods["new"] = func1786;
  superDepth = origSuperDepth;
}
obj_init_1784.apply(obj1784, []);
  var var_ScopeFactory = obj1784;
  lineNumber = 795
var func1901 = function(argcv) {
  var curarg = 1;
  var var_kind__39__ = arguments[curarg];
  curarg++;
  var var_block = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 796
  lineNumber = 1
  lineNumber = 795
  var call1902 = callmethod(var_Kinds,"new", [0]);
  var call1903 = callmethod(call1902,"kind()do", [1, 1], var_kind__39__, var_block);
  return call1903
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1901.paramTypes = [];
func1901.paramTypes.push([type_String, "kind'"]);
func1901.paramTypes.push([type_Block, "block"]);
  this.methods["kind()do"] = func1901;
  lineNumber = 799
var func1904 = function(argcv) {
  var curarg = 1;
  var var_kinds__39__ = arguments[curarg];
  curarg++;
  var var_block = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 800
  lineNumber = 1
  lineNumber = 799
  var call1905 = callmethod(var_Kinds,"new", [0]);
  var call1906 = callmethod(call1905,"kinds()do", [1, 1], var_kinds__39__, var_block);
  return call1906
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1904.paramTypes = [];
func1904.paramTypes.push([]);
func1904.paramTypes.push([type_Block, "block"]);
  this.methods["kinds()do"] = func1904;
  lineNumber = 847
  lineNumber = 1
var func1907 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 802
  return var_Kinds
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["Kinds"] = func1907;
  lineNumber = 1
  var obj1908 = Grace_allocObject();
  obj1908.outer = this;
    var reader_genjava_outer1909 = function() {
    return this.outer;
  }
  obj1908.methods["outer"] = reader_genjava_outer1909;
function obj_init_1908() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func1910 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj1911 = Grace_allocObject();
  obj1911.outer = this;
    var reader_genjava_outer1912 = function() {
    return this.outer;
  }
  obj1911.methods["outer"] = reader_genjava_outer1912;
function obj_init_1911() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 805
  lineNumber = 1
  lineNumber = 804
  var call1913 = callmethod(var_HashMap,"new", [0]);
  obj1911.data["map"] = call1913;
    var reader_genjava_map1914 = function() {
    return this.data["map"];
  }
  reader_genjava_map1914.def = true;
  obj1911.methods["map"] = reader_genjava_map1914;
  lineNumber = 805
  var bool1915 = new GraceBoolean(false)
  obj1911.data["elseBlock"] = bool1915;
    var reader_genjava_elseBlock1916 = function() {
    return this.data["elseBlock"];
  }
  obj1911.methods["elseBlock"] = reader_genjava_elseBlock1916;
  obj1911.data["elseBlock"] = bool1915;
  var writer_genjava_elseBlock1916 = function(argcv, o) {
    this.data["elseBlock"] = o;
  }
  obj1911.methods["elseBlock:="] = writer_genjava_elseBlock1916;
obj1911.mutable = true;
  lineNumber = 806
  var bool1917 = new GraceBoolean(false)
  obj1911.data["stopped"] = bool1917;
    var reader_genjava_stopped1918 = function() {
    return this.data["stopped"];
  }
  obj1911.methods["stopped"] = reader_genjava_stopped1918;
  obj1911.data["stopped"] = bool1917;
  var writer_genjava_stopped1918 = function(argcv, o) {
    this.data["stopped"] = o;
  }
  obj1911.methods["stopped:="] = writer_genjava_stopped1918;
obj1911.mutable = true;
var func1919 = function(argcv) {
  var curarg = 1;
  var var_kind__39__ = arguments[curarg];
  curarg++;
  var var_block = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 809
  lineNumber = 810
  var call1920 = callmethod(this,"map", [0]);
  var call1921 = callmethod(call1920,"put", [2], var_kind__39__, var_block);
  return this
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1919.paramTypes = [];
func1919.paramTypes.push([type_String, "kind'"]);
func1919.paramTypes.push([type_Block, "block"]);
  obj1911.methods["kind()do"] = func1919;
var func1922 = function(argcv) {
  var curarg = 1;
  var var_kinds__39__ = arguments[curarg];
  curarg++;
  var var_block = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 815
  lineNumber = 814
  lineNumber = 815
  var block1923 = Grace_allocObject();
  block1923.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1923.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1923.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1923.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1923.receiver = this;
  block1923.className = 'block<genjava:815>';
  block1923.real = function(
var_kind__39__
) {
  lineNumber = 816
  var call1924 = callmethod(this,"map", [0]);
  var call1925 = callmethod(call1924,"put", [2], var_kind__39__, var_block);
  return call1925;
};
  var call1926 = callmethod(Grace_prelude,"for()do", [1, 1], var_kinds__39__, block1923);
  lineNumber = 817
  return this
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1922.paramTypes = [];
func1922.paramTypes.push([]);
func1922.paramTypes.push([type_Block, "block"]);
  obj1911.methods["kinds()do"] = func1922;
var func1927 = function(argcv) {
  var curarg = 1;
  var var_block = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 822
  lineNumber = 1
  lineNumber = 821
  lineNumber = 822
  var call1928 = callmethod(this,"elseBlock:=", [1], var_block);
  return this
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1927.paramTypes = [];
func1927.paramTypes.push([type_Block, "block"]);
  obj1911.methods["else"] = func1927;
var func1929 = function(argcv) {
  var curarg = 1;
  var var_nodes = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 828
  var call1930 = callmethod(this,"elseBlock", [0]);
  lineNumber = 826
  var bool1931 = new GraceBoolean(false)
  var opresult1933 = callmethod(call1930, "/=", [1], bool1931);
  var var_else__39__ = opresult1933;
  lineNumber = 836
  lineNumber = 829
  lineNumber = 828
  if (Grace_isTrue(var_else__39__)) {
  var if1934 = var_nodes;
  } else {
  lineNumber = 829
  var block1935 = Grace_allocObject();
  block1935.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1935.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1935.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1935.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1935.receiver = this;
  block1935.className = 'block<genjava:829>';
  block1935.real = function(
var_node
) {
  lineNumber = 1
  lineNumber = 829
  var call1936 = callmethod(var_node,"kind", [0]);
  var call1937 = callmethod(this,"map", [0]);
  var call1938 = callmethod(call1937,"contains", [1], call1936);
  return call1938;
};
  lineNumber = 830
  lineNumber = 1
  lineNumber = 830
  lineNumber = 1
  var call1939 = callmethod(superDepth, "outer", [0]);
  var call1940 = callmethod(call1939,"outer", [0]);
  var call1941 = callmethod(call1940,"filter()with", [1, 1], var_nodes, block1935);
  var if1934 = call1941;
}
  lineNumber = 836
  var block1942 = Grace_allocObject();
  block1942.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1942.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1942.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1942.receiver = this;
  block1942.className = 'block<genjava:836>';
  block1942.real = function(
var_node
,
var___95____95__2
,
var_break
,
var_continue
) {
  lineNumber = 838
  var call1944 = callmethod(this,"stopped", [0]);
  if (Grace_isTrue(call1944)) {
  lineNumber = 832
  lineNumber = 1
  lineNumber = 832
  var call1945 = callmethod(var_break,"apply", [0]);
  var if1943 = call1945;
  } else {
  lineNumber = 836
  lineNumber = 833
  lineNumber = 1
  lineNumber = 833
  var call1947 = callmethod(var_node,"kind", [0]);
  lineNumber = 835
  var call1948 = callmethod(this,"map", [0]);
  var call1949 = callmethod(call1948,"contains", [1], call1947);
  if (Grace_isTrue(call1949)) {
  lineNumber = 834
  lineNumber = 1
  lineNumber = 834
  var call1950 = callmethod(var_node,"kind", [0]);
  lineNumber = 835
  var call1951 = callmethod(this,"map", [0]);
  var call1952 = callmethod(call1951,"get", [1], call1950);
  var call1953 = callmethod(call1952,"apply", [2], var_node, var_continue);
  var if1946 = call1953;
  } else {
  lineNumber = 836
  lineNumber = 837
  var call1954 = callmethod(this,"elseBlock", [0]);
  var call1955 = callmethod(call1954,"apply", [2], var_node, var_continue);
  var if1946 = call1955;
}
  var if1943 = if1946;
}
  return if1943;
};
  lineNumber = 839
  lineNumber = 1
  lineNumber = 839
  lineNumber = 1
  var call1956 = callmethod(superDepth, "outer", [0]);
  var call1957 = callmethod(call1956,"outer", [0]);
  var call1958 = callmethod(call1957,"map()with", [1, 1], if1934, block1942);
  return call1958
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func1929.paramTypes = [];
func1929.paramTypes.push([]);
  obj1911.methods["in"] = func1929;
var func1959 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 842
  var array1960 = new GraceList([
var_node,
]);

  lineNumber = 843
  var call1961 = callmethod(this,"in", [1], array1960);
  lineNumber = 842
  var idxres1962 = call1961.methods["[]"].call(call1961, [1], new GraceNum(1));
  return idxres1962
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj1911.methods["of"] = func1959;
var func1963 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 847
  lineNumber = 1
  lineNumber = 846
  var bool1964 = new GraceBoolean(true)
  lineNumber = 847
  var call1965 = callmethod(this,"stopped:=", [1], bool1964);
  return call1965
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj1911.methods["stop"] = func1963;
  superDepth = origSuperDepth;
}
obj_init_1911.apply(obj1911, []);
  return obj1911
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj1908.methods["new"] = func1910;
  superDepth = origSuperDepth;
}
obj_init_1908.apply(obj1908, []);
  var var_Kinds = obj1908;
  lineNumber = 856
  lineNumber = 851
  var string1967 = new GraceString("package");
  var string1968 = new GraceString("import");
  var string1969 = new GraceString("class");
  var string1970 = new GraceString("this");
  var string1971 = new GraceString("super");
  var string1972 = new GraceString("null");
  var string1973 = new GraceString("new");
  lineNumber = 852
  var string1974 = new GraceString("void");
  var string1975 = new GraceString("int");
  var string1976 = new GraceString("float");
  var string1977 = new GraceString("double");
  var string1978 = new GraceString("boolean");
  var string1979 = new GraceString("char");
  var string1980 = new GraceString("byte");
  lineNumber = 853
  var string1981 = new GraceString("public");
  var string1982 = new GraceString("protected");
  var string1983 = new GraceString("private");
  var string1984 = new GraceString("static");
  var string1985 = new GraceString("final");
  var string1986 = new GraceString("extends");
  lineNumber = 854
  var string1987 = new GraceString("if");
  var string1988 = new GraceString("else");
  var string1989 = new GraceString("for");
  var string1990 = new GraceString("while");
  var string1991 = new GraceString("do");
  var string1992 = new GraceString("switch");
  var string1993 = new GraceString("case");
  lineNumber = 855
  var string1994 = new GraceString("default");
  var string1995 = new GraceString("synchronized");
  var string1996 = new GraceString("volatile");
  var string1997 = new GraceString("return");
  var string1998 = new GraceString("wait");
  lineNumber = 856
  var string1999 = new GraceString("true");
  var string2000 = new GraceString("false");
  var string2001 = new GraceString("break");
  var string2002 = new GraceString("continue");
  var array1966 = new GraceList([
string1967,
string1968,
string1969,
string1970,
string1971,
string1972,
string1973,
string1974,
string1975,
string1976,
string1977,
string1978,
string1979,
string1980,
string1981,
string1982,
string1983,
string1984,
string1985,
string1986,
string1987,
string1988,
string1989,
string1990,
string1991,
string1992,
string1993,
string1994,
string1995,
string1996,
string1997,
string1998,
string1999,
string2000,
string2001,
string2002,
var_obj,
var_blk,
var_ret,
]);

  var var_keywords = array1966;
  lineNumber = 1
var func2003 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 851
  return var_keywords
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["keywords"] = func2003;
  lineNumber = 888
var func2004 = function(argcv) {
  var curarg = 1;
  var var_ident = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 861
  lineNumber = 859
  var call2006 = callmethod(var_keywords,"contains", [1], var_ident);
  if (Grace_isTrue(call2006)) {
  lineNumber = 861
  lineNumber = 860
  var string2007 = new GraceString("$");
  var opresult2009 = callmethod(string2007, "++", [1], var_ident);
  return opresult2009
  var if2005 = undefined;
}
  lineNumber = 866
  lineNumber = 868
  lineNumber = 864
  var idxres2011 = var_ident.methods["[]"].call(var_ident, [1], new GraceNum(1));
  var string2012 = new GraceString("_");
  var opresult2014 = callmethod(idxres2011, "==", [1], string2012);
  if (Grace_isTrue(opresult2014)) {
  lineNumber = 866
  lineNumber = 865
  return var_ident
  var if2010 = undefined;
}
  lineNumber = 888
  lineNumber = 868
  var idxres2016 = var_ident.methods["[]"].call(var_ident, [1], new GraceNum(1));
  var call2017 = callmethod(var_unicode,"isLetter", [1], idxres2016);
  if (Grace_isTrue(call2017)) {
  lineNumber = 869
  var string2019 = new GraceString("$");
  var string2020 = new GraceString("_");
  var array2018 = new GraceList([
string2019,
string2020,
]);

  var var_ignore = array2018;
  lineNumber = 872
  lineNumber = 870
  var bool2021 = new GraceBoolean(false)
  var var_inParens = bool2021;
  lineNumber = 884
  lineNumber = 872
  lineNumber = 884
  var block2022 = Grace_allocObject();
  block2022.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2022.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2022.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2022.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2022.receiver = this;
  block2022.className = 'block<genjava:884>';
  block2022.real = function(
var_c
) {
  lineNumber = 873
  if (Grace_isTrue(var_inParens)) {
  lineNumber = 875
  lineNumber = 874
  var string2024 = new GraceString(")");
  var opresult2026 = callmethod(var_c, "/=", [1], string2024);
  var_inParens = opresult2026;
  lineNumber = 875
  var string2027 = new GraceString("");
  var if2023 = string2027;
  } else {
  lineNumber = 884
  lineNumber = 879
  lineNumber = 876
  var string2029 = new GraceString("(");
  var opresult2031 = callmethod(var_c, "==", [1], string2029);
  if (Grace_isTrue(opresult2031)) {
  lineNumber = 878
  lineNumber = 877
  var bool2032 = new GraceBoolean(true)
  var_inParens = bool2032;
  lineNumber = 878
  var string2033 = new GraceString("$");
  var if2028 = string2033;
  } else {
  lineNumber = 884
  lineNumber = 881
  lineNumber = 879
  var string2035 = new GraceString("'");
  var opresult2037 = callmethod(var_c, "==", [1], string2035);
  if (Grace_isTrue(opresult2037)) {
  lineNumber = 880
  var string2038 = new GraceString("_");
  var if2034 = string2038;
  } else {
  lineNumber = 884
  lineNumber = 881
  lineNumber = 883
  var call2040 = callmethod(this,"isValidIdentifierCharacter", [1], var_c);
  if (Grace_isTrue(call2040)) {
  lineNumber = 882
  var if2039 = var_c;
  } else {
  lineNumber = 884
  var string2041 = new GraceString("$");
  lineNumber = 1
  lineNumber = 884
  var call2042 = callmethod(var_c,"ord", [0]);
  var opresult2044 = callmethod(string2041, "++", [1], call2042);
  var string2045 = new GraceString("");
  var opresult2047 = callmethod(opresult2044, "++", [1], string2045);
  var if2039 = opresult2047;
}
  var if2034 = if2039;
}
  var if2028 = if2034;
}
  var if2023 = if2028;
}
  return if2023;
};
  lineNumber = 886
  var call2048 = callmethod(this,"map()with", [1, 1], var_ident, block2022);
  lineNumber = 887
  var call2049 = callmethod(this,"join", [1], call2048);
  var if2015 = call2049;
  } else {
  lineNumber = 888
  var string2050 = new GraceString("bin");
  var block2051 = Grace_allocObject();
  block2051.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2051.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2051.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2051.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2051.receiver = this;
  block2051.className = 'block<genjava:888>';
  block2051.real = function(
var_c
) {
  var string2052 = new GraceString("$");
  lineNumber = 1
  lineNumber = 888
  var call2053 = callmethod(var_c,"ord", [0]);
  var opresult2055 = callmethod(string2052, "++", [1], call2053);
  var string2056 = new GraceString("");
  var opresult2058 = callmethod(opresult2055, "++", [1], string2056);
  return opresult2058;
};
  var call2059 = callmethod(this,"map()with", [1, 1], var_ident, block2051);
  lineNumber = 889
  var call2060 = callmethod(this,"join", [1], call2059);
  var opresult2062 = callmethod(string2050, "++", [1], call2060);
  var if2015 = opresult2062;
}
  return if2015
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2004.paramTypes = [];
func2004.paramTypes.push([type_String, "ident"]);
  this.methods["escape"] = func2004;
  lineNumber = 893
var func2063 = function(argcv) {
  var curarg = 1;
  var var_c = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var call2064 = callmethod(var_unicode,"isLetter", [1], var_c);
  var call2065 = callmethod(var_unicode,"isNumber", [1], var_c);
  var opresult2067 = callmethod(call2064, "|", [1], call2065);
  var string2068 = new GraceString("$");
  var opresult2070 = callmethod(var_c, "==", [1], string2068);
  var opresult2072 = callmethod(opresult2067, "|", [1], opresult2070);
  var string2073 = new GraceString("_");
  var opresult2075 = callmethod(var_c, "==", [1], string2073);
  var opresult2077 = callmethod(opresult2072, "|", [1], opresult2075);
  return opresult2077
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2063.paramTypes = [];
func2063.paramTypes.push([type_String, "c"]);
  this.methods["isValidIdentifierCharacter"] = func2063;
  lineNumber = 901
var func2078 = function(argcv) {
  var curarg = 1;
  var var_value__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj2079 = Grace_allocObject();
  obj2079.outer = this;
    var reader_genjava_outer2080 = function() {
    return this.outer;
  }
  obj2079.methods["outer"] = reader_genjava_outer2080;
function obj_init_2079() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 899
  obj2079.data["value"] = var_value__39__;
    var reader_genjava_value2081 = function() {
    return this.data["value"];
  }
  reader_genjava_value2081.def = true;
  obj2079.methods["value"] = reader_genjava_value2081;
  lineNumber = 900
  var string2082 = new GraceString("literal");
  obj2079.data["kind"] = string2082;
    var reader_genjava_kind2083 = function() {
    return this.data["kind"];
  }
  reader_genjava_kind2083.def = true;
  obj2079.methods["kind"] = reader_genjava_kind2083;
  superDepth = origSuperDepth;
}
obj_init_2079.apply(obj2079, []);
  return obj2079
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2078.paramTypes = [];
func2078.paramTypes.push([type_String, "value'"]);
  this.methods["literal"] = func2078;
  lineNumber = 921
var func2084 = function(argcv) {
  var curarg = 1;
  var var_list = arguments[curarg];
  curarg++;
  var var_with = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 910
  var array2085 = new GraceList([
]);

  var var_list__39__ = array2085;
  lineNumber = 911
  lineNumber = 910
  var var_index = new GraceNum(1);
  lineNumber = 911
  var block2086 = Grace_allocObject();
  block2086.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2086.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2086.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2086.receiver = this;
  block2086.className = 'block<genjava:911>';
  block2086.real = function(
) {
  throw new ReturnException(var_list__39__, returnTarget);
  return undefined;
};
  var var_break = block2086;
  lineNumber = 919
  lineNumber = 912
  lineNumber = 919
  var block2087 = Grace_allocObject();
  block2087.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2087.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2087.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2087.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2087.receiver = this;
  block2087.className = 'block<genjava:919>';
  block2087.real = function(
var_e
) {
  lineNumber = 914
  lineNumber = 913
  var bool2088 = new GraceBoolean(true)
  var var_add = bool2088;
  lineNumber = 914
  var block2089 = Grace_allocObject();
  block2089.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2089.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2089.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2089.receiver = this;
  block2089.className = 'block<genjava:914>';
  block2089.real = function(
) {
  var bool2090 = new GraceBoolean(false)
  var_add = bool2090;
  return bool2090;
};
  var call2091 = callmethod(var_with,"apply", [4], var_e, var_index, var_break, block2089);
  var var_result = call2091;
  lineNumber = 916
  lineNumber = 915
  if (Grace_isTrue(var_add)) {
  lineNumber = 916
  var call2093 = callmethod(var_list__39__,"push", [1], var_result);
  var if2092 = call2093;
}
  lineNumber = 919
  lineNumber = 918
  var opresult2095 = callmethod(var_index, "+", [1], new GraceNum(1));
  var_index = opresult2095;
  return opresult2095;
};
  var call2096 = callmethod(Grace_prelude,"for()do", [1, 1], var_list, block2087);
  lineNumber = 921
  return var_list__39__
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2084.paramTypes = [];
func2084.paramTypes.push([type_ImmutableIndexedCollection, "list"]);
func2084.paramTypes.push([type_Block, "with"]);
  this.methods["map()with"] = func2084;
  lineNumber = 934
var func2097 = function(argcv) {
  var curarg = 1;
  var var_list = arguments[curarg];
  curarg++;
  var var_choice = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 927
  var array2098 = new GraceList([
]);

  var var_list__39__ = array2098;
  var block2099 = Grace_allocObject();
  block2099.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2099.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2099.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2099.receiver = this;
  block2099.className = 'block<genjava:927>';
  block2099.real = function(
) {
  throw new ReturnException(var_list__39__, returnTarget);
  return undefined;
};
  var var_break = block2099;
  lineNumber = 930
  lineNumber = 928
  lineNumber = 930
  var block2100 = Grace_allocObject();
  block2100.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2100.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2100.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2100.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2100.receiver = this;
  block2100.className = 'block<genjava:930>';
  block2100.real = function(
var_e
) {
  lineNumber = 929
  var call2102 = callmethod(var_choice,"apply", [2], var_e, var_break);
  if (Grace_isTrue(call2102)) {
  lineNumber = 930
  var call2103 = callmethod(var_list__39__,"push", [1], var_e);
  var if2101 = call2103;
}
  return if2101;
};
  var call2104 = callmethod(Grace_prelude,"for()do", [1, 1], var_list, block2100);
  lineNumber = 934
  return var_list__39__
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2097.paramTypes = [];
func2097.paramTypes.push([]);
func2097.paramTypes.push([type_Block, "choice"]);
  this.methods["filter()with"] = func2097;
  lineNumber = 952
var func2105 = function(argcv) {
  var curarg = 1;
  var var_list = arguments[curarg];
  curarg++;
  var var_with = arguments[curarg];
  curarg++;
  var var_filter = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 941
  var array2106 = new GraceList([
]);

  var var_list__39__ = array2106;
  lineNumber = 942
  lineNumber = 941
  var var_index = new GraceNum(1);
  lineNumber = 942
  var block2107 = Grace_allocObject();
  block2107.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2107.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2107.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2107.receiver = this;
  block2107.className = 'block<genjava:942>';
  block2107.real = function(
) {
  throw new ReturnException(var_list__39__, returnTarget);
  return undefined;
};
  var var_break = block2107;
  lineNumber = 950
  lineNumber = 943
  lineNumber = 950
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
  block2108.className = 'block<genjava:950>';
  block2108.real = function(
var_e
) {
  lineNumber = 945
  lineNumber = 944
  var bool2109 = new GraceBoolean(true)
  var var_add = bool2109;
  lineNumber = 945
  var block2110 = Grace_allocObject();
  block2110.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2110.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2110.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2110.receiver = this;
  block2110.className = 'block<genjava:945>';
  block2110.real = function(
) {
  var bool2111 = new GraceBoolean(false)
  var_add = bool2111;
  return bool2111;
};
  var call2112 = callmethod(var_with,"apply", [4], var_e, var_index, var_break, block2110);
  var var_result = call2112;
  lineNumber = 947
  lineNumber = 946
  var call2114 = callmethod(var_filter,"apply", [1], var_result);
  var opresult2116 = callmethod(var_add, "&", [1], call2114);
  if (Grace_isTrue(opresult2116)) {
  lineNumber = 947
  var call2117 = callmethod(var_list__39__,"push", [1], var_result);
  var if2113 = call2117;
}
  lineNumber = 950
  lineNumber = 949
  var opresult2119 = callmethod(var_index, "+", [1], new GraceNum(1));
  var_index = opresult2119;
  return opresult2119;
};
  var call2120 = callmethod(Grace_prelude,"for()do", [1, 1], var_list, block2108);
  lineNumber = 952
  return var_list__39__
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2105.paramTypes = [];
func2105.paramTypes.push([]);
func2105.paramTypes.push([type_Block, "with"]);
func2105.paramTypes.push([type_Block, "filter"]);
  this.methods["map()with()filter"] = func2105;
  lineNumber = 957
var func2121 = function(argcv) {
  var curarg = 1;
  var var_list = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var string2122 = new GraceString("");
  lineNumber = 958
  var call2123 = callmethod(this,"join()separatedBy", [1, 1], var_list, string2122);
  return call2123
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2121.paramTypes = [];
func2121.paramTypes.push([type_ImmutableIndexedCollection, "list"]);
  this.methods["join"] = func2121;
  lineNumber = 972
var func2124 = function(argcv) {
  var curarg = 1;
  var var_list = arguments[curarg];
  curarg++;
  var var_by = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 963
  lineNumber = 962
  var bool2125 = new GraceBoolean(false)
  var var_once = bool2125;
  lineNumber = 964
  lineNumber = 963
  var string2126 = new GraceString("");
  var var_string = string2126;
  lineNumber = 970
  lineNumber = 964
  lineNumber = 970
  var block2127 = Grace_allocObject();
  block2127.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2127.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2127.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2127.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2127.receiver = this;
  block2127.className = 'block<genjava:970>';
  block2127.real = function(
var_val
) {
  lineNumber = 967
  lineNumber = 965
  if (Grace_isTrue(var_once)) {
  lineNumber = 967
  lineNumber = 966
  var opresult2130 = callmethod(var_string, "++", [1], var_by);
  var_string = opresult2130;
  var if2128 = opresult2130;
}
  lineNumber = 969
  lineNumber = 968
  var opresult2132 = callmethod(var_string, "++", [1], var_val);
  var_string = opresult2132;
  lineNumber = 970
  lineNumber = 969
  var bool2133 = new GraceBoolean(true)
  var_once = bool2133;
  return bool2133;
};
  var call2134 = callmethod(Grace_prelude,"for()do", [1, 1], var_list, block2127);
  lineNumber = 972
  return var_string
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2124.paramTypes = [];
func2124.paramTypes.push([type_ImmutableIndexedCollection, "list"]);
func2124.paramTypes.push([type_String, "by"]);
  this.methods["join()separatedBy"] = func2124;
  lineNumber = 983
var func2135 = function(argcv) {
  var curarg = 1;
  var var_list = arguments[curarg];
  curarg++;
  var var_attach = new GraceList(Array.prototype.slice.call(arguments, curarg, curarg + argcv[0] - 1));
  curarg += argcv[0] - 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 979
  lineNumber = 977
  lineNumber = 979
  var block2136 = Grace_allocObject();
  block2136.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2136.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2136.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2136.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2136.receiver = this;
  block2136.className = 'block<genjava:979>';
  block2136.real = function(
var_list__39__
) {
  lineNumber = 978
  lineNumber = 979
  var block2137 = Grace_allocObject();
  block2137.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2137.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2137.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2137.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2137.receiver = this;
  block2137.className = 'block<genjava:979>';
  block2137.real = function(
var_el
) {
  var call2138 = callmethod(var_list,"push", [1], var_el);
  return call2138;
};
  var call2139 = callmethod(Grace_prelude,"for()do", [1, 1], var_list__39__, block2137);
  return call2139;
};
  var call2140 = callmethod(Grace_prelude,"for()do", [1, 1], var_attach, block2136);
  lineNumber = 983
  return var_list
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2135.paramTypes = [];
func2135.paramTypes.push([]);
  this.methods["concat"] = func2135;
  lineNumber = 990
var func2141 = function(argcv) {
  var curarg = 1;
  var var_condition = arguments[curarg];
  curarg++;
  var var_result = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 988
  if (Grace_isTrue(var_condition)) {
  lineNumber = 989
  var call2144 = callmethod(var_String,"match", [1], var_result);
  if (Grace_isTrue(call2144)) {
  var if2143 = var_result;
  } else {
  lineNumber = 1
  lineNumber = 989
  var call2145 = callmethod(var_result,"apply", [0]);
  var if2143 = call2145;
}
  var if2142 = if2143;
  } else {
  lineNumber = 990
  var string2146 = new GraceString("");
  var if2142 = string2146;
}
  return if2142
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
func2141.paramTypes = [];
func2141.paramTypes.push([type_Boolean, "condition"]);
func2141.paramTypes.push([]);
  this.methods["strIf()then"] = func2141;
  return this;
}
