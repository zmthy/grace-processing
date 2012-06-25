function gracecode_genllvm30() {
  lineNumber = 2
// Import of io
  var var_io = do_import("io", gracecode_io);
  lineNumber = 3
// Import of sys
  var var_sys = do_import("sys", gracecode_sys);
  lineNumber = 4
// Import of ast
  var var_ast = do_import("ast", gracecode_ast);
  lineNumber = 5
// Import of util
  var var_util = do_import("util", gracecode_util);
  lineNumber = 6
// Import of buildinfo
  var var_buildinfo = do_import("buildinfo", gracecode_buildinfo);
  lineNumber = 14
// Import of subtype
  var var_subtype = do_import("subtype", gracecode_subtype);
  lineNumber = 15
  var var_tmp;
  lineNumber = 1
var func0 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 14
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
  lineNumber = 16
  lineNumber = 15
  var var_verbosity = new GraceNum(30);
  lineNumber = 1
var func2 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 15
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
  lineNumber = 17
  lineNumber = 16
  var var_pad1 = new GraceNum(1);
  lineNumber = 1
var func4 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 16
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
  lineNumber = 18
  lineNumber = 17
  var var_auto__95__count = new GraceNum(0);
  lineNumber = 1
var func6 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 17
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
  lineNumber = 19
  var array8 = new GraceList([
]);

  var var_constants = array8;
  lineNumber = 1
var func9 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 18
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
  lineNumber = 20
  var array11 = new GraceList([
]);

  var var_output = array11;
  lineNumber = 1
var func12 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 19
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
  lineNumber = 21
  var array14 = new GraceList([
]);

  var var_usedvars = array14;
  lineNumber = 1
var func15 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 20
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
  lineNumber = 22
  var array17 = new GraceList([
]);

  var var_declaredvars = array17;
  lineNumber = 1
var func18 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 21
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
  lineNumber = 23
  lineNumber = 22
  var string20 = new GraceString("entry");
  var var_bblock = string20;
  lineNumber = 1
var func21 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 22
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
  lineNumber = 24
  lineNumber = 23
  var var_linenum = new GraceNum(1);
  lineNumber = 1
var func23 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 23
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
  lineNumber = 25
  var array25 = new GraceList([
]);

  var var_modules = array25;
  lineNumber = 1
var func26 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 24
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
  lineNumber = 26
  var array28 = new GraceList([
]);

  var var_staticmodules = array28;
  lineNumber = 1
var func29 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 25
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
  lineNumber = 27
  var array31 = new GraceList([
]);

  var var_values = array31;
  lineNumber = 1
var func32 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 26
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
  lineNumber = 28
  var var_outfile;
  lineNumber = 1
var func34 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 27
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
  lineNumber = 29
  lineNumber = 28
  var string36 = new GraceString("main");
  var var_modname = string36;
  lineNumber = 1
var func37 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 28
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
  lineNumber = 30
  lineNumber = 29
  var string39 = new GraceString("build");
  var var_runmode = string39;
  lineNumber = 1
var func40 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 29
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
  lineNumber = 31
  lineNumber = 30
  var string42 = new GraceString("bc");
  var var_buildtype = string42;
  lineNumber = 1
var func43 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 30
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
  lineNumber = 32
  lineNumber = 31
  var string45 = new GraceString("gracelib.bc");
  var var_gracelibPath = string45;
  lineNumber = 1
var func46 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 31
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
  lineNumber = 33
  lineNumber = 32
  var bool48 = new GraceBoolean(false)
  var var_inBlock = bool48;
  lineNumber = 1
var func49 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 32
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
  lineNumber = 34
  lineNumber = 33
  var var_paramsUsed = new GraceNum(1);
  lineNumber = 1
var func51 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 33
  return var_paramsUsed
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["paramsUsed"] = func51;
  lineNumber = 1
var func52 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_paramsUsed = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["paramsUsed:="] = func52;
  lineNumber = 36
  lineNumber = 34
  var var_topLevelMethodPos = new GraceNum(1);
  lineNumber = 1
var func53 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 34
  return var_topLevelMethodPos
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["topLevelMethodPos"] = func53;
  lineNumber = 1
var func54 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_topLevelMethodPos = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["topLevelMethodPos:="] = func54;
  lineNumber = 37
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
  lineNumber = 40
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
  lineNumber = 43
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
  lineNumber = 47
var func61 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 46
  var string62 = new GraceString("%");
  var opresult64 = callmethod(string62, "++", [1], var_s);
  var_bblock = opresult64;
  lineNumber = 47
  var string65 = new GraceString(":");
  var opresult67 = callmethod(var_s, "++", [1], string65);
  lineNumber = 48
  var call68 = callmethod(this,"out", [1], opresult67);
  return call68
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["beginblock"] = func61;
  lineNumber = 62
var func69 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 51
  lineNumber = 50
  var var_myc = var_auto__95__count;
  lineNumber = 52
  lineNumber = 51
  var opresult71 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult71;
  lineNumber = 53
  var var_r;
  var string72 = new GraceString("  %array");
  var opresult74 = callmethod(string72, "++", [1], var_myc);
  var string75 = new GraceString(" = call %object @alloc_List()");
  var opresult77 = callmethod(opresult74, "++", [1], string75);
  lineNumber = 54
  var call78 = callmethod(this,"out", [1], opresult77);
  lineNumber = 59
  lineNumber = 54
  lineNumber = 1
  lineNumber = 54
  var call79 = callmethod(var_o,"value", [0]);
  lineNumber = 59
  var block80 = Grace_allocObject();
  block80.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block80.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block80.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block80.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block80.receiver = this;
  block80.className = 'block<genllvm30:59>';
  block80.real = function(
var_a
) {
  lineNumber = 55
  lineNumber = 56
  var call81 = callmethod(this,"compilenode", [1], var_a);
  var_r = call81;
  var string82 = new GraceString("  store %object ");
  var opresult84 = callmethod(string82, "++", [1], var_r);
  var string85 = new GraceString(", %object* %params_0");
  var opresult87 = callmethod(opresult84, "++", [1], string85);
  lineNumber = 57
  var call88 = callmethod(this,"out", [1], opresult87);
  lineNumber = 59
  lineNumber = 57
  var string89 = new GraceString("  call %object @callmethod(%object %array");
  lineNumber = 58
  var opresult91 = callmethod(string89, "++", [1], var_myc);
  var string92 = new GraceString(", i8* getelementptr([5 x i8]* @.str._push");
  var opresult94 = callmethod(opresult91, "++", [1], string92);
  lineNumber = 59
  var string95 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult97 = callmethod(opresult94, "++", [1], string95);
  lineNumber = 60
  var call98 = callmethod(this,"out", [1], opresult97);
  return call98;
};
  var call99 = callmethod(Grace_prelude,"for()do", [1, 1], call79, block80);
  lineNumber = 62
  lineNumber = 1
  lineNumber = 62
  lineNumber = 61
  var string100 = new GraceString("%array");
  var opresult102 = callmethod(string100, "++", [1], var_myc);
  var call103 = callmethod(var_o,"register:=", [1], opresult102);
  return call103
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilearray"] = func69;
  lineNumber = 69
var func104 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 66
  var array105 = new GraceList([
]);

  var var_l = array105;
  var call106 = callmethod(var_ast,"astcall", [2], var_o, var_l);
  var var_c = call106;
  lineNumber = 67
  lineNumber = 68
  var call107 = callmethod(this,"compilenode", [1], var_c);
  var var_r = call107;
  lineNumber = 69
  lineNumber = 1
  lineNumber = 68
  var call108 = callmethod(var_o,"register:=", [1], var_r);
  return call108
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilemember"] = func104;
  lineNumber = 98
var func109 = function(argcv) {
  var curarg = 1;
  var var_selfr = arguments[curarg];
  curarg++;
  var var_outerRef = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 72
  lineNumber = 71
  var var_myc = var_auto__95__count;
  lineNumber = 73
  lineNumber = 72
  var opresult111 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult111;
  lineNumber = 74
  lineNumber = 73
  var string112 = new GraceString("outer");
  var var_nm = string112;
  lineNumber = 74
  var call113 = Grace_length(var_nm);
  var opresult115 = callmethod(call113, "+", [1], new GraceNum(1));
  var var_len = opresult115;
  lineNumber = 75
  lineNumber = 1
  lineNumber = 75
  var call116 = callmethod(var_nm,"_escape", [0]);
  var var_enm = call116;
  lineNumber = 78
  lineNumber = 76
  var string117 = new GraceString("@.str.methname");
  var opresult119 = callmethod(string117, "++", [1], var_myc);
  var string120 = new GraceString(" = private unnamed_addr ");
  var opresult122 = callmethod(opresult119, "++", [1], string120);
  lineNumber = 77
  var string123 = new GraceString("constant [");
  var opresult125 = callmethod(opresult122, "++", [1], string123);
  var opresult127 = callmethod(opresult125, "++", [1], var_len);
  var string128 = new GraceString(" x i8] c\"");
  var opresult130 = callmethod(opresult127, "++", [1], string128);
  var opresult132 = callmethod(opresult130, "++", [1], var_enm);
  var string133 = new GraceString("\\00\"");
  var opresult135 = callmethod(opresult132, "++", [1], string133);
  var var_con = opresult135;
  lineNumber = 78
  var call136 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 79
  var string137 = new GraceString("; OBJECT OUTER DEC ");
  var opresult139 = callmethod(string137, "++", [1], var_enm);
  lineNumber = 80
  var call140 = callmethod(this,"out", [1], opresult139);
  var string141 = new GraceString("  call void @adddatum2(%object ");
  var opresult143 = callmethod(string141, "++", [1], var_selfr);
  var string144 = new GraceString(", %object ");
  var opresult146 = callmethod(opresult143, "++", [1], string144);
  var opresult148 = callmethod(opresult146, "++", [1], var_outerRef);
  var string149 = new GraceString(", i32 0)");
  var opresult151 = callmethod(opresult148, "++", [1], string149);
  lineNumber = 81
  var call152 = callmethod(this,"out", [1], opresult151);
  lineNumber = 83
  lineNumber = 81
  var string153 = new GraceString("define private %object @\"reader_");
  var opresult155 = callmethod(string153, "++", [1], var_modname);
  var string156 = new GraceString("_");
  var opresult158 = callmethod(opresult155, "++", [1], string156);
  var opresult160 = callmethod(opresult158, "++", [1], var_enm);
  var string161 = new GraceString("_");
  var opresult163 = callmethod(opresult160, "++", [1], string161);
  var opresult165 = callmethod(opresult163, "++", [1], var_myc);
  lineNumber = 82
  var string166 = new GraceString("\"(%object %self, i32 %nparams, ");
  var opresult168 = callmethod(opresult165, "++", [1], string166);
  lineNumber = 83
  var string169 = new GraceString("%object* %args, i32 %flags) {");
  var opresult171 = callmethod(opresult168, "++", [1], string169);
  lineNumber = 84
  var call172 = callmethod(this,"outprint", [1], opresult171);
  var string173 = new GraceString("  %uo = bitcast %object %self to %UserObject*");
  lineNumber = 85
  var call174 = callmethod(this,"outprint", [1], string173);
  var string175 = new GraceString("  %fieldpp = getelementptr %UserObject* %uo, i32 0, i32 3");
  lineNumber = 86
  var call176 = callmethod(this,"outprint", [1], string175);
  var string177 = new GraceString("  %fieldpf = getelementptr [0 x %object]* %fieldpp, i32 0, i32 0");
  lineNumber = 87
  var call178 = callmethod(this,"outprint", [1], string177);
  var string179 = new GraceString("  %val = load %object* %fieldpf");
  lineNumber = 88
  var call180 = callmethod(this,"outprint", [1], string179);
  var string181 = new GraceString("  ret %object %val");
  lineNumber = 89
  var call182 = callmethod(this,"outprint", [1], string181);
  var string183 = new GraceString("}");
  lineNumber = 90
  var call184 = callmethod(this,"outprint", [1], string183);
  lineNumber = 98
  lineNumber = 90
  var string185 = new GraceString("  call void @addmethod2(%object ");
  var opresult187 = callmethod(string185, "++", [1], var_selfr);
  lineNumber = 91
  var string188 = new GraceString(", i8* getelementptr([");
  var opresult190 = callmethod(opresult187, "++", [1], string188);
  lineNumber = 92
  var opresult192 = callmethod(opresult190, "++", [1], var_len);
  var string193 = new GraceString(" x i8]* @.str.methname");
  var opresult195 = callmethod(opresult192, "++", [1], string193);
  var opresult197 = callmethod(opresult195, "++", [1], var_myc);
  var string198 = new GraceString(", i32 0, i32 0), ");
  var opresult200 = callmethod(opresult197, "++", [1], string198);
  lineNumber = 93
  var string201 = new GraceString("%object(%object, i32, %object*, i32)* ");
  var opresult203 = callmethod(opresult200, "++", [1], string201);
  lineNumber = 94
  var string204 = new GraceString("getelementptr(%object ");
  var opresult206 = callmethod(opresult203, "++", [1], string204);
  lineNumber = 95
  var string207 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult209 = callmethod(opresult206, "++", [1], string207);
  lineNumber = 96
  var string210 = new GraceString("@\"reader_");
  var opresult212 = callmethod(opresult209, "++", [1], string210);
  var opresult214 = callmethod(opresult212, "++", [1], var_modname);
  var string215 = new GraceString("_");
  var opresult217 = callmethod(opresult214, "++", [1], string215);
  var opresult219 = callmethod(opresult217, "++", [1], var_enm);
  lineNumber = 97
  var string220 = new GraceString("_");
  var opresult222 = callmethod(opresult219, "++", [1], string220);
  var opresult224 = callmethod(opresult222, "++", [1], var_myc);
  lineNumber = 98
  var string225 = new GraceString("\"))");
  var opresult227 = callmethod(opresult224, "++", [1], string225);
  lineNumber = 99
  var call228 = callmethod(this,"out", [1], opresult227);
  return call228
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjouter"] = func109;
  lineNumber = 137
var func229 = function(argcv) {
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
  lineNumber = 102
  lineNumber = 101
  var string230 = new GraceString("%undefined");
  var var_val = string230;
  lineNumber = 107
  lineNumber = 110
  lineNumber = 102
  var bool232 = new GraceBoolean(false)
  lineNumber = 110
  lineNumber = 1
  lineNumber = 102
  var call233 = callmethod(var_o,"value", [0]);
  var opresult235 = callmethod(bool232, "!=", [1], call233);
  if (Grace_isTrue(opresult235)) {
  lineNumber = 107
  lineNumber = 109
  lineNumber = 1
  lineNumber = 109
  lineNumber = 1
  lineNumber = 103
  var call237 = callmethod(var_o,"value", [0]);
  var call238 = callmethod(call237,"kind", [0]);
  var string239 = new GraceString("object");
  var opresult241 = callmethod(call238, "==", [1], string239);
  if (Grace_isTrue(opresult241)) {
  lineNumber = 104
  lineNumber = 1
  lineNumber = 104
  var call242 = callmethod(var_o,"value", [0]);
  lineNumber = 105
  var call243 = callmethod(this,"compileobject", [2], call242, var_selfr);
  lineNumber = 106
  lineNumber = 1
  lineNumber = 106
  lineNumber = 1
  lineNumber = 105
  var call244 = callmethod(var_o,"value", [0]);
  var call245 = callmethod(call244,"register", [0]);
  var_val = call245;
  var if236 = call245;
  } else {
  lineNumber = 107
  lineNumber = 1
  lineNumber = 107
  var call246 = callmethod(var_o,"value", [0]);
  lineNumber = 108
  var call247 = callmethod(this,"compilenode", [1], call246);
  var_val = call247;
  var if236 = call247;
}
  var if231 = if236;
}
  lineNumber = 111
  lineNumber = 110
  var var_myc = var_auto__95__count;
  lineNumber = 112
  lineNumber = 111
  var opresult249 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult249;
  lineNumber = 113
  lineNumber = 1
  lineNumber = 113
  lineNumber = 1
  lineNumber = 112
  var call250 = callmethod(var_o,"name", [0]);
  var call251 = callmethod(call250,"value", [0]);
  var var_nm = call251;
  lineNumber = 113
  var call252 = Grace_length(var_nm);
  var opresult254 = callmethod(call252, "+", [1], new GraceNum(1));
  var var_len = opresult254;
  lineNumber = 114
  lineNumber = 1
  lineNumber = 114
  var call255 = callmethod(var_nm,"_escape", [0]);
  var var_enm = call255;
  lineNumber = 117
  lineNumber = 115
  var string256 = new GraceString("@.str.methname");
  var opresult258 = callmethod(string256, "++", [1], var_myc);
  var string259 = new GraceString(" = private unnamed_addr ");
  var opresult261 = callmethod(opresult258, "++", [1], string259);
  lineNumber = 116
  var string262 = new GraceString("constant [");
  var opresult264 = callmethod(opresult261, "++", [1], string262);
  var opresult266 = callmethod(opresult264, "++", [1], var_len);
  var string267 = new GraceString(" x i8] c\"");
  var opresult269 = callmethod(opresult266, "++", [1], string267);
  var opresult271 = callmethod(opresult269, "++", [1], var_enm);
  var string272 = new GraceString("\\00\"");
  var opresult274 = callmethod(opresult271, "++", [1], string272);
  var var_con = opresult274;
  lineNumber = 117
  var call275 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 118
  var string276 = new GraceString("; OBJECT CONST DEC ");
  var opresult278 = callmethod(string276, "++", [1], var_enm);
  lineNumber = 119
  var call279 = callmethod(this,"out", [1], opresult278);
  var string280 = new GraceString("  call void @adddatum2(%object ");
  var opresult282 = callmethod(string280, "++", [1], var_selfr);
  var string283 = new GraceString(", %object ");
  var opresult285 = callmethod(opresult282, "++", [1], string283);
  var opresult287 = callmethod(opresult285, "++", [1], var_val);
  var string288 = new GraceString(", i32 ");
  var opresult290 = callmethod(opresult287, "++", [1], string288);
  var opresult292 = callmethod(opresult290, "++", [1], var_pos);
  var string293 = new GraceString(")");
  var opresult295 = callmethod(opresult292, "++", [1], string293);
  lineNumber = 120
  var call296 = callmethod(this,"out", [1], opresult295);
  lineNumber = 122
  lineNumber = 120
  var string297 = new GraceString("define private %object @\"reader_");
  var opresult299 = callmethod(string297, "++", [1], var_modname);
  var string300 = new GraceString("_");
  var opresult302 = callmethod(opresult299, "++", [1], string300);
  var opresult304 = callmethod(opresult302, "++", [1], var_enm);
  var string305 = new GraceString("_");
  var opresult307 = callmethod(opresult304, "++", [1], string305);
  var opresult309 = callmethod(opresult307, "++", [1], var_myc);
  lineNumber = 121
  var string310 = new GraceString("\"(%object %self, i32 %nparams, ");
  var opresult312 = callmethod(opresult309, "++", [1], string310);
  lineNumber = 122
  var string313 = new GraceString("%object* %args, i32 %flags) {");
  var opresult315 = callmethod(opresult312, "++", [1], string313);
  lineNumber = 123
  var call316 = callmethod(this,"outprint", [1], opresult315);
  var string317 = new GraceString("  %uo = bitcast %object %self to %UserObject*");
  lineNumber = 124
  var call318 = callmethod(this,"outprint", [1], string317);
  var string319 = new GraceString("  %fieldpp = getelementptr %UserObject* %uo, i32 0, i32 3");
  lineNumber = 125
  var call320 = callmethod(this,"outprint", [1], string319);
  var string321 = new GraceString("  %fieldpf = getelementptr [0 x %object]* %fieldpp, i32 0, i32 ");
  var opresult323 = callmethod(string321, "++", [1], var_pos);
  var string324 = new GraceString("");
  var opresult326 = callmethod(opresult323, "++", [1], string324);
  lineNumber = 126
  var call327 = callmethod(this,"outprint", [1], opresult326);
  var string328 = new GraceString("  %val = load %object* %fieldpf");
  lineNumber = 127
  var call329 = callmethod(this,"outprint", [1], string328);
  var string330 = new GraceString("  ret %object %val");
  lineNumber = 128
  var call331 = callmethod(this,"outprint", [1], string330);
  var string332 = new GraceString("}");
  lineNumber = 129
  var call333 = callmethod(this,"outprint", [1], string332);
  lineNumber = 137
  lineNumber = 129
  var string334 = new GraceString("  call void @addmethod2(%object ");
  var opresult336 = callmethod(string334, "++", [1], var_selfr);
  lineNumber = 130
  var string337 = new GraceString(", i8* getelementptr([");
  var opresult339 = callmethod(opresult336, "++", [1], string337);
  lineNumber = 131
  var opresult341 = callmethod(opresult339, "++", [1], var_len);
  var string342 = new GraceString(" x i8]* @.str.methname");
  var opresult344 = callmethod(opresult341, "++", [1], string342);
  var opresult346 = callmethod(opresult344, "++", [1], var_myc);
  var string347 = new GraceString(", i32 0, i32 0), ");
  var opresult349 = callmethod(opresult346, "++", [1], string347);
  lineNumber = 132
  var string350 = new GraceString("%object(%object, i32, %object*, i32)* ");
  var opresult352 = callmethod(opresult349, "++", [1], string350);
  lineNumber = 133
  var string353 = new GraceString("getelementptr(%object ");
  var opresult355 = callmethod(opresult352, "++", [1], string353);
  lineNumber = 134
  var string356 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult358 = callmethod(opresult355, "++", [1], string356);
  lineNumber = 135
  var string359 = new GraceString("@\"reader_");
  var opresult361 = callmethod(opresult358, "++", [1], string359);
  var opresult363 = callmethod(opresult361, "++", [1], var_modname);
  var string364 = new GraceString("_");
  var opresult366 = callmethod(opresult363, "++", [1], string364);
  var opresult368 = callmethod(opresult366, "++", [1], var_enm);
  lineNumber = 136
  var string369 = new GraceString("_");
  var opresult371 = callmethod(opresult368, "++", [1], string369);
  var opresult373 = callmethod(opresult371, "++", [1], var_myc);
  lineNumber = 137
  var string374 = new GraceString("\"))");
  var opresult376 = callmethod(opresult373, "++", [1], string374);
  lineNumber = 138
  var call377 = callmethod(this,"out", [1], opresult376);
  return call377
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjdefdec"] = func229;
  lineNumber = 198
var func378 = function(argcv) {
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
  lineNumber = 141
  lineNumber = 140
  var string379 = new GraceString("%undefined");
  var var_val = string379;
  lineNumber = 142
  lineNumber = 144
  lineNumber = 141
  var bool381 = new GraceBoolean(false)
  lineNumber = 144
  lineNumber = 1
  lineNumber = 141
  var call382 = callmethod(var_o,"value", [0]);
  var opresult384 = callmethod(bool381, "!=", [1], call382);
  if (Grace_isTrue(opresult384)) {
  lineNumber = 142
  lineNumber = 1
  lineNumber = 142
  var call385 = callmethod(var_o,"value", [0]);
  lineNumber = 143
  var call386 = callmethod(this,"compilenode", [1], call385);
  var_val = call386;
  var if380 = call386;
}
  lineNumber = 145
  lineNumber = 144
  var var_myc = var_auto__95__count;
  lineNumber = 146
  lineNumber = 145
  var opresult388 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult388;
  lineNumber = 147
  lineNumber = 1
  lineNumber = 147
  lineNumber = 1
  lineNumber = 146
  var call389 = callmethod(var_o,"name", [0]);
  var call390 = callmethod(call389,"value", [0]);
  var var_nm = call390;
  lineNumber = 147
  var call391 = Grace_length(var_nm);
  var opresult393 = callmethod(call391, "+", [1], new GraceNum(1));
  var var_len = opresult393;
  lineNumber = 148
  lineNumber = 1
  lineNumber = 148
  var call394 = callmethod(var_nm,"_escape", [0]);
  var var_enm = call394;
  lineNumber = 151
  lineNumber = 149
  var string395 = new GraceString("@.str.methname");
  var opresult397 = callmethod(string395, "++", [1], var_myc);
  var string398 = new GraceString(" = private unnamed_addr ");
  var opresult400 = callmethod(opresult397, "++", [1], string398);
  lineNumber = 150
  var string401 = new GraceString("constant [");
  var opresult403 = callmethod(opresult400, "++", [1], string401);
  var opresult405 = callmethod(opresult403, "++", [1], var_len);
  var string406 = new GraceString(" x i8] c\"");
  var opresult408 = callmethod(opresult405, "++", [1], string406);
  var opresult410 = callmethod(opresult408, "++", [1], var_enm);
  var string411 = new GraceString("\\00\"");
  var opresult413 = callmethod(opresult410, "++", [1], string411);
  var var_con = opresult413;
  lineNumber = 151
  var call414 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 152
  var string415 = new GraceString("; OBJECT VAR DEC ");
  var opresult417 = callmethod(string415, "++", [1], var_nm);
  lineNumber = 153
  var call418 = callmethod(this,"out", [1], opresult417);
  var string419 = new GraceString("  call void @adddatum2(%object ");
  var opresult421 = callmethod(string419, "++", [1], var_selfr);
  var string422 = new GraceString(", %object ");
  var opresult424 = callmethod(opresult421, "++", [1], string422);
  var opresult426 = callmethod(opresult424, "++", [1], var_val);
  var string427 = new GraceString(", i32 ");
  var opresult429 = callmethod(opresult426, "++", [1], string427);
  var opresult431 = callmethod(opresult429, "++", [1], var_pos);
  var string432 = new GraceString(")");
  var opresult434 = callmethod(opresult431, "++", [1], string432);
  lineNumber = 154
  var call435 = callmethod(this,"out", [1], opresult434);
  lineNumber = 156
  lineNumber = 154
  var string436 = new GraceString("define private %object @\"reader_");
  var opresult438 = callmethod(string436, "++", [1], var_modname);
  var string439 = new GraceString("_");
  var opresult441 = callmethod(opresult438, "++", [1], string439);
  var opresult443 = callmethod(opresult441, "++", [1], var_enm);
  var string444 = new GraceString("_");
  var opresult446 = callmethod(opresult443, "++", [1], string444);
  var opresult448 = callmethod(opresult446, "++", [1], var_myc);
  lineNumber = 155
  var string449 = new GraceString("\"(%object %self, i32 %nparams, ");
  var opresult451 = callmethod(opresult448, "++", [1], string449);
  lineNumber = 156
  var string452 = new GraceString("%object* %args, i32 %flags) {");
  var opresult454 = callmethod(opresult451, "++", [1], string452);
  lineNumber = 157
  var call455 = callmethod(this,"outprint", [1], opresult454);
  var string456 = new GraceString("  %uo = bitcast %object %self to %UserObject*");
  lineNumber = 158
  var call457 = callmethod(this,"outprint", [1], string456);
  var string458 = new GraceString("  %fieldpp = getelementptr %UserObject* %uo, i32 0, i32 3");
  lineNumber = 159
  var call459 = callmethod(this,"outprint", [1], string458);
  var string460 = new GraceString("  %fieldpf = getelementptr [0 x %object]* %fieldpp, i32 0, i32 ");
  var opresult462 = callmethod(string460, "++", [1], var_pos);
  var string463 = new GraceString("");
  var opresult465 = callmethod(opresult462, "++", [1], string463);
  lineNumber = 160
  var call466 = callmethod(this,"outprint", [1], opresult465);
  var string467 = new GraceString("  %val = load %object* %fieldpf");
  lineNumber = 161
  var call468 = callmethod(this,"outprint", [1], string467);
  var string469 = new GraceString("  ret %object %val");
  lineNumber = 162
  var call470 = callmethod(this,"outprint", [1], string469);
  var string471 = new GraceString("}");
  lineNumber = 163
  var call472 = callmethod(this,"outprint", [1], string471);
  lineNumber = 171
  lineNumber = 163
  var string473 = new GraceString("  call void @addmethod2(%object ");
  var opresult475 = callmethod(string473, "++", [1], var_selfr);
  lineNumber = 164
  var string476 = new GraceString(", i8* getelementptr([");
  var opresult478 = callmethod(opresult475, "++", [1], string476);
  lineNumber = 165
  var opresult480 = callmethod(opresult478, "++", [1], var_len);
  var string481 = new GraceString(" x i8]* @.str.methname");
  var opresult483 = callmethod(opresult480, "++", [1], string481);
  var opresult485 = callmethod(opresult483, "++", [1], var_myc);
  var string486 = new GraceString(", i32 0, i32 0), ");
  var opresult488 = callmethod(opresult485, "++", [1], string486);
  lineNumber = 166
  var string489 = new GraceString("%object(%object, i32, %object*, i32)* ");
  var opresult491 = callmethod(opresult488, "++", [1], string489);
  lineNumber = 167
  var string492 = new GraceString("getelementptr(%object ");
  var opresult494 = callmethod(opresult491, "++", [1], string492);
  lineNumber = 168
  var string495 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult497 = callmethod(opresult494, "++", [1], string495);
  lineNumber = 169
  var string498 = new GraceString("@\"reader_");
  var opresult500 = callmethod(opresult497, "++", [1], string498);
  var opresult502 = callmethod(opresult500, "++", [1], var_modname);
  var string503 = new GraceString("_");
  var opresult505 = callmethod(opresult502, "++", [1], string503);
  var opresult507 = callmethod(opresult505, "++", [1], var_enm);
  lineNumber = 170
  var string508 = new GraceString("_");
  var opresult510 = callmethod(opresult507, "++", [1], string508);
  var opresult512 = callmethod(opresult510, "++", [1], var_myc);
  lineNumber = 171
  var string513 = new GraceString("\"))");
  var opresult515 = callmethod(opresult512, "++", [1], string513);
  lineNumber = 172
  var call516 = callmethod(this,"out", [1], opresult515);
  lineNumber = 173
  lineNumber = 172
  var string517 = new GraceString(":=");
  var opresult519 = callmethod(var_nm, "++", [1], string517);
  var var_nmw = opresult519;
  lineNumber = 173
  var call520 = Grace_length(var_nmw);
  var opresult522 = callmethod(call520, "+", [1], new GraceNum(1));
  var_len = opresult522;
  lineNumber = 174
  lineNumber = 1
  lineNumber = 174
  var call523 = callmethod(var_nmw,"_escape", [0]);
  var_nmw = call523;
  lineNumber = 177
  lineNumber = 175
  var string524 = new GraceString("@.str.methnamew");
  var opresult526 = callmethod(string524, "++", [1], var_myc);
  var string527 = new GraceString(" = private unnamed_addr ");
  var opresult529 = callmethod(opresult526, "++", [1], string527);
  lineNumber = 176
  var string530 = new GraceString("constant [");
  var opresult532 = callmethod(opresult529, "++", [1], string530);
  var opresult534 = callmethod(opresult532, "++", [1], var_len);
  var string535 = new GraceString(" x i8] c\"");
  var opresult537 = callmethod(opresult534, "++", [1], string535);
  var opresult539 = callmethod(opresult537, "++", [1], var_nmw);
  var string540 = new GraceString("\\00\"");
  var opresult542 = callmethod(opresult539, "++", [1], string540);
  var_con = opresult542;
  lineNumber = 177
  var call543 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 180
  lineNumber = 178
  var string544 = new GraceString("define private %object @\"writer_");
  var opresult546 = callmethod(string544, "++", [1], var_modname);
  var string547 = new GraceString("_");
  var opresult549 = callmethod(opresult546, "++", [1], string547);
  var opresult551 = callmethod(opresult549, "++", [1], var_enm);
  var string552 = new GraceString("_");
  var opresult554 = callmethod(opresult551, "++", [1], string552);
  var opresult556 = callmethod(opresult554, "++", [1], var_myc);
  lineNumber = 179
  var string557 = new GraceString("\"(%object %self, i32 %nparams, ");
  var opresult559 = callmethod(opresult556, "++", [1], string557);
  lineNumber = 180
  var string560 = new GraceString("%object* %args, i32 %flags) {");
  var opresult562 = callmethod(opresult559, "++", [1], string560);
  lineNumber = 181
  var call563 = callmethod(this,"outprint", [1], opresult562);
  var string564 = new GraceString("  %params = getelementptr %object* %args, i32 0");
  lineNumber = 182
  var call565 = callmethod(this,"outprint", [1], string564);
  var string566 = new GraceString("  %par0 = load %object* %params");
  lineNumber = 183
  var call567 = callmethod(this,"outprint", [1], string566);
  var string568 = new GraceString("  %uo = bitcast %object %self to %UserObject*");
  lineNumber = 184
  var call569 = callmethod(this,"outprint", [1], string568);
  var string570 = new GraceString("  %fieldpp = getelementptr %UserObject* %uo, i32 0, i32 3");
  lineNumber = 185
  var call571 = callmethod(this,"outprint", [1], string570);
  var string572 = new GraceString("  %fieldpf = getelementptr [0 x %object]* %fieldpp, i32 0, i32 ");
  var opresult574 = callmethod(string572, "++", [1], var_pos);
  var string575 = new GraceString("");
  var opresult577 = callmethod(opresult574, "++", [1], string575);
  lineNumber = 186
  var call578 = callmethod(this,"outprint", [1], opresult577);
  var string579 = new GraceString("  store %object %par0, %object* %fieldpf");
  lineNumber = 187
  var call580 = callmethod(this,"outprint", [1], string579);
  var string581 = new GraceString("  %none = load %object* @none");
  lineNumber = 188
  var call582 = callmethod(this,"outprint", [1], string581);
  var string583 = new GraceString("  ret %object %none");
  lineNumber = 189
  var call584 = callmethod(this,"outprint", [1], string583);
  var string585 = new GraceString("}");
  lineNumber = 190
  var call586 = callmethod(this,"outprint", [1], string585);
  lineNumber = 198
  lineNumber = 190
  var string587 = new GraceString("  call void @addmethod2(%object ");
  var opresult589 = callmethod(string587, "++", [1], var_selfr);
  lineNumber = 191
  var string590 = new GraceString(", i8* getelementptr([");
  var opresult592 = callmethod(opresult589, "++", [1], string590);
  lineNumber = 192
  var opresult594 = callmethod(opresult592, "++", [1], var_len);
  var string595 = new GraceString(" x i8]* @.str.methnamew");
  var opresult597 = callmethod(opresult594, "++", [1], string595);
  var opresult599 = callmethod(opresult597, "++", [1], var_myc);
  var string600 = new GraceString(", i32 0, i32 0), ");
  var opresult602 = callmethod(opresult599, "++", [1], string600);
  lineNumber = 193
  var string603 = new GraceString("%object(%object, i32, %object*, i32)* ");
  var opresult605 = callmethod(opresult602, "++", [1], string603);
  lineNumber = 194
  var string606 = new GraceString("getelementptr(%object ");
  var opresult608 = callmethod(opresult605, "++", [1], string606);
  lineNumber = 195
  var string609 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult611 = callmethod(opresult608, "++", [1], string609);
  lineNumber = 196
  var string612 = new GraceString("@\"writer_");
  var opresult614 = callmethod(opresult611, "++", [1], string612);
  var opresult616 = callmethod(opresult614, "++", [1], var_modname);
  var string617 = new GraceString("_");
  var opresult619 = callmethod(opresult616, "++", [1], string617);
  var opresult621 = callmethod(opresult619, "++", [1], var_enm);
  lineNumber = 197
  var string622 = new GraceString("_");
  var opresult624 = callmethod(opresult621, "++", [1], string622);
  var opresult626 = callmethod(opresult624, "++", [1], var_myc);
  lineNumber = 198
  var string627 = new GraceString("\"))");
  var opresult629 = callmethod(opresult626, "++", [1], string627);
  lineNumber = 199
  var call630 = callmethod(this,"out", [1], opresult629);
  return call630
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjvardec"] = func378;
  lineNumber = 208
var func631 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 202
  lineNumber = 1
  lineNumber = 201
  var call632 = callmethod(var_o,"params", [0]);
  var var_params = call632;
  lineNumber = 202
  lineNumber = 1
  lineNumber = 202
  var call634 = callmethod(var_o,"value", [0]);
  lineNumber = 1
  lineNumber = 202
  var call635 = callmethod(var_o,"superclass", [0]);
  var call636 = callmethod(var_ast,"astobject", [2], call634, call635);
  var array633 = new GraceList([
call636,
]);

  var var_mbody = array633;
  lineNumber = 204
  lineNumber = 203
  var string637 = new GraceString("new");
  var bool638 = new GraceBoolean(false)
  var call639 = callmethod(var_ast,"astidentifier", [2], string637, bool638);
  lineNumber = 204
  var bool640 = new GraceBoolean(false)
  lineNumber = 203
  var call641 = callmethod(var_ast,"astmethod", [4], call639, var_params, var_mbody, bool640);
  var var_newmeth = call641;
  lineNumber = 205
  var array642 = new GraceList([
var_newmeth,
]);

  var var_obody = array642;
  lineNumber = 206
  var bool643 = new GraceBoolean(false)
  var call644 = callmethod(var_ast,"astobject", [2], var_obody, bool643);
  var var_cobj = call644;
  lineNumber = 207
  lineNumber = 1
  lineNumber = 207
  var call645 = callmethod(var_o,"name", [0]);
  var bool646 = new GraceBoolean(false)
  var call647 = callmethod(var_ast,"astdefdec", [3], call645, var_cobj, bool646);
  var var_con = call647;
  lineNumber = 208
  lineNumber = 1
  lineNumber = 208
  lineNumber = 209
  var call648 = callmethod(this,"compilenode", [1], var_con);
  lineNumber = 208
  var call649 = callmethod(var_o,"register:=", [1], call648);
  return call649
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileclass"] = func631;
  lineNumber = 252
var func650 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_outerRef = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 212
  lineNumber = 211
  var var_origInBlock = var_inBlock;
  lineNumber = 213
  lineNumber = 212
  var bool651 = new GraceBoolean(false)
  var_inBlock = bool651;
  lineNumber = 214
  lineNumber = 213
  var var_myc = var_auto__95__count;
  lineNumber = 215
  lineNumber = 214
  var opresult653 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult653;
  lineNumber = 216
  lineNumber = 215
  var string654 = new GraceString("%obj");
  var opresult656 = callmethod(string654, "++", [1], var_myc);
  var var_selfr = opresult656;
  lineNumber = 217
  lineNumber = 216
  var var_numFields = new GraceNum(1);
  lineNumber = 218
  lineNumber = 217
  var var_numMethods = new GraceNum(0);
  lineNumber = 219
  lineNumber = 218
  var var_pos = new GraceNum(1);
  lineNumber = 225
  lineNumber = 219
  lineNumber = 1
  lineNumber = 219
  var call657 = callmethod(var_o,"value", [0]);
  lineNumber = 225
  var block658 = Grace_allocObject();
  block658.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block658.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block658.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block658.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block658.receiver = this;
  block658.className = 'block<genllvm30:225>';
  block658.real = function(
var_e
) {
  lineNumber = 222
  lineNumber = 223
  lineNumber = 1
  lineNumber = 220
  var call660 = callmethod(var_e,"kind", [0]);
  var string661 = new GraceString("vardec");
  var opresult663 = callmethod(call660, "==", [1], string661);
  if (Grace_isTrue(opresult663)) {
  lineNumber = 222
  lineNumber = 221
  var opresult665 = callmethod(var_numMethods, "+", [1], new GraceNum(1));
  var_numMethods = opresult665;
  var if659 = opresult665;
}
  lineNumber = 224
  lineNumber = 223
  var opresult667 = callmethod(var_numMethods, "+", [1], new GraceNum(1));
  var_numMethods = opresult667;
  lineNumber = 225
  lineNumber = 224
  var opresult669 = callmethod(var_numFields, "+", [1], new GraceNum(1));
  var_numFields = opresult669;
  return opresult669;
};
  var call670 = callmethod(Grace_prelude,"for()do", [1, 1], call657, block658);
  lineNumber = 228
  lineNumber = 229
  lineNumber = 226
  var opresult673 = callmethod(var_numFields, "==", [1], new GraceNum(3));
  if (Grace_isTrue(opresult673)) {
  lineNumber = 228
  lineNumber = 227
  var_numFields = new GraceNum(4);
  var if671 = new GraceNum(4);
}
  lineNumber = 233
  lineNumber = 235
  lineNumber = 1
  lineNumber = 229
  var call675 = callmethod(var_o,"superclass", [0]);
  var bool676 = new GraceBoolean(false)
  var opresult678 = callmethod(call675, "/=", [1], bool676);
  if (Grace_isTrue(opresult678)) {
  lineNumber = 230
  lineNumber = 1
  lineNumber = 230
  var call679 = callmethod(var_o,"superclass", [0]);
  lineNumber = 231
  var call680 = callmethod(this,"compilenode", [1], call679);
  var_selfr = call680;
  var if674 = call680;
  } else {
  lineNumber = 233
  lineNumber = 232
  var string681 = new GraceString("  ");
  var opresult683 = callmethod(string681, "++", [1], var_selfr);
  lineNumber = 233
  lineNumber = 232
  var string684 = new GraceString(" = call %object @alloc_obj2(i32 ");
  var opresult686 = callmethod(string684, "++", [1], var_numMethods);
  var string687 = new GraceString(",");
  var opresult689 = callmethod(opresult686, "++", [1], string687);
  var opresult691 = callmethod(opresult683, "++", [1], opresult689);
  lineNumber = 233
  var string692 = new GraceString("i32 ");
  var opresult694 = callmethod(string692, "++", [1], var_numFields);
  var string695 = new GraceString(")");
  var opresult697 = callmethod(opresult694, "++", [1], string695);
  var opresult699 = callmethod(opresult691, "++", [1], opresult697);
  lineNumber = 234
  var call700 = callmethod(this,"out", [1], opresult699);
  var if674 = call700;
}
  lineNumber = 235
  lineNumber = 236
  var call701 = callmethod(this,"compileobjouter", [2], var_selfr, var_outerRef);
  lineNumber = 247
  lineNumber = 236
  lineNumber = 1
  lineNumber = 236
  var call702 = callmethod(var_o,"value", [0]);
  lineNumber = 247
  var block703 = Grace_allocObject();
  block703.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block703.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block703.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block703.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block703.receiver = this;
  block703.className = 'block<genllvm30:247>';
  block703.real = function(
var_e
) {
  lineNumber = 238
  lineNumber = 240
  lineNumber = 1
  lineNumber = 237
  var call705 = callmethod(var_e,"kind", [0]);
  var string706 = new GraceString("method");
  var opresult708 = callmethod(call705, "==", [1], string706);
  if (Grace_isTrue(opresult708)) {
  lineNumber = 238
  lineNumber = 239
  var call709 = callmethod(this,"compilemethod", [3], var_e, var_selfr, var_pos);
  var if704 = call709;
}
  lineNumber = 241
  lineNumber = 243
  lineNumber = 1
  lineNumber = 240
  var call711 = callmethod(var_e,"kind", [0]);
  var string712 = new GraceString("vardec");
  var opresult714 = callmethod(call711, "==", [1], string712);
  if (Grace_isTrue(opresult714)) {
  lineNumber = 241
  lineNumber = 242
  var call715 = callmethod(this,"compileobjvardec", [3], var_e, var_selfr, var_pos);
  var if710 = call715;
}
  lineNumber = 244
  lineNumber = 246
  lineNumber = 1
  lineNumber = 243
  var call717 = callmethod(var_e,"kind", [0]);
  var string718 = new GraceString("defdec");
  var opresult720 = callmethod(call717, "==", [1], string718);
  if (Grace_isTrue(opresult720)) {
  lineNumber = 244
  lineNumber = 245
  var call721 = callmethod(this,"compileobjdefdec", [3], var_e, var_selfr, var_pos);
  var if716 = call721;
}
  lineNumber = 247
  lineNumber = 246
  var opresult723 = callmethod(var_pos, "+", [1], new GraceNum(1));
  var_pos = opresult723;
  return opresult723;
};
  var call724 = callmethod(Grace_prelude,"for()do", [1, 1], call702, block703);
  lineNumber = 249
  lineNumber = 248
  var string725 = new GraceString("  call void @set_type(%object ");
  var opresult727 = callmethod(string725, "++", [1], var_selfr);
  var string728 = new GraceString(", ");
  var opresult730 = callmethod(opresult727, "++", [1], string728);
  lineNumber = 249
  var string731 = new GraceString("i16 ");
  lineNumber = 1
  lineNumber = 249
  var call732 = callmethod(var_o,"otype", [0]);
  var call733 = callmethod(var_subtype,"typeId", [1], call732);
  var opresult735 = callmethod(string731, "++", [1], call733);
  var string736 = new GraceString(")");
  var opresult738 = callmethod(opresult735, "++", [1], string736);
  var opresult740 = callmethod(opresult730, "++", [1], opresult738);
  lineNumber = 250
  var call741 = callmethod(this,"out", [1], opresult740);
  lineNumber = 251
  lineNumber = 1
  lineNumber = 250
  var call742 = callmethod(var_o,"register:=", [1], var_selfr);
  lineNumber = 252
  lineNumber = 251
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
  this.methods["compileobject"] = func650;
  lineNumber = 272
var func743 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 255
  lineNumber = 254
  var var_origInBlock = var_inBlock;
  lineNumber = 256
  lineNumber = 255
  var bool744 = new GraceBoolean(true)
  var_inBlock = bool744;
  lineNumber = 257
  lineNumber = 256
  var var_myc = var_auto__95__count;
  lineNumber = 258
  lineNumber = 257
  var opresult746 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult746;
  lineNumber = 259
  lineNumber = 258
  var string747 = new GraceString("apply");
  var bool748 = new GraceBoolean(false)
  var call749 = callmethod(var_ast,"astidentifier", [2], string747, bool748);
  lineNumber = 259
  lineNumber = 1
  lineNumber = 259
  var call750 = callmethod(var_o,"params", [0]);
  lineNumber = 1
  lineNumber = 259
  var call751 = callmethod(var_o,"body", [0]);
  var bool752 = new GraceBoolean(false)
  lineNumber = 258
  var call753 = callmethod(var_ast,"astmethod", [4], call749, call750, call751, bool752);
  var var_applymeth = call753;
  lineNumber = 261
  lineNumber = 1
  lineNumber = 260
  var bool754 = new GraceBoolean(true)
  var call755 = callmethod(var_applymeth,"selfclosure:=", [1], bool754);
  lineNumber = 261
  var array756 = new GraceList([
var_applymeth,
]);

  var bool757 = new GraceBoolean(false)
  var call758 = callmethod(var_ast,"astobject", [2], array756, bool757);
  var var_objbody = call758;
  lineNumber = 262
  lineNumber = 263
  var call759 = callmethod(this,"compilenode", [1], var_objbody);
  var var_obj = call759;
  lineNumber = 264
  lineNumber = 263
  var string760 = new GraceString("Block<");
  var opresult762 = callmethod(string760, "++", [1], var_modname);
  var string763 = new GraceString(":");
  var opresult765 = callmethod(opresult762, "++", [1], string763);
  var opresult767 = callmethod(opresult765, "++", [1], var_myc);
  var string768 = new GraceString(">");
  var opresult770 = callmethod(opresult767, "++", [1], string768);
  var var_modn = opresult770;
  lineNumber = 266
  lineNumber = 264
  var string771 = new GraceString("@.str.block");
  var opresult773 = callmethod(string771, "++", [1], var_myc);
  var string774 = new GraceString(" = private unnamed_addr ");
  var opresult776 = callmethod(opresult773, "++", [1], string774);
  lineNumber = 266
  lineNumber = 265
  var string777 = new GraceString("constant [");
  lineNumber = 266
  lineNumber = 1
  lineNumber = 265
  var call778 = callmethod(var_modn,"size", [0]);
  var opresult780 = callmethod(call778, "+", [1], new GraceNum(1));
  var opresult782 = callmethod(string777, "++", [1], opresult780);
  var string783 = new GraceString(" x i8] c\"");
  var opresult785 = callmethod(opresult782, "++", [1], string783);
  var opresult787 = callmethod(opresult785, "++", [1], var_modn);
  var string788 = new GraceString("\\00\"");
  var opresult790 = callmethod(opresult787, "++", [1], string788);
  var opresult792 = callmethod(opresult776, "++", [1], opresult790);
  var var_con = opresult792;
  lineNumber = 266
  var call793 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 269
  lineNumber = 267
  var string794 = new GraceString("  call void @setclassname(%object ");
  var opresult796 = callmethod(string794, "++", [1], var_obj);
  var string797 = new GraceString(", ");
  var opresult799 = callmethod(opresult796, "++", [1], string797);
  lineNumber = 269
  lineNumber = 268
  var string800 = new GraceString("i8* getelementptr([");
  lineNumber = 269
  lineNumber = 1
  lineNumber = 268
  var call801 = callmethod(var_modn,"size", [0]);
  var opresult803 = callmethod(call801, "+", [1], new GraceNum(1));
  var opresult805 = callmethod(string800, "++", [1], opresult803);
  var string806 = new GraceString(" x i8]* @.str.block");
  var opresult808 = callmethod(opresult805, "++", [1], string806);
  var opresult810 = callmethod(opresult808, "++", [1], var_myc);
  var string811 = new GraceString(",");
  var opresult813 = callmethod(opresult810, "++", [1], string811);
  var opresult815 = callmethod(opresult799, "++", [1], opresult813);
  lineNumber = 269
  var string816 = new GraceString("i32 0,i32 0))");
  var opresult818 = callmethod(opresult815, "++", [1], string816);
  lineNumber = 270
  var call819 = callmethod(this,"out", [1], opresult818);
  lineNumber = 271
  lineNumber = 1
  lineNumber = 270
  var call820 = callmethod(var_o,"register:=", [1], var_obj);
  lineNumber = 272
  lineNumber = 271
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
  this.methods["compileblock"] = func743;
  lineNumber = 311
var func821 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 275
  lineNumber = 274
  var var_myc = var_auto__95__count;
  lineNumber = 276
  lineNumber = 275
  var opresult823 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult823;
  lineNumber = 276
  lineNumber = 1
  lineNumber = 276
  var call824 = callmethod(var_o,"value", [0]);
  lineNumber = 277
  var call825 = callmethod(this,"compilenode", [1], call824);
  var var_over = call825;
  lineNumber = 278
  lineNumber = 1
  lineNumber = 277
  var call826 = callmethod(var_o,"body", [0]);
  var var_blk = call826;
  lineNumber = 278
  lineNumber = 279
  var call827 = callmethod(this,"compilenode", [1], var_blk);
  var var_obj = call827;
  var string828 = new GraceString("  store %object ");
  var opresult830 = callmethod(string828, "++", [1], var_over);
  var string831 = new GraceString(", %object* %params_0");
  var opresult833 = callmethod(opresult830, "++", [1], string831);
  lineNumber = 280
  var call834 = callmethod(this,"out", [1], opresult833);
  lineNumber = 282
  lineNumber = 280
  var string835 = new GraceString("  %iter");
  var opresult837 = callmethod(string835, "++", [1], var_myc);
  var string838 = new GraceString(" = call %object @callmethod(%object ");
  var opresult840 = callmethod(opresult837, "++", [1], string838);
  var opresult842 = callmethod(opresult840, "++", [1], var_over);
  lineNumber = 281
  var string843 = new GraceString(", i8* getelementptr([5 x i8]* @.str._iter");
  var opresult845 = callmethod(opresult842, "++", [1], string843);
  lineNumber = 282
  var string846 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult848 = callmethod(opresult845, "++", [1], string846);
  lineNumber = 284
  var call849 = callmethod(this,"out", [1], opresult848);
  var string850 = new GraceString("  br label %BeginFor");
  var opresult852 = callmethod(string850, "++", [1], var_myc);
  lineNumber = 285
  var call853 = callmethod(this,"out", [1], opresult852);
  var string854 = new GraceString("BeginFor");
  var opresult856 = callmethod(string854, "++", [1], var_myc);
  lineNumber = 286
  var call857 = callmethod(this,"beginblock", [1], opresult856);
  lineNumber = 289
  lineNumber = 286
  var string858 = new GraceString("  %condobj");
  var opresult860 = callmethod(string858, "++", [1], var_myc);
  var string861 = new GraceString(" = call %object @callmethod(%object %iter");
  var opresult863 = callmethod(opresult860, "++", [1], string861);
  lineNumber = 287
  var opresult865 = callmethod(opresult863, "++", [1], var_myc);
  lineNumber = 288
  var string866 = new GraceString(", i8* getelementptr([9 x i8]* @.str._havemore");
  var opresult868 = callmethod(opresult865, "++", [1], string866);
  lineNumber = 289
  var string869 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult871 = callmethod(opresult868, "++", [1], string869);
  lineNumber = 290
  var call872 = callmethod(this,"out", [1], opresult871);
  lineNumber = 291
  lineNumber = 290
  var string873 = new GraceString("%cond");
  var opresult875 = callmethod(string873, "++", [1], var_myc);
  var var_creg = opresult875;
  lineNumber = 292
  lineNumber = 291
  var string876 = new GraceString("  ");
  var opresult878 = callmethod(string876, "++", [1], var_creg);
  var string879 = new GraceString("_valp = call i1 @istrue(%object %condobj");
  var opresult881 = callmethod(opresult878, "++", [1], string879);
  lineNumber = 292
  var opresult883 = callmethod(opresult881, "++", [1], var_myc);
  var string884 = new GraceString(")");
  var opresult886 = callmethod(opresult883, "++", [1], string884);
  lineNumber = 293
  var call887 = callmethod(this,"out", [1], opresult886);
  var string888 = new GraceString("  ");
  var opresult890 = callmethod(string888, "++", [1], var_creg);
  var string891 = new GraceString(" = icmp eq i1 0, ");
  var opresult893 = callmethod(opresult890, "++", [1], string891);
  var opresult895 = callmethod(opresult893, "++", [1], var_creg);
  var string896 = new GraceString("_valp");
  var opresult898 = callmethod(opresult895, "++", [1], string896);
  lineNumber = 294
  var call899 = callmethod(this,"out", [1], opresult898);
  lineNumber = 295
  lineNumber = 294
  var string900 = new GraceString("br i1 ");
  var opresult902 = callmethod(string900, "++", [1], var_creg);
  var string903 = new GraceString(", label %EndFor");
  var opresult905 = callmethod(opresult902, "++", [1], string903);
  var opresult907 = callmethod(opresult905, "++", [1], var_myc);
  lineNumber = 295
  var string908 = new GraceString(", label %ForBody");
  var opresult910 = callmethod(opresult907, "++", [1], string908);
  var opresult912 = callmethod(opresult910, "++", [1], var_myc);
  lineNumber = 296
  var call913 = callmethod(this,"out", [1], opresult912);
  var string914 = new GraceString("ForBody");
  var opresult916 = callmethod(string914, "++", [1], var_myc);
  lineNumber = 297
  var call917 = callmethod(this,"beginblock", [1], opresult916);
  lineNumber = 298
  lineNumber = 297
  var string918 = new GraceString("null");
  var var_tret = string918;
  lineNumber = 299
  lineNumber = 298
  var string919 = new GraceString("ERROR");
  var var_tblock = string919;
  lineNumber = 302
  lineNumber = 299
  var string920 = new GraceString(" %forval");
  var opresult922 = callmethod(string920, "++", [1], var_myc);
  var string923 = new GraceString(" = call %object @callmethod(%object %iter");
  var opresult925 = callmethod(opresult922, "++", [1], string923);
  lineNumber = 300
  var opresult927 = callmethod(opresult925, "++", [1], var_myc);
  lineNumber = 301
  var string928 = new GraceString(", i8* getelementptr([5 x i8]* @.str._next");
  var opresult930 = callmethod(opresult927, "++", [1], string928);
  lineNumber = 302
  var string931 = new GraceString(",i32 0,i32 0), i32 0, %object* %params)");
  var opresult933 = callmethod(opresult930, "++", [1], string931);
  lineNumber = 303
  var call934 = callmethod(this,"out", [1], opresult933);
  var string935 = new GraceString("  store %object %forval");
  var opresult937 = callmethod(string935, "++", [1], var_myc);
  var string938 = new GraceString(", %object* %params_0");
  var opresult940 = callmethod(opresult937, "++", [1], string938);
  lineNumber = 304
  var call941 = callmethod(this,"out", [1], opresult940);
  lineNumber = 306
  lineNumber = 304
  var string942 = new GraceString("  call %object @callmethod(%object ");
  var opresult944 = callmethod(string942, "++", [1], var_obj);
  lineNumber = 305
  var string945 = new GraceString(", i8* getelementptr([6 x i8]* @.str._apply");
  var opresult947 = callmethod(opresult944, "++", [1], string945);
  lineNumber = 306
  var string948 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult950 = callmethod(opresult947, "++", [1], string948);
  lineNumber = 307
  var call951 = callmethod(this,"out", [1], opresult950);
  lineNumber = 308
  lineNumber = 307
  var_tblock = var_bblock;
  lineNumber = 308
  var string952 = new GraceString("  br label %BeginFor");
  var opresult954 = callmethod(string952, "++", [1], var_myc);
  lineNumber = 309
  var call955 = callmethod(this,"out", [1], opresult954);
  var string956 = new GraceString("EndFor");
  var opresult958 = callmethod(string956, "++", [1], var_myc);
  lineNumber = 310
  var call959 = callmethod(this,"beginblock", [1], opresult958);
  lineNumber = 311
  lineNumber = 1
  lineNumber = 310
  var string960 = new GraceString("%none");
  var call961 = callmethod(var_o,"register:=", [1], string960);
  return call961
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilefor"] = func821;
  lineNumber = 521
var func962 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_selfobj = arguments[curarg];
  curarg++;
  var var_pos = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 318
  lineNumber = 317
  var var_origParamsUsed = var_paramsUsed;
  lineNumber = 319
  lineNumber = 318
  var_paramsUsed = new GraceNum(1);
  lineNumber = 320
  lineNumber = 319
  var var_origInBlock = var_inBlock;
  lineNumber = 321
  lineNumber = 1
  lineNumber = 320
  var call963 = callmethod(var_o,"selfclosure", [0]);
  var_inBlock = call963;
  lineNumber = 322
  lineNumber = 321
  var var_oldout = var_output;
  lineNumber = 323
  lineNumber = 322
  var var_oldbblock = var_bblock;
  lineNumber = 324
  lineNumber = 323
  var var_oldusedvars = var_usedvars;
  lineNumber = 325
  lineNumber = 324
  var var_olddeclaredvars = var_declaredvars;
  lineNumber = 326
  var array964 = new GraceList([
]);

  var_output = array964;
  lineNumber = 327
  var array965 = new GraceList([
]);

  var_usedvars = array965;
  lineNumber = 328
  var array966 = new GraceList([
]);

  var_declaredvars = array966;
  lineNumber = 329
  lineNumber = 328
  var var_myc = var_auto__95__count;
  lineNumber = 330
  lineNumber = 329
  var opresult968 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult968;
  lineNumber = 331
  lineNumber = 1
  lineNumber = 331
  lineNumber = 1
  lineNumber = 330
  var call969 = callmethod(var_o,"value", [0]);
  var call970 = callmethod(call969,"value", [0]);
  var var_name = call970;
  lineNumber = 332
  lineNumber = 331
  var opresult972 = callmethod(var_name, "++", [1], var_myc);
  var var_nm = opresult972;
  lineNumber = 332
  var string973 = new GraceString("entry");
  lineNumber = 333
  var call974 = callmethod(this,"beginblock", [1], string973);
  lineNumber = 1
  lineNumber = 333
  var call975 = callmethod(var_output,"pop", [0]);
  lineNumber = 335
  lineNumber = 1
  lineNumber = 335
  lineNumber = 1
  lineNumber = 334
  var call976 = callmethod(var_o,"params", [0]);
  var call977 = callmethod(call976,"size", [0]);
  var var_i = call977;
  lineNumber = 341
  lineNumber = 343
  lineNumber = 1
  lineNumber = 335
  var call979 = callmethod(var_o,"varargs", [0]);
  if (Grace_isTrue(call979)) {
  lineNumber = 336
  lineNumber = 1
  lineNumber = 336
  lineNumber = 1
  lineNumber = 336
  lineNumber = 1
  lineNumber = 336
  var call980 = callmethod(var_o,"vararg", [0]);
  var call981 = callmethod(call980,"value", [0]);
  var call982 = callmethod(call981,"_escape", [0]);
  var var_van = call982;
  lineNumber = 338
  lineNumber = 337
  var string983 = new GraceString("  %\"var_init_");
  var opresult985 = callmethod(string983, "++", [1], var_van);
  var string986 = new GraceString("\" = call %object @process_varargs(");
  var opresult988 = callmethod(opresult985, "++", [1], string986);
  lineNumber = 338
  var string989 = new GraceString("%object* %args, i32 ");
  var opresult991 = callmethod(string989, "++", [1], var_i);
  var string992 = new GraceString(", i32 %nparams)");
  var opresult994 = callmethod(opresult991, "++", [1], string992);
  var opresult996 = callmethod(opresult988, "++", [1], opresult994);
  lineNumber = 339
  var call997 = callmethod(this,"out", [1], opresult996);
  var string998 = new GraceString("  %\"var_");
  var opresult1000 = callmethod(string998, "++", [1], var_van);
  var string1001 = new GraceString("\" = call %object* @alloc_var()");
  var opresult1003 = callmethod(opresult1000, "++", [1], string1001);
  lineNumber = 340
  var call1004 = callmethod(this,"out", [1], opresult1003);
  var string1005 = new GraceString("  store %object %\"var_init_");
  var opresult1007 = callmethod(string1005, "++", [1], var_van);
  var string1008 = new GraceString("\", %object* %\"var_");
  var opresult1010 = callmethod(opresult1007, "++", [1], string1008);
  var opresult1012 = callmethod(opresult1010, "++", [1], var_van);
  var string1013 = new GraceString("\"");
  var opresult1015 = callmethod(opresult1012, "++", [1], string1013);
  lineNumber = 341
  var call1016 = callmethod(this,"out", [1], opresult1015);
  var call1017 = callmethod(var_declaredvars,"push", [1], var_van);
  var if978 = call1017;
}
  lineNumber = 343
  var string1018 = new GraceString("  %undefined = load %object* @undefined");
  lineNumber = 344
  var call1019 = callmethod(this,"out", [1], string1018);
  var string1020 = new GraceString("  %none = load %object* @none");
  lineNumber = 345
  var call1021 = callmethod(this,"out", [1], string1020);
  lineNumber = 346
  lineNumber = 345
  var string1022 = new GraceString("%none");
  var var_ret = string1022;
  lineNumber = 352
  lineNumber = 346
  lineNumber = 1
  lineNumber = 346
  var call1023 = callmethod(var_o,"body", [0]);
  lineNumber = 352
  var block1024 = Grace_allocObject();
  block1024.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1024.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1024.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1024.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1024.receiver = this;
  block1024.className = 'block<genllvm30:352>';
  block1024.real = function(
var_l
) {
  lineNumber = 354
  lineNumber = 1
  lineNumber = 347
  var call1026 = callmethod(var_l,"kind", [0]);
  var string1027 = new GraceString("vardec");
  var opresult1029 = callmethod(call1026, "==", [1], string1027);
  lineNumber = 354
  lineNumber = 1
  lineNumber = 347
  var call1030 = callmethod(var_l,"kind", [0]);
  var string1031 = new GraceString("defdec");
  var opresult1033 = callmethod(call1030, "==", [1], string1031);
  var opresult1035 = callmethod(opresult1029, "|", [1], opresult1033);
  lineNumber = 354
  lineNumber = 1
  lineNumber = 348
  var call1036 = callmethod(var_l,"kind", [0]);
  var string1037 = new GraceString("class");
  var opresult1039 = callmethod(call1036, "==", [1], string1037);
  var opresult1041 = callmethod(opresult1035, "|", [1], opresult1039);
  if (Grace_isTrue(opresult1041)) {
  lineNumber = 349
  lineNumber = 1
  lineNumber = 349
  lineNumber = 1
  lineNumber = 349
  lineNumber = 1
  lineNumber = 349
  var call1042 = callmethod(var_l,"name", [0]);
  var call1043 = callmethod(call1042,"value", [0]);
  var call1044 = callmethod(call1043,"_escape", [0]);
  var var_tnm = call1044;
  lineNumber = 350
  var call1045 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 351
  var string1046 = new GraceString("  %\"var_");
  var opresult1048 = callmethod(string1046, "++", [1], var_tnm);
  var string1049 = new GraceString("\" = call %object* @alloc_var()");
  var opresult1051 = callmethod(opresult1048, "++", [1], string1049);
  lineNumber = 352
  var call1052 = callmethod(this,"out", [1], opresult1051);
  var string1053 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult1055 = callmethod(string1053, "++", [1], var_tnm);
  var string1056 = new GraceString("\"");
  var opresult1058 = callmethod(opresult1055, "++", [1], string1056);
  lineNumber = 353
  var call1059 = callmethod(this,"out", [1], opresult1058);
  var if1025 = call1059;
}
  return if1025;
};
  var call1060 = callmethod(Grace_prelude,"for()do", [1, 1], call1023, block1024);
  lineNumber = 356
  lineNumber = 355
  lineNumber = 1
  lineNumber = 355
  var call1061 = callmethod(var_o,"body", [0]);
  lineNumber = 356
  var block1062 = Grace_allocObject();
  block1062.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1062.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1062.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1062.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1062.receiver = this;
  block1062.className = 'block<genllvm30:356>';
  block1062.real = function(
var_l
) {
  lineNumber = 357
  var call1063 = callmethod(this,"compilenode", [1], var_l);
  var_ret = call1063;
  return call1063;
};
  var call1064 = callmethod(Grace_prelude,"for()do", [1, 1], call1061, block1062);
  lineNumber = 358
  var string1065 = new GraceString("  ret %object ");
  var opresult1067 = callmethod(string1065, "++", [1], var_ret);
  lineNumber = 359
  var call1068 = callmethod(this,"out", [1], opresult1067);
  var string1069 = new GraceString("}");
  lineNumber = 360
  var call1070 = callmethod(this,"out", [1], string1069);
  lineNumber = 361
  lineNumber = 360
  var var_body = var_output;
  lineNumber = 362
  var array1071 = new GraceList([
]);

  var_output = array1071;
  lineNumber = 363
  var array1072 = new GraceList([
]);

  var var_closurevars = array1072;
  lineNumber = 382
  lineNumber = 363
  lineNumber = 382
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
  block1073.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1073.receiver = this;
  block1073.className = 'block<genllvm30:382>';
  block1073.real = function(
var_u
) {
  lineNumber = 365
  lineNumber = 364
  var bool1074 = new GraceBoolean(false)
  var var_decl = bool1074;
  lineNumber = 368
  lineNumber = 365
  lineNumber = 368
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
  block1075.className = 'block<genllvm30:368>';
  block1075.real = function(
var_d
) {
  lineNumber = 369
  lineNumber = 366
  var opresult1078 = callmethod(var_d, "==", [1], var_u);
  if (Grace_isTrue(opresult1078)) {
  lineNumber = 368
  lineNumber = 367
  var bool1079 = new GraceBoolean(true)
  var_decl = bool1079;
  var if1076 = bool1079;
}
  return if1076;
};
  var call1080 = callmethod(Grace_prelude,"for()do", [1, 1], var_declaredvars, block1075);
  lineNumber = 382
  lineNumber = 370
  if (Grace_isTrue(var_decl)) {
  lineNumber = 372
  lineNumber = 371
  var_decl = var_decl;
  var if1081 = var_decl;
  } else {
  lineNumber = 374
  lineNumber = 373
  var bool1082 = new GraceBoolean(false)
  var var_found = bool1082;
  lineNumber = 377
  lineNumber = 374
  lineNumber = 377
  var block1083 = Grace_allocObject();
  block1083.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1083.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1083.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1083.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1083.receiver = this;
  block1083.className = 'block<genllvm30:377>';
  block1083.real = function(
var_v
) {
  lineNumber = 378
  lineNumber = 375
  var opresult1086 = callmethod(var_v, "==", [1], var_u);
  if (Grace_isTrue(opresult1086)) {
  lineNumber = 377
  lineNumber = 376
  var bool1087 = new GraceBoolean(true)
  var_found = bool1087;
  var if1084 = bool1087;
}
  return if1084;
};
  var call1088 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block1083);
  lineNumber = 382
  lineNumber = 379
  if (Grace_isTrue(var_found)) {
  lineNumber = 381
  lineNumber = 380
  var_found = var_found;
  var if1089 = var_found;
  } else {
  lineNumber = 382
  var call1090 = callmethod(var_closurevars,"push", [1], var_u);
  var if1089 = call1090;
}
  var if1081 = if1089;
}
  return if1081;
};
  var call1091 = callmethod(Grace_prelude,"for()do", [1, 1], var_usedvars, block1073);
  lineNumber = 387
  lineNumber = 389
  lineNumber = 1
  lineNumber = 386
  var call1093 = callmethod(var_o,"selfclosure", [0]);
  if (Grace_isTrue(call1093)) {
  lineNumber = 387
  var string1094 = new GraceString("self");
  var call1095 = callmethod(var_closurevars,"push", [1], string1094);
  var if1092 = call1095;
}
  lineNumber = 389
  lineNumber = 390
  lineNumber = 389
  var string1096 = new GraceString("@\"meth_");
  var opresult1098 = callmethod(string1096, "++", [1], var_modname);
  var string1099 = new GraceString("_");
  var opresult1101 = callmethod(opresult1098, "++", [1], string1099);
  lineNumber = 1
  lineNumber = 389
  var call1102 = callmethod(var_nm,"_escape", [0]);
  var opresult1104 = callmethod(opresult1101, "++", [1], call1102);
  var string1105 = new GraceString("\"");
  var opresult1107 = callmethod(opresult1104, "++", [1], string1105);
  var var_litname = opresult1107;
  lineNumber = 390
  var string1108 = new GraceString(";;;; METHOD DEFINITION: ");
  var opresult1110 = callmethod(string1108, "++", [1], var_name);
  lineNumber = 391
  var call1111 = callmethod(this,"outprint", [1], opresult1110);
  lineNumber = 410
  lineNumber = 412
  lineNumber = 1
  lineNumber = 391
  var call1113 = callmethod(var_closurevars,"size", [0]);
  var opresult1115 = callmethod(call1113, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1115)) {
  lineNumber = 401
  lineNumber = 403
  lineNumber = 1
  lineNumber = 392
  var call1117 = callmethod(var_o,"selfclosure", [0]);
  if (Grace_isTrue(call1117)) {
  lineNumber = 394
  lineNumber = 393
  var string1118 = new GraceString("define private %object ");
  var opresult1120 = callmethod(string1118, "++", [1], var_litname);
  var string1121 = new GraceString("(%object %realself, i32 %nparams, ");
  var opresult1123 = callmethod(opresult1120, "++", [1], string1121);
  lineNumber = 394
  var string1124 = new GraceString("%object* %args, i32 %flags) {");
  var opresult1126 = callmethod(opresult1123, "++", [1], string1124);
  lineNumber = 395
  var call1127 = callmethod(this,"out", [1], opresult1126);
  var string1128 = new GraceString("closureinit");
  lineNumber = 396
  var call1129 = callmethod(this,"beginblock", [1], string1128);
  var string1130 = new GraceString("  %uo = bitcast %object %realself to %UserObject*");
  lineNumber = 397
  var call1131 = callmethod(this,"out", [1], string1130);
  var if1116 = call1131;
  } else {
  lineNumber = 399
  lineNumber = 398
  var string1132 = new GraceString("define private %object ");
  var opresult1134 = callmethod(string1132, "++", [1], var_litname);
  var string1135 = new GraceString("(%object %self, i32 %nparams, ");
  var opresult1137 = callmethod(opresult1134, "++", [1], string1135);
  lineNumber = 399
  var string1138 = new GraceString("%object* %args, i32 %flags) {");
  var opresult1140 = callmethod(opresult1137, "++", [1], string1138);
  lineNumber = 400
  var call1141 = callmethod(this,"out", [1], opresult1140);
  var string1142 = new GraceString("closureinit");
  lineNumber = 401
  var call1143 = callmethod(this,"beginblock", [1], string1142);
  var string1144 = new GraceString("  %uo = bitcast %object %self to %UserObject*");
  lineNumber = 402
  var call1145 = callmethod(this,"out", [1], string1144);
  var if1116 = call1145;
}
  lineNumber = 403
  var string1146 = new GraceString("  %closurepp = getelementptr %UserObject* %uo, i32 0, i32 3");
  lineNumber = 404
  var call1147 = callmethod(this,"out", [1], string1146);
  var string1148 = new GraceString("  %closurepf = getelementptr [0 x %object]* %closurepp, i32 0, i32 ");
  var opresult1150 = callmethod(string1148, "++", [1], var_pos);
  var string1151 = new GraceString("");
  var opresult1153 = callmethod(opresult1150, "++", [1], string1151);
  lineNumber = 405
  var call1154 = callmethod(this,"out", [1], opresult1153);
  var string1155 = new GraceString("  %closurepc = bitcast %object* %closurepf to %object***");
  lineNumber = 406
  var call1156 = callmethod(this,"out", [1], string1155);
  var string1157 = new GraceString("  %closure = load %object*** %closurepc");
  lineNumber = 407
  var call1158 = callmethod(this,"out", [1], string1157);
  var string1159 = new GraceString("  br label %entry");
  lineNumber = 408
  var call1160 = callmethod(this,"out", [1], string1159);
  var if1112 = call1160;
  } else {
  lineNumber = 410
  lineNumber = 409
  var string1161 = new GraceString("define private %object ");
  var opresult1163 = callmethod(string1161, "++", [1], var_litname);
  var string1164 = new GraceString("(%object %self, i32 %nparams, ");
  var opresult1166 = callmethod(opresult1163, "++", [1], string1164);
  lineNumber = 410
  var string1167 = new GraceString("%object* %args, i32 %flags) {");
  var opresult1169 = callmethod(opresult1166, "++", [1], string1167);
  lineNumber = 411
  var call1170 = callmethod(this,"out", [1], opresult1169);
  var if1112 = call1170;
}
  lineNumber = 412
  var string1171 = new GraceString("entry");
  lineNumber = 417
  var call1172 = callmethod(this,"beginblock", [1], string1171);
  lineNumber = 418
  lineNumber = 417
  var_i = new GraceNum(0);
  lineNumber = 419
  var array1173 = new GraceList([
]);

  var var_toremove = array1173;
  lineNumber = 433
  lineNumber = 419
  lineNumber = 1
  lineNumber = 419
  var call1174 = callmethod(var_o,"params", [0]);
  lineNumber = 433
  var block1175 = Grace_allocObject();
  block1175.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1175.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1175.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1175.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1175.receiver = this;
  block1175.className = 'block<genllvm30:433>';
  block1175.real = function(
var_p
) {
  lineNumber = 420
  lineNumber = 1
  lineNumber = 420
  lineNumber = 1
  lineNumber = 420
  var call1176 = callmethod(var_p,"value", [0]);
  var call1177 = callmethod(call1176,"_escape", [0]);
  var var_pn = call1177;
  lineNumber = 429
  lineNumber = 421
  var call1179 = callmethod(var_closurevars,"contains", [1], var_pn);
  if (Grace_isTrue(call1179)) {
  lineNumber = 422
  var string1180 = new GraceString("  %\"var_");
  var opresult1182 = callmethod(string1180, "++", [1], var_pn);
  var string1183 = new GraceString("\" = call %object* @alloc_var()");
  var opresult1185 = callmethod(opresult1182, "++", [1], string1183);
  lineNumber = 423
  var call1186 = callmethod(this,"out", [1], opresult1185);
  var string1187 = new GraceString("  %argp_");
  var opresult1189 = callmethod(string1187, "++", [1], var_i);
  var string1190 = new GraceString(" = getelementptr %object* %args, i32 ");
  var opresult1192 = callmethod(opresult1189, "++", [1], string1190);
  var opresult1194 = callmethod(opresult1192, "++", [1], var_i);
  var string1195 = new GraceString("");
  var opresult1197 = callmethod(opresult1194, "++", [1], string1195);
  lineNumber = 424
  var call1198 = callmethod(this,"out", [1], opresult1197);
  var string1199 = new GraceString("  %argval_");
  var opresult1201 = callmethod(string1199, "++", [1], var_i);
  var string1202 = new GraceString(" = load %object* %argp_");
  var opresult1204 = callmethod(opresult1201, "++", [1], string1202);
  var opresult1206 = callmethod(opresult1204, "++", [1], var_i);
  var string1207 = new GraceString("");
  var opresult1209 = callmethod(opresult1206, "++", [1], string1207);
  lineNumber = 425
  var call1210 = callmethod(this,"out", [1], opresult1209);
  var string1211 = new GraceString("  store %object %\"argval_");
  var opresult1213 = callmethod(string1211, "++", [1], var_i);
  var string1214 = new GraceString("\", %object* %\"var_");
  var opresult1216 = callmethod(opresult1213, "++", [1], string1214);
  var opresult1218 = callmethod(opresult1216, "++", [1], var_pn);
  var string1219 = new GraceString("\"");
  var opresult1221 = callmethod(opresult1218, "++", [1], string1219);
  lineNumber = 426
  var call1222 = callmethod(this,"out", [1], opresult1221);
  var call1223 = callmethod(var_toremove,"push", [1], var_pn);
  var if1178 = call1223;
  } else {
  lineNumber = 429
  lineNumber = 428
  var string1224 = new GraceString("  %\"var_");
  var opresult1226 = callmethod(string1224, "++", [1], var_pn);
  var string1227 = new GraceString("\" = getelementptr %object* %args, ");
  var opresult1229 = callmethod(opresult1226, "++", [1], string1227);
  lineNumber = 429
  var string1230 = new GraceString("i32 ");
  var opresult1232 = callmethod(opresult1229, "++", [1], string1230);
  var opresult1234 = callmethod(opresult1232, "++", [1], var_i);
  lineNumber = 430
  var call1235 = callmethod(this,"out", [1], opresult1234);
  var if1178 = call1235;
}
  lineNumber = 431
  var call1236 = callmethod(var_declaredvars,"push", [1], var_pn);
  lineNumber = 433
  lineNumber = 432
  var opresult1238 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult1238;
  return opresult1238;
};
  var call1239 = callmethod(Grace_prelude,"for()do", [1, 1], call1174, block1175);
  lineNumber = 435
  lineNumber = 434
  var var_origclosurevars = var_closurevars;
  lineNumber = 436
  var array1240 = new GraceList([
]);

  var_closurevars = array1240;
  lineNumber = 440
  lineNumber = 436
  lineNumber = 440
  var block1241 = Grace_allocObject();
  block1241.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1241.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1241.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1241.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1241.receiver = this;
  block1241.className = 'block<genllvm30:440>';
  block1241.real = function(
var_pn
) {
  lineNumber = 437
  var call1243 = callmethod(var_toremove,"contains", [1], var_pn);
  if (Grace_isTrue(call1243)) {
  var if1242 = undefined;
  } else {
  lineNumber = 440
  var call1244 = callmethod(var_closurevars,"push", [1], var_pn);
  var if1242 = call1244;
}
  return if1242;
};
  var call1245 = callmethod(Grace_prelude,"for()do", [1, 1], var_origclosurevars, block1241);
  lineNumber = 443
  var string1246 = new GraceString("  %params = alloca %object, i32 ");
  var opresult1248 = callmethod(string1246, "++", [1], var_paramsUsed);
  lineNumber = 444
  var call1249 = callmethod(this,"out", [1], opresult1248);
  lineNumber = 446
  lineNumber = 444
  var diff1251 = callmethod(var_paramsUsed, "-", [1], new GraceNum(1));
  var opresult1253 = callmethod(new GraceNum(0), "..", [1], diff1251);
  lineNumber = 446
  var block1254 = Grace_allocObject();
  block1254.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1254.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1254.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1254.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1254.receiver = this;
  block1254.className = 'block<genllvm30:446>';
  block1254.real = function(
var_ii
) {
  lineNumber = 445
  var string1255 = new GraceString("  %params_");
  var opresult1257 = callmethod(string1255, "++", [1], var_ii);
  var string1258 = new GraceString(" = getelementptr %object* %params, i32 ");
  var opresult1260 = callmethod(opresult1257, "++", [1], string1258);
  lineNumber = 446
  var opresult1262 = callmethod(opresult1260, "++", [1], var_ii);
  lineNumber = 447
  var call1263 = callmethod(this,"out", [1], opresult1262);
  return call1263;
};
  var call1264 = callmethod(Grace_prelude,"for()do", [1, 1], opresult1253, block1254);
  lineNumber = 449
  lineNumber = 448
  var var_j = new GraceNum(0);
  lineNumber = 460
  lineNumber = 449
  lineNumber = 460
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
  block1265.className = 'block<genllvm30:460>';
  block1265.real = function(
var_cv
) {
  lineNumber = 457
  lineNumber = 459
  lineNumber = 450
  var string1267 = new GraceString("self");
  var opresult1269 = callmethod(var_cv, "==", [1], string1267);
  if (Grace_isTrue(opresult1269)) {
  lineNumber = 451
  var string1270 = new GraceString("  %varc_");
  var opresult1272 = callmethod(string1270, "++", [1], var_cv);
  var string1273 = new GraceString(" = getelementptr %object** %closure, i32 ");
  var opresult1275 = callmethod(opresult1272, "++", [1], string1273);
  var opresult1277 = callmethod(opresult1275, "++", [1], var_j);
  lineNumber = 452
  var call1278 = callmethod(this,"out", [1], opresult1277);
  var string1279 = new GraceString("  %self2 = load %object** %varc_");
  var opresult1281 = callmethod(string1279, "++", [1], var_cv);
  lineNumber = 453
  var call1282 = callmethod(this,"out", [1], opresult1281);
  var string1283 = new GraceString("  %self = load %object* %self2");
  lineNumber = 454
  var call1284 = callmethod(this,"out", [1], string1283);
  var if1266 = call1284;
  } else {
  lineNumber = 455
  var string1285 = new GraceString("  %\"varc_");
  var opresult1287 = callmethod(string1285, "++", [1], var_cv);
  var string1288 = new GraceString("\" = getelementptr %object** %closure, i32 ");
  var opresult1290 = callmethod(opresult1287, "++", [1], string1288);
  var opresult1292 = callmethod(opresult1290, "++", [1], var_j);
  lineNumber = 456
  var call1293 = callmethod(this,"out", [1], opresult1292);
  lineNumber = 457
  lineNumber = 456
  var string1294 = new GraceString("  %\"var_");
  var opresult1296 = callmethod(string1294, "++", [1], var_cv);
  var string1297 = new GraceString("\" = load %object** %\"varc_");
  var opresult1299 = callmethod(opresult1296, "++", [1], string1297);
  var opresult1301 = callmethod(opresult1299, "++", [1], var_cv);
  lineNumber = 457
  var string1302 = new GraceString("\"");
  var opresult1304 = callmethod(opresult1301, "++", [1], string1302);
  lineNumber = 458
  var call1305 = callmethod(this,"out", [1], opresult1304);
  var if1266 = call1305;
}
  lineNumber = 460
  lineNumber = 459
  var opresult1307 = callmethod(var_j, "+", [1], new GraceNum(1));
  var_j = opresult1307;
  return opresult1307;
};
  var call1308 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block1265);
  lineNumber = 462
  lineNumber = 461
  lineNumber = 462
  var block1309 = Grace_allocObject();
  block1309.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1309.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1309.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1309.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1309.receiver = this;
  block1309.className = 'block<genllvm30:462>';
  block1309.real = function(
var_l
) {
  lineNumber = 463
  var call1310 = callmethod(this,"out", [1], var_l);
  return call1310;
};
  var call1311 = callmethod(Grace_prelude,"for()do", [1, 1], var_body, block1309);
  lineNumber = 464
  var string1312 = new GraceString(";;;; ENDS");
  lineNumber = 465
  var call1313 = callmethod(this,"out", [1], string1312);
  lineNumber = 466
  lineNumber = 465
  lineNumber = 466
  var block1314 = Grace_allocObject();
  block1314.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1314.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1314.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1314.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1314.receiver = this;
  block1314.className = 'block<genllvm30:466>';
  block1314.real = function(
var_l
) {
  lineNumber = 467
  var call1315 = callmethod(this,"outprint", [1], var_l);
  return call1315;
};
  var call1316 = callmethod(Grace_prelude,"for()do", [1, 1], var_output, block1314);
  lineNumber = 469
  lineNumber = 468
  var_output = var_oldout;
  lineNumber = 470
  lineNumber = 469
  var_bblock = var_oldbblock;
  lineNumber = 471
  lineNumber = 470
  var_usedvars = var_oldusedvars;
  lineNumber = 472
  lineNumber = 471
  var_declaredvars = var_olddeclaredvars;
  lineNumber = 475
  lineNumber = 472
  lineNumber = 475
  var block1317 = Grace_allocObject();
  block1317.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1317.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1317.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1317.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1317.receiver = this;
  block1317.className = 'block<genllvm30:475>';
  block1317.real = function(
var_cv
) {
  lineNumber = 478
  lineNumber = 473
  var string1319 = new GraceString("self");
  var opresult1321 = callmethod(var_cv, "/=", [1], string1319);
  if (Grace_isTrue(opresult1321)) {
  lineNumber = 475
  lineNumber = 474
  lineNumber = 1
  lineNumber = 474
  var call1323 = callmethod(var_usedvars,"contains", [1], var_cv);
  var call1324 = callmethod(call1323,"not", [0]);
  if (Grace_isTrue(call1324)) {
  lineNumber = 475
  var call1325 = callmethod(var_usedvars,"push", [1], var_cv);
  var if1322 = call1325;
}
  var if1318 = if1322;
}
  return if1318;
};
  var call1326 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block1317);
  lineNumber = 479
  var call1327 = Grace_length(var_name);
  var opresult1329 = callmethod(call1327, "+", [1], new GraceNum(1));
  var var_len = opresult1329;
  lineNumber = 482
  lineNumber = 480
  var string1330 = new GraceString("@.str.methname");
  var opresult1332 = callmethod(string1330, "++", [1], var_myc);
  var string1333 = new GraceString(" = private unnamed_addr ");
  var opresult1335 = callmethod(opresult1332, "++", [1], string1333);
  lineNumber = 481
  var string1336 = new GraceString("constant [");
  var opresult1338 = callmethod(opresult1335, "++", [1], string1336);
  var opresult1340 = callmethod(opresult1338, "++", [1], var_len);
  var string1341 = new GraceString(" x i8] c\"");
  var opresult1343 = callmethod(opresult1340, "++", [1], string1341);
  var opresult1345 = callmethod(opresult1343, "++", [1], var_name);
  var string1346 = new GraceString("\\00\"");
  var opresult1348 = callmethod(opresult1345, "++", [1], string1346);
  var var_con = opresult1348;
  lineNumber = 482
  var call1349 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 517
  lineNumber = 519
  lineNumber = 1
  lineNumber = 483
  var call1351 = callmethod(var_closurevars,"size", [0]);
  var opresult1353 = callmethod(call1351, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1353)) {
  lineNumber = 488
  lineNumber = 484
  var string1354 = new GraceString("  call void @addmethod2(%object ");
  var opresult1356 = callmethod(string1354, "++", [1], var_selfobj);
  lineNumber = 485
  var string1357 = new GraceString(", i8* getelementptr([");
  var opresult1359 = callmethod(opresult1356, "++", [1], string1357);
  lineNumber = 486
  var opresult1361 = callmethod(opresult1359, "++", [1], var_len);
  var string1362 = new GraceString(" x i8]* @.str.methname");
  var opresult1364 = callmethod(opresult1361, "++", [1], string1362);
  var opresult1366 = callmethod(opresult1364, "++", [1], var_myc);
  var string1367 = new GraceString(", i32 0, i32 0), ");
  var opresult1369 = callmethod(opresult1366, "++", [1], string1367);
  lineNumber = 487
  var string1370 = new GraceString("%object(%object, i32, %object*, i32)* getelementptr(%object ");
  var opresult1372 = callmethod(opresult1369, "++", [1], string1370);
  lineNumber = 488
  var string1373 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult1375 = callmethod(opresult1372, "++", [1], string1373);
  var opresult1377 = callmethod(opresult1375, "++", [1], var_litname);
  var string1378 = new GraceString("))");
  var opresult1380 = callmethod(opresult1377, "++", [1], string1378);
  lineNumber = 489
  var call1381 = callmethod(this,"out", [1], opresult1380);
  var if1350 = call1381;
  } else {
  lineNumber = 490
  var string1382 = new GraceString("  call void @block_savedest(%object ");
  var opresult1384 = callmethod(string1382, "++", [1], var_selfobj);
  var string1385 = new GraceString(")");
  var opresult1387 = callmethod(opresult1384, "++", [1], string1385);
  lineNumber = 491
  var call1388 = callmethod(this,"out", [1], opresult1387);
  lineNumber = 492
  lineNumber = 491
  var string1389 = new GraceString("  %closure");
  var opresult1391 = callmethod(string1389, "++", [1], var_myc);
  var string1392 = new GraceString(" = call %object** @createclosure(i32 ");
  var opresult1394 = callmethod(opresult1391, "++", [1], string1392);
  lineNumber = 492
  lineNumber = 1
  lineNumber = 492
  var call1395 = callmethod(var_closurevars,"size", [0]);
  var opresult1397 = callmethod(opresult1394, "++", [1], call1395);
  var string1398 = new GraceString(")");
  var opresult1400 = callmethod(opresult1397, "++", [1], string1398);
  lineNumber = 493
  var call1401 = callmethod(this,"out", [1], opresult1400);
  lineNumber = 503
  lineNumber = 493
  lineNumber = 503
  var block1402 = Grace_allocObject();
  block1402.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1402.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1402.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1402.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1402.receiver = this;
  block1402.className = 'block<genllvm30:503>';
  block1402.real = function(
var_v
) {
  lineNumber = 505
  lineNumber = 494
  var string1404 = new GraceString("self");
  var opresult1406 = callmethod(var_v, "==", [1], string1404);
  if (Grace_isTrue(opresult1406)) {
  lineNumber = 496
  lineNumber = 495
  var string1407 = new GraceString("  %selfpp");
  var opresult1409 = callmethod(string1407, "++", [1], var_auto__95__count);
  var string1410 = new GraceString(" = ");
  var opresult1412 = callmethod(opresult1409, "++", [1], string1410);
  lineNumber = 496
  var string1413 = new GraceString("call %object* @alloc_var()");
  var opresult1415 = callmethod(opresult1412, "++", [1], string1413);
  lineNumber = 497
  var call1416 = callmethod(this,"out", [1], opresult1415);
  var string1417 = new GraceString("  store %object %self, %object* %selfpp");
  var opresult1419 = callmethod(string1417, "++", [1], var_auto__95__count);
  lineNumber = 498
  var call1420 = callmethod(this,"out", [1], opresult1419);
  lineNumber = 499
  lineNumber = 498
  var string1421 = new GraceString("  call void @addtoclosure(%object** %closure");
  var opresult1423 = callmethod(string1421, "++", [1], var_myc);
  var string1424 = new GraceString(", ");
  var opresult1426 = callmethod(opresult1423, "++", [1], string1424);
  lineNumber = 499
  var string1427 = new GraceString("%object* %selfpp");
  var opresult1429 = callmethod(opresult1426, "++", [1], string1427);
  var opresult1431 = callmethod(opresult1429, "++", [1], var_auto__95__count);
  var string1432 = new GraceString(")");
  var opresult1434 = callmethod(opresult1431, "++", [1], string1432);
  lineNumber = 500
  var call1435 = callmethod(this,"out", [1], opresult1434);
  lineNumber = 501
  lineNumber = 500
  var opresult1437 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1437;
  var if1403 = opresult1437;
  } else {
  lineNumber = 503
  lineNumber = 502
  var string1438 = new GraceString("  call void @addtoclosure(%object** %closure");
  var opresult1440 = callmethod(string1438, "++", [1], var_myc);
  var string1441 = new GraceString(", ");
  var opresult1443 = callmethod(opresult1440, "++", [1], string1441);
  lineNumber = 503
  var string1444 = new GraceString("%object* %\"var_");
  var opresult1446 = callmethod(opresult1443, "++", [1], string1444);
  var opresult1448 = callmethod(opresult1446, "++", [1], var_v);
  var string1449 = new GraceString("\")");
  var opresult1451 = callmethod(opresult1448, "++", [1], string1449);
  lineNumber = 504
  var call1452 = callmethod(this,"out", [1], opresult1451);
  var if1403 = call1452;
}
  return if1403;
};
  var call1453 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block1402);
  lineNumber = 507
  lineNumber = 506
  var string1454 = new GraceString("uo");
  var opresult1456 = callmethod(string1454, "++", [1], var_myc);
  var string1457 = new GraceString("");
  var opresult1459 = callmethod(opresult1456, "++", [1], string1457);
  var var_uo = opresult1459;
  lineNumber = 507
  var string1460 = new GraceString("  %");
  var opresult1462 = callmethod(string1460, "++", [1], var_uo);
  var string1463 = new GraceString(" = bitcast %object ");
  var opresult1465 = callmethod(opresult1462, "++", [1], string1463);
  var opresult1467 = callmethod(opresult1465, "++", [1], var_selfobj);
  var string1468 = new GraceString(" to %UserObject*");
  var opresult1470 = callmethod(opresult1467, "++", [1], string1468);
  lineNumber = 508
  var call1471 = callmethod(this,"out", [1], opresult1470);
  var string1472 = new GraceString("  %closurepp");
  var opresult1474 = callmethod(string1472, "++", [1], var_myc);
  var string1475 = new GraceString(" = getelementptr %UserObject* %");
  var opresult1477 = callmethod(opresult1474, "++", [1], string1475);
  var opresult1479 = callmethod(opresult1477, "++", [1], var_uo);
  var string1480 = new GraceString(", i32 0, i32 3");
  var opresult1482 = callmethod(opresult1479, "++", [1], string1480);
  lineNumber = 509
  var call1483 = callmethod(this,"out", [1], opresult1482);
  var string1484 = new GraceString("  %closurepf");
  var opresult1486 = callmethod(string1484, "++", [1], var_myc);
  var string1487 = new GraceString(" = getelementptr [0 x %object]* %closurepp");
  var opresult1489 = callmethod(opresult1486, "++", [1], string1487);
  var opresult1491 = callmethod(opresult1489, "++", [1], var_myc);
  var string1492 = new GraceString(", i32 0, i32 ");
  var opresult1494 = callmethod(opresult1491, "++", [1], string1492);
  var opresult1496 = callmethod(opresult1494, "++", [1], var_pos);
  var string1497 = new GraceString("");
  var opresult1499 = callmethod(opresult1496, "++", [1], string1497);
  lineNumber = 510
  var call1500 = callmethod(this,"out", [1], opresult1499);
  var string1501 = new GraceString("  %closurepc");
  var opresult1503 = callmethod(string1501, "++", [1], var_myc);
  var string1504 = new GraceString(" = bitcast %object* %closurepf");
  var opresult1506 = callmethod(opresult1503, "++", [1], string1504);
  var opresult1508 = callmethod(opresult1506, "++", [1], var_myc);
  var string1509 = new GraceString(" to %object***");
  var opresult1511 = callmethod(opresult1508, "++", [1], string1509);
  lineNumber = 511
  var call1512 = callmethod(this,"out", [1], opresult1511);
  var string1513 = new GraceString("  %closurec");
  var opresult1515 = callmethod(string1513, "++", [1], var_myc);
  var string1516 = new GraceString(" = bitcast %object** %closure");
  var opresult1518 = callmethod(opresult1515, "++", [1], string1516);
  var opresult1520 = callmethod(opresult1518, "++", [1], var_myc);
  var string1521 = new GraceString(" to %object");
  var opresult1523 = callmethod(opresult1520, "++", [1], string1521);
  lineNumber = 512
  var call1524 = callmethod(this,"out", [1], opresult1523);
  var string1525 = new GraceString("  store %object %closurec");
  var opresult1527 = callmethod(string1525, "++", [1], var_myc);
  var string1528 = new GraceString(", %object* %closurepf");
  var opresult1530 = callmethod(opresult1527, "++", [1], string1528);
  var opresult1532 = callmethod(opresult1530, "++", [1], var_myc);
  var string1533 = new GraceString("");
  var opresult1535 = callmethod(opresult1532, "++", [1], string1533);
  lineNumber = 513
  var call1536 = callmethod(this,"out", [1], opresult1535);
  lineNumber = 517
  lineNumber = 513
  var string1537 = new GraceString("  call void @addmethod2(%object ");
  var opresult1539 = callmethod(string1537, "++", [1], var_selfobj);
  lineNumber = 514
  var string1540 = new GraceString(", i8* getelementptr([");
  var opresult1542 = callmethod(opresult1539, "++", [1], string1540);
  lineNumber = 515
  var opresult1544 = callmethod(opresult1542, "++", [1], var_len);
  var string1545 = new GraceString(" x i8]* @.str.methname");
  var opresult1547 = callmethod(opresult1544, "++", [1], string1545);
  var opresult1549 = callmethod(opresult1547, "++", [1], var_myc);
  var string1550 = new GraceString(", i32 0, i32 0), ");
  var opresult1552 = callmethod(opresult1549, "++", [1], string1550);
  lineNumber = 516
  var string1553 = new GraceString("%object(%object, i32, %object*, i32)* getelementptr(%object ");
  var opresult1555 = callmethod(opresult1552, "++", [1], string1553);
  lineNumber = 517
  var string1556 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult1558 = callmethod(opresult1555, "++", [1], string1556);
  var opresult1560 = callmethod(opresult1558, "++", [1], var_litname);
  var string1561 = new GraceString("))");
  var opresult1563 = callmethod(opresult1560, "++", [1], string1561);
  lineNumber = 518
  var call1564 = callmethod(this,"out", [1], opresult1563);
  var if1350 = call1564;
}
  lineNumber = 520
  lineNumber = 519
  var_inBlock = var_origInBlock;
  lineNumber = 521
  lineNumber = 520
  var_paramsUsed = var_origParamsUsed;
  return var_origParamsUsed
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilemethod"] = func962;
  lineNumber = 555
