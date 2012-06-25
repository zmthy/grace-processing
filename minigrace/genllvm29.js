function gracecode_genllvm29() {
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
  block80.className = 'block<genllvm29:59>';
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
  var string144 = new GraceString(", %object %self, i32 0)");
  var opresult146 = callmethod(opresult143, "++", [1], string144);
  lineNumber = 81
  var call147 = callmethod(this,"out", [1], opresult146);
  lineNumber = 83
  lineNumber = 81
  var string148 = new GraceString("define private %object @\"reader_");
  var opresult150 = callmethod(string148, "++", [1], var_modname);
  var string151 = new GraceString("_");
  var opresult153 = callmethod(opresult150, "++", [1], string151);
  var opresult155 = callmethod(opresult153, "++", [1], var_enm);
  var string156 = new GraceString("_");
  var opresult158 = callmethod(opresult155, "++", [1], string156);
  var opresult160 = callmethod(opresult158, "++", [1], var_myc);
  lineNumber = 82
  var string161 = new GraceString("\"(%object %self, i32 %nparams, ");
  var opresult163 = callmethod(opresult160, "++", [1], string161);
  lineNumber = 83
  var string164 = new GraceString("%object* %args, i32 %flags) {");
  var opresult166 = callmethod(opresult163, "++", [1], string164);
  lineNumber = 84
  var call167 = callmethod(this,"outprint", [1], opresult166);
  var string168 = new GraceString("  %uo = bitcast %object %self to %UserObject*");
  lineNumber = 85
  var call169 = callmethod(this,"outprint", [1], string168);
  var string170 = new GraceString("  %fieldpp = getelementptr %UserObject* %uo, i32 0, i32 3");
  lineNumber = 86
  var call171 = callmethod(this,"outprint", [1], string170);
  var string172 = new GraceString("  %fieldpf = getelementptr [0 x %object]* %fieldpp, i32 0, i32 0");
  lineNumber = 87
  var call173 = callmethod(this,"outprint", [1], string172);
  var string174 = new GraceString("  %val = load %object* %fieldpf");
  lineNumber = 88
  var call175 = callmethod(this,"outprint", [1], string174);
  var string176 = new GraceString("  ret %object %val");
  lineNumber = 89
  var call177 = callmethod(this,"outprint", [1], string176);
  var string178 = new GraceString("}");
  lineNumber = 90
  var call179 = callmethod(this,"outprint", [1], string178);
  lineNumber = 98
  lineNumber = 90
  var string180 = new GraceString("  call void @addmethod2(%object ");
  var opresult182 = callmethod(string180, "++", [1], var_selfr);
  lineNumber = 91
  var string183 = new GraceString(", i8* getelementptr([");
  var opresult185 = callmethod(opresult182, "++", [1], string183);
  lineNumber = 92
  var opresult187 = callmethod(opresult185, "++", [1], var_len);
  var string188 = new GraceString(" x i8]* @.str.methname");
  var opresult190 = callmethod(opresult187, "++", [1], string188);
  var opresult192 = callmethod(opresult190, "++", [1], var_myc);
  var string193 = new GraceString(", i32 0, i32 0), ");
  var opresult195 = callmethod(opresult192, "++", [1], string193);
  lineNumber = 93
  var string196 = new GraceString("%object(%object, i32, %object*, i32)* ");
  var opresult198 = callmethod(opresult195, "++", [1], string196);
  lineNumber = 94
  var string199 = new GraceString("getelementptr(%object ");
  var opresult201 = callmethod(opresult198, "++", [1], string199);
  lineNumber = 95
  var string202 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult204 = callmethod(opresult201, "++", [1], string202);
  lineNumber = 96
  var string205 = new GraceString("@\"reader_");
  var opresult207 = callmethod(opresult204, "++", [1], string205);
  var opresult209 = callmethod(opresult207, "++", [1], var_modname);
  var string210 = new GraceString("_");
  var opresult212 = callmethod(opresult209, "++", [1], string210);
  var opresult214 = callmethod(opresult212, "++", [1], var_enm);
  lineNumber = 97
  var string215 = new GraceString("_");
  var opresult217 = callmethod(opresult214, "++", [1], string215);
  var opresult219 = callmethod(opresult217, "++", [1], var_myc);
  lineNumber = 98
  var string220 = new GraceString("\"))");
  var opresult222 = callmethod(opresult219, "++", [1], string220);
  lineNumber = 99
  var call223 = callmethod(this,"out", [1], opresult222);
  return call223
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjouter"] = func109;
  lineNumber = 132
var func224 = function(argcv) {
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
  var string225 = new GraceString("%undefined");
  var var_val = string225;
  lineNumber = 103
  lineNumber = 105
  lineNumber = 102
  var bool227 = new GraceBoolean(false)
  lineNumber = 105
  lineNumber = 1
  lineNumber = 102
  var call228 = callmethod(var_o,"value", [0]);
  var opresult230 = callmethod(bool227, "!=", [1], call228);
  if (Grace_isTrue(opresult230)) {
  lineNumber = 103
  lineNumber = 1
  lineNumber = 103
  var call231 = callmethod(var_o,"value", [0]);
  lineNumber = 104
  var call232 = callmethod(this,"compilenode", [1], call231);
  var_val = call232;
  var if226 = call232;
}
  lineNumber = 106
  lineNumber = 105
  var var_myc = var_auto__95__count;
  lineNumber = 107
  lineNumber = 106
  var opresult234 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult234;
  lineNumber = 108
  lineNumber = 1
  lineNumber = 108
  lineNumber = 1
  lineNumber = 107
  var call235 = callmethod(var_o,"name", [0]);
  var call236 = callmethod(call235,"value", [0]);
  var var_nm = call236;
  lineNumber = 108
  var call237 = Grace_length(var_nm);
  var opresult239 = callmethod(call237, "+", [1], new GraceNum(1));
  var var_len = opresult239;
  lineNumber = 109
  lineNumber = 1
  lineNumber = 109
  var call240 = callmethod(var_nm,"_escape", [0]);
  var var_enm = call240;
  lineNumber = 112
  lineNumber = 110
  var string241 = new GraceString("@.str.methname");
  var opresult243 = callmethod(string241, "++", [1], var_myc);
  var string244 = new GraceString(" = private unnamed_addr ");
  var opresult246 = callmethod(opresult243, "++", [1], string244);
  lineNumber = 111
  var string247 = new GraceString("constant [");
  var opresult249 = callmethod(opresult246, "++", [1], string247);
  var opresult251 = callmethod(opresult249, "++", [1], var_len);
  var string252 = new GraceString(" x i8] c\"");
  var opresult254 = callmethod(opresult251, "++", [1], string252);
  var opresult256 = callmethod(opresult254, "++", [1], var_enm);
  var string257 = new GraceString("\\00\"");
  var opresult259 = callmethod(opresult256, "++", [1], string257);
  var var_con = opresult259;
  lineNumber = 112
  var call260 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 113
  var string261 = new GraceString("; OBJECT CONST DEC ");
  var opresult263 = callmethod(string261, "++", [1], var_enm);
  lineNumber = 114
  var call264 = callmethod(this,"out", [1], opresult263);
  var string265 = new GraceString("  call void @adddatum2(%object ");
  var opresult267 = callmethod(string265, "++", [1], var_selfr);
  var string268 = new GraceString(", %object ");
  var opresult270 = callmethod(opresult267, "++", [1], string268);
  var opresult272 = callmethod(opresult270, "++", [1], var_val);
  var string273 = new GraceString(", i32 ");
  var opresult275 = callmethod(opresult272, "++", [1], string273);
  var opresult277 = callmethod(opresult275, "++", [1], var_pos);
  var string278 = new GraceString(")");
  var opresult280 = callmethod(opresult277, "++", [1], string278);
  lineNumber = 115
  var call281 = callmethod(this,"out", [1], opresult280);
  lineNumber = 117
  lineNumber = 115
  var string282 = new GraceString("define private %object @\"reader_");
  var opresult284 = callmethod(string282, "++", [1], var_modname);
  var string285 = new GraceString("_");
  var opresult287 = callmethod(opresult284, "++", [1], string285);
  var opresult289 = callmethod(opresult287, "++", [1], var_enm);
  var string290 = new GraceString("_");
  var opresult292 = callmethod(opresult289, "++", [1], string290);
  var opresult294 = callmethod(opresult292, "++", [1], var_myc);
  lineNumber = 116
  var string295 = new GraceString("\"(%object %self, i32 %nparams, ");
  var opresult297 = callmethod(opresult294, "++", [1], string295);
  lineNumber = 117
  var string298 = new GraceString("%object* %args, i32 %flags) {");
  var opresult300 = callmethod(opresult297, "++", [1], string298);
  lineNumber = 118
  var call301 = callmethod(this,"outprint", [1], opresult300);
  var string302 = new GraceString("  %uo = bitcast %object %self to %UserObject*");
  lineNumber = 119
  var call303 = callmethod(this,"outprint", [1], string302);
  var string304 = new GraceString("  %fieldpp = getelementptr %UserObject* %uo, i32 0, i32 3");
  lineNumber = 120
  var call305 = callmethod(this,"outprint", [1], string304);
  var string306 = new GraceString("  %fieldpf = getelementptr [0 x %object]* %fieldpp, i32 0, i32 ");
  var opresult308 = callmethod(string306, "++", [1], var_pos);
  var string309 = new GraceString("");
  var opresult311 = callmethod(opresult308, "++", [1], string309);
  lineNumber = 121
  var call312 = callmethod(this,"outprint", [1], opresult311);
  var string313 = new GraceString("  %val = load %object* %fieldpf");
  lineNumber = 122
  var call314 = callmethod(this,"outprint", [1], string313);
  var string315 = new GraceString("  ret %object %val");
  lineNumber = 123
  var call316 = callmethod(this,"outprint", [1], string315);
  var string317 = new GraceString("}");
  lineNumber = 124
  var call318 = callmethod(this,"outprint", [1], string317);
  lineNumber = 132
  lineNumber = 124
  var string319 = new GraceString("  call void @addmethod2(%object ");
  var opresult321 = callmethod(string319, "++", [1], var_selfr);
  lineNumber = 125
  var string322 = new GraceString(", i8* getelementptr([");
  var opresult324 = callmethod(opresult321, "++", [1], string322);
  lineNumber = 126
  var opresult326 = callmethod(opresult324, "++", [1], var_len);
  var string327 = new GraceString(" x i8]* @.str.methname");
  var opresult329 = callmethod(opresult326, "++", [1], string327);
  var opresult331 = callmethod(opresult329, "++", [1], var_myc);
  var string332 = new GraceString(", i32 0, i32 0), ");
  var opresult334 = callmethod(opresult331, "++", [1], string332);
  lineNumber = 127
  var string335 = new GraceString("%object(%object, i32, %object*, i32)* ");
  var opresult337 = callmethod(opresult334, "++", [1], string335);
  lineNumber = 128
  var string338 = new GraceString("getelementptr(%object ");
  var opresult340 = callmethod(opresult337, "++", [1], string338);
  lineNumber = 129
  var string341 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult343 = callmethod(opresult340, "++", [1], string341);
  lineNumber = 130
  var string344 = new GraceString("@\"reader_");
  var opresult346 = callmethod(opresult343, "++", [1], string344);
  var opresult348 = callmethod(opresult346, "++", [1], var_modname);
  var string349 = new GraceString("_");
  var opresult351 = callmethod(opresult348, "++", [1], string349);
  var opresult353 = callmethod(opresult351, "++", [1], var_enm);
  lineNumber = 131
  var string354 = new GraceString("_");
  var opresult356 = callmethod(opresult353, "++", [1], string354);
  var opresult358 = callmethod(opresult356, "++", [1], var_myc);
  lineNumber = 132
  var string359 = new GraceString("\"))");
  var opresult361 = callmethod(opresult358, "++", [1], string359);
  lineNumber = 133
  var call362 = callmethod(this,"out", [1], opresult361);
  return call362
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjdefdec"] = func224;
  lineNumber = 193
var func363 = function(argcv) {
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
  lineNumber = 136
  lineNumber = 135
  var string364 = new GraceString("%undefined");
  var var_val = string364;
  lineNumber = 137
  lineNumber = 139
  lineNumber = 136
  var bool366 = new GraceBoolean(false)
  lineNumber = 139
  lineNumber = 1
  lineNumber = 136
  var call367 = callmethod(var_o,"value", [0]);
  var opresult369 = callmethod(bool366, "!=", [1], call367);
  if (Grace_isTrue(opresult369)) {
  lineNumber = 137
  lineNumber = 1
  lineNumber = 137
  var call370 = callmethod(var_o,"value", [0]);
  lineNumber = 138
  var call371 = callmethod(this,"compilenode", [1], call370);
  var_val = call371;
  var if365 = call371;
}
  lineNumber = 140
  lineNumber = 139
  var var_myc = var_auto__95__count;
  lineNumber = 141
  lineNumber = 140
  var opresult373 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult373;
  lineNumber = 142
  lineNumber = 1
  lineNumber = 142
  lineNumber = 1
  lineNumber = 141
  var call374 = callmethod(var_o,"name", [0]);
  var call375 = callmethod(call374,"value", [0]);
  var var_nm = call375;
  lineNumber = 142
  var call376 = Grace_length(var_nm);
  var opresult378 = callmethod(call376, "+", [1], new GraceNum(1));
  var var_len = opresult378;
  lineNumber = 143
  lineNumber = 1
  lineNumber = 143
  var call379 = callmethod(var_nm,"_escape", [0]);
  var var_enm = call379;
  lineNumber = 146
  lineNumber = 144
  var string380 = new GraceString("@.str.methname");
  var opresult382 = callmethod(string380, "++", [1], var_myc);
  var string383 = new GraceString(" = private unnamed_addr ");
  var opresult385 = callmethod(opresult382, "++", [1], string383);
  lineNumber = 145
  var string386 = new GraceString("constant [");
  var opresult388 = callmethod(opresult385, "++", [1], string386);
  var opresult390 = callmethod(opresult388, "++", [1], var_len);
  var string391 = new GraceString(" x i8] c\"");
  var opresult393 = callmethod(opresult390, "++", [1], string391);
  var opresult395 = callmethod(opresult393, "++", [1], var_enm);
  var string396 = new GraceString("\\00\"");
  var opresult398 = callmethod(opresult395, "++", [1], string396);
  var var_con = opresult398;
  lineNumber = 146
  var call399 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 147
  var string400 = new GraceString("; OBJECT VAR DEC ");
  var opresult402 = callmethod(string400, "++", [1], var_nm);
  lineNumber = 148
  var call403 = callmethod(this,"out", [1], opresult402);
  var string404 = new GraceString("  call void @adddatum2(%object ");
  var opresult406 = callmethod(string404, "++", [1], var_selfr);
  var string407 = new GraceString(", %object ");
  var opresult409 = callmethod(opresult406, "++", [1], string407);
  var opresult411 = callmethod(opresult409, "++", [1], var_val);
  var string412 = new GraceString(", i32 ");
  var opresult414 = callmethod(opresult411, "++", [1], string412);
  var opresult416 = callmethod(opresult414, "++", [1], var_pos);
  var string417 = new GraceString(")");
  var opresult419 = callmethod(opresult416, "++", [1], string417);
  lineNumber = 149
  var call420 = callmethod(this,"out", [1], opresult419);
  lineNumber = 151
  lineNumber = 149
  var string421 = new GraceString("define private %object @\"reader_");
  var opresult423 = callmethod(string421, "++", [1], var_modname);
  var string424 = new GraceString("_");
  var opresult426 = callmethod(opresult423, "++", [1], string424);
  var opresult428 = callmethod(opresult426, "++", [1], var_enm);
  var string429 = new GraceString("_");
  var opresult431 = callmethod(opresult428, "++", [1], string429);
  var opresult433 = callmethod(opresult431, "++", [1], var_myc);
  lineNumber = 150
  var string434 = new GraceString("\"(%object %self, i32 %nparams, ");
  var opresult436 = callmethod(opresult433, "++", [1], string434);
  lineNumber = 151
  var string437 = new GraceString("%object* %args, i32 %flags) {");
  var opresult439 = callmethod(opresult436, "++", [1], string437);
  lineNumber = 152
  var call440 = callmethod(this,"outprint", [1], opresult439);
  var string441 = new GraceString("  %uo = bitcast %object %self to %UserObject*");
  lineNumber = 153
  var call442 = callmethod(this,"outprint", [1], string441);
  var string443 = new GraceString("  %fieldpp = getelementptr %UserObject* %uo, i32 0, i32 3");
  lineNumber = 154
  var call444 = callmethod(this,"outprint", [1], string443);
  var string445 = new GraceString("  %fieldpf = getelementptr [0 x %object]* %fieldpp, i32 0, i32 ");
  var opresult447 = callmethod(string445, "++", [1], var_pos);
  var string448 = new GraceString("");
  var opresult450 = callmethod(opresult447, "++", [1], string448);
  lineNumber = 155
  var call451 = callmethod(this,"outprint", [1], opresult450);
  var string452 = new GraceString("  %val = load %object* %fieldpf");
  lineNumber = 156
  var call453 = callmethod(this,"outprint", [1], string452);
  var string454 = new GraceString("  ret %object %val");
  lineNumber = 157
  var call455 = callmethod(this,"outprint", [1], string454);
  var string456 = new GraceString("}");
  lineNumber = 158
  var call457 = callmethod(this,"outprint", [1], string456);
  lineNumber = 166
  lineNumber = 158
  var string458 = new GraceString("  call void @addmethod2(%object ");
  var opresult460 = callmethod(string458, "++", [1], var_selfr);
  lineNumber = 159
  var string461 = new GraceString(", i8* getelementptr([");
  var opresult463 = callmethod(opresult460, "++", [1], string461);
  lineNumber = 160
  var opresult465 = callmethod(opresult463, "++", [1], var_len);
  var string466 = new GraceString(" x i8]* @.str.methname");
  var opresult468 = callmethod(opresult465, "++", [1], string466);
  var opresult470 = callmethod(opresult468, "++", [1], var_myc);
  var string471 = new GraceString(", i32 0, i32 0), ");
  var opresult473 = callmethod(opresult470, "++", [1], string471);
  lineNumber = 161
  var string474 = new GraceString("%object(%object, i32, %object*, i32)* ");
  var opresult476 = callmethod(opresult473, "++", [1], string474);
  lineNumber = 162
  var string477 = new GraceString("getelementptr(%object ");
  var opresult479 = callmethod(opresult476, "++", [1], string477);
  lineNumber = 163
  var string480 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult482 = callmethod(opresult479, "++", [1], string480);
  lineNumber = 164
  var string483 = new GraceString("@\"reader_");
  var opresult485 = callmethod(opresult482, "++", [1], string483);
  var opresult487 = callmethod(opresult485, "++", [1], var_modname);
  var string488 = new GraceString("_");
  var opresult490 = callmethod(opresult487, "++", [1], string488);
  var opresult492 = callmethod(opresult490, "++", [1], var_enm);
  lineNumber = 165
  var string493 = new GraceString("_");
  var opresult495 = callmethod(opresult492, "++", [1], string493);
  var opresult497 = callmethod(opresult495, "++", [1], var_myc);
  lineNumber = 166
  var string498 = new GraceString("\"))");
  var opresult500 = callmethod(opresult497, "++", [1], string498);
  lineNumber = 167
  var call501 = callmethod(this,"out", [1], opresult500);
  lineNumber = 168
  lineNumber = 167
  var string502 = new GraceString(":=");
  var opresult504 = callmethod(var_nm, "++", [1], string502);
  var var_nmw = opresult504;
  lineNumber = 168
  var call505 = Grace_length(var_nmw);
  var opresult507 = callmethod(call505, "+", [1], new GraceNum(1));
  var_len = opresult507;
  lineNumber = 169
  lineNumber = 1
  lineNumber = 169
  var call508 = callmethod(var_nmw,"_escape", [0]);
  var_nmw = call508;
  lineNumber = 172
  lineNumber = 170
  var string509 = new GraceString("@.str.methnamew");
  var opresult511 = callmethod(string509, "++", [1], var_myc);
  var string512 = new GraceString(" = private unnamed_addr ");
  var opresult514 = callmethod(opresult511, "++", [1], string512);
  lineNumber = 171
  var string515 = new GraceString("constant [");
  var opresult517 = callmethod(opresult514, "++", [1], string515);
  var opresult519 = callmethod(opresult517, "++", [1], var_len);
  var string520 = new GraceString(" x i8] c\"");
  var opresult522 = callmethod(opresult519, "++", [1], string520);
  var opresult524 = callmethod(opresult522, "++", [1], var_nmw);
  var string525 = new GraceString("\\00\"");
  var opresult527 = callmethod(opresult524, "++", [1], string525);
  var_con = opresult527;
  lineNumber = 172
  var call528 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 175
  lineNumber = 173
  var string529 = new GraceString("define private %object @\"writer_");
  var opresult531 = callmethod(string529, "++", [1], var_modname);
  var string532 = new GraceString("_");
  var opresult534 = callmethod(opresult531, "++", [1], string532);
  var opresult536 = callmethod(opresult534, "++", [1], var_enm);
  var string537 = new GraceString("_");
  var opresult539 = callmethod(opresult536, "++", [1], string537);
  var opresult541 = callmethod(opresult539, "++", [1], var_myc);
  lineNumber = 174
  var string542 = new GraceString("\"(%object %self, i32 %nparams, ");
  var opresult544 = callmethod(opresult541, "++", [1], string542);
  lineNumber = 175
  var string545 = new GraceString("%object* %args, i32 %flags) {");
  var opresult547 = callmethod(opresult544, "++", [1], string545);
  lineNumber = 176
  var call548 = callmethod(this,"outprint", [1], opresult547);
  var string549 = new GraceString("  %params = getelementptr %object* %args, i32 0");
  lineNumber = 177
  var call550 = callmethod(this,"outprint", [1], string549);
  var string551 = new GraceString("  %par0 = load %object* %params");
  lineNumber = 178
  var call552 = callmethod(this,"outprint", [1], string551);
  var string553 = new GraceString("  %uo = bitcast %object %self to %UserObject*");
  lineNumber = 179
  var call554 = callmethod(this,"outprint", [1], string553);
  var string555 = new GraceString("  %fieldpp = getelementptr %UserObject* %uo, i32 0, i32 3");
  lineNumber = 180
  var call556 = callmethod(this,"outprint", [1], string555);
  var string557 = new GraceString("  %fieldpf = getelementptr [0 x %object]* %fieldpp, i32 0, i32 ");
  var opresult559 = callmethod(string557, "++", [1], var_pos);
  var string560 = new GraceString("");
  var opresult562 = callmethod(opresult559, "++", [1], string560);
  lineNumber = 181
  var call563 = callmethod(this,"outprint", [1], opresult562);
  var string564 = new GraceString("  store %object %par0, %object* %fieldpf");
  lineNumber = 182
  var call565 = callmethod(this,"outprint", [1], string564);
  var string566 = new GraceString("  %none = load %object* @none");
  lineNumber = 183
  var call567 = callmethod(this,"outprint", [1], string566);
  var string568 = new GraceString("  ret %object %none");
  lineNumber = 184
  var call569 = callmethod(this,"outprint", [1], string568);
  var string570 = new GraceString("}");
  lineNumber = 185
  var call571 = callmethod(this,"outprint", [1], string570);
  lineNumber = 193
  lineNumber = 185
  var string572 = new GraceString("  call void @addmethod2(%object ");
  var opresult574 = callmethod(string572, "++", [1], var_selfr);
  lineNumber = 186
  var string575 = new GraceString(", i8* getelementptr([");
  var opresult577 = callmethod(opresult574, "++", [1], string575);
  lineNumber = 187
  var opresult579 = callmethod(opresult577, "++", [1], var_len);
  var string580 = new GraceString(" x i8]* @.str.methnamew");
  var opresult582 = callmethod(opresult579, "++", [1], string580);
  var opresult584 = callmethod(opresult582, "++", [1], var_myc);
  var string585 = new GraceString(", i32 0, i32 0), ");
  var opresult587 = callmethod(opresult584, "++", [1], string585);
  lineNumber = 188
  var string588 = new GraceString("%object(%object, i32, %object*, i32)* ");
  var opresult590 = callmethod(opresult587, "++", [1], string588);
  lineNumber = 189
  var string591 = new GraceString("getelementptr(%object ");
  var opresult593 = callmethod(opresult590, "++", [1], string591);
  lineNumber = 190
  var string594 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult596 = callmethod(opresult593, "++", [1], string594);
  lineNumber = 191
  var string597 = new GraceString("@\"writer_");
  var opresult599 = callmethod(opresult596, "++", [1], string597);
  var opresult601 = callmethod(opresult599, "++", [1], var_modname);
  var string602 = new GraceString("_");
  var opresult604 = callmethod(opresult601, "++", [1], string602);
  var opresult606 = callmethod(opresult604, "++", [1], var_enm);
  lineNumber = 192
  var string607 = new GraceString("_");
  var opresult609 = callmethod(opresult606, "++", [1], string607);
  var opresult611 = callmethod(opresult609, "++", [1], var_myc);
  lineNumber = 193
  var string612 = new GraceString("\"))");
  var opresult614 = callmethod(opresult611, "++", [1], string612);
  lineNumber = 194
  var call615 = callmethod(this,"out", [1], opresult614);
  return call615
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjvardec"] = func363;
  lineNumber = 203
var func616 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 197
  lineNumber = 1
  lineNumber = 196
  var call617 = callmethod(var_o,"params", [0]);
  var var_params = call617;
  lineNumber = 197
  lineNumber = 1
  lineNumber = 197
  var call619 = callmethod(var_o,"value", [0]);
  lineNumber = 1
  lineNumber = 197
  var call620 = callmethod(var_o,"superclass", [0]);
  var call621 = callmethod(var_ast,"astobject", [2], call619, call620);
  var array618 = new GraceList([
call621,
]);

  var var_mbody = array618;
  lineNumber = 199
  lineNumber = 198
  var string622 = new GraceString("new");
  var bool623 = new GraceBoolean(false)
  var call624 = callmethod(var_ast,"astidentifier", [2], string622, bool623);
  lineNumber = 199
  var bool625 = new GraceBoolean(false)
  lineNumber = 198
  var call626 = callmethod(var_ast,"astmethod", [4], call624, var_params, var_mbody, bool625);
  var var_newmeth = call626;
  lineNumber = 200
  var array627 = new GraceList([
var_newmeth,
]);

  var var_obody = array627;
  lineNumber = 201
  var bool628 = new GraceBoolean(false)
  var call629 = callmethod(var_ast,"astobject", [2], var_obody, bool628);
  var var_cobj = call629;
  lineNumber = 202
  lineNumber = 1
  lineNumber = 202
  var call630 = callmethod(var_o,"name", [0]);
  var bool631 = new GraceBoolean(false)
  var call632 = callmethod(var_ast,"astdefdec", [3], call630, var_cobj, bool631);
  var var_con = call632;
  lineNumber = 203
  lineNumber = 1
  lineNumber = 203
  lineNumber = 204
  var call633 = callmethod(this,"compilenode", [1], var_con);
  lineNumber = 203
  var call634 = callmethod(var_o,"register:=", [1], call633);
  return call634
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileclass"] = func616;
  lineNumber = 248
var func635 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 207
  lineNumber = 206
  var var_origInBlock = var_inBlock;
  lineNumber = 208
  lineNumber = 207
  var bool636 = new GraceBoolean(false)
  var_inBlock = bool636;
  lineNumber = 209
  lineNumber = 208
  var var_myc = var_auto__95__count;
  lineNumber = 210
  lineNumber = 209
  var opresult638 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult638;
  lineNumber = 211
  lineNumber = 210
  var string639 = new GraceString("%obj");
  var opresult641 = callmethod(string639, "++", [1], var_myc);
  var var_selfr = opresult641;
  lineNumber = 212
  lineNumber = 211
  var var_numFields = new GraceNum(1);
  lineNumber = 213
  lineNumber = 212
  var var_numMethods = new GraceNum(0);
  lineNumber = 214
  lineNumber = 213
  var var_pos = new GraceNum(1);
  lineNumber = 220
  lineNumber = 214
  lineNumber = 1
  lineNumber = 214
  var call642 = callmethod(var_o,"value", [0]);
  lineNumber = 220
  var block643 = Grace_allocObject();
  block643.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block643.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block643.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block643.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block643.receiver = this;
  block643.className = 'block<genllvm29:220>';
  block643.real = function(
var_e
) {
  lineNumber = 217
  lineNumber = 218
  lineNumber = 1
  lineNumber = 215
  var call645 = callmethod(var_e,"kind", [0]);
  var string646 = new GraceString("vardec");
  var opresult648 = callmethod(call645, "==", [1], string646);
  if (Grace_isTrue(opresult648)) {
  lineNumber = 217
  lineNumber = 216
  var opresult650 = callmethod(var_numMethods, "+", [1], new GraceNum(1));
  var_numMethods = opresult650;
  var if644 = opresult650;
}
  lineNumber = 219
  lineNumber = 218
  var opresult652 = callmethod(var_numMethods, "+", [1], new GraceNum(1));
  var_numMethods = opresult652;
  lineNumber = 220
  lineNumber = 219
  var opresult654 = callmethod(var_numFields, "+", [1], new GraceNum(1));
  var_numFields = opresult654;
  return opresult654;
};
  var call655 = callmethod(Grace_prelude,"for()do", [1, 1], call642, block643);
  lineNumber = 223
  lineNumber = 224
  lineNumber = 221
  var opresult658 = callmethod(var_numFields, "==", [1], new GraceNum(3));
  if (Grace_isTrue(opresult658)) {
  lineNumber = 223
  lineNumber = 222
  var_numFields = new GraceNum(4);
  var if656 = new GraceNum(4);
}
  lineNumber = 228
  lineNumber = 230
  lineNumber = 1
  lineNumber = 224
  var call660 = callmethod(var_o,"superclass", [0]);
  var bool661 = new GraceBoolean(false)
  var opresult663 = callmethod(call660, "/=", [1], bool661);
  if (Grace_isTrue(opresult663)) {
  lineNumber = 225
  lineNumber = 1
  lineNumber = 225
  var call664 = callmethod(var_o,"superclass", [0]);
  lineNumber = 226
  var call665 = callmethod(this,"compilenode", [1], call664);
  var_selfr = call665;
  var if659 = call665;
  } else {
  lineNumber = 228
  lineNumber = 227
  var string666 = new GraceString("  ");
  var opresult668 = callmethod(string666, "++", [1], var_selfr);
  lineNumber = 228
  lineNumber = 227
  var string669 = new GraceString(" = call %object @alloc_obj2(i32 ");
  var opresult671 = callmethod(string669, "++", [1], var_numMethods);
  var string672 = new GraceString(",");
  var opresult674 = callmethod(opresult671, "++", [1], string672);
  var opresult676 = callmethod(opresult668, "++", [1], opresult674);
  lineNumber = 228
  var string677 = new GraceString("i32 ");
  var opresult679 = callmethod(string677, "++", [1], var_numFields);
  var string680 = new GraceString(")");
  var opresult682 = callmethod(opresult679, "++", [1], string680);
  var opresult684 = callmethod(opresult676, "++", [1], opresult682);
  lineNumber = 229
  var call685 = callmethod(this,"out", [1], opresult684);
  var if659 = call685;
}
  lineNumber = 230
  lineNumber = 231
  var call686 = callmethod(this,"compileobjouter", [1], var_selfr);
  var string687 = new GraceString("  call void @adddatum2(%object ");
  var opresult689 = callmethod(string687, "++", [1], var_selfr);
  var string690 = new GraceString(", %object %self, i32 0)");
  var opresult692 = callmethod(opresult689, "++", [1], string690);
  lineNumber = 232
  var call693 = callmethod(this,"out", [1], opresult692);
  lineNumber = 243
  lineNumber = 232
  lineNumber = 1
  lineNumber = 232
  var call694 = callmethod(var_o,"value", [0]);
  lineNumber = 243
  var block695 = Grace_allocObject();
  block695.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block695.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block695.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block695.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block695.receiver = this;
  block695.className = 'block<genllvm29:243>';
  block695.real = function(
var_e
) {
  lineNumber = 234
  lineNumber = 236
  lineNumber = 1
  lineNumber = 233
  var call697 = callmethod(var_e,"kind", [0]);
  var string698 = new GraceString("method");
  var opresult700 = callmethod(call697, "==", [1], string698);
  if (Grace_isTrue(opresult700)) {
  lineNumber = 234
  lineNumber = 235
  var call701 = callmethod(this,"compilemethod", [3], var_e, var_selfr, var_pos);
  var if696 = call701;
}
  lineNumber = 237
  lineNumber = 239
  lineNumber = 1
  lineNumber = 236
  var call703 = callmethod(var_e,"kind", [0]);
  var string704 = new GraceString("vardec");
  var opresult706 = callmethod(call703, "==", [1], string704);
  if (Grace_isTrue(opresult706)) {
  lineNumber = 237
  lineNumber = 238
  var call707 = callmethod(this,"compileobjvardec", [3], var_e, var_selfr, var_pos);
  var if702 = call707;
}
  lineNumber = 240
  lineNumber = 242
  lineNumber = 1
  lineNumber = 239
  var call709 = callmethod(var_e,"kind", [0]);
  var string710 = new GraceString("defdec");
  var opresult712 = callmethod(call709, "==", [1], string710);
  if (Grace_isTrue(opresult712)) {
  lineNumber = 240
  lineNumber = 241
  var call713 = callmethod(this,"compileobjdefdec", [3], var_e, var_selfr, var_pos);
  var if708 = call713;
}
  lineNumber = 243
  lineNumber = 242
  var opresult715 = callmethod(var_pos, "+", [1], new GraceNum(1));
  var_pos = opresult715;
  return opresult715;
};
  var call716 = callmethod(Grace_prelude,"for()do", [1, 1], call694, block695);
  lineNumber = 245
  lineNumber = 244
  var string717 = new GraceString("  call void @set_type(%object ");
  var opresult719 = callmethod(string717, "++", [1], var_selfr);
  var string720 = new GraceString(", ");
  var opresult722 = callmethod(opresult719, "++", [1], string720);
  lineNumber = 245
  var string723 = new GraceString("i16 ");
  lineNumber = 1
  lineNumber = 245
  var call724 = callmethod(var_o,"otype", [0]);
  var call725 = callmethod(var_subtype,"typeId", [1], call724);
  var opresult727 = callmethod(string723, "++", [1], call725);
  var string728 = new GraceString(")");
  var opresult730 = callmethod(opresult727, "++", [1], string728);
  var opresult732 = callmethod(opresult722, "++", [1], opresult730);
  lineNumber = 246
  var call733 = callmethod(this,"out", [1], opresult732);
  lineNumber = 247
  lineNumber = 1
  lineNumber = 246
  var call734 = callmethod(var_o,"register:=", [1], var_selfr);
  lineNumber = 248
  lineNumber = 247
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
  this.methods["compileobject"] = func635;
  lineNumber = 268
var func735 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 251
  lineNumber = 250
  var var_origInBlock = var_inBlock;
  lineNumber = 252
  lineNumber = 251
  var bool736 = new GraceBoolean(true)
  var_inBlock = bool736;
  lineNumber = 253
  lineNumber = 252
  var var_myc = var_auto__95__count;
  lineNumber = 254
  lineNumber = 253
  var opresult738 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult738;
  lineNumber = 255
  lineNumber = 254
  var string739 = new GraceString("apply");
  var bool740 = new GraceBoolean(false)
  var call741 = callmethod(var_ast,"astidentifier", [2], string739, bool740);
  lineNumber = 255
  lineNumber = 1
  lineNumber = 255
  var call742 = callmethod(var_o,"params", [0]);
  lineNumber = 1
  lineNumber = 255
  var call743 = callmethod(var_o,"body", [0]);
  var bool744 = new GraceBoolean(false)
  lineNumber = 254
  var call745 = callmethod(var_ast,"astmethod", [4], call741, call742, call743, bool744);
  var var_applymeth = call745;
  lineNumber = 257
  lineNumber = 1
  lineNumber = 256
  var bool746 = new GraceBoolean(true)
  var call747 = callmethod(var_applymeth,"selfclosure:=", [1], bool746);
  lineNumber = 257
  var array748 = new GraceList([
var_applymeth,
]);

  var bool749 = new GraceBoolean(false)
  var call750 = callmethod(var_ast,"astobject", [2], array748, bool749);
  var var_objbody = call750;
  lineNumber = 258
  lineNumber = 259
  var call751 = callmethod(this,"compilenode", [1], var_objbody);
  var var_obj = call751;
  lineNumber = 260
  lineNumber = 259
  var string752 = new GraceString("Block<");
  var opresult754 = callmethod(string752, "++", [1], var_modname);
  var string755 = new GraceString(":");
  var opresult757 = callmethod(opresult754, "++", [1], string755);
  var opresult759 = callmethod(opresult757, "++", [1], var_myc);
  var string760 = new GraceString(">");
  var opresult762 = callmethod(opresult759, "++", [1], string760);
  var var_modn = opresult762;
  lineNumber = 262
  lineNumber = 260
  var string763 = new GraceString("@.str.block");
  var opresult765 = callmethod(string763, "++", [1], var_myc);
  var string766 = new GraceString(" = private unnamed_addr ");
  var opresult768 = callmethod(opresult765, "++", [1], string766);
  lineNumber = 262
  lineNumber = 261
  var string769 = new GraceString("constant [");
  lineNumber = 262
  lineNumber = 1
  lineNumber = 261
  var call770 = callmethod(var_modn,"size", [0]);
  var opresult772 = callmethod(call770, "+", [1], new GraceNum(1));
  var opresult774 = callmethod(string769, "++", [1], opresult772);
  var string775 = new GraceString(" x i8] c\"");
  var opresult777 = callmethod(opresult774, "++", [1], string775);
  var opresult779 = callmethod(opresult777, "++", [1], var_modn);
  var string780 = new GraceString("\\00\"");
  var opresult782 = callmethod(opresult779, "++", [1], string780);
  var opresult784 = callmethod(opresult768, "++", [1], opresult782);
  var var_con = opresult784;
  lineNumber = 262
  var call785 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 265
  lineNumber = 263
  var string786 = new GraceString("  call void @setclassname(%object ");
  var opresult788 = callmethod(string786, "++", [1], var_obj);
  var string789 = new GraceString(", ");
  var opresult791 = callmethod(opresult788, "++", [1], string789);
  lineNumber = 265
  lineNumber = 264
  var string792 = new GraceString("i8* getelementptr([");
  lineNumber = 265
  lineNumber = 1
  lineNumber = 264
  var call793 = callmethod(var_modn,"size", [0]);
  var opresult795 = callmethod(call793, "+", [1], new GraceNum(1));
  var opresult797 = callmethod(string792, "++", [1], opresult795);
  var string798 = new GraceString(" x i8]* @.str.block");
  var opresult800 = callmethod(opresult797, "++", [1], string798);
  var opresult802 = callmethod(opresult800, "++", [1], var_myc);
  var string803 = new GraceString(",");
  var opresult805 = callmethod(opresult802, "++", [1], string803);
  var opresult807 = callmethod(opresult791, "++", [1], opresult805);
  lineNumber = 265
  var string808 = new GraceString("i32 0,i32 0))");
  var opresult810 = callmethod(opresult807, "++", [1], string808);
  lineNumber = 266
  var call811 = callmethod(this,"out", [1], opresult810);
  lineNumber = 267
  lineNumber = 1
  lineNumber = 266
  var call812 = callmethod(var_o,"register:=", [1], var_obj);
  lineNumber = 268
  lineNumber = 267
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
  this.methods["compileblock"] = func735;
  lineNumber = 307
var func813 = function(argcv) {
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
  var opresult815 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult815;
  lineNumber = 272
  lineNumber = 1
  lineNumber = 272
  var call816 = callmethod(var_o,"value", [0]);
  lineNumber = 273
  var call817 = callmethod(this,"compilenode", [1], call816);
  var var_over = call817;
  lineNumber = 274
  lineNumber = 1
  lineNumber = 273
  var call818 = callmethod(var_o,"body", [0]);
  var var_blk = call818;
  lineNumber = 274
  lineNumber = 275
  var call819 = callmethod(this,"compilenode", [1], var_blk);
  var var_obj = call819;
  var string820 = new GraceString("  store %object ");
  var opresult822 = callmethod(string820, "++", [1], var_over);
  var string823 = new GraceString(", %object* %params_0");
  var opresult825 = callmethod(opresult822, "++", [1], string823);
  lineNumber = 276
  var call826 = callmethod(this,"out", [1], opresult825);
  lineNumber = 278
  lineNumber = 276
  var string827 = new GraceString("  %iter");
  var opresult829 = callmethod(string827, "++", [1], var_myc);
  var string830 = new GraceString(" = call %object @callmethod(%object ");
  var opresult832 = callmethod(opresult829, "++", [1], string830);
  var opresult834 = callmethod(opresult832, "++", [1], var_over);
  lineNumber = 277
  var string835 = new GraceString(", i8* getelementptr([5 x i8]* @.str._iter");
  var opresult837 = callmethod(opresult834, "++", [1], string835);
  lineNumber = 278
  var string838 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult840 = callmethod(opresult837, "++", [1], string838);
  lineNumber = 280
  var call841 = callmethod(this,"out", [1], opresult840);
  var string842 = new GraceString("  br label %BeginFor");
  var opresult844 = callmethod(string842, "++", [1], var_myc);
  lineNumber = 281
  var call845 = callmethod(this,"out", [1], opresult844);
  var string846 = new GraceString("BeginFor");
  var opresult848 = callmethod(string846, "++", [1], var_myc);
  lineNumber = 282
  var call849 = callmethod(this,"beginblock", [1], opresult848);
  lineNumber = 285
  lineNumber = 282
  var string850 = new GraceString("  %condobj");
  var opresult852 = callmethod(string850, "++", [1], var_myc);
  var string853 = new GraceString(" = call %object @callmethod(%object %iter");
  var opresult855 = callmethod(opresult852, "++", [1], string853);
  lineNumber = 283
  var opresult857 = callmethod(opresult855, "++", [1], var_myc);
  lineNumber = 284
  var string858 = new GraceString(", i8* getelementptr([9 x i8]* @.str._havemore");
  var opresult860 = callmethod(opresult857, "++", [1], string858);
  lineNumber = 285
  var string861 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult863 = callmethod(opresult860, "++", [1], string861);
  lineNumber = 286
  var call864 = callmethod(this,"out", [1], opresult863);
  lineNumber = 287
  lineNumber = 286
  var string865 = new GraceString("%cond");
  var opresult867 = callmethod(string865, "++", [1], var_myc);
  var var_creg = opresult867;
  lineNumber = 288
  lineNumber = 287
  var string868 = new GraceString("  ");
  var opresult870 = callmethod(string868, "++", [1], var_creg);
  var string871 = new GraceString("_valp = call i1 @istrue(%object %condobj");
  var opresult873 = callmethod(opresult870, "++", [1], string871);
  lineNumber = 288
  var opresult875 = callmethod(opresult873, "++", [1], var_myc);
  var string876 = new GraceString(")");
  var opresult878 = callmethod(opresult875, "++", [1], string876);
  lineNumber = 289
  var call879 = callmethod(this,"out", [1], opresult878);
  var string880 = new GraceString("  ");
  var opresult882 = callmethod(string880, "++", [1], var_creg);
  var string883 = new GraceString(" = icmp eq i1 0, ");
  var opresult885 = callmethod(opresult882, "++", [1], string883);
  var opresult887 = callmethod(opresult885, "++", [1], var_creg);
  var string888 = new GraceString("_valp");
  var opresult890 = callmethod(opresult887, "++", [1], string888);
  lineNumber = 290
  var call891 = callmethod(this,"out", [1], opresult890);
  lineNumber = 291
  lineNumber = 290
  var string892 = new GraceString("br i1 ");
  var opresult894 = callmethod(string892, "++", [1], var_creg);
  var string895 = new GraceString(", label %EndFor");
  var opresult897 = callmethod(opresult894, "++", [1], string895);
  var opresult899 = callmethod(opresult897, "++", [1], var_myc);
  lineNumber = 291
  var string900 = new GraceString(", label %ForBody");
  var opresult902 = callmethod(opresult899, "++", [1], string900);
  var opresult904 = callmethod(opresult902, "++", [1], var_myc);
  lineNumber = 292
  var call905 = callmethod(this,"out", [1], opresult904);
  var string906 = new GraceString("ForBody");
  var opresult908 = callmethod(string906, "++", [1], var_myc);
  lineNumber = 293
  var call909 = callmethod(this,"beginblock", [1], opresult908);
  lineNumber = 294
  lineNumber = 293
  var string910 = new GraceString("null");
  var var_tret = string910;
  lineNumber = 295
  lineNumber = 294
  var string911 = new GraceString("ERROR");
  var var_tblock = string911;
  lineNumber = 298
  lineNumber = 295
  var string912 = new GraceString(" %forval");
  var opresult914 = callmethod(string912, "++", [1], var_myc);
  var string915 = new GraceString(" = call %object @callmethod(%object %iter");
  var opresult917 = callmethod(opresult914, "++", [1], string915);
  lineNumber = 296
  var opresult919 = callmethod(opresult917, "++", [1], var_myc);
  lineNumber = 297
  var string920 = new GraceString(", i8* getelementptr([5 x i8]* @.str._next");
  var opresult922 = callmethod(opresult919, "++", [1], string920);
  lineNumber = 298
  var string923 = new GraceString(",i32 0,i32 0), i32 0, %object* %params)");
  var opresult925 = callmethod(opresult922, "++", [1], string923);
  lineNumber = 299
  var call926 = callmethod(this,"out", [1], opresult925);
  var string927 = new GraceString("  store %object %forval");
  var opresult929 = callmethod(string927, "++", [1], var_myc);
  var string930 = new GraceString(", %object* %params_0");
  var opresult932 = callmethod(opresult929, "++", [1], string930);
  lineNumber = 300
  var call933 = callmethod(this,"out", [1], opresult932);
  lineNumber = 302
  lineNumber = 300
  var string934 = new GraceString("  call %object @callmethod(%object ");
  var opresult936 = callmethod(string934, "++", [1], var_obj);
  lineNumber = 301
  var string937 = new GraceString(", i8* getelementptr([6 x i8]* @.str._apply");
  var opresult939 = callmethod(opresult936, "++", [1], string937);
  lineNumber = 302
  var string940 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult942 = callmethod(opresult939, "++", [1], string940);
  lineNumber = 303
  var call943 = callmethod(this,"out", [1], opresult942);
  lineNumber = 304
  lineNumber = 303
  var_tblock = var_bblock;
  lineNumber = 304
  var string944 = new GraceString("  br label %BeginFor");
  var opresult946 = callmethod(string944, "++", [1], var_myc);
  lineNumber = 305
  var call947 = callmethod(this,"out", [1], opresult946);
  var string948 = new GraceString("EndFor");
  var opresult950 = callmethod(string948, "++", [1], var_myc);
  lineNumber = 306
  var call951 = callmethod(this,"beginblock", [1], opresult950);
  lineNumber = 307
  lineNumber = 1
  lineNumber = 306
  var string952 = new GraceString("%none");
  var call953 = callmethod(var_o,"register:=", [1], string952);
  return call953
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilefor"] = func813;
  lineNumber = 517
var func954 = function(argcv) {
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
  lineNumber = 314
  lineNumber = 313
  var var_origParamsUsed = var_paramsUsed;
  lineNumber = 315
  lineNumber = 314
  var_paramsUsed = new GraceNum(1);
  lineNumber = 316
  lineNumber = 315
  var var_origInBlock = var_inBlock;
  lineNumber = 317
  lineNumber = 1
  lineNumber = 316
  var call955 = callmethod(var_o,"selfclosure", [0]);
  var_inBlock = call955;
  lineNumber = 318
  lineNumber = 317
  var var_oldout = var_output;
  lineNumber = 319
  lineNumber = 318
  var var_oldbblock = var_bblock;
  lineNumber = 320
  lineNumber = 319
  var var_oldusedvars = var_usedvars;
  lineNumber = 321
  lineNumber = 320
  var var_olddeclaredvars = var_declaredvars;
  lineNumber = 322
  var array956 = new GraceList([
]);

  var_output = array956;
  lineNumber = 323
  var array957 = new GraceList([
]);

  var_usedvars = array957;
  lineNumber = 324
  var array958 = new GraceList([
]);

  var_declaredvars = array958;
  lineNumber = 325
  lineNumber = 324
  var var_myc = var_auto__95__count;
  lineNumber = 326
  lineNumber = 325
  var opresult960 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult960;
  lineNumber = 327
  lineNumber = 1
  lineNumber = 327
  lineNumber = 1
  lineNumber = 326
  var call961 = callmethod(var_o,"value", [0]);
  var call962 = callmethod(call961,"value", [0]);
  var var_name = call962;
  lineNumber = 328
  lineNumber = 327
  var opresult964 = callmethod(var_name, "++", [1], var_myc);
  var var_nm = opresult964;
  lineNumber = 328
  var string965 = new GraceString("entry");
  lineNumber = 329
  var call966 = callmethod(this,"beginblock", [1], string965);
  lineNumber = 1
  lineNumber = 329
  var call967 = callmethod(var_output,"pop", [0]);
  lineNumber = 331
  lineNumber = 1
  lineNumber = 331
  lineNumber = 1
  lineNumber = 330
  var call968 = callmethod(var_o,"params", [0]);
  var call969 = callmethod(call968,"size", [0]);
  var var_i = call969;
  lineNumber = 337
  lineNumber = 339
  lineNumber = 1
  lineNumber = 331
  var call971 = callmethod(var_o,"varargs", [0]);
  if (Grace_isTrue(call971)) {
  lineNumber = 332
  lineNumber = 1
  lineNumber = 332
  lineNumber = 1
  lineNumber = 332
  lineNumber = 1
  lineNumber = 332
  var call972 = callmethod(var_o,"vararg", [0]);
  var call973 = callmethod(call972,"value", [0]);
  var call974 = callmethod(call973,"_escape", [0]);
  var var_van = call974;
  lineNumber = 334
  lineNumber = 333
  var string975 = new GraceString("  %\"var_init_");
  var opresult977 = callmethod(string975, "++", [1], var_van);
  var string978 = new GraceString("\" = call %object @process_varargs(");
  var opresult980 = callmethod(opresult977, "++", [1], string978);
  lineNumber = 334
  var string981 = new GraceString("%object* %args, i32 ");
  var opresult983 = callmethod(string981, "++", [1], var_i);
  var string984 = new GraceString(", i32 %nparams)");
  var opresult986 = callmethod(opresult983, "++", [1], string984);
  var opresult988 = callmethod(opresult980, "++", [1], opresult986);
  lineNumber = 335
  var call989 = callmethod(this,"out", [1], opresult988);
  var string990 = new GraceString("  %\"var_");
  var opresult992 = callmethod(string990, "++", [1], var_van);
  var string993 = new GraceString("\" = call %object* @alloc_var()");
  var opresult995 = callmethod(opresult992, "++", [1], string993);
  lineNumber = 336
  var call996 = callmethod(this,"out", [1], opresult995);
  var string997 = new GraceString("  store %object %\"var_init_");
  var opresult999 = callmethod(string997, "++", [1], var_van);
  var string1000 = new GraceString("\", %object* %\"var_");
  var opresult1002 = callmethod(opresult999, "++", [1], string1000);
  var opresult1004 = callmethod(opresult1002, "++", [1], var_van);
  var string1005 = new GraceString("\"");
  var opresult1007 = callmethod(opresult1004, "++", [1], string1005);
  lineNumber = 337
  var call1008 = callmethod(this,"out", [1], opresult1007);
  var call1009 = callmethod(var_declaredvars,"push", [1], var_van);
  var if970 = call1009;
}
  lineNumber = 339
  var string1010 = new GraceString("  %undefined = load %object* @undefined");
  lineNumber = 340
  var call1011 = callmethod(this,"out", [1], string1010);
  var string1012 = new GraceString("  %none = load %object* @none");
  lineNumber = 341
  var call1013 = callmethod(this,"out", [1], string1012);
  lineNumber = 342
  lineNumber = 341
  var string1014 = new GraceString("%none");
  var var_ret = string1014;
  lineNumber = 348
  lineNumber = 342
  lineNumber = 1
  lineNumber = 342
  var call1015 = callmethod(var_o,"body", [0]);
  lineNumber = 348
  var block1016 = Grace_allocObject();
  block1016.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1016.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1016.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1016.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1016.receiver = this;
  block1016.className = 'block<genllvm29:348>';
  block1016.real = function(
var_l
) {
  lineNumber = 350
  lineNumber = 1
  lineNumber = 343
  var call1018 = callmethod(var_l,"kind", [0]);
  var string1019 = new GraceString("vardec");
  var opresult1021 = callmethod(call1018, "==", [1], string1019);
  lineNumber = 350
  lineNumber = 1
  lineNumber = 343
  var call1022 = callmethod(var_l,"kind", [0]);
  var string1023 = new GraceString("defdec");
  var opresult1025 = callmethod(call1022, "==", [1], string1023);
  var opresult1027 = callmethod(opresult1021, "|", [1], opresult1025);
  lineNumber = 350
  lineNumber = 1
  lineNumber = 344
  var call1028 = callmethod(var_l,"kind", [0]);
  var string1029 = new GraceString("class");
  var opresult1031 = callmethod(call1028, "==", [1], string1029);
  var opresult1033 = callmethod(opresult1027, "|", [1], opresult1031);
  if (Grace_isTrue(opresult1033)) {
  lineNumber = 345
  lineNumber = 1
  lineNumber = 345
  lineNumber = 1
  lineNumber = 345
  lineNumber = 1
  lineNumber = 345
  var call1034 = callmethod(var_l,"name", [0]);
  var call1035 = callmethod(call1034,"value", [0]);
  var call1036 = callmethod(call1035,"_escape", [0]);
  var var_tnm = call1036;
  lineNumber = 346
  var call1037 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 347
  var string1038 = new GraceString("  %\"var_");
  var opresult1040 = callmethod(string1038, "++", [1], var_tnm);
  var string1041 = new GraceString("\" = call %object* @alloc_var()");
  var opresult1043 = callmethod(opresult1040, "++", [1], string1041);
  lineNumber = 348
  var call1044 = callmethod(this,"out", [1], opresult1043);
  var string1045 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult1047 = callmethod(string1045, "++", [1], var_tnm);
  var string1048 = new GraceString("\"");
  var opresult1050 = callmethod(opresult1047, "++", [1], string1048);
  lineNumber = 349
  var call1051 = callmethod(this,"out", [1], opresult1050);
  var if1017 = call1051;
}
  return if1017;
};
  var call1052 = callmethod(Grace_prelude,"for()do", [1, 1], call1015, block1016);
  lineNumber = 352
  lineNumber = 351
  lineNumber = 1
  lineNumber = 351
  var call1053 = callmethod(var_o,"body", [0]);
  lineNumber = 352
  var block1054 = Grace_allocObject();
  block1054.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1054.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1054.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1054.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1054.receiver = this;
  block1054.className = 'block<genllvm29:352>';
  block1054.real = function(
var_l
) {
  lineNumber = 353
  var call1055 = callmethod(this,"compilenode", [1], var_l);
  var_ret = call1055;
  return call1055;
};
  var call1056 = callmethod(Grace_prelude,"for()do", [1, 1], call1053, block1054);
  lineNumber = 354
  var string1057 = new GraceString("  ret %object ");
  var opresult1059 = callmethod(string1057, "++", [1], var_ret);
  lineNumber = 355
  var call1060 = callmethod(this,"out", [1], opresult1059);
  var string1061 = new GraceString("}");
  lineNumber = 356
  var call1062 = callmethod(this,"out", [1], string1061);
  lineNumber = 357
  lineNumber = 356
  var var_body = var_output;
  lineNumber = 358
  var array1063 = new GraceList([
]);

  var_output = array1063;
  lineNumber = 359
  var array1064 = new GraceList([
]);

  var var_closurevars = array1064;
  lineNumber = 378
  lineNumber = 359
  lineNumber = 378
  var block1065 = Grace_allocObject();
  block1065.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1065.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1065.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1065.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1065.receiver = this;
  block1065.className = 'block<genllvm29:378>';
  block1065.real = function(
var_u
) {
  lineNumber = 361
  lineNumber = 360
  var bool1066 = new GraceBoolean(false)
  var var_decl = bool1066;
  lineNumber = 364
  lineNumber = 361
  lineNumber = 364
  var block1067 = Grace_allocObject();
  block1067.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1067.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1067.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1067.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1067.receiver = this;
  block1067.className = 'block<genllvm29:364>';
  block1067.real = function(
var_d
) {
  lineNumber = 365
  lineNumber = 362
  var opresult1070 = callmethod(var_d, "==", [1], var_u);
  if (Grace_isTrue(opresult1070)) {
  lineNumber = 364
  lineNumber = 363
  var bool1071 = new GraceBoolean(true)
  var_decl = bool1071;
  var if1068 = bool1071;
}
  return if1068;
};
  var call1072 = callmethod(Grace_prelude,"for()do", [1, 1], var_declaredvars, block1067);
  lineNumber = 378
  lineNumber = 366
  if (Grace_isTrue(var_decl)) {
  lineNumber = 368
  lineNumber = 367
  var_decl = var_decl;
  var if1073 = var_decl;
  } else {
  lineNumber = 370
  lineNumber = 369
  var bool1074 = new GraceBoolean(false)
  var var_found = bool1074;
  lineNumber = 373
  lineNumber = 370
  lineNumber = 373
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
  block1075.className = 'block<genllvm29:373>';
  block1075.real = function(
var_v
) {
  lineNumber = 374
  lineNumber = 371
  var opresult1078 = callmethod(var_v, "==", [1], var_u);
  if (Grace_isTrue(opresult1078)) {
  lineNumber = 373
  lineNumber = 372
  var bool1079 = new GraceBoolean(true)
  var_found = bool1079;
  var if1076 = bool1079;
}
  return if1076;
};
  var call1080 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block1075);
  lineNumber = 378
  lineNumber = 375
  if (Grace_isTrue(var_found)) {
  lineNumber = 377
  lineNumber = 376
  var_found = var_found;
  var if1081 = var_found;
  } else {
  lineNumber = 378
  var call1082 = callmethod(var_closurevars,"push", [1], var_u);
  var if1081 = call1082;
}
  var if1073 = if1081;
}
  return if1073;
};
  var call1083 = callmethod(Grace_prelude,"for()do", [1, 1], var_usedvars, block1065);
  lineNumber = 383
  lineNumber = 385
  lineNumber = 1
  lineNumber = 382
  var call1085 = callmethod(var_o,"selfclosure", [0]);
  if (Grace_isTrue(call1085)) {
  lineNumber = 383
  var string1086 = new GraceString("self");
  var call1087 = callmethod(var_closurevars,"push", [1], string1086);
  var if1084 = call1087;
}
  lineNumber = 385
  lineNumber = 386
  lineNumber = 385
  var string1088 = new GraceString("@\"meth_");
  var opresult1090 = callmethod(string1088, "++", [1], var_modname);
  var string1091 = new GraceString("_");
  var opresult1093 = callmethod(opresult1090, "++", [1], string1091);
  lineNumber = 1
  lineNumber = 385
  var call1094 = callmethod(var_nm,"_escape", [0]);
  var opresult1096 = callmethod(opresult1093, "++", [1], call1094);
  var string1097 = new GraceString("\"");
  var opresult1099 = callmethod(opresult1096, "++", [1], string1097);
  var var_litname = opresult1099;
  lineNumber = 386
  var string1100 = new GraceString(";;;; METHOD DEFINITION: ");
  var opresult1102 = callmethod(string1100, "++", [1], var_name);
  lineNumber = 387
  var call1103 = callmethod(this,"outprint", [1], opresult1102);
  lineNumber = 406
  lineNumber = 408
  lineNumber = 1
  lineNumber = 387
  var call1105 = callmethod(var_closurevars,"size", [0]);
  var opresult1107 = callmethod(call1105, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1107)) {
  lineNumber = 397
  lineNumber = 399
  lineNumber = 1
  lineNumber = 388
  var call1109 = callmethod(var_o,"selfclosure", [0]);
  if (Grace_isTrue(call1109)) {
  lineNumber = 390
  lineNumber = 389
  var string1110 = new GraceString("define private %object ");
  var opresult1112 = callmethod(string1110, "++", [1], var_litname);
  var string1113 = new GraceString("(%object %realself, i32 %nparams, ");
  var opresult1115 = callmethod(opresult1112, "++", [1], string1113);
  lineNumber = 390
  var string1116 = new GraceString("%object* %args, i32 %flags) {");
  var opresult1118 = callmethod(opresult1115, "++", [1], string1116);
  lineNumber = 391
  var call1119 = callmethod(this,"out", [1], opresult1118);
  var string1120 = new GraceString("closureinit");
  lineNumber = 392
  var call1121 = callmethod(this,"beginblock", [1], string1120);
  var string1122 = new GraceString("  %uo = bitcast %object %realself to %UserObject*");
  lineNumber = 393
  var call1123 = callmethod(this,"out", [1], string1122);
  var if1108 = call1123;
  } else {
  lineNumber = 395
  lineNumber = 394
  var string1124 = new GraceString("define private %object ");
  var opresult1126 = callmethod(string1124, "++", [1], var_litname);
  var string1127 = new GraceString("(%object %self, i32 %nparams, ");
  var opresult1129 = callmethod(opresult1126, "++", [1], string1127);
  lineNumber = 395
  var string1130 = new GraceString("%object* %args, i32 %flags) {");
  var opresult1132 = callmethod(opresult1129, "++", [1], string1130);
  lineNumber = 396
  var call1133 = callmethod(this,"out", [1], opresult1132);
  var string1134 = new GraceString("closureinit");
  lineNumber = 397
  var call1135 = callmethod(this,"beginblock", [1], string1134);
  var string1136 = new GraceString("  %uo = bitcast %object %self to %UserObject*");
  lineNumber = 398
  var call1137 = callmethod(this,"out", [1], string1136);
  var if1108 = call1137;
}
  lineNumber = 399
  var string1138 = new GraceString("  %closurepp = getelementptr %UserObject* %uo, i32 0, i32 3");
  lineNumber = 400
  var call1139 = callmethod(this,"out", [1], string1138);
  var string1140 = new GraceString("  %closurepf = getelementptr [0 x %object]* %closurepp, i32 0, i32 ");
  var opresult1142 = callmethod(string1140, "++", [1], var_pos);
  var string1143 = new GraceString("");
  var opresult1145 = callmethod(opresult1142, "++", [1], string1143);
  lineNumber = 401
  var call1146 = callmethod(this,"out", [1], opresult1145);
  var string1147 = new GraceString("  %closurepc = bitcast %object* %closurepf to %object***");
  lineNumber = 402
  var call1148 = callmethod(this,"out", [1], string1147);
  var string1149 = new GraceString("  %closure = load %object*** %closurepc");
  lineNumber = 403
  var call1150 = callmethod(this,"out", [1], string1149);
  var string1151 = new GraceString("  br label %entry");
  lineNumber = 404
  var call1152 = callmethod(this,"out", [1], string1151);
  var if1104 = call1152;
  } else {
  lineNumber = 406
  lineNumber = 405
  var string1153 = new GraceString("define private %object ");
  var opresult1155 = callmethod(string1153, "++", [1], var_litname);
  var string1156 = new GraceString("(%object %self, i32 %nparams, ");
  var opresult1158 = callmethod(opresult1155, "++", [1], string1156);
  lineNumber = 406
  var string1159 = new GraceString("%object* %args, i32 %flags) {");
  var opresult1161 = callmethod(opresult1158, "++", [1], string1159);
  lineNumber = 407
  var call1162 = callmethod(this,"out", [1], opresult1161);
  var if1104 = call1162;
}
  lineNumber = 408
  var string1163 = new GraceString("entry");
  lineNumber = 413
  var call1164 = callmethod(this,"beginblock", [1], string1163);
  lineNumber = 414
  lineNumber = 413
  var_i = new GraceNum(0);
  lineNumber = 415
  var array1165 = new GraceList([
]);

  var var_toremove = array1165;
  lineNumber = 429
  lineNumber = 415
  lineNumber = 1
  lineNumber = 415
  var call1166 = callmethod(var_o,"params", [0]);
  lineNumber = 429
  var block1167 = Grace_allocObject();
  block1167.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1167.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1167.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1167.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1167.receiver = this;
  block1167.className = 'block<genllvm29:429>';
  block1167.real = function(
var_p
) {
  lineNumber = 416
  lineNumber = 1
  lineNumber = 416
  lineNumber = 1
  lineNumber = 416
  var call1168 = callmethod(var_p,"value", [0]);
  var call1169 = callmethod(call1168,"_escape", [0]);
  var var_pn = call1169;
  lineNumber = 425
  lineNumber = 417
  var call1171 = callmethod(var_closurevars,"contains", [1], var_pn);
  if (Grace_isTrue(call1171)) {
  lineNumber = 418
  var string1172 = new GraceString("  %\"var_");
  var opresult1174 = callmethod(string1172, "++", [1], var_pn);
  var string1175 = new GraceString("\" = call %object* @alloc_var()");
  var opresult1177 = callmethod(opresult1174, "++", [1], string1175);
  lineNumber = 419
  var call1178 = callmethod(this,"out", [1], opresult1177);
  var string1179 = new GraceString("  %argp_");
  var opresult1181 = callmethod(string1179, "++", [1], var_i);
  var string1182 = new GraceString(" = getelementptr %object* %args, i32 ");
  var opresult1184 = callmethod(opresult1181, "++", [1], string1182);
  var opresult1186 = callmethod(opresult1184, "++", [1], var_i);
  var string1187 = new GraceString("");
  var opresult1189 = callmethod(opresult1186, "++", [1], string1187);
  lineNumber = 420
  var call1190 = callmethod(this,"out", [1], opresult1189);
  var string1191 = new GraceString("  %argval_");
  var opresult1193 = callmethod(string1191, "++", [1], var_i);
  var string1194 = new GraceString(" = load %object* %argp_");
  var opresult1196 = callmethod(opresult1193, "++", [1], string1194);
  var opresult1198 = callmethod(opresult1196, "++", [1], var_i);
  var string1199 = new GraceString("");
  var opresult1201 = callmethod(opresult1198, "++", [1], string1199);
  lineNumber = 421
  var call1202 = callmethod(this,"out", [1], opresult1201);
  var string1203 = new GraceString("  store %object %\"argval_");
  var opresult1205 = callmethod(string1203, "++", [1], var_i);
  var string1206 = new GraceString("\", %object* %\"var_");
  var opresult1208 = callmethod(opresult1205, "++", [1], string1206);
  var opresult1210 = callmethod(opresult1208, "++", [1], var_pn);
  var string1211 = new GraceString("\"");
  var opresult1213 = callmethod(opresult1210, "++", [1], string1211);
  lineNumber = 422
  var call1214 = callmethod(this,"out", [1], opresult1213);
  var call1215 = callmethod(var_toremove,"push", [1], var_pn);
  var if1170 = call1215;
  } else {
  lineNumber = 425
  lineNumber = 424
  var string1216 = new GraceString("  %\"var_");
  var opresult1218 = callmethod(string1216, "++", [1], var_pn);
  var string1219 = new GraceString("\" = getelementptr %object* %args, ");
  var opresult1221 = callmethod(opresult1218, "++", [1], string1219);
  lineNumber = 425
  var string1222 = new GraceString("i32 ");
  var opresult1224 = callmethod(opresult1221, "++", [1], string1222);
  var opresult1226 = callmethod(opresult1224, "++", [1], var_i);
  lineNumber = 426
  var call1227 = callmethod(this,"out", [1], opresult1226);
  var if1170 = call1227;
}
  lineNumber = 427
  var call1228 = callmethod(var_declaredvars,"push", [1], var_pn);
  lineNumber = 429
  lineNumber = 428
  var opresult1230 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult1230;
  return opresult1230;
};
  var call1231 = callmethod(Grace_prelude,"for()do", [1, 1], call1166, block1167);
  lineNumber = 431
  lineNumber = 430
  var var_origclosurevars = var_closurevars;
  lineNumber = 432
  var array1232 = new GraceList([
]);

  var_closurevars = array1232;
  lineNumber = 436
  lineNumber = 432
  lineNumber = 436
  var block1233 = Grace_allocObject();
  block1233.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1233.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1233.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1233.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1233.receiver = this;
  block1233.className = 'block<genllvm29:436>';
  block1233.real = function(
var_pn
) {
  lineNumber = 433
  var call1235 = callmethod(var_toremove,"contains", [1], var_pn);
  if (Grace_isTrue(call1235)) {
  var if1234 = undefined;
  } else {
  lineNumber = 436
  var call1236 = callmethod(var_closurevars,"push", [1], var_pn);
  var if1234 = call1236;
}
  return if1234;
};
  var call1237 = callmethod(Grace_prelude,"for()do", [1, 1], var_origclosurevars, block1233);
  lineNumber = 439
  var string1238 = new GraceString("  %params = alloca %object, i32 ");
  var opresult1240 = callmethod(string1238, "++", [1], var_paramsUsed);
  lineNumber = 440
  var call1241 = callmethod(this,"out", [1], opresult1240);
  lineNumber = 442
  lineNumber = 440
  var diff1243 = callmethod(var_paramsUsed, "-", [1], new GraceNum(1));
  var opresult1245 = callmethod(new GraceNum(0), "..", [1], diff1243);
  lineNumber = 442
  var block1246 = Grace_allocObject();
  block1246.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1246.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1246.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1246.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1246.receiver = this;
  block1246.className = 'block<genllvm29:442>';
  block1246.real = function(
var_ii
) {
  lineNumber = 441
  var string1247 = new GraceString("  %params_");
  var opresult1249 = callmethod(string1247, "++", [1], var_ii);
  var string1250 = new GraceString(" = getelementptr %object* %params, i32 ");
  var opresult1252 = callmethod(opresult1249, "++", [1], string1250);
  lineNumber = 442
  var opresult1254 = callmethod(opresult1252, "++", [1], var_ii);
  lineNumber = 443
  var call1255 = callmethod(this,"out", [1], opresult1254);
  return call1255;
};
  var call1256 = callmethod(Grace_prelude,"for()do", [1, 1], opresult1245, block1246);
  lineNumber = 445
  lineNumber = 444
  var var_j = new GraceNum(0);
  lineNumber = 456
  lineNumber = 445
  lineNumber = 456
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
  block1257.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1257.receiver = this;
  block1257.className = 'block<genllvm29:456>';
  block1257.real = function(
var_cv
) {
  lineNumber = 453
  lineNumber = 455
  lineNumber = 446
  var string1259 = new GraceString("self");
  var opresult1261 = callmethod(var_cv, "==", [1], string1259);
  if (Grace_isTrue(opresult1261)) {
  lineNumber = 447
  var string1262 = new GraceString("  %varc_");
  var opresult1264 = callmethod(string1262, "++", [1], var_cv);
  var string1265 = new GraceString(" = getelementptr %object** %closure, i32 ");
  var opresult1267 = callmethod(opresult1264, "++", [1], string1265);
  var opresult1269 = callmethod(opresult1267, "++", [1], var_j);
  lineNumber = 448
  var call1270 = callmethod(this,"out", [1], opresult1269);
  var string1271 = new GraceString("  %self2 = load %object** %varc_");
  var opresult1273 = callmethod(string1271, "++", [1], var_cv);
  lineNumber = 449
  var call1274 = callmethod(this,"out", [1], opresult1273);
  var string1275 = new GraceString("  %self = load %object* %self2");
  lineNumber = 450
  var call1276 = callmethod(this,"out", [1], string1275);
  var if1258 = call1276;
  } else {
  lineNumber = 451
  var string1277 = new GraceString("  %\"varc_");
  var opresult1279 = callmethod(string1277, "++", [1], var_cv);
  var string1280 = new GraceString("\" = getelementptr %object** %closure, i32 ");
  var opresult1282 = callmethod(opresult1279, "++", [1], string1280);
  var opresult1284 = callmethod(opresult1282, "++", [1], var_j);
  lineNumber = 452
  var call1285 = callmethod(this,"out", [1], opresult1284);
  lineNumber = 453
  lineNumber = 452
  var string1286 = new GraceString("  %\"var_");
  var opresult1288 = callmethod(string1286, "++", [1], var_cv);
  var string1289 = new GraceString("\" = load %object** %\"varc_");
  var opresult1291 = callmethod(opresult1288, "++", [1], string1289);
  var opresult1293 = callmethod(opresult1291, "++", [1], var_cv);
  lineNumber = 453
  var string1294 = new GraceString("\"");
  var opresult1296 = callmethod(opresult1293, "++", [1], string1294);
  lineNumber = 454
  var call1297 = callmethod(this,"out", [1], opresult1296);
  var if1258 = call1297;
}
  lineNumber = 456
  lineNumber = 455
  var opresult1299 = callmethod(var_j, "+", [1], new GraceNum(1));
  var_j = opresult1299;
  return opresult1299;
};
  var call1300 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block1257);
  lineNumber = 458
  lineNumber = 457
  lineNumber = 458
  var block1301 = Grace_allocObject();
  block1301.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1301.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1301.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1301.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1301.receiver = this;
  block1301.className = 'block<genllvm29:458>';
  block1301.real = function(
var_l
) {
  lineNumber = 459
  var call1302 = callmethod(this,"out", [1], var_l);
  return call1302;
};
  var call1303 = callmethod(Grace_prelude,"for()do", [1, 1], var_body, block1301);
  lineNumber = 460
  var string1304 = new GraceString(";;;; ENDS");
  lineNumber = 461
  var call1305 = callmethod(this,"out", [1], string1304);
  lineNumber = 462
  lineNumber = 461
  lineNumber = 462
  var block1306 = Grace_allocObject();
  block1306.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1306.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1306.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1306.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1306.receiver = this;
  block1306.className = 'block<genllvm29:462>';
  block1306.real = function(
var_l
) {
  lineNumber = 463
  var call1307 = callmethod(this,"outprint", [1], var_l);
  return call1307;
};
  var call1308 = callmethod(Grace_prelude,"for()do", [1, 1], var_output, block1306);
  lineNumber = 465
  lineNumber = 464
  var_output = var_oldout;
  lineNumber = 466
  lineNumber = 465
  var_bblock = var_oldbblock;
  lineNumber = 467
  lineNumber = 466
  var_usedvars = var_oldusedvars;
  lineNumber = 468
  lineNumber = 467
  var_declaredvars = var_olddeclaredvars;
  lineNumber = 471
  lineNumber = 468
  lineNumber = 471
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
  block1309.className = 'block<genllvm29:471>';
  block1309.real = function(
var_cv
) {
  lineNumber = 474
  lineNumber = 469
  var string1311 = new GraceString("self");
  var opresult1313 = callmethod(var_cv, "/=", [1], string1311);
  if (Grace_isTrue(opresult1313)) {
  lineNumber = 471
  lineNumber = 470
  lineNumber = 1
  lineNumber = 470
  var call1315 = callmethod(var_usedvars,"contains", [1], var_cv);
  var call1316 = callmethod(call1315,"not", [0]);
  if (Grace_isTrue(call1316)) {
  lineNumber = 471
  var call1317 = callmethod(var_usedvars,"push", [1], var_cv);
  var if1314 = call1317;
}
  var if1310 = if1314;
}
  return if1310;
};
  var call1318 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block1309);
  lineNumber = 475
  var call1319 = Grace_length(var_name);
  var opresult1321 = callmethod(call1319, "+", [1], new GraceNum(1));
  var var_len = opresult1321;
  lineNumber = 478
  lineNumber = 476
  var string1322 = new GraceString("@.str.methname");
  var opresult1324 = callmethod(string1322, "++", [1], var_myc);
  var string1325 = new GraceString(" = private unnamed_addr ");
  var opresult1327 = callmethod(opresult1324, "++", [1], string1325);
  lineNumber = 477
  var string1328 = new GraceString("constant [");
  var opresult1330 = callmethod(opresult1327, "++", [1], string1328);
  var opresult1332 = callmethod(opresult1330, "++", [1], var_len);
  var string1333 = new GraceString(" x i8] c\"");
  var opresult1335 = callmethod(opresult1332, "++", [1], string1333);
  var opresult1337 = callmethod(opresult1335, "++", [1], var_name);
  var string1338 = new GraceString("\\00\"");
  var opresult1340 = callmethod(opresult1337, "++", [1], string1338);
  var var_con = opresult1340;
  lineNumber = 478
  var call1341 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 513
  lineNumber = 515
  lineNumber = 1
  lineNumber = 479
  var call1343 = callmethod(var_closurevars,"size", [0]);
  var opresult1345 = callmethod(call1343, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1345)) {
  lineNumber = 484
  lineNumber = 480
  var string1346 = new GraceString("  call void @addmethod2(%object ");
  var opresult1348 = callmethod(string1346, "++", [1], var_selfobj);
  lineNumber = 481
  var string1349 = new GraceString(", i8* getelementptr([");
  var opresult1351 = callmethod(opresult1348, "++", [1], string1349);
  lineNumber = 482
  var opresult1353 = callmethod(opresult1351, "++", [1], var_len);
  var string1354 = new GraceString(" x i8]* @.str.methname");
  var opresult1356 = callmethod(opresult1353, "++", [1], string1354);
  var opresult1358 = callmethod(opresult1356, "++", [1], var_myc);
  var string1359 = new GraceString(", i32 0, i32 0), ");
  var opresult1361 = callmethod(opresult1358, "++", [1], string1359);
  lineNumber = 483
  var string1362 = new GraceString("%object(%object, i32, %object*, i32)* getelementptr(%object ");
  var opresult1364 = callmethod(opresult1361, "++", [1], string1362);
  lineNumber = 484
  var string1365 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult1367 = callmethod(opresult1364, "++", [1], string1365);
  var opresult1369 = callmethod(opresult1367, "++", [1], var_litname);
  var string1370 = new GraceString("))");
  var opresult1372 = callmethod(opresult1369, "++", [1], string1370);
  lineNumber = 485
  var call1373 = callmethod(this,"out", [1], opresult1372);
  var if1342 = call1373;
  } else {
  lineNumber = 486
  var string1374 = new GraceString("  call void @block_savedest(%object ");
  var opresult1376 = callmethod(string1374, "++", [1], var_selfobj);
  var string1377 = new GraceString(")");
  var opresult1379 = callmethod(opresult1376, "++", [1], string1377);
  lineNumber = 487
  var call1380 = callmethod(this,"out", [1], opresult1379);
  lineNumber = 488
  lineNumber = 487
  var string1381 = new GraceString("  %closure");
  var opresult1383 = callmethod(string1381, "++", [1], var_myc);
  var string1384 = new GraceString(" = call %object** @createclosure(i32 ");
  var opresult1386 = callmethod(opresult1383, "++", [1], string1384);
  lineNumber = 488
  lineNumber = 1
  lineNumber = 488
  var call1387 = callmethod(var_closurevars,"size", [0]);
  var opresult1389 = callmethod(opresult1386, "++", [1], call1387);
  var string1390 = new GraceString(")");
  var opresult1392 = callmethod(opresult1389, "++", [1], string1390);
  lineNumber = 489
  var call1393 = callmethod(this,"out", [1], opresult1392);
  lineNumber = 499
  lineNumber = 489
  lineNumber = 499
  var block1394 = Grace_allocObject();
  block1394.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1394.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1394.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1394.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1394.receiver = this;
  block1394.className = 'block<genllvm29:499>';
  block1394.real = function(
var_v
) {
  lineNumber = 501
  lineNumber = 490
  var string1396 = new GraceString("self");
  var opresult1398 = callmethod(var_v, "==", [1], string1396);
  if (Grace_isTrue(opresult1398)) {
  lineNumber = 492
  lineNumber = 491
  var string1399 = new GraceString("  %selfpp");
  var opresult1401 = callmethod(string1399, "++", [1], var_auto__95__count);
  var string1402 = new GraceString(" = ");
  var opresult1404 = callmethod(opresult1401, "++", [1], string1402);
  lineNumber = 492
  var string1405 = new GraceString("call %object* @alloc_var()");
  var opresult1407 = callmethod(opresult1404, "++", [1], string1405);
  lineNumber = 493
  var call1408 = callmethod(this,"out", [1], opresult1407);
  var string1409 = new GraceString("  store %object %self, %object* %selfpp");
  var opresult1411 = callmethod(string1409, "++", [1], var_auto__95__count);
  lineNumber = 494
  var call1412 = callmethod(this,"out", [1], opresult1411);
  lineNumber = 495
  lineNumber = 494
  var string1413 = new GraceString("  call void @addtoclosure(%object** %closure");
  var opresult1415 = callmethod(string1413, "++", [1], var_myc);
  var string1416 = new GraceString(", ");
  var opresult1418 = callmethod(opresult1415, "++", [1], string1416);
  lineNumber = 495
  var string1419 = new GraceString("%object* %selfpp");
  var opresult1421 = callmethod(opresult1418, "++", [1], string1419);
  var opresult1423 = callmethod(opresult1421, "++", [1], var_auto__95__count);
  var string1424 = new GraceString(")");
  var opresult1426 = callmethod(opresult1423, "++", [1], string1424);
  lineNumber = 496
  var call1427 = callmethod(this,"out", [1], opresult1426);
  lineNumber = 497
  lineNumber = 496
  var opresult1429 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1429;
  var if1395 = opresult1429;
  } else {
  lineNumber = 499
  lineNumber = 498
  var string1430 = new GraceString("  call void @addtoclosure(%object** %closure");
  var opresult1432 = callmethod(string1430, "++", [1], var_myc);
  var string1433 = new GraceString(", ");
  var opresult1435 = callmethod(opresult1432, "++", [1], string1433);
  lineNumber = 499
  var string1436 = new GraceString("%object* %\"var_");
  var opresult1438 = callmethod(opresult1435, "++", [1], string1436);
  var opresult1440 = callmethod(opresult1438, "++", [1], var_v);
  var string1441 = new GraceString("\")");
  var opresult1443 = callmethod(opresult1440, "++", [1], string1441);
  lineNumber = 500
  var call1444 = callmethod(this,"out", [1], opresult1443);
  var if1395 = call1444;
}
  return if1395;
};
  var call1445 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block1394);
  lineNumber = 503
  lineNumber = 502
  var string1446 = new GraceString("uo");
  var opresult1448 = callmethod(string1446, "++", [1], var_myc);
  var string1449 = new GraceString("");
  var opresult1451 = callmethod(opresult1448, "++", [1], string1449);
  var var_uo = opresult1451;
  lineNumber = 503
  var string1452 = new GraceString("  %");
  var opresult1454 = callmethod(string1452, "++", [1], var_uo);
  var string1455 = new GraceString(" = bitcast %object ");
  var opresult1457 = callmethod(opresult1454, "++", [1], string1455);
  var opresult1459 = callmethod(opresult1457, "++", [1], var_selfobj);
  var string1460 = new GraceString(" to %UserObject*");
  var opresult1462 = callmethod(opresult1459, "++", [1], string1460);
  lineNumber = 504
  var call1463 = callmethod(this,"out", [1], opresult1462);
  var string1464 = new GraceString("  %closurepp");
  var opresult1466 = callmethod(string1464, "++", [1], var_myc);
  var string1467 = new GraceString(" = getelementptr %UserObject* %");
  var opresult1469 = callmethod(opresult1466, "++", [1], string1467);
  var opresult1471 = callmethod(opresult1469, "++", [1], var_uo);
  var string1472 = new GraceString(", i32 0, i32 3");
  var opresult1474 = callmethod(opresult1471, "++", [1], string1472);
  lineNumber = 505
  var call1475 = callmethod(this,"out", [1], opresult1474);
  var string1476 = new GraceString("  %closurepf");
  var opresult1478 = callmethod(string1476, "++", [1], var_myc);
  var string1479 = new GraceString(" = getelementptr [0 x %object]* %closurepp");
  var opresult1481 = callmethod(opresult1478, "++", [1], string1479);
  var opresult1483 = callmethod(opresult1481, "++", [1], var_myc);
  var string1484 = new GraceString(", i32 0, i32 ");
  var opresult1486 = callmethod(opresult1483, "++", [1], string1484);
  var opresult1488 = callmethod(opresult1486, "++", [1], var_pos);
  var string1489 = new GraceString("");
  var opresult1491 = callmethod(opresult1488, "++", [1], string1489);
  lineNumber = 506
  var call1492 = callmethod(this,"out", [1], opresult1491);
  var string1493 = new GraceString("  %closurepc");
  var opresult1495 = callmethod(string1493, "++", [1], var_myc);
  var string1496 = new GraceString(" = bitcast %object* %closurepf");
  var opresult1498 = callmethod(opresult1495, "++", [1], string1496);
  var opresult1500 = callmethod(opresult1498, "++", [1], var_myc);
  var string1501 = new GraceString(" to %object***");
  var opresult1503 = callmethod(opresult1500, "++", [1], string1501);
  lineNumber = 507
  var call1504 = callmethod(this,"out", [1], opresult1503);
  var string1505 = new GraceString("  %closurec");
  var opresult1507 = callmethod(string1505, "++", [1], var_myc);
  var string1508 = new GraceString(" = bitcast %object** %closure");
  var opresult1510 = callmethod(opresult1507, "++", [1], string1508);
  var opresult1512 = callmethod(opresult1510, "++", [1], var_myc);
  var string1513 = new GraceString(" to %object");
  var opresult1515 = callmethod(opresult1512, "++", [1], string1513);
  lineNumber = 508
  var call1516 = callmethod(this,"out", [1], opresult1515);
  var string1517 = new GraceString("  store %object %closurec");
  var opresult1519 = callmethod(string1517, "++", [1], var_myc);
  var string1520 = new GraceString(", %object* %closurepf");
  var opresult1522 = callmethod(opresult1519, "++", [1], string1520);
  var opresult1524 = callmethod(opresult1522, "++", [1], var_myc);
  var string1525 = new GraceString("");
  var opresult1527 = callmethod(opresult1524, "++", [1], string1525);
  lineNumber = 509
  var call1528 = callmethod(this,"out", [1], opresult1527);
  lineNumber = 513
  lineNumber = 509
  var string1529 = new GraceString("  call void @addmethod2(%object ");
  var opresult1531 = callmethod(string1529, "++", [1], var_selfobj);
  lineNumber = 510
  var string1532 = new GraceString(", i8* getelementptr([");
  var opresult1534 = callmethod(opresult1531, "++", [1], string1532);
  lineNumber = 511
  var opresult1536 = callmethod(opresult1534, "++", [1], var_len);
  var string1537 = new GraceString(" x i8]* @.str.methname");
  var opresult1539 = callmethod(opresult1536, "++", [1], string1537);
  var opresult1541 = callmethod(opresult1539, "++", [1], var_myc);
  var string1542 = new GraceString(", i32 0, i32 0), ");
  var opresult1544 = callmethod(opresult1541, "++", [1], string1542);
  lineNumber = 512
  var string1545 = new GraceString("%object(%object, i32, %object*, i32)* getelementptr(%object ");
  var opresult1547 = callmethod(opresult1544, "++", [1], string1545);
  lineNumber = 513
  var string1548 = new GraceString("(%object, i32, %object*, i32)* ");
  var opresult1550 = callmethod(opresult1547, "++", [1], string1548);
  var opresult1552 = callmethod(opresult1550, "++", [1], var_litname);
  var string1553 = new GraceString("))");
  var opresult1555 = callmethod(opresult1552, "++", [1], string1553);
  lineNumber = 514
  var call1556 = callmethod(this,"out", [1], opresult1555);
  var if1342 = call1556;
}
  lineNumber = 516
  lineNumber = 515
  var_inBlock = var_origInBlock;
  lineNumber = 517
  lineNumber = 516
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
  this.methods["compilemethod"] = func954;
  lineNumber = 551
