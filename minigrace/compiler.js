function gracecode_compiler() {
  lineNumber = 2
// Import of io
  var var_io = do_import("io", gracecode_io);
  lineNumber = 3
// Import of sys
  var var_sys = do_import("sys", gracecode_sys);
  lineNumber = 4
// Import of unicode
  var var_unicode = do_import("unicode", gracecode_unicode);
  lineNumber = 5
// Import of util
  var var_util = do_import("util", gracecode_util);
  lineNumber = 6
// Import of lexer
  var var_lexer = do_import("lexer", gracecode_lexer);
  lineNumber = 7
// Import of ast
  var var_ast = do_import("ast", gracecode_ast);
  lineNumber = 8
// Import of parser
  var var_parser = do_import("parser", gracecode_parser);
  lineNumber = 9
// Import of typechecker
  var var_typechecker = do_import("typechecker", gracecode_typechecker);
  lineNumber = 10
// Import of genllvm30
  var var_genllvm30 = do_import("genllvm30", gracecode_genllvm30);
  lineNumber = 11
// Import of genc
  var var_genc = do_import("genc", gracecode_genc);
  lineNumber = 12
// Import of genjava
  var var_genjava = do_import("genjava", gracecode_genjava);
  lineNumber = 13
// Import of genjs
  var var_genjs = do_import("genjs", gracecode_genjs);
  lineNumber = 14
// Import of buildinfo
  var var_buildinfo = do_import("buildinfo", gracecode_buildinfo);
  lineNumber = 16
// Import of subtype
  var var_subtype = do_import("subtype", gracecode_subtype);
  lineNumber = 1
  lineNumber = 16
  var call0 = callmethod(var_util,"parseargs", [0]);
  lineNumber = 18
  var string2 = new GraceString("lex");
  var string3 = new GraceString("parse");
  var string4 = new GraceString("processed-ast");
  var string5 = new GraceString("subtypematrix");
  var string6 = new GraceString("c");
  var string7 = new GraceString("js");
  var string8 = new GraceString("grace");
  var string9 = new GraceString("java");
  var array1 = new GraceList([
string2,
string3,
string4,
string5,
string6,
string7,
string8,
string9,
]);

  var var_targets = array1;
  lineNumber = 1
var func10 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 18
  return var_targets
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["targets"] = func10;
  lineNumber = 25
  lineNumber = 28
  lineNumber = 1
  lineNumber = 20
  var call12 = callmethod(var_util,"target", [0]);
  var string13 = new GraceString("help");
  var opresult15 = callmethod(call12, "==", [1], string13);
  if (Grace_isTrue(opresult15)) {
  lineNumber = 21
  var string16 = new GraceString("Valid targets:");
  var call17 = Grace_print(string16);
  lineNumber = 23
  lineNumber = 22
  lineNumber = 23
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
  block18.className = 'block<compiler:23>';
  block18.real = function(
var_t
) {
  var string19 = new GraceString("  ");
  var opresult21 = callmethod(string19, "++", [1], var_t);
  var string22 = new GraceString("");
  var opresult24 = callmethod(opresult21, "++", [1], string22);
  var call25 = Grace_print(opresult24);
  return call25;
};
  var call26 = callmethod(Grace_prelude,"for()do", [1, 1], var_targets, block18);
  lineNumber = 25
  var call27 = callmethod(var_sys,"exit", [1], new GraceNum(0));
  var if11 = call27;
}
  lineNumber = 29
  lineNumber = 1
  lineNumber = 29
  lineNumber = 1
  lineNumber = 29
  lineNumber = 1
  lineNumber = 28
  var call28 = callmethod(var_lexer,"Lexer", [0]);
  var call29 = callmethod(call28,"new", [0]);
  var call30 = callmethod(call29,"lexinput", [0]);
  var var_tokens = call30;
  lineNumber = 1
var func31 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 28
  return var_tokens
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["tokens"] = func31;
  lineNumber = 1
var func32 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_tokens = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["tokens:="] = func32;
  lineNumber = 37
  lineNumber = 39
  lineNumber = 1
  lineNumber = 29
  var call34 = callmethod(var_util,"target", [0]);
  var string35 = new GraceString("lex");
  var opresult37 = callmethod(call34, "==", [1], string35);
  if (Grace_isTrue(opresult37)) {
  lineNumber = 34
  lineNumber = 31
  lineNumber = 34
  var block38 = Grace_allocObject();
  block38.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block38.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block38.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block38.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block38.receiver = this;
  block38.className = 'block<compiler:34>';
  block38.real = function(
var_v
) {
  lineNumber = 32
  lineNumber = 1
  lineNumber = 32
  var call39 = callmethod(var_v,"kind", [0]);
  var string40 = new GraceString(": ");
  var opresult42 = callmethod(call39, "++", [1], string40);
  lineNumber = 1
  lineNumber = 32
  var call43 = callmethod(var_v,"value", [0]);
  var opresult45 = callmethod(opresult42, "++", [1], call43);
  var call46 = Grace_print(opresult45);
  lineNumber = 34
  lineNumber = 36
  lineNumber = 1
  lineNumber = 33
  var call48 = callmethod(var_util,"verbosity", [0]);
  var opresult50 = callmethod(call48, ">", [1], new GraceNum(30));
  if (Grace_isTrue(opresult50)) {
  lineNumber = 34
  var string51 = new GraceString("  [line: ");
  lineNumber = 1
  lineNumber = 34
  var call52 = callmethod(var_v,"line", [0]);
  var opresult54 = callmethod(string51, "++", [1], call52);
  var string55 = new GraceString(" position: ");
  var opresult57 = callmethod(opresult54, "++", [1], string55);
  lineNumber = 1
  lineNumber = 34
  var call58 = callmethod(var_v,"linePos", [0]);
  var opresult60 = callmethod(opresult57, "++", [1], call58);
  var string61 = new GraceString(" indent: ");
  var opresult63 = callmethod(opresult60, "++", [1], string61);
  lineNumber = 1
  lineNumber = 34
  var call64 = callmethod(var_v,"indent", [0]);
  var opresult66 = callmethod(opresult63, "++", [1], call64);
  var string67 = new GraceString("]");
  var opresult69 = callmethod(opresult66, "++", [1], string67);
  var call70 = Grace_print(opresult69);
  var if47 = call70;
}
  return if47;
};
  var call71 = callmethod(Grace_prelude,"for()do", [1, 1], var_tokens, block38);
  lineNumber = 37
  var call72 = callmethod(var_sys,"exit", [1], new GraceNum(0));
  var if33 = call72;
}
  lineNumber = 39
  var call73 = callmethod(var_parser,"parse", [1], var_tokens);
  var var_values = call73;
  lineNumber = 1
var func74 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 39
  return var_values
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["values"] = func74;
  lineNumber = 1
var func75 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_values = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["values:="] = func75;
  lineNumber = 46
  lineNumber = 48
  lineNumber = 1
  lineNumber = 41
  var call77 = callmethod(var_util,"target", [0]);
  var string78 = new GraceString("parse");
  var opresult80 = callmethod(call77, "==", [1], string78);
  if (Grace_isTrue(opresult80)) {
  lineNumber = 44
  lineNumber = 43
  lineNumber = 44
  var block81 = Grace_allocObject();
  block81.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block81.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block81.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block81.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block81.receiver = this;
  block81.className = 'block<compiler:44>';
  block81.real = function(
var_v
) {
  var call82 = callmethod(var_v,"pretty", [1], new GraceNum(0));
  var call83 = Grace_print(call82);
  return call83;
};
  var call84 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block81);
  lineNumber = 46
  var call85 = callmethod(var_sys,"exit", [1], new GraceNum(0));
  var if76 = call85;
}
  lineNumber = 52
  lineNumber = 54
  lineNumber = 1
  lineNumber = 48
  var call87 = callmethod(var_util,"target", [0]);
  var string88 = new GraceString("grace");
  var opresult90 = callmethod(call87, "==", [1], string88);
  if (Grace_isTrue(opresult90)) {
  lineNumber = 50
  lineNumber = 49
  lineNumber = 50
  var block91 = Grace_allocObject();
  block91.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block91.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block91.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block91.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block91.receiver = this;
  block91.className = 'block<compiler:50>';
  block91.real = function(
var_v
) {
  var call92 = callmethod(var_v,"toGrace", [1], new GraceNum(0));
  var call93 = Grace_print(call92);
  return call93;
};
  var call94 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block91);
  lineNumber = 52
  var call95 = callmethod(var_sys,"exit", [1], new GraceNum(0));
  var if86 = call95;
}
  lineNumber = 54
  var call96 = callmethod(var_typechecker,"typecheck", [1], var_values);
  var_values = call96;
  lineNumber = 59
  lineNumber = 61
  lineNumber = 1
  lineNumber = 55
  var call98 = callmethod(var_util,"target", [0]);
  var string99 = new GraceString("processed-ast");
  var opresult101 = callmethod(call98, "==", [1], string99);
  if (Grace_isTrue(opresult101)) {
  lineNumber = 57
  lineNumber = 56
  lineNumber = 57
  var block102 = Grace_allocObject();
  block102.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block102.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block102.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block102.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block102.receiver = this;
  block102.className = 'block<compiler:57>';
  block102.real = function(
var_v
) {
  var call103 = callmethod(var_v,"pretty", [1], new GraceNum(0));
  var call104 = Grace_print(call103);
  return call104;
};
  var call105 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block102);
  lineNumber = 59
  var call106 = callmethod(var_sys,"exit", [1], new GraceNum(0));
  var if97 = call106;
}
  lineNumber = 63
  lineNumber = 67
  lineNumber = 1
  lineNumber = 61
  var call108 = callmethod(var_util,"target", [0]);
  var string109 = new GraceString("subtypematrix");
  var opresult111 = callmethod(call108, "==", [1], string109);
  if (Grace_isTrue(opresult111)) {
  lineNumber = 62
  lineNumber = 1
  lineNumber = 62
  var call112 = callmethod(var_subtype,"printMatrix", [0]);
  lineNumber = 63
  var call113 = callmethod(var_sys,"exit", [1], new GraceNum(0));
  var if107 = call113;
}
  lineNumber = 81
  lineNumber = 82
  lineNumber = 1
  lineNumber = 67
  var call115 = callmethod(var_util,"target", [0]);
  var string116 = new GraceString("llvm30");
  var opresult118 = callmethod(call115, "==", [1], string116);
  if (Grace_isTrue(opresult118)) {
  lineNumber = 69
  lineNumber = 68
  lineNumber = 1
  lineNumber = 68
  var call119 = callmethod(var_util,"outfile", [0]);
  lineNumber = 1
  lineNumber = 68
  var call120 = callmethod(var_util,"modname", [0]);
  lineNumber = 1
  lineNumber = 68
  var call121 = callmethod(var_util,"runmode", [0]);
  lineNumber = 69
  lineNumber = 1
  lineNumber = 69
  var call122 = callmethod(var_util,"buildtype", [0]);
  lineNumber = 1
  lineNumber = 69
  var call123 = callmethod(var_util,"gracelibPath", [0]);
  lineNumber = 68
  var call124 = callmethod(var_genllvm30,"compile", [6], var_values, call119, call120, call121, call122, call123);
  var if114 = call124;
  } else {
  lineNumber = 81
  lineNumber = 73
  lineNumber = 1
  lineNumber = 70
  var call126 = callmethod(var_util,"target", [0]);
  var string127 = new GraceString("c");
  var opresult129 = callmethod(call126, "==", [1], string127);
  if (Grace_isTrue(opresult129)) {
  lineNumber = 72
  lineNumber = 71
  lineNumber = 1
  lineNumber = 71
  var call130 = callmethod(var_util,"outfile", [0]);
  lineNumber = 1
  lineNumber = 71
  var call131 = callmethod(var_util,"modname", [0]);
  lineNumber = 1
  lineNumber = 71
  var call132 = callmethod(var_util,"runmode", [0]);
  lineNumber = 72
  lineNumber = 1
  lineNumber = 72
  var call133 = callmethod(var_util,"buildtype", [0]);
  lineNumber = 71
  var call134 = callmethod(var_genc,"compile", [5], var_values, call130, call131, call132, call133);
  var if125 = call134;
  } else {
  lineNumber = 81
  lineNumber = 76
  lineNumber = 1
  lineNumber = 73
  var call136 = callmethod(var_util,"target", [0]);
  var string137 = new GraceString("js");
  var opresult139 = callmethod(call136, "==", [1], string137);
  lineNumber = 76
  lineNumber = 1
  lineNumber = 73
  var call140 = callmethod(var_util,"target", [0]);
  var string141 = new GraceString("ecmascript");
  var opresult143 = callmethod(call140, "==", [1], string141);
  var opresult145 = callmethod(opresult139, "|", [1], opresult143);
  if (Grace_isTrue(opresult145)) {
  lineNumber = 75
  lineNumber = 74
  lineNumber = 1
  lineNumber = 74
  var call146 = callmethod(var_util,"outfile", [0]);
  lineNumber = 1
  lineNumber = 74
  var call147 = callmethod(var_util,"modname", [0]);
  lineNumber = 1
  lineNumber = 74
  var call148 = callmethod(var_util,"runmode", [0]);
  lineNumber = 75
  lineNumber = 1
  lineNumber = 75
  var call149 = callmethod(var_util,"buildtype", [0]);
  lineNumber = 1
  lineNumber = 75
  var call150 = callmethod(var_util,"gracelibPath", [0]);
  lineNumber = 74
  var call151 = callmethod(var_genjs,"compile", [6], var_values, call146, call147, call148, call149, call150);
  var if135 = call151;
  } else {
  lineNumber = 81
  lineNumber = 79
  lineNumber = 1
  lineNumber = 76
  var call153 = callmethod(var_util,"target", [0]);
  var string154 = new GraceString("java");
  var opresult156 = callmethod(call153, "==", [1], string154);
  if (Grace_isTrue(opresult156)) {
  lineNumber = 78
  lineNumber = 77
  lineNumber = 1
  lineNumber = 77
  var call157 = callmethod(var_util,"outfile", [0]);
  lineNumber = 1
  lineNumber = 77
  var call158 = callmethod(var_util,"modname", [0]);
  lineNumber = 1
  lineNumber = 77
  var call159 = callmethod(var_util,"runmode", [0]);
  lineNumber = 78
  lineNumber = 1
  lineNumber = 78
  var call160 = callmethod(var_util,"buildtype", [0]);
  lineNumber = 1
  lineNumber = 78
  var call161 = callmethod(var_util,"gracelibPath", [0]);
  lineNumber = 77
  var call162 = callmethod(var_genjava,"compile", [6], var_values, call157, call158, call159, call160, call161);
  var if152 = call162;
  } else {
  lineNumber = 80
  var string163 = new GraceString("minigrace: no such target '");
  lineNumber = 1
  lineNumber = 80
  var call164 = callmethod(var_util,"target", [0]);
  var opresult166 = callmethod(string163, "++", [1], call164);
  var string167 = new GraceString("'");
  var opresult169 = callmethod(opresult166, "++", [1], string167);
  lineNumber = 81
  lineNumber = 1
  lineNumber = 80
  var call170 = callmethod(var_io,"error", [0]);
  var call171 = callmethod(call170,"write", [1], opresult169);
  lineNumber = 81
  var call172 = callmethod(var_sys,"exit", [1], new GraceNum(1));
  var if152 = call172;
}
  var if135 = if152;
}
  var if125 = if135;
}
  var if114 = if125;
}
  return this;
}