var func1565 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 524
  lineNumber = 523
  var var_myc = var_auto__95__count;
  lineNumber = 525
  lineNumber = 524
  var opresult1567 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1567;
  lineNumber = 525
  var string1568 = new GraceString("  br label %BeginWhile");
  var opresult1570 = callmethod(string1568, "++", [1], var_myc);
  lineNumber = 526
  var call1571 = callmethod(this,"out", [1], opresult1570);
  var string1572 = new GraceString("BeginWhile");
  var opresult1574 = callmethod(string1572, "++", [1], var_myc);
  lineNumber = 527
  var call1575 = callmethod(this,"beginblock", [1], opresult1574);
  lineNumber = 1
  lineNumber = 527
  var call1576 = callmethod(var_o,"value", [0]);
  lineNumber = 528
  var call1577 = callmethod(this,"compilenode", [1], call1576);
  var var_cond = call1577;
  lineNumber = 529
  lineNumber = 528
  var string1578 = new GraceString("%cond");
  var opresult1580 = callmethod(string1578, "++", [1], var_myc);
  var var_creg = opresult1580;
  lineNumber = 530
  lineNumber = 529
  var string1581 = new GraceString("  ");
  var opresult1583 = callmethod(string1581, "++", [1], var_creg);
  var string1584 = new GraceString("_valp = call i1 @istrue(%object ");
  var opresult1586 = callmethod(opresult1583, "++", [1], string1584);
  lineNumber = 530
  var opresult1588 = callmethod(opresult1586, "++", [1], var_cond);
  var string1589 = new GraceString(")");
  var opresult1591 = callmethod(opresult1588, "++", [1], string1589);
  lineNumber = 531
  var call1592 = callmethod(this,"out", [1], opresult1591);
  var string1593 = new GraceString("  ");
  var opresult1595 = callmethod(string1593, "++", [1], var_creg);
  var string1596 = new GraceString(" = icmp eq i1 0, ");
  var opresult1598 = callmethod(opresult1595, "++", [1], string1596);
  var opresult1600 = callmethod(opresult1598, "++", [1], var_creg);
  var string1601 = new GraceString("_valp");
  var opresult1603 = callmethod(opresult1600, "++", [1], string1601);
  lineNumber = 532
  var call1604 = callmethod(this,"out", [1], opresult1603);
  lineNumber = 533
  lineNumber = 532
  var string1605 = new GraceString("br i1 ");
  var opresult1607 = callmethod(string1605, "++", [1], var_creg);
  var string1608 = new GraceString(", label %EndWhile");
  var opresult1610 = callmethod(opresult1607, "++", [1], string1608);
  var opresult1612 = callmethod(opresult1610, "++", [1], var_myc);
  lineNumber = 533
  var string1613 = new GraceString(", label %WhileBody");
  var opresult1615 = callmethod(opresult1612, "++", [1], string1613);
  var opresult1617 = callmethod(opresult1615, "++", [1], var_myc);
  lineNumber = 534
  var call1618 = callmethod(this,"out", [1], opresult1617);
  var string1619 = new GraceString("WhileBody");
  var opresult1621 = callmethod(string1619, "++", [1], var_myc);
  lineNumber = 535
  var call1622 = callmethod(this,"beginblock", [1], opresult1621);
  lineNumber = 536
  lineNumber = 535
  var string1623 = new GraceString("null");
  var var_tret = string1623;
  lineNumber = 537
  lineNumber = 536
  var string1624 = new GraceString("ERROR");
  var var_tblock = string1624;
  lineNumber = 543
  lineNumber = 537
  lineNumber = 1
  lineNumber = 537
  var call1625 = callmethod(var_o,"body", [0]);
  lineNumber = 543
  var block1626 = Grace_allocObject();
  block1626.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1626.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1626.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1626.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1626.receiver = this;
  block1626.className = 'block<genllvm30:543>';
  block1626.real = function(
var_l
) {
  lineNumber = 545
  lineNumber = 1
  lineNumber = 538
  var call1628 = callmethod(var_l,"kind", [0]);
  var string1629 = new GraceString("vardec");
  var opresult1631 = callmethod(call1628, "==", [1], string1629);
  lineNumber = 545
  lineNumber = 1
  lineNumber = 538
  var call1632 = callmethod(var_l,"kind", [0]);
  var string1633 = new GraceString("defdec");
  var opresult1635 = callmethod(call1632, "==", [1], string1633);
  var opresult1637 = callmethod(opresult1631, "|", [1], opresult1635);
  lineNumber = 545
  lineNumber = 1
  lineNumber = 539
  var call1638 = callmethod(var_l,"kind", [0]);
  var string1639 = new GraceString("class");
  var opresult1641 = callmethod(call1638, "==", [1], string1639);
  var opresult1643 = callmethod(opresult1637, "|", [1], opresult1641);
  if (Grace_isTrue(opresult1643)) {
  lineNumber = 540
  lineNumber = 1
  lineNumber = 540
  lineNumber = 1
  lineNumber = 540
  lineNumber = 1
  lineNumber = 540
  var call1644 = callmethod(var_l,"name", [0]);
  var call1645 = callmethod(call1644,"value", [0]);
  var call1646 = callmethod(call1645,"_escape", [0]);
  var var_tnm = call1646;
  lineNumber = 541
  var call1647 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 542
  var string1648 = new GraceString("  %\"var_");
  var opresult1650 = callmethod(string1648, "++", [1], var_tnm);
  var string1651 = new GraceString("\" = call %object* @alloc_var()");
  var opresult1653 = callmethod(opresult1650, "++", [1], string1651);
  lineNumber = 543
  var call1654 = callmethod(this,"out", [1], opresult1653);
  var string1655 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult1657 = callmethod(string1655, "++", [1], var_tnm);
  var string1658 = new GraceString("\"");
  var opresult1660 = callmethod(opresult1657, "++", [1], string1658);
  lineNumber = 544
  var call1661 = callmethod(this,"out", [1], opresult1660);
  var if1627 = call1661;
}
  return if1627;
};
  var call1662 = callmethod(Grace_prelude,"for()do", [1, 1], call1625, block1626);
  lineNumber = 547
  lineNumber = 546
  lineNumber = 1
  lineNumber = 546
  var call1663 = callmethod(var_o,"body", [0]);
  lineNumber = 547
  var block1664 = Grace_allocObject();
  block1664.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1664.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1664.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1664.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1664.receiver = this;
  block1664.className = 'block<genllvm30:547>';
  block1664.real = function(
var_l
) {
  lineNumber = 548
  var call1665 = callmethod(this,"compilenode", [1], var_l);
  var_tret = call1665;
  return call1665;
};
  var call1666 = callmethod(Grace_prelude,"for()do", [1, 1], call1663, block1664);
  lineNumber = 550
  lineNumber = 549
  var_tblock = var_bblock;
  lineNumber = 550
  var string1667 = new GraceString("  br label %BeginWhile");
  var opresult1669 = callmethod(string1667, "++", [1], var_myc);
  lineNumber = 551
  var call1670 = callmethod(this,"out", [1], opresult1669);
  var string1671 = new GraceString("EndWhile");
  var opresult1673 = callmethod(string1671, "++", [1], var_myc);
  lineNumber = 554
  var call1674 = callmethod(this,"beginblock", [1], opresult1673);
  lineNumber = 555
  lineNumber = 1
  lineNumber = 554
  var call1675 = callmethod(var_o,"register:=", [1], var_cond);
  return call1675
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilewhile"] = func1565;
  lineNumber = 620
