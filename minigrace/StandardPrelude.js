function gracecode_StandardPrelude() {
var Grace_prelude = window.Grace_native_prelude;
  lineNumber = 1
  this.superobj = var___95__prelude;
  this.data = var___95__prelude.data;
  this._value = var___95__prelude._value;
  lineNumber = 2
  lineNumber = 4
  lineNumber = 2
  var bool0 = new GraceBoolean(true)
  var var_isStandardPrelude = bool0;
  lineNumber = 1
var func1 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 2
  return var_isStandardPrelude
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["isStandardPrelude"] = func1;
  lineNumber = 4
  lineNumber = 1
var func2 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 4
  return var_SuccessfulMatch
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["SuccessfulMatch"] = func2;
  lineNumber = 1
  var obj3 = Grace_allocObject();
  obj3.outer = this;
    var reader_StandardPrelude_outer4 = function() {
    return this.outer;
  }
  obj3.methods["outer"] = reader_StandardPrelude_outer4;
function obj_init_3() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func5 = function(argcv) {
  var curarg = 1;
  var var_result__39__ = arguments[curarg];
  curarg++;
  var var_bindings__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 5
  var bool7 = new GraceBoolean(true)
  var obj6 = Grace_allocObject();
  obj6.superobj = bool7;
  if (bool7.data)
    obj6.data = bool7.data;
  obj6._value = bool7._value;
  obj6.outer = this;
    var reader_StandardPrelude_outer8 = function() {
    return this.outer;
  }
  obj6.methods["outer"] = reader_StandardPrelude_outer8;
function obj_init_6() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 6
  obj6.data["result"] = var_result__39__;
    var reader_StandardPrelude_result9 = function() {
    return this.data["result"];
  }
  reader_StandardPrelude_result9.def = true;
  obj6.methods["result"] = reader_StandardPrelude_result9;
  lineNumber = 7
  obj6.data["bindings"] = var_bindings__39__;
    var reader_StandardPrelude_bindings10 = function() {
    return this.data["bindings"];
  }
  reader_StandardPrelude_bindings10.def = true;
  obj6.methods["bindings"] = reader_StandardPrelude_bindings10;
var func11 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 9
  var string12 = new GraceString("SuccessfulMatch(result = ");
  var call13 = callmethod(this,"result", [0]);
  var opresult15 = callmethod(string12, "++", [1], call13);
  var string16 = new GraceString(", bindings = ");
  var opresult18 = callmethod(opresult15, "++", [1], string16);
  var call19 = callmethod(this,"bindings", [0]);
  var opresult21 = callmethod(opresult18, "++", [1], call19);
  var string22 = new GraceString(")");
  var opresult24 = callmethod(opresult21, "++", [1], string22);
  return opresult24
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj6.methods["asString"] = func11;
  superDepth = origSuperDepth;
}
obj_init_6.apply(obj6, []);
  return obj6
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj3.methods["new"] = func5;
  superDepth = origSuperDepth;
}
obj_init_3.apply(obj3, []);
  var var_SuccessfulMatch = obj3;
  lineNumber = 13
  lineNumber = 1
var func25 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 13
  return var_FailedMatch
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["FailedMatch"] = func25;
  lineNumber = 1
  var obj26 = Grace_allocObject();
  obj26.outer = this;
    var reader_StandardPrelude_outer27 = function() {
    return this.outer;
  }
  obj26.methods["outer"] = reader_StandardPrelude_outer27;
