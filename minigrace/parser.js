function gracecode_parser() {
  lineNumber = 2
// Import of io
  var var_io = do_import("io", gracecode_io);
  lineNumber = 3
// Import of ast
  var var_ast = do_import("ast", gracecode_ast);
  lineNumber = 4
// Import of util
  var var_util = do_import("util", gracecode_util);
  lineNumber = 6
// Import of subtype
  var var_subtype = do_import("subtype", gracecode_subtype);
  lineNumber = 7
  lineNumber = 6
  var var_lastline = new GraceNum(0);
  lineNumber = 1
var func0 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 6
  return var_lastline
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["lastline"] = func0;
  lineNumber = 1
var func1 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_lastline = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["lastline:="] = func1;
  lineNumber = 8
  lineNumber = 7
  var var_linenum = new GraceNum(0);
  lineNumber = 1
var func2 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 7
  return var_linenum
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["linenum"] = func2;
  lineNumber = 1
var func3 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_linenum = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["linenum:="] = func3;
  lineNumber = 9
  lineNumber = 8
  var var_lastIndent = new GraceNum(0);
  lineNumber = 1
var func4 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 8
  return var_lastIndent
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["lastIndent"] = func4;
  lineNumber = 1
var func5 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_lastIndent = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["lastIndent:="] = func5;
  lineNumber = 10
  lineNumber = 9
  var bool6 = new GraceBoolean(false)
  var var_indentFreePass = bool6;
  lineNumber = 1
var func7 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 9
  return var_indentFreePass
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["indentFreePass"] = func7;
  lineNumber = 1
var func8 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_indentFreePass = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["indentFreePass:="] = func8;
  lineNumber = 11
  lineNumber = 10
  var var_minIndentLevel = new GraceNum(0);
  lineNumber = 1
var func9 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 10
  return var_minIndentLevel
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["minIndentLevel"] = func9;
  lineNumber = 1
var func10 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_minIndentLevel = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["minIndentLevel:="] = func10;
  lineNumber = 12
  lineNumber = 11
  var var_statementIndent = new GraceNum(0);
  lineNumber = 1
var func11 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 11
  return var_statementIndent
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["statementIndent"] = func11;
  lineNumber = 1
var func12 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_statementIndent = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["statementIndent:="] = func12;
  lineNumber = 13
  var var_statementToken;
  lineNumber = 1
var func13 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 12
  return var_statementToken
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["statementToken"] = func13;
  lineNumber = 1
var func14 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_statementToken = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["statementToken:="] = func14;
  lineNumber = 14
  lineNumber = 13
  var var_tokens = new GraceNum(0);
  lineNumber = 1
var func15 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 13
  return var_tokens
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["tokens"] = func15;
  lineNumber = 1
var func16 = function(argcv) {
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
  this.methods["tokens:="] = func16;
  lineNumber = 15
  var array17 = new GraceList([
]);

  var var_values = array17;
  lineNumber = 1
var func18 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 14
  return var_values
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["values"] = func18;
  lineNumber = 1
var func19 = function(argcv) {
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
  this.methods["values:="] = func19;
  lineNumber = 18
  lineNumber = 15
  var var_auto__95__count = new GraceNum(0);
  lineNumber = 1
var func20 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 15
  return var_auto__95__count
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["auto_count"] = func20;
  lineNumber = 1
var func21 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_auto__95__count = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["auto_count:="] = func21;
  lineNumber = 19
  var var_sym;
  lineNumber = 1
var func22 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 18
  return var_sym
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["sym"] = func22;
  lineNumber = 1
var func23 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_sym = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["sym:="] = func23;
  lineNumber = 23
  var var_lastToken;
  lineNumber = 1
var func24 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 19
  return var_lastToken
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["lastToken"] = func24;
  lineNumber = 1
var func25 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_lastToken = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["lastToken:="] = func25;
  lineNumber = 38
var func26 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 25
  lineNumber = 24
  var_lastToken = var_sym;
  lineNumber = 38
  lineNumber = 40
  lineNumber = 1
  lineNumber = 25
  var call28 = callmethod(var_tokens,"size", [0]);
  var opresult30 = callmethod(call28, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult30)) {
  lineNumber = 27
  lineNumber = 26
  var_lastline = var_linenum;
  lineNumber = 28
  lineNumber = 1
  lineNumber = 27
  var call31 = callmethod(var_sym,"indent", [0]);
  var_lastIndent = call31;
  lineNumber = 29
  lineNumber = 1
  lineNumber = 28
  var call32 = callmethod(var_tokens,"pop", [0]);
  var_sym = call32;
  lineNumber = 30
  lineNumber = 1
  lineNumber = 29
  var call33 = callmethod(var_sym,"line", [0]);
  var_linenum = call33;
  lineNumber = 30
  lineNumber = 1
  lineNumber = 30
  var call34 = callmethod(var_sym,"line", [0]);
  lineNumber = 1
  lineNumber = 30
  var call35 = callmethod(var_sym,"linePos", [0]);
  var call36 = callmethod(var_util,"setPosition", [2], call34, call35);
  var if27 = call36;
  } else {
  lineNumber = 38
  var obj37 = Grace_allocObject();
  obj37.outer = this;
    var reader_parser_outer38 = function() {
    return this.outer;
  }
  obj37.methods["outer"] = reader_parser_outer38;
function obj_init_37() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 33
  var string39 = new GraceString("eof");
  obj37.data["kind"] = string39;
    var reader_parser_kind40 = function() {
    return this.data["kind"];
  }
  obj37.methods["kind"] = reader_parser_kind40;
  obj37.data["kind"] = string39;
  var writer_parser_kind40 = function(argcv, o) {
    this.data["kind"] = o;
  }
  obj37.methods["kind:="] = writer_parser_kind40;
obj37.mutable = true;
  lineNumber = 35
  lineNumber = 34
  var opresult42 = callmethod(var_linenum, "+", [1], new GraceNum(1));
  obj37.data["line"] = opresult42;
    var reader_parser_line43 = function() {
    return this.data["line"];
  }
  obj37.methods["line"] = reader_parser_line43;
  obj37.data["line"] = opresult42;
  var writer_parser_line43 = function(argcv, o) {
    this.data["line"] = o;
  }
  obj37.methods["line:="] = writer_parser_line43;
obj37.mutable = true;
  lineNumber = 35
  obj37.data["linePos"] = new GraceNum(0);
    var reader_parser_linePos44 = function() {
    return this.data["linePos"];
  }
  obj37.methods["linePos"] = reader_parser_linePos44;
  obj37.data["linePos"] = new GraceNum(0);
  var writer_parser_linePos44 = function(argcv, o) {
    this.data["linePos"] = o;
  }
  obj37.methods["linePos:="] = writer_parser_linePos44;
obj37.mutable = true;
  lineNumber = 36
  obj37.data["indent"] = new GraceNum(0);
    var reader_parser_indent45 = function() {
    return this.data["indent"];
  }
  obj37.methods["indent"] = reader_parser_indent45;
  obj37.data["indent"] = new GraceNum(0);
  var writer_parser_indent45 = function(argcv, o) {
    this.data["indent"] = o;
  }
  obj37.methods["indent:="] = writer_parser_indent45;
obj37.mutable = true;
  lineNumber = 37
  var string46 = new GraceString("");
  obj37.data["value"] = string46;
    var reader_parser_value47 = function() {
    return this.data["value"];
  }
  obj37.methods["value"] = reader_parser_value47;
  obj37.data["value"] = string46;
  var writer_parser_value47 = function(argcv, o) {
    this.data["value"] = o;
  }
  obj37.methods["value:="] = writer_parser_value47;
obj37.mutable = true;
  superDepth = origSuperDepth;
}
obj_init_37.apply(obj37, []);
  var_sym = obj37;
  var if27 = obj37;
}
  return if27
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["next"] = func26;
  lineNumber = 46
var func48 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1
  lineNumber = 45
  var call49 = callmethod(var_sym,"kind", [0]);
  var opresult51 = callmethod(call49, "==", [1], var_t);
  return opresult51
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["accept"] = func48;
  lineNumber = 54
var func52 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1
  lineNumber = 52
  var call53 = callmethod(var_sym,"kind", [0]);
  var opresult55 = callmethod(call53, "==", [1], var_t);
  lineNumber = 54
  lineNumber = 52
  lineNumber = 54
  lineNumber = 1
  lineNumber = 52
  var call56 = callmethod(var_sym,"line", [0]);
  var opresult58 = callmethod(var_lastline, "==", [1], call56);
  lineNumber = 54
  lineNumber = 1
  lineNumber = 53
  var call59 = callmethod(var_sym,"indent", [0]);
  var opresult61 = callmethod(call59, ">", [1], var_lastIndent);
  var opresult63 = callmethod(opresult58, "|", [1], opresult61);
  var opresult65 = callmethod(opresult55, "&", [1], opresult63);
  return opresult65
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["acceptSameLine"] = func52;
  lineNumber = 61
var func66 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var var_other = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1
  lineNumber = 59
  var call67 = callmethod(var_sym,"kind", [0]);
  var opresult69 = callmethod(call67, "==", [1], var_t);
  lineNumber = 61
  lineNumber = 1
  lineNumber = 59
  var call70 = callmethod(var_other,"line", [0]);
  lineNumber = 61
  lineNumber = 1
  lineNumber = 59
  var call71 = callmethod(var_sym,"line", [0]);
  var opresult73 = callmethod(call70, "==", [1], call71);
  lineNumber = 61
  lineNumber = 1
  lineNumber = 60
  var call74 = callmethod(var_sym,"indent", [0]);
  lineNumber = 61
  lineNumber = 1
  lineNumber = 60
  var call75 = callmethod(var_other,"indent", [0]);
  var opresult77 = callmethod(call74, ">", [1], call75);
  var opresult79 = callmethod(opresult73, "|", [1], opresult77);
  var opresult81 = callmethod(opresult69, "&", [1], opresult79);
  return opresult81
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["accept()onLineOf"] = func66;
  lineNumber = 67
var func82 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var var_other = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1
  lineNumber = 65
  var call83 = callmethod(var_sym,"kind", [0]);
  var opresult85 = callmethod(call83, "==", [1], var_t);
  lineNumber = 67
  lineNumber = 1
  lineNumber = 65
  var call86 = callmethod(var_other,"line", [0]);
  lineNumber = 67
  lineNumber = 1
  lineNumber = 65
  var call87 = callmethod(var_sym,"line", [0]);
  var opresult89 = callmethod(call86, "==", [1], call87);
  lineNumber = 67
  lineNumber = 1
  lineNumber = 66
  var call90 = callmethod(var_sym,"indent", [0]);
  lineNumber = 67
  lineNumber = 1
  lineNumber = 66
  var call91 = callmethod(var_other,"indent", [0]);
  var opresult93 = callmethod(call90, ">", [1], call91);
  var opresult95 = callmethod(opresult89, "|", [1], opresult93);
  lineNumber = 67
  lineNumber = 1
  lineNumber = 66
  var call96 = callmethod(var_lastToken,"line", [0]);
  lineNumber = 67
  lineNumber = 1
  lineNumber = 66
  var call97 = callmethod(var_sym,"line", [0]);
  var opresult99 = callmethod(call96, "==", [1], call97);
  var opresult101 = callmethod(opresult95, "|", [1], opresult99);
  var opresult103 = callmethod(opresult85, "&", [1], opresult101);
  return opresult103
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["accept()onLineOfLastOr"] = func82;
  lineNumber = 71
var func104 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 70
  lineNumber = 71
  lineNumber = 1
  lineNumber = 70
  var call105 = callmethod(var_sym,"line", [0]);
  var opresult107 = callmethod(var_lastline, "==", [1], call105);
  lineNumber = 71
  lineNumber = 1
  lineNumber = 70
  var call108 = callmethod(var_sym,"indent", [0]);
  var opresult110 = callmethod(call108, ">", [1], var_lastIndent);
  var opresult112 = callmethod(opresult107, "|", [1], opresult110);
  return opresult112
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["tokenOnSameLine"] = func104;
  lineNumber = 77
var func113 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 76
  lineNumber = 77
  lineNumber = 1
  lineNumber = 74
  var call115 = callmethod(var_sym,"kind", [0]);
  var opresult117 = callmethod(call115, "==", [1], var_t);
  if (Grace_isTrue(opresult117)) {
  lineNumber = 76
  lineNumber = 75
  var bool118 = new GraceBoolean(true)
  return bool118
  var if114 = undefined;
}
  lineNumber = 77
  var string119 = new GraceString("expected ");
  var opresult121 = callmethod(string119, "++", [1], var_t);
  var string122 = new GraceString(", got ");
  var opresult124 = callmethod(opresult121, "++", [1], string122);
  lineNumber = 1
  lineNumber = 77
  var call125 = callmethod(var_sym,"kind", [0]);
  var opresult127 = callmethod(opresult124, "++", [1], call125);
  var string128 = new GraceString(": ");
  var opresult130 = callmethod(opresult127, "++", [1], string128);
  lineNumber = 1
  lineNumber = 77
  var call131 = callmethod(var_sym,"value", [0]);
  var opresult133 = callmethod(opresult130, "++", [1], call131);
  var string134 = new GraceString("");
  var opresult136 = callmethod(opresult133, "++", [1], string134);
  var call137 = callmethod(var_util,"syntax_error", [1], opresult136);
  return call137
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["expect"] = func113;
  lineNumber = 87
var func138 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 83
  lineNumber = 84
  lineNumber = 1
  lineNumber = 81
  var call140 = callmethod(var_sym,"kind", [0]);
  var opresult142 = callmethod(call140, "==", [1], var_t);
  if (Grace_isTrue(opresult142)) {
  lineNumber = 83
  lineNumber = 82
  var bool143 = new GraceBoolean(true)
  return bool143
  var if139 = undefined;
}
  lineNumber = 86
  lineNumber = 87
  lineNumber = 1
  lineNumber = 84
  var call145 = callmethod(var_sym,"kind", [0]);
  var opresult147 = callmethod(call145, "==", [1], var_s);
  if (Grace_isTrue(opresult147)) {
  lineNumber = 86
  lineNumber = 85
  var bool148 = new GraceBoolean(true)
  return bool148
  var if144 = undefined;
}
  lineNumber = 87
  var string149 = new GraceString("expected ");
  var opresult151 = callmethod(string149, "++", [1], var_t);
  var string152 = new GraceString(", got ");
  var opresult154 = callmethod(opresult151, "++", [1], string152);
  lineNumber = 1
  lineNumber = 87
  var call155 = callmethod(var_sym,"kind", [0]);
  var opresult157 = callmethod(opresult154, "++", [1], call155);
  var string158 = new GraceString(": ");
  var opresult160 = callmethod(opresult157, "++", [1], string158);
  lineNumber = 1
  lineNumber = 87
  var call161 = callmethod(var_sym,"value", [0]);
  var opresult163 = callmethod(opresult160, "++", [1], call161);
  var string164 = new GraceString("");
  var opresult166 = callmethod(opresult163, "++", [1], string164);
  var call167 = callmethod(var_util,"syntax_error", [1], opresult166);
  return call167
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["expect()or"] = func138;
  lineNumber = 98
var func168 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var var_s = arguments[curarg];
  curarg++;
  var var_u = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 97
  lineNumber = 98
  lineNumber = 1
  lineNumber = 91
  var call170 = callmethod(var_sym,"kind", [0]);
  var opresult172 = callmethod(call170, "==", [1], var_t);
  if (Grace_isTrue(opresult172)) {
  lineNumber = 93
  lineNumber = 92
  var bool173 = new GraceBoolean(true)
  return bool173
  var if169 = undefined;
  } else {
  lineNumber = 97
  lineNumber = 95
  lineNumber = 1
  lineNumber = 93
  var call175 = callmethod(var_sym,"kind", [0]);
  var opresult177 = callmethod(call175, "==", [1], var_s);
  if (Grace_isTrue(opresult177)) {
  lineNumber = 95
  lineNumber = 94
  var bool178 = new GraceBoolean(true)
  return bool178
  var if174 = undefined;
  } else {
  lineNumber = 97
  lineNumber = 98
  lineNumber = 1
  lineNumber = 95
  var call180 = callmethod(var_sym,"kind", [0]);
  var opresult182 = callmethod(call180, "==", [1], var_u);
  if (Grace_isTrue(opresult182)) {
  lineNumber = 97
  lineNumber = 96
  var bool183 = new GraceBoolean(true)
  return bool183
  var if179 = undefined;
}
  var if174 = if179;
}
  var if169 = if174;
}
  lineNumber = 98
  var string184 = new GraceString("expected ");
  var opresult186 = callmethod(string184, "++", [1], var_t);
  var string187 = new GraceString(" or ");
  var opresult189 = callmethod(opresult186, "++", [1], string187);
  var opresult191 = callmethod(opresult189, "++", [1], var_s);
  var string192 = new GraceString(" or ");
  var opresult194 = callmethod(opresult191, "++", [1], string192);
  var opresult196 = callmethod(opresult194, "++", [1], var_u);
  var string197 = new GraceString(", got ");
  var opresult199 = callmethod(opresult196, "++", [1], string197);
  lineNumber = 1
  lineNumber = 98
  var call200 = callmethod(var_sym,"kind", [0]);
  var opresult202 = callmethod(opresult199, "++", [1], call200);
  var string203 = new GraceString(": ");
  var opresult205 = callmethod(opresult202, "++", [1], string203);
  lineNumber = 1
  lineNumber = 98
  var call206 = callmethod(var_sym,"value", [0]);
  var opresult208 = callmethod(opresult205, "++", [1], call206);
  var string209 = new GraceString("");
  var opresult211 = callmethod(opresult208, "++", [1], string209);
  var call212 = callmethod(var_util,"syntax_error", [1], opresult211);
  return call212
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["expect()or()or"] = func168;
  lineNumber = 105
var func213 = function(argcv) {
  var curarg = 1;
  var var_ablock = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 103
  lineNumber = 1
  lineNumber = 102
  var call214 = callmethod(var_tokens,"size", [0]);
  var var_sz = call214;
  lineNumber = 103
  lineNumber = 1
  lineNumber = 103
  var call215 = callmethod(var_ablock,"apply", [0]);
  lineNumber = 105
  lineNumber = 107
  lineNumber = 1
  lineNumber = 104
  var call217 = callmethod(var_tokens,"size", [0]);
  var opresult219 = callmethod(call217, "==", [1], var_sz);
  if (Grace_isTrue(opresult219)) {
  lineNumber = 105
  var string220 = new GraceString("unable to consume token");
  var call221 = callmethod(var_util,"syntax_error", [1], string220);
  var if216 = call221;
}
  return if216
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["expectConsume"] = func213;
  lineNumber = 113
var func222 = function(argcv) {
  var curarg = 1;
  var var_ablock = arguments[curarg];
  curarg++;
  var var_tblock = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 111
  lineNumber = 1
  lineNumber = 110
  var call223 = callmethod(var_tokens,"size", [0]);
  var var_sz = call223;
  lineNumber = 111
  lineNumber = 1
  lineNumber = 111
  var call224 = callmethod(var_ablock,"apply", [0]);
  lineNumber = 113
  lineNumber = 115
  lineNumber = 1
  lineNumber = 112
  var call226 = callmethod(var_tokens,"size", [0]);
  var opresult228 = callmethod(call226, "/=", [1], var_sz);
  if (Grace_isTrue(opresult228)) {
  lineNumber = 113
  lineNumber = 1
  lineNumber = 113
  var call229 = callmethod(var_tblock,"apply", [0]);
  var if225 = call229;
}
  return if225
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["ifConsume()then"] = func222;
  lineNumber = 121
var func230 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 119
  lineNumber = 1
  lineNumber = 119
  var call231 = callmethod(var_sym,"value", [0]);
  lineNumber = 120
  lineNumber = 1
  lineNumber = 119
  var call232 = callmethod(var_ast,"numNode", [0]);
  var call233 = callmethod(call232,"new", [1], call231);
  var var_o = call233;
  lineNumber = 120
  var call234 = callmethod(var_values,"push", [1], var_o);
  lineNumber = 121
  var call235 = callmethod(this,"next", [0]);
  return call235
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["pushnum"] = func230;
  lineNumber = 128
var func236 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 126
  lineNumber = 1
  lineNumber = 126
  var call237 = callmethod(var_sym,"value", [0]);
  lineNumber = 127
  lineNumber = 1
  lineNumber = 126
  var call238 = callmethod(var_ast,"octetsNode", [0]);
  var call239 = callmethod(call238,"new", [1], call237);
  var var_o = call239;
  lineNumber = 127
  var call240 = callmethod(var_values,"push", [1], var_o);
  lineNumber = 128
  var call241 = callmethod(this,"next", [0]);
  return call241
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["pushoctets"] = func236;
  lineNumber = 135
var func242 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 133
  lineNumber = 1
  lineNumber = 133
  var call243 = callmethod(var_sym,"value", [0]);
  lineNumber = 134
  lineNumber = 1
  lineNumber = 133
  var call244 = callmethod(var_ast,"stringNode", [0]);
  var call245 = callmethod(call244,"new", [1], call243);
  var var_o = call245;
  lineNumber = 134
  var call246 = callmethod(var_values,"push", [1], var_o);
  lineNumber = 135
  var call247 = callmethod(this,"next", [0]);
  return call247
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["pushstring"] = func242;
  lineNumber = 147
var func248 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 141
  lineNumber = 1
  lineNumber = 141
  var call249 = callmethod(var_sym,"value", [0]);
  var bool250 = new GraceBoolean(false)
  lineNumber = 142
  lineNumber = 1
  lineNumber = 141
  var call251 = callmethod(var_ast,"identifierNode", [0]);
  var call252 = callmethod(call251,"new", [2], call249, bool250);
  var var_o = call252;
  lineNumber = 145
  lineNumber = 146
  lineNumber = 1
  lineNumber = 142
  var call254 = callmethod(var_o,"value", [0]);
  var string255 = new GraceString("_");
  var opresult257 = callmethod(call254, "==", [1], string255);
  if (Grace_isTrue(opresult257)) {
  lineNumber = 144
  lineNumber = 1
  lineNumber = 144
  lineNumber = 143
  var string258 = new GraceString("__");
  var opresult260 = callmethod(string258, "++", [1], var_auto__95__count);
  var call261 = callmethod(var_o,"value:=", [1], opresult260);
  lineNumber = 145
  lineNumber = 144
  var opresult263 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult263;
  var if253 = opresult263;
}
  lineNumber = 146
  var call264 = callmethod(var_values,"push", [1], var_o);
  lineNumber = 147
  var call265 = callmethod(this,"next", [0]);
  return call265
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["pushidentifier"] = func248;
  lineNumber = 156
var func266 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 151
  var string268 = new GraceString("identifier");
  lineNumber = 159
  var call269 = callmethod(this,"accept", [1], string268);
  if (Grace_isTrue(call269)) {
  lineNumber = 152
  var call270 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 153
  var call271 = callmethod(this,"generic", [0]);
  var if267 = call271;
  } else {
  lineNumber = 156
  lineNumber = 155
  var string273 = new GraceString("lbrace");
  lineNumber = 158
  var call274 = callmethod(this,"accept", [1], string273);
  if (Grace_isTrue(call274)) {
  lineNumber = 156
  var call275 = callmethod(this,"doanontype", [0]);
  var if272 = call275;
}
  var if267 = if272;
}
  return if267
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["dotypeterm"] = func266;
  lineNumber = 209
var func276 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 163
  lineNumber = 162
  var bool277 = new GraceBoolean(false)
  var var_overallType = bool277;
  lineNumber = 164
  lineNumber = 163
  var bool278 = new GraceBoolean(false)
  var var_tp = bool278;
  lineNumber = 165
  lineNumber = 164
  var bool279 = new GraceBoolean(false)
  var var_op = bool279;
  lineNumber = 166
  var array280 = new GraceList([
]);

  var var_unionTypes = array280;
  var call281 = callmethod(this,"dotypeterm", [0]);
  lineNumber = 168
  lineNumber = 1
  lineNumber = 167
  var call282 = callmethod(var_values,"pop", [0]);
  var_overallType = call282;
  lineNumber = 174
  lineNumber = 168
  var block283 = Grace_allocObject();
  block283.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block283.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block283.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block283.receiver = this;
  block283.className = 'block<parser:168>';
  block283.real = function(
) {
  var string284 = new GraceString("op");
  var call285 = callmethod(this,"acceptSameLine", [1], string284);
  lineNumber = 1
  lineNumber = 168
  var call286 = callmethod(var_sym,"value", [0]);
  var string287 = new GraceString("|");
  var opresult289 = callmethod(call286, "==", [1], string287);
  var opresult291 = callmethod(call285, "&", [1], opresult289);
  return opresult291;
};
  lineNumber = 174
  var block292 = Grace_allocObject();
  block292.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block292.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block292.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block292.receiver = this;
  block292.className = 'block<parser:174>';
  block292.real = function(
) {
  lineNumber = 170
  lineNumber = 172
  lineNumber = 1
  lineNumber = 169
  var call294 = callmethod(var_unionTypes,"size", [0]);
  var opresult296 = callmethod(call294, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult296)) {
  lineNumber = 170
  var call297 = callmethod(var_unionTypes,"push", [1], var_overallType);
  var if293 = call297;
}
  lineNumber = 172
  var call298 = callmethod(this,"next", [0]);
  lineNumber = 173
  var call299 = callmethod(this,"dotypeterm", [0]);
  lineNumber = 174
  lineNumber = 1
  lineNumber = 174
  var call300 = callmethod(var_values,"pop", [0]);
  var call301 = callmethod(var_unionTypes,"push", [1], call300);
  return call301;
};
  var call302 = callmethod(Grace_prelude,"while()do", [1, 1], block283, block292);
  lineNumber = 186
  lineNumber = 188
  lineNumber = 1
  lineNumber = 176
  var call304 = callmethod(var_unionTypes,"size", [0]);
  var opresult306 = callmethod(call304, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult306)) {
  lineNumber = 178
  lineNumber = 177
  var string307 = new GraceString("Union<");
  var var_unionName = string307;
  lineNumber = 180
  lineNumber = 178
  lineNumber = 180
  var block308 = Grace_allocObject();
  block308.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block308.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block308.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block308.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block308.receiver = this;
  block308.className = 'block<parser:180>';
  block308.real = function(
var_ut
) {
  lineNumber = 179
  var string309 = new GraceString("");
  var opresult311 = callmethod(string309, "++", [1], var_unionName);
  var string312 = new GraceString("|");
  var opresult314 = callmethod(opresult311, "++", [1], string312);
  lineNumber = 180
  lineNumber = 1
  lineNumber = 179
  var call315 = callmethod(var_ut,"value", [0]);
  var opresult317 = callmethod(opresult314, "++", [1], call315);
  var string318 = new GraceString("");
  var opresult320 = callmethod(opresult317, "++", [1], string318);
  var_unionName = opresult320;
  return opresult320;
};
  var call321 = callmethod(Grace_prelude,"for()do", [1, 1], var_unionTypes, block308);
  lineNumber = 182
  lineNumber = 181
  var string322 = new GraceString("");
  var opresult324 = callmethod(string322, "++", [1], var_unionName);
  var string325 = new GraceString("|>");
  var opresult327 = callmethod(opresult324, "++", [1], string325);
  var_unionName = opresult327;
  lineNumber = 182
  var array328 = new GraceList([
]);

  lineNumber = 183
  lineNumber = 1
  lineNumber = 182
  var call329 = callmethod(var_ast,"typeNode", [0]);
  var call330 = callmethod(call329,"new", [2], var_unionName, array328);
  var_overallType = call330;
  lineNumber = 184
  lineNumber = 183
  lineNumber = 184
  var block331 = Grace_allocObject();
  block331.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block331.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block331.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block331.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block331.receiver = this;
  block331.className = 'block<parser:184>';
  block331.real = function(
var_ut
) {
  lineNumber = 185
  lineNumber = 1
  lineNumber = 184
  var call332 = callmethod(var_overallType,"unionTypes", [0]);
  var call333 = callmethod(call332,"push", [1], var_ut);
  return call333;
};
  var call334 = callmethod(Grace_prelude,"for()do", [1, 1], var_unionTypes, block331);
  lineNumber = 186
  var call335 = callmethod(var_subtype,"addType", [1], var_overallType);
  var if303 = call335;
}
  lineNumber = 189
  var array336 = new GraceList([
]);

  var var_intersectionTypes = array336;
  lineNumber = 195
  lineNumber = 189
  var block337 = Grace_allocObject();
  block337.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block337.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block337.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block337.receiver = this;
  block337.className = 'block<parser:189>';
  block337.real = function(
) {
  var string338 = new GraceString("op");
  var call339 = callmethod(this,"acceptSameLine", [1], string338);
  lineNumber = 1
  lineNumber = 189
  var call340 = callmethod(var_sym,"value", [0]);
  var string341 = new GraceString("&");
  var opresult343 = callmethod(call340, "==", [1], string341);
  var opresult345 = callmethod(call339, "&", [1], opresult343);
  return opresult345;
};
  lineNumber = 195
  var block346 = Grace_allocObject();
  block346.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block346.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block346.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block346.receiver = this;
  block346.className = 'block<parser:195>';
  block346.real = function(
) {
  lineNumber = 191
  lineNumber = 193
  lineNumber = 1
  lineNumber = 190
  var call348 = callmethod(var_intersectionTypes,"size", [0]);
  var opresult350 = callmethod(call348, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult350)) {
  lineNumber = 191
  var call351 = callmethod(var_intersectionTypes,"push", [1], var_overallType);
  var if347 = call351;
}
  lineNumber = 193
  var call352 = callmethod(this,"next", [0]);
  lineNumber = 194
  var call353 = callmethod(this,"dotypeterm", [0]);
  lineNumber = 195
  lineNumber = 1
  lineNumber = 195
  var call354 = callmethod(var_values,"pop", [0]);
  var call355 = callmethod(var_intersectionTypes,"push", [1], call354);
  return call355;
};
  var call356 = callmethod(Grace_prelude,"while()do", [1, 1], block337, block346);
  lineNumber = 207
  lineNumber = 209
  lineNumber = 1
  lineNumber = 197
  var call358 = callmethod(var_intersectionTypes,"size", [0]);
  var opresult360 = callmethod(call358, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult360)) {
  lineNumber = 199
  lineNumber = 198
  var string361 = new GraceString("Intersection<");
  var var_intersectionName = string361;
  lineNumber = 201
  lineNumber = 199
  lineNumber = 201
  var block362 = Grace_allocObject();
  block362.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block362.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block362.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block362.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block362.receiver = this;
  block362.className = 'block<parser:201>';
  block362.real = function(
var_it
) {
  lineNumber = 200
  var string363 = new GraceString("");
  var opresult365 = callmethod(string363, "++", [1], var_intersectionName);
  var string366 = new GraceString("&");
  var opresult368 = callmethod(opresult365, "++", [1], string366);
  lineNumber = 201
  lineNumber = 1
  lineNumber = 200
  var call369 = callmethod(var_it,"value", [0]);
  var opresult371 = callmethod(opresult368, "++", [1], call369);
  var string372 = new GraceString("");
  var opresult374 = callmethod(opresult371, "++", [1], string372);
  var_intersectionName = opresult374;
  return opresult374;
};
  var call375 = callmethod(Grace_prelude,"for()do", [1, 1], var_intersectionTypes, block362);
  lineNumber = 203
  lineNumber = 202
  var string376 = new GraceString("&>");
  var opresult378 = callmethod(var_intersectionName, "++", [1], string376);
  var_intersectionName = opresult378;
  lineNumber = 203
  var array379 = new GraceList([
]);

  lineNumber = 204
  lineNumber = 1
  lineNumber = 203
  var call380 = callmethod(var_ast,"typeNode", [0]);
  var call381 = callmethod(call380,"new", [2], var_intersectionName, array379);
  var_overallType = call381;
  lineNumber = 205
  lineNumber = 204
  lineNumber = 205
  var block382 = Grace_allocObject();
  block382.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block382.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block382.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block382.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block382.receiver = this;
  block382.className = 'block<parser:205>';
  block382.real = function(
var_it
) {
  lineNumber = 206
  lineNumber = 1
  lineNumber = 205
  var call383 = callmethod(var_overallType,"intersectionTypes", [0]);
  var call384 = callmethod(call383,"push", [1], var_it);
  return call384;
};
  var call385 = callmethod(Grace_prelude,"for()do", [1, 1], var_intersectionTypes, block382);
  lineNumber = 207
  var call386 = callmethod(var_subtype,"addType", [1], var_overallType);
  var if357 = call386;
}
  lineNumber = 209
  var call387 = callmethod(var_values,"push", [1], var_overallType);
  return call387
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["dotyperef"] = func276;
  lineNumber = 304