var func1676 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 558
  lineNumber = 557
  var var_myc = var_auto__95__count;
  lineNumber = 559
  lineNumber = 558
  var opresult1678 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1678;
  lineNumber = 559
  var string1679 = new GraceString("  br label %BeginIf");
  var opresult1681 = callmethod(string1679, "++", [1], var_myc);
  lineNumber = 560
  var call1682 = callmethod(this,"out", [1], opresult1681);
  var string1683 = new GraceString("BeginIf");
  var opresult1685 = callmethod(string1683, "++", [1], var_myc);
  lineNumber = 561
  var call1686 = callmethod(this,"beginblock", [1], opresult1685);
  lineNumber = 1
  lineNumber = 561
  var call1687 = callmethod(var_o,"value", [0]);
  lineNumber = 562
  var call1688 = callmethod(this,"compilenode", [1], call1687);
  var var_cond = call1688;
  lineNumber = 563
  lineNumber = 562
  var string1689 = new GraceString("%cond");
  var opresult1691 = callmethod(string1689, "++", [1], var_myc);
  var var_creg = opresult1691;
  lineNumber = 564
  lineNumber = 563
  var string1692 = new GraceString("  ");
  var opresult1694 = callmethod(string1692, "++", [1], var_creg);
  var string1695 = new GraceString("_valp = call i1 @istrue(%object ");
  var opresult1697 = callmethod(opresult1694, "++", [1], string1695);
  lineNumber = 564
  var opresult1699 = callmethod(opresult1697, "++", [1], var_cond);
  var string1700 = new GraceString(")");
  var opresult1702 = callmethod(opresult1699, "++", [1], string1700);
  lineNumber = 565
  var call1703 = callmethod(this,"out", [1], opresult1702);
  var string1704 = new GraceString("  ");
  var opresult1706 = callmethod(string1704, "++", [1], var_creg);
  var string1707 = new GraceString(" = icmp eq i1 0, ");
  var opresult1709 = callmethod(opresult1706, "++", [1], string1707);
  var opresult1711 = callmethod(opresult1709, "++", [1], var_creg);
  var string1712 = new GraceString("_valp");
  var opresult1714 = callmethod(opresult1711, "++", [1], string1712);
  lineNumber = 566
  var call1715 = callmethod(this,"out", [1], opresult1714);
  lineNumber = 567
  lineNumber = 566
  var var_startblock = var_bblock;
  lineNumber = 573
  lineNumber = 575
  lineNumber = 1
  lineNumber = 575
  lineNumber = 1
  lineNumber = 567
  var call1717 = callmethod(var_o,"elseblock", [0]);
  var call1718 = callmethod(call1717,"size", [0]);
  var opresult1720 = callmethod(call1718, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1720)) {
  lineNumber = 569
  lineNumber = 568
  var string1721 = new GraceString("br i1 ");
  var opresult1723 = callmethod(string1721, "++", [1], var_creg);
  var string1724 = new GraceString(", label %FalseBranch");
  var opresult1726 = callmethod(opresult1723, "++", [1], string1724);
  var opresult1728 = callmethod(opresult1726, "++", [1], var_myc);
  lineNumber = 569
  var string1729 = new GraceString(", label %TrueBranch");
  var opresult1731 = callmethod(opresult1728, "++", [1], string1729);
  var opresult1733 = callmethod(opresult1731, "++", [1], var_myc);
  lineNumber = 570
  var call1734 = callmethod(this,"out", [1], opresult1733);
  var if1716 = call1734;
  } else {
  lineNumber = 571
  var string1735 = new GraceString("  %undefined");
  var opresult1737 = callmethod(string1735, "++", [1], var_myc);
  var string1738 = new GraceString(" = load %object* @undefined");
  var opresult1740 = callmethod(opresult1737, "++", [1], string1738);
  lineNumber = 572
  var call1741 = callmethod(this,"out", [1], opresult1740);
  lineNumber = 573
  lineNumber = 572
  var string1742 = new GraceString("br i1 ");
  var opresult1744 = callmethod(string1742, "++", [1], var_creg);
  var string1745 = new GraceString(", label %EndIf");
  var opresult1747 = callmethod(opresult1744, "++", [1], string1745);
  var opresult1749 = callmethod(opresult1747, "++", [1], var_myc);
  lineNumber = 573
  var string1750 = new GraceString(", label %TrueBranch");
  var opresult1752 = callmethod(opresult1749, "++", [1], string1750);
  var opresult1754 = callmethod(opresult1752, "++", [1], var_myc);
  lineNumber = 574
  var call1755 = callmethod(this,"out", [1], opresult1754);
  var if1716 = call1755;
}
  lineNumber = 575
  var string1756 = new GraceString("TrueBranch");
  var opresult1758 = callmethod(string1756, "++", [1], var_myc);
  lineNumber = 576
  var call1759 = callmethod(this,"beginblock", [1], opresult1758);
  lineNumber = 577
  lineNumber = 576
  var string1760 = new GraceString("%none");
  var var_tret = string1760;
  lineNumber = 578
  lineNumber = 577
  var string1761 = new GraceString("%none");
  var var_fret = string1761;
  lineNumber = 579
  lineNumber = 578
  var string1762 = new GraceString("ERROR");
  var var_tblock = string1762;
  lineNumber = 580
  lineNumber = 579
  var string1763 = new GraceString("ERROR");
  var var_fblock = string1763;
  lineNumber = 586
  lineNumber = 580
  lineNumber = 1
  lineNumber = 580
  var call1764 = callmethod(var_o,"thenblock", [0]);
  lineNumber = 586
  var block1765 = Grace_allocObject();
  block1765.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1765.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1765.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1765.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1765.receiver = this;
  block1765.className = 'block<genllvm30:586>';
  block1765.real = function(
var_l
) {
  lineNumber = 588
  lineNumber = 1
  lineNumber = 581
  var call1767 = callmethod(var_l,"kind", [0]);
  var string1768 = new GraceString("vardec");
  var opresult1770 = callmethod(call1767, "==", [1], string1768);
  lineNumber = 588
  lineNumber = 1
  lineNumber = 581
  var call1771 = callmethod(var_l,"kind", [0]);
  var string1772 = new GraceString("defdec");
  var opresult1774 = callmethod(call1771, "==", [1], string1772);
  var opresult1776 = callmethod(opresult1770, "|", [1], opresult1774);
  lineNumber = 588
  lineNumber = 1
  lineNumber = 582
  var call1777 = callmethod(var_l,"kind", [0]);
  var string1778 = new GraceString("class");
  var opresult1780 = callmethod(call1777, "==", [1], string1778);
  var opresult1782 = callmethod(opresult1776, "|", [1], opresult1780);
  if (Grace_isTrue(opresult1782)) {
  lineNumber = 583
  lineNumber = 1
  lineNumber = 583
  lineNumber = 1
  lineNumber = 583
  lineNumber = 1
  lineNumber = 583
  var call1783 = callmethod(var_l,"name", [0]);
  var call1784 = callmethod(call1783,"value", [0]);
  var call1785 = callmethod(call1784,"_escape", [0]);
  var var_tnm = call1785;
  lineNumber = 584
  var call1786 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 585
  var string1787 = new GraceString("  %\"var_");
  var opresult1789 = callmethod(string1787, "++", [1], var_tnm);
  var string1790 = new GraceString("\" = call %object* @alloc_var()");
  var opresult1792 = callmethod(opresult1789, "++", [1], string1790);
  lineNumber = 586
  var call1793 = callmethod(this,"out", [1], opresult1792);
  var string1794 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult1796 = callmethod(string1794, "++", [1], var_tnm);
  var string1797 = new GraceString("\"");
  var opresult1799 = callmethod(opresult1796, "++", [1], string1797);
  lineNumber = 587
  var call1800 = callmethod(this,"out", [1], opresult1799);
  var if1766 = call1800;
}
  return if1766;
};
  var call1801 = callmethod(Grace_prelude,"for()do", [1, 1], call1764, block1765);
  lineNumber = 590
  lineNumber = 589
  lineNumber = 1
  lineNumber = 589
  var call1802 = callmethod(var_o,"thenblock", [0]);
  lineNumber = 590
  var block1803 = Grace_allocObject();
  block1803.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1803.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1803.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1803.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1803.receiver = this;
  block1803.className = 'block<genllvm30:590>';
  block1803.real = function(
var_l
) {
  lineNumber = 591
  var call1804 = callmethod(this,"compilenode", [1], var_l);
  var_tret = call1804;
  return call1804;
};
  var call1805 = callmethod(Grace_prelude,"for()do", [1, 1], call1802, block1803);
  lineNumber = 593
  lineNumber = 592
  var_tblock = var_bblock;
  lineNumber = 593
  var string1806 = new GraceString("  br label %EndIf");
  var opresult1808 = callmethod(string1806, "++", [1], var_myc);
  lineNumber = 594
  var call1809 = callmethod(this,"out", [1], opresult1808);
  lineNumber = 610
  lineNumber = 611
  lineNumber = 1
  lineNumber = 611
  lineNumber = 1
  lineNumber = 594
  var call1811 = callmethod(var_o,"elseblock", [0]);
  var call1812 = callmethod(call1811,"size", [0]);
  var opresult1814 = callmethod(call1812, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1814)) {
  lineNumber = 595
  var string1815 = new GraceString("FalseBranch");
  var opresult1817 = callmethod(string1815, "++", [1], var_myc);
  lineNumber = 596
  var call1818 = callmethod(this,"beginblock", [1], opresult1817);
  lineNumber = 602
  lineNumber = 596
  lineNumber = 1
  lineNumber = 596
  var call1819 = callmethod(var_o,"elseblock", [0]);
  lineNumber = 602
  var block1820 = Grace_allocObject();
  block1820.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1820.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1820.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1820.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1820.receiver = this;
  block1820.className = 'block<genllvm30:602>';
  block1820.real = function(
var_l
) {
  lineNumber = 604
  lineNumber = 1
  lineNumber = 597
  var call1822 = callmethod(var_l,"kind", [0]);
  var string1823 = new GraceString("vardec");
  var opresult1825 = callmethod(call1822, "==", [1], string1823);
  lineNumber = 604
  lineNumber = 1
  lineNumber = 597
  var call1826 = callmethod(var_l,"kind", [0]);
  var string1827 = new GraceString("defdec");
  var opresult1829 = callmethod(call1826, "==", [1], string1827);
  var opresult1831 = callmethod(opresult1825, "|", [1], opresult1829);
  lineNumber = 604
  lineNumber = 1
  lineNumber = 598
  var call1832 = callmethod(var_l,"kind", [0]);
  var string1833 = new GraceString("class");
  var opresult1835 = callmethod(call1832, "==", [1], string1833);
  var opresult1837 = callmethod(opresult1831, "|", [1], opresult1835);
  if (Grace_isTrue(opresult1837)) {
  lineNumber = 599
  lineNumber = 1
  lineNumber = 599
  lineNumber = 1
  lineNumber = 599
  lineNumber = 1
  lineNumber = 599
  var call1838 = callmethod(var_l,"name", [0]);
  var call1839 = callmethod(call1838,"value", [0]);
  var call1840 = callmethod(call1839,"_escape", [0]);
  var var_tnm = call1840;
  lineNumber = 600
  var call1841 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 601
  var string1842 = new GraceString("  %\"var_");
  var opresult1844 = callmethod(string1842, "++", [1], var_tnm);
  var string1845 = new GraceString("\" = call %object* @alloc_var()");
  var opresult1847 = callmethod(opresult1844, "++", [1], string1845);
  lineNumber = 602
  var call1848 = callmethod(this,"out", [1], opresult1847);
  var string1849 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult1851 = callmethod(string1849, "++", [1], var_tnm);
  var string1852 = new GraceString("\"");
  var opresult1854 = callmethod(opresult1851, "++", [1], string1852);
  lineNumber = 603
  var call1855 = callmethod(this,"out", [1], opresult1854);
  var if1821 = call1855;
}
  return if1821;
};
  var call1856 = callmethod(Grace_prelude,"for()do", [1, 1], call1819, block1820);
  lineNumber = 606
  lineNumber = 605
  lineNumber = 1
  lineNumber = 605
  var call1857 = callmethod(var_o,"elseblock", [0]);
  lineNumber = 606
  var block1858 = Grace_allocObject();
  block1858.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1858.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1858.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1858.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1858.receiver = this;
  block1858.className = 'block<genllvm30:606>';
  block1858.real = function(
var_l
) {
  lineNumber = 607
  var call1859 = callmethod(this,"compilenode", [1], var_l);
  var_fret = call1859;
  return call1859;
};
  var call1860 = callmethod(Grace_prelude,"for()do", [1, 1], call1857, block1858);
  lineNumber = 608
  var string1861 = new GraceString("  br label %EndIf");
  var opresult1863 = callmethod(string1861, "++", [1], var_myc);
  lineNumber = 609
  var call1864 = callmethod(this,"out", [1], opresult1863);
  lineNumber = 610
  lineNumber = 609
  var_fblock = var_bblock;
  var if1810 = var_bblock;
}
  lineNumber = 611
  var string1865 = new GraceString("EndIf");
  var opresult1867 = callmethod(string1865, "++", [1], var_myc);
  lineNumber = 612
  var call1868 = callmethod(this,"beginblock", [1], opresult1867);
  lineNumber = 617
  lineNumber = 619
  lineNumber = 1
  lineNumber = 619
  lineNumber = 1
  lineNumber = 612
  var call1870 = callmethod(var_o,"elseblock", [0]);
  var call1871 = callmethod(call1870,"size", [0]);
  var opresult1873 = callmethod(call1871, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1873)) {
  lineNumber = 614
  lineNumber = 613
  var string1874 = new GraceString("  %if");
  var opresult1876 = callmethod(string1874, "++", [1], var_myc);
  var string1877 = new GraceString(" = phi %object [ ");
  var opresult1879 = callmethod(opresult1876, "++", [1], string1877);
  var opresult1881 = callmethod(opresult1879, "++", [1], var_tret);
  var string1882 = new GraceString(", ");
  var opresult1884 = callmethod(opresult1881, "++", [1], string1882);
  lineNumber = 614
  var opresult1886 = callmethod(opresult1884, "++", [1], var_tblock);
  var string1887 = new GraceString("], [");
  var opresult1889 = callmethod(opresult1886, "++", [1], string1887);
  var opresult1891 = callmethod(opresult1889, "++", [1], var_fret);
  var string1892 = new GraceString(", ");
  var opresult1894 = callmethod(opresult1891, "++", [1], string1892);
  var opresult1896 = callmethod(opresult1894, "++", [1], var_fblock);
  var string1897 = new GraceString("]");
  var opresult1899 = callmethod(opresult1896, "++", [1], string1897);
  lineNumber = 615
  var call1900 = callmethod(this,"out", [1], opresult1899);
  var if1869 = call1900;
  } else {
  lineNumber = 617
  lineNumber = 616
  var string1901 = new GraceString("  %if");
  var opresult1903 = callmethod(string1901, "++", [1], var_myc);
  var string1904 = new GraceString(" = phi %object [ ");
  var opresult1906 = callmethod(opresult1903, "++", [1], string1904);
  var opresult1908 = callmethod(opresult1906, "++", [1], var_tret);
  var string1909 = new GraceString(", ");
  var opresult1911 = callmethod(opresult1908, "++", [1], string1909);
  lineNumber = 617
  var opresult1913 = callmethod(opresult1911, "++", [1], var_tblock);
  var string1914 = new GraceString("], [%undefined");
  var opresult1916 = callmethod(opresult1913, "++", [1], string1914);
  var opresult1918 = callmethod(opresult1916, "++", [1], var_myc);
  var string1919 = new GraceString(", ");
  var opresult1921 = callmethod(opresult1918, "++", [1], string1919);
  var opresult1923 = callmethod(opresult1921, "++", [1], var_startblock);
  var string1924 = new GraceString("]");
  var opresult1926 = callmethod(opresult1923, "++", [1], string1924);
  lineNumber = 618
  var call1927 = callmethod(this,"out", [1], opresult1926);
  var if1869 = call1927;
}
  lineNumber = 620
  lineNumber = 1
  lineNumber = 620
  lineNumber = 619
  var string1928 = new GraceString("%if");
  var opresult1930 = callmethod(string1928, "++", [1], var_myc);
  var call1931 = callmethod(var_o,"register:=", [1], opresult1930);
  return call1931
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileif"] = func1676;
  lineNumber = 644