function obj_init_26() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func28 = function(argcv) {
  var curarg = 1;
  var var_result__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 14
  var bool30 = new GraceBoolean(false)
  var obj29 = Grace_allocObject();
  obj29.superobj = bool30;
  if (bool30.data)
    obj29.data = bool30.data;
  obj29._value = bool30._value;
  obj29.outer = this;
    var reader_StandardPrelude_outer31 = function() {
    return this.outer;
  }
  obj29.methods["outer"] = reader_StandardPrelude_outer31;
function obj_init_29() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 15
  obj29.data["result"] = var_result__39__;
    var reader_StandardPrelude_result32 = function() {
    return this.data["result"];
  }
  reader_StandardPrelude_result32.def = true;
  obj29.methods["result"] = reader_StandardPrelude_result32;
  lineNumber = 17
  var array33 = new GraceList([
]);

  obj29.data["bindings"] = array33;
    var reader_StandardPrelude_bindings34 = function() {
    return this.data["bindings"];
  }
  reader_StandardPrelude_bindings34.def = true;
  obj29.methods["bindings"] = reader_StandardPrelude_bindings34;
var func35 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 18
  var string36 = new GraceString("FailedMatch(result = ");
  var call37 = callmethod(this,"result", [0]);
  var opresult39 = callmethod(string36, "++", [1], call37);
  var string40 = new GraceString(")");
  var opresult42 = callmethod(opresult39, "++", [1], string40);
  return opresult42
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj29.methods["asString"] = func35;
  superDepth = origSuperDepth;
}
obj_init_29.apply(obj29, []);
  return obj29
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj26.methods["new"] = func28;
  superDepth = origSuperDepth;
}
obj_init_26.apply(obj26, []);
  var var_FailedMatch = obj26;
  lineNumber = 26
var var_Extractable = new GraceType("Extractable");
var_Extractable.typeMethods.push("extract");
var type_Extractable = var_Extractable;
  lineNumber = 1
var func44 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 26
  return var_MatchAndDestructuringPattern
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["MatchAndDestructuringPattern"] = func44;
  lineNumber = 1
  var obj45 = Grace_allocObject();
  obj45.outer = this;
    var reader_StandardPrelude_outer46 = function() {
    return this.outer;
  }
  obj45.methods["outer"] = reader_StandardPrelude_outer46;