var func388 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 214
  var string390 = new GraceString("lbrace");
  lineNumber = 306
  var call391 = callmethod(this,"accept", [1], string390);
  if (Grace_isTrue(call391)) {
  lineNumber = 215
  var call392 = callmethod(this,"next", [0]);
  lineNumber = 217
  lineNumber = 216
  var opresult394 = callmethod(var_statementIndent, "+", [1], new GraceNum(1));
  var var_minInd = opresult394;
  lineNumber = 218
  lineNumber = 217
  var var_startIndent = var_statementIndent;
  lineNumber = 219
  var var_ident1;
  lineNumber = 220
  lineNumber = 219
  var var_s = var_sym;
  lineNumber = 221
  var var_tmp;
  lineNumber = 222
  var array395 = new GraceList([
]);

  var var_params = array395;
  lineNumber = 223
  var array396 = new GraceList([
]);

  var var_body = array396;
  lineNumber = 224
  lineNumber = 223
  var bool397 = new GraceBoolean(true)
  var var_havearrow = bool397;
  lineNumber = 225
  lineNumber = 224
  var bool398 = new GraceBoolean(false)
  var var_found = bool398;
  lineNumber = 226
  lineNumber = 225
  var var_i = new GraceNum(0);
  lineNumber = 227
  lineNumber = 226
  var var_toks = var_tokens;
  lineNumber = 228
  lineNumber = 227
  var bool399 = new GraceBoolean(false)
  var var_isMatchingBlock = bool399;
  lineNumber = 229
  lineNumber = 228
  var_statementToken = var_sym;
  lineNumber = 231
  lineNumber = 232
  lineNumber = 1
  lineNumber = 229
  var call401 = callmethod(var_sym,"kind", [0]);
  var string402 = new GraceString("lparen");
  var opresult404 = callmethod(call401, "==", [1], string402);
  if (Grace_isTrue(opresult404)) {
  lineNumber = 231
  lineNumber = 230
  var bool405 = new GraceBoolean(true)
  var_isMatchingBlock = bool405;
  var if400 = bool405;
}
  lineNumber = 277
  lineNumber = 232
  var block406 = Grace_allocObject();
  block406.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block406.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block406.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block406.receiver = this;
  block406.className = 'block<parser:232>';
  block406.real = function(
) {
  var call407 = callmethod(this,"expression", [0]);
  return call407;
};
  lineNumber = 277
  var block408 = Grace_allocObject();
  block408.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block408.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block408.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block408.receiver = this;
  block408.className = 'block<parser:277>';
  block408.real = function(
) {
  lineNumber = 233
  var string410 = new GraceString("comma");
  lineNumber = 279
  var call411 = callmethod(this,"accept", [1], string410);
  lineNumber = 233
  var string412 = new GraceString("arrow");
  var call413 = callmethod(this,"accept", [1], string412);
  var opresult415 = callmethod(call411, "|", [1], call413);
  var string416 = new GraceString("colon");
  var call417 = callmethod(this,"accept", [1], string416);
  var opresult419 = callmethod(opresult415, "|", [1], call417);
  if (Grace_isTrue(opresult419)) {
  lineNumber = 236
  lineNumber = 1
  lineNumber = 235
  var call420 = callmethod(var_values,"pop", [0]);
  var_ident1 = call420;
  lineNumber = 242
  lineNumber = 236
  var string422 = new GraceString("colon");
  lineNumber = 243
  var call423 = callmethod(this,"accept", [1], string422);
  if (Grace_isTrue(call423)) {
  lineNumber = 239
  var call424 = callmethod(this,"next", [0]);
  lineNumber = 240
  var call425 = callmethod(this,"expression", [0]);
  lineNumber = 242
  lineNumber = 1
  lineNumber = 242
  lineNumber = 1
  lineNumber = 241
  var call426 = callmethod(var_values,"pop", [0]);
  var call427 = callmethod(var_ident1,"dtype:=", [1], call426);
  var if421 = call427;
}
  lineNumber = 243
  var call428 = callmethod(var_params,"push", [1], var_ident1);
  lineNumber = 246
  lineNumber = 247
  lineNumber = 1
  lineNumber = 244
  var call430 = callmethod(var_ident1,"kind", [0]);
  var string431 = new GraceString("identifier");
  var opresult433 = callmethod(call430, "!=", [1], string431);
  if (Grace_isTrue(opresult433)) {
  lineNumber = 246
  lineNumber = 245
  var bool434 = new GraceBoolean(true)
  var_isMatchingBlock = bool434;
  var if429 = bool434;
}
  lineNumber = 249
  lineNumber = 247
  var block436 = Grace_allocObject();
  block436.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block436.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block436.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block436.receiver = this;
  block436.className = 'block<parser:247>';
  block436.real = function(
) {
  var string437 = new GraceString("comma");
  var call438 = callmethod(this,"accept", [1], string437);
  return call438;
};
  var opresult440 = callmethod(var_isMatchingBlock, "&&", [1], block436);
  if (Grace_isTrue(opresult440)) {
  lineNumber = 249
  lineNumber = 248
  var string441 = new GraceString("matching blocks can have only ");
  lineNumber = 249
  var string442 = new GraceString("one parameter");
  var opresult444 = callmethod(string441, "++", [1], string442);
  lineNumber = 248
  var call445 = callmethod(var_util,"syntax_error", [1], opresult444);
  var if435 = call445;
}
  lineNumber = 261
  lineNumber = 251
  var block446 = Grace_allocObject();
  block446.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block446.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block446.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block446.receiver = this;
  block446.className = 'block<parser:251>';
  block446.real = function(
) {
  var string447 = new GraceString("comma");
  var call448 = callmethod(this,"accept", [1], string447);
  return call448;
};
  lineNumber = 261
  var block449 = Grace_allocObject();
  block449.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block449.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block449.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block449.receiver = this;
  block449.className = 'block<parser:261>';
  block449.real = function(
) {
  lineNumber = 253
  var call450 = callmethod(this,"next", [0]);
  lineNumber = 254
  var call451 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 256
  lineNumber = 1
  lineNumber = 255
  var call452 = callmethod(var_values,"pop", [0]);
  var_ident1 = call452;
  lineNumber = 260
  lineNumber = 256
  var string454 = new GraceString("colon");
  lineNumber = 261
  var call455 = callmethod(this,"accept", [1], string454);
  if (Grace_isTrue(call455)) {
  lineNumber = 257
  var call456 = callmethod(this,"next", [0]);
  lineNumber = 258
  var call457 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 260
  lineNumber = 1
  lineNumber = 260
  lineNumber = 1
  lineNumber = 259
  var call458 = callmethod(var_values,"pop", [0]);
  var call459 = callmethod(var_ident1,"dtype:=", [1], call458);
  var if453 = call459;
}
  lineNumber = 261
  var call460 = callmethod(var_params,"push", [1], var_ident1);
  return call460;
};
  var call461 = callmethod(Grace_prelude,"while()do", [1, 1], block446, block449);
  lineNumber = 264
  lineNumber = 263
  lineNumber = 1
  lineNumber = 263
  var string463 = new GraceString("arrow");
  lineNumber = 266
  var call464 = callmethod(this,"accept", [1], string463);
  var call465 = callmethod(call464,"not", [0]);
  if (Grace_isTrue(call465)) {
  lineNumber = 264
  var string466 = new GraceString("block parameter list not terminated ->.");
  var call467 = callmethod(var_util,"syntax_error", [1], string466);
  var if462 = call467;
}
  lineNumber = 266
  var call468 = callmethod(this,"next", [0]);
  var if409 = call468;
  } else {
  lineNumber = 277
  lineNumber = 267
  var string470 = new GraceString("semicolon");
  lineNumber = 270
  var call471 = callmethod(this,"accept", [1], string470);
  if (Grace_isTrue(call471)) {
  lineNumber = 268
  lineNumber = 1
  lineNumber = 268
  var call472 = callmethod(var_values,"pop", [0]);
  var call473 = callmethod(var_body,"push", [1], call472);
  lineNumber = 269
  var call474 = callmethod(this,"next", [0]);
  var if469 = call474;
  } else {
  lineNumber = 277
  lineNumber = 270
  var string476 = new GraceString("bind");
  lineNumber = 276
  var call477 = callmethod(this,"accept", [1], string476);
  if (Grace_isTrue(call477)) {
  lineNumber = 272
  lineNumber = 1
  lineNumber = 271
  var call478 = callmethod(var_values,"pop", [0]);
  var var_lhs = call478;
  lineNumber = 272
  var call479 = callmethod(this,"next", [0]);
  lineNumber = 273
  var call480 = callmethod(this,"expression", [0]);
  lineNumber = 275
  lineNumber = 1
  lineNumber = 274
  var call481 = callmethod(var_values,"pop", [0]);
  var var_rhs = call481;
  lineNumber = 275
  lineNumber = 1
  lineNumber = 275
  var call482 = callmethod(var_ast,"bindNode", [0]);
  var call483 = callmethod(call482,"new", [2], var_lhs, var_rhs);
  var call484 = callmethod(var_body,"push", [1], call483);
  var if475 = call484;
  } else {
  lineNumber = 277
  lineNumber = 1
  lineNumber = 277
  var call485 = callmethod(var_values,"pop", [0]);
  var call486 = callmethod(var_body,"push", [1], call485);
  var if475 = call486;
}
  var if469 = if475;
}
  var if409 = if469;
}
  return if409;
};
  lineNumber = 280
  var call487 = callmethod(this,"ifConsume()then", [1, 1], block406, block408);
  lineNumber = 281
  lineNumber = 280
  var string489 = new GraceString("arrow");
  lineNumber = 283
  var call490 = callmethod(this,"accept", [1], string489);
  if (Grace_isTrue(call490)) {
  lineNumber = 281
  var call491 = callmethod(this,"next", [0]);
  var if488 = call491;
}
  lineNumber = 284
  lineNumber = 1
  lineNumber = 283
  var call492 = callmethod(var_values,"size", [0]);
  var var_ln = call492;
  lineNumber = 288
  lineNumber = 289
  lineNumber = 1
  lineNumber = 284
  var call494 = callmethod(var_sym,"line", [0]);
  lineNumber = 289
  lineNumber = 1
  lineNumber = 284
  var call495 = callmethod(var_lastToken,"line", [0]);
  var opresult497 = callmethod(call494, "==", [1], call495);
  if (Grace_isTrue(opresult497)) {
  lineNumber = 286
  lineNumber = 1
  lineNumber = 285
  var call498 = callmethod(var_sym,"linePos", [0]);
  var diff500 = callmethod(call498, "-", [1], new GraceNum(1));
  var_minIndentLevel = diff500;
  var if493 = diff500;
  } else {
  lineNumber = 288
  lineNumber = 287
  var_minIndentLevel = var_minInd;
  var if493 = var_minInd;
}
  lineNumber = 293
  lineNumber = 289
  var block501 = Grace_allocObject();
  block501.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block501.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block501.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block501.receiver = this;
  block501.className = 'block<parser:289>';
  block501.real = function(
) {
  lineNumber = 1
  lineNumber = 289
  var string502 = new GraceString("rbrace");
  var call503 = callmethod(this,"accept", [1], string502);
  var call504 = callmethod(call503,"not", [0]);
  return call504;
};
  lineNumber = 293
  var block505 = Grace_allocObject();
  block505.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block505.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block505.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block505.receiver = this;
  block505.className = 'block<parser:293>';
  block505.real = function(
) {
  lineNumber = 291
  var block506 = Grace_allocObject();
  block506.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block506.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block506.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block506.receiver = this;
  block506.className = 'block<parser:291>';
  block506.real = function(
) {
  var call507 = callmethod(this,"statement", [0]);
  return call507;
};
  lineNumber = 292
  var call508 = callmethod(this,"expectConsume", [1], block506);
  lineNumber = 293
  lineNumber = 1
  lineNumber = 292
  var call509 = callmethod(var_values,"pop", [0]);
  var_tmp = call509;
  lineNumber = 293
  var call510 = callmethod(var_body,"push", [1], var_tmp);
  return call510;
};
  var call511 = callmethod(Grace_prelude,"while()do", [1, 1], block501, block505);
  lineNumber = 296
  lineNumber = 295
  var diff513 = callmethod(var_minInd, "-", [1], new GraceNum(1));
  var_minIndentLevel = diff513;
  lineNumber = 297
  lineNumber = 296
  var_statementIndent = var_startIndent;
  lineNumber = 297
  var call514 = callmethod(this,"next", [0]);
  lineNumber = 298
  lineNumber = 299
  lineNumber = 1
  lineNumber = 298
  var call515 = callmethod(var_ast,"blockNode", [0]);
  var call516 = callmethod(call515,"new", [2], var_params, var_body);
  var var_o = call516;
  lineNumber = 302
  lineNumber = 299
  if (Grace_isTrue(var_isMatchingBlock)) {
  lineNumber = 302
  lineNumber = 303
  lineNumber = 1
  lineNumber = 300
  var call519 = callmethod(var_params,"size", [0]);
  var opresult521 = callmethod(call519, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult521)) {
  lineNumber = 302
  lineNumber = 1
  lineNumber = 302
  lineNumber = 1
  lineNumber = 301
  var call522 = callmethod(var_params,"first", [0]);
  var call523 = callmethod(var_o,"matchingPattern:=", [1], call522);
  var if518 = call523;
}
  var if517 = if518;
}
  lineNumber = 304
  var call524 = callmethod(var_values,"push", [1], var_o);
  var if389 = call524;
}
  return if389
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["block"] = func388;
  lineNumber = 414
var func525 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 312
  var string527 = new GraceString("identifier");
  lineNumber = 415
  var call528 = callmethod(this,"accept", [1], string527);
  lineNumber = 312
  lineNumber = 1
  lineNumber = 312
  var call529 = callmethod(var_sym,"value", [0]);
  var string530 = new GraceString("if");
  var opresult532 = callmethod(call529, "==", [1], string530);
  var opresult534 = callmethod(call528, "&", [1], opresult532);
  if (Grace_isTrue(opresult534)) {
  lineNumber = 313
  var call535 = callmethod(this,"next", [0]);
  lineNumber = 314
  var call536 = callmethod(this,"expression", [0]);
  lineNumber = 316
  lineNumber = 1
  lineNumber = 315
  var call537 = callmethod(var_values,"pop", [0]);
  var var_cond = call537;
  lineNumber = 324
  var array538 = new GraceList([
]);

  var var_body = array538;
  lineNumber = 325
  var array539 = new GraceList([
]);

  var var_elseblock = array539;
  lineNumber = 326
  lineNumber = 325
  var var_curelse = var_elseblock;
  lineNumber = 327
  var var_v;
  lineNumber = 328
  lineNumber = 327
  var var_localMin = var_minIndentLevel;
  lineNumber = 329
  lineNumber = 328
  var var_localStatementIndent = var_statementIndent;
  lineNumber = 330
  lineNumber = 329
  var opresult541 = callmethod(var_statementIndent, "+", [1], new GraceNum(1));
  var var_minInd = opresult541;
  lineNumber = 410
  lineNumber = 330
  var string543 = new GraceString("identifier");
  lineNumber = 412
  var call544 = callmethod(this,"accept", [1], string543);
  lineNumber = 330
  lineNumber = 1
  lineNumber = 330
  var call545 = callmethod(var_sym,"value", [0]);
  var string546 = new GraceString("then");
  var opresult548 = callmethod(call545, "==", [1], string546);
  var opresult550 = callmethod(call544, "&", [1], opresult548);
  if (Grace_isTrue(opresult550)) {
  lineNumber = 331
  var call551 = callmethod(this,"next", [0]);
  lineNumber = 344
  lineNumber = 332
  var string553 = new GraceString("lbrace");
  lineNumber = 346
  var call554 = callmethod(this,"accept", [1], string553);
  if (Grace_isTrue(call554)) {
  lineNumber = 333
  var call555 = callmethod(this,"next", [0]);
  lineNumber = 338
  lineNumber = 339
  lineNumber = 1
  lineNumber = 334
  var call557 = callmethod(var_sym,"line", [0]);
  lineNumber = 339
  lineNumber = 1
  lineNumber = 334
  var call558 = callmethod(var_lastToken,"line", [0]);
  var opresult560 = callmethod(call557, "==", [1], call558);
  if (Grace_isTrue(opresult560)) {
  lineNumber = 336
  lineNumber = 1
  lineNumber = 335
  var call561 = callmethod(var_sym,"linePos", [0]);
  var diff563 = callmethod(call561, "-", [1], new GraceNum(1));
  var_minIndentLevel = diff563;
  var if556 = diff563;
  } else {
  lineNumber = 338
  lineNumber = 337
  var_minIndentLevel = var_minInd;
  var if556 = var_minInd;
}
  lineNumber = 342
  lineNumber = 339
  var block564 = Grace_allocObject();
  block564.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block564.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block564.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block564.receiver = this;
  block564.className = 'block<parser:339>';
  block564.real = function(
) {
  lineNumber = 1
  lineNumber = 339
  var string565 = new GraceString("rbrace");
  var call566 = callmethod(this,"accept", [1], string565);
  var call567 = callmethod(call566,"not", [0]);
  return call567;
};
  lineNumber = 342
  var block568 = Grace_allocObject();
  block568.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block568.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block568.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block568.receiver = this;
  block568.className = 'block<parser:342>';
  block568.real = function(
) {
  lineNumber = 340
  var call569 = callmethod(this,"statement", [0]);
  lineNumber = 342
  lineNumber = 1
  lineNumber = 341
  var call570 = callmethod(var_values,"pop", [0]);
  var_v = call570;
  lineNumber = 342
  var call571 = callmethod(var_body,"push", [1], var_v);
  return call571;
};
  var call572 = callmethod(Grace_prelude,"while()do", [1, 1], block564, block568);
  lineNumber = 344
  var call573 = callmethod(this,"next", [0]);
  var if552 = call573;
}
  lineNumber = 347
  var var_econd;
  lineNumber = 348
  var var_eif;
  lineNumber = 349
  var var_newelse;
  lineNumber = 350
  var var_ebody;
  lineNumber = 386
  lineNumber = 350
  var block574 = Grace_allocObject();
  block574.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block574.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block574.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block574.receiver = this;
  block574.className = 'block<parser:350>';
  block574.real = function(
) {
  var string575 = new GraceString("identifier");
  var call576 = callmethod(this,"accept", [1], string575);
  lineNumber = 1
  lineNumber = 350
  var call577 = callmethod(var_sym,"value", [0]);
  var string578 = new GraceString("elseif");
  var opresult580 = callmethod(call577, "==", [1], string578);
  var opresult582 = callmethod(call576, "&", [1], opresult580);
  return opresult582;
};
  lineNumber = 386
  var block583 = Grace_allocObject();
  block583.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block583.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block583.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block583.receiver = this;
  block583.className = 'block<parser:386>';
  block583.real = function(
) {
  lineNumber = 354
  lineNumber = 353
  var_statementToken = var_sym;
  lineNumber = 354
  var call584 = callmethod(this,"next", [0]);
  lineNumber = 355
  var call585 = callmethod(this,"expression", [0]);
  lineNumber = 357
  lineNumber = 1
  lineNumber = 356
  var call586 = callmethod(var_values,"pop", [0]);
  var_econd = call586;
  lineNumber = 359
  lineNumber = 357
  lineNumber = 1
  lineNumber = 357
  var string588 = new GraceString("identifier");
  lineNumber = 361
  var call589 = callmethod(this,"accept", [1], string588);
  lineNumber = 357
  lineNumber = 1
  lineNumber = 358
  var call590 = callmethod(var_sym,"value", [0]);
  var string591 = new GraceString("then");
  var opresult593 = callmethod(call590, "==", [1], string591);
  var opresult595 = callmethod(call589, "&", [1], opresult593);
  var call596 = callmethod(opresult595,"not", [0]);
  if (Grace_isTrue(call596)) {
  lineNumber = 359
  var string597 = new GraceString("elseif with no then.");
  var call598 = callmethod(var_util,"syntax_error", [1], string597);
  var if587 = call598;
}
  lineNumber = 361
  var call599 = callmethod(this,"next", [0]);
  lineNumber = 363
  var array600 = new GraceList([
]);

  var_ebody = array600;
  lineNumber = 364
  lineNumber = 363
  lineNumber = 1
  lineNumber = 363
  var string602 = new GraceString("lbrace");
  lineNumber = 366
  var call603 = callmethod(this,"accept", [1], string602);
  var call604 = callmethod(call603,"not", [0]);
  if (Grace_isTrue(call604)) {
  lineNumber = 364
  var string605 = new GraceString("expected {.");
  var call606 = callmethod(var_util,"syntax_error", [1], string605);
  var if601 = call606;
}
  lineNumber = 366
  var call607 = callmethod(this,"next", [0]);
  lineNumber = 371
  lineNumber = 372
  lineNumber = 1
  lineNumber = 367
  var call609 = callmethod(var_sym,"line", [0]);
  lineNumber = 372
  lineNumber = 1
  lineNumber = 367
  var call610 = callmethod(var_lastToken,"line", [0]);
  var opresult612 = callmethod(call609, "==", [1], call610);
  if (Grace_isTrue(opresult612)) {
  lineNumber = 369
  lineNumber = 1
  lineNumber = 368
  var call613 = callmethod(var_sym,"linePos", [0]);
  var diff615 = callmethod(call613, "-", [1], new GraceNum(1));
  var_minIndentLevel = diff615;
  var if608 = diff615;
  } else {
  lineNumber = 371
  lineNumber = 370
  var_minIndentLevel = var_minInd;
  var if608 = var_minInd;
}
  lineNumber = 375
  lineNumber = 372
  var block616 = Grace_allocObject();
  block616.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block616.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block616.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block616.receiver = this;
  block616.className = 'block<parser:372>';
  block616.real = function(
) {
  lineNumber = 1
  lineNumber = 372
  var string617 = new GraceString("rbrace");
  var call618 = callmethod(this,"accept", [1], string617);
  var call619 = callmethod(call618,"not", [0]);
  return call619;
};
  lineNumber = 375
  var block620 = Grace_allocObject();
  block620.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block620.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block620.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block620.receiver = this;
  block620.className = 'block<parser:375>';
  block620.real = function(
) {
  lineNumber = 373
  var call621 = callmethod(this,"statement", [0]);
  lineNumber = 375
  lineNumber = 1
  lineNumber = 374
  var call622 = callmethod(var_values,"pop", [0]);
  var_v = call622;
  lineNumber = 375
  var call623 = callmethod(var_ebody,"push", [1], var_v);
  return call623;
};
  var call624 = callmethod(Grace_prelude,"while()do", [1, 1], block616, block620);
  lineNumber = 377
  var call625 = callmethod(this,"next", [0]);
  lineNumber = 379
  var array626 = new GraceList([
]);

  var_newelse = array626;
  lineNumber = 382
  lineNumber = 1
  lineNumber = 379
  var call627 = callmethod(var_ast,"ifNode", [0]);
  var call628 = callmethod(call627,"new", [3], var_econd, var_ebody, var_newelse);
  var_eif = call628;
  lineNumber = 382
  var call629 = callmethod(var_curelse,"push", [1], var_eif);
  lineNumber = 386
  lineNumber = 385
  var_curelse = var_newelse;
  return var_newelse;
};
  var call630 = callmethod(Grace_prelude,"while()do", [1, 1], block574, block583);
  lineNumber = 403
  lineNumber = 387
  var string632 = new GraceString("identifier");
  lineNumber = 406
  var call633 = callmethod(this,"accept", [1], string632);
  lineNumber = 387
  lineNumber = 1
  lineNumber = 387
  var call634 = callmethod(var_sym,"value", [0]);
  var string635 = new GraceString("else");
  var opresult637 = callmethod(call634, "==", [1], string635);
  var opresult639 = callmethod(call633, "&", [1], opresult637);
  if (Grace_isTrue(opresult639)) {
  lineNumber = 388
  var call640 = callmethod(this,"next", [0]);
  lineNumber = 403
  lineNumber = 389
  var string642 = new GraceString("lbrace");
  lineNumber = 405
  var call643 = callmethod(this,"accept", [1], string642);
  if (Grace_isTrue(call643)) {
  lineNumber = 392
  var call644 = callmethod(this,"next", [0]);
  lineNumber = 397
  lineNumber = 398
  lineNumber = 1
  lineNumber = 393
  var call646 = callmethod(var_sym,"line", [0]);
  lineNumber = 398
  lineNumber = 1
  lineNumber = 393
  var call647 = callmethod(var_lastToken,"line", [0]);
  var opresult649 = callmethod(call646, "==", [1], call647);
  if (Grace_isTrue(opresult649)) {
  lineNumber = 395
  lineNumber = 1
  lineNumber = 394
  var call650 = callmethod(var_sym,"linePos", [0]);
  var diff652 = callmethod(call650, "-", [1], new GraceNum(1));
  var_minIndentLevel = diff652;
  var if645 = diff652;
  } else {
  lineNumber = 397
  lineNumber = 396
  var_minIndentLevel = var_minInd;
  var if645 = var_minInd;
}
  lineNumber = 401
  lineNumber = 398
  var block653 = Grace_allocObject();
  block653.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block653.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block653.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block653.receiver = this;
  block653.className = 'block<parser:398>';
  block653.real = function(
) {
  lineNumber = 1
  lineNumber = 398
  var string654 = new GraceString("rbrace");
  var call655 = callmethod(this,"accept", [1], string654);
  var call656 = callmethod(call655,"not", [0]);
  return call656;
};
  lineNumber = 401
  var block657 = Grace_allocObject();
  block657.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block657.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block657.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block657.receiver = this;
  block657.className = 'block<parser:401>';
  block657.real = function(
) {
  lineNumber = 399
  var call658 = callmethod(this,"statement", [0]);
  lineNumber = 401
  lineNumber = 1
  lineNumber = 400
  var call659 = callmethod(var_values,"pop", [0]);
  var_v = call659;
  lineNumber = 401
  var call660 = callmethod(var_curelse,"push", [1], var_v);
  return call660;
};
  var call661 = callmethod(Grace_prelude,"while()do", [1, 1], block653, block657);
  lineNumber = 403
  var call662 = callmethod(this,"next", [0]);
  var if641 = call662;
}
  var if631 = if641;
}
  lineNumber = 406
  lineNumber = 407
  lineNumber = 1
  lineNumber = 406
  var call663 = callmethod(var_ast,"ifNode", [0]);
  var call664 = callmethod(call663,"new", [3], var_cond, var_body, var_elseblock);
  var var_o = call664;
  lineNumber = 407
  var call665 = callmethod(var_values,"push", [1], var_o);
  var if542 = call665;
  } else {
  lineNumber = 410
  var string666 = new GraceString("if with no then");
  var call667 = callmethod(var_util,"syntax_error", [1], string666);
  var if542 = call667;
}
  lineNumber = 413
  lineNumber = 412
  var_minIndentLevel = var_localMin;
  lineNumber = 414
  lineNumber = 413
  var_statementIndent = var_localStatementIndent;
  var if526 = var_localStatementIndent;
}
  return if526
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["doif"] = func525;
  lineNumber = 439
var func668 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 420
  var string670 = new GraceString("identifier");
  lineNumber = 442
  var call671 = callmethod(this,"accept", [1], string670);
  lineNumber = 420
  lineNumber = 1
  lineNumber = 420
  var call672 = callmethod(var_sym,"value", [0]);
  var string673 = new GraceString("for");
  var opresult675 = callmethod(call672, "==", [1], string673);
  var opresult677 = callmethod(call671, "&", [1], opresult675);
  if (Grace_isTrue(opresult677)) {
  lineNumber = 421
  var call678 = callmethod(this,"next", [0]);
  lineNumber = 423
  var var_over;
  var call679 = callmethod(this,"expression", [0]);
  lineNumber = 425
  lineNumber = 1
  lineNumber = 424
  var call680 = callmethod(var_values,"pop", [0]);
  var_over = call680;
  lineNumber = 426
  var array681 = new GraceList([
]);

  var var_body = array681;
  lineNumber = 427
  var var_variable;
  lineNumber = 428
  var var_localMin;
  lineNumber = 429
  lineNumber = 428
  var opresult683 = callmethod(var_statementIndent, "+", [1], new GraceNum(1));
  var var_minInd = opresult683;
  lineNumber = 439
  lineNumber = 429
  var string685 = new GraceString("identifier");
  lineNumber = 441
  var call686 = callmethod(this,"accept", [1], string685);
  lineNumber = 429
  lineNumber = 1
  lineNumber = 429
  var call687 = callmethod(var_sym,"value", [0]);
  var string688 = new GraceString("each");
  var opresult690 = callmethod(call687, "==", [1], string688);
  lineNumber = 1
  lineNumber = 430
  var call691 = callmethod(var_sym,"value", [0]);
  var string692 = new GraceString("do");
  var opresult694 = callmethod(call691, "==", [1], string692);
  var opresult696 = callmethod(opresult690, "|", [1], opresult694);
  var opresult698 = callmethod(call686, "&", [1], opresult696);
  if (Grace_isTrue(opresult698)) {
  lineNumber = 431
  var call699 = callmethod(this,"next", [0]);
  lineNumber = 432
  var string700 = new GraceString("lbrace");
  lineNumber = 433
  var call701 = callmethod(this,"expect", [1], string700);
  var call702 = callmethod(this,"block", [0]);
  lineNumber = 435
  lineNumber = 1
  lineNumber = 434
  var call703 = callmethod(var_values,"pop", [0]);
  var var_blk = call703;
  lineNumber = 435
  lineNumber = 436
  lineNumber = 1
  lineNumber = 435
  var call704 = callmethod(var_ast,"forNode", [0]);
  var call705 = callmethod(call704,"new", [2], var_over, var_blk);
  var var_o = call705;
  lineNumber = 436
  var call706 = callmethod(var_values,"push", [1], var_o);
  lineNumber = 438
  lineNumber = 437
  var diff708 = callmethod(var_minInd, "-", [1], new GraceNum(1));
  var_minIndentLevel = diff708;
  var if684 = diff708;
  } else {
  lineNumber = 439
  var string709 = new GraceString("expected 'do'");
  var call710 = callmethod(var_util,"syntax_error", [1], string709);
  var if684 = call710;
}
  var if669 = if684;
}
  return if669
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["dofor"] = func668;
  lineNumber = 451