var func1932 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 623
  lineNumber = 1
  lineNumber = 622
  var call1933 = callmethod(var_o,"value", [0]);
  var var_name = call1933;
  lineNumber = 644
  lineNumber = 645
  lineNumber = 623
  var string1935 = new GraceString("self");
  var opresult1937 = callmethod(var_name, "==", [1], string1935);
  if (Grace_isTrue(opresult1937)) {
  lineNumber = 625
  lineNumber = 1
  lineNumber = 624
  var string1938 = new GraceString("%self");
  var call1939 = callmethod(var_o,"register:=", [1], string1938);
  var if1934 = call1939;
  } else {
  lineNumber = 644
  lineNumber = 632
  lineNumber = 625
  var string1941 = new GraceString("__compilerRevision");
  var opresult1943 = callmethod(var_name, "==", [1], string1941);
  if (Grace_isTrue(opresult1943)) {
  lineNumber = 627
  lineNumber = 626
  var string1944 = new GraceString("%str___compilerRevision");
  var opresult1946 = callmethod(string1944, "++", [1], var_auto__95__count);
  lineNumber = 627
  var string1947 = new GraceString(" = bitcast [41 x i8]* @.str._compilerRevision to i8*");
  var opresult1949 = callmethod(opresult1946, "++", [1], string1947);
  lineNumber = 628
  var call1950 = callmethod(this,"out", [1], opresult1949);
  lineNumber = 630
  lineNumber = 628
  var string1951 = new GraceString("%\"var_val___compilerRevision");
  var opresult1953 = callmethod(string1951, "++", [1], var_auto__95__count);
  lineNumber = 629
  var string1954 = new GraceString("\" = call %object @alloc_String(i8* %str___compilerRevision");
  var opresult1956 = callmethod(opresult1953, "++", [1], string1954);
  lineNumber = 630
  var opresult1958 = callmethod(opresult1956, "++", [1], var_auto__95__count);
  var string1959 = new GraceString(")");
  var opresult1961 = callmethod(opresult1958, "++", [1], string1959);
  lineNumber = 631
  var call1962 = callmethod(this,"out", [1], opresult1961);
  lineNumber = 632
  lineNumber = 1
  lineNumber = 632
  lineNumber = 631
  var string1963 = new GraceString("%\"var_val___compilerRevision");
  var opresult1965 = callmethod(string1963, "++", [1], var_auto__95__count);
  var string1966 = new GraceString("\"");
  var opresult1968 = callmethod(opresult1965, "++", [1], string1966);
  var call1969 = callmethod(var_o,"register:=", [1], opresult1968);
  var if1940 = call1969;
  } else {
  lineNumber = 633
  lineNumber = 1
  lineNumber = 633
  var call1970 = callmethod(var_name,"_escape", [0]);
  var_name = call1970;
  lineNumber = 640
  lineNumber = 634
  var call1972 = callmethod(var_modules,"contains", [1], var_name);
  if (Grace_isTrue(call1972)) {
  lineNumber = 636
  lineNumber = 635
  var string1973 = new GraceString("  %\"var_val_");
  var opresult1975 = callmethod(string1973, "++", [1], var_name);
  var opresult1977 = callmethod(opresult1975, "++", [1], var_auto__95__count);
  lineNumber = 636
  var string1978 = new GraceString("\" = load %object* @.module.");
  var opresult1980 = callmethod(opresult1977, "++", [1], string1978);
  var opresult1982 = callmethod(opresult1980, "++", [1], var_name);
  lineNumber = 637
  var call1983 = callmethod(this,"out", [1], opresult1982);
  var if1971 = call1983;
  } else {
  lineNumber = 638
  var call1984 = callmethod(var_usedvars,"push", [1], var_name);
  lineNumber = 640
  lineNumber = 639
  var string1985 = new GraceString("  %\"var_val_");
  var opresult1987 = callmethod(string1985, "++", [1], var_name);
  var opresult1989 = callmethod(opresult1987, "++", [1], var_auto__95__count);
  var string1990 = new GraceString("\" = load %object* ");
  var opresult1992 = callmethod(opresult1989, "++", [1], string1990);
  lineNumber = 640
  var string1993 = new GraceString("%\"var_");
  var opresult1995 = callmethod(opresult1992, "++", [1], string1993);
  var opresult1997 = callmethod(opresult1995, "++", [1], var_name);
  var string1998 = new GraceString("\"");
  var opresult2000 = callmethod(opresult1997, "++", [1], string1998);
  lineNumber = 641
  var call2001 = callmethod(this,"out", [1], opresult2000);
  var if1971 = call2001;
}
  lineNumber = 643
  lineNumber = 1
  lineNumber = 643
  lineNumber = 642
  var string2002 = new GraceString("%\"var_val_");
  var opresult2004 = callmethod(string2002, "++", [1], var_name);
  var opresult2006 = callmethod(opresult2004, "++", [1], var_auto__95__count);
  var string2007 = new GraceString("\"");
  var opresult2009 = callmethod(opresult2006, "++", [1], string2007);
  var call2010 = callmethod(var_o,"register:=", [1], opresult2009);
  lineNumber = 644
  lineNumber = 643
  var opresult2012 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2012;
  var if1940 = opresult2012;
}
  var if1934 = if1940;
}
  return if1934
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileidentifier"] = func1932;
  lineNumber = 681
var func2013 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 648
  lineNumber = 1
  lineNumber = 647
  var call2014 = callmethod(var_o,"dest", [0]);
  var var_dest = call2014;
  lineNumber = 649
  lineNumber = 648
  var string2015 = new GraceString("");
  var var_val = string2015;
  lineNumber = 650
  lineNumber = 649
  var string2016 = new GraceString("");
  var var_c = string2016;
  lineNumber = 651
  lineNumber = 650
  var string2017 = new GraceString("");
  var var_r = string2017;
  lineNumber = 679
  lineNumber = 680
  lineNumber = 1
  lineNumber = 651
  var call2019 = callmethod(var_dest,"kind", [0]);
  var string2020 = new GraceString("identifier");
  var opresult2022 = callmethod(call2019, "==", [1], string2020);
  if (Grace_isTrue(opresult2022)) {
  lineNumber = 653
  lineNumber = 1
  lineNumber = 652
  var call2023 = callmethod(var_o,"value", [0]);
  var_val = call2023;
  lineNumber = 653
  lineNumber = 654
  var call2024 = callmethod(this,"compilenode", [1], var_val);
  var_val = call2024;
  lineNumber = 1
  lineNumber = 654
  lineNumber = 1
  lineNumber = 654
  var call2025 = callmethod(var_dest,"value", [0]);
  var call2026 = callmethod(call2025,"_escape", [0]);
  var var_nm = call2026;
  lineNumber = 655
  var call2027 = callmethod(var_usedvars,"push", [1], var_nm);
  lineNumber = 656
  var string2028 = new GraceString("  store %object ");
  var opresult2030 = callmethod(string2028, "++", [1], var_val);
  var string2031 = new GraceString(", %object* %\"var_");
  var opresult2033 = callmethod(opresult2030, "++", [1], string2031);
  var opresult2035 = callmethod(opresult2033, "++", [1], var_nm);
  var string2036 = new GraceString("\"");
  var opresult2038 = callmethod(opresult2035, "++", [1], string2036);
  lineNumber = 657
  var call2039 = callmethod(this,"out", [1], opresult2038);
  var string2040 = new GraceString("  %icmp");
  var opresult2042 = callmethod(string2040, "++", [1], var_auto__95__count);
  var string2043 = new GraceString(" = icmp eq %object ");
  var opresult2045 = callmethod(opresult2042, "++", [1], string2043);
  var opresult2047 = callmethod(opresult2045, "++", [1], var_val);
  var string2048 = new GraceString(", %undefined");
  var opresult2050 = callmethod(opresult2047, "++", [1], string2048);
  lineNumber = 658
  var call2051 = callmethod(this,"out", [1], opresult2050);
  lineNumber = 659
  lineNumber = 658
  var string2052 = new GraceString("  br i1 %icmp");
  var opresult2054 = callmethod(string2052, "++", [1], var_auto__95__count);
  var string2055 = new GraceString(", label %isundef");
  var opresult2057 = callmethod(opresult2054, "++", [1], string2055);
  var opresult2059 = callmethod(opresult2057, "++", [1], var_auto__95__count);
  var string2060 = new GraceString(", ");
  var opresult2062 = callmethod(opresult2059, "++", [1], string2060);
  lineNumber = 659
  var string2063 = new GraceString("label %isdef");
  var opresult2065 = callmethod(string2063, "++", [1], var_auto__95__count);
  var string2066 = new GraceString("");
  var opresult2068 = callmethod(opresult2065, "++", [1], string2066);
  var opresult2070 = callmethod(opresult2062, "++", [1], opresult2068);
  lineNumber = 660
  var call2071 = callmethod(this,"out", [1], opresult2070);
  var string2072 = new GraceString("isundef");
  var opresult2074 = callmethod(string2072, "++", [1], var_auto__95__count);
  var string2075 = new GraceString("");
  var opresult2077 = callmethod(opresult2074, "++", [1], string2075);
  lineNumber = 661
  var call2078 = callmethod(this,"beginblock", [1], opresult2077);
  lineNumber = 663
  lineNumber = 661
  var string2079 = new GraceString("  call %object @callmethod(%object %none");
  lineNumber = 662
  var string2080 = new GraceString(", i8* getelementptr([11 x i8]* @.str._assignment");
  var opresult2082 = callmethod(string2079, "++", [1], string2080);
  lineNumber = 663
  var string2083 = new GraceString(",i32 0,i32 0), i32 1, %object* %\"var_");
  var opresult2085 = callmethod(string2083, "++", [1], var_nm);
  var string2086 = new GraceString("\")");
  var opresult2088 = callmethod(opresult2085, "++", [1], string2086);
  var opresult2090 = callmethod(opresult2082, "++", [1], opresult2088);
  lineNumber = 664
  var call2091 = callmethod(this,"out", [1], opresult2090);
  var string2092 = new GraceString("  br label %isdef");
  var opresult2094 = callmethod(string2092, "++", [1], var_auto__95__count);
  var string2095 = new GraceString("");
  var opresult2097 = callmethod(opresult2094, "++", [1], string2095);
  lineNumber = 665
  var call2098 = callmethod(this,"out", [1], opresult2097);
  var string2099 = new GraceString("isdef");
  var opresult2101 = callmethod(string2099, "++", [1], var_auto__95__count);
  var string2102 = new GraceString("");
  var opresult2104 = callmethod(opresult2101, "++", [1], string2102);
  lineNumber = 666
  var call2105 = callmethod(this,"beginblock", [1], opresult2104);
  lineNumber = 667
  lineNumber = 666
  var opresult2107 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2107;
  lineNumber = 668
  lineNumber = 1
  lineNumber = 667
  var call2108 = callmethod(var_o,"register:=", [1], var_val);
  var if2018 = call2108;
  } else {
  lineNumber = 679
  lineNumber = 674
  lineNumber = 1
  lineNumber = 668
  var call2110 = callmethod(var_dest,"kind", [0]);
  var string2111 = new GraceString("member");
  var opresult2113 = callmethod(call2110, "==", [1], string2111);
  if (Grace_isTrue(opresult2113)) {
  lineNumber = 669
  var string2114 = new GraceString("; WARNING: non-local assigns not yet fully supported");
  lineNumber = 670
  var call2115 = callmethod(this,"out", [1], string2114);
  lineNumber = 671
  lineNumber = 1
  lineNumber = 671
  lineNumber = 1
  lineNumber = 670
  var call2116 = callmethod(var_dest,"value", [0]);
  var string2117 = new GraceString(":=");
  var opresult2119 = callmethod(call2116, "++", [1], string2117);
  var call2120 = callmethod(var_dest,"value:=", [1], opresult2119);
  lineNumber = 671
  lineNumber = 1
  lineNumber = 671
  var call2122 = callmethod(var_o,"value", [0]);
  var array2121 = new GraceList([
call2122,
]);

  var call2123 = callmethod(var_ast,"astcall", [2], var_dest, array2121);
  var_c = call2123;
  lineNumber = 672
  lineNumber = 673
  var call2124 = callmethod(this,"compilenode", [1], var_c);
  var_r = call2124;
  lineNumber = 674
  lineNumber = 1
  lineNumber = 673
  var call2125 = callmethod(var_o,"register:=", [1], var_r);
  var if2109 = call2125;
  } else {
  lineNumber = 679
  lineNumber = 680
  lineNumber = 1
  lineNumber = 674
  var call2127 = callmethod(var_dest,"kind", [0]);
  var string2128 = new GraceString("index");
  var opresult2130 = callmethod(call2127, "==", [1], string2128);
  if (Grace_isTrue(opresult2130)) {
  lineNumber = 675
  var string2131 = new GraceString("[]:=");
  lineNumber = 1
  lineNumber = 675
  var call2132 = callmethod(var_dest,"value", [0]);
  var call2133 = callmethod(var_ast,"astmember", [2], string2131, call2132);
  var var_imem = call2133;
  lineNumber = 676
  lineNumber = 1
  lineNumber = 676
  var call2135 = callmethod(var_dest,"index", [0]);
  lineNumber = 1
  lineNumber = 676
  var call2136 = callmethod(var_o,"value", [0]);
  var array2134 = new GraceList([
call2135,
call2136,
]);

  var call2137 = callmethod(var_ast,"astcall", [2], var_imem, array2134);
  var_c = call2137;
  lineNumber = 677
  lineNumber = 678
  var call2138 = callmethod(this,"compilenode", [1], var_c);
  var_r = call2138;
  lineNumber = 679
  lineNumber = 1
  lineNumber = 678
  var call2139 = callmethod(var_o,"register:=", [1], var_r);
  var if2126 = call2139;
}
  var if2109 = if2126;
}
  var if2018 = if2109;
}
  lineNumber = 681
  lineNumber = 1
  lineNumber = 680
  var string2140 = new GraceString("%none");
  var call2141 = callmethod(var_o,"register:=", [1], string2140);
  return call2141
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilebind"] = func2013;
  lineNumber = 709
var func2142 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 684
  var var_nm;
  lineNumber = 687
  lineNumber = 689
  lineNumber = 1
  lineNumber = 689
  lineNumber = 1
  lineNumber = 684
  var call2144 = callmethod(var_o,"name", [0]);
  var call2145 = callmethod(call2144,"kind", [0]);
  var string2146 = new GraceString("generic");
  var opresult2148 = callmethod(call2145, "==", [1], string2146);
  if (Grace_isTrue(opresult2148)) {
  lineNumber = 685
  lineNumber = 1
  lineNumber = 685
  lineNumber = 1
  lineNumber = 685
  lineNumber = 1
  lineNumber = 685
  lineNumber = 1
  lineNumber = 685
  var call2149 = callmethod(var_o,"name", [0]);
  var call2150 = callmethod(call2149,"value", [0]);
  var call2151 = callmethod(call2150,"value", [0]);
  var call2152 = callmethod(call2151,"_escape", [0]);
  var_nm = call2152;
  var if2143 = call2152;
  } else {
  lineNumber = 687
  lineNumber = 1
  lineNumber = 687
  lineNumber = 1
  lineNumber = 687
  lineNumber = 1
  lineNumber = 687
  var call2153 = callmethod(var_o,"name", [0]);
  var call2154 = callmethod(call2153,"value", [0]);
  var call2155 = callmethod(call2154,"_escape", [0]);
  var_nm = call2155;
  var if2143 = call2155;
}
  lineNumber = 689
  var call2156 = callmethod(var_declaredvars,"push", [1], var_nm);
  lineNumber = 691
  lineNumber = 1
  lineNumber = 690
  var call2157 = callmethod(var_o,"value", [0]);
  var var_val = call2157;
  lineNumber = 694
  lineNumber = 691
  if (Grace_isTrue(var_val)) {
  lineNumber = 692
  lineNumber = 693
  var call2159 = callmethod(this,"compilenode", [1], var_val);
  var_val = call2159;
  var if2158 = call2159;
  } else {
  lineNumber = 694
  var string2160 = new GraceString("const must have value bound.");
  var call2161 = callmethod(var_util,"syntax_error", [1], string2160);
  var if2158 = call2161;
}
  lineNumber = 697
  lineNumber = 696
  var string2162 = new GraceString("  store %object ");
  var opresult2164 = callmethod(string2162, "++", [1], var_val);
  var string2165 = new GraceString(", %object* %\"var_");
  var opresult2167 = callmethod(opresult2164, "++", [1], string2165);
  lineNumber = 697
  var opresult2169 = callmethod(opresult2167, "++", [1], var_nm);
  var string2170 = new GraceString("\"");
  var opresult2172 = callmethod(opresult2169, "++", [1], string2170);
  lineNumber = 698
  var call2173 = callmethod(this,"out", [1], opresult2172);
  var string2174 = new GraceString("  %icmp");
  var opresult2176 = callmethod(string2174, "++", [1], var_auto__95__count);
  var string2177 = new GraceString(" = icmp eq %object ");
  var opresult2179 = callmethod(opresult2176, "++", [1], string2177);
  var opresult2181 = callmethod(opresult2179, "++", [1], var_val);
  var string2182 = new GraceString(", %undefined");
  var opresult2184 = callmethod(opresult2181, "++", [1], string2182);
  lineNumber = 699
  var call2185 = callmethod(this,"out", [1], opresult2184);
  lineNumber = 700
  lineNumber = 699
  var string2186 = new GraceString("  br i1 %icmp");
  var opresult2188 = callmethod(string2186, "++", [1], var_auto__95__count);
  var string2189 = new GraceString(", label %isundef");
  var opresult2191 = callmethod(opresult2188, "++", [1], string2189);
  var opresult2193 = callmethod(opresult2191, "++", [1], var_auto__95__count);
  var string2194 = new GraceString(", ");
  var opresult2196 = callmethod(opresult2193, "++", [1], string2194);
  lineNumber = 700
  var string2197 = new GraceString("label %isdef");
  var opresult2199 = callmethod(string2197, "++", [1], var_auto__95__count);
  var string2200 = new GraceString("");
  var opresult2202 = callmethod(opresult2199, "++", [1], string2200);
  var opresult2204 = callmethod(opresult2196, "++", [1], opresult2202);
  lineNumber = 701
  var call2205 = callmethod(this,"out", [1], opresult2204);
  var string2206 = new GraceString("isundef");
  var opresult2208 = callmethod(string2206, "++", [1], var_auto__95__count);
  var string2209 = new GraceString("");
  var opresult2211 = callmethod(opresult2208, "++", [1], string2209);
  lineNumber = 702
  var call2212 = callmethod(this,"beginblock", [1], opresult2211);
  lineNumber = 704
  lineNumber = 702
  var string2213 = new GraceString("  call %object @callmethod(%object %none");
  lineNumber = 703
  var string2214 = new GraceString(", i8* getelementptr([11 x i8]* @.str._assignment");
  var opresult2216 = callmethod(string2213, "++", [1], string2214);
  lineNumber = 704
  var string2217 = new GraceString(",i32 0,i32 0), i32 1, %object* %\"var_");
  var opresult2219 = callmethod(string2217, "++", [1], var_nm);
  var string2220 = new GraceString("\")");
  var opresult2222 = callmethod(opresult2219, "++", [1], string2220);
  var opresult2224 = callmethod(opresult2216, "++", [1], opresult2222);
  lineNumber = 705
  var call2225 = callmethod(this,"out", [1], opresult2224);
  var string2226 = new GraceString("  br label %isdef");
  var opresult2228 = callmethod(string2226, "++", [1], var_auto__95__count);
  var string2229 = new GraceString("");
  var opresult2231 = callmethod(opresult2228, "++", [1], string2229);
  lineNumber = 706
  var call2232 = callmethod(this,"out", [1], opresult2231);
  var string2233 = new GraceString("isdef");
  var opresult2235 = callmethod(string2233, "++", [1], var_auto__95__count);
  var string2236 = new GraceString("");
  var opresult2238 = callmethod(opresult2235, "++", [1], string2236);
  lineNumber = 707
  var call2239 = callmethod(this,"beginblock", [1], opresult2238);
  lineNumber = 708
  lineNumber = 707
  var opresult2241 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2241;
  lineNumber = 709
  lineNumber = 1
  lineNumber = 708
  var string2242 = new GraceString("%none");
  var call2243 = callmethod(var_o,"register:=", [1], string2242);
  return call2243
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compiledefdec"] = func2142;
  lineNumber = 736
var func2244 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 711
  lineNumber = 1
  lineNumber = 711
  lineNumber = 1
  lineNumber = 711
  lineNumber = 1
  lineNumber = 711
  var call2245 = callmethod(var_o,"name", [0]);
  var call2246 = callmethod(call2245,"value", [0]);
  var call2247 = callmethod(call2246,"_escape", [0]);
  var var_nm = call2247;
  lineNumber = 712
  var call2248 = callmethod(var_declaredvars,"push", [1], var_nm);
  lineNumber = 714
  lineNumber = 1
  lineNumber = 713
  var call2249 = callmethod(var_o,"value", [0]);
  var var_val = call2249;
  lineNumber = 715
  lineNumber = 714
  var bool2250 = new GraceBoolean(false)
  var var_hadval = bool2250;
  lineNumber = 720
  lineNumber = 715
  if (Grace_isTrue(var_val)) {
  lineNumber = 716
  lineNumber = 717
  var call2252 = callmethod(this,"compilenode", [1], var_val);
  var_val = call2252;
  lineNumber = 718
  lineNumber = 717
  var bool2253 = new GraceBoolean(true)
  var_hadval = bool2253;
  var if2251 = bool2253;
  } else {
  lineNumber = 720
  lineNumber = 719
  var string2254 = new GraceString("%undefined");
  var_val = string2254;
  var if2251 = string2254;
}
  lineNumber = 722
  lineNumber = 721
  var string2255 = new GraceString("  store %object ");
  var opresult2257 = callmethod(string2255, "++", [1], var_val);
  var string2258 = new GraceString(", %object* %\"var_");
  var opresult2260 = callmethod(opresult2257, "++", [1], string2258);
  lineNumber = 722
  var opresult2262 = callmethod(opresult2260, "++", [1], var_nm);
  var string2263 = new GraceString("\"");
  var opresult2265 = callmethod(opresult2262, "++", [1], string2263);
  lineNumber = 723
  var call2266 = callmethod(this,"out", [1], opresult2265);
  lineNumber = 734
  lineNumber = 723
  if (Grace_isTrue(var_hadval)) {
  lineNumber = 724
  var string2268 = new GraceString("  %icmp");
  var opresult2270 = callmethod(string2268, "++", [1], var_auto__95__count);
  var string2271 = new GraceString(" = icmp eq %object ");
  var opresult2273 = callmethod(opresult2270, "++", [1], string2271);
  var opresult2275 = callmethod(opresult2273, "++", [1], var_val);
  var string2276 = new GraceString(", %undefined");
  var opresult2278 = callmethod(opresult2275, "++", [1], string2276);
  lineNumber = 725
  var call2279 = callmethod(this,"out", [1], opresult2278);
  lineNumber = 726
  lineNumber = 725
  var string2280 = new GraceString("  br i1 %icmp");
  var opresult2282 = callmethod(string2280, "++", [1], var_auto__95__count);
  var string2283 = new GraceString(", label %isundef");
  var opresult2285 = callmethod(opresult2282, "++", [1], string2283);
  var opresult2287 = callmethod(opresult2285, "++", [1], var_auto__95__count);
  var string2288 = new GraceString(", ");
  var opresult2290 = callmethod(opresult2287, "++", [1], string2288);
  lineNumber = 726
  var string2291 = new GraceString("label %isdef");
  var opresult2293 = callmethod(string2291, "++", [1], var_auto__95__count);
  var string2294 = new GraceString("");
  var opresult2296 = callmethod(opresult2293, "++", [1], string2294);
  var opresult2298 = callmethod(opresult2290, "++", [1], opresult2296);
  lineNumber = 727
  var call2299 = callmethod(this,"out", [1], opresult2298);
  var string2300 = new GraceString("isundef");
  var opresult2302 = callmethod(string2300, "++", [1], var_auto__95__count);
  var string2303 = new GraceString("");
  var opresult2305 = callmethod(opresult2302, "++", [1], string2303);
  lineNumber = 728
  var call2306 = callmethod(this,"beginblock", [1], opresult2305);
  lineNumber = 730
  lineNumber = 728
  var string2307 = new GraceString("  call %object @callmethod(%object %none");
  lineNumber = 729
  var string2308 = new GraceString(", i8* getelementptr([11 x i8]* @.str._assignment");
  var opresult2310 = callmethod(string2307, "++", [1], string2308);
  lineNumber = 730
  var string2311 = new GraceString(",i32 0,i32 0), i32 1, %object* %\"var_");
  var opresult2313 = callmethod(string2311, "++", [1], var_nm);
  var string2314 = new GraceString("\")");
  var opresult2316 = callmethod(opresult2313, "++", [1], string2314);
  var opresult2318 = callmethod(opresult2310, "++", [1], opresult2316);
  lineNumber = 731
  var call2319 = callmethod(this,"out", [1], opresult2318);
  var string2320 = new GraceString("  br label %isdef");
  var opresult2322 = callmethod(string2320, "++", [1], var_auto__95__count);
  var string2323 = new GraceString("");
  var opresult2325 = callmethod(opresult2322, "++", [1], string2323);
  lineNumber = 732
  var call2326 = callmethod(this,"out", [1], opresult2325);
  var string2327 = new GraceString("isdef");
  var opresult2329 = callmethod(string2327, "++", [1], var_auto__95__count);
  var string2330 = new GraceString("");
  var opresult2332 = callmethod(opresult2329, "++", [1], string2330);
  lineNumber = 733
  var call2333 = callmethod(this,"beginblock", [1], opresult2332);
  lineNumber = 734
  lineNumber = 733
  var opresult2335 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2335;
  var if2267 = opresult2335;
}
  lineNumber = 736
  lineNumber = 1
  lineNumber = 735
  var string2336 = new GraceString("%none");
  var call2337 = callmethod(var_o,"register:=", [1], string2336);
  return call2337
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilevardec"] = func2244;
  lineNumber = 746
var func2338 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 738
  lineNumber = 1
  lineNumber = 738
  var call2339 = callmethod(var_o,"value", [0]);
  lineNumber = 739
  var call2340 = callmethod(this,"compilenode", [1], call2339);
  var var_of = call2340;
  lineNumber = 1
  lineNumber = 739
  var call2341 = callmethod(var_o,"index", [0]);
  lineNumber = 740
  var call2342 = callmethod(this,"compilenode", [1], call2341);
  var var_index = call2342;
  var string2343 = new GraceString("  store %object ");
  var opresult2345 = callmethod(string2343, "++", [1], var_index);
  var string2346 = new GraceString(", %object* %params_0");
  var opresult2348 = callmethod(opresult2345, "++", [1], string2346);
  lineNumber = 741
  var call2349 = callmethod(this,"out", [1], opresult2348);
  lineNumber = 743
  lineNumber = 741
  var string2350 = new GraceString("  %idxres");
  var opresult2352 = callmethod(string2350, "++", [1], var_auto__95__count);
  var string2353 = new GraceString(" = call %object @callmethod(%object ");
  var opresult2355 = callmethod(opresult2352, "++", [1], string2353);
  lineNumber = 742
  var opresult2357 = callmethod(opresult2355, "++", [1], var_of);
  var string2358 = new GraceString(", i8* getelementptr([3 x i8]* @.str._index");
  var opresult2360 = callmethod(opresult2357, "++", [1], string2358);
  lineNumber = 743
  var string2361 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult2363 = callmethod(opresult2360, "++", [1], string2361);
  lineNumber = 744
  var call2364 = callmethod(this,"out", [1], opresult2363);
  lineNumber = 745
  lineNumber = 1
  lineNumber = 745
  lineNumber = 744
  var string2365 = new GraceString("%idxres");
  var opresult2367 = callmethod(string2365, "++", [1], var_auto__95__count);
  var call2368 = callmethod(var_o,"register:=", [1], opresult2367);
  lineNumber = 746
  lineNumber = 745
  var opresult2370 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2370;
  return opresult2370
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileindex"] = func2338;
  lineNumber = 790
