function gracecode_subtype() {
  lineNumber = 4
// Import of util
  var var_util = do_import("util", gracecode_util);
  lineNumber = 5
  var array0 = new GraceList([
]);

  var var_types = array0;
  lineNumber = 1
var func1 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 4
  return var_types
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["types"] = func1;
  lineNumber = 6
  lineNumber = 1
  lineNumber = 5
  var call2 = callmethod(var_HashMap,"new", [0]);
  var var_typesToId = call2;
  lineNumber = 1
var func3 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 5
  return var_typesToId
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["typesToId"] = func3;
  lineNumber = 7
  lineNumber = 1
  lineNumber = 6
  var call4 = callmethod(var_HashMap,"new", [0]);
  var var_matrix = call4;
  lineNumber = 1
var func5 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 6
  return var_matrix
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["matrix"] = func5;
  lineNumber = 8
  var var_DynamicType;
  lineNumber = 1
var func6 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 7
  return var_DynamicType
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["DynamicType"] = func6;
  lineNumber = 1
var func7 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_DynamicType = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["DynamicType:="] = func7;
  lineNumber = 10
  lineNumber = 8
  var bool8 = new GraceBoolean(true)
  var var_modified = bool8;
  lineNumber = 1
var func9 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 8
  return var_modified
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["modified"] = func9;
  lineNumber = 1
var func10 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_modified = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["modified:="] = func10;
  lineNumber = 22
var func11 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 12
  lineNumber = 1
  lineNumber = 11
  var call12 = callmethod(var_t,"value", [0]);
  var var_s = call12;
  lineNumber = 14
  lineNumber = 15
  lineNumber = 1
  lineNumber = 12
  var call14 = callmethod(var_t,"kind", [0]);
  var string15 = new GraceString("identifier");
  var opresult17 = callmethod(call14, "==", [1], string15);
  if (Grace_isTrue(opresult17)) {
  lineNumber = 14
  lineNumber = 13
  return var_s
  var if13 = undefined;
}
  lineNumber = 20
  lineNumber = 22
  lineNumber = 1
  lineNumber = 22
  lineNumber = 1
  lineNumber = 15
  var call19 = callmethod(var_t,"generics", [0]);
  var call20 = callmethod(call19,"size", [0]);
  var opresult22 = callmethod(call20, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult22)) {
  lineNumber = 17
  var array23 = new GraceList([
]);

  var var_joinees = array23;
  lineNumber = 18
  lineNumber = 17
  lineNumber = 1
  lineNumber = 17
  var call24 = callmethod(var_t,"generics", [0]);
  lineNumber = 18
  var block25 = Grace_allocObject();
  block25.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block25.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block25.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block25.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block25.receiver = this;
  block25.className = 'block<subtype:18>';
  block25.real = function(
var_g
) {
  var call26 = callmethod(this,"stringifyType", [1], var_g);
  var call27 = callmethod(var_joinees,"push", [1], call26);
  return call27;
};
  var call28 = callmethod(Grace_prelude,"for()do", [1, 1], call24, block25);
  lineNumber = 20
  lineNumber = 21
  lineNumber = 20
  var string29 = new GraceString("<");
  var opresult31 = callmethod(var_s, "++", [1], string29);
  var string32 = new GraceString(",");
  var call33 = callmethod(var_util,"join", [2], string32, var_joinees);
  var opresult35 = callmethod(opresult31, "++", [1], call33);
  var string36 = new GraceString(">");
  var opresult38 = callmethod(opresult35, "++", [1], string36);
  var_s = opresult38;
  var if18 = opresult38;
}
  lineNumber = 22
  return var_s
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["stringifyType"] = func11;
  lineNumber = 32
var func39 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 26
  lineNumber = 32
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
  block40.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block40.receiver = this;
  block40.className = 'block<subtype:32>';
  block40.real = function(
var_t
) {
  lineNumber = 28
  lineNumber = 1
  lineNumber = 27
  var call41 = callmethod(var_HashMap,"new", [0]);
  var var_inner = call41;
  lineNumber = 28
  lineNumber = 29
  var call42 = callmethod(this,"stringifyType", [1], var_t);
  var var_d = call42;
  lineNumber = 30
  lineNumber = 29
  lineNumber = 30
  var block43 = Grace_allocObject();
  block43.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block43.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block43.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block43.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block43.receiver = this;
  block43.className = 'block<subtype:30>';
  block43.real = function(
var_t2
) {
  var call44 = callmethod(this,"stringifyType", [1], var_t2);
  var bool45 = new GraceBoolean(true)
  var call46 = callmethod(var_inner,"put", [2], call44, bool45);
  return call46;
};
  var call47 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block43);
  lineNumber = 32
  var call48 = callmethod(var_matrix,"put", [2], var_d, var_inner);
  return call48;
};
  var call49 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block40);
  return call49
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["resetMatrix"] = func39;
  lineNumber = 56