function obj_init_45() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func47 = function(argcv) {
  var curarg = 1;
  var var_pat = arguments[curarg];
  curarg++;
  var var_items__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj48 = Grace_allocObject();
  obj48.outer = this;
    var reader_StandardPrelude_outer49 = function() {
    return this.outer;
  }
  obj48.methods["outer"] = reader_StandardPrelude_outer49;
function obj_init_48() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 27
  obj48.data["pattern"] = var_pat;
    var reader_StandardPrelude_pattern50 = function() {
    return this.data["pattern"];
  }
  reader_StandardPrelude_pattern50.def = true;
  obj48.methods["pattern"] = reader_StandardPrelude_pattern50;
  lineNumber = 28
  obj48.data["items"] = var_items__39__;
    var reader_StandardPrelude_items51 = function() {
    return this.data["items"];
  }
  reader_StandardPrelude_items51.def = true;
  obj48.methods["items"] = reader_StandardPrelude_items51;
var func52 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 30
  var call53 = callmethod(var_pat,"match", [1], var_o);
  var var_m = call53;
  lineNumber = 52
  lineNumber = 31
  if (Grace_isTrue(var_m)) {
  lineNumber = 33
  lineNumber = 1
  lineNumber = 32
  var call55 = callmethod(var_m,"bindings", [0]);
  var var_mbindings = call55;
  lineNumber = 34
  var array56 = new GraceList([
]);

  var var_bindings = array56;
  lineNumber = 38
  lineNumber = 41
  lineNumber = 1
  lineNumber = 34
  var call58 = callmethod(var_mbindings,"size", [0]);
  lineNumber = 41
  lineNumber = 1
  lineNumber = 41
  var call59 = callmethod(this,"items", [0]);
  var call60 = callmethod(call59,"size", [0]);
  var opresult62 = callmethod(call58, "<", [1], call60);
  if (Grace_isTrue(opresult62)) {
  lineNumber = 38
  lineNumber = 35
  var call64 = callmethod(var_Extractable,"match", [1], var_o);
  if (Grace_isTrue(call64)) {
  lineNumber = 37
  lineNumber = 1
  lineNumber = 36
  var call65 = callmethod(var_o,"extract", [0]);
  var_mbindings = call65;
  var if63 = call65;
  } else {
  lineNumber = 38
  var call66 = callmethod(var_FailedMatch,"new", [1], var_o);
  return call66
  var if63 = undefined;
}
  var if57 = if63;
}
  lineNumber = 47
  lineNumber = 41
  lineNumber = 1
  lineNumber = 41
  var call67 = callmethod(this,"items", [0]);
  var call68 = callmethod(call67,"indices", [0]);
  lineNumber = 47
  var block69 = Grace_allocObject();
  block69.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block69.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block69.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block69.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block69.receiver = this;
  block69.className = 'block<StandardPrelude:47>';
  block69.real = function(
var_i
) {
  lineNumber = 42
  var idxres70 = var_mbindings.methods["[]"].call(var_mbindings, [1], var_i);
  lineNumber = 43
  var call71 = callmethod(this,"items", [0]);
  lineNumber = 42
  var idxres72 = call71.methods["[]"].call(call71, [1], var_i);
  var call73 = callmethod(idxres72,"match", [1], idxres70);
  var var_b = call73;
  lineNumber = 44
  lineNumber = 46
  lineNumber = 43
  var call75 = callmethod(var_b,"prefix!", [0]);
  if (Grace_isTrue(call75)) {
  lineNumber = 44
  var call76 = callmethod(var_FailedMatch,"new", [1], var_o);
  throw new ReturnException(call76, returnTarget);
  var if74 = undefined;
}
  lineNumber = 47
  lineNumber = 46
  lineNumber = 1
  lineNumber = 46
  var call77 = callmethod(var_b,"bindings", [0]);
  lineNumber = 47
  var block78 = Grace_allocObject();
  block78.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block78.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block78.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block78.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block78.receiver = this;
  block78.className = 'block<StandardPrelude:47>';
  block78.real = function(
var_bb
) {
  var call79 = callmethod(var_bindings,"push", [1], var_bb);
  return call79;
};
  var call80 = callmethod(Grace_prelude,"for()do", [1, 1], call77, block78);
  return call80;
};
  var call81 = callmethod(Grace_prelude,"for()do", [1, 1], call68, block69);
  lineNumber = 50
  var call82 = callmethod(var_SuccessfulMatch,"new", [2], var_o, var_bindings);
  var if54 = call82;
  } else {
  lineNumber = 52
  var call83 = callmethod(var_FailedMatch,"new", [1], var_o);
  var if54 = call83;
}
  return if54
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj48.methods["match"] = func52;
  superDepth = origSuperDepth;
}
obj_init_48.apply(obj48, []);
  return obj48
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj45.methods["new"] = func47;
  superDepth = origSuperDepth;
}
obj_init_45.apply(obj45, []);
  var var_MatchAndDestructuringPattern = obj45;
  lineNumber = 57
  lineNumber = 1
var func84 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 57
  return var_VariablePattern
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["VariablePattern"] = func84;
  lineNumber = 1
  var obj85 = Grace_allocObject();
  obj85.outer = this;
    var reader_StandardPrelude_outer86 = function() {
    return this.outer;
  }
  obj85.methods["outer"] = reader_StandardPrelude_outer86;