var func2371 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 748
  lineNumber = 1
  lineNumber = 748
  var call2372 = callmethod(var_o,"left", [0]);
  lineNumber = 749
  var call2373 = callmethod(this,"compilenode", [1], call2372);
  var var_left = call2373;
  lineNumber = 1
  lineNumber = 749
  var call2374 = callmethod(var_o,"right", [0]);
  lineNumber = 750
  var call2375 = callmethod(this,"compilenode", [1], call2374);
  var var_right = call2375;
  lineNumber = 751
  lineNumber = 750
  var opresult2377 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2377;
  lineNumber = 790
  lineNumber = 791
  lineNumber = 1
  lineNumber = 751
  var call2379 = callmethod(var_o,"value", [0]);
  var string2380 = new GraceString("+");
  var opresult2382 = callmethod(call2379, "==", [1], string2380);
  lineNumber = 791
  lineNumber = 1
  lineNumber = 751
  var call2383 = callmethod(var_o,"value", [0]);
  var string2384 = new GraceString("*");
  var opresult2386 = callmethod(call2383, "==", [1], string2384);
  var opresult2388 = callmethod(opresult2382, "|", [1], opresult2386);
  lineNumber = 791
  lineNumber = 1
  lineNumber = 751
  var call2389 = callmethod(var_o,"value", [0]);
  var string2390 = new GraceString("/");
  var opresult2392 = callmethod(call2389, "==", [1], string2390);
  var opresult2394 = callmethod(opresult2388, "|", [1], opresult2392);
  lineNumber = 791
  lineNumber = 1
  lineNumber = 752
  var call2395 = callmethod(var_o,"value", [0]);
  var string2396 = new GraceString("-");
  var opresult2398 = callmethod(call2395, "==", [1], string2396);
  var opresult2400 = callmethod(opresult2394, "|", [1], opresult2398);
  lineNumber = 791
  lineNumber = 1
  lineNumber = 752
  var call2401 = callmethod(var_o,"value", [0]);
  var string2402 = new GraceString("%");
  var opresult2404 = callmethod(call2401, "==", [1], string2402);
  var opresult2406 = callmethod(opresult2400, "|", [1], opresult2404);
  if (Grace_isTrue(opresult2406)) {
  lineNumber = 754
  lineNumber = 753
  var string2407 = new GraceString("sum");
  var var_rnm = string2407;
  lineNumber = 755
  lineNumber = 754
  var string2408 = new GraceString("plus");
  var var_opnm = string2408;
  lineNumber = 758
  lineNumber = 759
  lineNumber = 1
  lineNumber = 755
  var call2410 = callmethod(var_o,"value", [0]);
  var string2411 = new GraceString("*");
  var opresult2413 = callmethod(call2410, "==", [1], string2411);
  if (Grace_isTrue(opresult2413)) {
  lineNumber = 757
  lineNumber = 756
  var string2414 = new GraceString("prod");
  var_rnm = string2414;
  lineNumber = 758
  lineNumber = 757
  var string2415 = new GraceString("asterisk");
  var_opnm = string2415;
  var if2409 = string2415;
}
  lineNumber = 762
  lineNumber = 763
  lineNumber = 1
  lineNumber = 759
  var call2417 = callmethod(var_o,"value", [0]);
  var string2418 = new GraceString("/");
  var opresult2420 = callmethod(call2417, "==", [1], string2418);
  if (Grace_isTrue(opresult2420)) {
  lineNumber = 761
  lineNumber = 760
  var string2421 = new GraceString("quotient");
  var_rnm = string2421;
  lineNumber = 762
  lineNumber = 761
  var string2422 = new GraceString("slash");
  var_opnm = string2422;
  var if2416 = string2422;
}
  lineNumber = 766
  lineNumber = 767
  lineNumber = 1
  lineNumber = 763
  var call2424 = callmethod(var_o,"value", [0]);
  var string2425 = new GraceString("-");
  var opresult2427 = callmethod(call2424, "==", [1], string2425);
  if (Grace_isTrue(opresult2427)) {
  lineNumber = 765
  lineNumber = 764
  var string2428 = new GraceString("diff");
  var_rnm = string2428;
  lineNumber = 766
  lineNumber = 765
  var string2429 = new GraceString("minus");
  var_opnm = string2429;
  var if2423 = string2429;
}
  lineNumber = 770
  lineNumber = 771
  lineNumber = 1
  lineNumber = 767
  var call2431 = callmethod(var_o,"value", [0]);
  var string2432 = new GraceString("%");
  var opresult2434 = callmethod(call2431, "==", [1], string2432);
  if (Grace_isTrue(opresult2434)) {
  lineNumber = 769
  lineNumber = 768
  var string2435 = new GraceString("modulus");
  var_rnm = string2435;
  lineNumber = 770
  lineNumber = 769
  var string2436 = new GraceString("percent");
  var_opnm = string2436;
  var if2430 = string2436;
}
  lineNumber = 771
  var string2437 = new GraceString("  store %object ");
  var opresult2439 = callmethod(string2437, "++", [1], var_right);
  var string2440 = new GraceString(", %object* %params_0");
  var opresult2442 = callmethod(opresult2439, "++", [1], string2440);
  lineNumber = 772
  var call2443 = callmethod(this,"out", [1], opresult2442);
  lineNumber = 774
  lineNumber = 772
  var string2444 = new GraceString("  %");
  var opresult2446 = callmethod(string2444, "++", [1], var_rnm);
  var opresult2448 = callmethod(opresult2446, "++", [1], var_auto__95__count);
  var string2449 = new GraceString(" = call %object @callmethod(%object ");
  var opresult2451 = callmethod(opresult2448, "++", [1], string2449);
  lineNumber = 773
  var opresult2453 = callmethod(opresult2451, "++", [1], var_left);
  var string2454 = new GraceString(", i8* getelementptr([2 x i8]* @.str._");
  var opresult2456 = callmethod(opresult2453, "++", [1], string2454);
  var opresult2458 = callmethod(opresult2456, "++", [1], var_opnm);
  lineNumber = 774
  var string2459 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult2461 = callmethod(opresult2458, "++", [1], string2459);
  lineNumber = 775
  var call2462 = callmethod(this,"out", [1], opresult2461);
  lineNumber = 776
  lineNumber = 1
  lineNumber = 776
  lineNumber = 775
  var string2463 = new GraceString("%");
  var opresult2465 = callmethod(string2463, "++", [1], var_rnm);
  var opresult2467 = callmethod(opresult2465, "++", [1], var_auto__95__count);
  var call2468 = callmethod(var_o,"register:=", [1], opresult2467);
  lineNumber = 777
  lineNumber = 776
  var opresult2470 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2470;
  var if2378 = opresult2470;
  } else {
  lineNumber = 778
  lineNumber = 1
  lineNumber = 778
  var call2471 = callmethod(var_o,"value", [0]);
  var call2472 = Grace_length(call2471);
  var opresult2474 = callmethod(call2472, "+", [1], new GraceNum(1));
  var var_len = opresult2474;
  lineNumber = 779
  lineNumber = 1
  lineNumber = 779
  lineNumber = 1
  lineNumber = 779
  var call2475 = callmethod(var_o,"value", [0]);
  var call2476 = callmethod(call2475,"_escape", [0]);
  var var_evl = call2476;
  lineNumber = 782
  lineNumber = 780
  var string2477 = new GraceString("@.str");
  lineNumber = 782
  lineNumber = 1
  lineNumber = 780
  var call2478 = callmethod(var_constants,"size", [0]);
  var opresult2480 = callmethod(string2477, "++", [1], call2478);
  var string2481 = new GraceString(" = private unnamed_addr ");
  var opresult2483 = callmethod(opresult2480, "++", [1], string2481);
  lineNumber = 781
  var string2484 = new GraceString("constant [");
  var opresult2486 = callmethod(opresult2483, "++", [1], string2484);
  var opresult2488 = callmethod(opresult2486, "++", [1], var_len);
  var string2489 = new GraceString(" x i8] c\"");
  var opresult2491 = callmethod(opresult2488, "++", [1], string2489);
  var opresult2493 = callmethod(opresult2491, "++", [1], var_evl);
  var string2494 = new GraceString("\\00\"");
  var opresult2496 = callmethod(opresult2493, "++", [1], string2494);
  var var_con = opresult2496;
  lineNumber = 782
  var string2497 = new GraceString("  store %object ");
  var opresult2499 = callmethod(string2497, "++", [1], var_right);
  var string2500 = new GraceString(", %object* %params_0");
  var opresult2502 = callmethod(opresult2499, "++", [1], string2500);
  lineNumber = 783
  var call2503 = callmethod(this,"out", [1], opresult2502);
  lineNumber = 786
  lineNumber = 783
  var string2504 = new GraceString("  %opresult");
  var opresult2506 = callmethod(string2504, "++", [1], var_auto__95__count);
  var string2507 = new GraceString(" = call %object ");
  var opresult2509 = callmethod(opresult2506, "++", [1], string2507);
  lineNumber = 784
  var string2510 = new GraceString("@callmethod(%object ");
  var opresult2512 = callmethod(opresult2509, "++", [1], string2510);
  var opresult2514 = callmethod(opresult2512, "++", [1], var_left);
  lineNumber = 785
  var string2515 = new GraceString(", i8* getelementptr([");
  var opresult2517 = callmethod(opresult2514, "++", [1], string2515);
  var opresult2519 = callmethod(opresult2517, "++", [1], var_len);
  var string2520 = new GraceString(" x i8]* @.str");
  var opresult2522 = callmethod(opresult2519, "++", [1], string2520);
  lineNumber = 786
  lineNumber = 1
  lineNumber = 786
  var call2523 = callmethod(var_constants,"size", [0]);
  var opresult2525 = callmethod(opresult2522, "++", [1], call2523);
  var string2526 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult2528 = callmethod(opresult2525, "++", [1], string2526);
  lineNumber = 787
  var call2529 = callmethod(this,"out", [1], opresult2528);
  var call2530 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 789
  lineNumber = 1
  lineNumber = 789
  lineNumber = 788
  var string2531 = new GraceString("%opresult");
  var opresult2533 = callmethod(string2531, "++", [1], var_auto__95__count);
  var call2534 = callmethod(var_o,"register:=", [1], opresult2533);
  lineNumber = 790
  lineNumber = 789
  var opresult2536 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2536;
  var if2378 = opresult2536;
}
  return if2378
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileop"] = func2371;
  lineNumber = 840
var func2537 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 794
  var array2538 = new GraceList([
]);

  var var_args = array2538;
  lineNumber = 795
  lineNumber = 794
  var string2539 = new GraceString("");
  var var_obj = string2539;
  lineNumber = 796
  lineNumber = 795
  var var_len = new GraceNum(0);
  lineNumber = 797
  lineNumber = 796
  var string2540 = new GraceString("");
  var var_con = string2540;
  lineNumber = 798
  var var_evl;
  lineNumber = 799
  lineNumber = 798
  var var_i = new GraceNum(0);
  lineNumber = 801
  lineNumber = 799
  lineNumber = 1
  lineNumber = 799
  var call2541 = callmethod(var_o,"with", [0]);
  lineNumber = 801
  var block2542 = Grace_allocObject();
  block2542.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2542.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2542.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2542.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2542.receiver = this;
  block2542.className = 'block<genllvm30:801>';
  block2542.real = function(
var_p
) {
  lineNumber = 800
  lineNumber = 801
  var call2543 = callmethod(this,"compilenode", [1], var_p);
  var var_r = call2543;
  var call2544 = callmethod(var_args,"push", [1], var_r);
  return call2544;
};
  var call2545 = callmethod(Grace_prelude,"for()do", [1, 1], call2541, block2542);
  lineNumber = 805
  lineNumber = 806
  lineNumber = 1
  lineNumber = 803
  var call2547 = callmethod(var_args,"size", [0]);
  var opresult2549 = callmethod(call2547, ">", [1], var_paramsUsed);
  if (Grace_isTrue(opresult2549)) {
  lineNumber = 805
  lineNumber = 1
  lineNumber = 804
  var call2550 = callmethod(var_args,"size", [0]);
  var_paramsUsed = call2550;
  var if2546 = call2550;
}
  lineNumber = 806
  lineNumber = 1
  lineNumber = 806
  lineNumber = 1
  lineNumber = 806
  lineNumber = 1
  lineNumber = 806
  var call2551 = callmethod(var_o,"value", [0]);
  var call2552 = callmethod(call2551,"value", [0]);
  var call2553 = callmethod(call2552,"_escape", [0]);
  var_evl = call2553;
  lineNumber = 836
  lineNumber = 838
  lineNumber = 1
  lineNumber = 838
  lineNumber = 1
  lineNumber = 807
  var call2555 = callmethod(var_o,"value", [0]);
  var call2556 = callmethod(call2555,"kind", [0]);
  var string2557 = new GraceString("member");
  var opresult2559 = callmethod(call2556, "==", [1], string2557);
  if (Grace_isTrue(opresult2559)) {
  lineNumber = 808
  lineNumber = 1
  lineNumber = 808
  lineNumber = 1
  lineNumber = 808
  var call2560 = callmethod(var_o,"value", [0]);
  var call2561 = callmethod(call2560,"in", [0]);
  lineNumber = 809
  var call2562 = callmethod(this,"compilenode", [1], call2561);
  var_obj = call2562;
  lineNumber = 1
  lineNumber = 809
  lineNumber = 1
  lineNumber = 809
  var call2563 = callmethod(var_o,"value", [0]);
  var call2564 = callmethod(call2563,"value", [0]);
  var call2565 = Grace_length(call2564);
  var opresult2567 = callmethod(call2565, "+", [1], new GraceNum(1));
  var_len = opresult2567;
  lineNumber = 812
  lineNumber = 810
  var string2568 = new GraceString("@.str");
  lineNumber = 812
  lineNumber = 1
  lineNumber = 810
  var call2569 = callmethod(var_constants,"size", [0]);
  var opresult2571 = callmethod(string2568, "++", [1], call2569);
  var string2572 = new GraceString(" = private unnamed_addr ");
  var opresult2574 = callmethod(opresult2571, "++", [1], string2572);
  lineNumber = 811
  var string2575 = new GraceString("constant [");
  var opresult2577 = callmethod(opresult2574, "++", [1], string2575);
  var opresult2579 = callmethod(opresult2577, "++", [1], var_len);
  var string2580 = new GraceString(" x i8] c\"");
  var opresult2582 = callmethod(opresult2579, "++", [1], string2580);
  var opresult2584 = callmethod(opresult2582, "++", [1], var_evl);
  var string2585 = new GraceString("\\00\"");
  var opresult2587 = callmethod(opresult2584, "++", [1], string2585);
  var_con = opresult2587;
  lineNumber = 815
  lineNumber = 812
  lineNumber = 815
  var block2588 = Grace_allocObject();
  block2588.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2588.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2588.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2588.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2588.receiver = this;
  block2588.className = 'block<genllvm30:815>';
  block2588.real = function(
var_arg
) {
  lineNumber = 813
  var string2589 = new GraceString("  store %object ");
  var opresult2591 = callmethod(string2589, "++", [1], var_arg);
  var string2592 = new GraceString(", %object* %params_");
  var opresult2594 = callmethod(opresult2591, "++", [1], string2592);
  var opresult2596 = callmethod(opresult2594, "++", [1], var_i);
  var string2597 = new GraceString("");
  var opresult2599 = callmethod(opresult2596, "++", [1], string2597);
  lineNumber = 814
  var call2600 = callmethod(this,"out", [1], opresult2599);
  lineNumber = 815
  lineNumber = 814
  var opresult2602 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult2602;
  return opresult2602;
};
  var call2603 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block2588);
  lineNumber = 820
  lineNumber = 816
  var string2604 = new GraceString("  %call");
  var opresult2606 = callmethod(string2604, "++", [1], var_auto__95__count);
  var string2607 = new GraceString(" = call %object ");
  var opresult2609 = callmethod(opresult2606, "++", [1], string2607);
  lineNumber = 817
  var string2610 = new GraceString("@callmethod(%object ");
  var opresult2612 = callmethod(opresult2609, "++", [1], string2610);
  var opresult2614 = callmethod(opresult2612, "++", [1], var_obj);
  lineNumber = 818
  var string2615 = new GraceString(", i8* getelementptr([");
  var opresult2617 = callmethod(opresult2614, "++", [1], string2615);
  var opresult2619 = callmethod(opresult2617, "++", [1], var_len);
  var string2620 = new GraceString(" x i8]* @.str");
  var opresult2622 = callmethod(opresult2619, "++", [1], string2620);
  lineNumber = 820
  lineNumber = 1
  lineNumber = 819
  var call2623 = callmethod(var_constants,"size", [0]);
  var opresult2625 = callmethod(opresult2622, "++", [1], call2623);
  var string2626 = new GraceString(",i32 0,i32 0), i32 ");
  var opresult2628 = callmethod(opresult2625, "++", [1], string2626);
  lineNumber = 820
  lineNumber = 1
  lineNumber = 820
  var call2629 = callmethod(var_args,"size", [0]);
  var opresult2631 = callmethod(opresult2628, "++", [1], call2629);
  var string2632 = new GraceString(", %object* %params)");
  var opresult2634 = callmethod(opresult2631, "++", [1], string2632);
  lineNumber = 821
  var call2635 = callmethod(this,"out", [1], opresult2634);
  var call2636 = callmethod(var_constants,"push", [1], var_con);
  var if2554 = call2636;
  } else {
  lineNumber = 824
  lineNumber = 823
  var string2637 = new GraceString("%self");
  var_obj = string2637;
  lineNumber = 824
  lineNumber = 1
  lineNumber = 824
  lineNumber = 1
  lineNumber = 824
  var call2638 = callmethod(var_o,"value", [0]);
  var call2639 = callmethod(call2638,"value", [0]);
  var call2640 = Grace_length(call2639);
  var opresult2642 = callmethod(call2640, "+", [1], new GraceNum(1));
  var_len = opresult2642;
  lineNumber = 827
  lineNumber = 825
  var string2643 = new GraceString("@.str");
  lineNumber = 827
  lineNumber = 1
  lineNumber = 825
  var call2644 = callmethod(var_constants,"size", [0]);
  var opresult2646 = callmethod(string2643, "++", [1], call2644);
  var string2647 = new GraceString(" = private unnamed_addr ");
  var opresult2649 = callmethod(opresult2646, "++", [1], string2647);
  lineNumber = 826
  var string2650 = new GraceString("constant [");
  var opresult2652 = callmethod(opresult2649, "++", [1], string2650);
  var opresult2654 = callmethod(opresult2652, "++", [1], var_len);
  var string2655 = new GraceString(" x i8] c\"");
  var opresult2657 = callmethod(opresult2654, "++", [1], string2655);
  var opresult2659 = callmethod(opresult2657, "++", [1], var_evl);
  var string2660 = new GraceString("\\00\"");
  var opresult2662 = callmethod(opresult2659, "++", [1], string2660);
  var_con = opresult2662;
  lineNumber = 830
  lineNumber = 827
  lineNumber = 830
  var block2663 = Grace_allocObject();
  block2663.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2663.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2663.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2663.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2663.receiver = this;
  block2663.className = 'block<genllvm30:830>';
  block2663.real = function(
var_arg
) {
  lineNumber = 828
  var string2664 = new GraceString("  store %object ");
  var opresult2666 = callmethod(string2664, "++", [1], var_arg);
  var string2667 = new GraceString(", %object* %params_");
  var opresult2669 = callmethod(opresult2666, "++", [1], string2667);
  var opresult2671 = callmethod(opresult2669, "++", [1], var_i);
  var string2672 = new GraceString("");
  var opresult2674 = callmethod(opresult2671, "++", [1], string2672);
  lineNumber = 829
  var call2675 = callmethod(this,"out", [1], opresult2674);
  lineNumber = 830
  lineNumber = 829
  var opresult2677 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult2677;
  return opresult2677;
};
  var call2678 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block2663);
  lineNumber = 835
  lineNumber = 831
  var string2679 = new GraceString("  %call");
  var opresult2681 = callmethod(string2679, "++", [1], var_auto__95__count);
  var string2682 = new GraceString(" = call %object ");
  var opresult2684 = callmethod(opresult2681, "++", [1], string2682);
  lineNumber = 832
  var string2685 = new GraceString("@callmethod(%object ");
  var opresult2687 = callmethod(opresult2684, "++", [1], string2685);
  var opresult2689 = callmethod(opresult2687, "++", [1], var_obj);
  lineNumber = 833
  var string2690 = new GraceString(", i8* getelementptr([");
  var opresult2692 = callmethod(opresult2689, "++", [1], string2690);
  var opresult2694 = callmethod(opresult2692, "++", [1], var_len);
  var string2695 = new GraceString(" x i8]* @.str");
  var opresult2697 = callmethod(opresult2694, "++", [1], string2695);
  lineNumber = 835
  lineNumber = 1
  lineNumber = 834
  var call2698 = callmethod(var_constants,"size", [0]);
  var opresult2700 = callmethod(opresult2697, "++", [1], call2698);
  var string2701 = new GraceString(",i32 0,i32 0), i32 ");
  var opresult2703 = callmethod(opresult2700, "++", [1], string2701);
  lineNumber = 835
  lineNumber = 1
  lineNumber = 835
  var call2704 = callmethod(var_args,"size", [0]);
  var opresult2706 = callmethod(opresult2703, "++", [1], call2704);
  var string2707 = new GraceString(", %object* %params)");
  var opresult2709 = callmethod(opresult2706, "++", [1], string2707);
  lineNumber = 836
  var call2710 = callmethod(this,"out", [1], opresult2709);
  var call2711 = callmethod(var_constants,"push", [1], var_con);
  var if2554 = call2711;
}
  lineNumber = 839
  lineNumber = 1
  lineNumber = 839
  lineNumber = 838
  var string2712 = new GraceString("%call");
  var opresult2714 = callmethod(string2712, "++", [1], var_auto__95__count);
  var call2715 = callmethod(var_o,"register:=", [1], opresult2714);
  lineNumber = 840
  lineNumber = 839
  var opresult2717 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2717;
  return opresult2717
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilecall"] = func2537;
  lineNumber = 884
var func2718 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 843
  lineNumber = 842
  var string2719 = new GraceString("");
  var var_escval = string2719;
  lineNumber = 843
  lineNumber = 1
  lineNumber = 843
  var call2720 = callmethod(var_o,"value", [0]);
  var call2721 = Grace_length(call2720);
  var quotient2723 = callmethod(call2721, "/", [1], new GraceNum(2));
  var var_l = quotient2723;
  lineNumber = 845
  lineNumber = 844
  var var_i = new GraceNum(0);
  lineNumber = 851
  lineNumber = 845
  lineNumber = 1
  lineNumber = 845
  var call2724 = callmethod(var_o,"value", [0]);
  lineNumber = 851
  var block2725 = Grace_allocObject();
  block2725.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2725.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2725.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2725.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2725.receiver = this;
  block2725.className = 'block<genllvm30:851>';
  block2725.real = function(
var_c
) {
  lineNumber = 848
  lineNumber = 849
  lineNumber = 846
  var modulus2728 = callmethod(var_i, "%", [1], new GraceNum(2));
  var opresult2730 = callmethod(modulus2728, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2730)) {
  lineNumber = 848
  lineNumber = 847
  var string2731 = new GraceString("\\");
  var opresult2733 = callmethod(var_escval, "++", [1], string2731);
  var_escval = opresult2733;
  var if2726 = opresult2733;
}
  lineNumber = 850
  lineNumber = 849
  var opresult2735 = callmethod(var_escval, "++", [1], var_c);
  var_escval = opresult2735;
  lineNumber = 851
  lineNumber = 850
  var opresult2737 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult2737;
  return opresult2737;
};
  var call2738 = callmethod(Grace_prelude,"for()do", [1, 1], call2724, block2725);
  lineNumber = 853
  lineNumber = 852
  var string2739 = new GraceString("  %tmp");
  var opresult2741 = callmethod(string2739, "++", [1], var_auto__95__count);
  var string2742 = new GraceString(" = load %object* @.octlit");
  var opresult2744 = callmethod(opresult2741, "++", [1], string2742);
  lineNumber = 853
  var opresult2746 = callmethod(opresult2744, "++", [1], var_auto__95__count);
  lineNumber = 854
  var call2747 = callmethod(this,"out", [1], opresult2746);
  lineNumber = 855
  lineNumber = 854
  var string2748 = new GraceString("  %cmp");
  var opresult2750 = callmethod(string2748, "++", [1], var_auto__95__count);
  var string2751 = new GraceString(" = icmp ne %object %tmp");
  var opresult2753 = callmethod(opresult2750, "++", [1], string2751);
  lineNumber = 855
  var opresult2755 = callmethod(opresult2753, "++", [1], var_auto__95__count);
  var string2756 = new GraceString(", null");
  var opresult2758 = callmethod(opresult2755, "++", [1], string2756);
  lineNumber = 856
  var call2759 = callmethod(this,"out", [1], opresult2758);
  lineNumber = 858
  lineNumber = 856
  var string2760 = new GraceString("  br i1 %cmp");
  var opresult2762 = callmethod(string2760, "++", [1], var_auto__95__count);
  var string2763 = new GraceString(", label %octlit");
  var opresult2765 = callmethod(opresult2762, "++", [1], string2763);
  lineNumber = 857
  var opresult2767 = callmethod(opresult2765, "++", [1], var_auto__95__count);
  var string2768 = new GraceString(".already, label %octlit");
  var opresult2770 = callmethod(opresult2767, "++", [1], string2768);
  lineNumber = 858
  var opresult2772 = callmethod(opresult2770, "++", [1], var_auto__95__count);
  var string2773 = new GraceString(".define");
  var opresult2775 = callmethod(opresult2772, "++", [1], string2773);
  lineNumber = 859
  var call2776 = callmethod(this,"out", [1], opresult2775);
  var string2777 = new GraceString("octlit");
  var opresult2779 = callmethod(string2777, "++", [1], var_auto__95__count);
  var string2780 = new GraceString(".already");
  var opresult2782 = callmethod(opresult2779, "++", [1], string2780);
  lineNumber = 860
  var call2783 = callmethod(this,"beginblock", [1], opresult2782);
  lineNumber = 861
  lineNumber = 860
  var string2784 = new GraceString("  %alreadyoctets");
  var opresult2786 = callmethod(string2784, "++", [1], var_auto__95__count);
  var string2787 = new GraceString(" = load %object* @.octlit");
  var opresult2789 = callmethod(opresult2786, "++", [1], string2787);
  lineNumber = 861
  var opresult2791 = callmethod(opresult2789, "++", [1], var_auto__95__count);
  lineNumber = 862
  var call2792 = callmethod(this,"out", [1], opresult2791);
  var string2793 = new GraceString("  br label %octlit");
  var opresult2795 = callmethod(string2793, "++", [1], var_auto__95__count);
  var string2796 = new GraceString(".end");
  var opresult2798 = callmethod(opresult2795, "++", [1], string2796);
  lineNumber = 863
  var call2799 = callmethod(this,"out", [1], opresult2798);
  var string2800 = new GraceString("octlit");
  var opresult2802 = callmethod(string2800, "++", [1], var_auto__95__count);
  var string2803 = new GraceString(".define");
  var opresult2805 = callmethod(opresult2802, "++", [1], string2803);
  lineNumber = 864
  var call2806 = callmethod(this,"beginblock", [1], opresult2805);
  var string2807 = new GraceString("  %oct");
  var opresult2809 = callmethod(string2807, "++", [1], var_auto__95__count);
  var string2810 = new GraceString(" = getelementptr [");
  var opresult2812 = callmethod(opresult2809, "++", [1], string2810);
  var opresult2814 = callmethod(opresult2812, "++", [1], var_l);
  var string2815 = new GraceString(" x i8]* @.oct");
  var opresult2817 = callmethod(opresult2814, "++", [1], string2815);
  lineNumber = 1
  lineNumber = 864
  var call2818 = callmethod(var_constants,"size", [0]);
  var opresult2820 = callmethod(opresult2817, "++", [1], call2818);
  var string2821 = new GraceString(", i32 0, i32 0");
  var opresult2823 = callmethod(opresult2820, "++", [1], string2821);
  lineNumber = 865
  var call2824 = callmethod(this,"out", [1], opresult2823);
  lineNumber = 867
  lineNumber = 865
  var string2825 = new GraceString("  %defoctets");
  var opresult2827 = callmethod(string2825, "++", [1], var_auto__95__count);
  var string2828 = new GraceString(" = call %object ");
  var opresult2830 = callmethod(opresult2827, "++", [1], string2828);
  lineNumber = 866
  var string2831 = new GraceString("@alloc_Octets(i8* ");
  var opresult2833 = callmethod(opresult2830, "++", [1], string2831);
  lineNumber = 867
  var string2834 = new GraceString("%oct");
  var opresult2836 = callmethod(opresult2833, "++", [1], string2834);
  var opresult2838 = callmethod(opresult2836, "++", [1], var_auto__95__count);
  var string2839 = new GraceString(", i32 ");
  var opresult2841 = callmethod(opresult2838, "++", [1], string2839);
  var opresult2843 = callmethod(opresult2841, "++", [1], var_l);
  var string2844 = new GraceString(")");
  var opresult2846 = callmethod(opresult2843, "++", [1], string2844);
  lineNumber = 868
  var call2847 = callmethod(this,"out", [1], opresult2846);
  lineNumber = 869
  lineNumber = 868
  var string2848 = new GraceString("  store %object %defoctets");
  var opresult2850 = callmethod(string2848, "++", [1], var_auto__95__count);
  var string2851 = new GraceString(", %object* ");
  var opresult2853 = callmethod(opresult2850, "++", [1], string2851);
  lineNumber = 869
  var string2854 = new GraceString("@.octlit");
  var opresult2856 = callmethod(opresult2853, "++", [1], string2854);
  var opresult2858 = callmethod(opresult2856, "++", [1], var_auto__95__count);
  lineNumber = 870
  var call2859 = callmethod(this,"out", [1], opresult2858);
  var string2860 = new GraceString("br label %octlit");
  var opresult2862 = callmethod(string2860, "++", [1], var_auto__95__count);
  var string2863 = new GraceString(".end");
  var opresult2865 = callmethod(opresult2862, "++", [1], string2863);
  lineNumber = 871
  var call2866 = callmethod(this,"out", [1], opresult2865);
  var string2867 = new GraceString("octlit");
  var opresult2869 = callmethod(string2867, "++", [1], var_auto__95__count);
  var string2870 = new GraceString(".end");
  var opresult2872 = callmethod(opresult2869, "++", [1], string2870);
  lineNumber = 872
  var call2873 = callmethod(this,"beginblock", [1], opresult2872);
  lineNumber = 875
  lineNumber = 872
  var string2874 = new GraceString(" %octets");
  var opresult2876 = callmethod(string2874, "++", [1], var_auto__95__count);
  var string2877 = new GraceString(" = phi %object [%alreadyoctets");
  var opresult2879 = callmethod(opresult2876, "++", [1], string2877);
  lineNumber = 873
  var opresult2881 = callmethod(opresult2879, "++", [1], var_auto__95__count);
  var string2882 = new GraceString(", %octlit");
  var opresult2884 = callmethod(opresult2881, "++", [1], string2882);
  var opresult2886 = callmethod(opresult2884, "++", [1], var_auto__95__count);
  var string2887 = new GraceString(".already], ");
  var opresult2889 = callmethod(opresult2886, "++", [1], string2887);
  lineNumber = 874
  var string2890 = new GraceString("[%defoctets");
  var opresult2892 = callmethod(opresult2889, "++", [1], string2890);
  var opresult2894 = callmethod(opresult2892, "++", [1], var_auto__95__count);
  var string2895 = new GraceString(", %octlit");
  var opresult2897 = callmethod(opresult2894, "++", [1], string2895);
  var opresult2899 = callmethod(opresult2897, "++", [1], var_auto__95__count);
  lineNumber = 875
  var string2900 = new GraceString(".define]");
  var opresult2902 = callmethod(opresult2899, "++", [1], string2900);
  lineNumber = 876
  var call2903 = callmethod(this,"out", [1], opresult2902);
  lineNumber = 878
  lineNumber = 876
  var string2904 = new GraceString("@.oct");
  lineNumber = 878
  lineNumber = 1
  lineNumber = 876
  var call2905 = callmethod(var_constants,"size", [0]);
  var opresult2907 = callmethod(string2904, "++", [1], call2905);
  var string2908 = new GraceString(" = private unnamed_addr ");
  var opresult2910 = callmethod(opresult2907, "++", [1], string2908);
  lineNumber = 877
  var string2911 = new GraceString("constant [");
  var opresult2913 = callmethod(opresult2910, "++", [1], string2911);
  var opresult2915 = callmethod(opresult2913, "++", [1], var_l);
  var string2916 = new GraceString(" x i8] c\"");
  var opresult2918 = callmethod(opresult2915, "++", [1], string2916);
  var opresult2920 = callmethod(opresult2918, "++", [1], var_escval);
  var string2921 = new GraceString("\"");
  var opresult2923 = callmethod(opresult2920, "++", [1], string2921);
  var var_con = opresult2923;
  lineNumber = 878
  var call2924 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 881
  lineNumber = 879
  var string2925 = new GraceString("@.octlit");
  var opresult2927 = callmethod(string2925, "++", [1], var_auto__95__count);
  lineNumber = 880
  var string2928 = new GraceString(" = private global %object null");
  var opresult2930 = callmethod(opresult2927, "++", [1], string2928);
  var_con = opresult2930;
  lineNumber = 881
  var call2931 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 883
  lineNumber = 1
  lineNumber = 883
  lineNumber = 882
  var string2932 = new GraceString("%octets");
  var opresult2934 = callmethod(string2932, "++", [1], var_auto__95__count);
  var call2935 = callmethod(var_o,"register:=", [1], opresult2934);
  lineNumber = 884
  lineNumber = 883
  var opresult2937 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2937;
  return opresult2937
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileoctets"] = func2718;
  lineNumber = 931