var func50 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 37
  lineNumber = 38
  var call51 = callmethod(this,"stringifyType", [1], var_t);
  var var_d = call51;
  lineNumber = 40
  lineNumber = 38
  var call53 = callmethod(var_matrix,"contains", [1], var_d);
  if (Grace_isTrue(call53)) {
  lineNumber = 40
  lineNumber = 39
  var bool54 = new GraceBoolean(false)
  return bool54
  var if52 = undefined;
}
  lineNumber = 43
  lineNumber = 44
  lineNumber = 41
  var string56 = new GraceString("Dynamic");
  var opresult58 = callmethod(var_d, "==", [1], string56);
  if (Grace_isTrue(opresult58)) {
  lineNumber = 43
  lineNumber = 42
  var_DynamicType = var_t;
  var if55 = var_t;
}
  lineNumber = 44
  lineNumber = 1
  lineNumber = 44
  var call59 = callmethod(var_types,"size", [0]);
  var call60 = callmethod(var_typesToId,"put", [2], var_d, call59);
  lineNumber = 45
  var call61 = callmethod(var_types,"push", [1], var_t);
  lineNumber = 47
  lineNumber = 1
  lineNumber = 46
  var call62 = callmethod(var_HashMap,"new", [0]);
  var var_inner = call62;
  lineNumber = 51
  lineNumber = 47
  lineNumber = 51
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
  block63.className = 'block<subtype:51>';
  block63.real = function(
var_t2
) {
  lineNumber = 48
  lineNumber = 49
  var call64 = callmethod(this,"stringifyType", [1], var_t2);
  var var_d2 = call64;
  var bool65 = new GraceBoolean(true)
  var call66 = callmethod(var_inner,"put", [2], var_d2, bool65);
  lineNumber = 51
  lineNumber = 53
  lineNumber = 50
  var opresult69 = callmethod(var_t2, "/=", [1], var_t);
  if (Grace_isTrue(opresult69)) {
  lineNumber = 51
  var bool70 = new GraceBoolean(true)
  var call71 = callmethod(var_matrix,"get", [1], var_d2);
  var call72 = callmethod(call71,"put", [2], var_d, bool70);
  var if67 = call72;
}
  return if67;
};
  var call73 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block63);
  lineNumber = 54
  var call74 = callmethod(var_matrix,"put", [2], var_d, var_inner);
  lineNumber = 56
  lineNumber = 55
  var bool75 = new GraceBoolean(true)
  var_modified = bool75;
  lineNumber = 56
  var bool76 = new GraceBoolean(true)
  return bool76
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["addType"] = func50;
  lineNumber = 86
var func77 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 60
  lineNumber = 61
  var call78 = callmethod(this,"stringifyType", [1], var_t);
  var var_d = call78;
  lineNumber = 62
  lineNumber = 61
  lineNumber = 1
  lineNumber = 61
  var call80 = callmethod(var_matrix,"contains", [1], var_d);
  var call81 = callmethod(call80,"not", [0]);
  if (Grace_isTrue(call81)) {
  lineNumber = 62
  lineNumber = 63
  var call82 = callmethod(this,"addType", [1], var_t);
  return call82
  var if79 = undefined;
}
  lineNumber = 65
  lineNumber = 1
  lineNumber = 64
  var call83 = callmethod(var_HashMap,"new", [0]);
  var var_inner = call83;
  lineNumber = 79
  lineNumber = 65
  lineNumber = 79
  var block84 = Grace_allocObject();
  block84.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block84.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block84.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block84.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block84.receiver = this;
  block84.className = 'block<subtype:79>';
  block84.real = function(
var_t2
) {
  lineNumber = 66
  lineNumber = 67
  var call85 = callmethod(this,"stringifyType", [1], var_t2);
  var var_d2 = call85;
  var bool86 = new GraceBoolean(true)
  var call87 = callmethod(var_inner,"put", [2], var_d2, bool86);
  lineNumber = 68
  var bool88 = new GraceBoolean(true)
  var call89 = callmethod(var_matrix,"get", [1], var_d2);
  var call90 = callmethod(call89,"put", [2], var_d, bool88);
  lineNumber = 79
  lineNumber = 83
  lineNumber = 69
  var opresult93 = callmethod(var_d2, "==", [1], var_d);
  if (Grace_isTrue(opresult93)) {
  lineNumber = 79
  lineNumber = 70
  lineNumber = 1
  lineNumber = 70
  var call94 = callmethod(var_t,"methods", [0]);
  lineNumber = 79
  var block95 = Grace_allocObject();
  block95.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block95.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block95.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block95.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block95.receiver = this;
  block95.className = 'block<subtype:79>';
  block95.real = function(
var_tm
) {
  lineNumber = 73
  lineNumber = 72
  var bool96 = new GraceBoolean(false)
  var var_found = bool96;
  lineNumber = 76
  lineNumber = 73
  lineNumber = 1
  lineNumber = 73
  var call97 = callmethod(var_t2,"methods", [0]);
  lineNumber = 76
  var block98 = Grace_allocObject();
  block98.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block98.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block98.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block98.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block98.receiver = this;
  block98.className = 'block<subtype:76>';
  block98.real = function(
var_tm2
) {
  lineNumber = 77
  lineNumber = 1
  lineNumber = 74
  var call100 = callmethod(var_tm,"value", [0]);
  lineNumber = 77
  lineNumber = 1
  lineNumber = 74
  var call101 = callmethod(var_tm2,"value", [0]);
  var opresult103 = callmethod(call100, "==", [1], call101);
  if (Grace_isTrue(opresult103)) {
  lineNumber = 76
  lineNumber = 75
  var bool104 = new GraceBoolean(true)
  var_found = bool104;
  var if99 = bool104;
}
  return if99;
};
  var call105 = callmethod(Grace_prelude,"for()do", [1, 1], call97, block98);
  lineNumber = 79
  lineNumber = 81
  lineNumber = 78
  var call107 = callmethod(var_found,"prefix!", [0]);
  if (Grace_isTrue(call107)) {
  lineNumber = 79
  lineNumber = 80
  lineNumber = 1
  lineNumber = 79
  var call108 = callmethod(var_t2,"methods", [0]);
  var call109 = callmethod(call108,"push", [1], var_tm);
  var if106 = call109;
}
  return if106;
};
  var call110 = callmethod(Grace_prelude,"for()do", [1, 1], call94, block95);
  var if91 = call110;
}
  return if91;
};
  var call111 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block84);
  lineNumber = 84
  lineNumber = 1
  lineNumber = 84
  var call112 = callmethod(var_t,"value", [0]);
  var call113 = callmethod(var_matrix,"put", [2], call112, var_inner);
  lineNumber = 86
  lineNumber = 85
  var bool114 = new GraceBoolean(true)
  var_modified = bool114;
  lineNumber = 86
  var bool115 = new GraceBoolean(true)
  return bool115
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["resetType"] = func77;
  lineNumber = 93