var func1557 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 520
  lineNumber = 519
  var var_myc = var_auto__95__count;
  lineNumber = 521
  lineNumber = 520
  var opresult1559 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1559;
  lineNumber = 521
  var string1560 = new GraceString("  br label %BeginWhile");
  var opresult1562 = callmethod(string1560, "++", [1], var_myc);
  lineNumber = 522
  var call1563 = callmethod(this,"out", [1], opresult1562);
  var string1564 = new GraceString("BeginWhile");
  var opresult1566 = callmethod(string1564, "++", [1], var_myc);
  lineNumber = 523
  var call1567 = callmethod(this,"beginblock", [1], opresult1566);
  lineNumber = 1
  lineNumber = 523
  var call1568 = callmethod(var_o,"value", [0]);
  lineNumber = 524
  var call1569 = callmethod(this,"compilenode", [1], call1568);
  var var_cond = call1569;
  lineNumber = 525
  lineNumber = 524
  var string1570 = new GraceString("%cond");
  var opresult1572 = callmethod(string1570, "++", [1], var_myc);
  var var_creg = opresult1572;
  lineNumber = 526
  lineNumber = 525
  var string1573 = new GraceString("  ");
  var opresult1575 = callmethod(string1573, "++", [1], var_creg);
  var string1576 = new GraceString("_valp = call i1 @istrue(%object ");
  var opresult1578 = callmethod(opresult1575, "++", [1], string1576);
  lineNumber = 526
  var opresult1580 = callmethod(opresult1578, "++", [1], var_cond);
  var string1581 = new GraceString(")");
  var opresult1583 = callmethod(opresult1580, "++", [1], string1581);
  lineNumber = 527
  var call1584 = callmethod(this,"out", [1], opresult1583);
  var string1585 = new GraceString("  ");
  var opresult1587 = callmethod(string1585, "++", [1], var_creg);
  var string1588 = new GraceString(" = icmp eq i1 0, ");
  var opresult1590 = callmethod(opresult1587, "++", [1], string1588);
  var opresult1592 = callmethod(opresult1590, "++", [1], var_creg);
  var string1593 = new GraceString("_valp");
  var opresult1595 = callmethod(opresult1592, "++", [1], string1593);
  lineNumber = 528
  var call1596 = callmethod(this,"out", [1], opresult1595);
  lineNumber = 529
  lineNumber = 528
  var string1597 = new GraceString("br i1 ");
  var opresult1599 = callmethod(string1597, "++", [1], var_creg);
  var string1600 = new GraceString(", label %EndWhile");
  var opresult1602 = callmethod(opresult1599, "++", [1], string1600);
  var opresult1604 = callmethod(opresult1602, "++", [1], var_myc);
  lineNumber = 529
  var string1605 = new GraceString(", label %WhileBody");
  var opresult1607 = callmethod(opresult1604, "++", [1], string1605);
  var opresult1609 = callmethod(opresult1607, "++", [1], var_myc);
  lineNumber = 530
  var call1610 = callmethod(this,"out", [1], opresult1609);
  var string1611 = new GraceString("WhileBody");
  var opresult1613 = callmethod(string1611, "++", [1], var_myc);
  lineNumber = 531
  var call1614 = callmethod(this,"beginblock", [1], opresult1613);
  lineNumber = 532
  lineNumber = 531
  var string1615 = new GraceString("null");
  var var_tret = string1615;
  lineNumber = 533
  lineNumber = 532
  var string1616 = new GraceString("ERROR");
  var var_tblock = string1616;
  lineNumber = 539
  lineNumber = 533
  lineNumber = 1
  lineNumber = 533
  var call1617 = callmethod(var_o,"body", [0]);
  lineNumber = 539
  var block1618 = Grace_allocObject();
  block1618.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1618.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1618.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1618.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1618.receiver = this;
  block1618.className = 'block<genllvm29:539>';
  block1618.real = function(
var_l
) {
  lineNumber = 541
  lineNumber = 1
  lineNumber = 534
  var call1620 = callmethod(var_l,"kind", [0]);
  var string1621 = new GraceString("vardec");
  var opresult1623 = callmethod(call1620, "==", [1], string1621);
  lineNumber = 541
  lineNumber = 1
  lineNumber = 534
  var call1624 = callmethod(var_l,"kind", [0]);
  var string1625 = new GraceString("defdec");
  var opresult1627 = callmethod(call1624, "==", [1], string1625);
  var opresult1629 = callmethod(opresult1623, "|", [1], opresult1627);
  lineNumber = 541
  lineNumber = 1
  lineNumber = 535
  var call1630 = callmethod(var_l,"kind", [0]);
  var string1631 = new GraceString("class");
  var opresult1633 = callmethod(call1630, "==", [1], string1631);
  var opresult1635 = callmethod(opresult1629, "|", [1], opresult1633);
  if (Grace_isTrue(opresult1635)) {
  lineNumber = 536
  lineNumber = 1
  lineNumber = 536
  lineNumber = 1
  lineNumber = 536
  lineNumber = 1
  lineNumber = 536
  var call1636 = callmethod(var_l,"name", [0]);
  var call1637 = callmethod(call1636,"value", [0]);
  var call1638 = callmethod(call1637,"_escape", [0]);
  var var_tnm = call1638;
  lineNumber = 537
  var call1639 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 538
  var string1640 = new GraceString("  %\"var_");
  var opresult1642 = callmethod(string1640, "++", [1], var_tnm);
  var string1643 = new GraceString("\" = call %object* @alloc_var()");
  var opresult1645 = callmethod(opresult1642, "++", [1], string1643);
  lineNumber = 539
  var call1646 = callmethod(this,"out", [1], opresult1645);
  var string1647 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult1649 = callmethod(string1647, "++", [1], var_tnm);
  var string1650 = new GraceString("\"");
  var opresult1652 = callmethod(opresult1649, "++", [1], string1650);
  lineNumber = 540
  var call1653 = callmethod(this,"out", [1], opresult1652);
  var if1619 = call1653;
}
  return if1619;
};
  var call1654 = callmethod(Grace_prelude,"for()do", [1, 1], call1617, block1618);
  lineNumber = 543
  lineNumber = 542
  lineNumber = 1
  lineNumber = 542
  var call1655 = callmethod(var_o,"body", [0]);
  lineNumber = 543
  var block1656 = Grace_allocObject();
  block1656.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1656.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1656.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1656.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1656.receiver = this;
  block1656.className = 'block<genllvm29:543>';
  block1656.real = function(
var_l
) {
  lineNumber = 544
  var call1657 = callmethod(this,"compilenode", [1], var_l);
  var_tret = call1657;
  return call1657;
};
  var call1658 = callmethod(Grace_prelude,"for()do", [1, 1], call1655, block1656);
  lineNumber = 546
  lineNumber = 545
  var_tblock = var_bblock;
  lineNumber = 546
  var string1659 = new GraceString("  br label %BeginWhile");
  var opresult1661 = callmethod(string1659, "++", [1], var_myc);
  lineNumber = 547
  var call1662 = callmethod(this,"out", [1], opresult1661);
  var string1663 = new GraceString("EndWhile");
  var opresult1665 = callmethod(string1663, "++", [1], var_myc);
  lineNumber = 550
  var call1666 = callmethod(this,"beginblock", [1], opresult1665);
  lineNumber = 551
  lineNumber = 1
  lineNumber = 550
  var call1667 = callmethod(var_o,"register:=", [1], var_cond);
  return call1667
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilewhile"] = func1557;
  lineNumber = 616
