function gracecode_genjs() {
  lineNumber = 2
// Import of io
  var var_io = do_import("io", gracecode_io);
  lineNumber = 3
// Import of sys
  var var_sys = do_import("sys", gracecode_sys);
  lineNumber = 4
// Import of ast
  var var_ast = do_import("ast", gracecode_ast);
  lineNumber = 6
// Import of util
  var var_util = do_import("util", gracecode_util);
  lineNumber = 7
  var var_tmp;
  lineNumber = 1
var func0 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 6
  return var_tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["tmp"] = func0;
  lineNumber = 1
var func1 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_tmp = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["tmp:="] = func1;
  lineNumber = 8
  lineNumber = 7
  var var_verbosity = new GraceNum(30);
  lineNumber = 1
var func2 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 7
  return var_verbosity
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["verbosity"] = func2;
  lineNumber = 1
var func3 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_verbosity = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["verbosity:="] = func3;
  lineNumber = 9
  lineNumber = 8
  var var_pad1 = new GraceNum(1);
  lineNumber = 1
var func4 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 8
  return var_pad1
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["pad1"] = func4;
  lineNumber = 1
var func5 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_pad1 = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["pad1:="] = func5;
  lineNumber = 10
  lineNumber = 9
  var var_auto__95__count = new GraceNum(0);
  lineNumber = 1
var func6 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 9
  return var_auto__95__count
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["auto_count"] = func6;
  lineNumber = 1
var func7 = function(argcv) {
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
  this.methods["auto_count:="] = func7;
  lineNumber = 11
  var array8 = new GraceList([
]);

  var var_constants = array8;
  lineNumber = 1
var func9 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 10
  return var_constants
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["constants"] = func9;
  lineNumber = 1
var func10 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_constants = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["constants:="] = func10;
  lineNumber = 12
  var array11 = new GraceList([
]);

  var var_output = array11;
  lineNumber = 1
var func12 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 11
  return var_output
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["output"] = func12;
  lineNumber = 1
var func13 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_output = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["output:="] = func13;
  lineNumber = 13
  var array14 = new GraceList([
]);

  var var_usedvars = array14;
  lineNumber = 1
var func15 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 12
  return var_usedvars
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["usedvars"] = func15;
  lineNumber = 1
var func16 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_usedvars = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["usedvars:="] = func16;
  lineNumber = 14
  var array17 = new GraceList([
]);

  var var_declaredvars = array17;
  lineNumber = 1
var func18 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 13
  return var_declaredvars
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["declaredvars"] = func18;
  lineNumber = 1
var func19 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_declaredvars = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["declaredvars:="] = func19;
  lineNumber = 15
  lineNumber = 14
  var string20 = new GraceString("entry");
  var var_bblock = string20;
  lineNumber = 1
var func21 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 14
  return var_bblock
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["bblock"] = func21;
  lineNumber = 1
var func22 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_bblock = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["bblock:="] = func22;
  lineNumber = 16
  lineNumber = 15
  var var_linenum = new GraceNum(0);
  lineNumber = 1
var func23 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 15
  return var_linenum
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["linenum"] = func23;
  lineNumber = 1
var func24 = function(argcv) {
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
  this.methods["linenum:="] = func24;
  lineNumber = 17
  var array25 = new GraceList([
]);

  var var_modules = array25;
  lineNumber = 1
var func26 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 16
  return var_modules
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["modules"] = func26;
  lineNumber = 1
var func27 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_modules = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["modules:="] = func27;
  lineNumber = 18
  var array28 = new GraceList([
]);

  var var_staticmodules = array28;
  lineNumber = 1
var func29 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 17
  return var_staticmodules
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["staticmodules"] = func29;
  lineNumber = 1
var func30 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_staticmodules = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["staticmodules:="] = func30;
  lineNumber = 19
  var array31 = new GraceList([
]);

  var var_values = array31;
  lineNumber = 1
var func32 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 18
  return var_values
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["values"] = func32;
  lineNumber = 1
var func33 = function(argcv) {
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
  this.methods["values:="] = func33;
  lineNumber = 20
  var var_outfile;
  lineNumber = 1
var func34 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 19
  return var_outfile
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outfile"] = func34;
  lineNumber = 1
var func35 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_outfile = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outfile:="] = func35;
  lineNumber = 21
  lineNumber = 20
  var string36 = new GraceString("main");
  var var_modname = string36;
  lineNumber = 1
var func37 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 20
  return var_modname
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["modname"] = func37;
  lineNumber = 1
var func38 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_modname = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["modname:="] = func38;
  lineNumber = 22
  lineNumber = 21
  var string39 = new GraceString("build");
  var var_runmode = string39;
  lineNumber = 1
var func40 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 21
  return var_runmode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["runmode"] = func40;
  lineNumber = 1
var func41 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_runmode = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["runmode:="] = func41;
  lineNumber = 23
  lineNumber = 22
  var string42 = new GraceString("bc");
  var var_buildtype = string42;
  lineNumber = 1
var func43 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 22
  return var_buildtype
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["buildtype"] = func43;
  lineNumber = 1
var func44 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_buildtype = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["buildtype:="] = func44;
  lineNumber = 24
  lineNumber = 23
  var string45 = new GraceString("gracelib.o");
  var var_gracelibPath = string45;
  lineNumber = 1
var func46 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 23
  return var_gracelibPath
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["gracelibPath"] = func46;
  lineNumber = 1
var func47 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_gracelibPath = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["gracelibPath:="] = func47;
  lineNumber = 25
  lineNumber = 24
  var bool48 = new GraceBoolean(false)
  var var_inBlock = bool48;
  lineNumber = 1
var func49 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 24
  return var_inBlock
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["inBlock"] = func49;
  lineNumber = 1
var func50 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_inBlock = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["inBlock:="] = func50;
  lineNumber = 26
  lineNumber = 25
  var var_compilationDepth = new GraceNum(0);
  lineNumber = 1
var func51 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 25
  return var_compilationDepth
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilationDepth"] = func51;
  lineNumber = 1
var func52 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_compilationDepth = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilationDepth:="] = func52;
  lineNumber = 28
  lineNumber = 1
  lineNumber = 26
  var call53 = callmethod(var_HashMap,"new", [0]);
  var var_topLevelTypes = call53;
  lineNumber = 1
var func54 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 26
  return var_topLevelTypes
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["topLevelTypes"] = func54;
  lineNumber = 29
var func55 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var call56 = callmethod(var_output,"push", [1], var_s);
  return call56
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["out"] = func55;
  lineNumber = 32
var func57 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var call58 = callmethod(var_util,"outprint", [1], var_s);
  return call58
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outprint"] = func57;
  lineNumber = 35
var func59 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var call60 = callmethod(var_util,"log_verbose", [1], var_s);
  return call60
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["log_verbose"] = func59;
  lineNumber = 48
var func61 = function(argcv) {
  var curarg = 1;
  var var_vn = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 39
  lineNumber = 38
  var string62 = new GraceString("");
  var var_nm = string62;
  lineNumber = 46
  lineNumber = 39
  lineNumber = 46
  var block63 = Grace_allocObject();
  block63.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block63.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block63.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block63.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block63.receiver = this;
  block63.className = 'block<genjs:46>';
  block63.real = function(
var_c
) {
  lineNumber = 41
  lineNumber = 1
  lineNumber = 40
  var call64 = callmethod(var_c,"ord", [0]);
  var var_o = call64;
  lineNumber = 46
  lineNumber = 47
  lineNumber = 41
  var opresult67 = callmethod(var_o, ">=", [1], new GraceNum(97));
  lineNumber = 47
  lineNumber = 41
  var opresult69 = callmethod(var_o, "<=", [1], new GraceNum(122));
  var opresult71 = callmethod(opresult67, "&", [1], opresult69);
  lineNumber = 47
  lineNumber = 41
  var opresult73 = callmethod(var_o, ">=", [1], new GraceNum(65));
  lineNumber = 47
  lineNumber = 41
  var opresult75 = callmethod(var_o, "<=", [1], new GraceNum(90));
  var opresult77 = callmethod(opresult73, "&", [1], opresult75);
  var opresult79 = callmethod(opresult71, "|", [1], opresult77);
  lineNumber = 47
  lineNumber = 42
  var opresult81 = callmethod(var_o, ">=", [1], new GraceNum(48));
  lineNumber = 47
  lineNumber = 42
  var opresult83 = callmethod(var_o, "<=", [1], new GraceNum(57));
  var opresult85 = callmethod(opresult81, "&", [1], opresult83);
  var opresult87 = callmethod(opresult79, "|", [1], opresult85);
  if (Grace_isTrue(opresult87)) {
  lineNumber = 44
  lineNumber = 43
  var opresult89 = callmethod(var_nm, "++", [1], var_c);
  var_nm = opresult89;
  var if65 = opresult89;
  } else {
  lineNumber = 46
  lineNumber = 45
  var string90 = new GraceString("__");
  var opresult92 = callmethod(var_nm, "++", [1], string90);
  var opresult94 = callmethod(opresult92, "++", [1], var_o);
  var string95 = new GraceString("__");
  var opresult97 = callmethod(opresult94, "++", [1], string95);
  var_nm = opresult97;
  var if65 = opresult97;
}
  return if65;
};
  var call98 = callmethod(Grace_prelude,"for()do", [1, 1], var_vn, block63);
  lineNumber = 48
  return var_nm
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["escapeident"] = func61;
  lineNumber = 51
var func99 = function(argcv) {
  var curarg = 1;
  var var_vn = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var string100 = new GraceString("var_");
  lineNumber = 52
  var call101 = callmethod(this,"escapeident", [1], var_vn);
  var opresult103 = callmethod(string100, "++", [1], call101);
  return opresult103
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["varf"] = func99;
  lineNumber = 55
var func104 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 54
  var string105 = new GraceString("%");
  var opresult107 = callmethod(string105, "++", [1], var_s);
  var_bblock = opresult107;
  lineNumber = 55
  var string108 = new GraceString(":");
  var opresult110 = callmethod(var_s, "++", [1], string108);
  lineNumber = 56
  var call111 = callmethod(this,"out", [1], opresult110);
  return call111
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["beginblock"] = func104;
  lineNumber = 72
var func112 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 59
  lineNumber = 58
  var var_myc = var_auto__95__count;
  lineNumber = 60
  lineNumber = 59
  var opresult114 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult114;
  lineNumber = 61
  var var_r;
  lineNumber = 62
  var array115 = new GraceList([
]);

  var var_vals = array115;
  lineNumber = 64
  lineNumber = 62
  lineNumber = 1
  lineNumber = 62
  var call116 = callmethod(var_o,"value", [0]);
  lineNumber = 64
  var block117 = Grace_allocObject();
  block117.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block117.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block117.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block117.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block117.receiver = this;
  block117.className = 'block<genjs:64>';
  block117.real = function(
var_a
) {
  lineNumber = 63
  lineNumber = 64
  var call118 = callmethod(this,"compilenode", [1], var_a);
  var_r = call118;
  var call119 = callmethod(var_vals,"push", [1], var_r);
  return call119;
};
  var call120 = callmethod(Grace_prelude,"for()do", [1, 1], call116, block117);
  lineNumber = 66
  var string121 = new GraceString("  var array");
  var opresult123 = callmethod(string121, "++", [1], var_myc);
  var string124 = new GraceString(" = new GraceList([");
  var opresult126 = callmethod(opresult123, "++", [1], string124);
  lineNumber = 67
  var call127 = callmethod(this,"out", [1], opresult126);
  lineNumber = 68
  lineNumber = 67
  lineNumber = 68
  var block128 = Grace_allocObject();
  block128.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block128.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block128.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block128.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block128.receiver = this;
  block128.className = 'block<genjs:68>';
  block128.real = function(
var_v
) {
  var string129 = new GraceString(",");
  var opresult131 = callmethod(var_v, "++", [1], string129);
  lineNumber = 69
  var call132 = callmethod(this,"out", [1], opresult131);
  return call132;
};
  var call133 = callmethod(Grace_prelude,"for()do", [1, 1], var_vals, block128);
  lineNumber = 70
  var string134 = new GraceString("]);\n");
  lineNumber = 71
  var call135 = callmethod(this,"out", [1], string134);
  lineNumber = 72
  lineNumber = 1
  lineNumber = 72
  lineNumber = 71
  var string136 = new GraceString("array");
  var opresult138 = callmethod(string136, "++", [1], var_myc);
  var call139 = callmethod(var_o,"register:=", [1], opresult138);
  return call139
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilearray"] = func112;
  lineNumber = 78
var func140 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 75
  lineNumber = 1
  lineNumber = 75
  var call142 = callmethod(var_o,"value", [0]);
  lineNumber = 1
  lineNumber = 75
  var call143 = callmethod(var_ast,"callWithPart", [0]);
  var call144 = callmethod(call143,"new", [1], call142);
  var array141 = new GraceList([
call144,
]);

  lineNumber = 76
  lineNumber = 1
  lineNumber = 75
  var call145 = callmethod(var_ast,"callNode", [0]);
  var call146 = callmethod(call145,"new", [2], var_o, array141);
  var var_c = call146;
  lineNumber = 76
  lineNumber = 77
  var call147 = callmethod(this,"compilenode", [1], var_c);
  var var_r = call147;
  lineNumber = 78
  lineNumber = 1
  lineNumber = 77
  var call148 = callmethod(var_o,"register:=", [1], var_r);
  return call148
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilemember"] = func140;
  lineNumber = 89
var func149 = function(argcv) {
  var curarg = 1;
  var var_selfr = arguments[curarg];
  curarg++;
  var var_outerRef = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 81
  lineNumber = 80
  var var_myc = var_auto__95__count;
  lineNumber = 82
  lineNumber = 81
  var opresult151 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult151;
  lineNumber = 82
  lineNumber = 1
  lineNumber = 82
  var string152 = new GraceString("outer");
  var call153 = callmethod(string152,"_escape", [0]);
  var var_nm = call153;
  lineNumber = 83
  var string154 = new GraceString("outer");
  lineNumber = 84
  var call155 = callmethod(this,"escapeident", [1], string154);
  var var_nmi = call155;
  var string156 = new GraceString("  ");
  var opresult158 = callmethod(string156, "++", [1], var_selfr);
  var string159 = new GraceString(".outer = ");
  var opresult161 = callmethod(opresult158, "++", [1], string159);
  var opresult163 = callmethod(opresult161, "++", [1], var_outerRef);
  var string164 = new GraceString(";");
  var opresult166 = callmethod(opresult163, "++", [1], string164);
  lineNumber = 85
  var call167 = callmethod(this,"out", [1], opresult166);
  var string168 = new GraceString("    var reader_");
  var opresult170 = callmethod(string168, "++", [1], var_modname);
  var string171 = new GraceString("_");
  var opresult173 = callmethod(opresult170, "++", [1], string171);
  var opresult175 = callmethod(opresult173, "++", [1], var_nmi);
  var opresult177 = callmethod(opresult175, "++", [1], var_myc);
  var string178 = new GraceString(" = function() {");
  var opresult180 = callmethod(opresult177, "++", [1], string178);
  lineNumber = 86
  var call181 = callmethod(this,"out", [1], opresult180);
  var string182 = new GraceString("    return this.outer;");
  lineNumber = 87
  var call183 = callmethod(this,"out", [1], string182);
  var string184 = new GraceString("  }");
  lineNumber = 88
  var call185 = callmethod(this,"out", [1], string184);
  lineNumber = 89
  lineNumber = 88
  var string186 = new GraceString("  ");
  var opresult188 = callmethod(string186, "++", [1], var_selfr);
  var string189 = new GraceString(".methods[\"");
  var opresult191 = callmethod(opresult188, "++", [1], string189);
  var opresult193 = callmethod(opresult191, "++", [1], var_nm);
  var string194 = new GraceString("\"] = reader_");
  var opresult196 = callmethod(opresult193, "++", [1], string194);
  var opresult198 = callmethod(opresult196, "++", [1], var_modname);
  lineNumber = 89
  var string199 = new GraceString("_");
  var opresult201 = callmethod(opresult198, "++", [1], string199);
  var opresult203 = callmethod(opresult201, "++", [1], var_nmi);
  var opresult205 = callmethod(opresult203, "++", [1], var_myc);
  var string206 = new GraceString(";");
  var opresult208 = callmethod(opresult205, "++", [1], string206);
  lineNumber = 90
  var call209 = callmethod(this,"out", [1], opresult208);
  return call209
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjouter"] = func149;
  lineNumber = 111
var func210 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_selfr = arguments[curarg];
  curarg++;
  var var_pos = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 93
  lineNumber = 92
  var string211 = new GraceString("undefined");
  var var_val = string211;
  lineNumber = 98
  lineNumber = 101
  lineNumber = 93
  var bool213 = new GraceBoolean(false)
  lineNumber = 101
  lineNumber = 1
  lineNumber = 93
  var call214 = callmethod(var_o,"value", [0]);
  var opresult216 = callmethod(bool213, "!=", [1], call214);
  if (Grace_isTrue(opresult216)) {
  lineNumber = 98
  lineNumber = 100
  lineNumber = 1
  lineNumber = 100
  lineNumber = 1
  lineNumber = 94
  var call218 = callmethod(var_o,"value", [0]);
  var call219 = callmethod(call218,"kind", [0]);
  var string220 = new GraceString("object");
  var opresult222 = callmethod(call219, "==", [1], string220);
  if (Grace_isTrue(opresult222)) {
  lineNumber = 95
  lineNumber = 1
  lineNumber = 95
  var call223 = callmethod(var_o,"value", [0]);
  lineNumber = 96
  var call224 = callmethod(this,"compileobject", [2], call223, var_selfr);
  lineNumber = 97
  lineNumber = 1
  lineNumber = 97
  lineNumber = 1
  lineNumber = 96
  var call225 = callmethod(var_o,"value", [0]);
  var call226 = callmethod(call225,"register", [0]);
  var_val = call226;
  var if217 = call226;
  } else {
  lineNumber = 98
  lineNumber = 1
  lineNumber = 98
  var call227 = callmethod(var_o,"value", [0]);
  lineNumber = 99
  var call228 = callmethod(this,"compilenode", [1], call227);
  var_val = call228;
  var if217 = call228;
}
  var if212 = if217;
}
  lineNumber = 102
  lineNumber = 101
  var var_myc = var_auto__95__count;
  lineNumber = 103
  lineNumber = 102
  var opresult230 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult230;
  lineNumber = 103
  lineNumber = 1
  lineNumber = 103
  lineNumber = 1
  lineNumber = 103
  lineNumber = 1
  lineNumber = 103
  var call231 = callmethod(var_o,"name", [0]);
  var call232 = callmethod(call231,"value", [0]);
  var call233 = callmethod(call232,"_escape", [0]);
  var var_nm = call233;
  lineNumber = 104
  lineNumber = 1
  lineNumber = 104
  lineNumber = 1
  lineNumber = 104
  var call234 = callmethod(var_o,"name", [0]);
  var call235 = callmethod(call234,"value", [0]);
  lineNumber = 105
  var call236 = callmethod(this,"escapeident", [1], call235);
  var var_nmi = call236;
  var string237 = new GraceString("  ");
  var opresult239 = callmethod(string237, "++", [1], var_selfr);
  var string240 = new GraceString(".data[\"");
  var opresult242 = callmethod(opresult239, "++", [1], string240);
  var opresult244 = callmethod(opresult242, "++", [1], var_nm);
  var string245 = new GraceString("\"] = ");
  var opresult247 = callmethod(opresult244, "++", [1], string245);
  var opresult249 = callmethod(opresult247, "++", [1], var_val);
  var string250 = new GraceString(";");
  var opresult252 = callmethod(opresult249, "++", [1], string250);
  lineNumber = 106
  var call253 = callmethod(this,"out", [1], opresult252);
  var string254 = new GraceString("    var reader_");
  var opresult256 = callmethod(string254, "++", [1], var_modname);
  var string257 = new GraceString("_");
  var opresult259 = callmethod(opresult256, "++", [1], string257);
  var opresult261 = callmethod(opresult259, "++", [1], var_nmi);
  var opresult263 = callmethod(opresult261, "++", [1], var_myc);
  var string264 = new GraceString(" = function() {");
  var opresult266 = callmethod(opresult263, "++", [1], string264);
  lineNumber = 107
  var call267 = callmethod(this,"out", [1], opresult266);
  var string268 = new GraceString("    return this.data[\"");
  var opresult270 = callmethod(string268, "++", [1], var_nm);
  var string271 = new GraceString("\"];");
  var opresult273 = callmethod(opresult270, "++", [1], string271);
  lineNumber = 108
  var call274 = callmethod(this,"out", [1], opresult273);
  var string275 = new GraceString("  }");
  lineNumber = 109
  var call276 = callmethod(this,"out", [1], string275);
  var string277 = new GraceString("  reader_");
  var opresult279 = callmethod(string277, "++", [1], var_modname);
  var string280 = new GraceString("_");
  var opresult282 = callmethod(opresult279, "++", [1], string280);
  var opresult284 = callmethod(opresult282, "++", [1], var_nmi);
  var string285 = new GraceString("");
  var opresult287 = callmethod(opresult284, "++", [1], string285);
  var opresult289 = callmethod(opresult287, "++", [1], var_myc);
  var string290 = new GraceString(".def = true;");
  var opresult292 = callmethod(opresult289, "++", [1], string290);
  lineNumber = 110
  var call293 = callmethod(this,"out", [1], opresult292);
  lineNumber = 111
  lineNumber = 110
  var string294 = new GraceString("  ");
  var opresult296 = callmethod(string294, "++", [1], var_selfr);
  var string297 = new GraceString(".methods[\"");
  var opresult299 = callmethod(opresult296, "++", [1], string297);
  var opresult301 = callmethod(opresult299, "++", [1], var_nm);
  var string302 = new GraceString("\"] = reader_");
  var opresult304 = callmethod(opresult301, "++", [1], string302);
  var opresult306 = callmethod(opresult304, "++", [1], var_modname);
  lineNumber = 111
  var string307 = new GraceString("_");
  var opresult309 = callmethod(opresult306, "++", [1], string307);
  var opresult311 = callmethod(opresult309, "++", [1], var_nmi);
  var opresult313 = callmethod(opresult311, "++", [1], var_myc);
  var string314 = new GraceString(";");
  var opresult316 = callmethod(opresult313, "++", [1], string314);
  lineNumber = 112
  var call317 = callmethod(this,"out", [1], opresult316);
  return call317
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjdefdec"] = func210;
  lineNumber = 133
var func318 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_selfr = arguments[curarg];
  curarg++;
  var var_pos = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 115
  lineNumber = 114
  var string319 = new GraceString("undefined");
  var var_val = string319;
  lineNumber = 116
  lineNumber = 118
  lineNumber = 115
  var bool321 = new GraceBoolean(false)
  lineNumber = 118
  lineNumber = 1
  lineNumber = 115
  var call322 = callmethod(var_o,"value", [0]);
  var opresult324 = callmethod(bool321, "!=", [1], call322);
  if (Grace_isTrue(opresult324)) {
  lineNumber = 116
  lineNumber = 1
  lineNumber = 116
  var call325 = callmethod(var_o,"value", [0]);
  lineNumber = 117
  var call326 = callmethod(this,"compilenode", [1], call325);
  var_val = call326;
  var if320 = call326;
}
  lineNumber = 119
  lineNumber = 118
  var var_myc = var_auto__95__count;
  lineNumber = 120
  lineNumber = 119
  var opresult328 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult328;
  lineNumber = 120
  lineNumber = 1
  lineNumber = 120
  lineNumber = 1
  lineNumber = 120
  lineNumber = 1
  lineNumber = 120
  var call329 = callmethod(var_o,"name", [0]);
  var call330 = callmethod(call329,"value", [0]);
  var call331 = callmethod(call330,"_escape", [0]);
  var var_nm = call331;
  lineNumber = 121
  lineNumber = 1
  lineNumber = 121
  lineNumber = 1
  lineNumber = 121
  var call332 = callmethod(var_o,"name", [0]);
  var call333 = callmethod(call332,"value", [0]);
  lineNumber = 122
  var call334 = callmethod(this,"escapeident", [1], call333);
  var var_nmi = call334;
  var string335 = new GraceString("  ");
  var opresult337 = callmethod(string335, "++", [1], var_selfr);
  var string338 = new GraceString(".data[\"");
  var opresult340 = callmethod(opresult337, "++", [1], string338);
  var opresult342 = callmethod(opresult340, "++", [1], var_nm);
  var string343 = new GraceString("\"] = ");
  var opresult345 = callmethod(opresult342, "++", [1], string343);
  var opresult347 = callmethod(opresult345, "++", [1], var_val);
  var string348 = new GraceString(";");
  var opresult350 = callmethod(opresult347, "++", [1], string348);
  lineNumber = 123
  var call351 = callmethod(this,"out", [1], opresult350);
  var string352 = new GraceString("    var reader_");
  var opresult354 = callmethod(string352, "++", [1], var_modname);
  var string355 = new GraceString("_");
  var opresult357 = callmethod(opresult354, "++", [1], string355);
  var opresult359 = callmethod(opresult357, "++", [1], var_nmi);
  var opresult361 = callmethod(opresult359, "++", [1], var_myc);
  var string362 = new GraceString(" = function() {");
  var opresult364 = callmethod(opresult361, "++", [1], string362);
  lineNumber = 124
  var call365 = callmethod(this,"out", [1], opresult364);
  var string366 = new GraceString("    return this.data[\"");
  var opresult368 = callmethod(string366, "++", [1], var_nm);
  var string369 = new GraceString("\"];");
  var opresult371 = callmethod(opresult368, "++", [1], string369);
  lineNumber = 125
  var call372 = callmethod(this,"out", [1], opresult371);
  var string373 = new GraceString("  }");
  lineNumber = 126
  var call374 = callmethod(this,"out", [1], string373);
  lineNumber = 127
  lineNumber = 126
  var string375 = new GraceString("  ");
  var opresult377 = callmethod(string375, "++", [1], var_selfr);
  var string378 = new GraceString(".methods[\"");
  var opresult380 = callmethod(opresult377, "++", [1], string378);
  var opresult382 = callmethod(opresult380, "++", [1], var_nm);
  var string383 = new GraceString("\"] = reader_");
  var opresult385 = callmethod(opresult382, "++", [1], string383);
  var opresult387 = callmethod(opresult385, "++", [1], var_modname);
  lineNumber = 127
  var string388 = new GraceString("_");
  var opresult390 = callmethod(opresult387, "++", [1], string388);
  var opresult392 = callmethod(opresult390, "++", [1], var_nmi);
  var opresult394 = callmethod(opresult392, "++", [1], var_myc);
  var string395 = new GraceString(";");
  var opresult397 = callmethod(opresult394, "++", [1], string395);
  lineNumber = 128
  var call398 = callmethod(this,"out", [1], opresult397);
  var string399 = new GraceString("  ");
  var opresult401 = callmethod(string399, "++", [1], var_selfr);
  var string402 = new GraceString(".data[\"");
  var opresult404 = callmethod(opresult401, "++", [1], string402);
  var opresult406 = callmethod(opresult404, "++", [1], var_nm);
  var string407 = new GraceString("\"] = ");
  var opresult409 = callmethod(opresult406, "++", [1], string407);
  var opresult411 = callmethod(opresult409, "++", [1], var_val);
  var string412 = new GraceString(";");
  var opresult414 = callmethod(opresult411, "++", [1], string412);
  lineNumber = 129
  var call415 = callmethod(this,"out", [1], opresult414);
  var string416 = new GraceString("  var writer_");
  var opresult418 = callmethod(string416, "++", [1], var_modname);
  var string419 = new GraceString("_");
  var opresult421 = callmethod(opresult418, "++", [1], string419);
  var opresult423 = callmethod(opresult421, "++", [1], var_nmi);
  var opresult425 = callmethod(opresult423, "++", [1], var_myc);
  var string426 = new GraceString(" = function(argcv, o) {");
  var opresult428 = callmethod(opresult425, "++", [1], string426);
  lineNumber = 130
  var call429 = callmethod(this,"out", [1], opresult428);
  var string430 = new GraceString("    this.data[\"");
  var opresult432 = callmethod(string430, "++", [1], var_nm);
  var string433 = new GraceString("\"] = o;");
  var opresult435 = callmethod(opresult432, "++", [1], string433);
  lineNumber = 131
  var call436 = callmethod(this,"out", [1], opresult435);
  var string437 = new GraceString("  }");
  lineNumber = 132
  var call438 = callmethod(this,"out", [1], string437);
  lineNumber = 133
  lineNumber = 132
  var string439 = new GraceString("  ");
  var opresult441 = callmethod(string439, "++", [1], var_selfr);
  var string442 = new GraceString(".methods[\"");
  var opresult444 = callmethod(opresult441, "++", [1], string442);
  var opresult446 = callmethod(opresult444, "++", [1], var_nm);
  var string447 = new GraceString(":=\"] = writer_");
  var opresult449 = callmethod(opresult446, "++", [1], string447);
  var opresult451 = callmethod(opresult449, "++", [1], var_modname);
  lineNumber = 133
  var string452 = new GraceString("_");
  var opresult454 = callmethod(opresult451, "++", [1], string452);
  var opresult456 = callmethod(opresult454, "++", [1], var_nmi);
  var opresult458 = callmethod(opresult456, "++", [1], var_myc);
  var string459 = new GraceString(";");
  var opresult461 = callmethod(opresult458, "++", [1], string459);
  lineNumber = 134
  var call462 = callmethod(this,"out", [1], opresult461);
  return call462
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjvardec"] = func318;
  lineNumber = 148
var func463 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 137
  lineNumber = 1
  lineNumber = 136
  var call464 = callmethod(var_o,"signature", [0]);
  var var_signature = call464;
  lineNumber = 137
  lineNumber = 1
  lineNumber = 137
  var call466 = callmethod(var_o,"value", [0]);
  lineNumber = 1
  lineNumber = 137
  var call467 = callmethod(var_o,"superclass", [0]);
  lineNumber = 1
  lineNumber = 137
  var call468 = callmethod(var_ast,"objectNode", [0]);
  var call469 = callmethod(call468,"new", [2], call466, call467);
  var array465 = new GraceList([
call469,
]);

  var var_mbody = array465;
  lineNumber = 139
  lineNumber = 138
  lineNumber = 1
  lineNumber = 138
  var call470 = callmethod(var_o,"constructor", [0]);
  lineNumber = 139
  var bool471 = new GraceBoolean(false)
  lineNumber = 140
  lineNumber = 1
  lineNumber = 138
  var call472 = callmethod(var_ast,"methodNode", [0]);
  var call473 = callmethod(call472,"new", [4], call470, var_signature, var_mbody, bool471);
  var var_newmeth = call473;
  lineNumber = 140
  var array474 = new GraceList([
var_newmeth,
]);

  var var_obody = array474;
  lineNumber = 141
  var bool475 = new GraceBoolean(false)
  lineNumber = 142
  lineNumber = 1
  lineNumber = 141
  var call476 = callmethod(var_ast,"objectNode", [0]);
  var call477 = callmethod(call476,"new", [2], var_obody, bool475);
  var var_cobj = call477;
  lineNumber = 142
  lineNumber = 1
  lineNumber = 142
  var call478 = callmethod(var_o,"name", [0]);
  var bool479 = new GraceBoolean(false)
  lineNumber = 143
  lineNumber = 1
  lineNumber = 142
  var call480 = callmethod(var_ast,"defDecNode", [0]);
  var call481 = callmethod(call480,"new", [3], call478, var_cobj, bool479);
  var var_con = call481;
  lineNumber = 146
  lineNumber = 143
  lineNumber = 148
  lineNumber = 143
  var opresult484 = callmethod(var_compilationDepth, "==", [1], new GraceNum(1));
  var block485 = Grace_allocObject();
  block485.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block485.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block485.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block485.receiver = this;
  block485.className = 'block<genjs:143>';
  block485.real = function(
) {
  lineNumber = 1
  lineNumber = 143
  lineNumber = 1
  lineNumber = 143
  var call486 = callmethod(var_o,"name", [0]);
  var call487 = callmethod(call486,"kind", [0]);
  var string488 = new GraceString("generic");
  var opresult490 = callmethod(call487, "!=", [1], string488);
  return opresult490;
};
  var opresult492 = callmethod(opresult484, "&&", [1], block485);
  if (Grace_isTrue(opresult492)) {
  lineNumber = 145
  lineNumber = 144
  lineNumber = 1
  lineNumber = 144
  var call493 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 144
  lineNumber = 1
  lineNumber = 144
  var call495 = callmethod(var_o,"name", [0]);
  var call496 = callmethod(call495,"value", [0]);
  lineNumber = 1
  lineNumber = 144
  var call497 = callmethod(var_ast,"signaturePart", [0]);
  var call498 = callmethod(call497,"new", [1], call496);
  var array494 = new GraceList([
call498,
]);

  lineNumber = 145
  lineNumber = 1
  lineNumber = 145
  var call500 = callmethod(var_o,"name", [0]);
  var array499 = new GraceList([
call500,
]);

  var bool501 = new GraceBoolean(false)
  lineNumber = 146
  lineNumber = 1
  lineNumber = 144
  var call502 = callmethod(var_ast,"methodNode", [0]);
  var call503 = callmethod(call502,"new", [4], call493, array494, array499, bool501);
  var var_meth = call503;
  lineNumber = 146
  lineNumber = 147
  var call504 = callmethod(this,"compilenode", [1], var_meth);
  var if482 = call504;
}
  lineNumber = 148
  lineNumber = 1
  lineNumber = 148
  lineNumber = 149
  var call505 = callmethod(this,"compilenode", [1], var_con);
  lineNumber = 148
  var call506 = callmethod(var_o,"register:=", [1], call505);
  return call506
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileclass"] = func463;
  lineNumber = 198
var func507 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_outerRef = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 152
  lineNumber = 151
  var var_origInBlock = var_inBlock;
  lineNumber = 153
  lineNumber = 152
  var bool508 = new GraceBoolean(false)
  var_inBlock = bool508;
  lineNumber = 154
  lineNumber = 153
  var var_myc = var_auto__95__count;
  lineNumber = 155
  lineNumber = 154
  var opresult510 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult510;
  lineNumber = 156
  lineNumber = 155
  var string511 = new GraceString("obj");
  var opresult513 = callmethod(string511, "++", [1], var_myc);
  var var_selfr = opresult513;
  lineNumber = 157
  lineNumber = 156
  var bool514 = new GraceBoolean(false)
  var var_superobj = bool514;
  lineNumber = 160
  lineNumber = 157
  lineNumber = 1
  lineNumber = 157
  var call515 = callmethod(var_o,"value", [0]);
  lineNumber = 160
  var block516 = Grace_allocObject();
  block516.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block516.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block516.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block516.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block516.receiver = this;
  block516.className = 'block<genjs:160>';
  block516.real = function(
var_e
) {
  lineNumber = 161
  lineNumber = 1
  lineNumber = 158
  var call518 = callmethod(var_e,"kind", [0]);
  var string519 = new GraceString("inherits");
  var opresult521 = callmethod(call518, "==", [1], string519);
  if (Grace_isTrue(opresult521)) {
  lineNumber = 160
  lineNumber = 1
  lineNumber = 159
  var call522 = callmethod(var_e,"value", [0]);
  var_superobj = call522;
  var if517 = call522;
}
  return if517;
};
  var call523 = callmethod(Grace_prelude,"for()do", [1, 1], call515, block516);
  lineNumber = 170
  lineNumber = 172
  lineNumber = 162
  var bool525 = new GraceBoolean(false)
  var opresult527 = callmethod(var_superobj, "/=", [1], bool525);
  if (Grace_isTrue(opresult527)) {
  lineNumber = 163
  lineNumber = 164
  var call528 = callmethod(this,"compilenode", [1], var_superobj);
  var var_sup = call528;
  var string529 = new GraceString("  var ");
  var opresult531 = callmethod(string529, "++", [1], var_selfr);
  var string532 = new GraceString(" = Grace_allocObject();");
  var opresult534 = callmethod(opresult531, "++", [1], string532);
  lineNumber = 165
  var call535 = callmethod(this,"out", [1], opresult534);
  var string536 = new GraceString("  ");
  var opresult538 = callmethod(string536, "++", [1], var_selfr);
  var string539 = new GraceString(".superobj = ");
  var opresult541 = callmethod(opresult538, "++", [1], string539);
  var opresult543 = callmethod(opresult541, "++", [1], var_sup);
  var string544 = new GraceString(";");
  var opresult546 = callmethod(opresult543, "++", [1], string544);
  lineNumber = 166
  var call547 = callmethod(this,"out", [1], opresult546);
  var string548 = new GraceString("  if (");
  var opresult550 = callmethod(string548, "++", [1], var_sup);
  var string551 = new GraceString(".data)");
  var opresult553 = callmethod(opresult550, "++", [1], string551);
  lineNumber = 167
  var call554 = callmethod(this,"out", [1], opresult553);
  var string555 = new GraceString("    ");
  var opresult557 = callmethod(string555, "++", [1], var_selfr);
  var string558 = new GraceString(".data = ");
  var opresult560 = callmethod(opresult557, "++", [1], string558);
  var opresult562 = callmethod(opresult560, "++", [1], var_sup);
  var string563 = new GraceString(".data;");
  var opresult565 = callmethod(opresult562, "++", [1], string563);
  lineNumber = 168
  var call566 = callmethod(this,"out", [1], opresult565);
  var string567 = new GraceString("  ");
  var opresult569 = callmethod(string567, "++", [1], var_selfr);
  var string570 = new GraceString("._value = ");
  var opresult572 = callmethod(opresult569, "++", [1], string570);
  var opresult574 = callmethod(opresult572, "++", [1], var_sup);
  var string575 = new GraceString("._value;");
  var opresult577 = callmethod(opresult574, "++", [1], string575);
  lineNumber = 169
  var call578 = callmethod(this,"out", [1], opresult577);
  var if524 = call578;
  } else {
  lineNumber = 170
  var string579 = new GraceString("  var ");
  var opresult581 = callmethod(string579, "++", [1], var_selfr);
  var string582 = new GraceString(" = Grace_allocObject();");
  var opresult584 = callmethod(opresult581, "++", [1], string582);
  lineNumber = 171
  var call585 = callmethod(this,"out", [1], opresult584);
  var if524 = call585;
}
  lineNumber = 172
  lineNumber = 173
  var call586 = callmethod(this,"compileobjouter", [2], var_selfr, var_outerRef);
  var string587 = new GraceString("function obj_init_");
  var opresult589 = callmethod(string587, "++", [1], var_myc);
  var string590 = new GraceString("() {");
  var opresult592 = callmethod(opresult589, "++", [1], string590);
  lineNumber = 174
  var call593 = callmethod(this,"out", [1], opresult592);
  var string594 = new GraceString("  var origSuperDepth = superDepth;");
  lineNumber = 175
  var call595 = callmethod(this,"out", [1], string594);
  var string596 = new GraceString("  superDepth = this;");
  lineNumber = 176
  var call597 = callmethod(this,"out", [1], string596);
  lineNumber = 177
  lineNumber = 176
  var var_pos = new GraceNum(0);
  lineNumber = 190
  lineNumber = 177
  lineNumber = 1
  lineNumber = 177
  var call598 = callmethod(var_o,"value", [0]);
  lineNumber = 190
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
  block599.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block599.receiver = this;
  block599.className = 'block<genjs:190>';
  block599.real = function(
var_e
) {
  lineNumber = 192
  lineNumber = 1
  lineNumber = 178
  var call601 = callmethod(var_e,"kind", [0]);
  var string602 = new GraceString("method");
  var opresult604 = callmethod(call601, "==", [1], string602);
  if (Grace_isTrue(opresult604)) {
  lineNumber = 179
  lineNumber = 180
  var call605 = callmethod(this,"compilemethod", [2], var_e, var_selfr);
  var if600 = call605;
  } else {
  lineNumber = 190
  lineNumber = 184
  lineNumber = 1
  lineNumber = 180
  var call607 = callmethod(var_e,"kind", [0]);
  var string608 = new GraceString("vardec");
  var opresult610 = callmethod(call607, "==", [1], string608);
  if (Grace_isTrue(opresult610)) {
  lineNumber = 181
  lineNumber = 182
  var call611 = callmethod(this,"compileobjvardec", [3], var_e, var_selfr, var_pos);
  var string612 = new GraceString("");
  var opresult614 = callmethod(string612, "++", [1], var_selfr);
  var string615 = new GraceString(".mutable = true;");
  var opresult617 = callmethod(opresult614, "++", [1], string615);
  lineNumber = 183
  var call618 = callmethod(this,"out", [1], opresult617);
  lineNumber = 184
  lineNumber = 183
  var opresult620 = callmethod(var_pos, "+", [1], new GraceNum(1));
  var_pos = opresult620;
  var if606 = opresult620;
  } else {
  lineNumber = 190
  lineNumber = 187
  lineNumber = 1
  lineNumber = 184
  var call622 = callmethod(var_e,"kind", [0]);
  var string623 = new GraceString("defdec");
  var opresult625 = callmethod(call622, "==", [1], string623);
  if (Grace_isTrue(opresult625)) {
  lineNumber = 185
  lineNumber = 186
  var call626 = callmethod(this,"compileobjdefdec", [3], var_e, var_selfr, var_pos);
  lineNumber = 187
  lineNumber = 186
  var opresult628 = callmethod(var_pos, "+", [1], new GraceNum(1));
  var_pos = opresult628;
  var if621 = opresult628;
  } else {
  lineNumber = 190
  lineNumber = 189
  lineNumber = 1
  lineNumber = 187
  var call630 = callmethod(var_e,"kind", [0]);
  var string631 = new GraceString("object");
  var opresult633 = callmethod(call630, "==", [1], string631);
  if (Grace_isTrue(opresult633)) {
  lineNumber = 188
  lineNumber = 189
  var call634 = callmethod(this,"compileobject", [2], var_e, var_selfr);
  var if629 = call634;
  } else {
  lineNumber = 190
  lineNumber = 191
  var call635 = callmethod(this,"compilenode", [1], var_e);
  var if629 = call635;
}
  var if621 = if629;
}
  var if606 = if621;
}
  var if600 = if606;
}
  return if600;
};
  var call636 = callmethod(Grace_prelude,"for()do", [1, 1], call598, block599);
  lineNumber = 193
  var string637 = new GraceString("  superDepth = origSuperDepth;");
  lineNumber = 194
  var call638 = callmethod(this,"out", [1], string637);
  var string639 = new GraceString("}");
  lineNumber = 195
  var call640 = callmethod(this,"out", [1], string639);
  var string641 = new GraceString("obj_init_");
  var opresult643 = callmethod(string641, "++", [1], var_myc);
  var string644 = new GraceString(".apply(");
  var opresult646 = callmethod(opresult643, "++", [1], string644);
  var opresult648 = callmethod(opresult646, "++", [1], var_selfr);
  var string649 = new GraceString(", []);");
  var opresult651 = callmethod(opresult648, "++", [1], string649);
  lineNumber = 196
  var call652 = callmethod(this,"out", [1], opresult651);
  lineNumber = 197
  lineNumber = 1
  lineNumber = 196
  var call653 = callmethod(var_o,"register:=", [1], var_selfr);
  lineNumber = 198
  lineNumber = 197
  var_inBlock = var_origInBlock;
  return var_origInBlock
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobject"] = func507;
  lineNumber = 256
var func654 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 201
  lineNumber = 200
  var var_origInBlock = var_inBlock;
  lineNumber = 202
  lineNumber = 201
  var bool655 = new GraceBoolean(true)
  var_inBlock = bool655;
  lineNumber = 203
  lineNumber = 202
  var var_myc = var_auto__95__count;
  lineNumber = 204
  lineNumber = 203
  var opresult657 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult657;
  lineNumber = 204
  var string658 = new GraceString("  var block");
  var opresult660 = callmethod(string658, "++", [1], var_myc);
  var string661 = new GraceString(" = Grace_allocObject();");
  var opresult663 = callmethod(opresult660, "++", [1], string661);
  lineNumber = 205
  var call664 = callmethod(this,"out", [1], opresult663);
  var string665 = new GraceString("  block");
  var opresult667 = callmethod(string665, "++", [1], var_myc);
  var string668 = new GraceString(".methods[\"apply\"] = function() {");
  var opresult670 = callmethod(opresult667, "++", [1], string668);
  lineNumber = 206
  var call671 = callmethod(this,"out", [1], opresult670);
  var string672 = new GraceString("    var args = Array.prototype.slice.call(arguments, 1);");
  lineNumber = 207
  var call673 = callmethod(this,"out", [1], string672);
  var string674 = new GraceString("    return this.real.apply(this.receiver, args);");
  lineNumber = 208
  var call675 = callmethod(this,"out", [1], string674);
  var string676 = new GraceString("  }");
  lineNumber = 209
  var call677 = callmethod(this,"out", [1], string676);
  var string678 = new GraceString("  block");
  var opresult680 = callmethod(string678, "++", [1], var_myc);
  var string681 = new GraceString(".methods[\"applyIndirectly\"] = function(argcv, a) {");
  var opresult683 = callmethod(opresult680, "++", [1], string681);
  lineNumber = 210
  var call684 = callmethod(this,"out", [1], opresult683);
  var string685 = new GraceString("    return this.real.apply(this.receiver, a._value);");
  lineNumber = 211
  var call686 = callmethod(this,"out", [1], string685);
  var string687 = new GraceString("  }");
  lineNumber = 212
  var call688 = callmethod(this,"out", [1], string687);
  var string689 = new GraceString("  block");
  var opresult691 = callmethod(string689, "++", [1], var_myc);
  var string692 = new GraceString(".methods[\"outer\"] = function() {");
  var opresult694 = callmethod(opresult691, "++", [1], string692);
  lineNumber = 213
  var call695 = callmethod(this,"out", [1], opresult694);
  var string696 = new GraceString("    return callmethod(this.receiver, 'outer', [0]);");
  lineNumber = 214
  var call697 = callmethod(this,"out", [1], string696);
  var string698 = new GraceString("  }");
  lineNumber = 215
  var call699 = callmethod(this,"out", [1], string698);
  lineNumber = 233
  lineNumber = 236
  lineNumber = 215
  var bool701 = new GraceBoolean(false)
  lineNumber = 236
  lineNumber = 1
  lineNumber = 215
  var call702 = callmethod(var_o,"matchingPattern", [0]);
  var opresult704 = callmethod(bool701, "!=", [1], call702);
  if (Grace_isTrue(opresult704)) {
  lineNumber = 216
  lineNumber = 1
  lineNumber = 216
  var call705 = callmethod(var_o,"matchingPattern", [0]);
  lineNumber = 217
  var call706 = callmethod(this,"compilenode", [1], call705);
  var var_pat = call706;
  var string707 = new GraceString("  block");
  var opresult709 = callmethod(string707, "++", [1], var_myc);
  var string710 = new GraceString(".pattern = ");
  var opresult712 = callmethod(opresult709, "++", [1], string710);
  var opresult714 = callmethod(opresult712, "++", [1], var_pat);
  var string715 = new GraceString(";");
  var opresult717 = callmethod(opresult714, "++", [1], string715);
  lineNumber = 218
  var call718 = callmethod(this,"out", [1], opresult717);
  var string719 = new GraceString("  block");
  var opresult721 = callmethod(string719, "++", [1], var_myc);
  var string722 = new GraceString(".methods[\"match\"] = function(argcv, o) {");
  var opresult724 = callmethod(opresult721, "++", [1], string722);
  lineNumber = 219
  var call725 = callmethod(this,"out", [1], opresult724);
  var string726 = new GraceString("    var match = callmethod(this.pattern, \"match\", [1], o);");
  lineNumber = 220
  var call727 = callmethod(this,"out", [1], string726);
  var string728 = new GraceString("    if (Grace_isTrue(match)) {");
  lineNumber = 221
  var call729 = callmethod(this,"out", [1], string728);
  var string730 = new GraceString("      var bindings = callmethod(match, \"bindings\", [0]);");
  lineNumber = 222
  var call731 = callmethod(this,"out", [1], string730);
  var string732 = new GraceString("      var rv = callmethod(this, \"applyIndirectly\", [1], bindings);");
  lineNumber = 223
  var call733 = callmethod(this,"out", [1], string732);
  var string734 = new GraceString("      return new GraceSuccessfulMatch(rv, []);");
  lineNumber = 224
  var call735 = callmethod(this,"out", [1], string734);
  var string736 = new GraceString("    }");
  lineNumber = 225
  var call737 = callmethod(this,"out", [1], string736);
  var string738 = new GraceString("    return new GraceFailedMatch(rv);");
  lineNumber = 226
  var call739 = callmethod(this,"out", [1], string738);
  var string740 = new GraceString("  }");
  lineNumber = 227
  var call741 = callmethod(this,"out", [1], string740);
  var if700 = call741;
  } else {
  lineNumber = 233
  lineNumber = 235
  lineNumber = 1
  lineNumber = 235
  lineNumber = 1
  lineNumber = 228
  var call743 = callmethod(var_o,"params", [0]);
  var call744 = callmethod(call743,"size", [0]);
  var opresult746 = callmethod(call744, "==", [1], new GraceNum(1));
  if (Grace_isTrue(opresult746)) {
  lineNumber = 229
  var string747 = new GraceString("  block");
  var opresult749 = callmethod(string747, "++", [1], var_myc);
  var string750 = new GraceString(".methods[\"match\"] = function(argcv, o) {");
  var opresult752 = callmethod(opresult749, "++", [1], string750);
  lineNumber = 230
  var call753 = callmethod(this,"out", [1], opresult752);
  var string754 = new GraceString("    var args = Array.prototype.slice.call(arguments, 1);");
  lineNumber = 231
  var call755 = callmethod(this,"out", [1], string754);
  var string756 = new GraceString("    var r = this.real.apply(this.receiver, args);");
  lineNumber = 232
  var call757 = callmethod(this,"out", [1], string756);
  var string758 = new GraceString("    return new GraceSuccessfulMatch(r, []);");
  lineNumber = 233
  var call759 = callmethod(this,"out", [1], string758);
  var string760 = new GraceString("  }");
  lineNumber = 234
  var call761 = callmethod(this,"out", [1], string760);
  var if742 = call761;
}
  var if700 = if742;
}
  lineNumber = 236
  var string762 = new GraceString("  block");
  var opresult764 = callmethod(string762, "++", [1], var_myc);
  var string765 = new GraceString(".receiver = this;");
  var opresult767 = callmethod(opresult764, "++", [1], string765);
  lineNumber = 237
  var call768 = callmethod(this,"out", [1], opresult767);
  var string769 = new GraceString("  block");
  var opresult771 = callmethod(string769, "++", [1], var_myc);
  var string772 = new GraceString(".className = 'block<");
  var opresult774 = callmethod(opresult771, "++", [1], string772);
  var opresult776 = callmethod(opresult774, "++", [1], var_modname);
  var string777 = new GraceString(":");
  var opresult779 = callmethod(opresult776, "++", [1], string777);
  lineNumber = 1
  lineNumber = 237
  var call780 = callmethod(var_o,"line", [0]);
  var opresult782 = callmethod(opresult779, "++", [1], call780);
  var string783 = new GraceString(">';");
  var opresult785 = callmethod(opresult782, "++", [1], string783);
  lineNumber = 238
  var call786 = callmethod(this,"out", [1], opresult785);
  var string787 = new GraceString("  block");
  var opresult789 = callmethod(string787, "++", [1], var_myc);
  var string790 = new GraceString(".real = function(");
  var opresult792 = callmethod(opresult789, "++", [1], string790);
  lineNumber = 239
  var call793 = callmethod(this,"out", [1], opresult792);
  lineNumber = 240
  lineNumber = 239
  var bool794 = new GraceBoolean(true)
  var var_first = bool794;
  lineNumber = 245
  lineNumber = 240
  lineNumber = 1
  lineNumber = 240
  var call795 = callmethod(var_o,"params", [0]);
  lineNumber = 245
  var block796 = Grace_allocObject();
  block796.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block796.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block796.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block796.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block796.receiver = this;
  block796.className = 'block<genjs:245>';
  block796.real = function(
var_p
) {
  lineNumber = 242
  lineNumber = 244
  lineNumber = 1
  lineNumber = 241
  var call798 = callmethod(var_first,"not", [0]);
  if (Grace_isTrue(call798)) {
  lineNumber = 242
  var string799 = new GraceString(",");
  lineNumber = 243
  var call800 = callmethod(this,"out", [1], string799);
  var if797 = call800;
}
  lineNumber = 245
  lineNumber = 244
  var bool801 = new GraceBoolean(false)
  var_first = bool801;
  lineNumber = 245
  lineNumber = 1
  lineNumber = 245
  var call802 = callmethod(var_p,"value", [0]);
  var call803 = callmethod(this,"varf", [1], call802);
  lineNumber = 246
  var call804 = callmethod(this,"out", [1], call803);
  return call804;
};
  var call805 = callmethod(Grace_prelude,"for()do", [1, 1], call795, block796);
  lineNumber = 247
  var string806 = new GraceString(") {");
  lineNumber = 248
  var call807 = callmethod(this,"out", [1], string806);
  lineNumber = 249
  lineNumber = 248
  var string808 = new GraceString("undefined");
  var var_ret = string808;
  lineNumber = 250
  lineNumber = 249
  lineNumber = 1
  lineNumber = 249
  var call809 = callmethod(var_o,"body", [0]);
  lineNumber = 250
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
  block810.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block810.receiver = this;
  block810.className = 'block<genjs:250>';
  block810.real = function(
var_l
) {
  lineNumber = 251
  var call811 = callmethod(this,"compilenode", [1], var_l);
  var_ret = call811;
  return call811;
};
  var call812 = callmethod(Grace_prelude,"for()do", [1, 1], call809, block810);
  lineNumber = 252
  var string813 = new GraceString("  return ");
  var opresult815 = callmethod(string813, "++", [1], var_ret);
  var string816 = new GraceString(";");
  var opresult818 = callmethod(opresult815, "++", [1], string816);
  lineNumber = 253
  var call819 = callmethod(this,"out", [1], opresult818);
  var string820 = new GraceString("};");
  lineNumber = 254
  var call821 = callmethod(this,"out", [1], string820);
  lineNumber = 255
  lineNumber = 1
  lineNumber = 255
  lineNumber = 254
  var string822 = new GraceString("block");
  var opresult824 = callmethod(string822, "++", [1], var_myc);
  var call825 = callmethod(var_o,"register:=", [1], opresult824);
  lineNumber = 256
  lineNumber = 255
  var_inBlock = var_origInBlock;
  return var_origInBlock
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileblock"] = func654;
  lineNumber = 268
var func826 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 259
  lineNumber = 258
  var var_myc = var_auto__95__count;
  lineNumber = 260
  lineNumber = 259
  var opresult828 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult828;
  lineNumber = 260
  lineNumber = 1
  lineNumber = 260
  lineNumber = 1
  lineNumber = 260
  var call829 = callmethod(var_o,"value", [0]);
  var call830 = callmethod(call829,"_escape", [0]);
  var var_escName = call830;
  lineNumber = 261
  lineNumber = 1
  lineNumber = 261
  var call831 = callmethod(var_o,"value", [0]);
  lineNumber = 262
  var call832 = callmethod(this,"escapeident", [1], call831);
  var var_idName = call832;
  var string833 = new GraceString("var var_");
  var opresult835 = callmethod(string833, "++", [1], var_idName);
  var string836 = new GraceString(" = new GraceType(\"");
  var opresult838 = callmethod(opresult835, "++", [1], string836);
  var opresult840 = callmethod(opresult838, "++", [1], var_escName);
  var string841 = new GraceString("\");");
  var opresult843 = callmethod(opresult840, "++", [1], string841);
  lineNumber = 263
  var call844 = callmethod(this,"out", [1], opresult843);
  lineNumber = 265
  lineNumber = 263
  lineNumber = 1
  lineNumber = 263
  var call845 = callmethod(var_o,"methods", [0]);
  lineNumber = 265
  var block846 = Grace_allocObject();
  block846.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block846.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block846.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block846.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block846.receiver = this;
  block846.className = 'block<genjs:265>';
  block846.real = function(
var_meth
) {
  lineNumber = 264
  lineNumber = 1
  lineNumber = 264
  lineNumber = 1
  lineNumber = 264
  var call847 = callmethod(var_meth,"value", [0]);
  var call848 = callmethod(call847,"_escape", [0]);
  var var_mnm = call848;
  lineNumber = 265
  var string849 = new GraceString("var_");
  var opresult851 = callmethod(string849, "++", [1], var_idName);
  var string852 = new GraceString(".typeMethods.push(\"");
  var opresult854 = callmethod(opresult851, "++", [1], string852);
  var opresult856 = callmethod(opresult854, "++", [1], var_mnm);
  var string857 = new GraceString("\");");
  var opresult859 = callmethod(opresult856, "++", [1], string857);
  lineNumber = 266
  var call860 = callmethod(this,"out", [1], opresult859);
  return call860;
};
  var call861 = callmethod(Grace_prelude,"for()do", [1, 1], call845, block846);
  lineNumber = 268
  lineNumber = 1
  lineNumber = 267
  var string862 = new GraceString("none");
  var call863 = callmethod(var_o,"register:=", [1], string862);
  return call863
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compiletype"] = func826;
  lineNumber = 285
var func864 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 271
  lineNumber = 270
  var var_myc = var_auto__95__count;
  lineNumber = 272
  lineNumber = 271
  var opresult866 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult866;
  lineNumber = 272
  lineNumber = 1
  lineNumber = 272
  var call867 = callmethod(var_o,"value", [0]);
  lineNumber = 273
  var call868 = callmethod(this,"compilenode", [1], call867);
  var var_over = call868;
  lineNumber = 274
  lineNumber = 1
  lineNumber = 273
  var call869 = callmethod(var_o,"body", [0]);
  var var_blk = call869;
  lineNumber = 274
  lineNumber = 275
  var call870 = callmethod(this,"compilenode", [1], var_blk);
  var var_blko = call870;
  lineNumber = 276
  lineNumber = 275
  var string871 = new GraceString("  var it");
  var opresult873 = callmethod(string871, "++", [1], var_myc);
  var string874 = new GraceString(" = ");
  var opresult876 = callmethod(opresult873, "++", [1], string874);
  var opresult878 = callmethod(opresult876, "++", [1], var_over);
  var string879 = new GraceString(".methods[\"iterator\"].call(");
  var opresult881 = callmethod(opresult878, "++", [1], string879);
  lineNumber = 276
  var opresult883 = callmethod(opresult881, "++", [1], var_over);
  var string884 = new GraceString(", [0]);");
  var opresult886 = callmethod(opresult883, "++", [1], string884);
  lineNumber = 277
  var call887 = callmethod(this,"out", [1], opresult886);
  lineNumber = 278
  lineNumber = 277
  var string888 = new GraceString("while (Grace_isTrue(it");
  var opresult890 = callmethod(string888, "++", [1], var_myc);
  var string891 = new GraceString(".methods[\"havemore\"].call(");
  var opresult893 = callmethod(opresult890, "++", [1], string891);
  lineNumber = 278
  var string894 = new GraceString("it");
  var opresult896 = callmethod(opresult893, "++", [1], string894);
  var opresult898 = callmethod(opresult896, "++", [1], var_myc);
  var string899 = new GraceString(", [0]))) {");
  var opresult901 = callmethod(opresult898, "++", [1], string899);
  lineNumber = 279
  var call902 = callmethod(this,"out", [1], opresult901);
  lineNumber = 280
  lineNumber = 279
  var string903 = new GraceString("    var fv");
  var opresult905 = callmethod(string903, "++", [1], var_myc);
  var string906 = new GraceString(" = it");
  var opresult908 = callmethod(opresult905, "++", [1], string906);
  var opresult910 = callmethod(opresult908, "++", [1], var_myc);
  var string911 = new GraceString(".methods[\"next\"].call(");
  var opresult913 = callmethod(opresult910, "++", [1], string911);
  lineNumber = 280
  var string914 = new GraceString("it");
  var opresult916 = callmethod(opresult913, "++", [1], string914);
  var opresult918 = callmethod(opresult916, "++", [1], var_myc);
  var string919 = new GraceString(", [0]);");
  var opresult921 = callmethod(opresult918, "++", [1], string919);
  lineNumber = 281
  var call922 = callmethod(this,"out", [1], opresult921);
  lineNumber = 282
  lineNumber = 281
  var string923 = new GraceString("    ");
  var opresult925 = callmethod(string923, "++", [1], var_blko);
  var string926 = new GraceString(".methods[\"apply\"].call(");
  var opresult928 = callmethod(opresult925, "++", [1], string926);
  lineNumber = 282
  var opresult930 = callmethod(opresult928, "++", [1], var_blko);
  var string931 = new GraceString(", [1], fv");
  var opresult933 = callmethod(opresult930, "++", [1], string931);
  var opresult935 = callmethod(opresult933, "++", [1], var_myc);
  var string936 = new GraceString(");");
  var opresult938 = callmethod(opresult935, "++", [1], string936);
  lineNumber = 283
  var call939 = callmethod(this,"out", [1], opresult938);
  var string940 = new GraceString("  }");
  lineNumber = 284
  var call941 = callmethod(this,"out", [1], string940);
  lineNumber = 285
  lineNumber = 1
  lineNumber = 284
  var call942 = callmethod(var_o,"register:=", [1], var_over);
  return call942
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilefor"] = func864;
  lineNumber = 344
var func943 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_selfobj = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 288
  lineNumber = 287
  var var_oldusedvars = var_usedvars;
  lineNumber = 289
  lineNumber = 288
  var var_olddeclaredvars = var_declaredvars;
  lineNumber = 290
  var array944 = new GraceList([
]);

  var_usedvars = array944;
  lineNumber = 291
  var array945 = new GraceList([
]);

  var_declaredvars = array945;
  lineNumber = 292
  lineNumber = 291
  var var_myc = var_auto__95__count;
  lineNumber = 293
  lineNumber = 292
  var opresult947 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult947;
  lineNumber = 293
  lineNumber = 1
  lineNumber = 293
  lineNumber = 1
  lineNumber = 293
  lineNumber = 1
  lineNumber = 293
  var call948 = callmethod(var_o,"value", [0]);
  var call949 = callmethod(call948,"value", [0]);
  var call950 = callmethod(call949,"_escape", [0]);
  var var_name = call950;
  lineNumber = 295
  lineNumber = 294
  var opresult952 = callmethod(var_name, "++", [1], var_myc);
  var var_nm = opresult952;
  lineNumber = 296
  var array953 = new GraceList([
]);

  var var_closurevars = array953;
  lineNumber = 297
  lineNumber = 296
  var bool954 = new GraceBoolean(false)
  var var_haveTypedParams = bool954;
  lineNumber = 304
  lineNumber = 297
  lineNumber = 1
  lineNumber = 297
  var call955 = callmethod(var_o,"signature", [0]);
  lineNumber = 304
  var block956 = Grace_allocObject();
  block956.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block956.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block956.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block956.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block956.receiver = this;
  block956.className = 'block<genjs:304>';
  block956.real = function(
var_part
) {
  lineNumber = 298
  lineNumber = 1
  lineNumber = 298
  var call957 = callmethod(var_part,"params", [0]);
  lineNumber = 304
  var block958 = Grace_allocObject();
  block958.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block958.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block958.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block958.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block958.receiver = this;
  block958.className = 'block<genjs:304>';
  block958.real = function(
var_p
) {
  lineNumber = 306
  lineNumber = 1
  lineNumber = 299
  var call960 = callmethod(var_p,"dtype", [0]);
  var bool961 = new GraceBoolean(false)
  var opresult963 = callmethod(call960, "!=", [1], bool961);
  if (Grace_isTrue(opresult963)) {
  lineNumber = 304
  lineNumber = 305
  lineNumber = 1
  lineNumber = 305
  lineNumber = 1
  lineNumber = 300
  var call965 = callmethod(var_p,"dtype", [0]);
  var call966 = callmethod(call965,"value", [0]);
  var string967 = new GraceString("Dynamic");
  var opresult969 = callmethod(call966, "!=", [1], string967);
  lineNumber = 305
  lineNumber = 1
  lineNumber = 305
  lineNumber = 1
  lineNumber = 301
  var call970 = callmethod(var_p,"dtype", [0]);
  var call971 = callmethod(call970,"kind", [0]);
  var string972 = new GraceString("identifier");
  var opresult974 = callmethod(call971, "==", [1], string972);
  lineNumber = 305
  lineNumber = 1
  lineNumber = 305
  lineNumber = 1
  lineNumber = 302
  var call975 = callmethod(var_p,"dtype", [0]);
  var call976 = callmethod(call975,"kind", [0]);
  var string977 = new GraceString("type");
  var opresult979 = callmethod(call976, "==", [1], string977);
  var opresult981 = callmethod(opresult974, "||", [1], opresult979);
  var opresult983 = callmethod(opresult969, "&&", [1], opresult981);
  if (Grace_isTrue(opresult983)) {
  lineNumber = 304
  lineNumber = 303
  var bool984 = new GraceBoolean(true)
  var_haveTypedParams = bool984;
  var if964 = bool984;
}
  var if959 = if964;
}
  return if959;
};
  var call985 = callmethod(Grace_prelude,"for()do", [1, 1], call957, block958);
  return call985;
};
  var call986 = callmethod(Grace_prelude,"for()do", [1, 1], call955, block956);
  lineNumber = 308
  var string987 = new GraceString("var func");
  var opresult989 = callmethod(string987, "++", [1], var_myc);
  var string990 = new GraceString(" = function(argcv) {");
  var opresult992 = callmethod(opresult989, "++", [1], string990);
  lineNumber = 309
  var call993 = callmethod(this,"out", [1], opresult992);
  var string994 = new GraceString("  var curarg = 1;");
  lineNumber = 310
  var call995 = callmethod(this,"out", [1], string994);
  lineNumber = 320
  lineNumber = 310
  lineNumber = 1
  lineNumber = 310
  lineNumber = 1
  lineNumber = 310
  var call996 = callmethod(var_o,"signature", [0]);
  var call997 = callmethod(call996,"indices", [0]);
  lineNumber = 320
  var block998 = Grace_allocObject();
  block998.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block998.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block998.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block998.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block998.receiver = this;
  block998.className = 'block<genjs:320>';
  block998.real = function(
var_partnr
) {
  lineNumber = 312
  lineNumber = 1
  lineNumber = 311
  var call999 = callmethod(var_o,"signature", [0]);
  var idxres1000 = call999.methods["[]"].call(call999, [1], var_partnr);
  var var_part = idxres1000;
  lineNumber = 314
  lineNumber = 312
  lineNumber = 1
  lineNumber = 312
  var call1001 = callmethod(var_part,"params", [0]);
  lineNumber = 314
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
  block1002.className = 'block<genjs:314>';
  block1002.real = function(
var_p
) {
  lineNumber = 313
  var string1003 = new GraceString("  var ");
  lineNumber = 1
  lineNumber = 313
  var call1004 = callmethod(var_p,"value", [0]);
  var call1005 = callmethod(this,"varf", [1], call1004);
  var opresult1007 = callmethod(string1003, "++", [1], call1005);
  var string1008 = new GraceString(" = arguments[curarg];");
  var opresult1010 = callmethod(opresult1007, "++", [1], string1008);
  lineNumber = 314
  var call1011 = callmethod(this,"out", [1], opresult1010);
  var string1012 = new GraceString("  curarg++;");
  lineNumber = 315
  var call1013 = callmethod(this,"out", [1], string1012);
  return call1013;
};
  var call1014 = callmethod(Grace_prelude,"for()do", [1, 1], call1001, block1002);
  lineNumber = 320
  lineNumber = 322
  lineNumber = 1
  lineNumber = 316
  var call1016 = callmethod(var_part,"vararg", [0]);
  var bool1017 = new GraceBoolean(false)
  var opresult1019 = callmethod(call1016, "!=", [1], bool1017);
  if (Grace_isTrue(opresult1019)) {
  lineNumber = 317
  var string1020 = new GraceString("  var ");
  lineNumber = 1
  lineNumber = 317
  lineNumber = 1
  lineNumber = 317
  var call1021 = callmethod(var_part,"vararg", [0]);
  var call1022 = callmethod(call1021,"value", [0]);
  lineNumber = 319
  var call1023 = callmethod(this,"varf", [1], call1022);
  var opresult1025 = callmethod(string1020, "++", [1], call1023);
  lineNumber = 317
  var string1026 = new GraceString(" = new GraceList(");
  var opresult1028 = callmethod(opresult1025, "++", [1], string1026);
  lineNumber = 318
  var string1029 = new GraceString("Array.prototype.slice.call(arguments, curarg, ");
  var opresult1031 = callmethod(opresult1028, "++", [1], string1029);
  lineNumber = 317
  lineNumber = 319
  var string1032 = new GraceString("curarg + argcv[");
  lineNumber = 317
  lineNumber = 319
  var diff1034 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult1036 = callmethod(string1032, "++", [1], diff1034);
  var string1037 = new GraceString("] - ");
  var opresult1039 = callmethod(opresult1036, "++", [1], string1037);
  lineNumber = 317
  lineNumber = 1
  lineNumber = 317
  lineNumber = 1
  lineNumber = 319
  var call1040 = callmethod(var_part,"params", [0]);
  var call1041 = callmethod(call1040,"size", [0]);
  var opresult1043 = callmethod(opresult1039, "++", [1], call1041);
  var string1044 = new GraceString("));");
  var opresult1046 = callmethod(opresult1043, "++", [1], string1044);
  var opresult1048 = callmethod(opresult1031, "++", [1], opresult1046);
  lineNumber = 320
  var call1049 = callmethod(this,"out", [1], opresult1048);
  var string1050 = new GraceString("  curarg += argcv[");
  var diff1052 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult1054 = callmethod(string1050, "++", [1], diff1052);
  var string1055 = new GraceString("] - ");
  var opresult1057 = callmethod(opresult1054, "++", [1], string1055);
  lineNumber = 1
  lineNumber = 320
  lineNumber = 1
  lineNumber = 320
  var call1058 = callmethod(var_part,"params", [0]);
  var call1059 = callmethod(call1058,"size", [0]);
  var opresult1061 = callmethod(opresult1057, "++", [1], call1059);
  var string1062 = new GraceString(";");
  var opresult1064 = callmethod(opresult1061, "++", [1], string1062);
  lineNumber = 321
  var call1065 = callmethod(this,"out", [1], opresult1064);
  var if1015 = call1065;
}
  return if1015;
};
  var call1066 = callmethod(Grace_prelude,"for()do", [1, 1], call997, block998);
  lineNumber = 323
  var string1067 = new GraceString("  var returnTarget = invocationCount;");
  lineNumber = 324
  var call1068 = callmethod(this,"out", [1], string1067);
  var string1069 = new GraceString("  invocationCount++;");
  lineNumber = 325
  var call1070 = callmethod(this,"out", [1], string1069);
  var string1071 = new GraceString("  try {");
  lineNumber = 326
  var call1072 = callmethod(this,"out", [1], string1071);
  lineNumber = 327
  lineNumber = 326
  var string1073 = new GraceString("undefined");
  var var_ret = string1073;
  lineNumber = 328
  lineNumber = 327
  lineNumber = 1
  lineNumber = 327
  var call1074 = callmethod(var_o,"body", [0]);
  lineNumber = 328
  var block1075 = Grace_allocObject();
  block1075.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1075.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1075.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1075.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1075.receiver = this;
  block1075.className = 'block<genjs:328>';
  block1075.real = function(
var_l
) {
  lineNumber = 329
  var call1076 = callmethod(this,"compilenode", [1], var_l);
  var_ret = call1076;
  return call1076;
};
  var call1077 = callmethod(Grace_prelude,"for()do", [1, 1], call1074, block1075);
  lineNumber = 330
  var string1078 = new GraceString("  return ");
  var opresult1080 = callmethod(string1078, "++", [1], var_ret);
  lineNumber = 331
  var call1081 = callmethod(this,"out", [1], opresult1080);
  var string1082 = new GraceString("  } catch(e) {");
  lineNumber = 332
  var call1083 = callmethod(this,"out", [1], string1082);
  var string1084 = new GraceString("    if ((e.exctype == 'return') && (e.target == returnTarget)) {");
  lineNumber = 333
  var call1085 = callmethod(this,"out", [1], string1084);
  var string1086 = new GraceString("      return e.returnvalue;");
  lineNumber = 334
  var call1087 = callmethod(this,"out", [1], string1086);
  var string1088 = new GraceString("    } else {");
  lineNumber = 335
  var call1089 = callmethod(this,"out", [1], string1088);
  var string1090 = new GraceString("      throw e;");
  lineNumber = 336
  var call1091 = callmethod(this,"out", [1], string1090);
  var string1092 = new GraceString("    }");
  lineNumber = 337
  var call1093 = callmethod(this,"out", [1], string1092);
  var string1094 = new GraceString("  }");
  lineNumber = 338
  var call1095 = callmethod(this,"out", [1], string1094);
  var string1096 = new GraceString("}");
  lineNumber = 339
  var call1097 = callmethod(this,"out", [1], string1096);
  lineNumber = 340
  lineNumber = 339
  var_usedvars = var_oldusedvars;
  lineNumber = 341
  lineNumber = 340
  var_declaredvars = var_olddeclaredvars;
  lineNumber = 342
  lineNumber = 341
  if (Grace_isTrue(var_haveTypedParams)) {
  lineNumber = 342
  var string1099 = new GraceString("func");
  var opresult1101 = callmethod(string1099, "++", [1], var_myc);
  var string1102 = new GraceString("");
  var opresult1104 = callmethod(opresult1101, "++", [1], string1102);
  lineNumber = 343
  var call1105 = callmethod(this,"compilemethodtypes", [2], opresult1104, var_o);
  var if1098 = call1105;
}
  lineNumber = 344
  var string1106 = new GraceString("  ");
  var opresult1108 = callmethod(string1106, "++", [1], var_selfobj);
  var string1109 = new GraceString(".methods[\"");
  var opresult1111 = callmethod(opresult1108, "++", [1], string1109);
  var opresult1113 = callmethod(opresult1111, "++", [1], var_name);
  var string1114 = new GraceString("\"] = func");
  var opresult1116 = callmethod(opresult1113, "++", [1], string1114);
  var opresult1118 = callmethod(opresult1116, "++", [1], var_myc);
  var string1119 = new GraceString(";");
  var opresult1121 = callmethod(opresult1118, "++", [1], string1119);
  lineNumber = 345
  var call1122 = callmethod(this,"out", [1], opresult1121);
  return call1122
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilemethod"] = func943;
  lineNumber = 370
var func1123 = function(argcv) {
  var curarg = 1;
  var var_func = arguments[curarg];
  curarg++;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 347
  var string1124 = new GraceString("");
  var opresult1126 = callmethod(string1124, "++", [1], var_func);
  var string1127 = new GraceString(".paramTypes = [];");
  var opresult1129 = callmethod(opresult1126, "++", [1], string1127);
  lineNumber = 348
  var call1130 = callmethod(this,"out", [1], opresult1129);
  lineNumber = 349
  lineNumber = 348
  var var_pi = new GraceNum(0);
  lineNumber = 370
  lineNumber = 349
  lineNumber = 1
  lineNumber = 349
  var call1131 = callmethod(var_o,"signature", [0]);
  lineNumber = 370
  var block1132 = Grace_allocObject();
  block1132.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1132.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1132.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1132.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1132.receiver = this;
  block1132.className = 'block<genjs:370>';
  block1132.real = function(
var_part
) {
  lineNumber = 350
  lineNumber = 1
  lineNumber = 350
  var call1133 = callmethod(var_part,"params", [0]);
  lineNumber = 370
  var block1134 = Grace_allocObject();
  block1134.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1134.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1134.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1134.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1134.receiver = this;
  block1134.className = 'block<genjs:370>';
  block1134.real = function(
var_p
) {
  lineNumber = 367
  lineNumber = 369
  lineNumber = 353
  var bool1136 = new GraceBoolean(false)
  lineNumber = 369
  lineNumber = 1
  lineNumber = 353
  var call1137 = callmethod(var_p,"dtype", [0]);
  var opresult1139 = callmethod(bool1136, "!=", [1], call1137);
  if (Grace_isTrue(opresult1139)) {
  lineNumber = 364
  lineNumber = 366
  lineNumber = 1
  lineNumber = 366
  lineNumber = 1
  lineNumber = 354
  var call1141 = callmethod(var_p,"dtype", [0]);
  var call1142 = callmethod(call1141,"kind", [0]);
  var string1143 = new GraceString("identifier");
  var opresult1145 = callmethod(call1142, "==", [1], string1143);
  lineNumber = 366
  lineNumber = 1
  lineNumber = 366
  lineNumber = 1
  lineNumber = 355
  var call1146 = callmethod(var_p,"dtype", [0]);
  var call1147 = callmethod(call1146,"kind", [0]);
  var string1148 = new GraceString("type");
  var opresult1150 = callmethod(call1147, "==", [1], string1148);
  var opresult1152 = callmethod(opresult1145, "||", [1], opresult1150);
  if (Grace_isTrue(opresult1152)) {
  lineNumber = 356
  lineNumber = 1
  lineNumber = 356
  lineNumber = 1
  lineNumber = 356
  var call1153 = callmethod(var_p,"dtype", [0]);
  var call1154 = callmethod(call1153,"value", [0]);
  lineNumber = 357
  var call1155 = callmethod(this,"escapeident", [1], call1154);
  var var_typeid = call1155;
  lineNumber = 361
  lineNumber = 357
  var call1157 = callmethod(var_topLevelTypes,"contains", [1], var_typeid);
  if (Grace_isTrue(call1157)) {
  lineNumber = 359
  lineNumber = 358
  var string1158 = new GraceString("");
  var opresult1160 = callmethod(string1158, "++", [1], var_func);
  var string1161 = new GraceString(".paramTypes.push([");
  var opresult1163 = callmethod(opresult1160, "++", [1], string1161);
  lineNumber = 359
  var string1164 = new GraceString("type_");
  var opresult1166 = callmethod(string1164, "++", [1], var_typeid);
  var string1167 = new GraceString(", \"");
  var opresult1169 = callmethod(opresult1166, "++", [1], string1167);
  lineNumber = 1
  lineNumber = 359
  lineNumber = 1
  lineNumber = 359
  var call1170 = callmethod(var_p,"value", [0]);
  var call1171 = callmethod(call1170,"_escape", [0]);
  var opresult1173 = callmethod(opresult1169, "++", [1], call1171);
  var string1174 = new GraceString("\"]);");
  var opresult1176 = callmethod(opresult1173, "++", [1], string1174);
  var opresult1178 = callmethod(opresult1163, "++", [1], opresult1176);
  lineNumber = 360
  var call1179 = callmethod(this,"out", [1], opresult1178);
  var if1156 = call1179;
  } else {
  lineNumber = 361
  var string1180 = new GraceString("");
  var opresult1182 = callmethod(string1180, "++", [1], var_func);
  var string1183 = new GraceString(".paramTypes.push([]);");
  var opresult1185 = callmethod(opresult1182, "++", [1], string1183);
  lineNumber = 362
  var call1186 = callmethod(this,"out", [1], opresult1185);
  var if1156 = call1186;
}
  var if1140 = if1156;
  } else {
  lineNumber = 364
  var string1187 = new GraceString("");
  var opresult1189 = callmethod(string1187, "++", [1], var_func);
  var string1190 = new GraceString(".paramTypes.push([]);");
  var opresult1192 = callmethod(opresult1189, "++", [1], string1190);
  lineNumber = 365
  var call1193 = callmethod(this,"out", [1], opresult1192);
  var if1140 = call1193;
}
  var if1135 = if1140;
  } else {
  lineNumber = 367
  var string1194 = new GraceString("");
  var opresult1196 = callmethod(string1194, "++", [1], var_func);
  var string1197 = new GraceString(".paramTypes.push([]);");
  var opresult1199 = callmethod(opresult1196, "++", [1], string1197);
  lineNumber = 368
  var call1200 = callmethod(this,"out", [1], opresult1199);
  var if1135 = call1200;
}
  lineNumber = 370
  lineNumber = 369
  var opresult1202 = callmethod(var_pi, "+", [1], new GraceNum(1));
  var_pi = opresult1202;
  return opresult1202;
};
  var call1203 = callmethod(Grace_prelude,"for()do", [1, 1], call1133, block1134);
  return call1203;
};
  var call1204 = callmethod(Grace_prelude,"for()do", [1, 1], call1131, block1132);
  return call1204
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilemethodtypes"] = func1123;
  lineNumber = 387
var func1205 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 375
  lineNumber = 374
  var var_myc = var_auto__95__count;
  lineNumber = 376
  lineNumber = 375
  var opresult1207 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1207;
  lineNumber = 376
  lineNumber = 1
  lineNumber = 376
  var call1208 = callmethod(var_o,"value", [0]);
  lineNumber = 377
  var call1209 = callmethod(this,"compilenode", [1], call1208);
  var var_cond = call1209;
  var string1210 = new GraceString("  var wcond");
  var opresult1212 = callmethod(string1210, "++", [1], var_myc);
  var string1213 = new GraceString(" = Grace_isTrue(");
  var opresult1215 = callmethod(opresult1212, "++", [1], string1213);
  var opresult1217 = callmethod(opresult1215, "++", [1], var_cond);
  var string1218 = new GraceString(");");
  var opresult1220 = callmethod(opresult1217, "++", [1], string1218);
  lineNumber = 378
  var call1221 = callmethod(this,"out", [1], opresult1220);
  var string1222 = new GraceString("  while (wcond");
  var opresult1224 = callmethod(string1222, "++", [1], var_myc);
  var string1225 = new GraceString(") {");
  var opresult1227 = callmethod(opresult1224, "++", [1], string1225);
  lineNumber = 379
  var call1228 = callmethod(this,"out", [1], opresult1227);
  lineNumber = 380
  lineNumber = 379
  var string1229 = new GraceString("null");
  var var_tret = string1229;
  lineNumber = 381
  lineNumber = 380
  lineNumber = 1
  lineNumber = 380
  var call1230 = callmethod(var_o,"body", [0]);
  lineNumber = 381
  var block1231 = Grace_allocObject();
  block1231.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1231.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1231.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1231.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1231.receiver = this;
  block1231.className = 'block<genjs:381>';
  block1231.real = function(
var_l
) {
  lineNumber = 382
  var call1232 = callmethod(this,"compilenode", [1], var_l);
  var_tret = call1232;
  return call1232;
};
  var call1233 = callmethod(Grace_prelude,"for()do", [1, 1], call1230, block1231);
  lineNumber = 383
  lineNumber = 1
  lineNumber = 383
  var call1234 = callmethod(var_o,"value", [0]);
  lineNumber = 384
  var call1235 = callmethod(this,"compilenode", [1], call1234);
  var_cond = call1235;
  var string1236 = new GraceString("  wcond");
  var opresult1238 = callmethod(string1236, "++", [1], var_myc);
  var string1239 = new GraceString(" = Grace_isTrue(");
  var opresult1241 = callmethod(opresult1238, "++", [1], string1239);
  var opresult1243 = callmethod(opresult1241, "++", [1], var_cond);
  var string1244 = new GraceString(");");
  var opresult1246 = callmethod(opresult1243, "++", [1], string1244);
  lineNumber = 385
  var call1247 = callmethod(this,"out", [1], opresult1246);
  var string1248 = new GraceString("  }");
  lineNumber = 386
  var call1249 = callmethod(this,"out", [1], string1248);
  lineNumber = 387
  lineNumber = 1
  lineNumber = 386
  var call1250 = callmethod(var_o,"register:=", [1], var_cond);
  return call1250
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilewhile"] = func1205;
  lineNumber = 407
var func1251 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 390
  lineNumber = 389
  var var_myc = var_auto__95__count;
  lineNumber = 391
  lineNumber = 390
  var opresult1253 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1253;
  lineNumber = 391
  var string1254 = new GraceString("  if (Grace_isTrue(");
  lineNumber = 1
  lineNumber = 391
  var call1255 = callmethod(var_o,"value", [0]);
  var call1256 = callmethod(this,"compilenode", [1], call1255);
  var opresult1258 = callmethod(string1254, "++", [1], call1256);
  var string1259 = new GraceString(")) {");
  var opresult1261 = callmethod(opresult1258, "++", [1], string1259);
  lineNumber = 392
  var call1262 = callmethod(this,"out", [1], opresult1261);
  lineNumber = 393
  lineNumber = 392
  var string1263 = new GraceString("undefined");
  var var_tret = string1263;
  lineNumber = 394
  lineNumber = 393
  var string1264 = new GraceString("undefined");
  var var_fret = string1264;
  lineNumber = 395
  lineNumber = 394
  lineNumber = 1
  lineNumber = 394
  var call1265 = callmethod(var_o,"thenblock", [0]);
  lineNumber = 395
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
  block1266.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1266.receiver = this;
  block1266.className = 'block<genjs:395>';
  block1266.real = function(
var_l
) {
  lineNumber = 396
  var call1267 = callmethod(this,"compilenode", [1], var_l);
  var_tret = call1267;
  return call1267;
};
  var call1268 = callmethod(Grace_prelude,"for()do", [1, 1], call1265, block1266);
  lineNumber = 397
  var string1269 = new GraceString("  var if");
  var opresult1271 = callmethod(string1269, "++", [1], var_myc);
  var string1272 = new GraceString(" = ");
  var opresult1274 = callmethod(opresult1271, "++", [1], string1272);
  var opresult1276 = callmethod(opresult1274, "++", [1], var_tret);
  var string1277 = new GraceString(";");
  var opresult1279 = callmethod(opresult1276, "++", [1], string1277);
  lineNumber = 398
  var call1280 = callmethod(this,"out", [1], opresult1279);
  lineNumber = 403
  lineNumber = 405
  lineNumber = 1
  lineNumber = 405
  lineNumber = 1
  lineNumber = 398
  var call1282 = callmethod(var_o,"elseblock", [0]);
  var call1283 = callmethod(call1282,"size", [0]);
  var opresult1285 = callmethod(call1283, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1285)) {
  lineNumber = 399
  var string1286 = new GraceString("  } else {");
  lineNumber = 400
  var call1287 = callmethod(this,"out", [1], string1286);
  lineNumber = 401
  lineNumber = 400
  lineNumber = 1
  lineNumber = 400
  var call1288 = callmethod(var_o,"elseblock", [0]);
  lineNumber = 401
  var block1289 = Grace_allocObject();
  block1289.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1289.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1289.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1289.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1289.receiver = this;
  block1289.className = 'block<genjs:401>';
  block1289.real = function(
var_l
) {
  lineNumber = 402
  var call1290 = callmethod(this,"compilenode", [1], var_l);
  var_fret = call1290;
  return call1290;
};
  var call1291 = callmethod(Grace_prelude,"for()do", [1, 1], call1288, block1289);
  lineNumber = 403
  var string1292 = new GraceString("  var if");
  var opresult1294 = callmethod(string1292, "++", [1], var_myc);
  var string1295 = new GraceString(" = ");
  var opresult1297 = callmethod(opresult1294, "++", [1], string1295);
  var opresult1299 = callmethod(opresult1297, "++", [1], var_fret);
  var string1300 = new GraceString(";");
  var opresult1302 = callmethod(opresult1299, "++", [1], string1300);
  lineNumber = 404
  var call1303 = callmethod(this,"out", [1], opresult1302);
  var if1281 = call1303;
}
  lineNumber = 405
  var string1304 = new GraceString("}");
  lineNumber = 406
  var call1305 = callmethod(this,"out", [1], string1304);
  lineNumber = 407
  lineNumber = 1
  lineNumber = 407
  lineNumber = 406
  var string1306 = new GraceString("if");
  var opresult1308 = callmethod(string1306, "++", [1], var_myc);
  var call1309 = callmethod(var_o,"register:=", [1], opresult1308);
  return call1309
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileif"] = func1251;
  lineNumber = 421
var func1310 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 410
  lineNumber = 1
  lineNumber = 409
  var call1311 = callmethod(var_o,"value", [0]);
  var var_name = call1311;
  lineNumber = 421
  lineNumber = 424
  lineNumber = 410
  var string1313 = new GraceString("self");
  var opresult1315 = callmethod(var_name, "==", [1], string1313);
  if (Grace_isTrue(opresult1315)) {
  lineNumber = 412
  lineNumber = 1
  lineNumber = 411
  var string1316 = new GraceString("this");
  var call1317 = callmethod(var_o,"register:=", [1], string1316);
  var if1312 = call1317;
  } else {
  lineNumber = 421
  lineNumber = 414
  lineNumber = 412
  var string1319 = new GraceString("...");
  var opresult1321 = callmethod(var_name, "==", [1], string1319);
  if (Grace_isTrue(opresult1321)) {
  lineNumber = 414
  lineNumber = 1
  lineNumber = 413
  var string1322 = new GraceString("ellipsis");
  var call1323 = callmethod(var_o,"register:=", [1], string1322);
  var if1318 = call1323;
  } else {
  lineNumber = 421
  lineNumber = 415
  var call1325 = callmethod(var_modules,"contains", [1], var_name);
  if (Grace_isTrue(call1325)) {
  lineNumber = 416
  var string1326 = new GraceString("  // WARNING: module support not implemented in JS backend");
  lineNumber = 417
  var call1327 = callmethod(this,"out", [1], string1326);
  lineNumber = 418
  lineNumber = 417
  var string1328 = new GraceString("  \"var_val_");
  var opresult1330 = callmethod(string1328, "++", [1], var_name);
  var opresult1332 = callmethod(opresult1330, "++", [1], var_auto__95__count);
  lineNumber = 418
  var string1333 = new GraceString("\" = load %object** @.module.");
  var opresult1335 = callmethod(opresult1332, "++", [1], string1333);
  var opresult1337 = callmethod(opresult1335, "++", [1], var_name);
  lineNumber = 419
  var call1338 = callmethod(this,"out", [1], opresult1337);
  var if1324 = call1338;
  } else {
  lineNumber = 420
  var call1339 = callmethod(var_usedvars,"push", [1], var_name);
  lineNumber = 421
  lineNumber = 1
  lineNumber = 421
  lineNumber = 422
  var call1340 = callmethod(this,"varf", [1], var_name);
  lineNumber = 421
  var call1341 = callmethod(var_o,"register:=", [1], call1340);
  var if1324 = call1341;
}
  var if1318 = if1324;
}
  var if1312 = if1318;
}
  return if1312
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileidentifier"] = func1310;
  lineNumber = 447
var func1342 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 427
  lineNumber = 1
  lineNumber = 426
  var call1343 = callmethod(var_o,"dest", [0]);
  var var_dest = call1343;
  lineNumber = 428
  lineNumber = 427
  var string1344 = new GraceString("");
  var var_val = string1344;
  lineNumber = 429
  lineNumber = 428
  var string1345 = new GraceString("");
  var var_c = string1345;
  lineNumber = 430
  lineNumber = 429
  var string1346 = new GraceString("");
  var var_r = string1346;
  lineNumber = 447
  lineNumber = 448
  lineNumber = 1
  lineNumber = 430
  var call1348 = callmethod(var_dest,"kind", [0]);
  var string1349 = new GraceString("identifier");
  var opresult1351 = callmethod(call1348, "==", [1], string1349);
  if (Grace_isTrue(opresult1351)) {
  lineNumber = 432
  lineNumber = 1
  lineNumber = 431
  var call1352 = callmethod(var_o,"value", [0]);
  var_val = call1352;
  lineNumber = 432
  lineNumber = 433
  var call1353 = callmethod(this,"compilenode", [1], var_val);
  var_val = call1353;
  lineNumber = 1
  lineNumber = 433
  lineNumber = 1
  lineNumber = 433
  var call1354 = callmethod(var_dest,"value", [0]);
  var call1355 = callmethod(call1354,"_escape", [0]);
  var var_nm = call1355;
  lineNumber = 434
  var call1356 = callmethod(var_usedvars,"push", [1], var_nm);
  lineNumber = 435
  var string1357 = new GraceString("  ");
  var call1358 = callmethod(this,"varf", [1], var_nm);
  var opresult1360 = callmethod(string1357, "++", [1], call1358);
  var string1361 = new GraceString(" = ");
  var opresult1363 = callmethod(opresult1360, "++", [1], string1361);
  var opresult1365 = callmethod(opresult1363, "++", [1], var_val);
  var string1366 = new GraceString(";");
  var opresult1368 = callmethod(opresult1365, "++", [1], string1366);
  lineNumber = 436
  var call1369 = callmethod(this,"out", [1], opresult1368);
  lineNumber = 437
  lineNumber = 1
  lineNumber = 436
  var call1370 = callmethod(var_o,"register:=", [1], var_val);
  var if1347 = call1370;
  } else {
  lineNumber = 447
  lineNumber = 442
  lineNumber = 1
  lineNumber = 437
  var call1372 = callmethod(var_dest,"kind", [0]);
  var string1373 = new GraceString("member");
  var opresult1375 = callmethod(call1372, "==", [1], string1373);
  if (Grace_isTrue(opresult1375)) {
  lineNumber = 439
  lineNumber = 1
  lineNumber = 439
  lineNumber = 1
  lineNumber = 438
  var call1376 = callmethod(var_dest,"value", [0]);
  var string1377 = new GraceString(":=");
  var opresult1379 = callmethod(call1376, "++", [1], string1377);
  var call1380 = callmethod(var_dest,"value:=", [1], opresult1379);
  lineNumber = 439
  lineNumber = 1
  lineNumber = 439
  var call1382 = callmethod(var_dest,"value", [0]);
  lineNumber = 1
  lineNumber = 439
  var call1384 = callmethod(var_o,"value", [0]);
  var array1383 = new GraceList([
call1384,
]);

  lineNumber = 1
  lineNumber = 439
  var call1385 = callmethod(var_ast,"callWithPart", [0]);
  var call1386 = callmethod(call1385,"new", [2], call1382, array1383);
  var array1381 = new GraceList([
call1386,
]);

  lineNumber = 440
  lineNumber = 1
  lineNumber = 439
  var call1387 = callmethod(var_ast,"callNode", [0]);
  var call1388 = callmethod(call1387,"new", [2], var_dest, array1381);
  var_c = call1388;
  lineNumber = 440
  lineNumber = 441
  var call1389 = callmethod(this,"compilenode", [1], var_c);
  var_r = call1389;
  lineNumber = 442
  lineNumber = 1
  lineNumber = 441
  var call1390 = callmethod(var_o,"register:=", [1], var_r);
  var if1371 = call1390;
  } else {
  lineNumber = 447
  lineNumber = 448
  lineNumber = 1
  lineNumber = 442
  var call1392 = callmethod(var_dest,"kind", [0]);
  var string1393 = new GraceString("index");
  var opresult1395 = callmethod(call1392, "==", [1], string1393);
  if (Grace_isTrue(opresult1395)) {
  lineNumber = 443
  var string1396 = new GraceString("[]:=");
  lineNumber = 1
  lineNumber = 443
  var call1397 = callmethod(var_dest,"value", [0]);
  lineNumber = 444
  lineNumber = 1
  lineNumber = 443
  var call1398 = callmethod(var_ast,"memberNode", [0]);
  var call1399 = callmethod(call1398,"new", [2], string1396, call1397);
  var var_imem = call1399;
  lineNumber = 444
  lineNumber = 1
  lineNumber = 444
  var call1401 = callmethod(var_imem,"value", [0]);
  lineNumber = 1
  lineNumber = 444
  var call1403 = callmethod(var_dest,"index", [0]);
  lineNumber = 1
  lineNumber = 444
  var call1404 = callmethod(var_o,"value", [0]);
  var array1402 = new GraceList([
call1403,
call1404,
]);

  lineNumber = 1
  lineNumber = 444
  var call1405 = callmethod(var_ast,"callWithPart", [0]);
  var call1406 = callmethod(call1405,"new", [2], call1401, array1402);
  var array1400 = new GraceList([
call1406,
]);

  lineNumber = 445
  lineNumber = 1
  lineNumber = 444
  var call1407 = callmethod(var_ast,"callNode", [0]);
  var call1408 = callmethod(call1407,"new", [2], var_imem, array1400);
  var_c = call1408;
  lineNumber = 445
  lineNumber = 446
  var call1409 = callmethod(this,"compilenode", [1], var_c);
  var_r = call1409;
  lineNumber = 447
  lineNumber = 1
  lineNumber = 446
  var call1410 = callmethod(var_o,"register:=", [1], var_r);
  var if1391 = call1410;
}
  var if1371 = if1391;
}
  var if1347 = if1371;
}
  return if1347
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilebind"] = func1342;
  lineNumber = 469
var func1411 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 451
  var var_nm;
  lineNumber = 454
  lineNumber = 456
  lineNumber = 1
  lineNumber = 456
  lineNumber = 1
  lineNumber = 451
  var call1413 = callmethod(var_o,"name", [0]);
  var call1414 = callmethod(call1413,"kind", [0]);
  var string1415 = new GraceString("generic");
  var opresult1417 = callmethod(call1414, "==", [1], string1415);
  if (Grace_isTrue(opresult1417)) {
  lineNumber = 452
  lineNumber = 1
  lineNumber = 452
  lineNumber = 1
  lineNumber = 452
  lineNumber = 1
  lineNumber = 452
  lineNumber = 1
  lineNumber = 452
  var call1418 = callmethod(var_o,"name", [0]);
  var call1419 = callmethod(call1418,"value", [0]);
  var call1420 = callmethod(call1419,"value", [0]);
  var call1421 = callmethod(call1420,"_escape", [0]);
  var_nm = call1421;
  var if1412 = call1421;
  } else {
  lineNumber = 454
  lineNumber = 1
  lineNumber = 454
  lineNumber = 1
  lineNumber = 454
  lineNumber = 1
  lineNumber = 454
  var call1422 = callmethod(var_o,"name", [0]);
  var call1423 = callmethod(call1422,"value", [0]);
  var call1424 = callmethod(call1423,"_escape", [0]);
  var_nm = call1424;
  var if1412 = call1424;
}
  lineNumber = 456
  var call1425 = callmethod(var_declaredvars,"push", [1], var_nm);
  lineNumber = 458
  lineNumber = 1
  lineNumber = 457
  var call1426 = callmethod(var_o,"value", [0]);
  var var_val = call1426;
  lineNumber = 461
  lineNumber = 463
  lineNumber = 458
  var bool1428 = new GraceBoolean(false)
  var opresult1430 = callmethod(bool1428, "!=", [1], var_val);
  if (Grace_isTrue(opresult1430)) {
  lineNumber = 459
  lineNumber = 460
  var call1431 = callmethod(this,"compilenode", [1], var_val);
  var_val = call1431;
  var if1427 = call1431;
  } else {
  lineNumber = 461
  var string1432 = new GraceString("const must have value bound.");
  var call1433 = callmethod(var_util,"syntax_error", [1], string1432);
  var if1427 = call1433;
}
  lineNumber = 463
  var string1434 = new GraceString("  var ");
  var call1435 = callmethod(this,"varf", [1], var_nm);
  var opresult1437 = callmethod(string1434, "++", [1], call1435);
  var string1438 = new GraceString(" = ");
  var opresult1440 = callmethod(opresult1437, "++", [1], string1438);
  var opresult1442 = callmethod(opresult1440, "++", [1], var_val);
  var string1443 = new GraceString(";");
  var opresult1445 = callmethod(opresult1442, "++", [1], string1443);
  lineNumber = 464
  var call1446 = callmethod(this,"out", [1], opresult1445);
  lineNumber = 466
  lineNumber = 468
  lineNumber = 464
  var opresult1449 = callmethod(var_compilationDepth, "==", [1], new GraceNum(1));
  if (Grace_isTrue(opresult1449)) {
  lineNumber = 466
  lineNumber = 465
  lineNumber = 1
  lineNumber = 465
  var call1450 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 465
  lineNumber = 1
  lineNumber = 465
  var call1452 = callmethod(var_o,"name", [0]);
  var call1453 = callmethod(call1452,"value", [0]);
  lineNumber = 1
  lineNumber = 465
  var call1454 = callmethod(var_ast,"signaturePart", [0]);
  var call1455 = callmethod(call1454,"new", [1], call1453);
  var array1451 = new GraceList([
call1455,
]);

  lineNumber = 466
  lineNumber = 1
  lineNumber = 466
  var call1457 = callmethod(var_o,"name", [0]);
  var array1456 = new GraceList([
call1457,
]);

  var bool1458 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 465
  var call1459 = callmethod(var_ast,"methodNode", [0]);
  var call1460 = callmethod(call1459,"new", [4], call1450, array1451, array1456, bool1458);
  lineNumber = 467
  var call1461 = callmethod(this,"compilenode", [1], call1460);
  var if1447 = call1461;
}
  lineNumber = 469
  lineNumber = 1
  lineNumber = 468
  var call1462 = callmethod(var_o,"register:=", [1], var_val);
  return call1462
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compiledefdec"] = func1411;
  lineNumber = 491
var func1463 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 471
  lineNumber = 1
  lineNumber = 471
  lineNumber = 1
  lineNumber = 471
  lineNumber = 1
  lineNumber = 471
  var call1464 = callmethod(var_o,"name", [0]);
  var call1465 = callmethod(call1464,"value", [0]);
  var call1466 = callmethod(call1465,"_escape", [0]);
  var var_nm = call1466;
  lineNumber = 472
  var call1467 = callmethod(var_declaredvars,"push", [1], var_nm);
  lineNumber = 474
  lineNumber = 1
  lineNumber = 473
  var call1468 = callmethod(var_o,"value", [0]);
  var var_val = call1468;
  lineNumber = 480
  lineNumber = 481
  lineNumber = 474
  var bool1470 = new GraceBoolean(false)
  var opresult1472 = callmethod(bool1470, "!=", [1], var_val);
  if (Grace_isTrue(opresult1472)) {
  lineNumber = 475
  lineNumber = 476
  var call1473 = callmethod(this,"compilenode", [1], var_val);
  var_val = call1473;
  var string1474 = new GraceString("  var ");
  var call1475 = callmethod(this,"varf", [1], var_nm);
  var opresult1477 = callmethod(string1474, "++", [1], call1475);
  var string1478 = new GraceString(" = ");
  var opresult1480 = callmethod(opresult1477, "++", [1], string1478);
  var opresult1482 = callmethod(opresult1480, "++", [1], var_val);
  var string1483 = new GraceString(";");
  var opresult1485 = callmethod(opresult1482, "++", [1], string1483);
  lineNumber = 477
  var call1486 = callmethod(this,"out", [1], opresult1485);
  var if1469 = call1486;
  } else {
  lineNumber = 478
  var string1487 = new GraceString("  var ");
  var call1488 = callmethod(this,"varf", [1], var_nm);
  var opresult1490 = callmethod(string1487, "++", [1], call1488);
  var string1491 = new GraceString(";");
  var opresult1493 = callmethod(opresult1490, "++", [1], string1491);
  lineNumber = 479
  var call1494 = callmethod(this,"out", [1], opresult1493);
  lineNumber = 480
  lineNumber = 479
  var string1495 = new GraceString("false");
  var_val = string1495;
  var if1469 = string1495;
}
  lineNumber = 488
  lineNumber = 490
  lineNumber = 481
  var opresult1498 = callmethod(var_compilationDepth, "==", [1], new GraceNum(1));
  if (Grace_isTrue(opresult1498)) {
  lineNumber = 483
  lineNumber = 482
  lineNumber = 1
  lineNumber = 482
  var call1499 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 482
  lineNumber = 1
  lineNumber = 482
  var call1501 = callmethod(var_o,"name", [0]);
  var call1502 = callmethod(call1501,"value", [0]);
  lineNumber = 1
  lineNumber = 482
  var call1503 = callmethod(var_ast,"signaturePart", [0]);
  var call1504 = callmethod(call1503,"new", [1], call1502);
  var array1500 = new GraceList([
call1504,
]);

  lineNumber = 483
  lineNumber = 1
  lineNumber = 483
  var call1506 = callmethod(var_o,"name", [0]);
  var array1505 = new GraceList([
call1506,
]);

  var bool1507 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 482
  var call1508 = callmethod(var_ast,"methodNode", [0]);
  var call1509 = callmethod(call1508,"new", [4], call1499, array1500, array1505, bool1507);
  lineNumber = 484
  var call1510 = callmethod(this,"compilenode", [1], call1509);
  lineNumber = 1
  lineNumber = 484
  lineNumber = 1
  lineNumber = 484
  var call1511 = callmethod(var_o,"name", [0]);
  var call1512 = callmethod(call1511,"value", [0]);
  var string1513 = new GraceString(":=");
  var opresult1515 = callmethod(call1512, "++", [1], string1513);
  var bool1516 = new GraceBoolean(false)
  lineNumber = 485
  lineNumber = 1
  lineNumber = 484
  var call1517 = callmethod(var_ast,"identifierNode", [0]);
  var call1518 = callmethod(call1517,"new", [2], opresult1515, bool1516);
  var var_assignID = call1518;
  lineNumber = 485
  var string1519 = new GraceString("_var_assign_tmp");
  var bool1520 = new GraceBoolean(false)
  lineNumber = 486
  lineNumber = 1
  lineNumber = 485
  var call1521 = callmethod(var_ast,"identifierNode", [0]);
  var call1522 = callmethod(call1521,"new", [2], string1519, bool1520);
  var var_tmpID = call1522;
  lineNumber = 488
  lineNumber = 486
  lineNumber = 487
  lineNumber = 1
  lineNumber = 487
  var call1524 = callmethod(var_assignID,"value", [0]);
  var array1525 = new GraceList([
var_tmpID,
]);

  lineNumber = 1
  lineNumber = 487
  var call1526 = callmethod(var_ast,"signaturePart", [0]);
  var call1527 = callmethod(call1526,"new", [2], call1524, array1525);
  var array1523 = new GraceList([
call1527,
]);

  lineNumber = 488
  lineNumber = 1
  lineNumber = 488
  var call1529 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 488
  var call1530 = callmethod(var_ast,"bindNode", [0]);
  var call1531 = callmethod(call1530,"new", [2], call1529, var_tmpID);
  var array1528 = new GraceList([
call1531,
]);

  var bool1532 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 486
  var call1533 = callmethod(var_ast,"methodNode", [0]);
  var call1534 = callmethod(call1533,"new", [4], var_assignID, array1523, array1528, bool1532);
  lineNumber = 489
  var call1535 = callmethod(this,"compilenode", [1], call1534);
  var if1496 = call1535;
}
  lineNumber = 491
  lineNumber = 1
  lineNumber = 490
  var call1536 = callmethod(var_o,"register:=", [1], var_val);
  return call1536
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilevardec"] = func1463;
  lineNumber = 499
var func1537 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 493
  lineNumber = 1
  lineNumber = 493
  var call1538 = callmethod(var_o,"value", [0]);
  lineNumber = 494
  var call1539 = callmethod(this,"compilenode", [1], call1538);
  var var_of = call1539;
  lineNumber = 1
  lineNumber = 494
  var call1540 = callmethod(var_o,"index", [0]);
  lineNumber = 495
  var call1541 = callmethod(this,"compilenode", [1], call1540);
  var var_index = call1541;
  lineNumber = 496
  lineNumber = 495
  var string1542 = new GraceString("  var idxres");
  var opresult1544 = callmethod(string1542, "++", [1], var_auto__95__count);
  var string1545 = new GraceString(" = ");
  var opresult1547 = callmethod(opresult1544, "++", [1], string1545);
  var opresult1549 = callmethod(opresult1547, "++", [1], var_of);
  var string1550 = new GraceString(".methods[\"[]\"]");
  var opresult1552 = callmethod(opresult1549, "++", [1], string1550);
  lineNumber = 496
  var string1553 = new GraceString(".call(");
  var opresult1555 = callmethod(opresult1552, "++", [1], string1553);
  var opresult1557 = callmethod(opresult1555, "++", [1], var_of);
  var string1558 = new GraceString(", [1], ");
  var opresult1560 = callmethod(opresult1557, "++", [1], string1558);
  var opresult1562 = callmethod(opresult1560, "++", [1], var_index);
  var string1563 = new GraceString(");");
  var opresult1565 = callmethod(opresult1562, "++", [1], string1563);
  lineNumber = 497
  var call1566 = callmethod(this,"out", [1], opresult1565);
  lineNumber = 498
  lineNumber = 1
  lineNumber = 498
  lineNumber = 497
  var string1567 = new GraceString("idxres");
  var opresult1569 = callmethod(string1567, "++", [1], var_auto__95__count);
  var call1570 = callmethod(var_o,"register:=", [1], opresult1569);
  lineNumber = 499
  lineNumber = 498
  var opresult1572 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1572;
  return opresult1572
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileindex"] = func1537;
  lineNumber = 516
var func1573 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 502
  lineNumber = 501
  var var_myc = var_auto__95__count;
  lineNumber = 503
  lineNumber = 502
  var opresult1575 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1575;
  lineNumber = 504
  lineNumber = 1
  lineNumber = 503
  var call1576 = callmethod(var_o,"cases", [0]);
  var var_cases = call1576;
  lineNumber = 504
  lineNumber = 1
  lineNumber = 504
  var call1577 = callmethod(var_o,"value", [0]);
  lineNumber = 505
  var call1578 = callmethod(this,"compilenode", [1], call1577);
  var var_matchee = call1578;
  var string1579 = new GraceString("  var cases");
  var opresult1581 = callmethod(string1579, "++", [1], var_myc);
  var string1582 = new GraceString(" = [];");
  var opresult1584 = callmethod(opresult1581, "++", [1], string1582);
  lineNumber = 506
  var call1585 = callmethod(this,"out", [1], opresult1584);
  lineNumber = 508
  lineNumber = 506
  lineNumber = 508
  var block1586 = Grace_allocObject();
  block1586.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1586.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1586.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1586.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1586.receiver = this;
  block1586.className = 'block<genjs:508>';
  block1586.real = function(
var_c
) {
  lineNumber = 507
  lineNumber = 508
  var call1587 = callmethod(this,"compilenode", [1], var_c);
  var var_e = call1587;
  var string1588 = new GraceString("  cases");
  var opresult1590 = callmethod(string1588, "++", [1], var_myc);
  var string1591 = new GraceString(".push(");
  var opresult1593 = callmethod(opresult1590, "++", [1], string1591);
  var opresult1595 = callmethod(opresult1593, "++", [1], var_e);
  var string1596 = new GraceString(");");
  var opresult1598 = callmethod(opresult1595, "++", [1], string1596);
  lineNumber = 509
  var call1599 = callmethod(this,"out", [1], opresult1598);
  return call1599;
};
  var call1600 = callmethod(Grace_prelude,"for()do", [1, 1], var_cases, block1586);
  lineNumber = 511
  lineNumber = 510
  var string1601 = new GraceString("false");
  var var_elsecase = string1601;
  lineNumber = 512
  lineNumber = 514
  lineNumber = 511
  var bool1603 = new GraceBoolean(false)
  lineNumber = 514
  lineNumber = 1
  lineNumber = 511
  var call1604 = callmethod(var_o,"elsecase", [0]);
  var opresult1606 = callmethod(bool1603, "!=", [1], call1604);
  if (Grace_isTrue(opresult1606)) {
  lineNumber = 512
  lineNumber = 1
  lineNumber = 512
  var call1607 = callmethod(var_o,"elsecase", [0]);
  lineNumber = 513
  var call1608 = callmethod(this,"compilenode", [1], call1607);
  var_elsecase = call1608;
  var if1602 = call1608;
}
  lineNumber = 514
  var string1609 = new GraceString("  var matchres");
  var opresult1611 = callmethod(string1609, "++", [1], var_myc);
  var string1612 = new GraceString(" = matchCase(");
  var opresult1614 = callmethod(opresult1611, "++", [1], string1612);
  var opresult1616 = callmethod(opresult1614, "++", [1], var_matchee);
  var string1617 = new GraceString(",cases");
  var opresult1619 = callmethod(opresult1616, "++", [1], string1617);
  var opresult1621 = callmethod(opresult1619, "++", [1], var_myc);
  var string1622 = new GraceString(",");
  var opresult1624 = callmethod(opresult1621, "++", [1], string1622);
  var opresult1626 = callmethod(opresult1624, "++", [1], var_elsecase);
  var string1627 = new GraceString(");");
  var opresult1629 = callmethod(opresult1626, "++", [1], string1627);
  lineNumber = 515
  var call1630 = callmethod(this,"out", [1], opresult1629);
  lineNumber = 516
  lineNumber = 1
  lineNumber = 516
  lineNumber = 515
  var string1631 = new GraceString("matchres");
  var opresult1633 = callmethod(string1631, "++", [1], var_myc);
  var call1634 = callmethod(var_o,"register:=", [1], opresult1633);
  return call1634
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilematchcase"] = func1573;
  lineNumber = 538
var func1635 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 518
  lineNumber = 1
  lineNumber = 518
  var call1636 = callmethod(var_o,"left", [0]);
  lineNumber = 519
  var call1637 = callmethod(this,"compilenode", [1], call1636);
  var var_left = call1637;
  lineNumber = 1
  lineNumber = 519
  var call1638 = callmethod(var_o,"right", [0]);
  lineNumber = 520
  var call1639 = callmethod(this,"compilenode", [1], call1638);
  var var_right = call1639;
  lineNumber = 521
  lineNumber = 520
  var opresult1641 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1641;
  lineNumber = 522
  lineNumber = 521
  var string1642 = new GraceString("opresult");
  var var_rnm = string1642;
  lineNumber = 524
  lineNumber = 525
  lineNumber = 1
  lineNumber = 522
  var call1644 = callmethod(var_o,"value", [0]);
  var string1645 = new GraceString("*");
  var opresult1647 = callmethod(call1644, "==", [1], string1645);
  if (Grace_isTrue(opresult1647)) {
  lineNumber = 524
  lineNumber = 523
  var string1648 = new GraceString("prod");
  var_rnm = string1648;
  var if1643 = string1648;
}
  lineNumber = 527
  lineNumber = 528
  lineNumber = 1
  lineNumber = 525
  var call1650 = callmethod(var_o,"value", [0]);
  var string1651 = new GraceString("/");
  var opresult1653 = callmethod(call1650, "==", [1], string1651);
  if (Grace_isTrue(opresult1653)) {
  lineNumber = 527
  lineNumber = 526
  var string1654 = new GraceString("quotient");
  var_rnm = string1654;
  var if1649 = string1654;
}
  lineNumber = 530
  lineNumber = 531
  lineNumber = 1
  lineNumber = 528
  var call1656 = callmethod(var_o,"value", [0]);
  var string1657 = new GraceString("-");
  var opresult1659 = callmethod(call1656, "==", [1], string1657);
  if (Grace_isTrue(opresult1659)) {
  lineNumber = 530
  lineNumber = 529
  var string1660 = new GraceString("diff");
  var_rnm = string1660;
  var if1655 = string1660;
}
  lineNumber = 533
  lineNumber = 534
  lineNumber = 1
  lineNumber = 531
  var call1662 = callmethod(var_o,"value", [0]);
  var string1663 = new GraceString("%");
  var opresult1665 = callmethod(call1662, "==", [1], string1663);
  if (Grace_isTrue(opresult1665)) {
  lineNumber = 533
  lineNumber = 532
  var string1666 = new GraceString("modulus");
  var_rnm = string1666;
  var if1661 = string1666;
}
  lineNumber = 535
  lineNumber = 534
  var string1667 = new GraceString("  var ");
  var opresult1669 = callmethod(string1667, "++", [1], var_rnm);
  var opresult1671 = callmethod(opresult1669, "++", [1], var_auto__95__count);
  var string1672 = new GraceString(" = callmethod(");
  var opresult1674 = callmethod(opresult1671, "++", [1], string1672);
  var opresult1676 = callmethod(opresult1674, "++", [1], var_left);
  lineNumber = 535
  var string1677 = new GraceString(", \"");
  var opresult1679 = callmethod(opresult1676, "++", [1], string1677);
  lineNumber = 1
  lineNumber = 535
  var call1680 = callmethod(var_o,"value", [0]);
  var opresult1682 = callmethod(opresult1679, "++", [1], call1680);
  var string1683 = new GraceString("\", [1], ");
  var opresult1685 = callmethod(opresult1682, "++", [1], string1683);
  var opresult1687 = callmethod(opresult1685, "++", [1], var_right);
  var string1688 = new GraceString(");");
  var opresult1690 = callmethod(opresult1687, "++", [1], string1688);
  lineNumber = 536
  var call1691 = callmethod(this,"out", [1], opresult1690);
  lineNumber = 537
  lineNumber = 1
  lineNumber = 537
  lineNumber = 536
  var opresult1693 = callmethod(var_rnm, "++", [1], var_auto__95__count);
  var call1694 = callmethod(var_o,"register:=", [1], opresult1693);
  lineNumber = 538
  lineNumber = 537
  var opresult1696 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1696;
  return opresult1696
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileop"] = func1635;
  lineNumber = 622
var func1697 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 541
  var array1698 = new GraceList([
]);

  var var_args = array1698;
  lineNumber = 542
  lineNumber = 541
  var string1699 = new GraceString("");
  var var_obj = string1699;
  lineNumber = 543
  lineNumber = 542
  var var_len = new GraceNum(0);
  lineNumber = 544
  lineNumber = 543
  var string1700 = new GraceString("");
  var var_con = string1700;
  lineNumber = 547
  lineNumber = 544
  lineNumber = 1
  lineNumber = 544
  var call1701 = callmethod(var_o,"with", [0]);
  lineNumber = 547
  var block1702 = Grace_allocObject();
  block1702.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1702.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1702.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1702.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1702.receiver = this;
  block1702.className = 'block<genjs:547>';
  block1702.real = function(
var_part
) {
  lineNumber = 545
  lineNumber = 1
  lineNumber = 545
  var call1703 = callmethod(var_part,"args", [0]);
  lineNumber = 547
  var block1704 = Grace_allocObject();
  block1704.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1704.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1704.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1704.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1704.receiver = this;
  block1704.className = 'block<genjs:547>';
  block1704.real = function(
var_p
) {
  lineNumber = 546
  lineNumber = 547
  var call1705 = callmethod(this,"compilenode", [1], var_p);
  var var_r = call1705;
  var call1706 = callmethod(var_args,"push", [1], var_r);
  return call1706;
};
  var call1707 = callmethod(Grace_prelude,"for()do", [1, 1], call1703, block1704);
  return call1707;
};
  var call1708 = callmethod(Grace_prelude,"for()do", [1, 1], call1701, block1702);
  lineNumber = 618
  lineNumber = 551
  lineNumber = 620
  lineNumber = 1
  lineNumber = 620
  lineNumber = 1
  lineNumber = 550
  var call1710 = callmethod(var_o,"value", [0]);
  var call1711 = callmethod(call1710,"kind", [0]);
  var string1712 = new GraceString("member");
  var opresult1714 = callmethod(call1711, "==", [1], string1712);
  lineNumber = 551
  var block1715 = Grace_allocObject();
  block1715.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1715.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1715.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1715.receiver = this;
  block1715.className = 'block<genjs:551>';
  block1715.real = function(
) {
  lineNumber = 1
  lineNumber = 551
  lineNumber = 1
  lineNumber = 551
  lineNumber = 1
  lineNumber = 550
  var call1716 = callmethod(var_o,"value", [0]);
  var call1717 = callmethod(call1716,"in", [0]);
  var call1718 = callmethod(call1717,"kind", [0]);
  var string1719 = new GraceString("identifier");
  var opresult1721 = callmethod(call1718, "==", [1], string1719);
  lineNumber = 551
  lineNumber = 1
  lineNumber = 551
  lineNumber = 1
  lineNumber = 551
  lineNumber = 1
  lineNumber = 551
  var call1722 = callmethod(var_o,"value", [0]);
  var call1723 = callmethod(call1722,"in", [0]);
  var call1724 = callmethod(call1723,"value", [0]);
  var string1725 = new GraceString("super");
  var opresult1727 = callmethod(call1724, "==", [1], string1725);
  var opresult1729 = callmethod(opresult1721, "&", [1], opresult1727);
  return opresult1729;
};
  var opresult1731 = callmethod(opresult1714, "&&", [1], block1715);
  if (Grace_isTrue(opresult1731)) {
  lineNumber = 553
  lineNumber = 554
  lineNumber = 552
  var string1732 = new GraceString("  var call");
  var opresult1734 = callmethod(string1732, "++", [1], var_auto__95__count);
  var string1735 = new GraceString(" = callmethodsuper(this");
  var opresult1737 = callmethod(opresult1734, "++", [1], string1735);
  lineNumber = 553
  var string1738 = new GraceString(", \"");
  var opresult1740 = callmethod(opresult1737, "++", [1], string1738);
  lineNumber = 1
  lineNumber = 553
  lineNumber = 1
  lineNumber = 553
  lineNumber = 1
  lineNumber = 553
  var call1741 = callmethod(var_o,"value", [0]);
  var call1742 = callmethod(call1741,"value", [0]);
  var call1743 = callmethod(call1742,"_escape", [0]);
  var opresult1745 = callmethod(opresult1740, "++", [1], call1743);
  var string1746 = new GraceString("\", [");
  var opresult1748 = callmethod(opresult1745, "++", [1], string1746);
  var var_call = opresult1748;
  lineNumber = 558
  lineNumber = 554
  lineNumber = 1
  lineNumber = 554
  lineNumber = 1
  lineNumber = 554
  var call1749 = callmethod(var_o,"with", [0]);
  var call1750 = callmethod(call1749,"indices", [0]);
  lineNumber = 558
  var block1751 = Grace_allocObject();
  block1751.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1751.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1751.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1751.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1751.receiver = this;
  block1751.className = 'block<genjs:558>';
  block1751.real = function(
var_partnr
) {
  lineNumber = 556
  lineNumber = 555
  lineNumber = 556
  lineNumber = 1
  lineNumber = 556
  lineNumber = 1
  lineNumber = 556
  lineNumber = 1
  lineNumber = 555
  var call1752 = callmethod(var_o,"with", [0]);
  var idxres1753 = call1752.methods["[]"].call(call1752, [1], var_partnr);
  var call1754 = callmethod(idxres1753,"args", [0]);
  var call1755 = callmethod(call1754,"size", [0]);
  var opresult1757 = callmethod(var_call, "++", [1], call1755);
  var_call = opresult1757;
  lineNumber = 558
  lineNumber = 559
  lineNumber = 556
  lineNumber = 559
  lineNumber = 1
  lineNumber = 559
  lineNumber = 1
  lineNumber = 556
  var call1759 = callmethod(var_o,"with", [0]);
  var call1760 = callmethod(call1759,"size", [0]);
  var opresult1762 = callmethod(var_partnr, "<", [1], call1760);
  if (Grace_isTrue(opresult1762)) {
  lineNumber = 558
  lineNumber = 557
  var string1763 = new GraceString(", ");
  var opresult1765 = callmethod(var_call, "++", [1], string1763);
  var_call = opresult1765;
  var if1758 = opresult1765;
}
  return if1758;
};
  var call1766 = callmethod(Grace_prelude,"for()do", [1, 1], call1750, block1751);
  lineNumber = 561
  lineNumber = 560
  var string1767 = new GraceString("]");
  var opresult1769 = callmethod(var_call, "++", [1], string1767);
  var_call = opresult1769;
  lineNumber = 563
  lineNumber = 561
  lineNumber = 563
  var block1770 = Grace_allocObject();
  block1770.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1770.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1770.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1770.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1770.receiver = this;
  block1770.className = 'block<genjs:563>';
  block1770.real = function(
var_arg
) {
  lineNumber = 562
  var string1771 = new GraceString(", ");
  var opresult1773 = callmethod(var_call, "++", [1], string1771);
  var opresult1775 = callmethod(opresult1773, "++", [1], var_arg);
  var_call = opresult1775;
  return opresult1775;
};
  var call1776 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block1770);
  lineNumber = 565
  lineNumber = 564
  var string1777 = new GraceString(");");
  var opresult1779 = callmethod(var_call, "++", [1], string1777);
  var_call = opresult1779;
  lineNumber = 565
  lineNumber = 566
  var call1780 = callmethod(this,"out", [1], var_call);
  var if1709 = call1780;
  } else {
  lineNumber = 618
  lineNumber = 567
  lineNumber = 571
  lineNumber = 1
  lineNumber = 571
  lineNumber = 1
  lineNumber = 566
  var call1782 = callmethod(var_o,"value", [0]);
  var call1783 = callmethod(call1782,"kind", [0]);
  var string1784 = new GraceString("member");
  var opresult1786 = callmethod(call1783, "==", [1], string1784);
  lineNumber = 567
  var block1787 = Grace_allocObject();
  block1787.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1787.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1787.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1787.receiver = this;
  block1787.className = 'block<genjs:567>';
  block1787.real = function(
) {
  lineNumber = 1
  lineNumber = 567
  lineNumber = 1
  lineNumber = 567
  lineNumber = 1
  lineNumber = 566
  var call1788 = callmethod(var_o,"value", [0]);
  var call1789 = callmethod(call1788,"in", [0]);
  var call1790 = callmethod(call1789,"kind", [0]);
  var string1791 = new GraceString("identifier");
  var opresult1793 = callmethod(call1790, "==", [1], string1791);
  lineNumber = 567
  lineNumber = 1
  lineNumber = 567
  lineNumber = 1
  lineNumber = 567
  lineNumber = 1
  lineNumber = 567
  var call1794 = callmethod(var_o,"value", [0]);
  var call1795 = callmethod(call1794,"in", [0]);
  var call1796 = callmethod(call1795,"value", [0]);
  var string1797 = new GraceString("self");
  var opresult1799 = callmethod(call1796, "==", [1], string1797);
  var opresult1801 = callmethod(opresult1793, "&", [1], opresult1799);
  lineNumber = 1
  lineNumber = 567
  lineNumber = 1
  lineNumber = 567
  var call1802 = callmethod(var_o,"value", [0]);
  var call1803 = callmethod(call1802,"value", [0]);
  var string1804 = new GraceString("outer");
  var opresult1806 = callmethod(call1803, "==", [1], string1804);
  var opresult1808 = callmethod(opresult1801, "&", [1], opresult1806);
  return opresult1808;
};
  var opresult1810 = callmethod(opresult1786, "&&", [1], block1787);
  if (Grace_isTrue(opresult1810)) {
  lineNumber = 570
  lineNumber = 569
  var string1811 = new GraceString("  var call");
  var opresult1813 = callmethod(string1811, "++", [1], var_auto__95__count);
  var string1814 = new GraceString(" = callmethod(superDepth, ");
  var opresult1816 = callmethod(opresult1813, "++", [1], string1814);
  lineNumber = 570
  var string1817 = new GraceString("\"outer\", [0]);");
  var opresult1819 = callmethod(opresult1816, "++", [1], string1817);
  lineNumber = 571
  var call1820 = callmethod(this,"out", [1], opresult1819);
  var if1781 = call1820;
  } else {
  lineNumber = 618
  lineNumber = 572
  lineNumber = 587
  lineNumber = 1
  lineNumber = 587
  lineNumber = 1
  lineNumber = 571
  var call1822 = callmethod(var_o,"value", [0]);
  var call1823 = callmethod(call1822,"kind", [0]);
  var string1824 = new GraceString("member");
  var opresult1826 = callmethod(call1823, "==", [1], string1824);
  lineNumber = 572
  var block1827 = Grace_allocObject();
  block1827.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1827.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1827.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1827.receiver = this;
  block1827.className = 'block<genjs:572>';
  block1827.real = function(
) {
  lineNumber = 1
  lineNumber = 572
  lineNumber = 1
  lineNumber = 572
  lineNumber = 1
  lineNumber = 571
  var call1828 = callmethod(var_o,"value", [0]);
  var call1829 = callmethod(call1828,"in", [0]);
  var call1830 = callmethod(call1829,"kind", [0]);
  var string1831 = new GraceString("identifier");
  var opresult1833 = callmethod(call1830, "==", [1], string1831);
  lineNumber = 572
  lineNumber = 1
  lineNumber = 572
  lineNumber = 1
  lineNumber = 572
  lineNumber = 1
  lineNumber = 572
  var call1834 = callmethod(var_o,"value", [0]);
  var call1835 = callmethod(call1834,"in", [0]);
  var call1836 = callmethod(call1835,"value", [0]);
  var string1837 = new GraceString("prelude");
  var opresult1839 = callmethod(call1836, "==", [1], string1837);
  var opresult1841 = callmethod(opresult1833, "&", [1], opresult1839);
  return opresult1841;
};
  var opresult1843 = callmethod(opresult1826, "&&", [1], block1827);
  if (Grace_isTrue(opresult1843)) {
  lineNumber = 574
  lineNumber = 575
  lineNumber = 573
  var string1844 = new GraceString("  var call");
  var opresult1846 = callmethod(string1844, "++", [1], var_auto__95__count);
  var string1847 = new GraceString(" = callmethod(Grace_prelude");
  var opresult1849 = callmethod(opresult1846, "++", [1], string1847);
  lineNumber = 574
  var string1850 = new GraceString(",\"");
  var opresult1852 = callmethod(opresult1849, "++", [1], string1850);
  lineNumber = 1
  lineNumber = 574
  lineNumber = 1
  lineNumber = 574
  lineNumber = 1
  lineNumber = 574
  var call1853 = callmethod(var_o,"value", [0]);
  var call1854 = callmethod(call1853,"value", [0]);
  var call1855 = callmethod(call1854,"_escape", [0]);
  var opresult1857 = callmethod(opresult1852, "++", [1], call1855);
  var string1858 = new GraceString("\", [");
  var opresult1860 = callmethod(opresult1857, "++", [1], string1858);
  var var_call = opresult1860;
  lineNumber = 579
  lineNumber = 575
  lineNumber = 1
  lineNumber = 575
  lineNumber = 1
  lineNumber = 575
  var call1861 = callmethod(var_o,"with", [0]);
  var call1862 = callmethod(call1861,"indices", [0]);
  lineNumber = 579
  var block1863 = Grace_allocObject();
  block1863.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1863.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1863.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1863.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1863.receiver = this;
  block1863.className = 'block<genjs:579>';
  block1863.real = function(
var_partnr
) {
  lineNumber = 577
  lineNumber = 576
  lineNumber = 577
  lineNumber = 1
  lineNumber = 577
  lineNumber = 1
  lineNumber = 577
  lineNumber = 1
  lineNumber = 576
  var call1864 = callmethod(var_o,"with", [0]);
  var idxres1865 = call1864.methods["[]"].call(call1864, [1], var_partnr);
  var call1866 = callmethod(idxres1865,"args", [0]);
  var call1867 = callmethod(call1866,"size", [0]);
  var opresult1869 = callmethod(var_call, "++", [1], call1867);
  var_call = opresult1869;
  lineNumber = 579
  lineNumber = 580
  lineNumber = 577
  lineNumber = 580
  lineNumber = 1
  lineNumber = 580
  lineNumber = 1
  lineNumber = 577
  var call1871 = callmethod(var_o,"with", [0]);
  var call1872 = callmethod(call1871,"size", [0]);
  var opresult1874 = callmethod(var_partnr, "<", [1], call1872);
  if (Grace_isTrue(opresult1874)) {
  lineNumber = 579
  lineNumber = 578
  var string1875 = new GraceString(", ");
  var opresult1877 = callmethod(var_call, "++", [1], string1875);
  var_call = opresult1877;
  var if1870 = opresult1877;
}
  return if1870;
};
  var call1878 = callmethod(Grace_prelude,"for()do", [1, 1], call1862, block1863);
  lineNumber = 582
  lineNumber = 581
  var string1879 = new GraceString("]");
  var opresult1881 = callmethod(var_call, "++", [1], string1879);
  var_call = opresult1881;
  lineNumber = 584
  lineNumber = 582
  lineNumber = 584
  var block1882 = Grace_allocObject();
  block1882.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1882.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1882.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1882.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1882.receiver = this;
  block1882.className = 'block<genjs:584>';
  block1882.real = function(
var_arg
) {
  lineNumber = 583
  var string1883 = new GraceString(", ");
  var opresult1885 = callmethod(var_call, "++", [1], string1883);
  var opresult1887 = callmethod(opresult1885, "++", [1], var_arg);
  var_call = opresult1887;
  return opresult1887;
};
  var call1888 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block1882);
  lineNumber = 586
  lineNumber = 585
  var string1889 = new GraceString(");");
  var opresult1891 = callmethod(var_call, "++", [1], string1889);
  var_call = opresult1891;
  lineNumber = 586
  lineNumber = 587
  var call1892 = callmethod(this,"out", [1], var_call);
  var if1821 = call1892;
  } else {
  lineNumber = 618
  lineNumber = 603
  lineNumber = 1
  lineNumber = 603
  lineNumber = 1
  lineNumber = 587
  var call1894 = callmethod(var_o,"value", [0]);
  var call1895 = callmethod(call1894,"kind", [0]);
  var string1896 = new GraceString("member");
  var opresult1898 = callmethod(call1895, "==", [1], string1896);
  if (Grace_isTrue(opresult1898)) {
  lineNumber = 588
  lineNumber = 1
  lineNumber = 588
  lineNumber = 1
  lineNumber = 588
  var call1899 = callmethod(var_o,"value", [0]);
  var call1900 = callmethod(call1899,"in", [0]);
  lineNumber = 589
  var call1901 = callmethod(this,"compilenode", [1], call1900);
  var_obj = call1901;
  lineNumber = 590
  lineNumber = 591
  lineNumber = 589
  var string1902 = new GraceString("  var call");
  var opresult1904 = callmethod(string1902, "++", [1], var_auto__95__count);
  var string1905 = new GraceString(" = callmethod(");
  var opresult1907 = callmethod(opresult1904, "++", [1], string1905);
  var opresult1909 = callmethod(opresult1907, "++", [1], var_obj);
  lineNumber = 590
  var string1910 = new GraceString(",\"");
  var opresult1912 = callmethod(opresult1909, "++", [1], string1910);
  lineNumber = 1
  lineNumber = 590
  lineNumber = 1
  lineNumber = 590
  lineNumber = 1
  lineNumber = 590
  var call1913 = callmethod(var_o,"value", [0]);
  var call1914 = callmethod(call1913,"value", [0]);
  var call1915 = callmethod(call1914,"_escape", [0]);
  var opresult1917 = callmethod(opresult1912, "++", [1], call1915);
  var string1918 = new GraceString("\", [");
  var opresult1920 = callmethod(opresult1917, "++", [1], string1918);
  var var_call = opresult1920;
  lineNumber = 595
  lineNumber = 591
  lineNumber = 1
  lineNumber = 591
  lineNumber = 1
  lineNumber = 591
  var call1921 = callmethod(var_o,"with", [0]);
  var call1922 = callmethod(call1921,"indices", [0]);
  lineNumber = 595
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
  block1923.className = 'block<genjs:595>';
  block1923.real = function(
var_partnr
) {
  lineNumber = 593
  lineNumber = 592
  lineNumber = 593
  lineNumber = 1
  lineNumber = 593
  lineNumber = 1
  lineNumber = 593
  lineNumber = 1
  lineNumber = 592
  var call1924 = callmethod(var_o,"with", [0]);
  var idxres1925 = call1924.methods["[]"].call(call1924, [1], var_partnr);
  var call1926 = callmethod(idxres1925,"args", [0]);
  var call1927 = callmethod(call1926,"size", [0]);
  var opresult1929 = callmethod(var_call, "++", [1], call1927);
  var_call = opresult1929;
  lineNumber = 595
  lineNumber = 596
  lineNumber = 593
  lineNumber = 596
  lineNumber = 1
  lineNumber = 596
  lineNumber = 1
  lineNumber = 593
  var call1931 = callmethod(var_o,"with", [0]);
  var call1932 = callmethod(call1931,"size", [0]);
  var opresult1934 = callmethod(var_partnr, "<", [1], call1932);
  if (Grace_isTrue(opresult1934)) {
  lineNumber = 595
  lineNumber = 594
  var string1935 = new GraceString(", ");
  var opresult1937 = callmethod(var_call, "++", [1], string1935);
  var_call = opresult1937;
  var if1930 = opresult1937;
}
  return if1930;
};
  var call1938 = callmethod(Grace_prelude,"for()do", [1, 1], call1922, block1923);
  lineNumber = 598
  lineNumber = 597
  var string1939 = new GraceString("]");
  var opresult1941 = callmethod(var_call, "++", [1], string1939);
  var_call = opresult1941;
  lineNumber = 600
  lineNumber = 598
  lineNumber = 600
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
  block1942.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1942.receiver = this;
  block1942.className = 'block<genjs:600>';
  block1942.real = function(
var_arg
) {
  lineNumber = 599
  var string1943 = new GraceString(", ");
  var opresult1945 = callmethod(var_call, "++", [1], string1943);
  var opresult1947 = callmethod(opresult1945, "++", [1], var_arg);
  var_call = opresult1947;
  return opresult1947;
};
  var call1948 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block1942);
  lineNumber = 602
  lineNumber = 601
  var string1949 = new GraceString(");");
  var opresult1951 = callmethod(var_call, "++", [1], string1949);
  var_call = opresult1951;
  lineNumber = 602
  lineNumber = 603
  var call1952 = callmethod(this,"out", [1], var_call);
  var if1893 = call1952;
  } else {
  lineNumber = 605
  lineNumber = 604
  var string1953 = new GraceString("this");
  var_obj = string1953;
  lineNumber = 606
  lineNumber = 607
  lineNumber = 605
  var string1954 = new GraceString("  var call");
  var opresult1956 = callmethod(string1954, "++", [1], var_auto__95__count);
  var string1957 = new GraceString(" = callmethod(this,");
  var opresult1959 = callmethod(opresult1956, "++", [1], string1957);
  lineNumber = 606
  var string1960 = new GraceString("\"");
  var opresult1962 = callmethod(opresult1959, "++", [1], string1960);
  lineNumber = 1
  lineNumber = 606
  lineNumber = 1
  lineNumber = 606
  lineNumber = 1
  lineNumber = 606
  var call1963 = callmethod(var_o,"value", [0]);
  var call1964 = callmethod(call1963,"value", [0]);
  var call1965 = callmethod(call1964,"_escape", [0]);
  var opresult1967 = callmethod(opresult1962, "++", [1], call1965);
  var string1968 = new GraceString("\", [");
  var opresult1970 = callmethod(opresult1967, "++", [1], string1968);
  var var_call = opresult1970;
  lineNumber = 611
  lineNumber = 607
  lineNumber = 1
  lineNumber = 607
  lineNumber = 1
  lineNumber = 607
  var call1971 = callmethod(var_o,"with", [0]);
  var call1972 = callmethod(call1971,"indices", [0]);
  lineNumber = 611
  var block1973 = Grace_allocObject();
  block1973.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1973.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1973.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1973.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1973.receiver = this;
  block1973.className = 'block<genjs:611>';
  block1973.real = function(
var_partnr
) {
  lineNumber = 609
  lineNumber = 608
  lineNumber = 609
  lineNumber = 1
  lineNumber = 609
  lineNumber = 1
  lineNumber = 609
  lineNumber = 1
  lineNumber = 608
  var call1974 = callmethod(var_o,"with", [0]);
  var idxres1975 = call1974.methods["[]"].call(call1974, [1], var_partnr);
  var call1976 = callmethod(idxres1975,"args", [0]);
  var call1977 = callmethod(call1976,"size", [0]);
  var opresult1979 = callmethod(var_call, "++", [1], call1977);
  var_call = opresult1979;
  lineNumber = 611
  lineNumber = 612
  lineNumber = 609
  lineNumber = 612
  lineNumber = 1
  lineNumber = 612
  lineNumber = 1
  lineNumber = 609
  var call1981 = callmethod(var_o,"with", [0]);
  var call1982 = callmethod(call1981,"size", [0]);
  var opresult1984 = callmethod(var_partnr, "<", [1], call1982);
  if (Grace_isTrue(opresult1984)) {
  lineNumber = 611
  lineNumber = 610
  var string1985 = new GraceString(", ");
  var opresult1987 = callmethod(var_call, "++", [1], string1985);
  var_call = opresult1987;
  var if1980 = opresult1987;
}
  return if1980;
};
  var call1988 = callmethod(Grace_prelude,"for()do", [1, 1], call1972, block1973);
  lineNumber = 614
  lineNumber = 613
  var string1989 = new GraceString("]");
  var opresult1991 = callmethod(var_call, "++", [1], string1989);
  var_call = opresult1991;
  lineNumber = 616
  lineNumber = 614
  lineNumber = 616
  var block1992 = Grace_allocObject();
  block1992.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1992.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1992.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1992.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1992.receiver = this;
  block1992.className = 'block<genjs:616>';
  block1992.real = function(
var_arg
) {
  lineNumber = 615
  var string1993 = new GraceString(", ");
  var opresult1995 = callmethod(var_call, "++", [1], string1993);
  var opresult1997 = callmethod(opresult1995, "++", [1], var_arg);
  var_call = opresult1997;
  return opresult1997;
};
  var call1998 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block1992);
  lineNumber = 618
  lineNumber = 617
  var string1999 = new GraceString(");");
  var opresult2001 = callmethod(var_call, "++", [1], string1999);
  var_call = opresult2001;
  lineNumber = 618
  lineNumber = 619
  var call2002 = callmethod(this,"out", [1], var_call);
  var if1893 = call2002;
}
  var if1821 = if1893;
}
  var if1781 = if1821;
}
  var if1709 = if1781;
}
  lineNumber = 621
  lineNumber = 1
  lineNumber = 621
  lineNumber = 620
  var string2003 = new GraceString("call");
  var opresult2005 = callmethod(string2003, "++", [1], var_auto__95__count);
  var call2006 = callmethod(var_o,"register:=", [1], opresult2005);
  lineNumber = 622
  lineNumber = 621
  var opresult2008 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2008;
  return opresult2008
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilecall"] = func1697;
  lineNumber = 666
var func2009 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 625
  lineNumber = 624
  var string2010 = new GraceString("");
  var var_escval = string2010;
  lineNumber = 625
  lineNumber = 1
  lineNumber = 625
  var call2011 = callmethod(var_o,"value", [0]);
  var call2012 = Grace_length(call2011);
  var quotient2014 = callmethod(call2012, "/", [1], new GraceNum(2));
  var var_l = quotient2014;
  lineNumber = 627
  lineNumber = 626
  var var_i = new GraceNum(0);
  lineNumber = 633
  lineNumber = 627
  lineNumber = 1
  lineNumber = 627
  var call2015 = callmethod(var_o,"value", [0]);
  lineNumber = 633
  var block2016 = Grace_allocObject();
  block2016.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2016.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2016.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2016.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2016.receiver = this;
  block2016.className = 'block<genjs:633>';
  block2016.real = function(
var_c
) {
  lineNumber = 630
  lineNumber = 631
  lineNumber = 628
  var modulus2019 = callmethod(var_i, "%", [1], new GraceNum(2));
  var opresult2021 = callmethod(modulus2019, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2021)) {
  lineNumber = 630
  lineNumber = 629
  var string2022 = new GraceString("\\");
  var opresult2024 = callmethod(var_escval, "++", [1], string2022);
  var_escval = opresult2024;
  var if2017 = opresult2024;
}
  lineNumber = 632
  lineNumber = 631
  var opresult2026 = callmethod(var_escval, "++", [1], var_c);
  var_escval = opresult2026;
  lineNumber = 633
  lineNumber = 632
  var opresult2028 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult2028;
  return opresult2028;
};
  var call2029 = callmethod(Grace_prelude,"for()do", [1, 1], call2015, block2016);
  lineNumber = 635
  lineNumber = 634
  var string2030 = new GraceString("  %tmp");
  var opresult2032 = callmethod(string2030, "++", [1], var_auto__95__count);
  var string2033 = new GraceString(" = load %object** @.octlit");
  var opresult2035 = callmethod(opresult2032, "++", [1], string2033);
  lineNumber = 635
  var opresult2037 = callmethod(opresult2035, "++", [1], var_auto__95__count);
  lineNumber = 636
  var call2038 = callmethod(this,"out", [1], opresult2037);
  lineNumber = 637
  lineNumber = 636
  var string2039 = new GraceString("  %cmp");
  var opresult2041 = callmethod(string2039, "++", [1], var_auto__95__count);
  var string2042 = new GraceString(" = icmp ne %object* %tmp");
  var opresult2044 = callmethod(opresult2041, "++", [1], string2042);
  lineNumber = 637
  var opresult2046 = callmethod(opresult2044, "++", [1], var_auto__95__count);
  var string2047 = new GraceString(", null");
  var opresult2049 = callmethod(opresult2046, "++", [1], string2047);
  lineNumber = 638
  var call2050 = callmethod(this,"out", [1], opresult2049);
  lineNumber = 640
  lineNumber = 638
  var string2051 = new GraceString("  br i1 %cmp");
  var opresult2053 = callmethod(string2051, "++", [1], var_auto__95__count);
  var string2054 = new GraceString(", label %octlit");
  var opresult2056 = callmethod(opresult2053, "++", [1], string2054);
  lineNumber = 639
  var opresult2058 = callmethod(opresult2056, "++", [1], var_auto__95__count);
  var string2059 = new GraceString(".already, label %octlit");
  var opresult2061 = callmethod(opresult2058, "++", [1], string2059);
  lineNumber = 640
  var opresult2063 = callmethod(opresult2061, "++", [1], var_auto__95__count);
  var string2064 = new GraceString(".define");
  var opresult2066 = callmethod(opresult2063, "++", [1], string2064);
  lineNumber = 641
  var call2067 = callmethod(this,"out", [1], opresult2066);
  var string2068 = new GraceString("octlit");
  var opresult2070 = callmethod(string2068, "++", [1], var_auto__95__count);
  var string2071 = new GraceString(".already");
  var opresult2073 = callmethod(opresult2070, "++", [1], string2071);
  lineNumber = 642
  var call2074 = callmethod(this,"beginblock", [1], opresult2073);
  lineNumber = 643
  lineNumber = 642
  var string2075 = new GraceString("  %alreadyoctets");
  var opresult2077 = callmethod(string2075, "++", [1], var_auto__95__count);
  var string2078 = new GraceString(" = load %object** @.octlit");
  var opresult2080 = callmethod(opresult2077, "++", [1], string2078);
  lineNumber = 643
  var opresult2082 = callmethod(opresult2080, "++", [1], var_auto__95__count);
  lineNumber = 644
  var call2083 = callmethod(this,"out", [1], opresult2082);
  var string2084 = new GraceString("  br label %octlit");
  var opresult2086 = callmethod(string2084, "++", [1], var_auto__95__count);
  var string2087 = new GraceString(".end");
  var opresult2089 = callmethod(opresult2086, "++", [1], string2087);
  lineNumber = 645
  var call2090 = callmethod(this,"out", [1], opresult2089);
  var string2091 = new GraceString("octlit");
  var opresult2093 = callmethod(string2091, "++", [1], var_auto__95__count);
  var string2094 = new GraceString(".define");
  var opresult2096 = callmethod(opresult2093, "++", [1], string2094);
  lineNumber = 646
  var call2097 = callmethod(this,"beginblock", [1], opresult2096);
  var string2098 = new GraceString("  %oct");
  var opresult2100 = callmethod(string2098, "++", [1], var_auto__95__count);
  var string2101 = new GraceString(" = getelementptr [");
  var opresult2103 = callmethod(opresult2100, "++", [1], string2101);
  var opresult2105 = callmethod(opresult2103, "++", [1], var_l);
  var string2106 = new GraceString(" x i8]* @.oct");
  var opresult2108 = callmethod(opresult2105, "++", [1], string2106);
  lineNumber = 1
  lineNumber = 646
  var call2109 = callmethod(var_constants,"size", [0]);
  var opresult2111 = callmethod(opresult2108, "++", [1], call2109);
  var string2112 = new GraceString(", i32 0, i32 0");
  var opresult2114 = callmethod(opresult2111, "++", [1], string2112);
  lineNumber = 647
  var call2115 = callmethod(this,"out", [1], opresult2114);
  lineNumber = 649
  lineNumber = 647
  var string2116 = new GraceString("  %defoctets");
  var opresult2118 = callmethod(string2116, "++", [1], var_auto__95__count);
  var string2119 = new GraceString(" = call %object* ");
  var opresult2121 = callmethod(opresult2118, "++", [1], string2119);
  lineNumber = 648
  var string2122 = new GraceString("@alloc_Octets(i8* ");
  var opresult2124 = callmethod(opresult2121, "++", [1], string2122);
  lineNumber = 649
  var string2125 = new GraceString("%oct");
  var opresult2127 = callmethod(opresult2124, "++", [1], string2125);
  var opresult2129 = callmethod(opresult2127, "++", [1], var_auto__95__count);
  var string2130 = new GraceString(", i32 ");
  var opresult2132 = callmethod(opresult2129, "++", [1], string2130);
  var opresult2134 = callmethod(opresult2132, "++", [1], var_l);
  var string2135 = new GraceString(")");
  var opresult2137 = callmethod(opresult2134, "++", [1], string2135);
  lineNumber = 650
  var call2138 = callmethod(this,"out", [1], opresult2137);
  lineNumber = 651
  lineNumber = 650
  var string2139 = new GraceString("  store %object* %defoctets");
  var opresult2141 = callmethod(string2139, "++", [1], var_auto__95__count);
  var string2142 = new GraceString(", %object** ");
  var opresult2144 = callmethod(opresult2141, "++", [1], string2142);
  lineNumber = 651
  var string2145 = new GraceString("@.octlit");
  var opresult2147 = callmethod(opresult2144, "++", [1], string2145);
  var opresult2149 = callmethod(opresult2147, "++", [1], var_auto__95__count);
  lineNumber = 652
  var call2150 = callmethod(this,"out", [1], opresult2149);
  var string2151 = new GraceString("br label %octlit");
  var opresult2153 = callmethod(string2151, "++", [1], var_auto__95__count);
  var string2154 = new GraceString(".end");
  var opresult2156 = callmethod(opresult2153, "++", [1], string2154);
  lineNumber = 653
  var call2157 = callmethod(this,"out", [1], opresult2156);
  var string2158 = new GraceString("octlit");
  var opresult2160 = callmethod(string2158, "++", [1], var_auto__95__count);
  var string2161 = new GraceString(".end");
  var opresult2163 = callmethod(opresult2160, "++", [1], string2161);
  lineNumber = 654
  var call2164 = callmethod(this,"beginblock", [1], opresult2163);
  lineNumber = 657
  lineNumber = 654
  var string2165 = new GraceString(" %octets");
  var opresult2167 = callmethod(string2165, "++", [1], var_auto__95__count);
  var string2168 = new GraceString(" = phi %object* [%alreadyoctets");
  var opresult2170 = callmethod(opresult2167, "++", [1], string2168);
  lineNumber = 655
  var opresult2172 = callmethod(opresult2170, "++", [1], var_auto__95__count);
  var string2173 = new GraceString(", %octlit");
  var opresult2175 = callmethod(opresult2172, "++", [1], string2173);
  var opresult2177 = callmethod(opresult2175, "++", [1], var_auto__95__count);
  var string2178 = new GraceString(".already], ");
  var opresult2180 = callmethod(opresult2177, "++", [1], string2178);
  lineNumber = 656
  var string2181 = new GraceString("[%defoctets");
  var opresult2183 = callmethod(opresult2180, "++", [1], string2181);
  var opresult2185 = callmethod(opresult2183, "++", [1], var_auto__95__count);
  var string2186 = new GraceString(", %octlit");
  var opresult2188 = callmethod(opresult2185, "++", [1], string2186);
  var opresult2190 = callmethod(opresult2188, "++", [1], var_auto__95__count);
  lineNumber = 657
  var string2191 = new GraceString(".define]");
  var opresult2193 = callmethod(opresult2190, "++", [1], string2191);
  lineNumber = 658
  var call2194 = callmethod(this,"out", [1], opresult2193);
  lineNumber = 660
  lineNumber = 658
  var string2195 = new GraceString("@.oct");
  lineNumber = 660
  lineNumber = 1
  lineNumber = 658
  var call2196 = callmethod(var_constants,"size", [0]);
  var opresult2198 = callmethod(string2195, "++", [1], call2196);
  var string2199 = new GraceString(" = private unnamed_addr ");
  var opresult2201 = callmethod(opresult2198, "++", [1], string2199);
  lineNumber = 659
  var string2202 = new GraceString("constant [");
  var opresult2204 = callmethod(opresult2201, "++", [1], string2202);
  var opresult2206 = callmethod(opresult2204, "++", [1], var_l);
  var string2207 = new GraceString(" x i8] c\"");
  var opresult2209 = callmethod(opresult2206, "++", [1], string2207);
  var opresult2211 = callmethod(opresult2209, "++", [1], var_escval);
  var string2212 = new GraceString("\"");
  var opresult2214 = callmethod(opresult2211, "++", [1], string2212);
  var var_con = opresult2214;
  lineNumber = 660
  var call2215 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 663
  lineNumber = 661
  var string2216 = new GraceString("@.octlit");
  var opresult2218 = callmethod(string2216, "++", [1], var_auto__95__count);
  lineNumber = 662
  var string2219 = new GraceString(" = private global %object* null");
  var opresult2221 = callmethod(opresult2218, "++", [1], string2219);
  var_con = opresult2221;
  lineNumber = 663
  var call2222 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 665
  lineNumber = 1
  lineNumber = 665
  lineNumber = 664
  var string2223 = new GraceString("%octets");
  var opresult2225 = callmethod(string2223, "++", [1], var_auto__95__count);
  var call2226 = callmethod(var_o,"register:=", [1], opresult2225);
  lineNumber = 666
  lineNumber = 665
  var opresult2228 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2228;
  return opresult2228
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileoctets"] = func2009;
  lineNumber = 673
var func2229 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 668
  var string2230 = new GraceString("// Import of ");
  lineNumber = 1
  lineNumber = 668
  lineNumber = 1
  lineNumber = 668
  var call2231 = callmethod(var_o,"value", [0]);
  var call2232 = callmethod(call2231,"value", [0]);
  var opresult2234 = callmethod(string2230, "++", [1], call2232);
  lineNumber = 669
  var call2235 = callmethod(this,"out", [1], opresult2234);
  lineNumber = 670
  var var_con;
  lineNumber = 1
  lineNumber = 670
  lineNumber = 1
  lineNumber = 670
  lineNumber = 1
  lineNumber = 670
  var call2236 = callmethod(var_o,"value", [0]);
  var call2237 = callmethod(call2236,"value", [0]);
  var call2238 = callmethod(call2237,"_escape", [0]);
  var var_nm = call2238;
  lineNumber = 671
  var string2239 = new GraceString("  var ");
  var call2240 = callmethod(this,"varf", [1], var_nm);
  var opresult2242 = callmethod(string2239, "++", [1], call2240);
  var string2243 = new GraceString(" = do_import(\"");
  var opresult2245 = callmethod(string2243, "++", [1], var_nm);
  var string2246 = new GraceString("\", gracecode_");
  var opresult2248 = callmethod(opresult2245, "++", [1], string2246);
  var opresult2250 = callmethod(opresult2248, "++", [1], var_nm);
  var string2251 = new GraceString(");");
  var opresult2253 = callmethod(opresult2250, "++", [1], string2251);
  var opresult2255 = callmethod(opresult2242, "++", [1], opresult2253);
  lineNumber = 672
  var call2256 = callmethod(this,"out", [1], opresult2255);
  lineNumber = 673
  lineNumber = 1
  lineNumber = 672
  var string2257 = new GraceString("undefined");
  var call2258 = callmethod(var_o,"register:=", [1], string2257);
  return call2258
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileimport"] = func2229;
  lineNumber = 682
var func2259 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 675
  lineNumber = 1
  lineNumber = 675
  var call2260 = callmethod(var_o,"value", [0]);
  lineNumber = 676
  var call2261 = callmethod(this,"compilenode", [1], call2260);
  var var_reg = call2261;
  lineNumber = 679
  lineNumber = 676
  if (Grace_isTrue(var_inBlock)) {
  lineNumber = 677
  var string2263 = new GraceString("  throw new ReturnException(");
  var opresult2265 = callmethod(string2263, "++", [1], var_reg);
  var string2266 = new GraceString(", returnTarget);");
  var opresult2268 = callmethod(opresult2265, "++", [1], string2266);
  lineNumber = 678
  var call2269 = callmethod(this,"out", [1], opresult2268);
  var if2262 = call2269;
  } else {
  lineNumber = 679
  var string2270 = new GraceString("  return ");
  var opresult2272 = callmethod(string2270, "++", [1], var_reg);
  lineNumber = 680
  var call2273 = callmethod(this,"out", [1], opresult2272);
  var if2262 = call2273;
}
  lineNumber = 682
  lineNumber = 1
  lineNumber = 681
  var string2274 = new GraceString("undefined");
  var call2275 = callmethod(var_o,"register:=", [1], string2274);
  return call2275
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilereturn"] = func2259;
  lineNumber = 840
var func2276 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 685
  lineNumber = 684
  var opresult2278 = callmethod(var_compilationDepth, "+", [1], new GraceNum(1));
  var_compilationDepth = opresult2278;
  lineNumber = 687
  lineNumber = 689
  lineNumber = 685
  lineNumber = 689
  lineNumber = 1
  lineNumber = 685
  var call2280 = callmethod(var_o,"line", [0]);
  var opresult2282 = callmethod(var_linenum, "/=", [1], call2280);
  if (Grace_isTrue(opresult2282)) {
  lineNumber = 687
  lineNumber = 1
  lineNumber = 686
  var call2283 = callmethod(var_o,"line", [0]);
  var_linenum = call2283;
  lineNumber = 687
  var string2284 = new GraceString("  lineNumber = ");
  var opresult2286 = callmethod(string2284, "++", [1], var_linenum);
  var call2287 = callmethod(this,"out", [1], opresult2286);
  var if2279 = call2287;
}
  lineNumber = 691
  lineNumber = 692
  lineNumber = 1
  lineNumber = 689
  var call2289 = callmethod(var_o,"kind", [0]);
  var string2290 = new GraceString("num");
  var opresult2292 = callmethod(call2289, "==", [1], string2290);
  if (Grace_isTrue(opresult2292)) {
  lineNumber = 691
  lineNumber = 1
  lineNumber = 691
  lineNumber = 690
  var string2293 = new GraceString("new GraceNum(");
  lineNumber = 691
  lineNumber = 1
  lineNumber = 690
  var call2294 = callmethod(var_o,"value", [0]);
  var opresult2296 = callmethod(string2293, "++", [1], call2294);
  var string2297 = new GraceString(")");
  var opresult2299 = callmethod(opresult2296, "++", [1], string2297);
  var call2300 = callmethod(var_o,"register:=", [1], opresult2299);
  var if2288 = call2300;
}
  lineNumber = 693
  lineNumber = 692
  var string2301 = new GraceString("");
  var var_l = string2301;
  lineNumber = 722
  lineNumber = 723
  lineNumber = 1
  lineNumber = 693
  var call2303 = callmethod(var_o,"kind", [0]);
  var string2304 = new GraceString("string");
  var opresult2306 = callmethod(call2303, "==", [1], string2304);
  if (Grace_isTrue(opresult2306)) {
  lineNumber = 694
  lineNumber = 1
  lineNumber = 694
  var call2307 = callmethod(var_o,"value", [0]);
  var call2308 = Grace_length(call2307);
  var_l = call2308;
  lineNumber = 696
  lineNumber = 695
  var opresult2310 = callmethod(var_l, "+", [1], new GraceNum(1));
  var_l = opresult2310;
  lineNumber = 698
  lineNumber = 696
  var string2311 = new GraceString("");
  var var_os = string2311;
  lineNumber = 713
  lineNumber = 698
  lineNumber = 1
  lineNumber = 698
  var call2312 = callmethod(var_o,"value", [0]);
  lineNumber = 713
  var block2313 = Grace_allocObject();
  block2313.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2313.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2313.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2313.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2313.receiver = this;
  block2313.className = 'block<genjs:713>';
  block2313.real = function(
var_c
) {
  lineNumber = 714
  lineNumber = 699
  var string2315 = new GraceString("\"");
  var opresult2317 = callmethod(var_c, "==", [1], string2315);
  if (Grace_isTrue(opresult2317)) {
  lineNumber = 701
  lineNumber = 700
  var string2318 = new GraceString("\\\"");
  var opresult2320 = callmethod(var_os, "++", [1], string2318);
  var_os = opresult2320;
  var if2314 = opresult2320;
  } else {
  lineNumber = 713
  lineNumber = 703
  lineNumber = 701
  var string2322 = new GraceString("\\");
  var opresult2324 = callmethod(var_c, "==", [1], string2322);
  if (Grace_isTrue(opresult2324)) {
  lineNumber = 703
  lineNumber = 702
  var string2325 = new GraceString("\\\\");
  var opresult2327 = callmethod(var_os, "++", [1], string2325);
  var_os = opresult2327;
  var if2321 = opresult2327;
  } else {
  lineNumber = 713
  lineNumber = 705
  lineNumber = 703
  var string2329 = new GraceString("\n");
  var opresult2331 = callmethod(var_c, "==", [1], string2329);
  if (Grace_isTrue(opresult2331)) {
  lineNumber = 705
  lineNumber = 704
  var string2332 = new GraceString("\\n");
  var opresult2334 = callmethod(var_os, "++", [1], string2332);
  var_os = opresult2334;
  var if2328 = opresult2334;
  } else {
  lineNumber = 713
  lineNumber = 711
  lineNumber = 1
  lineNumber = 705
  var call2336 = callmethod(var_c,"ord", [0]);
  var opresult2338 = callmethod(call2336, "<", [1], new GraceNum(32));
  lineNumber = 711
  lineNumber = 1
  lineNumber = 705
  var call2339 = callmethod(var_c,"ord", [0]);
  var opresult2341 = callmethod(call2339, ">", [1], new GraceNum(126));
  var opresult2343 = callmethod(opresult2338, "|", [1], opresult2341);
  if (Grace_isTrue(opresult2343)) {
  lineNumber = 706
  lineNumber = 1
  lineNumber = 706
  var call2344 = callmethod(var_c,"ord", [0]);
  var call2345 = callmethod(var_util,"hex", [1], call2344);
  var var_uh = call2345;
  lineNumber = 709
  lineNumber = 707
  var block2346 = Grace_allocObject();
  block2346.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2346.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2346.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2346.receiver = this;
  block2346.className = 'block<genjs:707>';
  block2346.real = function(
) {
  lineNumber = 1
  lineNumber = 707
  var call2347 = callmethod(var_uh,"size", [0]);
  var opresult2349 = callmethod(call2347, "<", [1], new GraceNum(4));
  return opresult2349;
};
  lineNumber = 709
  var block2350 = Grace_allocObject();
  block2350.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2350.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2350.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2350.receiver = this;
  block2350.className = 'block<genjs:709>';
  block2350.real = function(
) {
  lineNumber = 708
  var string2351 = new GraceString("0");
  var opresult2353 = callmethod(string2351, "++", [1], var_uh);
  var_uh = opresult2353;
  return opresult2353;
};
  var call2354 = callmethod(Grace_prelude,"while()do", [1, 1], block2346, block2350);
  lineNumber = 711
  lineNumber = 710
  var string2355 = new GraceString("\\u");
  var opresult2357 = callmethod(var_os, "++", [1], string2355);
  var opresult2359 = callmethod(opresult2357, "++", [1], var_uh);
  var_os = opresult2359;
  var if2335 = opresult2359;
  } else {
  lineNumber = 713
  lineNumber = 712
  var opresult2361 = callmethod(var_os, "++", [1], var_c);
  var_os = opresult2361;
  var if2335 = opresult2361;
}
  var if2328 = if2335;
}
  var if2321 = if2328;
}
  var if2314 = if2321;
}
  return if2314;
};
  var call2362 = callmethod(Grace_prelude,"for()do", [1, 1], call2312, block2313);
  lineNumber = 715
  var string2363 = new GraceString("\\");
  var string2364 = new GraceString("\\\\");
  lineNumber = 716
  lineNumber = 1
  lineNumber = 715
  var call2365 = callmethod(var_o,"value", [0]);
  var call2366 = callmethod(call2365,"replace()with", [1, 1], string2363, string2364);
  var var_sval = call2366;
  lineNumber = 716
  var string2367 = new GraceString("\"");
  var string2368 = new GraceString("\\\"");
  var call2369 = callmethod(var_sval,"replace()with", [1, 1], string2367, string2368);
  var_sval = call2369;
  lineNumber = 717
  var string2370 = new GraceString("\n");
  var string2371 = new GraceString("\\n");
  var call2372 = callmethod(var_sval,"replace()with", [1, 1], string2370, string2371);
  var_sval = call2372;
  lineNumber = 719
  lineNumber = 718
  var string2373 = new GraceString("  var string");
  var opresult2375 = callmethod(string2373, "++", [1], var_auto__95__count);
  var string2376 = new GraceString(" = new GraceString(\"");
  var opresult2378 = callmethod(opresult2375, "++", [1], string2376);
  lineNumber = 719
  var opresult2380 = callmethod(opresult2378, "++", [1], var_os);
  var string2381 = new GraceString("\");");
  var opresult2383 = callmethod(opresult2380, "++", [1], string2381);
  lineNumber = 720
  var call2384 = callmethod(this,"out", [1], opresult2383);
  lineNumber = 721
  lineNumber = 1
  lineNumber = 721
  lineNumber = 720
  var string2385 = new GraceString("string");
  var opresult2387 = callmethod(string2385, "++", [1], var_auto__95__count);
  var call2388 = callmethod(var_o,"register:=", [1], opresult2387);
  lineNumber = 722
  lineNumber = 721
  var opresult2390 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2390;
  var if2302 = opresult2390;
}
  lineNumber = 724
  lineNumber = 726
  lineNumber = 1
  lineNumber = 723
  var call2392 = callmethod(var_o,"kind", [0]);
  var string2393 = new GraceString("index");
  var opresult2395 = callmethod(call2392, "==", [1], string2393);
  if (Grace_isTrue(opresult2395)) {
  lineNumber = 724
  lineNumber = 725
  var call2396 = callmethod(this,"compileindex", [1], var_o);
  var if2391 = call2396;
}
  lineNumber = 727
  lineNumber = 729
  lineNumber = 1
  lineNumber = 726
  var call2398 = callmethod(var_o,"kind", [0]);
  var string2399 = new GraceString("octets");
  var opresult2401 = callmethod(call2398, "==", [1], string2399);
  if (Grace_isTrue(opresult2401)) {
  lineNumber = 727
  lineNumber = 728
  var call2402 = callmethod(this,"compileoctets", [1], var_o);
  var if2397 = call2402;
}
  lineNumber = 730
  lineNumber = 732
  lineNumber = 1
  lineNumber = 729
  var call2404 = callmethod(var_o,"kind", [0]);
  var string2405 = new GraceString("import");
  var opresult2407 = callmethod(call2404, "==", [1], string2405);
  if (Grace_isTrue(opresult2407)) {
  lineNumber = 730
  lineNumber = 731
  var call2408 = callmethod(this,"compileimport", [1], var_o);
  var if2403 = call2408;
}
  lineNumber = 733
  lineNumber = 735
  lineNumber = 1
  lineNumber = 732
  var call2410 = callmethod(var_o,"kind", [0]);
  var string2411 = new GraceString("return");
  var opresult2413 = callmethod(call2410, "==", [1], string2411);
  if (Grace_isTrue(opresult2413)) {
  lineNumber = 733
  lineNumber = 734
  var call2414 = callmethod(this,"compilereturn", [1], var_o);
  var if2409 = call2414;
}
  lineNumber = 736
  lineNumber = 738
  lineNumber = 1
  lineNumber = 735
  var call2416 = callmethod(var_o,"kind", [0]);
  var string2417 = new GraceString("generic");
  var opresult2419 = callmethod(call2416, "==", [1], string2417);
  if (Grace_isTrue(opresult2419)) {
  lineNumber = 736
  lineNumber = 1
  lineNumber = 736
  lineNumber = 1
  lineNumber = 736
  var call2420 = callmethod(var_o,"value", [0]);
  lineNumber = 737
  var call2421 = callmethod(this,"compilenode", [1], call2420);
  lineNumber = 736
  var call2422 = callmethod(var_o,"register:=", [1], call2421);
  var if2415 = call2422;
}
  lineNumber = 748
  lineNumber = 750
  lineNumber = 1
  lineNumber = 738
  var call2424 = callmethod(var_o,"kind", [0]);
  var string2425 = new GraceString("identifier");
  var opresult2427 = callmethod(call2424, "==", [1], string2425);
  lineNumber = 750
  lineNumber = 1
  lineNumber = 739
  var call2428 = callmethod(var_o,"value", [0]);
  var string2429 = new GraceString("true");
  var opresult2431 = callmethod(call2428, "==", [1], string2429);
  lineNumber = 750
  lineNumber = 1
  lineNumber = 739
  var call2432 = callmethod(var_o,"value", [0]);
  var string2433 = new GraceString("false");
  var opresult2435 = callmethod(call2432, "==", [1], string2433);
  var opresult2437 = callmethod(opresult2431, "|", [1], opresult2435);
  var opresult2439 = callmethod(opresult2427, "&", [1], opresult2437);
  if (Grace_isTrue(opresult2439)) {
  lineNumber = 741
  lineNumber = 740
  var var_val = new GraceNum(0);
  lineNumber = 743
  lineNumber = 744
  lineNumber = 1
  lineNumber = 741
  var call2441 = callmethod(var_o,"value", [0]);
  var string2442 = new GraceString("true");
  var opresult2444 = callmethod(call2441, "==", [1], string2442);
  if (Grace_isTrue(opresult2444)) {
  lineNumber = 743
  lineNumber = 742
  var_val = new GraceNum(1);
  var if2440 = new GraceNum(1);
}
  lineNumber = 744
  var string2445 = new GraceString("  var bool");
  var opresult2447 = callmethod(string2445, "++", [1], var_auto__95__count);
  var string2448 = new GraceString(" = new GraceBoolean(");
  var opresult2450 = callmethod(opresult2447, "++", [1], string2448);
  lineNumber = 1
  lineNumber = 744
  var call2451 = callmethod(var_o,"value", [0]);
  var opresult2453 = callmethod(opresult2450, "++", [1], call2451);
  var string2454 = new GraceString(")");
  var opresult2456 = callmethod(opresult2453, "++", [1], string2454);
  lineNumber = 745
  var call2457 = callmethod(this,"out", [1], opresult2456);
  lineNumber = 746
  lineNumber = 1
  lineNumber = 746
  lineNumber = 745
  var string2458 = new GraceString("bool");
  var opresult2460 = callmethod(string2458, "++", [1], var_auto__95__count);
  var call2461 = callmethod(var_o,"register:=", [1], opresult2460);
  lineNumber = 747
  lineNumber = 746
  var opresult2463 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2463;
  var if2423 = opresult2463;
  } else {
  lineNumber = 748
  lineNumber = 750
  lineNumber = 1
  lineNumber = 747
  var call2465 = callmethod(var_o,"kind", [0]);
  var string2466 = new GraceString("identifier");
  var opresult2468 = callmethod(call2465, "==", [1], string2466);
  if (Grace_isTrue(opresult2468)) {
  lineNumber = 748
  lineNumber = 749
  var call2469 = callmethod(this,"compileidentifier", [1], var_o);
  var if2464 = call2469;
}
  var if2423 = if2464;
}
  lineNumber = 751
  lineNumber = 753
  lineNumber = 1
  lineNumber = 750
  var call2471 = callmethod(var_o,"kind", [0]);
  var string2472 = new GraceString("defdec");
  var opresult2474 = callmethod(call2471, "==", [1], string2472);
  if (Grace_isTrue(opresult2474)) {
  lineNumber = 751
  lineNumber = 752
  var call2475 = callmethod(this,"compiledefdec", [1], var_o);
  var if2470 = call2475;
}
  lineNumber = 754
  lineNumber = 756
  lineNumber = 1
  lineNumber = 753
  var call2477 = callmethod(var_o,"kind", [0]);
  var string2478 = new GraceString("vardec");
  var opresult2480 = callmethod(call2477, "==", [1], string2478);
  if (Grace_isTrue(opresult2480)) {
  lineNumber = 754
  lineNumber = 755
  var call2481 = callmethod(this,"compilevardec", [1], var_o);
  var if2476 = call2481;
}
  lineNumber = 757
  lineNumber = 759
  lineNumber = 1
  lineNumber = 756
  var call2483 = callmethod(var_o,"kind", [0]);
  var string2484 = new GraceString("block");
  var opresult2486 = callmethod(call2483, "==", [1], string2484);
  if (Grace_isTrue(opresult2486)) {
  lineNumber = 757
  lineNumber = 758
  var call2487 = callmethod(this,"compileblock", [1], var_o);
  var if2482 = call2487;
}
  lineNumber = 760
  lineNumber = 762
  lineNumber = 1
  lineNumber = 759
  var call2489 = callmethod(var_o,"kind", [0]);
  var string2490 = new GraceString("method");
  var opresult2492 = callmethod(call2489, "==", [1], string2490);
  if (Grace_isTrue(opresult2492)) {
  lineNumber = 760
  var string2493 = new GraceString("this");
  lineNumber = 761
  var call2494 = callmethod(this,"compilemethod", [2], var_o, string2493);
  var if2488 = call2494;
}
  lineNumber = 763
  lineNumber = 765
  lineNumber = 1
  lineNumber = 762
  var call2496 = callmethod(var_o,"kind", [0]);
  var string2497 = new GraceString("array");
  var opresult2499 = callmethod(call2496, "==", [1], string2497);
  if (Grace_isTrue(opresult2499)) {
  lineNumber = 763
  lineNumber = 764
  var call2500 = callmethod(this,"compilearray", [1], var_o);
  var if2495 = call2500;
}
  lineNumber = 766
  lineNumber = 768
  lineNumber = 1
  lineNumber = 765
  var call2502 = callmethod(var_o,"kind", [0]);
  var string2503 = new GraceString("bind");
  var opresult2505 = callmethod(call2502, "==", [1], string2503);
  if (Grace_isTrue(opresult2505)) {
  lineNumber = 766
  lineNumber = 767
  var call2506 = callmethod(this,"compilebind", [1], var_o);
  var if2501 = call2506;
}
  lineNumber = 769
  lineNumber = 771
  lineNumber = 1
  lineNumber = 768
  var call2508 = callmethod(var_o,"kind", [0]);
  var string2509 = new GraceString("while");
  var opresult2511 = callmethod(call2508, "==", [1], string2509);
  if (Grace_isTrue(opresult2511)) {
  lineNumber = 769
  lineNumber = 770
  var call2512 = callmethod(this,"compilewhile", [1], var_o);
  var if2507 = call2512;
}
  lineNumber = 772
  lineNumber = 774
  lineNumber = 1
  lineNumber = 771
  var call2514 = callmethod(var_o,"kind", [0]);
  var string2515 = new GraceString("if");
  var opresult2517 = callmethod(call2514, "==", [1], string2515);
  if (Grace_isTrue(opresult2517)) {
  lineNumber = 772
  lineNumber = 773
  var call2518 = callmethod(this,"compileif", [1], var_o);
  var if2513 = call2518;
}
  lineNumber = 775
  lineNumber = 777
  lineNumber = 1
  lineNumber = 774
  var call2520 = callmethod(var_o,"kind", [0]);
  var string2521 = new GraceString("matchcase");
  var opresult2523 = callmethod(call2520, "==", [1], string2521);
  if (Grace_isTrue(opresult2523)) {
  lineNumber = 775
  lineNumber = 776
  var call2524 = callmethod(this,"compilematchcase", [1], var_o);
  var if2519 = call2524;
}
  lineNumber = 778
  lineNumber = 780
  lineNumber = 1
  lineNumber = 777
  var call2526 = callmethod(var_o,"kind", [0]);
  var string2527 = new GraceString("class");
  var opresult2529 = callmethod(call2526, "==", [1], string2527);
  if (Grace_isTrue(opresult2529)) {
  lineNumber = 778
  lineNumber = 779
  var call2530 = callmethod(this,"compileclass", [1], var_o);
  var if2525 = call2530;
}
  lineNumber = 781
  lineNumber = 783
  lineNumber = 1
  lineNumber = 780
  var call2532 = callmethod(var_o,"kind", [0]);
  var string2533 = new GraceString("object");
  var opresult2535 = callmethod(call2532, "==", [1], string2533);
  if (Grace_isTrue(opresult2535)) {
  lineNumber = 781
  var string2536 = new GraceString("this");
  lineNumber = 782
  var call2537 = callmethod(this,"compileobject", [2], var_o, string2536);
  var if2531 = call2537;
}
  lineNumber = 784
  lineNumber = 786
  lineNumber = 1
  lineNumber = 783
  var call2539 = callmethod(var_o,"kind", [0]);
  var string2540 = new GraceString("type");
  var opresult2542 = callmethod(call2539, "==", [1], string2540);
  if (Grace_isTrue(opresult2542)) {
  lineNumber = 784
  lineNumber = 785
  var call2543 = callmethod(this,"compiletype", [1], var_o);
  var if2538 = call2543;
}
  lineNumber = 787
  lineNumber = 789
  lineNumber = 1
  lineNumber = 786
  var call2545 = callmethod(var_o,"kind", [0]);
  var string2546 = new GraceString("member");
  var opresult2548 = callmethod(call2545, "==", [1], string2546);
  if (Grace_isTrue(opresult2548)) {
  lineNumber = 787
  lineNumber = 788
  var call2549 = callmethod(this,"compilemember", [1], var_o);
  var if2544 = call2549;
}
  lineNumber = 790
  lineNumber = 792
  lineNumber = 1
  lineNumber = 789
  var call2551 = callmethod(var_o,"kind", [0]);
  var string2552 = new GraceString("for");
  var opresult2554 = callmethod(call2551, "==", [1], string2552);
  if (Grace_isTrue(opresult2554)) {
  lineNumber = 790
  lineNumber = 791
  var call2555 = callmethod(this,"compilefor", [1], var_o);
  var if2550 = call2555;
}
  lineNumber = 833
  lineNumber = 836
  lineNumber = 1
  lineNumber = 792
  var call2557 = callmethod(var_o,"kind", [0]);
  var string2558 = new GraceString("call");
  var opresult2560 = callmethod(call2557, "==", [1], string2558);
  if (Grace_isTrue(opresult2560)) {
  lineNumber = 833
  lineNumber = 835
  lineNumber = 1
  lineNumber = 835
  lineNumber = 1
  lineNumber = 793
  var call2562 = callmethod(var_o,"value", [0]);
  var call2563 = callmethod(call2562,"value", [0]);
  var string2564 = new GraceString("print");
  var opresult2566 = callmethod(call2563, "==", [1], string2564);
  if (Grace_isTrue(opresult2566)) {
  lineNumber = 795
  var array2567 = new GraceList([
]);

  var var_args = array2567;
  lineNumber = 798
  lineNumber = 795
  lineNumber = 1
  lineNumber = 795
  var call2568 = callmethod(var_o,"with", [0]);
  lineNumber = 798
  var block2569 = Grace_allocObject();
  block2569.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2569.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2569.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2569.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2569.receiver = this;
  block2569.className = 'block<genjs:798>';
  block2569.real = function(
var_part
) {
  lineNumber = 796
  lineNumber = 1
  lineNumber = 796
  var call2570 = callmethod(var_part,"args", [0]);
  lineNumber = 798
  var block2571 = Grace_allocObject();
  block2571.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2571.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2571.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2571.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2571.receiver = this;
  block2571.className = 'block<genjs:798>';
  block2571.real = function(
var_prm
) {
  lineNumber = 797
  lineNumber = 798
  var call2572 = callmethod(this,"compilenode", [1], var_prm);
  var var_r = call2572;
  var call2573 = callmethod(var_args,"push", [1], var_r);
  return call2573;
};
  var call2574 = callmethod(Grace_prelude,"for()do", [1, 1], call2570, block2571);
  return call2574;
};
  var call2575 = callmethod(Grace_prelude,"for()do", [1, 1], call2568, block2569);
  lineNumber = 801
  var string2576 = new GraceString("  var call");
  var opresult2578 = callmethod(string2576, "++", [1], var_auto__95__count);
  var string2579 = new GraceString(" = Grace_print(");
  var opresult2581 = callmethod(opresult2578, "++", [1], string2579);
  lineNumber = 1
  lineNumber = 801
  var call2582 = callmethod(var_args,"first", [0]);
  var opresult2584 = callmethod(opresult2581, "++", [1], call2582);
  var string2585 = new GraceString(");");
  var opresult2587 = callmethod(opresult2584, "++", [1], string2585);
  lineNumber = 802
  var call2588 = callmethod(this,"out", [1], opresult2587);
  lineNumber = 803
  lineNumber = 1
  lineNumber = 803
  lineNumber = 802
  var string2589 = new GraceString("call");
  var opresult2591 = callmethod(string2589, "++", [1], var_auto__95__count);
  var call2592 = callmethod(var_o,"register:=", [1], opresult2591);
  lineNumber = 804
  lineNumber = 803
  var opresult2594 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2594;
  var if2561 = opresult2594;
  } else {
  lineNumber = 833
  lineNumber = 807
  lineNumber = 812
  lineNumber = 1
  lineNumber = 812
  lineNumber = 1
  lineNumber = 804
  var call2596 = callmethod(var_o,"value", [0]);
  var call2597 = callmethod(call2596,"kind", [0]);
  var string2598 = new GraceString("member");
  var opresult2600 = callmethod(call2597, "==", [1], string2598);
  lineNumber = 807
  var block2601 = Grace_allocObject();
  block2601.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2601.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2601.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2601.receiver = this;
  block2601.className = 'block<genjs:807>';
  block2601.real = function(
) {
  lineNumber = 1
  lineNumber = 807
  lineNumber = 1
  lineNumber = 807
  lineNumber = 1
  lineNumber = 805
  var call2602 = callmethod(var_o,"value", [0]);
  var call2603 = callmethod(call2602,"in", [0]);
  var call2604 = callmethod(call2603,"kind", [0]);
  var string2605 = new GraceString("identifier");
  var opresult2607 = callmethod(call2604, "==", [1], string2605);
  lineNumber = 807
  lineNumber = 1
  lineNumber = 807
  lineNumber = 1
  lineNumber = 807
  lineNumber = 1
  lineNumber = 806
  var call2608 = callmethod(var_o,"value", [0]);
  var call2609 = callmethod(call2608,"in", [0]);
  var call2610 = callmethod(call2609,"value", [0]);
  var string2611 = new GraceString("self");
  var opresult2613 = callmethod(call2610, "==", [1], string2611);
  var opresult2615 = callmethod(opresult2607, "&", [1], opresult2613);
  lineNumber = 807
  lineNumber = 1
  lineNumber = 807
  lineNumber = 1
  lineNumber = 807
  var call2616 = callmethod(var_o,"value", [0]);
  var call2617 = callmethod(call2616,"value", [0]);
  var string2618 = new GraceString("length");
  var opresult2620 = callmethod(call2617, "==", [1], string2618);
  var opresult2622 = callmethod(opresult2615, "&", [1], opresult2620);
  return opresult2622;
};
  var opresult2624 = callmethod(opresult2600, "&&", [1], block2601);
  if (Grace_isTrue(opresult2624)) {
  lineNumber = 808
  lineNumber = 1
  lineNumber = 808
  lineNumber = 1
  lineNumber = 808
  lineNumber = 1
  lineNumber = 808
  lineNumber = 1
  lineNumber = 808
  var call2625 = callmethod(var_o,"with", [0]);
  var call2626 = callmethod(call2625,"first", [0]);
  var call2627 = callmethod(call2626,"args", [0]);
  var call2628 = callmethod(call2627,"first", [0]);
  lineNumber = 809
  var call2629 = callmethod(this,"compilenode", [1], call2628);
  var_tmp = call2629;
  var string2630 = new GraceString("  var call");
  var opresult2632 = callmethod(string2630, "++", [1], var_auto__95__count);
  var string2633 = new GraceString(" = Grace_length(");
  var opresult2635 = callmethod(opresult2632, "++", [1], string2633);
  var opresult2637 = callmethod(opresult2635, "++", [1], var_tmp);
  var string2638 = new GraceString(");");
  var opresult2640 = callmethod(opresult2637, "++", [1], string2638);
  lineNumber = 810
  var call2641 = callmethod(this,"out", [1], opresult2640);
  lineNumber = 811
  lineNumber = 1
  lineNumber = 811
  lineNumber = 810
  var string2642 = new GraceString("call");
  var opresult2644 = callmethod(string2642, "++", [1], var_auto__95__count);
  var call2645 = callmethod(var_o,"register:=", [1], opresult2644);
  lineNumber = 812
  lineNumber = 811
  var opresult2647 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2647;
  var if2595 = opresult2647;
  } else {
  lineNumber = 833
  lineNumber = 818
  lineNumber = 1
  lineNumber = 818
  lineNumber = 1
  lineNumber = 812
  var call2649 = callmethod(var_o,"value", [0]);
  var call2650 = callmethod(call2649,"kind", [0]);
  var string2651 = new GraceString("identifier");
  var opresult2653 = callmethod(call2650, "==", [1], string2651);
  lineNumber = 818
  lineNumber = 1
  lineNumber = 818
  lineNumber = 1
  lineNumber = 813
  var call2654 = callmethod(var_o,"value", [0]);
  var call2655 = callmethod(call2654,"value", [0]);
  var string2656 = new GraceString("length");
  var opresult2658 = callmethod(call2655, "==", [1], string2656);
  var opresult2660 = callmethod(opresult2653, "&", [1], opresult2658);
  if (Grace_isTrue(opresult2660)) {
  lineNumber = 814
  lineNumber = 1
  lineNumber = 814
  lineNumber = 1
  lineNumber = 814
  lineNumber = 1
  lineNumber = 814
  lineNumber = 1
  lineNumber = 814
  var call2661 = callmethod(var_o,"with", [0]);
  var call2662 = callmethod(call2661,"first", [0]);
  var call2663 = callmethod(call2662,"args", [0]);
  var call2664 = callmethod(call2663,"first", [0]);
  lineNumber = 815
  var call2665 = callmethod(this,"compilenode", [1], call2664);
  var_tmp = call2665;
  var string2666 = new GraceString("  var call");
  var opresult2668 = callmethod(string2666, "++", [1], var_auto__95__count);
  var string2669 = new GraceString(" = Grace_length(");
  var opresult2671 = callmethod(opresult2668, "++", [1], string2669);
  var opresult2673 = callmethod(opresult2671, "++", [1], var_tmp);
  var string2674 = new GraceString(");");
  var opresult2676 = callmethod(opresult2673, "++", [1], string2674);
  lineNumber = 816
  var call2677 = callmethod(this,"out", [1], opresult2676);
  lineNumber = 817
  lineNumber = 1
  lineNumber = 817
  lineNumber = 816
  var string2678 = new GraceString("call");
  var opresult2680 = callmethod(string2678, "++", [1], var_auto__95__count);
  var call2681 = callmethod(var_o,"register:=", [1], opresult2680);
  lineNumber = 818
  lineNumber = 817
  var opresult2683 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2683;
  var if2648 = opresult2683;
  } else {
  lineNumber = 833
  lineNumber = 821
  lineNumber = 826
  lineNumber = 1
  lineNumber = 826
  lineNumber = 1
  lineNumber = 818
  var call2685 = callmethod(var_o,"value", [0]);
  var call2686 = callmethod(call2685,"kind", [0]);
  var string2687 = new GraceString("member");
  var opresult2689 = callmethod(call2686, "==", [1], string2687);
  lineNumber = 821
  var block2690 = Grace_allocObject();
  block2690.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2690.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2690.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2690.receiver = this;
  block2690.className = 'block<genjs:821>';
  block2690.real = function(
) {
  lineNumber = 1
  lineNumber = 821
  lineNumber = 1
  lineNumber = 821
  lineNumber = 1
  lineNumber = 819
  var call2691 = callmethod(var_o,"value", [0]);
  var call2692 = callmethod(call2691,"in", [0]);
  var call2693 = callmethod(call2692,"kind", [0]);
  var string2694 = new GraceString("identifier");
  var opresult2696 = callmethod(call2693, "==", [1], string2694);
  lineNumber = 821
  lineNumber = 1
  lineNumber = 821
  lineNumber = 1
  lineNumber = 821
  lineNumber = 1
  lineNumber = 820
  var call2697 = callmethod(var_o,"value", [0]);
  var call2698 = callmethod(call2697,"in", [0]);
  var call2699 = callmethod(call2698,"value", [0]);
  var string2700 = new GraceString("self");
  var opresult2702 = callmethod(call2699, "==", [1], string2700);
  var opresult2704 = callmethod(opresult2696, "&", [1], opresult2702);
  lineNumber = 821
  lineNumber = 1
  lineNumber = 821
  lineNumber = 1
  lineNumber = 821
  var call2705 = callmethod(var_o,"value", [0]);
  var call2706 = callmethod(call2705,"value", [0]);
  var string2707 = new GraceString("escapestring");
  var opresult2709 = callmethod(call2706, "==", [1], string2707);
  var opresult2711 = callmethod(opresult2704, "&", [1], opresult2709);
  return opresult2711;
};
  var opresult2713 = callmethod(opresult2689, "&&", [1], block2690);
  if (Grace_isTrue(opresult2713)) {
  lineNumber = 823
  lineNumber = 1
  lineNumber = 823
  lineNumber = 1
  lineNumber = 823
  lineNumber = 1
  lineNumber = 823
  lineNumber = 1
  lineNumber = 822
  var call2714 = callmethod(var_o,"with", [0]);
  var call2715 = callmethod(call2714,"first", [0]);
  var call2716 = callmethod(call2715,"args", [0]);
  var call2717 = callmethod(call2716,"first", [0]);
  var_tmp = call2717;
  lineNumber = 823
  var string2718 = new GraceString("_escape");
  lineNumber = 824
  lineNumber = 1
  lineNumber = 823
  var call2719 = callmethod(var_ast,"memberNode", [0]);
  var call2720 = callmethod(call2719,"new", [2], string2718, var_tmp);
  var_tmp = call2720;
  lineNumber = 824
  lineNumber = 1
  lineNumber = 824
  var call2722 = callmethod(var_tmp,"value", [0]);
  lineNumber = 1
  lineNumber = 824
  var call2723 = callmethod(var_ast,"callWithPart", [0]);
  var call2724 = callmethod(call2723,"new", [1], call2722);
  var array2721 = new GraceList([
call2724,
]);

  lineNumber = 825
  lineNumber = 1
  lineNumber = 824
  var call2725 = callmethod(var_ast,"callNode", [0]);
  var call2726 = callmethod(call2725,"new", [2], var_tmp, array2721);
  var_tmp = call2726;
  lineNumber = 825
  lineNumber = 1
  lineNumber = 825
  lineNumber = 826
  var call2727 = callmethod(this,"compilenode", [1], var_tmp);
  lineNumber = 825
  var call2728 = callmethod(var_o,"register:=", [1], call2727);
  var if2684 = call2728;
  } else {
  lineNumber = 833
  lineNumber = 832
  lineNumber = 1
  lineNumber = 832
  lineNumber = 1
  lineNumber = 826
  var call2730 = callmethod(var_o,"value", [0]);
  var call2731 = callmethod(call2730,"kind", [0]);
  var string2732 = new GraceString("identifier");
  var opresult2734 = callmethod(call2731, "==", [1], string2732);
  lineNumber = 832
  lineNumber = 1
  lineNumber = 832
  lineNumber = 1
  lineNumber = 827
  var call2735 = callmethod(var_o,"value", [0]);
  var call2736 = callmethod(call2735,"value", [0]);
  var string2737 = new GraceString("escapestring");
  var opresult2739 = callmethod(call2736, "==", [1], string2737);
  var opresult2741 = callmethod(opresult2734, "&", [1], opresult2739);
  if (Grace_isTrue(opresult2741)) {
  lineNumber = 829
  lineNumber = 1
  lineNumber = 829
  lineNumber = 1
  lineNumber = 829
  lineNumber = 1
  lineNumber = 829
  lineNumber = 1
  lineNumber = 828
  var call2742 = callmethod(var_o,"with", [0]);
  var call2743 = callmethod(call2742,"first", [0]);
  var call2744 = callmethod(call2743,"args", [0]);
  var call2745 = callmethod(call2744,"first", [0]);
  var_tmp = call2745;
  lineNumber = 829
  var string2746 = new GraceString("_escape");
  lineNumber = 830
  lineNumber = 1
  lineNumber = 829
  var call2747 = callmethod(var_ast,"memberNode", [0]);
  var call2748 = callmethod(call2747,"new", [2], string2746, var_tmp);
  var_tmp = call2748;
  lineNumber = 830
  lineNumber = 1
  lineNumber = 830
  var call2750 = callmethod(var_tmp,"value", [0]);
  lineNumber = 1
  lineNumber = 830
  var call2751 = callmethod(var_ast,"callWithPart", [0]);
  var call2752 = callmethod(call2751,"new", [1], call2750);
  var array2749 = new GraceList([
call2752,
]);

  lineNumber = 831
  lineNumber = 1
  lineNumber = 830
  var call2753 = callmethod(var_ast,"callNode", [0]);
  var call2754 = callmethod(call2753,"new", [2], var_tmp, array2749);
  var_tmp = call2754;
  lineNumber = 831
  lineNumber = 1
  lineNumber = 831
  lineNumber = 832
  var call2755 = callmethod(this,"compilenode", [1], var_tmp);
  lineNumber = 831
  var call2756 = callmethod(var_o,"register:=", [1], call2755);
  var if2729 = call2756;
  } else {
  lineNumber = 833
  lineNumber = 834
  var call2757 = callmethod(this,"compilecall", [1], var_o);
  var if2729 = call2757;
}
  var if2684 = if2729;
}
  var if2648 = if2684;
}
  var if2595 = if2648;
}
  var if2561 = if2595;
}
  var if2556 = if2561;
}
  lineNumber = 837
  lineNumber = 839
  lineNumber = 1
  lineNumber = 836
  var call2759 = callmethod(var_o,"kind", [0]);
  var string2760 = new GraceString("op");
  var opresult2762 = callmethod(call2759, "==", [1], string2760);
  if (Grace_isTrue(opresult2762)) {
  lineNumber = 837
  lineNumber = 838
  var call2763 = callmethod(this,"compileop", [1], var_o);
  var if2758 = call2763;
}
  lineNumber = 840
  lineNumber = 839
  var diff2765 = callmethod(var_compilationDepth, "-", [1], new GraceNum(1));
  var_compilationDepth = diff2765;
  lineNumber = 840
  lineNumber = 1
  lineNumber = 840
  var call2766 = callmethod(var_o,"register", [0]);
  return call2766
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilenode"] = func2276;
  lineNumber = 895
var func2767 = function(argcv) {
  var curarg = 1;
  var var_vl = arguments[curarg];
  curarg++;
  var var_of = arguments[curarg];
  curarg++;
  var var_mn = arguments[curarg];
  curarg++;
  var var_rm = arguments[curarg];
  curarg++;
  var var_bt = arguments[curarg];
  curarg++;
  var var_glpath = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 844
  lineNumber = 1
  lineNumber = 843
  var call2768 = callmethod(var_sys,"argv", [0]);
  var var_argv = call2768;
  lineNumber = 845
  var var_cmd;
  lineNumber = 846
  lineNumber = 845
  var_values = var_vl;
  lineNumber = 847
  lineNumber = 846
  var_outfile = var_of;
  lineNumber = 848
  lineNumber = 847
  var_modname = var_mn;
  lineNumber = 849
  lineNumber = 848
  var_runmode = var_rm;
  lineNumber = 850
  lineNumber = 849
  var_buildtype = var_bt;
  lineNumber = 851
  lineNumber = 850
  var_gracelibPath = var_glpath;
  lineNumber = 851
  var string2769 = new GraceString("generating ECMAScript code.");
  var call2770 = callmethod(var_util,"log_verbose", [1], string2769);
  lineNumber = 852
  var string2771 = new GraceString("String");
  var bool2772 = new GraceBoolean(true)
  var call2773 = callmethod(var_topLevelTypes,"put", [2], string2771, bool2772);
  lineNumber = 853
  var string2774 = new GraceString("Number");
  var bool2775 = new GraceBoolean(true)
  var call2776 = callmethod(var_topLevelTypes,"put", [2], string2774, bool2775);
  lineNumber = 854
  var string2777 = new GraceString("Boolean");
  var bool2778 = new GraceBoolean(true)
  var call2779 = callmethod(var_topLevelTypes,"put", [2], string2777, bool2778);
  lineNumber = 855
  var string2780 = new GraceString("Block");
  var bool2781 = new GraceBoolean(true)
  var call2782 = callmethod(var_topLevelTypes,"put", [2], string2780, bool2781);
  lineNumber = 856
  var string2783 = new GraceString("None");
  var bool2784 = new GraceBoolean(true)
  var call2785 = callmethod(var_topLevelTypes,"put", [2], string2783, bool2784);
  lineNumber = 860
  lineNumber = 857
  lineNumber = 860
  var block2786 = Grace_allocObject();
  block2786.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2786.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2786.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2786.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2786.receiver = this;
  block2786.className = 'block<genjs:860>';
  block2786.real = function(
var_v
) {
  lineNumber = 862
  lineNumber = 1
  lineNumber = 858
  var call2788 = callmethod(var_v,"kind", [0]);
  var string2789 = new GraceString("type");
  var opresult2791 = callmethod(call2788, "==", [1], string2789);
  if (Grace_isTrue(opresult2791)) {
  lineNumber = 859
  lineNumber = 1
  lineNumber = 859
  var call2792 = callmethod(var_v,"value", [0]);
  lineNumber = 860
  var call2793 = callmethod(this,"escapeident", [1], call2792);
  var var_typeid = call2793;
  var bool2794 = new GraceBoolean(true)
  var call2795 = callmethod(var_topLevelTypes,"put", [2], var_typeid, bool2794);
  var if2787 = call2795;
}
  return if2787;
};
  var call2796 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block2786);
  lineNumber = 863
  var call2797 = callmethod(var_util,"setline", [1], new GraceNum(1));
  lineNumber = 864
  var string2798 = new GraceString("function gracecode_");
  var opresult2800 = callmethod(string2798, "++", [1], var_modname);
  var string2801 = new GraceString("() {");
  var opresult2803 = callmethod(opresult2800, "++", [1], string2801);
  lineNumber = 865
  var call2804 = callmethod(this,"out", [1], opresult2803);
  lineNumber = 866
  lineNumber = 865
  var string2806 = new GraceString("NativePrelude");
  lineNumber = 868
  lineNumber = 1
  lineNumber = 865
  var call2807 = callmethod(var_util,"extensions", [0]);
  var call2808 = callmethod(call2807,"contains", [1], string2806);
  if (Grace_isTrue(call2808)) {
  lineNumber = 866
  var string2809 = new GraceString("var Grace_prelude = window.Grace_native_prelude;");
  lineNumber = 867
  var call2810 = callmethod(this,"out", [1], string2809);
  var if2805 = call2810;
}
  lineNumber = 878
  lineNumber = 868
  lineNumber = 878
  var block2811 = Grace_allocObject();
  block2811.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2811.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2811.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2811.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2811.receiver = this;
  block2811.className = 'block<genjs:878>';
  block2811.real = function(
var_o
) {
  lineNumber = 873
  lineNumber = 875
  lineNumber = 1
  lineNumber = 869
  var call2813 = callmethod(var_o,"kind", [0]);
  var string2814 = new GraceString("inherits");
  var opresult2816 = callmethod(call2813, "==", [1], string2814);
  if (Grace_isTrue(opresult2816)) {
  lineNumber = 870
  lineNumber = 1
  lineNumber = 870
  var call2817 = callmethod(var_o,"value", [0]);
  lineNumber = 871
  var call2818 = callmethod(this,"compilenode", [1], call2817);
  var var_sup = call2818;
  var string2819 = new GraceString("  this.superobj = ");
  var opresult2821 = callmethod(string2819, "++", [1], var_sup);
  var string2822 = new GraceString(";");
  var opresult2824 = callmethod(opresult2821, "++", [1], string2822);
  lineNumber = 872
  var call2825 = callmethod(this,"out", [1], opresult2824);
  var string2826 = new GraceString("  this.data = ");
  var opresult2828 = callmethod(string2826, "++", [1], var_sup);
  var string2829 = new GraceString(".data;");
  var opresult2831 = callmethod(opresult2828, "++", [1], string2829);
  lineNumber = 873
  var call2832 = callmethod(this,"out", [1], opresult2831);
  var string2833 = new GraceString("  this._value = ");
  var opresult2835 = callmethod(string2833, "++", [1], var_sup);
  var string2836 = new GraceString("._value;");
  var opresult2838 = callmethod(opresult2835, "++", [1], string2836);
  lineNumber = 874
  var call2839 = callmethod(this,"out", [1], opresult2838);
  var if2812 = call2839;
}
  lineNumber = 875
  lineNumber = 876
  var call2840 = callmethod(this,"compilenode", [1], var_o);
  lineNumber = 878
  lineNumber = 880
  lineNumber = 1
  lineNumber = 876
  var call2842 = callmethod(var_o,"kind", [0]);
  var string2843 = new GraceString("type");
  var opresult2845 = callmethod(call2842, "==", [1], string2843);
  if (Grace_isTrue(opresult2845)) {
  lineNumber = 877
  lineNumber = 1
  lineNumber = 877
  var call2846 = callmethod(var_o,"value", [0]);
  lineNumber = 878
  var call2847 = callmethod(this,"escapeident", [1], call2846);
  var var_typeid = call2847;
  var string2848 = new GraceString("var type_");
  var opresult2850 = callmethod(string2848, "++", [1], var_typeid);
  var string2851 = new GraceString(" = var_");
  var opresult2853 = callmethod(opresult2850, "++", [1], string2851);
  var opresult2855 = callmethod(opresult2853, "++", [1], var_typeid);
  var string2856 = new GraceString(";");
  var opresult2858 = callmethod(opresult2855, "++", [1], string2856);
  lineNumber = 879
  var call2859 = callmethod(this,"out", [1], opresult2858);
  var if2841 = call2859;
}
  return if2841;
};
  var call2860 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block2811);
  lineNumber = 881
  var string2861 = new GraceString("  return this;");
  lineNumber = 882
  var call2862 = callmethod(this,"out", [1], string2861);
  var string2863 = new GraceString("}");
  lineNumber = 883
  var call2864 = callmethod(this,"out", [1], string2863);
  lineNumber = 884
  lineNumber = 883
  var bool2865 = new GraceBoolean(false)
  var var_lineOut = bool2865;
  lineNumber = 892
  lineNumber = 884
  lineNumber = 892
  var block2866 = Grace_allocObject();
  block2866.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2866.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2866.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2866.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2866.receiver = this;
  block2866.className = 'block<genjs:892>';
  block2866.real = function(
var_o
) {
  lineNumber = 885
  var string2868 = new GraceString("  lineNumber =");
  var call2869 = callmethod(var_o,"substringFrom()to", [1, 1], new GraceNum(0), new GraceNum(14));
  var opresult2871 = callmethod(string2868, "==", [1], call2869);
  if (Grace_isTrue(opresult2871)) {
  lineNumber = 887
  lineNumber = 886
  var_lineOut = var_o;
  var if2867 = var_o;
  } else {
  lineNumber = 891
  lineNumber = 892
  lineNumber = 888
  var bool2873 = new GraceBoolean(false)
  var opresult2875 = callmethod(bool2873, "/=", [1], var_lineOut);
  if (Grace_isTrue(opresult2875)) {
  lineNumber = 889
  lineNumber = 890
  var call2876 = callmethod(this,"outprint", [1], var_lineOut);
  lineNumber = 891
  lineNumber = 890
  var bool2877 = new GraceBoolean(false)
  var_lineOut = bool2877;
  var if2872 = bool2877;
}
  lineNumber = 892
  lineNumber = 893
  var call2878 = callmethod(this,"outprint", [1], var_o);
  var if2867 = call2878;
}
  return if2867;
};
  var call2879 = callmethod(Grace_prelude,"for()do", [1, 1], var_output, block2866);
  lineNumber = 895
  var string2880 = new GraceString("done.");
  lineNumber = 896
  var call2881 = callmethod(this,"log_verbose", [1], string2880);
  return call2881
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compile"] = func2767;
  return this;
}
