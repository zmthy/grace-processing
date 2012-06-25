function gracecode_util() {
  lineNumber = 2
// Import of io
  var var_io = do_import("io", gracecode_io);
  lineNumber = 3
// Import of sys
  var var_sys = do_import("sys", gracecode_sys);
  lineNumber = 5
// Import of buildinfo
  var var_buildinfo = do_import("buildinfo", gracecode_buildinfo);
  lineNumber = 6
  lineNumber = 5
  var bool0 = new GraceBoolean(false)
  var var___95____95__compilerRevision = bool0;
  lineNumber = 1
var func1 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 5
  return var___95____95__compilerRevision
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["__compilerRevision"] = func1;
  lineNumber = 1
var func2 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var___95____95__compilerRevision = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["__compilerRevision:="] = func2;
  lineNumber = 7
  lineNumber = 6
  var var_verbosityv = new GraceNum(30);
  lineNumber = 1
var func3 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 6
  return var_verbosityv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["verbosityv"] = func3;
  lineNumber = 1
var func4 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_verbosityv = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["verbosityv:="] = func4;
  lineNumber = 8
  lineNumber = 1
  lineNumber = 7
  var call5 = callmethod(var_io,"output", [0]);
  var var_outfilev = call5;
  lineNumber = 1
var func6 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 7
  return var_outfilev
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outfilev"] = func6;
  lineNumber = 1
var func7 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_outfilev = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outfilev:="] = func7;
  lineNumber = 9
  lineNumber = 1
  lineNumber = 8
  var call8 = callmethod(var_io,"input", [0]);
  var var_infilev = call8;
  lineNumber = 1
var func9 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 8
  return var_infilev
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["infilev"] = func9;
  lineNumber = 1
var func10 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_infilev = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["infilev:="] = func10;
  lineNumber = 10
  lineNumber = 9
  var string11 = new GraceString("stdin_minigrace");
  var var_modnamev = string11;
  lineNumber = 1
var func12 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 9
  return var_modnamev
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["modnamev"] = func12;
  lineNumber = 1
var func13 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_modnamev = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["modnamev:="] = func13;
  lineNumber = 11
  lineNumber = 10
  var string14 = new GraceString("make");
  var var_runmodev = string14;
  lineNumber = 1
var func15 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 10
  return var_runmodev
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["runmodev"] = func15;
  lineNumber = 1
var func16 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_runmodev = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["runmodev:="] = func16;
  lineNumber = 12
  lineNumber = 11
  var string17 = new GraceString("run");
  var var_buildtypev = string17;
  lineNumber = 1
var func18 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 11
  return var_buildtypev
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["buildtypev"] = func18;
  lineNumber = 1
var func19 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_buildtypev = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["buildtypev:="] = func19;
  lineNumber = 13
  lineNumber = 12
  var bool20 = new GraceBoolean(false)
  var var_gracelibPathv = bool20;
  lineNumber = 1
var func21 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 12
  return var_gracelibPathv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["gracelibPathv"] = func21;
  lineNumber = 1
var func22 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_gracelibPathv = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["gracelibPathv:="] = func22;
  lineNumber = 14
  lineNumber = 13
  var var_linenumv = new GraceNum(1);
  lineNumber = 1
var func23 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 13
  return var_linenumv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["linenumv"] = func23;
  lineNumber = 1
var func24 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_linenumv = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["linenumv:="] = func24;
  lineNumber = 15
  lineNumber = 14
  var var_lineposv = new GraceNum(1);
  lineNumber = 1
var func25 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 14
  return var_lineposv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["lineposv"] = func25;
  lineNumber = 1
var func26 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_lineposv = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["lineposv:="] = func26;
  lineNumber = 16
  lineNumber = 15
  var bool27 = new GraceBoolean(false)
  var var_vtagv = bool27;
  lineNumber = 1
var func28 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 15
  return var_vtagv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["vtagv"] = func28;
  lineNumber = 1
var func29 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_vtagv = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["vtagv:="] = func29;
  lineNumber = 17
  lineNumber = 16
  var bool30 = new GraceBoolean(false)
  var var_noexecv = bool30;
  lineNumber = 1
var func31 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 16
  return var_noexecv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["noexecv"] = func31;
  lineNumber = 1
var func32 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_noexecv = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["noexecv:="] = func32;
  lineNumber = 18
  lineNumber = 17
  var string33 = new GraceString("c");
  var var_targetv = string33;
  lineNumber = 1
var func34 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 17
  return var_targetv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["targetv"] = func34;
  lineNumber = 1
var func35 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_targetv = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["targetv:="] = func35;
  lineNumber = 19
  lineNumber = 18
  var string36 = new GraceString("0.0.7");
  var var_versionNumber = string36;
  lineNumber = 1
var func37 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 18
  return var_versionNumber
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["versionNumber"] = func37;
  lineNumber = 1
var func38 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_versionNumber = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["versionNumber:="] = func38;
  lineNumber = 20
  lineNumber = 1
  lineNumber = 19
  var call39 = callmethod(var_HashMap,"new", [0]);
  var var_extensionsv = call39;
  lineNumber = 1
var func40 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 19
  return var_extensionsv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["extensionsv"] = func40;
  lineNumber = 1
var func41 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_extensionsv = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["extensionsv:="] = func41;
  lineNumber = 21
  lineNumber = 20
  var bool42 = new GraceBoolean(true)
  var var_recurse = bool42;
  lineNumber = 1
var func43 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 20
  return var_recurse
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["recurse"] = func43;
  lineNumber = 1
var func44 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_recurse = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["recurse:="] = func44;
  lineNumber = 23
  lineNumber = 21
  var var_jobs = new GraceNum(2);
  lineNumber = 1
var func45 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 21
  return var_jobs
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["jobs"] = func45;
  lineNumber = 1
var func46 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_jobs = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["jobs:="] = func46;
  lineNumber = 28
var func47 = function(argcv) {
  var curarg = 1;
  var var_b = arguments[curarg];
  curarg++;
  var var_e = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 30
  lineNumber = 24
  var string49 = new GraceString("cc2ded6be7e705924e6a331ed01d8c3240ceb688");
  var opresult51 = callmethod(var___95____95__compilerRevision, "/=", [1], string49);
  lineNumber = 30
  lineNumber = 25
  var bool52 = new GraceBoolean(false)
  var opresult54 = callmethod(var___95____95__compilerRevision, "/=", [1], bool52);
  var opresult56 = callmethod(opresult51, "&", [1], opresult54);
  if (Grace_isTrue(opresult56)) {
  lineNumber = 26
  lineNumber = 1
  lineNumber = 26
  var call57 = callmethod(var_b,"apply", [0]);
  var if48 = call57;
  } else {
  lineNumber = 28
  lineNumber = 1
  lineNumber = 28
  var call58 = callmethod(var_e,"apply", [0]);
  var if48 = call58;
}
  return if48
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["runOnNew()else"] = func47;
  lineNumber = 153
var func59 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 34
  lineNumber = 1
  lineNumber = 33
  var call60 = callmethod(var_sys,"argv", [0]);
  var var_argv = call60;
  lineNumber = 35
  lineNumber = 34
  var bool61 = new GraceBoolean(false)
  var var_toStdout = bool61;
  lineNumber = 121
  lineNumber = 126
  lineNumber = 1
  lineNumber = 35
  var call63 = callmethod(var_argv,"size", [0]);
  var opresult65 = callmethod(call63, ">", [1], new GraceNum(1));
  if (Grace_isTrue(opresult65)) {
  lineNumber = 37
  lineNumber = 1
  lineNumber = 36
  var call66 = callmethod(var_argv,"indices", [0]);
  var var_indices = call66;
  lineNumber = 38
  var var_arg;
  lineNumber = 39
  lineNumber = 38
  var bool67 = new GraceBoolean(true)
  var var_skip = bool67;
  lineNumber = 121
  lineNumber = 39
  lineNumber = 121
  var block68 = Grace_allocObject();
  block68.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block68.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block68.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block68.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block68.receiver = this;
  block68.className = 'block<util:121>';
  block68.real = function(
var_ai
) {
  lineNumber = 40
  var call69 = callmethod(var_argv,"at", [1], var_ai);
  var_arg = call69;
  lineNumber = 121
  lineNumber = 41
  if (Grace_isTrue(var_skip)) {
  lineNumber = 43
  lineNumber = 42
  var bool71 = new GraceBoolean(false)
  var_skip = bool71;
  var if70 = bool71;
  } else {
  lineNumber = 121
  lineNumber = 43
  var call73 = callmethod(var_arg,"at", [1], new GraceNum(1));
  var string74 = new GraceString("-");
  var opresult76 = callmethod(call73, "==", [1], string74);
  if (Grace_isTrue(opresult76)) {
  lineNumber = 108
  lineNumber = 110
  lineNumber = 44
  var string78 = new GraceString("-o");
  var opresult80 = callmethod(var_arg, "==", [1], string78);
  if (Grace_isTrue(opresult80)) {
  lineNumber = 45
  var opresult82 = callmethod(var_ai, "+", [1], new GraceNum(1));
  var call83 = callmethod(var_argv,"at", [1], opresult82);
  var string84 = new GraceString("w");
  var call85 = callmethod(var_io,"open", [2], call83, string84);
  var_outfilev = call85;
  lineNumber = 47
  lineNumber = 46
  var bool86 = new GraceBoolean(true)
  var_skip = bool86;
  var if77 = bool86;
  } else {
  lineNumber = 108
  lineNumber = 49
  lineNumber = 47
  var string88 = new GraceString("--verbose");
  var opresult90 = callmethod(var_arg, "==", [1], string88);
  if (Grace_isTrue(opresult90)) {
  lineNumber = 49
  lineNumber = 48
  var_verbosityv = new GraceNum(40);
  var if87 = new GraceNum(40);
  } else {
  lineNumber = 108
  lineNumber = 52
  lineNumber = 49
  var string92 = new GraceString("--vtag");
  var opresult94 = callmethod(var_arg, "==", [1], string92);
  if (Grace_isTrue(opresult94)) {
  lineNumber = 51
  lineNumber = 50
  var bool95 = new GraceBoolean(true)
  var_skip = bool95;
  lineNumber = 51
  var opresult97 = callmethod(var_ai, "+", [1], new GraceNum(1));
  var call98 = callmethod(var_argv,"at", [1], opresult97);
  var_vtagv = call98;
  var if91 = call98;
  } else {
  lineNumber = 108
  lineNumber = 55
  lineNumber = 52
  var string100 = new GraceString("--make");
  var opresult102 = callmethod(var_arg, "==", [1], string100);
  if (Grace_isTrue(opresult102)) {
  lineNumber = 54
  lineNumber = 53
  var string103 = new GraceString("make");
  var_runmodev = string103;
  lineNumber = 55
  lineNumber = 54
  var string104 = new GraceString("bc");
  var_buildtypev = string104;
  var if99 = string104;
  } else {
  lineNumber = 108
  lineNumber = 57
  lineNumber = 55
  var string106 = new GraceString("--no-recurse");
  var opresult108 = callmethod(var_arg, "==", [1], string106);
  if (Grace_isTrue(opresult108)) {
  lineNumber = 57
  lineNumber = 56
  var bool109 = new GraceBoolean(false)
  var_recurse = bool109;
  var if105 = bool109;
  } else {
  lineNumber = 108
  lineNumber = 60
  lineNumber = 57
  var string111 = new GraceString("--run");
  var opresult113 = callmethod(var_arg, "==", [1], string111);
  if (Grace_isTrue(opresult113)) {
  lineNumber = 59
  lineNumber = 58
  var string114 = new GraceString("run");
  var_buildtypev = string114;
  lineNumber = 60
  lineNumber = 59
  var string115 = new GraceString("make");
  var_runmodev = string115;
  var if110 = string115;
  } else {
  lineNumber = 108
  lineNumber = 63
  lineNumber = 60
  var string117 = new GraceString("--source");
  var opresult119 = callmethod(var_arg, "==", [1], string117);
  if (Grace_isTrue(opresult119)) {
  lineNumber = 62
  lineNumber = 61
  var string120 = new GraceString("source");
  var_buildtypev = string120;
  lineNumber = 63
  lineNumber = 62
  var string121 = new GraceString("build");
  var_runmodev = string121;
  var if116 = string121;
  } else {
  lineNumber = 108
  lineNumber = 65
  lineNumber = 63
  var string123 = new GraceString("--native");
  var opresult125 = callmethod(var_arg, "==", [1], string123);
  if (Grace_isTrue(opresult125)) {
  lineNumber = 65
  lineNumber = 64
  var string126 = new GraceString("native");
  var_buildtypev = string126;
  var if122 = string126;
  } else {
  lineNumber = 108
  lineNumber = 67
  lineNumber = 65
  var string128 = new GraceString("--noexec");
  var opresult130 = callmethod(var_arg, "==", [1], string128);
  if (Grace_isTrue(opresult130)) {
  lineNumber = 67
  lineNumber = 66
  var bool131 = new GraceBoolean(true)
  var_noexecv = bool131;
  var if127 = bool131;
  } else {
  lineNumber = 108
  lineNumber = 69
  lineNumber = 67
  var string133 = new GraceString("--stdout");
  var opresult135 = callmethod(var_arg, "==", [1], string133);
  if (Grace_isTrue(opresult135)) {
  lineNumber = 69
  lineNumber = 68
  var bool136 = new GraceBoolean(true)
  var_toStdout = bool136;
  var if132 = bool136;
  } else {
  lineNumber = 108
  lineNumber = 72
  lineNumber = 69
  var string138 = new GraceString("--module");
  var opresult140 = callmethod(var_arg, "==", [1], string138);
  if (Grace_isTrue(opresult140)) {
  lineNumber = 71
  lineNumber = 70
  var bool141 = new GraceBoolean(true)
  var_skip = bool141;
  lineNumber = 71
  var opresult143 = callmethod(var_ai, "+", [1], new GraceNum(1));
  var call144 = callmethod(var_argv,"at", [1], opresult143);
  var_modnamev = call144;
  var if137 = call144;
  } else {
  lineNumber = 108
  lineNumber = 75
  lineNumber = 72
  var string146 = new GraceString("--gracelib");
  var opresult148 = callmethod(var_arg, "==", [1], string146);
  if (Grace_isTrue(opresult148)) {
  lineNumber = 74
  lineNumber = 73
  var bool149 = new GraceBoolean(true)
  var_skip = bool149;
  lineNumber = 74
  var opresult151 = callmethod(var_ai, "+", [1], new GraceNum(1));
  var call152 = callmethod(var_argv,"at", [1], opresult151);
  var_gracelibPathv = call152;
  var if145 = call152;
  } else {
  lineNumber = 108
  lineNumber = 78
  lineNumber = 75
  var string154 = new GraceString("--target");
  var opresult156 = callmethod(var_arg, "==", [1], string154);
  if (Grace_isTrue(opresult156)) {
  lineNumber = 77
  lineNumber = 76
  var bool157 = new GraceBoolean(true)
  var_skip = bool157;
  lineNumber = 77
  var opresult159 = callmethod(var_ai, "+", [1], new GraceNum(1));
  var call160 = callmethod(var_argv,"at", [1], opresult159);
  var_targetv = call160;
  var if153 = call160;
  } else {
  lineNumber = 108
  lineNumber = 81
  lineNumber = 78
  var string162 = new GraceString("-j");
  var opresult164 = callmethod(var_arg, "==", [1], string162);
  if (Grace_isTrue(opresult164)) {
  lineNumber = 80
  lineNumber = 79
  var bool165 = new GraceBoolean(true)
  var_skip = bool165;
  lineNumber = 80
  lineNumber = 1
  lineNumber = 80
  var opresult167 = callmethod(var_ai, "+", [1], new GraceNum(1));
  var call168 = callmethod(var_argv,"at", [1], opresult167);
  var call169 = callmethod(call168,"asNumber", [0]);
  var_jobs = call169;
  var if161 = call169;
  } else {
  lineNumber = 108
  lineNumber = 86
  lineNumber = 81
  var string171 = new GraceString("--version");
  var opresult173 = callmethod(var_arg, "==", [1], string171);
  if (Grace_isTrue(opresult173)) {
  lineNumber = 82
  var string174 = new GraceString("minigrace ");
  var opresult176 = callmethod(string174, "++", [1], var_versionNumber);
  var string177 = new GraceString(".");
  var opresult179 = callmethod(opresult176, "++", [1], string177);
  lineNumber = 1
  lineNumber = 82
  var call180 = callmethod(var_buildinfo,"gitgeneration", [0]);
  var opresult182 = callmethod(opresult179, "++", [1], call180);
  var string183 = new GraceString("");
  var opresult185 = callmethod(opresult182, "++", [1], string183);
  var call186 = Grace_print(opresult185);
  lineNumber = 83
  var string187 = new GraceString("git revision ");
  lineNumber = 1
  lineNumber = 83
  var call188 = callmethod(var_buildinfo,"gitrevision", [0]);
  var opresult190 = callmethod(string187, "++", [1], call188);
  var call191 = Grace_print(opresult190);
  lineNumber = 84
  var string192 = new GraceString("<http://ecs.vuw.ac.nz/~mwh/minigrace/>");
  var call193 = Grace_print(string192);
  lineNumber = 85
  var call194 = callmethod(var_sys,"exit", [1], new GraceNum(0));
  var if170 = call194;
  } else {
  lineNumber = 108
  lineNumber = 90
  lineNumber = 86
  var string196 = new GraceString("--help");
  var opresult198 = callmethod(var_arg, "==", [1], string196);
  if (Grace_isTrue(opresult198)) {
  lineNumber = 87
  var string199 = new GraceString("Usage: minigrace <file>.grace");
  var call200 = Grace_print(string199);
  lineNumber = 88
  var string201 = new GraceString("See the documentation for more options.");
  var call202 = Grace_print(string201);
  lineNumber = 89
  var call203 = callmethod(var_sys,"exit", [1], new GraceNum(0));
  var if195 = call203;
  } else {
  lineNumber = 108
  lineNumber = 90
  var call205 = callmethod(var_arg,"at", [1], new GraceNum(2));
  var string206 = new GraceString("X");
  var opresult208 = callmethod(call205, "==", [1], string206);
  if (Grace_isTrue(opresult208)) {
  lineNumber = 91
  lineNumber = 1
  lineNumber = 91
  var call209 = callmethod(var_arg,"size", [0]);
  var call210 = callmethod(var_arg,"substringFrom()to", [1, 1], new GraceNum(3), call209);
  var var_ext = call210;
  lineNumber = 93
  lineNumber = 92
  var string211 = new GraceString("");
  var var_extn = string211;
  lineNumber = 94
  lineNumber = 93
  var bool212 = new GraceBoolean(true)
  var var_extv = bool212;
  lineNumber = 95
  lineNumber = 94
  var bool213 = new GraceBoolean(false)
  var var_seeneq = bool213;
  lineNumber = 103
  lineNumber = 95
  lineNumber = 103
  var block214 = Grace_allocObject();
  block214.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block214.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block214.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block214.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block214.receiver = this;
  block214.className = 'block<util:103>';
  block214.real = function(
var_c
) {
  lineNumber = 104
  lineNumber = 96
  var string216 = new GraceString("=");
  var opresult218 = callmethod(var_c, "==", [1], string216);
  if (Grace_isTrue(opresult218)) {
  lineNumber = 98
  lineNumber = 97
  var bool219 = new GraceBoolean(true)
  var_seeneq = bool219;
  lineNumber = 99
  lineNumber = 98
  var string220 = new GraceString("");
  var_extv = string220;
  var if215 = string220;
  } else {
  lineNumber = 103
  lineNumber = 101
  lineNumber = 99
  var call222 = callmethod(var_seeneq,"prefix!", [0]);
  if (Grace_isTrue(call222)) {
  lineNumber = 101
  lineNumber = 100
  var opresult224 = callmethod(var_extn, "++", [1], var_c);
  var_extn = opresult224;
  var if221 = opresult224;
  } else {
  lineNumber = 103
  lineNumber = 102
  var opresult226 = callmethod(var_extv, "++", [1], var_c);
  var_extv = opresult226;
  var if221 = opresult226;
}
  var if215 = if221;
}
  return if215;
};
  var call227 = callmethod(Grace_prelude,"for()do", [1, 1], var_ext, block214);
  lineNumber = 105
  var call228 = callmethod(var_extensionsv,"put", [2], var_extn, var_extv);
  var if204 = call228;
  } else {
  lineNumber = 107
  var string229 = new GraceString("minigrace: invalid argument ");
  var opresult231 = callmethod(string229, "++", [1], var_arg);
  var string232 = new GraceString(".\n");
  var opresult234 = callmethod(opresult231, "++", [1], string232);
  lineNumber = 108
  lineNumber = 1
  lineNumber = 107
  var call235 = callmethod(var_io,"error", [0]);
  var call236 = callmethod(call235,"write", [1], opresult234);
  lineNumber = 108
  var call237 = callmethod(var_sys,"exit", [1], new GraceNum(1));
  var if204 = call237;
}
  var if195 = if204;
}
  var if170 = if195;
}
  var if161 = if170;
}
  var if153 = if161;
}
  var if145 = if153;
}
  var if137 = if145;
}
  var if132 = if137;
}
  var if127 = if132;
}
  var if122 = if127;
}
  var if116 = if122;
}
  var if110 = if116;
}
  var if105 = if110;
}
  var if99 = if105;
}
  var if91 = if99;
}
  var if87 = if91;
}
  var if77 = if87;
}
  var if72 = if77;
  } else {
  lineNumber = 112
  lineNumber = 111
  var var_filename = var_arg;
  lineNumber = 112
  var string238 = new GraceString("r");
  var call239 = callmethod(var_io,"open", [2], var_filename, string238);
  var_infilev = call239;
  lineNumber = 121
  lineNumber = 123
  lineNumber = 113
  var string241 = new GraceString("stdin_minigrace");
  var opresult243 = callmethod(var_modnamev, "==", [1], string241);
  if (Grace_isTrue(opresult243)) {
  lineNumber = 115
  lineNumber = 114
  var string244 = new GraceString("");
  var var_accum = string244;
  lineNumber = 116
  lineNumber = 115
  var string245 = new GraceString("");
  var_modnamev = string245;
  lineNumber = 121
  lineNumber = 116
  lineNumber = 121
  var block246 = Grace_allocObject();
  block246.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block246.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block246.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block246.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block246.receiver = this;
  block246.className = 'block<util:121>';
  block246.real = function(
var_c
) {
  lineNumber = 119
  lineNumber = 120
  lineNumber = 117
  var string248 = new GraceString(".");
  var opresult250 = callmethod(var_c, "==", [1], string248);
  if (Grace_isTrue(opresult250)) {
  lineNumber = 119
  lineNumber = 118
  var_modnamev = var_accum;
  var if247 = var_accum;
}
  lineNumber = 121
  lineNumber = 120
  var opresult252 = callmethod(var_accum, "++", [1], var_c);
  var_accum = opresult252;
  return opresult252;
};
  var call253 = callmethod(Grace_prelude,"for()do", [1, 1], var_filename, block246);
  var if240 = call253;
}
  var if72 = if240;
}
  var if70 = if72;
}
  return if70;
};
  var call254 = callmethod(Grace_prelude,"for()do", [1, 1], var_indices, block68);
  var if62 = call254;
}
  lineNumber = 132
  lineNumber = 126
  lineNumber = 135
  lineNumber = 126
  lineNumber = 135
  lineNumber = 1
  lineNumber = 126
  var call256 = callmethod(var_io,"output", [0]);
  var opresult258 = callmethod(var_outfilev, "==", [1], call256);
  var block259 = Grace_allocObject();
  block259.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block259.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block259.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block259.receiver = this;
  block259.className = 'block<util:126>';
  block259.real = function(
) {
  var call260 = callmethod(var_toStdout,"prefix!", [0]);
  return call260;
};
  var opresult262 = callmethod(opresult258, "&&", [1], block259);
  if (Grace_isTrue(opresult262)) {
  lineNumber = 132
  lineNumber = 134
  lineNumber = 127
  var string264 = new GraceString("c");
  var opresult266 = callmethod(var_targetv, "==", [1], string264);
  if (Grace_isTrue(opresult266)) {
  lineNumber = 128
  var string267 = new GraceString(".c");
  var opresult269 = callmethod(var_modnamev, "++", [1], string267);
  var string270 = new GraceString("w");
  var call271 = callmethod(var_io,"open", [2], opresult269, string270);
  var_outfilev = call271;
  var if263 = call271;
  } else {
  lineNumber = 132
  lineNumber = 131
  lineNumber = 129
  var string273 = new GraceString("java");
  var opresult275 = callmethod(var_targetv, "==", [1], string273);
  if (Grace_isTrue(opresult275)) {
  lineNumber = 130
  var string276 = new GraceString(".java");
  var opresult278 = callmethod(var_modnamev, "++", [1], string276);
  var string279 = new GraceString("w");
  var call280 = callmethod(var_io,"open", [2], opresult278, string279);
  var_outfilev = call280;
  var if272 = call280;
  } else {
  lineNumber = 132
  var string281 = new GraceString(".ll");
  var opresult283 = callmethod(var_modnamev, "++", [1], string281);
  var string284 = new GraceString("w");
  var call285 = callmethod(var_io,"open", [2], opresult283, string284);
  var_outfilev = call285;
  var if272 = call285;
}
  var if263 = if272;
}
  var if255 = if263;
}
  lineNumber = 142
  lineNumber = 144
  lineNumber = 135
  var bool287 = new GraceBoolean(false)
  var opresult289 = callmethod(var_gracelibPathv, "==", [1], bool287);
  if (Grace_isTrue(opresult289)) {
  lineNumber = 142
  lineNumber = 143
  lineNumber = 136
  var string291 = new GraceString("llvm");
  var opresult293 = callmethod(var_targetv, "==", [1], string291);
  if (Grace_isTrue(opresult293)) {
  lineNumber = 138
  lineNumber = 1
  lineNumber = 137
  var call294 = callmethod(var_sys,"execPath", [0]);
  var string295 = new GraceString("/gracelib.bc");
  var opresult297 = callmethod(call294, "++", [1], string295);
  var_gracelibPathv = opresult297;
  var if290 = opresult297;
  } else {
  lineNumber = 142
  lineNumber = 140
  lineNumber = 138
  var string299 = new GraceString("java");
  var opresult301 = callmethod(var_targetv, "==", [1], string299);
  if (Grace_isTrue(opresult301)) {
  lineNumber = 140
  lineNumber = 1
  lineNumber = 139
  var call302 = callmethod(var_sys,"execPath", [0]);
  var string303 = new GraceString("/java");
  var opresult305 = callmethod(call302, "++", [1], string303);
  var_gracelibPathv = opresult305;
  var if298 = opresult305;
  } else {
  lineNumber = 142
  lineNumber = 1
  lineNumber = 141
  var call306 = callmethod(var_sys,"execPath", [0]);
  var_gracelibPathv = call306;
  var if298 = call306;
}
  var if290 = if298;
}
  var if286 = if290;
}
  lineNumber = 153
  lineNumber = 156
  lineNumber = 144
  lineNumber = 156
  lineNumber = 1
  lineNumber = 144
  var call308 = callmethod(var_io,"input", [0]);
  var opresult310 = callmethod(var_infilev, "==", [1], call308);
  if (Grace_isTrue(opresult310)) {
  lineNumber = 153
  lineNumber = 155
  lineNumber = 1
  lineNumber = 145
  var call312 = callmethod(var_infilev,"isatty", [0]);
  if (Grace_isTrue(call312)) {
  lineNumber = 147
  lineNumber = 146
  var string313 = new GraceString("minigrace ");
  var opresult315 = callmethod(string313, "++", [1], var_versionNumber);
  var string316 = new GraceString(".");
  var opresult318 = callmethod(opresult315, "++", [1], string316);
  lineNumber = 147
  lineNumber = 1
  lineNumber = 146
  var call319 = callmethod(var_buildinfo,"gitgeneration", [0]);
  var opresult321 = callmethod(opresult318, "++", [1], call319);
  var string322 = new GraceString(" / ");
  var opresult324 = callmethod(opresult321, "++", [1], string322);
  lineNumber = 147
  lineNumber = 1
  lineNumber = 147
  var call325 = callmethod(var_buildinfo,"gitrevision", [0]);
  var opresult327 = callmethod(opresult324, "++", [1], call325);
  var call328 = Grace_print(opresult327);
  lineNumber = 148
  var string329 = new GraceString("Copyright (C) 2011, 2012 Michael Homer");
  var call330 = Grace_print(string329);
  lineNumber = 150
  lineNumber = 149
  var string331 = new GraceString("This is free software with ABSOLUTELY NO WARRANTY. ");
  lineNumber = 150
  var string332 = new GraceString("Say minigrace.w for details.");
  var opresult334 = callmethod(string331, "++", [1], string332);
  var call335 = Grace_print(opresult334);
  lineNumber = 151
  var string336 = new GraceString("");
  var call337 = Grace_print(string336);
  lineNumber = 152
  var string338 = new GraceString("Enter a program and press Ctrl-D to execute it.");
  var call339 = Grace_print(string338);
  lineNumber = 153
  var string340 = new GraceString("");
  var call341 = Grace_print(string340);
  var if311 = call341;
}
  var if307 = if311;
}
  return if307
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["parseargs"] = func59;
  lineNumber = 172
var func342 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 174
  lineNumber = 159
  var opresult345 = callmethod(var_verbosityv, ">=", [1], new GraceNum(40));
  if (Grace_isTrue(opresult345)) {
  lineNumber = 160
  var string346 = new GraceString("minigrace");
  lineNumber = 161
  lineNumber = 1
  lineNumber = 160
  var call347 = callmethod(var_io,"error", [0]);
  var call348 = callmethod(call347,"write", [1], string346);
  lineNumber = 162
  lineNumber = 164
  lineNumber = 161
  var bool350 = new GraceBoolean(false)
  var opresult352 = callmethod(bool350, "!=", [1], var_vtagv);
  if (Grace_isTrue(opresult352)) {
  lineNumber = 162
  var string353 = new GraceString("[");
  var opresult355 = callmethod(string353, "++", [1], var_vtagv);
  var string356 = new GraceString("]");
  var opresult358 = callmethod(opresult355, "++", [1], string356);
  lineNumber = 163
  lineNumber = 1
  lineNumber = 162
  var call359 = callmethod(var_io,"error", [0]);
  var call360 = callmethod(call359,"write", [1], opresult358);
  var if349 = call360;
}
  lineNumber = 164
  var string361 = new GraceString(": ");
  lineNumber = 165
  lineNumber = 1
  lineNumber = 164
  var call362 = callmethod(var_io,"error", [0]);
  var call363 = callmethod(call362,"write", [1], string361);
  lineNumber = 165
  lineNumber = 166
  lineNumber = 1
  lineNumber = 165
  var call364 = callmethod(var_io,"error", [0]);
  var call365 = callmethod(call364,"write", [1], var_modnamev);
  lineNumber = 166
  var string366 = new GraceString(": ");
  lineNumber = 167
  lineNumber = 1
  lineNumber = 166
  var call367 = callmethod(var_io,"error", [0]);
  var call368 = callmethod(call367,"write", [1], string366);
  lineNumber = 167
  lineNumber = 1
  lineNumber = 167
  lineNumber = 1
  lineNumber = 167
  var call369 = callmethod(var_sys,"cputime", [0]);
  var call370 = callmethod(call369,"asString", [0]);
  lineNumber = 168
  lineNumber = 1
  lineNumber = 167
  var call371 = callmethod(var_io,"error", [0]);
  var call372 = callmethod(call371,"write", [1], call370);
  lineNumber = 168
  var string373 = new GraceString("/");
  lineNumber = 169
  lineNumber = 1
  lineNumber = 168
  var call374 = callmethod(var_io,"error", [0]);
  var call375 = callmethod(call374,"write", [1], string373);
  lineNumber = 169
  lineNumber = 1
  lineNumber = 169
  lineNumber = 1
  lineNumber = 169
  var call376 = callmethod(var_sys,"elapsed", [0]);
  var call377 = callmethod(call376,"asString", [0]);
  lineNumber = 170
  lineNumber = 1
  lineNumber = 169
  var call378 = callmethod(var_io,"error", [0]);
  var call379 = callmethod(call378,"write", [1], call377);
  lineNumber = 170
  var string380 = new GraceString(": ");
  lineNumber = 171
  lineNumber = 1
  lineNumber = 170
  var call381 = callmethod(var_io,"error", [0]);
  var call382 = callmethod(call381,"write", [1], string380);
  lineNumber = 171
  lineNumber = 172
  lineNumber = 1
  lineNumber = 171
  var call383 = callmethod(var_io,"error", [0]);
  var call384 = callmethod(call383,"write", [1], var_s);
  lineNumber = 172
  var string385 = new GraceString("\n");
  lineNumber = 173
  lineNumber = 1
  lineNumber = 172
  var call386 = callmethod(var_io,"error", [0]);
  var call387 = callmethod(call386,"write", [1], string385);
  var if343 = call387;
}
  return if343
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["log_verbose"] = func342;
  lineNumber = 178
var func388 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 177
  var call389 = callmethod(var_outfilev,"write", [1], var_s);
  lineNumber = 178
  var string390 = new GraceString("\n");
  var call391 = callmethod(var_outfilev,"write", [1], string390);
  return call391
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outprint"] = func388;
  lineNumber = 186
var func392 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 182
  lineNumber = 181
  if (Grace_isTrue(var_vtagv)) {
  lineNumber = 182
  var string394 = new GraceString("[");
  var opresult396 = callmethod(string394, "++", [1], var_vtagv);
  var string397 = new GraceString("]");
  var opresult399 = callmethod(opresult396, "++", [1], string397);
  lineNumber = 183
  lineNumber = 1
  lineNumber = 182
  var call400 = callmethod(var_io,"error", [0]);
  var call401 = callmethod(call400,"write", [1], opresult399);
  var if393 = call401;
}
  lineNumber = 184
  var string402 = new GraceString("");
  var opresult404 = callmethod(string402, "++", [1], var_modnamev);
  var string405 = new GraceString(".grace:");
  var opresult407 = callmethod(opresult404, "++", [1], string405);
  var opresult409 = callmethod(opresult407, "++", [1], var_linenumv);
  var string410 = new GraceString(":");
  var opresult412 = callmethod(opresult409, "++", [1], string410);
  var opresult414 = callmethod(opresult412, "++", [1], var_lineposv);
  var string415 = new GraceString(": Syntax error: ");
  var opresult417 = callmethod(opresult414, "++", [1], string415);
  var opresult419 = callmethod(opresult417, "++", [1], var_s);
  var string420 = new GraceString("");
  var opresult422 = callmethod(opresult419, "++", [1], string420);
  lineNumber = 185
  lineNumber = 1
  lineNumber = 184
  var call423 = callmethod(var_io,"error", [0]);
  var call424 = callmethod(call423,"write", [1], opresult422);
  lineNumber = 185
  var string425 = new GraceString("\n");
  lineNumber = 186
  lineNumber = 1
  lineNumber = 185
  var call426 = callmethod(var_io,"error", [0]);
  var call427 = callmethod(call426,"write", [1], string425);
  lineNumber = 186
  var call428 = callmethod(var_sys,"exit", [1], new GraceNum(1));
  return call428
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["syntax_error"] = func392;
  lineNumber = 197
var func429 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 191
  lineNumber = 189
  var string431 = new GraceString("IgnoreTypes");
  var call432 = callmethod(var_extensionsv,"contains", [1], string431);
  if (Grace_isTrue(call432)) {
  lineNumber = 191
  lineNumber = 190
  var bool433 = new GraceBoolean(true)
  return bool433
  var if430 = undefined;
}
  lineNumber = 193
  lineNumber = 192
  if (Grace_isTrue(var_vtagv)) {
  lineNumber = 193
  var string435 = new GraceString("[");
  var opresult437 = callmethod(string435, "++", [1], var_vtagv);
  var string438 = new GraceString("]");
  var opresult440 = callmethod(opresult437, "++", [1], string438);
  lineNumber = 194
  lineNumber = 1
  lineNumber = 193
  var call441 = callmethod(var_io,"error", [0]);
  var call442 = callmethod(call441,"write", [1], opresult440);
  var if434 = call442;
}
  lineNumber = 195
  var string443 = new GraceString("");
  var opresult445 = callmethod(string443, "++", [1], var_modnamev);
  var string446 = new GraceString(".grace:");
  var opresult448 = callmethod(opresult445, "++", [1], string446);
  var opresult450 = callmethod(opresult448, "++", [1], var_linenumv);
  var string451 = new GraceString(":");
  var opresult453 = callmethod(opresult450, "++", [1], string451);
  var opresult455 = callmethod(opresult453, "++", [1], var_lineposv);
  var string456 = new GraceString(": Type error: ");
  var opresult458 = callmethod(opresult455, "++", [1], string456);
  var opresult460 = callmethod(opresult458, "++", [1], var_s);
  var string461 = new GraceString("");
  var opresult463 = callmethod(opresult460, "++", [1], string461);
  lineNumber = 196
  lineNumber = 1
  lineNumber = 195
  var call464 = callmethod(var_io,"error", [0]);
  var call465 = callmethod(call464,"write", [1], opresult463);
  lineNumber = 196
  var string466 = new GraceString("\n");
  lineNumber = 197
  lineNumber = 1
  lineNumber = 196
  var call467 = callmethod(var_io,"error", [0]);
  var call468 = callmethod(call467,"write", [1], string466);
  lineNumber = 197
  var call469 = callmethod(var_sys,"exit", [1], new GraceNum(1));
  return call469
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["type_error"] = func429;
  lineNumber = 201
var func470 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 200
  var string471 = new GraceString("");
  var opresult473 = callmethod(string471, "++", [1], var_modnamev);
  var string474 = new GraceString(".grace:");
  var opresult476 = callmethod(opresult473, "++", [1], string474);
  var opresult478 = callmethod(opresult476, "++", [1], var_linenumv);
  var string479 = new GraceString(":");
  var opresult481 = callmethod(opresult478, "++", [1], string479);
  var opresult483 = callmethod(opresult481, "++", [1], var_lineposv);
  var string484 = new GraceString(": warning: ");
  var opresult486 = callmethod(opresult483, "++", [1], string484);
  var opresult488 = callmethod(opresult486, "++", [1], var_s);
  var string489 = new GraceString("");
  var opresult491 = callmethod(opresult488, "++", [1], string489);
  lineNumber = 201
  lineNumber = 1
  lineNumber = 200
  var call492 = callmethod(var_io,"error", [0]);
  var call493 = callmethod(call492,"write", [1], opresult491);
  lineNumber = 201
  var string494 = new GraceString("\n");
  lineNumber = 202
  lineNumber = 1
  lineNumber = 201
  var call495 = callmethod(var_io,"error", [0]);
  var call496 = callmethod(call495,"write", [1], string494);
  return call496
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["warning"] = func470;
  lineNumber = 205
var func497 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_verbosityv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["verbosity"] = func497;
  lineNumber = 208
var func498 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_outfilev
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outfile"] = func498;
  lineNumber = 211
var func499 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_infilev
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["infile"] = func499;
  lineNumber = 214
var func500 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_modnamev
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["modname"] = func500;
  lineNumber = 217
var func501 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_runmodev
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["runmode"] = func501;
  lineNumber = 220
var func502 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_buildtypev
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["buildtype"] = func502;
  lineNumber = 223
var func503 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_gracelibPathv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["gracelibPath"] = func503;
  lineNumber = 227
var func504 = function(argcv) {
  var curarg = 1;
  var var_l = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 226
  var_linenumv = var_l;
  return var_l
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["setline"] = func504;
  lineNumber = 231
var func505 = function(argcv) {
  var curarg = 1;
  var var_l = arguments[curarg];
  curarg++;
  var var_p = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 230
  lineNumber = 229
  var_linenumv = var_l;
  lineNumber = 231
  lineNumber = 230
  var_lineposv = var_p;
  return var_p
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["setPosition"] = func505;
  lineNumber = 233
var func506 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_linenumv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["linenum"] = func506;
  lineNumber = 236
var func507 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_lineposv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["linepos"] = func507;
  lineNumber = 239
var func508 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_vtagv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["vtag"] = func508;
  lineNumber = 242
var func509 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_noexecv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["noexec"] = func509;
  lineNumber = 245
var func510 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_targetv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["target"] = func510;
  lineNumber = 248
var func511 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var string512 = new GraceString("native");
  return string512
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["engine"] = func511;
  lineNumber = 251
var func513 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return var_extensionsv
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["extensions"] = func513;
  lineNumber = 253
var func514 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  return undefined
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["debug"] = func514;
  lineNumber = 257
  lineNumber = 256
  var string515 = new GraceString("0123456789abcdef");
  var var_hexdigits = string515;
  lineNumber = 1
var func516 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 256
  return var_hexdigits
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["hexdigits"] = func516;
  lineNumber = 1
var func517 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_hexdigits = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["hexdigits:="] = func517;
  lineNumber = 265
var func518 = function(argcv) {
  var curarg = 1;
  var var_num = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 259
  lineNumber = 258
  var string519 = new GraceString("");
  var var_s = string519;
  lineNumber = 264
  lineNumber = 259
  var block520 = Grace_allocObject();
  block520.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block520.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block520.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block520.receiver = this;
  block520.className = 'block<util:259>';
  block520.real = function(
) {
  var opresult522 = callmethod(var_num, ">", [1], new GraceNum(0));
  return opresult522;
};
  lineNumber = 264
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
  block523.receiver = this;
  block523.className = 'block<util:264>';
  block523.real = function(
) {
  lineNumber = 261
  lineNumber = 260
  var modulus525 = callmethod(var_num, "%", [1], new GraceNum(16));
  var var_i = modulus525;
  lineNumber = 261
  var opresult527 = callmethod(var_i, "+", [1], new GraceNum(1));
  var call528 = callmethod(var_hexdigits,"at", [1], opresult527);
  var opresult530 = callmethod(var_s, "++", [1], call528);
  var_s = opresult530;
  lineNumber = 263
  lineNumber = 262
  var diff532 = callmethod(var_num, "-", [1], var_i);
  var_num = diff532;
  lineNumber = 264
  lineNumber = 263
  var quotient534 = callmethod(var_num, "/", [1], new GraceNum(16));
  var_num = quotient534;
  return quotient534;
};
  var call535 = callmethod(Grace_prelude,"while()do", [1, 1], block520, block523);
  lineNumber = 265
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["hex"] = func518;
  lineNumber = 278
var func536 = function(argcv) {
  var curarg = 1;
  var var_joiner = arguments[curarg];
  curarg++;
  var var_iterable = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 270
  lineNumber = 1
  lineNumber = 269
  var call537 = callmethod(var_iterable,"indices", [0]);
  var var_ind = call537;
  lineNumber = 271
  lineNumber = 1
  lineNumber = 270
  var call538 = callmethod(var_ind,"first", [0]);
  var var_min = call538;
  lineNumber = 272
  lineNumber = 271
  var string539 = new GraceString("");
  var var_s = string539;
  lineNumber = 276
  lineNumber = 272
  lineNumber = 276
  var block540 = Grace_allocObject();
  block540.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block540.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block540.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block540.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block540.receiver = this;
  block540.className = 'block<util:276>';
  block540.real = function(
var_i
) {
  lineNumber = 275
  lineNumber = 276
  lineNumber = 273
  var opresult543 = callmethod(var_i, "/=", [1], var_min);
  if (Grace_isTrue(opresult543)) {
  lineNumber = 275
  lineNumber = 274
  var opresult545 = callmethod(var_s, "++", [1], var_joiner);
  var_s = opresult545;
  var if541 = opresult545;
}
  lineNumber = 276
  var call546 = callmethod(var_iterable,"at", [1], var_i);
  var opresult548 = callmethod(var_s, "++", [1], call546);
  var_s = opresult548;
  return opresult548;
};
  var call549 = callmethod(Grace_prelude,"for()do", [1, 1], var_ind, block540);
  lineNumber = 278
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["join"] = func536;
  return this;
}