var func1668 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 554
  lineNumber = 553
  var var_myc = var_auto__95__count;
  lineNumber = 555
  lineNumber = 554
  var opresult1670 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1670;
  lineNumber = 555
  var string1671 = new GraceString("  br label %BeginIf");
  var opresult1673 = callmethod(string1671, "++", [1], var_myc);
  lineNumber = 556
  var call1674 = callmethod(this,"out", [1], opresult1673);
  var string1675 = new GraceString("BeginIf");
  var opresult1677 = callmethod(string1675, "++", [1], var_myc);
  lineNumber = 557
  var call1678 = callmethod(this,"beginblock", [1], opresult1677);
  lineNumber = 1
  lineNumber = 557
  var call1679 = callmethod(var_o,"value", [0]);
  lineNumber = 558
  var call1680 = callmethod(this,"compilenode", [1], call1679);
  var var_cond = call1680;
  lineNumber = 559
  lineNumber = 558
  var string1681 = new GraceString("%cond");
  var opresult1683 = callmethod(string1681, "++", [1], var_myc);
  var var_creg = opresult1683;
  lineNumber = 560
  lineNumber = 559
  var string1684 = new GraceString("  ");
  var opresult1686 = callmethod(string1684, "++", [1], var_creg);
  var string1687 = new GraceString("_valp = call i1 @istrue(%object ");
  var opresult1689 = callmethod(opresult1686, "++", [1], string1687);
  lineNumber = 560
  var opresult1691 = callmethod(opresult1689, "++", [1], var_cond);
  var string1692 = new GraceString(")");
  var opresult1694 = callmethod(opresult1691, "++", [1], string1692);
  lineNumber = 561
  var call1695 = callmethod(this,"out", [1], opresult1694);
  var string1696 = new GraceString("  ");
  var opresult1698 = callmethod(string1696, "++", [1], var_creg);
  var string1699 = new GraceString(" = icmp eq i1 0, ");
  var opresult1701 = callmethod(opresult1698, "++", [1], string1699);
  var opresult1703 = callmethod(opresult1701, "++", [1], var_creg);
  var string1704 = new GraceString("_valp");
  var opresult1706 = callmethod(opresult1703, "++", [1], string1704);
  lineNumber = 562
  var call1707 = callmethod(this,"out", [1], opresult1706);
  lineNumber = 563
  lineNumber = 562
  var var_startblock = var_bblock;
  lineNumber = 569
  lineNumber = 571
  lineNumber = 1
  lineNumber = 571
  lineNumber = 1
  lineNumber = 563
  var call1709 = callmethod(var_o,"elseblock", [0]);
  var call1710 = callmethod(call1709,"size", [0]);
  var opresult1712 = callmethod(call1710, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1712)) {
  lineNumber = 565
  lineNumber = 564
  var string1713 = new GraceString("br i1 ");
  var opresult1715 = callmethod(string1713, "++", [1], var_creg);
  var string1716 = new GraceString(", label %FalseBranch");
  var opresult1718 = callmethod(opresult1715, "++", [1], string1716);
  var opresult1720 = callmethod(opresult1718, "++", [1], var_myc);
  lineNumber = 565
  var string1721 = new GraceString(", label %TrueBranch");
  var opresult1723 = callmethod(opresult1720, "++", [1], string1721);
  var opresult1725 = callmethod(opresult1723, "++", [1], var_myc);
  lineNumber = 566
  var call1726 = callmethod(this,"out", [1], opresult1725);
  var if1708 = call1726;
  } else {
  lineNumber = 567
  var string1727 = new GraceString("  %undefined");
  var opresult1729 = callmethod(string1727, "++", [1], var_myc);
  var string1730 = new GraceString(" = load %object* @undefined");
  var opresult1732 = callmethod(opresult1729, "++", [1], string1730);
  lineNumber = 568
  var call1733 = callmethod(this,"out", [1], opresult1732);
  lineNumber = 569
  lineNumber = 568
  var string1734 = new GraceString("br i1 ");
  var opresult1736 = callmethod(string1734, "++", [1], var_creg);
  var string1737 = new GraceString(", label %EndIf");
  var opresult1739 = callmethod(opresult1736, "++", [1], string1737);
  var opresult1741 = callmethod(opresult1739, "++", [1], var_myc);
  lineNumber = 569
  var string1742 = new GraceString(", label %TrueBranch");
  var opresult1744 = callmethod(opresult1741, "++", [1], string1742);
  var opresult1746 = callmethod(opresult1744, "++", [1], var_myc);
  lineNumber = 570
  var call1747 = callmethod(this,"out", [1], opresult1746);
  var if1708 = call1747;
}
  lineNumber = 571
  var string1748 = new GraceString("TrueBranch");
  var opresult1750 = callmethod(string1748, "++", [1], var_myc);
  lineNumber = 572
  var call1751 = callmethod(this,"beginblock", [1], opresult1750);
  lineNumber = 573
  lineNumber = 572
  var string1752 = new GraceString("%none");
  var var_tret = string1752;
  lineNumber = 574
  lineNumber = 573
  var string1753 = new GraceString("%none");
  var var_fret = string1753;
  lineNumber = 575
  lineNumber = 574
  var string1754 = new GraceString("ERROR");
  var var_tblock = string1754;
  lineNumber = 576
  lineNumber = 575
  var string1755 = new GraceString("ERROR");
  var var_fblock = string1755;
  lineNumber = 582
  lineNumber = 576
  lineNumber = 1
  lineNumber = 576
  var call1756 = callmethod(var_o,"thenblock", [0]);
  lineNumber = 582
  var block1757 = Grace_allocObject();
  block1757.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1757.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1757.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1757.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1757.receiver = this;
  block1757.className = 'block<genllvm29:582>';
  block1757.real = function(
var_l
) {
  lineNumber = 584
  lineNumber = 1
  lineNumber = 577
  var call1759 = callmethod(var_l,"kind", [0]);
  var string1760 = new GraceString("vardec");
  var opresult1762 = callmethod(call1759, "==", [1], string1760);
  lineNumber = 584
  lineNumber = 1
  lineNumber = 577
  var call1763 = callmethod(var_l,"kind", [0]);
  var string1764 = new GraceString("defdec");
  var opresult1766 = callmethod(call1763, "==", [1], string1764);
  var opresult1768 = callmethod(opresult1762, "|", [1], opresult1766);
  lineNumber = 584
  lineNumber = 1
  lineNumber = 578
  var call1769 = callmethod(var_l,"kind", [0]);
  var string1770 = new GraceString("class");
  var opresult1772 = callmethod(call1769, "==", [1], string1770);
  var opresult1774 = callmethod(opresult1768, "|", [1], opresult1772);
  if (Grace_isTrue(opresult1774)) {
  lineNumber = 579
  lineNumber = 1
  lineNumber = 579
  lineNumber = 1
  lineNumber = 579
  lineNumber = 1
  lineNumber = 579
  var call1775 = callmethod(var_l,"name", [0]);
  var call1776 = callmethod(call1775,"value", [0]);
  var call1777 = callmethod(call1776,"_escape", [0]);
  var var_tnm = call1777;
  lineNumber = 580
  var call1778 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 581
  var string1779 = new GraceString("  %\"var_");
  var opresult1781 = callmethod(string1779, "++", [1], var_tnm);
  var string1782 = new GraceString("\" = call %object* @alloc_var()");
  var opresult1784 = callmethod(opresult1781, "++", [1], string1782);
  lineNumber = 582
  var call1785 = callmethod(this,"out", [1], opresult1784);
  var string1786 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult1788 = callmethod(string1786, "++", [1], var_tnm);
  var string1789 = new GraceString("\"");
  var opresult1791 = callmethod(opresult1788, "++", [1], string1789);
  lineNumber = 583
  var call1792 = callmethod(this,"out", [1], opresult1791);
  var if1758 = call1792;
}
  return if1758;
};
  var call1793 = callmethod(Grace_prelude,"for()do", [1, 1], call1756, block1757);
  lineNumber = 586
  lineNumber = 585
  lineNumber = 1
  lineNumber = 585
  var call1794 = callmethod(var_o,"thenblock", [0]);
  lineNumber = 586
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
  block1795.className = 'block<genllvm29:586>';
  block1795.real = function(
var_l
) {
  lineNumber = 587
  var call1796 = callmethod(this,"compilenode", [1], var_l);
  var_tret = call1796;
  return call1796;
};
  var call1797 = callmethod(Grace_prelude,"for()do", [1, 1], call1794, block1795);
  lineNumber = 589
  lineNumber = 588
  var_tblock = var_bblock;
  lineNumber = 589
  var string1798 = new GraceString("  br label %EndIf");
  var opresult1800 = callmethod(string1798, "++", [1], var_myc);
  lineNumber = 590
  var call1801 = callmethod(this,"out", [1], opresult1800);
  lineNumber = 606
  lineNumber = 607
  lineNumber = 1
  lineNumber = 607
  lineNumber = 1
  lineNumber = 590
  var call1803 = callmethod(var_o,"elseblock", [0]);
  var call1804 = callmethod(call1803,"size", [0]);
  var opresult1806 = callmethod(call1804, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1806)) {
  lineNumber = 591
  var string1807 = new GraceString("FalseBranch");
  var opresult1809 = callmethod(string1807, "++", [1], var_myc);
  lineNumber = 592
  var call1810 = callmethod(this,"beginblock", [1], opresult1809);
  lineNumber = 598
  lineNumber = 592
  lineNumber = 1
  lineNumber = 592
  var call1811 = callmethod(var_o,"elseblock", [0]);
  lineNumber = 598
  var block1812 = Grace_allocObject();
  block1812.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1812.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1812.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1812.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1812.receiver = this;
  block1812.className = 'block<genllvm29:598>';
  block1812.real = function(
var_l
) {
  lineNumber = 600
  lineNumber = 1
  lineNumber = 593
  var call1814 = callmethod(var_l,"kind", [0]);
  var string1815 = new GraceString("vardec");
  var opresult1817 = callmethod(call1814, "==", [1], string1815);
  lineNumber = 600
  lineNumber = 1
  lineNumber = 593
  var call1818 = callmethod(var_l,"kind", [0]);
  var string1819 = new GraceString("defdec");
  var opresult1821 = callmethod(call1818, "==", [1], string1819);
  var opresult1823 = callmethod(opresult1817, "|", [1], opresult1821);
  lineNumber = 600
  lineNumber = 1
  lineNumber = 594
  var call1824 = callmethod(var_l,"kind", [0]);
  var string1825 = new GraceString("class");
  var opresult1827 = callmethod(call1824, "==", [1], string1825);
  var opresult1829 = callmethod(opresult1823, "|", [1], opresult1827);
  if (Grace_isTrue(opresult1829)) {
  lineNumber = 595
  lineNumber = 1
  lineNumber = 595
  lineNumber = 1
  lineNumber = 595
  lineNumber = 1
  lineNumber = 595
  var call1830 = callmethod(var_l,"name", [0]);
  var call1831 = callmethod(call1830,"value", [0]);
  var call1832 = callmethod(call1831,"_escape", [0]);
  var var_tnm = call1832;
  lineNumber = 596
  var call1833 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 597
  var string1834 = new GraceString("  %\"var_");
  var opresult1836 = callmethod(string1834, "++", [1], var_tnm);
  var string1837 = new GraceString("\" = call %object* @alloc_var()");
  var opresult1839 = callmethod(opresult1836, "++", [1], string1837);
  lineNumber = 598
  var call1840 = callmethod(this,"out", [1], opresult1839);
  var string1841 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult1843 = callmethod(string1841, "++", [1], var_tnm);
  var string1844 = new GraceString("\"");
  var opresult1846 = callmethod(opresult1843, "++", [1], string1844);
  lineNumber = 599
  var call1847 = callmethod(this,"out", [1], opresult1846);
  var if1813 = call1847;
}
  return if1813;
};
  var call1848 = callmethod(Grace_prelude,"for()do", [1, 1], call1811, block1812);
  lineNumber = 602
  lineNumber = 601
  lineNumber = 1
  lineNumber = 601
  var call1849 = callmethod(var_o,"elseblock", [0]);
  lineNumber = 602
  var block1850 = Grace_allocObject();
  block1850.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1850.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1850.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1850.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1850.receiver = this;
  block1850.className = 'block<genllvm29:602>';
  block1850.real = function(
var_l
) {
  lineNumber = 603
  var call1851 = callmethod(this,"compilenode", [1], var_l);
  var_fret = call1851;
  return call1851;
};
  var call1852 = callmethod(Grace_prelude,"for()do", [1, 1], call1849, block1850);
  lineNumber = 604
  var string1853 = new GraceString("  br label %EndIf");
  var opresult1855 = callmethod(string1853, "++", [1], var_myc);
  lineNumber = 605
  var call1856 = callmethod(this,"out", [1], opresult1855);
  lineNumber = 606
  lineNumber = 605
  var_fblock = var_bblock;
  var if1802 = var_bblock;
}
  lineNumber = 607
  var string1857 = new GraceString("EndIf");
  var opresult1859 = callmethod(string1857, "++", [1], var_myc);
  lineNumber = 608
  var call1860 = callmethod(this,"beginblock", [1], opresult1859);
  lineNumber = 613
  lineNumber = 615
  lineNumber = 1
  lineNumber = 615
  lineNumber = 1
  lineNumber = 608
  var call1862 = callmethod(var_o,"elseblock", [0]);
  var call1863 = callmethod(call1862,"size", [0]);
  var opresult1865 = callmethod(call1863, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1865)) {
  lineNumber = 610
  lineNumber = 609
  var string1866 = new GraceString("  %if");
  var opresult1868 = callmethod(string1866, "++", [1], var_myc);
  var string1869 = new GraceString(" = phi %object [ ");
  var opresult1871 = callmethod(opresult1868, "++", [1], string1869);
  var opresult1873 = callmethod(opresult1871, "++", [1], var_tret);
  var string1874 = new GraceString(", ");
  var opresult1876 = callmethod(opresult1873, "++", [1], string1874);
  lineNumber = 610
  var opresult1878 = callmethod(opresult1876, "++", [1], var_tblock);
  var string1879 = new GraceString("], [");
  var opresult1881 = callmethod(opresult1878, "++", [1], string1879);
  var opresult1883 = callmethod(opresult1881, "++", [1], var_fret);
  var string1884 = new GraceString(", ");
  var opresult1886 = callmethod(opresult1883, "++", [1], string1884);
  var opresult1888 = callmethod(opresult1886, "++", [1], var_fblock);
  var string1889 = new GraceString("]");
  var opresult1891 = callmethod(opresult1888, "++", [1], string1889);
  lineNumber = 611
  var call1892 = callmethod(this,"out", [1], opresult1891);
  var if1861 = call1892;
  } else {
  lineNumber = 613
  lineNumber = 612
  var string1893 = new GraceString("  %if");
  var opresult1895 = callmethod(string1893, "++", [1], var_myc);
  var string1896 = new GraceString(" = phi %object [ ");
  var opresult1898 = callmethod(opresult1895, "++", [1], string1896);
  var opresult1900 = callmethod(opresult1898, "++", [1], var_tret);
  var string1901 = new GraceString(", ");
  var opresult1903 = callmethod(opresult1900, "++", [1], string1901);
  lineNumber = 613
  var opresult1905 = callmethod(opresult1903, "++", [1], var_tblock);
  var string1906 = new GraceString("], [%undefined");
  var opresult1908 = callmethod(opresult1905, "++", [1], string1906);
  var opresult1910 = callmethod(opresult1908, "++", [1], var_myc);
  var string1911 = new GraceString(", ");
  var opresult1913 = callmethod(opresult1910, "++", [1], string1911);
  var opresult1915 = callmethod(opresult1913, "++", [1], var_startblock);
  var string1916 = new GraceString("]");
  var opresult1918 = callmethod(opresult1915, "++", [1], string1916);
  lineNumber = 614
  var call1919 = callmethod(this,"out", [1], opresult1918);
  var if1861 = call1919;
}
  lineNumber = 616
  lineNumber = 1
  lineNumber = 616
  lineNumber = 615
  var string1920 = new GraceString("%if");
  var opresult1922 = callmethod(string1920, "++", [1], var_myc);
  var call1923 = callmethod(var_o,"register:=", [1], opresult1922);
  return call1923
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileif"] = func1668;
  lineNumber = 640