function obj_init_85() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func87 = function(argcv) {
  var curarg = 1;
  var var_nm = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj88 = Grace_allocObject();
  obj88.outer = this;
    var reader_StandardPrelude_outer89 = function() {
    return this.outer;
  }
  obj88.methods["outer"] = reader_StandardPrelude_outer89;
function obj_init_88() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func90 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 59
  var array91 = new GraceList([
var_o,
]);

  var call92 = callmethod(var_SuccessfulMatch,"new", [2], var_o, array91);
  return call92
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj88.methods["match"] = func90;
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
  var var_VariablePattern = obj85;
  lineNumber = 63
  lineNumber = 1
var func93 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 63
  return var_BindingPattern
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["BindingPattern"] = func93;
  lineNumber = 1
  var obj94 = Grace_allocObject();
  obj94.outer = this;
    var reader_StandardPrelude_outer95 = function() {
    return this.outer;
  }
  obj94.methods["outer"] = reader_StandardPrelude_outer95;
function obj_init_94() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func96 = function(argcv) {
  var curarg = 1;
  var var_pat = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj97 = Grace_allocObject();
  obj97.outer = this;
    var reader_StandardPrelude_outer98 = function() {
    return this.outer;
  }
  obj97.methods["outer"] = reader_StandardPrelude_outer98;
function obj_init_97() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func99 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 65
  var array100 = new GraceList([
var_o,
]);

  var var_bindings = array100;
  lineNumber = 66
  var call101 = callmethod(var_pat,"match", [1], var_o);
  var var_m = call101;
  lineNumber = 69
  lineNumber = 70
  lineNumber = 67
  var call103 = callmethod(var_m,"prefix!", [0]);
  if (Grace_isTrue(call103)) {
  lineNumber = 69
  lineNumber = 68
  return var_m
  var if102 = undefined;
}
  lineNumber = 71
  lineNumber = 70
  lineNumber = 1
  lineNumber = 70
  var call104 = callmethod(var_m,"bindings", [0]);
  lineNumber = 71
  var block105 = Grace_allocObject();
  block105.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block105.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block105.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block105.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block105.receiver = this;
  block105.className = 'block<StandardPrelude:71>';
  block105.real = function(
var_b
) {
  var call106 = callmethod(var_bindings,"push", [1], var_b);
  return call106;
};
  var call107 = callmethod(Grace_prelude,"for()do", [1, 1], call104, block105);
  lineNumber = 73
  var call108 = callmethod(var_SuccessfulMatch,"new", [2], var_o, var_bindings);
  return call108
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj97.methods["match"] = func99;
  superDepth = origSuperDepth;
}
obj_init_97.apply(obj97, []);
  return obj97
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj94.methods["new"] = func96;
  superDepth = origSuperDepth;
}
obj_init_94.apply(obj94, []);
  var var_BindingPattern = obj94;
  lineNumber = 79
  lineNumber = 1
var func109 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 77
  return var_WildcardPattern
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["WildcardPattern"] = func109;
  lineNumber = 1
  var obj110 = Grace_allocObject();
  obj110.outer = this;
    var reader_StandardPrelude_outer111 = function() {
    return this.outer;
  }
  obj110.methods["outer"] = reader_StandardPrelude_outer111;
function obj_init_110() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func112 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj113 = Grace_allocObject();
  obj113.outer = this;
    var reader_StandardPrelude_outer114 = function() {
    return this.outer;
  }
  obj113.methods["outer"] = reader_StandardPrelude_outer114;
function obj_init_113() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func115 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 79
  var array116 = new GraceList([
]);

  var call117 = callmethod(var_SuccessfulMatch,"new", [2], var_nothing, array116);
  return call117
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj113.methods["match"] = func115;
  superDepth = origSuperDepth;
}
obj_init_113.apply(obj113, []);
  return obj113
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj110.methods["new"] = func112;
  superDepth = origSuperDepth;
}
obj_init_110.apply(obj110, []);
  var var_WildcardPattern = obj110;
  lineNumber = 83
  lineNumber = 1
var func118 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 83
  return var_AndPattern
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["AndPattern"] = func118;
  lineNumber = 1
  var obj119 = Grace_allocObject();
  obj119.outer = this;
    var reader_StandardPrelude_outer120 = function() {
    return this.outer;
  }
  obj119.methods["outer"] = reader_StandardPrelude_outer120;
