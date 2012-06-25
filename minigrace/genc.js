function gracecode_genc() {
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

  var var_globals = array11;
  lineNumber = 1
var func12 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 19
  return var_globals
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["globals"] = func12;
  lineNumber = 1
var func13 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_globals = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["globals:="] = func13;
  lineNumber = 21
  var array14 = new GraceList([
]);

  var var_output = array14;
  lineNumber = 1
var func15 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 20
  return var_output
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["output"] = func15;
  lineNumber = 1
var func16 = function(argcv) {
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
  this.methods["output:="] = func16;
  lineNumber = 22
  var array17 = new GraceList([
]);

  var var_usedvars = array17;
  lineNumber = 1
var func18 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 21
  return var_usedvars
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["usedvars"] = func18;
  lineNumber = 1
var func19 = function(argcv) {
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
  this.methods["usedvars:="] = func19;
  lineNumber = 23
  var array20 = new GraceList([
]);

  var var_declaredvars = array20;
  lineNumber = 1
var func21 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 22
  return var_declaredvars
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["declaredvars"] = func21;
  lineNumber = 1
var func22 = function(argcv) {
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
  this.methods["declaredvars:="] = func22;
  lineNumber = 24
  lineNumber = 23
  var string23 = new GraceString("entry");
  var var_bblock = string23;
  lineNumber = 1
var func24 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 23
  return var_bblock
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["bblock"] = func24;
  lineNumber = 1
var func25 = function(argcv) {
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
  this.methods["bblock:="] = func25;
  lineNumber = 25
  lineNumber = 24
  var var_linenum = new GraceNum(1);
  lineNumber = 1
var func26 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 24
  return var_linenum
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["linenum"] = func26;
  lineNumber = 1
var func27 = function(argcv) {
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
  this.methods["linenum:="] = func27;
  lineNumber = 26
  var array28 = new GraceList([
]);

  var var_modules = array28;
  lineNumber = 1
var func29 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 25
  return var_modules
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["modules"] = func29;
  lineNumber = 1
var func30 = function(argcv) {
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
  this.methods["modules:="] = func30;
  lineNumber = 27
  var array31 = new GraceList([
]);

  var var_staticmodules = array31;
  lineNumber = 1
var func32 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 26
  return var_staticmodules
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["staticmodules"] = func32;
  lineNumber = 1
var func33 = function(argcv) {
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
  this.methods["staticmodules:="] = func33;
  lineNumber = 28
  var array34 = new GraceList([
]);

  var var_values = array34;
  lineNumber = 1
var func35 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 27
  return var_values
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["values"] = func35;
  lineNumber = 1
var func36 = function(argcv) {
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
  this.methods["values:="] = func36;
  lineNumber = 29
  var var_outfile;
  lineNumber = 1
var func37 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 28
  return var_outfile
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outfile"] = func37;
  lineNumber = 1
var func38 = function(argcv) {
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
  this.methods["outfile:="] = func38;
  lineNumber = 30
  lineNumber = 29
  var string39 = new GraceString("main");
  var var_modname = string39;
  lineNumber = 1
var func40 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 29
  return var_modname
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["modname"] = func40;
  lineNumber = 1
var func41 = function(argcv) {
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
  this.methods["modname:="] = func41;
  lineNumber = 31
  lineNumber = 30
  var string42 = new GraceString("main");
  var var_escmodname = string42;
  lineNumber = 1
var func43 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 30
  return var_escmodname
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["escmodname"] = func43;
  lineNumber = 1
var func44 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_escmodname = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["escmodname:="] = func44;
  lineNumber = 32
  lineNumber = 31
  var string45 = new GraceString("build");
  var var_runmode = string45;
  lineNumber = 1
var func46 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 31
  return var_runmode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["runmode"] = func46;
  lineNumber = 1
var func47 = function(argcv) {
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
  this.methods["runmode:="] = func47;
  lineNumber = 33
  lineNumber = 32
  var string48 = new GraceString("bc");
  var var_buildtype = string48;
  lineNumber = 1
var func49 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 32
  return var_buildtype
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["buildtype"] = func49;
  lineNumber = 1
var func50 = function(argcv) {
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
  this.methods["buildtype:="] = func50;
  lineNumber = 34
  lineNumber = 33
  var string51 = new GraceString("gracelib.o");
  var var_gracelibPath = string51;
  lineNumber = 1
var func52 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 33
  return var_gracelibPath
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["gracelibPath"] = func52;
  lineNumber = 1
var func53 = function(argcv) {
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
  this.methods["gracelibPath:="] = func53;
  lineNumber = 35
  lineNumber = 34
  var bool54 = new GraceBoolean(false)
  var var_inBlock = bool54;
  lineNumber = 1
var func55 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 34
  return var_inBlock
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["inBlock"] = func55;
  lineNumber = 1
var func56 = function(argcv) {
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
  this.methods["inBlock:="] = func56;
  lineNumber = 36
  lineNumber = 35
  var var_paramsUsed = new GraceNum(1);
  lineNumber = 1
var func57 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 35
  return var_paramsUsed
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["paramsUsed"] = func57;
  lineNumber = 1
var func58 = function(argcv) {
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
  this.methods["paramsUsed:="] = func58;
  lineNumber = 37
  lineNumber = 36
  var var_partsUsed = new GraceNum(1);
  lineNumber = 1
var func59 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 36
  return var_partsUsed
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["partsUsed"] = func59;
  lineNumber = 1
var func60 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_partsUsed = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["partsUsed:="] = func60;
  lineNumber = 38
  lineNumber = 37
  var var_topLevelMethodPos = new GraceNum(1);
  lineNumber = 1
var func61 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 37
  return var_topLevelMethodPos
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["topLevelMethodPos"] = func61;
  lineNumber = 1
var func62 = function(argcv) {
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
  this.methods["topLevelMethodPos:="] = func62;
  lineNumber = 39
  var array63 = new GraceList([
]);

  var var_topOutput = array63;
  lineNumber = 1
var func64 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 38
  return var_topOutput
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["topOutput"] = func64;
  lineNumber = 1
var func65 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_topOutput = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["topOutput:="] = func65;
  lineNumber = 40
  lineNumber = 39
  var var_bottomOutput = var_output;
  lineNumber = 1
var func66 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 39
  return var_bottomOutput
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["bottomOutput"] = func66;
  lineNumber = 1
var func67 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_bottomOutput = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["bottomOutput:="] = func67;
  lineNumber = 41
  lineNumber = 40
  var var_compilationDepth = new GraceNum(0);
  lineNumber = 1
var func68 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 40
  return var_compilationDepth
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilationDepth"] = func68;
  lineNumber = 1
var func69 = function(argcv) {
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
  this.methods["compilationDepth:="] = func69;
  lineNumber = 43
  lineNumber = 1
  lineNumber = 41
  var call70 = callmethod(var_HashMap,"new", [0]);
  var var_topLevelTypes = call70;
  lineNumber = 1
var func71 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 41
  return var_topLevelTypes
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["topLevelTypes"] = func71;
  lineNumber = 44
var func72 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var call73 = callmethod(var_output,"push", [1], var_s);
  return call73
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["out"] = func72;
  lineNumber = 47
var func74 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var call75 = callmethod(var_util,"outprint", [1], var_s);
  return call75
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outprint"] = func74;
  lineNumber = 51
var func76 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 50
  var_output = var_topOutput;
  return var_topOutput
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outswitchup"] = func76;
  lineNumber = 54
var func77 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 53
  var_output = var_bottomOutput;
  return var_bottomOutput
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outswitchdown"] = func77;
  lineNumber = 56
var func78 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var call79 = callmethod(var_util,"log_verbose", [1], var_s);
  return call79
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["log_verbose"] = func78;
  lineNumber = 62
var func80 = function(argcv) {
  var curarg = 1;
  var var_n = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 64
  lineNumber = 1
  lineNumber = 59
  var call82 = callmethod(var_n,"kind", [0]);
  var string83 = new GraceString("if");
  var opresult85 = callmethod(call82, "==", [1], string83);
  if (Grace_isTrue(opresult85)) {
  lineNumber = 60
  lineNumber = 1
  lineNumber = 60
  var call86 = callmethod(var_n,"thenblock", [0]);
  lineNumber = 61
  var call87 = callmethod(this,"countbindings", [1], call86);
  lineNumber = 60
  lineNumber = 1
  lineNumber = 60
  var call88 = callmethod(var_n,"elseblock", [0]);
  var call89 = callmethod(this,"countbindings", [1], call88);
  var opresult91 = callmethod(call87, "+", [1], call89);
  var if81 = opresult91;
  } else {
  lineNumber = 62
  var if81 = new GraceNum(0);
}
  return if81
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["countnodebindings"] = func80;
  lineNumber = 75
var func92 = function(argcv) {
  var curarg = 1;
  var var_l = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 67
  lineNumber = 66
  var var_numslots = new GraceNum(0);
  lineNumber = 72
  lineNumber = 67
  lineNumber = 72
  var block93 = Grace_allocObject();
  block93.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block93.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block93.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block93.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block93.receiver = this;
  block93.className = 'block<genc:72>';
  block93.real = function(
var_n
) {
  lineNumber = 74
  lineNumber = 1
  lineNumber = 68
  var call95 = callmethod(var_n,"kind", [0]);
  var string96 = new GraceString("vardec");
  var opresult98 = callmethod(call95, "==", [1], string96);
  lineNumber = 74
  lineNumber = 1
  lineNumber = 68
  var call99 = callmethod(var_n,"kind", [0]);
  var string100 = new GraceString("defdec");
  var opresult102 = callmethod(call99, "==", [1], string100);
  var opresult104 = callmethod(opresult98, "|", [1], opresult102);
  lineNumber = 74
  lineNumber = 1
  lineNumber = 69
  var call105 = callmethod(var_n,"kind", [0]);
  var string106 = new GraceString("class");
  var opresult108 = callmethod(call105, "==", [1], string106);
  var opresult110 = callmethod(opresult104, "|", [1], opresult108);
  lineNumber = 74
  lineNumber = 1
  lineNumber = 69
  var call111 = callmethod(var_n,"kind", [0]);
  var string112 = new GraceString("type");
  var opresult114 = callmethod(call111, "==", [1], string112);
  var opresult116 = callmethod(opresult110, "|", [1], opresult114);
  if (Grace_isTrue(opresult116)) {
  lineNumber = 71
  lineNumber = 70
  var opresult118 = callmethod(var_numslots, "+", [1], new GraceNum(1));
  var_numslots = opresult118;
  var if94 = opresult118;
  } else {
  lineNumber = 72
  lineNumber = 74
  lineNumber = 1
  lineNumber = 71
  var call120 = callmethod(var_n,"kind", [0]);
  var string121 = new GraceString("if");
  var opresult123 = callmethod(call120, "==", [1], string121);
  if (Grace_isTrue(opresult123)) {
  lineNumber = 72
  lineNumber = 73
  var call124 = callmethod(this,"countnodebindings", [1], var_n);
  var opresult126 = callmethod(var_numslots, "+", [1], call124);
  var_numslots = opresult126;
  var if119 = opresult126;
}
  var if94 = if119;
}
  return if94;
};
  var call127 = callmethod(Grace_prelude,"for()do", [1, 1], var_l, block93);
  lineNumber = 75
  return var_numslots
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["countbindings"] = func92;
  lineNumber = 110
var func128 = function(argcv) {
  var curarg = 1;
  var var_l = arguments[curarg];
  curarg++;
  var var_slot = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 105
  lineNumber = 78
  lineNumber = 105
  var block129 = Grace_allocObject();
  block129.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block129.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block129.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block129.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block129.receiver = this;
  block129.className = 'block<genc:105>';
  block129.real = function(
var_n
) {
  lineNumber = 109
  lineNumber = 1
  lineNumber = 79
  var call131 = callmethod(var_n,"kind", [0]);
  var string132 = new GraceString("vardec");
  var opresult134 = callmethod(call131, "==", [1], string132);
  lineNumber = 109
  lineNumber = 1
  lineNumber = 79
  var call135 = callmethod(var_n,"kind", [0]);
  var string136 = new GraceString("defdec");
  var opresult138 = callmethod(call135, "==", [1], string136);
  var opresult140 = callmethod(opresult134, "|", [1], opresult138);
  lineNumber = 109
  lineNumber = 1
  lineNumber = 80
  var call141 = callmethod(var_n,"kind", [0]);
  var string142 = new GraceString("class");
  var opresult144 = callmethod(call141, "==", [1], string142);
  var opresult146 = callmethod(opresult140, "|", [1], opresult144);
  if (Grace_isTrue(opresult146)) {
  lineNumber = 82
  lineNumber = 81
  var string147 = new GraceString("");
  var var_tnm = string147;
  lineNumber = 85
  lineNumber = 87
  lineNumber = 1
  lineNumber = 87
  lineNumber = 1
  lineNumber = 82
  var call149 = callmethod(var_n,"name", [0]);
  var call150 = callmethod(call149,"kind", [0]);
  var string151 = new GraceString("generic");
  var opresult153 = callmethod(call150, "==", [1], string151);
  if (Grace_isTrue(opresult153)) {
  lineNumber = 83
  lineNumber = 1
  lineNumber = 83
  lineNumber = 1
  lineNumber = 83
  lineNumber = 1
  lineNumber = 83
  var call154 = callmethod(var_n,"name", [0]);
  var call155 = callmethod(call154,"value", [0]);
  var call156 = callmethod(call155,"value", [0]);
  lineNumber = 84
  var call157 = callmethod(this,"escapeident", [1], call156);
  var_tnm = call157;
  var if148 = call157;
  } else {
  lineNumber = 85
  lineNumber = 1
  lineNumber = 85
  lineNumber = 1
  lineNumber = 85
  var call158 = callmethod(var_n,"name", [0]);
  var call159 = callmethod(call158,"value", [0]);
  lineNumber = 86
  var call160 = callmethod(this,"escapeident", [1], call159);
  var_tnm = call160;
  var if148 = call160;
}
  lineNumber = 91
  lineNumber = 87
  var call162 = callmethod(var_declaredvars,"contains", [1], var_tnm);
  var call163 = callmethod(call162,"prefix!", [0]);
  if (Grace_isTrue(call163)) {
  lineNumber = 88
  var call164 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 89
  var string165 = new GraceString("  Object *var_");
  var opresult167 = callmethod(string165, "++", [1], var_tnm);
  var string168 = new GraceString(" = &(stackframe->slots[");
  var opresult170 = callmethod(opresult167, "++", [1], string168);
  var opresult172 = callmethod(opresult170, "++", [1], var_slot);
  var string173 = new GraceString("]);");
  var opresult175 = callmethod(opresult172, "++", [1], string173);
  lineNumber = 90
  var call176 = callmethod(this,"out", [1], opresult175);
  lineNumber = 91
  lineNumber = 90
  var opresult178 = callmethod(var_slot, "+", [1], new GraceNum(1));
  var_slot = opresult178;
  var if161 = opresult178;
}
  var if130 = if161;
  } else {
  lineNumber = 105
  lineNumber = 108
  lineNumber = 1
  lineNumber = 93
  var call180 = callmethod(var_n,"kind", [0]);
  var string181 = new GraceString("if");
  var opresult183 = callmethod(call180, "==", [1], string181);
  if (Grace_isTrue(opresult183)) {
  lineNumber = 94
  lineNumber = 1
  lineNumber = 94
  var call184 = callmethod(var_n,"thenblock", [0]);
  lineNumber = 95
  var call185 = callmethod(this,"definebindings", [2], call184, var_slot);
  var_slot = call185;
  lineNumber = 1
  lineNumber = 95
  var call186 = callmethod(var_n,"elseblock", [0]);
  lineNumber = 96
  var call187 = callmethod(this,"definebindings", [2], call186, var_slot);
  var_slot = call187;
  lineNumber = 97
  lineNumber = 1
  lineNumber = 96
  var bool188 = new GraceBoolean(true)
  var call189 = callmethod(var_n,"handledIdentifiers:=", [1], bool188);
  var if179 = call189;
  } else {
  lineNumber = 105
  lineNumber = 107
  lineNumber = 1
  lineNumber = 98
  var call191 = callmethod(var_n,"kind", [0]);
  var string192 = new GraceString("type");
  var opresult194 = callmethod(call191, "==", [1], string192);
  if (Grace_isTrue(opresult194)) {
  lineNumber = 99
  lineNumber = 1
  lineNumber = 99
  var call195 = callmethod(var_n,"value", [0]);
  lineNumber = 100
  var call196 = callmethod(this,"escapeident", [1], call195);
  var var_tnm = call196;
  lineNumber = 105
  lineNumber = 100
  var call198 = callmethod(var_declaredvars,"contains", [1], var_tnm);
  var call199 = callmethod(call198,"prefix!", [0]);
  if (Grace_isTrue(call199)) {
  lineNumber = 101
  var call200 = callmethod(var_declaredvars,"push", [1], var_tnm);
  lineNumber = 103
  lineNumber = 102
  var string201 = new GraceString("  Object *var_");
  var opresult203 = callmethod(string201, "++", [1], var_tnm);
  var string204 = new GraceString(" = ");
  var opresult206 = callmethod(opresult203, "++", [1], string204);
  lineNumber = 103
  var string207 = new GraceString("&(stackframe->slots[");
  var opresult209 = callmethod(string207, "++", [1], var_slot);
  var string210 = new GraceString("]);");
  var opresult212 = callmethod(opresult209, "++", [1], string210);
  var opresult214 = callmethod(opresult206, "++", [1], opresult212);
  lineNumber = 104
  var call215 = callmethod(this,"out", [1], opresult214);
  lineNumber = 105
  lineNumber = 104
  var opresult217 = callmethod(var_slot, "+", [1], new GraceNum(1));
  var_slot = opresult217;
  var if197 = opresult217;
}
  var if190 = if197;
}
  var if179 = if190;
}
  var if130 = if179;
}
  return if130;
};
  var call218 = callmethod(Grace_prelude,"for()do", [1, 1], var_l, block129);
  lineNumber = 110
  return var_slot
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["definebindings"] = func128;
  lineNumber = 114
var func219 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 113
  var string220 = new GraceString("%");
  var opresult222 = callmethod(string220, "++", [1], var_s);
  var_bblock = opresult222;
  lineNumber = 114
  var string223 = new GraceString(":");
  var opresult225 = callmethod(var_s, "++", [1], string223);
  lineNumber = 115
  var call226 = callmethod(this,"out", [1], opresult225);
  return call226
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["beginblock"] = func219;
  lineNumber = 129
var func227 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 118
  lineNumber = 117
  var string228 = new GraceString("");
  var var_ns = string228;
  lineNumber = 127
  lineNumber = 118
  lineNumber = 127
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
  block229.className = 'block<genc:127>';
  block229.real = function(
var_c
) {
  lineNumber = 120
  lineNumber = 1
  lineNumber = 119
  var call230 = callmethod(var_c,"ord", [0]);
  var var_o = call230;
  lineNumber = 127
  lineNumber = 128
  lineNumber = 120
  var opresult233 = callmethod(var_o, ">=", [1], new GraceNum(65));
  lineNumber = 128
  lineNumber = 120
  var opresult235 = callmethod(var_o, "<=", [1], new GraceNum(90));
  var opresult237 = callmethod(opresult233, "&", [1], opresult235);
  lineNumber = 128
  lineNumber = 121
  var opresult239 = callmethod(var_o, ">=", [1], new GraceNum(97));
  lineNumber = 128
  lineNumber = 121
  var opresult241 = callmethod(var_o, "<=", [1], new GraceNum(122));
  var opresult243 = callmethod(opresult239, "&", [1], opresult241);
  var opresult245 = callmethod(opresult237, "|", [1], opresult243);
  lineNumber = 128
  lineNumber = 122
  var opresult247 = callmethod(var_o, ">=", [1], new GraceNum(48));
  lineNumber = 128
  lineNumber = 122
  var opresult249 = callmethod(var_o, "<=", [1], new GraceNum(57));
  var opresult251 = callmethod(opresult247, "&", [1], opresult249);
  var opresult253 = callmethod(opresult245, "|", [1], opresult251);
  lineNumber = 128
  lineNumber = 123
  var opresult255 = callmethod(var_o, "==", [1], new GraceNum(95));
  var opresult257 = callmethod(opresult253, "|", [1], opresult255);
  if (Grace_isTrue(opresult257)) {
  lineNumber = 125
  lineNumber = 124
  var opresult259 = callmethod(var_ns, "++", [1], var_c);
  var_ns = opresult259;
  var if231 = opresult259;
  } else {
  lineNumber = 127
  lineNumber = 126
  lineNumber = 127
  lineNumber = 126
  var string260 = new GraceString("_");
  var opresult262 = callmethod(string260, "++", [1], var_o);
  var string263 = new GraceString("_");
  var opresult265 = callmethod(opresult262, "++", [1], string263);
  var opresult267 = callmethod(var_ns, "++", [1], opresult265);
  var_ns = opresult267;
  var if231 = opresult267;
}
  return if231;
};
  var call268 = callmethod(Grace_prelude,"for()do", [1, 1], var_s, block229);
  lineNumber = 129
  return var_ns
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["escapeident"] = func227;
  lineNumber = 155
var func269 = function(argcv) {
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 133
  lineNumber = 132
  var string270 = new GraceString("");
  var var_ns = string270;
  lineNumber = 134
  lineNumber = 133
  var var_cd = new GraceNum(0);
  lineNumber = 135
  lineNumber = 134
  var bool271 = new GraceBoolean(false)
  var var_ls = bool271;
  lineNumber = 153
  lineNumber = 135
  lineNumber = 1
  lineNumber = 135
  var call272 = callmethod(var_s,"_escape", [0]);
  lineNumber = 153
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
  block273.className = 'block<genc:153>';
  block273.real = function(
var_c
) {
  lineNumber = 147
  lineNumber = 148
  lineNumber = 136
  lineNumber = 148
  lineNumber = 136
  var string275 = new GraceString("\\");
  var opresult277 = callmethod(var_c, "==", [1], string275);
  var opresult279 = callmethod(var_ls, "&", [1], opresult277);
  if (Grace_isTrue(opresult279)) {
  lineNumber = 138
  lineNumber = 137
  var bool280 = new GraceBoolean(false)
  var_ls = bool280;
  lineNumber = 139
  lineNumber = 138
  var string281 = new GraceString("\\\\");
  var opresult283 = callmethod(var_ns, "++", [1], string281);
  var_ns = opresult283;
  var if274 = opresult283;
  } else {
  lineNumber = 147
  lineNumber = 141
  lineNumber = 139
  var string285 = new GraceString("\\");
  var opresult287 = callmethod(var_c, "==", [1], string285);
  if (Grace_isTrue(opresult287)) {
  lineNumber = 141
  lineNumber = 140
  var bool288 = new GraceBoolean(true)
  var_ls = bool288;
  var if284 = bool288;
  } else {
  lineNumber = 147
  lineNumber = 141
  if (Grace_isTrue(var_ls)) {
  lineNumber = 143
  lineNumber = 142
  var string290 = new GraceString("\"\"\\x");
  var opresult292 = callmethod(var_ns, "++", [1], string290);
  var opresult294 = callmethod(opresult292, "++", [1], var_c);
  var_ns = opresult294;
  lineNumber = 144
  lineNumber = 143
  var bool295 = new GraceBoolean(false)
  var_ls = bool295;
  lineNumber = 145
  lineNumber = 144
  var_cd = new GraceNum(2);
  var if289 = new GraceNum(2);
  } else {
  lineNumber = 147
  lineNumber = 146
  var opresult297 = callmethod(var_ns, "++", [1], var_c);
  var_ns = opresult297;
  var if289 = opresult297;
}
  var if284 = if289;
}
  var if274 = if284;
}
  lineNumber = 153
  lineNumber = 154
  lineNumber = 148
  var opresult300 = callmethod(var_cd, "==", [1], new GraceNum(1));
  if (Grace_isTrue(opresult300)) {
  lineNumber = 150
  lineNumber = 149
  var string301 = new GraceString("\"\"");
  var opresult303 = callmethod(var_ns, "++", [1], string301);
  var_ns = opresult303;
  lineNumber = 151
  lineNumber = 150
  var_cd = new GraceNum(0);
  var if298 = new GraceNum(0);
  } else {
  lineNumber = 153
  lineNumber = 154
  lineNumber = 151
  var opresult306 = callmethod(var_cd, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult306)) {
  lineNumber = 153
  lineNumber = 152
  var diff308 = callmethod(var_cd, "-", [1], new GraceNum(1));
  var_cd = diff308;
  var if304 = diff308;
}
  var if298 = if304;
}
  return if298;
};
  var call309 = callmethod(Grace_prelude,"for()do", [1, 1], call272, block273);
  lineNumber = 155
  return var_ns
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["escapestring2"] = func269;
  lineNumber = 173
var func310 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 159
  lineNumber = 158
  var var_myc = var_auto__95__count;
  lineNumber = 160
  lineNumber = 159
  var opresult312 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult312;
  lineNumber = 161
  var var_r;
  var string313 = new GraceString("  Object array");
  var opresult315 = callmethod(string313, "++", [1], var_myc);
  var string316 = new GraceString(" = alloc_List();");
  var opresult318 = callmethod(opresult315, "++", [1], string316);
  lineNumber = 162
  var call319 = callmethod(this,"out", [1], opresult318);
  var string320 = new GraceString("  gc_pause();");
  lineNumber = 163
  var call321 = callmethod(this,"out", [1], string320);
  lineNumber = 164
  lineNumber = 163
  var var_i = new GraceNum(0);
  lineNumber = 170
  lineNumber = 164
  lineNumber = 1
  lineNumber = 164
  var call322 = callmethod(var_o,"value", [0]);
  lineNumber = 170
  var block323 = Grace_allocObject();
  block323.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block323.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block323.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block323.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block323.receiver = this;
  block323.className = 'block<genc:170>';
  block323.real = function(
var_a
) {
  lineNumber = 165
  lineNumber = 166
  var call324 = callmethod(this,"compilenode", [1], var_a);
  var_r = call324;
  var string325 = new GraceString("  params[0] = ");
  var opresult327 = callmethod(string325, "++", [1], var_r);
  var string328 = new GraceString(";");
  var opresult330 = callmethod(opresult327, "++", [1], string328);
  lineNumber = 167
  var call331 = callmethod(this,"out", [1], opresult330);
  var string332 = new GraceString("  partcv[0] = 1;");
  lineNumber = 168
  var call333 = callmethod(this,"out", [1], string332);
  var string334 = new GraceString("  callmethod(array");
  var opresult336 = callmethod(string334, "++", [1], var_myc);
  var string337 = new GraceString(", \"push\", 1, partcv, params);");
  var opresult339 = callmethod(opresult336, "++", [1], string337);
  lineNumber = 169
  var call340 = callmethod(this,"out", [1], opresult339);
  lineNumber = 170
  lineNumber = 169
  var opresult342 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult342;
  return opresult342;
};
  var call343 = callmethod(Grace_prelude,"for()do", [1, 1], call322, block323);
  lineNumber = 171
  var string344 = new GraceString("  gc_unpause();");
  lineNumber = 172
  var call345 = callmethod(this,"out", [1], string344);
  lineNumber = 173
  lineNumber = 1
  lineNumber = 173
  lineNumber = 172
  var string346 = new GraceString("array");
  var opresult348 = callmethod(string346, "++", [1], var_myc);
  var call349 = callmethod(var_o,"register:=", [1], opresult348);
  return call349
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilearray"] = func310;
  lineNumber = 179
var func350 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 176
  lineNumber = 1
  lineNumber = 176
  var call352 = callmethod(var_o,"value", [0]);
  lineNumber = 1
  lineNumber = 176
  var call353 = callmethod(var_ast,"callWithPart", [0]);
  var call354 = callmethod(call353,"new", [1], call352);
  var array351 = new GraceList([
call354,
]);

  lineNumber = 177
  lineNumber = 1
  lineNumber = 176
  var call355 = callmethod(var_ast,"callNode", [0]);
  var call356 = callmethod(call355,"new", [2], var_o, array351);
  var var_c = call356;
  lineNumber = 177
  lineNumber = 178
  var call357 = callmethod(this,"compilenode", [1], var_c);
  var var_r = call357;
  lineNumber = 179
  lineNumber = 1
  lineNumber = 178
  var call358 = callmethod(var_o,"register:=", [1], var_r);
  return call358
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilemember"] = func350;
  lineNumber = 194
var func359 = function(argcv) {
  var curarg = 1;
  var var_selfr = arguments[curarg];
  curarg++;
  var var_outerRef = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 182
  lineNumber = 181
  var var_myc = var_auto__95__count;
  lineNumber = 183
  lineNumber = 182
  var opresult361 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult361;
  lineNumber = 184
  lineNumber = 183
  var string362 = new GraceString("outer");
  var var_nm = string362;
  lineNumber = 184
  var call363 = Grace_length(var_nm);
  var opresult365 = callmethod(call363, "+", [1], new GraceNum(1));
  var var_len = opresult365;
  lineNumber = 185
  lineNumber = 186
  var call366 = callmethod(this,"escapestring2", [1], var_nm);
  var var_enm = call366;
  var string367 = new GraceString("// OBJECT OUTER DEC ");
  var opresult369 = callmethod(string367, "++", [1], var_enm);
  lineNumber = 187
  var call370 = callmethod(this,"out", [1], opresult369);
  var string371 = new GraceString("  adddatum2(");
  var opresult373 = callmethod(string371, "++", [1], var_selfr);
  var string374 = new GraceString(", ");
  var opresult376 = callmethod(opresult373, "++", [1], string374);
  var opresult378 = callmethod(opresult376, "++", [1], var_outerRef);
  var string379 = new GraceString(", 0);");
  var opresult381 = callmethod(opresult378, "++", [1], string379);
  lineNumber = 188
  var call382 = callmethod(this,"out", [1], opresult381);
  lineNumber = 190
  lineNumber = 188
  var string383 = new GraceString("Object reader_");
  var opresult385 = callmethod(string383, "++", [1], var_escmodname);
  var string386 = new GraceString("_");
  var opresult388 = callmethod(opresult385, "++", [1], string386);
  var opresult390 = callmethod(opresult388, "++", [1], var_enm);
  var string391 = new GraceString("_");
  var opresult393 = callmethod(opresult390, "++", [1], string391);
  var opresult395 = callmethod(opresult393, "++", [1], var_myc);
  var string396 = new GraceString("");
  var opresult398 = callmethod(opresult395, "++", [1], string396);
  lineNumber = 189
  var string399 = new GraceString("(Object self, int nparams, int *argcv, ");
  var opresult401 = callmethod(opresult398, "++", [1], string399);
  lineNumber = 190
  var string402 = new GraceString("Object* args, int flags) {");
  var opresult404 = callmethod(opresult401, "++", [1], string402);
  lineNumber = 191
  var call405 = callmethod(this,"outprint", [1], opresult404);
  var string406 = new GraceString("  struct UserObject *uo = (struct UserObject*)self;");
  lineNumber = 192
  var call407 = callmethod(this,"outprint", [1], string406);
  var string408 = new GraceString("  return uo->data[0];");
  lineNumber = 193
  var call409 = callmethod(this,"outprint", [1], string408);
  var string410 = new GraceString("}");
  lineNumber = 194
  var call411 = callmethod(this,"outprint", [1], string410);
  var string412 = new GraceString("  addmethodreal(");
  var opresult414 = callmethod(string412, "++", [1], var_selfr);
  var string415 = new GraceString(",\"outer\", &reader_");
  var opresult417 = callmethod(opresult414, "++", [1], string415);
  var opresult419 = callmethod(opresult417, "++", [1], var_escmodname);
  var string420 = new GraceString("_");
  var opresult422 = callmethod(opresult419, "++", [1], string420);
  var opresult424 = callmethod(opresult422, "++", [1], var_enm);
  var string425 = new GraceString("_");
  var opresult427 = callmethod(opresult424, "++", [1], string425);
  var opresult429 = callmethod(opresult427, "++", [1], var_myc);
  var string430 = new GraceString(");");
  var opresult432 = callmethod(opresult429, "++", [1], string430);
  lineNumber = 195
  var call433 = callmethod(this,"out", [1], opresult432);
  return call433
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjouter"] = func359;
  lineNumber = 206
var func434 = function(argcv) {
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
  lineNumber = 198
  lineNumber = 197
  var string435 = new GraceString("undefined");
  var var_val = string435;
  lineNumber = 203
  lineNumber = 206
  lineNumber = 198
  var bool437 = new GraceBoolean(false)
  lineNumber = 206
  lineNumber = 1
  lineNumber = 198
  var call438 = callmethod(var_o,"value", [0]);
  var opresult440 = callmethod(bool437, "!=", [1], call438);
  if (Grace_isTrue(opresult440)) {
  lineNumber = 203
  lineNumber = 205
  lineNumber = 1
  lineNumber = 205
  lineNumber = 1
  lineNumber = 199
  var call442 = callmethod(var_o,"value", [0]);
  var call443 = callmethod(call442,"kind", [0]);
  var string444 = new GraceString("object");
  var opresult446 = callmethod(call443, "==", [1], string444);
  if (Grace_isTrue(opresult446)) {
  lineNumber = 200
  lineNumber = 1
  lineNumber = 200
  var call447 = callmethod(var_o,"value", [0]);
  lineNumber = 201
  var call448 = callmethod(this,"compileobject", [2], call447, var_selfr);
  lineNumber = 202
  lineNumber = 1
  lineNumber = 202
  lineNumber = 1
  lineNumber = 201
  var call449 = callmethod(var_o,"value", [0]);
  var call450 = callmethod(call449,"register", [0]);
  var_val = call450;
  var if441 = call450;
  } else {
  lineNumber = 203
  lineNumber = 1
  lineNumber = 203
  var call451 = callmethod(var_o,"value", [0]);
  lineNumber = 204
  var call452 = callmethod(this,"compilenode", [1], call451);
  var_val = call452;
  var if441 = call452;
}
  var if436 = if441;
}
  lineNumber = 206
  var string453 = new GraceString("  adddatum2(");
  var opresult455 = callmethod(string453, "++", [1], var_selfr);
  var string456 = new GraceString(", ");
  var opresult458 = callmethod(opresult455, "++", [1], string456);
  var opresult460 = callmethod(opresult458, "++", [1], var_val);
  var string461 = new GraceString(", ");
  var opresult463 = callmethod(opresult460, "++", [1], string461);
  var opresult465 = callmethod(opresult463, "++", [1], var_pos);
  var string466 = new GraceString(");");
  var opresult468 = callmethod(opresult465, "++", [1], string466);
  lineNumber = 207
  var call469 = callmethod(this,"out", [1], opresult468);
  return call469
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjdefdecdata"] = func434;
  lineNumber = 221
var func470 = function(argcv) {
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
  lineNumber = 210
  lineNumber = 209
  var var_myc = var_auto__95__count;
  lineNumber = 211
  lineNumber = 210
  var opresult472 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult472;
  lineNumber = 212
  lineNumber = 1
  lineNumber = 212
  lineNumber = 1
  lineNumber = 211
  var call473 = callmethod(var_o,"name", [0]);
  var call474 = callmethod(call473,"value", [0]);
  var var_nm = call474;
  lineNumber = 212
  var call475 = Grace_length(var_nm);
  var opresult477 = callmethod(call475, "+", [1], new GraceNum(1));
  var var_len = opresult477;
  lineNumber = 213
  lineNumber = 214
  var call478 = callmethod(this,"escapestring2", [1], var_nm);
  var var_enm = call478;
  lineNumber = 215
  var call479 = callmethod(this,"escapeident", [1], var_nm);
  var var_inm = call479;
  lineNumber = 217
  lineNumber = 215
  var string480 = new GraceString("Object reader_");
  var opresult482 = callmethod(string480, "++", [1], var_escmodname);
  var string483 = new GraceString("_");
  var opresult485 = callmethod(opresult482, "++", [1], string483);
  var opresult487 = callmethod(opresult485, "++", [1], var_inm);
  var string488 = new GraceString("_");
  var opresult490 = callmethod(opresult487, "++", [1], string488);
  var opresult492 = callmethod(opresult490, "++", [1], var_myc);
  var string493 = new GraceString("");
  var opresult495 = callmethod(opresult492, "++", [1], string493);
  lineNumber = 216
  var string496 = new GraceString("(Object self, int nparams, int *argcv, ");
  var opresult498 = callmethod(opresult495, "++", [1], string496);
  lineNumber = 217
  var string499 = new GraceString("Object* args, int flags) {");
  var opresult501 = callmethod(opresult498, "++", [1], string499);
  lineNumber = 218
  var call502 = callmethod(this,"outprint", [1], opresult501);
  var string503 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
  lineNumber = 219
  var call504 = callmethod(this,"outprint", [1], string503);
  var string505 = new GraceString("  return uo->data[");
  var opresult507 = callmethod(string505, "++", [1], var_pos);
  var string508 = new GraceString("];");
  var opresult510 = callmethod(opresult507, "++", [1], string508);
  lineNumber = 220
  var call511 = callmethod(this,"outprint", [1], opresult510);
  var string512 = new GraceString("}");
  lineNumber = 221
  var call513 = callmethod(this,"outprint", [1], string512);
  var string514 = new GraceString("  addmethodrealflags(");
  var opresult516 = callmethod(string514, "++", [1], var_selfr);
  var string517 = new GraceString(", \"");
  var opresult519 = callmethod(opresult516, "++", [1], string517);
  var opresult521 = callmethod(opresult519, "++", [1], var_enm);
  var string522 = new GraceString("\",&reader_");
  var opresult524 = callmethod(opresult521, "++", [1], string522);
  var opresult526 = callmethod(opresult524, "++", [1], var_escmodname);
  var string527 = new GraceString("_");
  var opresult529 = callmethod(opresult526, "++", [1], string527);
  var opresult531 = callmethod(opresult529, "++", [1], var_inm);
  var string532 = new GraceString("_");
  var opresult534 = callmethod(opresult531, "++", [1], string532);
  var opresult536 = callmethod(opresult534, "++", [1], var_myc);
  var string537 = new GraceString(", MFLAG_DEF);");
  var opresult539 = callmethod(opresult536, "++", [1], string537);
  lineNumber = 222
  var call540 = callmethod(this,"out", [1], opresult539);
  return call540
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjdefdecmeth"] = func470;
  lineNumber = 247
var func541 = function(argcv) {
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
  lineNumber = 225
  lineNumber = 224
  var string542 = new GraceString("undefined");
  var var_val = string542;
  lineNumber = 230
  lineNumber = 233
  lineNumber = 225
  var bool544 = new GraceBoolean(false)
  lineNumber = 233
  lineNumber = 1
  lineNumber = 225
  var call545 = callmethod(var_o,"value", [0]);
  var opresult547 = callmethod(bool544, "!=", [1], call545);
  if (Grace_isTrue(opresult547)) {
  lineNumber = 230
  lineNumber = 232
  lineNumber = 1
  lineNumber = 232
  lineNumber = 1
  lineNumber = 226
  var call549 = callmethod(var_o,"value", [0]);
  var call550 = callmethod(call549,"kind", [0]);
  var string551 = new GraceString("object");
  var opresult553 = callmethod(call550, "==", [1], string551);
  if (Grace_isTrue(opresult553)) {
  lineNumber = 227
  lineNumber = 1
  lineNumber = 227
  var call554 = callmethod(var_o,"value", [0]);
  lineNumber = 228
  var call555 = callmethod(this,"compileobject", [2], call554, var_selfr);
  lineNumber = 229
  lineNumber = 1
  lineNumber = 229
  lineNumber = 1
  lineNumber = 228
  var call556 = callmethod(var_o,"value", [0]);
  var call557 = callmethod(call556,"register", [0]);
  var_val = call557;
  var if548 = call557;
  } else {
  lineNumber = 230
  lineNumber = 1
  lineNumber = 230
  var call558 = callmethod(var_o,"value", [0]);
  lineNumber = 231
  var call559 = callmethod(this,"compilenode", [1], call558);
  var_val = call559;
  var if548 = call559;
}
  var if543 = if548;
}
  lineNumber = 234
  lineNumber = 233
  var var_myc = var_auto__95__count;
  lineNumber = 235
  lineNumber = 234
  var opresult561 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult561;
  lineNumber = 236
  lineNumber = 1
  lineNumber = 236
  lineNumber = 1
  lineNumber = 235
  var call562 = callmethod(var_o,"name", [0]);
  var call563 = callmethod(call562,"value", [0]);
  var var_nm = call563;
  lineNumber = 236
  var call564 = Grace_length(var_nm);
  var opresult566 = callmethod(call564, "+", [1], new GraceNum(1));
  var var_len = opresult566;
  lineNumber = 237
  lineNumber = 238
  var call567 = callmethod(this,"escapestring2", [1], var_nm);
  var var_enm = call567;
  lineNumber = 239
  var call568 = callmethod(this,"escapeident", [1], var_nm);
  var var_inm = call568;
  var string569 = new GraceString("// OBJECT CONST DEC ");
  var opresult571 = callmethod(string569, "++", [1], var_enm);
  lineNumber = 240
  var call572 = callmethod(this,"out", [1], opresult571);
  var string573 = new GraceString("  adddatum2(");
  var opresult575 = callmethod(string573, "++", [1], var_selfr);
  var string576 = new GraceString(", ");
  var opresult578 = callmethod(opresult575, "++", [1], string576);
  var opresult580 = callmethod(opresult578, "++", [1], var_val);
  var string581 = new GraceString(", ");
  var opresult583 = callmethod(opresult580, "++", [1], string581);
  var opresult585 = callmethod(opresult583, "++", [1], var_pos);
  var string586 = new GraceString(");");
  var opresult588 = callmethod(opresult585, "++", [1], string586);
  lineNumber = 241
  var call589 = callmethod(this,"out", [1], opresult588);
  lineNumber = 243
  lineNumber = 241
  var string590 = new GraceString("Object reader_");
  var opresult592 = callmethod(string590, "++", [1], var_escmodname);
  var string593 = new GraceString("_");
  var opresult595 = callmethod(opresult592, "++", [1], string593);
  var opresult597 = callmethod(opresult595, "++", [1], var_inm);
  var string598 = new GraceString("_");
  var opresult600 = callmethod(opresult597, "++", [1], string598);
  var opresult602 = callmethod(opresult600, "++", [1], var_myc);
  var string603 = new GraceString("");
  var opresult605 = callmethod(opresult602, "++", [1], string603);
  lineNumber = 242
  var string606 = new GraceString("(Object self, int nparams, int *argcv, ");
  var opresult608 = callmethod(opresult605, "++", [1], string606);
  lineNumber = 243
  var string609 = new GraceString("Object* args, int flags) {");
  var opresult611 = callmethod(opresult608, "++", [1], string609);
  lineNumber = 244
  var call612 = callmethod(this,"outprint", [1], opresult611);
  var string613 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
  lineNumber = 245
  var call614 = callmethod(this,"outprint", [1], string613);
  var string615 = new GraceString("  return uo->data[");
  var opresult617 = callmethod(string615, "++", [1], var_pos);
  var string618 = new GraceString("];");
  var opresult620 = callmethod(opresult617, "++", [1], string618);
  lineNumber = 246
  var call621 = callmethod(this,"outprint", [1], opresult620);
  var string622 = new GraceString("}");
  lineNumber = 247
  var call623 = callmethod(this,"outprint", [1], string622);
  var string624 = new GraceString("  addmethodrealflags(");
  var opresult626 = callmethod(string624, "++", [1], var_selfr);
  var string627 = new GraceString(", \"");
  var opresult629 = callmethod(opresult626, "++", [1], string627);
  var opresult631 = callmethod(opresult629, "++", [1], var_enm);
  var string632 = new GraceString("\",&reader_");
  var opresult634 = callmethod(opresult631, "++", [1], string632);
  var opresult636 = callmethod(opresult634, "++", [1], var_escmodname);
  var string637 = new GraceString("_");
  var opresult639 = callmethod(opresult636, "++", [1], string637);
  var opresult641 = callmethod(opresult639, "++", [1], var_inm);
  var string642 = new GraceString("_");
  var opresult644 = callmethod(opresult641, "++", [1], string642);
  var opresult646 = callmethod(opresult644, "++", [1], var_myc);
  var string647 = new GraceString(", MFLAG_DEF);");
  var opresult649 = callmethod(opresult646, "++", [1], string647);
  lineNumber = 248
  var call650 = callmethod(this,"out", [1], opresult649);
  return call650
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjdefdec"] = func541;
  lineNumber = 254
var func651 = function(argcv) {
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
  lineNumber = 251
  lineNumber = 250
  var string652 = new GraceString("undefined");
  var var_val = string652;
  lineNumber = 252
  lineNumber = 254
  lineNumber = 251
  var bool654 = new GraceBoolean(false)
  lineNumber = 254
  lineNumber = 1
  lineNumber = 251
  var call655 = callmethod(var_o,"value", [0]);
  var opresult657 = callmethod(bool654, "!=", [1], call655);
  if (Grace_isTrue(opresult657)) {
  lineNumber = 252
  lineNumber = 1
  lineNumber = 252
  var call658 = callmethod(var_o,"value", [0]);
  lineNumber = 253
  var call659 = callmethod(this,"compilenode", [1], call658);
  var_val = call659;
  var if653 = call659;
}
  lineNumber = 254
  var string660 = new GraceString("  adddatum2(");
  var opresult662 = callmethod(string660, "++", [1], var_selfr);
  var string663 = new GraceString(", ");
  var opresult665 = callmethod(opresult662, "++", [1], string663);
  var opresult667 = callmethod(opresult665, "++", [1], var_val);
  var string668 = new GraceString(", ");
  var opresult670 = callmethod(opresult667, "++", [1], string668);
  var opresult672 = callmethod(opresult670, "++", [1], var_pos);
  var string673 = new GraceString(");");
  var opresult675 = callmethod(opresult672, "++", [1], string673);
  lineNumber = 255
  var call676 = callmethod(this,"out", [1], opresult675);
  return call676
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjvardecdata"] = func651;
  lineNumber = 280
var func677 = function(argcv) {
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
  lineNumber = 258
  lineNumber = 257
  var var_myc = var_auto__95__count;
  lineNumber = 259
  lineNumber = 258
  var opresult679 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult679;
  lineNumber = 260
  lineNumber = 1
  lineNumber = 260
  lineNumber = 1
  lineNumber = 259
  var call680 = callmethod(var_o,"name", [0]);
  var call681 = callmethod(call680,"value", [0]);
  var var_nm = call681;
  lineNumber = 260
  var call682 = Grace_length(var_nm);
  var opresult684 = callmethod(call682, "+", [1], new GraceNum(1));
  var var_len = opresult684;
  lineNumber = 261
  lineNumber = 262
  var call685 = callmethod(this,"escapestring2", [1], var_nm);
  var var_enm = call685;
  lineNumber = 263
  var call686 = callmethod(this,"escapeident", [1], var_nm);
  var var_inm = call686;
  lineNumber = 265
  lineNumber = 263
  var string687 = new GraceString("Object reader_");
  var opresult689 = callmethod(string687, "++", [1], var_escmodname);
  var string690 = new GraceString("_");
  var opresult692 = callmethod(opresult689, "++", [1], string690);
  var opresult694 = callmethod(opresult692, "++", [1], var_inm);
  var string695 = new GraceString("_");
  var opresult697 = callmethod(opresult694, "++", [1], string695);
  var opresult699 = callmethod(opresult697, "++", [1], var_myc);
  var string700 = new GraceString("");
  var opresult702 = callmethod(opresult699, "++", [1], string700);
  lineNumber = 264
  var string703 = new GraceString("(Object self, int nparams, int *argcv, ");
  var opresult705 = callmethod(opresult702, "++", [1], string703);
  lineNumber = 265
  var string706 = new GraceString("Object* args, int flags) {");
  var opresult708 = callmethod(opresult705, "++", [1], string706);
  lineNumber = 266
  var call709 = callmethod(this,"outprint", [1], opresult708);
  var string710 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
  lineNumber = 267
  var call711 = callmethod(this,"outprint", [1], string710);
  var string712 = new GraceString("  return uo->data[");
  var opresult714 = callmethod(string712, "++", [1], var_pos);
  var string715 = new GraceString("];");
  var opresult717 = callmethod(opresult714, "++", [1], string715);
  lineNumber = 268
  var call718 = callmethod(this,"outprint", [1], opresult717);
  var string719 = new GraceString("}");
  lineNumber = 269
  var call720 = callmethod(this,"outprint", [1], string719);
  var string721 = new GraceString("  addmethodreal(");
  var opresult723 = callmethod(string721, "++", [1], var_selfr);
  var string724 = new GraceString(", \"");
  var opresult726 = callmethod(opresult723, "++", [1], string724);
  var opresult728 = callmethod(opresult726, "++", [1], var_enm);
  var string729 = new GraceString("\",&reader_");
  var opresult731 = callmethod(opresult728, "++", [1], string729);
  var opresult733 = callmethod(opresult731, "++", [1], var_escmodname);
  var string734 = new GraceString("_");
  var opresult736 = callmethod(opresult733, "++", [1], string734);
  var opresult738 = callmethod(opresult736, "++", [1], var_inm);
  var string739 = new GraceString("_");
  var opresult741 = callmethod(opresult738, "++", [1], string739);
  var opresult743 = callmethod(opresult741, "++", [1], var_myc);
  var string744 = new GraceString(");");
  var opresult746 = callmethod(opresult743, "++", [1], string744);
  lineNumber = 270
  var call747 = callmethod(this,"out", [1], opresult746);
  lineNumber = 271
  lineNumber = 270
  var string748 = new GraceString(":=");
  var opresult750 = callmethod(var_nm, "++", [1], string748);
  var var_nmw = opresult750;
  lineNumber = 271
  var call751 = Grace_length(var_nmw);
  var opresult753 = callmethod(call751, "+", [1], new GraceNum(1));
  var_len = opresult753;
  lineNumber = 272
  lineNumber = 273
  var call754 = callmethod(this,"escapestring2", [1], var_nmw);
  var_nmw = call754;
  lineNumber = 275
  lineNumber = 273
  var string755 = new GraceString("Object writer_");
  var opresult757 = callmethod(string755, "++", [1], var_escmodname);
  var string758 = new GraceString("_");
  var opresult760 = callmethod(opresult757, "++", [1], string758);
  var opresult762 = callmethod(opresult760, "++", [1], var_inm);
  var string763 = new GraceString("_");
  var opresult765 = callmethod(opresult762, "++", [1], string763);
  var opresult767 = callmethod(opresult765, "++", [1], var_myc);
  var string768 = new GraceString("");
  var opresult770 = callmethod(opresult767, "++", [1], string768);
  lineNumber = 274
  var string771 = new GraceString("(Object self, int nparams, int *argcv, ");
  var opresult773 = callmethod(opresult770, "++", [1], string771);
  lineNumber = 275
  var string774 = new GraceString("Object* args, int flags) {");
  var opresult776 = callmethod(opresult773, "++", [1], string774);
  lineNumber = 276
  var call777 = callmethod(this,"outprint", [1], opresult776);
  var string778 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
  lineNumber = 277
  var call779 = callmethod(this,"outprint", [1], string778);
  var string780 = new GraceString("  uo->data[");
  var opresult782 = callmethod(string780, "++", [1], var_pos);
  var string783 = new GraceString("] = args[0];");
  var opresult785 = callmethod(opresult782, "++", [1], string783);
  lineNumber = 278
  var call786 = callmethod(this,"outprint", [1], opresult785);
  var string787 = new GraceString("  return none;");
  var call788 = callmethod(this,"outprint", [1], string787);
  lineNumber = 279
  var string789 = new GraceString("}");
  lineNumber = 280
  var call790 = callmethod(this,"outprint", [1], string789);
  var string791 = new GraceString("  addmethodreal(");
  var opresult793 = callmethod(string791, "++", [1], var_selfr);
  var string794 = new GraceString(", \"");
  var opresult796 = callmethod(opresult793, "++", [1], string794);
  var opresult798 = callmethod(opresult796, "++", [1], var_enm);
  var string799 = new GraceString(":=\", &writer_");
  var opresult801 = callmethod(opresult798, "++", [1], string799);
  var opresult803 = callmethod(opresult801, "++", [1], var_escmodname);
  var string804 = new GraceString("_");
  var opresult806 = callmethod(opresult803, "++", [1], string804);
  var opresult808 = callmethod(opresult806, "++", [1], var_inm);
  var string809 = new GraceString("_");
  var opresult811 = callmethod(opresult808, "++", [1], string809);
  var opresult813 = callmethod(opresult811, "++", [1], var_myc);
  var string814 = new GraceString(");");
  var opresult816 = callmethod(opresult813, "++", [1], string814);
  lineNumber = 281
  var call817 = callmethod(this,"out", [1], opresult816);
  return call817
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjvardecmeth"] = func677;
  lineNumber = 312
var func818 = function(argcv) {
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
  lineNumber = 284
  lineNumber = 283
  var string819 = new GraceString("undefined");
  var var_val = string819;
  lineNumber = 285
  lineNumber = 287
  lineNumber = 284
  var bool821 = new GraceBoolean(false)
  lineNumber = 287
  lineNumber = 1
  lineNumber = 284
  var call822 = callmethod(var_o,"value", [0]);
  var opresult824 = callmethod(bool821, "!=", [1], call822);
  if (Grace_isTrue(opresult824)) {
  lineNumber = 285
  lineNumber = 1
  lineNumber = 285
  var call825 = callmethod(var_o,"value", [0]);
  lineNumber = 286
  var call826 = callmethod(this,"compilenode", [1], call825);
  var_val = call826;
  var if820 = call826;
}
  lineNumber = 288
  lineNumber = 287
  var var_myc = var_auto__95__count;
  lineNumber = 289
  lineNumber = 288
  var opresult828 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult828;
  lineNumber = 290
  lineNumber = 1
  lineNumber = 290
  lineNumber = 1
  lineNumber = 289
  var call829 = callmethod(var_o,"name", [0]);
  var call830 = callmethod(call829,"value", [0]);
  var var_nm = call830;
  lineNumber = 290
  var call831 = Grace_length(var_nm);
  var opresult833 = callmethod(call831, "+", [1], new GraceNum(1));
  var var_len = opresult833;
  lineNumber = 291
  lineNumber = 292
  var call834 = callmethod(this,"escapestring2", [1], var_nm);
  var var_enm = call834;
  lineNumber = 293
  var call835 = callmethod(this,"escapeident", [1], var_nm);
  var var_inm = call835;
  var string836 = new GraceString("// OBJECT VAR DEC ");
  var opresult838 = callmethod(string836, "++", [1], var_nm);
  lineNumber = 294
  var call839 = callmethod(this,"out", [1], opresult838);
  var string840 = new GraceString("  adddatum2(");
  var opresult842 = callmethod(string840, "++", [1], var_selfr);
  var string843 = new GraceString(", ");
  var opresult845 = callmethod(opresult842, "++", [1], string843);
  var opresult847 = callmethod(opresult845, "++", [1], var_val);
  var string848 = new GraceString(", ");
  var opresult850 = callmethod(opresult847, "++", [1], string848);
  var opresult852 = callmethod(opresult850, "++", [1], var_pos);
  var string853 = new GraceString(");");
  var opresult855 = callmethod(opresult852, "++", [1], string853);
  lineNumber = 295
  var call856 = callmethod(this,"out", [1], opresult855);
  lineNumber = 297
  lineNumber = 295
  var string857 = new GraceString("Object reader_");
  var opresult859 = callmethod(string857, "++", [1], var_escmodname);
  var string860 = new GraceString("_");
  var opresult862 = callmethod(opresult859, "++", [1], string860);
  var opresult864 = callmethod(opresult862, "++", [1], var_inm);
  var string865 = new GraceString("_");
  var opresult867 = callmethod(opresult864, "++", [1], string865);
  var opresult869 = callmethod(opresult867, "++", [1], var_myc);
  var string870 = new GraceString("");
  var opresult872 = callmethod(opresult869, "++", [1], string870);
  lineNumber = 296
  var string873 = new GraceString("(Object self, int nparams, int *argcv, ");
  var opresult875 = callmethod(opresult872, "++", [1], string873);
  lineNumber = 297
  var string876 = new GraceString("Object* args, int flags) {");
  var opresult878 = callmethod(opresult875, "++", [1], string876);
  lineNumber = 298
  var call879 = callmethod(this,"outprint", [1], opresult878);
  var string880 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
  lineNumber = 299
  var call881 = callmethod(this,"outprint", [1], string880);
  var string882 = new GraceString("  return uo->data[");
  var opresult884 = callmethod(string882, "++", [1], var_pos);
  var string885 = new GraceString("];");
  var opresult887 = callmethod(opresult884, "++", [1], string885);
  lineNumber = 300
  var call888 = callmethod(this,"outprint", [1], opresult887);
  var string889 = new GraceString("}");
  lineNumber = 301
  var call890 = callmethod(this,"outprint", [1], string889);
  var string891 = new GraceString("  addmethodreal(");
  var opresult893 = callmethod(string891, "++", [1], var_selfr);
  var string894 = new GraceString(", \"");
  var opresult896 = callmethod(opresult893, "++", [1], string894);
  var opresult898 = callmethod(opresult896, "++", [1], var_enm);
  var string899 = new GraceString("\",&reader_");
  var opresult901 = callmethod(opresult898, "++", [1], string899);
  var opresult903 = callmethod(opresult901, "++", [1], var_escmodname);
  var string904 = new GraceString("_");
  var opresult906 = callmethod(opresult903, "++", [1], string904);
  var opresult908 = callmethod(opresult906, "++", [1], var_inm);
  var string909 = new GraceString("_");
  var opresult911 = callmethod(opresult908, "++", [1], string909);
  var opresult913 = callmethod(opresult911, "++", [1], var_myc);
  var string914 = new GraceString(");");
  var opresult916 = callmethod(opresult913, "++", [1], string914);
  lineNumber = 302
  var call917 = callmethod(this,"out", [1], opresult916);
  lineNumber = 303
  lineNumber = 302
  var string918 = new GraceString(":=");
  var opresult920 = callmethod(var_nm, "++", [1], string918);
  var var_nmw = opresult920;
  lineNumber = 303
  var call921 = Grace_length(var_nmw);
  var opresult923 = callmethod(call921, "+", [1], new GraceNum(1));
  var_len = opresult923;
  lineNumber = 304
  lineNumber = 305
  var call924 = callmethod(this,"escapestring2", [1], var_nmw);
  var_nmw = call924;
  lineNumber = 307
  lineNumber = 305
  var string925 = new GraceString("Object writer_");
  var opresult927 = callmethod(string925, "++", [1], var_escmodname);
  var string928 = new GraceString("_");
  var opresult930 = callmethod(opresult927, "++", [1], string928);
  var opresult932 = callmethod(opresult930, "++", [1], var_inm);
  var string933 = new GraceString("_");
  var opresult935 = callmethod(opresult932, "++", [1], string933);
  var opresult937 = callmethod(opresult935, "++", [1], var_myc);
  var string938 = new GraceString("");
  var opresult940 = callmethod(opresult937, "++", [1], string938);
  lineNumber = 306
  var string941 = new GraceString("(Object self, int nparams, int *argcv, ");
  var opresult943 = callmethod(opresult940, "++", [1], string941);
  lineNumber = 307
  var string944 = new GraceString("Object* args, int flags) {");
  var opresult946 = callmethod(opresult943, "++", [1], string944);
  lineNumber = 308
  var call947 = callmethod(this,"outprint", [1], opresult946);
  var string948 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
  lineNumber = 309
  var call949 = callmethod(this,"outprint", [1], string948);
  var string950 = new GraceString("  uo->data[");
  var opresult952 = callmethod(string950, "++", [1], var_pos);
  var string953 = new GraceString("] = args[0];");
  var opresult955 = callmethod(opresult952, "++", [1], string953);
  lineNumber = 310
  var call956 = callmethod(this,"outprint", [1], opresult955);
  var string957 = new GraceString("  return none;");
  var call958 = callmethod(this,"outprint", [1], string957);
  lineNumber = 311
  var string959 = new GraceString("}");
  lineNumber = 312
  var call960 = callmethod(this,"outprint", [1], string959);
  var string961 = new GraceString("  addmethodreal(");
  var opresult963 = callmethod(string961, "++", [1], var_selfr);
  var string964 = new GraceString(", \"");
  var opresult966 = callmethod(opresult963, "++", [1], string964);
  var opresult968 = callmethod(opresult966, "++", [1], var_enm);
  var string969 = new GraceString(":=\", &writer_");
  var opresult971 = callmethod(opresult968, "++", [1], string969);
  var opresult973 = callmethod(opresult971, "++", [1], var_escmodname);
  var string974 = new GraceString("_");
  var opresult976 = callmethod(opresult973, "++", [1], string974);
  var opresult978 = callmethod(opresult976, "++", [1], var_inm);
  var string979 = new GraceString("_");
  var opresult981 = callmethod(opresult978, "++", [1], string979);
  var opresult983 = callmethod(opresult981, "++", [1], var_myc);
  var string984 = new GraceString(");");
  var opresult986 = callmethod(opresult983, "++", [1], string984);
  lineNumber = 313
  var call987 = callmethod(this,"out", [1], opresult986);
  return call987
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileobjvardec"] = func818;
  lineNumber = 327
var func988 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 316
  lineNumber = 1
  lineNumber = 315
  var call989 = callmethod(var_o,"signature", [0]);
  var var_signature = call989;
  lineNumber = 316
  lineNumber = 1
  lineNumber = 316
  var call990 = callmethod(var_o,"value", [0]);
  lineNumber = 1
  lineNumber = 316
  var call991 = callmethod(var_o,"superclass", [0]);
  lineNumber = 317
  lineNumber = 1
  lineNumber = 316
  var call992 = callmethod(var_ast,"objectNode", [0]);
  var call993 = callmethod(call992,"new", [2], call990, call991);
  var var_obj = call993;
  lineNumber = 318
  lineNumber = 1
  lineNumber = 318
  lineNumber = 1
  lineNumber = 318
  lineNumber = 1
  lineNumber = 317
  var call994 = callmethod(var_o,"name", [0]);
  var call995 = callmethod(call994,"value", [0]);
  var call996 = callmethod(var_obj,"classname:=", [1], call995);
  lineNumber = 318
  var array997 = new GraceList([
var_obj,
]);

  var var_mbody = array997;
  lineNumber = 319
  lineNumber = 1
  lineNumber = 319
  var call998 = callmethod(var_o,"constructor", [0]);
  var bool999 = new GraceBoolean(false)
  lineNumber = 320
  lineNumber = 1
  lineNumber = 319
  var call1000 = callmethod(var_ast,"methodNode", [0]);
  var call1001 = callmethod(call1000,"new", [4], call998, var_signature, var_mbody, bool999);
  var var_newmeth = call1001;
  lineNumber = 320
  var array1002 = new GraceList([
var_newmeth,
]);

  var var_obody = array1002;
  lineNumber = 321
  var bool1003 = new GraceBoolean(false)
  lineNumber = 322
  lineNumber = 1
  lineNumber = 321
  var call1004 = callmethod(var_ast,"objectNode", [0]);
  var call1005 = callmethod(call1004,"new", [2], var_obody, bool1003);
  var var_cobj = call1005;
  lineNumber = 322
  lineNumber = 1
  lineNumber = 322
  var call1006 = callmethod(var_o,"name", [0]);
  var bool1007 = new GraceBoolean(false)
  lineNumber = 323
  lineNumber = 1
  lineNumber = 322
  var call1008 = callmethod(var_ast,"defDecNode", [0]);
  var call1009 = callmethod(call1008,"new", [3], call1006, var_cobj, bool1007);
  var var_con = call1009;
  lineNumber = 325
  lineNumber = 323
  lineNumber = 327
  lineNumber = 323
  var opresult1012 = callmethod(var_compilationDepth, "==", [1], new GraceNum(1));
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
  block1013.receiver = this;
  block1013.className = 'block<genc:323>';
  block1013.real = function(
) {
  lineNumber = 1
  lineNumber = 323
  lineNumber = 1
  lineNumber = 323
  var call1014 = callmethod(var_o,"name", [0]);
  var call1015 = callmethod(call1014,"kind", [0]);
  var string1016 = new GraceString("generic");
  var opresult1018 = callmethod(call1015, "!=", [1], string1016);
  return opresult1018;
};
  var opresult1020 = callmethod(opresult1012, "&&", [1], block1013);
  if (Grace_isTrue(opresult1020)) {
  lineNumber = 324
  lineNumber = 1
  lineNumber = 324
  var call1021 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 324
  var call1023 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 324
  var call1024 = callmethod(var_ast,"signaturePart", [0]);
  var call1025 = callmethod(call1024,"new", [1], call1023);
  var array1022 = new GraceList([
call1025,
]);

  lineNumber = 1
  lineNumber = 324
  var call1027 = callmethod(var_o,"name", [0]);
  var array1026 = new GraceList([
call1027,
]);

  var bool1028 = new GraceBoolean(false)
  lineNumber = 325
  lineNumber = 1
  lineNumber = 324
  var call1029 = callmethod(var_ast,"methodNode", [0]);
  var call1030 = callmethod(call1029,"new", [4], call1021, array1022, array1026, bool1028);
  var var_meth = call1030;
  lineNumber = 325
  lineNumber = 326
  var call1031 = callmethod(this,"compilenode", [1], var_meth);
  var if1010 = call1031;
}
  lineNumber = 327
  lineNumber = 1
  lineNumber = 327
  lineNumber = 328
  var call1032 = callmethod(this,"compilenode", [1], var_con);
  lineNumber = 327
  var call1033 = callmethod(var_o,"register:=", [1], call1032);
  return call1033
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileclass"] = func988;
  lineNumber = 398
var func1034 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_outerRef = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 331
  lineNumber = 330
  var var_origInBlock = var_inBlock;
  lineNumber = 332
  lineNumber = 331
  var bool1035 = new GraceBoolean(false)
  var_inBlock = bool1035;
  lineNumber = 333
  lineNumber = 332
  var var_myc = var_auto__95__count;
  lineNumber = 334
  lineNumber = 333
  var opresult1037 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1037;
  lineNumber = 335
  lineNumber = 334
  var string1038 = new GraceString("obj");
  var opresult1040 = callmethod(string1038, "++", [1], var_myc);
  var var_selfr = opresult1040;
  lineNumber = 336
  lineNumber = 335
  var var_numFields = new GraceNum(1);
  lineNumber = 337
  lineNumber = 336
  var var_numMethods = new GraceNum(0);
  lineNumber = 338
  lineNumber = 337
  var var_pos = new GraceNum(1);
  lineNumber = 339
  lineNumber = 338
  var bool1041 = new GraceBoolean(false)
  var var_superobj = bool1041;
  lineNumber = 345
  lineNumber = 339
  lineNumber = 1
  lineNumber = 339
  var call1042 = callmethod(var_o,"value", [0]);
  lineNumber = 345
  var block1043 = Grace_allocObject();
  block1043.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1043.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1043.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1043.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1043.receiver = this;
  block1043.className = 'block<genc:345>';
  block1043.real = function(
var_e
) {
  lineNumber = 342
  lineNumber = 343
  lineNumber = 1
  lineNumber = 340
  var call1045 = callmethod(var_e,"kind", [0]);
  var string1046 = new GraceString("vardec");
  var opresult1048 = callmethod(call1045, "==", [1], string1046);
  if (Grace_isTrue(opresult1048)) {
  lineNumber = 342
  lineNumber = 341
  var opresult1050 = callmethod(var_numMethods, "+", [1], new GraceNum(1));
  var_numMethods = opresult1050;
  var if1044 = opresult1050;
}
  lineNumber = 344
  lineNumber = 343
  var opresult1052 = callmethod(var_numMethods, "+", [1], new GraceNum(1));
  var_numMethods = opresult1052;
  lineNumber = 345
  lineNumber = 344
  var opresult1054 = callmethod(var_numFields, "+", [1], new GraceNum(1));
  var_numFields = opresult1054;
  return opresult1054;
};
  var call1055 = callmethod(Grace_prelude,"for()do", [1, 1], call1042, block1043);
  lineNumber = 348
  lineNumber = 349
  lineNumber = 346
  var opresult1058 = callmethod(var_numFields, "==", [1], new GraceNum(3));
  if (Grace_isTrue(opresult1058)) {
  lineNumber = 348
  lineNumber = 347
  var_numFields = new GraceNum(4);
  var if1056 = new GraceNum(4);
}
  lineNumber = 349
  var string1059 = new GraceString("static ClassData objclass");
  var opresult1061 = callmethod(string1059, "++", [1], var_myc);
  var string1062 = new GraceString(";");
  var opresult1064 = callmethod(opresult1061, "++", [1], string1062);
  var call1065 = callmethod(var_globals,"push", [1], opresult1064);
  lineNumber = 351
  lineNumber = 350
  var string1066 = new GraceString("  Object ");
  var opresult1068 = callmethod(string1066, "++", [1], var_selfr);
  lineNumber = 351
  lineNumber = 350
  var string1069 = new GraceString(" = alloc_userobj2(");
  var opresult1071 = callmethod(string1069, "++", [1], var_numMethods);
  var string1072 = new GraceString(",");
  var opresult1074 = callmethod(opresult1071, "++", [1], string1072);
  var opresult1076 = callmethod(opresult1068, "++", [1], opresult1074);
  lineNumber = 351
  var string1077 = new GraceString("");
  var opresult1079 = callmethod(string1077, "++", [1], var_numFields);
  var string1080 = new GraceString(", objclass");
  var opresult1082 = callmethod(opresult1079, "++", [1], string1080);
  var opresult1084 = callmethod(opresult1082, "++", [1], var_myc);
  var string1085 = new GraceString(");");
  var opresult1087 = callmethod(opresult1084, "++", [1], string1085);
  var opresult1089 = callmethod(opresult1076, "++", [1], opresult1087);
  lineNumber = 352
  var call1090 = callmethod(this,"out", [1], opresult1089);
  var string1091 = new GraceString("  gc_frame_newslot(");
  var opresult1093 = callmethod(string1091, "++", [1], var_selfr);
  var string1094 = new GraceString(");");
  var opresult1096 = callmethod(opresult1093, "++", [1], string1094);
  lineNumber = 353
  var call1097 = callmethod(this,"out", [1], opresult1096);
  lineNumber = 357
  lineNumber = 359
  lineNumber = 1
  lineNumber = 353
  var call1099 = callmethod(var_o,"classname", [0]);
  var string1100 = new GraceString("object");
  var opresult1102 = callmethod(call1099, "!=", [1], string1100);
  if (Grace_isTrue(opresult1102)) {
  lineNumber = 354
  var string1103 = new GraceString("if (objclass");
  var opresult1105 = callmethod(string1103, "++", [1], var_myc);
  var string1106 = new GraceString(" == NULL) {");
  var opresult1108 = callmethod(opresult1105, "++", [1], string1106);
  lineNumber = 355
  var call1109 = callmethod(this,"out", [1], opresult1108);
  var string1110 = new GraceString("  glfree(");
  var opresult1112 = callmethod(string1110, "++", [1], var_selfr);
  var string1113 = new GraceString("->class->name);");
  var opresult1115 = callmethod(opresult1112, "++", [1], string1113);
  lineNumber = 356
  var call1116 = callmethod(this,"out", [1], opresult1115);
  var string1117 = new GraceString("  ");
  var opresult1119 = callmethod(string1117, "++", [1], var_selfr);
  var string1120 = new GraceString("->class->name = \"");
  var opresult1122 = callmethod(opresult1119, "++", [1], string1120);
  lineNumber = 1
  lineNumber = 356
  var call1123 = callmethod(var_o,"classname", [0]);
  var opresult1125 = callmethod(opresult1122, "++", [1], call1123);
  var string1126 = new GraceString("\";");
  var opresult1128 = callmethod(opresult1125, "++", [1], string1126);
  lineNumber = 357
  var call1129 = callmethod(this,"out", [1], opresult1128);
  var string1130 = new GraceString("}");
  lineNumber = 358
  var call1131 = callmethod(this,"out", [1], string1130);
  var if1098 = call1131;
}
  lineNumber = 361
  lineNumber = 363
  lineNumber = 1
  lineNumber = 359
  var call1133 = callmethod(var_o,"superclass", [0]);
  var bool1134 = new GraceBoolean(false)
  var opresult1136 = callmethod(call1133, "/=", [1], bool1134);
  if (Grace_isTrue(opresult1136)) {
  lineNumber = 360
  lineNumber = 1
  lineNumber = 360
  var call1137 = callmethod(var_o,"superclass", [0]);
  lineNumber = 361
  var call1138 = callmethod(this,"compilenode", [1], call1137);
  var_superobj = call1138;
  var string1139 = new GraceString("  setsuperobj(");
  var opresult1141 = callmethod(string1139, "++", [1], var_selfr);
  var string1142 = new GraceString(", ");
  var opresult1144 = callmethod(opresult1141, "++", [1], string1142);
  var opresult1146 = callmethod(opresult1144, "++", [1], var_superobj);
  var string1147 = new GraceString(");");
  var opresult1149 = callmethod(opresult1146, "++", [1], string1147);
  lineNumber = 362
  var call1150 = callmethod(this,"out", [1], opresult1149);
  var if1132 = call1150;
}
  lineNumber = 363
  lineNumber = 364
  var call1151 = callmethod(this,"compileobjouter", [2], var_selfr, var_outerRef);
  var string1152 = new GraceString("  Object oldself");
  var opresult1154 = callmethod(string1152, "++", [1], var_myc);
  var string1155 = new GraceString(" = self;");
  var opresult1157 = callmethod(opresult1154, "++", [1], string1155);
  lineNumber = 365
  var call1158 = callmethod(this,"out", [1], opresult1157);
  var string1159 = new GraceString("  self = ");
  var opresult1161 = callmethod(string1159, "++", [1], var_selfr);
  var string1162 = new GraceString(";");
  var opresult1164 = callmethod(opresult1161, "++", [1], string1162);
  lineNumber = 366
  var call1165 = callmethod(this,"out", [1], opresult1164);
  var string1166 = new GraceString("  *selfslot = self;");
  lineNumber = 367
  var call1167 = callmethod(this,"out", [1], string1166);
  lineNumber = 390
  lineNumber = 367
  lineNumber = 1
  lineNumber = 367
  var call1168 = callmethod(var_o,"value", [0]);
  lineNumber = 390
  var block1169 = Grace_allocObject();
  block1169.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1169.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1169.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1169.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1169.receiver = this;
  block1169.className = 'block<genc:390>';
  block1169.real = function(
var_e
) {
  lineNumber = 388
  lineNumber = 389
  lineNumber = 1
  lineNumber = 368
  var call1171 = callmethod(var_e,"kind", [0]);
  var string1172 = new GraceString("method");
  var opresult1174 = callmethod(call1171, "==", [1], string1172);
  if (Grace_isTrue(opresult1174)) {
  lineNumber = 369
  lineNumber = 370
  var call1175 = callmethod(this,"compilemethod", [3], var_e, var_selfr, var_pos);
  var if1170 = call1175;
  } else {
  lineNumber = 388
  lineNumber = 376
  lineNumber = 1
  lineNumber = 370
  var call1177 = callmethod(var_e,"kind", [0]);
  var string1178 = new GraceString("vardec");
  var opresult1180 = callmethod(call1177, "==", [1], string1178);
  if (Grace_isTrue(opresult1180)) {
  lineNumber = 371
  var string1181 = new GraceString("if (objclass");
  var opresult1183 = callmethod(string1181, "++", [1], var_myc);
  var string1184 = new GraceString(" == NULL) {");
  var opresult1186 = callmethod(opresult1183, "++", [1], string1184);
  lineNumber = 372
  var call1187 = callmethod(this,"out", [1], opresult1186);
  lineNumber = 373
  var call1188 = callmethod(this,"compileobjvardecmeth", [3], var_e, var_selfr, var_pos);
  var string1189 = new GraceString("}");
  lineNumber = 374
  var call1190 = callmethod(this,"out", [1], string1189);
  var string1191 = new GraceString("");
  var opresult1193 = callmethod(string1191, "++", [1], var_selfr);
  var string1194 = new GraceString("->flags |= OFLAG_MUTABLE;");
  var opresult1196 = callmethod(opresult1193, "++", [1], string1194);
  lineNumber = 375
  var call1197 = callmethod(this,"out", [1], opresult1196);
  lineNumber = 376
  var call1198 = callmethod(this,"compileobjvardecdata", [3], var_e, var_selfr, var_pos);
  var if1176 = call1198;
  } else {
  lineNumber = 388
  lineNumber = 381
  lineNumber = 1
  lineNumber = 376
  var call1200 = callmethod(var_e,"kind", [0]);
  var string1201 = new GraceString("defdec");
  var opresult1203 = callmethod(call1200, "==", [1], string1201);
  if (Grace_isTrue(opresult1203)) {
  lineNumber = 377
  var string1204 = new GraceString("if (objclass");
  var opresult1206 = callmethod(string1204, "++", [1], var_myc);
  var string1207 = new GraceString(" == NULL) {");
  var opresult1209 = callmethod(opresult1206, "++", [1], string1207);
  lineNumber = 378
  var call1210 = callmethod(this,"out", [1], opresult1209);
  lineNumber = 379
  var call1211 = callmethod(this,"compileobjdefdecmeth", [3], var_e, var_selfr, var_pos);
  var string1212 = new GraceString("}");
  lineNumber = 380
  var call1213 = callmethod(this,"out", [1], string1212);
  lineNumber = 381
  var call1214 = callmethod(this,"compileobjdefdecdata", [3], var_e, var_selfr, var_pos);
  var if1199 = call1214;
  } else {
  lineNumber = 388
  lineNumber = 385
  lineNumber = 1
  lineNumber = 381
  var call1216 = callmethod(var_e,"kind", [0]);
  var string1217 = new GraceString("inherits");
  var opresult1219 = callmethod(call1216, "==", [1], string1217);
  if (Grace_isTrue(opresult1219)) {
  lineNumber = 382
  lineNumber = 1
  lineNumber = 382
  var call1220 = callmethod(var_e,"value", [0]);
  lineNumber = 383
  var call1221 = callmethod(this,"compilenode", [1], call1220);
  var_superobj = call1221;
  var string1222 = new GraceString("  setsuperobj(");
  var opresult1224 = callmethod(string1222, "++", [1], var_selfr);
  var string1225 = new GraceString(", ");
  var opresult1227 = callmethod(opresult1224, "++", [1], string1225);
  var opresult1229 = callmethod(opresult1227, "++", [1], var_superobj);
  var string1230 = new GraceString(");");
  var opresult1232 = callmethod(opresult1229, "++", [1], string1230);
  lineNumber = 384
  var call1233 = callmethod(this,"out", [1], opresult1232);
  lineNumber = 385
  lineNumber = 384
  var diff1235 = callmethod(var_pos, "-", [1], new GraceNum(1));
  var_pos = diff1235;
  var if1215 = diff1235;
  } else {
  lineNumber = 386
  lineNumber = 387
  var call1236 = callmethod(this,"compilenode", [1], var_e);
  lineNumber = 388
  lineNumber = 387
  var diff1238 = callmethod(var_pos, "-", [1], new GraceNum(1));
  var_pos = diff1238;
  var if1215 = diff1238;
}
  var if1199 = if1215;
}
  var if1176 = if1199;
}
  var if1170 = if1176;
}
  lineNumber = 390
  lineNumber = 389
  var opresult1240 = callmethod(var_pos, "+", [1], new GraceNum(1));
  var_pos = opresult1240;
  return opresult1240;
};
  var call1241 = callmethod(Grace_prelude,"for()do", [1, 1], call1168, block1169);
  lineNumber = 391
  var string1242 = new GraceString("objclass");
  var opresult1244 = callmethod(string1242, "++", [1], var_myc);
  var string1245 = new GraceString(" = ");
  var opresult1247 = callmethod(opresult1244, "++", [1], string1245);
  var opresult1249 = callmethod(opresult1247, "++", [1], var_selfr);
  var string1250 = new GraceString("->class;");
  var opresult1252 = callmethod(opresult1249, "++", [1], string1250);
  lineNumber = 392
  var call1253 = callmethod(this,"out", [1], opresult1252);
  var string1254 = new GraceString("  self = oldself");
  var opresult1256 = callmethod(string1254, "++", [1], var_myc);
  var string1257 = new GraceString(";");
  var opresult1259 = callmethod(opresult1256, "++", [1], string1257);
  lineNumber = 393
  var call1260 = callmethod(this,"out", [1], opresult1259);
  var string1261 = new GraceString("  *selfslot = self;");
  lineNumber = 394
  var call1262 = callmethod(this,"out", [1], string1261);
  lineNumber = 395
  lineNumber = 394
  var string1263 = new GraceString("  set_type(");
  var opresult1265 = callmethod(string1263, "++", [1], var_selfr);
  var string1266 = new GraceString(", ");
  var opresult1268 = callmethod(opresult1265, "++", [1], string1266);
  lineNumber = 395
  var string1269 = new GraceString("");
  lineNumber = 1
  lineNumber = 395
  var call1270 = callmethod(var_o,"otype", [0]);
  var call1271 = callmethod(var_subtype,"typeId", [1], call1270);
  var opresult1273 = callmethod(string1269, "++", [1], call1271);
  var string1274 = new GraceString(");");
  var opresult1276 = callmethod(opresult1273, "++", [1], string1274);
  var opresult1278 = callmethod(opresult1268, "++", [1], opresult1276);
  lineNumber = 396
  var call1279 = callmethod(this,"out", [1], opresult1278);
  lineNumber = 397
  lineNumber = 1
  lineNumber = 396
  var call1280 = callmethod(var_o,"register:=", [1], var_selfr);
  lineNumber = 398
  lineNumber = 397
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
  this.methods["compileobject"] = func1034;
  lineNumber = 418
var func1281 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 401
  lineNumber = 400
  var var_origInBlock = var_inBlock;
  lineNumber = 402
  lineNumber = 401
  var bool1282 = new GraceBoolean(true)
  var_inBlock = bool1282;
  lineNumber = 403
  lineNumber = 402
  var var_myc = var_auto__95__count;
  lineNumber = 404
  lineNumber = 403
  var opresult1284 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1284;
  lineNumber = 405
  lineNumber = 404
  var string1285 = new GraceString("block");
  var opresult1287 = callmethod(string1285, "++", [1], var_myc);
  var string1288 = new GraceString("");
  var opresult1290 = callmethod(opresult1287, "++", [1], string1288);
  var var_obj = opresult1290;
  lineNumber = 405
  var string1291 = new GraceString("  Object ");
  var opresult1293 = callmethod(string1291, "++", [1], var_obj);
  var string1294 = new GraceString(" = alloc_Block(NULL, NULL, \"");
  var opresult1296 = callmethod(opresult1293, "++", [1], string1294);
  var opresult1298 = callmethod(opresult1296, "++", [1], var_modname);
  var string1299 = new GraceString("\", ");
  var opresult1301 = callmethod(opresult1298, "++", [1], string1299);
  var opresult1303 = callmethod(opresult1301, "++", [1], var_linenum);
  var string1304 = new GraceString(");");
  var opresult1306 = callmethod(opresult1303, "++", [1], string1304);
  lineNumber = 406
  var call1307 = callmethod(this,"out", [1], opresult1306);
  var string1308 = new GraceString("  gc_frame_newslot(");
  var opresult1310 = callmethod(string1308, "++", [1], var_obj);
  var string1311 = new GraceString(");");
  var opresult1313 = callmethod(opresult1310, "++", [1], string1311);
  lineNumber = 407
  var call1314 = callmethod(this,"out", [1], opresult1313);
  var string1315 = new GraceString("_apply");
  var bool1316 = new GraceBoolean(false)
  lineNumber = 408
  lineNumber = 1
  lineNumber = 407
  var call1317 = callmethod(var_ast,"identifierNode", [0]);
  var call1318 = callmethod(call1317,"new", [2], string1315, bool1316);
  var var_id = call1318;
  lineNumber = 408
  lineNumber = 1
  lineNumber = 408
  var call1320 = callmethod(var_o,"params", [0]);
  lineNumber = 1
  lineNumber = 408
  var call1321 = callmethod(var_ast,"signaturePart", [0]);
  var call1322 = callmethod(call1321,"new", [2], var_id, call1320);
  var array1319 = new GraceList([
call1322,
]);

  lineNumber = 1
  lineNumber = 408
  var call1323 = callmethod(var_o,"body", [0]);
  var bool1324 = new GraceBoolean(false)
  lineNumber = 409
  lineNumber = 1
  lineNumber = 408
  var call1325 = callmethod(var_ast,"methodNode", [0]);
  var call1326 = callmethod(call1325,"new", [4], var_id, array1319, call1323, bool1324);
  var var_applymeth = call1326;
  lineNumber = 410
  lineNumber = 1
  lineNumber = 409
  var bool1327 = new GraceBoolean(true)
  var call1328 = callmethod(var_applymeth,"selfclosure:=", [1], bool1327);
  lineNumber = 410
  lineNumber = 411
  var call1329 = callmethod(this,"compilemethod", [3], var_applymeth, var_obj, new GraceNum(0));
  lineNumber = 414
  lineNumber = 416
  lineNumber = 411
  var bool1331 = new GraceBoolean(false)
  lineNumber = 416
  lineNumber = 1
  lineNumber = 411
  var call1332 = callmethod(var_o,"matchingPattern", [0]);
  var opresult1334 = callmethod(bool1331, "!=", [1], call1332);
  if (Grace_isTrue(opresult1334)) {
  lineNumber = 412
  lineNumber = 1
  lineNumber = 412
  var call1335 = callmethod(var_o,"matchingPattern", [0]);
  lineNumber = 413
  var call1336 = callmethod(this,"compilenode", [1], call1335);
  var var_pat = call1336;
  var string1337 = new GraceString("((struct UserObject *)");
  var opresult1339 = callmethod(string1337, "++", [1], var_obj);
  var string1340 = new GraceString(")->data[1] = ");
  var opresult1342 = callmethod(opresult1339, "++", [1], string1340);
  var opresult1344 = callmethod(opresult1342, "++", [1], var_pat);
  var string1345 = new GraceString(";");
  var opresult1347 = callmethod(opresult1344, "++", [1], string1345);
  lineNumber = 414
  var call1348 = callmethod(this,"out", [1], opresult1347);
  var string1349 = new GraceString("((struct UserObject *)");
  var opresult1351 = callmethod(string1349, "++", [1], var_obj);
  var string1352 = new GraceString(")->data[2] = ");
  var opresult1354 = callmethod(opresult1351, "++", [1], string1352);
  var opresult1356 = callmethod(opresult1354, "++", [1], var_obj);
  var string1357 = new GraceString(";");
  var opresult1359 = callmethod(opresult1356, "++", [1], string1357);
  lineNumber = 415
  var call1360 = callmethod(this,"out", [1], opresult1359);
  var if1330 = call1360;
}
  lineNumber = 417
  lineNumber = 1
  lineNumber = 416
  var call1361 = callmethod(var_o,"register:=", [1], var_obj);
  lineNumber = 418
  lineNumber = 417
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
  this.methods["compileblock"] = func1281;
  lineNumber = 432
var func1362 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 421
  lineNumber = 420
  var var_myc = var_auto__95__count;
  lineNumber = 422
  lineNumber = 421
  var opresult1364 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1364;
  lineNumber = 422
  lineNumber = 1
  lineNumber = 422
  var call1365 = callmethod(var_o,"value", [0]);
  lineNumber = 423
  var call1366 = callmethod(this,"escapestring2", [1], call1365);
  var var_escName = call1366;
  lineNumber = 1
  lineNumber = 423
  var call1367 = callmethod(var_o,"value", [0]);
  lineNumber = 424
  var call1368 = callmethod(this,"escapeident", [1], call1367);
  var var_idName = call1368;
  var string1369 = new GraceString("// Type ");
  lineNumber = 1
  lineNumber = 424
  var call1370 = callmethod(var_o,"value", [0]);
  var opresult1372 = callmethod(string1369, "++", [1], call1370);
  var string1373 = new GraceString("");
  var opresult1375 = callmethod(opresult1372, "++", [1], string1373);
  lineNumber = 425
  var call1376 = callmethod(this,"out", [1], opresult1375);
  var string1377 = new GraceString("Object type");
  var opresult1379 = callmethod(string1377, "++", [1], var_myc);
  var string1380 = new GraceString(" = alloc_Type(\"");
  var opresult1382 = callmethod(opresult1379, "++", [1], string1380);
  var opresult1384 = callmethod(opresult1382, "++", [1], var_escName);
  var string1385 = new GraceString("\", ");
  var opresult1387 = callmethod(opresult1384, "++", [1], string1385);
  lineNumber = 1
  lineNumber = 425
  lineNumber = 1
  lineNumber = 425
  var call1388 = callmethod(var_o,"methods", [0]);
  var call1389 = callmethod(call1388,"size", [0]);
  var opresult1391 = callmethod(opresult1387, "++", [1], call1389);
  var string1392 = new GraceString(");");
  var opresult1394 = callmethod(opresult1391, "++", [1], string1392);
  lineNumber = 426
  var call1395 = callmethod(this,"out", [1], opresult1394);
  var string1396 = new GraceString("*var_");
  var opresult1398 = callmethod(string1396, "++", [1], var_idName);
  var string1399 = new GraceString(" = type");
  var opresult1401 = callmethod(opresult1398, "++", [1], string1399);
  var opresult1403 = callmethod(opresult1401, "++", [1], var_myc);
  var string1404 = new GraceString(";");
  var opresult1406 = callmethod(opresult1403, "++", [1], string1404);
  lineNumber = 427
  var call1407 = callmethod(this,"out", [1], opresult1406);
  lineNumber = 429
  lineNumber = 427
  lineNumber = 1
  lineNumber = 427
  var call1408 = callmethod(var_o,"methods", [0]);
  lineNumber = 429
  var block1409 = Grace_allocObject();
  block1409.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1409.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1409.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1409.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1409.receiver = this;
  block1409.className = 'block<genc:429>';
  block1409.real = function(
var_meth
) {
  lineNumber = 428
  lineNumber = 1
  lineNumber = 428
  var call1410 = callmethod(var_meth,"value", [0]);
  lineNumber = 429
  var call1411 = callmethod(this,"escapestring2", [1], call1410);
  var var_mnm = call1411;
  var string1412 = new GraceString("add_Method((ClassData)type");
  var opresult1414 = callmethod(string1412, "++", [1], var_myc);
  var string1415 = new GraceString(", \"");
  var opresult1417 = callmethod(opresult1414, "++", [1], string1415);
  var opresult1419 = callmethod(opresult1417, "++", [1], var_mnm);
  var string1420 = new GraceString("\", NULL);");
  var opresult1422 = callmethod(opresult1419, "++", [1], string1420);
  lineNumber = 430
  var call1423 = callmethod(this,"out", [1], opresult1422);
  return call1423;
};
  var call1424 = callmethod(Grace_prelude,"for()do", [1, 1], call1408, block1409);
  lineNumber = 432
  lineNumber = 1
  lineNumber = 431
  var string1425 = new GraceString("none");
  var call1426 = callmethod(var_o,"register:=", [1], string1425);
  return call1426
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compiletype"] = func1362;
  lineNumber = 456
var func1427 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 435
  lineNumber = 434
  var var_myc = var_auto__95__count;
  lineNumber = 436
  lineNumber = 435
  var opresult1429 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1429;
  lineNumber = 436
  var string1430 = new GraceString("  int forframe");
  var opresult1432 = callmethod(string1430, "++", [1], var_myc);
  var string1433 = new GraceString(" = gc_frame_new();");
  var opresult1435 = callmethod(opresult1432, "++", [1], string1433);
  lineNumber = 437
  var call1436 = callmethod(this,"out", [1], opresult1435);
  lineNumber = 1
  lineNumber = 437
  var call1437 = callmethod(var_o,"value", [0]);
  lineNumber = 438
  var call1438 = callmethod(this,"compilenode", [1], call1437);
  var var_over = call1438;
  var string1439 = new GraceString("  gc_frame_newslot(");
  var opresult1441 = callmethod(string1439, "++", [1], var_over);
  var string1442 = new GraceString(");");
  var opresult1444 = callmethod(opresult1441, "++", [1], string1442);
  lineNumber = 439
  var call1445 = callmethod(this,"out", [1], opresult1444);
  lineNumber = 440
  lineNumber = 1
  lineNumber = 439
  var call1446 = callmethod(var_o,"body", [0]);
  var var_blk = call1446;
  lineNumber = 440
  lineNumber = 441
  var call1447 = callmethod(this,"compilenode", [1], var_blk);
  var var_obj = call1447;
  var string1448 = new GraceString("  gc_frame_newslot(");
  var opresult1450 = callmethod(string1448, "++", [1], var_obj);
  var string1451 = new GraceString(");");
  var opresult1453 = callmethod(opresult1450, "++", [1], string1451);
  lineNumber = 442
  var call1454 = callmethod(this,"out", [1], opresult1453);
  var string1455 = new GraceString("  params[0] = ");
  var opresult1457 = callmethod(string1455, "++", [1], var_over);
  var string1458 = new GraceString(";");
  var opresult1460 = callmethod(opresult1457, "++", [1], string1458);
  lineNumber = 443
  var call1461 = callmethod(this,"out", [1], opresult1460);
  var string1462 = new GraceString("  partcv[0] = 1;");
  lineNumber = 444
  var call1463 = callmethod(this,"out", [1], string1462);
  var string1464 = new GraceString("  Object iter");
  var opresult1466 = callmethod(string1464, "++", [1], var_myc);
  var string1467 = new GraceString(" = callmethod(");
  var opresult1469 = callmethod(opresult1466, "++", [1], string1467);
  var opresult1471 = callmethod(opresult1469, "++", [1], var_over);
  var string1472 = new GraceString(", \"iter\", 1, partcv, params);");
  var opresult1474 = callmethod(opresult1471, "++", [1], string1472);
  lineNumber = 445
  var call1475 = callmethod(this,"out", [1], opresult1474);
  var string1476 = new GraceString("  gc_frame_newslot(iter");
  var opresult1478 = callmethod(string1476, "++", [1], var_myc);
  var string1479 = new GraceString(");");
  var opresult1481 = callmethod(opresult1478, "++", [1], string1479);
  lineNumber = 446
  var call1482 = callmethod(this,"out", [1], opresult1481);
  var string1483 = new GraceString("  int forvalslot");
  var opresult1485 = callmethod(string1483, "++", [1], var_myc);
  var string1486 = new GraceString(" = gc_frame_newslot(NULL);");
  var opresult1488 = callmethod(opresult1485, "++", [1], string1486);
  lineNumber = 447
  var call1489 = callmethod(this,"out", [1], opresult1488);
  var string1490 = new GraceString("  while(1) {");
  lineNumber = 448
  var call1491 = callmethod(this,"out", [1], string1490);
  var string1492 = new GraceString("    Object cond");
  var opresult1494 = callmethod(string1492, "++", [1], var_myc);
  var string1495 = new GraceString(" = callmethod(iter");
  var opresult1497 = callmethod(opresult1494, "++", [1], string1495);
  var opresult1499 = callmethod(opresult1497, "++", [1], var_myc);
  var string1500 = new GraceString(", \"havemore\", 0, NULL, NULL);");
  var opresult1502 = callmethod(opresult1499, "++", [1], string1500);
  lineNumber = 449
  var call1503 = callmethod(this,"out", [1], opresult1502);
  var string1504 = new GraceString("    if (!istrue(cond");
  var opresult1506 = callmethod(string1504, "++", [1], var_myc);
  var string1507 = new GraceString(")) break;");
  var opresult1509 = callmethod(opresult1506, "++", [1], string1507);
  lineNumber = 450
  var call1510 = callmethod(this,"out", [1], opresult1509);
  var string1511 = new GraceString("    params[0] = callmethod(iter");
  var opresult1513 = callmethod(string1511, "++", [1], var_myc);
  var string1514 = new GraceString(", \"next\", 0, NULL, NULL);");
  var opresult1516 = callmethod(opresult1513, "++", [1], string1514);
  lineNumber = 451
  var call1517 = callmethod(this,"out", [1], opresult1516);
  var string1518 = new GraceString("    gc_frame_setslot(forvalslot");
  var opresult1520 = callmethod(string1518, "++", [1], var_myc);
  var string1521 = new GraceString(", params[0]);");
  var opresult1523 = callmethod(opresult1520, "++", [1], string1521);
  lineNumber = 452
  var call1524 = callmethod(this,"out", [1], opresult1523);
  var string1525 = new GraceString("    callmethod(");
  var opresult1527 = callmethod(string1525, "++", [1], var_obj);
  var string1528 = new GraceString(", \"apply\", 1, partcv, params);");
  var opresult1530 = callmethod(opresult1527, "++", [1], string1528);
  lineNumber = 453
  var call1531 = callmethod(this,"out", [1], opresult1530);
  var string1532 = new GraceString("  }");
  lineNumber = 454
  var call1533 = callmethod(this,"out", [1], string1532);
  var string1534 = new GraceString("  gc_frame_end(forframe");
  var opresult1536 = callmethod(string1534, "++", [1], var_myc);
  var string1537 = new GraceString(");");
  var opresult1539 = callmethod(opresult1536, "++", [1], string1537);
  lineNumber = 455
  var call1540 = callmethod(this,"out", [1], opresult1539);
  lineNumber = 456
  lineNumber = 1
  lineNumber = 455
  var string1541 = new GraceString("none");
  var call1542 = callmethod(var_o,"register:=", [1], string1541);
  return call1542
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilefor"] = func1427;
  lineNumber = 678
var func1543 = function(argcv) {
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
  lineNumber = 463
  lineNumber = 462
  var var_origParamsUsed = var_paramsUsed;
  lineNumber = 464
  lineNumber = 463
  var_paramsUsed = new GraceNum(1);
  lineNumber = 465
  lineNumber = 464
  var var_origPartsUsed = var_partsUsed;
  lineNumber = 466
  lineNumber = 465
  var_partsUsed = new GraceNum(1);
  lineNumber = 467
  lineNumber = 466
  var var_origInBlock = var_inBlock;
  lineNumber = 468
  lineNumber = 1
  lineNumber = 467
  var call1544 = callmethod(var_o,"selfclosure", [0]);
  var_inBlock = call1544;
  lineNumber = 469
  lineNumber = 468
  var var_oldout = var_output;
  lineNumber = 470
  lineNumber = 469
  var var_oldbblock = var_bblock;
  lineNumber = 471
  lineNumber = 470
  var var_oldusedvars = var_usedvars;
  lineNumber = 472
  lineNumber = 471
  var var_olddeclaredvars = var_declaredvars;
  lineNumber = 473
  var array1545 = new GraceList([
]);

  var_output = array1545;
  lineNumber = 474
  var array1546 = new GraceList([
]);

  var_usedvars = array1546;
  lineNumber = 475
  var array1547 = new GraceList([
]);

  var_declaredvars = array1547;
  lineNumber = 476
  lineNumber = 475
  var var_myc = var_auto__95__count;
  lineNumber = 477
  lineNumber = 476
  var opresult1549 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1549;
  lineNumber = 478
  lineNumber = 1
  lineNumber = 478
  lineNumber = 1
  lineNumber = 477
  var call1550 = callmethod(var_o,"value", [0]);
  var call1551 = callmethod(call1550,"value", [0]);
  var var_name = call1551;
  lineNumber = 479
  lineNumber = 478
  var opresult1553 = callmethod(var_name, "++", [1], var_myc);
  var var_nm = opresult1553;
  lineNumber = 480
  lineNumber = 479
  var var_numslots = new GraceNum(0);
  lineNumber = 481
  lineNumber = 480
  var var_slot = new GraceNum(0);
  lineNumber = 482
  lineNumber = 481
  var bool1554 = new GraceBoolean(false)
  var var_haveTypedParams = bool1554;
  lineNumber = 482
  var string1555 = new GraceString("  int i;");
  lineNumber = 483
  var call1556 = callmethod(this,"out", [1], string1555);
  var string1557 = new GraceString("  int curarg = 0;");
  lineNumber = 484
  var call1558 = callmethod(this,"out", [1], string1557);
  var string1559 = new GraceString("  int pushcv[] = {1};");
  lineNumber = 485
  var call1560 = callmethod(this,"out", [1], string1559);
  lineNumber = 515
  lineNumber = 485
  lineNumber = 1
  lineNumber = 485
  lineNumber = 1
  lineNumber = 485
  var call1561 = callmethod(var_o,"signature", [0]);
  var call1562 = callmethod(call1561,"indices", [0]);
  lineNumber = 515
  var block1563 = Grace_allocObject();
  block1563.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1563.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1563.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1563.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1563.receiver = this;
  block1563.className = 'block<genc:515>';
  block1563.real = function(
var_partnr
) {
  lineNumber = 487
  lineNumber = 1
  lineNumber = 486
  var call1564 = callmethod(var_o,"signature", [0]);
  var idxres1565 = call1564.methods["[]"].call(call1564, [1], var_partnr);
  var var_part = idxres1565;
  lineNumber = 500
  lineNumber = 487
  lineNumber = 1
  lineNumber = 487
  var call1566 = callmethod(var_part,"params", [0]);
  lineNumber = 500
  var block1567 = Grace_allocObject();
  block1567.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1567.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1567.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1567.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1567.receiver = this;
  block1567.className = 'block<genc:500>';
  block1567.real = function(
var_param
) {
  lineNumber = 488
  lineNumber = 1
  lineNumber = 488
  var call1568 = callmethod(var_param,"value", [0]);
  lineNumber = 489
  var call1569 = callmethod(this,"escapeident", [1], call1568);
  var var_pn = call1569;
  var string1570 = new GraceString("  Object *var_");
  var opresult1572 = callmethod(string1570, "++", [1], var_pn);
  var string1573 = new GraceString(" = &(stackframe->slots[");
  var opresult1575 = callmethod(opresult1572, "++", [1], string1573);
  var opresult1577 = callmethod(opresult1575, "++", [1], var_slot);
  var string1578 = new GraceString("]);");
  var opresult1580 = callmethod(opresult1577, "++", [1], string1578);
  lineNumber = 490
  var call1581 = callmethod(this,"out", [1], opresult1580);
  var string1582 = new GraceString("  *var_");
  var opresult1584 = callmethod(string1582, "++", [1], var_pn);
  var string1585 = new GraceString(" = args[curarg];");
  var opresult1587 = callmethod(opresult1584, "++", [1], string1585);
  lineNumber = 491
  var call1588 = callmethod(this,"out", [1], opresult1587);
  var string1589 = new GraceString("  curarg++;");
  lineNumber = 492
  var call1590 = callmethod(this,"out", [1], string1589);
  var call1591 = callmethod(var_declaredvars,"push", [1], var_pn);
  lineNumber = 494
  lineNumber = 493
  var opresult1593 = callmethod(var_slot, "+", [1], new GraceNum(1));
  var_slot = opresult1593;
  lineNumber = 495
  lineNumber = 494
  var opresult1595 = callmethod(var_numslots, "+", [1], new GraceNum(1));
  var_numslots = opresult1595;
  lineNumber = 500
  lineNumber = 502
  lineNumber = 1
  lineNumber = 495
  var call1597 = callmethod(var_param,"dtype", [0]);
  var bool1598 = new GraceBoolean(false)
  var opresult1600 = callmethod(call1597, "!=", [1], bool1598);
  if (Grace_isTrue(opresult1600)) {
  lineNumber = 500
  lineNumber = 501
  lineNumber = 1
  lineNumber = 501
  lineNumber = 1
  lineNumber = 496
  var call1602 = callmethod(var_param,"dtype", [0]);
  var call1603 = callmethod(call1602,"value", [0]);
  var string1604 = new GraceString("Dynamic");
  var opresult1606 = callmethod(call1603, "!=", [1], string1604);
  lineNumber = 501
  lineNumber = 1
  lineNumber = 501
  lineNumber = 1
  lineNumber = 497
  var call1607 = callmethod(var_param,"dtype", [0]);
  var call1608 = callmethod(call1607,"kind", [0]);
  var string1609 = new GraceString("identifier");
  var opresult1611 = callmethod(call1608, "==", [1], string1609);
  lineNumber = 501
  lineNumber = 1
  lineNumber = 501
  lineNumber = 1
  lineNumber = 498
  var call1612 = callmethod(var_param,"dtype", [0]);
  var call1613 = callmethod(call1612,"kind", [0]);
  var string1614 = new GraceString("type");
  var opresult1616 = callmethod(call1613, "==", [1], string1614);
  var opresult1618 = callmethod(opresult1611, "||", [1], opresult1616);
  var opresult1620 = callmethod(opresult1606, "&&", [1], opresult1618);
  if (Grace_isTrue(opresult1620)) {
  lineNumber = 500
  lineNumber = 499
  var bool1621 = new GraceBoolean(true)
  var_haveTypedParams = bool1621;
  var if1601 = bool1621;
}
  var if1596 = if1601;
}
  return if1596;
};
  var call1622 = callmethod(Grace_prelude,"for()do", [1, 1], call1566, block1567);
  lineNumber = 515
  lineNumber = 516
  lineNumber = 1
  lineNumber = 503
  var call1624 = callmethod(var_part,"vararg", [0]);
  var bool1625 = new GraceBoolean(false)
  var opresult1627 = callmethod(call1624, "!=", [1], bool1625);
  if (Grace_isTrue(opresult1627)) {
  lineNumber = 504
  lineNumber = 1
  lineNumber = 504
  lineNumber = 1
  lineNumber = 504
  var call1628 = callmethod(var_part,"vararg", [0]);
  var call1629 = callmethod(call1628,"value", [0]);
  lineNumber = 505
  var call1630 = callmethod(this,"escapeident", [1], call1629);
  var var_van = call1630;
  var string1631 = new GraceString("  Object var_init_");
  var opresult1633 = callmethod(string1631, "++", [1], var_van);
  var string1634 = new GraceString(" = alloc_List();");
  var opresult1636 = callmethod(opresult1633, "++", [1], string1634);
  lineNumber = 506
  var call1637 = callmethod(this,"out", [1], opresult1636);
  var string1638 = new GraceString("  for (i = ");
  lineNumber = 1
  lineNumber = 506
  lineNumber = 1
  lineNumber = 506
  var call1639 = callmethod(var_part,"params", [0]);
  var call1640 = callmethod(call1639,"size", [0]);
  var opresult1642 = callmethod(string1638, "++", [1], call1640);
  var string1643 = new GraceString("; i < argcv[");
  var opresult1645 = callmethod(opresult1642, "++", [1], string1643);
  var diff1647 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult1649 = callmethod(opresult1645, "++", [1], diff1647);
  var string1650 = new GraceString("]; i++) {");
  var opresult1652 = callmethod(opresult1649, "++", [1], string1650);
  lineNumber = 507
  var call1653 = callmethod(this,"out", [1], opresult1652);
  var string1654 = new GraceString("    callmethod(var_init_");
  var opresult1656 = callmethod(string1654, "++", [1], var_van);
  var string1657 = new GraceString(", \"push\", 1, pushcv, &args[curarg]);");
  var opresult1659 = callmethod(opresult1656, "++", [1], string1657);
  lineNumber = 508
  var call1660 = callmethod(this,"out", [1], opresult1659);
  var string1661 = new GraceString("    curarg++;");
  lineNumber = 509
  var call1662 = callmethod(this,"out", [1], string1661);
  var string1663 = new GraceString("  }");
  lineNumber = 510
  var call1664 = callmethod(this,"out", [1], string1663);
  var string1665 = new GraceString("  Object *var_");
  var opresult1667 = callmethod(string1665, "++", [1], var_van);
  var string1668 = new GraceString(" = &(stackframe->slots[");
  var opresult1670 = callmethod(opresult1667, "++", [1], string1668);
  var opresult1672 = callmethod(opresult1670, "++", [1], var_slot);
  var string1673 = new GraceString("]);");
  var opresult1675 = callmethod(opresult1672, "++", [1], string1673);
  lineNumber = 511
  var call1676 = callmethod(this,"out", [1], opresult1675);
  var string1677 = new GraceString("  *var_");
  var opresult1679 = callmethod(string1677, "++", [1], var_van);
  var string1680 = new GraceString(" = var_init_");
  var opresult1682 = callmethod(opresult1679, "++", [1], string1680);
  var opresult1684 = callmethod(opresult1682, "++", [1], var_van);
  var string1685 = new GraceString(";");
  var opresult1687 = callmethod(opresult1684, "++", [1], string1685);
  lineNumber = 512
  var call1688 = callmethod(this,"out", [1], opresult1687);
  var call1689 = callmethod(var_declaredvars,"push", [1], var_van);
  lineNumber = 514
  lineNumber = 513
  var opresult1691 = callmethod(var_slot, "+", [1], new GraceNum(1));
  var_slot = opresult1691;
  lineNumber = 515
  lineNumber = 514
  var opresult1693 = callmethod(var_numslots, "+", [1], new GraceNum(1));
  var_numslots = opresult1693;
  var if1623 = opresult1693;
}
  return if1623;
};
  var call1694 = callmethod(Grace_prelude,"for()do", [1, 1], call1562, block1563);
  lineNumber = 517
  var string1695 = new GraceString("  Object *selfslot = &(stackframe->slots[");
  var opresult1697 = callmethod(string1695, "++", [1], var_slot);
  var string1698 = new GraceString("]);");
  var opresult1700 = callmethod(opresult1697, "++", [1], string1698);
  lineNumber = 518
  var call1701 = callmethod(this,"out", [1], opresult1700);
  var string1702 = new GraceString("  *selfslot = self;");
  lineNumber = 519
  var call1703 = callmethod(this,"out", [1], string1702);
  lineNumber = 520
  lineNumber = 519
  var opresult1705 = callmethod(var_slot, "+", [1], new GraceNum(1));
  var_slot = opresult1705;
  lineNumber = 521
  lineNumber = 520
  var opresult1707 = callmethod(var_numslots, "+", [1], new GraceNum(1));
  var_numslots = opresult1707;
  lineNumber = 522
  lineNumber = 521
  var string1708 = new GraceString("none");
  var var_ret = string1708;
  lineNumber = 522
  lineNumber = 1
  lineNumber = 522
  var call1709 = callmethod(var_o,"body", [0]);
  lineNumber = 523
  var call1710 = callmethod(this,"countbindings", [1], call1709);
  var opresult1712 = callmethod(var_numslots, "+", [1], call1710);
  var_numslots = opresult1712;
  lineNumber = 1
  lineNumber = 523
  var call1713 = callmethod(var_o,"body", [0]);
  lineNumber = 524
  var call1714 = callmethod(this,"definebindings", [2], call1713, var_slot);
  lineNumber = 525
  lineNumber = 524
  var bool1715 = new GraceBoolean(false)
  var var_tco = bool1715;
  lineNumber = 528
  lineNumber = 526
  lineNumber = 525
  lineNumber = 529
  lineNumber = 1
  lineNumber = 529
  lineNumber = 1
  lineNumber = 525
  var call1717 = callmethod(var_o,"body", [0]);
  var call1718 = callmethod(call1717,"size", [0]);
  var opresult1720 = callmethod(call1718, ">", [1], new GraceNum(0));
  var block1721 = Grace_allocObject();
  block1721.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1721.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1721.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1721.receiver = this;
  block1721.className = 'block<genc:525>';
  block1721.real = function(
) {
  lineNumber = 1
  lineNumber = 525
  lineNumber = 1
  lineNumber = 525
  lineNumber = 1
  lineNumber = 525
  var call1722 = callmethod(var_o,"body", [0]);
  var call1723 = callmethod(call1722,"last", [0]);
  var call1724 = callmethod(call1723,"kind", [0]);
  var string1725 = new GraceString("call");
  var opresult1727 = callmethod(call1724, "==", [1], string1725);
  return opresult1727;
};
  var opresult1729 = callmethod(opresult1720, "&&", [1], block1721);
  lineNumber = 526
  var block1730 = Grace_allocObject();
  block1730.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1730.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1730.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1730.receiver = this;
  block1730.className = 'block<genc:526>';
  block1730.real = function(
) {
  var string1731 = new GraceString("TailCall");
  lineNumber = 1
  lineNumber = 526
  var call1732 = callmethod(var_util,"extensions", [0]);
  var call1733 = callmethod(call1732,"contains", [1], string1731);
  return call1733;
};
  var opresult1735 = callmethod(opresult1729, "&&", [1], block1730);
  if (Grace_isTrue(opresult1735)) {
  lineNumber = 528
  lineNumber = 1
  lineNumber = 528
  lineNumber = 1
  lineNumber = 527
  var call1736 = callmethod(var_o,"body", [0]);
  var call1737 = callmethod(call1736,"pop", [0]);
  var_tco = call1737;
  var if1716 = call1737;
}
  lineNumber = 530
  lineNumber = 529
  lineNumber = 1
  lineNumber = 529
  var call1738 = callmethod(var_o,"body", [0]);
  lineNumber = 530
  var block1739 = Grace_allocObject();
  block1739.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1739.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1739.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1739.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1739.receiver = this;
  block1739.className = 'block<genc:530>';
  block1739.real = function(
var_l
) {
  lineNumber = 531
  var call1740 = callmethod(this,"compilenode", [1], var_l);
  var_ret = call1740;
  return call1740;
};
  var call1741 = callmethod(Grace_prelude,"for()do", [1, 1], call1738, block1739);
  lineNumber = 535
  lineNumber = 536
  lineNumber = 532
  var bool1743 = new GraceBoolean(false)
  var opresult1745 = callmethod(bool1743, "!=", [1], var_tco);
  if (Grace_isTrue(opresult1745)) {
  lineNumber = 533
  var bool1746 = new GraceBoolean(true)
  lineNumber = 534
  var call1747 = callmethod(this,"compilecall", [2], var_tco, bool1746);
  lineNumber = 535
  lineNumber = 1
  lineNumber = 534
  var call1748 = callmethod(var_tco,"register", [0]);
  var_ret = call1748;
  var if1742 = call1748;
}
  lineNumber = 536
  var string1749 = new GraceString("  gc_frame_end(frame);");
  lineNumber = 537
  var call1750 = callmethod(this,"out", [1], string1749);
  var string1751 = new GraceString("  return ");
  var opresult1753 = callmethod(string1751, "++", [1], var_ret);
  var string1754 = new GraceString(";");
  var opresult1756 = callmethod(opresult1753, "++", [1], string1754);
  lineNumber = 538
  var call1757 = callmethod(this,"out", [1], opresult1756);
  var string1758 = new GraceString("}");
  lineNumber = 539
  var call1759 = callmethod(this,"out", [1], string1758);
  lineNumber = 540
  lineNumber = 539
  var var_body = var_output;
  lineNumber = 540
  var call1760 = callmethod(this,"outswitchup", [0]);
  lineNumber = 542
  var array1761 = new GraceList([
]);

  var var_closurevars = array1761;
  lineNumber = 561
  lineNumber = 542
  lineNumber = 561
  var block1762 = Grace_allocObject();
  block1762.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1762.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1762.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1762.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1762.receiver = this;
  block1762.className = 'block<genc:561>';
  block1762.real = function(
var_u
) {
  lineNumber = 544
  lineNumber = 543
  var bool1763 = new GraceBoolean(false)
  var var_decl = bool1763;
  lineNumber = 547
  lineNumber = 544
  lineNumber = 547
  var block1764 = Grace_allocObject();
  block1764.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1764.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1764.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1764.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1764.receiver = this;
  block1764.className = 'block<genc:547>';
  block1764.real = function(
var_d
) {
  lineNumber = 548
  lineNumber = 545
  var opresult1767 = callmethod(var_d, "==", [1], var_u);
  if (Grace_isTrue(opresult1767)) {
  lineNumber = 547
  lineNumber = 546
  var bool1768 = new GraceBoolean(true)
  var_decl = bool1768;
  var if1765 = bool1768;
}
  return if1765;
};
  var call1769 = callmethod(Grace_prelude,"for()do", [1, 1], var_declaredvars, block1764);
  lineNumber = 561
  lineNumber = 549
  if (Grace_isTrue(var_decl)) {
  lineNumber = 551
  lineNumber = 550
  var_decl = var_decl;
  var if1770 = var_decl;
  } else {
  lineNumber = 553
  lineNumber = 552
  var bool1771 = new GraceBoolean(false)
  var var_found = bool1771;
  lineNumber = 556
  lineNumber = 553
  lineNumber = 556
  var block1772 = Grace_allocObject();
  block1772.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1772.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1772.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1772.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1772.receiver = this;
  block1772.className = 'block<genc:556>';
  block1772.real = function(
var_v
) {
  lineNumber = 557
  lineNumber = 554
  var opresult1775 = callmethod(var_v, "==", [1], var_u);
  if (Grace_isTrue(opresult1775)) {
  lineNumber = 556
  lineNumber = 555
  var bool1776 = new GraceBoolean(true)
  var_found = bool1776;
  var if1773 = bool1776;
}
  return if1773;
};
  var call1777 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block1772);
  lineNumber = 561
  lineNumber = 558
  if (Grace_isTrue(var_found)) {
  lineNumber = 560
  lineNumber = 559
  var_found = var_found;
  var if1778 = var_found;
  } else {
  lineNumber = 561
  var call1779 = callmethod(var_closurevars,"push", [1], var_u);
  var if1778 = call1779;
}
  var if1770 = if1778;
}
  return if1770;
};
  var call1780 = callmethod(Grace_prelude,"for()do", [1, 1], var_usedvars, block1762);
  lineNumber = 566
  lineNumber = 568
  lineNumber = 1
  lineNumber = 565
  var call1782 = callmethod(var_o,"selfclosure", [0]);
  if (Grace_isTrue(call1782)) {
  lineNumber = 566
  var string1783 = new GraceString("self");
  var call1784 = callmethod(var_closurevars,"push", [1], string1783);
  var if1781 = call1784;
}
  lineNumber = 568
  var string1785 = new GraceString("meth_");
  var opresult1787 = callmethod(string1785, "++", [1], var_modname);
  var string1788 = new GraceString("_");
  var opresult1790 = callmethod(opresult1787, "++", [1], string1788);
  var call1791 = callmethod(this,"escapestring2", [1], var_nm);
  var opresult1793 = callmethod(opresult1790, "++", [1], call1791);
  var string1794 = new GraceString("");
  var opresult1796 = callmethod(opresult1793, "++", [1], string1794);
  lineNumber = 569
  var call1797 = callmethod(this,"escapeident", [1], opresult1796);
  var var_litname = call1797;
  lineNumber = 584
  lineNumber = 586
  lineNumber = 1
  lineNumber = 569
  var call1799 = callmethod(var_closurevars,"size", [0]);
  var opresult1801 = callmethod(call1799, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1801)) {
  lineNumber = 577
  lineNumber = 579
  lineNumber = 1
  lineNumber = 570
  var call1803 = callmethod(var_o,"selfclosure", [0]);
  if (Grace_isTrue(call1803)) {
  lineNumber = 572
  lineNumber = 571
  var string1804 = new GraceString("Object ");
  var opresult1806 = callmethod(string1804, "++", [1], var_litname);
  var string1807 = new GraceString("(Object realself, int nparts, int *argcv, ");
  var opresult1809 = callmethod(opresult1806, "++", [1], string1807);
  lineNumber = 572
  var string1810 = new GraceString("Object *args, int32_t flags) {");
  var opresult1812 = callmethod(opresult1809, "++", [1], string1810);
  lineNumber = 573
  var call1813 = callmethod(this,"out", [1], opresult1812);
  var string1814 = new GraceString("  struct UserObject *uo = (struct UserObject*)realself;");
  lineNumber = 574
  var call1815 = callmethod(this,"out", [1], string1814);
  var if1802 = call1815;
  } else {
  lineNumber = 576
  lineNumber = 575
  var string1816 = new GraceString("Object ");
  var opresult1818 = callmethod(string1816, "++", [1], var_litname);
  var string1819 = new GraceString("(Object self, int nparts, int *argcv, Object *args, ");
  var opresult1821 = callmethod(opresult1818, "++", [1], string1819);
  lineNumber = 576
  var string1822 = new GraceString("int32_t flags) {");
  var opresult1824 = callmethod(opresult1821, "++", [1], string1822);
  lineNumber = 577
  var call1825 = callmethod(this,"out", [1], opresult1824);
  var string1826 = new GraceString("  struct UserObject *uo = (struct UserObject*)self;");
  lineNumber = 578
  var call1827 = callmethod(this,"out", [1], string1826);
  var if1802 = call1827;
}
  lineNumber = 579
  var string1828 = new GraceString("  Object closure = getdatum((Object)uo, ");
  var opresult1830 = callmethod(string1828, "++", [1], var_pos);
  var string1831 = new GraceString(", (flags>>24)&0xff);");
  var opresult1833 = callmethod(opresult1830, "++", [1], string1831);
  lineNumber = 580
  var call1834 = callmethod(this,"out", [1], opresult1833);
  var string1835 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
  var opresult1837 = callmethod(string1835, "++", [1], var_numslots);
  var string1838 = new GraceString(", getclosureframe(closure));");
  var opresult1840 = callmethod(opresult1837, "++", [1], string1838);
  lineNumber = 581
  var call1841 = callmethod(this,"out", [1], opresult1840);
  var if1798 = call1841;
  } else {
  lineNumber = 583
  lineNumber = 582
  var string1842 = new GraceString("Object ");
  var opresult1844 = callmethod(string1842, "++", [1], var_litname);
  var string1845 = new GraceString("(Object self, int nparts, int *argcv, Object *args, ");
  var opresult1847 = callmethod(opresult1844, "++", [1], string1845);
  lineNumber = 583
  var string1848 = new GraceString("int32_t flags) {");
  var opresult1850 = callmethod(opresult1847, "++", [1], string1848);
  lineNumber = 584
  var call1851 = callmethod(this,"out", [1], opresult1850);
  var string1852 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
  var opresult1854 = callmethod(string1852, "++", [1], var_numslots);
  var string1855 = new GraceString(", NULL);");
  var opresult1857 = callmethod(opresult1854, "++", [1], string1855);
  lineNumber = 585
  var call1858 = callmethod(this,"out", [1], opresult1857);
  var if1798 = call1858;
}
  lineNumber = 586
  var string1859 = new GraceString("  int frame = gc_frame_new();");
  lineNumber = 587
  var call1860 = callmethod(this,"out", [1], string1859);
  var string1861 = new GraceString("  gc_frame_newslot((Object)stackframe);");
  lineNumber = 588
  var call1862 = callmethod(this,"out", [1], string1861);
  lineNumber = 592
  lineNumber = 588
  lineNumber = 1
  lineNumber = 588
  lineNumber = 1
  lineNumber = 588
  var call1863 = callmethod(var_o,"signature", [0]);
  var call1864 = callmethod(call1863,"indices", [0]);
  lineNumber = 592
  var block1865 = Grace_allocObject();
  block1865.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1865.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1865.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1865.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1865.receiver = this;
  block1865.className = 'block<genc:592>';
  block1865.real = function(
var_partnr
) {
  lineNumber = 590
  lineNumber = 1
  lineNumber = 589
  var call1866 = callmethod(var_o,"signature", [0]);
  var idxres1867 = call1866.methods["[]"].call(call1866, [1], var_partnr);
  var var_part = idxres1867;
  lineNumber = 592
  lineNumber = 594
  lineNumber = 1
  lineNumber = 594
  lineNumber = 1
  lineNumber = 590
  var call1869 = callmethod(var_part,"params", [0]);
  var call1870 = callmethod(call1869,"size", [0]);
  var opresult1872 = callmethod(call1870, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1872)) {
  lineNumber = 591
  var string1873 = new GraceString("  if (nparts > 0 && argcv[");
  var diff1875 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult1877 = callmethod(string1873, "++", [1], diff1875);
  var string1878 = new GraceString("] < ");
  var opresult1880 = callmethod(opresult1877, "++", [1], string1878);
  lineNumber = 1
  lineNumber = 591
  lineNumber = 1
  lineNumber = 591
  var call1881 = callmethod(var_part,"params", [0]);
  var call1882 = callmethod(call1881,"size", [0]);
  var opresult1884 = callmethod(opresult1880, "++", [1], call1882);
  var string1885 = new GraceString(")");
  var opresult1887 = callmethod(opresult1884, "++", [1], string1885);
  lineNumber = 592
  var call1888 = callmethod(this,"out", [1], opresult1887);
  var string1889 = new GraceString("    gracedie(\"insufficient arguments to method\");");
  lineNumber = 593
  var call1890 = callmethod(this,"out", [1], string1889);
  var if1868 = call1890;
}
  return if1868;
};
  var call1891 = callmethod(Grace_prelude,"for()do", [1, 1], call1864, block1865);
  lineNumber = 600
  lineNumber = 599
  var var_i = new GraceNum(0);
  lineNumber = 601
  var array1892 = new GraceList([
]);

  var var_toremove = array1892;
  lineNumber = 605
  lineNumber = 601
  lineNumber = 1
  lineNumber = 601
  var call1893 = callmethod(var_o,"signature", [0]);
  lineNumber = 605
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
  block1894.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1894.receiver = this;
  block1894.className = 'block<genc:605>';
  block1894.real = function(
var_part
) {
  lineNumber = 602
  lineNumber = 1
  lineNumber = 602
  var call1895 = callmethod(var_part,"params", [0]);
  lineNumber = 605
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
  block1896.className = 'block<genc:605>';
  block1896.real = function(
var_p
) {
  lineNumber = 603
  lineNumber = 1
  lineNumber = 603
  var call1897 = callmethod(var_p,"value", [0]);
  lineNumber = 604
  var call1898 = callmethod(this,"escapeident", [1], call1897);
  var var_pn = call1898;
  lineNumber = 605
  lineNumber = 604
  var call1900 = callmethod(var_closurevars,"contains", [1], var_pn);
  if (Grace_isTrue(call1900)) {
  lineNumber = 605
  var call1901 = callmethod(var_toremove,"push", [1], var_pn);
  var if1899 = call1901;
}
  return if1899;
};
  var call1902 = callmethod(Grace_prelude,"for()do", [1, 1], call1895, block1896);
  return call1902;
};
  var call1903 = callmethod(Grace_prelude,"for()do", [1, 1], call1893, block1894);
  lineNumber = 610
  lineNumber = 609
  var var_origclosurevars = var_closurevars;
  lineNumber = 611
  var array1904 = new GraceList([
]);

  var_closurevars = array1904;
  lineNumber = 615
  lineNumber = 611
  lineNumber = 615
  var block1905 = Grace_allocObject();
  block1905.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1905.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1905.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1905.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1905.receiver = this;
  block1905.className = 'block<genc:615>';
  block1905.real = function(
var_pn
) {
  lineNumber = 612
  var call1907 = callmethod(var_toremove,"contains", [1], var_pn);
  if (Grace_isTrue(call1907)) {
  var if1906 = undefined;
  } else {
  lineNumber = 615
  var call1908 = callmethod(var_closurevars,"push", [1], var_pn);
  var if1906 = call1908;
}
  return if1906;
};
  var call1909 = callmethod(Grace_prelude,"for()do", [1, 1], var_origclosurevars, block1905);
  lineNumber = 618
  var string1910 = new GraceString("  Object params[");
  var opresult1912 = callmethod(string1910, "++", [1], var_paramsUsed);
  var string1913 = new GraceString("];");
  var opresult1915 = callmethod(opresult1912, "++", [1], string1913);
  lineNumber = 619
  var call1916 = callmethod(this,"out", [1], opresult1915);
  var string1917 = new GraceString("  int partcv[");
  var opresult1919 = callmethod(string1917, "++", [1], var_partsUsed);
  var string1920 = new GraceString("];");
  var opresult1922 = callmethod(opresult1919, "++", [1], string1920);
  lineNumber = 620
  var call1923 = callmethod(this,"out", [1], opresult1922);
  lineNumber = 621
  lineNumber = 620
  var var_j = new GraceNum(0);
  lineNumber = 628
  lineNumber = 621
  lineNumber = 628
  var block1924 = Grace_allocObject();
  block1924.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1924.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1924.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1924.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1924.receiver = this;
  block1924.className = 'block<genc:628>';
  block1924.real = function(
var_cv
) {
  lineNumber = 625
  lineNumber = 627
  lineNumber = 622
  var string1926 = new GraceString("self");
  var opresult1928 = callmethod(var_cv, "==", [1], string1926);
  if (Grace_isTrue(opresult1928)) {
  lineNumber = 623
  var string1929 = new GraceString("  Object self = *(getfromclosure(closure, ");
  var opresult1931 = callmethod(string1929, "++", [1], var_j);
  var string1932 = new GraceString("));");
  var opresult1934 = callmethod(opresult1931, "++", [1], string1932);
  lineNumber = 624
  var call1935 = callmethod(this,"out", [1], opresult1934);
  var if1925 = call1935;
  } else {
  lineNumber = 625
  var string1936 = new GraceString("  Object *var_");
  var opresult1938 = callmethod(string1936, "++", [1], var_cv);
  var string1939 = new GraceString(" = getfromclosure(closure, ");
  var opresult1941 = callmethod(opresult1938, "++", [1], string1939);
  var opresult1943 = callmethod(opresult1941, "++", [1], var_j);
  var string1944 = new GraceString(");");
  var opresult1946 = callmethod(opresult1943, "++", [1], string1944);
  lineNumber = 626
  var call1947 = callmethod(this,"out", [1], opresult1946);
  var if1925 = call1947;
}
  lineNumber = 628
  lineNumber = 627
  var opresult1949 = callmethod(var_j, "+", [1], new GraceNum(1));
  var_j = opresult1949;
  return opresult1949;
};
  var call1950 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block1924);
  lineNumber = 630
  lineNumber = 629
  lineNumber = 630
  var block1951 = Grace_allocObject();
  block1951.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1951.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1951.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1951.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1951.receiver = this;
  block1951.className = 'block<genc:630>';
  block1951.real = function(
var_l
) {
  lineNumber = 631
  var call1952 = callmethod(this,"out", [1], var_l);
  return call1952;
};
  var call1953 = callmethod(Grace_prelude,"for()do", [1, 1], var_body, block1951);
  lineNumber = 632
  var call1954 = callmethod(this,"outswitchdown", [0]);
  lineNumber = 634
  lineNumber = 633
  var_output = var_oldout;
  lineNumber = 635
  lineNumber = 634
  var_bblock = var_oldbblock;
  lineNumber = 636
  lineNumber = 635
  var_usedvars = var_oldusedvars;
  lineNumber = 637
  lineNumber = 636
  var_declaredvars = var_olddeclaredvars;
  lineNumber = 640
  lineNumber = 637
  lineNumber = 640
  var block1955 = Grace_allocObject();
  block1955.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1955.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1955.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1955.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1955.receiver = this;
  block1955.className = 'block<genc:640>';
  block1955.real = function(
var_cv
) {
  lineNumber = 643
  lineNumber = 638
  var string1957 = new GraceString("self");
  var opresult1959 = callmethod(var_cv, "/=", [1], string1957);
  if (Grace_isTrue(opresult1959)) {
  lineNumber = 640
  lineNumber = 639
  lineNumber = 1
  lineNumber = 639
  var call1961 = callmethod(var_usedvars,"contains", [1], var_cv);
  var call1962 = callmethod(call1961,"not", [0]);
  if (Grace_isTrue(call1962)) {
  lineNumber = 640
  var call1963 = callmethod(var_usedvars,"push", [1], var_cv);
  var if1960 = call1963;
}
  var if1956 = if1960;
}
  return if1956;
};
  var call1964 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block1955);
  lineNumber = 644
  var call1965 = Grace_length(var_name);
  var opresult1967 = callmethod(call1965, "+", [1], new GraceNum(1));
  var var_len = opresult1967;
  lineNumber = 672
  lineNumber = 675
  lineNumber = 645
  var bool1969 = new GraceBoolean(false)
  var opresult1971 = callmethod(var_selfobj, "==", [1], bool1969);
  if (Grace_isTrue(opresult1971)) {
  var if1968 = undefined;
  } else {
  lineNumber = 672
  lineNumber = 654
  lineNumber = 1
  lineNumber = 646
  var call1973 = callmethod(var_closurevars,"size", [0]);
  var opresult1975 = callmethod(call1973, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1975)) {
  lineNumber = 648
  lineNumber = 647
  var string1976 = new GraceString("uo");
  var opresult1978 = callmethod(string1976, "++", [1], var_myc);
  var string1979 = new GraceString("");
  var opresult1981 = callmethod(opresult1978, "++", [1], string1979);
  var var_uo2 = opresult1981;
  lineNumber = 648
  var string1982 = new GraceString("  struct UserObject *");
  var opresult1984 = callmethod(string1982, "++", [1], var_uo2);
  var string1985 = new GraceString(" = (struct UserObject*)");
  var opresult1987 = callmethod(opresult1984, "++", [1], string1985);
  var opresult1989 = callmethod(opresult1987, "++", [1], var_selfobj);
  var string1990 = new GraceString(";");
  var opresult1992 = callmethod(opresult1989, "++", [1], string1990);
  lineNumber = 649
  var call1993 = callmethod(this,"out", [1], opresult1992);
  var string1994 = new GraceString("  ");
  var opresult1996 = callmethod(string1994, "++", [1], var_uo2);
  var string1997 = new GraceString("->data[");
  var opresult1999 = callmethod(opresult1996, "++", [1], string1997);
  var opresult2001 = callmethod(opresult1999, "++", [1], var_pos);
  var string2002 = new GraceString("] = emptyclosure;");
  var opresult2004 = callmethod(opresult2001, "++", [1], string2002);
  lineNumber = 650
  var call2005 = callmethod(this,"out", [1], opresult2004);
  var string2006 = new GraceString("  Method *meth_");
  var opresult2008 = callmethod(string2006, "++", [1], var_litname);
  var string2009 = new GraceString(" = addmethod2pos(");
  var opresult2011 = callmethod(opresult2008, "++", [1], string2009);
  var opresult2013 = callmethod(opresult2011, "++", [1], var_selfobj);
  var string2014 = new GraceString(", \"");
  var opresult2016 = callmethod(opresult2013, "++", [1], string2014);
  var call2017 = callmethod(this,"escapestring2", [1], var_name);
  var opresult2019 = callmethod(opresult2016, "++", [1], call2017);
  var string2020 = new GraceString("\", &");
  var opresult2022 = callmethod(opresult2019, "++", [1], string2020);
  var opresult2024 = callmethod(opresult2022, "++", [1], var_litname);
  var string2025 = new GraceString(", ");
  var opresult2027 = callmethod(opresult2024, "++", [1], string2025);
  var opresult2029 = callmethod(opresult2027, "++", [1], var_pos);
  var string2030 = new GraceString(");");
  var opresult2032 = callmethod(opresult2029, "++", [1], string2030);
  lineNumber = 651
  var call2033 = callmethod(this,"out", [1], opresult2032);
  lineNumber = 652
  lineNumber = 651
  if (Grace_isTrue(var_haveTypedParams)) {
  lineNumber = 652
  lineNumber = 653
  var call2035 = callmethod(this,"compilemethodtypes", [2], var_litname, var_o);
  var if2034 = call2035;
}
  var if1972 = if2034;
  } else {
  lineNumber = 655
  var string2036 = new GraceString("  block_savedest(");
  var opresult2038 = callmethod(string2036, "++", [1], var_selfobj);
  var string2039 = new GraceString(");");
  var opresult2041 = callmethod(opresult2038, "++", [1], string2039);
  lineNumber = 656
  var call2042 = callmethod(this,"out", [1], opresult2041);
  lineNumber = 657
  lineNumber = 656
  var string2043 = new GraceString("  Object closure");
  var opresult2045 = callmethod(string2043, "++", [1], var_myc);
  var string2046 = new GraceString(" = createclosure(");
  var opresult2048 = callmethod(opresult2045, "++", [1], string2046);
  lineNumber = 657
  lineNumber = 1
  lineNumber = 657
  var call2049 = callmethod(var_closurevars,"size", [0]);
  var opresult2051 = callmethod(opresult2048, "++", [1], call2049);
  var string2052 = new GraceString(", \"");
  var call2053 = callmethod(this,"escapestring2", [1], var_name);
  var opresult2055 = callmethod(string2052, "++", [1], call2053);
  var string2056 = new GraceString("\");");
  var opresult2058 = callmethod(opresult2055, "++", [1], string2056);
  var opresult2060 = callmethod(opresult2051, "++", [1], opresult2058);
  lineNumber = 658
  var call2061 = callmethod(this,"out", [1], opresult2060);
  var string2062 = new GraceString("setclosureframe(closure");
  var opresult2064 = callmethod(string2062, "++", [1], var_myc);
  var string2065 = new GraceString(", stackframe);");
  var opresult2067 = callmethod(opresult2064, "++", [1], string2065);
  lineNumber = 659
  var call2068 = callmethod(this,"out", [1], opresult2067);
  lineNumber = 664
  lineNumber = 659
  lineNumber = 664
  var block2069 = Grace_allocObject();
  block2069.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2069.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2069.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2069.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2069.receiver = this;
  block2069.className = 'block<genc:664>';
  block2069.real = function(
var_v
) {
  lineNumber = 666
  lineNumber = 660
  var string2071 = new GraceString("self");
  var opresult2073 = callmethod(var_v, "==", [1], string2071);
  if (Grace_isTrue(opresult2073)) {
  lineNumber = 661
  var string2074 = new GraceString("  addtoclosure(closure");
  var opresult2076 = callmethod(string2074, "++", [1], var_myc);
  var string2077 = new GraceString(", selfslot);");
  var opresult2079 = callmethod(opresult2076, "++", [1], string2077);
  lineNumber = 662
  var call2080 = callmethod(this,"out", [1], opresult2079);
  lineNumber = 663
  lineNumber = 662
  var opresult2082 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2082;
  var if2070 = opresult2082;
  } else {
  lineNumber = 664
  var string2083 = new GraceString("  addtoclosure(closure");
  var opresult2085 = callmethod(string2083, "++", [1], var_myc);
  var string2086 = new GraceString(", var_");
  var opresult2088 = callmethod(opresult2085, "++", [1], string2086);
  var opresult2090 = callmethod(opresult2088, "++", [1], var_v);
  var string2091 = new GraceString(");");
  var opresult2093 = callmethod(opresult2090, "++", [1], string2091);
  lineNumber = 665
  var call2094 = callmethod(this,"out", [1], opresult2093);
  var if2070 = call2094;
}
  return if2070;
};
  var call2095 = callmethod(Grace_prelude,"for()do", [1, 1], var_closurevars, block2069);
  lineNumber = 668
  lineNumber = 667
  var string2096 = new GraceString("uo");
  var opresult2098 = callmethod(string2096, "++", [1], var_myc);
  var string2099 = new GraceString("");
  var opresult2101 = callmethod(opresult2098, "++", [1], string2099);
  var var_uo = opresult2101;
  lineNumber = 668
  var string2102 = new GraceString("  struct UserObject *");
  var opresult2104 = callmethod(string2102, "++", [1], var_uo);
  var string2105 = new GraceString(" = (struct UserObject*)");
  var opresult2107 = callmethod(opresult2104, "++", [1], string2105);
  var opresult2109 = callmethod(opresult2107, "++", [1], var_selfobj);
  var string2110 = new GraceString(";");
  var opresult2112 = callmethod(opresult2109, "++", [1], string2110);
  lineNumber = 669
  var call2113 = callmethod(this,"out", [1], opresult2112);
  var string2114 = new GraceString("  ");
  var opresult2116 = callmethod(string2114, "++", [1], var_uo);
  var string2117 = new GraceString("->data[");
  var opresult2119 = callmethod(opresult2116, "++", [1], string2117);
  var opresult2121 = callmethod(opresult2119, "++", [1], var_pos);
  var string2122 = new GraceString("] = (Object)closure");
  var opresult2124 = callmethod(opresult2121, "++", [1], string2122);
  var opresult2126 = callmethod(opresult2124, "++", [1], var_myc);
  var string2127 = new GraceString(";");
  var opresult2129 = callmethod(opresult2126, "++", [1], string2127);
  lineNumber = 670
  var call2130 = callmethod(this,"out", [1], opresult2129);
  var string2131 = new GraceString("  Method *meth_");
  var opresult2133 = callmethod(string2131, "++", [1], var_litname);
  var string2134 = new GraceString(" = addmethod2pos(");
  var opresult2136 = callmethod(opresult2133, "++", [1], string2134);
  var opresult2138 = callmethod(opresult2136, "++", [1], var_selfobj);
  var string2139 = new GraceString(", \"");
  var opresult2141 = callmethod(opresult2138, "++", [1], string2139);
  var call2142 = callmethod(this,"escapestring2", [1], var_name);
  var opresult2144 = callmethod(opresult2141, "++", [1], call2142);
  var string2145 = new GraceString("\", &");
  var opresult2147 = callmethod(opresult2144, "++", [1], string2145);
  var opresult2149 = callmethod(opresult2147, "++", [1], var_litname);
  var string2150 = new GraceString(", ");
  var opresult2152 = callmethod(opresult2149, "++", [1], string2150);
  var opresult2154 = callmethod(opresult2152, "++", [1], var_pos);
  var string2155 = new GraceString(");");
  var opresult2157 = callmethod(opresult2154, "++", [1], string2155);
  lineNumber = 671
  var call2158 = callmethod(this,"out", [1], opresult2157);
  lineNumber = 672
  lineNumber = 671
  if (Grace_isTrue(var_haveTypedParams)) {
  lineNumber = 672
  lineNumber = 673
  var call2160 = callmethod(this,"compilemethodtypes", [2], var_litname, var_o);
  var if2159 = call2160;
}
  var if1972 = if2159;
}
  var if1968 = if1972;
}
  lineNumber = 676
  lineNumber = 675
  var_inBlock = var_origInBlock;
  lineNumber = 677
  lineNumber = 676
  var_paramsUsed = var_origParamsUsed;
  lineNumber = 678
  lineNumber = 677
  var_partsUsed = var_origPartsUsed;
  return var_origPartsUsed
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilemethod"] = func1543;
  lineNumber = 709
var func2161 = function(argcv) {
  var curarg = 1;
  var var_litname = arguments[curarg];
  curarg++;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 681
  lineNumber = 680
  var string2162 = new GraceString("int argcv_");
  var opresult2164 = callmethod(string2162, "++", [1], var_litname);
  var string2165 = new GraceString("[] = {");
  var opresult2167 = callmethod(opresult2164, "++", [1], string2165);
  var var_argcv = opresult2167;
  lineNumber = 686
  lineNumber = 681
  lineNumber = 1
  lineNumber = 681
  lineNumber = 1
  lineNumber = 681
  var call2168 = callmethod(var_o,"signature", [0]);
  var call2169 = callmethod(call2168,"indices", [0]);
  lineNumber = 686
  var block2170 = Grace_allocObject();
  block2170.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2170.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2170.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2170.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2170.receiver = this;
  block2170.className = 'block<genc:686>';
  block2170.real = function(
var_partnr
) {
  lineNumber = 683
  lineNumber = 1
  lineNumber = 682
  var call2171 = callmethod(var_o,"signature", [0]);
  var idxres2172 = call2171.methods["[]"].call(call2171, [1], var_partnr);
  var var_part = idxres2172;
  lineNumber = 684
  lineNumber = 683
  lineNumber = 684
  lineNumber = 1
  lineNumber = 684
  lineNumber = 1
  lineNumber = 683
  var call2173 = callmethod(var_part,"params", [0]);
  var call2174 = callmethod(call2173,"size", [0]);
  var opresult2176 = callmethod(var_argcv, "++", [1], call2174);
  var_argcv = opresult2176;
  lineNumber = 686
  lineNumber = 687
  lineNumber = 684
  lineNumber = 687
  lineNumber = 1
  lineNumber = 687
  lineNumber = 1
  lineNumber = 684
  var call2178 = callmethod(var_o,"signature", [0]);
  var call2179 = callmethod(call2178,"size", [0]);
  var opresult2181 = callmethod(var_partnr, "<", [1], call2179);
  if (Grace_isTrue(opresult2181)) {
  lineNumber = 686
  lineNumber = 685
  var string2182 = new GraceString(", ");
  var opresult2184 = callmethod(var_argcv, "++", [1], string2182);
  var_argcv = opresult2184;
  var if2177 = opresult2184;
}
  return if2177;
};
  var call2185 = callmethod(Grace_prelude,"for()do", [1, 1], call2169, block2170);
  lineNumber = 689
  lineNumber = 688
  var string2186 = new GraceString("};");
  var opresult2188 = callmethod(var_argcv, "++", [1], string2186);
  var_argcv = opresult2188;
  lineNumber = 689
  lineNumber = 690
  var call2189 = callmethod(this,"out", [1], var_argcv);
  var string2190 = new GraceString("meth_");
  var opresult2192 = callmethod(string2190, "++", [1], var_litname);
  var string2193 = new GraceString("->type = alloc_MethodType(");
  var opresult2195 = callmethod(opresult2192, "++", [1], string2193);
  lineNumber = 1
  lineNumber = 690
  lineNumber = 1
  lineNumber = 690
  var call2196 = callmethod(var_o,"signature", [0]);
  var call2197 = callmethod(call2196,"size", [0]);
  var opresult2199 = callmethod(opresult2195, "++", [1], call2197);
  var string2200 = new GraceString(", argcv_");
  var opresult2202 = callmethod(opresult2199, "++", [1], string2200);
  var opresult2204 = callmethod(opresult2202, "++", [1], var_litname);
  var string2205 = new GraceString(");");
  var opresult2207 = callmethod(opresult2204, "++", [1], string2205);
  lineNumber = 691
  var call2208 = callmethod(this,"out", [1], opresult2207);
  lineNumber = 692
  lineNumber = 691
  var var_pi = new GraceNum(0);
  lineNumber = 709
  lineNumber = 692
  lineNumber = 1
  lineNumber = 692
  var call2209 = callmethod(var_o,"signature", [0]);
  lineNumber = 709
  var block2210 = Grace_allocObject();
  block2210.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2210.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2210.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2210.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2210.receiver = this;
  block2210.className = 'block<genc:709>';
  block2210.real = function(
var_part
) {
  lineNumber = 693
  lineNumber = 1
  lineNumber = 693
  var call2211 = callmethod(var_part,"params", [0]);
  lineNumber = 709
  var block2212 = Grace_allocObject();
  block2212.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2212.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2212.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2212.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2212.receiver = this;
  block2212.className = 'block<genc:709>';
  block2212.real = function(
var_p
) {
  lineNumber = 704
  lineNumber = 708
  lineNumber = 696
  var bool2214 = new GraceBoolean(false)
  lineNumber = 708
  lineNumber = 1
  lineNumber = 696
  var call2215 = callmethod(var_p,"dtype", [0]);
  var opresult2217 = callmethod(bool2214, "!=", [1], call2215);
  if (Grace_isTrue(opresult2217)) {
  lineNumber = 704
  lineNumber = 707
  lineNumber = 1
  lineNumber = 707
  lineNumber = 1
  lineNumber = 697
  var call2219 = callmethod(var_p,"dtype", [0]);
  var call2220 = callmethod(call2219,"kind", [0]);
  var string2221 = new GraceString("identifier");
  var opresult2223 = callmethod(call2220, "==", [1], string2221);
  lineNumber = 707
  lineNumber = 1
  lineNumber = 707
  lineNumber = 1
  lineNumber = 698
  var call2224 = callmethod(var_p,"dtype", [0]);
  var call2225 = callmethod(call2224,"kind", [0]);
  var string2226 = new GraceString("type");
  var opresult2228 = callmethod(call2225, "==", [1], string2226);
  var opresult2230 = callmethod(opresult2223, "||", [1], opresult2228);
  if (Grace_isTrue(opresult2230)) {
  lineNumber = 699
  lineNumber = 1
  lineNumber = 699
  lineNumber = 1
  lineNumber = 699
  var call2231 = callmethod(var_p,"dtype", [0]);
  var call2232 = callmethod(call2231,"value", [0]);
  lineNumber = 700
  var call2233 = callmethod(this,"escapeident", [1], call2232);
  var var_typeid = call2233;
  lineNumber = 704
  lineNumber = 700
  var call2235 = callmethod(var_topLevelTypes,"contains", [1], var_typeid);
  if (Grace_isTrue(call2235)) {
  lineNumber = 702
  lineNumber = 701
  var string2236 = new GraceString("meth_");
  var opresult2238 = callmethod(string2236, "++", [1], var_litname);
  var string2239 = new GraceString("->type->types[");
  var opresult2241 = callmethod(opresult2238, "++", [1], string2239);
  var opresult2243 = callmethod(opresult2241, "++", [1], var_pi);
  var string2244 = new GraceString("] ");
  var opresult2246 = callmethod(opresult2243, "++", [1], string2244);
  lineNumber = 702
  var string2247 = new GraceString("= type_");
  var opresult2249 = callmethod(string2247, "++", [1], var_typeid);
  var string2250 = new GraceString(";");
  var opresult2252 = callmethod(opresult2249, "++", [1], string2250);
  var opresult2254 = callmethod(opresult2246, "++", [1], opresult2252);
  lineNumber = 703
  var call2255 = callmethod(this,"out", [1], opresult2254);
  lineNumber = 704
  lineNumber = 703
  var string2256 = new GraceString("meth_");
  var opresult2258 = callmethod(string2256, "++", [1], var_litname);
  var string2259 = new GraceString("->type->names[");
  var opresult2261 = callmethod(opresult2258, "++", [1], string2259);
  var opresult2263 = callmethod(opresult2261, "++", [1], var_pi);
  var string2264 = new GraceString("] ");
  var opresult2266 = callmethod(opresult2263, "++", [1], string2264);
  lineNumber = 704
  var string2267 = new GraceString("= \"");
  lineNumber = 1
  lineNumber = 704
  var call2268 = callmethod(var_p,"value", [0]);
  var call2269 = callmethod(this,"escapestring2", [1], call2268);
  var opresult2271 = callmethod(string2267, "++", [1], call2269);
  var string2272 = new GraceString("\";");
  var opresult2274 = callmethod(opresult2271, "++", [1], string2272);
  var opresult2276 = callmethod(opresult2266, "++", [1], opresult2274);
  lineNumber = 705
  var call2277 = callmethod(this,"out", [1], opresult2276);
  var if2234 = call2277;
}
  var if2218 = if2234;
}
  var if2213 = if2218;
}
  lineNumber = 709
  lineNumber = 708
  var opresult2279 = callmethod(var_pi, "+", [1], new GraceNum(1));
  var_pi = opresult2279;
  return opresult2279;
};
  var call2280 = callmethod(Grace_prelude,"for()do", [1, 1], call2211, block2212);
  return call2280;
};
  var call2281 = callmethod(Grace_prelude,"for()do", [1, 1], call2209, block2210);
  return call2281
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilemethodtypes"] = func2161;
  lineNumber = 735
var func2282 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 714
  lineNumber = 713
  var var_myc = var_auto__95__count;
  lineNumber = 715
  lineNumber = 714
  var opresult2284 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2284;
  lineNumber = 715
  lineNumber = 1
  lineNumber = 715
  var call2285 = callmethod(var_o,"body", [0]);
  lineNumber = 716
  var call2286 = callmethod(this,"countbindings", [1], call2285);
  var var_numslots = call2286;
  var string2287 = new GraceString("  int while_cond");
  var opresult2289 = callmethod(string2287, "++", [1], var_myc);
  var string2290 = new GraceString(" = gc_frame_newslot(undefined);");
  var opresult2292 = callmethod(opresult2289, "++", [1], string2290);
  lineNumber = 717
  var call2293 = callmethod(this,"out", [1], opresult2292);
  var string2294 = new GraceString("struct StackFrameObject *whiletmpstackframe");
  var opresult2296 = callmethod(string2294, "++", [1], var_myc);
  var string2297 = new GraceString(" = stackframe;");
  var opresult2299 = callmethod(opresult2296, "++", [1], string2297);
  lineNumber = 718
  var call2300 = callmethod(this,"out", [1], opresult2299);
  var string2301 = new GraceString("  while (1) {");
  lineNumber = 719
  var call2302 = callmethod(this,"out", [1], string2301);
  var string2303 = new GraceString("  int while_frame");
  var opresult2305 = callmethod(string2303, "++", [1], var_myc);
  var string2306 = new GraceString(" = gc_frame_new();");
  var opresult2308 = callmethod(opresult2305, "++", [1], string2306);
  lineNumber = 720
  var call2309 = callmethod(this,"out", [1], opresult2308);
  var string2310 = new GraceString("stackframe = alloc_StackFrame(");
  var opresult2312 = callmethod(string2310, "++", [1], var_numslots);
  var string2313 = new GraceString(", whiletmpstackframe");
  var opresult2315 = callmethod(opresult2312, "++", [1], string2313);
  var opresult2317 = callmethod(opresult2315, "++", [1], var_myc);
  var string2318 = new GraceString(");");
  var opresult2320 = callmethod(opresult2317, "++", [1], string2318);
  lineNumber = 721
  var call2321 = callmethod(this,"out", [1], opresult2320);
  var string2322 = new GraceString("gc_frame_newslot(stackframe);");
  lineNumber = 722
  var call2323 = callmethod(this,"out", [1], string2322);
  lineNumber = 1
  lineNumber = 722
  var call2324 = callmethod(var_o,"value", [0]);
  lineNumber = 723
  var call2325 = callmethod(this,"compilenode", [1], call2324);
  var var_cond = call2325;
  var string2326 = new GraceString("    gc_frame_setslot(while_cond");
  var opresult2328 = callmethod(string2326, "++", [1], var_myc);
  var string2329 = new GraceString(", ");
  var opresult2331 = callmethod(opresult2328, "++", [1], string2329);
  var opresult2333 = callmethod(opresult2331, "++", [1], var_cond);
  var string2334 = new GraceString(");");
  var opresult2336 = callmethod(opresult2333, "++", [1], string2334);
  lineNumber = 724
  var call2337 = callmethod(this,"out", [1], opresult2336);
  var string2338 = new GraceString("    if (!istrue(");
  var opresult2340 = callmethod(string2338, "++", [1], var_cond);
  var string2341 = new GraceString(")) break;");
  var opresult2343 = callmethod(opresult2340, "++", [1], string2341);
  lineNumber = 725
  var call2344 = callmethod(this,"out", [1], opresult2343);
  lineNumber = 726
  lineNumber = 725
  var string2345 = new GraceString("null");
  var var_tret = string2345;
  lineNumber = 727
  lineNumber = 726
  var var_slot = new GraceNum(0);
  lineNumber = 727
  lineNumber = 1
  lineNumber = 727
  var call2346 = callmethod(var_o,"body", [0]);
  lineNumber = 728
  var call2347 = callmethod(this,"definebindings", [2], call2346, new GraceNum(0));
  lineNumber = 729
  lineNumber = 728
  lineNumber = 1
  lineNumber = 728
  var call2348 = callmethod(var_o,"body", [0]);
  lineNumber = 729
  var block2349 = Grace_allocObject();
  block2349.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2349.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2349.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2349.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2349.receiver = this;
  block2349.className = 'block<genc:729>';
  block2349.real = function(
var_l
) {
  lineNumber = 730
  var call2350 = callmethod(this,"compilenode", [1], var_l);
  var_tret = call2350;
  return call2350;
};
  var call2351 = callmethod(Grace_prelude,"for()do", [1, 1], call2348, block2349);
  lineNumber = 731
  var string2352 = new GraceString("  gc_frame_end(while_frame");
  var opresult2354 = callmethod(string2352, "++", [1], var_myc);
  var string2355 = new GraceString(");");
  var opresult2357 = callmethod(opresult2354, "++", [1], string2355);
  lineNumber = 732
  var call2358 = callmethod(this,"out", [1], opresult2357);
  var string2359 = new GraceString("  }");
  lineNumber = 733
  var call2360 = callmethod(this,"out", [1], string2359);
  var string2361 = new GraceString("stackframe = whiletmpstackframe");
  var opresult2363 = callmethod(string2361, "++", [1], var_myc);
  var string2364 = new GraceString(";");
  var opresult2366 = callmethod(opresult2363, "++", [1], string2364);
  lineNumber = 734
  var call2367 = callmethod(this,"out", [1], opresult2366);
  lineNumber = 735
  lineNumber = 1
  lineNumber = 734
  var string2368 = new GraceString("none");
  var call2369 = callmethod(var_o,"register:=", [1], string2368);
  return call2369
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilewhile"] = func2282;
  lineNumber = 771
var func2370 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 738
  lineNumber = 737
  var var_myc = var_auto__95__count;
  lineNumber = 739
  lineNumber = 738
  var opresult2372 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2372;
  lineNumber = 739
  lineNumber = 1
  lineNumber = 739
  var call2373 = callmethod(var_o,"value", [0]);
  lineNumber = 740
  var call2374 = callmethod(this,"compilenode", [1], call2373);
  var var_cond = call2374;
  var string2375 = new GraceString("  Object if");
  var opresult2377 = callmethod(string2375, "++", [1], var_myc);
  var string2378 = new GraceString(" = none;");
  var opresult2380 = callmethod(opresult2377, "++", [1], string2378);
  lineNumber = 741
  var call2381 = callmethod(this,"out", [1], opresult2380);
  var string2382 = new GraceString("struct StackFrameObject *iftmpstackframe");
  var opresult2384 = callmethod(string2382, "++", [1], var_myc);
  var string2385 = new GraceString(" = stackframe;");
  var opresult2387 = callmethod(opresult2384, "++", [1], string2385);
  lineNumber = 742
  var call2388 = callmethod(this,"out", [1], opresult2387);
  var string2389 = new GraceString("  if (istrue(");
  var opresult2391 = callmethod(string2389, "++", [1], var_cond);
  var string2392 = new GraceString(")) {");
  var opresult2394 = callmethod(opresult2391, "++", [1], string2392);
  lineNumber = 743
  var call2395 = callmethod(this,"out", [1], opresult2394);
  lineNumber = 1
  lineNumber = 743
  var call2396 = callmethod(var_o,"thenblock", [0]);
  lineNumber = 744
  var call2397 = callmethod(this,"countbindings", [1], call2396);
  var var_numslots = call2397;
  var string2398 = new GraceString("stackframe = alloc_StackFrame(");
  var opresult2400 = callmethod(string2398, "++", [1], var_numslots);
  var string2401 = new GraceString(", iftmpstackframe");
  var opresult2403 = callmethod(opresult2400, "++", [1], string2401);
  var opresult2405 = callmethod(opresult2403, "++", [1], var_myc);
  var string2406 = new GraceString(");");
  var opresult2408 = callmethod(opresult2405, "++", [1], string2406);
  lineNumber = 745
  var call2409 = callmethod(this,"out", [1], opresult2408);
  var string2410 = new GraceString("gc_frame_newslot(stackframe);");
  lineNumber = 746
  var call2411 = callmethod(this,"out", [1], string2410);
  lineNumber = 747
  lineNumber = 746
  var string2412 = new GraceString("none");
  var var_tret = string2412;
  lineNumber = 748
  lineNumber = 747
  var string2413 = new GraceString("none");
  var var_fret = string2413;
  lineNumber = 749
  lineNumber = 748
  var string2414 = new GraceString("ERROR");
  var var_tblock = string2414;
  lineNumber = 750
  lineNumber = 749
  var string2415 = new GraceString("ERROR");
  var var_fblock = string2415;
  lineNumber = 750
  lineNumber = 1
  lineNumber = 750
  var call2416 = callmethod(var_o,"thenblock", [0]);
  lineNumber = 751
  var call2417 = callmethod(this,"definebindings", [2], call2416, new GraceNum(0));
  lineNumber = 752
  lineNumber = 751
  lineNumber = 1
  lineNumber = 751
  var call2418 = callmethod(var_o,"thenblock", [0]);
  lineNumber = 752
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
  block2419.className = 'block<genc:752>';
  block2419.real = function(
var_l
) {
  lineNumber = 753
  var call2420 = callmethod(this,"compilenode", [1], var_l);
  var_tret = call2420;
  return call2420;
};
  var call2421 = callmethod(Grace_prelude,"for()do", [1, 1], call2418, block2419);
  lineNumber = 754
  var string2422 = new GraceString("    gc_frame_newslot(");
  var opresult2424 = callmethod(string2422, "++", [1], var_tret);
  var string2425 = new GraceString(");");
  var opresult2427 = callmethod(opresult2424, "++", [1], string2425);
  lineNumber = 755
  var call2428 = callmethod(this,"out", [1], opresult2427);
  var string2429 = new GraceString("    if");
  var opresult2431 = callmethod(string2429, "++", [1], var_myc);
  var string2432 = new GraceString(" = ");
  var opresult2434 = callmethod(opresult2431, "++", [1], string2432);
  var opresult2436 = callmethod(opresult2434, "++", [1], var_tret);
  var string2437 = new GraceString(";");
  var opresult2439 = callmethod(opresult2436, "++", [1], string2437);
  lineNumber = 756
  var call2440 = callmethod(this,"out", [1], opresult2439);
  var string2441 = new GraceString("  } else {");
  lineNumber = 757
  var call2442 = callmethod(this,"out", [1], string2441);
  lineNumber = 766
  lineNumber = 768
  lineNumber = 1
  lineNumber = 768
  lineNumber = 1
  lineNumber = 757
  var call2444 = callmethod(var_o,"elseblock", [0]);
  var call2445 = callmethod(call2444,"size", [0]);
  var opresult2447 = callmethod(call2445, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2447)) {
  lineNumber = 758
  lineNumber = 1
  lineNumber = 758
  var call2448 = callmethod(var_o,"elseblock", [0]);
  lineNumber = 759
  var call2449 = callmethod(this,"countbindings", [1], call2448);
  var_numslots = call2449;
  var string2450 = new GraceString("stackframe = alloc_StackFrame(");
  var opresult2452 = callmethod(string2450, "++", [1], var_numslots);
  var string2453 = new GraceString(", iftmpstackframe");
  var opresult2455 = callmethod(opresult2452, "++", [1], string2453);
  var opresult2457 = callmethod(opresult2455, "++", [1], var_myc);
  var string2458 = new GraceString(");");
  var opresult2460 = callmethod(opresult2457, "++", [1], string2458);
  lineNumber = 760
  var call2461 = callmethod(this,"out", [1], opresult2460);
  var string2462 = new GraceString("gc_frame_newslot(stackframe);");
  lineNumber = 761
  var call2463 = callmethod(this,"out", [1], string2462);
  lineNumber = 1
  lineNumber = 761
  var call2464 = callmethod(var_o,"elseblock", [0]);
  lineNumber = 762
  var call2465 = callmethod(this,"definebindings", [2], call2464, new GraceNum(0));
  lineNumber = 763
  lineNumber = 762
  lineNumber = 1
  lineNumber = 762
  var call2466 = callmethod(var_o,"elseblock", [0]);
  lineNumber = 763
  var block2467 = Grace_allocObject();
  block2467.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2467.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2467.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2467.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2467.receiver = this;
  block2467.className = 'block<genc:763>';
  block2467.real = function(
var_l
) {
  lineNumber = 764
  var call2468 = callmethod(this,"compilenode", [1], var_l);
  var_fret = call2468;
  return call2468;
};
  var call2469 = callmethod(Grace_prelude,"for()do", [1, 1], call2466, block2467);
  lineNumber = 765
  var string2470 = new GraceString("    gc_frame_newslot(");
  var opresult2472 = callmethod(string2470, "++", [1], var_fret);
  var string2473 = new GraceString(");");
  var opresult2475 = callmethod(opresult2472, "++", [1], string2473);
  lineNumber = 766
  var call2476 = callmethod(this,"out", [1], opresult2475);
  var string2477 = new GraceString("    if");
  var opresult2479 = callmethod(string2477, "++", [1], var_myc);
  var string2480 = new GraceString(" = ");
  var opresult2482 = callmethod(opresult2479, "++", [1], string2480);
  var opresult2484 = callmethod(opresult2482, "++", [1], var_fret);
  var string2485 = new GraceString(";");
  var opresult2487 = callmethod(opresult2484, "++", [1], string2485);
  lineNumber = 767
  var call2488 = callmethod(this,"out", [1], opresult2487);
  var if2443 = call2488;
}
  lineNumber = 768
  var string2489 = new GraceString("  }");
  lineNumber = 769
  var call2490 = callmethod(this,"out", [1], string2489);
  var string2491 = new GraceString("stackframe = iftmpstackframe");
  var opresult2493 = callmethod(string2491, "++", [1], var_myc);
  var string2494 = new GraceString(";");
  var opresult2496 = callmethod(opresult2493, "++", [1], string2494);
  lineNumber = 770
  var call2497 = callmethod(this,"out", [1], opresult2496);
  lineNumber = 771
  lineNumber = 1
  lineNumber = 771
  lineNumber = 770
  var string2498 = new GraceString("if");
  var opresult2500 = callmethod(string2498, "++", [1], var_myc);
  var call2501 = callmethod(var_o,"register:=", [1], opresult2500);
  return call2501
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileifexpr"] = func2370;
  lineNumber = 800
var func2502 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 774
  lineNumber = 776
  lineNumber = 1
  lineNumber = 773
  var call2504 = callmethod(var_o,"handledIdentifiers", [0]);
  var bool2505 = new GraceBoolean(false)
  var opresult2507 = callmethod(call2504, "==", [1], bool2505);
  if (Grace_isTrue(opresult2507)) {
  lineNumber = 774
  lineNumber = 775
  var call2508 = callmethod(this,"compileifexpr", [1], var_o);
  return call2508
  var if2503 = undefined;
}
  lineNumber = 777
  lineNumber = 776
  var var_myc = var_auto__95__count;
  lineNumber = 778
  lineNumber = 777
  var opresult2510 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2510;
  lineNumber = 778
  lineNumber = 1
  lineNumber = 778
  var call2511 = callmethod(var_o,"value", [0]);
  lineNumber = 779
  var call2512 = callmethod(this,"compilenode", [1], call2511);
  var var_cond = call2512;
  var string2513 = new GraceString("  Object if");
  var opresult2515 = callmethod(string2513, "++", [1], var_myc);
  var string2516 = new GraceString(" = none;");
  var opresult2518 = callmethod(opresult2515, "++", [1], string2516);
  lineNumber = 780
  var call2519 = callmethod(this,"out", [1], opresult2518);
  var string2520 = new GraceString("  if (istrue(");
  var opresult2522 = callmethod(string2520, "++", [1], var_cond);
  var string2523 = new GraceString(")) {");
  var opresult2525 = callmethod(opresult2522, "++", [1], string2523);
  lineNumber = 781
  var call2526 = callmethod(this,"out", [1], opresult2525);
  lineNumber = 782
  lineNumber = 781
  var string2527 = new GraceString("none");
  var var_tret = string2527;
  lineNumber = 783
  lineNumber = 782
  var string2528 = new GraceString("none");
  var var_fret = string2528;
  lineNumber = 784
  lineNumber = 783
  var string2529 = new GraceString("ERROR");
  var var_tblock = string2529;
  lineNumber = 785
  lineNumber = 784
  var string2530 = new GraceString("ERROR");
  var var_fblock = string2530;
  lineNumber = 786
  lineNumber = 785
  lineNumber = 1
  lineNumber = 785
  var call2531 = callmethod(var_o,"thenblock", [0]);
  lineNumber = 786
  var block2532 = Grace_allocObject();
  block2532.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2532.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2532.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2532.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2532.receiver = this;
  block2532.className = 'block<genc:786>';
  block2532.real = function(
var_l
) {
  lineNumber = 787
  var call2533 = callmethod(this,"compilenode", [1], var_l);
  var_tret = call2533;
  return call2533;
};
  var call2534 = callmethod(Grace_prelude,"for()do", [1, 1], call2531, block2532);
  lineNumber = 788
  var string2535 = new GraceString("    gc_frame_newslot(");
  var opresult2537 = callmethod(string2535, "++", [1], var_tret);
  var string2538 = new GraceString(");");
  var opresult2540 = callmethod(opresult2537, "++", [1], string2538);
  lineNumber = 789
  var call2541 = callmethod(this,"out", [1], opresult2540);
  var string2542 = new GraceString("    if");
  var opresult2544 = callmethod(string2542, "++", [1], var_myc);
  var string2545 = new GraceString(" = ");
  var opresult2547 = callmethod(opresult2544, "++", [1], string2545);
  var opresult2549 = callmethod(opresult2547, "++", [1], var_tret);
  var string2550 = new GraceString(";");
  var opresult2552 = callmethod(opresult2549, "++", [1], string2550);
  lineNumber = 790
  var call2553 = callmethod(this,"out", [1], opresult2552);
  var string2554 = new GraceString("  } else {");
  lineNumber = 791
  var call2555 = callmethod(this,"out", [1], string2554);
  lineNumber = 796
  lineNumber = 798
  lineNumber = 1
  lineNumber = 798
  lineNumber = 1
  lineNumber = 791
  var call2557 = callmethod(var_o,"elseblock", [0]);
  var call2558 = callmethod(call2557,"size", [0]);
  var opresult2560 = callmethod(call2558, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2560)) {
  lineNumber = 793
  lineNumber = 792
  lineNumber = 1
  lineNumber = 792
  var call2561 = callmethod(var_o,"elseblock", [0]);
  lineNumber = 793
  var block2562 = Grace_allocObject();
  block2562.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2562.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2562.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2562.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2562.receiver = this;
  block2562.className = 'block<genc:793>';
  block2562.real = function(
var_l
) {
  lineNumber = 794
  var call2563 = callmethod(this,"compilenode", [1], var_l);
  var_fret = call2563;
  return call2563;
};
  var call2564 = callmethod(Grace_prelude,"for()do", [1, 1], call2561, block2562);
  lineNumber = 795
  var string2565 = new GraceString("    gc_frame_newslot(");
  var opresult2567 = callmethod(string2565, "++", [1], var_fret);
  var string2568 = new GraceString(");");
  var opresult2570 = callmethod(opresult2567, "++", [1], string2568);
  lineNumber = 796
  var call2571 = callmethod(this,"out", [1], opresult2570);
  var string2572 = new GraceString("    if");
  var opresult2574 = callmethod(string2572, "++", [1], var_myc);
  var string2575 = new GraceString(" = ");
  var opresult2577 = callmethod(opresult2574, "++", [1], string2575);
  var opresult2579 = callmethod(opresult2577, "++", [1], var_fret);
  var string2580 = new GraceString(";");
  var opresult2582 = callmethod(opresult2579, "++", [1], string2580);
  lineNumber = 797
  var call2583 = callmethod(this,"out", [1], opresult2582);
  var if2556 = call2583;
}
  lineNumber = 798
  var string2584 = new GraceString("  }");
  lineNumber = 799
  var call2585 = callmethod(this,"out", [1], string2584);
  lineNumber = 800
  lineNumber = 1
  lineNumber = 800
  lineNumber = 799
  var string2586 = new GraceString("if");
  var opresult2588 = callmethod(string2586, "++", [1], var_myc);
  var call2589 = callmethod(var_o,"register:=", [1], opresult2588);
  return call2589
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileif"] = func2502;
  lineNumber = 821
var func2590 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 802
  lineNumber = 1
  lineNumber = 802
  var call2591 = callmethod(var_o,"value", [0]);
  lineNumber = 803
  var call2592 = callmethod(this,"escapeident", [1], call2591);
  var var_name = call2592;
  lineNumber = 821
  lineNumber = 823
  lineNumber = 803
  var string2594 = new GraceString("self");
  var opresult2596 = callmethod(var_name, "==", [1], string2594);
  if (Grace_isTrue(opresult2596)) {
  lineNumber = 805
  lineNumber = 1
  lineNumber = 804
  var string2597 = new GraceString("self");
  var call2598 = callmethod(var_o,"register:=", [1], string2597);
  var if2593 = call2598;
  } else {
  lineNumber = 821
  lineNumber = 810
  lineNumber = 805
  var string2600 = new GraceString("__compilerRevision");
  var opresult2602 = callmethod(var_name, "==", [1], string2600);
  if (Grace_isTrue(opresult2602)) {
  lineNumber = 807
  lineNumber = 806
  var string2603 = new GraceString("  Object var_val___compilerRevision");
  var opresult2605 = callmethod(string2603, "++", [1], var_auto__95__count);
  lineNumber = 807
  var string2606 = new GraceString(" = alloc_String(compilerRevision);");
  var opresult2608 = callmethod(opresult2605, "++", [1], string2606);
  lineNumber = 808
  var call2609 = callmethod(this,"out", [1], opresult2608);
  lineNumber = 809
  lineNumber = 1
  lineNumber = 809
  lineNumber = 808
  var string2610 = new GraceString("var_val___compilerRevision");
  var opresult2612 = callmethod(string2610, "++", [1], var_auto__95__count);
  var call2613 = callmethod(var_o,"register:=", [1], opresult2612);
  lineNumber = 810
  lineNumber = 809
  var opresult2615 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2615;
  var if2599 = opresult2615;
  } else {
  lineNumber = 821
  lineNumber = 814
  lineNumber = 810
  var string2617 = new GraceString("_46__46__46_");
  var opresult2619 = callmethod(var_name, "==", [1], string2617);
  if (Grace_isTrue(opresult2619)) {
  lineNumber = 811
  var string2620 = new GraceString("  Object ellipsis");
  var opresult2622 = callmethod(string2620, "++", [1], var_auto__95__count);
  var string2623 = new GraceString(" = alloc_ellipsis();");
  var opresult2625 = callmethod(opresult2622, "++", [1], string2623);
  lineNumber = 812
  var call2626 = callmethod(this,"out", [1], opresult2625);
  lineNumber = 813
  lineNumber = 1
  lineNumber = 813
  lineNumber = 812
  var string2627 = new GraceString("ellipsis");
  var opresult2629 = callmethod(string2627, "++", [1], var_auto__95__count);
  var string2630 = new GraceString("");
  var opresult2632 = callmethod(opresult2629, "++", [1], string2630);
  var call2633 = callmethod(var_o,"register:=", [1], opresult2632);
  lineNumber = 814
  lineNumber = 813
  var opresult2635 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2635;
  var if2616 = opresult2635;
  } else {
  lineNumber = 815
  lineNumber = 816
  var call2636 = callmethod(this,"escapestring2", [1], var_name);
  var_name = call2636;
  lineNumber = 821
  lineNumber = 816
  var call2638 = callmethod(var_modules,"contains", [1], var_name);
  if (Grace_isTrue(call2638)) {
  lineNumber = 818
  lineNumber = 1
  lineNumber = 818
  lineNumber = 817
  var string2639 = new GraceString("module_");
  var opresult2641 = callmethod(string2639, "++", [1], var_name);
  var call2642 = callmethod(var_o,"register:=", [1], opresult2641);
  var if2637 = call2642;
  } else {
  lineNumber = 819
  var call2643 = callmethod(var_usedvars,"push", [1], var_name);
  lineNumber = 821
  lineNumber = 1
  lineNumber = 821
  lineNumber = 820
  var string2644 = new GraceString("*var_");
  var opresult2646 = callmethod(string2644, "++", [1], var_name);
  var string2647 = new GraceString("");
  var opresult2649 = callmethod(opresult2646, "++", [1], string2647);
  var call2650 = callmethod(var_o,"register:=", [1], opresult2649);
  var if2637 = call2650;
}
  var if2616 = if2637;
}
  var if2599 = if2616;
}
  var if2593 = if2599;
}
  return if2593
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileidentifier"] = func2590;
  lineNumber = 851
var func2651 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 826
  lineNumber = 1
  lineNumber = 825
  var call2652 = callmethod(var_o,"dest", [0]);
  var var_dest = call2652;
  lineNumber = 827
  lineNumber = 826
  var string2653 = new GraceString("");
  var var_val = string2653;
  lineNumber = 828
  lineNumber = 827
  var string2654 = new GraceString("");
  var var_c = string2654;
  lineNumber = 829
  lineNumber = 828
  var string2655 = new GraceString("");
  var var_r = string2655;
  lineNumber = 849
  lineNumber = 850
  lineNumber = 1
  lineNumber = 829
  var call2657 = callmethod(var_dest,"kind", [0]);
  var string2658 = new GraceString("identifier");
  var opresult2660 = callmethod(call2657, "==", [1], string2658);
  if (Grace_isTrue(opresult2660)) {
  lineNumber = 831
  lineNumber = 1
  lineNumber = 830
  var call2661 = callmethod(var_o,"value", [0]);
  var_val = call2661;
  lineNumber = 831
  lineNumber = 832
  var call2662 = callmethod(this,"compilenode", [1], var_val);
  var_val = call2662;
  lineNumber = 1
  lineNumber = 832
  var call2663 = callmethod(var_dest,"value", [0]);
  lineNumber = 833
  var call2664 = callmethod(this,"escapeident", [1], call2663);
  var var_nm = call2664;
  var call2665 = callmethod(var_usedvars,"push", [1], var_nm);
  lineNumber = 834
  var string2666 = new GraceString("  *var_");
  var opresult2668 = callmethod(string2666, "++", [1], var_nm);
  var string2669 = new GraceString(" = ");
  var opresult2671 = callmethod(opresult2668, "++", [1], string2669);
  var opresult2673 = callmethod(opresult2671, "++", [1], var_val);
  var string2674 = new GraceString(";");
  var opresult2676 = callmethod(opresult2673, "++", [1], string2674);
  lineNumber = 835
  var call2677 = callmethod(this,"out", [1], opresult2676);
  var string2678 = new GraceString("  if (");
  var opresult2680 = callmethod(string2678, "++", [1], var_val);
  var string2681 = new GraceString(" == undefined)");
  var opresult2683 = callmethod(opresult2680, "++", [1], string2681);
  lineNumber = 836
  var call2684 = callmethod(this,"out", [1], opresult2683);
  var string2685 = new GraceString("    callmethod(none, \"assignment\", 0, NULL, NULL);");
  lineNumber = 837
  var call2686 = callmethod(this,"out", [1], string2685);
  lineNumber = 838
  lineNumber = 837
  var opresult2688 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2688;
  lineNumber = 839
  lineNumber = 1
  lineNumber = 838
  var call2689 = callmethod(var_o,"register:=", [1], var_val);
  var if2656 = call2689;
  } else {
  lineNumber = 849
  lineNumber = 844
  lineNumber = 1
  lineNumber = 839
  var call2691 = callmethod(var_dest,"kind", [0]);
  var string2692 = new GraceString("member");
  var opresult2694 = callmethod(call2691, "==", [1], string2692);
  if (Grace_isTrue(opresult2694)) {
  lineNumber = 841
  lineNumber = 1
  lineNumber = 841
  lineNumber = 1
  lineNumber = 840
  var call2695 = callmethod(var_dest,"value", [0]);
  var string2696 = new GraceString(":=");
  var opresult2698 = callmethod(call2695, "++", [1], string2696);
  var call2699 = callmethod(var_dest,"value:=", [1], opresult2698);
  lineNumber = 841
  lineNumber = 1
  lineNumber = 841
  var call2701 = callmethod(var_dest,"value", [0]);
  lineNumber = 1
  lineNumber = 841
  var call2703 = callmethod(var_o,"value", [0]);
  var array2702 = new GraceList([
call2703,
]);

  lineNumber = 1
  lineNumber = 841
  var call2704 = callmethod(var_ast,"callWithPart", [0]);
  var call2705 = callmethod(call2704,"new", [2], call2701, array2702);
  var array2700 = new GraceList([
call2705,
]);

  lineNumber = 842
  lineNumber = 1
  lineNumber = 841
  var call2706 = callmethod(var_ast,"callNode", [0]);
  var call2707 = callmethod(call2706,"new", [2], var_dest, array2700);
  var_c = call2707;
  lineNumber = 842
  lineNumber = 843
  var call2708 = callmethod(this,"compilenode", [1], var_c);
  var_r = call2708;
  lineNumber = 844
  lineNumber = 1
  lineNumber = 843
  var call2709 = callmethod(var_o,"register:=", [1], var_r);
  var if2690 = call2709;
  } else {
  lineNumber = 849
  lineNumber = 850
  lineNumber = 1
  lineNumber = 844
  var call2711 = callmethod(var_dest,"kind", [0]);
  var string2712 = new GraceString("index");
  var opresult2714 = callmethod(call2711, "==", [1], string2712);
  if (Grace_isTrue(opresult2714)) {
  lineNumber = 845
  var string2715 = new GraceString("[]:=");
  lineNumber = 1
  lineNumber = 845
  var call2716 = callmethod(var_dest,"value", [0]);
  lineNumber = 846
  lineNumber = 1
  lineNumber = 845
  var call2717 = callmethod(var_ast,"memberNode", [0]);
  var call2718 = callmethod(call2717,"new", [2], string2715, call2716);
  var var_imem = call2718;
  lineNumber = 846
  lineNumber = 1
  lineNumber = 846
  var call2720 = callmethod(var_imem,"value", [0]);
  lineNumber = 1
  lineNumber = 846
  var call2722 = callmethod(var_dest,"index", [0]);
  lineNumber = 1
  lineNumber = 846
  var call2723 = callmethod(var_o,"value", [0]);
  var array2721 = new GraceList([
call2722,
call2723,
]);

  lineNumber = 1
  lineNumber = 846
  var call2724 = callmethod(var_ast,"callWithPart", [0]);
  var call2725 = callmethod(call2724,"new", [2], call2720, array2721);
  var array2719 = new GraceList([
call2725,
]);

  lineNumber = 847
  lineNumber = 1
  lineNumber = 846
  var call2726 = callmethod(var_ast,"callNode", [0]);
  var call2727 = callmethod(call2726,"new", [2], var_imem, array2719);
  var_c = call2727;
  lineNumber = 847
  lineNumber = 848
  var call2728 = callmethod(this,"compilenode", [1], var_c);
  var_r = call2728;
  lineNumber = 849
  lineNumber = 1
  lineNumber = 848
  var call2729 = callmethod(var_o,"register:=", [1], var_r);
  var if2710 = call2729;
}
  var if2690 = if2710;
}
  var if2656 = if2690;
}
  lineNumber = 851
  lineNumber = 1
  lineNumber = 850
  var string2730 = new GraceString("none");
  var call2731 = callmethod(var_o,"register:=", [1], string2730);
  return call2731
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilebind"] = func2651;
  lineNumber = 873
var func2732 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 854
  var var_nm;
  lineNumber = 857
  lineNumber = 859
  lineNumber = 1
  lineNumber = 859
  lineNumber = 1
  lineNumber = 854
  var call2734 = callmethod(var_o,"name", [0]);
  var call2735 = callmethod(call2734,"kind", [0]);
  var string2736 = new GraceString("generic");
  var opresult2738 = callmethod(call2735, "==", [1], string2736);
  if (Grace_isTrue(opresult2738)) {
  lineNumber = 855
  lineNumber = 1
  lineNumber = 855
  lineNumber = 1
  lineNumber = 855
  lineNumber = 1
  lineNumber = 855
  var call2739 = callmethod(var_o,"name", [0]);
  var call2740 = callmethod(call2739,"value", [0]);
  var call2741 = callmethod(call2740,"value", [0]);
  lineNumber = 856
  var call2742 = callmethod(this,"escapeident", [1], call2741);
  var_nm = call2742;
  var if2733 = call2742;
  } else {
  lineNumber = 857
  lineNumber = 1
  lineNumber = 857
  lineNumber = 1
  lineNumber = 857
  var call2743 = callmethod(var_o,"name", [0]);
  var call2744 = callmethod(call2743,"value", [0]);
  lineNumber = 858
  var call2745 = callmethod(this,"escapeident", [1], call2744);
  var_nm = call2745;
  var if2733 = call2745;
}
  lineNumber = 859
  var call2746 = callmethod(var_declaredvars,"push", [1], var_nm);
  lineNumber = 861
  lineNumber = 1
  lineNumber = 860
  var call2747 = callmethod(var_o,"value", [0]);
  var var_val = call2747;
  lineNumber = 864
  lineNumber = 866
  lineNumber = 861
  var bool2749 = new GraceBoolean(false)
  var opresult2751 = callmethod(bool2749, "!=", [1], var_val);
  if (Grace_isTrue(opresult2751)) {
  lineNumber = 862
  lineNumber = 863
  var call2752 = callmethod(this,"compilenode", [1], var_val);
  var_val = call2752;
  var if2748 = call2752;
  } else {
  lineNumber = 864
  var string2753 = new GraceString("const must have value bound.");
  var call2754 = callmethod(var_util,"syntax_error", [1], string2753);
  var if2748 = call2754;
}
  lineNumber = 866
  var string2755 = new GraceString("  *var_");
  var opresult2757 = callmethod(string2755, "++", [1], var_nm);
  var string2758 = new GraceString(" = ");
  var opresult2760 = callmethod(opresult2757, "++", [1], string2758);
  var opresult2762 = callmethod(opresult2760, "++", [1], var_val);
  var string2763 = new GraceString(";");
  var opresult2765 = callmethod(opresult2762, "++", [1], string2763);
  lineNumber = 867
  var call2766 = callmethod(this,"out", [1], opresult2765);
  var string2767 = new GraceString("  if (");
  var opresult2769 = callmethod(string2767, "++", [1], var_val);
  var string2770 = new GraceString(" == undefined)");
  var opresult2772 = callmethod(opresult2769, "++", [1], string2770);
  lineNumber = 868
  var call2773 = callmethod(this,"out", [1], opresult2772);
  var string2774 = new GraceString("    callmethod(none, \"assignment\", 0, NULL, NULL);");
  lineNumber = 869
  var call2775 = callmethod(this,"out", [1], string2774);
  lineNumber = 870
  lineNumber = 872
  lineNumber = 869
  var opresult2778 = callmethod(var_compilationDepth, "==", [1], new GraceNum(1));
  if (Grace_isTrue(opresult2778)) {
  lineNumber = 870
  lineNumber = 1
  lineNumber = 870
  var call2779 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 870
  var call2781 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 870
  var call2782 = callmethod(var_ast,"signaturePart", [0]);
  var call2783 = callmethod(call2782,"new", [1], call2781);
  var array2780 = new GraceList([
call2783,
]);

  lineNumber = 1
  lineNumber = 870
  var call2785 = callmethod(var_o,"name", [0]);
  var array2784 = new GraceList([
call2785,
]);

  var bool2786 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 870
  var call2787 = callmethod(var_ast,"methodNode", [0]);
  var call2788 = callmethod(call2787,"new", [4], call2779, array2780, array2784, bool2786);
  lineNumber = 871
  var call2789 = callmethod(this,"compilenode", [1], call2788);
  var if2776 = call2789;
}
  lineNumber = 873
  lineNumber = 1
  lineNumber = 872
  var string2790 = new GraceString("none");
  var call2791 = callmethod(var_o,"register:=", [1], string2790);
  return call2791
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compiledefdec"] = func2732;
  lineNumber = 898
var func2792 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 875
  lineNumber = 1
  lineNumber = 875
  lineNumber = 1
  lineNumber = 875
  var call2793 = callmethod(var_o,"name", [0]);
  var call2794 = callmethod(call2793,"value", [0]);
  lineNumber = 876
  var call2795 = callmethod(this,"escapeident", [1], call2794);
  var var_nm = call2795;
  var call2796 = callmethod(var_declaredvars,"push", [1], var_nm);
  lineNumber = 878
  lineNumber = 1
  lineNumber = 877
  var call2797 = callmethod(var_o,"value", [0]);
  var var_val = call2797;
  lineNumber = 879
  lineNumber = 878
  var bool2798 = new GraceBoolean(false)
  var var_hadval = bool2798;
  lineNumber = 884
  lineNumber = 885
  lineNumber = 879
  var bool2800 = new GraceBoolean(false)
  var opresult2802 = callmethod(bool2800, "!=", [1], var_val);
  if (Grace_isTrue(opresult2802)) {
  lineNumber = 880
  lineNumber = 881
  var call2803 = callmethod(this,"compilenode", [1], var_val);
  var_val = call2803;
  lineNumber = 882
  lineNumber = 881
  var bool2804 = new GraceBoolean(true)
  var_hadval = bool2804;
  var if2799 = bool2804;
  } else {
  lineNumber = 884
  lineNumber = 883
  var string2805 = new GraceString("undefined");
  var_val = string2805;
  var if2799 = string2805;
}
  lineNumber = 885
  var string2806 = new GraceString("  *var_");
  var opresult2808 = callmethod(string2806, "++", [1], var_nm);
  var string2809 = new GraceString(" = ");
  var opresult2811 = callmethod(opresult2808, "++", [1], string2809);
  var opresult2813 = callmethod(opresult2811, "++", [1], var_val);
  var string2814 = new GraceString(";");
  var opresult2816 = callmethod(opresult2813, "++", [1], string2814);
  lineNumber = 886
  var call2817 = callmethod(this,"out", [1], opresult2816);
  lineNumber = 888
  lineNumber = 886
  if (Grace_isTrue(var_hadval)) {
  lineNumber = 887
  var string2819 = new GraceString("  if (");
  var opresult2821 = callmethod(string2819, "++", [1], var_val);
  var string2822 = new GraceString(" == undefined)");
  var opresult2824 = callmethod(opresult2821, "++", [1], string2822);
  lineNumber = 888
  var call2825 = callmethod(this,"out", [1], opresult2824);
  var string2826 = new GraceString("    callmethod(none, \"assignment\", 0, NULL, NULL);");
  lineNumber = 889
  var call2827 = callmethod(this,"out", [1], string2826);
  var if2818 = call2827;
}
  lineNumber = 895
  lineNumber = 897
  lineNumber = 890
  var opresult2830 = callmethod(var_compilationDepth, "==", [1], new GraceNum(1));
  if (Grace_isTrue(opresult2830)) {
  lineNumber = 891
  lineNumber = 1
  lineNumber = 891
  var call2831 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 891
  var call2833 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 891
  var call2834 = callmethod(var_ast,"signaturePart", [0]);
  var call2835 = callmethod(call2834,"new", [1], call2833);
  var array2832 = new GraceList([
call2835,
]);

  lineNumber = 1
  lineNumber = 891
  var call2837 = callmethod(var_o,"name", [0]);
  var array2836 = new GraceList([
call2837,
]);

  var bool2838 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 891
  var call2839 = callmethod(var_ast,"methodNode", [0]);
  var call2840 = callmethod(call2839,"new", [4], call2831, array2832, array2836, bool2838);
  lineNumber = 892
  var call2841 = callmethod(this,"compilenode", [1], call2840);
  lineNumber = 1
  lineNumber = 892
  lineNumber = 1
  lineNumber = 892
  var call2842 = callmethod(var_o,"name", [0]);
  var call2843 = callmethod(call2842,"value", [0]);
  var string2844 = new GraceString(":=");
  var opresult2846 = callmethod(call2843, "++", [1], string2844);
  var bool2847 = new GraceBoolean(false)
  lineNumber = 893
  lineNumber = 1
  lineNumber = 892
  var call2848 = callmethod(var_ast,"identifierNode", [0]);
  var call2849 = callmethod(call2848,"new", [2], opresult2846, bool2847);
  var var_assignID = call2849;
  lineNumber = 893
  var string2850 = new GraceString("_var_assign_tmp");
  var bool2851 = new GraceBoolean(false)
  lineNumber = 894
  lineNumber = 1
  lineNumber = 893
  var call2852 = callmethod(var_ast,"identifierNode", [0]);
  var call2853 = callmethod(call2852,"new", [2], string2850, bool2851);
  var var_tmpID = call2853;
  lineNumber = 895
  lineNumber = 894
  var array2855 = new GraceList([
var_tmpID,
]);

  lineNumber = 1
  lineNumber = 894
  var call2856 = callmethod(var_ast,"signaturePart", [0]);
  var call2857 = callmethod(call2856,"new", [2], var_assignID, array2855);
  var array2854 = new GraceList([
call2857,
]);

  lineNumber = 895
  lineNumber = 1
  lineNumber = 895
  var call2859 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 895
  var call2860 = callmethod(var_ast,"bindNode", [0]);
  var call2861 = callmethod(call2860,"new", [2], call2859, var_tmpID);
  var array2858 = new GraceList([
call2861,
]);

  var bool2862 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 894
  var call2863 = callmethod(var_ast,"methodNode", [0]);
  var call2864 = callmethod(call2863,"new", [4], var_assignID, array2854, array2858, bool2862);
  lineNumber = 896
  var call2865 = callmethod(this,"compilenode", [1], call2864);
  var if2828 = call2865;
}
  lineNumber = 898
  lineNumber = 1
  lineNumber = 897
  var string2866 = new GraceString("none");
  var call2867 = callmethod(var_o,"register:=", [1], string2866);
  return call2867
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilevardec"] = func2792;
  lineNumber = 908
var func2868 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 900
  lineNumber = 1
  lineNumber = 900
  var call2869 = callmethod(var_o,"value", [0]);
  lineNumber = 901
  var call2870 = callmethod(this,"compilenode", [1], call2869);
  var var_of = call2870;
  lineNumber = 1
  lineNumber = 901
  var call2871 = callmethod(var_o,"index", [0]);
  lineNumber = 902
  var call2872 = callmethod(this,"compilenode", [1], call2871);
  var var_index = call2872;
  var string2873 = new GraceString("  params[0] = ");
  var opresult2875 = callmethod(string2873, "++", [1], var_index);
  var string2876 = new GraceString(";");
  var opresult2878 = callmethod(opresult2875, "++", [1], string2876);
  lineNumber = 903
  var call2879 = callmethod(this,"out", [1], opresult2878);
  var string2880 = new GraceString("  gc_frame_newslot(params[0]);");
  lineNumber = 904
  var call2881 = callmethod(this,"out", [1], string2880);
  var string2882 = new GraceString("  partcv[0] = 1;");
  lineNumber = 905
  var call2883 = callmethod(this,"out", [1], string2882);
  var string2884 = new GraceString("  Object idxres");
  var opresult2886 = callmethod(string2884, "++", [1], var_auto__95__count);
  var string2887 = new GraceString(" = callmethod(");
  var opresult2889 = callmethod(opresult2886, "++", [1], string2887);
  var opresult2891 = callmethod(opresult2889, "++", [1], var_of);
  var string2892 = new GraceString(", \"[]\", 1, partcv, params);");
  var opresult2894 = callmethod(opresult2891, "++", [1], string2892);
  lineNumber = 906
  var call2895 = callmethod(this,"out", [1], opresult2894);
  lineNumber = 907
  lineNumber = 1
  lineNumber = 907
  lineNumber = 906
  var string2896 = new GraceString("idxres");
  var opresult2898 = callmethod(string2896, "++", [1], var_auto__95__count);
  var call2899 = callmethod(var_o,"register:=", [1], opresult2898);
  lineNumber = 908
  lineNumber = 907
  var opresult2901 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2901;
  return opresult2901
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileindex"] = func2868;
  lineNumber = 941
var func2902 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 911
  lineNumber = 910
  var var_myc = var_auto__95__count;
  lineNumber = 912
  lineNumber = 911
  var opresult2904 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2904;
  lineNumber = 913
  lineNumber = 1
  lineNumber = 912
  var call2905 = callmethod(var_o,"cases", [0]);
  var var_cases = call2905;
  lineNumber = 915
  lineNumber = 916
  lineNumber = 1
  lineNumber = 916
  lineNumber = 1
  lineNumber = 913
  var call2907 = callmethod(var_o,"cases", [0]);
  var call2908 = callmethod(call2907,"size", [0]);
  var opresult2910 = callmethod(call2908, ">", [1], var_paramsUsed);
  if (Grace_isTrue(opresult2910)) {
  lineNumber = 915
  lineNumber = 1
  lineNumber = 915
  lineNumber = 1
  lineNumber = 914
  var call2911 = callmethod(var_o,"cases", [0]);
  var call2912 = callmethod(call2911,"size", [0]);
  var_paramsUsed = call2912;
  var if2906 = call2912;
}
  lineNumber = 916
  lineNumber = 1
  lineNumber = 916
  var call2913 = callmethod(var_o,"value", [0]);
  lineNumber = 917
  var call2914 = callmethod(this,"compilenode", [1], call2913);
  var var_matchee = call2914;
  var string2915 = new GraceString("  int frame");
  var opresult2917 = callmethod(string2915, "++", [1], var_myc);
  var string2918 = new GraceString(" = gc_frame_new();");
  var opresult2920 = callmethod(opresult2917, "++", [1], string2918);
  lineNumber = 918
  var call2921 = callmethod(this,"out", [1], opresult2920);
  var string2922 = new GraceString("  gc_frame_newslot(");
  var opresult2924 = callmethod(string2922, "++", [1], var_matchee);
  var string2925 = new GraceString(");");
  var opresult2927 = callmethod(opresult2924, "++", [1], string2925);
  lineNumber = 919
  var call2928 = callmethod(this,"out", [1], opresult2927);
  lineNumber = 920
  lineNumber = 919
  var var_i = new GraceNum(0);
  lineNumber = 921
  var array2929 = new GraceList([
]);

  var var_params = array2929;
  lineNumber = 926
  lineNumber = 921
  lineNumber = 926
  var block2930 = Grace_allocObject();
  block2930.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2930.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2930.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2930.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2930.receiver = this;
  block2930.className = 'block<genc:926>';
  block2930.real = function(
var_c
) {
  lineNumber = 922
  lineNumber = 923
  var call2931 = callmethod(this,"compilenode", [1], var_c);
  var var_e = call2931;
  var string2932 = new GraceString("  gc_frame_newslot(");
  var opresult2934 = callmethod(string2932, "++", [1], var_e);
  var string2935 = new GraceString(");");
  var opresult2937 = callmethod(opresult2934, "++", [1], string2935);
  lineNumber = 924
  var call2938 = callmethod(this,"out", [1], opresult2937);
  var array2939 = new GraceList([
var_i,
var_e,
]);

  var call2940 = callmethod(var_params,"push", [1], array2939);
  lineNumber = 926
  lineNumber = 925
  var opresult2942 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult2942;
  return opresult2942;
};
  var call2943 = callmethod(Grace_prelude,"for()do", [1, 1], var_cases, block2930);
  lineNumber = 928
  lineNumber = 927
  var string2944 = new GraceString("NULL");
  var var_elsecase = string2944;
  lineNumber = 930
  lineNumber = 932
  lineNumber = 928
  var bool2946 = new GraceBoolean(false)
  lineNumber = 932
  lineNumber = 1
  lineNumber = 928
  var call2947 = callmethod(var_o,"elsecase", [0]);
  var opresult2949 = callmethod(bool2946, "!=", [1], call2947);
  if (Grace_isTrue(opresult2949)) {
  lineNumber = 929
  lineNumber = 1
  lineNumber = 929
  var call2950 = callmethod(var_o,"elsecase", [0]);
  lineNumber = 930
  var call2951 = callmethod(this,"compilenode", [1], call2950);
  var_elsecase = call2951;
  var string2952 = new GraceString("  gc_frame_newslot(");
  var opresult2954 = callmethod(string2952, "++", [1], var_elsecase);
  var string2955 = new GraceString(");");
  var opresult2957 = callmethod(opresult2954, "++", [1], string2955);
  lineNumber = 931
  var call2958 = callmethod(this,"out", [1], opresult2957);
  var if2945 = call2958;
}
  lineNumber = 935
  lineNumber = 932
  lineNumber = 935
  var block2959 = Grace_allocObject();
  block2959.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2959.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2959.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2959.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2959.receiver = this;
  block2959.className = 'block<genc:935>';
  block2959.real = function(
var_ie
) {
  lineNumber = 934
  lineNumber = 933
  var idxres2960 = var_ie.methods["[]"].call(var_ie, [1], new GraceNum(1));
  var var_idx = idxres2960;
  lineNumber = 935
  lineNumber = 934
  var idxres2961 = var_ie.methods["[]"].call(var_ie, [1], new GraceNum(2));
  var var_e = idxres2961;
  lineNumber = 935
  var string2962 = new GraceString("  params[");
  var opresult2964 = callmethod(string2962, "++", [1], var_idx);
  var string2965 = new GraceString("] = ");
  var opresult2967 = callmethod(opresult2964, "++", [1], string2965);
  var opresult2969 = callmethod(opresult2967, "++", [1], var_e);
  var string2970 = new GraceString(";");
  var opresult2972 = callmethod(opresult2969, "++", [1], string2970);
  lineNumber = 936
  var call2973 = callmethod(this,"out", [1], opresult2972);
  return call2973;
};
  var call2974 = callmethod(Grace_prelude,"for()do", [1, 1], var_params, block2959);
  lineNumber = 938
  lineNumber = 937
  var string2975 = new GraceString("  Object matchres");
  var opresult2977 = callmethod(string2975, "++", [1], var_myc);
  var string2978 = new GraceString(" = matchCase(");
  var opresult2980 = callmethod(opresult2977, "++", [1], string2978);
  var opresult2982 = callmethod(opresult2980, "++", [1], var_matchee);
  var string2983 = new GraceString(", params, ");
  var opresult2985 = callmethod(opresult2982, "++", [1], string2983);
  lineNumber = 938
  lineNumber = 1
  lineNumber = 937
  var call2986 = callmethod(var_cases,"size", [0]);
  var opresult2988 = callmethod(opresult2985, "++", [1], call2986);
  var string2989 = new GraceString(",");
  var opresult2991 = callmethod(opresult2988, "++", [1], string2989);
  lineNumber = 938
  var string2992 = new GraceString("");
  var opresult2994 = callmethod(string2992, "++", [1], var_elsecase);
  var string2995 = new GraceString(");");
  var opresult2997 = callmethod(opresult2994, "++", [1], string2995);
  var opresult2999 = callmethod(opresult2991, "++", [1], opresult2997);
  lineNumber = 939
  var call3000 = callmethod(this,"out", [1], opresult2999);
  var string3001 = new GraceString("  gc_frame_end(frame");
  var opresult3003 = callmethod(string3001, "++", [1], var_myc);
  var string3004 = new GraceString(");");
  var opresult3006 = callmethod(opresult3003, "++", [1], string3004);
  lineNumber = 940
  var call3007 = callmethod(this,"out", [1], opresult3006);
  lineNumber = 941
  lineNumber = 1
  lineNumber = 941
  lineNumber = 940
  var string3008 = new GraceString("matchres");
  var opresult3010 = callmethod(string3008, "++", [1], var_myc);
  var call3011 = callmethod(var_o,"register:=", [1], opresult3010);
  return call3011
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilematchcase"] = func2902;
  lineNumber = 982
var func3012 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 944
  lineNumber = 943
  var var_myc = var_auto__95__count;
  lineNumber = 945
  lineNumber = 944
  var opresult3014 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3014;
  lineNumber = 945
  lineNumber = 1
  lineNumber = 945
  var call3015 = callmethod(var_o,"left", [0]);
  lineNumber = 946
  var call3016 = callmethod(this,"compilenode", [1], call3015);
  var var_left = call3016;
  var string3017 = new GraceString("  int op_slot_left_");
  var opresult3019 = callmethod(string3017, "++", [1], var_myc);
  var string3020 = new GraceString(" = gc_frame_newslot(");
  var opresult3022 = callmethod(opresult3019, "++", [1], string3020);
  var opresult3024 = callmethod(opresult3022, "++", [1], var_left);
  var string3025 = new GraceString(");");
  var opresult3027 = callmethod(opresult3024, "++", [1], string3025);
  lineNumber = 947
  var call3028 = callmethod(this,"out", [1], opresult3027);
  lineNumber = 1
  lineNumber = 947
  var call3029 = callmethod(var_o,"right", [0]);
  lineNumber = 948
  var call3030 = callmethod(this,"compilenode", [1], call3029);
  var var_right = call3030;
  var string3031 = new GraceString("  int op_slot_right_");
  var opresult3033 = callmethod(string3031, "++", [1], var_myc);
  var string3034 = new GraceString(" = gc_frame_newslot(");
  var opresult3036 = callmethod(opresult3033, "++", [1], string3034);
  var opresult3038 = callmethod(opresult3036, "++", [1], var_right);
  var string3039 = new GraceString(");");
  var opresult3041 = callmethod(opresult3038, "++", [1], string3039);
  lineNumber = 949
  var call3042 = callmethod(this,"out", [1], opresult3041);
  lineNumber = 950
  lineNumber = 949
  var opresult3044 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3044;
  lineNumber = 982
  lineNumber = 983
  lineNumber = 1
  lineNumber = 950
  var call3046 = callmethod(var_o,"value", [0]);
  var string3047 = new GraceString("+");
  var opresult3049 = callmethod(call3046, "==", [1], string3047);
  lineNumber = 983
  lineNumber = 1
  lineNumber = 950
  var call3050 = callmethod(var_o,"value", [0]);
  var string3051 = new GraceString("*");
  var opresult3053 = callmethod(call3050, "==", [1], string3051);
  var opresult3055 = callmethod(opresult3049, "|", [1], opresult3053);
  lineNumber = 983
  lineNumber = 1
  lineNumber = 950
  var call3056 = callmethod(var_o,"value", [0]);
  var string3057 = new GraceString("/");
  var opresult3059 = callmethod(call3056, "==", [1], string3057);
  var opresult3061 = callmethod(opresult3055, "|", [1], opresult3059);
  lineNumber = 983
  lineNumber = 1
  lineNumber = 951
  var call3062 = callmethod(var_o,"value", [0]);
  var string3063 = new GraceString("-");
  var opresult3065 = callmethod(call3062, "==", [1], string3063);
  var opresult3067 = callmethod(opresult3061, "|", [1], opresult3065);
  lineNumber = 983
  lineNumber = 1
  lineNumber = 951
  var call3068 = callmethod(var_o,"value", [0]);
  var string3069 = new GraceString("%");
  var opresult3071 = callmethod(call3068, "==", [1], string3069);
  var opresult3073 = callmethod(opresult3067, "|", [1], opresult3071);
  if (Grace_isTrue(opresult3073)) {
  lineNumber = 953
  lineNumber = 952
  var string3074 = new GraceString("sum");
  var var_rnm = string3074;
  lineNumber = 955
  lineNumber = 956
  lineNumber = 1
  lineNumber = 953
  var call3076 = callmethod(var_o,"value", [0]);
  var string3077 = new GraceString("*");
  var opresult3079 = callmethod(call3076, "==", [1], string3077);
  if (Grace_isTrue(opresult3079)) {
  lineNumber = 955
  lineNumber = 954
  var string3080 = new GraceString("prod");
  var_rnm = string3080;
  var if3075 = string3080;
}
  lineNumber = 958
  lineNumber = 959
  lineNumber = 1
  lineNumber = 956
  var call3082 = callmethod(var_o,"value", [0]);
  var string3083 = new GraceString("/");
  var opresult3085 = callmethod(call3082, "==", [1], string3083);
  if (Grace_isTrue(opresult3085)) {
  lineNumber = 958
  lineNumber = 957
  var string3086 = new GraceString("quotient");
  var_rnm = string3086;
  var if3081 = string3086;
}
  lineNumber = 961
  lineNumber = 962
  lineNumber = 1
  lineNumber = 959
  var call3088 = callmethod(var_o,"value", [0]);
  var string3089 = new GraceString("-");
  var opresult3091 = callmethod(call3088, "==", [1], string3089);
  if (Grace_isTrue(opresult3091)) {
  lineNumber = 961
  lineNumber = 960
  var string3092 = new GraceString("diff");
  var_rnm = string3092;
  var if3087 = string3092;
}
  lineNumber = 964
  lineNumber = 965
  lineNumber = 1
  lineNumber = 962
  var call3094 = callmethod(var_o,"value", [0]);
  var string3095 = new GraceString("%");
  var opresult3097 = callmethod(call3094, "==", [1], string3095);
  if (Grace_isTrue(opresult3097)) {
  lineNumber = 964
  lineNumber = 963
  var string3098 = new GraceString("modulus");
  var_rnm = string3098;
  var if3093 = string3098;
}
  lineNumber = 965
  var string3099 = new GraceString("  params[0] = ");
  var opresult3101 = callmethod(string3099, "++", [1], var_right);
  var string3102 = new GraceString(";");
  var opresult3104 = callmethod(opresult3101, "++", [1], string3102);
  lineNumber = 966
  var call3105 = callmethod(this,"out", [1], opresult3104);
  var string3106 = new GraceString("  partcv[0] = 1;");
  lineNumber = 967
  var call3107 = callmethod(this,"out", [1], string3106);
  lineNumber = 968
  lineNumber = 967
  var string3108 = new GraceString("  Object ");
  var opresult3110 = callmethod(string3108, "++", [1], var_rnm);
  var string3111 = new GraceString("");
  var opresult3113 = callmethod(opresult3110, "++", [1], string3111);
  var opresult3115 = callmethod(opresult3113, "++", [1], var_auto__95__count);
  var string3116 = new GraceString(" = callmethod(");
  var opresult3118 = callmethod(opresult3115, "++", [1], string3116);
  var opresult3120 = callmethod(opresult3118, "++", [1], var_left);
  var string3121 = new GraceString(", \"");
  var opresult3123 = callmethod(opresult3120, "++", [1], string3121);
  lineNumber = 968
  lineNumber = 1
  lineNumber = 967
  var call3124 = callmethod(var_o,"value", [0]);
  var opresult3126 = callmethod(opresult3123, "++", [1], call3124);
  var string3127 = new GraceString("\", ");
  var opresult3129 = callmethod(opresult3126, "++", [1], string3127);
  lineNumber = 968
  var string3130 = new GraceString("1, partcv, params);");
  var opresult3132 = callmethod(opresult3129, "++", [1], string3130);
  lineNumber = 969
  var call3133 = callmethod(this,"out", [1], opresult3132);
  lineNumber = 970
  lineNumber = 1
  lineNumber = 970
  lineNumber = 969
  var opresult3135 = callmethod(var_rnm, "++", [1], var_auto__95__count);
  var call3136 = callmethod(var_o,"register:=", [1], opresult3135);
  lineNumber = 971
  lineNumber = 970
  var opresult3138 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3138;
  var if3045 = opresult3138;
  } else {
  lineNumber = 972
  lineNumber = 1
  lineNumber = 972
  var call3139 = callmethod(var_o,"value", [0]);
  var call3140 = Grace_length(call3139);
  var opresult3142 = callmethod(call3140, "+", [1], new GraceNum(1));
  var var_len = opresult3142;
  lineNumber = 973
  lineNumber = 1
  lineNumber = 973
  var call3143 = callmethod(var_o,"value", [0]);
  lineNumber = 974
  var call3144 = callmethod(this,"escapestring2", [1], call3143);
  var var_evl = call3144;
  lineNumber = 976
  lineNumber = 974
  var string3145 = new GraceString("@.str");
  lineNumber = 976
  lineNumber = 1
  lineNumber = 974
  var call3146 = callmethod(var_constants,"size", [0]);
  var opresult3148 = callmethod(string3145, "++", [1], call3146);
  var string3149 = new GraceString(" = private unnamed_addr ");
  var opresult3151 = callmethod(opresult3148, "++", [1], string3149);
  lineNumber = 975
  var string3152 = new GraceString("constant [");
  var opresult3154 = callmethod(opresult3151, "++", [1], string3152);
  var opresult3156 = callmethod(opresult3154, "++", [1], var_len);
  var string3157 = new GraceString(" x i8] c\"");
  var opresult3159 = callmethod(opresult3156, "++", [1], string3157);
  var opresult3161 = callmethod(opresult3159, "++", [1], var_evl);
  var string3162 = new GraceString("\\00\"");
  var opresult3164 = callmethod(opresult3161, "++", [1], string3162);
  var var_con = opresult3164;
  lineNumber = 976
  var string3165 = new GraceString("  params[0] = ");
  var opresult3167 = callmethod(string3165, "++", [1], var_right);
  var string3168 = new GraceString(";");
  var opresult3170 = callmethod(opresult3167, "++", [1], string3168);
  lineNumber = 977
  var call3171 = callmethod(this,"out", [1], opresult3170);
  var string3172 = new GraceString("  partcv[0] = 1;");
  lineNumber = 978
  var call3173 = callmethod(this,"out", [1], string3172);
  lineNumber = 979
  lineNumber = 978
  var string3174 = new GraceString("  Object opresult");
  var opresult3176 = callmethod(string3174, "++", [1], var_auto__95__count);
  var string3177 = new GraceString(" = ");
  var opresult3179 = callmethod(opresult3176, "++", [1], string3177);
  lineNumber = 979
  var string3180 = new GraceString("callmethod(");
  var opresult3182 = callmethod(string3180, "++", [1], var_left);
  var string3183 = new GraceString(", \"");
  var opresult3185 = callmethod(opresult3182, "++", [1], string3183);
  lineNumber = 1
  lineNumber = 979
  var call3186 = callmethod(var_o,"value", [0]);
  var opresult3188 = callmethod(opresult3185, "++", [1], call3186);
  var string3189 = new GraceString("\", 1, partcv, params);");
  var opresult3191 = callmethod(opresult3188, "++", [1], string3189);
  var opresult3193 = callmethod(opresult3179, "++", [1], opresult3191);
  lineNumber = 980
  var call3194 = callmethod(this,"out", [1], opresult3193);
  lineNumber = 981
  lineNumber = 1
  lineNumber = 981
  lineNumber = 980
  var string3195 = new GraceString("opresult");
  var opresult3197 = callmethod(string3195, "++", [1], var_auto__95__count);
  var call3198 = callmethod(var_o,"register:=", [1], opresult3197);
  lineNumber = 982
  lineNumber = 981
  var opresult3200 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3200;
  var if3045 = opresult3200;
}
  return if3045
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileop"] = func3012;
  lineNumber = 1072
var func3201 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_tailcall = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 986
  lineNumber = 985
  var var_myc = var_auto__95__count;
  lineNumber = 987
  lineNumber = 986
  var opresult3203 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3203;
  lineNumber = 988
  var array3204 = new GraceList([
]);

  var var_args = array3204;
  lineNumber = 989
  lineNumber = 988
  var string3205 = new GraceString("");
  var var_obj = string3205;
  lineNumber = 990
  lineNumber = 989
  var var_len = new GraceNum(0);
  lineNumber = 991
  var var_evl;
  lineNumber = 992
  lineNumber = 991
  var var_i = new GraceNum(0);
  lineNumber = 992
  var string3206 = new GraceString("  int callframe");
  var opresult3208 = callmethod(string3206, "++", [1], var_myc);
  var string3209 = new GraceString(" = gc_frame_new();");
  var opresult3211 = callmethod(opresult3208, "++", [1], string3209);
  lineNumber = 993
  var call3212 = callmethod(this,"out", [1], opresult3211);
  lineNumber = 997
  lineNumber = 993
  lineNumber = 1
  lineNumber = 993
  var call3213 = callmethod(var_o,"with", [0]);
  lineNumber = 997
  var block3214 = Grace_allocObject();
  block3214.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3214.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3214.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3214.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3214.receiver = this;
  block3214.className = 'block<genc:997>';
  block3214.real = function(
var_part
) {
  lineNumber = 994
  lineNumber = 1
  lineNumber = 994
  var call3215 = callmethod(var_part,"args", [0]);
  lineNumber = 997
  var block3216 = Grace_allocObject();
  block3216.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3216.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3216.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3216.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3216.receiver = this;
  block3216.className = 'block<genc:997>';
  block3216.real = function(
var_p
) {
  lineNumber = 995
  lineNumber = 996
  var call3217 = callmethod(this,"compilenode", [1], var_p);
  var var_r = call3217;
  var call3218 = callmethod(var_args,"push", [1], var_r);
  lineNumber = 997
  var string3219 = new GraceString("  gc_frame_newslot(");
  var opresult3221 = callmethod(string3219, "++", [1], var_r);
  var string3222 = new GraceString(");");
  var opresult3224 = callmethod(opresult3221, "++", [1], string3222);
  lineNumber = 998
  var call3225 = callmethod(this,"out", [1], opresult3224);
  return call3225;
};
  var call3226 = callmethod(Grace_prelude,"for()do", [1, 1], call3215, block3216);
  return call3226;
};
  var call3227 = callmethod(Grace_prelude,"for()do", [1, 1], call3213, block3214);
  lineNumber = 1002
  lineNumber = 1003
  lineNumber = 1
  lineNumber = 1000
  var call3229 = callmethod(var_args,"size", [0]);
  var opresult3231 = callmethod(call3229, ">", [1], var_paramsUsed);
  if (Grace_isTrue(opresult3231)) {
  lineNumber = 1002
  lineNumber = 1
  lineNumber = 1001
  var call3232 = callmethod(var_args,"size", [0]);
  var_paramsUsed = call3232;
  var if3228 = call3232;
}
  lineNumber = 1005
  lineNumber = 1006
  lineNumber = 1
  lineNumber = 1006
  lineNumber = 1
  lineNumber = 1003
  var call3234 = callmethod(var_o,"with", [0]);
  var call3235 = callmethod(call3234,"size", [0]);
  var opresult3237 = callmethod(call3235, ">", [1], var_partsUsed);
  if (Grace_isTrue(opresult3237)) {
  lineNumber = 1005
  lineNumber = 1
  lineNumber = 1005
  lineNumber = 1
  lineNumber = 1004
  var call3238 = callmethod(var_o,"with", [0]);
  var call3239 = callmethod(call3238,"size", [0]);
  var_partsUsed = call3239;
  var if3233 = call3239;
}
  lineNumber = 1006
  lineNumber = 1
  lineNumber = 1006
  lineNumber = 1
  lineNumber = 1006
  var call3240 = callmethod(var_o,"value", [0]);
  var call3241 = callmethod(call3240,"value", [0]);
  lineNumber = 1007
  var call3242 = callmethod(this,"escapestring2", [1], call3241);
  var_evl = call3242;
  lineNumber = 1066
  lineNumber = 1008
  lineNumber = 1069
  lineNumber = 1
  lineNumber = 1069
  lineNumber = 1
  lineNumber = 1007
  var call3244 = callmethod(var_o,"value", [0]);
  var call3245 = callmethod(call3244,"kind", [0]);
  var string3246 = new GraceString("member");
  var opresult3248 = callmethod(call3245, "==", [1], string3246);
  lineNumber = 1008
  var block3249 = Grace_allocObject();
  block3249.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3249.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3249.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3249.receiver = this;
  block3249.className = 'block<genc:1008>';
  block3249.real = function(
) {
  lineNumber = 1
  lineNumber = 1008
  lineNumber = 1
  lineNumber = 1008
  lineNumber = 1
  lineNumber = 1007
  var call3250 = callmethod(var_o,"value", [0]);
  var call3251 = callmethod(call3250,"in", [0]);
  var call3252 = callmethod(call3251,"kind", [0]);
  var string3253 = new GraceString("identifier");
  var opresult3255 = callmethod(call3252, "==", [1], string3253);
  lineNumber = 1008
  lineNumber = 1
  lineNumber = 1008
  lineNumber = 1
  lineNumber = 1008
  lineNumber = 1
  lineNumber = 1008
  var call3256 = callmethod(var_o,"value", [0]);
  var call3257 = callmethod(call3256,"in", [0]);
  var call3258 = callmethod(call3257,"value", [0]);
  var string3259 = new GraceString("super");
  var opresult3261 = callmethod(call3258, "==", [1], string3259);
  var opresult3263 = callmethod(opresult3255, "&", [1], opresult3261);
  return opresult3263;
};
  var opresult3265 = callmethod(opresult3248, "&&", [1], block3249);
  if (Grace_isTrue(opresult3265)) {
  lineNumber = 1012
  lineNumber = 1009
  lineNumber = 1012
  var block3266 = Grace_allocObject();
  block3266.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3266.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3266.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3266.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3266.receiver = this;
  block3266.className = 'block<genc:1012>';
  block3266.real = function(
var_arg
) {
  lineNumber = 1010
  var string3267 = new GraceString("  params[");
  var opresult3269 = callmethod(string3267, "++", [1], var_i);
  var string3270 = new GraceString("] = ");
  var opresult3272 = callmethod(opresult3269, "++", [1], string3270);
  var opresult3274 = callmethod(opresult3272, "++", [1], var_arg);
  var string3275 = new GraceString(";");
  var opresult3277 = callmethod(opresult3274, "++", [1], string3275);
  lineNumber = 1011
  var call3278 = callmethod(this,"out", [1], opresult3277);
  lineNumber = 1012
  lineNumber = 1011
  var opresult3280 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult3280;
  return opresult3280;
};
  var call3281 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3266);
  lineNumber = 1014
  lineNumber = 1013
  lineNumber = 1
  lineNumber = 1013
  lineNumber = 1
  lineNumber = 1013
  var call3282 = callmethod(var_o,"with", [0]);
  var call3283 = callmethod(call3282,"indices", [0]);
  lineNumber = 1014
  var block3284 = Grace_allocObject();
  block3284.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3284.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3284.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3284.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3284.receiver = this;
  block3284.className = 'block<genc:1014>';
  block3284.real = function(
var_partnr
) {
  var string3285 = new GraceString("  partcv[");
  var diff3287 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult3289 = callmethod(string3285, "++", [1], diff3287);
  var string3290 = new GraceString("] = ");
  var opresult3292 = callmethod(opresult3289, "++", [1], string3290);
  lineNumber = 1
  lineNumber = 1014
  lineNumber = 1
  lineNumber = 1014
  lineNumber = 1
  lineNumber = 1014
  var call3293 = callmethod(var_o,"with", [0]);
  var idxres3294 = call3293.methods["[]"].call(call3293, [1], var_partnr);
  var call3295 = callmethod(idxres3294,"args", [0]);
  var call3296 = callmethod(call3295,"size", [0]);
  var opresult3298 = callmethod(opresult3292, "++", [1], call3296);
  var string3299 = new GraceString(";");
  var opresult3301 = callmethod(opresult3298, "++", [1], string3299);
  lineNumber = 1015
  var call3302 = callmethod(this,"out", [1], opresult3301);
  return call3302;
};
  var call3303 = callmethod(Grace_prelude,"for()do", [1, 1], call3283, block3284);
  lineNumber = 1017
  lineNumber = 1016
  var string3304 = new GraceString("  Object call");
  var opresult3306 = callmethod(string3304, "++", [1], var_auto__95__count);
  var string3307 = new GraceString(" = callmethod3(self, \"");
  var opresult3309 = callmethod(opresult3306, "++", [1], string3307);
  var opresult3311 = callmethod(opresult3309, "++", [1], var_evl);
  var string3312 = new GraceString("\", ");
  var opresult3314 = callmethod(opresult3311, "++", [1], string3312);
  lineNumber = 1017
  var string3315 = new GraceString("");
  lineNumber = 1
  lineNumber = 1017
  lineNumber = 1
  lineNumber = 1017
  var call3316 = callmethod(var_o,"with", [0]);
  var call3317 = callmethod(call3316,"size", [0]);
  var opresult3319 = callmethod(string3315, "++", [1], call3317);
  var string3320 = new GraceString(", partcv, params, ((flags >> 24) & 0xff) + 1);");
  var opresult3322 = callmethod(opresult3319, "++", [1], string3320);
  var opresult3324 = callmethod(opresult3314, "++", [1], opresult3322);
  lineNumber = 1018
  var call3325 = callmethod(this,"out", [1], opresult3324);
  var if3243 = call3325;
  } else {
  lineNumber = 1066
  lineNumber = 1019
  lineNumber = 1023
  lineNumber = 1
  lineNumber = 1023
  lineNumber = 1
  lineNumber = 1018
  var call3327 = callmethod(var_o,"value", [0]);
  var call3328 = callmethod(call3327,"kind", [0]);
  var string3329 = new GraceString("member");
  var opresult3331 = callmethod(call3328, "==", [1], string3329);
  lineNumber = 1019
  var block3332 = Grace_allocObject();
  block3332.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3332.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3332.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3332.receiver = this;
  block3332.className = 'block<genc:1019>';
  block3332.real = function(
) {
  lineNumber = 1
  lineNumber = 1019
  lineNumber = 1
  lineNumber = 1019
  lineNumber = 1
  lineNumber = 1018
  var call3333 = callmethod(var_o,"value", [0]);
  var call3334 = callmethod(call3333,"in", [0]);
  var call3335 = callmethod(call3334,"kind", [0]);
  var string3336 = new GraceString("identifier");
  var opresult3338 = callmethod(call3335, "==", [1], string3336);
  lineNumber = 1019
  lineNumber = 1
  lineNumber = 1019
  lineNumber = 1
  lineNumber = 1019
  lineNumber = 1
  lineNumber = 1019
  var call3339 = callmethod(var_o,"value", [0]);
  var call3340 = callmethod(call3339,"in", [0]);
  var call3341 = callmethod(call3340,"value", [0]);
  var string3342 = new GraceString("self");
  var opresult3344 = callmethod(call3341, "==", [1], string3342);
  var opresult3346 = callmethod(opresult3338, "&", [1], opresult3344);
  lineNumber = 1
  lineNumber = 1019
  lineNumber = 1
  lineNumber = 1019
  var call3347 = callmethod(var_o,"value", [0]);
  var call3348 = callmethod(call3347,"value", [0]);
  var string3349 = new GraceString("outer");
  var opresult3351 = callmethod(call3348, "==", [1], string3349);
  var opresult3353 = callmethod(opresult3346, "&", [1], opresult3351);
  return opresult3353;
};
  var opresult3355 = callmethod(opresult3331, "&&", [1], block3332);
  if (Grace_isTrue(opresult3355)) {
  lineNumber = 1022
  lineNumber = 1021
  var string3356 = new GraceString("  Object call");
  var opresult3358 = callmethod(string3356, "++", [1], var_auto__95__count);
  var string3359 = new GraceString(" = callmethod3(self, \"");
  var opresult3361 = callmethod(opresult3358, "++", [1], string3359);
  var opresult3363 = callmethod(opresult3361, "++", [1], var_evl);
  var string3364 = new GraceString("\", ");
  var opresult3366 = callmethod(opresult3363, "++", [1], string3364);
  lineNumber = 1022
  var string3367 = new GraceString("0, 0, NULL, ((flags >> 24) & 0xff));");
  var opresult3369 = callmethod(opresult3366, "++", [1], string3367);
  lineNumber = 1023
  var call3370 = callmethod(this,"out", [1], opresult3369);
  var if3326 = call3370;
  } else {
  lineNumber = 1066
  lineNumber = 1024
  lineNumber = 1034
  lineNumber = 1
  lineNumber = 1034
  lineNumber = 1
  lineNumber = 1023
  var call3372 = callmethod(var_o,"value", [0]);
  var call3373 = callmethod(call3372,"kind", [0]);
  var string3374 = new GraceString("member");
  var opresult3376 = callmethod(call3373, "==", [1], string3374);
  lineNumber = 1024
  var block3377 = Grace_allocObject();
  block3377.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3377.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3377.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3377.receiver = this;
  block3377.className = 'block<genc:1024>';
  block3377.real = function(
) {
  lineNumber = 1
  lineNumber = 1024
  lineNumber = 1
  lineNumber = 1024
  lineNumber = 1
  lineNumber = 1023
  var call3378 = callmethod(var_o,"value", [0]);
  var call3379 = callmethod(call3378,"in", [0]);
  var call3380 = callmethod(call3379,"kind", [0]);
  var string3381 = new GraceString("identifier");
  var opresult3383 = callmethod(call3380, "==", [1], string3381);
  lineNumber = 1024
  lineNumber = 1
  lineNumber = 1024
  lineNumber = 1
  lineNumber = 1024
  lineNumber = 1
  lineNumber = 1024
  var call3384 = callmethod(var_o,"value", [0]);
  var call3385 = callmethod(call3384,"in", [0]);
  var call3386 = callmethod(call3385,"value", [0]);
  var string3387 = new GraceString("prelude");
  var opresult3389 = callmethod(call3386, "==", [1], string3387);
  var opresult3391 = callmethod(opresult3383, "&", [1], opresult3389);
  return opresult3391;
};
  var opresult3393 = callmethod(opresult3376, "&&", [1], block3377);
  if (Grace_isTrue(opresult3393)) {
  lineNumber = 1028
  lineNumber = 1025
  lineNumber = 1028
  var block3394 = Grace_allocObject();
  block3394.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3394.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3394.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3394.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3394.receiver = this;
  block3394.className = 'block<genc:1028>';
  block3394.real = function(
var_arg
) {
  lineNumber = 1026
  var string3395 = new GraceString("  params[");
  var opresult3397 = callmethod(string3395, "++", [1], var_i);
  var string3398 = new GraceString("] = ");
  var opresult3400 = callmethod(opresult3397, "++", [1], string3398);
  var opresult3402 = callmethod(opresult3400, "++", [1], var_arg);
  var string3403 = new GraceString(";");
  var opresult3405 = callmethod(opresult3402, "++", [1], string3403);
  lineNumber = 1027
  var call3406 = callmethod(this,"out", [1], opresult3405);
  lineNumber = 1028
  lineNumber = 1027
  var opresult3408 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult3408;
  return opresult3408;
};
  var call3409 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3394);
  lineNumber = 1030
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1029
  lineNumber = 1
  lineNumber = 1029
  var call3410 = callmethod(var_o,"with", [0]);
  var call3411 = callmethod(call3410,"indices", [0]);
  lineNumber = 1030
  var block3412 = Grace_allocObject();
  block3412.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3412.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3412.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3412.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3412.receiver = this;
  block3412.className = 'block<genc:1030>';
  block3412.real = function(
var_partnr
) {
  var string3413 = new GraceString("  partcv[");
  var diff3415 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult3417 = callmethod(string3413, "++", [1], diff3415);
  var string3418 = new GraceString("] = ");
  var opresult3420 = callmethod(opresult3417, "++", [1], string3418);
  lineNumber = 1
  lineNumber = 1030
  lineNumber = 1
  lineNumber = 1030
  lineNumber = 1
  lineNumber = 1030
  var call3421 = callmethod(var_o,"with", [0]);
  var idxres3422 = call3421.methods["[]"].call(call3421, [1], var_partnr);
  var call3423 = callmethod(idxres3422,"args", [0]);
  var call3424 = callmethod(call3423,"size", [0]);
  var opresult3426 = callmethod(opresult3420, "++", [1], call3424);
  var string3427 = new GraceString(";");
  var opresult3429 = callmethod(opresult3426, "++", [1], string3427);
  lineNumber = 1031
  var call3430 = callmethod(this,"out", [1], opresult3429);
  return call3430;
};
  var call3431 = callmethod(Grace_prelude,"for()do", [1, 1], call3411, block3412);
  lineNumber = 1033
  lineNumber = 1032
  var string3432 = new GraceString("  Object call");
  var opresult3434 = callmethod(string3432, "++", [1], var_auto__95__count);
  var string3435 = new GraceString(" = callmethod(prelude, \"");
  var opresult3437 = callmethod(opresult3434, "++", [1], string3435);
  var opresult3439 = callmethod(opresult3437, "++", [1], var_evl);
  var string3440 = new GraceString("\", ");
  var opresult3442 = callmethod(opresult3439, "++", [1], string3440);
  lineNumber = 1033
  var string3443 = new GraceString("");
  lineNumber = 1
  lineNumber = 1033
  lineNumber = 1
  lineNumber = 1033
  var call3444 = callmethod(var_o,"with", [0]);
  var call3445 = callmethod(call3444,"size", [0]);
  var opresult3447 = callmethod(string3443, "++", [1], call3445);
  var string3448 = new GraceString(", partcv, params);");
  var opresult3450 = callmethod(opresult3447, "++", [1], string3448);
  var opresult3452 = callmethod(opresult3442, "++", [1], opresult3450);
  lineNumber = 1034
  var call3453 = callmethod(this,"out", [1], opresult3452);
  var if3371 = call3453;
  } else {
  lineNumber = 1066
  lineNumber = 1051
  lineNumber = 1
  lineNumber = 1051
  lineNumber = 1
  lineNumber = 1034
  var call3455 = callmethod(var_o,"value", [0]);
  var call3456 = callmethod(call3455,"kind", [0]);
  var string3457 = new GraceString("member");
  var opresult3459 = callmethod(call3456, "==", [1], string3457);
  if (Grace_isTrue(opresult3459)) {
  lineNumber = 1035
  lineNumber = 1
  lineNumber = 1035
  lineNumber = 1
  lineNumber = 1035
  var call3460 = callmethod(var_o,"value", [0]);
  var call3461 = callmethod(call3460,"in", [0]);
  lineNumber = 1036
  var call3462 = callmethod(this,"compilenode", [1], call3461);
  var_obj = call3462;
  lineNumber = 1
  lineNumber = 1036
  lineNumber = 1
  lineNumber = 1036
  var call3463 = callmethod(var_o,"value", [0]);
  var call3464 = callmethod(call3463,"value", [0]);
  var call3465 = Grace_length(call3464);
  var opresult3467 = callmethod(call3465, "+", [1], new GraceNum(1));
  var_len = opresult3467;
  lineNumber = 1040
  lineNumber = 1037
  lineNumber = 1040
  var block3468 = Grace_allocObject();
  block3468.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3468.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3468.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3468.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3468.receiver = this;
  block3468.className = 'block<genc:1040>';
  block3468.real = function(
var_arg
) {
  lineNumber = 1038
  var string3469 = new GraceString("  params[");
  var opresult3471 = callmethod(string3469, "++", [1], var_i);
  var string3472 = new GraceString("] = ");
  var opresult3474 = callmethod(opresult3471, "++", [1], string3472);
  var opresult3476 = callmethod(opresult3474, "++", [1], var_arg);
  var string3477 = new GraceString(";");
  var opresult3479 = callmethod(opresult3476, "++", [1], string3477);
  lineNumber = 1039
  var call3480 = callmethod(this,"out", [1], opresult3479);
  lineNumber = 1040
  lineNumber = 1039
  var opresult3482 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult3482;
  return opresult3482;
};
  var call3483 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3468);
  lineNumber = 1042
  lineNumber = 1041
  lineNumber = 1
  lineNumber = 1041
  lineNumber = 1
  lineNumber = 1041
  var call3484 = callmethod(var_o,"with", [0]);
  var call3485 = callmethod(call3484,"indices", [0]);
  lineNumber = 1042
  var block3486 = Grace_allocObject();
  block3486.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3486.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3486.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3486.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3486.receiver = this;
  block3486.className = 'block<genc:1042>';
  block3486.real = function(
var_partnr
) {
  var string3487 = new GraceString("  partcv[");
  var diff3489 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult3491 = callmethod(string3487, "++", [1], diff3489);
  var string3492 = new GraceString("] = ");
  var opresult3494 = callmethod(opresult3491, "++", [1], string3492);
  lineNumber = 1
  lineNumber = 1042
  lineNumber = 1
  lineNumber = 1042
  lineNumber = 1
  lineNumber = 1042
  var call3495 = callmethod(var_o,"with", [0]);
  var idxres3496 = call3495.methods["[]"].call(call3495, [1], var_partnr);
  var call3497 = callmethod(idxres3496,"args", [0]);
  var call3498 = callmethod(call3497,"size", [0]);
  var opresult3500 = callmethod(opresult3494, "++", [1], call3498);
  var string3501 = new GraceString(";");
  var opresult3503 = callmethod(opresult3500, "++", [1], string3501);
  lineNumber = 1043
  var call3504 = callmethod(this,"out", [1], opresult3503);
  return call3504;
};
  var call3505 = callmethod(Grace_prelude,"for()do", [1, 1], call3485, block3486);
  lineNumber = 1049
  lineNumber = 1044
  if (Grace_isTrue(var_tailcall)) {
  lineNumber = 1045
  var string3507 = new GraceString("  Object call");
  var opresult3509 = callmethod(string3507, "++", [1], var_auto__95__count);
  var string3510 = new GraceString(" = tailcall(");
  var opresult3512 = callmethod(opresult3509, "++", [1], string3510);
  var opresult3514 = callmethod(opresult3512, "++", [1], var_obj);
  var string3515 = new GraceString(", \"");
  var opresult3517 = callmethod(opresult3514, "++", [1], string3515);
  var opresult3519 = callmethod(opresult3517, "++", [1], var_evl);
  var string3520 = new GraceString("\",");
  var opresult3522 = callmethod(opresult3519, "++", [1], string3520);
  lineNumber = 1046
  var call3523 = callmethod(this,"out", [1], opresult3522);
  var string3524 = new GraceString("    ");
  lineNumber = 1
  lineNumber = 1046
  lineNumber = 1
  lineNumber = 1046
  var call3525 = callmethod(var_o,"with", [0]);
  var call3526 = callmethod(call3525,"size", [0]);
  var opresult3528 = callmethod(string3524, "++", [1], call3526);
  var string3529 = new GraceString(", partcv, params, 0);");
  var opresult3531 = callmethod(opresult3528, "++", [1], string3529);
  lineNumber = 1047
  var call3532 = callmethod(this,"out", [1], opresult3531);
  var if3506 = call3532;
  } else {
  lineNumber = 1048
  var string3533 = new GraceString("  Object call");
  var opresult3535 = callmethod(string3533, "++", [1], var_auto__95__count);
  var string3536 = new GraceString(" = callmethod(");
  var opresult3538 = callmethod(opresult3535, "++", [1], string3536);
  var opresult3540 = callmethod(opresult3538, "++", [1], var_obj);
  var string3541 = new GraceString(", \"");
  var opresult3543 = callmethod(opresult3540, "++", [1], string3541);
  var opresult3545 = callmethod(opresult3543, "++", [1], var_evl);
  var string3546 = new GraceString("\",");
  var opresult3548 = callmethod(opresult3545, "++", [1], string3546);
  lineNumber = 1049
  var call3549 = callmethod(this,"out", [1], opresult3548);
  var string3550 = new GraceString("    ");
  lineNumber = 1
  lineNumber = 1049
  lineNumber = 1
  lineNumber = 1049
  var call3551 = callmethod(var_o,"with", [0]);
  var call3552 = callmethod(call3551,"size", [0]);
  var opresult3554 = callmethod(string3550, "++", [1], call3552);
  var string3555 = new GraceString(", partcv, params);");
  var opresult3557 = callmethod(opresult3554, "++", [1], string3555);
  lineNumber = 1050
  var call3558 = callmethod(this,"out", [1], opresult3557);
  var if3506 = call3558;
}
  var if3454 = if3506;
  } else {
  lineNumber = 1053
  lineNumber = 1052
  var string3559 = new GraceString("self");
  var_obj = string3559;
  lineNumber = 1053
  lineNumber = 1
  lineNumber = 1053
  lineNumber = 1
  lineNumber = 1053
  var call3560 = callmethod(var_o,"value", [0]);
  var call3561 = callmethod(call3560,"value", [0]);
  var call3562 = Grace_length(call3561);
  var opresult3564 = callmethod(call3562, "+", [1], new GraceNum(1));
  var_len = opresult3564;
  lineNumber = 1057
  lineNumber = 1054
  lineNumber = 1057
  var block3565 = Grace_allocObject();
  block3565.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3565.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3565.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3565.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3565.receiver = this;
  block3565.className = 'block<genc:1057>';
  block3565.real = function(
var_arg
) {
  lineNumber = 1055
  var string3566 = new GraceString("  params[");
  var opresult3568 = callmethod(string3566, "++", [1], var_i);
  var string3569 = new GraceString("] = ");
  var opresult3571 = callmethod(opresult3568, "++", [1], string3569);
  var opresult3573 = callmethod(opresult3571, "++", [1], var_arg);
  var string3574 = new GraceString(";");
  var opresult3576 = callmethod(opresult3573, "++", [1], string3574);
  lineNumber = 1056
  var call3577 = callmethod(this,"out", [1], opresult3576);
  lineNumber = 1057
  lineNumber = 1056
  var opresult3579 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult3579;
  return opresult3579;
};
  var call3580 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3565);
  lineNumber = 1059
  lineNumber = 1058
  lineNumber = 1
  lineNumber = 1058
  lineNumber = 1
  lineNumber = 1058
  var call3581 = callmethod(var_o,"with", [0]);
  var call3582 = callmethod(call3581,"indices", [0]);
  lineNumber = 1059
  var block3583 = Grace_allocObject();
  block3583.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3583.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3583.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3583.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3583.receiver = this;
  block3583.className = 'block<genc:1059>';
  block3583.real = function(
var_partnr
) {
  var string3584 = new GraceString("  partcv[");
  var diff3586 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult3588 = callmethod(string3584, "++", [1], diff3586);
  var string3589 = new GraceString("] = ");
  var opresult3591 = callmethod(opresult3588, "++", [1], string3589);
  lineNumber = 1
  lineNumber = 1059
  lineNumber = 1
  lineNumber = 1059
  lineNumber = 1
  lineNumber = 1059
  var call3592 = callmethod(var_o,"with", [0]);
  var idxres3593 = call3592.methods["[]"].call(call3592, [1], var_partnr);
  var call3594 = callmethod(idxres3593,"args", [0]);
  var call3595 = callmethod(call3594,"size", [0]);
  var opresult3597 = callmethod(opresult3591, "++", [1], call3595);
  var string3598 = new GraceString(";");
  var opresult3600 = callmethod(opresult3597, "++", [1], string3598);
  lineNumber = 1060
  var call3601 = callmethod(this,"out", [1], opresult3600);
  return call3601;
};
  var call3602 = callmethod(Grace_prelude,"for()do", [1, 1], call3582, block3583);
  lineNumber = 1066
  lineNumber = 1061
  if (Grace_isTrue(var_tailcall)) {
  lineNumber = 1062
  var string3604 = new GraceString("  Object call");
  var opresult3606 = callmethod(string3604, "++", [1], var_auto__95__count);
  var string3607 = new GraceString(" = tailcall(self, \"");
  var opresult3609 = callmethod(opresult3606, "++", [1], string3607);
  var opresult3611 = callmethod(opresult3609, "++", [1], var_evl);
  var string3612 = new GraceString("\",");
  var opresult3614 = callmethod(opresult3611, "++", [1], string3612);
  lineNumber = 1063
  var call3615 = callmethod(this,"out", [1], opresult3614);
  var string3616 = new GraceString("    ");
  lineNumber = 1
  lineNumber = 1063
  lineNumber = 1
  lineNumber = 1063
  var call3617 = callmethod(var_o,"with", [0]);
  var call3618 = callmethod(call3617,"size", [0]);
  var opresult3620 = callmethod(string3616, "++", [1], call3618);
  var string3621 = new GraceString(", partcv, params, 0);");
  var opresult3623 = callmethod(opresult3620, "++", [1], string3621);
  lineNumber = 1064
  var call3624 = callmethod(this,"out", [1], opresult3623);
  var if3603 = call3624;
  } else {
  lineNumber = 1065
  var string3625 = new GraceString("  Object call");
  var opresult3627 = callmethod(string3625, "++", [1], var_auto__95__count);
  var string3628 = new GraceString(" = callmethod(self, \"");
  var opresult3630 = callmethod(opresult3627, "++", [1], string3628);
  var opresult3632 = callmethod(opresult3630, "++", [1], var_evl);
  var string3633 = new GraceString("\",");
  var opresult3635 = callmethod(opresult3632, "++", [1], string3633);
  lineNumber = 1066
  var call3636 = callmethod(this,"out", [1], opresult3635);
  var string3637 = new GraceString("    ");
  lineNumber = 1
  lineNumber = 1066
  lineNumber = 1
  lineNumber = 1066
  var call3638 = callmethod(var_o,"with", [0]);
  var call3639 = callmethod(call3638,"size", [0]);
  var opresult3641 = callmethod(string3637, "++", [1], call3639);
  var string3642 = new GraceString(", partcv, params);");
  var opresult3644 = callmethod(opresult3641, "++", [1], string3642);
  lineNumber = 1067
  var call3645 = callmethod(this,"out", [1], opresult3644);
  var if3603 = call3645;
}
  var if3454 = if3603;
}
  var if3371 = if3454;
}
  var if3326 = if3371;
}
  var if3243 = if3326;
}
  lineNumber = 1069
  var string3646 = new GraceString("  gc_frame_end(callframe");
  var opresult3648 = callmethod(string3646, "++", [1], var_myc);
  var string3649 = new GraceString(");");
  var opresult3651 = callmethod(opresult3648, "++", [1], string3649);
  lineNumber = 1070
  var call3652 = callmethod(this,"out", [1], opresult3651);
  lineNumber = 1071
  lineNumber = 1
  lineNumber = 1071
  lineNumber = 1070
  var string3653 = new GraceString("call");
  var opresult3655 = callmethod(string3653, "++", [1], var_auto__95__count);
  var call3656 = callmethod(var_o,"register:=", [1], opresult3655);
  lineNumber = 1072
  lineNumber = 1071
  var opresult3658 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3658;
  return opresult3658
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilecall"] = func3201;
  lineNumber = 1090
var func3659 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1075
  lineNumber = 1074
  var string3660 = new GraceString("");
  var var_escval = string3660;
  lineNumber = 1075
  lineNumber = 1
  lineNumber = 1075
  var call3661 = callmethod(var_o,"value", [0]);
  var call3662 = Grace_length(call3661);
  var quotient3664 = callmethod(call3662, "/", [1], new GraceNum(2));
  var var_l = quotient3664;
  lineNumber = 1077
  lineNumber = 1076
  var var_i = new GraceNum(0);
  lineNumber = 1083
  lineNumber = 1077
  lineNumber = 1
  lineNumber = 1077
  var call3665 = callmethod(var_o,"value", [0]);
  lineNumber = 1083
  var block3666 = Grace_allocObject();
  block3666.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3666.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3666.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3666.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3666.receiver = this;
  block3666.className = 'block<genc:1083>';
  block3666.real = function(
var_c
) {
  lineNumber = 1080
  lineNumber = 1081
  lineNumber = 1078
  var modulus3669 = callmethod(var_i, "%", [1], new GraceNum(2));
  var opresult3671 = callmethod(modulus3669, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult3671)) {
  lineNumber = 1080
  lineNumber = 1079
  var string3672 = new GraceString("\"\"\\x");
  var opresult3674 = callmethod(var_escval, "++", [1], string3672);
  var_escval = opresult3674;
  var if3667 = opresult3674;
}
  lineNumber = 1082
  lineNumber = 1081
  var opresult3676 = callmethod(var_escval, "++", [1], var_c);
  var_escval = opresult3676;
  lineNumber = 1083
  lineNumber = 1082
  var opresult3678 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult3678;
  return opresult3678;
};
  var call3679 = callmethod(Grace_prelude,"for()do", [1, 1], call3665, block3666);
  lineNumber = 1084
  var string3680 = new GraceString("  if (octlit");
  var opresult3682 = callmethod(string3680, "++", [1], var_auto__95__count);
  var string3683 = new GraceString(" == NULL) {");
  var opresult3685 = callmethod(opresult3682, "++", [1], string3683);
  lineNumber = 1085
  var call3686 = callmethod(this,"out", [1], opresult3685);
  var string3687 = new GraceString("    octlit");
  var opresult3689 = callmethod(string3687, "++", [1], var_auto__95__count);
  var string3690 = new GraceString(" = alloc_Octets(\"");
  var opresult3692 = callmethod(opresult3689, "++", [1], string3690);
  var opresult3694 = callmethod(opresult3692, "++", [1], var_escval);
  var string3695 = new GraceString("\", ");
  var opresult3697 = callmethod(opresult3694, "++", [1], string3695);
  var opresult3699 = callmethod(opresult3697, "++", [1], var_l);
  var string3700 = new GraceString(");");
  var opresult3702 = callmethod(opresult3699, "++", [1], string3700);
  lineNumber = 1086
  var call3703 = callmethod(this,"out", [1], opresult3702);
  var string3704 = new GraceString("  }");
  lineNumber = 1087
  var call3705 = callmethod(this,"out", [1], string3704);
  var string3706 = new GraceString("static Object octlit");
  var opresult3708 = callmethod(string3706, "++", [1], var_auto__95__count);
  var string3709 = new GraceString(";");
  var opresult3711 = callmethod(opresult3708, "++", [1], string3709);
  var call3712 = callmethod(var_globals,"push", [1], opresult3711);
  lineNumber = 1089
  lineNumber = 1
  lineNumber = 1089
  lineNumber = 1088
  var string3713 = new GraceString("octlit");
  var opresult3715 = callmethod(string3713, "++", [1], var_auto__95__count);
  var call3716 = callmethod(var_o,"register:=", [1], opresult3715);
  lineNumber = 1090
  lineNumber = 1089
  var opresult3718 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3718;
  return opresult3718
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileoctets"] = func3659;
  lineNumber = 1110
var func3719 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1092
  var string3720 = new GraceString("// Import of ");
  lineNumber = 1
  lineNumber = 1092
  lineNumber = 1
  lineNumber = 1092
  var call3721 = callmethod(var_o,"value", [0]);
  var call3722 = callmethod(call3721,"value", [0]);
  var opresult3724 = callmethod(string3720, "++", [1], call3722);
  lineNumber = 1093
  var call3725 = callmethod(this,"out", [1], opresult3724);
  lineNumber = 1094
  var var_con;
  lineNumber = 1
  lineNumber = 1094
  lineNumber = 1
  lineNumber = 1094
  var call3726 = callmethod(var_o,"value", [0]);
  var call3727 = callmethod(call3726,"value", [0]);
  lineNumber = 1095
  var call3728 = callmethod(this,"escapeident", [1], call3727);
  var var_nm = call3728;
  lineNumber = 1
  lineNumber = 1095
  lineNumber = 1
  lineNumber = 1095
  var call3729 = callmethod(var_o,"value", [0]);
  var call3730 = callmethod(call3729,"value", [0]);
  lineNumber = 1096
  var call3731 = callmethod(this,"escapestring2", [1], call3730);
  var var_fn = call3731;
  lineNumber = 1097
  lineNumber = 1096
  var string3732 = new GraceString("module_");
  var opresult3734 = callmethod(string3732, "++", [1], var_nm);
  var var_modg = opresult3734;
  lineNumber = 1097
  var string3735 = new GraceString("  if (");
  var opresult3737 = callmethod(string3735, "++", [1], var_modg);
  var string3738 = new GraceString(" == NULL)");
  var opresult3740 = callmethod(opresult3737, "++", [1], string3738);
  lineNumber = 1098
  var call3741 = callmethod(this,"out", [1], opresult3740);
  lineNumber = 1101
  lineNumber = 1098
  var call3743 = callmethod(var_staticmodules,"contains", [1], var_nm);
  if (Grace_isTrue(call3743)) {
  lineNumber = 1099
  var string3744 = new GraceString("    ");
  var opresult3746 = callmethod(string3744, "++", [1], var_modg);
  var string3747 = new GraceString(" = ");
  var opresult3749 = callmethod(opresult3746, "++", [1], string3747);
  var opresult3751 = callmethod(opresult3749, "++", [1], var_modg);
  var string3752 = new GraceString("_init();");
  var opresult3754 = callmethod(opresult3751, "++", [1], string3752);
  lineNumber = 1100
  var call3755 = callmethod(this,"out", [1], opresult3754);
  var if3742 = call3755;
  } else {
  lineNumber = 1101
  var string3756 = new GraceString("    ");
  var opresult3758 = callmethod(string3756, "++", [1], var_modg);
  var string3759 = new GraceString(" = dlmodule(\"");
  var opresult3761 = callmethod(opresult3758, "++", [1], string3759);
  var opresult3763 = callmethod(opresult3761, "++", [1], var_fn);
  var string3764 = new GraceString("\");");
  var opresult3766 = callmethod(opresult3763, "++", [1], string3764);
  lineNumber = 1102
  var call3767 = callmethod(this,"out", [1], opresult3766);
  var if3742 = call3767;
}
  lineNumber = 1103
  var string3768 = new GraceString("  Object *var_");
  var opresult3770 = callmethod(string3768, "++", [1], var_nm);
  var string3771 = new GraceString(" = alloc_var();");
  var opresult3773 = callmethod(opresult3770, "++", [1], string3771);
  lineNumber = 1104
  var call3774 = callmethod(this,"out", [1], opresult3773);
  var string3775 = new GraceString("  *var_");
  var opresult3777 = callmethod(string3775, "++", [1], var_nm);
  var string3778 = new GraceString(" = ");
  var opresult3780 = callmethod(opresult3777, "++", [1], string3778);
  var opresult3782 = callmethod(opresult3780, "++", [1], var_modg);
  var string3783 = new GraceString(";");
  var opresult3785 = callmethod(opresult3782, "++", [1], string3783);
  lineNumber = 1105
  var call3786 = callmethod(this,"out", [1], opresult3785);
  var call3787 = callmethod(var_modules,"push", [1], var_nm);
  lineNumber = 1106
  var string3788 = new GraceString("Object ");
  var opresult3790 = callmethod(string3788, "++", [1], var_modg);
  var string3791 = new GraceString("_init();");
  var opresult3793 = callmethod(opresult3790, "++", [1], string3791);
  var call3794 = callmethod(var_globals,"push", [1], opresult3793);
  lineNumber = 1107
  var string3795 = new GraceString("Object ");
  var opresult3797 = callmethod(string3795, "++", [1], var_modg);
  var string3798 = new GraceString(";");
  var opresult3800 = callmethod(opresult3797, "++", [1], string3798);
  var call3801 = callmethod(var_globals,"push", [1], opresult3800);
  lineNumber = 1109
  lineNumber = 1108
  var opresult3803 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3803;
  lineNumber = 1110
  lineNumber = 1
  lineNumber = 1109
  var string3804 = new GraceString("none");
  var call3805 = callmethod(var_o,"register:=", [1], string3804);
  return call3805
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compileimport"] = func3719;
  lineNumber = 1127
var func3806 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1113
  var var_reg;
  lineNumber = 1119
  lineNumber = 1114
  lineNumber = 1121
  lineNumber = 1
  lineNumber = 1121
  lineNumber = 1
  lineNumber = 1113
  var call3808 = callmethod(var_o,"value", [0]);
  var call3809 = callmethod(call3808,"kind", [0]);
  var string3810 = new GraceString("call");
  var opresult3812 = callmethod(call3809, "==", [1], string3810);
  lineNumber = 1114
  var block3813 = Grace_allocObject();
  block3813.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3813.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3813.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3813.receiver = this;
  block3813.className = 'block<genc:1114>';
  block3813.real = function(
) {
  var string3814 = new GraceString("TailCall");
  lineNumber = 1
  lineNumber = 1114
  var call3815 = callmethod(var_util,"extensions", [0]);
  var call3816 = callmethod(call3815,"contains", [1], string3814);
  return call3816;
};
  var opresult3818 = callmethod(opresult3812, "&&", [1], block3813);
  if (Grace_isTrue(opresult3818)) {
  lineNumber = 1116
  lineNumber = 1
  lineNumber = 1116
  var call3819 = callmethod(var_o,"value", [0]);
  var bool3820 = new GraceBoolean(true)
  lineNumber = 1117
  var call3821 = callmethod(this,"compilecall", [2], call3819, bool3820);
  lineNumber = 1118
  lineNumber = 1
  lineNumber = 1118
  lineNumber = 1
  lineNumber = 1117
  var call3822 = callmethod(var_o,"value", [0]);
  var call3823 = callmethod(call3822,"register", [0]);
  var_reg = call3823;
  var if3807 = call3823;
  } else {
  lineNumber = 1119
  lineNumber = 1
  lineNumber = 1119
  var call3824 = callmethod(var_o,"value", [0]);
  lineNumber = 1120
  var call3825 = callmethod(this,"compilenode", [1], call3824);
  var_reg = call3825;
  var if3807 = call3825;
}
  lineNumber = 1124
  lineNumber = 1121
  if (Grace_isTrue(var_inBlock)) {
  lineNumber = 1122
  var string3827 = new GraceString("  block_return(realself, ");
  var opresult3829 = callmethod(string3827, "++", [1], var_reg);
  var string3830 = new GraceString(");");
  var opresult3832 = callmethod(opresult3829, "++", [1], string3830);
  lineNumber = 1123
  var call3833 = callmethod(this,"out", [1], opresult3832);
  var if3826 = call3833;
  } else {
  lineNumber = 1124
  var string3834 = new GraceString("  return ");
  var opresult3836 = callmethod(string3834, "++", [1], var_reg);
  var string3837 = new GraceString(";");
  var opresult3839 = callmethod(opresult3836, "++", [1], string3837);
  lineNumber = 1125
  var call3840 = callmethod(this,"out", [1], opresult3839);
  var if3826 = call3840;
}
  lineNumber = 1127
  lineNumber = 1
  lineNumber = 1126
  var string3841 = new GraceString("undefined");
  var call3842 = callmethod(var_o,"register:=", [1], string3841);
  return call3842
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilereturn"] = func3806;
  lineNumber = 1139
var func3843 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1130
  lineNumber = 1
  lineNumber = 1129
  var call3844 = callmethod(var_o,"value", [0]);
  var var_cnum = call3844;
  lineNumber = 1131
  lineNumber = 1130
  var bool3845 = new GraceBoolean(false)
  var var_havedot = bool3845;
  lineNumber = 1134
  lineNumber = 1131
  lineNumber = 1134
  var block3846 = Grace_allocObject();
  block3846.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3846.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3846.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3846.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3846.receiver = this;
  block3846.className = 'block<genc:1134>';
  block3846.real = function(
var_c
) {
  lineNumber = 1135
  lineNumber = 1132
  var string3848 = new GraceString(".");
  var opresult3850 = callmethod(var_c, "==", [1], string3848);
  if (Grace_isTrue(opresult3850)) {
  lineNumber = 1134
  lineNumber = 1133
  var bool3851 = new GraceBoolean(true)
  var_havedot = bool3851;
  var if3847 = bool3851;
}
  return if3847;
};
  var call3852 = callmethod(Grace_prelude,"for()do", [1, 1], var_cnum, block3846);
  lineNumber = 1136
  var string3853 = new GraceString("  Object num");
  var opresult3855 = callmethod(string3853, "++", [1], var_auto__95__count);
  var string3856 = new GraceString(" = alloc_Float64(");
  var opresult3858 = callmethod(opresult3855, "++", [1], string3856);
  var opresult3860 = callmethod(opresult3858, "++", [1], var_cnum);
  var string3861 = new GraceString(");");
  var opresult3863 = callmethod(opresult3860, "++", [1], string3861);
  lineNumber = 1137
  var call3864 = callmethod(this,"out", [1], opresult3863);
  lineNumber = 1138
  lineNumber = 1
  lineNumber = 1138
  lineNumber = 1137
  var string3865 = new GraceString("num");
  var opresult3867 = callmethod(string3865, "++", [1], var_auto__95__count);
  var call3868 = callmethod(var_o,"register:=", [1], opresult3867);
  lineNumber = 1139
  lineNumber = 1138
  var opresult3870 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3870;
  return opresult3870
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilenum"] = func3843;
  lineNumber = 1293
var func3871 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1142
  lineNumber = 1141
  var opresult3873 = callmethod(var_compilationDepth, "+", [1], new GraceNum(1));
  var_compilationDepth = opresult3873;
  lineNumber = 1146
  lineNumber = 1148
  lineNumber = 1142
  lineNumber = 1148
  lineNumber = 1
  lineNumber = 1142
  var call3875 = callmethod(var_o,"line", [0]);
  var opresult3877 = callmethod(var_linenum, "/=", [1], call3875);
  if (Grace_isTrue(opresult3877)) {
  lineNumber = 1144
  lineNumber = 1
  lineNumber = 1143
  var call3878 = callmethod(var_o,"line", [0]);
  var_linenum = call3878;
  lineNumber = 1144
  var string3879 = new GraceString("// Begin line ");
  var opresult3881 = callmethod(string3879, "++", [1], var_linenum);
  lineNumber = 1145
  var call3882 = callmethod(this,"out", [1], opresult3881);
  var string3883 = new GraceString("  setline(");
  var opresult3885 = callmethod(string3883, "++", [1], var_linenum);
  var string3886 = new GraceString(");");
  var opresult3888 = callmethod(opresult3885, "++", [1], string3886);
  lineNumber = 1146
  var call3889 = callmethod(this,"out", [1], opresult3888);
  var string3890 = new GraceString("  setmodule(modulename);");
  lineNumber = 1147
  var call3891 = callmethod(this,"out", [1], string3890);
  var if3874 = call3891;
}
  lineNumber = 1149
  lineNumber = 1151
  lineNumber = 1
  lineNumber = 1148
  var call3893 = callmethod(var_o,"kind", [0]);
  var string3894 = new GraceString("num");
  var opresult3896 = callmethod(call3893, "==", [1], string3894);
  if (Grace_isTrue(opresult3896)) {
  lineNumber = 1149
  lineNumber = 1150
  var call3897 = callmethod(this,"compilenum", [1], var_o);
  var if3892 = call3897;
}
  lineNumber = 1152
  lineNumber = 1151
  var string3898 = new GraceString("");
  var var_l = string3898;
  lineNumber = 1163
  lineNumber = 1164
  lineNumber = 1
  lineNumber = 1152
  var call3900 = callmethod(var_o,"kind", [0]);
  var string3901 = new GraceString("string");
  var opresult3903 = callmethod(call3900, "==", [1], string3901);
  if (Grace_isTrue(opresult3903)) {
  lineNumber = 1153
  lineNumber = 1
  lineNumber = 1153
  var call3904 = callmethod(var_o,"value", [0]);
  var call3905 = Grace_length(call3904);
  var_l = call3905;
  lineNumber = 1155
  lineNumber = 1154
  var opresult3907 = callmethod(var_l, "+", [1], new GraceNum(1));
  var_l = opresult3907;
  lineNumber = 1155
  lineNumber = 1
  lineNumber = 1155
  lineNumber = 1
  lineNumber = 1155
  var call3908 = callmethod(var_o,"value", [0]);
  lineNumber = 1156
  var call3909 = callmethod(this,"escapestring2", [1], call3908);
  lineNumber = 1155
  var call3910 = callmethod(var_o,"value:=", [1], call3909);
  lineNumber = 1156
  var string3911 = new GraceString("  if (strlit");
  var opresult3913 = callmethod(string3911, "++", [1], var_auto__95__count);
  var string3914 = new GraceString(" == NULL) {");
  var opresult3916 = callmethod(opresult3913, "++", [1], string3914);
  lineNumber = 1157
  var call3917 = callmethod(this,"out", [1], opresult3916);
  var string3918 = new GraceString("    strlit");
  var opresult3920 = callmethod(string3918, "++", [1], var_auto__95__count);
  var string3921 = new GraceString(" = alloc_String(\"");
  var opresult3923 = callmethod(opresult3920, "++", [1], string3921);
  lineNumber = 1
  lineNumber = 1157
  var call3924 = callmethod(var_o,"value", [0]);
  var opresult3926 = callmethod(opresult3923, "++", [1], call3924);
  var string3927 = new GraceString("\");");
  var opresult3929 = callmethod(opresult3926, "++", [1], string3927);
  lineNumber = 1158
  var call3930 = callmethod(this,"out", [1], opresult3929);
  var string3931 = new GraceString("    gc_root(strlit");
  var opresult3933 = callmethod(string3931, "++", [1], var_auto__95__count);
  var string3934 = new GraceString(");");
  var opresult3936 = callmethod(opresult3933, "++", [1], string3934);
  lineNumber = 1159
  var call3937 = callmethod(this,"out", [1], opresult3936);
  var string3938 = new GraceString("  }");
  lineNumber = 1160
  var call3939 = callmethod(this,"out", [1], string3938);
  var string3940 = new GraceString("static Object strlit");
  var opresult3942 = callmethod(string3940, "++", [1], var_auto__95__count);
  var string3943 = new GraceString(";");
  var opresult3945 = callmethod(opresult3942, "++", [1], string3943);
  var call3946 = callmethod(var_globals,"push", [1], opresult3945);
  lineNumber = 1162
  lineNumber = 1
  lineNumber = 1162
  lineNumber = 1161
  var string3947 = new GraceString("strlit");
  var opresult3949 = callmethod(string3947, "++", [1], var_auto__95__count);
  var call3950 = callmethod(var_o,"register:=", [1], opresult3949);
  lineNumber = 1163
  lineNumber = 1162
  var opresult3952 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3952;
  var if3899 = opresult3952;
}
  lineNumber = 1165
  lineNumber = 1167
  lineNumber = 1
  lineNumber = 1164
  var call3954 = callmethod(var_o,"kind", [0]);
  var string3955 = new GraceString("index");
  var opresult3957 = callmethod(call3954, "==", [1], string3955);
  if (Grace_isTrue(opresult3957)) {
  lineNumber = 1165
  lineNumber = 1166
  var call3958 = callmethod(this,"compileindex", [1], var_o);
  var if3953 = call3958;
}
  lineNumber = 1168
  lineNumber = 1170
  lineNumber = 1
  lineNumber = 1167
  var call3960 = callmethod(var_o,"kind", [0]);
  var string3961 = new GraceString("octets");
  var opresult3963 = callmethod(call3960, "==", [1], string3961);
  if (Grace_isTrue(opresult3963)) {
  lineNumber = 1168
  lineNumber = 1169
  var call3964 = callmethod(this,"compileoctets", [1], var_o);
  var if3959 = call3964;
}
  lineNumber = 1171
  lineNumber = 1173
  lineNumber = 1
  lineNumber = 1170
  var call3966 = callmethod(var_o,"kind", [0]);
  var string3967 = new GraceString("import");
  var opresult3969 = callmethod(call3966, "==", [1], string3967);
  if (Grace_isTrue(opresult3969)) {
  lineNumber = 1171
  lineNumber = 1172
  var call3970 = callmethod(this,"compileimport", [1], var_o);
  var if3965 = call3970;
}
  lineNumber = 1174
  lineNumber = 1176
  lineNumber = 1
  lineNumber = 1173
  var call3972 = callmethod(var_o,"kind", [0]);
  var string3973 = new GraceString("return");
  var opresult3975 = callmethod(call3972, "==", [1], string3973);
  if (Grace_isTrue(opresult3975)) {
  lineNumber = 1174
  lineNumber = 1175
  var call3976 = callmethod(this,"compilereturn", [1], var_o);
  var if3971 = call3976;
}
  lineNumber = 1177
  lineNumber = 1179
  lineNumber = 1
  lineNumber = 1176
  var call3978 = callmethod(var_o,"kind", [0]);
  var string3979 = new GraceString("generic");
  var opresult3981 = callmethod(call3978, "==", [1], string3979);
  if (Grace_isTrue(opresult3981)) {
  lineNumber = 1177
  lineNumber = 1
  lineNumber = 1177
  lineNumber = 1
  lineNumber = 1177
  var call3982 = callmethod(var_o,"value", [0]);
  lineNumber = 1178
  var call3983 = callmethod(this,"compilenode", [1], call3982);
  lineNumber = 1177
  var call3984 = callmethod(var_o,"register:=", [1], call3983);
  var if3977 = call3984;
}
  lineNumber = 1189
  lineNumber = 1191
  lineNumber = 1
  lineNumber = 1179
  var call3986 = callmethod(var_o,"kind", [0]);
  var string3987 = new GraceString("identifier");
  var opresult3989 = callmethod(call3986, "==", [1], string3987);
  lineNumber = 1191
  lineNumber = 1
  lineNumber = 1180
  var call3990 = callmethod(var_o,"value", [0]);
  var string3991 = new GraceString("true");
  var opresult3993 = callmethod(call3990, "==", [1], string3991);
  lineNumber = 1191
  lineNumber = 1
  lineNumber = 1180
  var call3994 = callmethod(var_o,"value", [0]);
  var string3995 = new GraceString("false");
  var opresult3997 = callmethod(call3994, "==", [1], string3995);
  var opresult3999 = callmethod(opresult3993, "|", [1], opresult3997);
  var opresult4001 = callmethod(opresult3989, "&", [1], opresult3999);
  if (Grace_isTrue(opresult4001)) {
  lineNumber = 1182
  lineNumber = 1181
  var var_val = new GraceNum(0);
  lineNumber = 1184
  lineNumber = 1185
  lineNumber = 1
  lineNumber = 1182
  var call4003 = callmethod(var_o,"value", [0]);
  var string4004 = new GraceString("true");
  var opresult4006 = callmethod(call4003, "==", [1], string4004);
  if (Grace_isTrue(opresult4006)) {
  lineNumber = 1184
  lineNumber = 1183
  var_val = new GraceNum(1);
  var if4002 = new GraceNum(1);
}
  lineNumber = 1185
  var string4007 = new GraceString("  Object bool");
  var opresult4009 = callmethod(string4007, "++", [1], var_auto__95__count);
  var string4010 = new GraceString(" = alloc_Boolean(");
  var opresult4012 = callmethod(string4010, "++", [1], var_val);
  var string4013 = new GraceString(");");
  var opresult4015 = callmethod(opresult4012, "++", [1], string4013);
  var opresult4017 = callmethod(opresult4009, "++", [1], opresult4015);
  lineNumber = 1186
  var call4018 = callmethod(this,"out", [1], opresult4017);
  lineNumber = 1187
  lineNumber = 1
  lineNumber = 1187
  lineNumber = 1186
  var string4019 = new GraceString("bool");
  var opresult4021 = callmethod(string4019, "++", [1], var_auto__95__count);
  var call4022 = callmethod(var_o,"register:=", [1], opresult4021);
  lineNumber = 1188
  lineNumber = 1187
  var opresult4024 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult4024;
  var if3985 = opresult4024;
  } else {
  lineNumber = 1189
  lineNumber = 1191
  lineNumber = 1
  lineNumber = 1188
  var call4026 = callmethod(var_o,"kind", [0]);
  var string4027 = new GraceString("identifier");
  var opresult4029 = callmethod(call4026, "==", [1], string4027);
  if (Grace_isTrue(opresult4029)) {
  lineNumber = 1189
  lineNumber = 1190
  var call4030 = callmethod(this,"compileidentifier", [1], var_o);
  var if4025 = call4030;
}
  var if3985 = if4025;
}
  lineNumber = 1192
  lineNumber = 1194
  lineNumber = 1
  lineNumber = 1191
  var call4032 = callmethod(var_o,"kind", [0]);
  var string4033 = new GraceString("defdec");
  var opresult4035 = callmethod(call4032, "==", [1], string4033);
  if (Grace_isTrue(opresult4035)) {
  lineNumber = 1192
  lineNumber = 1193
  var call4036 = callmethod(this,"compiledefdec", [1], var_o);
  var if4031 = call4036;
}
  lineNumber = 1195
  lineNumber = 1197
  lineNumber = 1
  lineNumber = 1194
  var call4038 = callmethod(var_o,"kind", [0]);
  var string4039 = new GraceString("vardec");
  var opresult4041 = callmethod(call4038, "==", [1], string4039);
  if (Grace_isTrue(opresult4041)) {
  lineNumber = 1195
  lineNumber = 1196
  var call4042 = callmethod(this,"compilevardec", [1], var_o);
  var if4037 = call4042;
}
  lineNumber = 1198
  lineNumber = 1200
  lineNumber = 1
  lineNumber = 1197
  var call4044 = callmethod(var_o,"kind", [0]);
  var string4045 = new GraceString("block");
  var opresult4047 = callmethod(call4044, "==", [1], string4045);
  if (Grace_isTrue(opresult4047)) {
  lineNumber = 1198
  lineNumber = 1199
  var call4048 = callmethod(this,"compileblock", [1], var_o);
  var if4043 = call4048;
}
  lineNumber = 1203
  lineNumber = 1204
  lineNumber = 1
  lineNumber = 1200
  var call4050 = callmethod(var_o,"kind", [0]);
  var string4051 = new GraceString("method");
  var opresult4053 = callmethod(call4050, "==", [1], string4051);
  if (Grace_isTrue(opresult4053)) {
  lineNumber = 1201
  var string4054 = new GraceString("self");
  lineNumber = 1202
  var call4055 = callmethod(this,"compilemethod", [3], var_o, string4054, var_topLevelMethodPos);
  lineNumber = 1203
  lineNumber = 1202
  var opresult4057 = callmethod(var_topLevelMethodPos, "+", [1], new GraceNum(1));
  var_topLevelMethodPos = opresult4057;
  var if4049 = opresult4057;
}
  lineNumber = 1205
  lineNumber = 1207
  lineNumber = 1
  lineNumber = 1204
  var call4059 = callmethod(var_o,"kind", [0]);
  var string4060 = new GraceString("array");
  var opresult4062 = callmethod(call4059, "==", [1], string4060);
  if (Grace_isTrue(opresult4062)) {
  lineNumber = 1205
  lineNumber = 1206
  var call4063 = callmethod(this,"compilearray", [1], var_o);
  var if4058 = call4063;
}
  lineNumber = 1208
  lineNumber = 1210
  lineNumber = 1
  lineNumber = 1207
  var call4065 = callmethod(var_o,"kind", [0]);
  var string4066 = new GraceString("bind");
  var opresult4068 = callmethod(call4065, "==", [1], string4066);
  if (Grace_isTrue(opresult4068)) {
  lineNumber = 1208
  lineNumber = 1209
  var call4069 = callmethod(this,"compilebind", [1], var_o);
  var if4064 = call4069;
}
  lineNumber = 1211
  lineNumber = 1213
  lineNumber = 1
  lineNumber = 1210
  var call4071 = callmethod(var_o,"kind", [0]);
  var string4072 = new GraceString("while");
  var opresult4074 = callmethod(call4071, "==", [1], string4072);
  if (Grace_isTrue(opresult4074)) {
  lineNumber = 1211
  lineNumber = 1212
  var call4075 = callmethod(this,"compilewhile", [1], var_o);
  var if4070 = call4075;
}
  lineNumber = 1214
  lineNumber = 1216
  lineNumber = 1
  lineNumber = 1213
  var call4077 = callmethod(var_o,"kind", [0]);
  var string4078 = new GraceString("if");
  var opresult4080 = callmethod(call4077, "==", [1], string4078);
  if (Grace_isTrue(opresult4080)) {
  lineNumber = 1214
  lineNumber = 1215
  var call4081 = callmethod(this,"compileif", [1], var_o);
  var if4076 = call4081;
}
  lineNumber = 1217
  lineNumber = 1219
  lineNumber = 1
  lineNumber = 1216
  var call4083 = callmethod(var_o,"kind", [0]);
  var string4084 = new GraceString("matchcase");
  var opresult4086 = callmethod(call4083, "==", [1], string4084);
  if (Grace_isTrue(opresult4086)) {
  lineNumber = 1217
  lineNumber = 1218
  var call4087 = callmethod(this,"compilematchcase", [1], var_o);
  var if4082 = call4087;
}
  lineNumber = 1220
  lineNumber = 1222
  lineNumber = 1
  lineNumber = 1219
  var call4089 = callmethod(var_o,"kind", [0]);
  var string4090 = new GraceString("class");
  var opresult4092 = callmethod(call4089, "==", [1], string4090);
  if (Grace_isTrue(opresult4092)) {
  lineNumber = 1220
  lineNumber = 1221
  var call4093 = callmethod(this,"compileclass", [1], var_o);
  var if4088 = call4093;
}
  lineNumber = 1223
  lineNumber = 1225
  lineNumber = 1
  lineNumber = 1222
  var call4095 = callmethod(var_o,"kind", [0]);
  var string4096 = new GraceString("object");
  var opresult4098 = callmethod(call4095, "==", [1], string4096);
  if (Grace_isTrue(opresult4098)) {
  lineNumber = 1223
  var string4099 = new GraceString("self");
  lineNumber = 1224
  var call4100 = callmethod(this,"compileobject", [2], var_o, string4099);
  var if4094 = call4100;
}
  lineNumber = 1226
  lineNumber = 1228
  lineNumber = 1
  lineNumber = 1225
  var call4102 = callmethod(var_o,"kind", [0]);
  var string4103 = new GraceString("type");
  var opresult4105 = callmethod(call4102, "==", [1], string4103);
  if (Grace_isTrue(opresult4105)) {
  lineNumber = 1226
  lineNumber = 1227
  var call4106 = callmethod(this,"compiletype", [1], var_o);
  var if4101 = call4106;
}
  lineNumber = 1229
  lineNumber = 1231
  lineNumber = 1
  lineNumber = 1228
  var call4108 = callmethod(var_o,"kind", [0]);
  var string4109 = new GraceString("member");
  var opresult4111 = callmethod(call4108, "==", [1], string4109);
  if (Grace_isTrue(opresult4111)) {
  lineNumber = 1229
  lineNumber = 1230
  var call4112 = callmethod(this,"compilemember", [1], var_o);
  var if4107 = call4112;
}
  lineNumber = 1232
  lineNumber = 1234
  lineNumber = 1
  lineNumber = 1231
  var call4114 = callmethod(var_o,"kind", [0]);
  var string4115 = new GraceString("for");
  var opresult4117 = callmethod(call4114, "==", [1], string4115);
  if (Grace_isTrue(opresult4117)) {
  lineNumber = 1232
  lineNumber = 1233
  var call4118 = callmethod(this,"compilefor", [1], var_o);
  var if4113 = call4118;
}
  lineNumber = 1285
  lineNumber = 1288
  lineNumber = 1
  lineNumber = 1234
  var call4120 = callmethod(var_o,"kind", [0]);
  var string4121 = new GraceString("call");
  var opresult4123 = callmethod(call4120, "==", [1], string4121);
  if (Grace_isTrue(opresult4123)) {
  lineNumber = 1285
  lineNumber = 1287
  lineNumber = 1
  lineNumber = 1287
  lineNumber = 1
  lineNumber = 1235
  var call4125 = callmethod(var_o,"value", [0]);
  var call4126 = callmethod(call4125,"value", [0]);
  var string4127 = new GraceString("print");
  var opresult4129 = callmethod(call4126, "==", [1], string4127);
  if (Grace_isTrue(opresult4129)) {
  lineNumber = 1237
  var array4130 = new GraceList([
]);

  var var_args = array4130;
  lineNumber = 1239
  lineNumber = 1237
  lineNumber = 1
  lineNumber = 1237
  lineNumber = 1
  lineNumber = 1237
  lineNumber = 1
  lineNumber = 1237
  var call4131 = callmethod(var_o,"with", [0]);
  var call4132 = callmethod(call4131,"first", [0]);
  var call4133 = callmethod(call4132,"args", [0]);
  lineNumber = 1239
  var block4134 = Grace_allocObject();
  block4134.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4134.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4134.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4134.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4134.receiver = this;
  block4134.className = 'block<genc:1239>';
  block4134.real = function(
var_prm
) {
  lineNumber = 1238
  lineNumber = 1239
  var call4135 = callmethod(this,"compilenode", [1], var_prm);
  var var_r = call4135;
  var call4136 = callmethod(var_args,"push", [1], var_r);
  return call4136;
};
  var call4137 = callmethod(Grace_prelude,"for()do", [1, 1], call4133, block4134);
  lineNumber = 1242
  lineNumber = 1241
  var var_parami = new GraceNum(0);
  lineNumber = 1245
  lineNumber = 1242
  lineNumber = 1245
  var block4138 = Grace_allocObject();
  block4138.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4138.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4138.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4138.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4138.receiver = this;
  block4138.className = 'block<genc:1245>';
  block4138.real = function(
var_arg
) {
  lineNumber = 1243
  var string4139 = new GraceString("  params[");
  var opresult4141 = callmethod(string4139, "++", [1], var_parami);
  var string4142 = new GraceString("] = ");
  var opresult4144 = callmethod(opresult4141, "++", [1], string4142);
  var opresult4146 = callmethod(opresult4144, "++", [1], var_arg);
  var string4147 = new GraceString(";");
  var opresult4149 = callmethod(opresult4146, "++", [1], string4147);
  lineNumber = 1244
  var call4150 = callmethod(this,"out", [1], opresult4149);
  lineNumber = 1245
  lineNumber = 1244
  var opresult4152 = callmethod(var_parami, "+", [1], new GraceNum(1));
  var_parami = opresult4152;
  return opresult4152;
};
  var call4153 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block4138);
  lineNumber = 1247
  lineNumber = 1246
  var string4154 = new GraceString("  Object call");
  var opresult4156 = callmethod(string4154, "++", [1], var_auto__95__count);
  var string4157 = new GraceString(" = gracelib_print(NULL, ");
  var opresult4159 = callmethod(opresult4156, "++", [1], string4157);
  lineNumber = 1247
  lineNumber = 1
  lineNumber = 1247
  var call4160 = callmethod(var_args,"size", [0]);
  var opresult4162 = callmethod(opresult4159, "++", [1], call4160);
  var string4163 = new GraceString(",  params);");
  var opresult4165 = callmethod(opresult4162, "++", [1], string4163);
  lineNumber = 1248
  var call4166 = callmethod(this,"out", [1], opresult4165);
  lineNumber = 1249
  lineNumber = 1
  lineNumber = 1249
  lineNumber = 1248
  var string4167 = new GraceString("call");
  var opresult4169 = callmethod(string4167, "++", [1], var_auto__95__count);
  var call4170 = callmethod(var_o,"register:=", [1], opresult4169);
  lineNumber = 1250
  lineNumber = 1249
  var opresult4172 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult4172;
  var if4124 = opresult4172;
  } else {
  lineNumber = 1285
  lineNumber = 1253
  lineNumber = 1258
  lineNumber = 1
  lineNumber = 1258
  lineNumber = 1
  lineNumber = 1250
  var call4174 = callmethod(var_o,"value", [0]);
  var call4175 = callmethod(call4174,"kind", [0]);
  var string4176 = new GraceString("member");
  var opresult4178 = callmethod(call4175, "==", [1], string4176);
  lineNumber = 1253
  var block4179 = Grace_allocObject();
  block4179.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4179.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4179.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4179.receiver = this;
  block4179.className = 'block<genc:1253>';
  block4179.real = function(
) {
  lineNumber = 1
  lineNumber = 1253
  lineNumber = 1
  lineNumber = 1253
  lineNumber = 1
  lineNumber = 1251
  var call4180 = callmethod(var_o,"value", [0]);
  var call4181 = callmethod(call4180,"in", [0]);
  var call4182 = callmethod(call4181,"kind", [0]);
  var string4183 = new GraceString("identifier");
  var opresult4185 = callmethod(call4182, "==", [1], string4183);
  lineNumber = 1253
  lineNumber = 1
  lineNumber = 1253
  lineNumber = 1
  lineNumber = 1253
  lineNumber = 1
  lineNumber = 1252
  var call4186 = callmethod(var_o,"value", [0]);
  var call4187 = callmethod(call4186,"in", [0]);
  var call4188 = callmethod(call4187,"value", [0]);
  var string4189 = new GraceString("self");
  var opresult4191 = callmethod(call4188, "==", [1], string4189);
  var opresult4193 = callmethod(opresult4185, "&", [1], opresult4191);
  lineNumber = 1253
  lineNumber = 1
  lineNumber = 1253
  lineNumber = 1
  lineNumber = 1253
  var call4194 = callmethod(var_o,"value", [0]);
  var call4195 = callmethod(call4194,"value", [0]);
  var string4196 = new GraceString("length");
  var opresult4198 = callmethod(call4195, "==", [1], string4196);
  var opresult4200 = callmethod(opresult4193, "&", [1], opresult4198);
  return opresult4200;
};
  var opresult4202 = callmethod(opresult4178, "&&", [1], block4179);
  if (Grace_isTrue(opresult4202)) {
  lineNumber = 1254
  lineNumber = 1
  lineNumber = 1254
  lineNumber = 1
  lineNumber = 1254
  lineNumber = 1
  lineNumber = 1254
  lineNumber = 1
  lineNumber = 1254
  var call4203 = callmethod(var_o,"with", [0]);
  var call4204 = callmethod(call4203,"first", [0]);
  var call4205 = callmethod(call4204,"args", [0]);
  var call4206 = callmethod(call4205,"first", [0]);
  lineNumber = 1255
  var call4207 = callmethod(this,"compilenode", [1], call4206);
  var_tmp = call4207;
  var string4208 = new GraceString("  Object call");
  var opresult4210 = callmethod(string4208, "++", [1], var_auto__95__count);
  var string4211 = new GraceString(" = gracelib_length(");
  var opresult4213 = callmethod(string4211, "++", [1], var_tmp);
  var string4214 = new GraceString(");");
  var opresult4216 = callmethod(opresult4213, "++", [1], string4214);
  var opresult4218 = callmethod(opresult4210, "++", [1], opresult4216);
  lineNumber = 1256
  var call4219 = callmethod(this,"out", [1], opresult4218);
  lineNumber = 1257
  lineNumber = 1
  lineNumber = 1257
  lineNumber = 1256
  var string4220 = new GraceString("call");
  var opresult4222 = callmethod(string4220, "++", [1], var_auto__95__count);
  var call4223 = callmethod(var_o,"register:=", [1], opresult4222);
  lineNumber = 1258
  lineNumber = 1257
  var opresult4225 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult4225;
  var if4173 = opresult4225;
  } else {
  lineNumber = 1285
  lineNumber = 1270
  lineNumber = 1
  lineNumber = 1270
  lineNumber = 1
  lineNumber = 1258
  var call4227 = callmethod(var_o,"value", [0]);
  var call4228 = callmethod(call4227,"kind", [0]);
  var string4229 = new GraceString("identifier");
  var opresult4231 = callmethod(call4228, "==", [1], string4229);
  lineNumber = 1270
  lineNumber = 1
  lineNumber = 1270
  lineNumber = 1
  lineNumber = 1259
  var call4232 = callmethod(var_o,"value", [0]);
  var call4233 = callmethod(call4232,"value", [0]);
  var string4234 = new GraceString("length");
  var opresult4236 = callmethod(call4233, "==", [1], string4234);
  var opresult4238 = callmethod(opresult4231, "&", [1], opresult4236);
  if (Grace_isTrue(opresult4238)) {
  lineNumber = 1265
  lineNumber = 1267
  lineNumber = 1
  lineNumber = 1267
  lineNumber = 1
  lineNumber = 1267
  lineNumber = 1
  lineNumber = 1267
  lineNumber = 1
  lineNumber = 1260
  var call4240 = callmethod(var_o,"with", [0]);
  var call4241 = callmethod(call4240,"first", [0]);
  var call4242 = callmethod(call4241,"args", [0]);
  var call4243 = callmethod(call4242,"size", [0]);
  var opresult4245 = callmethod(call4243, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult4245)) {
  lineNumber = 1261
  var string4246 = new GraceString("; PP FOLLOWS");
  lineNumber = 1262
  var call4247 = callmethod(this,"out", [1], string4246);
  var call4248 = callmethod(var_o,"pretty", [1], new GraceNum(0));
  lineNumber = 1263
  var call4249 = callmethod(this,"out", [1], call4248);
  lineNumber = 1264
  lineNumber = 1263
  var string4250 = new GraceString("null");
  var_tmp = string4250;
  var if4239 = string4250;
  } else {
  lineNumber = 1265
  lineNumber = 1
  lineNumber = 1265
  lineNumber = 1
  lineNumber = 1265
  lineNumber = 1
  lineNumber = 1265
  lineNumber = 1
  lineNumber = 1265
  var call4251 = callmethod(var_o,"with", [0]);
  var call4252 = callmethod(call4251,"first", [0]);
  var call4253 = callmethod(call4252,"args", [0]);
  var call4254 = callmethod(call4253,"first", [0]);
  lineNumber = 1266
  var call4255 = callmethod(this,"compilenode", [1], call4254);
  var_tmp = call4255;
  var if4239 = call4255;
}
  lineNumber = 1267
  var string4256 = new GraceString("  Object call");
  var opresult4258 = callmethod(string4256, "++", [1], var_auto__95__count);
  var string4259 = new GraceString(" = gracelib_length(");
  var opresult4261 = callmethod(string4259, "++", [1], var_tmp);
  var string4262 = new GraceString(");");
  var opresult4264 = callmethod(opresult4261, "++", [1], string4262);
  var opresult4266 = callmethod(opresult4258, "++", [1], opresult4264);
  lineNumber = 1268
  var call4267 = callmethod(this,"out", [1], opresult4266);
  lineNumber = 1269
  lineNumber = 1
  lineNumber = 1269
  lineNumber = 1268
  var string4268 = new GraceString("call");
  var opresult4270 = callmethod(string4268, "++", [1], var_auto__95__count);
  var call4271 = callmethod(var_o,"register:=", [1], opresult4270);
  lineNumber = 1270
  lineNumber = 1269
  var opresult4273 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult4273;
  var if4226 = opresult4273;
  } else {
  lineNumber = 1285
  lineNumber = 1273
  lineNumber = 1278
  lineNumber = 1
  lineNumber = 1278
  lineNumber = 1
  lineNumber = 1270
  var call4275 = callmethod(var_o,"value", [0]);
  var call4276 = callmethod(call4275,"kind", [0]);
  var string4277 = new GraceString("member");
  var opresult4279 = callmethod(call4276, "==", [1], string4277);
  lineNumber = 1273
  var block4280 = Grace_allocObject();
  block4280.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4280.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4280.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4280.receiver = this;
  block4280.className = 'block<genc:1273>';
  block4280.real = function(
) {
  lineNumber = 1
  lineNumber = 1273
  lineNumber = 1
  lineNumber = 1273
  lineNumber = 1
  lineNumber = 1271
  var call4281 = callmethod(var_o,"value", [0]);
  var call4282 = callmethod(call4281,"in", [0]);
  var call4283 = callmethod(call4282,"kind", [0]);
  var string4284 = new GraceString("identifier");
  var opresult4286 = callmethod(call4283, "==", [1], string4284);
  lineNumber = 1273
  lineNumber = 1
  lineNumber = 1273
  lineNumber = 1
  lineNumber = 1273
  lineNumber = 1
  lineNumber = 1272
  var call4287 = callmethod(var_o,"value", [0]);
  var call4288 = callmethod(call4287,"in", [0]);
  var call4289 = callmethod(call4288,"value", [0]);
  var string4290 = new GraceString("self");
  var opresult4292 = callmethod(call4289, "==", [1], string4290);
  var opresult4294 = callmethod(opresult4286, "&", [1], opresult4292);
  lineNumber = 1273
  lineNumber = 1
  lineNumber = 1273
  lineNumber = 1
  lineNumber = 1273
  var call4295 = callmethod(var_o,"value", [0]);
  var call4296 = callmethod(call4295,"value", [0]);
  var string4297 = new GraceString("escapestring");
  var opresult4299 = callmethod(call4296, "==", [1], string4297);
  var opresult4301 = callmethod(opresult4294, "&", [1], opresult4299);
  return opresult4301;
};
  var opresult4303 = callmethod(opresult4279, "&&", [1], block4280);
  if (Grace_isTrue(opresult4303)) {
  lineNumber = 1275
  lineNumber = 1
  lineNumber = 1275
  lineNumber = 1
  lineNumber = 1275
  lineNumber = 1
  lineNumber = 1275
  lineNumber = 1
  lineNumber = 1274
  var call4304 = callmethod(var_o,"with", [0]);
  var call4305 = callmethod(call4304,"first", [0]);
  var call4306 = callmethod(call4305,"args", [0]);
  var call4307 = callmethod(call4306,"first", [0]);
  var_tmp = call4307;
  lineNumber = 1275
  var string4308 = new GraceString("_escape");
  lineNumber = 1276
  lineNumber = 1
  lineNumber = 1275
  var call4309 = callmethod(var_ast,"memberNode", [0]);
  var call4310 = callmethod(call4309,"new", [2], string4308, var_tmp);
  var_tmp = call4310;
  lineNumber = 1276
  lineNumber = 1
  lineNumber = 1276
  var call4312 = callmethod(var_tmp,"value", [0]);
  lineNumber = 1
  lineNumber = 1276
  var call4313 = callmethod(var_ast,"callWithPart", [0]);
  var call4314 = callmethod(call4313,"new", [1], call4312);
  var array4311 = new GraceList([
call4314,
]);

  lineNumber = 1277
  lineNumber = 1
  lineNumber = 1276
  var call4315 = callmethod(var_ast,"callNode", [0]);
  var call4316 = callmethod(call4315,"new", [2], var_tmp, array4311);
  var_tmp = call4316;
  lineNumber = 1277
  lineNumber = 1
  lineNumber = 1277
  lineNumber = 1278
  var call4317 = callmethod(this,"compilenode", [1], var_tmp);
  lineNumber = 1277
  var call4318 = callmethod(var_o,"register:=", [1], call4317);
  var if4274 = call4318;
  } else {
  lineNumber = 1285
  lineNumber = 1284
  lineNumber = 1
  lineNumber = 1284
  lineNumber = 1
  lineNumber = 1278
  var call4320 = callmethod(var_o,"value", [0]);
  var call4321 = callmethod(call4320,"kind", [0]);
  var string4322 = new GraceString("identifier");
  var opresult4324 = callmethod(call4321, "==", [1], string4322);
  lineNumber = 1284
  lineNumber = 1
  lineNumber = 1284
  lineNumber = 1
  lineNumber = 1279
  var call4325 = callmethod(var_o,"value", [0]);
  var call4326 = callmethod(call4325,"value", [0]);
  var string4327 = new GraceString("escapestring");
  var opresult4329 = callmethod(call4326, "==", [1], string4327);
  var opresult4331 = callmethod(opresult4324, "&", [1], opresult4329);
  if (Grace_isTrue(opresult4331)) {
  lineNumber = 1281
  lineNumber = 1
  lineNumber = 1281
  lineNumber = 1
  lineNumber = 1281
  lineNumber = 1
  lineNumber = 1281
  lineNumber = 1
  lineNumber = 1280
  var call4332 = callmethod(var_o,"with", [0]);
  var call4333 = callmethod(call4332,"first", [0]);
  var call4334 = callmethod(call4333,"args", [0]);
  var call4335 = callmethod(call4334,"first", [0]);
  var_tmp = call4335;
  lineNumber = 1281
  var string4336 = new GraceString("_escape");
  lineNumber = 1282
  lineNumber = 1
  lineNumber = 1281
  var call4337 = callmethod(var_ast,"memberNode", [0]);
  var call4338 = callmethod(call4337,"new", [2], string4336, var_tmp);
  var_tmp = call4338;
  lineNumber = 1282
  lineNumber = 1
  lineNumber = 1282
  var call4340 = callmethod(var_tmp,"value", [0]);
  lineNumber = 1
  lineNumber = 1282
  var call4341 = callmethod(var_ast,"callWithPart", [0]);
  var call4342 = callmethod(call4341,"new", [1], call4340);
  var array4339 = new GraceList([
call4342,
]);

  lineNumber = 1283
  lineNumber = 1
  lineNumber = 1282
  var call4343 = callmethod(var_ast,"callNode", [0]);
  var call4344 = callmethod(call4343,"new", [2], var_tmp, array4339);
  var_tmp = call4344;
  lineNumber = 1283
  lineNumber = 1
  lineNumber = 1283
  lineNumber = 1284
  var call4345 = callmethod(this,"compilenode", [1], var_tmp);
  lineNumber = 1283
  var call4346 = callmethod(var_o,"register:=", [1], call4345);
  var if4319 = call4346;
  } else {
  lineNumber = 1285
  var bool4347 = new GraceBoolean(false)
  lineNumber = 1286
  var call4348 = callmethod(this,"compilecall", [2], var_o, bool4347);
  var if4319 = call4348;
}
  var if4274 = if4319;
}
  var if4226 = if4274;
}
  var if4173 = if4226;
}
  var if4124 = if4173;
}
  var if4119 = if4124;
}
  lineNumber = 1289
  lineNumber = 1291
  lineNumber = 1
  lineNumber = 1288
  var call4350 = callmethod(var_o,"kind", [0]);
  var string4351 = new GraceString("op");
  var opresult4353 = callmethod(call4350, "==", [1], string4351);
  if (Grace_isTrue(opresult4353)) {
  lineNumber = 1289
  lineNumber = 1290
  var call4354 = callmethod(this,"compileop", [1], var_o);
  var if4349 = call4354;
}
  lineNumber = 1292
  lineNumber = 1291
  var diff4356 = callmethod(var_compilationDepth, "-", [1], new GraceNum(1));
  var_compilationDepth = diff4356;
  lineNumber = 1292
  var string4357 = new GraceString("// compilenode returning ");
  lineNumber = 1
  lineNumber = 1292
  var call4358 = callmethod(var_o,"register", [0]);
  var opresult4360 = callmethod(string4357, "++", [1], call4358);
  lineNumber = 1293
  var call4361 = callmethod(this,"out", [1], opresult4360);
  lineNumber = 1
  lineNumber = 1293
  var call4362 = callmethod(var_o,"register", [0]);
  return call4362
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compilenode"] = func3871;
  lineNumber = 1313
var func4363 = function(argcv) {
  var curarg = 1;
  var var_subprocesses = arguments[curarg];
  curarg++;
  var var_id = arguments[curarg];
  curarg++;
  var var_cmd = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1297
  lineNumber = 1299
  lineNumber = 1
  lineNumber = 1296
  var call4365 = callmethod(var_subprocesses,"size", [0]);
  lineNumber = 1299
  lineNumber = 1
  lineNumber = 1296
  var call4366 = callmethod(var_util,"jobs", [0]);
  var opresult4368 = callmethod(call4365, "<", [1], call4366);
  if (Grace_isTrue(opresult4368)) {
  lineNumber = 1297
  var string4370 = new GraceString("bash");
  var string4371 = new GraceString("-c");
  var call4372 = callmethod(var_io,"spawn", [3], string4370, string4371, var_cmd);
  var array4369 = new GraceList([
var_id,
call4372,
]);

  var call4373 = callmethod(var_subprocesses,"push", [1], array4369);
  return call4373
  var if4364 = undefined;
}
  lineNumber = 1300
  lineNumber = 1299
  var var_alive = new GraceNum(0);
  lineNumber = 1301
  lineNumber = 1300
  var bool4374 = new GraceBoolean(false)
  var var_firstAlive = bool4374;
  lineNumber = 1308
  lineNumber = 1301
  lineNumber = 1308
  var block4375 = Grace_allocObject();
  block4375.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4375.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4375.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4375.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4375.receiver = this;
  block4375.className = 'block<genc:1308>';
  block4375.real = function(
var_spinfo
) {
  lineNumber = 1303
  lineNumber = 1302
  var idxres4376 = var_spinfo.methods["[]"].call(var_spinfo, [1], new GraceNum(2));
  var var_sp = idxres4376;
  lineNumber = 1308
  lineNumber = 1309
  lineNumber = 1
  lineNumber = 1303
  var call4378 = callmethod(var_sp,"terminated", [0]);
  var call4379 = callmethod(call4378,"prefix!", [0]);
  if (Grace_isTrue(call4379)) {
  lineNumber = 1306
  lineNumber = 1307
  lineNumber = 1304
  var bool4381 = new GraceBoolean(false)
  var opresult4383 = callmethod(bool4381, "==", [1], var_firstAlive);
  if (Grace_isTrue(opresult4383)) {
  lineNumber = 1306
  lineNumber = 1305
  var_firstAlive = var_spinfo;
  var if4380 = var_spinfo;
}
  lineNumber = 1308
  lineNumber = 1307
  var opresult4385 = callmethod(var_alive, "+", [1], new GraceNum(1));
  var_alive = opresult4385;
  var if4377 = opresult4385;
}
  return if4377;
};
  var call4386 = callmethod(Grace_prelude,"for()do", [1, 1], var_subprocesses, block4375);
  lineNumber = 1311
  lineNumber = 1313
  lineNumber = 1310
  lineNumber = 1313
  lineNumber = 1
  lineNumber = 1310
  var call4388 = callmethod(var_util,"jobs", [0]);
  var opresult4390 = callmethod(var_alive, ">=", [1], call4388);
  if (Grace_isTrue(opresult4390)) {
  lineNumber = 1311
  lineNumber = 1
  lineNumber = 1311
  var idxres4391 = var_firstAlive.methods["[]"].call(var_firstAlive, [1], new GraceNum(2));
  var call4392 = callmethod(idxres4391,"wait", [0]);
  var if4387 = call4392;
}
  lineNumber = 1313
  var string4394 = new GraceString("bash");
  var string4395 = new GraceString("-c");
  var call4396 = callmethod(var_io,"spawn", [3], string4394, string4395, var_cmd);
  var array4393 = new GraceList([
var_id,
call4396,
]);

  var call4397 = callmethod(var_subprocesses,"push", [1], array4393);
  return call4397
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["spawnSubprocess"] = func4363;
  lineNumber = 1618
var func4398 = function(argcv) {
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
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1317
  lineNumber = 1
  lineNumber = 1316
  var call4399 = callmethod(var_sys,"argv", [0]);
  var var_argv = call4399;
  lineNumber = 1318
  var var_cmd;
  lineNumber = 1319
  lineNumber = 1318
  var_values = var_vl;
  lineNumber = 1320
  lineNumber = 1319
  var var_nummethods = new GraceNum(2);
  lineNumber = 1329
  lineNumber = 1320
  lineNumber = 1329
  var block4400 = Grace_allocObject();
  block4400.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4400.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4400.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4400.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4400.receiver = this;
  block4400.className = 'block<genc:1329>';
  block4400.real = function(
var_v
) {
  lineNumber = 1330
  lineNumber = 1
  lineNumber = 1321
  var call4402 = callmethod(var_v,"kind", [0]);
  var string4403 = new GraceString("vardec");
  var opresult4405 = callmethod(call4402, "==", [1], string4403);
  if (Grace_isTrue(opresult4405)) {
  lineNumber = 1323
  lineNumber = 1322
  var opresult4407 = callmethod(var_nummethods, "+", [1], new GraceNum(2));
  var_nummethods = opresult4407;
  var if4401 = opresult4407;
  } else {
  lineNumber = 1329
  lineNumber = 1325
  lineNumber = 1
  lineNumber = 1323
  var call4409 = callmethod(var_v,"kind", [0]);
  var string4410 = new GraceString("method");
  var opresult4412 = callmethod(call4409, "==", [1], string4410);
  if (Grace_isTrue(opresult4412)) {
  lineNumber = 1325
  lineNumber = 1324
  var opresult4414 = callmethod(var_nummethods, "+", [1], new GraceNum(1));
  var_nummethods = opresult4414;
  var if4408 = opresult4414;
  } else {
  lineNumber = 1329
  lineNumber = 1327
  lineNumber = 1
  lineNumber = 1325
  var call4416 = callmethod(var_v,"kind", [0]);
  var string4417 = new GraceString("defdec");
  var opresult4419 = callmethod(call4416, "==", [1], string4417);
  if (Grace_isTrue(opresult4419)) {
  lineNumber = 1327
  lineNumber = 1326
  var opresult4421 = callmethod(var_nummethods, "+", [1], new GraceNum(1));
  var_nummethods = opresult4421;
  var if4415 = opresult4421;
  } else {
  lineNumber = 1329
  lineNumber = 1330
  lineNumber = 1
  lineNumber = 1327
  var call4423 = callmethod(var_v,"kind", [0]);
  var string4424 = new GraceString("class");
  var opresult4426 = callmethod(call4423, "==", [1], string4424);
  if (Grace_isTrue(opresult4426)) {
  lineNumber = 1329
  lineNumber = 1328
  var opresult4428 = callmethod(var_nummethods, "+", [1], new GraceNum(1));
  var_nummethods = opresult4428;
  var if4422 = opresult4428;
}
  var if4415 = if4422;
}
  var if4408 = if4415;
}
  var if4401 = if4408;
}
  return if4401;
};
  var call4429 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block4400);
  lineNumber = 1332
  lineNumber = 1331
  var_outfile = var_of;
  lineNumber = 1333
  lineNumber = 1332
  var_modname = var_mn;
  lineNumber = 1333
  lineNumber = 1334
  var call4430 = callmethod(this,"escapeident", [1], var_modname);
  var_escmodname = call4430;
  lineNumber = 1335
  lineNumber = 1334
  var_runmode = var_rm;
  lineNumber = 1336
  lineNumber = 1335
  var_buildtype = var_bt;
  lineNumber = 1337
  var array4431 = new GraceList([
]);

  var var_linkfiles = array4431;
  lineNumber = 1338
  lineNumber = 1337
  var bool4432 = new GraceBoolean(false)
  var var_ext = bool4432;
  lineNumber = 1413
  lineNumber = 1416
  lineNumber = 1338
  var string4434 = new GraceString("make");
  var opresult4436 = callmethod(var_runmode, "==", [1], string4434);
  if (Grace_isTrue(opresult4436)) {
  lineNumber = 1339
  var string4437 = new GraceString("checking imports.");
  lineNumber = 1340
  var call4438 = callmethod(this,"log_verbose", [1], string4437);
  lineNumber = 1341
  var array4439 = new GraceList([
]);

  var var_subprocesses = array4439;
  lineNumber = 1400
  lineNumber = 1341
  lineNumber = 1400
  var block4440 = Grace_allocObject();
  block4440.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4440.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4440.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4440.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4440.receiver = this;
  block4440.className = 'block<genc:1400>';
  block4440.real = function(
var_v
) {
  lineNumber = 1403
  lineNumber = 1
  lineNumber = 1342
  var call4442 = callmethod(var_v,"kind", [0]);
  var string4443 = new GraceString("import");
  var opresult4445 = callmethod(call4442, "==", [1], string4443);
  if (Grace_isTrue(opresult4445)) {
  lineNumber = 1344
  lineNumber = 1
  lineNumber = 1344
  lineNumber = 1
  lineNumber = 1343
  var call4446 = callmethod(var_v,"value", [0]);
  var call4447 = callmethod(call4446,"value", [0]);
  var var_nm = call4447;
  lineNumber = 1345
  lineNumber = 1344
  var bool4448 = new GraceBoolean(false)
  var var_exists = bool4448;
  lineNumber = 1366
  lineNumber = 1346
  lineNumber = 1345
  var string4450 = new GraceString("");
  lineNumber = 1
  lineNumber = 1345
  var call4451 = callmethod(var_sys,"execPath", [0]);
  var opresult4453 = callmethod(string4450, "++", [1], call4451);
  var string4454 = new GraceString("/");
  var opresult4456 = callmethod(opresult4453, "++", [1], string4454);
  var opresult4458 = callmethod(opresult4456, "++", [1], var_nm);
  var string4459 = new GraceString(".gso");
  var opresult4461 = callmethod(opresult4458, "++", [1], string4459);
  var call4462 = callmethod(var_io,"exists", [1], opresult4461);
  lineNumber = 1346
  var block4463 = Grace_allocObject();
  block4463.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4463.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4463.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4463.receiver = this;
  block4463.className = 'block<genc:1346>';
  block4463.real = function(
) {
  var string4464 = new GraceString("Static");
  lineNumber = 1
  lineNumber = 1346
  var call4465 = callmethod(var_util,"extensions", [0]);
  var call4466 = callmethod(call4465,"contains", [1], string4464);
  var call4467 = callmethod(call4466,"prefix!", [0]);
  return call4467;
};
  var opresult4469 = callmethod(call4462, "&&", [1], block4463);
  if (Grace_isTrue(opresult4469)) {
  lineNumber = 1348
  lineNumber = 1347
  var bool4470 = new GraceBoolean(true)
  var_exists = bool4470;
  var if4449 = bool4470;
  } else {
  lineNumber = 1366
  lineNumber = 1349
  lineNumber = 1348
  var string4472 = new GraceString(".gso");
  var opresult4474 = callmethod(var_nm, "++", [1], string4472);
  var call4475 = callmethod(var_io,"exists", [1], opresult4474);
  lineNumber = 1349
  var block4476 = Grace_allocObject();
  block4476.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4476.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4476.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4476.receiver = this;
  block4476.className = 'block<genc:1349>';
  block4476.real = function(
) {
  var string4477 = new GraceString("Static");
  lineNumber = 1
  lineNumber = 1349
  var call4478 = callmethod(var_util,"extensions", [0]);
  var call4479 = callmethod(call4478,"contains", [1], string4477);
  var call4480 = callmethod(call4479,"prefix!", [0]);
  return call4480;
};
  var opresult4482 = callmethod(call4475, "&&", [1], block4476);
  if (Grace_isTrue(opresult4482)) {
  lineNumber = 1351
  lineNumber = 1350
  var bool4483 = new GraceBoolean(true)
  var_exists = bool4483;
  var if4471 = bool4483;
  } else {
  lineNumber = 1366
  lineNumber = 1354
  lineNumber = 1351
  var string4485 = new GraceString("StandardPrelude");
  var opresult4487 = callmethod(var_nm, "==", [1], string4485);
  if (Grace_isTrue(opresult4487)) {
  lineNumber = 1353
  lineNumber = 1352
  var bool4488 = new GraceBoolean(true)
  var_exists = bool4488;
  lineNumber = 1353
  var call4489 = callmethod(var_staticmodules,"push", [1], var_nm);
  var if4484 = call4489;
  } else {
  lineNumber = 1366
  lineNumber = 1355
  lineNumber = 1354
  var string4491 = new GraceString("");
  lineNumber = 1
  lineNumber = 1354
  var call4492 = callmethod(var_sys,"execPath", [0]);
  var opresult4494 = callmethod(string4491, "++", [1], call4492);
  var string4495 = new GraceString("/");
  var opresult4497 = callmethod(opresult4494, "++", [1], string4495);
  var opresult4499 = callmethod(opresult4497, "++", [1], var_nm);
  var string4500 = new GraceString(".gcn");
  var opresult4502 = callmethod(opresult4499, "++", [1], string4500);
  var call4503 = callmethod(var_io,"exists", [1], opresult4502);
  lineNumber = 1355
  var block4504 = Grace_allocObject();
  block4504.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4504.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4504.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4504.receiver = this;
  block4504.className = 'block<genc:1355>';
  block4504.real = function(
) {
  var string4505 = new GraceString("");
  var opresult4507 = callmethod(string4505, "++", [1], var_nm);
  var string4508 = new GraceString(".grace");
  var opresult4510 = callmethod(opresult4507, "++", [1], string4508);
  var call4511 = callmethod(var_io,"exists", [1], opresult4510);
  var call4512 = callmethod(call4511,"prefix!", [0]);
  return call4512;
};
  var opresult4514 = callmethod(call4503, "&&", [1], block4504);
  if (Grace_isTrue(opresult4514)) {
  lineNumber = 1360
  lineNumber = 1359
  var bool4515 = new GraceBoolean(true)
  var_exists = bool4515;
  lineNumber = 1360
  var string4516 = new GraceString("");
  lineNumber = 1
  lineNumber = 1360
  var call4517 = callmethod(var_sys,"execPath", [0]);
  var opresult4519 = callmethod(string4516, "++", [1], call4517);
  var string4520 = new GraceString("/");
  var opresult4522 = callmethod(opresult4519, "++", [1], string4520);
  var opresult4524 = callmethod(opresult4522, "++", [1], var_nm);
  var string4525 = new GraceString(".gcn");
  var opresult4527 = callmethod(opresult4524, "++", [1], string4525);
  var call4528 = callmethod(var_linkfiles,"push", [1], opresult4527);
  lineNumber = 1361
  var call4529 = callmethod(var_staticmodules,"push", [1], var_nm);
  var if4490 = call4529;
  } else {
  lineNumber = 1366
  lineNumber = 1362
  var string4531 = new GraceString(".gcn");
  var opresult4533 = callmethod(var_nm, "++", [1], string4531);
  var call4534 = callmethod(var_io,"exists", [1], opresult4533);
  if (Grace_isTrue(call4534)) {
  lineNumber = 1366
  lineNumber = 1363
  var string4536 = new GraceString(".gcn");
  var opresult4538 = callmethod(var_nm, "++", [1], string4536);
  var string4539 = new GraceString(".grace");
  var opresult4541 = callmethod(var_nm, "++", [1], string4539);
  var call4542 = callmethod(var_io,"newer", [2], opresult4538, opresult4541);
  if (Grace_isTrue(call4542)) {
  lineNumber = 1365
  lineNumber = 1364
  var bool4543 = new GraceBoolean(true)
  var_exists = bool4543;
  lineNumber = 1365
  var string4544 = new GraceString(".gcn");
  var opresult4546 = callmethod(var_nm, "++", [1], string4544);
  var call4547 = callmethod(var_linkfiles,"push", [1], opresult4546);
  lineNumber = 1366
  var call4548 = callmethod(var_staticmodules,"push", [1], var_nm);
  var if4535 = call4548;
}
  var if4530 = if4535;
}
  var if4490 = if4530;
}
  var if4484 = if4490;
}
  var if4471 = if4484;
}
  var if4449 = if4471;
}
  lineNumber = 1393
  lineNumber = 1395
  lineNumber = 1
  lineNumber = 1369
  var call4550 = callmethod(var_exists,"not", [0]);
  if (Grace_isTrue(call4550)) {
  lineNumber = 1372
  lineNumber = 1370
  var string4552 = new GraceString(".gc");
  var opresult4554 = callmethod(var_nm, "++", [1], string4552);
  var call4555 = callmethod(var_io,"exists", [1], opresult4554);
  if (Grace_isTrue(call4555)) {
  lineNumber = 1372
  lineNumber = 1371
  var string4556 = new GraceString(".gc");
  var_ext = string4556;
  var if4551 = string4556;
}
  lineNumber = 1375
  lineNumber = 1373
  var string4558 = new GraceString(".grace");
  var opresult4560 = callmethod(var_nm, "++", [1], string4558);
  var call4561 = callmethod(var_io,"exists", [1], opresult4560);
  if (Grace_isTrue(call4561)) {
  lineNumber = 1375
  lineNumber = 1374
  var string4562 = new GraceString(".grace");
  var_ext = string4562;
  var if4557 = string4562;
}
  lineNumber = 1393
  lineNumber = 1394
  lineNumber = 1376
  var bool4564 = new GraceBoolean(false)
  var opresult4566 = callmethod(var_ext, "/=", [1], bool4564);
  if (Grace_isTrue(opresult4566)) {
  lineNumber = 1378
  lineNumber = 1
  lineNumber = 1377
  var call4567 = callmethod(var_argv,"first", [0]);
  var string4568 = new GraceString(" --target c --make ");
  var opresult4570 = callmethod(call4567, "++", [1], string4568);
  var opresult4572 = callmethod(opresult4570, "++", [1], var_nm);
  var opresult4574 = callmethod(opresult4572, "++", [1], var_ext);
  var_cmd = opresult4574;
  lineNumber = 1379
  lineNumber = 1378
  lineNumber = 1379
  lineNumber = 1378
  var string4575 = new GraceString(" --gracelib \"");
  lineNumber = 1379
  lineNumber = 1
  lineNumber = 1378
  var call4576 = callmethod(var_util,"gracelibPath", [0]);
  var opresult4578 = callmethod(string4575, "++", [1], call4576);
  var string4579 = new GraceString("\"");
  var opresult4581 = callmethod(opresult4578, "++", [1], string4579);
  var opresult4583 = callmethod(var_cmd, "++", [1], opresult4581);
  var_cmd = opresult4583;
  lineNumber = 1381
  lineNumber = 1382
  lineNumber = 1
  lineNumber = 1379
  var call4585 = callmethod(var_util,"verbosity", [0]);
  var opresult4587 = callmethod(call4585, ">", [1], new GraceNum(30));
  if (Grace_isTrue(opresult4587)) {
  lineNumber = 1381
  lineNumber = 1380
  var string4588 = new GraceString(" --verbose");
  var opresult4590 = callmethod(var_cmd, "++", [1], string4588);
  var_cmd = opresult4590;
  var if4584 = opresult4590;
}
  lineNumber = 1384
  lineNumber = 1385
  lineNumber = 1382
  var bool4592 = new GraceBoolean(false)
  lineNumber = 1385
  lineNumber = 1
  lineNumber = 1382
  var call4593 = callmethod(var_util,"vtag", [0]);
  var opresult4595 = callmethod(bool4592, "!=", [1], call4593);
  if (Grace_isTrue(opresult4595)) {
  lineNumber = 1384
  lineNumber = 1383
  var string4596 = new GraceString(" --vtag ");
  var opresult4598 = callmethod(var_cmd, "++", [1], string4596);
  lineNumber = 1384
  lineNumber = 1
  lineNumber = 1383
  var call4599 = callmethod(var_util,"vtag", [0]);
  var opresult4601 = callmethod(opresult4598, "++", [1], call4599);
  var_cmd = opresult4601;
  var if4591 = opresult4601;
}
  lineNumber = 1386
  lineNumber = 1385
  var string4602 = new GraceString(" --noexec --no-recurse -XNoMain");
  var opresult4604 = callmethod(var_cmd, "++", [1], string4602);
  var_cmd = opresult4604;
  lineNumber = 1387
  lineNumber = 1389
  lineNumber = 1
  lineNumber = 1386
  var call4606 = callmethod(var_util,"recurse", [0]);
  if (Grace_isTrue(call4606)) {
  lineNumber = 1387
  lineNumber = 1388
  var call4607 = callmethod(this,"spawnSubprocess", [3], var_subprocesses, var_nm, var_cmd);
  var if4605 = call4607;
}
  lineNumber = 1390
  lineNumber = 1389
  var bool4608 = new GraceBoolean(true)
  var_exists = bool4608;
  lineNumber = 1390
  var string4609 = new GraceString(".gcn");
  var opresult4611 = callmethod(var_nm, "++", [1], string4609);
  var call4612 = callmethod(var_linkfiles,"push", [1], opresult4611);
  lineNumber = 1391
  var call4613 = callmethod(var_staticmodules,"push", [1], var_nm);
  lineNumber = 1393
  lineNumber = 1392
  var bool4614 = new GraceBoolean(false)
  var_ext = bool4614;
  var if4563 = bool4614;
}
  var if4549 = if4563;
}
  lineNumber = 1397
  lineNumber = 1399
  lineNumber = 1395
  var string4616 = new GraceString("sys");
  var opresult4618 = callmethod(var_nm, "==", [1], string4616);
  lineNumber = 1399
  lineNumber = 1395
  var string4619 = new GraceString("io");
  var opresult4621 = callmethod(var_nm, "==", [1], string4619);
  var opresult4623 = callmethod(opresult4618, "|", [1], opresult4621);
  if (Grace_isTrue(opresult4623)) {
  lineNumber = 1397
  lineNumber = 1396
  var bool4624 = new GraceBoolean(true)
  var_exists = bool4624;
  lineNumber = 1397
  var call4625 = callmethod(var_staticmodules,"push", [1], var_nm);
  var if4615 = call4625;
}
  lineNumber = 1400
  lineNumber = 1402
  lineNumber = 1
  lineNumber = 1399
  var call4627 = callmethod(var_exists,"not", [0]);
  if (Grace_isTrue(call4627)) {
  lineNumber = 1400
  var string4628 = new GraceString("failed finding import of ");
  var opresult4630 = callmethod(string4628, "++", [1], var_nm);
  var string4631 = new GraceString(".");
  var opresult4633 = callmethod(opresult4630, "++", [1], string4631);
  var call4634 = callmethod(var_util,"syntax_error", [1], opresult4633);
  var if4626 = call4634;
}
  var if4441 = if4626;
}
  return if4441;
};
  var call4635 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block4440);
  lineNumber = 1405
  var array4636 = new GraceList([
]);

  var var_imperrors = array4636;
  lineNumber = 1409
  lineNumber = 1405
  lineNumber = 1409
  var block4637 = Grace_allocObject();
  block4637.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4637.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4637.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4637.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4637.receiver = this;
  block4637.className = 'block<genc:1409>';
  block4637.real = function(
var_tt
) {
  lineNumber = 1407
  lineNumber = 1406
  var idxres4638 = var_tt.methods["[]"].call(var_tt, [1], new GraceNum(1));
  var var_nm = idxres4638;
  lineNumber = 1408
  lineNumber = 1407
  var idxres4639 = var_tt.methods["[]"].call(var_tt, [1], new GraceNum(2));
  var var_p = idxres4639;
  lineNumber = 1409
  lineNumber = 1411
  lineNumber = 1
  lineNumber = 1408
  var call4641 = callmethod(var_p,"success", [0]);
  var call4642 = callmethod(call4641,"prefix!", [0]);
  if (Grace_isTrue(call4642)) {
  lineNumber = 1409
  var call4643 = callmethod(var_imperrors,"push", [1], var_nm);
  var if4640 = call4643;
}
  return if4640;
};
  var call4644 = callmethod(Grace_prelude,"for()do", [1, 1], var_subprocesses, block4637);
  lineNumber = 1413
  lineNumber = 1415
  lineNumber = 1
  lineNumber = 1412
  var call4646 = callmethod(var_imperrors,"size", [0]);
  var opresult4648 = callmethod(call4646, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult4648)) {
  lineNumber = 1413
  var string4649 = new GraceString("failed processing import of ");
  var opresult4651 = callmethod(string4649, "++", [1], var_imperrors);
  var string4652 = new GraceString(".");
  var opresult4654 = callmethod(opresult4651, "++", [1], string4652);
  var call4655 = callmethod(var_util,"syntax_error", [1], opresult4654);
  var if4645 = call4655;
}
  var if4433 = if4645;
}
  lineNumber = 1416
  var string4656 = new GraceString("#include \"");
  lineNumber = 1
  lineNumber = 1416
  var call4657 = callmethod(var_util,"gracelibPath", [0]);
  var opresult4659 = callmethod(string4656, "++", [1], call4657);
  var string4660 = new GraceString("/gracelib.h\"");
  var opresult4662 = callmethod(opresult4659, "++", [1], string4660);
  lineNumber = 1417
  var call4663 = callmethod(this,"outprint", [1], opresult4662);
  var string4664 = new GraceString("#include <stdlib.h>");
  lineNumber = 1418
  var call4665 = callmethod(this,"outprint", [1], string4664);
  var string4666 = new GraceString("#ifndef __CYGWIN__");
  lineNumber = 1419
  var call4667 = callmethod(this,"outprint", [1], string4666);
  var string4668 = new GraceString("#pragma weak main");
  lineNumber = 1420
  var call4669 = callmethod(this,"outprint", [1], string4668);
  var string4670 = new GraceString("#endif");
  lineNumber = 1421
  var call4671 = callmethod(this,"outprint", [1], string4670);
  var string4672 = new GraceString("static char compilerRevision[] = \"");
  lineNumber = 1
  lineNumber = 1421
  var call4673 = callmethod(var_buildinfo,"gitrevision", [0]);
  var opresult4675 = callmethod(string4672, "++", [1], call4673);
  var string4676 = new GraceString("\";");
  var opresult4678 = callmethod(opresult4675, "++", [1], string4676);
  lineNumber = 1422
  var call4679 = callmethod(this,"outprint", [1], opresult4678);
  var string4680 = new GraceString("static Object undefined;");
  lineNumber = 1423
  var call4681 = callmethod(this,"outprint", [1], string4680);
  var string4682 = new GraceString("extern Object none;");
  lineNumber = 1424
  var call4683 = callmethod(this,"outprint", [1], string4682);
  var string4684 = new GraceString("extern Object _prelude;");
  lineNumber = 1425
  var call4685 = callmethod(this,"outprint", [1], string4684);
  var string4686 = new GraceString("extern Object String;");
  lineNumber = 1426
  var call4687 = callmethod(this,"outprint", [1], string4686);
  var string4688 = new GraceString("extern Object Number;");
  lineNumber = 1427
  var call4689 = callmethod(this,"outprint", [1], string4688);
  var string4690 = new GraceString("extern Object Boolean;");
  lineNumber = 1428
  var call4691 = callmethod(this,"outprint", [1], string4690);
  var string4692 = new GraceString("extern Object Dynamic;");
  lineNumber = 1429
  var call4693 = callmethod(this,"outprint", [1], string4692);
  var string4694 = new GraceString("extern Object Block;");
  lineNumber = 1430
  var call4695 = callmethod(this,"outprint", [1], string4694);
  var string4696 = new GraceString("extern Object None;");
  lineNumber = 1431
  var call4697 = callmethod(this,"outprint", [1], string4696);
  var string4698 = new GraceString("extern Object Type;");
  lineNumber = 1432
  var call4699 = callmethod(this,"outprint", [1], string4698);
  var string4700 = new GraceString("static Object type_String;");
  lineNumber = 1433
  var call4701 = callmethod(this,"outprint", [1], string4700);
  var string4702 = new GraceString("static Object type_Number;");
  lineNumber = 1434
  var call4703 = callmethod(this,"outprint", [1], string4702);
  var string4704 = new GraceString("static Object type_Boolean;");
  lineNumber = 1435
  var call4705 = callmethod(this,"outprint", [1], string4704);
  var string4706 = new GraceString("static Object type_Block;");
  lineNumber = 1436
  var call4707 = callmethod(this,"outprint", [1], string4706);
  var string4708 = new GraceString("static Object type_None;");
  lineNumber = 1437
  var call4709 = callmethod(this,"outprint", [1], string4708);
  var string4710 = new GraceString("static Object type_Void;");
  lineNumber = 1438
  var call4711 = callmethod(this,"outprint", [1], string4710);
  var string4712 = new GraceString("static Object argv;");
  lineNumber = 1439
  var call4713 = callmethod(this,"outprint", [1], string4712);
  var string4714 = new GraceString("static Object emptyclosure;");
  lineNumber = 1440
  var call4715 = callmethod(this,"outprint", [1], string4714);
  var string4716 = new GraceString("static Object prelude;");
  lineNumber = 1441
  var call4717 = callmethod(this,"outprint", [1], string4716);
  var string4718 = new GraceString("static const char modulename[] = \"");
  var opresult4720 = callmethod(string4718, "++", [1], var_modname);
  var string4721 = new GraceString("\";");
  var opresult4723 = callmethod(opresult4720, "++", [1], string4721);
  var call4724 = callmethod(this,"outprint", [1], opresult4723);
  lineNumber = 1442
  var string4725 = new GraceString("Object module_StandardPrelude_init();");
  var call4726 = callmethod(this,"outprint", [1], string4725);
  lineNumber = 1443
  var string4727 = new GraceString("String");
  var bool4728 = new GraceBoolean(true)
  var call4729 = callmethod(var_topLevelTypes,"put", [2], string4727, bool4728);
  lineNumber = 1444
  var string4730 = new GraceString("Number");
  var bool4731 = new GraceBoolean(true)
  var call4732 = callmethod(var_topLevelTypes,"put", [2], string4730, bool4731);
  lineNumber = 1445
  var string4733 = new GraceString("Boolean");
  var bool4734 = new GraceBoolean(true)
  var call4735 = callmethod(var_topLevelTypes,"put", [2], string4733, bool4734);
  lineNumber = 1446
  var string4736 = new GraceString("Void");
  var bool4737 = new GraceBoolean(true)
  var call4738 = callmethod(var_topLevelTypes,"put", [2], string4736, bool4737);
  lineNumber = 1447
  var string4739 = new GraceString("None");
  var bool4740 = new GraceBoolean(true)
  var call4741 = callmethod(var_topLevelTypes,"put", [2], string4739, bool4740);
  lineNumber = 1448
  var string4742 = new GraceString("Block");
  var bool4743 = new GraceBoolean(true)
  var call4744 = callmethod(var_topLevelTypes,"put", [2], string4742, bool4743);
  lineNumber = 1453
  lineNumber = 1449
  lineNumber = 1453
  var block4745 = Grace_allocObject();
  block4745.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4745.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4745.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4745.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4745.receiver = this;
  block4745.className = 'block<genc:1453>';
  block4745.real = function(
var_v
) {
  lineNumber = 1455
  lineNumber = 1
  lineNumber = 1450
  var call4747 = callmethod(var_v,"kind", [0]);
  var string4748 = new GraceString("type");
  var opresult4750 = callmethod(call4747, "==", [1], string4748);
  if (Grace_isTrue(opresult4750)) {
  lineNumber = 1451
  lineNumber = 1
  lineNumber = 1451
  var call4751 = callmethod(var_v,"value", [0]);
  lineNumber = 1452
  var call4752 = callmethod(this,"escapeident", [1], call4751);
  var var_typeid = call4752;
  var string4753 = new GraceString("static Object type_");
  var opresult4755 = callmethod(string4753, "++", [1], var_typeid);
  var string4756 = new GraceString(";");
  var opresult4758 = callmethod(opresult4755, "++", [1], string4756);
  lineNumber = 1453
  var call4759 = callmethod(this,"outprint", [1], opresult4758);
  var bool4760 = new GraceBoolean(true)
  var call4761 = callmethod(var_topLevelTypes,"put", [2], var_typeid, bool4760);
  var if4746 = call4761;
}
  return if4746;
};
  var call4762 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block4745);
  lineNumber = 1456
  var string4763 = new GraceString("Object module_");
  var opresult4765 = callmethod(string4763, "++", [1], var_escmodname);
  var string4766 = new GraceString("_init() {");
  var opresult4768 = callmethod(opresult4765, "++", [1], string4766);
  lineNumber = 1457
  var call4769 = callmethod(this,"out", [1], opresult4768);
  var string4770 = new GraceString("  int flags = 0;");
  lineNumber = 1458
  var call4771 = callmethod(this,"out", [1], string4770);
  var string4772 = new GraceString("  int frame = gc_frame_new();");
  lineNumber = 1459
  var call4773 = callmethod(this,"out", [1], string4772);
  var string4774 = new GraceString("  Object self = alloc_obj2(");
  var opresult4776 = callmethod(string4774, "++", [1], var_nummethods);
  var string4777 = new GraceString(", ");
  var opresult4779 = callmethod(opresult4776, "++", [1], string4777);
  var opresult4781 = callmethod(opresult4779, "++", [1], var_nummethods);
  var string4782 = new GraceString(");");
  var opresult4784 = callmethod(opresult4781, "++", [1], string4782);
  lineNumber = 1460
  var call4785 = callmethod(this,"out", [1], opresult4784);
  var string4786 = new GraceString("  gc_root(self);");
  lineNumber = 1461
  var call4787 = callmethod(this,"out", [1], string4786);
  lineNumber = 1466
  lineNumber = 1461
  var string4789 = new GraceString("NativePrelude");
  lineNumber = 1468
  lineNumber = 1
  lineNumber = 1461
  var call4790 = callmethod(var_util,"extensions", [0]);
  var call4791 = callmethod(call4790,"contains", [1], string4789);
  if (Grace_isTrue(call4791)) {
  lineNumber = 1462
  var string4792 = new GraceString("  prelude = grace_prelude();");
  lineNumber = 1463
  var call4793 = callmethod(this,"out", [1], string4792);
  var string4794 = new GraceString("  adddatum2(self, grace_prelude(), 0);");
  lineNumber = 1464
  var call4795 = callmethod(this,"out", [1], string4794);
  var if4788 = call4795;
  } else {
  lineNumber = 1465
  var string4796 = new GraceString("  prelude = module_StandardPrelude_init();");
  lineNumber = 1466
  var call4797 = callmethod(this,"out", [1], string4796);
  var string4798 = new GraceString("  adddatum2(self, prelude, 0);");
  lineNumber = 1467
  var call4799 = callmethod(this,"out", [1], string4798);
  var if4788 = call4799;
}
  lineNumber = 1468
  var string4800 = new GraceString("  addmethod2(self, \"outer\", &grace_userobj_outer);");
  lineNumber = 1469
  var call4801 = callmethod(this,"out", [1], string4800);
  lineNumber = 1470
  lineNumber = 1469
  var string4802 = new GraceString("Module<");
  var opresult4804 = callmethod(string4802, "++", [1], var_modname);
  var string4805 = new GraceString(">");
  var opresult4807 = callmethod(opresult4804, "++", [1], string4805);
  var var_modn = opresult4807;
  lineNumber = 1470
  var string4808 = new GraceString("  setclassname(self, \"");
  var opresult4810 = callmethod(string4808, "++", [1], var_modn);
  var string4811 = new GraceString("\");");
  var opresult4813 = callmethod(opresult4810, "++", [1], string4811);
  lineNumber = 1471
  var call4814 = callmethod(this,"out", [1], opresult4813);
  var string4815 = new GraceString("  Object *var_HashMap = alloc_var();");
  lineNumber = 1472
  var call4816 = callmethod(this,"out", [1], string4815);
  var string4817 = new GraceString("  *var_HashMap = alloc_HashMapClassObject();");
  lineNumber = 1473
  var call4818 = callmethod(this,"out", [1], string4817);
  var string4819 = new GraceString("  Object *var_MatchFailed = alloc_var();");
  lineNumber = 1474
  var call4820 = callmethod(this,"out", [1], string4819);
  var string4821 = new GraceString("  *var_MatchFailed = alloc_MatchFailed();");
  lineNumber = 1475
  var call4822 = callmethod(this,"out", [1], string4821);
  var string4823 = new GraceString("  Object *var_noSuchValue = alloc_var();");
  lineNumber = 1476
  var call4824 = callmethod(this,"out", [1], string4823);
  var string4825 = new GraceString("  *var_noSuchValue = none;");
  lineNumber = 1477
  var call4826 = callmethod(this,"out", [1], string4825);
  var string4827 = new GraceString("  Object *var_void = alloc_var();");
  lineNumber = 1478
  var call4828 = callmethod(this,"out", [1], string4827);
  var string4829 = new GraceString("  *var_void = none;");
  lineNumber = 1479
  var call4830 = callmethod(this,"out", [1], string4829);
  var string4831 = new GraceString("  Object *var_nothing = alloc_var();");
  lineNumber = 1480
  var call4832 = callmethod(this,"out", [1], string4831);
  var string4833 = new GraceString("  *var_nothing = none;");
  lineNumber = 1481
  var call4834 = callmethod(this,"out", [1], string4833);
  var string4835 = new GraceString("  Object *var_String = alloc_var();");
  lineNumber = 1482
  var call4836 = callmethod(this,"out", [1], string4835);
  var string4837 = new GraceString("  *var_String = String;");
  lineNumber = 1483
  var call4838 = callmethod(this,"out", [1], string4837);
  var string4839 = new GraceString("  type_String = String;");
  lineNumber = 1484
  var call4840 = callmethod(this,"out", [1], string4839);
  var string4841 = new GraceString("  Object *var_Block = alloc_var();");
  lineNumber = 1485
  var call4842 = callmethod(this,"out", [1], string4841);
  var string4843 = new GraceString("  *var_Block = Block;");
  lineNumber = 1486
  var call4844 = callmethod(this,"out", [1], string4843);
  var string4845 = new GraceString("  type_Block = Block;");
  lineNumber = 1487
  var call4846 = callmethod(this,"out", [1], string4845);
  var string4847 = new GraceString("  Object *var_Void = alloc_var();");
  lineNumber = 1488
  var call4848 = callmethod(this,"out", [1], string4847);
  var string4849 = new GraceString("  *var_Void = None;");
  lineNumber = 1489
  var call4850 = callmethod(this,"out", [1], string4849);
  var string4851 = new GraceString("  type_Void = None;");
  lineNumber = 1490
  var call4852 = callmethod(this,"out", [1], string4851);
  var string4853 = new GraceString("  Object *var_None = alloc_var();");
  lineNumber = 1491
  var call4854 = callmethod(this,"out", [1], string4853);
  var string4855 = new GraceString("  *var_None = None;");
  lineNumber = 1492
  var call4856 = callmethod(this,"out", [1], string4855);
  var string4857 = new GraceString("  type_None = None;");
  lineNumber = 1493
  var call4858 = callmethod(this,"out", [1], string4857);
  var string4859 = new GraceString("  Object *var_Number = alloc_var();");
  lineNumber = 1494
  var call4860 = callmethod(this,"out", [1], string4859);
  var string4861 = new GraceString("  *var_Number = Number;");
  lineNumber = 1495
  var call4862 = callmethod(this,"out", [1], string4861);
  var string4863 = new GraceString("  type_Number = Number;");
  lineNumber = 1496
  var call4864 = callmethod(this,"out", [1], string4863);
  var string4865 = new GraceString("  Object *var_Boolean = alloc_var();");
  lineNumber = 1497
  var call4866 = callmethod(this,"out", [1], string4865);
  var string4867 = new GraceString("  *var_Boolean = Boolean;");
  lineNumber = 1498
  var call4868 = callmethod(this,"out", [1], string4867);
  var string4869 = new GraceString("  type_Boolean = Boolean;");
  lineNumber = 1499
  var call4870 = callmethod(this,"out", [1], string4869);
  var string4871 = new GraceString("  Object *var_Dynamic = alloc_var();");
  lineNumber = 1500
  var call4872 = callmethod(this,"out", [1], string4871);
  var string4873 = new GraceString("  *var_Dynamic = Dynamic;");
  lineNumber = 1501
  var call4874 = callmethod(this,"out", [1], string4873);
  var string4875 = new GraceString("  Object *var_Type = alloc_var();");
  lineNumber = 1502
  var call4876 = callmethod(this,"out", [1], string4875);
  var string4877 = new GraceString("  *var_Type = Type;");
  lineNumber = 1503
  var call4878 = callmethod(this,"out", [1], string4877);
  var string4879 = new GraceString("  Object *var__prelude = alloc_var();");
  lineNumber = 1504
  var call4880 = callmethod(this,"out", [1], string4879);
  var string4881 = new GraceString("  *var__prelude = grace_prelude();");
  lineNumber = 1505
  var call4882 = callmethod(this,"out", [1], string4881);
  var string4883 = new GraceString("  gc_root(*var_MatchFailed);");
  lineNumber = 1506
  var call4884 = callmethod(this,"out", [1], string4883);
  var string4885 = new GraceString("  emptyclosure = createclosure(0, \"empty\");");
  lineNumber = 1507
  var call4886 = callmethod(this,"out", [1], string4885);
  var string4887 = new GraceString("  gc_root(emptyclosure);");
  lineNumber = 1508
  var call4888 = callmethod(this,"out", [1], string4887);
  var string4889 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
  var opresult4891 = callmethod(string4889, "++", [1], var_nummethods);
  var string4892 = new GraceString(", NULL);");
  var opresult4894 = callmethod(opresult4891, "++", [1], string4892);
  lineNumber = 1509
  var call4895 = callmethod(this,"out", [1], opresult4894);
  var string4896 = new GraceString("  gc_root((Object)stackframe);");
  lineNumber = 1510
  var call4897 = callmethod(this,"out", [1], string4896);
  var string4898 = new GraceString("  Object *selfslot = &(stackframe->slots[0]);");
  lineNumber = 1511
  var call4899 = callmethod(this,"out", [1], string4898);
  var string4900 = new GraceString("  *selfslot = self;");
  lineNumber = 1512
  var call4901 = callmethod(this,"out", [1], string4900);
  lineNumber = 1513
  lineNumber = 1512
  var var_tmpo = var_output;
  lineNumber = 1514
  var array4902 = new GraceList([
]);

  var_output = array4902;
  lineNumber = 1515
  var call4903 = callmethod(this,"definebindings", [2], var_values, new GraceNum(1));
  lineNumber = 1523
  lineNumber = 1515
  lineNumber = 1523
  var block4904 = Grace_allocObject();
  block4904.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4904.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4904.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4904.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4904.receiver = this;
  block4904.className = 'block<genc:1523>';
  block4904.real = function(
var_o
) {
  lineNumber = 1518
  lineNumber = 1520
  lineNumber = 1
  lineNumber = 1516
  var call4906 = callmethod(var_o,"kind", [0]);
  var string4907 = new GraceString("inherits");
  var opresult4909 = callmethod(call4906, "==", [1], string4907);
  if (Grace_isTrue(opresult4909)) {
  lineNumber = 1517
  lineNumber = 1
  lineNumber = 1517
  var call4910 = callmethod(var_o,"value", [0]);
  lineNumber = 1518
  var call4911 = callmethod(this,"compilenode", [1], call4910);
  var var_superobj = call4911;
  var string4912 = new GraceString("  setsuperobj(self, ");
  var opresult4914 = callmethod(string4912, "++", [1], var_superobj);
  var string4915 = new GraceString(");");
  var opresult4917 = callmethod(opresult4914, "++", [1], string4915);
  lineNumber = 1519
  var call4918 = callmethod(this,"out", [1], opresult4917);
  var if4905 = call4918;
}
  lineNumber = 1520
  lineNumber = 1521
  var call4919 = callmethod(this,"compilenode", [1], var_o);
  lineNumber = 1523
  lineNumber = 1525
  lineNumber = 1
  lineNumber = 1521
  var call4921 = callmethod(var_o,"kind", [0]);
  var string4922 = new GraceString("type");
  var opresult4924 = callmethod(call4921, "==", [1], string4922);
  if (Grace_isTrue(opresult4924)) {
  lineNumber = 1522
  lineNumber = 1
  lineNumber = 1522
  var call4925 = callmethod(var_o,"value", [0]);
  lineNumber = 1523
  var call4926 = callmethod(this,"escapeident", [1], call4925);
  var var_typeid = call4926;
  var string4927 = new GraceString("type_");
  var opresult4929 = callmethod(string4927, "++", [1], var_typeid);
  var string4930 = new GraceString(" = *var_");
  var opresult4932 = callmethod(opresult4929, "++", [1], string4930);
  var opresult4934 = callmethod(opresult4932, "++", [1], var_typeid);
  var string4935 = new GraceString(";");
  var opresult4937 = callmethod(opresult4934, "++", [1], string4935);
  lineNumber = 1524
  var call4938 = callmethod(this,"out", [1], opresult4937);
  var if4920 = call4938;
}
  return if4920;
};
  var call4939 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block4904);
  lineNumber = 1527
  lineNumber = 1526
  lineNumber = 1527
  var block4940 = Grace_allocObject();
  block4940.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4940.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4940.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4940.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4940.receiver = this;
  block4940.className = 'block<genc:1527>';
  block4940.real = function(
var_e
) {
  lineNumber = 1528
  var call4941 = callmethod(this,"outprint", [1], var_e);
  return call4941;
};
  var call4942 = callmethod(Grace_prelude,"for()do", [1, 1], var_globals, block4940);
  lineNumber = 1530
  lineNumber = 1529
  var var_tmpo2 = var_output;
  lineNumber = 1531
  lineNumber = 1530
  var_output = var_tmpo;
  lineNumber = 1531
  var string4943 = new GraceString("  Object params[");
  var opresult4945 = callmethod(string4943, "++", [1], var_paramsUsed);
  var string4946 = new GraceString("];");
  var opresult4948 = callmethod(opresult4945, "++", [1], string4946);
  lineNumber = 1532
  var call4949 = callmethod(this,"out", [1], opresult4948);
  var string4950 = new GraceString("  int partcv[");
  var opresult4952 = callmethod(string4950, "++", [1], var_partsUsed);
  var string4953 = new GraceString("];");
  var opresult4955 = callmethod(opresult4952, "++", [1], string4953);
  lineNumber = 1533
  var call4956 = callmethod(this,"out", [1], opresult4955);
  lineNumber = 1534
  lineNumber = 1533
  lineNumber = 1534
  var block4957 = Grace_allocObject();
  block4957.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4957.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4957.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4957.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block4957.receiver = this;
  block4957.className = 'block<genc:1534>';
  block4957.real = function(
var_l
) {
  lineNumber = 1535
  var call4958 = callmethod(this,"out", [1], var_l);
  return call4958;
};
  var call4959 = callmethod(Grace_prelude,"for()do", [1, 1], var_tmpo2, block4957);
  lineNumber = 1537
  lineNumber = 1536
  var_paramsUsed = new GraceNum(1);
  lineNumber = 1538
  lineNumber = 1537
  var_partsUsed = new GraceNum(1);
  lineNumber = 1538
  var string4960 = new GraceString("  gc_frame_end(frame);");
  lineNumber = 1539
  var call4961 = callmethod(this,"out", [1], string4960);
  var string4962 = new GraceString("  return self;");
  lineNumber = 1540
  var call4963 = callmethod(this,"out", [1], string4962);
  var string4964 = new GraceString("}");
  lineNumber = 1541
  var call4965 = callmethod(this,"out", [1], string4964);
  lineNumber = 1566
  lineNumber = 1541
  var string4967 = new GraceString("NoMain");
  lineNumber = 1568
  lineNumber = 1
  lineNumber = 1541
  var call4968 = callmethod(var_util,"extensions", [0]);
  var call4969 = callmethod(call4968,"contains", [1], string4967);
  var call4970 = callmethod(call4969,"prefix!", [0]);
  if (Grace_isTrue(call4970)) {
  lineNumber = 1542
  var string4971 = new GraceString("int main(int argc, char **argv) {");
  lineNumber = 1543
  var call4972 = callmethod(this,"out", [1], string4971);
  var string4973 = new GraceString("  initprofiling();");
  lineNumber = 1544
  var call4974 = callmethod(this,"out", [1], string4973);
  lineNumber = 1546
  lineNumber = 1544
  var string4976 = new GraceString("LogCallGraph");
  lineNumber = 1548
  lineNumber = 1
  lineNumber = 1544
  var call4977 = callmethod(var_util,"extensions", [0]);
  var call4978 = callmethod(call4977,"contains", [1], string4976);
  if (Grace_isTrue(call4978)) {
  lineNumber = 1545
  var string4979 = new GraceString("LogCallGraph");
  lineNumber = 1546
  lineNumber = 1
  lineNumber = 1545
  var call4980 = callmethod(var_util,"extensions", [0]);
  var call4981 = callmethod(call4980,"get", [1], string4979);
  var var_lcgfile = call4981;
  lineNumber = 1546
  var string4982 = new GraceString("  enable_callgraph(\"");
  var opresult4984 = callmethod(string4982, "++", [1], var_lcgfile);
  var string4985 = new GraceString("\");");
  var opresult4987 = callmethod(opresult4984, "++", [1], string4985);
  lineNumber = 1547
  var call4988 = callmethod(this,"out", [1], opresult4987);
  var if4975 = call4988;
}
  lineNumber = 1548
  var string4990 = new GraceString("NativePrelude");
  lineNumber = 1551
  lineNumber = 1
  lineNumber = 1548
  var call4991 = callmethod(var_util,"extensions", [0]);
  var call4992 = callmethod(call4991,"contains", [1], string4990);
  var call4993 = callmethod(call4992,"prefix!", [0]);
  if (Grace_isTrue(call4993)) {
  var if4989 = undefined;
}
  lineNumber = 1551
  var string4994 = new GraceString("  gracelib_argv(argv);");
  lineNumber = 1552
  var call4995 = callmethod(this,"out", [1], string4994);
  var string4996 = new GraceString("  Object params[1];");
  lineNumber = 1553
  var call4997 = callmethod(this,"out", [1], string4996);
  var string4998 = new GraceString("  undefined = alloc_Undefined();");
  lineNumber = 1554
  var call4999 = callmethod(this,"out", [1], string4998);
  var string5000 = new GraceString("  none = alloc_none();");
  lineNumber = 1555
  var call5001 = callmethod(this,"out", [1], string5000);
  var string5002 = new GraceString("  Object tmp_argv = alloc_List();");
  lineNumber = 1556
  var call5003 = callmethod(this,"out", [1], string5002);
  var string5004 = new GraceString("  gc_root(tmp_argv);");
  lineNumber = 1557
  var call5005 = callmethod(this,"out", [1], string5004);
  var string5006 = new GraceString("  int partcv_push[] = {1};");
  lineNumber = 1558
  var call5007 = callmethod(this,"out", [1], string5006);
  var string5008 = new GraceString("  int i; for (i=0; i<argc; i++) {");
  lineNumber = 1559
  var call5009 = callmethod(this,"out", [1], string5008);
  var string5010 = new GraceString("    params[0] = alloc_String(argv[i]);");
  lineNumber = 1560
  var call5011 = callmethod(this,"out", [1], string5010);
  var string5012 = new GraceString("    callmethod(tmp_argv, \"push\", 1, partcv_push, params);");
  lineNumber = 1561
  var call5013 = callmethod(this,"out", [1], string5012);
  var string5014 = new GraceString("  }");
  lineNumber = 1562
  var call5015 = callmethod(this,"out", [1], string5014);
  var string5016 = new GraceString("  module_sys_init_argv(tmp_argv);");
  lineNumber = 1563
  var call5017 = callmethod(this,"out", [1], string5016);
  var string5018 = new GraceString("  module_");
  var opresult5020 = callmethod(string5018, "++", [1], var_escmodname);
  var string5021 = new GraceString("_init();");
  var opresult5023 = callmethod(opresult5020, "++", [1], string5021);
  lineNumber = 1564
  var call5024 = callmethod(this,"out", [1], opresult5023);
  var string5025 = new GraceString("  gracelib_stats();");
  lineNumber = 1565
  var call5026 = callmethod(this,"out", [1], string5025);
  var string5027 = new GraceString("  return 0;");
  lineNumber = 1566
  var call5028 = callmethod(this,"out", [1], string5027);
  var string5029 = new GraceString("}");
  lineNumber = 1567
  var call5030 = callmethod(this,"out", [1], string5029);
  var if4966 = call5030;
}
  lineNumber = 1568
  var string5031 = new GraceString("writing file.");
  lineNumber = 1569
  var call5032 = callmethod(this,"log_verbose", [1], string5031);
  lineNumber = 1570
  lineNumber = 1569
  lineNumber = 1570
  var block5033 = Grace_allocObject();
  block5033.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block5033.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block5033.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block5033.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block5033.receiver = this;
  block5033.className = 'block<genc:1570>';
  block5033.real = function(
var_x
) {
  lineNumber = 1571
  var call5034 = callmethod(this,"outprint", [1], var_x);
  return call5034;
};
  var call5035 = callmethod(Grace_prelude,"for()do", [1, 1], var_topOutput, block5033);
  lineNumber = 1573
  lineNumber = 1572
  lineNumber = 1573
  var block5036 = Grace_allocObject();
  block5036.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block5036.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block5036.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block5036.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block5036.receiver = this;
  block5036.className = 'block<genc:1573>';
  block5036.real = function(
var_x
) {
  lineNumber = 1574
  var call5037 = callmethod(this,"outprint", [1], var_x);
  return call5037;
};
  var call5038 = callmethod(Grace_prelude,"for()do", [1, 1], var_output, block5036);
  lineNumber = 1618
  lineNumber = 1622
  lineNumber = 1576
  var string5040 = new GraceString("make");
  var opresult5042 = callmethod(var_runmode, "==", [1], string5040);
  if (Grace_isTrue(opresult5042)) {
  lineNumber = 1577
  var string5043 = new GraceString("compiling C code.");
  lineNumber = 1578
  var call5044 = callmethod(this,"log_verbose", [1], string5043);
  lineNumber = 1
  lineNumber = 1578
  var call5045 = callmethod(var_outfile,"close", [0]);
  lineNumber = 1580
  lineNumber = 1579
  var string5046 = new GraceString("gcc -g -I\"");
  lineNumber = 1580
  lineNumber = 1
  lineNumber = 1579
  var call5047 = callmethod(var_sys,"execPath", [0]);
  var opresult5049 = callmethod(string5046, "++", [1], call5047);
  var string5050 = new GraceString("\" -o ");
  var opresult5052 = callmethod(opresult5049, "++", [1], string5050);
  var opresult5054 = callmethod(opresult5052, "++", [1], var_modname);
  var string5055 = new GraceString(".gcn -c ");
  var opresult5057 = callmethod(opresult5054, "++", [1], string5055);
  var opresult5059 = callmethod(opresult5057, "++", [1], var_modname);
  var string5060 = new GraceString(".c");
  var opresult5062 = callmethod(opresult5059, "++", [1], string5060);
  var_cmd = opresult5062;
  lineNumber = 1582
  lineNumber = 1580
  lineNumber = 1
  lineNumber = 1580
  var call5064 = callmethod(var_io,"system", [1], var_cmd);
  var call5065 = callmethod(call5064,"not", [0]);
  if (Grace_isTrue(call5065)) {
  lineNumber = 1581
  var string5066 = new GraceString("Fatal error: Failed C compilation of ");
  var opresult5068 = callmethod(string5066, "++", [1], var_modname);
  var string5069 = new GraceString(".\n");
  var opresult5071 = callmethod(opresult5068, "++", [1], string5069);
  lineNumber = 1582
  lineNumber = 1
  lineNumber = 1581
  var call5072 = callmethod(var_io,"error", [0]);
  var call5073 = callmethod(call5072,"write", [1], opresult5071);
  lineNumber = 1582
  var call5074 = callmethod(var_sys,"exit", [1], new GraceNum(1));
  var if5063 = call5074;
}
  lineNumber = 1605
  lineNumber = 1608
  lineNumber = 1
  lineNumber = 1608
  lineNumber = 1
  lineNumber = 1584
  var call5076 = callmethod(var_util,"noexec", [0]);
  var call5077 = callmethod(call5076,"not", [0]);
  if (Grace_isTrue(call5077)) {
  lineNumber = 1585
  var string5078 = new GraceString("linking.");
  lineNumber = 1586
  var call5079 = callmethod(this,"log_verbose", [1], string5078);
  lineNumber = 1587
  lineNumber = 1586
  var string5080 = new GraceString("");
  var var_dlbit = string5080;
  lineNumber = 1588
  lineNumber = 1587
  var string5081 = new GraceString("");
  var var_exportDynamicBit = string5081;
  lineNumber = 1589
  lineNumber = 1588
  var string5082 = new GraceString("ld -ldl -o /dev/null 2>/dev/null");
  var_cmd = string5082;
  lineNumber = 1591
  lineNumber = 1589
  var call5084 = callmethod(var_io,"system", [1], var_cmd);
  if (Grace_isTrue(call5084)) {
  lineNumber = 1591
  lineNumber = 1590
  var string5085 = new GraceString("-ldl");
  var_dlbit = string5085;
  var if5083 = string5085;
}
  lineNumber = 1593
  lineNumber = 1592
  var string5086 = new GraceString("ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1");
  var_cmd = string5086;
  lineNumber = 1595
  lineNumber = 1593
  var call5088 = callmethod(var_io,"system", [1], var_cmd);
  if (Grace_isTrue(call5088)) {
  lineNumber = 1595
  lineNumber = 1594
  var string5089 = new GraceString("-Wl,--export-dynamic");
  var_exportDynamicBit = string5089;
  var if5087 = string5089;
}
  lineNumber = 1600
  lineNumber = 1596
  var string5090 = new GraceString("gcc -g -o ");
  var opresult5092 = callmethod(string5090, "++", [1], var_modname);
  var string5093 = new GraceString(" -fPIC ");
  var opresult5095 = callmethod(opresult5092, "++", [1], string5093);
  var opresult5097 = callmethod(opresult5095, "++", [1], var_exportDynamicBit);
  var string5098 = new GraceString(" ");
  var opresult5100 = callmethod(opresult5097, "++", [1], string5098);
  lineNumber = 1600
  lineNumber = 1597
  var string5101 = new GraceString("");
  var opresult5103 = callmethod(string5101, "++", [1], var_modname);
  var string5104 = new GraceString(".gcn ");
  var opresult5106 = callmethod(opresult5103, "++", [1], string5104);
  var opresult5108 = callmethod(opresult5100, "++", [1], opresult5106);
  lineNumber = 1600
  lineNumber = 1
  lineNumber = 1598
  var call5109 = callmethod(var_util,"gracelibPath", [0]);
  var opresult5111 = callmethod(opresult5108, "++", [1], call5109);
  var string5112 = new GraceString("/gracelib.o ");
  var opresult5114 = callmethod(opresult5111, "++", [1], string5112);
  lineNumber = 1600
  lineNumber = 1599
  var string5115 = new GraceString("-lm ");
  var opresult5117 = callmethod(string5115, "++", [1], var_dlbit);
  var string5118 = new GraceString("");
  var opresult5120 = callmethod(opresult5117, "++", [1], string5118);
  var opresult5122 = callmethod(opresult5114, "++", [1], opresult5120);
  var_cmd = opresult5122;
  lineNumber = 1602
  lineNumber = 1600
  lineNumber = 1602
  var block5123 = Grace_allocObject();
  block5123.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block5123.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block5123.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block5123.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block5123.receiver = this;
  block5123.className = 'block<genc:1602>';
  block5123.real = function(
var_fn
) {
  lineNumber = 1601
  var string5124 = new GraceString(" ");
  var opresult5126 = callmethod(var_cmd, "++", [1], string5124);
  var opresult5128 = callmethod(opresult5126, "++", [1], var_fn);
  var_cmd = opresult5128;
  return opresult5128;
};
  var call5129 = callmethod(Grace_prelude,"for()do", [1, 1], var_linkfiles, block5123);
  lineNumber = 1605
  lineNumber = 1603
  lineNumber = 1
  lineNumber = 1603
  var call5131 = callmethod(var_io,"system", [1], var_cmd);
  var call5132 = callmethod(call5131,"not", [0]);
  if (Grace_isTrue(call5132)) {
  lineNumber = 1604
  var string5133 = new GraceString("Failed linking");
  lineNumber = 1605
  lineNumber = 1
  lineNumber = 1604
  var call5134 = callmethod(var_io,"error", [0]);
  var call5135 = callmethod(call5134,"write", [1], string5133);
  lineNumber = 1605
  var call5136 = callmethod(var_sys,"exit", [1], new GraceNum(1));
  var if5130 = call5136;
}
  var if5075 = if5130;
}
  lineNumber = 1608
  var string5137 = new GraceString("done.");
  lineNumber = 1609
  var call5138 = callmethod(this,"log_verbose", [1], string5137);
  lineNumber = 1618
  lineNumber = 1621
  lineNumber = 1609
  var string5140 = new GraceString("run");
  var opresult5142 = callmethod(var_buildtype, "==", [1], string5140);
  if (Grace_isTrue(opresult5142)) {
  lineNumber = 1614
  lineNumber = 1615
  lineNumber = 1610
  var idxres5144 = var_modname.methods["[]"].call(var_modname, [1], new GraceNum(1));
  var string5145 = new GraceString("/");
  var opresult5147 = callmethod(idxres5144, "!=", [1], string5145);
  if (Grace_isTrue(opresult5147)) {
  lineNumber = 1612
  lineNumber = 1611
  var string5148 = new GraceString("./");
  var opresult5150 = callmethod(string5148, "++", [1], var_modname);
  var_cmd = opresult5150;
  var if5143 = opresult5150;
  } else {
  lineNumber = 1614
  lineNumber = 1613
  var_cmd = var_modname;
  var if5143 = var_modname;
}
  lineNumber = 1618
  lineNumber = 1615
  var call5152 = callmethod(var_io,"system", [1], var_cmd);
  var call5153 = callmethod(call5152,"prefix!", [0]);
  if (Grace_isTrue(call5153)) {
  lineNumber = 1617
  lineNumber = 1616
  var string5154 = new GraceString("minigrace: Program exited with error: ");
  lineNumber = 1617
  var opresult5156 = callmethod(string5154, "++", [1], var_modname);
  var string5157 = new GraceString("\n");
  var opresult5159 = callmethod(opresult5156, "++", [1], string5157);
  lineNumber = 1618
  lineNumber = 1
  lineNumber = 1616
  var call5160 = callmethod(var_io,"error", [0]);
  var call5161 = callmethod(call5160,"write", [1], opresult5159);
  lineNumber = 1618
  var call5162 = callmethod(var_sys,"exit", [1], new GraceNum(1));
  var if5151 = call5162;
}
  var if5139 = if5151;
}
  var if5039 = if5139;
}
  return if5039
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["compile"] = func4398;
  return this;
}