var func1924 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 619
  lineNumber = 1
  lineNumber = 618
  var call1925 = callmethod(var_o,"value", [0]);
  var var_name = call1925;
  lineNumber = 640
  lineNumber = 641
  lineNumber = 619
  var string1927 = new GraceString("self");
  var opresult1929 = callmethod(var_name, "==", [1], string1927);
  if (Grace_isTrue(opresult1929)) {
  lineNumber = 621
  lineNumber = 1
  lineNumber = 620
  var string1930 = new GraceString("%self");
  var call1931 = callmethod(var_o,"register:=", [1], string1930);
  var if1926 = call1931;
  } else {
  lineNumber = 640
  lineNumber = 628
  lineNumber = 621
  var string1933 = new GraceString("__compilerRevision");
  var opresult1935 = callmethod(var_name, "==", [1], string1933);
  if (Grace_isTrue(opresult1935)) {
  lineNumber = 623
  lineNumber = 622
  var string1936 = new GraceString("%str___compilerRevision");
  var opresult1938 = callmethod(string1936, "++", [1], var_auto__95__count);
  lineNumber = 623
  var string1939 = new GraceString(" = bitcast [41 x i8]* @.str._compilerRevision to i8*");
  var opresult1941 = callmethod(opresult1938, "++", [1], string1939);
  lineNumber = 624
  var call1942 = callmethod(this,"out", [1], opresult1941);
  lineNumber = 626
  lineNumber = 624
  var string1943 = new GraceString("%\"var_val___compilerRevision");
  var opresult1945 = callmethod(string1943, "++", [1], var_auto__95__count);
  lineNumber = 625
  var string1946 = new GraceString("\" = call %object @alloc_String(i8* %str___compilerRevision");
  var opresult1948 = callmethod(opresult1945, "++", [1], string1946);
  lineNumber = 626
  var opresult1950 = callmethod(opresult1948, "++", [1], var_auto__95__count);
  var string1951 = new GraceString(")");
  var opresult1953 = callmethod(opresult1950, "++", [1], string1951);
  lineNumber = 627
  var call1954 = callmethod(this,"out", [1], opresult1953);
  lineNumber = 628
  lineNumber = 1
  lineNumber = 628
  lineNumber = 627
  var string1955 = new GraceString("%\"var_val___compilerRevision");
  var opresult1957 = callmethod(string1955, "++", [1], var_auto__95__count);
  var string1958 = new GraceString("\"");
  var opresult1960 = callmethod(opresult1957, "++", [1], string1958);
  var call1961 = callmethod(var_o,"register:=", [1], opresult1960);
  var if1932 = call1961;
  } else {
  lineNumber = 629
  lineNumber = 1
  lineNumber = 629
  var call1962 = callmethod(var_name,"_escape", [0]);
  var_name = call1962;
  lineNumber = 636
  lineNumber = 630
  var call1964 = callmethod(var_modules,"contains", [1], var_name);
  if (Grace_isTrue(call1964)) {
  lineNumber = 632
  lineNumber = 631
  var string1965 = new GraceString("  %\"var_val_");
  var opresult1967 = callmethod(string1965, "++", [1], var_name);
  var opresult1969 = callmethod(opresult1967, "++", [1], var_auto__95__count);
  lineNumber = 632
  var string1970 = new GraceString("\" = load %object* @.module.");
  var opresult1972 = callmethod(opresult1969, "++", [1], string1970);
  var opresult1974 = callmethod(opresult1972, "++", [1], var_name);
  lineNumber = 633
  var call1975 = callmethod(this,"out", [1], opresult1974);
  var if1963 = call1975;
  } else {
  lineNumber = 634
  var call1976 = callmethod(var_usedvars,"push", [1], var_name);
  lineNumber = 636
  lineNumber = 635
  var string1977 = new GraceString("  %\"var_val_");
  var opresult1979 = callmethod(string1977, "++", [1], var_name);
  var opresult1981 = callmethod(opresult1979, "++", [1], var_auto__95__count);
  var string1982 = new GraceString("\" = load %object* ");
  var opresult1984 = callmethod(opresult1981, "++", [1], string1982);
  lineNumber = 636
  var string1985 = new GraceString("%\"var_");
  var opresult1987 = callmethod(opresult1984, "++", [1], string1985);
  var opresult1989 = callmethod(opresult1987, "++", [1], var_name);
  var string1990 = new GraceString("\"");
  var opresult1992 = callmethod(opresult1989, "++", [1], string1990);
  lineNumber = 637
  var call1993 = callmethod(this,"out", [1], opresult1992);
  var if1963 = call1993;
}
  lineNumber = 639
  lineNumber = 1
  lineNumber = 639
  lineNumber = 638
  var string1994 = new GraceString("%\"var_val_");
  var opresult1996 = callmethod(string1994, "++", [1], var_name);
  var opresult1998 = callmethod(opresult1996, "++", [1], var_auto__95__count);
  var string1999 = new GraceString("\"");
  var opresult2001 = callmethod(opresult1998, "++", [1], string1999);
  var call2002 = callmethod(var_o,"register:=", [1], opresult2001);
  lineNumber = 640
  lineNumber = 639
  var opresult2004 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2004;
  var if1932 = opresult2004;
}
  var if1926 = if1932;
}
  return if1926
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileidentifier"] = func1924;
  lineNumber = 677
var func2005 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 644
  lineNumber = 1
  lineNumber = 643
  var call2006 = callmethod(var_o,"dest", [0]);
  var var_dest = call2006;
  lineNumber = 645
  lineNumber = 644
  var string2007 = new GraceString("");
  var var_val = string2007;
  lineNumber = 646
  lineNumber = 645
  var string2008 = new GraceString("");
  var var_c = string2008;
  lineNumber = 647
  lineNumber = 646
  var string2009 = new GraceString("");
  var var_r = string2009;
  lineNumber = 675
  lineNumber = 676
  lineNumber = 1
  lineNumber = 647
  var call2011 = callmethod(var_dest,"kind", [0]);
  var string2012 = new GraceString("identifier");
  var opresult2014 = callmethod(call2011, "==", [1], string2012);
  if (Grace_isTrue(opresult2014)) {
  lineNumber = 649
  lineNumber = 1
  lineNumber = 648
  var call2015 = callmethod(var_o,"value", [0]);
  var_val = call2015;
  lineNumber = 649
  lineNumber = 650
  var call2016 = callmethod(this,"compilenode", [1], var_val);
  var_val = call2016;
  lineNumber = 1
  lineNumber = 650
  lineNumber = 1
  lineNumber = 650
  var call2017 = callmethod(var_dest,"value", [0]);
  var call2018 = callmethod(call2017,"_escape", [0]);
  var var_nm = call2018;
  lineNumber = 651
  var call2019 = callmethod(var_usedvars,"push", [1], var_nm);
  lineNumber = 652
  var string2020 = new GraceString("  store %object ");
  var opresult2022 = callmethod(string2020, "++", [1], var_val);
  var string2023 = new GraceString(", %object* %\"var_");
  var opresult2025 = callmethod(opresult2022, "++", [1], string2023);
  var opresult2027 = callmethod(opresult2025, "++", [1], var_nm);
  var string2028 = new GraceString("\"");
  var opresult2030 = callmethod(opresult2027, "++", [1], string2028);
  lineNumber = 653
  var call2031 = callmethod(this,"out", [1], opresult2030);
  var string2032 = new GraceString("  %icmp");
  var opresult2034 = callmethod(string2032, "++", [1], var_auto__95__count);
  var string2035 = new GraceString(" = icmp eq %object ");
  var opresult2037 = callmethod(opresult2034, "++", [1], string2035);
  var opresult2039 = callmethod(opresult2037, "++", [1], var_val);
  var string2040 = new GraceString(", %undefined");
  var opresult2042 = callmethod(opresult2039, "++", [1], string2040);
  lineNumber = 654
  var call2043 = callmethod(this,"out", [1], opresult2042);
  lineNumber = 655
  lineNumber = 654
  var string2044 = new GraceString("  br i1 %icmp");
  var opresult2046 = callmethod(string2044, "++", [1], var_auto__95__count);
  var string2047 = new GraceString(", label %isundef");
  var opresult2049 = callmethod(opresult2046, "++", [1], string2047);
  var opresult2051 = callmethod(opresult2049, "++", [1], var_auto__95__count);
  var string2052 = new GraceString(", ");
  var opresult2054 = callmethod(opresult2051, "++", [1], string2052);
  lineNumber = 655
  var string2055 = new GraceString("label %isdef");
  var opresult2057 = callmethod(string2055, "++", [1], var_auto__95__count);
  var string2058 = new GraceString("");
  var opresult2060 = callmethod(opresult2057, "++", [1], string2058);
  var opresult2062 = callmethod(opresult2054, "++", [1], opresult2060);
  lineNumber = 656
  var call2063 = callmethod(this,"out", [1], opresult2062);
  var string2064 = new GraceString("isundef");
  var opresult2066 = callmethod(string2064, "++", [1], var_auto__95__count);
  var string2067 = new GraceString("");
  var opresult2069 = callmethod(opresult2066, "++", [1], string2067);
  lineNumber = 657
  var call2070 = callmethod(this,"beginblock", [1], opresult2069);
  lineNumber = 659
  lineNumber = 657
  var string2071 = new GraceString("  call %object @callmethod(%object %none");
  lineNumber = 658
  var string2072 = new GraceString(", i8* getelementptr([11 x i8]* @.str._assignment");
  var opresult2074 = callmethod(string2071, "++", [1], string2072);
  lineNumber = 659
  var string2075 = new GraceString(",i32 0,i32 0), i32 1, %object* %\"var_");
  var opresult2077 = callmethod(string2075, "++", [1], var_nm);
  var string2078 = new GraceString("\")");
  var opresult2080 = callmethod(opresult2077, "++", [1], string2078);
  var opresult2082 = callmethod(opresult2074, "++", [1], opresult2080);
  lineNumber = 660
  var call2083 = callmethod(this,"out", [1], opresult2082);
  var string2084 = new GraceString("  br label %isdef");
  var opresult2086 = callmethod(string2084, "++", [1], var_auto__95__count);
  var string2087 = new GraceString("");
  var opresult2089 = callmethod(opresult2086, "++", [1], string2087);
  lineNumber = 661
  var call2090 = callmethod(this,"out", [1], opresult2089);
  var string2091 = new GraceString("isdef");
  var opresult2093 = callmethod(string2091, "++", [1], var_auto__95__count);
  var string2094 = new GraceString("");
  var opresult2096 = callmethod(opresult2093, "++", [1], string2094);
  lineNumber = 662
  var call2097 = callmethod(this,"beginblock", [1], opresult2096);
  lineNumber = 663
  lineNumber = 662
  var opresult2099 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2099;
  lineNumber = 664
  lineNumber = 1
  lineNumber = 663
  var call2100 = callmethod(var_o,"register:=", [1], var_val);
  var if2010 = call2100;
  } else {
  lineNumber = 675
  lineNumber = 670
  lineNumber = 1
  lineNumber = 664
  var call2102 = callmethod(var_dest,"kind", [0]);
  var string2103 = new GraceString("member");
  var opresult2105 = callmethod(call2102, "==", [1], string2103);
  if (Grace_isTrue(opresult2105)) {
  lineNumber = 665
  var string2106 = new GraceString("; WARNING: non-local assigns not yet fully supported");
  lineNumber = 666
  var call2107 = callmethod(this,"out", [1], string2106);
  lineNumber = 667
  lineNumber = 1
  lineNumber = 667
  lineNumber = 1
  lineNumber = 666
  var call2108 = callmethod(var_dest,"value", [0]);
  var string2109 = new GraceString(":=");
  var opresult2111 = callmethod(call2108, "++", [1], string2109);
  var call2112 = callmethod(var_dest,"value:=", [1], opresult2111);
  lineNumber = 667
  lineNumber = 1
  lineNumber = 667
  var call2114 = callmethod(var_o,"value", [0]);
  var array2113 = new GraceList([
call2114,
]);

  var call2115 = callmethod(var_ast,"astcall", [2], var_dest, array2113);
  var_c = call2115;
  lineNumber = 668
  lineNumber = 669
  var call2116 = callmethod(this,"compilenode", [1], var_c);
  var_r = call2116;
  lineNumber = 670
  lineNumber = 1
  lineNumber = 669
  var call2117 = callmethod(var_o,"register:=", [1], var_r);
  var if2101 = call2117;
  } else {
  lineNumber = 675
  lineNumber = 676
  lineNumber = 1
  lineNumber = 670
  var call2119 = callmethod(var_dest,"kind", [0]);
  var string2120 = new GraceString("index");
  var opresult2122 = callmethod(call2119, "==", [1], string2120);
  if (Grace_isTrue(opresult2122)) {
  lineNumber = 671
  var string2123 = new GraceString("[]:=");
  lineNumber = 1
  lineNumber = 671
  var call2124 = callmethod(var_dest,"value", [0]);
  var call2125 = callmethod(var_ast,"astmember", [2], string2123, call2124);
  var var_imem = call2125;
  lineNumber = 672
  lineNumber = 1
  lineNumber = 672
  var call2127 = callmethod(var_dest,"index", [0]);
  lineNumber = 1
  lineNumber = 672
  var call2128 = callmethod(var_o,"value", [0]);
  var array2126 = new GraceList([
call2127,
call2128,
]);

  var call2129 = callmethod(var_ast,"astcall", [2], var_imem, array2126);
  var_c = call2129;
  lineNumber = 673
  lineNumber = 674
  var call2130 = callmethod(this,"compilenode", [1], var_c);
  var_r = call2130;
  lineNumber = 675
  lineNumber = 1
  lineNumber = 674
  var call2131 = callmethod(var_o,"register:=", [1], var_r);
  var if2118 = call2131;
}
  var if2101 = if2118;
}
  var if2010 = if2101;
}
  lineNumber = 677
  lineNumber = 1
  lineNumber = 676
  var string2132 = new GraceString("%none");
  var call2133 = callmethod(var_o,"register:=", [1], string2132);
  return call2133
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilebind"] = func2005;
  lineNumber = 705
var func2134 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 680
  var var_nm;
  lineNumber = 683
  lineNumber = 685
  lineNumber = 1
  lineNumber = 685
  lineNumber = 1
  lineNumber = 680
  var call2136 = callmethod(var_o,"name", [0]);
  var call2137 = callmethod(call2136,"kind", [0]);
  var string2138 = new GraceString("generic");
  var opresult2140 = callmethod(call2137, "==", [1], string2138);
  if (Grace_isTrue(opresult2140)) {
  lineNumber = 681
  lineNumber = 1
  lineNumber = 681
  lineNumber = 1
  lineNumber = 681
  lineNumber = 1
  lineNumber = 681
  lineNumber = 1
  lineNumber = 681
  var call2141 = callmethod(var_o,"name", [0]);
  var call2142 = callmethod(call2141,"value", [0]);
  var call2143 = callmethod(call2142,"value", [0]);
  var call2144 = callmethod(call2143,"_escape", [0]);
  var_nm = call2144;
  var if2135 = call2144;
  } else {
  lineNumber = 683
  lineNumber = 1
  lineNumber = 683
  lineNumber = 1
  lineNumber = 683
  lineNumber = 1
  lineNumber = 683
  var call2145 = callmethod(var_o,"name", [0]);
  var call2146 = callmethod(call2145,"value", [0]);
  var call2147 = callmethod(call2146,"_escape", [0]);
  var_nm = call2147;
  var if2135 = call2147;
}
  lineNumber = 685
  var call2148 = callmethod(var_declaredvars,"push", [1], var_nm);
  lineNumber = 687
  lineNumber = 1
  lineNumber = 686
  var call2149 = callmethod(var_o,"value", [0]);
  var var_val = call2149;
  lineNumber = 690
  lineNumber = 687
  if (Grace_isTrue(var_val)) {
  lineNumber = 688
  lineNumber = 689
  var call2151 = callmethod(this,"compilenode", [1], var_val);
  var_val = call2151;
  var if2150 = call2151;
  } else {
  lineNumber = 690
  var string2152 = new GraceString("const must have value bound.");
  var call2153 = callmethod(var_util,"syntax_error", [1], string2152);
  var if2150 = call2153;
}
  lineNumber = 693
  lineNumber = 692
  var string2154 = new GraceString("  store %object ");
  var opresult2156 = callmethod(string2154, "++", [1], var_val);
  var string2157 = new GraceString(", %object* %\"var_");
  var opresult2159 = callmethod(opresult2156, "++", [1], string2157);
  lineNumber = 693
  var opresult2161 = callmethod(opresult2159, "++", [1], var_nm);
  var string2162 = new GraceString("\"");
  var opresult2164 = callmethod(opresult2161, "++", [1], string2162);
  lineNumber = 694
  var call2165 = callmethod(this,"out", [1], opresult2164);
  var string2166 = new GraceString("  %icmp");
  var opresult2168 = callmethod(string2166, "++", [1], var_auto__95__count);
  var string2169 = new GraceString(" = icmp eq %object ");
  var opresult2171 = callmethod(opresult2168, "++", [1], string2169);
  var opresult2173 = callmethod(opresult2171, "++", [1], var_val);
  var string2174 = new GraceString(", %undefined");
  var opresult2176 = callmethod(opresult2173, "++", [1], string2174);
  lineNumber = 695
  var call2177 = callmethod(this,"out", [1], opresult2176);
  lineNumber = 696
  lineNumber = 695
  var string2178 = new GraceString("  br i1 %icmp");
  var opresult2180 = callmethod(string2178, "++", [1], var_auto__95__count);
  var string2181 = new GraceString(", label %isundef");
  var opresult2183 = callmethod(opresult2180, "++", [1], string2181);
  var opresult2185 = callmethod(opresult2183, "++", [1], var_auto__95__count);
  var string2186 = new GraceString(", ");
  var opresult2188 = callmethod(opresult2185, "++", [1], string2186);
  lineNumber = 696
  var string2189 = new GraceString("label %isdef");
  var opresult2191 = callmethod(string2189, "++", [1], var_auto__95__count);
  var string2192 = new GraceString("");
  var opresult2194 = callmethod(opresult2191, "++", [1], string2192);
  var opresult2196 = callmethod(opresult2188, "++", [1], opresult2194);
  lineNumber = 697
  var call2197 = callmethod(this,"out", [1], opresult2196);
  var string2198 = new GraceString("isundef");
  var opresult2200 = callmethod(string2198, "++", [1], var_auto__95__count);
  var string2201 = new GraceString("");
  var opresult2203 = callmethod(opresult2200, "++", [1], string2201);
  lineNumber = 698
  var call2204 = callmethod(this,"beginblock", [1], opresult2203);
  lineNumber = 700
  lineNumber = 698
  var string2205 = new GraceString("  call %object @callmethod(%object %none");
  lineNumber = 699
  var string2206 = new GraceString(", i8* getelementptr([11 x i8]* @.str._assignment");
  var opresult2208 = callmethod(string2205, "++", [1], string2206);
  lineNumber = 700
  var string2209 = new GraceString(",i32 0,i32 0), i32 1, %object* %\"var_");
  var opresult2211 = callmethod(string2209, "++", [1], var_nm);
  var string2212 = new GraceString("\")");
  var opresult2214 = callmethod(opresult2211, "++", [1], string2212);
  var opresult2216 = callmethod(opresult2208, "++", [1], opresult2214);
  lineNumber = 701
  var call2217 = callmethod(this,"out", [1], opresult2216);
  var string2218 = new GraceString("  br label %isdef");
  var opresult2220 = callmethod(string2218, "++", [1], var_auto__95__count);
  var string2221 = new GraceString("");
  var opresult2223 = callmethod(opresult2220, "++", [1], string2221);
  lineNumber = 702
  var call2224 = callmethod(this,"out", [1], opresult2223);
  var string2225 = new GraceString("isdef");
  var opresult2227 = callmethod(string2225, "++", [1], var_auto__95__count);
  var string2228 = new GraceString("");
  var opresult2230 = callmethod(opresult2227, "++", [1], string2228);
  lineNumber = 703
  var call2231 = callmethod(this,"beginblock", [1], opresult2230);
  lineNumber = 704
  lineNumber = 703
  var opresult2233 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2233;
  lineNumber = 705
  lineNumber = 1
  lineNumber = 704
  var string2234 = new GraceString("%none");
  var call2235 = callmethod(var_o,"register:=", [1], string2234);
  return call2235
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compiledefdec"] = func2134;
  lineNumber = 732
var func2236 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 707
  lineNumber = 1
  lineNumber = 707
  lineNumber = 1
  lineNumber = 707
  lineNumber = 1
  lineNumber = 707
  var call2237 = callmethod(var_o,"name", [0]);
  var call2238 = callmethod(call2237,"value", [0]);
  var call2239 = callmethod(call2238,"_escape", [0]);
  var var_nm = call2239;
  lineNumber = 708
  var call2240 = callmethod(var_declaredvars,"push", [1], var_nm);
  lineNumber = 710
  lineNumber = 1
  lineNumber = 709
  var call2241 = callmethod(var_o,"value", [0]);
  var var_val = call2241;
  lineNumber = 711
  lineNumber = 710
  var bool2242 = new GraceBoolean(false)
  var var_hadval = bool2242;
  lineNumber = 716
  lineNumber = 711
  if (Grace_isTrue(var_val)) {
  lineNumber = 712
  lineNumber = 713
  var call2244 = callmethod(this,"compilenode", [1], var_val);
  var_val = call2244;
  lineNumber = 714
  lineNumber = 713
  var bool2245 = new GraceBoolean(true)
  var_hadval = bool2245;
  var if2243 = bool2245;
  } else {
  lineNumber = 716
  lineNumber = 715
  var string2246 = new GraceString("%undefined");
  var_val = string2246;
  var if2243 = string2246;
}
  lineNumber = 718
  lineNumber = 717
  var string2247 = new GraceString("  store %object ");
  var opresult2249 = callmethod(string2247, "++", [1], var_val);
  var string2250 = new GraceString(", %object* %\"var_");
  var opresult2252 = callmethod(opresult2249, "++", [1], string2250);
  lineNumber = 718
  var opresult2254 = callmethod(opresult2252, "++", [1], var_nm);
  var string2255 = new GraceString("\"");
  var opresult2257 = callmethod(opresult2254, "++", [1], string2255);
  lineNumber = 719
  var call2258 = callmethod(this,"out", [1], opresult2257);
  lineNumber = 730
  lineNumber = 719
  if (Grace_isTrue(var_hadval)) {
  lineNumber = 720
  var string2260 = new GraceString("  %icmp");
  var opresult2262 = callmethod(string2260, "++", [1], var_auto__95__count);
  var string2263 = new GraceString(" = icmp eq %object ");
  var opresult2265 = callmethod(opresult2262, "++", [1], string2263);
  var opresult2267 = callmethod(opresult2265, "++", [1], var_val);
  var string2268 = new GraceString(", %undefined");
  var opresult2270 = callmethod(opresult2267, "++", [1], string2268);
  lineNumber = 721
  var call2271 = callmethod(this,"out", [1], opresult2270);
  lineNumber = 722
  lineNumber = 721
  var string2272 = new GraceString("  br i1 %icmp");
  var opresult2274 = callmethod(string2272, "++", [1], var_auto__95__count);
  var string2275 = new GraceString(", label %isundef");
  var opresult2277 = callmethod(opresult2274, "++", [1], string2275);
  var opresult2279 = callmethod(opresult2277, "++", [1], var_auto__95__count);
  var string2280 = new GraceString(", ");
  var opresult2282 = callmethod(opresult2279, "++", [1], string2280);
  lineNumber = 722
  var string2283 = new GraceString("label %isdef");
  var opresult2285 = callmethod(string2283, "++", [1], var_auto__95__count);
  var string2286 = new GraceString("");
  var opresult2288 = callmethod(opresult2285, "++", [1], string2286);
  var opresult2290 = callmethod(opresult2282, "++", [1], opresult2288);
  lineNumber = 723
  var call2291 = callmethod(this,"out", [1], opresult2290);
  var string2292 = new GraceString("isundef");
  var opresult2294 = callmethod(string2292, "++", [1], var_auto__95__count);
  var string2295 = new GraceString("");
  var opresult2297 = callmethod(opresult2294, "++", [1], string2295);
  lineNumber = 724
  var call2298 = callmethod(this,"beginblock", [1], opresult2297);
  lineNumber = 726
  lineNumber = 724
  var string2299 = new GraceString("  call %object @callmethod(%object %none");
  lineNumber = 725
  var string2300 = new GraceString(", i8* getelementptr([11 x i8]* @.str._assignment");
  var opresult2302 = callmethod(string2299, "++", [1], string2300);
  lineNumber = 726
  var string2303 = new GraceString(",i32 0,i32 0), i32 1, %object* %\"var_");
  var opresult2305 = callmethod(string2303, "++", [1], var_nm);
  var string2306 = new GraceString("\")");
  var opresult2308 = callmethod(opresult2305, "++", [1], string2306);
  var opresult2310 = callmethod(opresult2302, "++", [1], opresult2308);
  lineNumber = 727
  var call2311 = callmethod(this,"out", [1], opresult2310);
  var string2312 = new GraceString("  br label %isdef");
  var opresult2314 = callmethod(string2312, "++", [1], var_auto__95__count);
  var string2315 = new GraceString("");
  var opresult2317 = callmethod(opresult2314, "++", [1], string2315);
  lineNumber = 728
  var call2318 = callmethod(this,"out", [1], opresult2317);
  var string2319 = new GraceString("isdef");
  var opresult2321 = callmethod(string2319, "++", [1], var_auto__95__count);
  var string2322 = new GraceString("");
  var opresult2324 = callmethod(opresult2321, "++", [1], string2322);
  lineNumber = 729
  var call2325 = callmethod(this,"beginblock", [1], opresult2324);
  lineNumber = 730
  lineNumber = 729
  var opresult2327 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2327;
  var if2259 = opresult2327;
}
  lineNumber = 732
  lineNumber = 1
  lineNumber = 731
  var string2328 = new GraceString("%none");
  var call2329 = callmethod(var_o,"register:=", [1], string2328);
  return call2329
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilevardec"] = func2236;
  lineNumber = 742
var func2330 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 734
  lineNumber = 1
  lineNumber = 734
  var call2331 = callmethod(var_o,"value", [0]);
  lineNumber = 735
  var call2332 = callmethod(this,"compilenode", [1], call2331);
  var var_of = call2332;
  lineNumber = 1
  lineNumber = 735
  var call2333 = callmethod(var_o,"index", [0]);
  lineNumber = 736
  var call2334 = callmethod(this,"compilenode", [1], call2333);
  var var_index = call2334;
  var string2335 = new GraceString("  store %object ");
  var opresult2337 = callmethod(string2335, "++", [1], var_index);
  var string2338 = new GraceString(", %object* %params_0");
  var opresult2340 = callmethod(opresult2337, "++", [1], string2338);
  lineNumber = 737
  var call2341 = callmethod(this,"out", [1], opresult2340);
  lineNumber = 739
  lineNumber = 737
  var string2342 = new GraceString("  %idxres");
  var opresult2344 = callmethod(string2342, "++", [1], var_auto__95__count);
  var string2345 = new GraceString(" = call %object @callmethod(%object ");
  var opresult2347 = callmethod(opresult2344, "++", [1], string2345);
  lineNumber = 738
  var opresult2349 = callmethod(opresult2347, "++", [1], var_of);
  var string2350 = new GraceString(", i8* getelementptr([3 x i8]* @.str._index");
  var opresult2352 = callmethod(opresult2349, "++", [1], string2350);
  lineNumber = 739
  var string2353 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult2355 = callmethod(opresult2352, "++", [1], string2353);
  lineNumber = 740
  var call2356 = callmethod(this,"out", [1], opresult2355);
  lineNumber = 741
  lineNumber = 1
  lineNumber = 741
  lineNumber = 740
  var string2357 = new GraceString("%idxres");
  var opresult2359 = callmethod(string2357, "++", [1], var_auto__95__count);
  var call2360 = callmethod(var_o,"register:=", [1], opresult2359);
  lineNumber = 742
  lineNumber = 741
  var opresult2362 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2362;
  return opresult2362
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileindex"] = func2330;
  lineNumber = 786