function obj_init_119() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func121 = function(argcv) {
  var curarg = 1;
  var var_p1 = arguments[curarg];
  curarg++;
  var var_p2 = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj122 = Grace_allocObject();
  obj122.outer = this;
    var reader_StandardPrelude_outer123 = function() {
    return this.outer;
  }
  obj122.methods["outer"] = reader_StandardPrelude_outer123;
function obj_init_122() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func124 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 85
  var call125 = callmethod(var_p1,"match", [1], var_o);
  var var_m1 = call125;
  lineNumber = 88
  lineNumber = 89
  lineNumber = 86
  var call127 = callmethod(var_m1,"prefix!", [0]);
  if (Grace_isTrue(call127)) {
  lineNumber = 88
  lineNumber = 87
  return var_m1
  var if126 = undefined;
}
  lineNumber = 89
  var call128 = callmethod(var_p2,"match", [1], var_o);
  var var_m2 = call128;
  lineNumber = 92
  lineNumber = 93
  lineNumber = 90
  var call130 = callmethod(var_m2,"prefix!", [0]);
  if (Grace_isTrue(call130)) {
  lineNumber = 92
  lineNumber = 91
  return var_m2
  var if129 = undefined;
}
  lineNumber = 94
  var array131 = new GraceList([
]);

  var var_bindings = array131;
  lineNumber = 95
  lineNumber = 94
  lineNumber = 1
  lineNumber = 94
  var call132 = callmethod(var_m1,"bindings", [0]);
  lineNumber = 95
  var block133 = Grace_allocObject();
  block133.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block133.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block133.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block133.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block133.receiver = this;
  block133.className = 'block<StandardPrelude:95>';
  block133.real = function(
var_b
) {
  var call134 = callmethod(var_bindings,"push", [1], var_b);
  return call134;
};
  var call135 = callmethod(Grace_prelude,"for()do", [1, 1], call132, block133);
  lineNumber = 98
  lineNumber = 97
  lineNumber = 1
  lineNumber = 97
  var call136 = callmethod(var_m2,"bindings", [0]);
  lineNumber = 98
  var block137 = Grace_allocObject();
  block137.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block137.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block137.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block137.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block137.receiver = this;
  block137.className = 'block<StandardPrelude:98>';
  block137.real = function(
var_b
) {
  var call138 = callmethod(var_bindings,"push", [1], var_b);
  return call138;
};
  var call139 = callmethod(Grace_prelude,"for()do", [1, 1], call136, block137);
  lineNumber = 100
  var call140 = callmethod(var_SuccessfulMatch,"new", [2], var_o, var_bindings);
  return call140
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj122.methods["match"] = func124;
  superDepth = origSuperDepth;
}
obj_init_122.apply(obj122, []);
  return obj122
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj119.methods["new"] = func121;
  superDepth = origSuperDepth;
}
obj_init_119.apply(obj119, []);
  var var_AndPattern = obj119;
  lineNumber = 104
  lineNumber = 1
var func141 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 104
  return var_OrPattern
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["OrPattern"] = func141;
  lineNumber = 1
  var obj142 = Grace_allocObject();
  obj142.outer = this;
    var reader_StandardPrelude_outer143 = function() {
    return this.outer;
  }
  obj142.methods["outer"] = reader_StandardPrelude_outer143;
function obj_init_142() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func144 = function(argcv) {
  var curarg = 1;
  var var_p1 = arguments[curarg];
  curarg++;
  var var_p2 = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj145 = Grace_allocObject();
  obj145.outer = this;
    var reader_StandardPrelude_outer146 = function() {
    return this.outer;
  }
  obj145.methods["outer"] = reader_StandardPrelude_outer146;
function obj_init_145() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func147 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 107
  lineNumber = 106
  var call149 = callmethod(var_p1,"match", [1], var_o);
  if (Grace_isTrue(call149)) {
  lineNumber = 107
  var array150 = new GraceList([
]);

  var call151 = callmethod(var_SuccessfulMatch,"new", [2], var_o, array150);
  return call151
  var if148 = undefined;
}
  lineNumber = 110
  lineNumber = 109
  var call153 = callmethod(var_p2,"match", [1], var_o);
  if (Grace_isTrue(call153)) {
  lineNumber = 110
  var array154 = new GraceList([
]);

  var call155 = callmethod(var_SuccessfulMatch,"new", [2], var_o, array154);
  return call155
  var if152 = undefined;
}
  lineNumber = 112
  var call156 = callmethod(var_FailedMatch,"new", [1], var_o);
  return call156
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj145.methods["match"] = func147;
  superDepth = origSuperDepth;
}
obj_init_145.apply(obj145, []);
  return obj145
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj142.methods["new"] = func144;
  superDepth = origSuperDepth;
}
obj_init_142.apply(obj142, []);
  var var_OrPattern = obj142;
  return this;
}
Grace_prelude = do_import('StandardPrelude', gracecode_StandardPrelude);