var func711 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 447
  var string713 = new GraceString("identifier");
  lineNumber = 454
  var call714 = callmethod(this,"accept", [1], string713);
  if (Grace_isTrue(call714)) {
  lineNumber = 451
  lineNumber = 453
  lineNumber = 1
  lineNumber = 448
  var call716 = callmethod(var_sym,"value", [0]);
  var string717 = new GraceString("if");
  var opresult719 = callmethod(call716, "==", [1], string717);
  if (Grace_isTrue(opresult719)) {
  lineNumber = 449
  var call720 = callmethod(this,"doif", [0]);
  var if715 = call720;
  } else {
  lineNumber = 451
  var call721 = callmethod(this,"pushidentifier", [0]);
  var if715 = call721;
}
  var if712 = if715;
}
  return if712
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["identifier"] = func711;
  lineNumber = 478
var func722 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 457
  var string724 = new GraceString("op");
  lineNumber = 480
  var call725 = callmethod(this,"accept", [1], string724);
  if (Grace_isTrue(call725)) {
  lineNumber = 459
  lineNumber = 1
  lineNumber = 458
  var call726 = callmethod(var_sym,"value", [0]);
  var var_op = call726;
  lineNumber = 460
  var var_val;
  var call727 = callmethod(this,"next", [0]);
  lineNumber = 470
  lineNumber = 461
  var string729 = new GraceString("lparen");
  lineNumber = 472
  var call730 = callmethod(this,"accept", [1], string729);
  if (Grace_isTrue(call730)) {
  lineNumber = 462
  var call731 = callmethod(this,"next", [0]);
  lineNumber = 464
  lineNumber = 463
  var string733 = new GraceString("rparen");
  lineNumber = 466
  var call734 = callmethod(this,"accept", [1], string733);
  if (Grace_isTrue(call734)) {
  lineNumber = 464
  var string735 = new GraceString("empty () in expression");
  var call736 = callmethod(var_util,"syntax_error", [1], string735);
  var if732 = call736;
}
  lineNumber = 466
  var call737 = callmethod(this,"expression", [0]);
  lineNumber = 467
  var string738 = new GraceString("rparen");
  lineNumber = 468
  var call739 = callmethod(this,"expect", [1], string738);
  var call740 = callmethod(this,"next", [0]);
  var if728 = call740;
  } else {
  lineNumber = 470
  var call741 = callmethod(this,"term", [0]);
  var if728 = call741;
}
  lineNumber = 472
  var call742 = callmethod(this,"dotrest", [0]);
  lineNumber = 473
  var call743 = callmethod(this,"callrest", [0]);
  lineNumber = 474
  var call744 = callmethod(this,"postfixsquare", [0]);
  lineNumber = 476
  lineNumber = 1
  lineNumber = 475
  var call745 = callmethod(var_values,"pop", [0]);
  var_val = call745;
  lineNumber = 476
  var string746 = new GraceString("prefix");
  var opresult748 = callmethod(string746, "++", [1], var_op);
  lineNumber = 477
  lineNumber = 1
  lineNumber = 476
  var call749 = callmethod(var_ast,"memberNode", [0]);
  var call750 = callmethod(call749,"new", [2], opresult748, var_val);
  var var_mem = call750;
  lineNumber = 477
  lineNumber = 1
  lineNumber = 477
  var call752 = callmethod(var_mem,"value", [0]);
  lineNumber = 1
  lineNumber = 477
  var call753 = callmethod(var_ast,"callWithPart", [0]);
  var call754 = callmethod(call753,"new", [1], call752);
  var array751 = new GraceList([
call754,
]);

  lineNumber = 478
  lineNumber = 1
  lineNumber = 477
  var call755 = callmethod(var_ast,"callNode", [0]);
  var call756 = callmethod(call755,"new", [2], var_mem, array751);
  var var_call = call756;
  lineNumber = 478
  var call757 = callmethod(var_values,"push", [1], var_call);
  var if723 = call757;
}
  return if723
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["prefixop"] = func722;
  lineNumber = 499
var func758 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 483
  var string760 = new GraceString("lgeneric");
  lineNumber = 501
  var call761 = callmethod(this,"accept", [1], string760);
  if (Grace_isTrue(call761)) {
  lineNumber = 485
  lineNumber = 1
  lineNumber = 484
  var call762 = callmethod(var_values,"pop", [0]);
  var var_id = call762;
  lineNumber = 486
  var array763 = new GraceList([
]);

  var var_gens = array763;
  var call764 = callmethod(this,"next", [0]);
  lineNumber = 494
  lineNumber = 487
  var block765 = Grace_allocObject();
  block765.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block765.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block765.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block765.receiver = this;
  block765.className = 'block<parser:487>';
  block765.real = function(
) {
  var string766 = new GraceString("identifier");
  var call767 = callmethod(this,"accept", [1], string766);
  return call767;
};
  lineNumber = 494
  var block768 = Grace_allocObject();
  block768.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block768.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block768.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block768.receiver = this;
  block768.className = 'block<parser:494>';
  block768.real = function(
) {
  lineNumber = 488
  var call769 = callmethod(this,"identifier", [0]);
  lineNumber = 489
  var call770 = callmethod(this,"generic", [0]);
  lineNumber = 490
  lineNumber = 1
  lineNumber = 490
  var call771 = callmethod(var_values,"pop", [0]);
  var call772 = callmethod(var_gens,"push", [1], call771);
  lineNumber = 494
  lineNumber = 491
  var string774 = new GraceString("comma");
  lineNumber = 496
  var call775 = callmethod(this,"accept", [1], string774);
  if (Grace_isTrue(call775)) {
  lineNumber = 492
  var call776 = callmethod(this,"next", [0]);
  var if773 = call776;
  } else {
  lineNumber = 494
  var string777 = new GraceString("rgeneric");
  lineNumber = 495
  var call778 = callmethod(this,"expect", [1], string777);
  var if773 = call778;
}
  return if773;
};
  var call779 = callmethod(Grace_prelude,"while()do", [1, 1], block765, block768);
  lineNumber = 497
  var string780 = new GraceString("rgeneric");
  lineNumber = 498
  var call781 = callmethod(this,"expect", [1], string780);
  var call782 = callmethod(this,"next", [0]);
  lineNumber = 499
  lineNumber = 1
  lineNumber = 499
  var call783 = callmethod(var_ast,"genericNode", [0]);
  var call784 = callmethod(call783,"new", [2], var_id, var_gens);
  var call785 = callmethod(var_values,"push", [1], call784);
  var if759 = call785;
}
  return if759
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["generic"] = func758;
  lineNumber = 546
var func786 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 505
  lineNumber = 503
  var string788 = new GraceString("identifier");
  lineNumber = 506
  var call789 = callmethod(this,"accept", [1], string788);
  lineNumber = 503
  lineNumber = 1
  lineNumber = 503
  var call790 = callmethod(var_sym,"value", [0]);
  var string791 = new GraceString("match");
  var opresult793 = callmethod(call790, "==", [1], string791);
  var opresult795 = callmethod(call789, "&", [1], opresult793);
  var call796 = callmethod(opresult795,"prefix!", [0]);
  if (Grace_isTrue(call796)) {
  lineNumber = 505
  lineNumber = 504
  return new GraceNum(0)
  var if787 = undefined;
}
  lineNumber = 507
  lineNumber = 506
  var var_localmin = var_minIndentLevel;
  lineNumber = 507
  var call797 = callmethod(this,"next", [0]);
  lineNumber = 508
  var string798 = new GraceString("lparen");
  lineNumber = 509
  var call799 = callmethod(this,"expect", [1], string798);
  var call800 = callmethod(this,"next", [0]);
  lineNumber = 510
  var block801 = Grace_allocObject();
  block801.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block801.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block801.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block801.receiver = this;
  block801.className = 'block<parser:510>';
  block801.real = function(
) {
  var call802 = callmethod(this,"expression", [0]);
  return call802;
};
  lineNumber = 511
  var call803 = callmethod(this,"expectConsume", [1], block801);
  lineNumber = 512
  lineNumber = 1
  lineNumber = 511
  var call804 = callmethod(var_values,"pop", [0]);
  var var_matchee = call804;
  lineNumber = 512
  var string805 = new GraceString("rparen");
  lineNumber = 513
  var call806 = callmethod(this,"expect", [1], string805);
  var call807 = callmethod(this,"next", [0]);
  lineNumber = 515
  var array808 = new GraceList([
]);

  var var_cases = array808;
  lineNumber = 516
  lineNumber = 515
  var bool809 = new GraceBoolean(false)
  var var_elsecase = bool809;
  lineNumber = 528
  lineNumber = 516
  var block810 = Grace_allocObject();
  block810.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block810.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block810.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block810.receiver = this;
  block810.className = 'block<parser:516>';
  block810.real = function(
) {
  var string811 = new GraceString("identifier");
  var call812 = callmethod(this,"accept", [1], string811);
  lineNumber = 1
  lineNumber = 516
  var call813 = callmethod(var_sym,"value", [0]);
  var string814 = new GraceString("case");
  var opresult816 = callmethod(call813, "==", [1], string814);
  var opresult818 = callmethod(call812, "&", [1], opresult816);
  return opresult818;
};
  lineNumber = 528
  var block819 = Grace_allocObject();
  block819.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block819.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block819.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block819.receiver = this;
  block819.className = 'block<parser:528>';
  block819.real = function(
) {
  lineNumber = 517
  var call820 = callmethod(this,"next", [0]);
  lineNumber = 526
  lineNumber = 518
  var string822 = new GraceString("lbrace");
  lineNumber = 528
  var call823 = callmethod(this,"accept", [1], string822);
  if (Grace_isTrue(call823)) {
  lineNumber = 519
  var call824 = callmethod(this,"block", [0]);
  var if821 = call824;
  } else {
  lineNumber = 526
  lineNumber = 520
  var string826 = new GraceString("lparen");
  lineNumber = 525
  var call827 = callmethod(this,"accept", [1], string826);
  if (Grace_isTrue(call827)) {
  lineNumber = 521
  var call828 = callmethod(this,"next", [0]);
  lineNumber = 522
  var call829 = callmethod(this,"expression", [0]);
  lineNumber = 523
  var string830 = new GraceString("rparen");
  lineNumber = 524
  var call831 = callmethod(this,"expect", [1], string830);
  var call832 = callmethod(this,"next", [0]);
  var if825 = call832;
  } else {
  lineNumber = 526
  var string833 = new GraceString("no argument to case");
  var call834 = callmethod(var_util,"syntax_error", [1], string833);
  var if825 = call834;
}
  var if821 = if825;
}
  lineNumber = 528
  lineNumber = 1
  lineNumber = 528
  var call835 = callmethod(var_values,"pop", [0]);
  var call836 = callmethod(var_cases,"push", [1], call835);
  return call836;
};
  var call837 = callmethod(Grace_prelude,"while()do", [1, 1], block810, block819);
  lineNumber = 543
  lineNumber = 530
  var string839 = new GraceString("identifier");
  lineNumber = 544
  var call840 = callmethod(this,"accept", [1], string839);
  lineNumber = 530
  lineNumber = 1
  lineNumber = 530
  var call841 = callmethod(var_sym,"value", [0]);
  var string842 = new GraceString("else");
  var opresult844 = callmethod(call841, "==", [1], string842);
  var opresult846 = callmethod(call840, "&", [1], opresult844);
  if (Grace_isTrue(opresult846)) {
  lineNumber = 531
  var call847 = callmethod(this,"next", [0]);
  lineNumber = 540
  lineNumber = 532
  var string849 = new GraceString("lbrace");
  lineNumber = 542
  var call850 = callmethod(this,"accept", [1], string849);
  if (Grace_isTrue(call850)) {
  lineNumber = 533
  var call851 = callmethod(this,"block", [0]);
  var if848 = call851;
  } else {
  lineNumber = 540
  lineNumber = 534
  var string853 = new GraceString("lparen");
  lineNumber = 539
  var call854 = callmethod(this,"accept", [1], string853);
  if (Grace_isTrue(call854)) {
  lineNumber = 535
  var call855 = callmethod(this,"next", [0]);
  lineNumber = 536
  var call856 = callmethod(this,"expression", [0]);
  lineNumber = 537
  var string857 = new GraceString("rparen");
  lineNumber = 538
  var call858 = callmethod(this,"expect", [1], string857);
  var call859 = callmethod(this,"next", [0]);
  var if852 = call859;
  } else {
  lineNumber = 540
  var string860 = new GraceString("no argument to case");
  var call861 = callmethod(var_util,"syntax_error", [1], string860);
  var if852 = call861;
}
  var if848 = if852;
}
  lineNumber = 543
  lineNumber = 1
  lineNumber = 542
  var call862 = callmethod(var_values,"pop", [0]);
  var_elsecase = call862;
  var if838 = call862;
}
  lineNumber = 544
  lineNumber = 1
  lineNumber = 544
  var call863 = callmethod(var_ast,"matchCaseNode", [0]);
  var call864 = callmethod(call863,"new", [3], var_matchee, var_cases, var_elsecase);
  var call865 = callmethod(var_values,"push", [1], call864);
  lineNumber = 546
  lineNumber = 545
  var_minIndentLevel = var_localmin;
  return var_localmin
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["matchcase"] = func786;
  lineNumber = 571
var func866 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 550
  var string868 = new GraceString("num");
  lineNumber = 573
  var call869 = callmethod(this,"accept", [1], string868);
  if (Grace_isTrue(call869)) {
  lineNumber = 551
  var call870 = callmethod(this,"pushnum", [0]);
  var if867 = call870;
  } else {
  lineNumber = 571
  lineNumber = 552
  var string872 = new GraceString("string");
  lineNumber = 554
  var call873 = callmethod(this,"accept", [1], string872);
  if (Grace_isTrue(call873)) {
  lineNumber = 553
  var call874 = callmethod(this,"pushstring", [0]);
  var if871 = call874;
  } else {
  lineNumber = 571
  lineNumber = 554
  var string876 = new GraceString("octets");
  lineNumber = 556
  var call877 = callmethod(this,"accept", [1], string876);
  if (Grace_isTrue(call877)) {
  lineNumber = 555
  var call878 = callmethod(this,"pushoctets", [0]);
  var if875 = call878;
  } else {
  lineNumber = 571
  lineNumber = 556
  var string880 = new GraceString("identifier");
  lineNumber = 558
  var call881 = callmethod(this,"accept", [1], string880);
  lineNumber = 556
  lineNumber = 1
  lineNumber = 556
  var call882 = callmethod(var_sym,"value", [0]);
  var string883 = new GraceString("match");
  var opresult885 = callmethod(call882, "==", [1], string883);
  var opresult887 = callmethod(call881, "&", [1], opresult885);
  if (Grace_isTrue(opresult887)) {
  lineNumber = 557
  var call888 = callmethod(this,"matchcase", [0]);
  var if879 = call888;
  } else {
  lineNumber = 571
  lineNumber = 558
  var string890 = new GraceString("identifier");
  lineNumber = 563
  var call891 = callmethod(this,"accept", [1], string890);
  if (Grace_isTrue(call891)) {
  lineNumber = 559
  var call892 = callmethod(this,"identifier", [0]);
  lineNumber = 561
  lineNumber = 560
  var string894 = new GraceString("lgeneric");
  lineNumber = 563
  var call895 = callmethod(this,"accept", [1], string894);
  if (Grace_isTrue(call895)) {
  lineNumber = 561
  var call896 = callmethod(this,"generic", [0]);
  var if893 = call896;
}
  var if889 = if893;
  } else {
  lineNumber = 571
  lineNumber = 563
  var string898 = new GraceString("keyword");
  lineNumber = 565
  var call899 = callmethod(this,"accept", [1], string898);
  lineNumber = 563
  lineNumber = 1
  lineNumber = 563
  var call900 = callmethod(var_sym,"value", [0]);
  var string901 = new GraceString("object");
  var opresult903 = callmethod(call900, "==", [1], string901);
  var opresult905 = callmethod(call899, "&", [1], opresult903);
  if (Grace_isTrue(opresult905)) {
  lineNumber = 564
  var call906 = callmethod(this,"doobject", [0]);
  var if897 = call906;
  } else {
  lineNumber = 571
  lineNumber = 565
  var string908 = new GraceString("lbrace");
  lineNumber = 567
  var call909 = callmethod(this,"accept", [1], string908);
  if (Grace_isTrue(call909)) {
  lineNumber = 566
  var call910 = callmethod(this,"block", [0]);
  var if907 = call910;
  } else {
  lineNumber = 571
  lineNumber = 567
  var string912 = new GraceString("lsquare");
  lineNumber = 569
  var call913 = callmethod(this,"accept", [1], string912);
  if (Grace_isTrue(call913)) {
  lineNumber = 568
  var call914 = callmethod(this,"doarray", [0]);
  var if911 = call914;
  } else {
  lineNumber = 571
  lineNumber = 569
  var string916 = new GraceString("op");
  lineNumber = 573
  var call917 = callmethod(this,"accept", [1], string916);
  if (Grace_isTrue(call917)) {
  lineNumber = 571
  var call918 = callmethod(this,"prefixop", [0]);
  var if915 = call918;
}
  var if911 = if915;
}
  var if907 = if911;
}
  var if897 = if907;
}
  var if889 = if897;
}
  var if879 = if889;
}
  var if875 = if879;
}
  var if871 = if875;
}
  var if867 = if871;
}
  return if867
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["term"] = func866;
  lineNumber = 594
var func919 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 589
  lineNumber = 580
  var string921 = new GraceString("lparen");
  lineNumber = 591
  var call922 = callmethod(this,"accept", [1], string921);
  if (Grace_isTrue(call922)) {
  lineNumber = 582
  lineNumber = 581
  var var_tmpStatementToken = var_statementToken;
  lineNumber = 583
  lineNumber = 582
  var_statementToken = var_sym;
  lineNumber = 583
  var call923 = callmethod(this,"next", [0]);
  lineNumber = 584
  var call924 = callmethod(this,"expression", [0]);
  lineNumber = 585
  var string925 = new GraceString("rparen");
  lineNumber = 586
  var call926 = callmethod(this,"expect", [1], string925);
  lineNumber = 587
  lineNumber = 586
  var_statementToken = var_tmpStatementToken;
  lineNumber = 587
  var call927 = callmethod(this,"next", [0]);
  var if920 = call927;
  } else {
  lineNumber = 589
  var call928 = callmethod(this,"term", [0]);
  var if920 = call928;
}
  lineNumber = 591
  var call929 = callmethod(this,"dotrest", [0]);
  lineNumber = 592
  var call930 = callmethod(this,"callrest", [0]);
  lineNumber = 593
  var call931 = callmethod(this,"postfixsquare", [0]);
  lineNumber = 594
  var call932 = callmethod(this,"expressionrest", [0]);
  return call932
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["expression"] = func919;
  lineNumber = 611
var func933 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 600
  var string935 = new GraceString("lsquare");
  lineNumber = 613
  var call936 = callmethod(this,"acceptSameLine", [1], string935);
  if (Grace_isTrue(call936)) {
  lineNumber = 601
  var call937 = callmethod(this,"next", [0]);
  lineNumber = 603
  lineNumber = 1
  lineNumber = 602
  var call938 = callmethod(var_values,"pop", [0]);
  var var_expr = call938;
  lineNumber = 603
  var call939 = callmethod(this,"expression", [0]);
  lineNumber = 605
  lineNumber = 1
  lineNumber = 604
  var call940 = callmethod(var_values,"pop", [0]);
  var var_index = call940;
  lineNumber = 605
  var string941 = new GraceString("rsquare");
  lineNumber = 606
  var call942 = callmethod(this,"expect", [1], string941);
  var call943 = callmethod(this,"next", [0]);
  lineNumber = 607
  lineNumber = 608
  lineNumber = 1
  lineNumber = 607
  var call944 = callmethod(var_ast,"indexNode", [0]);
  var call945 = callmethod(call944,"new", [2], var_expr, var_index);
  var var_o = call945;
  lineNumber = 608
  var call946 = callmethod(var_values,"push", [1], var_o);
  lineNumber = 609
  var call947 = callmethod(this,"dotrest", [0]);
  lineNumber = 610
  var call948 = callmethod(this,"callrest", [0]);
  lineNumber = 611
  var call949 = callmethod(this,"postfixsquare", [0]);
  var if934 = call949;
}
  return if934
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["postfixsquare"] = func933;
  lineNumber = 625
var func950 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 623
  lineNumber = 624
  lineNumber = 619
  var string952 = new GraceString("*");
  var opresult954 = callmethod(var_o, "==", [1], string952);
  if (Grace_isTrue(opresult954)) {
  lineNumber = 621
  lineNumber = 620
  return new GraceNum(10)
  var if951 = undefined;
  } else {
  lineNumber = 623
  lineNumber = 624
  lineNumber = 621
  var string956 = new GraceString("/");
  var opresult958 = callmethod(var_o, "==", [1], string956);
  if (Grace_isTrue(opresult958)) {
  lineNumber = 623
  lineNumber = 622
  return new GraceNum(10)
  var if955 = undefined;
}
  var if951 = if955;
}
  lineNumber = 625
  lineNumber = 624
  return new GraceNum(5)
  return undefined
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["oprec"] = func950;
  lineNumber = 633
var func959 = function(argcv) {
  var curarg = 1;
  var var_ops = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 631
  lineNumber = 633
  lineNumber = 1
  lineNumber = 629
  var call961 = callmethod(var_ops,"size", [0]);
  var opresult963 = callmethod(call961, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult963)) {
  lineNumber = 631
  lineNumber = 1
  lineNumber = 630
  var call964 = callmethod(var_ops,"last", [0]);
  var var_o = call964;
  lineNumber = 631
  lineNumber = 632
  var call965 = callmethod(this,"oprec", [1], var_o);
  return call965
  var if960 = undefined;
}
  lineNumber = 633
  return new GraceNum(0)
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["toprec"] = func959;
  lineNumber = 724
var func966 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 641
  var string968 = new GraceString("op");
  lineNumber = 727
  var call969 = callmethod(this,"accept", [1], string968);
  if (Grace_isTrue(call969)) {
  lineNumber = 643
  var array970 = new GraceList([
]);

  var var_terms = array970;
  lineNumber = 644
  var array971 = new GraceList([
]);

  var var_ops = array971;
  lineNumber = 645
  var var_o;
  lineNumber = 646
  var var_o2;
  lineNumber = 647
  var var_tmp2;
  lineNumber = 648
  lineNumber = 1
  lineNumber = 647
  var call972 = callmethod(var_values,"pop", [0]);
  var var_tmp = call972;
  lineNumber = 648
  var call973 = callmethod(var_terms,"push", [1], var_tmp);
  lineNumber = 650
  var var_prec;
  lineNumber = 651
  lineNumber = 650
  var bool974 = new GraceBoolean(true)
  var var_allarith = bool974;
  lineNumber = 652
  lineNumber = 651
  var var_opcount = new GraceNum(0);
  lineNumber = 653
  lineNumber = 652
  var string975 = new GraceString("");
  var var_opdtype = string975;
  lineNumber = 711
  lineNumber = 653
  var block976 = Grace_allocObject();
  block976.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block976.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block976.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block976.receiver = this;
  block976.className = 'block<parser:653>';
  block976.real = function(
) {
  var string977 = new GraceString("op");
  var call978 = callmethod(this,"accept()onLineOfLastOr", [1, 1], string977, var_statementToken);
  return call978;
};
  lineNumber = 711
  var block979 = Grace_allocObject();
  block979.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block979.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block979.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block979.receiver = this;
  block979.className = 'block<parser:711>';
  block979.real = function(
) {
  lineNumber = 655
  lineNumber = 654
  var opresult981 = callmethod(var_opcount, "+", [1], new GraceNum(1));
  var_opcount = opresult981;
  lineNumber = 656
  lineNumber = 1
  lineNumber = 655
  var call982 = callmethod(var_sym,"value", [0]);
  var_o = call982;
  lineNumber = 656
  var call983 = callmethod(this,"next", [0]);
  lineNumber = 657
  lineNumber = 658
  var call984 = callmethod(this,"oprec", [1], var_o);
  var_prec = call984;
  lineNumber = 660
  lineNumber = 661
  lineNumber = 658
  var string986 = new GraceString("*");
  var opresult988 = callmethod(var_o, "/=", [1], string986);
  lineNumber = 661
  lineNumber = 658
  var string989 = new GraceString("/");
  var opresult991 = callmethod(var_o, "/=", [1], string989);
  var opresult993 = callmethod(opresult988, "&", [1], opresult991);
  lineNumber = 661
  lineNumber = 658
  var string994 = new GraceString("+");
  var opresult996 = callmethod(var_o, "/=", [1], string994);
  var opresult998 = callmethod(opresult993, "&", [1], opresult996);
  lineNumber = 661
  lineNumber = 658
  var string999 = new GraceString("-");
  var opresult1001 = callmethod(var_o, "/=", [1], string999);
  var opresult1003 = callmethod(opresult998, "&", [1], opresult1001);
  if (Grace_isTrue(opresult1003)) {
  lineNumber = 660
  lineNumber = 659
  var bool1004 = new GraceBoolean(false)
  var_allarith = bool1004;
  var if985 = bool1004;
}
  lineNumber = 666
  lineNumber = 668
  lineNumber = 661
  var string1006 = new GraceString("");
  var opresult1008 = callmethod(var_opdtype, "/=", [1], string1006);
  lineNumber = 668
  lineNumber = 661
  var opresult1010 = callmethod(var_opdtype, "/=", [1], var_o);
  var opresult1012 = callmethod(opresult1008, "&", [1], opresult1010);
  lineNumber = 668
  lineNumber = 1
  lineNumber = 661
  var call1013 = callmethod(var_allarith,"not", [0]);
  var opresult1015 = callmethod(opresult1012, "&", [1], call1013);
  if (Grace_isTrue(opresult1015)) {
  lineNumber = 666
  lineNumber = 665
  var string1016 = new GraceString("mixed operators without parentheses: ");
  lineNumber = 666
  var opresult1018 = callmethod(string1016, "++", [1], var_opdtype);
  var string1019 = new GraceString(" and ");
  var opresult1021 = callmethod(opresult1018, "++", [1], string1019);
  var opresult1023 = callmethod(opresult1021, "++", [1], var_o);
  lineNumber = 665
  var call1024 = callmethod(var_util,"syntax_error", [1], opresult1023);
  var if1005 = call1024;
}
  lineNumber = 669
  lineNumber = 671
  lineNumber = 668
  var string1026 = new GraceString("=");
  var opresult1028 = callmethod(var_o, "==", [1], string1026);
  if (Grace_isTrue(opresult1028)) {
  lineNumber = 669
  var string1029 = new GraceString("bare '=' outside of def declaration");
  var call1030 = callmethod(var_util,"syntax_error", [1], string1029);
  var if1025 = call1030;
}
  lineNumber = 672
  lineNumber = 671
  var_opdtype = var_o;
  lineNumber = 682
  lineNumber = 672
  var block1031 = Grace_allocObject();
  block1031.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1031.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1031.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1031.receiver = this;
  block1031.className = 'block<parser:672>';
  block1031.real = function(
) {
  lineNumber = 1
  lineNumber = 672
  var call1032 = callmethod(var_ops,"size", [0]);
  var opresult1034 = callmethod(call1032, ">", [1], new GraceNum(0));
  var call1035 = callmethod(this,"toprec", [1], var_ops);
  var opresult1037 = callmethod(var_prec, "<=", [1], call1035);
  var opresult1039 = callmethod(opresult1034, "&", [1], opresult1037);
  return opresult1039;
};
  lineNumber = 682
  var block1040 = Grace_allocObject();
  block1040.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1040.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1040.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1040.receiver = this;
  block1040.className = 'block<parser:682>';
  block1040.real = function(
) {
  lineNumber = 679
  lineNumber = 1
  lineNumber = 678
  var call1041 = callmethod(var_ops,"pop", [0]);
  var_o2 = call1041;
  lineNumber = 680
  lineNumber = 1
  lineNumber = 679
  var call1042 = callmethod(var_terms,"pop", [0]);
  var_tmp2 = call1042;
  lineNumber = 681
  lineNumber = 1
  lineNumber = 680
  var call1043 = callmethod(var_terms,"pop", [0]);
  var_tmp = call1043;
  lineNumber = 681
  lineNumber = 682
  lineNumber = 1
  lineNumber = 681
  var call1044 = callmethod(var_ast,"opNode", [0]);
  var call1045 = callmethod(call1044,"new", [3], var_o2, var_tmp, var_tmp2);
  var_tmp = call1045;
  lineNumber = 682
  var call1046 = callmethod(var_terms,"push", [1], var_tmp);
  return call1046;
};
  var call1047 = callmethod(Grace_prelude,"while()do", [1, 1], block1031, block1040);
  lineNumber = 684
  var call1048 = callmethod(var_ops,"push", [1], var_o);
  lineNumber = 700
  lineNumber = 685
  var string1050 = new GraceString("lparen");
  lineNumber = 707
  var call1051 = callmethod(this,"accept", [1], string1050);
  if (Grace_isTrue(call1051)) {
  lineNumber = 692
  var call1052 = callmethod(this,"next", [0]);
  lineNumber = 694
  lineNumber = 693
  var string1054 = new GraceString("rparen");
  lineNumber = 696
  var call1055 = callmethod(this,"accept", [1], string1054);
  if (Grace_isTrue(call1055)) {
  lineNumber = 694
  var string1056 = new GraceString("empty () in expression (maybe empty interpolated {} block)");
  var call1057 = callmethod(var_util,"syntax_error", [1], string1056);
  var if1053 = call1057;
}
  lineNumber = 696
  var call1058 = callmethod(this,"expression", [0]);
  lineNumber = 697
  var string1059 = new GraceString("rparen");
  lineNumber = 698
  var call1060 = callmethod(this,"expect", [1], string1059);
  var call1061 = callmethod(this,"next", [0]);
  var if1049 = call1061;
  } else {
  lineNumber = 700
  var call1062 = callmethod(this,"term", [0]);
  var if1049 = call1062;
}
  lineNumber = 707
  var call1063 = callmethod(this,"dotrest", [0]);
  lineNumber = 708
  var call1064 = callmethod(this,"callrest", [0]);
  lineNumber = 709
  var call1065 = callmethod(this,"postfixsquare", [0]);
  lineNumber = 711
  lineNumber = 1
  lineNumber = 710
  var call1066 = callmethod(var_values,"pop", [0]);
  var_tmp = call1066;
  lineNumber = 711
  var call1067 = callmethod(var_terms,"push", [1], var_tmp);
  return call1067;
};
  var call1068 = callmethod(Grace_prelude,"while()do", [1, 1], block976, block979);
  lineNumber = 719
  lineNumber = 713
  var block1069 = Grace_allocObject();
  block1069.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1069.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1069.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1069.receiver = this;
  block1069.className = 'block<parser:713>';
  block1069.real = function(
) {
  lineNumber = 1
  lineNumber = 713
  var call1070 = callmethod(var_ops,"size", [0]);
  var opresult1072 = callmethod(call1070, ">", [1], new GraceNum(0));
  return opresult1072;
};
  lineNumber = 719
  var block1073 = Grace_allocObject();
  block1073.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1073.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1073.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1073.receiver = this;
  block1073.className = 'block<parser:719>';
  block1073.real = function(
) {
  lineNumber = 716
  lineNumber = 1
  lineNumber = 715
  var call1074 = callmethod(var_ops,"pop", [0]);
  var_o = call1074;
  lineNumber = 717
  lineNumber = 1
  lineNumber = 716
  var call1075 = callmethod(var_terms,"pop", [0]);
  var_tmp2 = call1075;
  lineNumber = 718
  lineNumber = 1
  lineNumber = 717
  var call1076 = callmethod(var_terms,"pop", [0]);
  var_tmp = call1076;
  lineNumber = 718
  lineNumber = 719
  lineNumber = 1
  lineNumber = 718
  var call1077 = callmethod(var_ast,"opNode", [0]);
  var call1078 = callmethod(call1077,"new", [3], var_o, var_tmp, var_tmp2);
  var_tmp = call1078;
  lineNumber = 719
  var call1079 = callmethod(var_terms,"push", [1], var_tmp);
  return call1079;
};
  var call1080 = callmethod(Grace_prelude,"while()do", [1, 1], block1069, block1073);
  lineNumber = 722
  lineNumber = 1
  lineNumber = 721
  var call1081 = callmethod(var_terms,"pop", [0]);
  var_tmp = call1081;
  lineNumber = 722
  var call1082 = callmethod(var_values,"push", [1], var_tmp);
  lineNumber = 724
  lineNumber = 726
  lineNumber = 1
  lineNumber = 723
  var call1084 = callmethod(var_terms,"size", [0]);
  var opresult1086 = callmethod(call1084, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1086)) {
  lineNumber = 724
  var string1087 = new GraceString("values left on term stack");
  var call1088 = callmethod(var_util,"syntax_error", [1], string1087);
  var if1083 = call1088;
}
  var if967 = if1083;
}
  return if967
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["expressionrest"] = func966;
  lineNumber = 744