var func2363 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 744
  lineNumber = 1
  lineNumber = 744
  var call2364 = callmethod(var_o,"left", [0]);
  lineNumber = 745
  var call2365 = callmethod(this,"compilenode", [1], call2364);
  var var_left = call2365;
  lineNumber = 1
  lineNumber = 745
  var call2366 = callmethod(var_o,"right", [0]);
  lineNumber = 746
  var call2367 = callmethod(this,"compilenode", [1], call2366);
  var var_right = call2367;
  lineNumber = 747
  lineNumber = 746
  var opresult2369 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2369;
  lineNumber = 786
  lineNumber = 787
  lineNumber = 1
  lineNumber = 747
  var call2371 = callmethod(var_o,"value", [0]);
  var string2372 = new GraceString("+");
  var opresult2374 = callmethod(call2371, "==", [1], string2372);
  lineNumber = 787
  lineNumber = 1
  lineNumber = 747
  var call2375 = callmethod(var_o,"value", [0]);
  var string2376 = new GraceString("*");
  var opresult2378 = callmethod(call2375, "==", [1], string2376);
  var opresult2380 = callmethod(opresult2374, "|", [1], opresult2378);
  lineNumber = 787
  lineNumber = 1
  lineNumber = 747
  var call2381 = callmethod(var_o,"value", [0]);
  var string2382 = new GraceString("/");
  var opresult2384 = callmethod(call2381, "==", [1], string2382);
  var opresult2386 = callmethod(opresult2380, "|", [1], opresult2384);
  lineNumber = 787
  lineNumber = 1
  lineNumber = 748
  var call2387 = callmethod(var_o,"value", [0]);
  var string2388 = new GraceString("-");
  var opresult2390 = callmethod(call2387, "==", [1], string2388);
  var opresult2392 = callmethod(opresult2386, "|", [1], opresult2390);
  lineNumber = 787
  lineNumber = 1
  lineNumber = 748
  var call2393 = callmethod(var_o,"value", [0]);
  var string2394 = new GraceString("%");
  var opresult2396 = callmethod(call2393, "==", [1], string2394);
  var opresult2398 = callmethod(opresult2392, "|", [1], opresult2396);
  if (Grace_isTrue(opresult2398)) {
  lineNumber = 750
  lineNumber = 749
  var string2399 = new GraceString("sum");
  var var_rnm = string2399;
  lineNumber = 751
  lineNumber = 750
  var string2400 = new GraceString("plus");
  var var_opnm = string2400;
  lineNumber = 754
  lineNumber = 755
  lineNumber = 1
  lineNumber = 751
  var call2402 = callmethod(var_o,"value", [0]);
  var string2403 = new GraceString("*");
  var opresult2405 = callmethod(call2402, "==", [1], string2403);
  if (Grace_isTrue(opresult2405)) {
  lineNumber = 753
  lineNumber = 752
  var string2406 = new GraceString("prod");
  var_rnm = string2406;
  lineNumber = 754
  lineNumber = 753
  var string2407 = new GraceString("asterisk");
  var_opnm = string2407;
  var if2401 = string2407;
}
  lineNumber = 758
  lineNumber = 759
  lineNumber = 1
  lineNumber = 755
  var call2409 = callmethod(var_o,"value", [0]);
  var string2410 = new GraceString("/");
  var opresult2412 = callmethod(call2409, "==", [1], string2410);
  if (Grace_isTrue(opresult2412)) {
  lineNumber = 757
  lineNumber = 756
  var string2413 = new GraceString("quotient");
  var_rnm = string2413;
  lineNumber = 758
  lineNumber = 757
  var string2414 = new GraceString("slash");
  var_opnm = string2414;
  var if2408 = string2414;
}
  lineNumber = 762
  lineNumber = 763
  lineNumber = 1
  lineNumber = 759
  var call2416 = callmethod(var_o,"value", [0]);
  var string2417 = new GraceString("-");
  var opresult2419 = callmethod(call2416, "==", [1], string2417);
  if (Grace_isTrue(opresult2419)) {
  lineNumber = 761
  lineNumber = 760
  var string2420 = new GraceString("diff");
  var_rnm = string2420;
  lineNumber = 762
  lineNumber = 761
  var string2421 = new GraceString("minus");
  var_opnm = string2421;
  var if2415 = string2421;
}
  lineNumber = 766
  lineNumber = 767
  lineNumber = 1
  lineNumber = 763
  var call2423 = callmethod(var_o,"value", [0]);
  var string2424 = new GraceString("%");
  var opresult2426 = callmethod(call2423, "==", [1], string2424);
  if (Grace_isTrue(opresult2426)) {
  lineNumber = 765
  lineNumber = 764
  var string2427 = new GraceString("modulus");
  var_rnm = string2427;
  lineNumber = 766
  lineNumber = 765
  var string2428 = new GraceString("percent");
  var_opnm = string2428;
  var if2422 = string2428;
}
  lineNumber = 767
  var string2429 = new GraceString("  store %object ");
  var opresult2431 = callmethod(string2429, "++", [1], var_right);
  var string2432 = new GraceString(", %object* %params_0");
  var opresult2434 = callmethod(opresult2431, "++", [1], string2432);
  lineNumber = 768
  var call2435 = callmethod(this,"out", [1], opresult2434);
  lineNumber = 770
  lineNumber = 768
  var string2436 = new GraceString("  %");
  var opresult2438 = callmethod(string2436, "++", [1], var_rnm);
  var opresult2440 = callmethod(opresult2438, "++", [1], var_auto__95__count);
  var string2441 = new GraceString(" = call %object @callmethod(%object ");
  var opresult2443 = callmethod(opresult2440, "++", [1], string2441);
  lineNumber = 769
  var opresult2445 = callmethod(opresult2443, "++", [1], var_left);
  var string2446 = new GraceString(", i8* getelementptr([2 x i8]* @.str._");
  var opresult2448 = callmethod(opresult2445, "++", [1], string2446);
  var opresult2450 = callmethod(opresult2448, "++", [1], var_opnm);
  lineNumber = 770
  var string2451 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult2453 = callmethod(opresult2450, "++", [1], string2451);
  lineNumber = 771
  var call2454 = callmethod(this,"out", [1], opresult2453);
  lineNumber = 772
  lineNumber = 1
  lineNumber = 772
  lineNumber = 771
  var string2455 = new GraceString("%");
  var opresult2457 = callmethod(string2455, "++", [1], var_rnm);
  var opresult2459 = callmethod(opresult2457, "++", [1], var_auto__95__count);
  var call2460 = callmethod(var_o,"register:=", [1], opresult2459);
  lineNumber = 773
  lineNumber = 772
  var opresult2462 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2462;
  var if2370 = opresult2462;
  } else {
  lineNumber = 774
  lineNumber = 1
  lineNumber = 774
  var call2463 = callmethod(var_o,"value", [0]);
  var call2464 = Grace_length(call2463);
  var opresult2466 = callmethod(call2464, "+", [1], new GraceNum(1));
  var var_len = opresult2466;
  lineNumber = 775
  lineNumber = 1
  lineNumber = 775
  lineNumber = 1
  lineNumber = 775
  var call2467 = callmethod(var_o,"value", [0]);
  var call2468 = callmethod(call2467,"_escape", [0]);
  var var_evl = call2468;
  lineNumber = 778
  lineNumber = 776
  var string2469 = new GraceString("@.str");
  lineNumber = 778
  lineNumber = 1
  lineNumber = 776
  var call2470 = callmethod(var_constants,"size", [0]);
  var opresult2472 = callmethod(string2469, "++", [1], call2470);
  var string2473 = new GraceString(" = private unnamed_addr ");
  var opresult2475 = callmethod(opresult2472, "++", [1], string2473);
  lineNumber = 777
  var string2476 = new GraceString("constant [");
  var opresult2478 = callmethod(opresult2475, "++", [1], string2476);
  var opresult2480 = callmethod(opresult2478, "++", [1], var_len);
  var string2481 = new GraceString(" x i8] c\"");
  var opresult2483 = callmethod(opresult2480, "++", [1], string2481);
  var opresult2485 = callmethod(opresult2483, "++", [1], var_evl);
  var string2486 = new GraceString("\\00\"");
  var opresult2488 = callmethod(opresult2485, "++", [1], string2486);
  var var_con = opresult2488;
  lineNumber = 778
  var string2489 = new GraceString("  store %object ");
  var opresult2491 = callmethod(string2489, "++", [1], var_right);
  var string2492 = new GraceString(", %object* %params_0");
  var opresult2494 = callmethod(opresult2491, "++", [1], string2492);
  lineNumber = 779
  var call2495 = callmethod(this,"out", [1], opresult2494);
  lineNumber = 782
  lineNumber = 779
  var string2496 = new GraceString("  %opresult");
  var opresult2498 = callmethod(string2496, "++", [1], var_auto__95__count);
  var string2499 = new GraceString(" = call %object ");
  var opresult2501 = callmethod(opresult2498, "++", [1], string2499);
  lineNumber = 780
  var string2502 = new GraceString("@callmethod(%object ");
  var opresult2504 = callmethod(opresult2501, "++", [1], string2502);
  var opresult2506 = callmethod(opresult2504, "++", [1], var_left);
  lineNumber = 781
  var string2507 = new GraceString(", i8* getelementptr([");
  var opresult2509 = callmethod(opresult2506, "++", [1], string2507);
  var opresult2511 = callmethod(opresult2509, "++", [1], var_len);
  var string2512 = new GraceString(" x i8]* @.str");
  var opresult2514 = callmethod(opresult2511, "++", [1], string2512);
  lineNumber = 782
  lineNumber = 1
  lineNumber = 782
  var call2515 = callmethod(var_constants,"size", [0]);
  var opresult2517 = callmethod(opresult2514, "++", [1], call2515);
  var string2518 = new GraceString(",i32 0,i32 0), i32 1, %object* %params)");
  var opresult2520 = callmethod(opresult2517, "++", [1], string2518);
  lineNumber = 783
  var call2521 = callmethod(this,"out", [1], opresult2520);
  var call2522 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 785
  lineNumber = 1
  lineNumber = 785
  lineNumber = 784
  var string2523 = new GraceString("%opresult");
  var opresult2525 = callmethod(string2523, "++", [1], var_auto__95__count);
  var call2526 = callmethod(var_o,"register:=", [1], opresult2525);
  lineNumber = 786
  lineNumber = 785
  var opresult2528 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2528;
  var if2370 = opresult2528;
}
  return if2370
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileop"] = func2363;
  lineNumber = 836
var func2529 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 790
  var array2530 = new GraceList([
]);

  var var_args = array2530;
  lineNumber = 791
  lineNumber = 790
  var string2531 = new GraceString("");
  var var_obj = string2531;
  lineNumber = 792
  lineNumber = 791
  var var_len = new GraceNum(0);
  lineNumber = 793
  lineNumber = 792
  var string2532 = new GraceString("");
  var var_con = string2532;
  lineNumber = 794
  var var_evl;
  lineNumber = 795
  lineNumber = 794
  var var_i = new GraceNum(0);
  lineNumber = 797
  lineNumber = 795
  lineNumber = 1
  lineNumber = 795
  var call2533 = callmethod(var_o,"with", [0]);
  lineNumber = 797
  var block2534 = Grace_allocObject();
  block2534.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2534.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2534.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2534.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2534.receiver = this;
  block2534.className = 'block<genllvm29:797>';
  block2534.real = function(
var_p
) {
  lineNumber = 796
  lineNumber = 797
  var call2535 = callmethod(this,"compilenode", [1], var_p);
  var var_r = call2535;
  var call2536 = callmethod(var_args,"push", [1], var_r);
  return call2536;
};
  var call2537 = callmethod(Grace_prelude,"for()do", [1, 1], call2533, block2534);
  lineNumber = 801
  lineNumber = 802
  lineNumber = 1
  lineNumber = 799
  var call2539 = callmethod(var_args,"size", [0]);
  var opresult2541 = callmethod(call2539, ">", [1], var_paramsUsed);
  if (Grace_isTrue(opresult2541)) {
  lineNumber = 801
  lineNumber = 1
  lineNumber = 800
  var call2542 = callmethod(var_args,"size", [0]);
  var_paramsUsed = call2542;
  var if2538 = call2542;
}
  lineNumber = 802
  lineNumber = 1
  lineNumber = 802
  lineNumber = 1
  lineNumber = 802
  lineNumber = 1
  lineNumber = 802
  var call2543 = callmethod(var_o,"value", [0]);
  var call2544 = callmethod(call2543,"value", [0]);
  var call2545 = callmethod(call2544,"_escape", [0]);
  var_evl = call2545;
  lineNumber = 832
  lineNumber = 834
  lineNumber = 1
  lineNumber = 834
  lineNumber = 1
  lineNumber = 803
  var call2547 = callmethod(var_o,"value", [0]);
  var call2548 = callmethod(call2547,"kind", [0]);
  var string2549 = new GraceString("member");
  var opresult2551 = callmethod(call2548, "==", [1], string2549);
  if (Grace_isTrue(opresult2551)) {
  lineNumber = 804
  lineNumber = 1
  lineNumber = 804
  lineNumber = 1
  lineNumber = 804
  var call2552 = callmethod(var_o,"value", [0]);
  var call2553 = callmethod(call2552,"in", [0]);
  lineNumber = 805
  var call2554 = callmethod(this,"compilenode", [1], call2553);
  var_obj = call2554;
  lineNumber = 1
  lineNumber = 805
  lineNumber = 1
  lineNumber = 805
  var call2555 = callmethod(var_o,"value", [0]);
  var call2556 = callmethod(call2555,"value", [0]);
  var call2557 = Grace_length(call2556);
  var opresult2559 = callmethod(call2557, "+", [1], new GraceNum(1));
  var_len = opresult2559;
  lineNumber = 808
  lineNumber = 806
  var string2560 = new GraceString("@.str");
  lineNumber = 808
  lineNumber = 1
  lineNumber = 806
  var call2561 = callmethod(var_constants,"size", [0]);
  var opresult2563 = callmethod(string2560, "++", [1], call2561);
  var string2564 = new GraceString(" = private unnamed_addr ");
  var opresult2566 = callmethod(opresult2563, "++", [1], string2564);
  lineNumber = 807
  var string2567 = new GraceString("constant [");
  var opresult2569 = callmethod(opresult2566, "++", [1], string2567);
  var opresult2571 = callmethod(opresult2569, "++", [1], var_len);
  var string2572 = new GraceString(" x i8] c\"");
  var opresult2574 = callmethod(opresult2571, "++", [1], string2572);
  var opresult2576 = callmethod(opresult2574, "++", [1], var_evl);
  var string2577 = new GraceString("\\00\"");
  var opresult2579 = callmethod(opresult2576, "++", [1], string2577);
  var_con = opresult2579;
  lineNumber = 811
  lineNumber = 808
  lineNumber = 811
  var block2580 = Grace_allocObject();
  block2580.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2580.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2580.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2580.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2580.receiver = this;
  block2580.className = 'block<genllvm29:811>';
  block2580.real = function(
var_arg
) {
  lineNumber = 809
  var string2581 = new GraceString("  store %object ");
  var opresult2583 = callmethod(string2581, "++", [1], var_arg);
  var string2584 = new GraceString(", %object* %params_");
  var opresult2586 = callmethod(opresult2583, "++", [1], string2584);
  var opresult2588 = callmethod(opresult2586, "++", [1], var_i);
  var string2589 = new GraceString("");
  var opresult2591 = callmethod(opresult2588, "++", [1], string2589);
  lineNumber = 810
  var call2592 = callmethod(this,"out", [1], opresult2591);
  lineNumber = 811
  lineNumber = 810
  var opresult2594 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult2594;
  return opresult2594;
};
  var call2595 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block2580);
  lineNumber = 816
  lineNumber = 812
  var string2596 = new GraceString("  %call");
  var opresult2598 = callmethod(string2596, "++", [1], var_auto__95__count);
  var string2599 = new GraceString(" = call %object ");
  var opresult2601 = callmethod(opresult2598, "++", [1], string2599);
  lineNumber = 813
  var string2602 = new GraceString("@callmethod(%object ");
  var opresult2604 = callmethod(opresult2601, "++", [1], string2602);
  var opresult2606 = callmethod(opresult2604, "++", [1], var_obj);
  lineNumber = 814
  var string2607 = new GraceString(", i8* getelementptr([");
  var opresult2609 = callmethod(opresult2606, "++", [1], string2607);
  var opresult2611 = callmethod(opresult2609, "++", [1], var_len);
  var string2612 = new GraceString(" x i8]* @.str");
  var opresult2614 = callmethod(opresult2611, "++", [1], string2612);
  lineNumber = 816
  lineNumber = 1
  lineNumber = 815
  var call2615 = callmethod(var_constants,"size", [0]);
  var opresult2617 = callmethod(opresult2614, "++", [1], call2615);
  var string2618 = new GraceString(",i32 0,i32 0), i32 ");
  var opresult2620 = callmethod(opresult2617, "++", [1], string2618);
  lineNumber = 816
  lineNumber = 1
  lineNumber = 816
  var call2621 = callmethod(var_args,"size", [0]);
  var opresult2623 = callmethod(opresult2620, "++", [1], call2621);
  var string2624 = new GraceString(", %object* %params)");
  var opresult2626 = callmethod(opresult2623, "++", [1], string2624);
  lineNumber = 817
  var call2627 = callmethod(this,"out", [1], opresult2626);
  var call2628 = callmethod(var_constants,"push", [1], var_con);
  var if2546 = call2628;
  } else {
  lineNumber = 820
  lineNumber = 819
  var string2629 = new GraceString("%self");
  var_obj = string2629;
  lineNumber = 820
  lineNumber = 1
  lineNumber = 820
  lineNumber = 1
  lineNumber = 820
  var call2630 = callmethod(var_o,"value", [0]);
  var call2631 = callmethod(call2630,"value", [0]);
  var call2632 = Grace_length(call2631);
  var opresult2634 = callmethod(call2632, "+", [1], new GraceNum(1));
  var_len = opresult2634;
  lineNumber = 823
  lineNumber = 821
  var string2635 = new GraceString("@.str");
  lineNumber = 823
  lineNumber = 1
  lineNumber = 821
  var call2636 = callmethod(var_constants,"size", [0]);
  var opresult2638 = callmethod(string2635, "++", [1], call2636);
  var string2639 = new GraceString(" = private unnamed_addr ");
  var opresult2641 = callmethod(opresult2638, "++", [1], string2639);
  lineNumber = 822
  var string2642 = new GraceString("constant [");
  var opresult2644 = callmethod(opresult2641, "++", [1], string2642);
  var opresult2646 = callmethod(opresult2644, "++", [1], var_len);
  var string2647 = new GraceString(" x i8] c\"");
  var opresult2649 = callmethod(opresult2646, "++", [1], string2647);
  var opresult2651 = callmethod(opresult2649, "++", [1], var_evl);
  var string2652 = new GraceString("\\00\"");
  var opresult2654 = callmethod(opresult2651, "++", [1], string2652);
  var_con = opresult2654;
  lineNumber = 826
  lineNumber = 823
  lineNumber = 826
  var block2655 = Grace_allocObject();
  block2655.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2655.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2655.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2655.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2655.receiver = this;
  block2655.className = 'block<genllvm29:826>';
  block2655.real = function(
var_arg
) {
  lineNumber = 824
  var string2656 = new GraceString("  store %object ");
  var opresult2658 = callmethod(string2656, "++", [1], var_arg);
  var string2659 = new GraceString(", %object* %params_");
  var opresult2661 = callmethod(opresult2658, "++", [1], string2659);
  var opresult2663 = callmethod(opresult2661, "++", [1], var_i);
  var string2664 = new GraceString("");
  var opresult2666 = callmethod(opresult2663, "++", [1], string2664);
  lineNumber = 825
  var call2667 = callmethod(this,"out", [1], opresult2666);
  lineNumber = 826
  lineNumber = 825
  var opresult2669 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult2669;
  return opresult2669;
};
  var call2670 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block2655);
  lineNumber = 831
  lineNumber = 827
  var string2671 = new GraceString("  %call");
  var opresult2673 = callmethod(string2671, "++", [1], var_auto__95__count);
  var string2674 = new GraceString(" = call %object ");
  var opresult2676 = callmethod(opresult2673, "++", [1], string2674);
  lineNumber = 828
  var string2677 = new GraceString("@callmethod(%object ");
  var opresult2679 = callmethod(opresult2676, "++", [1], string2677);
  var opresult2681 = callmethod(opresult2679, "++", [1], var_obj);
  lineNumber = 829
  var string2682 = new GraceString(", i8* getelementptr([");
  var opresult2684 = callmethod(opresult2681, "++", [1], string2682);
  var opresult2686 = callmethod(opresult2684, "++", [1], var_len);
  var string2687 = new GraceString(" x i8]* @.str");
  var opresult2689 = callmethod(opresult2686, "++", [1], string2687);
  lineNumber = 831
  lineNumber = 1
  lineNumber = 830
  var call2690 = callmethod(var_constants,"size", [0]);
  var opresult2692 = callmethod(opresult2689, "++", [1], call2690);
  var string2693 = new GraceString(",i32 0,i32 0), i32 ");
  var opresult2695 = callmethod(opresult2692, "++", [1], string2693);
  lineNumber = 831
  lineNumber = 1
  lineNumber = 831
  var call2696 = callmethod(var_args,"size", [0]);
  var opresult2698 = callmethod(opresult2695, "++", [1], call2696);
  var string2699 = new GraceString(", %object* %params)");
  var opresult2701 = callmethod(opresult2698, "++", [1], string2699);
  lineNumber = 832
  var call2702 = callmethod(this,"out", [1], opresult2701);
  var call2703 = callmethod(var_constants,"push", [1], var_con);
  var if2546 = call2703;
}
  lineNumber = 835
  lineNumber = 1
  lineNumber = 835
  lineNumber = 834
  var string2704 = new GraceString("%call");
  var opresult2706 = callmethod(string2704, "++", [1], var_auto__95__count);
  var call2707 = callmethod(var_o,"register:=", [1], opresult2706);
  lineNumber = 836
  lineNumber = 835
  var opresult2709 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2709;
  return opresult2709
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilecall"] = func2529;
  lineNumber = 880
var func2710 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 839
  lineNumber = 838
  var string2711 = new GraceString("");
  var var_escval = string2711;
  lineNumber = 839
  lineNumber = 1
  lineNumber = 839
  var call2712 = callmethod(var_o,"value", [0]);
  var call2713 = Grace_length(call2712);
  var quotient2715 = callmethod(call2713, "/", [1], new GraceNum(2));
  var var_l = quotient2715;
  lineNumber = 841
  lineNumber = 840
  var var_i = new GraceNum(0);
  lineNumber = 847
  lineNumber = 841
  lineNumber = 1
  lineNumber = 841
  var call2716 = callmethod(var_o,"value", [0]);
  lineNumber = 847
  var block2717 = Grace_allocObject();
  block2717.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2717.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2717.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2717.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2717.receiver = this;
  block2717.className = 'block<genllvm29:847>';
  block2717.real = function(
var_c
) {
  lineNumber = 844
  lineNumber = 845
  lineNumber = 842
  var modulus2720 = callmethod(var_i, "%", [1], new GraceNum(2));
  var opresult2722 = callmethod(modulus2720, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2722)) {
  lineNumber = 844
  lineNumber = 843
  var string2723 = new GraceString("\\");
  var opresult2725 = callmethod(var_escval, "++", [1], string2723);
  var_escval = opresult2725;
  var if2718 = opresult2725;
}
  lineNumber = 846
  lineNumber = 845
  var opresult2727 = callmethod(var_escval, "++", [1], var_c);
  var_escval = opresult2727;
  lineNumber = 847
  lineNumber = 846
  var opresult2729 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult2729;
  return opresult2729;
};
  var call2730 = callmethod(Grace_prelude,"for()do", [1, 1], call2716, block2717);
  lineNumber = 849
  lineNumber = 848
  var string2731 = new GraceString("  %tmp");
  var opresult2733 = callmethod(string2731, "++", [1], var_auto__95__count);
  var string2734 = new GraceString(" = load %object* @.octlit");
  var opresult2736 = callmethod(opresult2733, "++", [1], string2734);
  lineNumber = 849
  var opresult2738 = callmethod(opresult2736, "++", [1], var_auto__95__count);
  lineNumber = 850
  var call2739 = callmethod(this,"out", [1], opresult2738);
  lineNumber = 851
  lineNumber = 850
  var string2740 = new GraceString("  %cmp");
  var opresult2742 = callmethod(string2740, "++", [1], var_auto__95__count);
  var string2743 = new GraceString(" = icmp ne %object %tmp");
  var opresult2745 = callmethod(opresult2742, "++", [1], string2743);
  lineNumber = 851
  var opresult2747 = callmethod(opresult2745, "++", [1], var_auto__95__count);
  var string2748 = new GraceString(", null");
  var opresult2750 = callmethod(opresult2747, "++", [1], string2748);
  lineNumber = 852
  var call2751 = callmethod(this,"out", [1], opresult2750);
  lineNumber = 854
  lineNumber = 852
  var string2752 = new GraceString("  br i1 %cmp");
  var opresult2754 = callmethod(string2752, "++", [1], var_auto__95__count);
  var string2755 = new GraceString(", label %octlit");
  var opresult2757 = callmethod(opresult2754, "++", [1], string2755);
  lineNumber = 853
  var opresult2759 = callmethod(opresult2757, "++", [1], var_auto__95__count);
  var string2760 = new GraceString(".already, label %octlit");
  var opresult2762 = callmethod(opresult2759, "++", [1], string2760);
  lineNumber = 854
  var opresult2764 = callmethod(opresult2762, "++", [1], var_auto__95__count);
  var string2765 = new GraceString(".define");
  var opresult2767 = callmethod(opresult2764, "++", [1], string2765);
  lineNumber = 855
  var call2768 = callmethod(this,"out", [1], opresult2767);
  var string2769 = new GraceString("octlit");
  var opresult2771 = callmethod(string2769, "++", [1], var_auto__95__count);
  var string2772 = new GraceString(".already");
  var opresult2774 = callmethod(opresult2771, "++", [1], string2772);
  lineNumber = 856
  var call2775 = callmethod(this,"beginblock", [1], opresult2774);
  lineNumber = 857
  lineNumber = 856
  var string2776 = new GraceString("  %alreadyoctets");
  var opresult2778 = callmethod(string2776, "++", [1], var_auto__95__count);
  var string2779 = new GraceString(" = load %object* @.octlit");
  var opresult2781 = callmethod(opresult2778, "++", [1], string2779);
  lineNumber = 857
  var opresult2783 = callmethod(opresult2781, "++", [1], var_auto__95__count);
  lineNumber = 858
  var call2784 = callmethod(this,"out", [1], opresult2783);
  var string2785 = new GraceString("  br label %octlit");
  var opresult2787 = callmethod(string2785, "++", [1], var_auto__95__count);
  var string2788 = new GraceString(".end");
  var opresult2790 = callmethod(opresult2787, "++", [1], string2788);
  lineNumber = 859
  var call2791 = callmethod(this,"out", [1], opresult2790);
  var string2792 = new GraceString("octlit");
  var opresult2794 = callmethod(string2792, "++", [1], var_auto__95__count);
  var string2795 = new GraceString(".define");
  var opresult2797 = callmethod(opresult2794, "++", [1], string2795);
  lineNumber = 860
  var call2798 = callmethod(this,"beginblock", [1], opresult2797);
  var string2799 = new GraceString("  %oct");
  var opresult2801 = callmethod(string2799, "++", [1], var_auto__95__count);
  var string2802 = new GraceString(" = getelementptr [");
  var opresult2804 = callmethod(opresult2801, "++", [1], string2802);
  var opresult2806 = callmethod(opresult2804, "++", [1], var_l);
  var string2807 = new GraceString(" x i8]* @.oct");
  var opresult2809 = callmethod(opresult2806, "++", [1], string2807);
  lineNumber = 1
  lineNumber = 860
  var call2810 = callmethod(var_constants,"size", [0]);
  var opresult2812 = callmethod(opresult2809, "++", [1], call2810);
  var string2813 = new GraceString(", i32 0, i32 0");
  var opresult2815 = callmethod(opresult2812, "++", [1], string2813);
  lineNumber = 861
  var call2816 = callmethod(this,"out", [1], opresult2815);
  lineNumber = 863
  lineNumber = 861
  var string2817 = new GraceString("  %defoctets");
  var opresult2819 = callmethod(string2817, "++", [1], var_auto__95__count);
  var string2820 = new GraceString(" = call %object ");
  var opresult2822 = callmethod(opresult2819, "++", [1], string2820);
  lineNumber = 862
  var string2823 = new GraceString("@alloc_Octets(i8* ");
  var opresult2825 = callmethod(opresult2822, "++", [1], string2823);
  lineNumber = 863
  var string2826 = new GraceString("%oct");
  var opresult2828 = callmethod(opresult2825, "++", [1], string2826);
  var opresult2830 = callmethod(opresult2828, "++", [1], var_auto__95__count);
  var string2831 = new GraceString(", i32 ");
  var opresult2833 = callmethod(opresult2830, "++", [1], string2831);
  var opresult2835 = callmethod(opresult2833, "++", [1], var_l);
  var string2836 = new GraceString(")");
  var opresult2838 = callmethod(opresult2835, "++", [1], string2836);
  lineNumber = 864
  var call2839 = callmethod(this,"out", [1], opresult2838);
  lineNumber = 865
  lineNumber = 864
  var string2840 = new GraceString("  store %object %defoctets");
  var opresult2842 = callmethod(string2840, "++", [1], var_auto__95__count);
  var string2843 = new GraceString(", %object* ");
  var opresult2845 = callmethod(opresult2842, "++", [1], string2843);
  lineNumber = 865
  var string2846 = new GraceString("@.octlit");
  var opresult2848 = callmethod(opresult2845, "++", [1], string2846);
  var opresult2850 = callmethod(opresult2848, "++", [1], var_auto__95__count);
  lineNumber = 866
  var call2851 = callmethod(this,"out", [1], opresult2850);
  var string2852 = new GraceString("br label %octlit");
  var opresult2854 = callmethod(string2852, "++", [1], var_auto__95__count);
  var string2855 = new GraceString(".end");
  var opresult2857 = callmethod(opresult2854, "++", [1], string2855);
  lineNumber = 867
  var call2858 = callmethod(this,"out", [1], opresult2857);
  var string2859 = new GraceString("octlit");
  var opresult2861 = callmethod(string2859, "++", [1], var_auto__95__count);
  var string2862 = new GraceString(".end");
  var opresult2864 = callmethod(opresult2861, "++", [1], string2862);
  lineNumber = 868
  var call2865 = callmethod(this,"beginblock", [1], opresult2864);
  lineNumber = 871
  lineNumber = 868
  var string2866 = new GraceString(" %octets");
  var opresult2868 = callmethod(string2866, "++", [1], var_auto__95__count);
  var string2869 = new GraceString(" = phi %object [%alreadyoctets");
  var opresult2871 = callmethod(opresult2868, "++", [1], string2869);
  lineNumber = 869
  var opresult2873 = callmethod(opresult2871, "++", [1], var_auto__95__count);
  var string2874 = new GraceString(", %octlit");
  var opresult2876 = callmethod(opresult2873, "++", [1], string2874);
  var opresult2878 = callmethod(opresult2876, "++", [1], var_auto__95__count);
  var string2879 = new GraceString(".already], ");
  var opresult2881 = callmethod(opresult2878, "++", [1], string2879);
  lineNumber = 870
  var string2882 = new GraceString("[%defoctets");
  var opresult2884 = callmethod(opresult2881, "++", [1], string2882);
  var opresult2886 = callmethod(opresult2884, "++", [1], var_auto__95__count);
  var string2887 = new GraceString(", %octlit");
  var opresult2889 = callmethod(opresult2886, "++", [1], string2887);
  var opresult2891 = callmethod(opresult2889, "++", [1], var_auto__95__count);
  lineNumber = 871
  var string2892 = new GraceString(".define]");
  var opresult2894 = callmethod(opresult2891, "++", [1], string2892);
  lineNumber = 872
  var call2895 = callmethod(this,"out", [1], opresult2894);
  lineNumber = 874
  lineNumber = 872
  var string2896 = new GraceString("@.oct");
  lineNumber = 874
  lineNumber = 1
  lineNumber = 872
  var call2897 = callmethod(var_constants,"size", [0]);
  var opresult2899 = callmethod(string2896, "++", [1], call2897);
  var string2900 = new GraceString(" = private unnamed_addr ");
  var opresult2902 = callmethod(opresult2899, "++", [1], string2900);
  lineNumber = 873
  var string2903 = new GraceString("constant [");
  var opresult2905 = callmethod(opresult2902, "++", [1], string2903);
  var opresult2907 = callmethod(opresult2905, "++", [1], var_l);
  var string2908 = new GraceString(" x i8] c\"");
  var opresult2910 = callmethod(opresult2907, "++", [1], string2908);
  var opresult2912 = callmethod(opresult2910, "++", [1], var_escval);
  var string2913 = new GraceString("\"");
  var opresult2915 = callmethod(opresult2912, "++", [1], string2913);
  var var_con = opresult2915;
  lineNumber = 874
  var call2916 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 877
  lineNumber = 875
  var string2917 = new GraceString("@.octlit");
  var opresult2919 = callmethod(string2917, "++", [1], var_auto__95__count);
  lineNumber = 876
  var string2920 = new GraceString(" = private global %object null");
  var opresult2922 = callmethod(opresult2919, "++", [1], string2920);
  var_con = opresult2922;
  lineNumber = 877
  var call2923 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 879
  lineNumber = 1
  lineNumber = 879
  lineNumber = 878
  var string2924 = new GraceString("%octets");
  var opresult2926 = callmethod(string2924, "++", [1], var_auto__95__count);
  var call2927 = callmethod(var_o,"register:=", [1], opresult2926);
  lineNumber = 880
  lineNumber = 879
  var opresult2929 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2929;
  return opresult2929
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileoctets"] = func2710;
  lineNumber = 927