var func116 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 91
  lineNumber = 93
  lineNumber = 90
  var bool118 = new GraceBoolean(false)
  var opresult120 = callmethod(var_t, "==", [1], bool118);
  if (Grace_isTrue(opresult120)) {
  lineNumber = 91
  lineNumber = 92
  var call121 = callmethod(this,"typeId", [1], var_DynamicType);
  return call121
  var if117 = undefined;
}
  lineNumber = 93
  var call122 = callmethod(this,"stringifyType", [1], var_t);
  var call123 = callmethod(var_typesToId,"get", [1], call122);
  return call123
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["typeId"] = func116;
  lineNumber = 109
var func124 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 98
  lineNumber = 97
  if (Grace_isTrue(var_modified)) {
  lineNumber = 98
  var call126 = callmethod(this,"findSubtypes", [0]);
  var if125 = call126;
}
  lineNumber = 101
  var array127 = new GraceList([
]);

  var var_mtrx = array127;
  lineNumber = 107
  lineNumber = 101
  lineNumber = 107
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
  block128.className = 'block<subtype:107>';
  block128.real = function(
var_t
) {
  lineNumber = 102
  var call129 = callmethod(this,"stringifyType", [1], var_t);
  var call130 = callmethod(var_matrix,"get", [1], call129);
  var var_row = call130;
  lineNumber = 104
  var array131 = new GraceList([
]);

  var var_inner = array131;
  lineNumber = 105
  lineNumber = 104
  lineNumber = 105
  var block132 = Grace_allocObject();
  block132.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block132.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block132.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block132.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block132.receiver = this;
  block132.className = 'block<subtype:105>';
  block132.real = function(
var_t2
) {
  var call133 = callmethod(this,"stringifyType", [1], var_t2);
  var call134 = callmethod(var_row,"get", [1], call133);
  var call135 = callmethod(var_inner,"push", [1], call134);
  return call135;
};
  var call136 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block132);
  lineNumber = 107
  var call137 = callmethod(var_mtrx,"push", [1], var_inner);
  return call137;
};
  var call138 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block128);
  lineNumber = 109
  return var_mtrx
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["boolMatrix"] = func124;
  lineNumber = 126
var func139 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 114
  lineNumber = 113
  if (Grace_isTrue(var_modified)) {
  lineNumber = 114
  var call141 = callmethod(this,"findSubtypes", [0]);
  var if140 = call141;
}
  lineNumber = 126
  lineNumber = 116
  lineNumber = 126
  var block142 = Grace_allocObject();
  block142.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block142.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block142.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block142.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block142.receiver = this;
  block142.className = 'block<subtype:126>';
  block142.real = function(
var_t
) {
  lineNumber = 117
  lineNumber = 118
  var call143 = callmethod(this,"stringifyType", [1], var_t);
  var var_d = call143;
  var call144 = callmethod(var_matrix,"get", [1], var_d);
  var var_row = call144;
  lineNumber = 120
  lineNumber = 119
  var string145 = new GraceString("");
  var var_st = string145;
  lineNumber = 124
  lineNumber = 120
  lineNumber = 124
  var block146 = Grace_allocObject();
  block146.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block146.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block146.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block146.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block146.receiver = this;
  block146.className = 'block<subtype:124>';
  block146.real = function(
var_t2
) {
  lineNumber = 121
  lineNumber = 122
  var call147 = callmethod(this,"stringifyType", [1], var_t2);
  var var_d2 = call147;
  lineNumber = 124
  lineNumber = 122
  var call149 = callmethod(var_row,"get", [1], var_d2);
  if (Grace_isTrue(call149)) {
  lineNumber = 124
  lineNumber = 123
  var string150 = new GraceString("");
  var opresult152 = callmethod(string150, "++", [1], var_st);
  var string153 = new GraceString(" ");
  var opresult155 = callmethod(opresult152, "++", [1], string153);
  var opresult157 = callmethod(opresult155, "++", [1], var_d2);
  var string158 = new GraceString("");
  var opresult160 = callmethod(opresult157, "++", [1], string158);
  var_st = opresult160;
  var if148 = opresult160;
}
  return if148;
};
  var call161 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block146);
  lineNumber = 126
  var string162 = new GraceString("");
  var opresult164 = callmethod(string162, "++", [1], var_d);
  var string165 = new GraceString(" is a subtype of:");
  var opresult167 = callmethod(opresult164, "++", [1], string165);
  var opresult169 = callmethod(opresult167, "++", [1], var_st);
  var string170 = new GraceString("");
  var opresult172 = callmethod(opresult169, "++", [1], string170);
  var call173 = Grace_print(opresult172);
  return call173;
};
  var call174 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block142);
  return call174
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["printMatrix"] = func139;
  lineNumber = 141