var func2938 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 886
  var string2939 = new GraceString("; Import of ");
  lineNumber = 1
  lineNumber = 886
  lineNumber = 1
  lineNumber = 886
  var call2940 = callmethod(var_o,"value", [0]);
  var call2941 = callmethod(call2940,"value", [0]);
  var opresult2943 = callmethod(string2939, "++", [1], call2941);
  lineNumber = 887
  var call2944 = callmethod(this,"out", [1], opresult2943);
  lineNumber = 888
  var var_con;
  lineNumber = 1
  lineNumber = 888
  lineNumber = 1
  lineNumber = 888
  lineNumber = 1
  lineNumber = 888
  var call2945 = callmethod(var_o,"value", [0]);
  var call2946 = callmethod(call2945,"value", [0]);
  var call2947 = callmethod(call2946,"_escape", [0]);
  var var_nm = call2947;
  lineNumber = 890
  lineNumber = 889
  var string2948 = new GraceString("@\".module.");
  var opresult2950 = callmethod(string2948, "++", [1], var_nm);
  var string2951 = new GraceString("\"");
  var opresult2953 = callmethod(opresult2950, "++", [1], string2951);
  var var_modg = opresult2953;
  lineNumber = 891
  lineNumber = 890
  var var_sblock = var_bblock;
  lineNumber = 891
  var string2954 = new GraceString("  %tmp");
  var opresult2956 = callmethod(string2954, "++", [1], var_auto__95__count);
  var string2957 = new GraceString(" = load %object* ");
  var opresult2959 = callmethod(opresult2956, "++", [1], string2957);
  var opresult2961 = callmethod(opresult2959, "++", [1], var_modg);
  lineNumber = 892
  var call2962 = callmethod(this,"out", [1], opresult2961);
  lineNumber = 893
  lineNumber = 892
  var string2963 = new GraceString("  %cmp");
  var opresult2965 = callmethod(string2963, "++", [1], var_auto__95__count);
  var string2966 = new GraceString(" = icmp ne %object %tmp");
  var opresult2968 = callmethod(opresult2965, "++", [1], string2966);
  var opresult2970 = callmethod(opresult2968, "++", [1], var_auto__95__count);
  lineNumber = 893
  var string2971 = new GraceString(", null");
  var opresult2973 = callmethod(opresult2970, "++", [1], string2971);
  lineNumber = 894
  var call2974 = callmethod(this,"out", [1], opresult2973);
  lineNumber = 895
  lineNumber = 894
  var string2975 = new GraceString("  br i1 %cmp");
  var opresult2977 = callmethod(string2975, "++", [1], var_auto__95__count);
  var string2978 = new GraceString(", label %\"import.");
  var opresult2980 = callmethod(opresult2977, "++", [1], string2978);
  var opresult2982 = callmethod(opresult2980, "++", [1], var_nm);
  lineNumber = 895
  var string2983 = new GraceString(".already\", label %\"import.");
  var opresult2985 = callmethod(opresult2982, "++", [1], string2983);
  var opresult2987 = callmethod(opresult2985, "++", [1], var_nm);
  var string2988 = new GraceString(".define\"");
  var opresult2990 = callmethod(opresult2987, "++", [1], string2988);
  lineNumber = 896
  var call2991 = callmethod(this,"out", [1], opresult2990);
  var string2992 = new GraceString("import.");
  var opresult2994 = callmethod(string2992, "++", [1], var_nm);
  var string2995 = new GraceString(".already");
  var opresult2997 = callmethod(opresult2994, "++", [1], string2995);
  lineNumber = 897
  var call2998 = callmethod(this,"beginblock", [1], opresult2997);
  var string2999 = new GraceString("  %alreadymod");
  var opresult3001 = callmethod(string2999, "++", [1], var_auto__95__count);
  var string3002 = new GraceString(" = load %object* ");
  var opresult3004 = callmethod(opresult3001, "++", [1], string3002);
  var opresult3006 = callmethod(opresult3004, "++", [1], var_modg);
  lineNumber = 898
  var call3007 = callmethod(this,"out", [1], opresult3006);
  var string3008 = new GraceString("  br label %\"import.");
  var opresult3010 = callmethod(string3008, "++", [1], var_nm);
  var string3011 = new GraceString(".end\"");
  var opresult3013 = callmethod(opresult3010, "++", [1], string3011);
  lineNumber = 899
  var call3014 = callmethod(this,"out", [1], opresult3013);
  var string3015 = new GraceString("import.");
  var opresult3017 = callmethod(string3015, "++", [1], var_nm);
  var string3018 = new GraceString(".define");
  var opresult3020 = callmethod(opresult3017, "++", [1], string3018);
  lineNumber = 900
  var call3021 = callmethod(this,"beginblock", [1], opresult3020);
  lineNumber = 910
  lineNumber = 900
  var call3023 = callmethod(var_staticmodules,"contains", [1], var_nm);
  if (Grace_isTrue(call3023)) {
  lineNumber = 902
  lineNumber = 901
  var string3024 = new GraceString("  %\"tmp_mod_");
  var opresult3026 = callmethod(string3024, "++", [1], var_nm);
  var string3027 = new GraceString("\" = call %object @module_");
  var opresult3029 = callmethod(opresult3026, "++", [1], string3027);
  lineNumber = 902
  var opresult3031 = callmethod(opresult3029, "++", [1], var_nm);
  var string3032 = new GraceString("_init()");
  var opresult3034 = callmethod(opresult3031, "++", [1], string3032);
  lineNumber = 903
  var call3035 = callmethod(this,"out", [1], opresult3034);
  var if3022 = call3035;
  } else {
  lineNumber = 905
  lineNumber = 904
  var string3036 = new GraceString("@\".str.module.");
  var opresult3038 = callmethod(string3036, "++", [1], var_nm);
  var string3039 = new GraceString("\"");
  var opresult3041 = callmethod(opresult3038, "++", [1], string3039);
  var var_mn = opresult3041;
  lineNumber = 905
  lineNumber = 1
  lineNumber = 905
  var string3042 = new GraceString("utf-8");
  var call3043 = callmethod(var_nm,"encode", [1], string3042);
  var call3044 = callmethod(call3043,"size", [0]);
  var opresult3046 = callmethod(call3044, "+", [1], new GraceNum(1));
  var var_l = opresult3046;
  lineNumber = 907
  lineNumber = 908
  lineNumber = 906
  var string3047 = new GraceString(" = private unnamed_addr constant [");
  var opresult3049 = callmethod(var_mn, "++", [1], string3047);
  var opresult3051 = callmethod(opresult3049, "++", [1], var_l);
  var string3052 = new GraceString(" x i8] ");
  var opresult3054 = callmethod(opresult3051, "++", [1], string3052);
  lineNumber = 907
  var string3055 = new GraceString(" c\"");
  var opresult3057 = callmethod(opresult3054, "++", [1], string3055);
  lineNumber = 1
  lineNumber = 907
  var call3058 = callmethod(var_nm,"_escape", [0]);
  var opresult3060 = callmethod(opresult3057, "++", [1], call3058);
  var string3061 = new GraceString("\\00\"");
  var opresult3063 = callmethod(opresult3060, "++", [1], string3061);
  var_con = opresult3063;
  lineNumber = 908
  var call3064 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 910
  lineNumber = 909
  var string3065 = new GraceString("  %\"tmp_mod_");
  var opresult3067 = callmethod(string3065, "++", [1], var_nm);
  var string3068 = new GraceString("\" = call %object @dlmodule(i8 *");
  var opresult3070 = callmethod(opresult3067, "++", [1], string3068);
  lineNumber = 910
  var string3071 = new GraceString(" getelementptr([");
  var opresult3073 = callmethod(opresult3070, "++", [1], string3071);
  var opresult3075 = callmethod(opresult3073, "++", [1], var_l);
  var string3076 = new GraceString(" x i8]* ");
  var opresult3078 = callmethod(opresult3075, "++", [1], string3076);
  var opresult3080 = callmethod(opresult3078, "++", [1], var_mn);
  var string3081 = new GraceString(",i32 0,i32 0))");
  var opresult3083 = callmethod(opresult3080, "++", [1], string3081);
  lineNumber = 911
  var call3084 = callmethod(this,"out", [1], opresult3083);
  var if3022 = call3084;
}
  lineNumber = 913
  lineNumber = 912
  var string3085 = new GraceString("  store %object %\"tmp_mod_");
  var opresult3087 = callmethod(string3085, "++", [1], var_nm);
  lineNumber = 913
  var string3088 = new GraceString("\", %object* @\".module.");
  var opresult3090 = callmethod(opresult3087, "++", [1], string3088);
  var opresult3092 = callmethod(opresult3090, "++", [1], var_nm);
  var string3093 = new GraceString("\"");
  var opresult3095 = callmethod(opresult3092, "++", [1], string3093);
  lineNumber = 914
  var call3096 = callmethod(this,"out", [1], opresult3095);
  lineNumber = 915
  lineNumber = 914
  var string3097 = new GraceString("  store %object %\"tmp_mod_");
  var opresult3099 = callmethod(string3097, "++", [1], var_nm);
  var string3100 = new GraceString("\", %object* @\".module.");
  var opresult3102 = callmethod(opresult3099, "++", [1], string3100);
  lineNumber = 915
  var opresult3104 = callmethod(opresult3102, "++", [1], var_nm);
  var string3105 = new GraceString("\"");
  var opresult3107 = callmethod(opresult3104, "++", [1], string3105);
  lineNumber = 916
  var call3108 = callmethod(this,"out", [1], opresult3107);
  var string3109 = new GraceString("  br label %\"import.");
  var opresult3111 = callmethod(string3109, "++", [1], var_nm);
  var string3112 = new GraceString(".end\"");
  var opresult3114 = callmethod(opresult3111, "++", [1], string3112);
  lineNumber = 917
  var call3115 = callmethod(this,"out", [1], opresult3114);
  var string3116 = new GraceString("import.");
  var opresult3118 = callmethod(string3116, "++", [1], var_nm);
  var string3119 = new GraceString(".end");
  var opresult3121 = callmethod(opresult3118, "++", [1], string3119);
  lineNumber = 918
  var call3122 = callmethod(this,"beginblock", [1], opresult3121);
  lineNumber = 920
  lineNumber = 918
  var string3123 = new GraceString("  %\"tmp_modv_");
  var opresult3125 = callmethod(string3123, "++", [1], var_nm);
  var string3126 = new GraceString("\" = phi %object [%alreadymod");
  var opresult3128 = callmethod(opresult3125, "++", [1], string3126);
  lineNumber = 919
  var opresult3130 = callmethod(opresult3128, "++", [1], var_auto__95__count);
  var string3131 = new GraceString(", %\"import.");
  var opresult3133 = callmethod(opresult3130, "++", [1], string3131);
  var opresult3135 = callmethod(opresult3133, "++", [1], var_nm);
  var string3136 = new GraceString(".already\"], ");
  var opresult3138 = callmethod(opresult3135, "++", [1], string3136);
  lineNumber = 920
  var string3139 = new GraceString("[%\"tmp_mod_");
  var opresult3141 = callmethod(opresult3138, "++", [1], string3139);
  var opresult3143 = callmethod(opresult3141, "++", [1], var_nm);
  var string3144 = new GraceString("\", %\"import.");
  var opresult3146 = callmethod(opresult3143, "++", [1], string3144);
  var opresult3148 = callmethod(opresult3146, "++", [1], var_nm);
  var string3149 = new GraceString(".define\"]");
  var opresult3151 = callmethod(opresult3148, "++", [1], string3149);
  lineNumber = 921
  var call3152 = callmethod(this,"out", [1], opresult3151);
  var string3153 = new GraceString("  %\"var_");
  var opresult3155 = callmethod(string3153, "++", [1], var_nm);
  var string3156 = new GraceString("\" = call %object* @alloc_var()");
  var opresult3158 = callmethod(opresult3155, "++", [1], string3156);
  lineNumber = 922
  var call3159 = callmethod(this,"out", [1], opresult3158);
  lineNumber = 923
  lineNumber = 922
  var string3160 = new GraceString("  store %object %\"tmp_modv_");
  var opresult3162 = callmethod(string3160, "++", [1], var_nm);
  lineNumber = 923
  var string3163 = new GraceString("\", %object* %\"var_");
  var opresult3165 = callmethod(opresult3162, "++", [1], string3163);
  var opresult3167 = callmethod(opresult3165, "++", [1], var_nm);
  var string3168 = new GraceString("\"");
  var opresult3170 = callmethod(opresult3167, "++", [1], string3168);
  lineNumber = 924
  var call3171 = callmethod(this,"out", [1], opresult3170);
  lineNumber = 925
  lineNumber = 924
  var string3172 = new GraceString("@\".module.");
  var opresult3174 = callmethod(string3172, "++", [1], var_nm);
  var string3175 = new GraceString("\" = weak global %object null");
  var opresult3177 = callmethod(opresult3174, "++", [1], string3175);
  var_con = opresult3177;
  lineNumber = 925
  var call3178 = callmethod(var_modules,"push", [1], var_nm);
  lineNumber = 926
  var call3179 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 928
  lineNumber = 927
  var string3180 = new GraceString("declare %object @\"module_");
  var opresult3182 = callmethod(string3180, "++", [1], var_nm);
  var string3183 = new GraceString("_init\"()");
  var opresult3185 = callmethod(opresult3182, "++", [1], string3183);
  var_con = opresult3185;
  lineNumber = 928
  var call3186 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 930
  lineNumber = 929
  var opresult3188 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3188;
  lineNumber = 931
  lineNumber = 1
  lineNumber = 930
  var string3189 = new GraceString("%none");
  var call3190 = callmethod(var_o,"register:=", [1], string3189);
  return call3190
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileimport"] = func2938;
  lineNumber = 941
var func3191 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 933
  lineNumber = 1
  lineNumber = 933
  var call3192 = callmethod(var_o,"value", [0]);
  lineNumber = 934
  var call3193 = callmethod(this,"compilenode", [1], call3192);
  var var_reg = call3193;
  lineNumber = 938
  lineNumber = 934
  if (Grace_isTrue(var_inBlock)) {
  lineNumber = 935
  var string3195 = new GraceString("  call void @block_return(%object %realself, %object ");
  var opresult3197 = callmethod(string3195, "++", [1], var_reg);
  var string3198 = new GraceString(")");
  var opresult3200 = callmethod(opresult3197, "++", [1], string3198);
  lineNumber = 936
  var call3201 = callmethod(this,"out", [1], opresult3200);
  var if3194 = call3201;
  } else {
  lineNumber = 937
  var string3202 = new GraceString("  ret %object ");
  var opresult3204 = callmethod(string3202, "++", [1], var_reg);
  lineNumber = 938
  var call3205 = callmethod(this,"out", [1], opresult3204);
  var string3206 = new GraceString("postret");
  var opresult3208 = callmethod(string3206, "++", [1], var_auto__95__count);
  lineNumber = 939
  var call3209 = callmethod(this,"beginblock", [1], opresult3208);
  var if3194 = call3209;
}
  lineNumber = 941
  lineNumber = 1
  lineNumber = 940
  var string3210 = new GraceString("%none");
  var call3211 = callmethod(var_o,"register:=", [1], string3210);
  return call3211
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilereturn"] = func3191;
  lineNumber = 957
var func3212 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 944
  lineNumber = 1
  lineNumber = 943
  var call3213 = callmethod(var_o,"value", [0]);
  var var_cnum = call3213;
  lineNumber = 945
  lineNumber = 944
  var bool3214 = new GraceBoolean(false)
  var var_havedot = bool3214;
  lineNumber = 948
  lineNumber = 945
  lineNumber = 948
  var block3215 = Grace_allocObject();
  block3215.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3215.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3215.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3215.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3215.receiver = this;
  block3215.className = 'block<genllvm30:948>';
  block3215.real = function(
var_c
) {
  lineNumber = 949
  lineNumber = 946
  var string3217 = new GraceString(".");
  var opresult3219 = callmethod(var_c, "==", [1], string3217);
  if (Grace_isTrue(opresult3219)) {
  lineNumber = 948
  lineNumber = 947
  var bool3220 = new GraceBoolean(true)
  var_havedot = bool3220;
  var if3216 = bool3220;
}
  return if3216;
};
  var call3221 = callmethod(Grace_prelude,"for()do", [1, 1], var_cnum, block3215);
  lineNumber = 952
  lineNumber = 953
  lineNumber = 1
  lineNumber = 950
  var call3223 = callmethod(var_havedot,"not", [0]);
  if (Grace_isTrue(call3223)) {
  lineNumber = 952
  lineNumber = 951
  var string3224 = new GraceString(".0");
  var opresult3226 = callmethod(var_cnum, "++", [1], string3224);
  var_cnum = opresult3226;
  var if3222 = opresult3226;
}
  lineNumber = 954
  lineNumber = 953
  var string3227 = new GraceString("  %num");
  var opresult3229 = callmethod(string3227, "++", [1], var_auto__95__count);
  var string3230 = new GraceString(" = call %object @alloc_Float64(double ");
  var opresult3232 = callmethod(opresult3229, "++", [1], string3230);
  lineNumber = 954
  var opresult3234 = callmethod(opresult3232, "++", [1], var_cnum);
  var string3235 = new GraceString(")");
  var opresult3237 = callmethod(opresult3234, "++", [1], string3235);
  lineNumber = 955
  var call3238 = callmethod(this,"out", [1], opresult3237);
  lineNumber = 956
  lineNumber = 1
  lineNumber = 956
  lineNumber = 955
  var string3239 = new GraceString("%num");
  var opresult3241 = callmethod(string3239, "++", [1], var_auto__95__count);
  var call3242 = callmethod(var_o,"register:=", [1], opresult3241);
  lineNumber = 957
  lineNumber = 956
  var opresult3244 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3244;
  return opresult3244
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilenum"] = func3212;
  lineNumber = 1113
var func3245 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 962
  lineNumber = 964
  lineNumber = 959
  lineNumber = 964
  lineNumber = 1
  lineNumber = 959
  var call3247 = callmethod(var_o,"line", [0]);
  var opresult3249 = callmethod(var_linenum, "/=", [1], call3247);
  if (Grace_isTrue(opresult3249)) {
  lineNumber = 961
  lineNumber = 1
  lineNumber = 960
  var call3250 = callmethod(var_o,"line", [0]);
  var_linenum = call3250;
  lineNumber = 961
  var string3251 = new GraceString("; Begin line ");
  var opresult3253 = callmethod(string3251, "++", [1], var_linenum);
  lineNumber = 962
  var call3254 = callmethod(this,"out", [1], opresult3253);
  var string3255 = new GraceString("  call void @setline(i32 ");
  var opresult3257 = callmethod(string3255, "++", [1], var_linenum);
  var string3258 = new GraceString(")");
  var opresult3260 = callmethod(opresult3257, "++", [1], string3258);
  lineNumber = 963
  var call3261 = callmethod(this,"out", [1], opresult3260);
  var if3246 = call3261;
}
  lineNumber = 965
  lineNumber = 967
  lineNumber = 1
  lineNumber = 964
  var call3263 = callmethod(var_o,"kind", [0]);
  var string3264 = new GraceString("num");
  var opresult3266 = callmethod(call3263, "==", [1], string3264);
  if (Grace_isTrue(opresult3266)) {
  lineNumber = 965
  lineNumber = 966
  var call3267 = callmethod(this,"compilenum", [1], var_o);
  var if3262 = call3267;
}
  lineNumber = 968
  lineNumber = 967
  var string3268 = new GraceString("");
  var var_l = string3268;
  lineNumber = 1004
  lineNumber = 1005
  lineNumber = 1
  lineNumber = 968
  var call3270 = callmethod(var_o,"kind", [0]);
  var string3271 = new GraceString("string");
  var opresult3273 = callmethod(call3270, "==", [1], string3271);
  if (Grace_isTrue(opresult3273)) {
  lineNumber = 969
  lineNumber = 1
  lineNumber = 969
  var call3274 = callmethod(var_o,"value", [0]);
  var call3275 = Grace_length(call3274);
  var_l = call3275;
  lineNumber = 971
  lineNumber = 970
  var opresult3277 = callmethod(var_l, "+", [1], new GraceNum(1));
  var_l = opresult3277;
  lineNumber = 971
  lineNumber = 1
  lineNumber = 971
  lineNumber = 1
  lineNumber = 971
  lineNumber = 1
  lineNumber = 971
  var call3278 = callmethod(var_o,"value", [0]);
  var call3279 = callmethod(call3278,"_escape", [0]);
  var call3280 = callmethod(var_o,"value:=", [1], call3279);
  lineNumber = 973
  lineNumber = 972
  var string3281 = new GraceString("  %tmp");
  var opresult3283 = callmethod(string3281, "++", [1], var_auto__95__count);
  var string3284 = new GraceString(" = load %object* @.strlit");
  var opresult3286 = callmethod(opresult3283, "++", [1], string3284);
  lineNumber = 973
  var opresult3288 = callmethod(opresult3286, "++", [1], var_auto__95__count);
  lineNumber = 974
  var call3289 = callmethod(this,"out", [1], opresult3288);
  lineNumber = 975
  lineNumber = 974
  var string3290 = new GraceString("  %cmp");
  var opresult3292 = callmethod(string3290, "++", [1], var_auto__95__count);
  var string3293 = new GraceString(" = icmp ne %object %tmp");
  var opresult3295 = callmethod(opresult3292, "++", [1], string3293);
  lineNumber = 975
  var opresult3297 = callmethod(opresult3295, "++", [1], var_auto__95__count);
  var string3298 = new GraceString(", null");
  var opresult3300 = callmethod(opresult3297, "++", [1], string3298);
  lineNumber = 976
  var call3301 = callmethod(this,"out", [1], opresult3300);
  lineNumber = 978
  lineNumber = 976
  var string3302 = new GraceString("  br i1 %cmp");
  var opresult3304 = callmethod(string3302, "++", [1], var_auto__95__count);
  var string3305 = new GraceString(", label %strlit");
  var opresult3307 = callmethod(opresult3304, "++", [1], string3305);
  lineNumber = 977
  var opresult3309 = callmethod(opresult3307, "++", [1], var_auto__95__count);
  var string3310 = new GraceString(".already, label %strlit");
  var opresult3312 = callmethod(opresult3309, "++", [1], string3310);
  lineNumber = 978
  var opresult3314 = callmethod(opresult3312, "++", [1], var_auto__95__count);
  var string3315 = new GraceString(".define");
  var opresult3317 = callmethod(opresult3314, "++", [1], string3315);
  lineNumber = 979
  var call3318 = callmethod(this,"out", [1], opresult3317);
  var string3319 = new GraceString("strlit");
  var opresult3321 = callmethod(string3319, "++", [1], var_auto__95__count);
  var string3322 = new GraceString(".already");
  var opresult3324 = callmethod(opresult3321, "++", [1], string3322);
  lineNumber = 980
  var call3325 = callmethod(this,"beginblock", [1], opresult3324);
  lineNumber = 981
  lineNumber = 980
  var string3326 = new GraceString("  %alreadystring");
  var opresult3328 = callmethod(string3326, "++", [1], var_auto__95__count);
  var string3329 = new GraceString(" = load %object* @.strlit");
  var opresult3331 = callmethod(opresult3328, "++", [1], string3329);
  lineNumber = 981
  var opresult3333 = callmethod(opresult3331, "++", [1], var_auto__95__count);
  lineNumber = 982
  var call3334 = callmethod(this,"out", [1], opresult3333);
  var string3335 = new GraceString("  br label %strlit");
  var opresult3337 = callmethod(string3335, "++", [1], var_auto__95__count);
  var string3338 = new GraceString(".end");
  var opresult3340 = callmethod(opresult3337, "++", [1], string3338);
  lineNumber = 983
  var call3341 = callmethod(this,"out", [1], opresult3340);
  var string3342 = new GraceString("strlit");
  var opresult3344 = callmethod(string3342, "++", [1], var_auto__95__count);
  var string3345 = new GraceString(".define");
  var opresult3347 = callmethod(opresult3344, "++", [1], string3345);
  lineNumber = 984
  var call3348 = callmethod(this,"beginblock", [1], opresult3347);
  var string3349 = new GraceString("  %str");
  var opresult3351 = callmethod(string3349, "++", [1], var_auto__95__count);
  var string3352 = new GraceString(" = getelementptr [");
  var opresult3354 = callmethod(opresult3351, "++", [1], string3352);
  var opresult3356 = callmethod(opresult3354, "++", [1], var_l);
  var string3357 = new GraceString(" x i8]* @.str");
  var opresult3359 = callmethod(opresult3356, "++", [1], string3357);
  lineNumber = 1
  lineNumber = 984
  var call3360 = callmethod(var_constants,"size", [0]);
  var opresult3362 = callmethod(opresult3359, "++", [1], call3360);
  var string3363 = new GraceString(", i32 0, i32 0");
  var opresult3365 = callmethod(opresult3362, "++", [1], string3363);
  lineNumber = 985
  var call3366 = callmethod(this,"out", [1], opresult3365);
  lineNumber = 987
  lineNumber = 985
  var string3367 = new GraceString("  %defstring");
  var opresult3369 = callmethod(string3367, "++", [1], var_auto__95__count);
  var string3370 = new GraceString(" = call %object ");
  var opresult3372 = callmethod(opresult3369, "++", [1], string3370);
  lineNumber = 986
  var string3373 = new GraceString("@alloc_String(i8* ");
  var opresult3375 = callmethod(opresult3372, "++", [1], string3373);
  lineNumber = 987
  var string3376 = new GraceString("%str");
  var opresult3378 = callmethod(opresult3375, "++", [1], string3376);
  var opresult3380 = callmethod(opresult3378, "++", [1], var_auto__95__count);
  var string3381 = new GraceString(")");
  var opresult3383 = callmethod(opresult3380, "++", [1], string3381);
  lineNumber = 988
  var call3384 = callmethod(this,"out", [1], opresult3383);
  lineNumber = 989
  lineNumber = 988
  var string3385 = new GraceString("  store %object %defstring");
  var opresult3387 = callmethod(string3385, "++", [1], var_auto__95__count);
  var string3388 = new GraceString(", %object* ");
  var opresult3390 = callmethod(opresult3387, "++", [1], string3388);
  lineNumber = 989
  var string3391 = new GraceString("@.strlit");
  var opresult3393 = callmethod(opresult3390, "++", [1], string3391);
  var opresult3395 = callmethod(opresult3393, "++", [1], var_auto__95__count);
  lineNumber = 990
  var call3396 = callmethod(this,"out", [1], opresult3395);
  var string3397 = new GraceString("br label %strlit");
  var opresult3399 = callmethod(string3397, "++", [1], var_auto__95__count);
  var string3400 = new GraceString(".end");
  var opresult3402 = callmethod(opresult3399, "++", [1], string3400);
  lineNumber = 991
  var call3403 = callmethod(this,"out", [1], opresult3402);
  var string3404 = new GraceString("strlit");
  var opresult3406 = callmethod(string3404, "++", [1], var_auto__95__count);
  var string3407 = new GraceString(".end");
  var opresult3409 = callmethod(opresult3406, "++", [1], string3407);
  lineNumber = 992
  var call3410 = callmethod(this,"beginblock", [1], opresult3409);
  lineNumber = 995
  lineNumber = 992
  var string3411 = new GraceString(" %string");
  var opresult3413 = callmethod(string3411, "++", [1], var_auto__95__count);
  var string3414 = new GraceString(" = phi %object [%alreadystring");
  var opresult3416 = callmethod(opresult3413, "++", [1], string3414);
  lineNumber = 993
  var opresult3418 = callmethod(opresult3416, "++", [1], var_auto__95__count);
  var string3419 = new GraceString(", %strlit");
  var opresult3421 = callmethod(opresult3418, "++", [1], string3419);
  var opresult3423 = callmethod(opresult3421, "++", [1], var_auto__95__count);
  var string3424 = new GraceString(".already], ");
  var opresult3426 = callmethod(opresult3423, "++", [1], string3424);
  lineNumber = 994
  var string3427 = new GraceString("[%defstring");
  var opresult3429 = callmethod(opresult3426, "++", [1], string3427);
  var opresult3431 = callmethod(opresult3429, "++", [1], var_auto__95__count);
  var string3432 = new GraceString(", %strlit");
  var opresult3434 = callmethod(opresult3431, "++", [1], string3432);
  var opresult3436 = callmethod(opresult3434, "++", [1], var_auto__95__count);
  lineNumber = 995
  var string3437 = new GraceString(".define]");
  var opresult3439 = callmethod(opresult3436, "++", [1], string3437);
  lineNumber = 996
  var call3440 = callmethod(this,"out", [1], opresult3439);
  lineNumber = 998
  lineNumber = 996
  var string3441 = new GraceString("@.str");
  lineNumber = 998
  lineNumber = 1
  lineNumber = 996
  var call3442 = callmethod(var_constants,"size", [0]);
  var opresult3444 = callmethod(string3441, "++", [1], call3442);
  var string3445 = new GraceString(" = private unnamed_addr ");
  var opresult3447 = callmethod(opresult3444, "++", [1], string3445);
  lineNumber = 997
  var string3448 = new GraceString("constant [");
  var opresult3450 = callmethod(opresult3447, "++", [1], string3448);
  var opresult3452 = callmethod(opresult3450, "++", [1], var_l);
  var string3453 = new GraceString(" x i8] c\"");
  var opresult3455 = callmethod(opresult3452, "++", [1], string3453);
  lineNumber = 998
  lineNumber = 1
  lineNumber = 997
  var call3456 = callmethod(var_o,"value", [0]);
  var opresult3458 = callmethod(opresult3455, "++", [1], call3456);
  var string3459 = new GraceString("\\00\"");
  var opresult3461 = callmethod(opresult3458, "++", [1], string3459);
  var var_con = opresult3461;
  lineNumber = 998
  var call3462 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 1001
  lineNumber = 999
  var string3463 = new GraceString("@.strlit");
  var opresult3465 = callmethod(string3463, "++", [1], var_auto__95__count);
  lineNumber = 1000
  var string3466 = new GraceString(" = private global %object null");
  var opresult3468 = callmethod(opresult3465, "++", [1], string3466);
  var_con = opresult3468;
  lineNumber = 1001
  var call3469 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 1003
  lineNumber = 1
  lineNumber = 1003
  lineNumber = 1002
  var string3470 = new GraceString("%string");
  var opresult3472 = callmethod(string3470, "++", [1], var_auto__95__count);
  var call3473 = callmethod(var_o,"register:=", [1], opresult3472);
  lineNumber = 1004
  lineNumber = 1003
  var opresult3475 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3475;
  var if3269 = opresult3475;
}
  lineNumber = 1006
  lineNumber = 1008
  lineNumber = 1
  lineNumber = 1005
  var call3477 = callmethod(var_o,"kind", [0]);
  var string3478 = new GraceString("index");
  var opresult3480 = callmethod(call3477, "==", [1], string3478);
  if (Grace_isTrue(opresult3480)) {
  lineNumber = 1006
  lineNumber = 1007
  var call3481 = callmethod(this,"compileindex", [1], var_o);
  var if3476 = call3481;
}
  lineNumber = 1009
  lineNumber = 1011
  lineNumber = 1
  lineNumber = 1008
  var call3483 = callmethod(var_o,"kind", [0]);
  var string3484 = new GraceString("octets");
  var opresult3486 = callmethod(call3483, "==", [1], string3484);
  if (Grace_isTrue(opresult3486)) {
  lineNumber = 1009
  lineNumber = 1010
  var call3487 = callmethod(this,"compileoctets", [1], var_o);
  var if3482 = call3487;
}
  lineNumber = 1012
  lineNumber = 1014
  lineNumber = 1
  lineNumber = 1011
  var call3489 = callmethod(var_o,"kind", [0]);
  var string3490 = new GraceString("import");
  var opresult3492 = callmethod(call3489, "==", [1], string3490);
  if (Grace_isTrue(opresult3492)) {
  lineNumber = 1012
  lineNumber = 1013
  var call3493 = callmethod(this,"compileimport", [1], var_o);
  var if3488 = call3493;
}
  lineNumber = 1015
  lineNumber = 1017
  lineNumber = 1
  lineNumber = 1014
  var call3495 = callmethod(var_o,"kind", [0]);
  var string3496 = new GraceString("return");
  var opresult3498 = callmethod(call3495, "==", [1], string3496);
  if (Grace_isTrue(opresult3498)) {
  lineNumber = 1015
  lineNumber = 1016
  var call3499 = callmethod(this,"compilereturn", [1], var_o);
  var if3494 = call3499;
}
  lineNumber = 1018
  lineNumber = 1020
  lineNumber = 1
  lineNumber = 1017
  var call3501 = callmethod(var_o,"kind", [0]);
  var string3502 = new GraceString("generic");
  var opresult3504 = callmethod(call3501, "==", [1], string3502);
  if (Grace_isTrue(opresult3504)) {
  lineNumber = 1018
  lineNumber = 1
  lineNumber = 1018
  lineNumber = 1
  lineNumber = 1018
  var call3505 = callmethod(var_o,"value", [0]);
  lineNumber = 1019
  var call3506 = callmethod(this,"compilenode", [1], call3505);
  lineNumber = 1018
  var call3507 = callmethod(var_o,"register:=", [1], call3506);
  var if3500 = call3507;
}
  lineNumber = 1031
  lineNumber = 1033
  lineNumber = 1
  lineNumber = 1020
  var call3509 = callmethod(var_o,"kind", [0]);
  var string3510 = new GraceString("identifier");
  var opresult3512 = callmethod(call3509, "==", [1], string3510);
  lineNumber = 1033
  lineNumber = 1
  lineNumber = 1021
  var call3513 = callmethod(var_o,"value", [0]);
  var string3514 = new GraceString("true");
  var opresult3516 = callmethod(call3513, "==", [1], string3514);
  lineNumber = 1033
  lineNumber = 1
  lineNumber = 1021
  var call3517 = callmethod(var_o,"value", [0]);
  var string3518 = new GraceString("false");
  var opresult3520 = callmethod(call3517, "==", [1], string3518);
  var opresult3522 = callmethod(opresult3516, "|", [1], opresult3520);
  var opresult3524 = callmethod(opresult3512, "&", [1], opresult3522);
  if (Grace_isTrue(opresult3524)) {
  lineNumber = 1023
  lineNumber = 1022
  var var_val = new GraceNum(0);
  lineNumber = 1025
  lineNumber = 1026
  lineNumber = 1
  lineNumber = 1023
  var call3526 = callmethod(var_o,"value", [0]);
  var string3527 = new GraceString("true");
  var opresult3529 = callmethod(call3526, "==", [1], string3527);
  if (Grace_isTrue(opresult3529)) {
  lineNumber = 1025
  lineNumber = 1024
  var_val = new GraceNum(1);
  var if3525 = new GraceNum(1);
}
  lineNumber = 1027
  lineNumber = 1026
  var string3530 = new GraceString("  %bool");
  var opresult3532 = callmethod(string3530, "++", [1], var_auto__95__count);
  var string3533 = new GraceString(" = call %object ");
  var opresult3535 = callmethod(opresult3532, "++", [1], string3533);
  lineNumber = 1027
  var string3536 = new GraceString("@alloc_Boolean(i32 ");
  var opresult3538 = callmethod(opresult3535, "++", [1], string3536);
  var opresult3540 = callmethod(opresult3538, "++", [1], var_val);
  var string3541 = new GraceString(")");
  var opresult3543 = callmethod(opresult3540, "++", [1], string3541);
  lineNumber = 1028
  var call3544 = callmethod(this,"out", [1], opresult3543);
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1029
  lineNumber = 1028
  var string3545 = new GraceString("%bool");
  var opresult3547 = callmethod(string3545, "++", [1], var_auto__95__count);
  var call3548 = callmethod(var_o,"register:=", [1], opresult3547);
  lineNumber = 1030
  lineNumber = 1029
  var opresult3550 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3550;
  var if3508 = opresult3550;
  } else {
  lineNumber = 1031
  lineNumber = 1033
  lineNumber = 1
  lineNumber = 1030
  var call3552 = callmethod(var_o,"kind", [0]);
  var string3553 = new GraceString("identifier");
  var opresult3555 = callmethod(call3552, "==", [1], string3553);
  if (Grace_isTrue(opresult3555)) {
  lineNumber = 1031
  lineNumber = 1032
  var call3556 = callmethod(this,"compileidentifier", [1], var_o);
  var if3551 = call3556;
}
  var if3508 = if3551;
}
  lineNumber = 1034
  lineNumber = 1036
  lineNumber = 1
  lineNumber = 1033
  var call3558 = callmethod(var_o,"kind", [0]);
  var string3559 = new GraceString("defdec");
  var opresult3561 = callmethod(call3558, "==", [1], string3559);
  if (Grace_isTrue(opresult3561)) {
  lineNumber = 1034
  lineNumber = 1035
  var call3562 = callmethod(this,"compiledefdec", [1], var_o);
  var if3557 = call3562;
}
  lineNumber = 1037
  lineNumber = 1039
  lineNumber = 1
  lineNumber = 1036
  var call3564 = callmethod(var_o,"kind", [0]);
  var string3565 = new GraceString("vardec");
  var opresult3567 = callmethod(call3564, "==", [1], string3565);
  if (Grace_isTrue(opresult3567)) {
  lineNumber = 1037
  lineNumber = 1038
  var call3568 = callmethod(this,"compilevardec", [1], var_o);
  var if3563 = call3568;
}
  lineNumber = 1040
  lineNumber = 1042
  lineNumber = 1
  lineNumber = 1039
  var call3570 = callmethod(var_o,"kind", [0]);
  var string3571 = new GraceString("block");
  var opresult3573 = callmethod(call3570, "==", [1], string3571);
  if (Grace_isTrue(opresult3573)) {
  lineNumber = 1040
  lineNumber = 1041
  var call3574 = callmethod(this,"compileblock", [1], var_o);
  var if3569 = call3574;
}
  lineNumber = 1045
  lineNumber = 1046
  lineNumber = 1
  lineNumber = 1042
  var call3576 = callmethod(var_o,"kind", [0]);
  var string3577 = new GraceString("method");
  var opresult3579 = callmethod(call3576, "==", [1], string3577);
  if (Grace_isTrue(opresult3579)) {
  lineNumber = 1043
  var string3580 = new GraceString("%self");
  lineNumber = 1044
  var call3581 = callmethod(this,"compilemethod", [3], var_o, string3580, var_topLevelMethodPos);
  lineNumber = 1045
  lineNumber = 1044
  var opresult3583 = callmethod(var_topLevelMethodPos, "+", [1], new GraceNum(1));
  var_topLevelMethodPos = opresult3583;
  var if3575 = opresult3583;
}
  lineNumber = 1047
  lineNumber = 1049
  lineNumber = 1
  lineNumber = 1046
  var call3585 = callmethod(var_o,"kind", [0]);
  var string3586 = new GraceString("array");
  var opresult3588 = callmethod(call3585, "==", [1], string3586);
  if (Grace_isTrue(opresult3588)) {
  lineNumber = 1047
  lineNumber = 1048
  var call3589 = callmethod(this,"compilearray", [1], var_o);
  var if3584 = call3589;
}
  lineNumber = 1050
  lineNumber = 1052
  lineNumber = 1
  lineNumber = 1049
  var call3591 = callmethod(var_o,"kind", [0]);
  var string3592 = new GraceString("bind");
  var opresult3594 = callmethod(call3591, "==", [1], string3592);
  if (Grace_isTrue(opresult3594)) {
  lineNumber = 1050
  lineNumber = 1051
  var call3595 = callmethod(this,"compilebind", [1], var_o);
  var if3590 = call3595;
}
  lineNumber = 1053
  lineNumber = 1055
  lineNumber = 1
  lineNumber = 1052
  var call3597 = callmethod(var_o,"kind", [0]);
  var string3598 = new GraceString("while");
  var opresult3600 = callmethod(call3597, "==", [1], string3598);
  if (Grace_isTrue(opresult3600)) {
  lineNumber = 1053
  lineNumber = 1054
  var call3601 = callmethod(this,"compilewhile", [1], var_o);
  var if3596 = call3601;
}
  lineNumber = 1056
  lineNumber = 1058
  lineNumber = 1
  lineNumber = 1055
  var call3603 = callmethod(var_o,"kind", [0]);
  var string3604 = new GraceString("if");
  var opresult3606 = callmethod(call3603, "==", [1], string3604);
  if (Grace_isTrue(opresult3606)) {
  lineNumber = 1056
  lineNumber = 1057
  var call3607 = callmethod(this,"compileif", [1], var_o);
  var if3602 = call3607;
}
  lineNumber = 1059
  lineNumber = 1061
  lineNumber = 1
  lineNumber = 1058
  var call3609 = callmethod(var_o,"kind", [0]);
  var string3610 = new GraceString("class");
  var opresult3612 = callmethod(call3609, "==", [1], string3610);
  if (Grace_isTrue(opresult3612)) {
  lineNumber = 1059
  lineNumber = 1060
  var call3613 = callmethod(this,"compileclass", [1], var_o);
  var if3608 = call3613;
}
  lineNumber = 1062
  lineNumber = 1064
  lineNumber = 1
  lineNumber = 1061
  var call3615 = callmethod(var_o,"kind", [0]);
  var string3616 = new GraceString("object");
  var opresult3618 = callmethod(call3615, "==", [1], string3616);
  if (Grace_isTrue(opresult3618)) {
  lineNumber = 1062
  var string3619 = new GraceString("%self");
  lineNumber = 1063
  var call3620 = callmethod(this,"compileobject", [2], var_o, string3619);
  var if3614 = call3620;
}
  lineNumber = 1065
  lineNumber = 1067
  lineNumber = 1
  lineNumber = 1064
  var call3622 = callmethod(var_o,"kind", [0]);
  var string3623 = new GraceString("member");
  var opresult3625 = callmethod(call3622, "==", [1], string3623);
  if (Grace_isTrue(opresult3625)) {
  lineNumber = 1065
  lineNumber = 1066
  var call3626 = callmethod(this,"compilemember", [1], var_o);
  var if3621 = call3626;
}
  lineNumber = 1068
  lineNumber = 1070
  lineNumber = 1
  lineNumber = 1067
  var call3628 = callmethod(var_o,"kind", [0]);
  var string3629 = new GraceString("for");
  var opresult3631 = callmethod(call3628, "==", [1], string3629);
  if (Grace_isTrue(opresult3631)) {
  lineNumber = 1068
  lineNumber = 1069
  var call3632 = callmethod(this,"compilefor", [1], var_o);
  var if3627 = call3632;
}
  lineNumber = 1106
  lineNumber = 1109
  lineNumber = 1
  lineNumber = 1070
  var call3634 = callmethod(var_o,"kind", [0]);
  var string3635 = new GraceString("call");
  var opresult3637 = callmethod(call3634, "==", [1], string3635);
  if (Grace_isTrue(opresult3637)) {
  lineNumber = 1106
  lineNumber = 1108
  lineNumber = 1
  lineNumber = 1108
  lineNumber = 1
  lineNumber = 1071
  var call3639 = callmethod(var_o,"value", [0]);
  var call3640 = callmethod(call3639,"value", [0]);
  var string3641 = new GraceString("print");
  var opresult3643 = callmethod(call3640, "==", [1], string3641);
  if (Grace_isTrue(opresult3643)) {
  lineNumber = 1073
  var array3644 = new GraceList([
]);

  var var_args = array3644;
  lineNumber = 1075
  lineNumber = 1073
  lineNumber = 1
  lineNumber = 1073
  var call3645 = callmethod(var_o,"with", [0]);
  lineNumber = 1075
  var block3646 = Grace_allocObject();
  block3646.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3646.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3646.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3646.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3646.receiver = this;
  block3646.className = 'block<genllvm30:1075>';
  block3646.real = function(
var_prm
) {
  lineNumber = 1074
  lineNumber = 1075
  var call3647 = callmethod(this,"compilenode", [1], var_prm);
  var var_r = call3647;
  var call3648 = callmethod(var_args,"push", [1], var_r);
  return call3648;
};
  var call3649 = callmethod(Grace_prelude,"for()do", [1, 1], call3645, block3646);
  lineNumber = 1078
  lineNumber = 1077
  var var_parami = new GraceNum(0);
  lineNumber = 1081
  lineNumber = 1078
  lineNumber = 1081
  var block3650 = Grace_allocObject();
  block3650.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3650.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3650.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3650.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3650.receiver = this;
  block3650.className = 'block<genllvm30:1081>';
  block3650.real = function(
var_arg
) {
  lineNumber = 1079
  var string3651 = new GraceString("  store %object ");
  var opresult3653 = callmethod(string3651, "++", [1], var_arg);
  var string3654 = new GraceString(", %object* %params_");
  var opresult3656 = callmethod(opresult3653, "++", [1], string3654);
  var opresult3658 = callmethod(opresult3656, "++", [1], var_parami);
  var string3659 = new GraceString("");
  var opresult3661 = callmethod(opresult3658, "++", [1], string3659);
  lineNumber = 1080
  var call3662 = callmethod(this,"out", [1], opresult3661);
  lineNumber = 1081
  lineNumber = 1080
  var opresult3664 = callmethod(var_parami, "+", [1], new GraceNum(1));
  var_parami = opresult3664;
  return opresult3664;
};
  var call3665 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3650);
  lineNumber = 1083
  lineNumber = 1082
  var string3666 = new GraceString("  %call");
  var opresult3668 = callmethod(string3666, "++", [1], var_auto__95__count);
  var string3669 = new GraceString(" = call %object @gracelib_print(%object null, i32 ");
  var opresult3671 = callmethod(opresult3668, "++", [1], string3669);
  lineNumber = 1083
  lineNumber = 1
  lineNumber = 1083
  var call3672 = callmethod(var_args,"size", [0]);
  var opresult3674 = callmethod(opresult3671, "++", [1], call3672);
  var string3675 = new GraceString(", %object* %params)");
  var opresult3677 = callmethod(opresult3674, "++", [1], string3675);
  lineNumber = 1084
  var call3678 = callmethod(this,"out", [1], opresult3677);
  lineNumber = 1085
  lineNumber = 1
  lineNumber = 1085
  lineNumber = 1084
  var string3679 = new GraceString("%call");
  var opresult3681 = callmethod(string3679, "++", [1], var_auto__95__count);
  var call3682 = callmethod(var_o,"register:=", [1], opresult3681);
  lineNumber = 1086
  lineNumber = 1085
  var opresult3684 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3684;
  var if3638 = opresult3684;
  } else {
  lineNumber = 1106
  lineNumber = 1099
  lineNumber = 1
  lineNumber = 1099
  lineNumber = 1
  lineNumber = 1086
  var call3686 = callmethod(var_o,"value", [0]);
  var call3687 = callmethod(call3686,"kind", [0]);
  var string3688 = new GraceString("identifier");
  var opresult3690 = callmethod(call3687, "==", [1], string3688);
  lineNumber = 1099
  lineNumber = 1
  lineNumber = 1099
  lineNumber = 1
  lineNumber = 1087
  var call3691 = callmethod(var_o,"value", [0]);
  var call3692 = callmethod(call3691,"value", [0]);
  var string3693 = new GraceString("length");
  var opresult3695 = callmethod(call3692, "==", [1], string3693);
  var opresult3697 = callmethod(opresult3690, "&", [1], opresult3695);
  if (Grace_isTrue(opresult3697)) {
  lineNumber = 1093
  lineNumber = 1095
  lineNumber = 1
  lineNumber = 1095
  lineNumber = 1
  lineNumber = 1088
  var call3699 = callmethod(var_o,"with", [0]);
  var call3700 = callmethod(call3699,"size", [0]);
  var opresult3702 = callmethod(call3700, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult3702)) {
  lineNumber = 1089
  var string3703 = new GraceString("; PP FOLLOWS");
  lineNumber = 1090
  var call3704 = callmethod(this,"out", [1], string3703);
  var call3705 = callmethod(var_o,"pretty", [1], new GraceNum(0));
  lineNumber = 1091
  var call3706 = callmethod(this,"out", [1], call3705);
  lineNumber = 1092
  lineNumber = 1091
  var string3707 = new GraceString("null");
  var_tmp = string3707;
  var if3698 = string3707;
  } else {
  lineNumber = 1093
  lineNumber = 1
  lineNumber = 1093
  lineNumber = 1
  lineNumber = 1093
  var call3708 = callmethod(var_o,"with", [0]);
  var call3709 = callmethod(call3708,"first", [0]);
  lineNumber = 1094
  var call3710 = callmethod(this,"compilenode", [1], call3709);
  var_tmp = call3710;
  var if3698 = call3710;
}
  lineNumber = 1096
  lineNumber = 1095
  var string3711 = new GraceString("  %call");
  var opresult3713 = callmethod(string3711, "++", [1], var_auto__95__count);
  var string3714 = new GraceString(" = call %object ");
  var opresult3716 = callmethod(opresult3713, "++", [1], string3714);
  lineNumber = 1096
  var string3717 = new GraceString("@gracelib_length(%object ");
  var opresult3719 = callmethod(opresult3716, "++", [1], string3717);
  var opresult3721 = callmethod(opresult3719, "++", [1], var_tmp);
  var string3722 = new GraceString(")");
  var opresult3724 = callmethod(opresult3721, "++", [1], string3722);
  lineNumber = 1097
  var call3725 = callmethod(this,"out", [1], opresult3724);
  lineNumber = 1098
  lineNumber = 1
  lineNumber = 1098
  lineNumber = 1097
  var string3726 = new GraceString("%call");
  var opresult3728 = callmethod(string3726, "++", [1], var_auto__95__count);
  var call3729 = callmethod(var_o,"register:=", [1], opresult3728);
  lineNumber = 1099
  lineNumber = 1098
  var opresult3731 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3731;
  var if3685 = opresult3731;
  } else {
  lineNumber = 1106
  lineNumber = 1105
  lineNumber = 1
  lineNumber = 1105
  lineNumber = 1
  lineNumber = 1099
  var call3733 = callmethod(var_o,"value", [0]);
  var call3734 = callmethod(call3733,"kind", [0]);
  var string3735 = new GraceString("identifier");
  var opresult3737 = callmethod(call3734, "==", [1], string3735);
  lineNumber = 1105
  lineNumber = 1
  lineNumber = 1105
  lineNumber = 1
  lineNumber = 1100
  var call3738 = callmethod(var_o,"value", [0]);
  var call3739 = callmethod(call3738,"value", [0]);
  var string3740 = new GraceString("escapestring");
  var opresult3742 = callmethod(call3739, "==", [1], string3740);
  var opresult3744 = callmethod(opresult3737, "&", [1], opresult3742);
  if (Grace_isTrue(opresult3744)) {
  lineNumber = 1102
  lineNumber = 1
  lineNumber = 1102
  lineNumber = 1
  lineNumber = 1101
  var call3745 = callmethod(var_o,"with", [0]);
  var call3746 = callmethod(call3745,"first", [0]);
  var_tmp = call3746;
  lineNumber = 1102
  var string3747 = new GraceString("_escape");
  var call3748 = callmethod(var_ast,"astmember", [2], string3747, var_tmp);
  var_tmp = call3748;
  lineNumber = 1103
  var array3749 = new GraceList([
]);

  var call3750 = callmethod(var_ast,"astcall", [2], var_tmp, array3749);
  var_tmp = call3750;
  lineNumber = 1104
  lineNumber = 1
  lineNumber = 1104
  lineNumber = 1105
  var call3751 = callmethod(this,"compilenode", [1], var_tmp);
  lineNumber = 1104
  var call3752 = callmethod(var_o,"register:=", [1], call3751);
  var if3732 = call3752;
  } else {
  lineNumber = 1106
  lineNumber = 1107
  var call3753 = callmethod(this,"compilecall", [1], var_o);
  var if3732 = call3753;
}
  var if3685 = if3732;
}
  var if3638 = if3685;
}
  var if3633 = if3638;
}
  lineNumber = 1110
  lineNumber = 1112
  lineNumber = 1
  lineNumber = 1109
  var call3755 = callmethod(var_o,"kind", [0]);
  var string3756 = new GraceString("op");
  var opresult3758 = callmethod(call3755, "==", [1], string3756);
  if (Grace_isTrue(opresult3758)) {
  lineNumber = 1110
  lineNumber = 1111
  var call3759 = callmethod(this,"compileop", [1], var_o);
  var if3754 = call3759;
}
  lineNumber = 1112
  var string3760 = new GraceString("; compilenode returning ");
  lineNumber = 1
  lineNumber = 1112
  var call3761 = callmethod(var_o,"register", [0]);
  var opresult3763 = callmethod(string3760, "++", [1], call3761);
  lineNumber = 1113
  var call3764 = callmethod(this,"out", [1], opresult3763);
  lineNumber = 1
  lineNumber = 1113
  var call3765 = callmethod(var_o,"register", [0]);
  return call3765
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilenode"] = func3245;
  lineNumber = 1434