var func2930 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 882
  var string2931 = new GraceString("; Import of ");
  lineNumber = 1
  lineNumber = 882
  lineNumber = 1
  lineNumber = 882
  var call2932 = callmethod(var_o,"value", [0]);
  var call2933 = callmethod(call2932,"value", [0]);
  var opresult2935 = callmethod(string2931, "++", [1], call2933);
  lineNumber = 883
  var call2936 = callmethod(this,"out", [1], opresult2935);
  lineNumber = 884
  var var_con;
  lineNumber = 1
  lineNumber = 884
  lineNumber = 1
  lineNumber = 884
  lineNumber = 1
  lineNumber = 884
  var call2937 = callmethod(var_o,"value", [0]);
  var call2938 = callmethod(call2937,"value", [0]);
  var call2939 = callmethod(call2938,"_escape", [0]);
  var var_nm = call2939;
  lineNumber = 886
  lineNumber = 885
  var string2940 = new GraceString("@\".module.");
  var opresult2942 = callmethod(string2940, "++", [1], var_nm);
  var string2943 = new GraceString("\"");
  var opresult2945 = callmethod(opresult2942, "++", [1], string2943);
  var var_modg = opresult2945;
  lineNumber = 887
  lineNumber = 886
  var var_sblock = var_bblock;
  lineNumber = 887
  var string2946 = new GraceString("  %tmp");
  var opresult2948 = callmethod(string2946, "++", [1], var_auto__95__count);
  var string2949 = new GraceString(" = load %object* ");
  var opresult2951 = callmethod(opresult2948, "++", [1], string2949);
  var opresult2953 = callmethod(opresult2951, "++", [1], var_modg);
  lineNumber = 888
  var call2954 = callmethod(this,"out", [1], opresult2953);
  lineNumber = 889
  lineNumber = 888
  var string2955 = new GraceString("  %cmp");
  var opresult2957 = callmethod(string2955, "++", [1], var_auto__95__count);
  var string2958 = new GraceString(" = icmp ne %object %tmp");
  var opresult2960 = callmethod(opresult2957, "++", [1], string2958);
  var opresult2962 = callmethod(opresult2960, "++", [1], var_auto__95__count);
  lineNumber = 889
  var string2963 = new GraceString(", null");
  var opresult2965 = callmethod(opresult2962, "++", [1], string2963);
  lineNumber = 890
  var call2966 = callmethod(this,"out", [1], opresult2965);
  lineNumber = 891
  lineNumber = 890
  var string2967 = new GraceString("  br i1 %cmp");
  var opresult2969 = callmethod(string2967, "++", [1], var_auto__95__count);
  var string2970 = new GraceString(", label %\"import.");
  var opresult2972 = callmethod(opresult2969, "++", [1], string2970);
  var opresult2974 = callmethod(opresult2972, "++", [1], var_nm);
  lineNumber = 891
  var string2975 = new GraceString(".already\", label %\"import.");
  var opresult2977 = callmethod(opresult2974, "++", [1], string2975);
  var opresult2979 = callmethod(opresult2977, "++", [1], var_nm);
  var string2980 = new GraceString(".define\"");
  var opresult2982 = callmethod(opresult2979, "++", [1], string2980);
  lineNumber = 892
  var call2983 = callmethod(this,"out", [1], opresult2982);
  var string2984 = new GraceString("import.");
  var opresult2986 = callmethod(string2984, "++", [1], var_nm);
  var string2987 = new GraceString(".already");
  var opresult2989 = callmethod(opresult2986, "++", [1], string2987);
  lineNumber = 893
  var call2990 = callmethod(this,"beginblock", [1], opresult2989);
  var string2991 = new GraceString("  %alreadymod");
  var opresult2993 = callmethod(string2991, "++", [1], var_auto__95__count);
  var string2994 = new GraceString(" = load %object* ");
  var opresult2996 = callmethod(opresult2993, "++", [1], string2994);
  var opresult2998 = callmethod(opresult2996, "++", [1], var_modg);
  lineNumber = 894
  var call2999 = callmethod(this,"out", [1], opresult2998);
  var string3000 = new GraceString("  br label %\"import.");
  var opresult3002 = callmethod(string3000, "++", [1], var_nm);
  var string3003 = new GraceString(".end\"");
  var opresult3005 = callmethod(opresult3002, "++", [1], string3003);
  lineNumber = 895
  var call3006 = callmethod(this,"out", [1], opresult3005);
  var string3007 = new GraceString("import.");
  var opresult3009 = callmethod(string3007, "++", [1], var_nm);
  var string3010 = new GraceString(".define");
  var opresult3012 = callmethod(opresult3009, "++", [1], string3010);
  lineNumber = 896
  var call3013 = callmethod(this,"beginblock", [1], opresult3012);
  lineNumber = 906
  lineNumber = 896
  var call3015 = callmethod(var_staticmodules,"contains", [1], var_nm);
  if (Grace_isTrue(call3015)) {
  lineNumber = 898
  lineNumber = 897
  var string3016 = new GraceString("  %\"tmp_mod_");
  var opresult3018 = callmethod(string3016, "++", [1], var_nm);
  var string3019 = new GraceString("\" = call %object @module_");
  var opresult3021 = callmethod(opresult3018, "++", [1], string3019);
  lineNumber = 898
  var opresult3023 = callmethod(opresult3021, "++", [1], var_nm);
  var string3024 = new GraceString("_init()");
  var opresult3026 = callmethod(opresult3023, "++", [1], string3024);
  lineNumber = 899
  var call3027 = callmethod(this,"out", [1], opresult3026);
  var if3014 = call3027;
  } else {
  lineNumber = 901
  lineNumber = 900
  var string3028 = new GraceString("@\".str.module.");
  var opresult3030 = callmethod(string3028, "++", [1], var_nm);
  var string3031 = new GraceString("\"");
  var opresult3033 = callmethod(opresult3030, "++", [1], string3031);
  var var_mn = opresult3033;
  lineNumber = 901
  lineNumber = 1
  lineNumber = 901
  var string3034 = new GraceString("utf-8");
  var call3035 = callmethod(var_nm,"encode", [1], string3034);
  var call3036 = callmethod(call3035,"size", [0]);
  var opresult3038 = callmethod(call3036, "+", [1], new GraceNum(1));
  var var_l = opresult3038;
  lineNumber = 903
  lineNumber = 904
  lineNumber = 902
  var string3039 = new GraceString(" = private unnamed_addr constant [");
  var opresult3041 = callmethod(var_mn, "++", [1], string3039);
  var opresult3043 = callmethod(opresult3041, "++", [1], var_l);
  var string3044 = new GraceString(" x i8] ");
  var opresult3046 = callmethod(opresult3043, "++", [1], string3044);
  lineNumber = 903
  var string3047 = new GraceString(" c\"");
  var opresult3049 = callmethod(opresult3046, "++", [1], string3047);
  lineNumber = 1
  lineNumber = 903
  var call3050 = callmethod(var_nm,"_escape", [0]);
  var opresult3052 = callmethod(opresult3049, "++", [1], call3050);
  var string3053 = new GraceString("\\00\"");
  var opresult3055 = callmethod(opresult3052, "++", [1], string3053);
  var_con = opresult3055;
  lineNumber = 904
  var call3056 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 906
  lineNumber = 905
  var string3057 = new GraceString("  %\"tmp_mod_");
  var opresult3059 = callmethod(string3057, "++", [1], var_nm);
  var string3060 = new GraceString("\" = call %object @dlmodule(i8 *");
  var opresult3062 = callmethod(opresult3059, "++", [1], string3060);
  lineNumber = 906
  var string3063 = new GraceString(" getelementptr([");
  var opresult3065 = callmethod(opresult3062, "++", [1], string3063);
  var opresult3067 = callmethod(opresult3065, "++", [1], var_l);
  var string3068 = new GraceString(" x i8]* ");
  var opresult3070 = callmethod(opresult3067, "++", [1], string3068);
  var opresult3072 = callmethod(opresult3070, "++", [1], var_mn);
  var string3073 = new GraceString(",i32 0,i32 0))");
  var opresult3075 = callmethod(opresult3072, "++", [1], string3073);
  lineNumber = 907
  var call3076 = callmethod(this,"out", [1], opresult3075);
  var if3014 = call3076;
}
  lineNumber = 909
  lineNumber = 908
  var string3077 = new GraceString("  store %object %\"tmp_mod_");
  var opresult3079 = callmethod(string3077, "++", [1], var_nm);
  lineNumber = 909
  var string3080 = new GraceString("\", %object* @\".module.");
  var opresult3082 = callmethod(opresult3079, "++", [1], string3080);
  var opresult3084 = callmethod(opresult3082, "++", [1], var_nm);
  var string3085 = new GraceString("\"");
  var opresult3087 = callmethod(opresult3084, "++", [1], string3085);
  lineNumber = 910
  var call3088 = callmethod(this,"out", [1], opresult3087);
  lineNumber = 911
  lineNumber = 910
  var string3089 = new GraceString("  store %object %\"tmp_mod_");
  var opresult3091 = callmethod(string3089, "++", [1], var_nm);
  var string3092 = new GraceString("\", %object* @\".module.");
  var opresult3094 = callmethod(opresult3091, "++", [1], string3092);
  lineNumber = 911
  var opresult3096 = callmethod(opresult3094, "++", [1], var_nm);
  var string3097 = new GraceString("\"");
  var opresult3099 = callmethod(opresult3096, "++", [1], string3097);
  lineNumber = 912
  var call3100 = callmethod(this,"out", [1], opresult3099);
  var string3101 = new GraceString("  br label %\"import.");
  var opresult3103 = callmethod(string3101, "++", [1], var_nm);
  var string3104 = new GraceString(".end\"");
  var opresult3106 = callmethod(opresult3103, "++", [1], string3104);
  lineNumber = 913
  var call3107 = callmethod(this,"out", [1], opresult3106);
  var string3108 = new GraceString("import.");
  var opresult3110 = callmethod(string3108, "++", [1], var_nm);
  var string3111 = new GraceString(".end");
  var opresult3113 = callmethod(opresult3110, "++", [1], string3111);
  lineNumber = 914
  var call3114 = callmethod(this,"beginblock", [1], opresult3113);
  lineNumber = 916
  lineNumber = 914
  var string3115 = new GraceString("  %\"tmp_modv_");
  var opresult3117 = callmethod(string3115, "++", [1], var_nm);
  var string3118 = new GraceString("\" = phi %object [%alreadymod");
  var opresult3120 = callmethod(opresult3117, "++", [1], string3118);
  lineNumber = 915
  var opresult3122 = callmethod(opresult3120, "++", [1], var_auto__95__count);
  var string3123 = new GraceString(", %\"import.");
  var opresult3125 = callmethod(opresult3122, "++", [1], string3123);
  var opresult3127 = callmethod(opresult3125, "++", [1], var_nm);
  var string3128 = new GraceString(".already\"], ");
  var opresult3130 = callmethod(opresult3127, "++", [1], string3128);
  lineNumber = 916
  var string3131 = new GraceString("[%\"tmp_mod_");
  var opresult3133 = callmethod(opresult3130, "++", [1], string3131);
  var opresult3135 = callmethod(opresult3133, "++", [1], var_nm);
  var string3136 = new GraceString("\", %\"import.");
  var opresult3138 = callmethod(opresult3135, "++", [1], string3136);
  var opresult3140 = callmethod(opresult3138, "++", [1], var_nm);
  var string3141 = new GraceString(".define\"]");
  var opresult3143 = callmethod(opresult3140, "++", [1], string3141);
  lineNumber = 917
  var call3144 = callmethod(this,"out", [1], opresult3143);
  var string3145 = new GraceString("  %\"var_");
  var opresult3147 = callmethod(string3145, "++", [1], var_nm);
  var string3148 = new GraceString("\" = call %object* @alloc_var()");
  var opresult3150 = callmethod(opresult3147, "++", [1], string3148);
  lineNumber = 918
  var call3151 = callmethod(this,"out", [1], opresult3150);
  lineNumber = 919
  lineNumber = 918
  var string3152 = new GraceString("  store %object %\"tmp_modv_");
  var opresult3154 = callmethod(string3152, "++", [1], var_nm);
  lineNumber = 919
  var string3155 = new GraceString("\", %object* %\"var_");
  var opresult3157 = callmethod(opresult3154, "++", [1], string3155);
  var opresult3159 = callmethod(opresult3157, "++", [1], var_nm);
  var string3160 = new GraceString("\"");
  var opresult3162 = callmethod(opresult3159, "++", [1], string3160);
  lineNumber = 920
  var call3163 = callmethod(this,"out", [1], opresult3162);
  lineNumber = 921
  lineNumber = 920
  var string3164 = new GraceString("@\".module.");
  var opresult3166 = callmethod(string3164, "++", [1], var_nm);
  var string3167 = new GraceString("\" = weak global %object null");
  var opresult3169 = callmethod(opresult3166, "++", [1], string3167);
  var_con = opresult3169;
  lineNumber = 921
  var call3170 = callmethod(var_modules,"push", [1], var_nm);
  lineNumber = 922
  var call3171 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 924
  lineNumber = 923
  var string3172 = new GraceString("declare %object @\"module_");
  var opresult3174 = callmethod(string3172, "++", [1], var_nm);
  var string3175 = new GraceString("_init\"()");
  var opresult3177 = callmethod(opresult3174, "++", [1], string3175);
  var_con = opresult3177;
  lineNumber = 924
  var call3178 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 926
  lineNumber = 925
  var opresult3180 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3180;
  lineNumber = 927
  lineNumber = 1
  lineNumber = 926
  var string3181 = new GraceString("%none");
  var call3182 = callmethod(var_o,"register:=", [1], string3181);
  return call3182
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileimport"] = func2930;
  lineNumber = 937
var func3183 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 929
  lineNumber = 1
  lineNumber = 929
  var call3184 = callmethod(var_o,"value", [0]);
  lineNumber = 930
  var call3185 = callmethod(this,"compilenode", [1], call3184);
  var var_reg = call3185;
  lineNumber = 934
  lineNumber = 930
  if (Grace_isTrue(var_inBlock)) {
  lineNumber = 931
  var string3187 = new GraceString("  call void @block_return(%object %realself, %object ");
  var opresult3189 = callmethod(string3187, "++", [1], var_reg);
  var string3190 = new GraceString(")");
  var opresult3192 = callmethod(opresult3189, "++", [1], string3190);
  lineNumber = 932
  var call3193 = callmethod(this,"out", [1], opresult3192);
  var if3186 = call3193;
  } else {
  lineNumber = 933
  var string3194 = new GraceString("  ret %object ");
  var opresult3196 = callmethod(string3194, "++", [1], var_reg);
  lineNumber = 934
  var call3197 = callmethod(this,"out", [1], opresult3196);
  var string3198 = new GraceString("postret");
  var opresult3200 = callmethod(string3198, "++", [1], var_auto__95__count);
  lineNumber = 935
  var call3201 = callmethod(this,"beginblock", [1], opresult3200);
  var if3186 = call3201;
}
  lineNumber = 937
  lineNumber = 1
  lineNumber = 936
  var string3202 = new GraceString("%none");
  var call3203 = callmethod(var_o,"register:=", [1], string3202);
  return call3203
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilereturn"] = func3183;
  lineNumber = 953
var func3204 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 940
  lineNumber = 1
  lineNumber = 939
  var call3205 = callmethod(var_o,"value", [0]);
  var var_cnum = call3205;
  lineNumber = 941
  lineNumber = 940
  var bool3206 = new GraceBoolean(false)
  var var_havedot = bool3206;
  lineNumber = 944
  lineNumber = 941
  lineNumber = 944
  var block3207 = Grace_allocObject();
  block3207.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3207.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3207.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3207.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3207.receiver = this;
  block3207.className = 'block<genllvm29:944>';
  block3207.real = function(
var_c
) {
  lineNumber = 945
  lineNumber = 942
  var string3209 = new GraceString(".");
  var opresult3211 = callmethod(var_c, "==", [1], string3209);
  if (Grace_isTrue(opresult3211)) {
  lineNumber = 944
  lineNumber = 943
  var bool3212 = new GraceBoolean(true)
  var_havedot = bool3212;
  var if3208 = bool3212;
}
  return if3208;
};
  var call3213 = callmethod(Grace_prelude,"for()do", [1, 1], var_cnum, block3207);
  lineNumber = 948
  lineNumber = 949
  lineNumber = 1
  lineNumber = 946
  var call3215 = callmethod(var_havedot,"not", [0]);
  if (Grace_isTrue(call3215)) {
  lineNumber = 948
  lineNumber = 947
  var string3216 = new GraceString(".0");
  var opresult3218 = callmethod(var_cnum, "++", [1], string3216);
  var_cnum = opresult3218;
  var if3214 = opresult3218;
}
  lineNumber = 950
  lineNumber = 949
  var string3219 = new GraceString("  %num");
  var opresult3221 = callmethod(string3219, "++", [1], var_auto__95__count);
  var string3222 = new GraceString(" = call %object @alloc_Float64(double ");
  var opresult3224 = callmethod(opresult3221, "++", [1], string3222);
  lineNumber = 950
  var opresult3226 = callmethod(opresult3224, "++", [1], var_cnum);
  var string3227 = new GraceString(")");
  var opresult3229 = callmethod(opresult3226, "++", [1], string3227);
  lineNumber = 951
  var call3230 = callmethod(this,"out", [1], opresult3229);
  lineNumber = 952
  lineNumber = 1
  lineNumber = 952
  lineNumber = 951
  var string3231 = new GraceString("%num");
  var opresult3233 = callmethod(string3231, "++", [1], var_auto__95__count);
  var call3234 = callmethod(var_o,"register:=", [1], opresult3233);
  lineNumber = 953
  lineNumber = 952
  var opresult3236 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3236;
  return opresult3236
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilenum"] = func3204;
  lineNumber = 1109
var func3237 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 958
  lineNumber = 960
  lineNumber = 955
  lineNumber = 960
  lineNumber = 1
  lineNumber = 955
  var call3239 = callmethod(var_o,"line", [0]);
  var opresult3241 = callmethod(var_linenum, "/=", [1], call3239);
  if (Grace_isTrue(opresult3241)) {
  lineNumber = 957
  lineNumber = 1
  lineNumber = 956
  var call3242 = callmethod(var_o,"line", [0]);
  var_linenum = call3242;
  lineNumber = 957
  var string3243 = new GraceString("; Begin line ");
  var opresult3245 = callmethod(string3243, "++", [1], var_linenum);
  lineNumber = 958
  var call3246 = callmethod(this,"out", [1], opresult3245);
  var string3247 = new GraceString("  call void @setline(i32 ");
  var opresult3249 = callmethod(string3247, "++", [1], var_linenum);
  var string3250 = new GraceString(")");
  var opresult3252 = callmethod(opresult3249, "++", [1], string3250);
  lineNumber = 959
  var call3253 = callmethod(this,"out", [1], opresult3252);
  var if3238 = call3253;
}
  lineNumber = 961
  lineNumber = 963
  lineNumber = 1
  lineNumber = 960
  var call3255 = callmethod(var_o,"kind", [0]);
  var string3256 = new GraceString("num");
  var opresult3258 = callmethod(call3255, "==", [1], string3256);
  if (Grace_isTrue(opresult3258)) {
  lineNumber = 961
  lineNumber = 962
  var call3259 = callmethod(this,"compilenum", [1], var_o);
  var if3254 = call3259;
}
  lineNumber = 964
  lineNumber = 963
  var string3260 = new GraceString("");
  var var_l = string3260;
  lineNumber = 1000
  lineNumber = 1001
  lineNumber = 1
  lineNumber = 964
  var call3262 = callmethod(var_o,"kind", [0]);
  var string3263 = new GraceString("string");
  var opresult3265 = callmethod(call3262, "==", [1], string3263);
  if (Grace_isTrue(opresult3265)) {
  lineNumber = 965
  lineNumber = 1
  lineNumber = 965
  var call3266 = callmethod(var_o,"value", [0]);
  var call3267 = Grace_length(call3266);
  var_l = call3267;
  lineNumber = 967
  lineNumber = 966
  var opresult3269 = callmethod(var_l, "+", [1], new GraceNum(1));
  var_l = opresult3269;
  lineNumber = 967
  lineNumber = 1
  lineNumber = 967
  lineNumber = 1
  lineNumber = 967
  lineNumber = 1
  lineNumber = 967
  var call3270 = callmethod(var_o,"value", [0]);
  var call3271 = callmethod(call3270,"_escape", [0]);
  var call3272 = callmethod(var_o,"value:=", [1], call3271);
  lineNumber = 969
  lineNumber = 968
  var string3273 = new GraceString("  %tmp");
  var opresult3275 = callmethod(string3273, "++", [1], var_auto__95__count);
  var string3276 = new GraceString(" = load %object* @.strlit");
  var opresult3278 = callmethod(opresult3275, "++", [1], string3276);
  lineNumber = 969
  var opresult3280 = callmethod(opresult3278, "++", [1], var_auto__95__count);
  lineNumber = 970
  var call3281 = callmethod(this,"out", [1], opresult3280);
  lineNumber = 971
  lineNumber = 970
  var string3282 = new GraceString("  %cmp");
  var opresult3284 = callmethod(string3282, "++", [1], var_auto__95__count);
  var string3285 = new GraceString(" = icmp ne %object %tmp");
  var opresult3287 = callmethod(opresult3284, "++", [1], string3285);
  lineNumber = 971
  var opresult3289 = callmethod(opresult3287, "++", [1], var_auto__95__count);
  var string3290 = new GraceString(", null");
  var opresult3292 = callmethod(opresult3289, "++", [1], string3290);
  lineNumber = 972
  var call3293 = callmethod(this,"out", [1], opresult3292);
  lineNumber = 974
  lineNumber = 972
  var string3294 = new GraceString("  br i1 %cmp");
  var opresult3296 = callmethod(string3294, "++", [1], var_auto__95__count);
  var string3297 = new GraceString(", label %strlit");
  var opresult3299 = callmethod(opresult3296, "++", [1], string3297);
  lineNumber = 973
  var opresult3301 = callmethod(opresult3299, "++", [1], var_auto__95__count);
  var string3302 = new GraceString(".already, label %strlit");
  var opresult3304 = callmethod(opresult3301, "++", [1], string3302);
  lineNumber = 974
  var opresult3306 = callmethod(opresult3304, "++", [1], var_auto__95__count);
  var string3307 = new GraceString(".define");
  var opresult3309 = callmethod(opresult3306, "++", [1], string3307);
  lineNumber = 975
  var call3310 = callmethod(this,"out", [1], opresult3309);
  var string3311 = new GraceString("strlit");
  var opresult3313 = callmethod(string3311, "++", [1], var_auto__95__count);
  var string3314 = new GraceString(".already");
  var opresult3316 = callmethod(opresult3313, "++", [1], string3314);
  lineNumber = 976
  var call3317 = callmethod(this,"beginblock", [1], opresult3316);
  lineNumber = 977
  lineNumber = 976
  var string3318 = new GraceString("  %alreadystring");
  var opresult3320 = callmethod(string3318, "++", [1], var_auto__95__count);
  var string3321 = new GraceString(" = load %object* @.strlit");
  var opresult3323 = callmethod(opresult3320, "++", [1], string3321);
  lineNumber = 977
  var opresult3325 = callmethod(opresult3323, "++", [1], var_auto__95__count);
  lineNumber = 978
  var call3326 = callmethod(this,"out", [1], opresult3325);
  var string3327 = new GraceString("  br label %strlit");
  var opresult3329 = callmethod(string3327, "++", [1], var_auto__95__count);
  var string3330 = new GraceString(".end");
  var opresult3332 = callmethod(opresult3329, "++", [1], string3330);
  lineNumber = 979
  var call3333 = callmethod(this,"out", [1], opresult3332);
  var string3334 = new GraceString("strlit");
  var opresult3336 = callmethod(string3334, "++", [1], var_auto__95__count);
  var string3337 = new GraceString(".define");
  var opresult3339 = callmethod(opresult3336, "++", [1], string3337);
  lineNumber = 980
  var call3340 = callmethod(this,"beginblock", [1], opresult3339);
  var string3341 = new GraceString("  %str");
  var opresult3343 = callmethod(string3341, "++", [1], var_auto__95__count);
  var string3344 = new GraceString(" = getelementptr [");
  var opresult3346 = callmethod(opresult3343, "++", [1], string3344);
  var opresult3348 = callmethod(opresult3346, "++", [1], var_l);
  var string3349 = new GraceString(" x i8]* @.str");
  var opresult3351 = callmethod(opresult3348, "++", [1], string3349);
  lineNumber = 1
  lineNumber = 980
  var call3352 = callmethod(var_constants,"size", [0]);
  var opresult3354 = callmethod(opresult3351, "++", [1], call3352);
  var string3355 = new GraceString(", i32 0, i32 0");
  var opresult3357 = callmethod(opresult3354, "++", [1], string3355);
  lineNumber = 981
  var call3358 = callmethod(this,"out", [1], opresult3357);
  lineNumber = 983
  lineNumber = 981
  var string3359 = new GraceString("  %defstring");
  var opresult3361 = callmethod(string3359, "++", [1], var_auto__95__count);
  var string3362 = new GraceString(" = call %object ");
  var opresult3364 = callmethod(opresult3361, "++", [1], string3362);
  lineNumber = 982
  var string3365 = new GraceString("@alloc_String(i8* ");
  var opresult3367 = callmethod(opresult3364, "++", [1], string3365);
  lineNumber = 983
  var string3368 = new GraceString("%str");
  var opresult3370 = callmethod(opresult3367, "++", [1], string3368);
  var opresult3372 = callmethod(opresult3370, "++", [1], var_auto__95__count);
  var string3373 = new GraceString(")");
  var opresult3375 = callmethod(opresult3372, "++", [1], string3373);
  lineNumber = 984
  var call3376 = callmethod(this,"out", [1], opresult3375);
  lineNumber = 985
  lineNumber = 984
  var string3377 = new GraceString("  store %object %defstring");
  var opresult3379 = callmethod(string3377, "++", [1], var_auto__95__count);
  var string3380 = new GraceString(", %object* ");
  var opresult3382 = callmethod(opresult3379, "++", [1], string3380);
  lineNumber = 985
  var string3383 = new GraceString("@.strlit");
  var opresult3385 = callmethod(opresult3382, "++", [1], string3383);
  var opresult3387 = callmethod(opresult3385, "++", [1], var_auto__95__count);
  lineNumber = 986
  var call3388 = callmethod(this,"out", [1], opresult3387);
  var string3389 = new GraceString("br label %strlit");
  var opresult3391 = callmethod(string3389, "++", [1], var_auto__95__count);
  var string3392 = new GraceString(".end");
  var opresult3394 = callmethod(opresult3391, "++", [1], string3392);
  lineNumber = 987
  var call3395 = callmethod(this,"out", [1], opresult3394);
  var string3396 = new GraceString("strlit");
  var opresult3398 = callmethod(string3396, "++", [1], var_auto__95__count);
  var string3399 = new GraceString(".end");
  var opresult3401 = callmethod(opresult3398, "++", [1], string3399);
  lineNumber = 988
  var call3402 = callmethod(this,"beginblock", [1], opresult3401);
  lineNumber = 991
  lineNumber = 988
  var string3403 = new GraceString(" %string");
  var opresult3405 = callmethod(string3403, "++", [1], var_auto__95__count);
  var string3406 = new GraceString(" = phi %object [%alreadystring");
  var opresult3408 = callmethod(opresult3405, "++", [1], string3406);
  lineNumber = 989
  var opresult3410 = callmethod(opresult3408, "++", [1], var_auto__95__count);
  var string3411 = new GraceString(", %strlit");
  var opresult3413 = callmethod(opresult3410, "++", [1], string3411);
  var opresult3415 = callmethod(opresult3413, "++", [1], var_auto__95__count);
  var string3416 = new GraceString(".already], ");
  var opresult3418 = callmethod(opresult3415, "++", [1], string3416);
  lineNumber = 990
  var string3419 = new GraceString("[%defstring");
  var opresult3421 = callmethod(opresult3418, "++", [1], string3419);
  var opresult3423 = callmethod(opresult3421, "++", [1], var_auto__95__count);
  var string3424 = new GraceString(", %strlit");
  var opresult3426 = callmethod(opresult3423, "++", [1], string3424);
  var opresult3428 = callmethod(opresult3426, "++", [1], var_auto__95__count);
  lineNumber = 991
  var string3429 = new GraceString(".define]");
  var opresult3431 = callmethod(opresult3428, "++", [1], string3429);
  lineNumber = 992
  var call3432 = callmethod(this,"out", [1], opresult3431);
  lineNumber = 994
  lineNumber = 992
  var string3433 = new GraceString("@.str");
  lineNumber = 994
  lineNumber = 1
  lineNumber = 992
  var call3434 = callmethod(var_constants,"size", [0]);
  var opresult3436 = callmethod(string3433, "++", [1], call3434);
  var string3437 = new GraceString(" = private unnamed_addr ");
  var opresult3439 = callmethod(opresult3436, "++", [1], string3437);
  lineNumber = 993
  var string3440 = new GraceString("constant [");
  var opresult3442 = callmethod(opresult3439, "++", [1], string3440);
  var opresult3444 = callmethod(opresult3442, "++", [1], var_l);
  var string3445 = new GraceString(" x i8] c\"");
  var opresult3447 = callmethod(opresult3444, "++", [1], string3445);
  lineNumber = 994
  lineNumber = 1
  lineNumber = 993
  var call3448 = callmethod(var_o,"value", [0]);
  var opresult3450 = callmethod(opresult3447, "++", [1], call3448);
  var string3451 = new GraceString("\\00\"");
  var opresult3453 = callmethod(opresult3450, "++", [1], string3451);
  var var_con = opresult3453;
  lineNumber = 994
  var call3454 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 997
  lineNumber = 995
  var string3455 = new GraceString("@.strlit");
  var opresult3457 = callmethod(string3455, "++", [1], var_auto__95__count);
  lineNumber = 996
  var string3458 = new GraceString(" = private global %object null");
  var opresult3460 = callmethod(opresult3457, "++", [1], string3458);
  var_con = opresult3460;
  lineNumber = 997
  var call3461 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 999
  lineNumber = 1
  lineNumber = 999
  lineNumber = 998
  var string3462 = new GraceString("%string");
  var opresult3464 = callmethod(string3462, "++", [1], var_auto__95__count);
  var call3465 = callmethod(var_o,"register:=", [1], opresult3464);
  lineNumber = 1000
  lineNumber = 999
  var opresult3467 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3467;
  var if3261 = opresult3467;
}
  lineNumber = 1002
  lineNumber = 1004
  lineNumber = 1
  lineNumber = 1001
  var call3469 = callmethod(var_o,"kind", [0]);
  var string3470 = new GraceString("index");
  var opresult3472 = callmethod(call3469, "==", [1], string3470);
  if (Grace_isTrue(opresult3472)) {
  lineNumber = 1002
  lineNumber = 1003
  var call3473 = callmethod(this,"compileindex", [1], var_o);
  var if3468 = call3473;
}
  lineNumber = 1005
  lineNumber = 1007
  lineNumber = 1
  lineNumber = 1004
  var call3475 = callmethod(var_o,"kind", [0]);
  var string3476 = new GraceString("octets");
  var opresult3478 = callmethod(call3475, "==", [1], string3476);
  if (Grace_isTrue(opresult3478)) {
  lineNumber = 1005
  lineNumber = 1006
  var call3479 = callmethod(this,"compileoctets", [1], var_o);
  var if3474 = call3479;
}
  lineNumber = 1008
  lineNumber = 1010
  lineNumber = 1
  lineNumber = 1007
  var call3481 = callmethod(var_o,"kind", [0]);
  var string3482 = new GraceString("import");
  var opresult3484 = callmethod(call3481, "==", [1], string3482);
  if (Grace_isTrue(opresult3484)) {
  lineNumber = 1008
  lineNumber = 1009
  var call3485 = callmethod(this,"compileimport", [1], var_o);
  var if3480 = call3485;
}
  lineNumber = 1011
  lineNumber = 1013
  lineNumber = 1
  lineNumber = 1010
  var call3487 = callmethod(var_o,"kind", [0]);
  var string3488 = new GraceString("return");
  var opresult3490 = callmethod(call3487, "==", [1], string3488);
  if (Grace_isTrue(opresult3490)) {
  lineNumber = 1011
  lineNumber = 1012
  var call3491 = callmethod(this,"compilereturn", [1], var_o);
  var if3486 = call3491;
}
  lineNumber = 1014
  lineNumber = 1016
  lineNumber = 1
  lineNumber = 1013
  var call3493 = callmethod(var_o,"kind", [0]);
  var string3494 = new GraceString("generic");
  var opresult3496 = callmethod(call3493, "==", [1], string3494);
  if (Grace_isTrue(opresult3496)) {
  lineNumber = 1014
  lineNumber = 1
  lineNumber = 1014
  lineNumber = 1
  lineNumber = 1014
  var call3497 = callmethod(var_o,"value", [0]);
  lineNumber = 1015
  var call3498 = callmethod(this,"compilenode", [1], call3497);
  lineNumber = 1014
  var call3499 = callmethod(var_o,"register:=", [1], call3498);
  var if3492 = call3499;
}
  lineNumber = 1027
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1016
  var call3501 = callmethod(var_o,"kind", [0]);
  var string3502 = new GraceString("identifier");
  var opresult3504 = callmethod(call3501, "==", [1], string3502);
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1017
  var call3505 = callmethod(var_o,"value", [0]);
  var string3506 = new GraceString("true");
  var opresult3508 = callmethod(call3505, "==", [1], string3506);
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1017
  var call3509 = callmethod(var_o,"value", [0]);
  var string3510 = new GraceString("false");
  var opresult3512 = callmethod(call3509, "==", [1], string3510);
  var opresult3514 = callmethod(opresult3508, "|", [1], opresult3512);
  var opresult3516 = callmethod(opresult3504, "&", [1], opresult3514);
  if (Grace_isTrue(opresult3516)) {
  lineNumber = 1019
  lineNumber = 1018
  var var_val = new GraceNum(0);
  lineNumber = 1021
  lineNumber = 1022
  lineNumber = 1
  lineNumber = 1019
  var call3518 = callmethod(var_o,"value", [0]);
  var string3519 = new GraceString("true");
  var opresult3521 = callmethod(call3518, "==", [1], string3519);
  if (Grace_isTrue(opresult3521)) {
  lineNumber = 1021
  lineNumber = 1020
  var_val = new GraceNum(1);
  var if3517 = new GraceNum(1);
}
  lineNumber = 1023
  lineNumber = 1022
  var string3522 = new GraceString("  %bool");
  var opresult3524 = callmethod(string3522, "++", [1], var_auto__95__count);
  var string3525 = new GraceString(" = call %object ");
  var opresult3527 = callmethod(opresult3524, "++", [1], string3525);
  lineNumber = 1023
  var string3528 = new GraceString("@alloc_Boolean(i32 ");
  var opresult3530 = callmethod(opresult3527, "++", [1], string3528);
  var opresult3532 = callmethod(opresult3530, "++", [1], var_val);
  var string3533 = new GraceString(")");
  var opresult3535 = callmethod(opresult3532, "++", [1], string3533);
  lineNumber = 1024
  var call3536 = callmethod(this,"out", [1], opresult3535);
  lineNumber = 1025
  lineNumber = 1
  lineNumber = 1025
  lineNumber = 1024
  var string3537 = new GraceString("%bool");
  var opresult3539 = callmethod(string3537, "++", [1], var_auto__95__count);
  var call3540 = callmethod(var_o,"register:=", [1], opresult3539);
  lineNumber = 1026
  lineNumber = 1025
  var opresult3542 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3542;
  var if3500 = opresult3542;
  } else {
  lineNumber = 1027
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1026
  var call3544 = callmethod(var_o,"kind", [0]);
  var string3545 = new GraceString("identifier");
  var opresult3547 = callmethod(call3544, "==", [1], string3545);
  if (Grace_isTrue(opresult3547)) {
  lineNumber = 1027
  lineNumber = 1028
  var call3548 = callmethod(this,"compileidentifier", [1], var_o);
  var if3543 = call3548;
}
  var if3500 = if3543;
}
  lineNumber = 1030
  lineNumber = 1032
  lineNumber = 1
  lineNumber = 1029
  var call3550 = callmethod(var_o,"kind", [0]);
  var string3551 = new GraceString("defdec");
  var opresult3553 = callmethod(call3550, "==", [1], string3551);
  if (Grace_isTrue(opresult3553)) {
  lineNumber = 1030
  lineNumber = 1031
  var call3554 = callmethod(this,"compiledefdec", [1], var_o);
  var if3549 = call3554;
}
  lineNumber = 1033
  lineNumber = 1035
  lineNumber = 1
  lineNumber = 1032
  var call3556 = callmethod(var_o,"kind", [0]);
  var string3557 = new GraceString("vardec");
  var opresult3559 = callmethod(call3556, "==", [1], string3557);
  if (Grace_isTrue(opresult3559)) {
  lineNumber = 1033
  lineNumber = 1034
  var call3560 = callmethod(this,"compilevardec", [1], var_o);
  var if3555 = call3560;
}
  lineNumber = 1036
  lineNumber = 1038
  lineNumber = 1
  lineNumber = 1035
  var call3562 = callmethod(var_o,"kind", [0]);
  var string3563 = new GraceString("block");
  var opresult3565 = callmethod(call3562, "==", [1], string3563);
  if (Grace_isTrue(opresult3565)) {
  lineNumber = 1036
  lineNumber = 1037
  var call3566 = callmethod(this,"compileblock", [1], var_o);
  var if3561 = call3566;
}
  lineNumber = 1041
  lineNumber = 1042
  lineNumber = 1
  lineNumber = 1038
  var call3568 = callmethod(var_o,"kind", [0]);
  var string3569 = new GraceString("method");
  var opresult3571 = callmethod(call3568, "==", [1], string3569);
  if (Grace_isTrue(opresult3571)) {
  lineNumber = 1039
  var string3572 = new GraceString("%self");
  lineNumber = 1040
  var call3573 = callmethod(this,"compilemethod", [3], var_o, string3572, var_topLevelMethodPos);
  lineNumber = 1041
  lineNumber = 1040
  var opresult3575 = callmethod(var_topLevelMethodPos, "+", [1], new GraceNum(1));
  var_topLevelMethodPos = opresult3575;
  var if3567 = opresult3575;
}
  lineNumber = 1043
  lineNumber = 1045
  lineNumber = 1
  lineNumber = 1042
  var call3577 = callmethod(var_o,"kind", [0]);
  var string3578 = new GraceString("array");
  var opresult3580 = callmethod(call3577, "==", [1], string3578);
  if (Grace_isTrue(opresult3580)) {
  lineNumber = 1043
  lineNumber = 1044
  var call3581 = callmethod(this,"compilearray", [1], var_o);
  var if3576 = call3581;
}
  lineNumber = 1046
  lineNumber = 1048
  lineNumber = 1
  lineNumber = 1045
  var call3583 = callmethod(var_o,"kind", [0]);
  var string3584 = new GraceString("bind");
  var opresult3586 = callmethod(call3583, "==", [1], string3584);
  if (Grace_isTrue(opresult3586)) {
  lineNumber = 1046
  lineNumber = 1047
  var call3587 = callmethod(this,"compilebind", [1], var_o);
  var if3582 = call3587;
}
  lineNumber = 1049
  lineNumber = 1051
  lineNumber = 1
  lineNumber = 1048
  var call3589 = callmethod(var_o,"kind", [0]);
  var string3590 = new GraceString("while");
  var opresult3592 = callmethod(call3589, "==", [1], string3590);
  if (Grace_isTrue(opresult3592)) {
  lineNumber = 1049
  lineNumber = 1050
  var call3593 = callmethod(this,"compilewhile", [1], var_o);
  var if3588 = call3593;
}
  lineNumber = 1052
  lineNumber = 1054
  lineNumber = 1
  lineNumber = 1051
  var call3595 = callmethod(var_o,"kind", [0]);
  var string3596 = new GraceString("if");
  var opresult3598 = callmethod(call3595, "==", [1], string3596);
  if (Grace_isTrue(opresult3598)) {
  lineNumber = 1052
  lineNumber = 1053
  var call3599 = callmethod(this,"compileif", [1], var_o);
  var if3594 = call3599;
}
  lineNumber = 1055
  lineNumber = 1057
  lineNumber = 1
  lineNumber = 1054
  var call3601 = callmethod(var_o,"kind", [0]);
  var string3602 = new GraceString("class");
  var opresult3604 = callmethod(call3601, "==", [1], string3602);
  if (Grace_isTrue(opresult3604)) {
  lineNumber = 1055
  lineNumber = 1056
  var call3605 = callmethod(this,"compileclass", [1], var_o);
  var if3600 = call3605;
}
  lineNumber = 1058
  lineNumber = 1060
  lineNumber = 1
  lineNumber = 1057
  var call3607 = callmethod(var_o,"kind", [0]);
  var string3608 = new GraceString("object");
  var opresult3610 = callmethod(call3607, "==", [1], string3608);
  if (Grace_isTrue(opresult3610)) {
  lineNumber = 1058
  lineNumber = 1059
  var call3611 = callmethod(this,"compileobject", [1], var_o);
  var if3606 = call3611;
}
  lineNumber = 1061
  lineNumber = 1063
  lineNumber = 1
  lineNumber = 1060
  var call3613 = callmethod(var_o,"kind", [0]);
  var string3614 = new GraceString("member");
  var opresult3616 = callmethod(call3613, "==", [1], string3614);
  if (Grace_isTrue(opresult3616)) {
  lineNumber = 1061
  lineNumber = 1062
  var call3617 = callmethod(this,"compilemember", [1], var_o);
  var if3612 = call3617;
}
  lineNumber = 1064
  lineNumber = 1066
  lineNumber = 1
  lineNumber = 1063
  var call3619 = callmethod(var_o,"kind", [0]);
  var string3620 = new GraceString("for");
  var opresult3622 = callmethod(call3619, "==", [1], string3620);
  if (Grace_isTrue(opresult3622)) {
  lineNumber = 1064
  lineNumber = 1065
  var call3623 = callmethod(this,"compilefor", [1], var_o);
  var if3618 = call3623;
}
  lineNumber = 1102
  lineNumber = 1105
  lineNumber = 1
  lineNumber = 1066
  var call3625 = callmethod(var_o,"kind", [0]);
  var string3626 = new GraceString("call");
  var opresult3628 = callmethod(call3625, "==", [1], string3626);
  if (Grace_isTrue(opresult3628)) {
  lineNumber = 1102
  lineNumber = 1104
  lineNumber = 1
  lineNumber = 1104
  lineNumber = 1
  lineNumber = 1067
  var call3630 = callmethod(var_o,"value", [0]);
  var call3631 = callmethod(call3630,"value", [0]);
  var string3632 = new GraceString("print");
  var opresult3634 = callmethod(call3631, "==", [1], string3632);
  if (Grace_isTrue(opresult3634)) {
  lineNumber = 1069
  var array3635 = new GraceList([
]);

  var var_args = array3635;
  lineNumber = 1071
  lineNumber = 1069
  lineNumber = 1
  lineNumber = 1069
  var call3636 = callmethod(var_o,"with", [0]);
  lineNumber = 1071
  var block3637 = Grace_allocObject();
  block3637.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3637.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3637.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3637.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3637.receiver = this;
  block3637.className = 'block<genllvm29:1071>';
  block3637.real = function(
var_prm
) {
  lineNumber = 1070
  lineNumber = 1071
  var call3638 = callmethod(this,"compilenode", [1], var_prm);
  var var_r = call3638;
  var call3639 = callmethod(var_args,"push", [1], var_r);
  return call3639;
};
  var call3640 = callmethod(Grace_prelude,"for()do", [1, 1], call3636, block3637);
  lineNumber = 1074
  lineNumber = 1073
  var var_parami = new GraceNum(0);
  lineNumber = 1077
  lineNumber = 1074
  lineNumber = 1077
  var block3641 = Grace_allocObject();
  block3641.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3641.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3641.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3641.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3641.receiver = this;
  block3641.className = 'block<genllvm29:1077>';
  block3641.real = function(
var_arg
) {
  lineNumber = 1075
  var string3642 = new GraceString("  store %object ");
  var opresult3644 = callmethod(string3642, "++", [1], var_arg);
  var string3645 = new GraceString(", %object* %params_");
  var opresult3647 = callmethod(opresult3644, "++", [1], string3645);
  var opresult3649 = callmethod(opresult3647, "++", [1], var_parami);
  var string3650 = new GraceString("");
  var opresult3652 = callmethod(opresult3649, "++", [1], string3650);
  lineNumber = 1076
  var call3653 = callmethod(this,"out", [1], opresult3652);
  lineNumber = 1077
  lineNumber = 1076
  var opresult3655 = callmethod(var_parami, "+", [1], new GraceNum(1));
  var_parami = opresult3655;
  return opresult3655;
};
  var call3656 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3641);
  lineNumber = 1079
  lineNumber = 1078
  var string3657 = new GraceString("  %call");
  var opresult3659 = callmethod(string3657, "++", [1], var_auto__95__count);
  var string3660 = new GraceString(" = call %object @gracelib_print(%object null, i32 ");
  var opresult3662 = callmethod(opresult3659, "++", [1], string3660);
  lineNumber = 1079
  lineNumber = 1
  lineNumber = 1079
  var call3663 = callmethod(var_args,"size", [0]);
  var opresult3665 = callmethod(opresult3662, "++", [1], call3663);
  var string3666 = new GraceString(", %object* %params)");
  var opresult3668 = callmethod(opresult3665, "++", [1], string3666);
  lineNumber = 1080
  var call3669 = callmethod(this,"out", [1], opresult3668);
  lineNumber = 1081
  lineNumber = 1
  lineNumber = 1081
  lineNumber = 1080
  var string3670 = new GraceString("%call");
  var opresult3672 = callmethod(string3670, "++", [1], var_auto__95__count);
  var call3673 = callmethod(var_o,"register:=", [1], opresult3672);
  lineNumber = 1082
  lineNumber = 1081
  var opresult3675 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3675;
  var if3629 = opresult3675;
  } else {
  lineNumber = 1102
  lineNumber = 1095
  lineNumber = 1
  lineNumber = 1095
  lineNumber = 1
  lineNumber = 1082
  var call3677 = callmethod(var_o,"value", [0]);
  var call3678 = callmethod(call3677,"kind", [0]);
  var string3679 = new GraceString("identifier");
  var opresult3681 = callmethod(call3678, "==", [1], string3679);
  lineNumber = 1095
  lineNumber = 1
  lineNumber = 1095
  lineNumber = 1
  lineNumber = 1083
  var call3682 = callmethod(var_o,"value", [0]);
  var call3683 = callmethod(call3682,"value", [0]);
  var string3684 = new GraceString("length");
  var opresult3686 = callmethod(call3683, "==", [1], string3684);
  var opresult3688 = callmethod(opresult3681, "&", [1], opresult3686);
  if (Grace_isTrue(opresult3688)) {
  lineNumber = 1089
  lineNumber = 1091
  lineNumber = 1
  lineNumber = 1091
  lineNumber = 1
  lineNumber = 1084
  var call3690 = callmethod(var_o,"with", [0]);
  var call3691 = callmethod(call3690,"size", [0]);
  var opresult3693 = callmethod(call3691, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult3693)) {
  lineNumber = 1085
  var string3694 = new GraceString("; PP FOLLOWS");
  lineNumber = 1086
  var call3695 = callmethod(this,"out", [1], string3694);
  var call3696 = callmethod(var_o,"pretty", [1], new GraceNum(0));
  lineNumber = 1087
  var call3697 = callmethod(this,"out", [1], call3696);
  lineNumber = 1088
  lineNumber = 1087
  var string3698 = new GraceString("null");
  var_tmp = string3698;
  var if3689 = string3698;
  } else {
  lineNumber = 1089
  lineNumber = 1
  lineNumber = 1089
  lineNumber = 1
  lineNumber = 1089
  var call3699 = callmethod(var_o,"with", [0]);
  var call3700 = callmethod(call3699,"first", [0]);
  lineNumber = 1090
  var call3701 = callmethod(this,"compilenode", [1], call3700);
  var_tmp = call3701;
  var if3689 = call3701;
}
  lineNumber = 1092
  lineNumber = 1091
  var string3702 = new GraceString("  %call");
  var opresult3704 = callmethod(string3702, "++", [1], var_auto__95__count);
  var string3705 = new GraceString(" = call %object ");
  var opresult3707 = callmethod(opresult3704, "++", [1], string3705);
  lineNumber = 1092
  var string3708 = new GraceString("@gracelib_length(%object ");
  var opresult3710 = callmethod(opresult3707, "++", [1], string3708);
  var opresult3712 = callmethod(opresult3710, "++", [1], var_tmp);
  var string3713 = new GraceString(")");
  var opresult3715 = callmethod(opresult3712, "++", [1], string3713);
  lineNumber = 1093
  var call3716 = callmethod(this,"out", [1], opresult3715);
  lineNumber = 1094
  lineNumber = 1
  lineNumber = 1094
  lineNumber = 1093
  var string3717 = new GraceString("%call");
  var opresult3719 = callmethod(string3717, "++", [1], var_auto__95__count);
  var call3720 = callmethod(var_o,"register:=", [1], opresult3719);
  lineNumber = 1095
  lineNumber = 1094
  var opresult3722 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3722;
  var if3676 = opresult3722;
  } else {
  lineNumber = 1102
  lineNumber = 1101
  lineNumber = 1
  lineNumber = 1101
  lineNumber = 1
  lineNumber = 1095
  var call3724 = callmethod(var_o,"value", [0]);
  var call3725 = callmethod(call3724,"kind", [0]);
  var string3726 = new GraceString("identifier");
  var opresult3728 = callmethod(call3725, "==", [1], string3726);
  lineNumber = 1101
  lineNumber = 1
  lineNumber = 1101
  lineNumber = 1
  lineNumber = 1096
  var call3729 = callmethod(var_o,"value", [0]);
  var call3730 = callmethod(call3729,"value", [0]);
  var string3731 = new GraceString("escapestring");
  var opresult3733 = callmethod(call3730, "==", [1], string3731);
  var opresult3735 = callmethod(opresult3728, "&", [1], opresult3733);
  if (Grace_isTrue(opresult3735)) {
  lineNumber = 1098
  lineNumber = 1
  lineNumber = 1098
  lineNumber = 1
  lineNumber = 1097
  var call3736 = callmethod(var_o,"with", [0]);
  var call3737 = callmethod(call3736,"first", [0]);
  var_tmp = call3737;
  lineNumber = 1098
  var string3738 = new GraceString("_escape");
  var call3739 = callmethod(var_ast,"astmember", [2], string3738, var_tmp);
  var_tmp = call3739;
  lineNumber = 1099
  var array3740 = new GraceList([
]);

  var call3741 = callmethod(var_ast,"astcall", [2], var_tmp, array3740);
  var_tmp = call3741;
  lineNumber = 1100
  lineNumber = 1
  lineNumber = 1100
  lineNumber = 1101
  var call3742 = callmethod(this,"compilenode", [1], var_tmp);
  lineNumber = 1100
  var call3743 = callmethod(var_o,"register:=", [1], call3742);
  var if3723 = call3743;
  } else {
  lineNumber = 1102
  lineNumber = 1103
  var call3744 = callmethod(this,"compilecall", [1], var_o);
  var if3723 = call3744;
}
  var if3676 = if3723;
}
  var if3629 = if3676;
}
  var if3624 = if3629;
}
  lineNumber = 1106
  lineNumber = 1108
  lineNumber = 1
  lineNumber = 1105
  var call3746 = callmethod(var_o,"kind", [0]);
  var string3747 = new GraceString("op");
  var opresult3749 = callmethod(call3746, "==", [1], string3747);
  if (Grace_isTrue(opresult3749)) {
  lineNumber = 1106
  lineNumber = 1107
  var call3750 = callmethod(this,"compileop", [1], var_o);
  var if3745 = call3750;
}
  lineNumber = 1108
  var string3751 = new GraceString("; compilenode returning ");
  lineNumber = 1
  lineNumber = 1108
  var call3752 = callmethod(var_o,"register", [0]);
  var opresult3754 = callmethod(string3751, "++", [1], call3752);
  lineNumber = 1109
  var call3755 = callmethod(this,"out", [1], opresult3754);
  lineNumber = 1
  lineNumber = 1109
  var call3756 = callmethod(var_o,"register", [0]);
  return call3756
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilenode"] = func3237;
  lineNumber = 1428