var func175 = function(argcv) {
  var curarg = 1;
  var var_typeid = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 132
  lineNumber = 133
  lineNumber = 130
  var bool177 = new GraceBoolean(false)
  var opresult179 = callmethod(var_typeid, "==", [1], bool177);
  if (Grace_isTrue(opresult179)) {
  lineNumber = 132
  lineNumber = 131
  return var_DynamicType
  var if176 = undefined;
}
  lineNumber = 135
  lineNumber = 136
  lineNumber = 1
  lineNumber = 133
  var call181 = callmethod(var_typeid,"kind", [0]);
  var string182 = new GraceString("type");
  var opresult184 = callmethod(call181, "==", [1], string182);
  if (Grace_isTrue(opresult184)) {
  lineNumber = 135
  lineNumber = 134
  return var_typeid
  var if180 = undefined;
}
  lineNumber = 139
  lineNumber = 136
  lineNumber = 139
  var block185 = Grace_allocObject();
  block185.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block185.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block185.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block185.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block185.receiver = this;
  block185.className = 'block<subtype:139>';
  block185.real = function(
var_t
) {
  lineNumber = 137
  lineNumber = 140
  var call187 = callmethod(this,"stringifyType", [1], var_t);
  lineNumber = 137
  lineNumber = 1
  lineNumber = 137
  var call188 = callmethod(var_typeid,"value", [0]);
  var opresult190 = callmethod(call187, "==", [1], call188);
  if (Grace_isTrue(opresult190)) {
  lineNumber = 139
  lineNumber = 138
  throw new ReturnException(var_t, returnTarget);
  var if186 = undefined;
}
  return if186;
};
  var call191 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block185);
  lineNumber = 141
  var bool192 = new GraceBoolean(false)
  return bool192
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["findType"] = func175;
  lineNumber = 148