var func1089 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 733
  var string1091 = new GraceString("dot");
  lineNumber = 748
  var call1092 = callmethod(this,"accept", [1], string1091);
  if (Grace_isTrue(call1092)) {
  lineNumber = 735
  lineNumber = 1
  lineNumber = 734
  var call1093 = callmethod(var_values,"pop", [0]);
  var var_lookuptarget = call1093;
  lineNumber = 735
  var call1094 = callmethod(this,"next", [0]);
  lineNumber = 744
  lineNumber = 736
  var string1096 = new GraceString("identifier");
  lineNumber = 747
  var call1097 = callmethod(this,"accept", [1], string1096);
  if (Grace_isTrue(call1097)) {
  lineNumber = 737
  lineNumber = 1
  lineNumber = 737
  var call1098 = callmethod(var_sym,"value", [0]);
  lineNumber = 738
  lineNumber = 1
  lineNumber = 737
  var call1099 = callmethod(var_ast,"memberNode", [0]);
  var call1100 = callmethod(call1099,"new", [2], call1098, var_lookuptarget);
  var var_dro = call1100;
  lineNumber = 738
  var call1101 = callmethod(var_values,"push", [1], var_dro);
  lineNumber = 739
  var call1102 = callmethod(this,"next", [0]);
  lineNumber = 744
  lineNumber = 740
  var string1104 = new GraceString("dot");
  lineNumber = 746
  var call1105 = callmethod(this,"accept", [1], string1104);
  if (Grace_isTrue(call1105)) {
  lineNumber = 741
  var call1106 = callmethod(this,"dotrest", [0]);
  var if1103 = call1106;
  } else {
  lineNumber = 744
  lineNumber = 743
  lineNumber = 742
  var string1108 = new GraceString("lparen");
  lineNumber = 746
  var call1109 = callmethod(this,"accept", [1], string1108);
  lineNumber = 742
  var string1110 = new GraceString("lbrace");
  var call1111 = callmethod(this,"accept", [1], string1110);
  var opresult1113 = callmethod(call1109, "|", [1], call1111);
  lineNumber = 743
  var string1114 = new GraceString("num");
  lineNumber = 742
  var call1115 = callmethod(this,"accept", [1], string1114);
  var opresult1117 = callmethod(opresult1113, "|", [1], call1115);
  lineNumber = 743
  var string1118 = new GraceString("string");
  var call1119 = callmethod(this,"accept", [1], string1118);
  var opresult1121 = callmethod(opresult1117, "|", [1], call1119);
  var string1122 = new GraceString("lsquare");
  var call1123 = callmethod(this,"accept", [1], string1122);
  var opresult1125 = callmethod(opresult1121, "|", [1], call1123);
  if (Grace_isTrue(opresult1125)) {
  lineNumber = 744
  var call1126 = callmethod(this,"callrest", [0]);
  var if1107 = call1126;
}
  var if1103 = if1107;
}
  var if1095 = if1103;
}
  var if1090 = if1095;
}
  return if1090
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["dotrest"] = func1089;
  lineNumber = 860
var func1127 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 756
  lineNumber = 757
  lineNumber = 1
  lineNumber = 754
  var call1129 = callmethod(var_values,"size", [0]);
  var opresult1131 = callmethod(call1129, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1131)) {
  lineNumber = 756
  lineNumber = 755
  return new GraceNum(0)
  var if1128 = undefined;
}
  lineNumber = 758
  lineNumber = 1
  lineNumber = 757
  var call1132 = callmethod(var_values,"pop", [0]);
  var var_meth = call1132;
  lineNumber = 762
  lineNumber = 764
  lineNumber = 1
  lineNumber = 758
  var call1134 = callmethod(var_meth,"kind", [0]);
  var string1135 = new GraceString("identifier");
  var opresult1137 = callmethod(call1134, "!=", [1], string1135);
  if (Grace_isTrue(opresult1137)) {
  lineNumber = 762
  lineNumber = 763
  lineNumber = 1
  lineNumber = 759
  var call1139 = callmethod(var_meth,"kind", [0]);
  var string1140 = new GraceString("member");
  var opresult1142 = callmethod(call1139, "!=", [1], string1140);
  if (Grace_isTrue(opresult1142)) {
  lineNumber = 760
  var call1143 = callmethod(var_values,"push", [1], var_meth);
  lineNumber = 762
  lineNumber = 761
  return new GraceNum(0)
  var if1138 = undefined;
}
  var if1133 = if1138;
}
  lineNumber = 765
  var var_methn;
  lineNumber = 766
  var var_tmp;
  lineNumber = 767
  lineNumber = 766
  var bool1144 = new GraceBoolean(false)
  var var_ln = bool1144;
  lineNumber = 768
  var array1145 = new GraceList([
]);

  var var_signature = array1145;
  lineNumber = 769
  lineNumber = 1
  lineNumber = 769
  lineNumber = 1
  lineNumber = 768
  var call1146 = callmethod(var_ast,"callWithPart", [0]);
  var call1147 = callmethod(call1146,"new", [0]);
  var var_part = call1147;
  lineNumber = 769
  var call1148 = callmethod(var_signature,"push", [1], var_part);
  lineNumber = 771
  lineNumber = 770
  var bool1149 = new GraceBoolean(false)
  var var_hadcall = bool1149;
  lineNumber = 772
  lineNumber = 771
  var var_tok = var_lastToken;
  lineNumber = 773
  lineNumber = 772
  var var_startInd = var_minIndentLevel;
  lineNumber = 841
  lineNumber = 773
  var string1151 = new GraceString("lparen");
  lineNumber = 843
  var call1152 = callmethod(this,"acceptSameLine", [1], string1151);
  if (Grace_isTrue(call1152)) {
  lineNumber = 775
  lineNumber = 774
  var_tok = var_sym;
  lineNumber = 776
  lineNumber = 775
  var bool1153 = new GraceBoolean(true)
  var_hadcall = bool1153;
  lineNumber = 777
  lineNumber = 1
  lineNumber = 776
  var call1154 = callmethod(var_meth,"value", [0]);
  var_methn = call1154;
  lineNumber = 778
  lineNumber = 1
  lineNumber = 777
  var call1155 = callmethod(var_part,"name:=", [1], var_methn);
  lineNumber = 778
  var call1156 = callmethod(this,"next", [0]);
  lineNumber = 809
  lineNumber = 779
  var block1157 = Grace_allocObject();
  block1157.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1157.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1157.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1157.receiver = this;
  block1157.className = 'block<parser:779>';
  block1157.real = function(
) {
  var call1158 = callmethod(this,"expression", [0]);
  return call1158;
};
  lineNumber = 809
  var block1159 = Grace_allocObject();
  block1159.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1159.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1159.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1159.receiver = this;
  block1159.className = 'block<parser:809>';
  block1159.real = function(
) {
  lineNumber = 789
  lineNumber = 781
  var string1161 = new GraceString("colon");
  lineNumber = 791
  var call1162 = callmethod(this,"accept", [1], string1161);
  if (Grace_isTrue(call1162)) {
  lineNumber = 783
  lineNumber = 1
  lineNumber = 782
  var call1163 = callmethod(var_values,"pop", [0]);
  var_tmp = call1163;
  lineNumber = 784
  lineNumber = 786
  lineNumber = 1
  lineNumber = 783
  var call1165 = callmethod(var_tmp,"kind", [0]);
  var string1166 = new GraceString("identifier");
  var opresult1168 = callmethod(call1165, "!=", [1], string1166);
  if (Grace_isTrue(opresult1168)) {
  lineNumber = 784
  var string1169 = new GraceString("colon must follow identifier");
  var call1170 = callmethod(var_util,"syntax_error", [1], string1169);
  var if1164 = call1170;
}
  lineNumber = 786
  var call1171 = callmethod(this,"next", [0]);
  lineNumber = 787
  var block1172 = Grace_allocObject();
  block1172.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1172.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1172.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1172.receiver = this;
  block1172.className = 'block<parser:787>';
  block1172.real = function(
) {
  var call1173 = callmethod(this,"expression", [0]);
  return call1173;
};
  lineNumber = 788
  var call1174 = callmethod(this,"expectConsume", [1], block1172);
  lineNumber = 789
  lineNumber = 1
  lineNumber = 789
  lineNumber = 1
  lineNumber = 788
  var call1175 = callmethod(var_values,"pop", [0]);
  var call1176 = callmethod(var_tmp,"dtype:=", [1], call1175);
  lineNumber = 789
  var call1177 = callmethod(var_values,"push", [1], var_tmp);
  var if1160 = call1177;
}
  lineNumber = 805
  lineNumber = 791
  var block1178 = Grace_allocObject();
  block1178.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1178.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1178.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1178.receiver = this;
  block1178.className = 'block<parser:791>';
  block1178.real = function(
) {
  var string1179 = new GraceString("comma");
  var call1180 = callmethod(this,"accept", [1], string1179);
  return call1180;
};
  lineNumber = 805
  var block1181 = Grace_allocObject();
  block1181.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1181.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1181.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1181.receiver = this;
  block1181.className = 'block<parser:805>';
  block1181.real = function(
) {
  lineNumber = 793
  lineNumber = 1
  lineNumber = 792
  var call1182 = callmethod(var_values,"pop", [0]);
  var_tmp = call1182;
  lineNumber = 793
  lineNumber = 794
  lineNumber = 1
  lineNumber = 793
  var call1183 = callmethod(var_part,"args", [0]);
  var call1184 = callmethod(call1183,"push", [1], var_tmp);
  lineNumber = 794
  var call1185 = callmethod(this,"next", [0]);
  lineNumber = 795
  var block1186 = Grace_allocObject();
  block1186.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1186.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1186.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1186.receiver = this;
  block1186.className = 'block<parser:795>';
  block1186.real = function(
) {
  var call1187 = callmethod(this,"expression", [0]);
  return call1187;
};
  lineNumber = 797
  var call1188 = callmethod(this,"expectConsume", [1], block1186);
  lineNumber = 805
  lineNumber = 797
  var string1190 = new GraceString("colon");
  lineNumber = 807
  var call1191 = callmethod(this,"accept", [1], string1190);
  if (Grace_isTrue(call1191)) {
  lineNumber = 799
  lineNumber = 1
  lineNumber = 798
  var call1192 = callmethod(var_values,"pop", [0]);
  var_tmp = call1192;
  lineNumber = 800
  lineNumber = 802
  lineNumber = 1
  lineNumber = 799
  var call1194 = callmethod(var_tmp,"kind", [0]);
  var string1195 = new GraceString("identifier");
  var opresult1197 = callmethod(call1194, "!=", [1], string1195);
  if (Grace_isTrue(opresult1197)) {
  lineNumber = 800
  var string1198 = new GraceString("colon must follow identifier");
  var call1199 = callmethod(var_util,"syntax_error", [1], string1198);
  var if1193 = call1199;
}
  lineNumber = 802
  var call1200 = callmethod(this,"next", [0]);
  lineNumber = 803
  var block1201 = Grace_allocObject();
  block1201.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1201.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1201.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1201.receiver = this;
  block1201.className = 'block<parser:803>';
  block1201.real = function(
) {
  var call1202 = callmethod(this,"expression", [0]);
  return call1202;
};
  lineNumber = 804
  var call1203 = callmethod(this,"expectConsume", [1], block1201);
  lineNumber = 805
  lineNumber = 1
  lineNumber = 805
  lineNumber = 1
  lineNumber = 804
  var call1204 = callmethod(var_values,"pop", [0]);
  var call1205 = callmethod(var_tmp,"dtype:=", [1], call1204);
  lineNumber = 805
  var call1206 = callmethod(var_values,"push", [1], var_tmp);
  var if1189 = call1206;
}
  return if1189;
};
  var call1207 = callmethod(Grace_prelude,"while()do", [1, 1], block1178, block1181);
  lineNumber = 809
  lineNumber = 1
  lineNumber = 808
  var call1208 = callmethod(var_values,"pop", [0]);
  var_tmp = call1208;
  lineNumber = 809
  lineNumber = 810
  lineNumber = 1
  lineNumber = 809
  var call1209 = callmethod(var_part,"args", [0]);
  var call1210 = callmethod(call1209,"push", [1], var_tmp);
  return call1210;
};
  lineNumber = 811
  var call1211 = callmethod(this,"ifConsume()then", [1, 1], block1157, block1159);
  var string1212 = new GraceString("rparen");
  lineNumber = 812
  var call1213 = callmethod(this,"expect", [1], string1212);
  lineNumber = 813
  lineNumber = 812
  var_ln = var_linenum;
  lineNumber = 813
  var call1214 = callmethod(this,"next", [0]);
  var if1150 = call1214;
  } else {
  lineNumber = 841
  lineNumber = 816
  lineNumber = 815
  lineNumber = 814
  var string1216 = new GraceString("string");
  lineNumber = 826
  var call1217 = callmethod(this,"accept()onLineOf", [1, 1], string1216, var_tok);
  lineNumber = 814
  var string1218 = new GraceString("num");
  var call1219 = callmethod(this,"accept()onLineOf", [1, 1], string1218, var_tok);
  var opresult1221 = callmethod(call1217, "|", [1], call1219);
  lineNumber = 815
  var string1222 = new GraceString("lbrace");
  lineNumber = 814
  var call1223 = callmethod(this,"accept()onLineOf", [1, 1], string1222, var_tok);
  var opresult1225 = callmethod(opresult1221, "|", [1], call1223);
  lineNumber = 816
  var string1226 = new GraceString("identifier");
  lineNumber = 815
  var call1227 = callmethod(this,"accept()onLineOf", [1, 1], string1226, var_tok);
  lineNumber = 816
  lineNumber = 1
  lineNumber = 816
  var call1228 = callmethod(var_sym,"value", [0]);
  var string1229 = new GraceString("true");
  var opresult1231 = callmethod(call1228, "==", [1], string1229);
  lineNumber = 1
  lineNumber = 817
  var call1232 = callmethod(var_sym,"value", [0]);
  var string1233 = new GraceString("false");
  var opresult1235 = callmethod(call1232, "==", [1], string1233);
  var opresult1237 = callmethod(opresult1231, "|", [1], opresult1235);
  var opresult1239 = callmethod(call1227, "&", [1], opresult1237);
  var opresult1241 = callmethod(opresult1225, "|", [1], opresult1239);
  if (Grace_isTrue(opresult1241)) {
  lineNumber = 819
  lineNumber = 818
  var_tok = var_sym;
  lineNumber = 820
  lineNumber = 819
  var bool1242 = new GraceBoolean(true)
  var_hadcall = bool1242;
  lineNumber = 821
  lineNumber = 1
  lineNumber = 820
  var call1243 = callmethod(var_meth,"value", [0]);
  var_methn = call1243;
  lineNumber = 822
  lineNumber = 1
  lineNumber = 821
  var call1244 = callmethod(var_part,"name:=", [1], var_methn);
  lineNumber = 823
  lineNumber = 822
  var_ln = var_linenum;
  lineNumber = 823
  var call1245 = callmethod(this,"term", [0]);
  lineNumber = 825
  lineNumber = 1
  lineNumber = 824
  var call1246 = callmethod(var_values,"pop", [0]);
  var var_ar = call1246;
  lineNumber = 825
  lineNumber = 826
  lineNumber = 1
  lineNumber = 825
  var call1247 = callmethod(var_part,"args", [0]);
  var call1248 = callmethod(call1247,"push", [1], var_ar);
  var if1215 = call1248;
  } else {
  lineNumber = 841
  lineNumber = 828
  lineNumber = 1
  lineNumber = 826
  var call1250 = callmethod(var_meth,"kind", [0]);
  var string1251 = new GraceString("identifier");
  var opresult1253 = callmethod(call1250, "==", [1], string1251);
  if (Grace_isTrue(opresult1253)) {
  lineNumber = 827
  var call1254 = callmethod(var_values,"push", [1], var_meth);
  var if1249 = call1254;
  } else {
  lineNumber = 841
  lineNumber = 840
  lineNumber = 1
  lineNumber = 828
  var call1256 = callmethod(var_meth,"kind", [0]);
  var string1257 = new GraceString("member");
  var opresult1259 = callmethod(call1256, "==", [1], string1257);
  if (Grace_isTrue(opresult1259)) {
  lineNumber = 830
  lineNumber = 1
  lineNumber = 829
  var call1260 = callmethod(var_meth,"in", [0]);
  var var_root = call1260;
  lineNumber = 831
  lineNumber = 830
  var var_outroot = var_meth;
  lineNumber = 834
  lineNumber = 831
  var block1261 = Grace_allocObject();
  block1261.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1261.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1261.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1261.receiver = this;
  block1261.className = 'block<parser:831>';
  block1261.real = function(
) {
  lineNumber = 1
  lineNumber = 831
  var call1262 = callmethod(var_root,"kind", [0]);
  var string1263 = new GraceString("member");
  var opresult1265 = callmethod(call1262, "==", [1], string1263);
  return opresult1265;
};
  lineNumber = 834
  var block1266 = Grace_allocObject();
  block1266.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1266.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1266.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1266.receiver = this;
  block1266.className = 'block<parser:834>';
  block1266.real = function(
) {
  lineNumber = 833
  lineNumber = 832
  var_outroot = var_root;
  lineNumber = 834
  lineNumber = 1
  lineNumber = 833
  var call1267 = callmethod(var_root,"in", [0]);
  var_root = call1267;
  return call1267;
};
  var call1268 = callmethod(Grace_prelude,"while()do", [1, 1], block1261, block1266);
  lineNumber = 838
  lineNumber = 840
  lineNumber = 1
  lineNumber = 835
  var call1270 = callmethod(var_root,"kind", [0]);
  var string1271 = new GraceString("identifier");
  var opresult1273 = callmethod(call1270, "==", [1], string1271);
  if (Grace_isTrue(opresult1273)) {
  lineNumber = 836
  var call1274 = callmethod(var_values,"push", [1], var_meth);
  var if1269 = call1274;
  } else {
  lineNumber = 838
  var call1275 = callmethod(var_values,"push", [1], var_meth);
  var if1269 = call1275;
}
  var if1255 = if1269;
  } else {
  lineNumber = 841
  var call1276 = callmethod(var_values,"push", [1], var_meth);
  var if1255 = call1276;
}
  var if1249 = if1255;
}
  var if1215 = if1249;
}
  var if1150 = if1215;
}
  lineNumber = 857
  lineNumber = 843
  if (Grace_isTrue(var_hadcall)) {
  lineNumber = 854
  lineNumber = 844
  var string1279 = new GraceString("identifier");
  lineNumber = 856
  var call1280 = callmethod(this,"accept()onLineOfLastOr", [1, 1], string1279, var_tok);
  if (Grace_isTrue(call1280)) {
  lineNumber = 846
  var bool1281 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 846
  var call1282 = callmethod(var_ast,"identifierNode", [0]);
  var call1283 = callmethod(call1282,"new", [2], var_methn, bool1281);
  lineNumber = 847
  var call1284 = callmethod(this,"callmprest", [3], call1283, var_signature, var_tok);
  var_methn = call1284;
  lineNumber = 854
  lineNumber = 855
  lineNumber = 1
  lineNumber = 847
  var call1286 = callmethod(var_meth,"kind", [0]);
  var string1287 = new GraceString("member");
  var opresult1289 = callmethod(call1286, "==", [1], string1287);
  if (Grace_isTrue(opresult1289)) {
  lineNumber = 851
  lineNumber = 1
  lineNumber = 851
  var call1290 = callmethod(var_methn,"value", [0]);
  lineNumber = 1
  lineNumber = 851
  var call1291 = callmethod(var_meth,"in", [0]);
  lineNumber = 852
  lineNumber = 1
  lineNumber = 851
  var call1292 = callmethod(var_ast,"memberNode", [0]);
  var call1293 = callmethod(call1292,"new", [2], call1290, call1291);
  var_meth = call1293;
  var if1285 = call1293;
  } else {
  lineNumber = 854
  lineNumber = 853
  var_meth = var_methn;
  var if1285 = var_methn;
}
  var if1278 = if1285;
}
  lineNumber = 856
  lineNumber = 857
  lineNumber = 1
  lineNumber = 856
  var call1294 = callmethod(var_ast,"callNode", [0]);
  var call1295 = callmethod(call1294,"new", [2], var_meth, var_signature);
  var_tmp = call1295;
  lineNumber = 857
  var call1296 = callmethod(var_values,"push", [1], var_tmp);
  var if1277 = call1296;
}
  lineNumber = 860
  lineNumber = 859
  var_minIndentLevel = var_startInd;
  lineNumber = 860
  var call1297 = callmethod(this,"dotrest", [0]);
  return call1297
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["callrest"] = func1127;
  lineNumber = 919