var func3757 = function(argcv) {
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
  lineNumber = 1113
  lineNumber = 1
  lineNumber = 1112
  var call3758 = callmethod(var_sys,"argv", [0]);
  var var_argv = call3758;
  lineNumber = 1114
  var var_cmd;
  lineNumber = 1115
  lineNumber = 1114
  var_values = var_vl;
  lineNumber = 1116
  lineNumber = 1115
  var_outfile = var_of;
  lineNumber = 1117
  lineNumber = 1116
  var_modname = var_mn;
  lineNumber = 1118
  lineNumber = 1117
  var_runmode = var_rm;
  lineNumber = 1119
  lineNumber = 1118
  var_buildtype = var_bt;
  lineNumber = 1120
  lineNumber = 1119
  var_gracelibPath = var_glpath;
  lineNumber = 1121
  var array3759 = new GraceList([
]);

  var var_linkfiles = array3759;
  lineNumber = 1122
  lineNumber = 1121
  var bool3760 = new GraceBoolean(false)
  var var_ext = bool3760;
  lineNumber = 1174
  lineNumber = 1179
  lineNumber = 1122
  var string3762 = new GraceString("make");
  var opresult3764 = callmethod(var_runmode, "==", [1], string3762);
  if (Grace_isTrue(opresult3764)) {
  lineNumber = 1123
  var string3765 = new GraceString("checking imports.");
  lineNumber = 1124
  var call3766 = callmethod(this,"log_verbose", [1], string3765);
  lineNumber = 1174
  lineNumber = 1124
  lineNumber = 1174
  var block3767 = Grace_allocObject();
  block3767.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3767.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3767.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3767.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3767.receiver = this;
  block3767.className = 'block<genllvm29:1174>';
  block3767.real = function(
var_v
) {
  lineNumber = 1177
  lineNumber = 1
  lineNumber = 1125
  var call3769 = callmethod(var_v,"kind", [0]);
  var string3770 = new GraceString("import");
  var opresult3772 = callmethod(call3769, "==", [1], string3770);
  if (Grace_isTrue(opresult3772)) {
  lineNumber = 1127
  lineNumber = 1
  lineNumber = 1127
  lineNumber = 1
  lineNumber = 1126
  var call3773 = callmethod(var_v,"value", [0]);
  var call3774 = callmethod(call3773,"value", [0]);
  var var_nm = call3774;
  lineNumber = 1128
  lineNumber = 1127
  var bool3775 = new GraceBoolean(false)
  var var_exists = bool3775;
  lineNumber = 1131
  lineNumber = 1129
  lineNumber = 1132
  lineNumber = 1128
  var string3777 = new GraceString("native");
  var opresult3779 = callmethod(var_buildtype, "==", [1], string3777);
  lineNumber = 1129
  var string3780 = new GraceString(".gso");
  var opresult3782 = callmethod(var_nm, "++", [1], string3780);
  var call3783 = callmethod(var_io,"exists", [1], opresult3782);
  var opresult3785 = callmethod(opresult3779, "&", [1], call3783);
  if (Grace_isTrue(opresult3785)) {
  lineNumber = 1131
  lineNumber = 1130
  var bool3786 = new GraceBoolean(true)
  var_exists = bool3786;
  var if3776 = bool3786;
}
  lineNumber = 1137
  lineNumber = 1141
  lineNumber = 1
  lineNumber = 1132
  var call3788 = callmethod(var_exists,"not", [0]);
  if (Grace_isTrue(call3788)) {
  lineNumber = 1137
  lineNumber = 1133
  var string3790 = new GraceString(".gco");
  var opresult3792 = callmethod(var_nm, "++", [1], string3790);
  var call3793 = callmethod(var_io,"exists", [1], opresult3792);
  if (Grace_isTrue(call3793)) {
  lineNumber = 1137
  lineNumber = 1134
  var string3795 = new GraceString(".gco");
  var opresult3797 = callmethod(var_nm, "++", [1], string3795);
  var string3798 = new GraceString(".grace");
  var opresult3800 = callmethod(var_nm, "++", [1], string3798);
  var call3801 = callmethod(var_io,"newer", [2], opresult3797, opresult3800);
  if (Grace_isTrue(call3801)) {
  lineNumber = 1136
  lineNumber = 1135
  var bool3802 = new GraceBoolean(true)
  var_exists = bool3802;
  lineNumber = 1136
  var string3803 = new GraceString(".gco");
  var opresult3805 = callmethod(var_nm, "++", [1], string3803);
  var call3806 = callmethod(var_linkfiles,"push", [1], opresult3805);
  lineNumber = 1137
  var call3807 = callmethod(var_staticmodules,"push", [1], var_nm);
  var if3794 = call3807;
}
  var if3789 = if3794;
}
  var if3787 = if3789;
}
  lineNumber = 1167
  lineNumber = 1169
  lineNumber = 1
  lineNumber = 1141
  var call3809 = callmethod(var_exists,"not", [0]);
  if (Grace_isTrue(call3809)) {
  lineNumber = 1144
  lineNumber = 1142
  var string3811 = new GraceString(".gc");
  var opresult3813 = callmethod(var_nm, "++", [1], string3811);
  var call3814 = callmethod(var_io,"exists", [1], opresult3813);
  if (Grace_isTrue(call3814)) {
  lineNumber = 1144
  lineNumber = 1143
  var string3815 = new GraceString(".gc");
  var_ext = string3815;
  var if3810 = string3815;
}
  lineNumber = 1147
  lineNumber = 1145
  var string3817 = new GraceString(".grace");
  var opresult3819 = callmethod(var_nm, "++", [1], string3817);
  var call3820 = callmethod(var_io,"exists", [1], opresult3819);
  if (Grace_isTrue(call3820)) {
  lineNumber = 1147
  lineNumber = 1146
  var string3821 = new GraceString(".grace");
  var_ext = string3821;
  var if3816 = string3821;
}
  lineNumber = 1167
  lineNumber = 1168
  lineNumber = 1148
  var bool3823 = new GraceBoolean(false)
  var opresult3825 = callmethod(var_ext, "/=", [1], bool3823);
  if (Grace_isTrue(opresult3825)) {
  lineNumber = 1150
  lineNumber = 1
  lineNumber = 1149
  var call3826 = callmethod(var_argv,"first", [0]);
  var string3827 = new GraceString(" --target llvm29");
  var opresult3829 = callmethod(call3826, "++", [1], string3827);
  var_cmd = opresult3829;
  lineNumber = 1151
  lineNumber = 1150
  var string3830 = new GraceString(" --make ");
  var opresult3832 = callmethod(var_cmd, "++", [1], string3830);
  var opresult3834 = callmethod(opresult3832, "++", [1], var_nm);
  var opresult3836 = callmethod(opresult3834, "++", [1], var_ext);
  var_cmd = opresult3836;
  lineNumber = 1153
  lineNumber = 1154
  lineNumber = 1
  lineNumber = 1151
  var call3838 = callmethod(var_util,"verbosity", [0]);
  var opresult3840 = callmethod(call3838, ">", [1], new GraceNum(30));
  if (Grace_isTrue(opresult3840)) {
  lineNumber = 1153
  lineNumber = 1152
  var string3841 = new GraceString(" --verbose");
  var opresult3843 = callmethod(var_cmd, "++", [1], string3841);
  var_cmd = opresult3843;
  var if3837 = opresult3843;
}
  lineNumber = 1156
  lineNumber = 1157
  lineNumber = 1
  lineNumber = 1154
  var call3845 = callmethod(var_util,"vtag", [0]);
  if (Grace_isTrue(call3845)) {
  lineNumber = 1156
  lineNumber = 1155
  var string3846 = new GraceString(" --vtag ");
  var opresult3848 = callmethod(var_cmd, "++", [1], string3846);
  lineNumber = 1156
  lineNumber = 1
  lineNumber = 1155
  var call3849 = callmethod(var_util,"vtag", [0]);
  var opresult3851 = callmethod(opresult3848, "++", [1], call3849);
  var_cmd = opresult3851;
  var if3844 = opresult3851;
}
  lineNumber = 1159
  lineNumber = 1160
  lineNumber = 1157
  var string3853 = new GraceString("native");
  var opresult3855 = callmethod(var_buildtype, "==", [1], string3853);
  if (Grace_isTrue(opresult3855)) {
  lineNumber = 1159
  lineNumber = 1158
  var string3856 = new GraceString(" --native --noexec");
  var opresult3858 = callmethod(var_cmd, "++", [1], string3856);
  var_cmd = opresult3858;
  var if3852 = opresult3858;
}
  lineNumber = 1161
  lineNumber = 1160
  lineNumber = 1
  lineNumber = 1160
  var call3860 = callmethod(var_io,"system", [1], var_cmd);
  var call3861 = callmethod(call3860,"not", [0]);
  if (Grace_isTrue(call3861)) {
  lineNumber = 1161
  var string3862 = new GraceString("failed processing import of ");
  var opresult3864 = callmethod(string3862, "++", [1], var_nm);
  var string3865 = new GraceString(".");
  var opresult3867 = callmethod(opresult3864, "++", [1], string3865);
  var call3868 = callmethod(var_util,"syntax_error", [1], opresult3867);
  var if3859 = call3868;
}
  lineNumber = 1164
  lineNumber = 1163
  var bool3869 = new GraceBoolean(true)
  var_exists = bool3869;
  lineNumber = 1164
  var string3870 = new GraceString(".gco");
  var opresult3872 = callmethod(var_nm, "++", [1], string3870);
  var call3873 = callmethod(var_linkfiles,"push", [1], opresult3872);
  lineNumber = 1165
  var call3874 = callmethod(var_staticmodules,"push", [1], var_nm);
  lineNumber = 1167
  lineNumber = 1166
  var bool3875 = new GraceBoolean(false)
  var_ext = bool3875;
  var if3822 = bool3875;
}
  var if3808 = if3822;
}
  lineNumber = 1171
  lineNumber = 1173
  lineNumber = 1169
  var string3877 = new GraceString("sys");
  var opresult3879 = callmethod(var_nm, "==", [1], string3877);
  lineNumber = 1173
  lineNumber = 1169
  var string3880 = new GraceString("io");
  var opresult3882 = callmethod(var_nm, "==", [1], string3880);
  var opresult3884 = callmethod(opresult3879, "|", [1], opresult3882);
  if (Grace_isTrue(opresult3884)) {
  lineNumber = 1171
  lineNumber = 1170
  var bool3885 = new GraceBoolean(true)
  var_exists = bool3885;
  lineNumber = 1171
  var call3886 = callmethod(var_staticmodules,"push", [1], var_nm);
  var if3876 = call3886;
}
  lineNumber = 1174
  lineNumber = 1176
  lineNumber = 1
  lineNumber = 1173
  var call3888 = callmethod(var_exists,"not", [0]);
  if (Grace_isTrue(call3888)) {
  lineNumber = 1174
  var string3889 = new GraceString("failed finding import of ");
  var opresult3891 = callmethod(string3889, "++", [1], var_nm);
  var string3892 = new GraceString(".");
  var opresult3894 = callmethod(opresult3891, "++", [1], string3892);
  var call3895 = callmethod(var_util,"syntax_error", [1], opresult3894);
  var if3887 = call3895;
}
  var if3768 = if3887;
}
  return if3768;
};
  var call3896 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block3767);
  var if3761 = call3896;
}
  lineNumber = 1179
  var string3897 = new GraceString("@.str = private unnamed_addr constant [6 x i8] c\"Hello\\00\"");
  lineNumber = 1180
  var call3898 = callmethod(this,"out", [1], string3897);
  var string3899 = new GraceString("@.str._plus = private unnamed_addr constant [2 x i8] c\"+\\00\"");
  lineNumber = 1181
  var call3900 = callmethod(this,"out", [1], string3899);
  var string3901 = new GraceString("@.str._minus = private unnamed_addr constant [2 x i8] c\"-\\00\"");
  lineNumber = 1182
  var call3902 = callmethod(this,"out", [1], string3901);
  var string3903 = new GraceString("@.str._asterisk = private unnamed_addr constant [2 x i8] c\"*\\00\"");
  lineNumber = 1183
  var call3904 = callmethod(this,"out", [1], string3903);
  var string3905 = new GraceString("@.str._slash = private unnamed_addr constant [2 x i8] c\"/\\00\"");
  lineNumber = 1184
  var call3906 = callmethod(this,"out", [1], string3905);
  var string3907 = new GraceString("@.str._percent = private unnamed_addr constant [2 x i8] c\"%\\00\"");
  lineNumber = 1185
  var call3908 = callmethod(this,"out", [1], string3907);
  var string3909 = new GraceString("@.str._index = private unnamed_addr constant [3 x i8] c\"[]\\00\"");
  lineNumber = 1186
  var call3910 = callmethod(this,"out", [1], string3909);
  var string3911 = new GraceString("@.str._push = private unnamed_addr constant [5 x i8] c\"push\\00\"");
  lineNumber = 1187
  var call3912 = callmethod(this,"out", [1], string3911);
  var string3913 = new GraceString("@.str._iter = private unnamed_addr constant [5 x i8] c\"iter\\00\"");
  lineNumber = 1188
  var call3914 = callmethod(this,"out", [1], string3913);
  var string3915 = new GraceString("@.str._apply = private unnamed_addr constant [6 x i8] c\"apply\\00\"");
  lineNumber = 1189
  var call3916 = callmethod(this,"out", [1], string3915);
  var string3917 = new GraceString("@.str._havemore = private unnamed_addr constant [9 x i8] c\"havemore\\00\"");
  lineNumber = 1190
  var call3918 = callmethod(this,"out", [1], string3917);
  var string3919 = new GraceString("@.str._next = private unnamed_addr constant [5 x i8] c\"next\\00\"");
  lineNumber = 1191
  var call3920 = callmethod(this,"out", [1], string3919);
  var string3921 = new GraceString("@.str._assignment = private unnamed_addr constant [11 x i8] c\"assignment\\00\"");
  lineNumber = 1192
  var call3922 = callmethod(this,"out", [1], string3921);
  var string3923 = new GraceString("@.str.asString = private unnamed_addr constant [9 x i8] c\"asString\\00\"");
  lineNumber = 1193
  var call3924 = callmethod(this,"out", [1], string3923);
  lineNumber = 1194
  lineNumber = 1193
  var string3925 = new GraceString("@.str._compilerRevision = private unnamed_addr constant [41 x i8]");
  lineNumber = 1194
  var string3926 = new GraceString("c\"");
  var opresult3928 = callmethod(string3925, "++", [1], string3926);
  lineNumber = 1
  lineNumber = 1194
  var call3929 = callmethod(var_buildinfo,"gitrevision", [0]);
  var opresult3931 = callmethod(opresult3928, "++", [1], call3929);
  var string3932 = new GraceString("\\00\"");
  var opresult3934 = callmethod(opresult3931, "++", [1], string3932);
  lineNumber = 1195
  var call3935 = callmethod(this,"out", [1], opresult3934);
  var string3936 = new GraceString("@undefined = private global %object null");
  lineNumber = 1196
  var call3937 = callmethod(this,"out", [1], string3936);
  var string3938 = new GraceString("@none = private global %object null");
  lineNumber = 1197
  var call3939 = callmethod(this,"out", [1], string3938);
  var string3940 = new GraceString("@argv = private global %object null");
  lineNumber = 1198
  var call3941 = callmethod(this,"out", [1], string3940);
  var string3942 = new GraceString("%Method = type {i8*,i32,%object(%object,i32,%object*,i32)*}");
  lineNumber = 1199
  var call3943 = callmethod(this,"outprint", [1], string3942);
  var string3944 = new GraceString("%ClassData = type { i8*, %Method*, i32 }*");
  lineNumber = 1200
  var call3945 = callmethod(this,"outprint", [1], string3944);
  var string3946 = new GraceString("%object = type { i32, %ClassData, [0 x i8] }*");
  lineNumber = 1201
  var call3947 = callmethod(this,"outprint", [1], string3946);
  var string3948 = new GraceString("%UserObject = type { i32, i8*, i8*, [0 x %object] }");
  lineNumber = 1202
  var call3949 = callmethod(this,"outprint", [1], string3948);
  var string3950 = new GraceString("define %object @module_");
  var opresult3952 = callmethod(string3950, "++", [1], var_modname);
  var string3953 = new GraceString("_init() {");
  var opresult3955 = callmethod(opresult3952, "++", [1], string3953);
  lineNumber = 1203
  var call3956 = callmethod(this,"out", [1], opresult3955);
  var string3957 = new GraceString("entry:");
  lineNumber = 1204
  var call3958 = callmethod(this,"out", [1], string3957);
  var string3959 = new GraceString("  %self = call %object @alloc_obj2(i32 100, i32 100)");
  lineNumber = 1205
  var call3960 = callmethod(this,"out", [1], string3959);
  lineNumber = 1206
  lineNumber = 1205
  var string3961 = new GraceString("Module<");
  var opresult3963 = callmethod(string3961, "++", [1], var_modname);
  var string3964 = new GraceString(">");
  var opresult3966 = callmethod(opresult3963, "++", [1], string3964);
  var var_modn = opresult3966;
  lineNumber = 1208
  lineNumber = 1206
  var string3967 = new GraceString("@\".str._modcname_");
  var opresult3969 = callmethod(string3967, "++", [1], var_modname);
  var string3970 = new GraceString("\" = private unnamed_addr ");
  var opresult3972 = callmethod(opresult3969, "++", [1], string3970);
  lineNumber = 1208
  lineNumber = 1207
  var string3973 = new GraceString("constant [");
  lineNumber = 1208
  lineNumber = 1
  lineNumber = 1207
  var call3974 = callmethod(var_modn,"size", [0]);
  var opresult3976 = callmethod(call3974, "+", [1], new GraceNum(1));
  var opresult3978 = callmethod(string3973, "++", [1], opresult3976);
  var string3979 = new GraceString(" x i8] c\"");
  var opresult3981 = callmethod(opresult3978, "++", [1], string3979);
  var opresult3983 = callmethod(opresult3981, "++", [1], var_modn);
  var string3984 = new GraceString("\\00\"");
  var opresult3986 = callmethod(opresult3983, "++", [1], string3984);
  var opresult3988 = callmethod(opresult3972, "++", [1], opresult3986);
  var var_con = opresult3988;
  lineNumber = 1208
  var call3989 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 1212
  lineNumber = 1209
  var string3990 = new GraceString("  call void @setclassname(%object %self, ");
  lineNumber = 1212
  lineNumber = 1210
  var string3991 = new GraceString("i8* getelementptr([");
  lineNumber = 1212
  lineNumber = 1
  lineNumber = 1210
  var call3992 = callmethod(var_modn,"size", [0]);
  var opresult3994 = callmethod(call3992, "+", [1], new GraceNum(1));
  var opresult3996 = callmethod(string3991, "++", [1], opresult3994);
  var string3997 = new GraceString(" x i8]* ");
  var opresult3999 = callmethod(opresult3996, "++", [1], string3997);
  var opresult4001 = callmethod(string3990, "++", [1], opresult3999);
  lineNumber = 1212
  lineNumber = 1211
  var string4002 = new GraceString("@\".str._modcname_");
  var opresult4004 = callmethod(string4002, "++", [1], var_modname);
  var string4005 = new GraceString("\",");
  var opresult4007 = callmethod(opresult4004, "++", [1], string4005);
  var opresult4009 = callmethod(opresult4001, "++", [1], opresult4007);
  lineNumber = 1212
  var string4010 = new GraceString("i32 0,i32 0))");
  var opresult4012 = callmethod(opresult4009, "++", [1], string4010);
  lineNumber = 1213
  var call4013 = callmethod(this,"out", [1], opresult4012);
  var string4014 = new GraceString("  %undefined = load %object* @undefined");
  lineNumber = 1214
  var call4015 = callmethod(this,"out", [1], string4014);
  var string4016 = new GraceString("  %none = load %object* @none");
  lineNumber = 1215
  var call4017 = callmethod(this,"out", [1], string4016);
  var string4018 = new GraceString("  %var_argv = call %object* @alloc_var()");
  lineNumber = 1216
  var call4019 = callmethod(this,"out", [1], string4018);
  var string4020 = new GraceString("  %tmp_argv = load %object* @argv");
  lineNumber = 1217
  var call4021 = callmethod(this,"out", [1], string4020);
  var string4022 = new GraceString("  store %object %tmp_argv, %object* %var_argv");
  lineNumber = 1218
  var call4023 = callmethod(this,"out", [1], string4022);
  var string4024 = new GraceString("  %var_HashMap = call %object* @alloc_var()");
  lineNumber = 1219
  var call4025 = callmethod(this,"out", [1], string4024);
  var string4026 = new GraceString("  %tmp_hmco = call %object @alloc_HashMapClassObject()");
  lineNumber = 1220
  var call4027 = callmethod(this,"out", [1], string4026);
  var string4028 = new GraceString("  store %object %tmp_hmco, %object* %var_HashMap");
  lineNumber = 1221
  var call4029 = callmethod(this,"out", [1], string4028);
  var string4030 = new GraceString("  %var_MatchFailed = call %object* @alloc_var()");
  lineNumber = 1222
  var call4031 = callmethod(this,"out", [1], string4030);
  var string4032 = new GraceString("  %tmp_mf = call %object @alloc_obj2(i32 0, i32 0)");
  lineNumber = 1223
  var call4033 = callmethod(this,"out", [1], string4032);
  var string4034 = new GraceString("  store %object %tmp_mf, %object* %var_MatchFailed");
  lineNumber = 1224
  var call4035 = callmethod(this,"out", [1], string4034);
  lineNumber = 1225
  lineNumber = 1224
  var var_tmpo = var_output;
  lineNumber = 1226
  var array4036 = new GraceList([
]);

  var_output = array4036;
  lineNumber = 1241
  lineNumber = 1226
  lineNumber = 1241
  var block4037 = Grace_allocObject();
  block4037.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4037.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4037.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4037.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4037.receiver = this;
  block4037.className = 'block<genllvm29:1241>';
  block4037.real = function(
var_l
) {
  lineNumber = 1243
  lineNumber = 1
  lineNumber = 1227
  var call4039 = callmethod(var_l,"kind", [0]);
  var string4040 = new GraceString("vardec");
  var opresult4042 = callmethod(call4039, "==", [1], string4040);
  lineNumber = 1243
  lineNumber = 1
  lineNumber = 1227
  var call4043 = callmethod(var_l,"kind", [0]);
  var string4044 = new GraceString("defdec");
  var opresult4046 = callmethod(call4043, "==", [1], string4044);
  var opresult4048 = callmethod(opresult4042, "|", [1], opresult4046);
  if (Grace_isTrue(opresult4048)) {
  lineNumber = 1228
  lineNumber = 1
  lineNumber = 1228
  lineNumber = 1
  lineNumber = 1228
  lineNumber = 1
  lineNumber = 1228
  var call4049 = callmethod(var_l,"name", [0]);
  var call4050 = callmethod(call4049,"value", [0]);
  var call4051 = callmethod(call4050,"_escape", [0]);
  var var_tnm = call4051;
  lineNumber = 1229
  var call4052 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 1230
  var string4053 = new GraceString("  %\"var_");
  var opresult4055 = callmethod(string4053, "++", [1], var_tnm);
  var string4056 = new GraceString("\" = call %object* @alloc_var()");
  var opresult4058 = callmethod(opresult4055, "++", [1], string4056);
  lineNumber = 1231
  var call4059 = callmethod(this,"out", [1], opresult4058);
  var string4060 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult4062 = callmethod(string4060, "++", [1], var_tnm);
  var string4063 = new GraceString("\"");
  var opresult4065 = callmethod(opresult4062, "++", [1], string4063);
  lineNumber = 1232
  var call4066 = callmethod(this,"out", [1], opresult4065);
  var if4038 = call4066;
  } else {
  lineNumber = 1241
  lineNumber = 1243
  lineNumber = 1
  lineNumber = 1232
  var call4068 = callmethod(var_l,"kind", [0]);
  var string4069 = new GraceString("class");
  var opresult4071 = callmethod(call4068, "==", [1], string4069);
  if (Grace_isTrue(opresult4071)) {
  lineNumber = 1234
  var var_tnmc;
  lineNumber = 1237
  lineNumber = 1239
  lineNumber = 1
  lineNumber = 1239
  lineNumber = 1
  lineNumber = 1234
  var call4073 = callmethod(var_l,"name", [0]);
  var call4074 = callmethod(call4073,"kind", [0]);
  var string4075 = new GraceString("generic");
  var opresult4077 = callmethod(call4074, "==", [1], string4075);
  if (Grace_isTrue(opresult4077)) {
  lineNumber = 1235
  lineNumber = 1
  lineNumber = 1235
  lineNumber = 1
  lineNumber = 1235
  lineNumber = 1
  lineNumber = 1235
  lineNumber = 1
  lineNumber = 1235
  var call4078 = callmethod(var_l,"name", [0]);
  var call4079 = callmethod(call4078,"value", [0]);
  var call4080 = callmethod(call4079,"value", [0]);
  var call4081 = callmethod(call4080,"_escape", [0]);
  var_tnmc = call4081;
  var if4072 = call4081;
  } else {
  lineNumber = 1237
  lineNumber = 1
  lineNumber = 1237
  lineNumber = 1
  lineNumber = 1237
  lineNumber = 1
  lineNumber = 1237
  var call4082 = callmethod(var_l,"name", [0]);
  var call4083 = callmethod(call4082,"value", [0]);
  var call4084 = callmethod(call4083,"_escape", [0]);
  var_tnmc = call4084;
  var if4072 = call4084;
}
  lineNumber = 1239
  var call4085 = callmethod(var_declaredvars,"push", [1], var_tnmc);
  lineNumber = 1240
  var string4086 = new GraceString("  %\"var_");
  var opresult4088 = callmethod(string4086, "++", [1], var_tnmc);
  var string4089 = new GraceString("\" = call %object* @alloc_var()");
  var opresult4091 = callmethod(opresult4088, "++", [1], string4089);
  lineNumber = 1241
  var call4092 = callmethod(this,"out", [1], opresult4091);
  var string4093 = new GraceString("  store %object %undefined, %object* %\"var_");
  var opresult4095 = callmethod(string4093, "++", [1], var_tnmc);
  var string4096 = new GraceString("\"");
  var opresult4098 = callmethod(opresult4095, "++", [1], string4096);
  lineNumber = 1242
  var call4099 = callmethod(this,"out", [1], opresult4098);
  var if4067 = call4099;
}
  var if4038 = if4067;
}
  return if4038;
};
  var call4100 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block4037);
  lineNumber = 1245
  lineNumber = 1244
  lineNumber = 1245
  var block4101 = Grace_allocObject();
  block4101.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4101.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4101.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4101.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4101.receiver = this;
  block4101.className = 'block<genllvm29:1245>';
  block4101.real = function(
var_o
) {
  lineNumber = 1246
  var call4102 = callmethod(this,"compilenode", [1], var_o);
  return call4102;
};
  var call4103 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block4101);
  lineNumber = 1248
  lineNumber = 1247
  var var_tmpo2 = var_output;
  lineNumber = 1249
  lineNumber = 1248
  var_output = var_tmpo;
  lineNumber = 1249
  var string4104 = new GraceString("  %params = alloca %object, i32 ");
  var opresult4106 = callmethod(string4104, "++", [1], var_paramsUsed);
  lineNumber = 1250
  var call4107 = callmethod(this,"out", [1], opresult4106);
  lineNumber = 1251
  lineNumber = 1250
  var diff4109 = callmethod(var_paramsUsed, "-", [1], new GraceNum(1));
  var opresult4111 = callmethod(new GraceNum(0), "..", [1], diff4109);
  lineNumber = 1251
  var block4112 = Grace_allocObject();
  block4112.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4112.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4112.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4112.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4112.receiver = this;
  block4112.className = 'block<genllvm29:1251>';
  block4112.real = function(
var_i
) {
  var string4113 = new GraceString("  %params_");
  var opresult4115 = callmethod(string4113, "++", [1], var_i);
  var string4116 = new GraceString(" = getelementptr %object* %params, i32 ");
  var opresult4118 = callmethod(opresult4115, "++", [1], string4116);
  var opresult4120 = callmethod(opresult4118, "++", [1], var_i);
  lineNumber = 1252
  var call4121 = callmethod(this,"out", [1], opresult4120);
  return call4121;
};
  var call4122 = callmethod(Grace_prelude,"for()do", [1, 1], opresult4111, block4112);
  lineNumber = 1254
  lineNumber = 1253
  lineNumber = 1254
  var block4123 = Grace_allocObject();
  block4123.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4123.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4123.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4123.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4123.receiver = this;
  block4123.className = 'block<genllvm29:1254>';
  block4123.real = function(
var_l
) {
  lineNumber = 1255
  var call4124 = callmethod(this,"out", [1], var_l);
  return call4124;
};
  var call4125 = callmethod(Grace_prelude,"for()do", [1, 1], var_tmpo2, block4123);
  lineNumber = 1257
  lineNumber = 1256
  var_paramsUsed = new GraceNum(1);
  lineNumber = 1257
  var string4126 = new GraceString("  ret %object %self");
  lineNumber = 1258
  var call4127 = callmethod(this,"out", [1], string4126);
  var string4128 = new GraceString("}");
  lineNumber = 1259
  var call4129 = callmethod(this,"out", [1], string4128);
  var string4130 = new GraceString("define weak i32 @main(i32 %argc, i8** %argv) {");
  lineNumber = 1260
  var call4131 = callmethod(this,"out", [1], string4130);
  var string4132 = new GraceString("entry:");
  lineNumber = 1261
  var call4133 = callmethod(this,"out", [1], string4132);
  var string4134 = new GraceString("  call void @initprofiling()");
  lineNumber = 1262
  var call4135 = callmethod(this,"out", [1], string4134);
  lineNumber = 1270
  lineNumber = 1262
  var string4137 = new GraceString("LogCallGraph");
  lineNumber = 1272
  lineNumber = 1
  lineNumber = 1262
  var call4138 = callmethod(var_util,"extensions", [0]);
  var call4139 = callmethod(call4138,"contains", [1], string4137);
  if (Grace_isTrue(call4139)) {
  lineNumber = 1263
  var string4140 = new GraceString("LogCallGraph");
  lineNumber = 1264
  lineNumber = 1
  lineNumber = 1263
  var call4141 = callmethod(var_util,"extensions", [0]);
  var call4142 = callmethod(call4141,"get", [1], string4140);
  var var_lcgfile = call4142;
  lineNumber = 1266
  lineNumber = 1264
  var string4143 = new GraceString("@.str.logdest = private unnamed_addr ");
  lineNumber = 1266
  lineNumber = 1265
  var string4144 = new GraceString("constant [");
  lineNumber = 1266
  lineNumber = 1
  lineNumber = 1265
  var call4145 = callmethod(var_lcgfile,"size", [0]);
  var opresult4147 = callmethod(call4145, "+", [1], new GraceNum(1));
  var opresult4149 = callmethod(string4144, "++", [1], opresult4147);
  var string4150 = new GraceString(" x i8] c\"");
  var opresult4152 = callmethod(opresult4149, "++", [1], string4150);
  var opresult4154 = callmethod(opresult4152, "++", [1], var_lcgfile);
  var string4155 = new GraceString("\\00\"");
  var opresult4157 = callmethod(opresult4154, "++", [1], string4155);
  var opresult4159 = callmethod(string4143, "++", [1], opresult4157);
  var_con = opresult4159;
  lineNumber = 1266
  var call4160 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 1270
  lineNumber = 1267
  var string4161 = new GraceString("  call void @enable_callgraph(");
  lineNumber = 1270
  lineNumber = 1268
  var string4162 = new GraceString("i8* getelementptr([");
  lineNumber = 1270
  lineNumber = 1
  lineNumber = 1268
  var call4163 = callmethod(var_lcgfile,"size", [0]);
  var opresult4165 = callmethod(call4163, "+", [1], new GraceNum(1));
  var opresult4167 = callmethod(string4162, "++", [1], opresult4165);
  var string4168 = new GraceString(" x i8]* ");
  var opresult4170 = callmethod(opresult4167, "++", [1], string4168);
  var opresult4172 = callmethod(string4161, "++", [1], opresult4170);
  lineNumber = 1269
  var string4173 = new GraceString("@.str.logdest,");
  var opresult4175 = callmethod(opresult4172, "++", [1], string4173);
  lineNumber = 1270
  var string4176 = new GraceString("i32 0,i32 0))");
  var opresult4178 = callmethod(opresult4175, "++", [1], string4176);
  lineNumber = 1271
  var call4179 = callmethod(this,"out", [1], opresult4178);
  var if4136 = call4179;
}
  lineNumber = 1272
  var string4180 = new GraceString("  call void @gracelib_argv(i8** %argv)");
  lineNumber = 1273
  var call4181 = callmethod(this,"out", [1], string4180);
  var string4182 = new GraceString("  %params = alloca %object, i32 1");
  lineNumber = 1274
  var call4183 = callmethod(this,"out", [1], string4182);
  var string4184 = new GraceString("  %params_0 = getelementptr %object* %params, i32 0");
  lineNumber = 1275
  var call4185 = callmethod(this,"out", [1], string4184);
  var string4186 = new GraceString("  %undefined = call %object @alloc_Undefined()");
  lineNumber = 1276
  var call4187 = callmethod(this,"out", [1], string4186);
  var string4188 = new GraceString("  store %object %undefined, %object* @undefined");
  lineNumber = 1277
  var call4189 = callmethod(this,"out", [1], string4188);
  var string4190 = new GraceString("  %none = call %object @alloc_none()");
  lineNumber = 1278
  var call4191 = callmethod(this,"out", [1], string4190);
  var string4192 = new GraceString("  store %object %none, %object* @none");
  lineNumber = 1279
  var call4193 = callmethod(this,"out", [1], string4192);
  var string4194 = new GraceString("  %tmp_argv = call %object @alloc_List()");
  lineNumber = 1280
  var call4195 = callmethod(this,"out", [1], string4194);
  var string4196 = new GraceString("  %argv_i = alloca i32");
  lineNumber = 1281
  var call4197 = callmethod(this,"out", [1], string4196);
  var string4198 = new GraceString("  store i32 0, i32* %argv_i");
  lineNumber = 1282
  var call4199 = callmethod(this,"out", [1], string4198);
  var string4200 = new GraceString("  br label %argv.cond");
  lineNumber = 1283
  var call4201 = callmethod(this,"out", [1], string4200);
  var string4202 = new GraceString("argv.cond");
  lineNumber = 1284
  var call4203 = callmethod(this,"beginblock", [1], string4202);
  var string4204 = new GraceString("  %argv_tmp1 = load i32* %argv_i, align 4");
  lineNumber = 1285
  var call4205 = callmethod(this,"out", [1], string4204);
  var string4206 = new GraceString("  %argv_cmp = icmp slt i32 %argv_tmp1, %argc");
  lineNumber = 1286
  var call4207 = callmethod(this,"out", [1], string4206);
  var string4208 = new GraceString("  br i1 %argv_cmp, label %argv.body, label %argv.end");
  lineNumber = 1287
  var call4209 = callmethod(this,"out", [1], string4208);
  var string4210 = new GraceString("argv.body");
  lineNumber = 1288
  var call4211 = callmethod(this,"beginblock", [1], string4210);
  var string4212 = new GraceString("  %argv_iv = load i32* %argv_i");
  lineNumber = 1289
  var call4213 = callmethod(this,"out", [1], string4212);
  var string4214 = new GraceString("  %argv_idx = getelementptr i8** %argv, i32 %argv_iv");
  lineNumber = 1290
  var call4215 = callmethod(this,"out", [1], string4214);
  var string4216 = new GraceString("  %argv_val = load i8** %argv_idx");
  lineNumber = 1291
  var call4217 = callmethod(this,"out", [1], string4216);
  var string4218 = new GraceString("  %argv_tmp3 = call %object @alloc_String(i8* %argv_val)");
  lineNumber = 1292
  var call4219 = callmethod(this,"out", [1], string4218);
  var string4220 = new GraceString("  store %object %argv_tmp3, %object* %params_0");
  lineNumber = 1293
  var call4221 = callmethod(this,"out", [1], string4220);
  lineNumber = 1296
  lineNumber = 1293
  var string4222 = new GraceString("  call %object @callmethod(%object %tmp_argv, ");
  lineNumber = 1294
  var string4223 = new GraceString("i8* getelementptr([5 x i8]* @.str._push");
  var opresult4225 = callmethod(string4222, "++", [1], string4223);
  lineNumber = 1295
  var string4226 = new GraceString(",i32 0,i32 0), ");
  var opresult4228 = callmethod(opresult4225, "++", [1], string4226);
  lineNumber = 1296
  var string4229 = new GraceString("i32 0, %object* %params)");
  var opresult4231 = callmethod(opresult4228, "++", [1], string4229);
  lineNumber = 1297
  var call4232 = callmethod(this,"out", [1], opresult4231);
  var string4233 = new GraceString("  %argv_inc = add i32 %argv_iv, 1");
  lineNumber = 1298
  var call4234 = callmethod(this,"out", [1], string4233);
  var string4235 = new GraceString("  store i32 %argv_inc, i32* %argv_i");
  lineNumber = 1299
  var call4236 = callmethod(this,"out", [1], string4235);
  var string4237 = new GraceString("  br label %argv.cond");
  lineNumber = 1300
  var call4238 = callmethod(this,"out", [1], string4237);
  var string4239 = new GraceString("argv.end");
  lineNumber = 1301
  var call4240 = callmethod(this,"beginblock", [1], string4239);
  var string4241 = new GraceString("  call void @module_sys_init_argv(%object %tmp_argv)");
  lineNumber = 1302
  var call4242 = callmethod(this,"out", [1], string4241);
  var string4243 = new GraceString("  %var_argv = call %object* @alloc_var()");
  lineNumber = 1303
  var call4244 = callmethod(this,"out", [1], string4243);
  var string4245 = new GraceString("  store %object %tmp_argv, %object* %var_argv");
  lineNumber = 1304
  var call4246 = callmethod(this,"out", [1], string4245);
  var string4247 = new GraceString("  store %object %tmp_argv, %object* @argv");
  lineNumber = 1305
  var call4248 = callmethod(this,"out", [1], string4247);
  var string4249 = new GraceString("  call %object @module_");
  var opresult4251 = callmethod(string4249, "++", [1], var_modname);
  var string4252 = new GraceString("_init()");
  var opresult4254 = callmethod(opresult4251, "++", [1], string4252);
  lineNumber = 1306
  var call4255 = callmethod(this,"out", [1], opresult4254);
  var string4256 = new GraceString("  call void @gracelib_stats()");
  lineNumber = 1307
  var call4257 = callmethod(this,"out", [1], string4256);
  var string4258 = new GraceString("  ret i32 0");
  lineNumber = 1308
  var call4259 = callmethod(this,"out", [1], string4258);
  var string4260 = new GraceString("}");
  lineNumber = 1309
  var call4261 = callmethod(this,"out", [1], string4260);
  var string4262 = new GraceString("; constant definitions");
  lineNumber = 1310
  var call4263 = callmethod(this,"out", [1], string4262);
  lineNumber = 1311
  lineNumber = 1310
  lineNumber = 1311
  var block4264 = Grace_allocObject();
  block4264.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4264.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4264.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4264.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4264.receiver = this;
  block4264.className = 'block<genllvm29:1311>';
  block4264.real = function(
var_c
) {
  lineNumber = 1312
  var call4265 = callmethod(this,"out", [1], var_c);
  return call4265;
};
  var call4266 = callmethod(Grace_prelude,"for()do", [1, 1], var_constants, block4264);
  lineNumber = 1314
  lineNumber = 1
  lineNumber = 1313
  var call4267 = callmethod(var_subtype,"boolMatrix", [0]);
  var var_mtx = call4267;
  lineNumber = 1315
  lineNumber = 1314
  var string4268 = new GraceString("@.subtypes = private unnamed_addr ");
  lineNumber = 1315
  var string4269 = new GraceString("constant [");
  lineNumber = 1
  lineNumber = 1315
  var call4270 = callmethod(var_mtx,"size", [0]);
  lineNumber = 1
  lineNumber = 1315
  var call4271 = callmethod(var_mtx,"size", [0]);
  var prod4273 = callmethod(call4270, "*", [1], call4271);
  var opresult4275 = callmethod(string4269, "++", [1], prod4273);
  var string4276 = new GraceString(" x i1] [");
  var opresult4278 = callmethod(opresult4275, "++", [1], string4276);
  var opresult4280 = callmethod(string4268, "++", [1], opresult4278);
  lineNumber = 1316
  var call4281 = callmethod(this,"out", [1], opresult4280);
  lineNumber = 1317
  lineNumber = 1316
  var bool4282 = new GraceBoolean(true)
  var var_smfirst = bool4282;
  lineNumber = 1327
  lineNumber = 1317
  lineNumber = 1327
  var block4283 = Grace_allocObject();
  block4283.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4283.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4283.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4283.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4283.receiver = this;
  block4283.className = 'block<genllvm29:1327>';
  block4283.real = function(
var_m1
) {
  lineNumber = 1318
  lineNumber = 1327
  var block4284 = Grace_allocObject();
  block4284.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4284.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4284.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4284.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4284.receiver = this;
  block4284.className = 'block<genllvm29:1327>';
  block4284.real = function(
var_m2
) {
  lineNumber = 1322
  lineNumber = 1319
  if (Grace_isTrue(var_smfirst)) {
  lineNumber = 1321
  lineNumber = 1320
  var bool4286 = new GraceBoolean(false)
  var_smfirst = bool4286;
  var if4285 = bool4286;
  } else {
  lineNumber = 1322
  var string4287 = new GraceString(",");
  lineNumber = 1323
  var call4288 = callmethod(this,"out", [1], string4287);
  var if4285 = call4288;
}
  lineNumber = 1327
  lineNumber = 1324
  if (Grace_isTrue(var_m2)) {
  lineNumber = 1325
  var string4290 = new GraceString("i1 1");
  lineNumber = 1326
  var call4291 = callmethod(this,"out", [1], string4290);
  var if4289 = call4291;
  } else {
  lineNumber = 1327
  var string4292 = new GraceString("i1 0");
  lineNumber = 1328
  var call4293 = callmethod(this,"out", [1], string4292);
  var if4289 = call4293;
}
  return if4289;
};
  var call4294 = callmethod(Grace_prelude,"for()do", [1, 1], var_m1, block4284);
  return call4294;
};
  var call4295 = callmethod(Grace_prelude,"for()do", [1, 1], var_mtx, block4283);
  lineNumber = 1331
  var string4296 = new GraceString("]");
  lineNumber = 1332
  var call4297 = callmethod(this,"out", [1], string4296);
  var string4298 = new GraceString("@.typecount = private unnamed_addr constant i16 ");
  lineNumber = 1
  lineNumber = 1332
  var call4299 = callmethod(var_mtx,"size", [0]);
  var opresult4301 = callmethod(string4298, "++", [1], call4299);
  var string4302 = new GraceString("");
  var opresult4304 = callmethod(opresult4301, "++", [1], string4302);
  lineNumber = 1333
  var call4305 = callmethod(this,"out", [1], opresult4304);
  var string4306 = new GraceString("define private i1 @checksub(i16 %sub, i16 %sup) {");
  lineNumber = 1334
  var call4307 = callmethod(this,"out", [1], string4306);
  var string4308 = new GraceString("entry:");
  lineNumber = 1335
  var call4309 = callmethod(this,"out", [1], string4308);
  var string4310 = new GraceString("  %tc = load i16* @.typecount");
  lineNumber = 1336
  var call4311 = callmethod(this,"out", [1], string4310);
  var string4312 = new GraceString("  %st = load [");
  lineNumber = 1
  lineNumber = 1336
  var call4313 = callmethod(var_mtx,"size", [0]);
  lineNumber = 1
  lineNumber = 1336
  var call4314 = callmethod(var_mtx,"size", [0]);
  var prod4316 = callmethod(call4313, "*", [1], call4314);
  var opresult4318 = callmethod(string4312, "++", [1], prod4316);
  var string4319 = new GraceString(" x i1]* @.subtypes");
  var opresult4321 = callmethod(opresult4318, "++", [1], string4319);
  lineNumber = 1337
  var call4322 = callmethod(this,"out", [1], opresult4321);
  var string4323 = new GraceString("  %ridx = mul i16 %sub, %tc");
  lineNumber = 1338
  var call4324 = callmethod(this,"out", [1], string4323);
  var string4325 = new GraceString("  %idx = add i16 %ridx, %sup");
  lineNumber = 1339
  var call4326 = callmethod(this,"out", [1], string4325);
  var string4327 = new GraceString("  %ptr = getelementptr [");
  lineNumber = 1
  lineNumber = 1339
  var call4328 = callmethod(var_mtx,"size", [0]);
  lineNumber = 1
  lineNumber = 1339
  var call4329 = callmethod(var_mtx,"size", [0]);
  var prod4331 = callmethod(call4328, "*", [1], call4329);
  var opresult4333 = callmethod(string4327, "++", [1], prod4331);
  var string4334 = new GraceString(" x i1]* @.subtypes, i32 0, i16 %idx");
  var opresult4336 = callmethod(opresult4333, "++", [1], string4334);
  lineNumber = 1340
  var call4337 = callmethod(this,"out", [1], opresult4336);
  var string4338 = new GraceString("  %rv = load i1* %ptr");
  lineNumber = 1341
  var call4339 = callmethod(this,"out", [1], string4338);
  var string4340 = new GraceString("  ret i1 %rv");
  lineNumber = 1342
  var call4341 = callmethod(this,"out", [1], string4340);
  var string4342 = new GraceString("}");
  lineNumber = 1343
  var call4343 = callmethod(this,"out", [1], string4342);
  var string4344 = new GraceString("; gracelib");
  lineNumber = 1344
  var call4345 = callmethod(this,"out", [1], string4344);
  var string4346 = new GraceString("declare %object @alloc_obj2(i32, i32)");
  lineNumber = 1345
  var call4347 = callmethod(this,"out", [1], string4346);
  var string4348 = new GraceString("declare void @addmethod2(%object, i8*, %object(%object, i32, %object*, i32)*)");
  lineNumber = 1346
  var call4349 = callmethod(this,"out", [1], string4348);
  var string4350 = new GraceString("declare void @adddatum2(%object, %object, i32)");
  lineNumber = 1347
  var call4351 = callmethod(this,"out", [1], string4350);
  var string4352 = new GraceString("declare %object @alloc_List()");
  lineNumber = 1348
  var call4353 = callmethod(this,"out", [1], string4352);
  var string4354 = new GraceString("declare %object @alloc_Float64(double)");
  lineNumber = 1349
  var call4355 = callmethod(this,"out", [1], string4354);
  var string4356 = new GraceString("declare %object @alloc_String(i8*)");
  lineNumber = 1350
  var call4357 = callmethod(this,"out", [1], string4356);
  var string4358 = new GraceString("declare %object @alloc_Octets(i8*, i32)");
  lineNumber = 1351
  var call4359 = callmethod(this,"out", [1], string4358);
  var string4360 = new GraceString("declare %object @alloc_Boolean(i32)");
  lineNumber = 1352
  var call4361 = callmethod(this,"out", [1], string4360);
  var string4362 = new GraceString("declare %object @alloc_Undefined()");
  lineNumber = 1353
  var call4363 = callmethod(this,"out", [1], string4362);
  var string4364 = new GraceString("declare %object @alloc_none()");
  lineNumber = 1354
  var call4365 = callmethod(this,"out", [1], string4364);
  var string4366 = new GraceString("declare %object @alloc_HashMapClassObject()");
  lineNumber = 1355
  var call4367 = callmethod(this,"out", [1], string4366);
  var string4368 = new GraceString("declare %object @callmethod(%object, i8*, i32, %object*)");
  lineNumber = 1356
  var call4369 = callmethod(this,"out", [1], string4368);
  var string4370 = new GraceString("declare %object @gracelib_print(%object, i32, %object*)");
  lineNumber = 1357
  var call4371 = callmethod(this,"out", [1], string4370);
  var string4372 = new GraceString("declare %object @gracelib_readall(%object, i32, %object*)");
  lineNumber = 1358
  var call4373 = callmethod(this,"out", [1], string4372);
  var string4374 = new GraceString("declare %object @gracelib_length(%object)");
  lineNumber = 1359
  var call4375 = callmethod(this,"out", [1], string4374);
  var string4376 = new GraceString("declare void @set_type(%object, i16)");
  lineNumber = 1360
  var call4377 = callmethod(this,"out", [1], string4376);
  var string4378 = new GraceString("declare void @setclassname(%object, i8*)");
  lineNumber = 1361
  var call4379 = callmethod(this,"out", [1], string4378);
  var string4380 = new GraceString("declare void @enable_callgraph(i8*)");
  lineNumber = 1362
  var call4381 = callmethod(this,"out", [1], string4380);
  var string4382 = new GraceString("declare %object @dlmodule(i8*)");
  lineNumber = 1363
  var call4383 = callmethod(this,"out", [1], string4382);
  var string4384 = new GraceString("declare %object* @alloc_var()");
  lineNumber = 1364
  var call4385 = callmethod(this,"out", [1], string4384);
  var string4386 = new GraceString("declare void @gracelib_argv(i8**)");
  lineNumber = 1365
  var call4387 = callmethod(this,"out", [1], string4386);
  var string4388 = new GraceString("declare void @module_sys_init_argv(%object)");
  lineNumber = 1366
  var call4389 = callmethod(this,"out", [1], string4388);
  var string4390 = new GraceString("declare i1 @istrue(%object)");
  lineNumber = 1367
  var call4391 = callmethod(this,"out", [1], string4390);
  var string4392 = new GraceString("declare void @gracelib_stats()");
  lineNumber = 1368
  var call4393 = callmethod(this,"out", [1], string4392);
  var string4394 = new GraceString("declare void @initprofiling()");
  lineNumber = 1369
  var call4395 = callmethod(this,"out", [1], string4394);
  var string4396 = new GraceString("declare %object** @createclosure(i32)");
  lineNumber = 1370
  var call4397 = callmethod(this,"out", [1], string4396);
  var string4398 = new GraceString("declare void @addtoclosure(%object**, %object*)");
  lineNumber = 1371
  var call4399 = callmethod(this,"out", [1], string4398);
  var string4400 = new GraceString("declare void @addclosuremethod(%object, i8*, %object(%object,");
  lineNumber = 1372
  var call4401 = callmethod(this,"out", [1], string4400);
  var string4402 = new GraceString("    i32, %object*, %object**)*, %object**)");
  lineNumber = 1373
  var call4403 = callmethod(this,"out", [1], string4402);
  var string4404 = new GraceString("declare void @setline(i32)");
  lineNumber = 1374
  var call4405 = callmethod(this,"out", [1], string4404);
  var string4406 = new GraceString("declare void @block_return(%object, %object)");
  lineNumber = 1375
  var call4407 = callmethod(this,"out", [1], string4406);
  var string4408 = new GraceString("declare void @block_savedest(%object)");
  lineNumber = 1376
  var call4409 = callmethod(this,"out", [1], string4408);
  var string4410 = new GraceString("declare %object @process_varargs(%object*, i32, i32)");
  lineNumber = 1377
  var call4411 = callmethod(this,"out", [1], string4410);
  var string4412 = new GraceString("; libc functions");
  lineNumber = 1378
  var call4413 = callmethod(this,"out", [1], string4412);
  var string4414 = new GraceString("declare i32 @puts(i8*)");
  lineNumber = 1379
  var call4415 = callmethod(this,"out", [1], string4414);
  var string4416 = new GraceString("declare i8* @malloc(i32)");
  lineNumber = 1380
  var call4417 = callmethod(this,"out", [1], string4416);
  var string4418 = new GraceString("writing file.");
  lineNumber = 1381
  var call4419 = callmethod(this,"log_verbose", [1], string4418);
  lineNumber = 1382
  lineNumber = 1381
  lineNumber = 1382
  var block4420 = Grace_allocObject();
  block4420.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4420.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4420.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4420.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4420.receiver = this;
  block4420.className = 'block<genllvm29:1382>';
  block4420.real = function(
var_x
) {
  lineNumber = 1383
  var call4421 = callmethod(this,"outprint", [1], var_x);
  return call4421;
};
  var call4422 = callmethod(Grace_prelude,"for()do", [1, 1], var_output, block4420);
  lineNumber = 1428
  lineNumber = 1431
  lineNumber = 1385
  var string4424 = new GraceString("make");
  var opresult4426 = callmethod(var_runmode, "==", [1], string4424);
  if (Grace_isTrue(opresult4426)) {
  lineNumber = 1386
  lineNumber = 1
  lineNumber = 1386
  var call4427 = callmethod(var_outfile,"close", [0]);
  lineNumber = 1388
  lineNumber = 1387
  var string4428 = new GraceString("llvm-as -o ");
  var opresult4430 = callmethod(string4428, "++", [1], var_modname);
  var string4431 = new GraceString(".gco ");
  var opresult4433 = callmethod(opresult4430, "++", [1], string4431);
  var opresult4435 = callmethod(opresult4433, "++", [1], var_modname);
  var string4436 = new GraceString(".ll");
  var opresult4438 = callmethod(opresult4435, "++", [1], string4436);
  var_cmd = opresult4438;
  lineNumber = 1390
  lineNumber = 1388
  lineNumber = 1
  lineNumber = 1388
  var call4440 = callmethod(var_io,"system", [1], var_cmd);
  var call4441 = callmethod(call4440,"not", [0]);
  if (Grace_isTrue(call4441)) {
  lineNumber = 1389
  var string4442 = new GraceString("Failed LLVM assembling");
  lineNumber = 1390
  lineNumber = 1
  lineNumber = 1389
  var call4443 = callmethod(var_io,"error", [0]);
  var call4444 = callmethod(call4443,"write", [1], string4442);
  lineNumber = 1390
  var string4445 = new GraceString("Fatal.");
  lineNumber = 1391
  var call4446 = callmethod(this,"raise", [1], string4445);
  var if4439 = call4446;
}
  lineNumber = 1392
  var string4447 = new GraceString("linking.");
  lineNumber = 1393
  var call4448 = callmethod(this,"log_verbose", [1], string4447);
  lineNumber = 1394
  lineNumber = 1393
  var string4449 = new GraceString("llvm-link -o ");
  var opresult4451 = callmethod(string4449, "++", [1], var_modname);
  var string4452 = new GraceString(".bc ");
  var opresult4454 = callmethod(opresult4451, "++", [1], string4452);
  var_cmd = opresult4454;
  lineNumber = 1394
  var string4455 = new GraceString(".o");
  var string4456 = new GraceString(".bc");
  var call4457 = callmethod(var_gracelibPath,"replace()with", [1, 1], string4455, string4456);
  var opresult4459 = callmethod(var_cmd, "++", [1], call4457);
  var string4460 = new GraceString(" ");
  var opresult4462 = callmethod(opresult4459, "++", [1], string4460);
  var_cmd = opresult4462;
  lineNumber = 1396
  lineNumber = 1395
  var opresult4464 = callmethod(var_cmd, "++", [1], var_modname);
  var string4465 = new GraceString(".gco");
  var opresult4467 = callmethod(opresult4464, "++", [1], string4465);
  var_cmd = opresult4467;
  lineNumber = 1398
  lineNumber = 1396
  lineNumber = 1398
  var block4468 = Grace_allocObject();
  block4468.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4468.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4468.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4468.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4468.receiver = this;
  block4468.className = 'block<genllvm29:1398>';
  block4468.real = function(
var_fn
) {
  lineNumber = 1397
  var string4469 = new GraceString(" ");
  var opresult4471 = callmethod(var_cmd, "++", [1], string4469);
  var opresult4473 = callmethod(opresult4471, "++", [1], var_fn);
  var_cmd = opresult4473;
  return opresult4473;
};
  var call4474 = callmethod(Grace_prelude,"for()do", [1, 1], var_linkfiles, block4468);
  lineNumber = 1401
  lineNumber = 1399
  lineNumber = 1
  lineNumber = 1399
  var call4476 = callmethod(var_io,"system", [1], var_cmd);
  var call4477 = callmethod(call4476,"not", [0]);
  if (Grace_isTrue(call4477)) {
  lineNumber = 1400
  var string4478 = new GraceString("Failed LLVM linking");
  lineNumber = 1401
  lineNumber = 1
  lineNumber = 1400
  var call4479 = callmethod(var_io,"error", [0]);
  var call4480 = callmethod(call4479,"write", [1], string4478);
  lineNumber = 1401
  var string4481 = new GraceString("Fatal.");
  lineNumber = 1402
  var call4482 = callmethod(this,"raise", [1], string4481);
  var if4475 = call4482;
}
  lineNumber = 1422
  lineNumber = 1425
  lineNumber = 1403
  var string4484 = new GraceString("native");
  var opresult4486 = callmethod(var_buildtype, "==", [1], string4484);
  lineNumber = 1425
  lineNumber = 1
  lineNumber = 1425
  lineNumber = 1
  lineNumber = 1403
  var call4487 = callmethod(var_util,"noexec", [0]);
  var call4488 = callmethod(call4487,"not", [0]);
  var opresult4490 = callmethod(opresult4486, "&", [1], call4488);
  if (Grace_isTrue(opresult4490)) {
  lineNumber = 1404
  var string4491 = new GraceString("compiling to native.");
  lineNumber = 1405
  var call4492 = callmethod(this,"log_verbose", [1], string4491);
  lineNumber = 1407
  lineNumber = 1405
  var string4493 = new GraceString("llc -o ");
  var opresult4495 = callmethod(string4493, "++", [1], var_modname);
  var string4496 = new GraceString(".s -relocation-model=pic ");
  var opresult4498 = callmethod(opresult4495, "++", [1], string4496);
  var opresult4500 = callmethod(opresult4498, "++", [1], var_modname);
  lineNumber = 1406
  var string4501 = new GraceString(".bc");
  var opresult4503 = callmethod(opresult4500, "++", [1], string4501);
  var_cmd = opresult4503;
  lineNumber = 1409
  lineNumber = 1407
  lineNumber = 1
  lineNumber = 1407
  var call4505 = callmethod(var_io,"system", [1], var_cmd);
  var call4506 = callmethod(call4505,"not", [0]);
  if (Grace_isTrue(call4506)) {
  lineNumber = 1408
  var string4507 = new GraceString("failed native assembly compilation");
  lineNumber = 1409
  lineNumber = 1
  lineNumber = 1408
  var call4508 = callmethod(var_io,"error", [0]);
  var call4509 = callmethod(call4508,"write", [1], string4507);
  lineNumber = 1409
  var string4510 = new GraceString("fatal.");
  lineNumber = 1410
  var call4511 = callmethod(this,"raise", [1], string4510);
  var if4504 = call4511;
}
  lineNumber = 1413
  lineNumber = 1412
  var string4512 = new GraceString("ld -ldl -o /dev/null 2>/dev/null");
  var_cmd = string4512;
  lineNumber = 1419
  lineNumber = 1413
  var call4514 = callmethod(var_io,"system", [1], var_cmd);
  if (Grace_isTrue(call4514)) {
  lineNumber = 1416
  lineNumber = 1414
  var string4515 = new GraceString("gcc -fPIC -Wl,--export-dynamic -o ");
  var opresult4517 = callmethod(string4515, "++", [1], var_modname);
  var string4518 = new GraceString(" -ldl ");
  var opresult4520 = callmethod(opresult4517, "++", [1], string4518);
  lineNumber = 1415
  var opresult4522 = callmethod(opresult4520, "++", [1], var_modname);
  var string4523 = new GraceString(".s");
  var opresult4525 = callmethod(opresult4522, "++", [1], string4523);
  var_cmd = opresult4525;
  var if4513 = opresult4525;
  } else {
  lineNumber = 1419
  lineNumber = 1417
  var string4526 = new GraceString("gcc -fPIC -Wl,--export-dynamic -o ");
  var opresult4528 = callmethod(string4526, "++", [1], var_modname);
  var string4529 = new GraceString(" ");
  var opresult4531 = callmethod(opresult4528, "++", [1], string4529);
  lineNumber = 1418
  var opresult4533 = callmethod(opresult4531, "++", [1], var_modname);
  var string4534 = new GraceString(".s");
  var opresult4536 = callmethod(opresult4533, "++", [1], string4534);
  var_cmd = opresult4536;
  var if4513 = opresult4536;
}
  lineNumber = 1422
  lineNumber = 1420
  lineNumber = 1
  lineNumber = 1420
  var call4538 = callmethod(var_io,"system", [1], var_cmd);
  var call4539 = callmethod(call4538,"not", [0]);
  if (Grace_isTrue(call4539)) {
  lineNumber = 1421
  var string4540 = new GraceString("failed native assembly compilation");
  lineNumber = 1422
  lineNumber = 1
  lineNumber = 1421
  var call4541 = callmethod(var_io,"error", [0]);
  var call4542 = callmethod(call4541,"write", [1], string4540);
  lineNumber = 1422
  var string4543 = new GraceString("fatal.");
  lineNumber = 1423
  var call4544 = callmethod(this,"raise", [1], string4543);
  var if4537 = call4544;
}
  var if4483 = if4537;
}
  lineNumber = 1425
  var string4545 = new GraceString("done.");
  lineNumber = 1426
  var call4546 = callmethod(this,"log_verbose", [1], string4545);
  lineNumber = 1428
  lineNumber = 1430
  lineNumber = 1426
  var string4548 = new GraceString("run");
  var opresult4550 = callmethod(var_buildtype, "==", [1], string4548);
  if (Grace_isTrue(opresult4550)) {
  lineNumber = 1428
  lineNumber = 1427
  var string4551 = new GraceString("lli ./");
  var opresult4553 = callmethod(string4551, "++", [1], var_modname);
  var string4554 = new GraceString(".bc");
  var opresult4556 = callmethod(opresult4553, "++", [1], string4554);
  var_cmd = opresult4556;
  lineNumber = 1428
  var call4557 = callmethod(var_io,"system", [1], var_cmd);
  var if4547 = call4557;
}
  var if4423 = if4547;
}
  return if4423
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compile"] = func3757;
  return this;
}