var func193 = function(argcv) {
  var curarg = 1;
  var var_a = arguments[curarg];
  curarg++;
  var var_b = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 147
  lineNumber = 148
  lineNumber = 145
  var bool195 = new GraceBoolean(false)
  var opresult197 = callmethod(var_a, "==", [1], bool195);
  lineNumber = 148
  lineNumber = 145
  var bool198 = new GraceBoolean(false)
  var opresult200 = callmethod(var_b, "==", [1], bool198);
  var opresult202 = callmethod(opresult197, "|", [1], opresult200);
  if (Grace_isTrue(opresult202)) {
  lineNumber = 147
  lineNumber = 146
  var bool203 = new GraceBoolean(true)
  return bool203
  var if194 = undefined;
}
  lineNumber = 148
  var call204 = callmethod(this,"stringifyType", [1], var_b);
  var call205 = callmethod(this,"stringifyType", [1], var_a);
  var call206 = callmethod(var_matrix,"get", [1], call205);
  var call207 = callmethod(call206,"get", [1], call204);
  return call207
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["simpleCheckThat()mayBeSubtypeOf"] = func193;
  lineNumber = 217
var func208 = function(argcv) {
  var curarg = 1;
  var var_a = arguments[curarg];
  curarg++;
  var var_b = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 153
  lineNumber = 154
  lineNumber = 1
  lineNumber = 151
  var call210 = callmethod(var_a,"value", [0]);
  var string211 = new GraceString("Dynamic");
  var opresult213 = callmethod(call210, "==", [1], string211);
  if (Grace_isTrue(opresult213)) {
  lineNumber = 153
  lineNumber = 152
  var bool214 = new GraceBoolean(true)
  return bool214
  var if209 = undefined;
}
  lineNumber = 156
  lineNumber = 157
  lineNumber = 1
  lineNumber = 154
  var call216 = callmethod(var_b,"value", [0]);
  var string217 = new GraceString("Dynamic");
  var opresult219 = callmethod(call216, "==", [1], string217);
  if (Grace_isTrue(opresult219)) {
  lineNumber = 156
  lineNumber = 155
  var bool220 = new GraceBoolean(true)
  return bool220
  var if215 = undefined;
}
  lineNumber = 157
  lineNumber = 158
  var call221 = callmethod(this,"stringifyType", [1], var_a);
  var var_at = call221;
  lineNumber = 159
  var call222 = callmethod(this,"stringifyType", [1], var_b);
  var var_bt = call222;
  lineNumber = 161
  lineNumber = 159
  lineNumber = 1
  lineNumber = 159
  var call224 = callmethod(var_matrix,"get", [1], var_at);
  var call225 = callmethod(call224,"get", [1], var_bt);
  var call226 = callmethod(call225,"not", [0]);
  if (Grace_isTrue(call226)) {
  lineNumber = 161
  lineNumber = 160
  var bool227 = new GraceBoolean(false)
  return bool227
  var if223 = undefined;
}
  lineNumber = 164
  lineNumber = 165
  lineNumber = 1
  lineNumber = 162
  var call229 = callmethod(var_a,"nominal", [0]);
  lineNumber = 165
  lineNumber = 1
  lineNumber = 162
  var call230 = callmethod(var_b,"nominal", [0]);
  var opresult232 = callmethod(call229, "|", [1], call230);
  if (Grace_isTrue(opresult232)) {
  lineNumber = 164
  lineNumber = 163
  var opresult234 = callmethod(var_a, "==", [1], var_b);
  return opresult234
  var if228 = undefined;
}
  lineNumber = 172
  lineNumber = 173
  lineNumber = 1
  lineNumber = 173
  lineNumber = 1
  lineNumber = 165
  var call236 = callmethod(var_a,"unionTypes", [0]);
  var call237 = callmethod(call236,"size", [0]);
  var opresult239 = callmethod(call237, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult239)) {
  lineNumber = 169
  lineNumber = 166
  lineNumber = 1
  lineNumber = 166
  var call240 = callmethod(var_a,"unionTypes", [0]);
  lineNumber = 169
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
  block241.className = 'block<subtype:169>';
  block241.real = function(
var_ut
) {
  lineNumber = 167
  lineNumber = 1
  lineNumber = 167
  var call243 = callmethod(this,"findType", [1], var_ut);
  lineNumber = 170
  var call244 = callmethod(this,"checkThat()mayBeSubtypeOf", [1, 1], call243, var_b);
  var call245 = callmethod(call244,"not", [0]);
  if (Grace_isTrue(call245)) {
  lineNumber = 169
  lineNumber = 168
  var bool246 = new GraceBoolean(false)
  throw new ReturnException(bool246, returnTarget);
  var if242 = undefined;
}
  return if242;
};
  var call247 = callmethod(Grace_prelude,"for()do", [1, 1], call240, block241);
  lineNumber = 172
  lineNumber = 171
  var bool248 = new GraceBoolean(true)
  return bool248
  var if235 = undefined;
}
  lineNumber = 180
  lineNumber = 181
  lineNumber = 1
  lineNumber = 181
  lineNumber = 1
  lineNumber = 173
  var call250 = callmethod(var_b,"unionTypes", [0]);
  var call251 = callmethod(call250,"size", [0]);
  var opresult253 = callmethod(call251, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult253)) {
  lineNumber = 177
  lineNumber = 174
  lineNumber = 1
  lineNumber = 174
  var call254 = callmethod(var_b,"unionTypes", [0]);
  lineNumber = 177
  var block255 = Grace_allocObject();
  block255.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block255.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block255.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block255.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block255.receiver = this;
  block255.className = 'block<subtype:177>';
  block255.real = function(
var_ut
) {
  lineNumber = 175
  var call257 = callmethod(this,"findType", [1], var_ut);
  lineNumber = 178
  var call258 = callmethod(this,"checkThat()mayBeSubtypeOf", [1, 1], var_a, call257);
  if (Grace_isTrue(call258)) {
  lineNumber = 177
  lineNumber = 176
  var bool259 = new GraceBoolean(true)
  throw new ReturnException(bool259, returnTarget);
  var if256 = undefined;
}
  return if256;
};
  var call260 = callmethod(Grace_prelude,"for()do", [1, 1], call254, block255);
  lineNumber = 180
  lineNumber = 179
  var bool261 = new GraceBoolean(false)
  return bool261
  var if249 = undefined;
}
  lineNumber = 183
  lineNumber = 184
  lineNumber = 1
  lineNumber = 184
  lineNumber = 1
  lineNumber = 181
  var call263 = callmethod(var_a,"methods", [0]);
  var call264 = callmethod(call263,"size", [0]);
  lineNumber = 184
  lineNumber = 1
  lineNumber = 184
  lineNumber = 1
  lineNumber = 181
  var call265 = callmethod(var_b,"methods", [0]);
  var call266 = callmethod(call265,"size", [0]);
  var opresult268 = callmethod(call264, "<", [1], call266);
  if (Grace_isTrue(opresult268)) {
  lineNumber = 183
  lineNumber = 182
  var bool269 = new GraceBoolean(false)
  return bool269
  var if262 = undefined;
}
  lineNumber = 214
  lineNumber = 184
  lineNumber = 1
  lineNumber = 184
  var call270 = callmethod(var_b,"methods", [0]);
  lineNumber = 214
  var block271 = Grace_allocObject();
  block271.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block271.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block271.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block271.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block271.receiver = this;
  block271.className = 'block<subtype:214>';
  block271.real = function(
var_bm
) {
  lineNumber = 186
  lineNumber = 185
  var bool272 = new GraceBoolean(false)
  var var_found = bool272;
  lineNumber = 206
  lineNumber = 186
  lineNumber = 1
  lineNumber = 186
  var call273 = callmethod(var_a,"methods", [0]);
  lineNumber = 206
  var block274 = Grace_allocObject();
  block274.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block274.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block274.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block274.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block274.receiver = this;
  block274.className = 'block<subtype:206>';
  block274.real = function(
var_am
) {
  lineNumber = 211
  lineNumber = 1
  lineNumber = 187
  var call276 = callmethod(var_am,"value", [0]);
  lineNumber = 211
  lineNumber = 1
  lineNumber = 187
  var call277 = callmethod(var_bm,"value", [0]);
  var opresult279 = callmethod(call276, "==", [1], call277);
  if (Grace_isTrue(opresult279)) {
  lineNumber = 189
  lineNumber = 188
  var bool280 = new GraceBoolean(true)
  var_found = bool280;
  lineNumber = 191
  lineNumber = 189
  lineNumber = 1
  lineNumber = 189
  lineNumber = 1
  lineNumber = 189
  var call282 = callmethod(var_am,"rtype", [0]);
  var call283 = callmethod(this,"findType", [1], call282);
  lineNumber = 1
  lineNumber = 189
  var call284 = callmethod(var_bm,"rtype", [0]);
  var call285 = callmethod(this,"findType", [1], call284);
  lineNumber = 192
  var call286 = callmethod(this,"simpleCheckThat()mayBeSubtypeOf", [1, 1], call283, call285);
  var call287 = callmethod(call286,"not", [0]);
  if (Grace_isTrue(call287)) {
  lineNumber = 191
  lineNumber = 190
  var bool288 = new GraceBoolean(false)
  throw new ReturnException(bool288, returnTarget);
  var if281 = undefined;
}
  lineNumber = 194
  lineNumber = 195
  lineNumber = 1
  lineNumber = 195
  lineNumber = 1
  lineNumber = 192
  var call290 = callmethod(var_am,"signature", [0]);
  var call291 = callmethod(call290,"size", [0]);
  lineNumber = 195
  lineNumber = 1
  lineNumber = 195
  lineNumber = 1
  lineNumber = 192
  var call292 = callmethod(var_bm,"signature", [0]);
  var call293 = callmethod(call292,"size", [0]);
  var opresult295 = callmethod(call291, "!=", [1], call293);
  if (Grace_isTrue(opresult295)) {
  lineNumber = 194
  lineNumber = 193
  var bool296 = new GraceBoolean(false)
  throw new ReturnException(bool296, returnTarget);
  var if289 = undefined;
}
  lineNumber = 206
  lineNumber = 210
  lineNumber = 1
  lineNumber = 210
  lineNumber = 1
  lineNumber = 210
  lineNumber = 1
  lineNumber = 210
  lineNumber = 1
  lineNumber = 195
  var call298 = callmethod(var_am,"signature", [0]);
  var call299 = callmethod(call298,"first", [0]);
  var call300 = callmethod(call299,"params", [0]);
  var call301 = callmethod(call300,"size", [0]);
  var opresult303 = callmethod(call301, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult303)) {
  lineNumber = 206
  lineNumber = 196
  lineNumber = 1
  lineNumber = 196
  lineNumber = 1
  lineNumber = 196
  var call304 = callmethod(var_am,"signature", [0]);
  var call305 = callmethod(call304,"indices", [0]);
  lineNumber = 206
  var block306 = Grace_allocObject();
  block306.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block306.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block306.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block306.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block306.receiver = this;
  block306.className = 'block<subtype:206>';
  block306.real = function(
var_partnr
) {
  lineNumber = 199
  lineNumber = 200
  lineNumber = 1
  lineNumber = 200
  lineNumber = 1
  lineNumber = 200
  lineNumber = 1
  lineNumber = 197
  var call308 = callmethod(var_am,"signature", [0]);
  var idxres309 = call308.methods["[]"].call(call308, [1], var_partnr);
  var call310 = callmethod(idxres309,"params", [0]);
  var call311 = callmethod(call310,"size", [0]);
  lineNumber = 200
  lineNumber = 1
  lineNumber = 200
  lineNumber = 1
  lineNumber = 200
  lineNumber = 1
  lineNumber = 197
  var call312 = callmethod(var_bm,"signature", [0]);
  var idxres313 = call312.methods["[]"].call(call312, [1], var_partnr);
  var call314 = callmethod(idxres313,"params", [0]);
  var call315 = callmethod(call314,"size", [0]);
  var opresult317 = callmethod(call311, "!=", [1], call315);
  if (Grace_isTrue(opresult317)) {
  lineNumber = 199
  lineNumber = 198
  var bool318 = new GraceBoolean(false)
  throw new ReturnException(bool318, returnTarget);
  var if307 = undefined;
}
  lineNumber = 201
  lineNumber = 1
  lineNumber = 200
  var call319 = callmethod(var_am,"signature", [0]);
  var idxres320 = call319.methods["[]"].call(call319, [1], var_partnr);
  var var_part = idxres320;
  lineNumber = 206
  lineNumber = 201
  lineNumber = 1
  lineNumber = 201
  lineNumber = 1
  lineNumber = 201
  var call321 = callmethod(var_part,"params", [0]);
  var call322 = callmethod(call321,"indices", [0]);
  lineNumber = 206
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
  block323.className = 'block<subtype:206>';
  block323.real = function(
var_i
) {
  lineNumber = 203
  lineNumber = 1
  lineNumber = 203
  lineNumber = 1
  lineNumber = 202
  var call324 = callmethod(var_am,"signature", [0]);
  var idxres325 = call324.methods["[]"].call(call324, [1], var_partnr);
  var call326 = callmethod(idxres325,"params", [0]);
  var idxres327 = call326.methods["[]"].call(call326, [1], var_i);
  var var_ap = idxres327;
  lineNumber = 204
  lineNumber = 1
  lineNumber = 204
  lineNumber = 1
  lineNumber = 203
  var call328 = callmethod(var_bm,"signature", [0]);
  var idxres329 = call328.methods["[]"].call(call328, [1], var_partnr);
  var call330 = callmethod(idxres329,"params", [0]);
  var idxres331 = call330.methods["[]"].call(call330, [1], var_i);
  var var_bp = idxres331;
  lineNumber = 206
  lineNumber = 204
  lineNumber = 1
  lineNumber = 204
  lineNumber = 1
  lineNumber = 204
  var call333 = callmethod(var_bp,"dtype", [0]);
  var call334 = callmethod(this,"findType", [1], call333);
  lineNumber = 1
  lineNumber = 204
  var call335 = callmethod(var_ap,"dtype", [0]);
  var call336 = callmethod(this,"findType", [1], call335);
  lineNumber = 207
  var call337 = callmethod(this,"simpleCheckThat()mayBeSubtypeOf", [1, 1], call334, call336);
  var call338 = callmethod(call337,"not", [0]);
  if (Grace_isTrue(call338)) {
  lineNumber = 206
  lineNumber = 205
  var bool339 = new GraceBoolean(false)
  throw new ReturnException(bool339, returnTarget);
  var if332 = undefined;
}
  return if332;
};
  var call340 = callmethod(Grace_prelude,"for()do", [1, 1], call322, block323);
  return call340;
};
  var call341 = callmethod(Grace_prelude,"for()do", [1, 1], call305, block306);
  var if297 = call341;
}
  var if275 = if297;
}
  return if275;
};
  var call342 = callmethod(Grace_prelude,"for()do", [1, 1], call273, block274);
  lineNumber = 214
  lineNumber = 215
  lineNumber = 212
  var call344 = callmethod(var_found,"prefix!", [0]);
  if (Grace_isTrue(call344)) {
  lineNumber = 214
  lineNumber = 213
  var bool345 = new GraceBoolean(false)
  throw new ReturnException(bool345, returnTarget);
  var if343 = undefined;
}
  return if343;
};
  var call346 = callmethod(Grace_prelude,"for()do", [1, 1], call270, block271);
  lineNumber = 217
  lineNumber = 216
  var bool347 = new GraceBoolean(true)
  return bool347
  return undefined
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["checkThat()mayBeSubtypeOf"] = func208;
  lineNumber = 237