var func1298 = function(argcv) {
  var curarg = 1;
  var var_meth = arguments[curarg];
  curarg++;
  var var_signature = arguments[curarg];
  curarg++;
  var var_tok = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 868
  lineNumber = 1
  lineNumber = 867
  var call1299 = callmethod(var_meth,"value", [0]);
  var var_methname = call1299;
  lineNumber = 869
  var var_nxt;
  lineNumber = 870
  lineNumber = 869
  var var_ln = var_linenum;
  lineNumber = 871
  var var_part;
  lineNumber = 916
  lineNumber = 872
  var block1300 = Grace_allocObject();
  block1300.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1300.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1300.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1300.receiver = this;
  block1300.className = 'block<parser:872>';
  block1300.real = function(
) {
  lineNumber = 871
  var string1301 = new GraceString("identifier");
  lineNumber = 872
  var call1302 = callmethod(this,"accept()onLineOf", [1, 1], string1301, var_tok);
  var string1303 = new GraceString("identifier");
  lineNumber = 871
  var call1304 = callmethod(this,"accept()onLineOf", [1, 1], string1303, var_lastToken);
  var opresult1306 = callmethod(call1302, "|", [1], call1304);
  return opresult1306;
};
  lineNumber = 916
  var block1307 = Grace_allocObject();
  block1307.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1307.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1307.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1307.receiver = this;
  block1307.className = 'block<parser:916>';
  block1307.real = function(
) {
  lineNumber = 876
  lineNumber = 1
  lineNumber = 876
  lineNumber = 1
  lineNumber = 875
  var call1308 = callmethod(var_ast,"callWithPart", [0]);
  var call1309 = callmethod(call1308,"new", [0]);
  var_part = call1309;
  lineNumber = 876
  var call1310 = callmethod(var_signature,"push", [1], var_part);
  lineNumber = 878
  lineNumber = 877
  var string1311 = new GraceString("()");
  var opresult1313 = callmethod(var_methname, "++", [1], string1311);
  var_methname = opresult1313;
  lineNumber = 878
  var call1314 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 880
  lineNumber = 1
  lineNumber = 879
  var call1315 = callmethod(var_values,"pop", [0]);
  var_nxt = call1315;
  lineNumber = 881
  lineNumber = 880
  lineNumber = 881
  lineNumber = 1
  lineNumber = 880
  var call1316 = callmethod(var_nxt,"value", [0]);
  var opresult1318 = callmethod(var_methname, "++", [1], call1316);
  var_methname = opresult1318;
  lineNumber = 882
  lineNumber = 1
  lineNumber = 882
  lineNumber = 1
  lineNumber = 881
  var call1319 = callmethod(var_nxt,"value", [0]);
  var call1320 = callmethod(var_part,"name:=", [1], call1319);
  lineNumber = 883
  lineNumber = 882
  var bool1321 = new GraceBoolean(false)
  var var_isTerm = bool1321;
  lineNumber = 885
  lineNumber = 884
  lineNumber = 883
  lineNumber = 1
  lineNumber = 883
  var string1323 = new GraceString("lparen");
  lineNumber = 887
  var call1324 = callmethod(this,"accept", [1], string1323);
  var call1325 = callmethod(call1324,"not", [0]);
  lineNumber = 883
  lineNumber = 1
  lineNumber = 883
  var string1326 = new GraceString("lbrace");
  var call1327 = callmethod(this,"accept", [1], string1326);
  var call1328 = callmethod(call1327,"not", [0]);
  var opresult1330 = callmethod(call1325, "&", [1], call1328);
  lineNumber = 884
  lineNumber = 1
  lineNumber = 884
  var string1331 = new GraceString("string");
  lineNumber = 883
  var call1332 = callmethod(this,"accept", [1], string1331);
  var call1333 = callmethod(call1332,"not", [0]);
  var opresult1335 = callmethod(opresult1330, "&", [1], call1333);
  lineNumber = 884
  lineNumber = 1
  lineNumber = 884
  var string1336 = new GraceString("num");
  var call1337 = callmethod(this,"accept", [1], string1336);
  var call1338 = callmethod(call1337,"not", [0]);
  var opresult1340 = callmethod(opresult1335, "&", [1], call1338);
  if (Grace_isTrue(opresult1340)) {
  lineNumber = 885
  var string1341 = new GraceString("multi-part method name parameters require .");
  var call1342 = callmethod(var_util,"syntax_error", [1], string1341);
  var if1322 = call1342;
}
  lineNumber = 895
  lineNumber = 890
  lineNumber = 889
  lineNumber = 888
  lineNumber = 887
  var string1344 = new GraceString("lbrace");
  lineNumber = 897
  var call1345 = callmethod(this,"accept()onLineOfLastOr", [1, 1], string1344, var_tok);
  lineNumber = 888
  var string1346 = new GraceString("string");
  lineNumber = 887
  var call1347 = callmethod(this,"accept()onLineOfLastOr", [1, 1], string1346, var_tok);
  var opresult1349 = callmethod(call1345, "|", [1], call1347);
  lineNumber = 889
  var string1350 = new GraceString("num");
  lineNumber = 888
  var call1351 = callmethod(this,"accept()onLineOfLastOr", [1, 1], string1350, var_tok);
  var opresult1353 = callmethod(opresult1349, "|", [1], call1351);
  lineNumber = 890
  var string1354 = new GraceString("identifier");
  lineNumber = 889
  var call1355 = callmethod(this,"accept()onLineOfLastOr", [1, 1], string1354, var_tok);
  lineNumber = 890
  lineNumber = 1
  lineNumber = 891
  var call1356 = callmethod(var_sym,"value", [0]);
  var string1357 = new GraceString("true");
  var opresult1359 = callmethod(call1356, "==", [1], string1357);
  lineNumber = 890
  lineNumber = 1
  lineNumber = 892
  var call1360 = callmethod(var_sym,"value", [0]);
  var string1361 = new GraceString("false");
  var opresult1363 = callmethod(call1360, "==", [1], string1361);
  var opresult1365 = callmethod(opresult1359, "|", [1], opresult1363);
  var opresult1367 = callmethod(call1355, "&", [1], opresult1365);
  var opresult1369 = callmethod(opresult1353, "|", [1], opresult1367);
  if (Grace_isTrue(opresult1369)) {
  lineNumber = 894
  lineNumber = 893
  var bool1370 = new GraceBoolean(true)
  var_isTerm = bool1370;
  var if1343 = bool1370;
  } else {
  lineNumber = 895
  var call1371 = callmethod(this,"next", [0]);
  var if1343 = call1371;
}
  lineNumber = 906
  lineNumber = 897
  if (Grace_isTrue(var_isTerm)) {
  lineNumber = 899
  lineNumber = 898
  var_ln = var_lastline;
  lineNumber = 899
  var call1373 = callmethod(this,"term", [0]);
  var if1372 = call1373;
  } else {
  lineNumber = 901
  var call1374 = callmethod(this,"expression", [0]);
  lineNumber = 906
  lineNumber = 902
  var block1375 = Grace_allocObject();
  block1375.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1375.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1375.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1375.receiver = this;
  block1375.className = 'block<parser:902>';
  block1375.real = function(
) {
  var string1376 = new GraceString("comma");
  var call1377 = callmethod(this,"accept", [1], string1376);
  return call1377;
};
  lineNumber = 906
  var block1378 = Grace_allocObject();
  block1378.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1378.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1378.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1378.receiver = this;
  block1378.className = 'block<parser:906>';
  block1378.real = function(
) {
  lineNumber = 904
  lineNumber = 1
  lineNumber = 903
  var call1379 = callmethod(var_values,"pop", [0]);
  var_nxt = call1379;
  lineNumber = 904
  lineNumber = 905
  lineNumber = 1
  lineNumber = 904
  var call1380 = callmethod(var_part,"args", [0]);
  var call1381 = callmethod(call1380,"push", [1], var_nxt);
  lineNumber = 905
  var call1382 = callmethod(this,"next", [0]);
  lineNumber = 906
  var block1383 = Grace_allocObject();
  block1383.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1383.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1383.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1383.receiver = this;
  block1383.className = 'block<parser:906>';
  block1383.real = function(
) {
  var call1384 = callmethod(this,"expression", [0]);
  return call1384;
};
  lineNumber = 907
  var call1385 = callmethod(this,"expectConsume", [1], block1383);
  return call1385;
};
  var call1386 = callmethod(Grace_prelude,"while()do", [1, 1], block1375, block1378);
  var if1372 = call1386;
}
  lineNumber = 910
  lineNumber = 1
  lineNumber = 909
  var call1387 = callmethod(var_values,"pop", [0]);
  var_nxt = call1387;
  lineNumber = 910
  lineNumber = 911
  lineNumber = 1
  lineNumber = 910
  var call1388 = callmethod(var_part,"args", [0]);
  var call1389 = callmethod(call1388,"push", [1], var_nxt);
  lineNumber = 912
  lineNumber = 914
  lineNumber = 1
  lineNumber = 911
  var call1391 = callmethod(var_isTerm,"not", [0]);
  if (Grace_isTrue(call1391)) {
  lineNumber = 912
  var string1392 = new GraceString("rparen");
  lineNumber = 913
  var call1393 = callmethod(this,"expect", [1], string1392);
  var if1390 = call1393;
}
  lineNumber = 916
  lineNumber = 914
  var string1395 = new GraceString("rparen");
  lineNumber = 918
  var call1396 = callmethod(this,"accept", [1], string1395);
  lineNumber = 914
  lineNumber = 1
  lineNumber = 914
  var call1397 = callmethod(var_isTerm,"not", [0]);
  var opresult1399 = callmethod(call1396, "&", [1], call1397);
  if (Grace_isTrue(opresult1399)) {
  lineNumber = 916
  lineNumber = 915
  var_ln = var_lastline;
  lineNumber = 916
  var call1400 = callmethod(this,"next", [0]);
  var if1394 = call1400;
}
  return if1394;
};
  var call1401 = callmethod(Grace_prelude,"while()do", [1, 1], block1300, block1307);
  lineNumber = 919
  var bool1402 = new GraceBoolean(false)
  lineNumber = 920
  lineNumber = 1
  lineNumber = 919
  var call1403 = callmethod(var_ast,"identifierNode", [0]);
  var call1404 = callmethod(call1403,"new", [2], var_methname, bool1402);
  return call1404
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["callmprest"] = func1298;
  lineNumber = 945
var func1405 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 924
  var string1407 = new GraceString("keyword");
  lineNumber = 947
  var call1408 = callmethod(this,"accept", [1], string1407);
  lineNumber = 924
  lineNumber = 1
  lineNumber = 924
  var call1409 = callmethod(var_sym,"value", [0]);
  var string1410 = new GraceString("def");
  var opresult1412 = callmethod(call1409, "==", [1], string1410);
  var opresult1414 = callmethod(call1408, "&", [1], opresult1412);
  if (Grace_isTrue(opresult1414)) {
  lineNumber = 925
  var call1415 = callmethod(this,"next", [0]);
  lineNumber = 926
  var call1416 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 928
  lineNumber = 927
  var bool1417 = new GraceBoolean(false)
  var var_val = bool1417;
  lineNumber = 928
  var string1418 = new GraceString("Dynamic");
  var bool1419 = new GraceBoolean(false)
  lineNumber = 929
  lineNumber = 1
  lineNumber = 928
  var call1420 = callmethod(var_ast,"identifierNode", [0]);
  var call1421 = callmethod(call1420,"new", [2], string1418, bool1419);
  var var_dtype = call1421;
  lineNumber = 930
  lineNumber = 1
  lineNumber = 929
  var call1422 = callmethod(var_values,"pop", [0]);
  var var_name = call1422;
  lineNumber = 934
  lineNumber = 930
  var string1424 = new GraceString("colon");
  lineNumber = 935
  var call1425 = callmethod(this,"accept", [1], string1424);
  if (Grace_isTrue(call1425)) {
  lineNumber = 931
  var call1426 = callmethod(this,"next", [0]);
  lineNumber = 932
  var call1427 = callmethod(this,"dotyperef", [0]);
  lineNumber = 934
  lineNumber = 1
  lineNumber = 933
  var call1428 = callmethod(var_values,"pop", [0]);
  var_dtype = call1428;
  var if1423 = call1428;
}
  lineNumber = 942
  lineNumber = 935
  var string1430 = new GraceString("op");
  lineNumber = 944
  var call1431 = callmethod(this,"accept", [1], string1430);
  lineNumber = 935
  lineNumber = 1
  lineNumber = 935
  var call1432 = callmethod(var_sym,"value", [0]);
  var string1433 = new GraceString("=");
  var opresult1435 = callmethod(call1432, "==", [1], string1433);
  var opresult1437 = callmethod(call1431, "&", [1], opresult1435);
  if (Grace_isTrue(opresult1437)) {
  lineNumber = 936
  var call1438 = callmethod(this,"next", [0]);
  lineNumber = 937
  var call1439 = callmethod(this,"expression", [0]);
  lineNumber = 939
  lineNumber = 1
  lineNumber = 938
  var call1440 = callmethod(var_values,"pop", [0]);
  var_val = call1440;
  var if1429 = call1440;
  } else {
  lineNumber = 942
  lineNumber = 939
  var string1442 = new GraceString("bind");
  lineNumber = 941
  var call1443 = callmethod(this,"accept", [1], string1442);
  if (Grace_isTrue(call1443)) {
  lineNumber = 940
  var string1444 = new GraceString("def declaration uses '=', not ':='");
  var call1445 = callmethod(var_util,"syntax_error", [1], string1444);
  var if1441 = call1445;
  } else {
  lineNumber = 942
  var string1446 = new GraceString("def declaration requires value");
  var call1447 = callmethod(var_util,"syntax_error", [1], string1446);
  var if1441 = call1447;
}
  var if1429 = if1441;
}
  lineNumber = 944
  lineNumber = 945
  lineNumber = 1
  lineNumber = 944
  var call1448 = callmethod(var_ast,"defDecNode", [0]);
  var call1449 = callmethod(call1448,"new", [3], var_name, var_val, var_dtype);
  var var_o = call1449;
  lineNumber = 945
  var call1450 = callmethod(var_values,"push", [1], var_o);
  var if1406 = call1450;
}
  return if1406
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["defdec"] = func1405;
  lineNumber = 971
var func1451 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 951
  var string1453 = new GraceString("keyword");
  lineNumber = 973
  var call1454 = callmethod(this,"accept", [1], string1453);
  lineNumber = 951
  lineNumber = 1
  lineNumber = 951
  var call1455 = callmethod(var_sym,"value", [0]);
  var string1456 = new GraceString("var");
  var opresult1458 = callmethod(call1455, "==", [1], string1456);
  var opresult1460 = callmethod(call1454, "&", [1], opresult1458);
  if (Grace_isTrue(opresult1460)) {
  lineNumber = 952
  var call1461 = callmethod(this,"next", [0]);
  lineNumber = 953
  var call1462 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 955
  lineNumber = 954
  var bool1463 = new GraceBoolean(false)
  var var_val = bool1463;
  lineNumber = 955
  var string1464 = new GraceString("Dynamic");
  var bool1465 = new GraceBoolean(false)
  lineNumber = 956
  lineNumber = 1
  lineNumber = 955
  var call1466 = callmethod(var_ast,"identifierNode", [0]);
  var call1467 = callmethod(call1466,"new", [2], string1464, bool1465);
  var var_dtype = call1467;
  lineNumber = 957
  lineNumber = 1
  lineNumber = 956
  var call1468 = callmethod(var_values,"pop", [0]);
  var var_name = call1468;
  lineNumber = 961
  lineNumber = 957
  var string1470 = new GraceString("colon");
  lineNumber = 962
  var call1471 = callmethod(this,"accept", [1], string1470);
  if (Grace_isTrue(call1471)) {
  lineNumber = 958
  var call1472 = callmethod(this,"next", [0]);
  lineNumber = 959
  var call1473 = callmethod(this,"dotyperef", [0]);
  lineNumber = 961
  lineNumber = 1
  lineNumber = 960
  var call1474 = callmethod(var_values,"pop", [0]);
  var_dtype = call1474;
  var if1469 = call1474;
}
  lineNumber = 966
  lineNumber = 962
  var string1476 = new GraceString("bind");
  lineNumber = 967
  var call1477 = callmethod(this,"accept", [1], string1476);
  if (Grace_isTrue(call1477)) {
  lineNumber = 963
  var call1478 = callmethod(this,"next", [0]);
  lineNumber = 964
  var call1479 = callmethod(this,"expression", [0]);
  lineNumber = 966
  lineNumber = 1
  lineNumber = 965
  var call1480 = callmethod(var_values,"pop", [0]);
  var_val = call1480;
  var if1475 = call1480;
}
  lineNumber = 968
  lineNumber = 967
  var string1482 = new GraceString("op");
  lineNumber = 970
  var call1483 = callmethod(this,"accept", [1], string1482);
  lineNumber = 967
  lineNumber = 1
  lineNumber = 967
  var call1484 = callmethod(var_sym,"value", [0]);
  var string1485 = new GraceString("=");
  var opresult1487 = callmethod(call1484, "==", [1], string1485);
  var opresult1489 = callmethod(call1483, "&", [1], opresult1487);
  if (Grace_isTrue(opresult1489)) {
  lineNumber = 968
  var string1490 = new GraceString("var declaration uses ':=', not '='");
  var call1491 = callmethod(var_util,"syntax_error", [1], string1490);
  var if1481 = call1491;
}
  lineNumber = 970
  lineNumber = 971
  lineNumber = 1
  lineNumber = 970
  var call1492 = callmethod(var_ast,"varDecNode", [0]);
  var call1493 = callmethod(call1492,"new", [3], var_name, var_val, var_dtype);
  var var_o = call1493;
  lineNumber = 971
  var call1494 = callmethod(var_values,"push", [1], var_o);
  var if1452 = call1494;
}
  return if1452
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["vardec"] = func1451;
  lineNumber = 994
var func1495 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 977
  var string1497 = new GraceString("lsquare");
  lineNumber = 996
  var call1498 = callmethod(this,"accept", [1], string1497);
  if (Grace_isTrue(call1498)) {
  lineNumber = 978
  var call1499 = callmethod(this,"next", [0]);
  lineNumber = 980
  var var_tmp;
  lineNumber = 981
  var array1500 = new GraceList([
]);

  var var_params = array1500;
  lineNumber = 989
  lineNumber = 981
  var block1501 = Grace_allocObject();
  block1501.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1501.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1501.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1501.receiver = this;
  block1501.className = 'block<parser:981>';
  block1501.real = function(
) {
  var call1502 = callmethod(this,"expression", [0]);
  return call1502;
};
  lineNumber = 989
  var block1503 = Grace_allocObject();
  block1503.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1503.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1503.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1503.receiver = this;
  block1503.className = 'block<parser:989>';
  block1503.real = function(
) {
  lineNumber = 986
  lineNumber = 982
  var block1504 = Grace_allocObject();
  block1504.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1504.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1504.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1504.receiver = this;
  block1504.className = 'block<parser:982>';
  block1504.real = function(
) {
  var string1505 = new GraceString("comma");
  var call1506 = callmethod(this,"accept", [1], string1505);
  return call1506;
};
  lineNumber = 986
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
  block1507.receiver = this;
  block1507.className = 'block<parser:986>';
  block1507.real = function(
) {
  lineNumber = 984
  lineNumber = 1
  lineNumber = 983
  var call1508 = callmethod(var_values,"pop", [0]);
  var_tmp = call1508;
  lineNumber = 984
  var call1509 = callmethod(var_params,"push", [1], var_tmp);
  lineNumber = 985
  var call1510 = callmethod(this,"next", [0]);
  lineNumber = 986
  var block1511 = Grace_allocObject();
  block1511.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1511.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1511.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1511.receiver = this;
  block1511.className = 'block<parser:986>';
  block1511.real = function(
) {
  var call1512 = callmethod(this,"expression", [0]);
  return call1512;
};
  lineNumber = 987
  var call1513 = callmethod(this,"expectConsume", [1], block1511);
  return call1513;
};
  var call1514 = callmethod(Grace_prelude,"while()do", [1, 1], block1504, block1507);
  lineNumber = 989
  lineNumber = 1
  lineNumber = 988
  var call1515 = callmethod(var_values,"pop", [0]);
  var_tmp = call1515;
  lineNumber = 989
  var call1516 = callmethod(var_params,"push", [1], var_tmp);
  return call1516;
};
  lineNumber = 991
  var call1517 = callmethod(this,"ifConsume()then", [1, 1], block1501, block1503);
  var string1518 = new GraceString("rsquare");
  lineNumber = 992
  var call1519 = callmethod(this,"expect", [1], string1518);
  lineNumber = 993
  lineNumber = 1
  lineNumber = 992
  var call1520 = callmethod(var_ast,"arrayNode", [0]);
  var call1521 = callmethod(call1520,"new", [1], var_params);
  var var_o = call1521;
  lineNumber = 993
  var call1522 = callmethod(var_values,"push", [1], var_o);
  lineNumber = 994
  var call1523 = callmethod(this,"next", [0]);
  var if1496 = call1523;
}
  return if1496
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["doarray"] = func1495;
  lineNumber = 1007
var func1524 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1000
  var string1526 = new GraceString("keyword");
  lineNumber = 1009
  var call1527 = callmethod(this,"accept", [1], string1526);
  lineNumber = 1000
  lineNumber = 1
  lineNumber = 1000
  var call1528 = callmethod(var_sym,"value", [0]);
  var string1529 = new GraceString("inherits");
  var opresult1531 = callmethod(call1528, "==", [1], string1529);
  var opresult1533 = callmethod(call1527, "&", [1], opresult1531);
  if (Grace_isTrue(opresult1533)) {
  lineNumber = 1001
  var call1534 = callmethod(this,"checkIndent", [0]);
  lineNumber = 1002
  var call1535 = callmethod(this,"next", [0]);
  lineNumber = 1004
  var block1536 = Grace_allocObject();
  block1536.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1536.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1536.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1536.receiver = this;
  block1536.className = 'block<parser:1004>';
  block1536.real = function(
) {
  var call1537 = callmethod(this,"expression", [0]);
  return call1537;
};
  lineNumber = 1006
  var call1538 = callmethod(this,"expectConsume", [1], block1536);
  lineNumber = 1007
  lineNumber = 1
  lineNumber = 1006
  var call1539 = callmethod(var_values,"pop", [0]);
  var var_tmp = call1539;
  lineNumber = 1007
  lineNumber = 1
  lineNumber = 1007
  var call1540 = callmethod(var_ast,"inheritsNode", [0]);
  var call1541 = callmethod(call1540,"new", [1], var_tmp);
  var call1542 = callmethod(var_values,"push", [1], call1541);
  var if1525 = call1542;
}
  return if1525
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["inheritsdec"] = func1524;
  lineNumber = 1084
var func1543 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1014
  var string1545 = new GraceString("keyword");
  lineNumber = 1085
  var call1546 = callmethod(this,"accept", [1], string1545);
  lineNumber = 1014
  lineNumber = 1
  lineNumber = 1014
  var call1547 = callmethod(var_sym,"value", [0]);
  var string1548 = new GraceString("object");
  var opresult1550 = callmethod(call1547, "==", [1], string1548);
  var opresult1552 = callmethod(call1546, "&", [1], opresult1550);
  if (Grace_isTrue(opresult1552)) {
  lineNumber = 1016
  lineNumber = 1015
  var var_localMinIndentLevel = var_minIndentLevel;
  lineNumber = 1016
  var call1553 = callmethod(this,"next", [0]);
  lineNumber = 1018
  lineNumber = 1017
  var bool1554 = new GraceBoolean(false)
  var var_superclass = bool1554;
  lineNumber = 1041
  lineNumber = 1018
  var string1556 = new GraceString("identifier");
  lineNumber = 1043
  var call1557 = callmethod(this,"accept", [1], string1556);
  lineNumber = 1018
  lineNumber = 1
  lineNumber = 1018
  var call1558 = callmethod(var_sym,"value", [0]);
  var string1559 = new GraceString("extends");
  var opresult1561 = callmethod(call1558, "==", [1], string1559);
  var opresult1563 = callmethod(call1557, "&", [1], opresult1561);
  if (Grace_isTrue(opresult1563)) {
  lineNumber = 1019
  var call1564 = callmethod(this,"next", [0]);
  lineNumber = 1020
  var string1565 = new GraceString("identifier");
  lineNumber = 1021
  var call1566 = callmethod(this,"expect", [1], string1565);
  var call1567 = callmethod(this,"identifier", [0]);
  lineNumber = 1023
  lineNumber = 1
  lineNumber = 1022
  var call1568 = callmethod(var_values,"pop", [0]);
  var var_nm = call1568;
  lineNumber = 1024
  lineNumber = 1023
  lineNumber = 1
  lineNumber = 1023
  var string1570 = new GraceString("dot");
  lineNumber = 1026
  var call1571 = callmethod(this,"accept", [1], string1570);
  var call1572 = callmethod(call1571,"not", [0]);
  if (Grace_isTrue(call1572)) {
  lineNumber = 1024
  var string1573 = new GraceString("extends must have .new invocation on right");
  var call1574 = callmethod(var_util,"syntax_error", [1], string1573);
  var if1569 = call1574;
}
  lineNumber = 1026
  var call1575 = callmethod(this,"next", [0]);
  lineNumber = 1027
  var string1576 = new GraceString("identifier");
  lineNumber = 1028
  var call1577 = callmethod(this,"expect", [1], string1576);
  var call1578 = callmethod(this,"identifier", [0]);
  lineNumber = 1030
  lineNumber = 1
  lineNumber = 1029
  var call1579 = callmethod(var_values,"pop", [0]);
  var var_mn = call1579;
  lineNumber = 1031
  var array1580 = new GraceList([
]);

  var var_scargs = array1580;
  lineNumber = 1038
  lineNumber = 1031
  var string1582 = new GraceString("(");
  lineNumber = 1040
  var call1583 = callmethod(this,"accept", [1], string1582);
  if (Grace_isTrue(call1583)) {
  lineNumber = 1032
  var call1584 = callmethod(this,"next", [0]);
  lineNumber = 1036
  lineNumber = 1033
  var block1585 = Grace_allocObject();
  block1585.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1585.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1585.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1585.receiver = this;
  block1585.className = 'block<parser:1033>';
  block1585.real = function(
) {
  lineNumber = 1
  lineNumber = 1033
  var string1586 = new GraceString(")");
  var call1587 = callmethod(this,"accept", [1], string1586);
  var call1588 = callmethod(call1587,"not", [0]);
  return call1588;
};
  lineNumber = 1036
  var block1589 = Grace_allocObject();
  block1589.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1589.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1589.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1589.receiver = this;
  block1589.className = 'block<parser:1036>';
  block1589.real = function(
) {
  lineNumber = 1034
  var block1590 = Grace_allocObject();
  block1590.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1590.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1590.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1590.receiver = this;
  block1590.className = 'block<parser:1034>';
  block1590.real = function(
) {
  var call1591 = callmethod(this,"expression", [0]);
  return call1591;
};
  lineNumber = 1035
  var call1592 = callmethod(this,"expectConsume", [1], block1590);
  lineNumber = 1036
  lineNumber = 1
  lineNumber = 1035
  var call1593 = callmethod(var_values,"pop", [0]);
  var var_tmp = call1593;
  lineNumber = 1036
  var call1594 = callmethod(var_scargs,"push", [1], var_tmp);
  return call1594;
};
  var call1595 = callmethod(Grace_prelude,"while()do", [1, 1], block1585, block1589);
  lineNumber = 1038
  var call1596 = callmethod(this,"next", [0]);
  var if1581 = call1596;
}
  lineNumber = 1041
  lineNumber = 1040
  lineNumber = 1
  lineNumber = 1040
  var call1597 = callmethod(var_mn,"value", [0]);
  lineNumber = 1
  lineNumber = 1040
  var call1598 = callmethod(var_ast,"memberNode", [0]);
  var call1599 = callmethod(call1598,"new", [2], call1597, var_nm);
  lineNumber = 1041
  lineNumber = 1
  lineNumber = 1041
  var call1601 = callmethod(var_mn,"value", [0]);
  lineNumber = 1
  lineNumber = 1041
  var call1602 = callmethod(var_ast,"callWithPart", [0]);
  var call1603 = callmethod(call1602,"new", [2], call1601, var_scargs);
  var array1600 = new GraceList([
call1603,
]);

  lineNumber = 1042
  lineNumber = 1
  lineNumber = 1040
  var call1604 = callmethod(var_ast,"callNode", [0]);
  var call1605 = callmethod(call1604,"new", [2], call1599, array1600);
  var_superclass = call1605;
  var if1555 = call1605;
}
  lineNumber = 1043
  var string1606 = new GraceString("lbrace");
  lineNumber = 1044
  var call1607 = callmethod(this,"expect", [1], string1606);
  lineNumber = 1047
  var obj1608 = Grace_allocObject();
  obj1608.outer = this;
    var reader_parser_outer1609 = function() {
    return this.outer;
  }
  obj1608.methods["outer"] = reader_parser_outer1609;
function obj_init_1608() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1045
  var string1610 = new GraceString("lbrace");
  obj1608.data["kind"] = string1610;
    var reader_parser_kind1611 = function() {
    return this.data["kind"];
  }
  obj1608.methods["kind"] = reader_parser_kind1611;
  obj1608.data["kind"] = string1610;
  var writer_parser_kind1611 = function(argcv, o) {
    this.data["kind"] = o;
  }
  obj1608.methods["kind:="] = writer_parser_kind1611;
obj1608.mutable = true;
  lineNumber = 1046
  var string1612 = new GraceString("");
  obj1608.data["register"] = string1612;
    var reader_parser_register1613 = function() {
    return this.data["register"];
  }
  obj1608.methods["register"] = reader_parser_register1613;
  obj1608.data["register"] = string1612;
  var writer_parser_register1613 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj1608.methods["register:="] = writer_parser_register1613;
obj1608.mutable = true;
  superDepth = origSuperDepth;
}
obj_init_1608.apply(obj1608, []);
  lineNumber = 1044
  var call1614 = callmethod(var_values,"push", [1], obj1608);
  lineNumber = 1048
  var call1615 = callmethod(this,"next", [0]);
  lineNumber = 1053
  lineNumber = 1054
  lineNumber = 1
  lineNumber = 1049
  var call1617 = callmethod(var_sym,"line", [0]);
  lineNumber = 1054
  lineNumber = 1
  lineNumber = 1049
  var call1618 = callmethod(var_statementToken,"line", [0]);
  var opresult1620 = callmethod(call1617, "==", [1], call1618);
  if (Grace_isTrue(opresult1620)) {
  lineNumber = 1051
  lineNumber = 1
  lineNumber = 1050
  var call1621 = callmethod(var_sym,"linePos", [0]);
  var diff1623 = callmethod(call1621, "-", [1], new GraceNum(1));
  var_minIndentLevel = diff1623;
  var if1616 = diff1623;
  } else {
  lineNumber = 1053
  lineNumber = 1
  lineNumber = 1052
  var call1624 = callmethod(var_statementToken,"indent", [0]);
  var opresult1626 = callmethod(call1624, "+", [1], new GraceNum(1));
  var_minIndentLevel = opresult1626;
  var if1616 = opresult1626;
}
  lineNumber = 1055
  lineNumber = 1
  lineNumber = 1054
  var call1627 = callmethod(var_values,"size", [0]);
  var var_sz = call1627;
  lineNumber = 1067
  lineNumber = 1055
  var block1628 = Grace_allocObject();
  block1628.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1628.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1628.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1628.receiver = this;
  block1628.className = 'block<parser:1055>';
  block1628.real = function(
) {
  lineNumber = 1
  lineNumber = 1055
  var string1629 = new GraceString("rbrace");
  var call1630 = callmethod(this,"accept", [1], string1629);
  var call1631 = callmethod(call1630,"not", [0]);
  return call1631;
};
  lineNumber = 1067
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
  block1632.receiver = this;
  block1632.className = 'block<parser:1067>';
  block1632.real = function(
) {
  lineNumber = 1059
  var call1633 = callmethod(this,"methoddec", [0]);
  lineNumber = 1060
  var call1634 = callmethod(this,"inheritsdec", [0]);
  lineNumber = 1061
  var call1635 = callmethod(this,"statement", [0]);
  lineNumber = 1064
  lineNumber = 1066
  lineNumber = 1
  lineNumber = 1062
  var call1637 = callmethod(var_values,"size", [0]);
  var opresult1639 = callmethod(call1637, "==", [1], var_sz);
  if (Grace_isTrue(opresult1639)) {
  lineNumber = 1064
  lineNumber = 1063
  var string1640 = new GraceString("did not consume anything in ");
  lineNumber = 1064
  var string1641 = new GraceString("object declaration.");
  var opresult1643 = callmethod(string1640, "++", [1], string1641);
  lineNumber = 1063
  var call1644 = callmethod(var_util,"syntax_error", [1], opresult1643);
  var if1636 = call1644;
}
  lineNumber = 1067
  lineNumber = 1
  lineNumber = 1066
  var call1645 = callmethod(var_values,"size", [0]);
  var_sz = call1645;
  return call1645;
};
  var call1646 = callmethod(Grace_prelude,"while()do", [1, 1], block1628, block1632);
  lineNumber = 1068
  var call1647 = callmethod(this,"next", [0]);
  lineNumber = 1070
  var array1648 = new GraceList([
]);

  var var_rbody = array1648;
  lineNumber = 1071
  lineNumber = 1
  lineNumber = 1070
  var call1649 = callmethod(var_values,"pop", [0]);
  var var_n = call1649;
  lineNumber = 1074
  lineNumber = 1071
  var block1650 = Grace_allocObject();
  block1650.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1650.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1650.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1650.receiver = this;
  block1650.className = 'block<parser:1071>';
  block1650.real = function(
) {
  lineNumber = 1
  lineNumber = 1071
  var call1651 = callmethod(var_n,"kind", [0]);
  var string1652 = new GraceString("lbrace");
  var opresult1654 = callmethod(call1651, "/=", [1], string1652);
  return opresult1654;
};
  lineNumber = 1074
  var block1655 = Grace_allocObject();
  block1655.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1655.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1655.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1655.receiver = this;
  block1655.className = 'block<parser:1074>';
  block1655.real = function(
) {
  lineNumber = 1072
  var call1656 = callmethod(var_rbody,"push", [1], var_n);
  lineNumber = 1074
  lineNumber = 1
  lineNumber = 1073
  var call1657 = callmethod(var_values,"pop", [0]);
  var_n = call1657;
  return call1657;
};
  var call1658 = callmethod(Grace_prelude,"while()do", [1, 1], block1650, block1655);
  lineNumber = 1076
  var array1659 = new GraceList([
]);

  var var_body = array1659;
  lineNumber = 1079
  lineNumber = 1076
  lineNumber = 1
  lineNumber = 1076
  var call1660 = callmethod(var_rbody,"indices", [0]);
  lineNumber = 1079
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
  block1661.className = 'block<parser:1079>';
  block1661.real = function(
var_x
) {
  lineNumber = 1
  lineNumber = 1078
  var call1662 = callmethod(var_rbody,"pop", [0]);
  var var_p = call1662;
  lineNumber = 1079
  var call1663 = callmethod(var_body,"push", [1], var_p);
  return call1663;
};
  var call1664 = callmethod(Grace_prelude,"for()do", [1, 1], call1660, block1661);
  lineNumber = 1081
  lineNumber = 1082
  lineNumber = 1
  lineNumber = 1081
  var call1665 = callmethod(var_ast,"objectNode", [0]);
  var call1666 = callmethod(call1665,"new", [2], var_body, var_superclass);
  var var_o = call1666;
  lineNumber = 1082
  var call1667 = callmethod(var_values,"push", [1], var_o);
  lineNumber = 1084
  lineNumber = 1083
  var_minIndentLevel = var_localMinIndentLevel;
  var if1544 = var_localMinIndentLevel;
}
  return if1544
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["doobject"] = func1543;
  lineNumber = 1132
var func1668 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1094
  var string1670 = new GraceString("keyword");
  lineNumber = 1133
  var call1671 = callmethod(this,"accept", [1], string1670);
  lineNumber = 1094
  lineNumber = 1
  lineNumber = 1094
  var call1672 = callmethod(var_sym,"value", [0]);
  var string1673 = new GraceString("class");
  var opresult1675 = callmethod(call1672, "==", [1], string1673);
  var opresult1677 = callmethod(call1671, "&", [1], opresult1675);
  if (Grace_isTrue(opresult1677)) {
  lineNumber = 1095
  var call1678 = callmethod(this,"next", [0]);
  lineNumber = 1097
  lineNumber = 1096
  var var_localMinIndentLevel = var_minIndentLevel;
  lineNumber = 1097
  var string1679 = new GraceString("identifier");
  lineNumber = 1098
  var call1680 = callmethod(this,"expect", [1], string1679);
  var call1681 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 1101
  lineNumber = 1099
  var string1683 = new GraceString("dot");
  lineNumber = 1102
  var call1684 = callmethod(this,"accept", [1], string1683);
  var call1685 = callmethod(call1684,"prefix!", [0]);
  if (Grace_isTrue(call1685)) {
  lineNumber = 1101
  var call1686 = callmethod(this,"doclassOld", [0]);
  return call1686
  var if1682 = undefined;
}
  lineNumber = 1103
  lineNumber = 1
  lineNumber = 1102
  var call1687 = callmethod(var_values,"pop", [0]);
  var var_cname = call1687;
  lineNumber = 1103
  var call1688 = callmethod(this,"next", [0]);
  lineNumber = 1104
  var bool1689 = new GraceBoolean(false)
  lineNumber = 1105
  var call1690 = callmethod(this,"methodsignature", [1], bool1689);
  var var_s = call1690;
  lineNumber = 1106
  lineNumber = 1
  lineNumber = 1105
  var call1691 = callmethod(var_s,"sig", [0]);
  var var_csig = call1691;
  lineNumber = 1107
  lineNumber = 1
  lineNumber = 1106
  var call1692 = callmethod(var_s,"m", [0]);
  var var_constructorName = call1692;
  lineNumber = 1108
  lineNumber = 1107
  var string1694 = new GraceString("lbrace");
  lineNumber = 1110
  var call1695 = callmethod(this,"accept", [1], string1694);
  var call1696 = callmethod(call1695,"prefix!", [0]);
  if (Grace_isTrue(call1696)) {
  lineNumber = 1108
  var string1697 = new GraceString("class declaration without body");
  var call1698 = callmethod(var_util,"syntax_error", [1], string1697);
  var if1693 = call1698;
}
  lineNumber = 1110
  var call1699 = callmethod(this,"next", [0]);
  lineNumber = 1115
  lineNumber = 1116
  lineNumber = 1
  lineNumber = 1111
  var call1701 = callmethod(var_sym,"line", [0]);
  lineNumber = 1116
  lineNumber = 1
  lineNumber = 1111
  var call1702 = callmethod(var_statementToken,"line", [0]);
  var opresult1704 = callmethod(call1701, "==", [1], call1702);
  if (Grace_isTrue(opresult1704)) {
  lineNumber = 1113
  lineNumber = 1
  lineNumber = 1112
  var call1705 = callmethod(var_sym,"linePos", [0]);
  var diff1707 = callmethod(call1705, "-", [1], new GraceNum(1));
  var_minIndentLevel = diff1707;
  var if1700 = diff1707;
  } else {
  lineNumber = 1115
  lineNumber = 1
  lineNumber = 1114
  var call1708 = callmethod(var_statementToken,"indent", [0]);
  var opresult1710 = callmethod(call1708, "+", [1], new GraceNum(1));
  var_minIndentLevel = opresult1710;
  var if1700 = opresult1710;
}
  lineNumber = 1117
  var array1711 = new GraceList([
]);

  var var_body = array1711;
  lineNumber = 1125
  lineNumber = 1117
  var block1712 = Grace_allocObject();
  block1712.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1712.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1712.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1712.receiver = this;
  block1712.className = 'block<parser:1117>';
  block1712.real = function(
) {
  lineNumber = 1
  lineNumber = 1117
  var string1713 = new GraceString("rbrace");
  var call1714 = callmethod(this,"accept", [1], string1713);
  var call1715 = callmethod(call1714,"not", [0]);
  return call1715;
};
  lineNumber = 1125
  var block1716 = Grace_allocObject();
  block1716.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1716.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1716.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1716.receiver = this;
  block1716.className = 'block<parser:1125>';
  block1716.real = function(
) {
  lineNumber = 1119
  lineNumber = 1118
  var block1717 = Grace_allocObject();
  block1717.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1717.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1717.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1717.receiver = this;
  block1717.className = 'block<parser:1118>';
  block1717.real = function(
) {
  var call1718 = callmethod(this,"methoddec", [0]);
  return call1718;
};
  lineNumber = 1119
  var block1719 = Grace_allocObject();
  block1719.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1719.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1719.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1719.receiver = this;
  block1719.className = 'block<parser:1119>';
  block1719.real = function(
) {
  lineNumber = 1
  lineNumber = 1119
  var call1720 = callmethod(var_values,"pop", [0]);
  var call1721 = callmethod(var_body,"push", [1], call1720);
  return call1721;
};
  lineNumber = 1121
  var call1722 = callmethod(this,"ifConsume()then", [1, 1], block1717, block1719);
  lineNumber = 1122
  lineNumber = 1121
  var block1723 = Grace_allocObject();
  block1723.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1723.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1723.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1723.receiver = this;
  block1723.className = 'block<parser:1121>';
  block1723.real = function(
) {
  var call1724 = callmethod(this,"inheritsdec", [0]);
  return call1724;
};
  lineNumber = 1122
  var block1725 = Grace_allocObject();
  block1725.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1725.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1725.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1725.receiver = this;
  block1725.className = 'block<parser:1122>';
  block1725.real = function(
) {
  lineNumber = 1
  lineNumber = 1122
  var call1726 = callmethod(var_values,"pop", [0]);
  var call1727 = callmethod(var_body,"push", [1], call1726);
  return call1727;
};
  lineNumber = 1124
  var call1728 = callmethod(this,"ifConsume()then", [1, 1], block1723, block1725);
  lineNumber = 1125
  lineNumber = 1124
  var block1729 = Grace_allocObject();
  block1729.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1729.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1729.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1729.receiver = this;
  block1729.className = 'block<parser:1124>';
  block1729.real = function(
) {
  var call1730 = callmethod(this,"statement", [0]);
  return call1730;
};
  lineNumber = 1125
  var block1731 = Grace_allocObject();
  block1731.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1731.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1731.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1731.receiver = this;
  block1731.className = 'block<parser:1125>';
  block1731.real = function(
) {
  lineNumber = 1
  lineNumber = 1125
  var call1732 = callmethod(var_values,"pop", [0]);
  var call1733 = callmethod(var_body,"push", [1], call1732);
  return call1733;
};
  lineNumber = 1127
  var call1734 = callmethod(this,"ifConsume()then", [1, 1], block1729, block1731);
  return call1734;
};
  var call1735 = callmethod(Grace_prelude,"while()do", [1, 1], block1712, block1716);
  lineNumber = 1128
  var call1736 = callmethod(this,"next", [0]);
  lineNumber = 1129
  var bool1737 = new GraceBoolean(false)
  lineNumber = 1130
  lineNumber = 1
  lineNumber = 1129
  var call1738 = callmethod(var_ast,"classNode", [0]);
  var call1739 = callmethod(call1738,"new", [5], var_cname, var_csig, var_body, bool1737, var_constructorName);
  var var_o = call1739;
  lineNumber = 1130
  var call1740 = callmethod(var_values,"push", [1], var_o);
  lineNumber = 1132
  lineNumber = 1131
  var_minIndentLevel = var_localMinIndentLevel;
  var if1669 = var_localMinIndentLevel;
}
  return if1669
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["doclass"] = func1668;
  lineNumber = 1241