var func3766 = function(argcv) {
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
  lineNumber = 1117
  lineNumber = 1
  lineNumber = 1116
  var call3767 = callmethod(var_sys,"argv", [0]);
  var var_argv = call3767;
  lineNumber = 1118
  var var_cmd;
  lineNumber = 1119
  lineNumber = 1118
  var_values = var_vl;
  lineNumber = 1120
  lineNumber = 1119
  var_outfile = var_of;
  lineNumber = 1121
  lineNumber = 1120
  var_modname = var_mn;
  lineNumber = 1122
  lineNumber = 1121
  var_runmode = var_rm;
  lineNumber = 1123
  lineNumber = 1122
  var_buildtype = var_bt;
  lineNumber = 1124
  lineNumber = 1123
  var_gracelibPath = var_glpath;
  lineNumber = 1125
  var array3768 = new GraceList([
]);

  var var_linkfiles = array3768;
  lineNumber = 1126
  lineNumber = 1125
  var bool3769 = new GraceBoolean(false)
  var var_ext = bool3769;
  lineNumber = 1178
  lineNumber = 1183
  lineNumber = 1126
  var string3771 = new GraceString("make");
  var opresult3773 = callmethod(var_runmode, "==", [1], string3771);
  if (Grace_isTrue(opresult3773)) {
  lineNumber = 1127
  var string3774 = new GraceString("checking imports.");
  lineNumber = 1128
  var call3775 = callmethod(this,"log_verbose", [1], string3774);
  lineNumber = 1178
  lineNumber = 1128
  lineNumber = 1178
  var block3776 = Grace_allocObject();
  block3776.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3776.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3776.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3776.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3776.receiver = this;
  block3776.className = 'block<genllvm30:1178>';
  block3776.real = function(
var_v
) {
  lineNumber = 1181
  lineNumber = 1
  lineNumber = 1129
  var call3778 = callmethod(var_v,"kind", [0]);
  var string3779 = new GraceString("import");
  var opresult3781 = callmethod(call3778, "==", [1], string3779);
  if (Grace_isTrue(opresult3781)) {
  lineNumber = 1131
  lineNumber = 1
  lineNumber = 1131
  lineNumber = 1
  lineNumber = 1130
  var call3782 = callmethod(var_v,"value", [0]);
  var call3783 = callmethod(call3782,"value", [0]);
  var var_nm = call3783;
  lineNumber = 1132
  lineNumber = 1131
  var bool3784 = new GraceBoolean(false)
  var var_exists = bool3784;
  lineNumber = 1135
  lineNumber = 1133
  lineNumber = 1136
  lineNumber = 1132
  var string3786 = new GraceString("native");
  var opresult3788 = callmethod(var_buildtype, "==", [1], string3786);
  lineNumber = 1133
  var string3789 = new GraceString(".gso");
  var opresult3791 = callmethod(var_nm, "++", [1], string3789);
  var call3792 = callmethod(var_io,"exists", [1], opresult3791);
  var opresult3794 = callmethod(opresult3788, "&", [1], call3792);
  if (Grace_isTrue(opresult3794)) {
  lineNumber = 1135
  lineNumber = 1134
  var bool3795 = new GraceBoolean(true)
  var_exists = bool3795;
  var if3785 = bool3795;
}
  lineNumber = 1141
  lineNumber = 1145
  lineNumber = 1
  lineNumber = 1136
  var call3797 = callmethod(var_exists,"not", [0]);
  if (Grace_isTrue(call3797)) {
  lineNumber = 1141
  lineNumber = 1137
  var string3799 = new GraceString(".gco");
  var opresult3801 = callmethod(var_nm, "++", [1], string3799);
  var call3802 = callmethod(var_io,"exists", [1], opresult3801);
  if (Grace_isTrue(call3802)) {
  lineNumber = 1141
  lineNumber = 1138
  var string3804 = new GraceString(".gco");
  var opresult3806 = callmethod(var_nm, "++", [1], string3804);
  var string3807 = new GraceString(".grace");
  var opresult3809 = callmethod(var_nm, "++", [1], string3807);
  var call3810 = callmethod(var_io,"newer", [2], opresult3806, opresult3809);
  if (Grace_isTrue(call3810)) {
  lineNumber = 1140
  lineNumber = 1139
  var bool3811 = new GraceBoolean(true)
  var_exists = bool3811;
  lineNumber = 1140
  var string3812 = new GraceString(".gco");
  var opresult3814 = callmethod(var_nm, "++", [1], string3812);
  var call3815 = callmethod(var_linkfiles,"push", [1], opresult3814);
  lineNumber = 1141
  var call3816 = callmethod(var_staticmodules,"push", [1], var_nm);
  var if3803 = call3816;
}
  var if3798 = if3803;
}
  var if3796 = if3798;
}
  lineNumber = 1171
  lineNumber = 1173
  lineNumber = 1
  lineNumber = 1145
  var call3818 = callmethod(var_exists,"not", [0]);
  if (Grace_isTrue(call3818)) {
  lineNumber = 1148
  lineNumber = 1146
  var string3820 = new GraceString(".gc");
  var opresult3822 = callmethod(var_nm, "++", [1], string3820);
  var call3823 = callmethod(var_io,"exists", [1], opresult3822);
  if (Grace_isTrue(call3823)) {
  lineNumber = 1148
  lineNumber = 1147
  var string3824 = new GraceString(".gc");
  var_ext = string3824;
  var if3819 = string3824;
}
  lineNumber = 1151
  lineNumber = 1149
  var string3826 = new GraceString(".grace");
  var opresult3828 = callmethod(var_nm, "++", [1], string3826);
  var call3829 = callmethod(var_io,"exists", [1], opresult3828);
  if (Grace_isTrue(call3829)) {
  lineNumber = 1151
  lineNumber = 1150
  var string3830 = new GraceString(".grace");
  var_ext = string3830;
  var if3825 = string3830;
}
  lineNumber = 1171
  lineNumber = 1172
  lineNumber = 1152
  var bool3832 = new GraceBoolean(false)
  var opresult3834 = callmethod(var_ext, "/=", [1], bool3832);
  if (Grace_isTrue(opresult3834)) {
  lineNumber = 1154
  lineNumber = 1
  lineNumber = 1153
  var call3835 = callmethod(var_argv,"first", [0]);
  var string3836 = new GraceString(" --target llvm29");
  var opresult3838 = callmethod(call3835, "++", [1], string3836);
  var_cmd = opresult3838;
  lineNumber = 1155
  lineNumber = 1154
  var string3839 = new GraceString(" --make ");
  var opresult3841 = callmethod(var_cmd, "++", [1], string3839);
  var opresult3843 = callmethod(opresult3841, "++", [1], var_nm);
  var opresult3845 = callmethod(opresult3843, "++", [1], var_ext);
  var_cmd = opresult3845;
  lineNumber = 1157
  lineNumber = 1158
  lineNumber = 1
  lineNumber = 1155
  var call3847 = callmethod(var_util,"verbosity", [0]);
  var opresult3849 = callmethod(call3847, ">", [1], new GraceNum(30));
  if (Grace_isTrue(opresult3849)) {
  lineNumber = 1157
  lineNumber = 1156
  var string3850 = new GraceString(" --verbose");
  var opresult3852 = callmethod(var_cmd, "++", [1], string3850);
  var_cmd = opresult3852;
  var if3846 = opresult3852;
}
  lineNumber = 1160
  lineNumber = 1161
  lineNumber = 1
  lineNumber = 1158
  var call3854 = callmethod(var_util,"vtag", [0]);
  if (Grace_isTrue(call3854)) {
  lineNumber = 1160
  lineNumber = 1159
  var string3855 = new GraceString(" --vtag ");
  var opresult3857 = callmethod(var_cmd, "++", [1], string3855);
  lineNumber = 1160
  lineNumber = 1
  lineNumber = 1159
  var call3858 = callmethod(var_util,"vtag", [0]);
  var opresult3860 = callmethod(opresult3857, "++", [1], call3858);
  var_cmd = opresult3860;
  var if3853 = opresult3860;
}
  lineNumber = 1163
  lineNumber = 1164
  lineNumber = 1161
  var string3862 = new GraceString("native");
  var opresult3864 = callmethod(var_buildtype, "==", [1], string3862);
  if (Grace_isTrue(opresult3864)) {
  lineNumber = 1163
  lineNumber = 1162
  var string3865 = new GraceString(" --native --noexec");
  var opresult3867 = callmethod(var_cmd, "++", [1], string3865);
  var_cmd = opresult3867;
  var if3861 = opresult3867;
}
  lineNumber = 1165
  lineNumber = 1164
  lineNumber = 1
  lineNumber = 1164
  var call3869 = callmethod(var_io,"system", [1], var_cmd);
  var call3870 = callmethod(call3869,"not", [0]);
  if (Grace_isTrue(call3870)) {
  lineNumber = 1165
  var string3871 = new GraceString("failed processing import of ");
  var opresult3873 = callmethod(string3871, "++", [1], var_nm);
  var string3874 = new GraceString(".");
  var opresult3876 = callmethod(opresult3873, "++", [1], string3874);
  var call3877 = callmethod(var_util,"syntax_error", [1], opresult3876);
  var if3868 = call3877;
}
  lineNumber = 1168
  lineNumber = 1167
  var bool3878 = new GraceBoolean(true)
  var_exists = bool3878;
  lineNumber = 1168
  var string3879 = new GraceString(".gco");
  var opresult3881 = callmethod(var_nm, "++", [1], string3879);
  var call3882 = callmethod(var_linkfiles,"push", [1], opresult3881);
  lineNumber = 1169
  var call3883 = callmethod(var_staticmodules,"push", [1], var_nm);
  lineNumber = 1171
  lineNumber = 1170
  var bool3884 = new GraceBoolean(false)
  var_ext = bool3884;
  var if3831 = bool3884;
}
  var if3817 = if3831;
}
  lineNumber = 1175
  lineNumber = 1177
  lineNumber = 1173
  var string3886 = new GraceString("sys");
  var opresult3888 = callmethod(var_nm, "==", [1], string3886);
  lineNumber = 1177
  lineNumber = 1173
  var string3889 = new GraceString("io");
  var opresult3891 = callmethod(var_nm, "==", [1], string3889);
  var opresult3893 = callmethod(opresult3888, "|", [1], opresult3891);
  if (Grace_isTrue(opresult3893)) {
  lineNumber = 1175
  lineNumber = 1174
  var bool3894 = new GraceBoolean(true)
  var_exists = bool3894;
  lineNumber = 1175
  var call3895 = callmethod(var_staticmodules,"push", [1], var_nm);
  var if3885 = call3895;
}
  lineNumber = 1178
  lineNumber = 1180
  lineNumber = 1
  lineNumber = 1177
  var call3897 = callmethod(var_exists,"not", [0]);
  if (Grace_isTrue(call3897)) {
  lineNumber = 1178
  var string3898 = new GraceString("failed finding import of ");
  var opresult3900 = callmethod(string3898, "++", [1], var_nm);
  var string3901 = new GraceString(".");
  var opresult3903 = callmethod(opresult3900, "++", [1], string3901);
  var call3904 = callmethod(var_util,"syntax_error", [1], opresult3903);
  var if3896 = call3904;
}
  var if3777 = if3896;
}
  return if3777;
};
  var call3905 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block3776);
  var if3770 = call3905;
}
  lineNumber = 1183
  var string3906 = new GraceString("@.str = private unnamed_addr constant [6 x i8] c\"Hello\\00\"");
  lineNumber = 1184
  var call3907 = callmethod(this,"out", [1], string3906);
  var string3908 = new GraceString("@.str._plus = private unnamed_addr constant [2 x i8] c\"+\\00\"");
  lineNumber = 1185
  var call3909 = callmethod(this,"out", [1], string3908);
  var string3910 = new GraceString("@.str._minus = private unnamed_addr constant [2 x i8] c\"-\\00\"");
  lineNumber = 1186
  var call3911 = callmethod(this,"out", [1], string3910);
  var string3912 = new GraceString("@.str._asterisk = private unnamed_addr constant [2 x i8] c\"*\\00\"");
  lineNumber = 1187
  var call3913 = callmethod(this,"out", [1], string3912);
  var string3914 = new GraceString("@.str._slash = private unnamed_addr constant [2 x i8] c\"/\\00\"");
  lineNumber = 1188
  var call3915 = callmethod(this,"out", [1], string3914);
  var string3916 = new GraceString("@.str._percent = private unnamed_addr constant [2 x i8] c\"%\\00\"");
  lineNumber = 1189
  var call3917 = callmethod(this,"out", [1], string3916);
  var string3918 = new GraceString("@.str._index = private unnamed_addr constant [3 x i8] c\"[]\\00\"");
  lineNumber = 1190
  var call3919 = callmethod(this,"out", [1], string3918);
  var string3920 = new GraceString("@.str._push = private unnamed_addr constant [5 x i8] c\"push\\00\"");
  lineNumber = 1191
  var call3921 = callmethod(this,"out", [1], string3920);
  var string3922 = new GraceString("@.str._iter = private unnamed_addr constant [5 x i8] c\"iter\\00\"");
  lineNumber = 1192
  var call3923 = callmethod(this,"out", [1], string3922);
  var string3924 = new GraceString("@.str._apply = private unnamed_addr constant [6 x i8] c\"apply\\00\"");
  lineNumber = 1193
  var call3925 = callmethod(this,"out", [1], string3924);
  var string3926 = new GraceString("@.str._havemore = private unnamed_addr constant [9 x i8] c\"havemore\\00\"");
  lineNumber = 1194
  var call3927 = callmethod(this,"out", [1], string3926);
  var string3928 = new GraceString("@.str._next = private unnamed_addr constant [5 x i8] c\"next\\00\"");
  lineNumber = 1195
  var call3929 = callmethod(this,"out", [1], string3928);
  var string3930 = new GraceString("@.str._assignment = private unnamed_addr constant [11 x i8] c\"assignment\\00\"");
  lineNumber = 1196
  var call3931 = callmethod(this,"out", [1], string3930);
  var string3932 = new GraceString("@.str.asString = private unnamed_addr constant [9 x i8] c\"asString\\00\"");
  lineNumber = 1197
  var call3933 = callmethod(this,"out", [1], string3932);
  lineNumber = 1198
  lineNumber = 1197
  var string3934 = new GraceString("@.str._compilerRevision = private unnamed_addr constant [41 x i8]");
  lineNumber = 1198
  var string3935 = new GraceString("c\"");
  var opresult3937 = callmethod(string3934, "++", [1], string3935);
  lineNumber = 1
  lineNumber = 1198
  var call3938 = callmethod(var_buildinfo,"gitrevision", [0]);
  var opresult3940 = callmethod(opresult3937, "++", [1], call3938);
  var string3941 = new GraceString("\\00\"");
  var opresult3943 = callmethod(opresult3940, "++", [1], string3941);
  lineNumber = 1199
  var call3944 = callmethod(this,"out", [1], opresult3943);
  var string3945 = new GraceString("@undefined = private global %object null");
  lineNumber = 1200
  var call3946 = callmethod(this,"out", [1], string3945);
  var string3947 = new GraceString("@none = private global %object null");
  lineNumber = 1201
  var call3948 = callmethod(this,"out", [1], string3947);
  var string3949 = new GraceString("@argv = private global %object null");
  lineNumber = 1202
  var call3950 = callmethod(this,"out", [1], string3949);
  var string3951 = new GraceString("%ClassDataStruct = type { i8*, %Method*, i32 }");
  lineNumber = 1203
  var call3952 = callmethod(this,"outprint", [1], string3951);
  var string3953 = new GraceString("%ClassData = type %ClassDataStruct*");
  lineNumber = 1204
  var call3954 = callmethod(this,"outprint", [1], string3953);
  var string3955 = new GraceString("%object = type %ObjectStruct*");
  lineNumber = 1205
  var call3956 = callmethod(this,"outprint", [1], string3955);
  var string3957 = new GraceString("%ObjectStruct = type { i32, %ClassData, [0 x i8] }");
  lineNumber = 1206
  var call3958 = callmethod(this,"outprint", [1], string3957);
  var string3959 = new GraceString("%Method = type {i8*,i32,%object(%object,i32,%object*,i32)*}");
  lineNumber = 1207
  var call3960 = callmethod(this,"outprint", [1], string3959);
  var string3961 = new GraceString("%UserObject = type { i32, i8*, i8*, [0 x %object] }");
  lineNumber = 1208
  var call3962 = callmethod(this,"outprint", [1], string3961);
  var string3963 = new GraceString("define %object @module_");
  var opresult3965 = callmethod(string3963, "++", [1], var_modname);
  var string3966 = new GraceString("_init() {");
  var opresult3968 = callmethod(opresult3965, "++", [1], string3966);
  lineNumber = 1209
  var call3969 = callmethod(this,"out", [1], opresult3968);
  var string3970 = new GraceString("entry:");
  lineNumber = 1210
  var call3971 = callmethod(this,"out", [1], string3970);
  var string3972 = new GraceString("  %self = call %object @alloc_obj2(i32 100, i32 100)");
  lineNumber = 1211
  var call3973 = callmethod(this,"out", [1], string3972);
  lineNumber = 1212
  lineNumber = 1211
  var string3974 = new GraceString("Module<");
  var opresult3976 = callmethod(string3974, "++", [1], var_modname);
  var string3977 = new GraceString(">");
  var opresult3979 = callmethod(opresult3976, "++", [1], string3977);
  var var_modn = opresult3979;
  lineNumber = 1214
  lineNumber = 1212
  var string3980 = new GraceString("@\".str._modcname_");
  var opresult3982 = callmethod(string3980, "++", [1], var_modname);
  var string3983 = new GraceString("\" = private unnamed_addr ");
  var opresult3985 = callmethod(opresult3982, "++", [1], string3983);
  lineNumber = 1214
  lineNumber = 1213
  var string3986 = new GraceString("constant [");
  lineNumber = 1214
  lineNumber = 1
  lineNumber = 1213
  var call3987 = callmethod(var_modn,"size", [0]);
  var opresult3989 = callmethod(call3987, "+", [1], new GraceNum(1));
  var opresult3991 = callmethod(string3986, "++", [1], opresult3989);
  var string3992 = new GraceString(" x i8] c\"");
  var opresult3994 = callmethod(opresult3991, "++", [1], string3992);
  var opresult3996 = callmethod(opresult3994, "++", [1], var_modn);
  var string3997 = new GraceString("\\00\"");
  var opresult3999 = callmethod(opresult3996, "++", [1], string3997);
  var opresult4001 = callmethod(opresult3985, "++", [1], opresult3999);
  var var_con = opresult4001;
  lineNumber = 1214
  var call4002 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 1218
  lineNumber = 1215
  var string4003 = new GraceString("  call void @setclassname(%object %self, ");
  lineNumber = 1218
  lineNumber = 1216
  var string4004 = new GraceString("i8* getelementptr([");
  lineNumber = 1218
  lineNumber = 1
  lineNumber = 1216
  var call4005 = callmethod(var_modn,"size", [0]);
  var opresult4007 = callmethod(call4005, "+", [1], new GraceNum(1));
  var opresult4009 = callmethod(string4004, "++", [1], opresult4007);
  var string4010 = new GraceString(" x i8]* ");
  var opresult4012 = callmethod(opresult4009, "++", [1], string4010);
  var opresult4014 = callmethod(string4003, "++", [1], opresult4012);
  lineNumber = 1218
  lineNumber = 1217
  var string4015 = new GraceString("@\".str._modcname_");
  var opresult4017 = callmethod(string4015, "++", [1], var_modname);
  var string4018 = new GraceString("\",");
  var opresult4020 = callmethod(opresult4017, "++", [1], string4018);
  var opresult4022 = callmethod(opresult4014, "++", [1], opresult4020);
  lineNumber = 1218
  var string4023 = new GraceString("i32 0,i32 0))");
  var opresult4025 = callmethod(opresult4022, "++", [1], string4023);
  lineNumber = 1219
  var call4026 = callmethod(this,"out", [1], opresult4025);
  var string4027 = new GraceString("  %undefined = load %object* @undefined");
  lineNumber = 1220
  var call4028 = callmethod(this,"out", [1], string4027);
  var string4029 = new GraceString("  %none = load %object* @none");
  lineNumber = 1221
  var call4030 = callmethod(this,"out", [1], string4029);
  var string4031 = new GraceString("  %var_argv = call %object* @alloc_var()");
  lineNumber = 1222
  var call4032 = callmethod(this,"out", [1], string4031);
  var string4033 = new GraceString("  %tmp_argv = load %object* @argv");
  lineNumber = 1223
  var call4034 = callmethod(this,"out", [1], string4033);
  var string4035 = new GraceString("  store %object %tmp_argv, %object* %var_argv");
  lineNumber = 1224
  var call4036 = callmethod(this,"out", [1], string4035);
  var string4037 = new GraceString("  %var_HashMap = call %object* @alloc_var()");
  lineNumber = 1225
  var call4038 = callmethod(this,"out", [1], string4037);
  var string4039 = new GraceString("  %tmp_hmco = call %object @alloc_HashMapClassObject()");
  lineNumber = 1226
  var call4040 = callmethod(this,"out", [1], string4039);
  var string4041 = new GraceString("  store %object %tmp_hmco, %object* %var_HashMap");
  lineNumber = 1227
  var call4042 = callmethod(this,"out", [1], string4041);
  var string4043 = new GraceString("  %var_MatchFailed = call %object* @alloc_var()");
  lineNumber = 1228
  var call4044 = callmethod(this,"out", [1], string4043);
  var string4045 = new GraceString("  %tmp_mf = call %object @alloc_obj2(i32 0, i32 0)");
  lineNumber = 1229
  var call4046 = callmethod(this,"out", [1], string4045);
  var string4047 = new GraceString("  store %object %tmp_mf, %object* %var_MatchFailed");
  lineNumber = 1230
  var call4048 = callmethod(this,"out", [1], string4047);
  lineNumber = 1231
  lineNumber = 1230
  var var_tmpo = var_output;
  lineNumber = 1232
  var array4049 = new GraceList([
]);

  var_output = array4049;
  lineNumber = 1247
  lineNumber = 1232
  lineNumber = 1247
  var block4050 = Grace_allocObject();
  block4050.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4050.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4050.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4050.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4050.receiver = this;
  block4050.className = 'block<genllvm30:1247>';
  block4050.real = function(
var_l
) {
  lineNumber = 1249
  lineNumber = 1
  lineNumber = 1233
  var call4052 = callmethod(var_l,"kind", [0]);
  var string4053 = new GraceString("vardec");
  var opresult4055 = callmethod(call4052, "==", [1], string4053);
  lineNumber = 1249
  lineNumber = 1
  lineNumber = 1233
  var call4056 = callmethod(var_l,"kind", [0]);
  var string4057 = new GraceString("defdec");
  var opresult4059 = callmethod(call4056, "==", [1], string4057);
  var opresult4061 = callmethod(opresult4055, "|", [1], opresult4059);
  if (Grace_isTrue(opresult4061)) {
  lineNumber = 1234
  lineNumber = 1
  lineNumber = 1234
  lineNumber = 1
  lineNumber = 1234
  lineNumber = 1
  lineNumber = 1234
  var call4062 = callmethod(var_l,"name", [0]);
  var call4063 = callmethod(call4062,"value", [0]);
  var call4064 = callmethod(call4063,"_escape", [0]);
  var var_tnm = call4064;
  lineNumber = 1235
  var call4065 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 1236
  var string4066 = new GraceString("  %\"var_");
  var opresult4068 = callmethod(string4066, "++", [1], var_tnm);
  var string4069 = new GraceString("\" = call %object* @alloc_var()");
  var opresult4071 = callmethod(opresult4068, "++", [1], string4069);
  lineNumber = 1237
  var call4072 = callmethod(this,"out", [1], opresult4071);
  var string4073 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult4075 = callmethod(string4073, "++", [1], var_tnm);
  var string4076 = new GraceString("\"");
  var opresult4078 = callmethod(opresult4075, "++", [1], string4076);
  lineNumber = 1238
  var call4079 = callmethod(this,"out", [1], opresult4078);
  var if4051 = call4079;
  } else {
  lineNumber = 1247
  lineNumber = 1249
  lineNumber = 1
  lineNumber = 1238
  var call4081 = callmethod(var_l,"kind", [0]);
  var string4082 = new GraceString("class");
  var opresult4084 = callmethod(call4081, "==", [1], string4082);
  if (Grace_isTrue(opresult4084)) {
  lineNumber = 1240
  var var_tnmc;
  lineNumber = 1243
  lineNumber = 1245
  lineNumber = 1
  lineNumber = 1245
  lineNumber = 1
  lineNumber = 1240
  var call4086 = callmethod(var_l,"name", [0]);
  var call4087 = callmethod(call4086,"kind", [0]);
  var string4088 = new GraceString("generic");
  var opresult4090 = callmethod(call4087, "==", [1], string4088);
  if (Grace_isTrue(opresult4090)) {
  lineNumber = 1241
  lineNumber = 1
  lineNumber = 1241
  lineNumber = 1
  lineNumber = 1241
  lineNumber = 1
  lineNumber = 1241
  lineNumber = 1
  lineNumber = 1241
  var call4091 = callmethod(var_l,"name", [0]);
  var call4092 = callmethod(call4091,"value", [0]);
  var call4093 = callmethod(call4092,"value", [0]);
  var call4094 = callmethod(call4093,"_escape", [0]);
  var_tnmc = call4094;
  var if4085 = call4094;
  } else {
  lineNumber = 1243
  lineNumber = 1
  lineNumber = 1243
  lineNumber = 1
  lineNumber = 1243
  lineNumber = 1
  lineNumber = 1243
  var call4095 = callmethod(var_l,"name", [0]);
  var call4096 = callmethod(call4095,"value", [0]);
  var call4097 = callmethod(call4096,"_escape", [0]);
  var_tnmc = call4097;
  var if4085 = call4097;
}
  lineNumber = 1245
  var call4098 = callmethod(var_declaredvars,"push", [1], var_tnmc);
  lineNumber = 1246
  var string4099 = new GraceString("  %\"var_");
  var opresult4101 = callmethod(string4099, "++", [1], var_tnmc);
  var string4102 = new GraceString("\" = call %object* @alloc_var()");
  var opresult4104 = callmethod(opresult4101, "++", [1], string4102);
  lineNumber = 1247
  var call4105 = callmethod(this,"out", [1], opresult4104);
  var string4106 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult4108 = callmethod(string4106, "++", [1], var_tnmc);
  var string4109 = new GraceString("\"");
  var opresult4111 = callmethod(opresult4108, "++", [1], string4109);
  lineNumber = 1248
  var call4112 = callmethod(this,"out", [1], opresult4111);
  var if4080 = call4112;
}
  var if4051 = if4080;
}
  return if4051;
};
  var call4113 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block4050);
  lineNumber = 1251
  lineNumber = 1250
  lineNumber = 1251
  var block4114 = Grace_allocObject();
  block4114.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4114.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4114.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4114.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4114.receiver = this;
  block4114.className = 'block<genllvm30:1251>';
  block4114.real = function(
var_o
) {
  lineNumber = 1252
  var call4115 = callmethod(this,"compilenode", [1], var_o);
  return call4115;
};
  var call4116 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block4114);
  lineNumber = 1254
  lineNumber = 1253
  var var_tmpo2 = var_output;
  lineNumber = 1255
  lineNumber = 1254
  var_output = var_tmpo;
  lineNumber = 1255
  var string4117 = new GraceString("  %params = alloca %object, i32 ");
  var opresult4119 = callmethod(string4117, "++", [1], var_paramsUsed);
  lineNumber = 1256
  var call4120 = callmethod(this,"out", [1], opresult4119);
  lineNumber = 1257
  lineNumber = 1256
  var diff4122 = callmethod(var_paramsUsed, "-", [1], new GraceNum(1));
  var opresult4124 = callmethod(new GraceNum(0), "..", [1], diff4122);
  lineNumber = 1257
  var block4125 = Grace_allocObject();
  block4125.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4125.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4125.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4125.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4125.receiver = this;
  block4125.className = 'block<genllvm30:1257>';
  block4125.real = function(
var_i
) {
  var string4126 = new GraceString("  %params_");
  var opresult4128 = callmethod(string4126, "++", [1], var_i);
  var string4129 = new GraceString(" = getelementptr %object* %params, i32 ");
  var opresult4131 = callmethod(opresult4128, "++", [1], string4129);
  var opresult4133 = callmethod(opresult4131, "++", [1], var_i);
  lineNumber = 1258
  var call4134 = callmethod(this,"out", [1], opresult4133);
  return call4134;
};
  var call4135 = callmethod(Grace_prelude,"for()do", [1, 1], opresult4124, block4125);
  lineNumber = 1260
  lineNumber = 1259
  lineNumber = 1260
  var block4136 = Grace_allocObject();
  block4136.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4136.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4136.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4136.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4136.receiver = this;
  block4136.className = 'block<genllvm30:1260>';
  block4136.real = function(
var_l
) {
  lineNumber = 1261
  var call4137 = callmethod(this,"out", [1], var_l);
  return call4137;
};
  var call4138 = callmethod(Grace_prelude,"for()do", [1, 1], var_tmpo2, block4136);
  lineNumber = 1263
  lineNumber = 1262
  var_paramsUsed = new GraceNum(1);
  lineNumber = 1263
  var string4139 = new GraceString("  ret %object %self");
  lineNumber = 1264
  var call4140 = callmethod(this,"out", [1], string4139);
  var string4141 = new GraceString("}");
  lineNumber = 1265
  var call4142 = callmethod(this,"out", [1], string4141);
  var string4143 = new GraceString("define weak i32 @main(i32 %argc, i8** %argv) {");
  lineNumber = 1266
  var call4144 = callmethod(this,"out", [1], string4143);
  var string4145 = new GraceString("entry:");
  lineNumber = 1267
  var call4146 = callmethod(this,"out", [1], string4145);
  var string4147 = new GraceString("  call void @initprofiling()");
  lineNumber = 1268
  var call4148 = callmethod(this,"out", [1], string4147);
  lineNumber = 1276
  lineNumber = 1268
  var string4150 = new GraceString("LogCallGraph");
  lineNumber = 1278
  lineNumber = 1
  lineNumber = 1268
  var call4151 = callmethod(var_util,"extensions", [0]);
  var call4152 = callmethod(call4151,"contains", [1], string4150);
  if (Grace_isTrue(call4152)) {
  lineNumber = 1269
  var string4153 = new GraceString("LogCallGraph");
  lineNumber = 1270
  lineNumber = 1
  lineNumber = 1269
  var call4154 = callmethod(var_util,"extensions", [0]);
  var call4155 = callmethod(call4154,"get", [1], string4153);
  var var_lcgfile = call4155;
  lineNumber = 1272
  lineNumber = 1270
  var string4156 = new GraceString("@.str.logdest = private unnamed_addr ");
  lineNumber = 1272
  lineNumber = 1271
  var string4157 = new GraceString("constant [");
  lineNumber = 1272
  lineNumber = 1
  lineNumber = 1271
  var call4158 = callmethod(var_lcgfile,"size", [0]);
  var opresult4160 = callmethod(call4158, "+", [1], new GraceNum(1));
  var opresult4162 = callmethod(string4157, "++", [1], opresult4160);
  var string4163 = new GraceString(" x i8] c\"");
  var opresult4165 = callmethod(opresult4162, "++", [1], string4163);
  var opresult4167 = callmethod(opresult4165, "++", [1], var_lcgfile);
  var string4168 = new GraceString("\\00\"");
  var opresult4170 = callmethod(opresult4167, "++", [1], string4168);
  var opresult4172 = callmethod(string4156, "++", [1], opresult4170);
  var_con = opresult4172;
  lineNumber = 1272
  var call4173 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 1276
  lineNumber = 1273
  var string4174 = new GraceString("  call void @enable_callgraph(");
  lineNumber = 1276
  lineNumber = 1274
  var string4175 = new GraceString("i8* getelementptr([");
  lineNumber = 1276
  lineNumber = 1
  lineNumber = 1274
  var call4176 = callmethod(var_lcgfile,"size", [0]);
  var opresult4178 = callmethod(call4176, "+", [1], new GraceNum(1));
  var opresult4180 = callmethod(string4175, "++", [1], opresult4178);
  var string4181 = new GraceString(" x i8]* ");
  var opresult4183 = callmethod(opresult4180, "++", [1], string4181);
  var opresult4185 = callmethod(string4174, "++", [1], opresult4183);
  lineNumber = 1275
  var string4186 = new GraceString("@.str.logdest,");
  var opresult4188 = callmethod(opresult4185, "++", [1], string4186);
  lineNumber = 1276
  var string4189 = new GraceString("i32 0,i32 0))");
  var opresult4191 = callmethod(opresult4188, "++", [1], string4189);
  lineNumber = 1277
  var call4192 = callmethod(this,"out", [1], opresult4191);
  var if4149 = call4192;
}
  lineNumber = 1278
  var string4193 = new GraceString("  call void @gracelib_argv(i8** %argv)");
  lineNumber = 1279
  var call4194 = callmethod(this,"out", [1], string4193);
  var string4195 = new GraceString("  %params = alloca %object, i32 1");
  lineNumber = 1280
  var call4196 = callmethod(this,"out", [1], string4195);
  var string4197 = new GraceString("  %params_0 = getelementptr %object* %params, i32 0");
  lineNumber = 1281
  var call4198 = callmethod(this,"out", [1], string4197);
  var string4199 = new GraceString("  %undefined = call %object @alloc_Undefined()");
  lineNumber = 1282
  var call4200 = callmethod(this,"out", [1], string4199);
  var string4201 = new GraceString("  store %object %undefined, %object* @undefined");
  lineNumber = 1283
  var call4202 = callmethod(this,"out", [1], string4201);
  var string4203 = new GraceString("  %none = call %object @alloc_none()");
  lineNumber = 1284
  var call4204 = callmethod(this,"out", [1], string4203);
  var string4205 = new GraceString("  store %object %none, %object* @none");
  lineNumber = 1285
  var call4206 = callmethod(this,"out", [1], string4205);
  var string4207 = new GraceString("  %tmp_argv = call %object @alloc_List()");
  lineNumber = 1286
  var call4208 = callmethod(this,"out", [1], string4207);
  var string4209 = new GraceString("  %argv_i = alloca i32");
  lineNumber = 1287
  var call4210 = callmethod(this,"out", [1], string4209);
  var string4211 = new GraceString("  store i32 0, i32* %argv_i");
  lineNumber = 1288
  var call4212 = callmethod(this,"out", [1], string4211);
  var string4213 = new GraceString("  br label %argv.cond");
  lineNumber = 1289
  var call4214 = callmethod(this,"out", [1], string4213);
  var string4215 = new GraceString("argv.cond");
  lineNumber = 1290
  var call4216 = callmethod(this,"beginblock", [1], string4215);
  var string4217 = new GraceString("  %argv_tmp1 = load i32* %argv_i, align 4");
  lineNumber = 1291
  var call4218 = callmethod(this,"out", [1], string4217);
  var string4219 = new GraceString("  %argv_cmp = icmp slt i32 %argv_tmp1, %argc");
  lineNumber = 1292
  var call4220 = callmethod(this,"out", [1], string4219);
  var string4221 = new GraceString("  br i1 %argv_cmp, label %argv.body, label %argv.end");
  lineNumber = 1293
  var call4222 = callmethod(this,"out", [1], string4221);
  var string4223 = new GraceString("argv.body");
  lineNumber = 1294
  var call4224 = callmethod(this,"beginblock", [1], string4223);
  var string4225 = new GraceString("  %argv_iv = load i32* %argv_i");
  lineNumber = 1295
  var call4226 = callmethod(this,"out", [1], string4225);
  var string4227 = new GraceString("  %argv_idx = getelementptr i8** %argv, i32 %argv_iv");
  lineNumber = 1296
  var call4228 = callmethod(this,"out", [1], string4227);
  var string4229 = new GraceString("  %argv_val = load i8** %argv_idx");
  lineNumber = 1297
  var call4230 = callmethod(this,"out", [1], string4229);
  var string4231 = new GraceString("  %argv_tmp3 = call %object @alloc_String(i8* %argv_val)");
  lineNumber = 1298
  var call4232 = callmethod(this,"out", [1], string4231);
  var string4233 = new GraceString("  store %object %argv_tmp3, %object* %params_0");
  lineNumber = 1299
  var call4234 = callmethod(this,"out", [1], string4233);
  lineNumber = 1302
  lineNumber = 1299
  var string4235 = new GraceString("  call %object @callmethod(%object %tmp_argv, ");
  lineNumber = 1300
  var string4236 = new GraceString("i8* getelementptr([5 x i8]* @.str._push");
  var opresult4238 = callmethod(string4235, "++", [1], string4236);
  lineNumber = 1301
  var string4239 = new GraceString(",i32 0,i32 0), ");
  var opresult4241 = callmethod(opresult4238, "++", [1], string4239);
  lineNumber = 1302
  var string4242 = new GraceString("i32 0, %object* %params)");
  var opresult4244 = callmethod(opresult4241, "++", [1], string4242);
  lineNumber = 1303
  var call4245 = callmethod(this,"out", [1], opresult4244);
  var string4246 = new GraceString("  %argv_inc = add i32 %argv_iv, 1");
  lineNumber = 1304
  var call4247 = callmethod(this,"out", [1], string4246);
  var string4248 = new GraceString("  store i32 %argv_inc, i32* %argv_i");
  lineNumber = 1305
  var call4249 = callmethod(this,"out", [1], string4248);
  var string4250 = new GraceString("  br label %argv.cond");
  lineNumber = 1306
  var call4251 = callmethod(this,"out", [1], string4250);
  var string4252 = new GraceString("argv.end");
  lineNumber = 1307
  var call4253 = callmethod(this,"beginblock", [1], string4252);
  var string4254 = new GraceString("  call void @module_sys_init_argv(%object %tmp_argv)");
  lineNumber = 1308
  var call4255 = callmethod(this,"out", [1], string4254);
  var string4256 = new GraceString("  %var_argv = call %object* @alloc_var()");
  lineNumber = 1309
  var call4257 = callmethod(this,"out", [1], string4256);
  var string4258 = new GraceString("  store %object %tmp_argv, %object* %var_argv");
  lineNumber = 1310
  var call4259 = callmethod(this,"out", [1], string4258);
  var string4260 = new GraceString("  store %object %tmp_argv, %object* @argv");
  lineNumber = 1311
  var call4261 = callmethod(this,"out", [1], string4260);
  var string4262 = new GraceString("  call %object @module_");
  var opresult4264 = callmethod(string4262, "++", [1], var_modname);
  var string4265 = new GraceString("_init()");
  var opresult4267 = callmethod(opresult4264, "++", [1], string4265);
  lineNumber = 1312
  var call4268 = callmethod(this,"out", [1], opresult4267);
  var string4269 = new GraceString("  call void @gracelib_stats()");
  lineNumber = 1313
  var call4270 = callmethod(this,"out", [1], string4269);
  var string4271 = new GraceString("  ret i32 0");
  lineNumber = 1314
  var call4272 = callmethod(this,"out", [1], string4271);
  var string4273 = new GraceString("}");
  lineNumber = 1315
  var call4274 = callmethod(this,"out", [1], string4273);
  var string4275 = new GraceString("; constant definitions");
  lineNumber = 1316
  var call4276 = callmethod(this,"out", [1], string4275);
  lineNumber = 1317
  lineNumber = 1316
  lineNumber = 1317
  var block4277 = Grace_allocObject();
  block4277.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4277.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4277.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4277.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4277.receiver = this;
  block4277.className = 'block<genllvm30:1317>';
  block4277.real = function(
var_c
) {
  lineNumber = 1318
  var call4278 = callmethod(this,"out", [1], var_c);
  return call4278;
};
  var call4279 = callmethod(Grace_prelude,"for()do", [1, 1], var_constants, block4277);
  lineNumber = 1320
  lineNumber = 1
  lineNumber = 1319
  var call4280 = callmethod(var_subtype,"boolMatrix", [0]);
  var var_mtx = call4280;
  lineNumber = 1321
  lineNumber = 1320
  var string4281 = new GraceString("@.subtypes = private unnamed_addr ");
  lineNumber = 1321
  var string4282 = new GraceString("constant [");
  lineNumber = 1
  lineNumber = 1321
  var call4283 = callmethod(var_mtx,"size", [0]);
  lineNumber = 1
  lineNumber = 1321
  var call4284 = callmethod(var_mtx,"size", [0]);
  var prod4286 = callmethod(call4283, "*", [1], call4284);
  var opresult4288 = callmethod(string4282, "++", [1], prod4286);
  var string4289 = new GraceString(" x i1] [");
  var opresult4291 = callmethod(opresult4288, "++", [1], string4289);
  var opresult4293 = callmethod(string4281, "++", [1], opresult4291);
  lineNumber = 1322
  var call4294 = callmethod(this,"out", [1], opresult4293);
  lineNumber = 1323
  lineNumber = 1322
  var bool4295 = new GraceBoolean(true)
  var var_smfirst = bool4295;
  lineNumber = 1333
  lineNumber = 1323
  lineNumber = 1333
  var block4296 = Grace_allocObject();
  block4296.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4296.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4296.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4296.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4296.receiver = this;
  block4296.className = 'block<genllvm30:1333>';
  block4296.real = function(
var_m1
) {
  lineNumber = 1324
  lineNumber = 1333
  var block4297 = Grace_allocObject();
  block4297.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4297.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4297.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4297.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4297.receiver = this;
  block4297.className = 'block<genllvm30:1333>';
  block4297.real = function(
var_m2
) {
  lineNumber = 1328
  lineNumber = 1325
  if (Grace_isTrue(var_smfirst)) {
  lineNumber = 1327
  lineNumber = 1326
  var bool4299 = new GraceBoolean(false)
  var_smfirst = bool4299;
  var if4298 = bool4299;
  } else {
  lineNumber = 1328
  var string4300 = new GraceString(",");
  lineNumber = 1329
  var call4301 = callmethod(this,"out", [1], string4300);
  var if4298 = call4301;
}
  lineNumber = 1333
  lineNumber = 1330
  if (Grace_isTrue(var_m2)) {
  lineNumber = 1331
  var string4303 = new GraceString("i1 1");
  lineNumber = 1332
  var call4304 = callmethod(this,"out", [1], string4303);
  var if4302 = call4304;
  } else {
  lineNumber = 1333
  var string4305 = new GraceString("i1 0");
  lineNumber = 1334
  var call4306 = callmethod(this,"out", [1], string4305);
  var if4302 = call4306;
}
  return if4302;
};
  var call4307 = callmethod(Grace_prelude,"for()do", [1, 1], var_m1, block4297);
  return call4307;
};
  var call4308 = callmethod(Grace_prelude,"for()do", [1, 1], var_mtx, block4296);
  lineNumber = 1337
  var string4309 = new GraceString("]");
  lineNumber = 1338
  var call4310 = callmethod(this,"out", [1], string4309);
  var string4311 = new GraceString("@.typecount = private unnamed_addr constant i16 ");
  lineNumber = 1
  lineNumber = 1338
  var call4312 = callmethod(var_mtx,"size", [0]);
  var opresult4314 = callmethod(string4311, "++", [1], call4312);
  var string4315 = new GraceString("");
  var opresult4317 = callmethod(opresult4314, "++", [1], string4315);
  lineNumber = 1339
  var call4318 = callmethod(this,"out", [1], opresult4317);
  var string4319 = new GraceString("define private i1 @checksub(i16 %sub, i16 %sup) {");
  lineNumber = 1340
  var call4320 = callmethod(this,"out", [1], string4319);
  var string4321 = new GraceString("entry:");
  lineNumber = 1341
  var call4322 = callmethod(this,"out", [1], string4321);
  var string4323 = new GraceString("  %tc = load i16* @.typecount");
  lineNumber = 1342
  var call4324 = callmethod(this,"out", [1], string4323);
  var string4325 = new GraceString("  %st = load [");
  lineNumber = 1
  lineNumber = 1342
  var call4326 = callmethod(var_mtx,"size", [0]);
  lineNumber = 1
  lineNumber = 1342
  var call4327 = callmethod(var_mtx,"size", [0]);
  var prod4329 = callmethod(call4326, "*", [1], call4327);
  var opresult4331 = callmethod(string4325, "++", [1], prod4329);
  var string4332 = new GraceString(" x i1]* @.subtypes");
  var opresult4334 = callmethod(opresult4331, "++", [1], string4332);
  lineNumber = 1343
  var call4335 = callmethod(this,"out", [1], opresult4334);
  var string4336 = new GraceString("  %ridx = mul i16 %sub, %tc");
  lineNumber = 1344
  var call4337 = callmethod(this,"out", [1], string4336);
  var string4338 = new GraceString("  %idx = add i16 %ridx, %sup");
  lineNumber = 1345
  var call4339 = callmethod(this,"out", [1], string4338);
  var string4340 = new GraceString("  %ptr = getelementptr [");
  lineNumber = 1
  lineNumber = 1345
  var call4341 = callmethod(var_mtx,"size", [0]);
  lineNumber = 1
  lineNumber = 1345
  var call4342 = callmethod(var_mtx,"size", [0]);
  var prod4344 = callmethod(call4341, "*", [1], call4342);
  var opresult4346 = callmethod(string4340, "++", [1], prod4344);
  var string4347 = new GraceString(" x i1]* @.subtypes, i32 0, i16 %idx");
  var opresult4349 = callmethod(opresult4346, "++", [1], string4347);
  lineNumber = 1346
  var call4350 = callmethod(this,"out", [1], opresult4349);
  var string4351 = new GraceString("  %rv = load i1* %ptr");
  lineNumber = 1347
  var call4352 = callmethod(this,"out", [1], string4351);
  var string4353 = new GraceString("  ret i1 %rv");
  lineNumber = 1348
  var call4354 = callmethod(this,"out", [1], string4353);
  var string4355 = new GraceString("}");
  lineNumber = 1349
  var call4356 = callmethod(this,"out", [1], string4355);
  var string4357 = new GraceString("; gracelib");
  lineNumber = 1350
  var call4358 = callmethod(this,"out", [1], string4357);
  var string4359 = new GraceString("declare %object @alloc_obj2(i32, i32)");
  lineNumber = 1351
  var call4360 = callmethod(this,"out", [1], string4359);
  var string4361 = new GraceString("declare void @addmethod2(%object, i8*, %object(%object, i32, %object*, i32)*)");
  lineNumber = 1352
  var call4362 = callmethod(this,"out", [1], string4361);
  var string4363 = new GraceString("declare void @adddatum2(%object, %object, i32)");
  lineNumber = 1353
  var call4364 = callmethod(this,"out", [1], string4363);
  var string4365 = new GraceString("declare %object @alloc_List()");
  lineNumber = 1354
  var call4366 = callmethod(this,"out", [1], string4365);
  var string4367 = new GraceString("declare %object @alloc_Float64(double)");
  lineNumber = 1355
  var call4368 = callmethod(this,"out", [1], string4367);
  var string4369 = new GraceString("declare %object @alloc_String(i8*)");
  lineNumber = 1356
  var call4370 = callmethod(this,"out", [1], string4369);
  var string4371 = new GraceString("declare %object @alloc_Octets(i8*, i32)");
  lineNumber = 1357
  var call4372 = callmethod(this,"out", [1], string4371);
  var string4373 = new GraceString("declare %object @alloc_Boolean(i32)");
  lineNumber = 1358
  var call4374 = callmethod(this,"out", [1], string4373);
  var string4375 = new GraceString("declare %object @alloc_Undefined()");
  lineNumber = 1359
  var call4376 = callmethod(this,"out", [1], string4375);
  var string4377 = new GraceString("declare %object @alloc_none()");
  lineNumber = 1360
  var call4378 = callmethod(this,"out", [1], string4377);
  var string4379 = new GraceString("declare %object @alloc_HashMapClassObject()");
  lineNumber = 1361
  var call4380 = callmethod(this,"out", [1], string4379);
  var string4381 = new GraceString("declare %object @callmethod(%object, i8*, i32, %object*)");
  lineNumber = 1362
  var call4382 = callmethod(this,"out", [1], string4381);
  var string4383 = new GraceString("declare %object @gracelib_print(%object, i32, %object*)");
  lineNumber = 1363
  var call4384 = callmethod(this,"out", [1], string4383);
  var string4385 = new GraceString("declare %object @gracelib_readall(%object, i32, %object*)");
  lineNumber = 1364
  var call4386 = callmethod(this,"out", [1], string4385);
  var string4387 = new GraceString("declare %object @gracelib_length(%object)");
  lineNumber = 1365
  var call4388 = callmethod(this,"out", [1], string4387);
  var string4389 = new GraceString("declare void @set_type(%object, i16)");
  lineNumber = 1366
  var call4390 = callmethod(this,"out", [1], string4389);
  var string4391 = new GraceString("declare void @setclassname(%object, i8*)");
  lineNumber = 1367
  var call4392 = callmethod(this,"out", [1], string4391);
  var string4393 = new GraceString("declare void @enable_callgraph(i8*)");
  lineNumber = 1368
  var call4394 = callmethod(this,"out", [1], string4393);
  var string4395 = new GraceString("declare %object @dlmodule(i8*)");
  lineNumber = 1369
  var call4396 = callmethod(this,"out", [1], string4395);
  var string4397 = new GraceString("declare %object* @alloc_var()");
  lineNumber = 1370
  var call4398 = callmethod(this,"out", [1], string4397);
  var string4399 = new GraceString("declare void @gracelib_argv(i8**)");
  lineNumber = 1371
  var call4400 = callmethod(this,"out", [1], string4399);
  var string4401 = new GraceString("declare void @module_sys_init_argv(%object)");
  lineNumber = 1372
  var call4402 = callmethod(this,"out", [1], string4401);
  var string4403 = new GraceString("declare i1 @istrue(%object)");
  lineNumber = 1373
  var call4404 = callmethod(this,"out", [1], string4403);
  var string4405 = new GraceString("declare void @gracelib_stats()");
  lineNumber = 1374
  var call4406 = callmethod(this,"out", [1], string4405);
  var string4407 = new GraceString("declare void @initprofiling()");
  lineNumber = 1375
  var call4408 = callmethod(this,"out", [1], string4407);
  var string4409 = new GraceString("declare %object** @createclosure(i32)");
  lineNumber = 1376
  var call4410 = callmethod(this,"out", [1], string4409);
  var string4411 = new GraceString("declare void @addtoclosure(%object**, %object*)");
  lineNumber = 1377
  var call4412 = callmethod(this,"out", [1], string4411);
  var string4413 = new GraceString("declare void @addclosuremethod(%object, i8*, %object(%object,");
  lineNumber = 1378
  var call4414 = callmethod(this,"out", [1], string4413);
  var string4415 = new GraceString("    i32, %object*, %object**)*, %object**)");
  lineNumber = 1379
  var call4416 = callmethod(this,"out", [1], string4415);
  var string4417 = new GraceString("declare void @setline(i32)");
  lineNumber = 1380
  var call4418 = callmethod(this,"out", [1], string4417);
  var string4419 = new GraceString("declare void @block_return(%object, %object)");
  lineNumber = 1381
  var call4420 = callmethod(this,"out", [1], string4419);
  var string4421 = new GraceString("declare void @block_savedest(%object)");
  lineNumber = 1382
  var call4422 = callmethod(this,"out", [1], string4421);
  var string4423 = new GraceString("declare %object @process_varargs(%object*, i32, i32)");
  lineNumber = 1383
  var call4424 = callmethod(this,"out", [1], string4423);
  var string4425 = new GraceString("; libc functions");
  lineNumber = 1384
  var call4426 = callmethod(this,"out", [1], string4425);
  var string4427 = new GraceString("declare i32 @puts(i8*)");
  lineNumber = 1385
  var call4428 = callmethod(this,"out", [1], string4427);
  var string4429 = new GraceString("declare i8* @malloc(i32)");
  lineNumber = 1386
  var call4430 = callmethod(this,"out", [1], string4429);
  var string4431 = new GraceString("writing file.");
  lineNumber = 1387
  var call4432 = callmethod(this,"log_verbose", [1], string4431);
  lineNumber = 1388
  lineNumber = 1387
  lineNumber = 1388
  var block4433 = Grace_allocObject();
  block4433.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4433.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4433.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4433.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4433.receiver = this;
  block4433.className = 'block<genllvm30:1388>';
  block4433.real = function(
var_x
) {
  lineNumber = 1389
  var call4434 = callmethod(this,"outprint", [1], var_x);
  return call4434;
};
  var call4435 = callmethod(Grace_prelude,"for()do", [1, 1], var_output, block4433);
  lineNumber = 1434
  lineNumber = 1437
  lineNumber = 1391
  var string4437 = new GraceString("make");
  var opresult4439 = callmethod(var_runmode, "==", [1], string4437);
  if (Grace_isTrue(opresult4439)) {
  lineNumber = 1392
  lineNumber = 1
  lineNumber = 1392
  var call4440 = callmethod(var_outfile,"close", [0]);
  lineNumber = 1394
  lineNumber = 1393
  var string4441 = new GraceString("llvm-as -o ");
  var opresult4443 = callmethod(string4441, "++", [1], var_modname);
  var string4444 = new GraceString(".gco ");
  var opresult4446 = callmethod(opresult4443, "++", [1], string4444);
  var opresult4448 = callmethod(opresult4446, "++", [1], var_modname);
  var string4449 = new GraceString(".ll");
  var opresult4451 = callmethod(opresult4448, "++", [1], string4449);
  var_cmd = opresult4451;
  lineNumber = 1396
  lineNumber = 1394
  lineNumber = 1
  lineNumber = 1394
  var call4453 = callmethod(var_io,"system", [1], var_cmd);
  var call4454 = callmethod(call4453,"not", [0]);
  if (Grace_isTrue(call4454)) {
  lineNumber = 1395
  var string4455 = new GraceString("Failed LLVM assembling");
  lineNumber = 1396
  lineNumber = 1
  lineNumber = 1395
  var call4456 = callmethod(var_io,"error", [0]);
  var call4457 = callmethod(call4456,"write", [1], string4455);
  lineNumber = 1396
  var string4458 = new GraceString("Fatal.");
  lineNumber = 1397
  var call4459 = callmethod(this,"raise", [1], string4458);
  var if4452 = call4459;
}
  lineNumber = 1398
  var string4460 = new GraceString("linking.");
  lineNumber = 1399
  var call4461 = callmethod(this,"log_verbose", [1], string4460);
  lineNumber = 1400
  lineNumber = 1399
  var string4462 = new GraceString("llvm-link -o ");
  var opresult4464 = callmethod(string4462, "++", [1], var_modname);
  var string4465 = new GraceString(".bc ");
  var opresult4467 = callmethod(opresult4464, "++", [1], string4465);
  var_cmd = opresult4467;
  lineNumber = 1400
  var string4468 = new GraceString(".o");
  var string4469 = new GraceString(".bc");
  var call4470 = callmethod(var_gracelibPath,"replace()with", [1, 1], string4468, string4469);
  var opresult4472 = callmethod(var_cmd, "++", [1], call4470);
  var string4473 = new GraceString(" ");
  var opresult4475 = callmethod(opresult4472, "++", [1], string4473);
  var_cmd = opresult4475;
  lineNumber = 1402
  lineNumber = 1401
  var opresult4477 = callmethod(var_cmd, "++", [1], var_modname);
  var string4478 = new GraceString(".gco");
  var opresult4480 = callmethod(opresult4477, "++", [1], string4478);
  var_cmd = opresult4480;
  lineNumber = 1404
  lineNumber = 1402
  lineNumber = 1404
  var block4481 = Grace_allocObject();
  block4481.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4481.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4481.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4481.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4481.receiver = this;
  block4481.className = 'block<genllvm30:1404>';
  block4481.real = function(
var_fn
) {
  lineNumber = 1403
  var string4482 = new GraceString(" ");
  var opresult4484 = callmethod(var_cmd, "++", [1], string4482);
  var opresult4486 = callmethod(opresult4484, "++", [1], var_fn);
  var_cmd = opresult4486;
  return opresult4486;
};
  var call4487 = callmethod(Grace_prelude,"for()do", [1, 1], var_linkfiles, block4481);
  lineNumber = 1407
  lineNumber = 1405
  lineNumber = 1
  lineNumber = 1405
  var call4489 = callmethod(var_io,"system", [1], var_cmd);
  var call4490 = callmethod(call4489,"not", [0]);
  if (Grace_isTrue(call4490)) {
  lineNumber = 1406
  var string4491 = new GraceString("Failed LLVM linking");
  lineNumber = 1407
  lineNumber = 1
  lineNumber = 1406
  var call4492 = callmethod(var_io,"error", [0]);
  var call4493 = callmethod(call4492,"write", [1], string4491);
  lineNumber = 1407
  var string4494 = new GraceString("Fatal.");
  lineNumber = 1408
  var call4495 = callmethod(this,"raise", [1], string4494);
  var if4488 = call4495;
}
  lineNumber = 1428
  lineNumber = 1431
  lineNumber = 1409
  var string4497 = new GraceString("native");
  var opresult4499 = callmethod(var_buildtype, "==", [1], string4497);
  lineNumber = 1431
  lineNumber = 1
  lineNumber = 1431
  lineNumber = 1
  lineNumber = 1409
  var call4500 = callmethod(var_util,"noexec", [0]);
  var call4501 = callmethod(call4500,"not", [0]);
  var opresult4503 = callmethod(opresult4499, "&", [1], call4501);
  if (Grace_isTrue(opresult4503)) {
  lineNumber = 1410
  var string4504 = new GraceString("compiling to native.");
  lineNumber = 1411
  var call4505 = callmethod(this,"log_verbose", [1], string4504);
  lineNumber = 1413
  lineNumber = 1411
  var string4506 = new GraceString("llc -o ");
  var opresult4508 = callmethod(string4506, "++", [1], var_modname);
  var string4509 = new GraceString(".s -relocation-model=pic ");
  var opresult4511 = callmethod(opresult4508, "++", [1], string4509);
  var opresult4513 = callmethod(opresult4511, "++", [1], var_modname);
  lineNumber = 1412
  var string4514 = new GraceString(".bc");
  var opresult4516 = callmethod(opresult4513, "++", [1], string4514);
  var_cmd = opresult4516;
  lineNumber = 1415
  lineNumber = 1413
  lineNumber = 1
  lineNumber = 1413
  var call4518 = callmethod(var_io,"system", [1], var_cmd);
  var call4519 = callmethod(call4518,"not", [0]);
  if (Grace_isTrue(call4519)) {
  lineNumber = 1414
  var string4520 = new GraceString("failed native assembly compilation");
  lineNumber = 1415
  lineNumber = 1
  lineNumber = 1414
  var call4521 = callmethod(var_io,"error", [0]);
  var call4522 = callmethod(call4521,"write", [1], string4520);
  lineNumber = 1415
  var string4523 = new GraceString("fatal.");
  lineNumber = 1416
  var call4524 = callmethod(this,"raise", [1], string4523);
  var if4517 = call4524;
}
  lineNumber = 1419
  lineNumber = 1418
  var string4525 = new GraceString("ld -ldl -o /dev/null 2>/dev/null");
  var_cmd = string4525;
  lineNumber = 1425
  lineNumber = 1419
  var call4527 = callmethod(var_io,"system", [1], var_cmd);
  if (Grace_isTrue(call4527)) {
  lineNumber = 1422
  lineNumber = 1420
  var string4528 = new GraceString("gcc -fPIC -Wl,--export-dynamic -o ");
  var opresult4530 = callmethod(string4528, "++", [1], var_modname);
  var string4531 = new GraceString(" -ldl ");
  var opresult4533 = callmethod(opresult4530, "++", [1], string4531);
  lineNumber = 1421
  var opresult4535 = callmethod(opresult4533, "++", [1], var_modname);
  var string4536 = new GraceString(".s");
  var opresult4538 = callmethod(opresult4535, "++", [1], string4536);
  var_cmd = opresult4538;
  var if4526 = opresult4538;
  } else {
  lineNumber = 1425
  lineNumber = 1423
  var string4539 = new GraceString("gcc -fPIC -Wl,--export-dynamic -o ");
  var opresult4541 = callmethod(string4539, "++", [1], var_modname);
  var string4542 = new GraceString(" ");
  var opresult4544 = callmethod(opresult4541, "++", [1], string4542);
  lineNumber = 1424
  var opresult4546 = callmethod(opresult4544, "++", [1], var_modname);
  var string4547 = new GraceString(".s");
  var opresult4549 = callmethod(opresult4546, "++", [1], string4547);
  var_cmd = opresult4549;
  var if4526 = opresult4549;
}
  lineNumber = 1428
  lineNumber = 1426
  lineNumber = 1
  lineNumber = 1426
  var call4551 = callmethod(var_io,"system", [1], var_cmd);
  var call4552 = callmethod(call4551,"not", [0]);
  if (Grace_isTrue(call4552)) {
  lineNumber = 1427
  var string4553 = new GraceString("failed native assembly compilation");
  lineNumber = 1428
  lineNumber = 1
  lineNumber = 1427
  var call4554 = callmethod(var_io,"error", [0]);
  var call4555 = callmethod(call4554,"write", [1], string4553);
  lineNumber = 1428
  var string4556 = new GraceString("fatal.");
  lineNumber = 1429
  var call4557 = callmethod(this,"raise", [1], string4556);
  var if4550 = call4557;
}
  var if4496 = if4550;
}
  lineNumber = 1431
  var string4558 = new GraceString("done.");
  lineNumber = 1432
  var call4559 = callmethod(this,"log_verbose", [1], string4558);
  lineNumber = 1434
  lineNumber = 1436
  lineNumber = 1432
  var string4561 = new GraceString("run");
  var opresult4563 = callmethod(var_buildtype, "==", [1], string4561);
  if (Grace_isTrue(opresult4563)) {
  lineNumber = 1434
  lineNumber = 1433
  var string4564 = new GraceString("lli ./");
  var opresult4566 = callmethod(string4564, "++", [1], var_modname);
  var string4567 = new GraceString(".bc");
  var opresult4569 = callmethod(opresult4566, "++", [1], string4567);
  var_cmd = opresult4569;
  lineNumber = 1434
  var call4570 = callmethod(var_io,"system", [1], var_cmd);
  var if4560 = call4570;
}
  var if4436 = if4560;
}
  return if4436
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compile"] = func3766;
  return this;
}