var func348 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 221
  lineNumber = 220
  var bool349 = new GraceBoolean(true)
  var var_changed = bool349;
  lineNumber = 231
  lineNumber = 221
  var block350 = Grace_allocObject();
  block350.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block350.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block350.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block350.receiver = this;
  block350.className = 'block<subtype:221>';
  block350.real = function(
) {
  return var_changed;
};
  lineNumber = 231
  var block351 = Grace_allocObject();
  block351.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block351.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block351.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block351.receiver = this;
  block351.className = 'block<subtype:231>';
  block351.real = function(
) {
  lineNumber = 223
  lineNumber = 222
  var bool352 = new GraceBoolean(false)
  var_changed = bool352;
  lineNumber = 231
  lineNumber = 223
  lineNumber = 231
  var block353 = Grace_allocObject();
  block353.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block353.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block353.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block353.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block353.receiver = this;
  block353.className = 'block<subtype:231>';
  block353.real = function(
var_t1
) {
  lineNumber = 224
  var call354 = callmethod(this,"stringifyType", [1], var_t1);
  var call355 = callmethod(var_matrix,"get", [1], call354);
  var var_row = call355;
  lineNumber = 231
  lineNumber = 225
  lineNumber = 231
  var block356 = Grace_allocObject();
  block356.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block356.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block356.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block356.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block356.receiver = this;
  block356.className = 'block<subtype:231>';
  block356.real = function(
var_t2
) {
  lineNumber = 226
  lineNumber = 227
  var call357 = callmethod(this,"stringifyType", [1], var_t2);
  var var_d2 = call357;
  lineNumber = 231
  lineNumber = 227
  var call359 = callmethod(var_row,"get", [1], var_d2);
  if (Grace_isTrue(call359)) {
  lineNumber = 231
  lineNumber = 228
  lineNumber = 1
  lineNumber = 228
  lineNumber = 232
  var call361 = callmethod(this,"checkThat()mayBeSubtypeOf", [1, 1], var_t1, var_t2);
  var call362 = callmethod(call361,"not", [0]);
  if (Grace_isTrue(call362)) {
  lineNumber = 229
  var bool363 = new GraceBoolean(false)
  var call364 = callmethod(var_row,"put", [2], var_d2, bool363);
  lineNumber = 231
  lineNumber = 230
  var bool365 = new GraceBoolean(true)
  var_changed = bool365;
  var if360 = bool365;
}
  var if358 = if360;
}
  return if358;
};
  var call366 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block356);
  return call366;
};
  var call367 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block353);
  return call367;
};
  var call368 = callmethod(Grace_prelude,"while()do", [1, 1], block350, block351);
  lineNumber = 237
  lineNumber = 236
  var bool369 = new GraceBoolean(false)
  var_modified = bool369;
  return bool369
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["findSubtypes"] = func348;
  lineNumber = 243