var func1741 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1136
  var bool1743 = new GraceBoolean(true)
  if (Grace_isTrue(bool1743)) {
  lineNumber = 1138
  lineNumber = 1137
  var var_localMinIndentLevel = var_minIndentLevel;
  lineNumber = 1138
  var call1744 = callmethod(this,"generic", [0]);
  lineNumber = 1140
  lineNumber = 1139
  var bool1745 = new GraceBoolean(false)
  var var_superclass = bool1745;
  lineNumber = 1164
  lineNumber = 1140
  var string1747 = new GraceString("identifier");
  lineNumber = 1166
  var call1748 = callmethod(this,"accept", [1], string1747);
  lineNumber = 1140
  lineNumber = 1
  lineNumber = 1140
  var call1749 = callmethod(var_sym,"value", [0]);
  var string1750 = new GraceString("extends");
  var opresult1752 = callmethod(call1749, "==", [1], string1750);
  var opresult1754 = callmethod(call1748, "&", [1], opresult1752);
  if (Grace_isTrue(opresult1754)) {
  lineNumber = 1141
  var call1755 = callmethod(this,"next", [0]);
  lineNumber = 1142
  var string1756 = new GraceString("identifier");
  lineNumber = 1143
  var call1757 = callmethod(this,"expect", [1], string1756);
  var call1758 = callmethod(this,"identifier", [0]);
  lineNumber = 1144
  var call1759 = callmethod(this,"generic", [0]);
  lineNumber = 1146
  lineNumber = 1
  lineNumber = 1145
  var call1760 = callmethod(var_values,"pop", [0]);
  var var_nm = call1760;
  lineNumber = 1147
  lineNumber = 1146
  lineNumber = 1
  lineNumber = 1146
  var string1762 = new GraceString("dot");
  lineNumber = 1149
  var call1763 = callmethod(this,"accept", [1], string1762);
  var call1764 = callmethod(call1763,"not", [0]);
  if (Grace_isTrue(call1764)) {
  lineNumber = 1147
  var string1765 = new GraceString("extends must have .new invocation on right");
  var call1766 = callmethod(var_util,"syntax_error", [1], string1765);
  var if1761 = call1766;
}
  lineNumber = 1149
  var call1767 = callmethod(this,"next", [0]);
  lineNumber = 1150
  var string1768 = new GraceString("identifier");
  lineNumber = 1151
  var call1769 = callmethod(this,"expect", [1], string1768);
  var call1770 = callmethod(this,"identifier", [0]);
  lineNumber = 1153
  lineNumber = 1
  lineNumber = 1152
  var call1771 = callmethod(var_values,"pop", [0]);
  var var_mn = call1771;
  lineNumber = 1154
  var array1772 = new GraceList([
]);

  var var_scargs = array1772;
  lineNumber = 1161
  lineNumber = 1154
  var string1774 = new GraceString("lparen");
  lineNumber = 1163
  var call1775 = callmethod(this,"accept", [1], string1774);
  if (Grace_isTrue(call1775)) {
  lineNumber = 1155
  var call1776 = callmethod(this,"next", [0]);
  lineNumber = 1159
  lineNumber = 1156
  var block1777 = Grace_allocObject();
  block1777.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1777.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1777.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1777.receiver = this;
  block1777.className = 'block<parser:1156>';
  block1777.real = function(
) {
  lineNumber = 1
  lineNumber = 1156
  var string1778 = new GraceString("rparen");
  var call1779 = callmethod(this,"accept", [1], string1778);
  var call1780 = callmethod(call1779,"not", [0]);
  return call1780;
};
  lineNumber = 1159
  var block1781 = Grace_allocObject();
  block1781.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1781.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1781.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1781.receiver = this;
  block1781.className = 'block<parser:1159>';
  block1781.real = function(
) {
  lineNumber = 1157
  var block1782 = Grace_allocObject();
  block1782.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1782.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1782.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1782.receiver = this;
  block1782.className = 'block<parser:1157>';
  block1782.real = function(
) {
  var call1783 = callmethod(this,"expression", [0]);
  return call1783;
};
  lineNumber = 1158
  var call1784 = callmethod(this,"expectConsume", [1], block1782);
  lineNumber = 1159
  lineNumber = 1
  lineNumber = 1158
  var call1785 = callmethod(var_values,"pop", [0]);
  var var_tmp = call1785;
  lineNumber = 1159
  var call1786 = callmethod(var_scargs,"push", [1], var_tmp);
  return call1786;
};
  var call1787 = callmethod(Grace_prelude,"while()do", [1, 1], block1777, block1781);
  lineNumber = 1161
  var call1788 = callmethod(this,"next", [0]);
  var if1773 = call1788;
}
  lineNumber = 1164
  lineNumber = 1163
  lineNumber = 1
  lineNumber = 1163
  var call1789 = callmethod(var_mn,"value", [0]);
  lineNumber = 1
  lineNumber = 1163
  var call1790 = callmethod(var_ast,"memberNode", [0]);
  var call1791 = callmethod(call1790,"new", [2], call1789, var_nm);
  lineNumber = 1164
  lineNumber = 1
  lineNumber = 1164
  var call1793 = callmethod(var_mn,"value", [0]);
  lineNumber = 1
  lineNumber = 1164
  var call1794 = callmethod(var_ast,"callWithPart", [0]);
  var call1795 = callmethod(call1794,"new", [2], call1793, var_scargs);
  var array1792 = new GraceList([
call1795,
]);

  lineNumber = 1165
  lineNumber = 1
  lineNumber = 1163
  var call1796 = callmethod(var_ast,"callNode", [0]);
  var call1797 = callmethod(call1796,"new", [2], call1791, array1792);
  var_superclass = call1797;
  var if1746 = call1797;
}
  lineNumber = 1167
  lineNumber = 1
  lineNumber = 1166
  var call1798 = callmethod(var_values,"pop", [0]);
  var var_cname = call1798;
  lineNumber = 1169
  lineNumber = 1171
  lineNumber = 1
  lineNumber = 1167
  var call1800 = callmethod(var_cname,"kind", [0]);
  var string1801 = new GraceString("generic");
  var opresult1803 = callmethod(call1800, "!=", [1], string1801);
  if (Grace_isTrue(opresult1803)) {
  lineNumber = 1169
  lineNumber = 1168
  var string1804 = new GraceString("old class syntax: should be 'class ");
  lineNumber = 1169
  lineNumber = 1
  lineNumber = 1168
  var call1805 = callmethod(var_cname,"value", [0]);
  var opresult1807 = callmethod(string1804, "++", [1], call1805);
  var string1808 = new GraceString(".new'");
  var opresult1810 = callmethod(opresult1807, "++", [1], string1808);
  lineNumber = 1169
  var string1811 = new GraceString(" or other factory method name");
  var opresult1813 = callmethod(opresult1810, "++", [1], string1811);
  lineNumber = 1168
  var call1814 = callmethod(var_util,"warning", [1], opresult1813);
  var if1799 = call1814;
}
  lineNumber = 1238
  lineNumber = 1171
  var string1816 = new GraceString("lbrace");
  lineNumber = 1240
  var call1817 = callmethod(this,"accept", [1], string1816);
  if (Grace_isTrue(call1817)) {
  lineNumber = 1175
  var obj1818 = Grace_allocObject();
  obj1818.outer = this;
    var reader_parser_outer1819 = function() {
    return this.outer;
  }
  obj1818.methods["outer"] = reader_parser_outer1819;
function obj_init_1818() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1173
  var string1820 = new GraceString("lbrace");
  obj1818.data["kind"] = string1820;
    var reader_parser_kind1821 = function() {
    return this.data["kind"];
  }
  obj1818.methods["kind"] = reader_parser_kind1821;
  obj1818.data["kind"] = string1820;
  var writer_parser_kind1821 = function(argcv, o) {
    this.data["kind"] = o;
  }
  obj1818.methods["kind:="] = writer_parser_kind1821;
obj1818.mutable = true;
  lineNumber = 1174
  var string1822 = new GraceString("");
  obj1818.data["register"] = string1822;
    var reader_parser_register1823 = function() {
    return this.data["register"];
  }
  obj1818.methods["register"] = reader_parser_register1823;
  obj1818.data["register"] = string1822;
  var writer_parser_register1823 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj1818.methods["register:="] = writer_parser_register1823;
obj1818.mutable = true;
  superDepth = origSuperDepth;
}
obj_init_1818.apply(obj1818, []);
  lineNumber = 1172
  var call1824 = callmethod(var_values,"push", [1], obj1818);
  lineNumber = 1176
  var call1825 = callmethod(this,"next", [0]);
  lineNumber = 1178
  var array1826 = new GraceList([
]);

  var var_params = array1826;
  lineNumber = 1206
  lineNumber = 1178
  var string1828 = new GraceString("identifier");
  lineNumber = 1209
  var call1829 = callmethod(this,"accept", [1], string1828);
  if (Grace_isTrue(call1829)) {
  lineNumber = 1181
  var call1830 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 1183
  lineNumber = 1
  lineNumber = 1182
  var call1831 = callmethod(var_values,"pop", [0]);
  var var_pid = call1831;
  lineNumber = 1188
  lineNumber = 1183
  var string1833 = new GraceString("colon");
  lineNumber = 1189
  var call1834 = callmethod(this,"accept", [1], string1833);
  if (Grace_isTrue(call1834)) {
  lineNumber = 1184
  var call1835 = callmethod(this,"next", [0]);
  lineNumber = 1185
  var call1836 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 1186
  var call1837 = callmethod(this,"generic", [0]);
  lineNumber = 1188
  lineNumber = 1
  lineNumber = 1188
  lineNumber = 1
  lineNumber = 1187
  var call1838 = callmethod(var_values,"pop", [0]);
  var call1839 = callmethod(var_pid,"dtype:=", [1], call1838);
  var if1832 = call1839;
}
  lineNumber = 1189
  var call1840 = callmethod(var_params,"push", [1], var_pid);
  lineNumber = 1201
  lineNumber = 1190
  var block1841 = Grace_allocObject();
  block1841.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1841.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1841.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1841.receiver = this;
  block1841.className = 'block<parser:1190>';
  block1841.real = function(
) {
  var string1842 = new GraceString("comma");
  var call1843 = callmethod(this,"accept", [1], string1842);
  return call1843;
};
  lineNumber = 1201
  var block1844 = Grace_allocObject();
  block1844.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1844.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1844.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1844.receiver = this;
  block1844.className = 'block<parser:1201>';
  block1844.real = function(
) {
  lineNumber = 1191
  var call1845 = callmethod(this,"next", [0]);
  lineNumber = 1192
  var call1846 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 1193
  var call1847 = callmethod(this,"generic", [0]);
  lineNumber = 1195
  lineNumber = 1
  lineNumber = 1194
  var call1848 = callmethod(var_values,"pop", [0]);
  var_pid = call1848;
  lineNumber = 1200
  lineNumber = 1195
  var string1850 = new GraceString("colon");
  lineNumber = 1201
  var call1851 = callmethod(this,"accept", [1], string1850);
  if (Grace_isTrue(call1851)) {
  lineNumber = 1196
  var call1852 = callmethod(this,"next", [0]);
  lineNumber = 1197
  var call1853 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 1198
  var call1854 = callmethod(this,"generic", [0]);
  lineNumber = 1200
  lineNumber = 1
  lineNumber = 1200
  lineNumber = 1
  lineNumber = 1199
  var call1855 = callmethod(var_values,"pop", [0]);
  var call1856 = callmethod(var_pid,"dtype:=", [1], call1855);
  var if1849 = call1856;
}
  lineNumber = 1201
  var call1857 = callmethod(var_params,"push", [1], var_pid);
  return call1857;
};
  var call1858 = callmethod(Grace_prelude,"while()do", [1, 1], block1841, block1844);
  lineNumber = 1206
  lineNumber = 1203
  var string1860 = new GraceString("arrow");
  lineNumber = 1208
  var call1861 = callmethod(this,"accept", [1], string1860);
  if (Grace_isTrue(call1861)) {
  lineNumber = 1204
  var call1862 = callmethod(this,"next", [0]);
  var if1859 = call1862;
  } else {
  lineNumber = 1206
  var string1863 = new GraceString("expected ->.");
  var call1864 = callmethod(var_util,"syntax_error", [1], string1863);
  var if1859 = call1864;
}
  var if1827 = if1859;
}
  lineNumber = 1210
  lineNumber = 1
  lineNumber = 1209
  var call1865 = callmethod(var_values,"size", [0]);
  var var_sz = call1865;
  lineNumber = 1221
  lineNumber = 1210
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
  block1866.receiver = this;
  block1866.className = 'block<parser:1210>';
  block1866.real = function(
) {
  lineNumber = 1
  lineNumber = 1210
  var string1867 = new GraceString("rbrace");
  var call1868 = callmethod(this,"accept", [1], string1867);
  var call1869 = callmethod(call1868,"not", [0]);
  return call1869;
};
  lineNumber = 1221
  var block1870 = Grace_allocObject();
  block1870.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1870.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1870.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1870.receiver = this;
  block1870.className = 'block<parser:1221>';
  block1870.real = function(
) {
  lineNumber = 1212
  var call1871 = callmethod(this,"vardec", [0]);
  lineNumber = 1213
  var call1872 = callmethod(this,"methoddec", [0]);
  lineNumber = 1214
  var call1873 = callmethod(this,"defdec", [0]);
  lineNumber = 1215
  var call1874 = callmethod(this,"inheritsdec", [0]);
  lineNumber = 1218
  lineNumber = 1220
  lineNumber = 1
  lineNumber = 1216
  var call1876 = callmethod(var_values,"size", [0]);
  var opresult1878 = callmethod(call1876, "==", [1], var_sz);
  if (Grace_isTrue(opresult1878)) {
  lineNumber = 1218
  lineNumber = 1217
  var string1879 = new GraceString("did not consume anything in ");
  lineNumber = 1218
  var string1880 = new GraceString("class declaration.");
  var opresult1882 = callmethod(string1879, "++", [1], string1880);
  lineNumber = 1217
  var call1883 = callmethod(var_util,"syntax_error", [1], opresult1882);
  var if1875 = call1883;
}
  lineNumber = 1221
  lineNumber = 1
  lineNumber = 1220
  var call1884 = callmethod(var_values,"size", [0]);
  var_sz = call1884;
  return call1884;
};
  var call1885 = callmethod(Grace_prelude,"while()do", [1, 1], block1866, block1870);
  lineNumber = 1222
  var call1886 = callmethod(this,"next", [0]);
  lineNumber = 1224
  var array1887 = new GraceList([
]);

  var var_rbody = array1887;
  lineNumber = 1225
  lineNumber = 1
  lineNumber = 1224
  var call1888 = callmethod(var_values,"pop", [0]);
  var var_n = call1888;
  lineNumber = 1228
  lineNumber = 1225
  var block1889 = Grace_allocObject();
  block1889.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1889.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1889.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1889.receiver = this;
  block1889.className = 'block<parser:1225>';
  block1889.real = function(
) {
  lineNumber = 1
  lineNumber = 1225
  var call1890 = callmethod(var_n,"kind", [0]);
  var string1891 = new GraceString("lbrace");
  var opresult1893 = callmethod(call1890, "/=", [1], string1891);
  return opresult1893;
};
  lineNumber = 1228
  var block1894 = Grace_allocObject();
  block1894.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1894.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1894.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1894.receiver = this;
  block1894.className = 'block<parser:1228>';
  block1894.real = function(
) {
  lineNumber = 1226
  var call1895 = callmethod(var_rbody,"push", [1], var_n);
  lineNumber = 1228
  lineNumber = 1
  lineNumber = 1227
  var call1896 = callmethod(var_values,"pop", [0]);
  var_n = call1896;
  return call1896;
};
  var call1897 = callmethod(Grace_prelude,"while()do", [1, 1], block1889, block1894);
  lineNumber = 1230
  var array1898 = new GraceList([
]);

  var var_body = array1898;
  lineNumber = 1232
  lineNumber = 1230
  lineNumber = 1
  lineNumber = 1230
  var call1899 = callmethod(var_rbody,"indices", [0]);
  lineNumber = 1232
  var block1900 = Grace_allocObject();
  block1900.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1900.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1900.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1900.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1900.receiver = this;
  block1900.className = 'block<parser:1232>';
  block1900.real = function(
var_x
) {
  lineNumber = 1
  lineNumber = 1231
  var call1901 = callmethod(var_rbody,"pop", [0]);
  var var_p = call1901;
  lineNumber = 1232
  var call1902 = callmethod(var_body,"push", [1], var_p);
  return call1902;
};
  var call1903 = callmethod(Grace_prelude,"for()do", [1, 1], call1899, block1900);
  lineNumber = 1235
  lineNumber = 1234
  var string1905 = new GraceString("new");
  lineNumber = 1
  lineNumber = 1234
  var call1906 = callmethod(var_ast,"signaturePart", [0]);
  var call1907 = callmethod(call1906,"new", [2], string1905, var_params);
  var array1904 = new GraceList([
call1907,
]);

  lineNumber = 1235
  var string1908 = new GraceString("new");
  var bool1909 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 1235
  var call1910 = callmethod(var_ast,"identifierNode", [0]);
  var call1911 = callmethod(call1910,"new", [2], string1908, bool1909);
  lineNumber = 1236
  lineNumber = 1
  lineNumber = 1234
  var call1912 = callmethod(var_ast,"classNode", [0]);
  var call1913 = callmethod(call1912,"new", [5], var_cname, array1904, var_body, var_superclass, call1911);
  var var_o = call1913;
  lineNumber = 1236
  var call1914 = callmethod(var_values,"push", [1], var_o);
  var if1815 = call1914;
  } else {
  lineNumber = 1238
  var string1915 = new GraceString("class definition without body");
  var call1916 = callmethod(var_util,"syntax_error", [1], string1915);
  var if1815 = call1916;
}
  lineNumber = 1241
  lineNumber = 1240
  var_minIndentLevel = var_localMinIndentLevel;
  var if1742 = var_localMinIndentLevel;
}
  return if1742
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["doclassOld"] = func1741;
  lineNumber = 1294
var func1917 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1246
  var string1919 = new GraceString("keyword");
  lineNumber = 1296
  var call1920 = callmethod(this,"accept", [1], string1919);
  lineNumber = 1246
  lineNumber = 1
  lineNumber = 1246
  var call1921 = callmethod(var_sym,"value", [0]);
  var string1922 = new GraceString("method");
  var opresult1924 = callmethod(call1921, "==", [1], string1922);
  var opresult1926 = callmethod(call1920, "&", [1], opresult1924);
  if (Grace_isTrue(opresult1926)) {
  lineNumber = 1247
  var call1927 = callmethod(this,"checkIndent", [0]);
  lineNumber = 1249
  lineNumber = 1248
  var var_stok = var_sym;
  lineNumber = 1249
  var call1928 = callmethod(this,"next", [0]);
  lineNumber = 1250
  var bool1929 = new GraceBoolean(false)
  lineNumber = 1251
  var call1930 = callmethod(this,"methodsignature", [1], bool1929);
  var var_m = call1930;
  lineNumber = 1252
  lineNumber = 1
  lineNumber = 1251
  var call1931 = callmethod(var_m,"m", [0]);
  var var_meth = call1931;
  lineNumber = 1253
  lineNumber = 1
  lineNumber = 1252
  var call1932 = callmethod(var_m,"sig", [0]);
  var var_signature = call1932;
  lineNumber = 1254
  lineNumber = 1
  lineNumber = 1253
  var call1933 = callmethod(var_m,"rtype", [0]);
  var var_dtype = call1933;
  lineNumber = 1255
  lineNumber = 1
  lineNumber = 1254
  var call1934 = callmethod(var_m,"v", [0]);
  var var_varargs = call1934;
  lineNumber = 1256
  var array1935 = new GraceList([
]);

  var var_body = array1935;
  lineNumber = 1257
  var var_localMin;
  lineNumber = 1288
  lineNumber = 1257
  var string1937 = new GraceString("lbrace");
  lineNumber = 1290
  var call1938 = callmethod(this,"accept", [1], string1937);
  if (Grace_isTrue(call1938)) {
  lineNumber = 1258
  var call1939 = callmethod(this,"next", [0]);
  lineNumber = 1260
  lineNumber = 1259
  var_localMin = var_minIndentLevel;
  lineNumber = 1264
  lineNumber = 1265
  lineNumber = 1
  lineNumber = 1260
  var call1941 = callmethod(var_sym,"line", [0]);
  lineNumber = 1265
  lineNumber = 1
  lineNumber = 1260
  var call1942 = callmethod(var_stok,"line", [0]);
  var opresult1944 = callmethod(call1941, "==", [1], call1942);
  if (Grace_isTrue(opresult1944)) {
  lineNumber = 1262
  lineNumber = 1
  lineNumber = 1261
  var call1945 = callmethod(var_sym,"linePos", [0]);
  var diff1947 = callmethod(call1945, "-", [1], new GraceNum(1));
  var_minIndentLevel = diff1947;
  var if1940 = diff1947;
  } else {
  lineNumber = 1264
  lineNumber = 1
  lineNumber = 1263
  var call1948 = callmethod(var_stok,"indent", [0]);
  var opresult1950 = callmethod(call1948, "+", [1], new GraceNum(1));
  var_minIndentLevel = opresult1950;
  var if1940 = opresult1950;
}
  lineNumber = 1268
  var obj1951 = Grace_allocObject();
  obj1951.outer = this;
    var reader_parser_outer1952 = function() {
    return this.outer;
  }
  obj1951.methods["outer"] = reader_parser_outer1952;
function obj_init_1951() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1266
  var string1953 = new GraceString("lbrace");
  obj1951.data["kind"] = string1953;
    var reader_parser_kind1954 = function() {
    return this.data["kind"];
  }
  obj1951.methods["kind"] = reader_parser_kind1954;
  obj1951.data["kind"] = string1953;
  var writer_parser_kind1954 = function(argcv, o) {
    this.data["kind"] = o;
  }
  obj1951.methods["kind:="] = writer_parser_kind1954;
obj1951.mutable = true;
  lineNumber = 1267
  var string1955 = new GraceString("");
  obj1951.data["register"] = string1955;
    var reader_parser_register1956 = function() {
    return this.data["register"];
  }
  obj1951.methods["register"] = reader_parser_register1956;
  obj1951.data["register"] = string1955;
  var writer_parser_register1956 = function(argcv, o) {
    this.data["register"] = o;
  }
  obj1951.methods["register:="] = writer_parser_register1956;
obj1951.mutable = true;
  superDepth = origSuperDepth;
}
obj_init_1951.apply(obj1951, []);
  lineNumber = 1265
  var call1957 = callmethod(var_values,"push", [1], obj1951);
  lineNumber = 1269
  var call1958 = callmethod(this,"statement", [0]);
  lineNumber = 1271
  lineNumber = 1
  lineNumber = 1270
  var call1959 = callmethod(var_values,"pop", [0]);
  var var_s = call1959;
  lineNumber = 1278
  lineNumber = 1271
  var block1960 = Grace_allocObject();
  block1960.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1960.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1960.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1960.receiver = this;
  block1960.className = 'block<parser:1271>';
  block1960.real = function(
) {
  lineNumber = 1
  lineNumber = 1271
  var call1961 = callmethod(var_s,"kind", [0]);
  var string1962 = new GraceString("lbrace");
  var opresult1964 = callmethod(call1961, "/=", [1], string1962);
  return opresult1964;
};
  lineNumber = 1278
  var block1965 = Grace_allocObject();
  block1965.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1965.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1965.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1965.receiver = this;
  block1965.className = 'block<parser:1278>';
  block1965.real = function(
) {
  lineNumber = 1275
  var call1966 = callmethod(var_body,"push", [1], var_s);
  lineNumber = 1276
  var call1967 = callmethod(this,"statement", [0]);
  lineNumber = 1278
  lineNumber = 1
  lineNumber = 1277
  var call1968 = callmethod(var_values,"pop", [0]);
  var_s = call1968;
  return call1968;
};
  var call1969 = callmethod(Grace_prelude,"while()do", [1, 1], block1960, block1965);
  lineNumber = 1283
  lineNumber = 1279
  var string1971 = new GraceString("rbrace");
  lineNumber = 1285
  var call1972 = callmethod(this,"accept", [1], string1971);
  if (Grace_isTrue(call1972)) {
  lineNumber = 1280
  var call1973 = callmethod(this,"next", [0]);
  var if1970 = call1973;
  } else {
  lineNumber = 1283
  lineNumber = 1282
  var string1974 = new GraceString("No statement but not end of ");
  lineNumber = 1283
  lineNumber = 1
  lineNumber = 1283
  var call1975 = callmethod(var_meth,"value", [0]);
  var opresult1977 = callmethod(string1974, "++", [1], call1975);
  var string1978 = new GraceString(". Have ");
  var opresult1980 = callmethod(opresult1977, "++", [1], string1978);
  lineNumber = 1
  lineNumber = 1283
  var call1981 = callmethod(var_sym,"kind", [0]);
  var opresult1983 = callmethod(opresult1980, "++", [1], call1981);
  var string1984 = new GraceString(".");
  var opresult1986 = callmethod(opresult1983, "++", [1], string1984);
  lineNumber = 1282
  var call1987 = callmethod(var_util,"syntax_error", [1], opresult1986);
  var if1970 = call1987;
}
  lineNumber = 1286
  lineNumber = 1285
  var_minIndentLevel = var_localMin;
  var if1936 = var_localMin;
  } else {
  lineNumber = 1288
  lineNumber = 1287
  var string1988 = new GraceString("No body in method declaration for ");
  lineNumber = 1288
  lineNumber = 1
  lineNumber = 1288
  var call1989 = callmethod(var_meth,"value", [0]);
  var opresult1991 = callmethod(string1988, "++", [1], call1989);
  lineNumber = 1287
  var call1992 = callmethod(var_util,"syntax_error", [1], opresult1991);
  var if1936 = call1992;
}
  lineNumber = 1290
  lineNumber = 1291
  lineNumber = 1
  lineNumber = 1290
  var call1993 = callmethod(var_ast,"methodNode", [0]);
  var call1994 = callmethod(call1993,"new", [4], var_meth, var_signature, var_body, var_dtype);
  var var_o = call1994;
  lineNumber = 1293
  lineNumber = 1291
  if (Grace_isTrue(var_varargs)) {
  lineNumber = 1293
  lineNumber = 1
  lineNumber = 1292
  var bool1996 = new GraceBoolean(true)
  var call1997 = callmethod(var_o,"varargs:=", [1], bool1996);
  var if1995 = call1997;
}
  lineNumber = 1294
  var call1998 = callmethod(var_values,"push", [1], var_o);
  var if1918 = call1998;
}
  return if1918
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["methoddec"] = func1917;
  lineNumber = 1352
var func1999 = function(argcv) {
  var curarg = 1;
  var var_tm = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1305
  lineNumber = 1
  lineNumber = 1305
  lineNumber = 1
  lineNumber = 1304
  var call2000 = callmethod(var_tm,"value", [0]);
  var call2001 = callmethod(call2000,"value", [0]);
  var var_methname = call2001;
  lineNumber = 1306
  lineNumber = 1
  lineNumber = 1305
  var call2002 = callmethod(var_tm,"signature", [0]);
  var var_signature = call2002;
  lineNumber = 1307
  var var_nxt;
  lineNumber = 1350
  lineNumber = 1307
  var block2003 = Grace_allocObject();
  block2003.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2003.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2003.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2003.receiver = this;
  block2003.className = 'block<parser:1307>';
  block2003.real = function(
) {
  var string2004 = new GraceString("identifier");
  var call2005 = callmethod(this,"accept", [1], string2004);
  return call2005;
};
  lineNumber = 1350
  var block2006 = Grace_allocObject();
  block2006.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2006.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2006.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2006.receiver = this;
  block2006.className = 'block<parser:1350>';
  block2006.real = function(
) {
  lineNumber = 1309
  lineNumber = 1308
  var string2007 = new GraceString("()");
  var opresult2009 = callmethod(var_methname, "++", [1], string2007);
  var_methname = opresult2009;
  lineNumber = 1310
  lineNumber = 1
  lineNumber = 1310
  lineNumber = 1
  lineNumber = 1309
  var call2010 = callmethod(var_ast,"signaturePart", [0]);
  var call2011 = callmethod(call2010,"new", [0]);
  var var_part = call2011;
  lineNumber = 1310
  var call2012 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 1312
  lineNumber = 1
  lineNumber = 1311
  var call2013 = callmethod(var_values,"pop", [0]);
  var_nxt = call2013;
  lineNumber = 1313
  lineNumber = 1312
  lineNumber = 1313
  lineNumber = 1
  lineNumber = 1312
  var call2014 = callmethod(var_nxt,"value", [0]);
  var opresult2016 = callmethod(var_methname, "++", [1], call2014);
  var_methname = opresult2016;
  lineNumber = 1314
  lineNumber = 1
  lineNumber = 1314
  lineNumber = 1
  lineNumber = 1313
  var call2017 = callmethod(var_nxt,"value", [0]);
  var call2018 = callmethod(var_part,"name:=", [1], call2017);
  lineNumber = 1315
  lineNumber = 1314
  var bool2019 = new GraceBoolean(false)
  var var_vararg = bool2019;
  lineNumber = 1316
  lineNumber = 1315
  lineNumber = 1
  lineNumber = 1315
  var string2021 = new GraceString("lparen");
  lineNumber = 1318
  var call2022 = callmethod(this,"accept", [1], string2021);
  var call2023 = callmethod(call2022,"not", [0]);
  if (Grace_isTrue(call2023)) {
  lineNumber = 1316
  var string2024 = new GraceString("multi-part method name parameters require ().");
  var call2025 = callmethod(var_util,"syntax_error", [1], string2024);
  var if2020 = call2025;
}
  lineNumber = 1318
  var call2026 = callmethod(this,"next", [0]);
  lineNumber = 1345
  lineNumber = 1320
  var block2027 = Grace_allocObject();
  block2027.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2027.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2027.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2027.receiver = this;
  block2027.className = 'block<parser:1320>';
  block2027.real = function(
) {
  lineNumber = 1319
  var string2028 = new GraceString("identifier");
  lineNumber = 1320
  var call2029 = callmethod(this,"accept", [1], string2028);
  var string2030 = new GraceString("op");
  lineNumber = 1319
  var call2031 = callmethod(this,"accept", [1], string2030);
  lineNumber = 1320
  lineNumber = 1
  lineNumber = 1320
  var call2032 = callmethod(var_sym,"value", [0]);
  var string2033 = new GraceString("*");
  var opresult2035 = callmethod(call2032, "==", [1], string2033);
  var opresult2037 = callmethod(call2031, "&", [1], opresult2035);
  var opresult2039 = callmethod(call2029, "|", [1], opresult2037);
  return opresult2039;
};
  lineNumber = 1345
  var block2040 = Grace_allocObject();
  block2040.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2040.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2040.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2040.receiver = this;
  block2040.className = 'block<parser:1345>';
  block2040.real = function(
) {
  lineNumber = 1322
  lineNumber = 1321
  if (Grace_isTrue(var_vararg)) {
  lineNumber = 1322
  var string2042 = new GraceString("varargs parameter must be last.");
  var call2043 = callmethod(var_util,"syntax_error", [1], string2042);
  var if2041 = call2043;
}
  lineNumber = 1327
  lineNumber = 1324
  var string2045 = new GraceString("op");
  lineNumber = 1329
  var call2046 = callmethod(this,"accept", [1], string2045);
  if (Grace_isTrue(call2046)) {
  lineNumber = 1325
  var call2047 = callmethod(this,"next", [0]);
  lineNumber = 1327
  lineNumber = 1326
  var bool2048 = new GraceBoolean(true)
  var_vararg = bool2048;
  lineNumber = 1327
  var string2049 = new GraceString("identifier");
  lineNumber = 1328
  var call2050 = callmethod(this,"expect", [1], string2049);
  var if2044 = call2050;
}
  lineNumber = 1329
  var call2051 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 1331
  lineNumber = 1
  lineNumber = 1330
  var call2052 = callmethod(var_values,"pop", [0]);
  var_nxt = call2052;
  lineNumber = 1336
  lineNumber = 1331
  var string2054 = new GraceString("colon");
  lineNumber = 1337
  var call2055 = callmethod(this,"accept", [1], string2054);
  if (Grace_isTrue(call2055)) {
  lineNumber = 1332
  var call2056 = callmethod(this,"next", [0]);
  lineNumber = 1333
  var call2057 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 1335
  lineNumber = 1
  lineNumber = 1334
  var call2058 = callmethod(var_values,"pop", [0]);
  var var_tp = call2058;
  lineNumber = 1336
  lineNumber = 1
  lineNumber = 1335
  var call2059 = callmethod(var_nxt,"dtype:=", [1], var_tp);
  var if2053 = call2059;
}
  lineNumber = 1342
  lineNumber = 1337
  if (Grace_isTrue(var_vararg)) {
  lineNumber = 1339
  lineNumber = 1
  lineNumber = 1338
  var call2061 = callmethod(var_part,"vararg:=", [1], var_nxt);
  lineNumber = 1340
  lineNumber = 1
  lineNumber = 1339
  var bool2062 = new GraceBoolean(true)
  var call2063 = callmethod(var_tm,"varargs:=", [1], bool2062);
  lineNumber = 1340
  var string2064 = new GraceString("rparen");
  lineNumber = 1341
  var call2065 = callmethod(this,"expect", [1], string2064);
  var if2060 = call2065;
  } else {
  lineNumber = 1342
  lineNumber = 1343
  lineNumber = 1
  lineNumber = 1342
  var call2066 = callmethod(var_part,"params", [0]);
  var call2067 = callmethod(call2066,"push", [1], var_nxt);
  var if2060 = call2067;
}
  lineNumber = 1345
  lineNumber = 1344
  var string2069 = new GraceString("comma");
  lineNumber = 1347
  var call2070 = callmethod(this,"accept", [1], string2069);
  if (Grace_isTrue(call2070)) {
  lineNumber = 1345
  var call2071 = callmethod(this,"next", [0]);
  var if2068 = call2071;
}
  return if2068;
};
  var call2072 = callmethod(Grace_prelude,"while()do", [1, 1], block2027, block2040);
  lineNumber = 1348
  var string2073 = new GraceString("rparen");
  lineNumber = 1349
  var call2074 = callmethod(this,"expect", [1], string2073);
  var call2075 = callmethod(this,"next", [0]);
  lineNumber = 1350
  var call2076 = callmethod(var_signature,"push", [1], var_part);
  return call2076;
};
  var call2077 = callmethod(Grace_prelude,"while()do", [1, 1], block2003, block2006);
  lineNumber = 1352
  var bool2078 = new GraceBoolean(false)
  lineNumber = 1353
  lineNumber = 1
  lineNumber = 1352
  var call2079 = callmethod(var_ast,"identifierNode", [0]);
  var call2080 = callmethod(call2079,"new", [2], var_methname, bool2078);
  return call2080
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["parsempmndecrest"] = func1999;
  lineNumber = 1442
var func2081 = function(argcv) {
  var curarg = 1;
  var var_sameline = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1357
  var string2082 = new GraceString("identifier");
  var string2083 = new GraceString("op");
  var string2084 = new GraceString("lsquare");
  lineNumber = 1358
  var call2085 = callmethod(this,"expect()or()or", [1, 1, 1], string2082, string2083, string2084);
  var call2086 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 1360
  lineNumber = 1
  lineNumber = 1359
  var call2087 = callmethod(var_values,"pop", [0]);
  var var_meth = call2087;
  lineNumber = 1361
  var array2088 = new GraceList([
]);

  var var_signature = array2088;
  lineNumber = 1
  lineNumber = 1361
  var call2089 = callmethod(var_meth,"value", [0]);
  lineNumber = 1362
  lineNumber = 1
  lineNumber = 1361
  var call2090 = callmethod(var_ast,"signaturePart", [0]);
  var call2091 = callmethod(call2090,"new", [1], call2089);
  var var_part = call2091;
  lineNumber = 1362
  var call2092 = callmethod(var_signature,"push", [1], var_part);
  lineNumber = 1367
  lineNumber = 1368
  lineNumber = 1
  lineNumber = 1363
  var call2094 = callmethod(var_meth,"value", [0]);
  var string2095 = new GraceString("[");
  var opresult2097 = callmethod(call2094, "==", [1], string2095);
  if (Grace_isTrue(opresult2097)) {
  lineNumber = 1364
  var string2098 = new GraceString("rsquare");
  lineNumber = 1365
  var call2099 = callmethod(this,"expect", [1], string2098);
  var call2100 = callmethod(this,"next", [0]);
  lineNumber = 1367
  lineNumber = 1
  lineNumber = 1366
  var string2101 = new GraceString("[]");
  var call2102 = callmethod(var_meth,"value:=", [1], string2101);
  var if2093 = call2102;
}
  lineNumber = 1375
  lineNumber = 1368
  var string2104 = new GraceString("bind");
  lineNumber = 1377
  var call2105 = callmethod(this,"accept", [1], string2104);
  if (Grace_isTrue(call2105)) {
  lineNumber = 1369
  var call2106 = callmethod(this,"next", [0]);
  lineNumber = 1371
  lineNumber = 1
  lineNumber = 1371
  lineNumber = 1
  lineNumber = 1370
  var call2107 = callmethod(var_meth,"value", [0]);
  var string2108 = new GraceString(":=");
  var opresult2110 = callmethod(call2107, "++", [1], string2108);
  var call2111 = callmethod(var_meth,"value:=", [1], opresult2110);
  lineNumber = 1372
  lineNumber = 1
  lineNumber = 1372
  lineNumber = 1
  lineNumber = 1371
  var call2112 = callmethod(var_part,"name", [0]);
  var string2113 = new GraceString(":=");
  var opresult2115 = callmethod(call2112, "++", [1], string2113);
  var call2116 = callmethod(var_part,"name:=", [1], opresult2115);
  var if2103 = call2116;
  } else {
  lineNumber = 1375
  lineNumber = 1372
  var string2118 = new GraceString("op");
  lineNumber = 1377
  var call2119 = callmethod(this,"accept", [1], string2118);
  lineNumber = 1372
  lineNumber = 1
  lineNumber = 1372
  var call2120 = callmethod(var_meth,"value", [0]);
  var string2121 = new GraceString("prefix");
  var opresult2123 = callmethod(call2120, "==", [1], string2121);
  var opresult2125 = callmethod(call2119, "&", [1], opresult2123);
  if (Grace_isTrue(opresult2125)) {
  lineNumber = 1374
  lineNumber = 1
  lineNumber = 1374
  lineNumber = 1
  lineNumber = 1373
  var call2126 = callmethod(var_meth,"value", [0]);
  lineNumber = 1374
  lineNumber = 1
  lineNumber = 1373
  var call2127 = callmethod(var_sym,"value", [0]);
  var opresult2129 = callmethod(call2126, "++", [1], call2127);
  var call2130 = callmethod(var_meth,"value:=", [1], opresult2129);
  lineNumber = 1375
  lineNumber = 1
  lineNumber = 1375
  lineNumber = 1
  lineNumber = 1374
  var call2131 = callmethod(var_part,"name", [0]);
  lineNumber = 1375
  lineNumber = 1
  lineNumber = 1374
  var call2132 = callmethod(var_sym,"value", [0]);
  var opresult2134 = callmethod(call2131, "++", [1], call2132);
  var call2135 = callmethod(var_part,"name:=", [1], opresult2134);
  lineNumber = 1375
  var call2136 = callmethod(this,"next", [0]);
  var if2117 = call2136;
}
  var if2103 = if2117;
}
  lineNumber = 1378
  lineNumber = 1377
  var bool2137 = new GraceBoolean(false)
  var var_dtype = bool2137;
  lineNumber = 1379
  lineNumber = 1378
  var bool2138 = new GraceBoolean(false)
  var var_varargs = bool2138;
  lineNumber = 1380
  lineNumber = 1379
  var bool2139 = new GraceBoolean(false)
  var var_vararg = bool2139;
  lineNumber = 1426
  lineNumber = 1380
  var string2141 = new GraceString("lparen");
  lineNumber = 1428
  var call2142 = callmethod(this,"accept", [1], string2141);
  if (Grace_isTrue(call2142)) {
  lineNumber = 1381
  var call2143 = callmethod(this,"next", [0]);
  lineNumber = 1383
  var var_id;
  lineNumber = 1414
  lineNumber = 1384
  var block2144 = Grace_allocObject();
  block2144.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2144.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2144.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2144.receiver = this;
  block2144.className = 'block<parser:1384>';
  block2144.real = function(
) {
  lineNumber = 1383
  var string2145 = new GraceString("identifier");
  lineNumber = 1384
  var call2146 = callmethod(this,"accept", [1], string2145);
  var string2147 = new GraceString("op");
  lineNumber = 1383
  var call2148 = callmethod(this,"accept", [1], string2147);
  lineNumber = 1384
  lineNumber = 1
  lineNumber = 1384
  var call2149 = callmethod(var_sym,"value", [0]);
  var string2150 = new GraceString("*");
  var opresult2152 = callmethod(call2149, "==", [1], string2150);
  var opresult2154 = callmethod(call2148, "&", [1], opresult2152);
  var opresult2156 = callmethod(call2146, "|", [1], opresult2154);
  return opresult2156;
};
  lineNumber = 1414
  var block2157 = Grace_allocObject();
  block2157.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2157.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2157.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2157.receiver = this;
  block2157.className = 'block<parser:1414>';
  block2157.real = function(
) {
  lineNumber = 1391
  lineNumber = 1387
  var string2159 = new GraceString("op");
  lineNumber = 1392
  var call2160 = callmethod(this,"accept", [1], string2159);
  if (Grace_isTrue(call2160)) {
  lineNumber = 1388
  var call2161 = callmethod(this,"next", [0]);
  lineNumber = 1390
  lineNumber = 1389
  var bool2162 = new GraceBoolean(true)
  var_vararg = bool2162;
  lineNumber = 1391
  lineNumber = 1390
  var bool2163 = new GraceBoolean(true)
  var_varargs = bool2163;
  var if2158 = bool2163;
}
  lineNumber = 1392
  var call2164 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 1394
  lineNumber = 1
  lineNumber = 1393
  var call2165 = callmethod(var_values,"pop", [0]);
  var_id = call2165;
  lineNumber = 1395
  lineNumber = 1394
  var bool2166 = new GraceBoolean(false)
  var_dtype = bool2166;
  lineNumber = 1401
  lineNumber = 1395
  var string2168 = new GraceString("colon");
  lineNumber = 1404
  var call2169 = callmethod(this,"accept", [1], string2168);
  if (Grace_isTrue(call2169)) {
  lineNumber = 1396
  var call2170 = callmethod(this,"next", [0]);
  lineNumber = 1401
  lineNumber = 1397
  var string2172 = new GraceString("identifier");
  lineNumber = 1403
  var call2173 = callmethod(this,"accept", [1], string2172);
  lineNumber = 1397
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
  block2174.receiver = this;
  block2174.className = 'block<parser:1397>';
  block2174.real = function(
) {
  var string2175 = new GraceString("lbrace");
  var call2176 = callmethod(this,"accept", [1], string2175);
  return call2176;
};
  var opresult2178 = callmethod(call2173, "||", [1], block2174);
  if (Grace_isTrue(opresult2178)) {
  lineNumber = 1398
  var call2179 = callmethod(this,"dotyperef", [0]);
  lineNumber = 1400
  lineNumber = 1
  lineNumber = 1399
  var call2180 = callmethod(var_values,"pop", [0]);
  var_dtype = call2180;
  var if2171 = call2180;
  } else {
  lineNumber = 1401
  var string2181 = new GraceString("expected type after :.");
  var call2182 = callmethod(var_util,"syntax_error", [1], string2181);
  var if2171 = call2182;
}
  var if2167 = if2171;
}
  lineNumber = 1405
  lineNumber = 1
  lineNumber = 1404
  var call2183 = callmethod(var_id,"dtype:=", [1], var_dtype);
  lineNumber = 1409
  lineNumber = 1405
  if (Grace_isTrue(var_vararg)) {
  lineNumber = 1407
  lineNumber = 1
  lineNumber = 1406
  var call2185 = callmethod(var_part,"vararg:=", [1], var_id);
  lineNumber = 1407
  var string2186 = new GraceString("rparen");
  lineNumber = 1408
  var call2187 = callmethod(this,"expect", [1], string2186);
  var if2184 = call2187;
  } else {
  lineNumber = 1409
  lineNumber = 1410
  lineNumber = 1
  lineNumber = 1409
  var call2188 = callmethod(var_part,"params", [0]);
  var call2189 = callmethod(call2188,"push", [1], var_id);
  var if2184 = call2189;
}
  lineNumber = 1414
  lineNumber = 1411
  var string2191 = new GraceString("comma");
  lineNumber = 1416
  var call2192 = callmethod(this,"accept", [1], string2191);
  if (Grace_isTrue(call2192)) {
  lineNumber = 1412
  var call2193 = callmethod(this,"next", [0]);
  var if2190 = call2193;
  } else {
  lineNumber = 1414
  lineNumber = 1413
  lineNumber = 1
  lineNumber = 1413
  var string2195 = new GraceString("rparen");
  lineNumber = 1416
  var call2196 = callmethod(this,"accept", [1], string2195);
  var call2197 = callmethod(call2196,"not", [0]);
  if (Grace_isTrue(call2197)) {
  lineNumber = 1414
  var string2198 = new GraceString("expected comma or rparen.");
  var call2199 = callmethod(var_util,"syntax_error", [1], string2198);
  var if2194 = call2199;
}
  var if2190 = if2194;
}
  return if2190;
};
  var call2200 = callmethod(Grace_prelude,"while()do", [1, 1], block2144, block2157);
  lineNumber = 1417
  var string2201 = new GraceString("rparen");
  lineNumber = 1418
  var call2202 = callmethod(this,"expect", [1], string2201);
  var call2203 = callmethod(this,"next", [0]);
  lineNumber = 1426
  lineNumber = 1420
  lineNumber = 1419
  lineNumber = 1427
  lineNumber = 1419
  var call2205 = callmethod(var_sameline,"prefix!", [0]);
  var string2206 = new GraceString("identifier");
  lineNumber = 1427
  var call2207 = callmethod(this,"accept", [1], string2206);
  var opresult2209 = callmethod(call2205, "&", [1], call2207);
  lineNumber = 1420
  var string2210 = new GraceString("identifier");
  lineNumber = 1419
  var call2211 = callmethod(this,"acceptSameLine", [1], string2210);
  var opresult2213 = callmethod(opresult2209, "|", [1], call2211);
  if (Grace_isTrue(opresult2213)) {
  lineNumber = 1423
  var array2214 = new GraceList([
]);

  var bool2215 = new GraceBoolean(false)
  lineNumber = 1424
  lineNumber = 1
  lineNumber = 1423
  var call2216 = callmethod(var_ast,"methodNode", [0]);
  var call2217 = callmethod(call2216,"new", [4], var_meth, var_signature, array2214, bool2215);
  var var_tm = call2217;
  lineNumber = 1424
  lineNumber = 1425
  var call2218 = callmethod(this,"parsempmndecrest", [1], var_tm);
  var_meth = call2218;
  lineNumber = 1426
  lineNumber = 1425
  lineNumber = 1426
  lineNumber = 1
  lineNumber = 1425
  var call2219 = callmethod(var_tm,"varargs", [0]);
  var opresult2221 = callmethod(var_varargs, "|", [1], call2219);
  var_varargs = opresult2221;
  var if2204 = opresult2221;
}
  var if2140 = if2204;
}
  lineNumber = 1435
  lineNumber = 1428
  var string2223 = new GraceString("arrow");
  lineNumber = 1436
  var call2224 = callmethod(this,"accept", [1], string2223);
  if (Grace_isTrue(call2224)) {
  lineNumber = 1430
  var call2225 = callmethod(this,"next", [0]);
  lineNumber = 1431
  var call2226 = callmethod(this,"dotyperef", [0]);
  lineNumber = 1433
  lineNumber = 1
  lineNumber = 1432
  var call2227 = callmethod(var_values,"pop", [0]);
  var_dtype = call2227;
  var if2222 = call2227;
  } else {
  lineNumber = 1435
  lineNumber = 1434
  var bool2228 = new GraceBoolean(false)
  var_dtype = bool2228;
  var if2222 = bool2228;
}
  lineNumber = 1441
  var obj2229 = Grace_allocObject();
  obj2229.outer = this;
    var reader_parser_outer2230 = function() {
    return this.outer;
  }
  obj2229.methods["outer"] = reader_parser_outer2230;
function obj_init_2229() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 1437
  obj2229.data["m"] = var_meth;
    var reader_parser_m2231 = function() {
    return this.data["m"];
  }
  obj2229.methods["m"] = reader_parser_m2231;
  obj2229.data["m"] = var_meth;
  var writer_parser_m2231 = function(argcv, o) {
    this.data["m"] = o;
  }
  obj2229.methods["m:="] = writer_parser_m2231;
obj2229.mutable = true;
  lineNumber = 1438
  obj2229.data["sig"] = var_signature;
    var reader_parser_sig2232 = function() {
    return this.data["sig"];
  }
  obj2229.methods["sig"] = reader_parser_sig2232;
  obj2229.data["sig"] = var_signature;
  var writer_parser_sig2232 = function(argcv, o) {
    this.data["sig"] = o;
  }
  obj2229.methods["sig:="] = writer_parser_sig2232;
obj2229.mutable = true;
  lineNumber = 1439
  obj2229.data["rtype"] = var_dtype;
    var reader_parser_rtype2233 = function() {
    return this.data["rtype"];
  }
  obj2229.methods["rtype"] = reader_parser_rtype2233;
  obj2229.data["rtype"] = var_dtype;
  var writer_parser_rtype2233 = function(argcv, o) {
    this.data["rtype"] = o;
  }
  obj2229.methods["rtype:="] = writer_parser_rtype2233;
obj2229.mutable = true;
  lineNumber = 1440
  obj2229.data["v"] = var_varargs;
    var reader_parser_v2234 = function() {
    return this.data["v"];
  }
  obj2229.methods["v"] = reader_parser_v2234;
  obj2229.data["v"] = var_varargs;
  var writer_parser_v2234 = function(argcv, o) {
    this.data["v"] = o;
  }
  obj2229.methods["v:="] = writer_parser_v2234;
obj2229.mutable = true;
  superDepth = origSuperDepth;
}
obj_init_2229.apply(obj2229, []);
  var var_o = obj2229;
  lineNumber = 1442
  return var_o
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["methodsignature"] = func2081;
  lineNumber = 1454
var func2235 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1448
  var string2237 = new GraceString("keyword");
  lineNumber = 1456
  var call2238 = callmethod(this,"accept", [1], string2237);
  lineNumber = 1448
  lineNumber = 1
  lineNumber = 1448
  var call2239 = callmethod(var_sym,"value", [0]);
  var string2240 = new GraceString("import");
  var opresult2242 = callmethod(call2239, "==", [1], string2240);
  var opresult2244 = callmethod(call2238, "&", [1], opresult2242);
  if (Grace_isTrue(opresult2244)) {
  lineNumber = 1449
  var call2245 = callmethod(this,"next", [0]);
  lineNumber = 1450
  var string2246 = new GraceString("identifier");
  lineNumber = 1451
  var call2247 = callmethod(this,"expect", [1], string2246);
  var call2248 = callmethod(this,"identifier", [0]);
  lineNumber = 1453
  lineNumber = 1
  lineNumber = 1452
  var call2249 = callmethod(var_values,"pop", [0]);
  var var_p = call2249;
  lineNumber = 1453
  lineNumber = 1454
  lineNumber = 1
  lineNumber = 1453
  var call2250 = callmethod(var_ast,"importNode", [0]);
  var call2251 = callmethod(call2250,"new", [1], var_p);
  var var_o = call2251;
  lineNumber = 1454
  var call2252 = callmethod(var_values,"push", [1], var_o);
  var if2236 = call2252;
}
  return if2236
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["doimport"] = func2235;
  lineNumber = 1471
var func2253 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1461
  var string2255 = new GraceString("keyword");
  lineNumber = 1473
  var call2256 = callmethod(this,"accept", [1], string2255);
  lineNumber = 1461
  lineNumber = 1
  lineNumber = 1461
  var call2257 = callmethod(var_sym,"value", [0]);
  var string2258 = new GraceString("return");
  var opresult2260 = callmethod(call2257, "==", [1], string2258);
  var opresult2262 = callmethod(call2256, "&", [1], opresult2260);
  if (Grace_isTrue(opresult2262)) {
  lineNumber = 1462
  var call2263 = callmethod(this,"next", [0]);
  lineNumber = 1464
  var var_retval;
  lineNumber = 1468
  lineNumber = 1470
  var call2265 = callmethod(this,"tokenOnSameLine", [0]);
  if (Grace_isTrue(call2265)) {
  lineNumber = 1465
  var block2266 = Grace_allocObject();
  block2266.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2266.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2266.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2266.receiver = this;
  block2266.className = 'block<parser:1465>';
  block2266.real = function(
) {
  var call2267 = callmethod(this,"expression", [0]);
  return call2267;
};
  lineNumber = 1466
  var call2268 = callmethod(this,"expectConsume", [1], block2266);
  lineNumber = 1467
  lineNumber = 1
  lineNumber = 1466
  var call2269 = callmethod(var_values,"pop", [0]);
  var_retval = call2269;
  var if2264 = call2269;
  } else {
  lineNumber = 1468
  var string2270 = new GraceString("void");
  var bool2271 = new GraceBoolean(false)
  lineNumber = 1469
  lineNumber = 1
  lineNumber = 1468
  var call2272 = callmethod(var_ast,"identifierNode", [0]);
  var call2273 = callmethod(call2272,"new", [2], string2270, bool2271);
  var_retval = call2273;
  var if2264 = call2273;
}
  lineNumber = 1470
  lineNumber = 1471
  lineNumber = 1
  lineNumber = 1470
  var call2274 = callmethod(var_ast,"returnNode", [0]);
  var call2275 = callmethod(call2274,"new", [1], var_retval);
  var var_o = call2275;
  lineNumber = 1471
  var call2276 = callmethod(var_values,"push", [1], var_o);
  var if2254 = call2276;
}
  return if2254
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["doreturn"] = func2253;
  lineNumber = 1492
var func2277 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1476
  var bool2278 = new GraceBoolean(true)
  lineNumber = 1477
  var call2279 = callmethod(this,"methodsignature", [1], bool2278);
  var var_m = call2279;
  lineNumber = 1478
  lineNumber = 1
  lineNumber = 1477
  var call2280 = callmethod(var_m,"m", [0]);
  var var_meth = call2280;
  lineNumber = 1479
  lineNumber = 1
  lineNumber = 1478
  var call2281 = callmethod(var_m,"sig", [0]);
  var var_signature = call2281;
  lineNumber = 1480
  lineNumber = 1
  lineNumber = 1479
  var call2282 = callmethod(var_m,"rtype", [0]);
  var var_dtype = call2282;
  lineNumber = 1481
  lineNumber = 1
  lineNumber = 1480
  var call2283 = callmethod(var_m,"v", [0]);
  var var_varargs = call2283;
  lineNumber = 1482
  lineNumber = 1484
  lineNumber = 1481
  var bool2285 = new GraceBoolean(false)
  var opresult2287 = callmethod(var_dtype, "==", [1], bool2285);
  if (Grace_isTrue(opresult2287)) {
  lineNumber = 1482
  var string2288 = new GraceString("Unit");
  var bool2289 = new GraceBoolean(false)
  lineNumber = 1483
  lineNumber = 1
  lineNumber = 1482
  var call2290 = callmethod(var_ast,"identifierNode", [0]);
  var call2291 = callmethod(call2290,"new", [2], string2288, bool2289);
  var_dtype = call2291;
  var if2284 = call2291;
}
  lineNumber = 1484
  lineNumber = 1
  lineNumber = 1484
  var call2292 = callmethod(var_meth,"value", [0]);
  lineNumber = 1485
  lineNumber = 1
  lineNumber = 1484
  var call2293 = callmethod(var_ast,"methodTypeNode", [0]);
  var call2294 = callmethod(call2293,"new", [3], call2292, var_signature, var_dtype);
  var var_o = call2294;
  lineNumber = 1485
  var call2295 = callmethod(var_values,"push", [1], var_o);
  lineNumber = 1492
  lineNumber = 1486
  var string2297 = new GraceString("semicolon");
  lineNumber = 1496
  var call2298 = callmethod(this,"accept", [1], string2297);
  if (Grace_isTrue(call2298)) {
  lineNumber = 1487
  var call2299 = callmethod(this,"next", [0]);
  var if2296 = call2299;
  } else {
  lineNumber = 1492
  lineNumber = 1489
  var string2301 = new GraceString("rbrace");
  lineNumber = 1495
  var call2302 = callmethod(this,"accept", [1], string2301);
  var call2303 = callmethod(call2302,"prefix!", [0]);
  if (Grace_isTrue(call2303)) {
  lineNumber = 1492
  lineNumber = 1494
  lineNumber = 1
  lineNumber = 1490
  var call2305 = callmethod(var_meth,"line", [0]);
  lineNumber = 1494
  lineNumber = 1
  lineNumber = 1490
  var call2306 = callmethod(var_sym,"line", [0]);
  var opresult2308 = callmethod(call2305, "==", [1], call2306);
  if (Grace_isTrue(opresult2308)) {
  lineNumber = 1492
  lineNumber = 1491
  var string2309 = new GraceString("multiple methods on same line in type, ");
  lineNumber = 1492
  var string2310 = new GraceString("after ");
  lineNumber = 1
  lineNumber = 1492
  var call2311 = callmethod(var_meth,"value", [0]);
  var opresult2313 = callmethod(string2310, "++", [1], call2311);
  var string2314 = new GraceString("");
  var opresult2316 = callmethod(opresult2313, "++", [1], string2314);
  var opresult2318 = callmethod(string2309, "++", [1], opresult2316);
  lineNumber = 1491
  var call2319 = callmethod(var_util,"syntax_error", [1], opresult2318);
  var if2304 = call2319;
}
  var if2300 = if2304;
}
  var if2296 = if2300;
}
  return if2296
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["domethodtype"] = func2277;
  lineNumber = 1510
var func2320 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1499
  var string2322 = new GraceString("lbrace");
  lineNumber = 1512
  var call2323 = callmethod(this,"accept", [1], string2322);
  if (Grace_isTrue(call2323)) {
  lineNumber = 1501
  var array2324 = new GraceList([
]);

  var var_methods = array2324;
  lineNumber = 1502
  lineNumber = 1501
  var var_mc = var_auto__95__count;
  lineNumber = 1503
  lineNumber = 1502
  var opresult2326 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2326;
  lineNumber = 1503
  var call2327 = callmethod(this,"next", [0]);
  lineNumber = 1506
  lineNumber = 1504
  var block2328 = Grace_allocObject();
  block2328.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2328.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2328.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2328.receiver = this;
  block2328.className = 'block<parser:1504>';
  block2328.real = function(
) {
  lineNumber = 1
  lineNumber = 1504
  var string2329 = new GraceString("rbrace");
  var call2330 = callmethod(this,"accept", [1], string2329);
  var call2331 = callmethod(call2330,"not", [0]);
  return call2331;
};
  lineNumber = 1506
  var block2332 = Grace_allocObject();
  block2332.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2332.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2332.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2332.receiver = this;
  block2332.className = 'block<parser:1506>';
  block2332.real = function(
) {
  lineNumber = 1505
  var block2333 = Grace_allocObject();
  block2333.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2333.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2333.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2333.receiver = this;
  block2333.className = 'block<parser:1505>';
  block2333.real = function(
) {
  var call2334 = callmethod(this,"domethodtype", [0]);
  return call2334;
};
  lineNumber = 1506
  var call2335 = callmethod(this,"expectConsume", [1], block2333);
  lineNumber = 1
  lineNumber = 1506
  var call2336 = callmethod(var_values,"pop", [0]);
  var call2337 = callmethod(var_methods,"push", [1], call2336);
  return call2337;
};
  var call2338 = callmethod(Grace_prelude,"while()do", [1, 1], block2328, block2332);
  lineNumber = 1508
  var call2339 = callmethod(this,"next", [0]);
  lineNumber = 1509
  var string2340 = new GraceString("<Anon_");
  var opresult2342 = callmethod(string2340, "++", [1], var_mc);
  var string2343 = new GraceString(">");
  var opresult2345 = callmethod(opresult2342, "++", [1], string2343);
  lineNumber = 1510
  lineNumber = 1
  lineNumber = 1509
  var call2346 = callmethod(var_ast,"typeNode", [0]);
  var call2347 = callmethod(call2346,"new", [2], opresult2345, var_methods);
  var var_t = call2347;
  lineNumber = 1510
  var call2348 = callmethod(var_values,"push", [1], var_t);
  var if2321 = call2348;
}
  return if2321
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["doanontype"] = func2320;
  lineNumber = 1553
var func2349 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1515
  var string2351 = new GraceString("keyword");
  lineNumber = 1556
  var call2352 = callmethod(this,"accept", [1], string2351);
  lineNumber = 1515
  lineNumber = 1
  lineNumber = 1515
  var call2353 = callmethod(var_sym,"value", [0]);
  var string2354 = new GraceString("type");
  var opresult2356 = callmethod(call2353, "==", [1], string2354);
  var opresult2358 = callmethod(call2352, "&", [1], opresult2356);
  if (Grace_isTrue(opresult2358)) {
  lineNumber = 1516
  var call2359 = callmethod(this,"next", [0]);
  lineNumber = 1517
  var string2360 = new GraceString("identifier");
  lineNumber = 1518
  var call2361 = callmethod(this,"expect", [1], string2360);
  var call2362 = callmethod(this,"pushidentifier", [0]);
  lineNumber = 1519
  var call2363 = callmethod(this,"generic", [0]);
  lineNumber = 1521
  lineNumber = 1
  lineNumber = 1520
  var call2364 = callmethod(var_values,"pop", [0]);
  var var_p = call2364;
  lineNumber = 1522
  var array2365 = new GraceList([
]);

  var var_gens = array2365;
  lineNumber = 1525
  lineNumber = 1526
  lineNumber = 1
  lineNumber = 1522
  var call2367 = callmethod(var_p,"kind", [0]);
  var string2368 = new GraceString("generic");
  var opresult2370 = callmethod(call2367, "==", [1], string2368);
  if (Grace_isTrue(opresult2370)) {
  lineNumber = 1524
  lineNumber = 1
  lineNumber = 1523
  var call2371 = callmethod(var_p,"params", [0]);
  var_gens = call2371;
  lineNumber = 1525
  lineNumber = 1
  lineNumber = 1524
  var call2372 = callmethod(var_p,"value", [0]);
  var_p = call2372;
  var if2366 = call2372;
}
  lineNumber = 1526
  var string2373 = new GraceString("op");
  lineNumber = 1527
  var call2374 = callmethod(this,"expect", [1], string2373);
  lineNumber = 1528
  lineNumber = 1530
  lineNumber = 1
  lineNumber = 1527
  var call2376 = callmethod(var_sym,"value", [0]);
  var string2377 = new GraceString("=");
  var opresult2379 = callmethod(call2376, "/=", [1], string2377);
  if (Grace_isTrue(opresult2379)) {
  lineNumber = 1528
  var string2380 = new GraceString("type declarations require =.");
  var call2381 = callmethod(var_util,"syntax_error", [1], string2380);
  var if2375 = call2381;
}
  lineNumber = 1530
  var call2382 = callmethod(this,"next", [0]);
  lineNumber = 1532
  var array2383 = new GraceList([
]);

  var var_methods = array2383;
  lineNumber = 1553
  lineNumber = 1532
  var string2385 = new GraceString("lbrace");
  lineNumber = 1555
  var call2386 = callmethod(this,"accept", [1], string2385);
  if (Grace_isTrue(call2386)) {
  lineNumber = 1533
  var call2387 = callmethod(this,"next", [0]);
  lineNumber = 1536
  lineNumber = 1534
  var block2388 = Grace_allocObject();
  block2388.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2388.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2388.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2388.receiver = this;
  block2388.className = 'block<parser:1534>';
  block2388.real = function(
) {
  lineNumber = 1
  lineNumber = 1534
  var string2389 = new GraceString("rbrace");
  var call2390 = callmethod(this,"accept", [1], string2389);
  var call2391 = callmethod(call2390,"not", [0]);
  return call2391;
};
  lineNumber = 1536
  var block2392 = Grace_allocObject();
  block2392.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2392.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2392.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2392.receiver = this;
  block2392.className = 'block<parser:1536>';
  block2392.real = function(
) {
  lineNumber = 1535
  var block2393 = Grace_allocObject();
  block2393.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2393.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2393.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2393.receiver = this;
  block2393.className = 'block<parser:1535>';
  block2393.real = function(
) {
  var call2394 = callmethod(this,"domethodtype", [0]);
  return call2394;
};
  lineNumber = 1536
  var call2395 = callmethod(this,"expectConsume", [1], block2393);
  lineNumber = 1
  lineNumber = 1536
  var call2396 = callmethod(var_values,"pop", [0]);
  var call2397 = callmethod(var_methods,"push", [1], call2396);
  return call2397;
};
  var call2398 = callmethod(Grace_prelude,"while()do", [1, 1], block2388, block2392);
  lineNumber = 1538
  var call2399 = callmethod(this,"next", [0]);
  lineNumber = 1539
  lineNumber = 1
  lineNumber = 1539
  var call2400 = callmethod(var_p,"value", [0]);
  lineNumber = 1540
  lineNumber = 1
  lineNumber = 1539
  var call2401 = callmethod(var_ast,"typeNode", [0]);
  var call2402 = callmethod(call2401,"new", [2], call2400, var_methods);
  var var_t = call2402;
  lineNumber = 1541
  lineNumber = 1
  lineNumber = 1540
  var call2403 = callmethod(var_t,"generics:=", [1], var_gens);
  lineNumber = 1541
  var call2404 = callmethod(var_values,"push", [1], var_t);
  var if2384 = call2404;
  } else {
  lineNumber = 1543
  var call2405 = callmethod(this,"dotyperef", [0]);
  lineNumber = 1545
  lineNumber = 1
  lineNumber = 1544
  var call2406 = callmethod(var_values,"pop", [0]);
  var var_ot = call2406;
  lineNumber = 1545
  lineNumber = 1
  lineNumber = 1545
  var call2407 = callmethod(var_p,"value", [0]);
  lineNumber = 1
  lineNumber = 1545
  var call2408 = callmethod(var_ot,"methods", [0]);
  lineNumber = 1546
  lineNumber = 1
  lineNumber = 1545
  var call2409 = callmethod(var_ast,"typeNode", [0]);
  var call2410 = callmethod(call2409,"new", [2], call2407, call2408);
  var var_nt = call2410;
  lineNumber = 1547
  lineNumber = 1
  lineNumber = 1547
  lineNumber = 1
  lineNumber = 1546
  var call2411 = callmethod(var_nt,"generics", [0]);
  var call2412 = callmethod(var_nt,"generics:=", [1], call2411);
  lineNumber = 1548
  lineNumber = 1547
  lineNumber = 1
  lineNumber = 1547
  var call2413 = callmethod(var_ot,"unionTypes", [0]);
  lineNumber = 1548
  var block2414 = Grace_allocObject();
  block2414.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2414.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2414.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2414.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2414.receiver = this;
  block2414.className = 'block<parser:1548>';
  block2414.real = function(
var_ut
) {
  lineNumber = 1549
  lineNumber = 1
  lineNumber = 1548
  var call2415 = callmethod(var_nt,"unionTypes", [0]);
  var call2416 = callmethod(call2415,"push", [1], var_ut);
  return call2416;
};
  var call2417 = callmethod(Grace_prelude,"for()do", [1, 1], call2413, block2414);
  lineNumber = 1551
  lineNumber = 1550
  lineNumber = 1
  lineNumber = 1550
  var call2418 = callmethod(var_ot,"intersectionTypes", [0]);
  lineNumber = 1551
  var block2419 = Grace_allocObject();
  block2419.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2419.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2419.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2419.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2419.receiver = this;
  block2419.className = 'block<parser:1551>';
  block2419.real = function(
var_ut
) {
  lineNumber = 1552
  lineNumber = 1
  lineNumber = 1551
  var call2420 = callmethod(var_nt,"intersectionTypes", [0]);
  var call2421 = callmethod(call2420,"push", [1], var_ut);
  return call2421;
};
  var call2422 = callmethod(Grace_prelude,"for()do", [1, 1], call2418, block2419);
  lineNumber = 1553
  var call2423 = callmethod(var_values,"push", [1], var_nt);
  var if2384 = call2423;
}
  var if2350 = if2384;
}
  return if2350
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["dotype"] = func2349;
  lineNumber = 1575
var func2424 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1559
  if (Grace_isTrue(var_indentFreePass)) {
  lineNumber = 1561
  lineNumber = 1560
  var bool2426 = new GraceBoolean(false)
  var_indentFreePass = bool2426;
  var if2425 = bool2426;
  } else {
  lineNumber = 1575
  lineNumber = 1563
  lineNumber = 1
  lineNumber = 1561
  var call2428 = callmethod(var_sym,"kind", [0]);
  var string2429 = new GraceString("semicolon");
  var opresult2431 = callmethod(call2428, "==", [1], string2429);
  if (Grace_isTrue(opresult2431)) {
  var if2427 = undefined;
  } else {
  lineNumber = 1575
  lineNumber = 1566
  lineNumber = 1
  lineNumber = 1563
  var call2433 = callmethod(var_sym,"kind", [0]);
  var string2434 = new GraceString("rbrace");
  var opresult2436 = callmethod(call2433, "==", [1], string2434);
  lineNumber = 1566
  lineNumber = 1
  lineNumber = 1563
  var call2437 = callmethod(var_sym,"kind", [0]);
  var string2438 = new GraceString("rparen");
  var opresult2440 = callmethod(call2437, "==", [1], string2438);
  var opresult2442 = callmethod(opresult2436, "|", [1], opresult2440);
  lineNumber = 1566
  lineNumber = 1
  lineNumber = 1564
  var call2443 = callmethod(var_sym,"kind", [0]);
  var string2444 = new GraceString("rsquare");
  var opresult2446 = callmethod(call2443, "==", [1], string2444);
  var opresult2448 = callmethod(opresult2442, "|", [1], opresult2446);
  if (Grace_isTrue(opresult2448)) {
  var if2432 = undefined;
  } else {
  lineNumber = 1575
  lineNumber = 1573
  lineNumber = 1
  lineNumber = 1566
  var call2450 = callmethod(var_sym,"indent", [0]);
  var opresult2452 = callmethod(call2450, "<", [1], var_minIndentLevel);
  if (Grace_isTrue(opresult2452)) {
  lineNumber = 1571
  lineNumber = 1573
  lineNumber = 1
  lineNumber = 1567
  var call2454 = callmethod(var_sym,"linePos", [0]);
  var diff2456 = callmethod(call2454, "-", [1], new GraceNum(1));
  var opresult2458 = callmethod(diff2456, "/=", [1], var_minIndentLevel);
  if (Grace_isTrue(opresult2458)) {
  lineNumber = 1571
  lineNumber = 1568
  var string2459 = new GraceString("block and indentation inconsistent ");
  lineNumber = 1569
  var string2460 = new GraceString("for token ");
  var opresult2462 = callmethod(string2459, "++", [1], string2460);
  lineNumber = 1571
  lineNumber = 1
  lineNumber = 1569
  var call2463 = callmethod(var_sym,"kind", [0]);
  var opresult2465 = callmethod(opresult2462, "++", [1], call2463);
  var string2466 = new GraceString(": ");
  var opresult2468 = callmethod(opresult2465, "++", [1], string2466);
  lineNumber = 1571
  lineNumber = 1
  lineNumber = 1569
  var call2469 = callmethod(var_sym,"value", [0]);
  var opresult2471 = callmethod(opresult2468, "++", [1], call2469);
  var string2472 = new GraceString("; ");
  var opresult2474 = callmethod(opresult2471, "++", [1], string2472);
  lineNumber = 1570
  var string2475 = new GraceString("indentation is ");
  var opresult2477 = callmethod(opresult2474, "++", [1], string2475);
  lineNumber = 1571
  lineNumber = 1
  lineNumber = 1570
  var call2478 = callmethod(var_sym,"indent", [0]);
  var opresult2480 = callmethod(opresult2477, "++", [1], call2478);
  var string2481 = new GraceString(", must be at least ");
  var opresult2483 = callmethod(opresult2480, "++", [1], string2481);
  lineNumber = 1571
  var opresult2485 = callmethod(opresult2483, "++", [1], var_minIndentLevel);
  lineNumber = 1568
  var call2486 = callmethod(var_util,"syntax_error", [1], opresult2485);
  var if2453 = call2486;
}
  var if2449 = if2453;
  } else {
  lineNumber = 1575
  lineNumber = 1576
  lineNumber = 1
  lineNumber = 1573
  var call2488 = callmethod(var_sym,"indent", [0]);
  var opresult2490 = callmethod(call2488, ">", [1], var_minIndentLevel);
  if (Grace_isTrue(opresult2490)) {
  lineNumber = 1575
  lineNumber = 1
  lineNumber = 1574
  var call2491 = callmethod(var_sym,"indent", [0]);
  var_minIndentLevel = call2491;
  var if2487 = call2491;
}
  var if2449 = if2487;
}
  var if2432 = if2449;
}
  var if2427 = if2432;
}
  var if2425 = if2427;
}
  return if2425
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["checkIndent"] = func2424;
  lineNumber = 1632
var func2492 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1585
  lineNumber = 1
  lineNumber = 1584
  var call2493 = callmethod(var_sym,"indent", [0]);
  var_statementIndent = call2493;
  lineNumber = 1586
  lineNumber = 1585
  var_statementToken = var_sym;
  lineNumber = 1586
  var call2494 = callmethod(this,"checkIndent", [0]);
  lineNumber = 1618
  lineNumber = 1587
  var string2496 = new GraceString("keyword");
  lineNumber = 1621
  var call2497 = callmethod(this,"accept", [1], string2496);
  if (Grace_isTrue(call2497)) {
  lineNumber = 1603
  lineNumber = 1605
  lineNumber = 1
  lineNumber = 1588
  var call2499 = callmethod(var_sym,"value", [0]);
  var string2500 = new GraceString("var");
  var opresult2502 = callmethod(call2499, "==", [1], string2500);
  if (Grace_isTrue(opresult2502)) {
  lineNumber = 1589
  var call2503 = callmethod(this,"vardec", [0]);
  var if2498 = call2503;
  } else {
  lineNumber = 1603
  lineNumber = 1592
  lineNumber = 1
  lineNumber = 1590
  var call2505 = callmethod(var_sym,"value", [0]);
  var string2506 = new GraceString("def");
  var opresult2508 = callmethod(call2505, "==", [1], string2506);
  if (Grace_isTrue(opresult2508)) {
  lineNumber = 1591
  var call2509 = callmethod(this,"defdec", [0]);
  var if2504 = call2509;
  } else {
  lineNumber = 1603
  lineNumber = 1594
  lineNumber = 1
  lineNumber = 1592
  var call2511 = callmethod(var_sym,"value", [0]);
  var string2512 = new GraceString("const");
  var opresult2514 = callmethod(call2511, "==", [1], string2512);
  if (Grace_isTrue(opresult2514)) {
  lineNumber = 1593
  var string2515 = new GraceString("no such keyword const; did you mean def?");
  var call2516 = callmethod(var_util,"syntax_error", [1], string2515);
  var if2510 = call2516;
  } else {
  lineNumber = 1603
  lineNumber = 1596
  lineNumber = 1
  lineNumber = 1594
  var call2518 = callmethod(var_sym,"value", [0]);
  var string2519 = new GraceString("import");
  var opresult2521 = callmethod(call2518, "==", [1], string2519);
  if (Grace_isTrue(opresult2521)) {
  lineNumber = 1595
  var call2522 = callmethod(this,"doimport", [0]);
  var if2517 = call2522;
  } else {
  lineNumber = 1603
  lineNumber = 1598
  lineNumber = 1
  lineNumber = 1596
  var call2524 = callmethod(var_sym,"value", [0]);
  var string2525 = new GraceString("type");
  var opresult2527 = callmethod(call2524, "==", [1], string2525);
  if (Grace_isTrue(opresult2527)) {
  lineNumber = 1597
  var call2528 = callmethod(this,"dotype", [0]);
  var if2523 = call2528;
  } else {
  lineNumber = 1603
  lineNumber = 1600
  lineNumber = 1
  lineNumber = 1598
  var call2530 = callmethod(var_sym,"value", [0]);
  var string2531 = new GraceString("class");
  var opresult2533 = callmethod(call2530, "==", [1], string2531);
  if (Grace_isTrue(opresult2533)) {
  lineNumber = 1599
  var call2534 = callmethod(this,"doclass", [0]);
  var if2529 = call2534;
  } else {
  lineNumber = 1603
  lineNumber = 1602
  lineNumber = 1
  lineNumber = 1600
  var call2536 = callmethod(var_sym,"value", [0]);
  var string2537 = new GraceString("return");
  var opresult2539 = callmethod(call2536, "==", [1], string2537);
  if (Grace_isTrue(opresult2539)) {
  lineNumber = 1601
  var call2540 = callmethod(this,"doreturn", [0]);
  var if2535 = call2540;
  } else {
  lineNumber = 1603
  var call2541 = callmethod(this,"expression", [0]);
  var if2535 = call2541;
}
  var if2529 = if2535;
}
  var if2523 = if2529;
}
  var if2517 = if2523;
}
  var if2510 = if2517;
}
  var if2504 = if2510;
}
  var if2498 = if2504;
}
  var if2495 = if2498;
  } else {
  lineNumber = 1606
  var call2542 = callmethod(this,"expression", [0]);
  lineNumber = 1618
  lineNumber = 1607
  var string2544 = new GraceString("bind");
  lineNumber = 1620
  var call2545 = callmethod(this,"accept", [1], string2544);
  if (Grace_isTrue(call2545)) {
  lineNumber = 1609
  lineNumber = 1
  lineNumber = 1608
  var call2546 = callmethod(var_values,"pop", [0]);
  var var_dest = call2546;
  lineNumber = 1609
  var call2547 = callmethod(this,"next", [0]);
  lineNumber = 1610
  var call2548 = callmethod(this,"expression", [0]);
  lineNumber = 1612
  lineNumber = 1
  lineNumber = 1611
  var call2549 = callmethod(var_values,"pop", [0]);
  var var_val = call2549;
  lineNumber = 1612
  lineNumber = 1613
  lineNumber = 1
  lineNumber = 1612
  var call2550 = callmethod(var_ast,"bindNode", [0]);
  var call2551 = callmethod(call2550,"new", [2], var_dest, var_val);
  var var_o = call2551;
  lineNumber = 1615
  lineNumber = 1618
  lineNumber = 1
  lineNumber = 1613
  var call2553 = callmethod(var_dest,"kind", [0]);
  var string2554 = new GraceString("call");
  var opresult2556 = callmethod(call2553, "==", [1], string2554);
  if (Grace_isTrue(opresult2556)) {
  lineNumber = 1615
  lineNumber = 1617
  lineNumber = 1
  lineNumber = 1617
  lineNumber = 1
  lineNumber = 1614
  var call2558 = callmethod(var_dest,"value", [0]);
  var call2559 = callmethod(call2558,"kind", [0]);
  var string2560 = new GraceString("member");
  var opresult2562 = callmethod(call2559, "/=", [1], string2560);
  if (Grace_isTrue(opresult2562)) {
  lineNumber = 1615
  var string2563 = new GraceString("assignment to method call");
  var call2564 = callmethod(var_util,"syntax_error", [1], string2563);
  var if2557 = call2564;
}
  var if2552 = if2557;
}
  lineNumber = 1618
  var call2565 = callmethod(var_values,"push", [1], var_o);
  var if2543 = call2565;
}
  var if2495 = if2543;
}
  lineNumber = 1632
  lineNumber = 1621
  var string2567 = new GraceString("semicolon");
  lineNumber = 1636
  var call2568 = callmethod(this,"accept", [1], string2567);
  if (Grace_isTrue(call2568)) {
  lineNumber = 1623
  lineNumber = 1
  lineNumber = 1622
  var call2569 = callmethod(var_sym,"line", [0]);
  var var_oldLine = call2569;
  lineNumber = 1623
  var call2570 = callmethod(this,"next", [0]);
  lineNumber = 1626
  lineNumber = 1627
  lineNumber = 1
  lineNumber = 1624
  var call2572 = callmethod(var_sym,"line", [0]);
  var opresult2574 = callmethod(call2572, "==", [1], var_oldLine);
  if (Grace_isTrue(opresult2574)) {
  lineNumber = 1626
  lineNumber = 1625
  var bool2575 = new GraceBoolean(true)
  var_indentFreePass = bool2575;
  var if2571 = bool2575;
}
  var if2566 = if2571;
  } else {
  lineNumber = 1632
  lineNumber = 1635
  lineNumber = 1
  lineNumber = 1628
  var call2577 = callmethod(var_sym,"line", [0]);
  lineNumber = 1635
  lineNumber = 1
  lineNumber = 1628
  var call2578 = callmethod(var_lastToken,"line", [0]);
  var opresult2580 = callmethod(call2577, "==", [1], call2578);
  if (Grace_isTrue(opresult2580)) {
  lineNumber = 1632
  lineNumber = 1634
  lineNumber = 1
  lineNumber = 1629
  var call2582 = callmethod(var_sym,"kind", [0]);
  var string2583 = new GraceString("rbrace");
  var opresult2585 = callmethod(call2582, "!=", [1], string2583);
  if (Grace_isTrue(opresult2585)) {
  lineNumber = 1632
  lineNumber = 1630
  var string2586 = new GraceString("unexpected token after statement ended; ");
  lineNumber = 1632
  lineNumber = 1631
  var string2587 = new GraceString("got ");
  lineNumber = 1632
  lineNumber = 1
  lineNumber = 1631
  var call2588 = callmethod(var_sym,"kind", [0]);
  var opresult2590 = callmethod(string2587, "++", [1], call2588);
  var string2591 = new GraceString(":'");
  var opresult2593 = callmethod(opresult2590, "++", [1], string2591);
  lineNumber = 1632
  lineNumber = 1
  lineNumber = 1631
  var call2594 = callmethod(var_sym,"value", [0]);
  var opresult2596 = callmethod(opresult2593, "++", [1], call2594);
  var string2597 = new GraceString("', expected ");
  var opresult2599 = callmethod(opresult2596, "++", [1], string2597);
  var opresult2601 = callmethod(string2586, "++", [1], opresult2599);
  lineNumber = 1632
  var string2602 = new GraceString("new line or semicolon");
  var opresult2604 = callmethod(opresult2601, "++", [1], string2602);
  lineNumber = 1630
  var call2605 = callmethod(var_util,"syntax_error", [1], opresult2604);
  var if2581 = call2605;
}
  var if2576 = if2581;
}
  var if2566 = if2576;
}
  return if2566
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["statement"] = func2492;
  lineNumber = 1687
var func2606 = function(argcv) {
  var curarg = 1;
  var var_toks = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1641
  var string2607 = new GraceString("processing tokens.");
  var call2608 = callmethod(var_util,"log_verbose", [1], string2607);
  lineNumber = 1643
  lineNumber = 1642
  var var_otoks = var_toks;
  lineNumber = 1645
  lineNumber = 1646
  lineNumber = 1
  lineNumber = 1643
  var call2610 = callmethod(var_toks,"size", [0]);
  var opresult2612 = callmethod(call2610, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2612)) {
  lineNumber = 1645
  lineNumber = 1644
  return var_toks
  var if2609 = undefined;
}
  lineNumber = 1647
  lineNumber = 1
  lineNumber = 1646
  var call2613 = callmethod(var_toks,"first", [0]);
  var_sym = call2613;
  lineNumber = 1648
  var array2614 = new GraceList([
]);

  var_tokens = array2614;
  lineNumber = 1650
  lineNumber = 1648
  lineNumber = 1
  lineNumber = 1648
  var call2615 = callmethod(var_otoks,"indices", [0]);
  lineNumber = 1650
  var block2616 = Grace_allocObject();
  block2616.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2616.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2616.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2616.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2616.receiver = this;
  block2616.className = 'block<parser:1650>';
  block2616.real = function(
var_i
) {
  lineNumber = 1
  lineNumber = 1649
  var call2617 = callmethod(var_otoks,"pop", [0]);
  var var_o = call2617;
  lineNumber = 1650
  var call2618 = callmethod(var_tokens,"push", [1], var_o);
  return call2618;
};
  var call2619 = callmethod(Grace_prelude,"for()do", [1, 1], call2615, block2616);
  lineNumber = 1652
  var string2620 = new GraceString("parsing.");
  var call2621 = callmethod(var_util,"log_verbose", [1], string2620);
  lineNumber = 1654
  lineNumber = 1653
  var_linenum = new GraceNum(1);
  lineNumber = 1654
  var call2622 = callmethod(this,"next", [0]);
  lineNumber = 1656
  lineNumber = 1
  lineNumber = 1655
  var call2623 = callmethod(var_tokens,"size", [0]);
  var opresult2625 = callmethod(call2623, "+", [1], new GraceNum(0));
  var var_oldlength = opresult2625;
  lineNumber = 1658
  lineNumber = 1660
  lineNumber = 1
  lineNumber = 1656
  var call2627 = callmethod(var_tokens,"size", [0]);
  var opresult2629 = callmethod(call2627, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2629)) {
  lineNumber = 1658
  var call2630 = callmethod(this,"statement", [0]);
  var if2626 = call2630;
}
  lineNumber = 1686
  lineNumber = 1660
  var block2631 = Grace_allocObject();
  block2631.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2631.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2631.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2631.receiver = this;
  block2631.className = 'block<parser:1660>';
  block2631.real = function(
) {
  lineNumber = 1
  lineNumber = 1660
  var call2632 = callmethod(var_tokens,"size", [0]);
  var opresult2634 = callmethod(call2632, ">", [1], new GraceNum(0));
  return opresult2634;
};
  lineNumber = 1686
  var block2635 = Grace_allocObject();
  block2635.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2635.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2635.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2635.receiver = this;
  block2635.className = 'block<parser:1686>';
  block2635.real = function(
) {
  lineNumber = 1661
  var call2636 = callmethod(this,"methoddec", [0]);
  lineNumber = 1662
  var call2637 = callmethod(this,"inheritsdec", [0]);
  lineNumber = 1663
  var call2638 = callmethod(this,"statement", [0]);
  lineNumber = 1683
  lineNumber = 1685
  lineNumber = 1
  lineNumber = 1664
  var call2640 = callmethod(var_tokens,"size", [0]);
  var opresult2642 = callmethod(call2640, "==", [1], var_oldlength);
  if (Grace_isTrue(opresult2642)) {
  lineNumber = 1666
  lineNumber = 1665
  var string2643 = new GraceString("");
  var var_nxtToks = string2643;
  lineNumber = 1670
  lineNumber = 1666
  var opresult2645 = callmethod(new GraceNum(0), "..", [1], new GraceNum(5));
  lineNumber = 1670
  var block2646 = Grace_allocObject();
  block2646.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2646.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2646.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2646.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2646.receiver = this;
  block2646.className = 'block<parser:1670>';
  block2646.real = function(
var_i
) {
  lineNumber = 1671
  lineNumber = 1667
  lineNumber = 1671
  lineNumber = 1
  lineNumber = 1667
  var call2648 = callmethod(var_tokens,"size", [0]);
  var opresult2650 = callmethod(var_i, "<", [1], call2648);
  if (Grace_isTrue(opresult2650)) {
  lineNumber = 1668
  lineNumber = 1
  lineNumber = 1668
  var call2651 = callmethod(var_tokens,"size", [0]);
  var diff2653 = callmethod(call2651, "-", [1], var_i);
  var call2654 = callmethod(var_tokens,"at", [1], diff2653);
  var var_t = call2654;
  lineNumber = 1670
  lineNumber = 1669
  lineNumber = 1670
  lineNumber = 1
  lineNumber = 1669
  var call2655 = callmethod(var_t,"kind", [0]);
  var opresult2657 = callmethod(var_nxtToks, "++", [1], call2655);
  var string2658 = new GraceString(": ");
  var opresult2660 = callmethod(opresult2657, "++", [1], string2658);
  lineNumber = 1670
  lineNumber = 1
  lineNumber = 1669
  var call2661 = callmethod(var_t,"value", [0]);
  var opresult2663 = callmethod(opresult2660, "++", [1], call2661);
  var string2664 = new GraceString(", ");
  var opresult2666 = callmethod(opresult2663, "++", [1], string2664);
  var_nxtToks = opresult2666;
  var if2647 = opresult2666;
}
  return if2647;
};
  var call2667 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2645, block2646);
  lineNumber = 1673
  lineNumber = 1672
  var string2668 = new GraceString("");
  var var_lstAST = string2668;
  lineNumber = 1678
  lineNumber = 1673
  var opresult2670 = callmethod(new GraceNum(0), "..", [1], new GraceNum(1));
  lineNumber = 1678
  var block2671 = Grace_allocObject();
  block2671.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2671.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2671.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2671.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2671.receiver = this;
  block2671.className = 'block<parser:1678>';
  block2671.real = function(
var_i
) {
  lineNumber = 1680
  lineNumber = 1
  lineNumber = 1674
  var call2673 = callmethod(var_values,"size", [0]);
  var opresult2675 = callmethod(call2673, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2675)) {
  lineNumber = 1676
  lineNumber = 1
  lineNumber = 1675
  var call2676 = callmethod(var_values,"pop", [0]);
  var var_t = call2676;
  lineNumber = 1676
  lineNumber = 1
  lineNumber = 1676
  var call2677 = callmethod(var_t,"kind", [0]);
  var call2678 = Grace_print(call2677);
  lineNumber = 1677
  var call2679 = callmethod(var_t,"pretty", [1], new GraceNum(2));
  var call2680 = Grace_print(call2679);
  lineNumber = 1678
  var call2681 = callmethod(var_t,"pretty", [1], new GraceNum(1));
  var string2682 = new GraceString("\n");
  var opresult2684 = callmethod(call2681, "++", [1], string2682);
  var opresult2686 = callmethod(opresult2684, "++", [1], var_lstAST);
  var_lstAST = opresult2686;
  var if2672 = opresult2686;
}
  return if2672;
};
  var call2687 = callmethod(Grace_prelude,"for()do", [1, 1], opresult2670, block2671);
  lineNumber = 1683
  lineNumber = 1681
  var string2688 = new GraceString("No token consumed. Have ");
  lineNumber = 1683
  lineNumber = 1
  lineNumber = 1681
  var call2689 = callmethod(var_sym,"kind", [0]);
  var opresult2691 = callmethod(string2688, "++", [1], call2689);
  lineNumber = 1682
  var string2692 = new GraceString(": ");
  var opresult2694 = callmethod(opresult2691, "++", [1], string2692);
  lineNumber = 1683
  lineNumber = 1
  lineNumber = 1682
  var call2695 = callmethod(var_sym,"value", [0]);
  var opresult2697 = callmethod(opresult2694, "++", [1], call2695);
  var string2698 = new GraceString(". Recent AST:\n");
  var opresult2700 = callmethod(opresult2697, "++", [1], string2698);
  lineNumber = 1683
  var opresult2702 = callmethod(opresult2700, "++", [1], var_lstAST);
  var string2703 = new GraceString("\nNext tokens: ");
  var opresult2705 = callmethod(opresult2702, "++", [1], string2703);
  var opresult2707 = callmethod(opresult2705, "++", [1], var_nxtToks);
  lineNumber = 1681
  var call2708 = callmethod(var_util,"syntax_error", [1], opresult2707);
  var if2639 = call2708;
}
  lineNumber = 1686
  lineNumber = 1
  lineNumber = 1685
  var call2709 = callmethod(var_tokens,"size", [0]);
  var opresult2711 = callmethod(call2709, "+", [1], new GraceNum(0));
  var_oldlength = opresult2711;
  return opresult2711;
};
  var call2712 = callmethod(Grace_prelude,"while()do", [1, 1], block2631, block2635);
  lineNumber = 1687
  return var_values
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["parse"] = func2606;
  return this;
}