var func370 = function(argcv) {
  var curarg = 1;
  var var_a = arguments[curarg];
  curarg++;
  var var_b = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 241
  lineNumber = 240
  lineNumber = 243
  var call372 = callmethod(this,"addType", [1], var_a);
  lineNumber = 240
  var call373 = callmethod(this,"addType", [1], var_b);
  var opresult375 = callmethod(call372, "|", [1], call373);
  var opresult377 = callmethod(opresult375, "|", [1], var_modified);
  if (Grace_isTrue(opresult377)) {
  lineNumber = 241
  var call378 = callmethod(this,"findSubtypes", [0]);
  var if371 = call378;
}
  lineNumber = 243
  var call379 = callmethod(this,"stringifyType", [1], var_b);
  var call380 = callmethod(this,"stringifyType", [1], var_a);
  var call381 = callmethod(var_matrix,"get", [1], call380);
  var call382 = callmethod(call381,"get", [1], call379);
  return call382
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["conformsType()to"] = func370;
  lineNumber = 274
var func383 = function(argcv) {
  var curarg = 1;
  var var_t = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 248
  lineNumber = 247
  lineNumber = 250
  var call385 = callmethod(this,"addType", [1], var_t);
  lineNumber = 247
  var opresult387 = callmethod(call385, "|", [1], var_modified);
  if (Grace_isTrue(opresult387)) {
  lineNumber = 248
  var call388 = callmethod(this,"findSubtypes", [0]);
  var if384 = call388;
}
  lineNumber = 250
  lineNumber = 251
  var call389 = callmethod(this,"stringifyType", [1], var_t);
  var var_id = call389;
  lineNumber = 253
  lineNumber = 251
  var call391 = callmethod(var_id,"at", [1], new GraceNum(1));
  var string392 = new GraceString("<");
  var opresult394 = callmethod(call391, "/=", [1], string392);
  if (Grace_isTrue(opresult394)) {
  lineNumber = 253
  lineNumber = 252
  return var_id
  var if390 = undefined;
}
  lineNumber = 254
  var call395 = callmethod(var_matrix,"get", [1], var_id);
  var var_st = call395;
  lineNumber = 256
  var array396 = new GraceList([
]);

  var var_maybe = array396;
  lineNumber = 259
  lineNumber = 256
  lineNumber = 259
  var block397 = Grace_allocObject();
  block397.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block397.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block397.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block397.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block397.receiver = this;
  block397.className = 'block<subtype:259>';
  block397.real = function(
var_t2
) {
  lineNumber = 257
  lineNumber = 258
  var call398 = callmethod(this,"stringifyType", [1], var_t2);
  var var_d2 = call398;
  lineNumber = 259
  lineNumber = 258
  lineNumber = 261
  lineNumber = 258
  var string400 = new GraceString("Dynamic");
  var opresult402 = callmethod(var_d2, "/=", [1], string400);
  var call403 = callmethod(var_st,"get", [1], var_d2);
  var opresult405 = callmethod(opresult402, "&", [1], call403);
  var call406 = callmethod(var_matrix,"get", [1], var_d2);
  var call407 = callmethod(call406,"get", [1], var_id);
  var opresult409 = callmethod(opresult405, "&", [1], call407);
  if (Grace_isTrue(opresult409)) {
  lineNumber = 259
  var call410 = callmethod(var_maybe,"push", [1], var_d2);
  var if399 = call410;
}
  return if399;
};
  var call411 = callmethod(Grace_prelude,"for()do", [1, 1], var_types, block397);
  lineNumber = 263
  lineNumber = 262
  var string412 = new GraceString("");
  var var_best = string412;
  lineNumber = 267
  lineNumber = 263
  lineNumber = 267
  var block413 = Grace_allocObject();
  block413.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block413.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block413.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block413.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block413.receiver = this;
  block413.className = 'block<subtype:267>';
  block413.real = function(
var_mn
) {
  lineNumber = 269
  lineNumber = 1
  lineNumber = 264
  var call415 = callmethod(var_mn,"size", [0]);
  lineNumber = 269
  lineNumber = 1
  lineNumber = 264
  var call416 = callmethod(var_best,"size", [0]);
  var opresult418 = callmethod(call415, ">", [1], call416);
  if (Grace_isTrue(opresult418)) {
  lineNumber = 267
  lineNumber = 265
  var call420 = callmethod(var_mn,"at", [1], new GraceNum(1));
  var string421 = new GraceString("<");
  var opresult423 = callmethod(call420, "/=", [1], string421);
  if (Grace_isTrue(opresult423)) {
  lineNumber = 267
  lineNumber = 266
  var_best = var_mn;
  var if419 = var_mn;
}
  var if414 = if419;
}
  return if414;
};
  var call424 = callmethod(Grace_prelude,"for()do", [1, 1], var_maybe, block413);
  lineNumber = 272
  lineNumber = 273
  lineNumber = 1
  lineNumber = 270
  var call426 = callmethod(var_best,"size", [0]);
  var opresult428 = callmethod(call426, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult428)) {
  lineNumber = 272
  lineNumber = 271
  return var_best
  var if425 = undefined;
}
  lineNumber = 274
  lineNumber = 273
  return var_id
  return undefined
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["nicename"] = func383;
  return this;
}
