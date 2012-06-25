function gracecode_typechecker() {
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
  lineNumber = 1
  lineNumber = 6
  var call0 = callmethod(var_HashMap,"new", [0]);
  var var_preludeObj = call0;
  lineNumber = 1
var func1 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 6
  return var_preludeObj
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["preludeObj"] = func1;
  lineNumber = 8
  lineNumber = 1
  lineNumber = 7
  var call2 = callmethod(var_HashMap,"new", [0]);
  var var_moduleScope = call2;
  lineNumber = 1
var func3 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 7
  return var_moduleScope
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["moduleScope"] = func3;
  lineNumber = 8
  var string4 = new GraceString("___is_object");
  var bool5 = new GraceBoolean(true)
  var call6 = callmethod(var_moduleScope,"put", [2], string4, bool5);
  lineNumber = 9
  var string7 = new GraceString("___is_prelude");
  var bool8 = new GraceBoolean(true)
  var call9 = callmethod(var_preludeObj,"put", [2], string7, bool8);
  lineNumber = 10
  lineNumber = 1
  lineNumber = 10
  var call11 = callmethod(var_HashMap,"new", [0]);
  var array10 = new GraceList([
call11,
var_preludeObj,
var_moduleScope,
]);

  var var_scopes = array10;
  lineNumber = 1
var func12 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 10
  return var_scopes
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["scopes"] = func12;
  lineNumber = 1
var func13 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_scopes = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["scopes:="] = func13;
  lineNumber = 11
  var string15 = new GraceString("module");
  var array16 = new GraceList([
]);

  lineNumber = 1
  lineNumber = 11
  var call17 = callmethod(var_ast,"typeNode", [0]);
  var call18 = callmethod(call17,"new", [2], string15, array16);
  var array14 = new GraceList([
call18,
]);

  var var_selftypes = array14;
  lineNumber = 1
var func19 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 11
  return var_selftypes
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["selftypes"] = func19;
  lineNumber = 1
var func20 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_selftypes = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["selftypes:="] = func20;
  lineNumber = 14
  lineNumber = 12
  var var_auto__95__count = new GraceNum(0);
  lineNumber = 1
var func21 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 12
  return var_auto__95__count
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["auto_count"] = func21;
  lineNumber = 1
var func22 = function(argcv) {
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
  this.methods["auto_count:="] = func22;
  lineNumber = 14
  var string23 = new GraceString("Dynamic");
  var bool24 = new GraceBoolean(false)
  lineNumber = 15
  lineNumber = 1
  lineNumber = 14
  var call25 = callmethod(var_ast,"identifierNode", [0]);
  var call26 = callmethod(call25,"new", [2], string23, bool24);
  var var_DynamicIdentifier = call26;
  lineNumber = 1
var func27 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 14
  return var_DynamicIdentifier
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["DynamicIdentifier"] = func27;
  lineNumber = 15
  var string28 = new GraceString("other");
  var string29 = new GraceString("Dynamic");
  var bool30 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 15
  var call31 = callmethod(var_ast,"identifierNode", [0]);
  var call32 = callmethod(call31,"new", [2], string29, bool30);
  lineNumber = 16
  lineNumber = 1
  lineNumber = 15
  var call33 = callmethod(var_ast,"identifierNode", [0]);
  var call34 = callmethod(call33,"new", [2], string28, call32);
  var var_TopOther = call34;
  lineNumber = 1
var func35 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 15
  return var_TopOther
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["TopOther"] = func35;
  lineNumber = 16
  var string36 = new GraceString("String");
  var bool37 = new GraceBoolean(false)
  lineNumber = 17
  lineNumber = 1
  lineNumber = 16
  var call38 = callmethod(var_ast,"identifierNode", [0]);
  var call39 = callmethod(call38,"new", [2], string36, bool37);
  var var_StringIdentifier = call39;
  lineNumber = 1
var func40 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 16
  return var_StringIdentifier
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["StringIdentifier"] = func40;
  lineNumber = 17
  var string41 = new GraceString("other");
  lineNumber = 18
  lineNumber = 1
  lineNumber = 17
  var call42 = callmethod(var_ast,"identifierNode", [0]);
  var call43 = callmethod(call42,"new", [2], string41, var_StringIdentifier);
  var var_StringOther = call43;
  lineNumber = 1
var func44 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 17
  return var_StringOther
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["StringOther"] = func44;
  lineNumber = 18
  var string45 = new GraceString("Boolean");
  var bool46 = new GraceBoolean(false)
  lineNumber = 19
  lineNumber = 1
  lineNumber = 18
  var call47 = callmethod(var_ast,"identifierNode", [0]);
  var call48 = callmethod(call47,"new", [2], string45, bool46);
  var var_BooleanIdentifier = call48;
  lineNumber = 1
var func49 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 18
  return var_BooleanIdentifier
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["BooleanIdentifier"] = func49;
  lineNumber = 19
  var string50 = new GraceString("other");
  lineNumber = 20
  lineNumber = 1
  lineNumber = 19
  var call51 = callmethod(var_ast,"identifierNode", [0]);
  var call52 = callmethod(call51,"new", [2], string50, var_BooleanIdentifier);
  var var_BooleanOther = call52;
  lineNumber = 1
var func53 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 19
  return var_BooleanOther
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["BooleanOther"] = func53;
  lineNumber = 20
  var string54 = new GraceString("Number");
  var bool55 = new GraceBoolean(false)
  lineNumber = 21
  lineNumber = 1
  lineNumber = 20
  var call56 = callmethod(var_ast,"identifierNode", [0]);
  var call57 = callmethod(call56,"new", [2], string54, bool55);
  var var_NumberIdentifier = call57;
  lineNumber = 1
var func58 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 20
  return var_NumberIdentifier
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["NumberIdentifier"] = func58;
  lineNumber = 21
  var string59 = new GraceString("other");
  lineNumber = 22
  lineNumber = 1
  lineNumber = 21
  var call60 = callmethod(var_ast,"identifierNode", [0]);
  var call61 = callmethod(call60,"new", [2], string59, var_NumberIdentifier);
  var var_NumberOther = call61;
  lineNumber = 1
var func62 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 21
  return var_NumberOther
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["NumberOther"] = func62;
  lineNumber = 22
  var string63 = new GraceString("List");
  var bool64 = new GraceBoolean(false)
  lineNumber = 23
  lineNumber = 1
  lineNumber = 22
  var call65 = callmethod(var_ast,"identifierNode", [0]);
  var call66 = callmethod(call65,"new", [2], string63, bool64);
  var var_ListIdentifier = call66;
  lineNumber = 1
var func67 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 22
  return var_ListIdentifier
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["ListIdentifier"] = func67;
  lineNumber = 23
  var string68 = new GraceString("other");
  lineNumber = 24
  lineNumber = 1
  lineNumber = 23
  var call69 = callmethod(var_ast,"identifierNode", [0]);
  var call70 = callmethod(call69,"new", [2], string68, var_ListIdentifier);
  var var_ListOther = call70;
  lineNumber = 1
var func71 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 23
  return var_ListOther
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["ListOther"] = func71;
  lineNumber = 24
  var string72 = new GraceString("Dynamic");
  var array73 = new GraceList([
]);

  lineNumber = 25
  lineNumber = 1
  lineNumber = 24
  var call74 = callmethod(var_ast,"typeNode", [0]);
  var call75 = callmethod(call74,"new", [2], string72, array73);
  var var_DynamicType = call75;
  lineNumber = 1
var func76 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 24
  return var_DynamicType
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["DynamicType"] = func76;
  lineNumber = 44
  lineNumber = 25
  var string77 = new GraceString("Number");
  lineNumber = 44
  lineNumber = 26
  var string79 = new GraceString("+");
  var string81 = new GraceString("+");
  var array82 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 26
  var call83 = callmethod(var_ast,"signaturePart", [0]);
  var call84 = callmethod(call83,"new", [2], string81, array82);
  var array80 = new GraceList([
call84,
]);

  lineNumber = 1
  lineNumber = 26
  var call85 = callmethod(var_ast,"methodTypeNode", [0]);
  var call86 = callmethod(call85,"new", [3], string79, array80, var_NumberIdentifier);
  lineNumber = 27
  var string87 = new GraceString("*");
  var string89 = new GraceString("*");
  var array90 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 27
  var call91 = callmethod(var_ast,"signaturePart", [0]);
  var call92 = callmethod(call91,"new", [2], string89, array90);
  var array88 = new GraceList([
call92,
]);

  lineNumber = 1
  lineNumber = 27
  var call93 = callmethod(var_ast,"methodTypeNode", [0]);
  var call94 = callmethod(call93,"new", [3], string87, array88, var_NumberIdentifier);
  lineNumber = 28
  var string95 = new GraceString("-");
  var string97 = new GraceString("-");
  var array98 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 28
  var call99 = callmethod(var_ast,"signaturePart", [0]);
  var call100 = callmethod(call99,"new", [2], string97, array98);
  var array96 = new GraceList([
call100,
]);

  lineNumber = 1
  lineNumber = 28
  var call101 = callmethod(var_ast,"methodTypeNode", [0]);
  var call102 = callmethod(call101,"new", [3], string95, array96, var_NumberIdentifier);
  lineNumber = 29
  var string103 = new GraceString("/");
  var string105 = new GraceString("/");
  var array106 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 29
  var call107 = callmethod(var_ast,"signaturePart", [0]);
  var call108 = callmethod(call107,"new", [2], string105, array106);
  var array104 = new GraceList([
call108,
]);

  lineNumber = 1
  lineNumber = 29
  var call109 = callmethod(var_ast,"methodTypeNode", [0]);
  var call110 = callmethod(call109,"new", [3], string103, array104, var_NumberIdentifier);
  lineNumber = 30
  var string111 = new GraceString("%");
  var string113 = new GraceString("%");
  var array114 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 30
  var call115 = callmethod(var_ast,"signaturePart", [0]);
  var call116 = callmethod(call115,"new", [2], string113, array114);
  var array112 = new GraceList([
call116,
]);

  lineNumber = 1
  lineNumber = 30
  var call117 = callmethod(var_ast,"methodTypeNode", [0]);
  var call118 = callmethod(call117,"new", [3], string111, array112, var_NumberIdentifier);
  lineNumber = 31
  var string119 = new GraceString("==");
  var string121 = new GraceString("==");
  var array122 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 31
  var call123 = callmethod(var_ast,"signaturePart", [0]);
  var call124 = callmethod(call123,"new", [2], string121, array122);
  var array120 = new GraceList([
call124,
]);

  lineNumber = 1
  lineNumber = 31
  var call125 = callmethod(var_ast,"methodTypeNode", [0]);
  var call126 = callmethod(call125,"new", [3], string119, array120, var_BooleanIdentifier);
  lineNumber = 32
  var string127 = new GraceString("!=");
  var string129 = new GraceString("!=");
  var array130 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 32
  var call131 = callmethod(var_ast,"signaturePart", [0]);
  var call132 = callmethod(call131,"new", [2], string129, array130);
  var array128 = new GraceList([
call132,
]);

  lineNumber = 1
  lineNumber = 32
  var call133 = callmethod(var_ast,"methodTypeNode", [0]);
  var call134 = callmethod(call133,"new", [3], string127, array128, var_BooleanIdentifier);
  lineNumber = 33
  var string135 = new GraceString("/=");
  var string137 = new GraceString("/=");
  var array138 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 33
  var call139 = callmethod(var_ast,"signaturePart", [0]);
  var call140 = callmethod(call139,"new", [2], string137, array138);
  var array136 = new GraceList([
call140,
]);

  lineNumber = 1
  lineNumber = 33
  var call141 = callmethod(var_ast,"methodTypeNode", [0]);
  var call142 = callmethod(call141,"new", [3], string135, array136, var_BooleanIdentifier);
  lineNumber = 34
  var string143 = new GraceString("++");
  var string145 = new GraceString("++");
  var array146 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 34
  var call147 = callmethod(var_ast,"signaturePart", [0]);
  var call148 = callmethod(call147,"new", [2], string145, array146);
  var array144 = new GraceList([
call148,
]);

  lineNumber = 1
  lineNumber = 34
  var call149 = callmethod(var_ast,"methodTypeNode", [0]);
  var call150 = callmethod(call149,"new", [3], string143, array144, var_DynamicIdentifier);
  lineNumber = 35
  var string151 = new GraceString("<");
  var string153 = new GraceString("<");
  var array154 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 35
  var call155 = callmethod(var_ast,"signaturePart", [0]);
  var call156 = callmethod(call155,"new", [2], string153, array154);
  var array152 = new GraceList([
call156,
]);

  lineNumber = 1
  lineNumber = 35
  var call157 = callmethod(var_ast,"methodTypeNode", [0]);
  var call158 = callmethod(call157,"new", [3], string151, array152, var_BooleanIdentifier);
  lineNumber = 36
  var string159 = new GraceString("<=");
  var string161 = new GraceString("<=");
  var array162 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 36
  var call163 = callmethod(var_ast,"signaturePart", [0]);
  var call164 = callmethod(call163,"new", [2], string161, array162);
  var array160 = new GraceList([
call164,
]);

  lineNumber = 1
  lineNumber = 36
  var call165 = callmethod(var_ast,"methodTypeNode", [0]);
  var call166 = callmethod(call165,"new", [3], string159, array160, var_BooleanIdentifier);
  lineNumber = 37
  var string167 = new GraceString(">");
  var string169 = new GraceString(">");
  var array170 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 37
  var call171 = callmethod(var_ast,"signaturePart", [0]);
  var call172 = callmethod(call171,"new", [2], string169, array170);
  var array168 = new GraceList([
call172,
]);

  lineNumber = 1
  lineNumber = 37
  var call173 = callmethod(var_ast,"methodTypeNode", [0]);
  var call174 = callmethod(call173,"new", [3], string167, array168, var_BooleanIdentifier);
  lineNumber = 38
  var string175 = new GraceString(">=");
  var string177 = new GraceString(">=");
  var array178 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 38
  var call179 = callmethod(var_ast,"signaturePart", [0]);
  var call180 = callmethod(call179,"new", [2], string177, array178);
  var array176 = new GraceList([
call180,
]);

  lineNumber = 1
  lineNumber = 38
  var call181 = callmethod(var_ast,"methodTypeNode", [0]);
  var call182 = callmethod(call181,"new", [3], string175, array176, var_BooleanIdentifier);
  lineNumber = 39
  var string183 = new GraceString("..");
  var string185 = new GraceString("..");
  var array186 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 39
  var call187 = callmethod(var_ast,"signaturePart", [0]);
  var call188 = callmethod(call187,"new", [2], string185, array186);
  var array184 = new GraceList([
call188,
]);

  lineNumber = 1
  lineNumber = 39
  var call189 = callmethod(var_ast,"methodTypeNode", [0]);
  var call190 = callmethod(call189,"new", [3], string183, array184, var_DynamicIdentifier);
  lineNumber = 40
  var string191 = new GraceString("asString");
  var string193 = new GraceString("asString");
  lineNumber = 1
  lineNumber = 40
  var call194 = callmethod(var_ast,"signaturePart", [0]);
  var call195 = callmethod(call194,"new", [1], string193);
  var array192 = new GraceList([
call195,
]);

  lineNumber = 1
  lineNumber = 40
  var call196 = callmethod(var_ast,"methodTypeNode", [0]);
  var call197 = callmethod(call196,"new", [3], string191, array192, var_StringIdentifier);
  lineNumber = 41
  var string198 = new GraceString("prefix-");
  var string200 = new GraceString("prefix-");
  lineNumber = 1
  lineNumber = 41
  var call201 = callmethod(var_ast,"signaturePart", [0]);
  var call202 = callmethod(call201,"new", [1], string200);
  var array199 = new GraceList([
call202,
]);

  lineNumber = 1
  lineNumber = 41
  var call203 = callmethod(var_ast,"methodTypeNode", [0]);
  var call204 = callmethod(call203,"new", [3], string198, array199, var_NumberIdentifier);
  lineNumber = 42
  var string205 = new GraceString("inBase");
  var string207 = new GraceString("inBase");
  var array208 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 42
  var call209 = callmethod(var_ast,"signaturePart", [0]);
  var call210 = callmethod(call209,"new", [2], string207, array208);
  var array206 = new GraceList([
call210,
]);

  lineNumber = 1
  lineNumber = 42
  var call211 = callmethod(var_ast,"methodTypeNode", [0]);
  var call212 = callmethod(call211,"new", [3], string205, array206, var_StringIdentifier);
  lineNumber = 43
  var string213 = new GraceString("truncate");
  var string215 = new GraceString("truncate");
  lineNumber = 1
  lineNumber = 43
  var call216 = callmethod(var_ast,"signaturePart", [0]);
  var call217 = callmethod(call216,"new", [1], string215);
  var array214 = new GraceList([
call217,
]);

  lineNumber = 1
  lineNumber = 43
  var call218 = callmethod(var_ast,"methodTypeNode", [0]);
  var call219 = callmethod(call218,"new", [3], string213, array214, var_NumberIdentifier);
  lineNumber = 44
  var string220 = new GraceString("match");
  var string222 = new GraceString("match");
  var array223 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 44
  var call224 = callmethod(var_ast,"signaturePart", [0]);
  var call225 = callmethod(call224,"new", [2], string222, array223);
  var array221 = new GraceList([
call225,
]);

  lineNumber = 45
  lineNumber = 1
  lineNumber = 44
  var call226 = callmethod(var_ast,"methodTypeNode", [0]);
  var call227 = callmethod(call226,"new", [3], string220, array221, var_DynamicIdentifier);
  var array78 = new GraceList([
call86,
call94,
call102,
call110,
call118,
call126,
call134,
call142,
call150,
call158,
call166,
call174,
call182,
call190,
call197,
call204,
call212,
call219,
call227,
]);

  lineNumber = 46
  lineNumber = 1
  lineNumber = 25
  var call228 = callmethod(var_ast,"typeNode", [0]);
  var call229 = callmethod(call228,"new", [2], string77, array78);
  var var_NumberType = call229;
  lineNumber = 1
var func230 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 25
  return var_NumberType
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["NumberType"] = func230;
  lineNumber = 65
  lineNumber = 46
  var string231 = new GraceString("String");
  lineNumber = 65
  lineNumber = 47
  var string233 = new GraceString("++");
  var string235 = new GraceString("++");
  var array236 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 47
  var call237 = callmethod(var_ast,"signaturePart", [0]);
  var call238 = callmethod(call237,"new", [2], string235, array236);
  var array234 = new GraceList([
call238,
]);

  lineNumber = 1
  lineNumber = 47
  var call239 = callmethod(var_ast,"methodTypeNode", [0]);
  var call240 = callmethod(call239,"new", [3], string233, array234, var_StringIdentifier);
  lineNumber = 48
  var string241 = new GraceString("size");
  var string243 = new GraceString("size");
  lineNumber = 1
  lineNumber = 48
  var call244 = callmethod(var_ast,"signaturePart", [0]);
  var call245 = callmethod(call244,"new", [1], string243);
  var array242 = new GraceList([
call245,
]);

  lineNumber = 1
  lineNumber = 48
  var call246 = callmethod(var_ast,"methodTypeNode", [0]);
  var call247 = callmethod(call246,"new", [3], string241, array242, var_NumberIdentifier);
  lineNumber = 49
  var string248 = new GraceString("ord");
  var string250 = new GraceString("ord");
  lineNumber = 1
  lineNumber = 49
  var call251 = callmethod(var_ast,"signaturePart", [0]);
  var call252 = callmethod(call251,"new", [1], string250);
  var array249 = new GraceList([
call252,
]);

  lineNumber = 1
  lineNumber = 49
  var call253 = callmethod(var_ast,"methodTypeNode", [0]);
  var call254 = callmethod(call253,"new", [3], string248, array249, var_NumberIdentifier);
  lineNumber = 50
  var string255 = new GraceString("at");
  var string257 = new GraceString("at");
  var array258 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 50
  var call259 = callmethod(var_ast,"signaturePart", [0]);
  var call260 = callmethod(call259,"new", [2], string257, array258);
  var array256 = new GraceList([
call260,
]);

  lineNumber = 1
  lineNumber = 50
  var call261 = callmethod(var_ast,"methodTypeNode", [0]);
  var call262 = callmethod(call261,"new", [3], string255, array256, var_StringIdentifier);
  lineNumber = 51
  var string263 = new GraceString("[]");
  var string265 = new GraceString("[]");
  var array266 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 51
  var call267 = callmethod(var_ast,"signaturePart", [0]);
  var call268 = callmethod(call267,"new", [2], string265, array266);
  var array264 = new GraceList([
call268,
]);

  lineNumber = 1
  lineNumber = 51
  var call269 = callmethod(var_ast,"methodTypeNode", [0]);
  var call270 = callmethod(call269,"new", [3], string263, array264, var_StringIdentifier);
  lineNumber = 52
  var string271 = new GraceString("==");
  var string273 = new GraceString("==");
  var array274 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 52
  var call275 = callmethod(var_ast,"signaturePart", [0]);
  var call276 = callmethod(call275,"new", [2], string273, array274);
  var array272 = new GraceList([
call276,
]);

  lineNumber = 1
  lineNumber = 52
  var call277 = callmethod(var_ast,"methodTypeNode", [0]);
  var call278 = callmethod(call277,"new", [3], string271, array272, var_BooleanIdentifier);
  lineNumber = 53
  var string279 = new GraceString("!=");
  var string281 = new GraceString("!=");
  var array282 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 53
  var call283 = callmethod(var_ast,"signaturePart", [0]);
  var call284 = callmethod(call283,"new", [2], string281, array282);
  var array280 = new GraceList([
call284,
]);

  lineNumber = 1
  lineNumber = 53
  var call285 = callmethod(var_ast,"methodTypeNode", [0]);
  var call286 = callmethod(call285,"new", [3], string279, array280, var_BooleanIdentifier);
  lineNumber = 54
  var string287 = new GraceString("/=");
  var string289 = new GraceString("/=");
  var array290 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 54
  var call291 = callmethod(var_ast,"signaturePart", [0]);
  var call292 = callmethod(call291,"new", [2], string289, array290);
  var array288 = new GraceList([
call292,
]);

  lineNumber = 1
  lineNumber = 54
  var call293 = callmethod(var_ast,"methodTypeNode", [0]);
  var call294 = callmethod(call293,"new", [3], string287, array288, var_BooleanIdentifier);
  lineNumber = 55
  var string295 = new GraceString("iter");
  var string297 = new GraceString("iter");
  lineNumber = 1
  lineNumber = 55
  var call298 = callmethod(var_ast,"signaturePart", [0]);
  var call299 = callmethod(call298,"new", [1], string297);
  var array296 = new GraceList([
call299,
]);

  lineNumber = 1
  lineNumber = 55
  var call300 = callmethod(var_ast,"methodTypeNode", [0]);
  var call301 = callmethod(call300,"new", [3], string295, array296, var_DynamicIdentifier);
  lineNumber = 58
  lineNumber = 56
  var string302 = new GraceString("substringFrom()to");
  lineNumber = 58
  lineNumber = 57
  var string304 = new GraceString("substringFrom");
  var array305 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 57
  var call306 = callmethod(var_ast,"signaturePart", [0]);
  var call307 = callmethod(call306,"new", [2], string304, array305);
  lineNumber = 58
  var string308 = new GraceString("to");
  var array309 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 58
  var call310 = callmethod(var_ast,"signaturePart", [0]);
  var call311 = callmethod(call310,"new", [2], string308, array309);
  var array303 = new GraceList([
call307,
call311,
]);

  lineNumber = 1
  lineNumber = 56
  var call312 = callmethod(var_ast,"methodTypeNode", [0]);
  var call313 = callmethod(call312,"new", [3], string302, array303, var_StringIdentifier);
  lineNumber = 60
  lineNumber = 59
  var string314 = new GraceString("replace()with");
  lineNumber = 60
  lineNumber = 59
  var string316 = new GraceString("replace");
  var array317 = new GraceList([
var_StringOther,
]);

  lineNumber = 1
  lineNumber = 59
  var call318 = callmethod(var_ast,"signaturePart", [0]);
  var call319 = callmethod(call318,"new", [2], string316, array317);
  lineNumber = 60
  var string320 = new GraceString("with");
  var array321 = new GraceList([
var_StringOther,
]);

  lineNumber = 1
  lineNumber = 60
  var call322 = callmethod(var_ast,"signaturePart", [0]);
  var call323 = callmethod(call322,"new", [2], string320, array321);
  var array315 = new GraceList([
call319,
call323,
]);

  lineNumber = 1
  lineNumber = 59
  var call324 = callmethod(var_ast,"methodTypeNode", [0]);
  var call325 = callmethod(call324,"new", [3], string314, array315, var_StringIdentifier);
  lineNumber = 61
  var string326 = new GraceString("hashcode");
  var string328 = new GraceString("hashcode");
  lineNumber = 1
  lineNumber = 61
  var call329 = callmethod(var_ast,"signaturePart", [0]);
  var call330 = callmethod(call329,"new", [1], string328);
  var array327 = new GraceList([
call330,
]);

  lineNumber = 1
  lineNumber = 61
  var call331 = callmethod(var_ast,"methodTypeNode", [0]);
  var call332 = callmethod(call331,"new", [3], string326, array327, var_NumberIdentifier);
  lineNumber = 62
  var string333 = new GraceString("indices");
  var string335 = new GraceString("indices");
  lineNumber = 1
  lineNumber = 62
  var call336 = callmethod(var_ast,"signaturePart", [0]);
  var call337 = callmethod(call336,"new", [1], string335);
  var array334 = new GraceList([
call337,
]);

  lineNumber = 1
  lineNumber = 62
  var call338 = callmethod(var_ast,"methodTypeNode", [0]);
  var call339 = callmethod(call338,"new", [3], string333, array334, var_ListIdentifier);
  lineNumber = 63
  var string340 = new GraceString("asString");
  var string342 = new GraceString("asString");
  lineNumber = 1
  lineNumber = 63
  var call343 = callmethod(var_ast,"signaturePart", [0]);
  var call344 = callmethod(call343,"new", [1], string342);
  var array341 = new GraceList([
call344,
]);

  lineNumber = 1
  lineNumber = 63
  var call345 = callmethod(var_ast,"methodTypeNode", [0]);
  var call346 = callmethod(call345,"new", [3], string340, array341, var_StringIdentifier);
  lineNumber = 64
  var string347 = new GraceString("asNumber");
  var string349 = new GraceString("asNumber");
  lineNumber = 1
  lineNumber = 64
  var call350 = callmethod(var_ast,"signaturePart", [0]);
  var call351 = callmethod(call350,"new", [1], string349);
  var array348 = new GraceList([
call351,
]);

  lineNumber = 1
  lineNumber = 64
  var call352 = callmethod(var_ast,"methodTypeNode", [0]);
  var call353 = callmethod(call352,"new", [3], string347, array348, var_NumberIdentifier);
  lineNumber = 65
  var string354 = new GraceString("match");
  var string356 = new GraceString("match");
  var array357 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 65
  var call358 = callmethod(var_ast,"signaturePart", [0]);
  var call359 = callmethod(call358,"new", [2], string356, array357);
  var array355 = new GraceList([
call359,
]);

  lineNumber = 66
  lineNumber = 1
  lineNumber = 65
  var call360 = callmethod(var_ast,"methodTypeNode", [0]);
  var call361 = callmethod(call360,"new", [3], string354, array355, var_DynamicIdentifier);
  var array232 = new GraceList([
call240,
call247,
call254,
call262,
call270,
call278,
call286,
call294,
call301,
call313,
call325,
call332,
call339,
call346,
call353,
call361,
]);

  lineNumber = 67
  lineNumber = 1
  lineNumber = 46
  var call362 = callmethod(var_ast,"typeNode", [0]);
  var call363 = callmethod(call362,"new", [2], string231, array232);
  var var_StringType = call363;
  lineNumber = 1
var func364 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 46
  return var_StringType
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["StringType"] = func364;
  lineNumber = 80
  lineNumber = 67
  var string365 = new GraceString("Boolean");
  lineNumber = 80
  lineNumber = 68
  var string367 = new GraceString("++");
  var string369 = new GraceString("++");
  var array370 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 68
  var call371 = callmethod(var_ast,"signaturePart", [0]);
  var call372 = callmethod(call371,"new", [2], string369, array370);
  var array368 = new GraceList([
call372,
]);

  lineNumber = 1
  lineNumber = 68
  var call373 = callmethod(var_ast,"methodTypeNode", [0]);
  var call374 = callmethod(call373,"new", [3], string367, array368, var_StringIdentifier);
  lineNumber = 69
  var string375 = new GraceString("&");
  var string377 = new GraceString("&");
  var array378 = new GraceList([
var_BooleanOther,
]);

  lineNumber = 1
  lineNumber = 69
  var call379 = callmethod(var_ast,"signaturePart", [0]);
  var call380 = callmethod(call379,"new", [2], string377, array378);
  var array376 = new GraceList([
call380,
]);

  lineNumber = 1
  lineNumber = 69
  var call381 = callmethod(var_ast,"methodTypeNode", [0]);
  var call382 = callmethod(call381,"new", [3], string375, array376, var_BooleanIdentifier);
  lineNumber = 70
  var string383 = new GraceString("|");
  var string385 = new GraceString("|");
  var array386 = new GraceList([
var_BooleanOther,
]);

  lineNumber = 1
  lineNumber = 70
  var call387 = callmethod(var_ast,"signaturePart", [0]);
  var call388 = callmethod(call387,"new", [2], string385, array386);
  var array384 = new GraceList([
call388,
]);

  lineNumber = 1
  lineNumber = 70
  var call389 = callmethod(var_ast,"methodTypeNode", [0]);
  var call390 = callmethod(call389,"new", [3], string383, array384, var_BooleanIdentifier);
  lineNumber = 71
  var string391 = new GraceString("&&");
  var string393 = new GraceString("&&");
  var array394 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 71
  var call395 = callmethod(var_ast,"signaturePart", [0]);
  var call396 = callmethod(call395,"new", [2], string393, array394);
  var array392 = new GraceList([
call396,
]);

  lineNumber = 1
  lineNumber = 71
  var call397 = callmethod(var_ast,"methodTypeNode", [0]);
  var call398 = callmethod(call397,"new", [3], string391, array392, var_BooleanIdentifier);
  lineNumber = 72
  var string399 = new GraceString("||");
  var string401 = new GraceString("||");
  var array402 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 72
  var call403 = callmethod(var_ast,"signaturePart", [0]);
  var call404 = callmethod(call403,"new", [2], string401, array402);
  var array400 = new GraceList([
call404,
]);

  lineNumber = 1
  lineNumber = 72
  var call405 = callmethod(var_ast,"methodTypeNode", [0]);
  var call406 = callmethod(call405,"new", [3], string399, array400, var_BooleanIdentifier);
  lineNumber = 73
  var string407 = new GraceString("==");
  var string409 = new GraceString("==");
  var array410 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 73
  var call411 = callmethod(var_ast,"signaturePart", [0]);
  var call412 = callmethod(call411,"new", [2], string409, array410);
  var array408 = new GraceList([
call412,
]);

  lineNumber = 1
  lineNumber = 73
  var call413 = callmethod(var_ast,"methodTypeNode", [0]);
  var call414 = callmethod(call413,"new", [3], string407, array408, var_BooleanIdentifier);
  lineNumber = 74
  var string415 = new GraceString("!=");
  var string417 = new GraceString("!=");
  var array418 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 74
  var call419 = callmethod(var_ast,"signaturePart", [0]);
  var call420 = callmethod(call419,"new", [2], string417, array418);
  var array416 = new GraceList([
call420,
]);

  lineNumber = 1
  lineNumber = 74
  var call421 = callmethod(var_ast,"methodTypeNode", [0]);
  var call422 = callmethod(call421,"new", [3], string415, array416, var_BooleanIdentifier);
  lineNumber = 75
  var string423 = new GraceString("/=");
  var string425 = new GraceString("/=");
  var array426 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 75
  var call427 = callmethod(var_ast,"signaturePart", [0]);
  var call428 = callmethod(call427,"new", [2], string425, array426);
  var array424 = new GraceList([
call428,
]);

  lineNumber = 1
  lineNumber = 75
  var call429 = callmethod(var_ast,"methodTypeNode", [0]);
  var call430 = callmethod(call429,"new", [3], string423, array424, var_BooleanIdentifier);
  lineNumber = 76
  var string431 = new GraceString("prefix!");
  var string433 = new GraceString("prefix!");
  lineNumber = 1
  lineNumber = 76
  var call434 = callmethod(var_ast,"signaturePart", [0]);
  var call435 = callmethod(call434,"new", [1], string433);
  var array432 = new GraceList([
call435,
]);

  lineNumber = 1
  lineNumber = 76
  var call436 = callmethod(var_ast,"methodTypeNode", [0]);
  var call437 = callmethod(call436,"new", [3], string431, array432, var_BooleanIdentifier);
  lineNumber = 77
  var string438 = new GraceString("not");
  var string440 = new GraceString("not");
  lineNumber = 1
  lineNumber = 77
  var call441 = callmethod(var_ast,"signaturePart", [0]);
  var call442 = callmethod(call441,"new", [1], string440);
  var array439 = new GraceList([
call442,
]);

  lineNumber = 1
  lineNumber = 77
  var call443 = callmethod(var_ast,"methodTypeNode", [0]);
  var call444 = callmethod(call443,"new", [3], string438, array439, var_BooleanIdentifier);
  lineNumber = 78
  var string445 = new GraceString("ifTrue");
  var string447 = new GraceString("ifTrue");
  var array448 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 78
  var call449 = callmethod(var_ast,"signaturePart", [0]);
  var call450 = callmethod(call449,"new", [2], string447, array448);
  var array446 = new GraceList([
call450,
]);

  lineNumber = 1
  lineNumber = 78
  var call451 = callmethod(var_ast,"methodTypeNode", [0]);
  var call452 = callmethod(call451,"new", [3], string445, array446, var_BooleanIdentifier);
  lineNumber = 79
  var string453 = new GraceString("asString");
  var string455 = new GraceString("asString");
  lineNumber = 1
  lineNumber = 79
  var call456 = callmethod(var_ast,"signaturePart", [0]);
  var call457 = callmethod(call456,"new", [1], string455);
  var array454 = new GraceList([
call457,
]);

  lineNumber = 1
  lineNumber = 79
  var call458 = callmethod(var_ast,"methodTypeNode", [0]);
  var call459 = callmethod(call458,"new", [3], string453, array454, var_StringIdentifier);
  lineNumber = 80
  var string460 = new GraceString("match");
  var string462 = new GraceString("match");
  var array463 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 80
  var call464 = callmethod(var_ast,"signaturePart", [0]);
  var call465 = callmethod(call464,"new", [2], string462, array463);
  var array461 = new GraceList([
call465,
]);

  lineNumber = 81
  lineNumber = 1
  lineNumber = 80
  var call466 = callmethod(var_ast,"methodTypeNode", [0]);
  var call467 = callmethod(call466,"new", [3], string460, array461, var_DynamicIdentifier);
  var array366 = new GraceList([
call374,
call382,
call390,
call398,
call406,
call414,
call422,
call430,
call437,
call444,
call452,
call459,
call467,
]);

  lineNumber = 82
  lineNumber = 1
  lineNumber = 67
  var call468 = callmethod(var_ast,"typeNode", [0]);
  var call469 = callmethod(call468,"new", [2], string365, array366);
  var var_BooleanType = call469;
  lineNumber = 1
var func470 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 67
  return var_BooleanType
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["BooleanType"] = func470;
  lineNumber = 100
  lineNumber = 82
  var string471 = new GraceString("List");
  lineNumber = 100
  lineNumber = 83
  var string473 = new GraceString("size");
  var string475 = new GraceString("size");
  var array476 = new GraceList([
]);

  lineNumber = 1
  lineNumber = 83
  var call477 = callmethod(var_ast,"signaturePart", [0]);
  var call478 = callmethod(call477,"new", [2], string475, array476);
  var array474 = new GraceList([
call478,
]);

  lineNumber = 1
  lineNumber = 83
  var call479 = callmethod(var_ast,"methodTypeNode", [0]);
  var call480 = callmethod(call479,"new", [3], string473, array474, var_NumberIdentifier);
  lineNumber = 84
  var string481 = new GraceString("at");
  var string483 = new GraceString("at");
  var array484 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 84
  var call485 = callmethod(var_ast,"signaturePart", [0]);
  var call486 = callmethod(call485,"new", [2], string483, array484);
  var array482 = new GraceList([
call486,
]);

  lineNumber = 1
  lineNumber = 84
  var call487 = callmethod(var_ast,"methodTypeNode", [0]);
  var call488 = callmethod(call487,"new", [3], string481, array482, var_TopOther);
  lineNumber = 85
  var string489 = new GraceString("[]");
  var string491 = new GraceString("[]");
  var array492 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 85
  var call493 = callmethod(var_ast,"signaturePart", [0]);
  var call494 = callmethod(call493,"new", [2], string491, array492);
  var array490 = new GraceList([
call494,
]);

  lineNumber = 1
  lineNumber = 85
  var call495 = callmethod(var_ast,"methodTypeNode", [0]);
  var call496 = callmethod(call495,"new", [3], string489, array490, var_TopOther);
  lineNumber = 86
  var string497 = new GraceString("[]:=");
  var string499 = new GraceString("[]:=");
  var array500 = new GraceList([
var_NumberOther,
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 86
  var call501 = callmethod(var_ast,"signaturePart", [0]);
  var call502 = callmethod(call501,"new", [2], string499, array500);
  var array498 = new GraceList([
call502,
]);

  lineNumber = 1
  lineNumber = 86
  var call503 = callmethod(var_ast,"methodTypeNode", [0]);
  var call504 = callmethod(call503,"new", [3], string497, array498, var_TopOther);
  lineNumber = 88
  lineNumber = 87
  var string505 = new GraceString("at()put");
  lineNumber = 88
  lineNumber = 87
  var string507 = new GraceString("at");
  var array508 = new GraceList([
var_NumberOther,
]);

  lineNumber = 1
  lineNumber = 87
  var call509 = callmethod(var_ast,"signaturePart", [0]);
  var call510 = callmethod(call509,"new", [2], string507, array508);
  lineNumber = 88
  var string511 = new GraceString("put");
  var array512 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 88
  var call513 = callmethod(var_ast,"signaturePart", [0]);
  var call514 = callmethod(call513,"new", [2], string511, array512);
  var array506 = new GraceList([
call510,
call514,
]);

  lineNumber = 1
  lineNumber = 87
  var call515 = callmethod(var_ast,"methodTypeNode", [0]);
  var call516 = callmethod(call515,"new", [3], string505, array506, var_TopOther);
  lineNumber = 89
  var string517 = new GraceString("==");
  var string519 = new GraceString("==");
  var array520 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 89
  var call521 = callmethod(var_ast,"signaturePart", [0]);
  var call522 = callmethod(call521,"new", [2], string519, array520);
  var array518 = new GraceList([
call522,
]);

  lineNumber = 1
  lineNumber = 89
  var call523 = callmethod(var_ast,"methodTypeNode", [0]);
  var call524 = callmethod(call523,"new", [3], string517, array518, var_BooleanIdentifier);
  lineNumber = 90
  var string525 = new GraceString("!=");
  var string527 = new GraceString("!=");
  var array528 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 90
  var call529 = callmethod(var_ast,"signaturePart", [0]);
  var call530 = callmethod(call529,"new", [2], string527, array528);
  var array526 = new GraceList([
call530,
]);

  lineNumber = 1
  lineNumber = 90
  var call531 = callmethod(var_ast,"methodTypeNode", [0]);
  var call532 = callmethod(call531,"new", [3], string525, array526, var_BooleanIdentifier);
  lineNumber = 91
  var string533 = new GraceString("/=");
  var string535 = new GraceString("/=");
  var array536 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 91
  var call537 = callmethod(var_ast,"signaturePart", [0]);
  var call538 = callmethod(call537,"new", [2], string535, array536);
  var array534 = new GraceList([
call538,
]);

  lineNumber = 1
  lineNumber = 91
  var call539 = callmethod(var_ast,"methodTypeNode", [0]);
  var call540 = callmethod(call539,"new", [3], string533, array534, var_BooleanIdentifier);
  lineNumber = 92
  var string541 = new GraceString("contains");
  var string543 = new GraceString("contains");
  var array544 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 92
  var call545 = callmethod(var_ast,"signaturePart", [0]);
  var call546 = callmethod(call545,"new", [2], string543, array544);
  var array542 = new GraceList([
call546,
]);

  lineNumber = 1
  lineNumber = 92
  var call547 = callmethod(var_ast,"methodTypeNode", [0]);
  var call548 = callmethod(call547,"new", [3], string541, array542, var_BooleanIdentifier);
  lineNumber = 93
  var string549 = new GraceString("iter");
  var string551 = new GraceString("iter");
  lineNumber = 1
  lineNumber = 93
  var call552 = callmethod(var_ast,"signaturePart", [0]);
  var call553 = callmethod(call552,"new", [1], string551);
  var array550 = new GraceList([
call553,
]);

  lineNumber = 1
  lineNumber = 93
  var call554 = callmethod(var_ast,"methodTypeNode", [0]);
  var call555 = callmethod(call554,"new", [3], string549, array550, var_DynamicIdentifier);
  lineNumber = 94
  var string556 = new GraceString("push");
  var string558 = new GraceString("push");
  var array559 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 94
  var call560 = callmethod(var_ast,"signaturePart", [0]);
  var call561 = callmethod(call560,"new", [2], string558, array559);
  var array557 = new GraceList([
call561,
]);

  lineNumber = 1
  lineNumber = 94
  var call562 = callmethod(var_ast,"methodTypeNode", [0]);
  var call563 = callmethod(call562,"new", [3], string556, array557, var_TopOther);
  lineNumber = 95
  var string564 = new GraceString("pop");
  var string566 = new GraceString("pop");
  lineNumber = 1
  lineNumber = 95
  var call567 = callmethod(var_ast,"signaturePart", [0]);
  var call568 = callmethod(call567,"new", [1], string566);
  var array565 = new GraceList([
call568,
]);

  lineNumber = 1
  lineNumber = 95
  var call569 = callmethod(var_ast,"methodTypeNode", [0]);
  var call570 = callmethod(call569,"new", [3], string564, array565, var_TopOther);
  lineNumber = 96
  var string571 = new GraceString("first");
  var string573 = new GraceString("first");
  lineNumber = 1
  lineNumber = 96
  var call574 = callmethod(var_ast,"signaturePart", [0]);
  var call575 = callmethod(call574,"new", [1], string573);
  var array572 = new GraceList([
call575,
]);

  lineNumber = 1
  lineNumber = 96
  var call576 = callmethod(var_ast,"methodTypeNode", [0]);
  var call577 = callmethod(call576,"new", [3], string571, array572, var_NumberIdentifier);
  lineNumber = 97
  var string578 = new GraceString("last");
  var string580 = new GraceString("last");
  lineNumber = 1
  lineNumber = 97
  var call581 = callmethod(var_ast,"signaturePart", [0]);
  var call582 = callmethod(call581,"new", [1], string580);
  var array579 = new GraceList([
call582,
]);

  lineNumber = 1
  lineNumber = 97
  var call583 = callmethod(var_ast,"methodTypeNode", [0]);
  var call584 = callmethod(call583,"new", [3], string578, array579, var_NumberIdentifier);
  lineNumber = 98
  var string585 = new GraceString("prepended");
  var string587 = new GraceString("prepended");
  var array588 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 98
  var call589 = callmethod(var_ast,"signaturePart", [0]);
  var call590 = callmethod(call589,"new", [2], string587, array588);
  var array586 = new GraceList([
call590,
]);

  lineNumber = 1
  lineNumber = 98
  var call591 = callmethod(var_ast,"methodTypeNode", [0]);
  var call592 = callmethod(call591,"new", [3], string585, array586, var_ListIdentifier);
  lineNumber = 99
  var string593 = new GraceString("indices");
  var string595 = new GraceString("indices");
  lineNumber = 1
  lineNumber = 99
  var call596 = callmethod(var_ast,"signaturePart", [0]);
  var call597 = callmethod(call596,"new", [1], string595);
  var array594 = new GraceList([
call597,
]);

  lineNumber = 1
  lineNumber = 99
  var call598 = callmethod(var_ast,"methodTypeNode", [0]);
  var call599 = callmethod(call598,"new", [3], string593, array594, var_ListIdentifier);
  lineNumber = 100
  var string600 = new GraceString("asString");
  var string602 = new GraceString("asString");
  lineNumber = 1
  lineNumber = 100
  var call603 = callmethod(var_ast,"signaturePart", [0]);
  var call604 = callmethod(call603,"new", [1], string602);
  var array601 = new GraceList([
call604,
]);

  lineNumber = 101
  lineNumber = 1
  lineNumber = 100
  var call605 = callmethod(var_ast,"methodTypeNode", [0]);
  var call606 = callmethod(call605,"new", [3], string600, array601, var_StringIdentifier);
  var array472 = new GraceList([
call480,
call488,
call496,
call504,
call516,
call524,
call532,
call540,
call548,
call555,
call563,
call570,
call577,
call584,
call592,
call599,
call606,
]);

  lineNumber = 102
  lineNumber = 1
  lineNumber = 82
  var call607 = callmethod(var_ast,"typeNode", [0]);
  var call608 = callmethod(call607,"new", [2], string471, array472);
  var var_ListType = call608;
  lineNumber = 1
var func609 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 82
  return var_ListType
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["ListType"] = func609;
  lineNumber = 104
  lineNumber = 102
  var string610 = new GraceString("Void");
  lineNumber = 104
  lineNumber = 103
  var string612 = new GraceString("==");
  var string614 = new GraceString("==");
  var array615 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 103
  var call616 = callmethod(var_ast,"signaturePart", [0]);
  var call617 = callmethod(call616,"new", [2], string614, array615);
  var array613 = new GraceList([
call617,
]);

  lineNumber = 1
  lineNumber = 103
  var call618 = callmethod(var_ast,"methodTypeNode", [0]);
  var call619 = callmethod(call618,"new", [3], string612, array613, var_BooleanIdentifier);
  lineNumber = 104
  var string620 = new GraceString("!=");
  var string622 = new GraceString("!=");
  var array623 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 104
  var call624 = callmethod(var_ast,"signaturePart", [0]);
  var call625 = callmethod(call624,"new", [2], string622, array623);
  var array621 = new GraceList([
call625,
]);

  lineNumber = 105
  lineNumber = 1
  lineNumber = 104
  var call626 = callmethod(var_ast,"methodTypeNode", [0]);
  var call627 = callmethod(call626,"new", [3], string620, array621, var_BooleanIdentifier);
  var array611 = new GraceList([
call619,
call627,
]);

  lineNumber = 106
  lineNumber = 1
  lineNumber = 102
  var call628 = callmethod(var_ast,"typeNode", [0]);
  var call629 = callmethod(call628,"new", [2], string610, array611);
  var var_VoidType = call629;
  lineNumber = 1
var func630 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 102
  return var_VoidType
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["VoidType"] = func630;
  lineNumber = 108
  lineNumber = 106
  var string631 = new GraceString("Nothing");
  lineNumber = 108
  lineNumber = 107
  var string633 = new GraceString("==");
  var string635 = new GraceString("==");
  var array636 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 107
  var call637 = callmethod(var_ast,"signaturePart", [0]);
  var call638 = callmethod(call637,"new", [2], string635, array636);
  var array634 = new GraceList([
call638,
]);

  lineNumber = 1
  lineNumber = 107
  var call639 = callmethod(var_ast,"methodTypeNode", [0]);
  var call640 = callmethod(call639,"new", [3], string633, array634, var_BooleanIdentifier);
  lineNumber = 108
  var string641 = new GraceString("!=");
  var string643 = new GraceString("!=");
  var array644 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 108
  var call645 = callmethod(var_ast,"signaturePart", [0]);
  var call646 = callmethod(call645,"new", [2], string643, array644);
  var array642 = new GraceList([
call646,
]);

  lineNumber = 109
  lineNumber = 1
  lineNumber = 108
  var call647 = callmethod(var_ast,"methodTypeNode", [0]);
  var call648 = callmethod(call647,"new", [3], string641, array642, var_BooleanIdentifier);
  var array632 = new GraceList([
call640,
call648,
]);

  lineNumber = 110
  lineNumber = 1
  lineNumber = 106
  var call649 = callmethod(var_ast,"typeNode", [0]);
  var call650 = callmethod(call649,"new", [2], string631, array632);
  var var_NothingType = call650;
  lineNumber = 1
var func651 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 106
  return var_NothingType
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["NothingType"] = func651;
  lineNumber = 112
  lineNumber = 110
  var string652 = new GraceString("None");
  lineNumber = 112
  lineNumber = 111
  var string654 = new GraceString("==");
  var string656 = new GraceString("==");
  var array657 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 111
  var call658 = callmethod(var_ast,"signaturePart", [0]);
  var call659 = callmethod(call658,"new", [2], string656, array657);
  var array655 = new GraceList([
call659,
]);

  lineNumber = 1
  lineNumber = 111
  var call660 = callmethod(var_ast,"methodTypeNode", [0]);
  var call661 = callmethod(call660,"new", [3], string654, array655, var_BooleanIdentifier);
  lineNumber = 112
  var string662 = new GraceString("!=");
  var string664 = new GraceString("!=");
  var array665 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 112
  var call666 = callmethod(var_ast,"signaturePart", [0]);
  var call667 = callmethod(call666,"new", [2], string664, array665);
  var array663 = new GraceList([
call667,
]);

  lineNumber = 113
  lineNumber = 1
  lineNumber = 112
  var call668 = callmethod(var_ast,"methodTypeNode", [0]);
  var call669 = callmethod(call668,"new", [3], string662, array663, var_BooleanIdentifier);
  var array653 = new GraceList([
call661,
call669,
]);

  lineNumber = 114
  lineNumber = 1
  lineNumber = 110
  var call670 = callmethod(var_ast,"typeNode", [0]);
  var call671 = callmethod(call670,"new", [2], string652, array653);
  var var_NoneType = call671;
  lineNumber = 1
var func672 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 110
  return var_NoneType
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["NoneType"] = func672;
  lineNumber = 118
  lineNumber = 114
  var string673 = new GraceString("Block");
  lineNumber = 118
  lineNumber = 115
  var string675 = new GraceString("==");
  var string677 = new GraceString("==");
  var array678 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 115
  var call679 = callmethod(var_ast,"signaturePart", [0]);
  var call680 = callmethod(call679,"new", [2], string677, array678);
  var array676 = new GraceList([
call680,
]);

  lineNumber = 1
  lineNumber = 115
  var call681 = callmethod(var_ast,"methodTypeNode", [0]);
  var call682 = callmethod(call681,"new", [3], string675, array676, var_BooleanIdentifier);
  lineNumber = 116
  var string683 = new GraceString("!=");
  var string685 = new GraceString("!=");
  var array686 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 116
  var call687 = callmethod(var_ast,"signaturePart", [0]);
  var call688 = callmethod(call687,"new", [2], string685, array686);
  var array684 = new GraceList([
call688,
]);

  lineNumber = 1
  lineNumber = 116
  var call689 = callmethod(var_ast,"methodTypeNode", [0]);
  var call690 = callmethod(call689,"new", [3], string683, array684, var_BooleanIdentifier);
  lineNumber = 117
  var string691 = new GraceString("apply");
  var string693 = new GraceString("apply");
  lineNumber = 1
  lineNumber = 117
  var call694 = callmethod(var_ast,"signaturePart", [0]);
  var call695 = callmethod(call694,"new", [1], string693);
  var array692 = new GraceList([
call695,
]);

  lineNumber = 1
  lineNumber = 117
  var call696 = callmethod(var_ast,"methodTypeNode", [0]);
  var call697 = callmethod(call696,"new", [3], string691, array692, var_TopOther);
  lineNumber = 118
  var string698 = new GraceString("match");
  var string700 = new GraceString("match");
  lineNumber = 1
  lineNumber = 118
  var call701 = callmethod(var_ast,"signaturePart", [0]);
  var call702 = callmethod(call701,"new", [1], string700);
  var array699 = new GraceList([
call702,
]);

  lineNumber = 119
  lineNumber = 1
  lineNumber = 118
  var call703 = callmethod(var_ast,"methodTypeNode", [0]);
  var call704 = callmethod(call703,"new", [3], string698, array699, var_TopOther);
  var array674 = new GraceList([
call682,
call690,
call697,
call704,
]);

  lineNumber = 120
  lineNumber = 1
  lineNumber = 114
  var call705 = callmethod(var_ast,"typeNode", [0]);
  var call706 = callmethod(call705,"new", [2], string673, array674);
  var var_BlockType = call706;
  lineNumber = 1
var func707 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 114
  return var_BlockType
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["BlockType"] = func707;
  lineNumber = 120
  var string708 = new GraceString("outer");
  var string710 = new GraceString("outer");
  lineNumber = 1
  lineNumber = 120
  var call711 = callmethod(var_ast,"signaturePart", [0]);
  var call712 = callmethod(call711,"new", [1], string710);
  var array709 = new GraceList([
call712,
]);

  lineNumber = 121
  lineNumber = 1
  lineNumber = 120
  var call713 = callmethod(var_ast,"methodTypeNode", [0]);
  var call714 = callmethod(call713,"new", [3], string708, array709, var_DynamicType);
  var var_outerMethod = call714;
  lineNumber = 1
var func715 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 120
  return var_outerMethod
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["outerMethod"] = func715;
  lineNumber = 123
  lineNumber = 121
  var bool716 = new GraceBoolean(false)
  var var_currentReturnType = bool716;
  lineNumber = 1
var func717 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 121
  return var_currentReturnType
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["currentReturnType"] = func717;
  lineNumber = 1
var func718 = function(argcv) {
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_currentReturnType = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["currentReturnType:="] = func718;
  lineNumber = 123
  lineNumber = 1
var func719 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 123
  return var_Binding
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["Binding"] = func719;
  lineNumber = 1
  var obj720 = Grace_allocObject();
  obj720.outer = this;
    var reader_typechecker_outer721 = function() {
    return this.outer;
  }
  obj720.methods["outer"] = reader_typechecker_outer721;
function obj_init_720() {
  var origSuperDepth = superDepth;
  superDepth = this;
var func722 = function(argcv) {
  var curarg = 1;
  var var_kind__39__ = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var obj723 = Grace_allocObject();
  obj723.outer = this;
    var reader_typechecker_outer724 = function() {
    return this.outer;
  }
  obj723.methods["outer"] = reader_typechecker_outer724;
function obj_init_723() {
  var origSuperDepth = superDepth;
  superDepth = this;
  lineNumber = 124
  obj723.data["kind"] = var_kind__39__;
    var reader_typechecker_kind725 = function() {
    return this.data["kind"];
  }
  obj723.methods["kind"] = reader_typechecker_kind725;
  obj723.data["kind"] = var_kind__39__;
  var writer_typechecker_kind725 = function(argcv, o) {
    this.data["kind"] = o;
  }
  obj723.methods["kind:="] = writer_typechecker_kind725;
obj723.mutable = true;
  lineNumber = 125
  obj723.data["dtype"] = var_DynamicType;
    var reader_typechecker_dtype726 = function() {
    return this.data["dtype"];
  }
  obj723.methods["dtype"] = reader_typechecker_dtype726;
  obj723.data["dtype"] = var_DynamicType;
  var writer_typechecker_dtype726 = function(argcv, o) {
    this.data["dtype"] = o;
  }
  obj723.methods["dtype:="] = writer_typechecker_dtype726;
obj723.mutable = true;
  lineNumber = 126
  var bool727 = new GraceBoolean(false)
  obj723.data["value"] = bool727;
    var reader_typechecker_value728 = function() {
    return this.data["value"];
  }
  obj723.methods["value"] = reader_typechecker_value728;
  obj723.data["value"] = bool727;
  var writer_typechecker_value728 = function(argcv, o) {
    this.data["value"] = o;
  }
  obj723.methods["value:="] = writer_typechecker_value728;
obj723.mutable = true;
  superDepth = origSuperDepth;
}
obj_init_723.apply(obj723, []);
  return obj723
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  obj720.methods["new"] = func722;
  superDepth = origSuperDepth;
}
obj_init_720.apply(obj720, []);
  var var_Binding = obj720;
  lineNumber = 136
var func729 = function(argcv) {
  var curarg = 1;
  var var_name = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 131
  lineNumber = 130
  var bool730 = new GraceBoolean(false)
  var var_ret = bool730;
  lineNumber = 134
  lineNumber = 131
  lineNumber = 134
  var block731 = Grace_allocObject();
  block731.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block731.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block731.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block731.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block731.receiver = this;
  block731.className = 'block<typechecker:134>';
  block731.real = function(
var_sc
) {
  lineNumber = 132
  var call733 = callmethod(var_sc,"contains", [1], var_name);
  if (Grace_isTrue(call733)) {
  lineNumber = 134
  lineNumber = 133
  var bool734 = new GraceBoolean(true)
  var_ret = bool734;
  var if732 = bool734;
}
  return if732;
};
  var call735 = callmethod(Grace_prelude,"for()do", [1, 1], var_scopes, block731);
  lineNumber = 136
  return var_ret
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["haveBinding"] = func729;
  lineNumber = 149
var func736 = function(argcv) {
  var curarg = 1;
  var var_name = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 140
  lineNumber = 139
  var bool737 = new GraceBoolean(false)
  var var_ret = bool737;
  lineNumber = 141
  lineNumber = 140
  var var_scc = var_scopes;
  lineNumber = 143
  lineNumber = 141
  lineNumber = 143
  var block738 = Grace_allocObject();
  block738.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block738.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block738.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block738.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block738.receiver = this;
  block738.className = 'block<typechecker:143>';
  block738.real = function(
var_sc
) {
  lineNumber = 142
  var call740 = callmethod(var_sc,"contains", [1], var_name);
  if (Grace_isTrue(call740)) {
  lineNumber = 143
  var call741 = callmethod(var_sc,"get", [1], var_name);
  var_ret = call741;
  var if739 = call741;
}
  return if739;
};
  var call742 = callmethod(Grace_prelude,"for()do", [1, 1], var_scopes, block738);
  lineNumber = 147
  lineNumber = 149
  lineNumber = 146
  var bool744 = new GraceBoolean(false)
  var opresult746 = callmethod(var_ret, "==", [1], bool744);
  if (Grace_isTrue(opresult746)) {
  lineNumber = 147
  var string747 = new GraceString("undef");
  var call748 = callmethod(var_Binding,"new", [1], string747);
  var_ret = call748;
  var if743 = call748;
}
  lineNumber = 149
  return var_ret
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["findName"] = func736;
  lineNumber = 170
var func749 = function(argcv) {
  var curarg = 1;
  var var_name = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 152
  var string750 = new GraceString("self");
  var bool751 = new GraceBoolean(false)
  lineNumber = 153
  lineNumber = 1
  lineNumber = 152
  var call752 = callmethod(var_ast,"identifierNode", [0]);
  var call753 = callmethod(call752,"new", [2], string750, bool751);
  var var_mem = call753;
  lineNumber = 154
  lineNumber = 1
  lineNumber = 154
  lineNumber = 1
  lineNumber = 153
  var call754 = callmethod(var_scopes,"indices", [0]);
  var call755 = callmethod(call754,"last", [0]);
  var var_lv = call755;
  lineNumber = 155
  lineNumber = 1
  lineNumber = 155
  lineNumber = 1
  lineNumber = 154
  var call756 = callmethod(var_scopes,"indices", [0]);
  var call757 = callmethod(call756,"first", [0]);
  var var_min = call757;
  lineNumber = 164
  lineNumber = 155
  var block758 = Grace_allocObject();
  block758.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block758.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block758.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block758.receiver = this;
  block758.className = 'block<typechecker:155>';
  block758.real = function(
) {
  lineNumber = 1
  lineNumber = 155
  var call759 = callmethod(var_scopes,"at", [1], var_lv);
  var call760 = callmethod(call759,"contains", [1], var_name);
  var call761 = callmethod(call760,"not", [0]);
  return call761;
};
  lineNumber = 164
  var block762 = Grace_allocObject();
  block762.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block762.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block762.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block762.receiver = this;
  block762.className = 'block<typechecker:164>';
  block762.real = function(
) {
  lineNumber = 157
  lineNumber = 156
  var string764 = new GraceString("___is_object");
  var call765 = callmethod(var_scopes,"at", [1], var_lv);
  var call766 = callmethod(call765,"contains", [1], string764);
  if (Grace_isTrue(call766)) {
  lineNumber = 157
  var string767 = new GraceString("outer");
  lineNumber = 158
  lineNumber = 1
  lineNumber = 157
  var call768 = callmethod(var_ast,"memberNode", [0]);
  var call769 = callmethod(call768,"new", [2], string767, var_mem);
  var_mem = call769;
  var if763 = call769;
}
  lineNumber = 160
  lineNumber = 159
  var string771 = new GraceString("___is_class");
  var call772 = callmethod(var_scopes,"at", [1], var_lv);
  var call773 = callmethod(call772,"contains", [1], string771);
  if (Grace_isTrue(call773)) {
  lineNumber = 160
  var string774 = new GraceString("outer");
  lineNumber = 161
  lineNumber = 1
  lineNumber = 160
  var call775 = callmethod(var_ast,"memberNode", [0]);
  var call776 = callmethod(call775,"new", [2], string774, var_mem);
  var_mem = call776;
  var if770 = call776;
}
  lineNumber = 163
  lineNumber = 162
  var diff778 = callmethod(var_lv, "-", [1], new GraceNum(1));
  var_lv = diff778;
  lineNumber = 164
  lineNumber = 166
  lineNumber = 163
  var opresult781 = callmethod(var_lv, "==", [1], var_min);
  if (Grace_isTrue(opresult781)) {
  lineNumber = 164
  var bool782 = new GraceBoolean(false)
  lineNumber = 165
  lineNumber = 1
  lineNumber = 164
  var call783 = callmethod(var_ast,"identifierNode", [0]);
  var call784 = callmethod(call783,"new", [2], var_name, bool782);
  throw new ReturnException(call784, returnTarget);
  var if779 = undefined;
}
  return if779;
};
  var call785 = callmethod(Grace_prelude,"while()do", [1, 1], block758, block762);
  lineNumber = 170
  lineNumber = 167
  var string787 = new GraceString("___is_prelude");
  var call788 = callmethod(var_scopes,"at", [1], var_lv);
  var call789 = callmethod(call788,"contains", [1], string787);
  if (Grace_isTrue(call789)) {
  lineNumber = 168
  var string790 = new GraceString("prelude");
  var bool791 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 168
  var call792 = callmethod(var_ast,"identifierNode", [0]);
  var call793 = callmethod(call792,"new", [2], string790, bool791);
  lineNumber = 169
  lineNumber = 1
  lineNumber = 168
  var call794 = callmethod(var_ast,"memberNode", [0]);
  var call795 = callmethod(call794,"new", [2], var_name, call793);
  var if786 = call795;
  } else {
  lineNumber = 170
  lineNumber = 171
  lineNumber = 1
  lineNumber = 170
  var call796 = callmethod(var_ast,"memberNode", [0]);
  var call797 = callmethod(call796,"new", [2], var_name, var_mem);
  var if786 = call797;
}
  return if786
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["findDeepMethod"] = func749;
  lineNumber = 176
var func798 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1
  lineNumber = 175
  var call799 = callmethod(var_HashMap,"new", [0]);
  var var_scope = call799;
  lineNumber = 176
  var call800 = callmethod(var_scopes,"push", [1], var_scope);
  return call800
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["pushScope"] = func798;
  lineNumber = 180
var func801 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1
  lineNumber = 180
  var call802 = callmethod(var_scopes,"pop", [0]);
  return call802
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["popScope"] = func801;
  lineNumber = 228
var func803 = function(argcv) {
  var curarg = 1;
  var var_b = arguments[curarg];
  curarg++;
  var var_a = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 186
  lineNumber = 184
  var string805 = new GraceString("IgnoreTypes");
  lineNumber = 187
  lineNumber = 1
  lineNumber = 184
  var call806 = callmethod(var_util,"extensions", [0]);
  var call807 = callmethod(call806,"contains", [1], string805);
  if (Grace_isTrue(call807)) {
  lineNumber = 186
  lineNumber = 185
  return var_DynamicType
  var if804 = undefined;
}
  lineNumber = 189
  lineNumber = 190
  lineNumber = 187
  var bool809 = new GraceBoolean(false)
  var opresult811 = callmethod(var_b, "==", [1], bool809);
  lineNumber = 190
  lineNumber = 187
  var bool812 = new GraceBoolean(false)
  var opresult814 = callmethod(var_a, "==", [1], bool812);
  var opresult816 = callmethod(opresult811, "|", [1], opresult814);
  if (Grace_isTrue(opresult816)) {
  lineNumber = 189
  lineNumber = 188
  var bool817 = new GraceBoolean(true)
  return bool817
  var if808 = undefined;
}
  lineNumber = 192
  lineNumber = 193
  lineNumber = 1
  lineNumber = 190
  var call819 = callmethod(var_a,"value", [0]);
  var string820 = new GraceString("Dynamic");
  var opresult822 = callmethod(call819, "==", [1], string820);
  if (Grace_isTrue(opresult822)) {
  lineNumber = 192
  lineNumber = 191
  var bool823 = new GraceBoolean(true)
  return bool823
  var if818 = undefined;
}
  lineNumber = 195
  lineNumber = 196
  lineNumber = 1
  lineNumber = 193
  var call825 = callmethod(var_b,"value", [0]);
  var string826 = new GraceString("Dynamic");
  var opresult828 = callmethod(call825, "==", [1], string826);
  if (Grace_isTrue(opresult828)) {
  lineNumber = 195
  lineNumber = 194
  var bool829 = new GraceBoolean(true)
  return bool829
  var if824 = undefined;
}
  lineNumber = 203
  lineNumber = 204
  lineNumber = 1
  lineNumber = 204
  lineNumber = 1
  lineNumber = 196
  var call831 = callmethod(var_b,"unionTypes", [0]);
  var call832 = callmethod(call831,"size", [0]);
  var opresult834 = callmethod(call832, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult834)) {
  lineNumber = 200
  lineNumber = 197
  lineNumber = 1
  lineNumber = 197
  var call835 = callmethod(var_b,"unionTypes", [0]);
  lineNumber = 200
  var block836 = Grace_allocObject();
  block836.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block836.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block836.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block836.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block836.receiver = this;
  block836.className = 'block<typechecker:200>';
  block836.real = function(
var_ut
) {
  lineNumber = 198
  lineNumber = 1
  lineNumber = 198
  var call838 = callmethod(this,"findType", [1], var_ut);
  lineNumber = 201
  var call839 = callmethod(this,"conformsType()to", [1, 1], call838, var_a);
  var call840 = callmethod(call839,"not", [0]);
  if (Grace_isTrue(call840)) {
  lineNumber = 200
  lineNumber = 199
  var bool841 = new GraceBoolean(false)
  throw new ReturnException(bool841, returnTarget);
  var if837 = undefined;
}
  return if837;
};
  var call842 = callmethod(Grace_prelude,"for()do", [1, 1], call835, block836);
  lineNumber = 203
  lineNumber = 202
  var bool843 = new GraceBoolean(true)
  return bool843
  var if830 = undefined;
}
  lineNumber = 211
  lineNumber = 212
  lineNumber = 1
  lineNumber = 212
  lineNumber = 1
  lineNumber = 204
  var call845 = callmethod(var_a,"unionTypes", [0]);
  var call846 = callmethod(call845,"size", [0]);
  var opresult848 = callmethod(call846, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult848)) {
  lineNumber = 208
  lineNumber = 205
  lineNumber = 1
  lineNumber = 205
  var call849 = callmethod(var_a,"unionTypes", [0]);
  lineNumber = 208
  var block850 = Grace_allocObject();
  block850.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block850.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block850.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block850.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block850.receiver = this;
  block850.className = 'block<typechecker:208>';
  block850.real = function(
var_ut
) {
  lineNumber = 206
  var call852 = callmethod(this,"findType", [1], var_ut);
  lineNumber = 209
  var call853 = callmethod(this,"conformsType()to", [1, 1], var_b, call852);
  if (Grace_isTrue(call853)) {
  lineNumber = 208
  lineNumber = 207
  var bool854 = new GraceBoolean(true)
  throw new ReturnException(bool854, returnTarget);
  var if851 = undefined;
}
  return if851;
};
  var call855 = callmethod(Grace_prelude,"for()do", [1, 1], call849, block850);
  lineNumber = 211
  lineNumber = 210
  var bool856 = new GraceBoolean(false)
  return bool856
  var if844 = undefined;
}
  lineNumber = 212
  var call857 = callmethod(var_subtype,"conformsType()to", [1, 1], var_b, var_a);
  return call857
  lineNumber = 214
  lineNumber = 213
  var bool858 = new GraceBoolean(true)
  var var_foundall = bool858;
  lineNumber = 225
  lineNumber = 214
  lineNumber = 1
  lineNumber = 214
  var call859 = callmethod(var_a,"methods", [0]);
  lineNumber = 225
  var block860 = Grace_allocObject();
  block860.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block860.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block860.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block860.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block860.receiver = this;
  block860.className = 'block<typechecker:225>';
  block860.real = function(
var_m1
) {
  lineNumber = 215
  lineNumber = 1
  lineNumber = 215
  var call861 = callmethod(var_m1,"rtype", [0]);
  lineNumber = 216
  var call862 = callmethod(this,"findType", [1], call861);
  var var_rtype1 = call862;
  lineNumber = 217
  lineNumber = 216
  var bool863 = new GraceBoolean(false)
  var var_found = bool863;
  lineNumber = 221
  lineNumber = 217
  lineNumber = 1
  lineNumber = 217
  var call864 = callmethod(var_b,"methods", [0]);
  lineNumber = 221
  var block865 = Grace_allocObject();
  block865.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block865.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block865.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block865.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block865.receiver = this;
  block865.className = 'block<typechecker:221>';
  block865.real = function(
var_m2
) {
  lineNumber = 222
  lineNumber = 1
  lineNumber = 218
  var call867 = callmethod(var_m2,"value", [0]);
  lineNumber = 222
  lineNumber = 1
  lineNumber = 218
  var call868 = callmethod(var_m1,"value", [0]);
  var opresult870 = callmethod(call867, "==", [1], call868);
  if (Grace_isTrue(opresult870)) {
  lineNumber = 219
  lineNumber = 1
  lineNumber = 219
  var call871 = callmethod(var_m2,"rtype", [0]);
  lineNumber = 220
  var call872 = callmethod(this,"findType", [1], call871);
  var var_rtype2 = call872;
  lineNumber = 221
  lineNumber = 220
  var bool873 = new GraceBoolean(true)
  var_found = bool873;
  var if866 = bool873;
}
  return if866;
};
  var call874 = callmethod(Grace_prelude,"for()do", [1, 1], call864, block865);
  lineNumber = 225
  lineNumber = 226
  lineNumber = 223
  var call876 = callmethod(var_found,"prefix!", [0]);
  if (Grace_isTrue(call876)) {
  lineNumber = 225
  lineNumber = 224
  var bool877 = new GraceBoolean(false)
  throw new ReturnException(bool877, returnTarget);
  var if875 = undefined;
}
  return if875;
};
  var call878 = callmethod(Grace_prelude,"for()do", [1, 1], call859, block860);
  lineNumber = 228
  lineNumber = 227
  var bool879 = new GraceBoolean(true)
  return bool879
  return undefined
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["conformsType()to"] = func803;
  lineNumber = 451
var func880 = function(argcv) {
  var curarg = 1;
  var var_expr = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 250
  lineNumber = 251
  lineNumber = 1
  lineNumber = 231
  var call882 = callmethod(var_expr,"kind", [0]);
  var string883 = new GraceString("identifier");
  var opresult885 = callmethod(call882, "==", [1], string883);
  if (Grace_isTrue(opresult885)) {
  lineNumber = 234
  lineNumber = 235
  lineNumber = 1
  lineNumber = 232
  var call887 = callmethod(var_expr,"value", [0]);
  var string888 = new GraceString("true");
  var opresult890 = callmethod(call887, "==", [1], string888);
  lineNumber = 235
  lineNumber = 1
  lineNumber = 232
  var call891 = callmethod(var_expr,"value", [0]);
  var string892 = new GraceString("false");
  var opresult894 = callmethod(call891, "==", [1], string892);
  var opresult896 = callmethod(opresult890, "|", [1], opresult894);
  if (Grace_isTrue(opresult896)) {
  lineNumber = 234
  lineNumber = 233
  return var_BooleanType
  var if886 = undefined;
}
  lineNumber = 243
  lineNumber = 246
  lineNumber = 1
  lineNumber = 235
  var call898 = callmethod(var_expr,"dtype", [0]);
  var bool899 = new GraceBoolean(false)
  var opresult901 = callmethod(call898, "/=", [1], bool899);
  if (Grace_isTrue(opresult901)) {
  lineNumber = 243
  lineNumber = 245
  lineNumber = 1
  lineNumber = 245
  lineNumber = 1
  lineNumber = 236
  var call903 = callmethod(var_expr,"dtype", [0]);
  var call904 = callmethod(call903,"kind", [0]);
  var string905 = new GraceString("type");
  var opresult907 = callmethod(call904, "==", [1], string905);
  if (Grace_isTrue(opresult907)) {
  lineNumber = 243
  lineNumber = 244
  lineNumber = 1
  lineNumber = 244
  lineNumber = 1
  lineNumber = 244
  lineNumber = 1
  lineNumber = 237
  var call909 = callmethod(var_expr,"dtype", [0]);
  var call910 = callmethod(call909,"generics", [0]);
  var call911 = callmethod(call910,"size", [0]);
  var opresult913 = callmethod(call911, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult913)) {
  lineNumber = 238
  lineNumber = 1
  lineNumber = 238
  var call914 = callmethod(var_expr,"dtype", [0]);
  lineNumber = 239
  var call915 = callmethod(this,"findType", [1], call914);
  var var_gitype = call915;
  lineNumber = 240
  lineNumber = 239
  lineNumber = 1
  lineNumber = 239
  lineNumber = 1
  lineNumber = 239
  var call916 = callmethod(var_expr,"dtype", [0]);
  var call917 = callmethod(call916,"generics", [0]);
  lineNumber = 240
  var block918 = Grace_allocObject();
  block918.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block918.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block918.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block918.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block918.receiver = this;
  block918.className = 'block<typechecker:240>';
  block918.real = function(
var_gt
) {
  lineNumber = 241
  var call919 = callmethod(this,"betaReduceType", [3], var_gitype, var_gt, var_DynamicType);
  var_gitype = call919;
  return call919;
};
  var call920 = callmethod(Grace_prelude,"for()do", [1, 1], call917, block918);
  lineNumber = 243
  lineNumber = 242
  return var_gitype
  var if908 = undefined;
}
  var if902 = if908;
}
  var if897 = if902;
}
  lineNumber = 248
  lineNumber = 249
  lineNumber = 1
  lineNumber = 246
  var call922 = callmethod(var_expr,"value", [0]);
  var string923 = new GraceString("self");
  var opresult925 = callmethod(call922, "==", [1], string923);
  if (Grace_isTrue(opresult925)) {
  lineNumber = 248
  lineNumber = 1
  lineNumber = 247
  var call926 = callmethod(var_selftypes,"last", [0]);
  return call926
  var if921 = undefined;
}
  lineNumber = 250
  lineNumber = 1
  lineNumber = 249
  var call927 = callmethod(var_expr,"dtype", [0]);
  return call927
  var if881 = undefined;
}
  lineNumber = 253
  lineNumber = 254
  lineNumber = 1
  lineNumber = 251
  var call929 = callmethod(var_expr,"kind", [0]);
  var string930 = new GraceString("num");
  var opresult932 = callmethod(call929, "==", [1], string930);
  if (Grace_isTrue(opresult932)) {
  lineNumber = 253
  lineNumber = 252
  return var_NumberType
  var if928 = undefined;
}
  lineNumber = 256
  lineNumber = 257
  lineNumber = 1
  lineNumber = 254
  var call934 = callmethod(var_expr,"kind", [0]);
  var string935 = new GraceString("string");
  var opresult937 = callmethod(call934, "==", [1], string935);
  if (Grace_isTrue(opresult937)) {
  lineNumber = 256
  lineNumber = 255
  return var_StringType
  var if933 = undefined;
}
  lineNumber = 259
  lineNumber = 260
  lineNumber = 1
  lineNumber = 257
  var call939 = callmethod(var_expr,"kind", [0]);
  var string940 = new GraceString("array");
  var opresult942 = callmethod(call939, "==", [1], string940);
  if (Grace_isTrue(opresult942)) {
  lineNumber = 259
  lineNumber = 258
  return var_ListType
  var if938 = undefined;
}
  lineNumber = 262
  lineNumber = 263
  lineNumber = 1
  lineNumber = 260
  var call944 = callmethod(var_expr,"kind", [0]);
  var string945 = new GraceString("block");
  var opresult947 = callmethod(call944, "==", [1], string945);
  if (Grace_isTrue(opresult947)) {
  lineNumber = 262
  lineNumber = 261
  return var_BlockType
  var if943 = undefined;
}
  lineNumber = 299
  lineNumber = 300
  lineNumber = 1
  lineNumber = 263
  var call949 = callmethod(var_expr,"kind", [0]);
  var string950 = new GraceString("op");
  var opresult952 = callmethod(call949, "==", [1], string950);
  if (Grace_isTrue(opresult952)) {
  lineNumber = 265
  lineNumber = 1
  lineNumber = 264
  var call953 = callmethod(var_expr,"value", [0]);
  var var_opname = call953;
  lineNumber = 266
  lineNumber = 1
  lineNumber = 265
  var call954 = callmethod(var_expr,"left", [0]);
  var var_opreceiver = call954;
  lineNumber = 267
  lineNumber = 1
  lineNumber = 266
  var call955 = callmethod(var_expr,"right", [0]);
  var var_opargument = call955;
  lineNumber = 267
  lineNumber = 1
  lineNumber = 267
  var call956 = callmethod(var_expr,"left", [0]);
  lineNumber = 268
  var call957 = callmethod(this,"expressionType", [1], call956);
  var var_opreceivertype = call957;
  lineNumber = 1
  lineNumber = 268
  var call958 = callmethod(var_expr,"right", [0]);
  lineNumber = 269
  var call959 = callmethod(this,"expressionType", [1], call958);
  var var_opargumenttype = call959;
  lineNumber = 271
  lineNumber = 272
  lineNumber = 269
  var bool961 = new GraceBoolean(false)
  var opresult963 = callmethod(var_opreceivertype, "==", [1], bool961);
  if (Grace_isTrue(opresult963)) {
  lineNumber = 271
  lineNumber = 270
  return var_DynamicType
  var if960 = undefined;
}
  lineNumber = 274
  lineNumber = 275
  lineNumber = 1
  lineNumber = 272
  var call965 = callmethod(var_opreceivertype,"value", [0]);
  var string966 = new GraceString("Dynamic");
  var opresult968 = callmethod(call965, "==", [1], string966);
  if (Grace_isTrue(opresult968)) {
  lineNumber = 274
  lineNumber = 273
  return var_DynamicType
  var if964 = undefined;
}
  lineNumber = 276
  lineNumber = 275
  var bool969 = new GraceBoolean(false)
  var var_opfound = bool969;
  lineNumber = 277
  lineNumber = 276
  var bool970 = new GraceBoolean(false)
  var var_opmeth = bool970;
  lineNumber = 281
  lineNumber = 277
  lineNumber = 1
  lineNumber = 277
  var call971 = callmethod(var_opreceivertype,"methods", [0]);
  lineNumber = 281
  var block972 = Grace_allocObject();
  block972.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block972.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block972.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block972.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block972.receiver = this;
  block972.className = 'block<typechecker:281>';
  block972.real = function(
var_m
) {
  lineNumber = 282
  lineNumber = 1
  lineNumber = 278
  var call974 = callmethod(var_m,"value", [0]);
  var opresult976 = callmethod(call974, "==", [1], var_opname);
  if (Grace_isTrue(opresult976)) {
  lineNumber = 280
  lineNumber = 279
  var bool977 = new GraceBoolean(true)
  var_opfound = bool977;
  lineNumber = 281
  lineNumber = 280
  var_opmeth = var_m;
  var if973 = var_m;
}
  return if973;
};
  var call978 = callmethod(Grace_prelude,"for()do", [1, 1], call971, block972);
  lineNumber = 284
  lineNumber = 286
  lineNumber = 1
  lineNumber = 283
  var call980 = callmethod(var_opfound,"not", [0]);
  if (Grace_isTrue(call980)) {
  lineNumber = 284
  var string981 = new GraceString("no such operator '");
  var opresult983 = callmethod(string981, "++", [1], var_opname);
  var string984 = new GraceString("' in ");
  var opresult986 = callmethod(opresult983, "++", [1], string984);
  lineNumber = 1
  lineNumber = 284
  var call987 = callmethod(var_opreceivertype,"value", [0]);
  var opresult989 = callmethod(opresult986, "++", [1], call987);
  var string990 = new GraceString("");
  var opresult992 = callmethod(opresult989, "++", [1], string990);
  var call993 = callmethod(var_util,"type_error", [1], opresult992);
  var if979 = call993;
}
  lineNumber = 287
  lineNumber = 1
  lineNumber = 287
  lineNumber = 1
  lineNumber = 287
  lineNumber = 1
  lineNumber = 287
  lineNumber = 1
  lineNumber = 287
  lineNumber = 1
  lineNumber = 286
  var call994 = callmethod(var_opmeth,"signature", [0]);
  var call995 = callmethod(call994,"first", [0]);
  var call996 = callmethod(call995,"params", [0]);
  var call997 = callmethod(call996,"first", [0]);
  var call998 = callmethod(call997,"dtype", [0]);
  var var_opparamtypeid = call998;
  lineNumber = 289
  lineNumber = 291
  lineNumber = 287
  var bool1000 = new GraceBoolean(false)
  var opresult1002 = callmethod(bool1000, "!=", [1], var_opparamtypeid);
  if (Grace_isTrue(opresult1002)) {
  lineNumber = 288
  lineNumber = 1
  lineNumber = 288
  var call1003 = callmethod(var_opparamtypeid,"value", [0]);
  var call1004 = callmethod(this,"findName", [1], call1003);
  var if999 = call1004;
  } else {
  lineNumber = 289
  var obj1005 = Grace_allocObject();
  obj1005.outer = this;
    var reader_typechecker_outer1006 = function() {
    return this.outer;
  }
  obj1005.methods["outer"] = reader_typechecker_outer1006;
function obj_init_1005() {
  var origSuperDepth = superDepth;
  superDepth = this;
  var obj1007 = Grace_allocObject();
  obj1007.outer = obj1005;
    var reader_typechecker_outer1008 = function() {
    return this.outer;
  }
  obj1007.methods["outer"] = reader_typechecker_outer1008;
function obj_init_1007() {
  var origSuperDepth = superDepth;
  superDepth = this;
  var string1009 = new GraceString("Dynamic");
  obj1007.data["value"] = string1009;
    var reader_typechecker_value1010 = function() {
    return this.data["value"];
  }
  reader_typechecker_value1010.def = true;
  obj1007.methods["value"] = reader_typechecker_value1010;
  superDepth = origSuperDepth;
}
obj_init_1007.apply(obj1007, []);
  obj1005.data["value"] = obj1007;
    var reader_typechecker_value1011 = function() {
    return this.data["value"];
  }
  reader_typechecker_value1011.def = true;
  obj1005.methods["value"] = reader_typechecker_value1011;
  superDepth = origSuperDepth;
}
obj_init_1005.apply(obj1005, []);
  var if999 = obj1005;
}
  var var_opparamtypebd = if999;
  lineNumber = 294
  lineNumber = 291
  lineNumber = 1
  lineNumber = 291
  lineNumber = 1
  lineNumber = 291
  var call1013 = callmethod(var_opparamtypebd,"value", [0]);
  lineNumber = 296
  var call1014 = callmethod(this,"conformsType()to", [1, 1], var_opargumenttype, call1013);
  var call1015 = callmethod(call1014,"not", [0]);
  if (Grace_isTrue(call1015)) {
  lineNumber = 294
  lineNumber = 292
  var string1016 = new GraceString("passed argument of type ");
  lineNumber = 294
  lineNumber = 293
  var string1017 = new GraceString("");
  lineNumber = 294
  lineNumber = 1
  lineNumber = 293
  var call1018 = callmethod(var_opargumenttype,"value", [0]);
  var opresult1020 = callmethod(string1017, "++", [1], call1018);
  var string1021 = new GraceString(" to parameter of type ");
  var opresult1023 = callmethod(opresult1020, "++", [1], string1021);
  var opresult1025 = callmethod(string1016, "++", [1], opresult1023);
  lineNumber = 294
  lineNumber = 1
  lineNumber = 294
  lineNumber = 1
  lineNumber = 294
  var call1026 = callmethod(var_opparamtypebd,"value", [0]);
  var call1027 = callmethod(call1026,"value", [0]);
  var opresult1029 = callmethod(opresult1025, "++", [1], call1027);
  lineNumber = 292
  var call1030 = callmethod(var_util,"type_error", [1], opresult1029);
  var if1012 = call1030;
}
  lineNumber = 297
  lineNumber = 1
  lineNumber = 296
  var call1031 = callmethod(var_opmeth,"rtype", [0]);
  var var_opreturntypeid = call1031;
  lineNumber = 297
  lineNumber = 1
  lineNumber = 297
  var call1032 = callmethod(var_opreturntypeid,"value", [0]);
  lineNumber = 298
  var call1033 = callmethod(this,"findName", [1], call1032);
  var var_opreturntypebd = call1033;
  lineNumber = 299
  lineNumber = 1
  lineNumber = 298
  var call1034 = callmethod(var_opreturntypebd,"value", [0]);
  return call1034
  var if948 = undefined;
}
  lineNumber = 331
  lineNumber = 332
  lineNumber = 1
  lineNumber = 300
  var call1036 = callmethod(var_expr,"kind", [0]);
  var string1037 = new GraceString("member");
  var opresult1039 = callmethod(call1036, "==", [1], string1037);
  if (Grace_isTrue(opresult1039)) {
  lineNumber = 302
  lineNumber = 1
  lineNumber = 301
  var call1040 = callmethod(var_expr,"value", [0]);
  var var_memname = call1040;
  lineNumber = 303
  lineNumber = 1
  lineNumber = 302
  var call1041 = callmethod(var_expr,"in", [0]);
  var var_memin = call1041;
  lineNumber = 303
  lineNumber = 304
  var call1042 = callmethod(this,"expressionType", [1], var_memin);
  var var_memreceivertype = call1042;
  lineNumber = 306
  lineNumber = 307
  lineNumber = 304
  var bool1044 = new GraceBoolean(false)
  var opresult1046 = callmethod(var_memreceivertype, "==", [1], bool1044);
  if (Grace_isTrue(opresult1046)) {
  lineNumber = 306
  lineNumber = 305
  return var_DynamicType
  var if1043 = undefined;
}
  lineNumber = 309
  lineNumber = 310
  lineNumber = 1
  lineNumber = 307
  var call1048 = callmethod(var_memreceivertype,"value", [0]);
  var string1049 = new GraceString("Dynamic");
  var opresult1051 = callmethod(call1048, "==", [1], string1049);
  if (Grace_isTrue(opresult1051)) {
  lineNumber = 309
  lineNumber = 308
  return var_DynamicType
  var if1047 = undefined;
}
  lineNumber = 311
  lineNumber = 310
  var bool1052 = new GraceBoolean(false)
  var var_memfound = bool1052;
  lineNumber = 312
  lineNumber = 311
  var bool1053 = new GraceBoolean(false)
  var var_memmeth = bool1053;
  lineNumber = 316
  lineNumber = 312
  lineNumber = 1
  lineNumber = 312
  var call1054 = callmethod(var_memreceivertype,"methods", [0]);
  lineNumber = 316
  var block1055 = Grace_allocObject();
  block1055.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1055.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1055.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1055.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1055.receiver = this;
  block1055.className = 'block<typechecker:316>';
  block1055.real = function(
var_m
) {
  lineNumber = 317
  lineNumber = 1
  lineNumber = 313
  var call1057 = callmethod(var_m,"value", [0]);
  var opresult1059 = callmethod(call1057, "==", [1], var_memname);
  if (Grace_isTrue(opresult1059)) {
  lineNumber = 315
  lineNumber = 314
  var bool1060 = new GraceBoolean(true)
  var_memfound = bool1060;
  lineNumber = 316
  lineNumber = 315
  var_memmeth = var_m;
  var if1056 = var_m;
}
  return if1056;
};
  var call1061 = callmethod(Grace_prelude,"for()do", [1, 1], call1054, block1055);
  lineNumber = 319
  lineNumber = 321
  lineNumber = 1
  lineNumber = 318
  var call1063 = callmethod(var_memfound,"not", [0]);
  if (Grace_isTrue(call1063)) {
  lineNumber = 319
  var string1064 = new GraceString("no such method '");
  var opresult1066 = callmethod(string1064, "++", [1], var_memname);
  var string1067 = new GraceString("' in ");
  var opresult1069 = callmethod(opresult1066, "++", [1], string1067);
  lineNumber = 1
  lineNumber = 319
  var call1070 = callmethod(var_memreceivertype,"value", [0]);
  var opresult1072 = callmethod(opresult1069, "++", [1], call1070);
  var string1073 = new GraceString("");
  var opresult1075 = callmethod(opresult1072, "++", [1], string1073);
  var call1076 = callmethod(var_util,"type_error", [1], opresult1075);
  var if1062 = call1076;
}
  lineNumber = 323
  lineNumber = 325
  lineNumber = 1
  lineNumber = 325
  lineNumber = 1
  lineNumber = 325
  lineNumber = 1
  lineNumber = 325
  lineNumber = 1
  lineNumber = 321
  var call1078 = callmethod(var_memmeth,"signature", [0]);
  var call1079 = callmethod(call1078,"first", [0]);
  var call1080 = callmethod(call1079,"params", [0]);
  var call1081 = callmethod(call1080,"size", [0]);
  var opresult1083 = callmethod(call1081, "/=", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1083)) {
  lineNumber = 323
  lineNumber = 322
  var string1084 = new GraceString("method '");
  var opresult1086 = callmethod(string1084, "++", [1], var_memname);
  var string1087 = new GraceString("' in ");
  var opresult1089 = callmethod(opresult1086, "++", [1], string1087);
  lineNumber = 323
  lineNumber = 1
  lineNumber = 322
  var call1090 = callmethod(var_memreceivertype,"value", [0]);
  var opresult1092 = callmethod(opresult1089, "++", [1], call1090);
  var string1093 = new GraceString(" ");
  var opresult1095 = callmethod(opresult1092, "++", [1], string1093);
  lineNumber = 323
  var string1096 = new GraceString("requires ");
  lineNumber = 1
  lineNumber = 323
  lineNumber = 1
  lineNumber = 323
  lineNumber = 1
  lineNumber = 323
  lineNumber = 1
  lineNumber = 323
  var call1097 = callmethod(var_memmeth,"signature", [0]);
  var call1098 = callmethod(call1097,"first", [0]);
  var call1099 = callmethod(call1098,"params", [0]);
  var call1100 = callmethod(call1099,"size", [0]);
  var opresult1102 = callmethod(string1096, "++", [1], call1100);
  var string1103 = new GraceString(" arguments, not 0");
  var opresult1105 = callmethod(opresult1102, "++", [1], string1103);
  var opresult1107 = callmethod(opresult1095, "++", [1], opresult1105);
  lineNumber = 322
  var call1108 = callmethod(var_util,"type_error", [1], opresult1107);
  var if1077 = call1108;
}
  lineNumber = 326
  lineNumber = 1
  lineNumber = 325
  var call1109 = callmethod(var_memmeth,"rtype", [0]);
  var var_memreturntypeid = call1109;
  lineNumber = 328
  lineNumber = 329
  lineNumber = 1
  lineNumber = 326
  var call1111 = callmethod(var_memreturntypeid,"kind", [0]);
  var string1112 = new GraceString("type");
  var opresult1114 = callmethod(call1111, "==", [1], string1112);
  if (Grace_isTrue(opresult1114)) {
  lineNumber = 328
  lineNumber = 327
  return var_memreturntypeid
  var if1110 = undefined;
}
  lineNumber = 329
  lineNumber = 1
  lineNumber = 329
  var call1115 = callmethod(var_memreturntypeid,"value", [0]);
  lineNumber = 330
  var call1116 = callmethod(this,"findName", [1], call1115);
  var var_memreturntypebd = call1116;
  lineNumber = 331
  lineNumber = 1
  lineNumber = 330
  var call1117 = callmethod(var_memreturntypebd,"value", [0]);
  return call1117
  var if1035 = undefined;
}
  lineNumber = 390
  lineNumber = 391
  lineNumber = 1
  lineNumber = 332
  var call1119 = callmethod(var_expr,"kind", [0]);
  var string1120 = new GraceString("call");
  var opresult1122 = callmethod(call1119, "==", [1], string1120);
  if (Grace_isTrue(opresult1122)) {
  lineNumber = 334
  lineNumber = 1
  lineNumber = 333
  var call1123 = callmethod(var_expr,"value", [0]);
  var var_callmem = call1123;
  lineNumber = 336
  lineNumber = 337
  lineNumber = 1
  lineNumber = 334
  var call1125 = callmethod(var_callmem,"kind", [0]);
  var string1126 = new GraceString("member");
  var opresult1128 = callmethod(call1125, "/=", [1], string1126);
  if (Grace_isTrue(opresult1128)) {
  lineNumber = 336
  lineNumber = 335
  return var_DynamicType
  var if1124 = undefined;
}
  lineNumber = 338
  lineNumber = 1
  lineNumber = 337
  var call1129 = callmethod(var_callmem,"value", [0]);
  var var_callname = call1129;
  lineNumber = 339
  lineNumber = 1
  lineNumber = 338
  var call1130 = callmethod(var_callmem,"in", [0]);
  var var_callin = call1130;
  lineNumber = 339
  lineNumber = 340
  var call1131 = callmethod(this,"expressionType", [1], var_callin);
  var var_callreceivertype = call1131;
  lineNumber = 342
  lineNumber = 343
  lineNumber = 340
  var bool1133 = new GraceBoolean(false)
  var opresult1135 = callmethod(var_callreceivertype, "==", [1], bool1133);
  if (Grace_isTrue(opresult1135)) {
  lineNumber = 342
  lineNumber = 341
  return var_DynamicType
  var if1132 = undefined;
}
  lineNumber = 345
  lineNumber = 346
  lineNumber = 1
  lineNumber = 343
  var call1137 = callmethod(var_callreceivertype,"value", [0]);
  var string1138 = new GraceString("Dynamic");
  var opresult1140 = callmethod(call1137, "==", [1], string1138);
  if (Grace_isTrue(opresult1140)) {
  lineNumber = 345
  lineNumber = 344
  return var_DynamicType
  var if1136 = undefined;
}
  lineNumber = 347
  lineNumber = 346
  var bool1141 = new GraceBoolean(false)
  var var_callfound = bool1141;
  lineNumber = 348
  lineNumber = 347
  var bool1142 = new GraceBoolean(false)
  var var_callmeth = bool1142;
  lineNumber = 352
  lineNumber = 348
  lineNumber = 1
  lineNumber = 348
  var call1143 = callmethod(var_callreceivertype,"methods", [0]);
  lineNumber = 352
  var block1144 = Grace_allocObject();
  block1144.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1144.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1144.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1144.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1144.receiver = this;
  block1144.className = 'block<typechecker:352>';
  block1144.real = function(
var_m
) {
  lineNumber = 353
  lineNumber = 1
  lineNumber = 349
  var call1146 = callmethod(var_m,"value", [0]);
  var opresult1148 = callmethod(call1146, "==", [1], var_callname);
  if (Grace_isTrue(opresult1148)) {
  lineNumber = 351
  lineNumber = 350
  var bool1149 = new GraceBoolean(true)
  var_callfound = bool1149;
  lineNumber = 352
  lineNumber = 351
  var_callmeth = var_m;
  var if1145 = var_m;
}
  return if1145;
};
  var call1150 = callmethod(Grace_prelude,"for()do", [1, 1], call1143, block1144);
  lineNumber = 355
  lineNumber = 357
  lineNumber = 1
  lineNumber = 354
  var call1152 = callmethod(var_callfound,"not", [0]);
  if (Grace_isTrue(call1152)) {
  lineNumber = 355
  var string1153 = new GraceString("no such method '");
  var opresult1155 = callmethod(string1153, "++", [1], var_callname);
  var string1156 = new GraceString("' in ");
  var opresult1158 = callmethod(opresult1155, "++", [1], string1156);
  lineNumber = 1
  lineNumber = 355
  var call1159 = callmethod(var_callreceivertype,"value", [0]);
  var opresult1161 = callmethod(opresult1158, "++", [1], call1159);
  var string1162 = new GraceString("");
  var opresult1164 = callmethod(opresult1161, "++", [1], string1162);
  var call1165 = callmethod(var_util,"type_error", [1], opresult1164);
  var if1151 = call1165;
}
  lineNumber = 362
  lineNumber = 357
  lineNumber = 1
  lineNumber = 357
  lineNumber = 1
  lineNumber = 357
  var call1166 = callmethod(var_callmeth,"signature", [0]);
  var call1167 = callmethod(call1166,"indices", [0]);
  lineNumber = 362
  var block1168 = Grace_allocObject();
  block1168.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1168.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1168.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1168.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1168.receiver = this;
  block1168.className = 'block<typechecker:362>';
  block1168.real = function(
var_partnr
) {
  lineNumber = 359
  lineNumber = 1
  lineNumber = 358
  var call1169 = callmethod(var_callmeth,"signature", [0]);
  var idxres1170 = call1169.methods["[]"].call(call1169, [1], var_partnr);
  var var_part = idxres1170;
  lineNumber = 362
  lineNumber = 364
  lineNumber = 1
  lineNumber = 364
  lineNumber = 1
  lineNumber = 359
  var call1172 = callmethod(var_part,"params", [0]);
  var call1173 = callmethod(call1172,"size", [0]);
  lineNumber = 364
  lineNumber = 1
  lineNumber = 364
  lineNumber = 1
  lineNumber = 364
  lineNumber = 1
  lineNumber = 359
  var call1174 = callmethod(var_expr,"with", [0]);
  var idxres1175 = call1174.methods["[]"].call(call1174, [1], var_partnr);
  var call1176 = callmethod(idxres1175,"args", [0]);
  var call1177 = callmethod(call1176,"size", [0]);
  var opresult1179 = callmethod(call1173, ">", [1], call1177);
  if (Grace_isTrue(opresult1179)) {
  lineNumber = 362
  lineNumber = 360
  var string1180 = new GraceString("method '");
  var opresult1182 = callmethod(string1180, "++", [1], var_callname);
  var string1183 = new GraceString("' in ");
  var opresult1185 = callmethod(opresult1182, "++", [1], string1183);
  lineNumber = 362
  lineNumber = 1
  lineNumber = 360
  var call1186 = callmethod(var_callreceivertype,"value", [0]);
  var opresult1188 = callmethod(opresult1185, "++", [1], call1186);
  var string1189 = new GraceString(" ");
  var opresult1191 = callmethod(opresult1188, "++", [1], string1189);
  lineNumber = 362
  lineNumber = 361
  var string1192 = new GraceString("requires ");
  lineNumber = 362
  lineNumber = 1
  lineNumber = 362
  lineNumber = 1
  lineNumber = 361
  var call1193 = callmethod(var_part,"args", [0]);
  var call1194 = callmethod(call1193,"size", [0]);
  var opresult1196 = callmethod(string1192, "++", [1], call1194);
  var string1197 = new GraceString(" arguments for part ");
  var opresult1199 = callmethod(opresult1196, "++", [1], string1197);
  var opresult1201 = callmethod(opresult1199, "++", [1], var_partnr);
  var string1202 = new GraceString(", not ");
  var opresult1204 = callmethod(opresult1201, "++", [1], string1202);
  var opresult1206 = callmethod(opresult1191, "++", [1], opresult1204);
  lineNumber = 362
  var string1207 = new GraceString("");
  lineNumber = 1
  lineNumber = 362
  lineNumber = 1
  lineNumber = 362
  lineNumber = 1
  lineNumber = 362
  var call1208 = callmethod(var_expr,"with", [0]);
  var idxres1209 = call1208.methods["[]"].call(call1208, [1], var_partnr);
  var call1210 = callmethod(idxres1209,"args", [0]);
  var call1211 = callmethod(call1210,"size", [0]);
  var opresult1213 = callmethod(string1207, "++", [1], call1211);
  var string1214 = new GraceString("");
  var opresult1216 = callmethod(opresult1213, "++", [1], string1214);
  var opresult1218 = callmethod(opresult1206, "++", [1], opresult1216);
  lineNumber = 360
  var call1219 = callmethod(var_util,"type_error", [1], opresult1218);
  var if1171 = call1219;
}
  return if1171;
};
  var call1220 = callmethod(Grace_prelude,"for()do", [1, 1], call1167, block1168);
  lineNumber = 366
  lineNumber = 1
  lineNumber = 365
  var call1221 = callmethod(var_callmeth,"signature", [0]);
  var var_callsig = call1221;
  lineNumber = 367
  lineNumber = 1
  lineNumber = 366
  var call1222 = callmethod(var_expr,"with", [0]);
  var var_callparts = call1222;
  lineNumber = 379
  lineNumber = 367
  lineNumber = 1
  lineNumber = 367
  var call1223 = callmethod(var_callparts,"indices", [0]);
  lineNumber = 379
  var block1224 = Grace_allocObject();
  block1224.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1224.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1224.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1224.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1224.receiver = this;
  block1224.className = 'block<typechecker:379>';
  block1224.real = function(
var_partnr
) {
  lineNumber = 369
  lineNumber = 1
  lineNumber = 368
  var idxres1225 = var_callsig.methods["[]"].call(var_callsig, [1], var_partnr);
  var call1226 = callmethod(idxres1225,"params", [0]);
  var var_callparams = call1226;
  lineNumber = 370
  lineNumber = 1
  lineNumber = 369
  var idxres1227 = var_callparts.methods["[]"].call(var_callparts, [1], var_partnr);
  var call1228 = callmethod(idxres1227,"args", [0]);
  var var_callargs = call1228;
  lineNumber = 379
  lineNumber = 383
  lineNumber = 1
  lineNumber = 370
  var call1230 = callmethod(var_callparams,"size", [0]);
  var opresult1232 = callmethod(call1230, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1232)) {
  lineNumber = 379
  lineNumber = 371
  lineNumber = 1
  lineNumber = 371
  var call1233 = callmethod(var_callparams,"indices", [0]);
  lineNumber = 379
  var block1234 = Grace_allocObject();
  block1234.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1234.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1234.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1234.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1234.receiver = this;
  block1234.className = 'block<typechecker:379>';
  block1234.real = function(
var_i
) {
  lineNumber = 372
  var call1235 = callmethod(var_callargs,"at", [1], var_i);
  var var_arg = call1235;
  lineNumber = 373
  var call1236 = callmethod(var_callparams,"at", [1], var_i);
  var var_prm = call1236;
  lineNumber = 374
  lineNumber = 375
  var call1237 = callmethod(this,"expressionType", [1], var_arg);
  var var_argtp = call1237;
  lineNumber = 376
  lineNumber = 1
  lineNumber = 375
  var call1238 = callmethod(var_prm,"dtype", [0]);
  var var_prmtypeid = call1238;
  lineNumber = 376
  lineNumber = 377
  var call1239 = callmethod(this,"findType", [1], var_prmtypeid);
  var var_prmtype = call1239;
  lineNumber = 379
  lineNumber = 377
  lineNumber = 1
  lineNumber = 377
  lineNumber = 381
  var call1241 = callmethod(this,"conformsType()to", [1, 1], var_argtp, var_prmtype);
  var call1242 = callmethod(call1241,"not", [0]);
  if (Grace_isTrue(call1242)) {
  lineNumber = 379
  lineNumber = 378
  var string1243 = new GraceString("argument ");
  var opresult1245 = callmethod(string1243, "++", [1], var_i);
  var string1246 = new GraceString(" of '");
  var opresult1248 = callmethod(opresult1245, "++", [1], string1246);
  var opresult1250 = callmethod(opresult1248, "++", [1], var_callname);
  var string1251 = new GraceString("' must be of ");
  var opresult1253 = callmethod(opresult1250, "++", [1], string1251);
  lineNumber = 379
  var string1254 = new GraceString("type ");
  lineNumber = 1
  lineNumber = 379
  var call1255 = callmethod(var_prmtype,"value", [0]);
  var opresult1257 = callmethod(string1254, "++", [1], call1255);
  var string1258 = new GraceString(", given ");
  var opresult1260 = callmethod(opresult1257, "++", [1], string1258);
  lineNumber = 1
  lineNumber = 379
  var call1261 = callmethod(var_argtp,"value", [0]);
  var opresult1263 = callmethod(opresult1260, "++", [1], call1261);
  var string1264 = new GraceString("");
  var opresult1266 = callmethod(opresult1263, "++", [1], string1264);
  var opresult1268 = callmethod(opresult1253, "++", [1], opresult1266);
  lineNumber = 378
  var call1269 = callmethod(var_util,"type_error", [1], opresult1268);
  var if1240 = call1269;
}
  return if1240;
};
  var call1270 = callmethod(Grace_prelude,"for()do", [1, 1], call1233, block1234);
  var if1229 = call1270;
}
  return if1229;
};
  var call1271 = callmethod(Grace_prelude,"for()do", [1, 1], call1223, block1224);
  lineNumber = 385
  lineNumber = 1
  lineNumber = 384
  var call1272 = callmethod(var_callmeth,"rtype", [0]);
  var var_callreturntypeid = call1272;
  lineNumber = 387
  lineNumber = 388
  lineNumber = 1
  lineNumber = 385
  var call1274 = callmethod(var_callreturntypeid,"kind", [0]);
  var string1275 = new GraceString("type");
  var opresult1277 = callmethod(call1274, "==", [1], string1275);
  if (Grace_isTrue(opresult1277)) {
  lineNumber = 387
  lineNumber = 386
  return var_callreturntypeid
  var if1273 = undefined;
}
  lineNumber = 388
  lineNumber = 1
  lineNumber = 388
  var call1278 = callmethod(var_callreturntypeid,"value", [0]);
  lineNumber = 389
  var call1279 = callmethod(this,"findName", [1], call1278);
  var var_callreturntypebd = call1279;
  lineNumber = 390
  lineNumber = 1
  lineNumber = 389
  var call1280 = callmethod(var_callreturntypebd,"value", [0]);
  return call1280
  var if1118 = undefined;
}
  lineNumber = 424
  lineNumber = 425
  lineNumber = 1
  lineNumber = 391
  var call1282 = callmethod(var_expr,"kind", [0]);
  var string1283 = new GraceString("object");
  var opresult1285 = callmethod(call1282, "==", [1], string1283);
  if (Grace_isTrue(opresult1285)) {
  lineNumber = 393
  var array1286 = new GraceList([
]);

  var var_objectmeths = array1286;
  var string1287 = new GraceString("<Object_");
  lineNumber = 1
  lineNumber = 393
  var call1288 = callmethod(var_expr,"line", [0]);
  var opresult1290 = callmethod(string1287, "++", [1], call1288);
  var string1291 = new GraceString(">");
  var opresult1293 = callmethod(opresult1290, "++", [1], string1291);
  lineNumber = 394
  lineNumber = 1
  lineNumber = 393
  var call1294 = callmethod(var_ast,"typeNode", [0]);
  var call1295 = callmethod(call1294,"new", [2], opresult1293, var_objectmeths);
  var var_objecttp = call1295;
  lineNumber = 397
  lineNumber = 400
  lineNumber = 1
  lineNumber = 394
  var call1297 = callmethod(var_expr,"superclass", [0]);
  var bool1298 = new GraceBoolean(false)
  var opresult1300 = callmethod(call1297, "/=", [1], bool1298);
  if (Grace_isTrue(opresult1300)) {
  lineNumber = 395
  lineNumber = 1
  lineNumber = 395
  var call1301 = callmethod(var_expr,"superclass", [0]);
  lineNumber = 396
  var call1302 = callmethod(this,"expressionType", [1], call1301);
  var var_supertype = call1302;
  lineNumber = 397
  lineNumber = 396
  lineNumber = 1
  lineNumber = 396
  var call1303 = callmethod(var_supertype,"methods", [0]);
  lineNumber = 397
  var block1304 = Grace_allocObject();
  block1304.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1304.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1304.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1304.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1304.receiver = this;
  block1304.className = 'block<typechecker:397>';
  block1304.real = function(
var_e
) {
  var call1305 = callmethod(var_objectmeths,"push", [1], var_e);
  return call1305;
};
  var call1306 = callmethod(Grace_prelude,"for()do", [1, 1], call1303, block1304);
  var if1296 = call1306;
}
  lineNumber = 417
  lineNumber = 400
  lineNumber = 1
  lineNumber = 400
  var call1307 = callmethod(var_expr,"value", [0]);
  lineNumber = 417
  var block1308 = Grace_allocObject();
  block1308.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1308.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1308.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1308.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1308.receiver = this;
  block1308.className = 'block<typechecker:417>';
  block1308.real = function(
var_e
) {
  lineNumber = 420
  lineNumber = 1
  lineNumber = 401
  var call1310 = callmethod(var_e,"kind", [0]);
  var string1311 = new GraceString("defdec");
  var opresult1313 = callmethod(call1310, "==", [1], string1311);
  if (Grace_isTrue(opresult1313)) {
  lineNumber = 403
  lineNumber = 402
  lineNumber = 1
  lineNumber = 402
  lineNumber = 1
  lineNumber = 402
  var call1314 = callmethod(var_e,"name", [0]);
  var call1315 = callmethod(call1314,"value", [0]);
  lineNumber = 403
  lineNumber = 1
  lineNumber = 403
  lineNumber = 1
  lineNumber = 403
  var call1317 = callmethod(var_e,"name", [0]);
  var call1318 = callmethod(call1317,"value", [0]);
  lineNumber = 1
  lineNumber = 403
  var call1319 = callmethod(var_ast,"signaturePart", [0]);
  var call1320 = callmethod(call1319,"new", [1], call1318);
  var array1316 = new GraceList([
call1320,
]);

  lineNumber = 1
  lineNumber = 403
  var call1321 = callmethod(var_e,"dtype", [0]);
  var call1322 = callmethod(this,"findType", [1], call1321);
  lineNumber = 1
  lineNumber = 402
  var call1323 = callmethod(var_ast,"methodTypeNode", [0]);
  var call1324 = callmethod(call1323,"new", [3], call1315, array1316, call1322);
  var call1325 = callmethod(var_objectmeths,"push", [1], call1324);
  var if1309 = call1325;
  } else {
  lineNumber = 417
  lineNumber = 407
  lineNumber = 1
  lineNumber = 404
  var call1327 = callmethod(var_e,"kind", [0]);
  var string1328 = new GraceString("method");
  var opresult1330 = callmethod(call1327, "==", [1], string1328);
  if (Grace_isTrue(opresult1330)) {
  lineNumber = 406
  lineNumber = 405
  lineNumber = 1
  lineNumber = 405
  lineNumber = 1
  lineNumber = 405
  var call1331 = callmethod(var_e,"value", [0]);
  var call1332 = callmethod(call1331,"value", [0]);
  lineNumber = 1
  lineNumber = 405
  var call1333 = callmethod(var_e,"signature", [0]);
  lineNumber = 406
  lineNumber = 1
  lineNumber = 406
  var call1334 = callmethod(var_e,"dtype", [0]);
  var call1335 = callmethod(this,"findType", [1], call1334);
  lineNumber = 1
  lineNumber = 405
  var call1336 = callmethod(var_ast,"methodTypeNode", [0]);
  var call1337 = callmethod(call1336,"new", [3], call1332, call1333, call1335);
  var call1338 = callmethod(var_objectmeths,"push", [1], call1337);
  var if1326 = call1338;
  } else {
  lineNumber = 417
  lineNumber = 414
  lineNumber = 1
  lineNumber = 407
  var call1340 = callmethod(var_e,"kind", [0]);
  var string1341 = new GraceString("vardec");
  var opresult1343 = callmethod(call1340, "==", [1], string1341);
  if (Grace_isTrue(opresult1343)) {
  lineNumber = 408
  lineNumber = 1
  lineNumber = 408
  var call1344 = callmethod(var_e,"dtype", [0]);
  lineNumber = 409
  var call1345 = callmethod(this,"findType", [1], call1344);
  var var_vtype = call1345;
  lineNumber = 410
  lineNumber = 409
  lineNumber = 1
  lineNumber = 409
  lineNumber = 1
  lineNumber = 409
  var call1346 = callmethod(var_e,"name", [0]);
  var call1347 = callmethod(call1346,"value", [0]);
  lineNumber = 410
  lineNumber = 1
  lineNumber = 410
  lineNumber = 1
  lineNumber = 410
  var call1349 = callmethod(var_e,"name", [0]);
  var call1350 = callmethod(call1349,"value", [0]);
  lineNumber = 1
  lineNumber = 410
  var call1351 = callmethod(var_ast,"signaturePart", [0]);
  var call1352 = callmethod(call1351,"new", [1], call1350);
  var array1348 = new GraceList([
call1352,
]);

  lineNumber = 1
  lineNumber = 409
  var call1353 = callmethod(var_ast,"methodTypeNode", [0]);
  var call1354 = callmethod(call1353,"new", [3], call1347, array1348, var_vtype);
  var call1355 = callmethod(var_objectmeths,"push", [1], call1354);
  lineNumber = 413
  lineNumber = 411
  lineNumber = 1
  lineNumber = 411
  lineNumber = 1
  lineNumber = 411
  var call1356 = callmethod(var_e,"name", [0]);
  var call1357 = callmethod(call1356,"value", [0]);
  var string1358 = new GraceString(":=");
  var opresult1360 = callmethod(call1357, "++", [1], string1358);
  lineNumber = 413
  lineNumber = 412
  lineNumber = 1
  lineNumber = 412
  lineNumber = 1
  lineNumber = 412
  var call1362 = callmethod(var_e,"name", [0]);
  var call1363 = callmethod(call1362,"value", [0]);
  var string1364 = new GraceString(":=");
  var opresult1366 = callmethod(call1363, "++", [1], string1364);
  lineNumber = 413
  var string1368 = new GraceString("_");
  lineNumber = 1
  lineNumber = 413
  var call1369 = callmethod(var_ast,"identifierNode", [0]);
  var call1370 = callmethod(call1369,"new", [2], string1368, var_vtype);
  var array1367 = new GraceList([
call1370,
]);

  lineNumber = 1
  lineNumber = 412
  var call1371 = callmethod(var_ast,"signaturePart", [0]);
  var call1372 = callmethod(call1371,"new", [2], opresult1366, array1367);
  var array1361 = new GraceList([
call1372,
]);

  lineNumber = 413
  var bool1373 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 411
  var call1374 = callmethod(var_ast,"methodTypeNode", [0]);
  var call1375 = callmethod(call1374,"new", [3], opresult1360, array1361, bool1373);
  var call1376 = callmethod(var_objectmeths,"push", [1], call1375);
  var if1339 = call1376;
  } else {
  lineNumber = 417
  lineNumber = 420
  lineNumber = 1
  lineNumber = 414
  var call1378 = callmethod(var_e,"kind", [0]);
  var string1379 = new GraceString("inherits");
  var opresult1381 = callmethod(call1378, "==", [1], string1379);
  if (Grace_isTrue(opresult1381)) {
  lineNumber = 415
  lineNumber = 1
  lineNumber = 415
  var call1382 = callmethod(var_e,"value", [0]);
  var call1383 = callmethod(this,"resolveIdentifiers", [1], call1382);
  lineNumber = 416
  var call1384 = callmethod(this,"expressionType", [1], call1383);
  var var_stype = call1384;
  lineNumber = 417
  lineNumber = 416
  lineNumber = 1
  lineNumber = 416
  var call1385 = callmethod(var_stype,"methods", [0]);
  lineNumber = 417
  var block1386 = Grace_allocObject();
  block1386.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1386.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1386.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1386.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1386.receiver = this;
  block1386.className = 'block<typechecker:417>';
  block1386.real = function(
var_m
) {
  var call1387 = callmethod(var_objectmeths,"push", [1], var_m);
  return call1387;
};
  var call1388 = callmethod(Grace_prelude,"for()do", [1, 1], call1385, block1386);
  var if1377 = call1388;
}
  var if1339 = if1377;
}
  var if1326 = if1339;
}
  var if1309 = if1326;
}
  return if1309;
};
  var call1389 = callmethod(Grace_prelude,"for()do", [1, 1], call1307, block1308);
  lineNumber = 421
  var call1390 = callmethod(var_subtype,"addType", [1], var_objecttp);
  lineNumber = 423
  lineNumber = 1
  lineNumber = 422
  var call1391 = callmethod(var_expr,"otype:=", [1], var_objecttp);
  lineNumber = 424
  lineNumber = 423
  return var_objecttp
  var if1281 = undefined;
}
  lineNumber = 449
  lineNumber = 450
  lineNumber = 1
  lineNumber = 425
  var call1393 = callmethod(var_expr,"kind", [0]);
  var string1394 = new GraceString("generic");
  var opresult1396 = callmethod(call1393, "==", [1], string1394);
  if (Grace_isTrue(opresult1396)) {
  lineNumber = 427
  var var_gtype;
  lineNumber = 428
  var var_gname;
  lineNumber = 437
  lineNumber = 439
  lineNumber = 1
  lineNumber = 439
  lineNumber = 1
  lineNumber = 428
  var call1398 = callmethod(var_expr,"value", [0]);
  var call1399 = callmethod(call1398,"kind", [0]);
  var string1400 = new GraceString("type");
  var opresult1402 = callmethod(call1399, "==", [1], string1400);
  if (Grace_isTrue(opresult1402)) {
  lineNumber = 430
  lineNumber = 1
  lineNumber = 430
  lineNumber = 1
  lineNumber = 429
  var call1403 = callmethod(var_expr,"value", [0]);
  var call1404 = callmethod(call1403,"value", [0]);
  var_gname = call1404;
  lineNumber = 431
  lineNumber = 1
  lineNumber = 430
  var call1405 = callmethod(var_expr,"value", [0]);
  var_gtype = call1405;
  var if1397 = call1405;
  } else {
  lineNumber = 437
  lineNumber = 435
  lineNumber = 1
  lineNumber = 435
  lineNumber = 1
  lineNumber = 431
  var call1407 = callmethod(var_expr,"value", [0]);
  var call1408 = callmethod(call1407,"kind", [0]);
  var string1409 = new GraceString("identifier");
  var opresult1411 = callmethod(call1408, "==", [1], string1409);
  if (Grace_isTrue(opresult1411)) {
  lineNumber = 433
  lineNumber = 1
  lineNumber = 433
  lineNumber = 1
  lineNumber = 432
  var call1412 = callmethod(var_expr,"value", [0]);
  var call1413 = callmethod(call1412,"value", [0]);
  var_gname = call1413;
  lineNumber = 433
  lineNumber = 434
  var call1414 = callmethod(this,"findName", [1], var_gname);
  var var_gidb = call1414;
  lineNumber = 1
  lineNumber = 434
  var call1415 = callmethod(var_gidb,"dtype", [0]);
  lineNumber = 435
  var call1416 = callmethod(this,"findType", [1], call1415);
  var_gtype = call1416;
  var if1406 = call1416;
  } else {
  lineNumber = 437
  lineNumber = 1
  lineNumber = 437
  lineNumber = 1
  lineNumber = 436
  var call1417 = callmethod(var_expr,"value", [0]);
  var call1418 = callmethod(call1417,"value", [0]);
  var_gname = call1418;
  lineNumber = 437
  lineNumber = 1
  lineNumber = 437
  var call1419 = callmethod(var_expr,"value", [0]);
  lineNumber = 438
  var call1420 = callmethod(this,"expressionType", [1], call1419);
  var_gtype = call1420;
  var if1406 = call1420;
}
  var if1397 = if1406;
}
  lineNumber = 440
  lineNumber = 439
  var var_gtb = var_gtype;
  lineNumber = 443
  lineNumber = 440
  lineNumber = 1
  lineNumber = 440
  lineNumber = 1
  lineNumber = 440
  var call1421 = callmethod(var_expr,"params", [0]);
  var call1422 = callmethod(call1421,"indices", [0]);
  lineNumber = 443
  var block1423 = Grace_allocObject();
  block1423.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1423.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1423.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1423.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1423.receiver = this;
  block1423.className = 'block<typechecker:443>';
  block1423.real = function(
var_i
) {
  lineNumber = 441
  lineNumber = 442
  lineNumber = 1
  lineNumber = 441
  var call1424 = callmethod(var_gtb,"generics", [0]);
  var call1425 = callmethod(call1424,"at", [1], var_i);
  var var_tv = call1425;
  lineNumber = 442
  lineNumber = 1
  lineNumber = 442
  var call1426 = callmethod(var_expr,"params", [0]);
  var call1427 = callmethod(call1426,"at", [1], var_i);
  lineNumber = 443
  var call1428 = callmethod(this,"findType", [1], call1427);
  var var_ct = call1428;
  lineNumber = 444
  var call1429 = callmethod(this,"betaReduceType", [3], var_gtype, var_tv, var_ct);
  var_gtype = call1429;
  return call1429;
};
  var call1430 = callmethod(Grace_prelude,"for()do", [1, 1], call1422, block1423);
  lineNumber = 445
  lineNumber = 1
  lineNumber = 445
  var call1431 = callmethod(var_gtype,"methods", [0]);
  lineNumber = 446
  lineNumber = 1
  lineNumber = 445
  var call1432 = callmethod(var_ast,"typeNode", [0]);
  var call1433 = callmethod(call1432,"new", [2], var_gname, call1431);
  var var_nt = call1433;
  lineNumber = 447
  lineNumber = 1
  lineNumber = 447
  lineNumber = 1
  lineNumber = 446
  var call1434 = callmethod(var_expr,"params", [0]);
  var call1435 = callmethod(var_nt,"generics:=", [1], call1434);
  lineNumber = 447
  var call1436 = callmethod(var_subtype,"addType", [1], var_nt);
  lineNumber = 449
  lineNumber = 448
  return var_nt
  var if1392 = undefined;
}
  lineNumber = 451
  lineNumber = 450
  return var_DynamicType
  return undefined
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["expressionType"] = func880;
  lineNumber = 464
var func1437 = function(argcv) {
  var curarg = 1;
  var var_name = arguments[curarg];
  curarg++;
  var var_kd = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 454
  lineNumber = 467
  var call1439 = callmethod(this,"haveBinding", [1], var_name);
  if (Grace_isTrue(call1439)) {
  lineNumber = 455
  lineNumber = 456
  var call1440 = callmethod(this,"findName", [1], var_name);
  var var_namebinding = call1440;
  lineNumber = 464
  lineNumber = 466
  lineNumber = 456
  var string1442 = new GraceString("method");
  var opresult1444 = callmethod(var_kd, "==", [1], string1442);
  lineNumber = 466
  lineNumber = 1
  lineNumber = 456
  var call1445 = callmethod(var_namebinding,"kind", [0]);
  var string1446 = new GraceString("var");
  var opresult1448 = callmethod(call1445, "==", [1], string1446);
  lineNumber = 466
  lineNumber = 1
  lineNumber = 457
  var call1449 = callmethod(var_namebinding,"kind", [0]);
  var string1450 = new GraceString("method");
  var opresult1452 = callmethod(call1449, "==", [1], string1450);
  var opresult1454 = callmethod(opresult1448, "|", [1], opresult1452);
  var opresult1456 = callmethod(opresult1444, "&", [1], opresult1454);
  if (Grace_isTrue(opresult1456)) {
  var if1441 = undefined;
  } else {
  lineNumber = 464
  lineNumber = 459
  var string1458 = new GraceString("ShadowingWarnOnly");
  lineNumber = 461
  lineNumber = 1
  lineNumber = 459
  var call1459 = callmethod(var_util,"extensions", [0]);
  var call1460 = callmethod(call1459,"contains", [1], string1458);
  if (Grace_isTrue(call1460)) {
  lineNumber = 460
  var string1461 = new GraceString("name ");
  var opresult1463 = callmethod(string1461, "++", [1], var_name);
  var string1464 = new GraceString(" shadows lexically enclosing name");
  var opresult1466 = callmethod(opresult1463, "++", [1], string1464);
  var call1467 = callmethod(var_util,"warning", [1], opresult1466);
  var if1457 = call1467;
  } else {
  lineNumber = 464
  lineNumber = 461
  var string1469 = new GraceString("IgnoreShadowing");
  lineNumber = 463
  lineNumber = 1
  lineNumber = 461
  var call1470 = callmethod(var_util,"extensions", [0]);
  var call1471 = callmethod(call1470,"contains", [1], string1469);
  if (Grace_isTrue(call1471)) {
  var if1468 = undefined;
  } else {
  lineNumber = 464
  var string1472 = new GraceString("name ");
  var opresult1474 = callmethod(string1472, "++", [1], var_name);
  var string1475 = new GraceString(" shadows lexically enclosing name");
  var opresult1477 = callmethod(opresult1474, "++", [1], string1475);
  var call1478 = callmethod(var_util,"syntax_error", [1], opresult1477);
  var if1468 = call1478;
}
  var if1457 = if1468;
}
  var if1441 = if1457;
}
  var if1438 = if1441;
}
  return if1438
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["checkShadowing"] = func1437;
  lineNumber = 470
var func1479 = function(argcv) {
  var curarg = 1;
  var var_name = arguments[curarg];
  curarg++;
  var var_binding = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 469
  lineNumber = 1
  lineNumber = 469
  var call1480 = callmethod(var_binding,"kind", [0]);
  lineNumber = 470
  var call1481 = callmethod(this,"checkShadowing", [2], var_name, call1480);
  lineNumber = 471
  lineNumber = 1
  lineNumber = 470
  var call1482 = callmethod(var_scopes,"last", [0]);
  var call1483 = callmethod(call1482,"put", [2], var_name, var_binding);
  return call1483
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["bindName"] = func1479;
  lineNumber = 494
var func1484 = function(argcv) {
  var curarg = 1;
  var var_ident = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 474
  lineNumber = 476
  lineNumber = 1
  lineNumber = 473
  var call1486 = callmethod(var_ident,"kind", [0]);
  var string1487 = new GraceString("call");
  var opresult1489 = callmethod(call1486, "==", [1], string1487);
  if (Grace_isTrue(opresult1489)) {
  lineNumber = 474
  var string1490 = new GraceString("name shadows method");
  var call1491 = callmethod(var_util,"syntax_error", [1], string1490);
  var if1485 = call1491;
}
  lineNumber = 494
  lineNumber = 476
  var string1493 = new GraceString("___is_object");
  lineNumber = 496
  lineNumber = 1
  lineNumber = 476
  var call1494 = callmethod(var_scopes,"last", [0]);
  var call1495 = callmethod(call1494,"contains", [1], string1493);
  if (Grace_isTrue(call1495)) {
  lineNumber = 477
  lineNumber = 1
  lineNumber = 477
  var call1496 = callmethod(var_ident,"value", [0]);
  var string1497 = new GraceString("method");
  lineNumber = 478
  var call1498 = callmethod(this,"checkShadowing", [2], call1496, string1497);
  lineNumber = 1
  lineNumber = 478
  var call1499 = callmethod(var_ident,"value", [0]);
  var string1500 = new GraceString("method");
  var call1501 = callmethod(var_Binding,"new", [1], string1500);
  lineNumber = 479
  lineNumber = 1
  lineNumber = 478
  var call1502 = callmethod(var_scopes,"last", [0]);
  var call1503 = callmethod(call1502,"put", [2], call1499, call1501);
  var if1492 = call1503;
  } else {
  lineNumber = 480
  lineNumber = 1
  lineNumber = 480
  var call1504 = callmethod(var_ident,"value", [0]);
  var string1505 = new GraceString("var");
  lineNumber = 481
  var call1506 = callmethod(this,"checkShadowing", [2], call1504, string1505);
  var string1507 = new GraceString("var");
  var call1508 = callmethod(var_Binding,"new", [1], string1507);
  var var_tmpb = call1508;
  lineNumber = 483
  lineNumber = 482
  var var_tdtype = var_DynamicType;
  lineNumber = 492
  lineNumber = 493
  lineNumber = 1
  lineNumber = 483
  var call1510 = callmethod(var_ident,"dtype", [0]);
  var bool1511 = new GraceBoolean(false)
  var opresult1513 = callmethod(call1510, "==", [1], bool1511);
  if (Grace_isTrue(opresult1513)) {
  var if1509 = undefined;
  } else {
  lineNumber = 492
  lineNumber = 488
  lineNumber = 1
  lineNumber = 488
  lineNumber = 1
  lineNumber = 485
  var call1515 = callmethod(var_ident,"dtype", [0]);
  var call1516 = callmethod(call1515,"kind", [0]);
  var string1517 = new GraceString("identifier");
  var opresult1519 = callmethod(call1516, "==", [1], string1517);
  if (Grace_isTrue(opresult1519)) {
  lineNumber = 486
  lineNumber = 1
  lineNumber = 486
  lineNumber = 1
  lineNumber = 486
  var call1520 = callmethod(var_ident,"dtype", [0]);
  var call1521 = callmethod(call1520,"value", [0]);
  lineNumber = 487
  var call1522 = callmethod(this,"findName", [1], call1521);
  var var_tdb = call1522;
  lineNumber = 488
  lineNumber = 1
  lineNumber = 487
  var call1523 = callmethod(var_tdb,"value", [0]);
  var_tdtype = call1523;
  var if1514 = call1523;
  } else {
  lineNumber = 492
  lineNumber = 490
  lineNumber = 1
  lineNumber = 490
  lineNumber = 1
  lineNumber = 488
  var call1525 = callmethod(var_ident,"dtype", [0]);
  var call1526 = callmethod(call1525,"kind", [0]);
  var string1527 = new GraceString("generic");
  var opresult1529 = callmethod(call1526, "==", [1], string1527);
  if (Grace_isTrue(opresult1529)) {
  lineNumber = 489
  lineNumber = 1
  lineNumber = 489
  var call1530 = callmethod(var_ident,"dtype", [0]);
  var call1531 = callmethod(this,"resolveIdentifiers", [1], call1530);
  lineNumber = 490
  var call1532 = callmethod(this,"findType", [1], call1531);
  var_tdtype = call1532;
  var if1524 = call1532;
  } else {
  lineNumber = 492
  lineNumber = 493
  lineNumber = 1
  lineNumber = 493
  lineNumber = 1
  lineNumber = 490
  var call1534 = callmethod(var_ident,"dtype", [0]);
  var call1535 = callmethod(call1534,"kind", [0]);
  var string1536 = new GraceString("type");
  var opresult1538 = callmethod(call1535, "==", [1], string1536);
  if (Grace_isTrue(opresult1538)) {
  lineNumber = 492
  lineNumber = 1
  lineNumber = 491
  var call1539 = callmethod(var_ident,"dtype", [0]);
  var_tdtype = call1539;
  var if1533 = call1539;
}
  var if1524 = if1533;
}
  var if1514 = if1524;
}
  var if1509 = if1514;
}
  lineNumber = 494
  lineNumber = 1
  lineNumber = 493
  var call1540 = callmethod(var_tmpb,"dtype:=", [1], var_tdtype);
  lineNumber = 494
  lineNumber = 1
  lineNumber = 494
  var call1541 = callmethod(var_ident,"value", [0]);
  lineNumber = 495
  lineNumber = 1
  lineNumber = 494
  var call1542 = callmethod(var_scopes,"last", [0]);
  var call1543 = callmethod(call1542,"put", [2], call1541, var_tmpb);
  var if1492 = call1543;
}
  return if1492
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["bindIdentifier"] = func1484;
  lineNumber = 563
var func1544 = function(argcv) {
  var curarg = 1;
  var var_tp = arguments[curarg];
  curarg++;
  var var_typevar = arguments[curarg];
  curarg++;
  var var_concrete = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 500
  lineNumber = 1
  lineNumber = 499
  var call1545 = callmethod(var_tp,"methods", [0]);
  var var_methods = call1545;
  lineNumber = 501
  var var_tmprt;
  lineNumber = 502
  var array1546 = new GraceList([
]);

  var var_newmeth = array1546;
  lineNumber = 503
  lineNumber = 502
  var bool1547 = new GraceBoolean(false)
  var var_changed = bool1547;
  lineNumber = 547
  lineNumber = 503
  lineNumber = 547
  var block1548 = Grace_allocObject();
  block1548.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1548.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1548.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1548.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1548.receiver = this;
  block1548.className = 'block<typechecker:547>';
  block1548.real = function(
var_m
) {
  lineNumber = 505
  lineNumber = 1
  lineNumber = 504
  var call1549 = callmethod(var_m,"rtype", [0]);
  var_tmprt = call1549;
  lineNumber = 515
  lineNumber = 517
  lineNumber = 505
  var bool1551 = new GraceBoolean(false)
  var opresult1553 = callmethod(var_tmprt, "==", [1], bool1551);
  if (Grace_isTrue(opresult1553)) {
  var if1550 = undefined;
  } else {
  lineNumber = 515
  lineNumber = 509
  lineNumber = 1
  lineNumber = 506
  var call1555 = callmethod(var_tmprt,"value", [0]);
  lineNumber = 509
  lineNumber = 1
  lineNumber = 506
  var call1556 = callmethod(var_typevar,"value", [0]);
  var opresult1558 = callmethod(call1555, "==", [1], call1556);
  if (Grace_isTrue(opresult1558)) {
  lineNumber = 508
  lineNumber = 507
  var_tmprt = var_concrete;
  lineNumber = 509
  lineNumber = 508
  var bool1559 = new GraceBoolean(true)
  var_changed = bool1559;
  var if1554 = bool1559;
  } else {
  lineNumber = 515
  lineNumber = 509
  lineNumber = 517
  lineNumber = 1
  lineNumber = 509
  var call1561 = callmethod(var_tmprt,"value", [0]);
  var call1562 = callmethod(call1561,"substringFrom()to", [1, 1], new GraceNum(1), new GraceNum(11));
  var string1563 = new GraceString("InstanceOf<");
  var opresult1565 = callmethod(call1562, "==", [1], string1563);
  if (Grace_isTrue(opresult1565)) {
  lineNumber = 510
  lineNumber = 511
  var call1566 = callmethod(this,"findType", [1], var_tmprt);
  var var_ortype = call1566;
  lineNumber = 512
  var call1567 = callmethod(this,"betaReduceType", [3], var_ortype, var_typevar, var_concrete);
  var var_tryrrep = call1567;
  lineNumber = 515
  lineNumber = 516
  lineNumber = 512
  var opresult1570 = callmethod(var_ortype, "/=", [1], var_tryrrep);
  if (Grace_isTrue(opresult1570)) {
  lineNumber = 514
  lineNumber = 513
  var_tmprt = var_tryrrep;
  lineNumber = 515
  lineNumber = 514
  var bool1571 = new GraceBoolean(true)
  var_changed = bool1571;
  var if1568 = bool1571;
}
  var if1560 = if1568;
}
  var if1554 = if1560;
}
  var if1550 = if1554;
}
  lineNumber = 518
  var array1572 = new GraceList([
]);

  var var_tmpsig = array1572;
  lineNumber = 545
  lineNumber = 518
  lineNumber = 1
  lineNumber = 518
  var call1573 = callmethod(var_m,"signature", [0]);
  lineNumber = 545
  var block1574 = Grace_allocObject();
  block1574.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1574.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1574.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1574.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1574.receiver = this;
  block1574.className = 'block<typechecker:545>';
  block1574.real = function(
var_part
) {
  lineNumber = 519
  lineNumber = 1
  lineNumber = 519
  var call1575 = callmethod(var_part,"name", [0]);
  lineNumber = 520
  lineNumber = 1
  lineNumber = 519
  var call1576 = callmethod(var_ast,"signaturePart", [0]);
  var call1577 = callmethod(call1576,"new", [1], call1575);
  var var_tmppart = call1577;
  lineNumber = 521
  var array1578 = new GraceList([
]);

  var var_tmpparams = array1578;
  lineNumber = 540
  lineNumber = 521
  lineNumber = 1
  lineNumber = 521
  var call1579 = callmethod(var_part,"params", [0]);
  lineNumber = 540
  var block1580 = Grace_allocObject();
  block1580.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1580.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1580.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1580.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1580.receiver = this;
  block1580.className = 'block<typechecker:540>';
  block1580.real = function(
var_pp
) {
  lineNumber = 542
  lineNumber = 1
  lineNumber = 522
  var call1582 = callmethod(var_pp,"dtype", [0]);
  var bool1583 = new GraceBoolean(false)
  var opresult1585 = callmethod(call1582, "==", [1], bool1583);
  if (Grace_isTrue(opresult1585)) {
  lineNumber = 523
  var call1586 = callmethod(var_tmpparams,"push", [1], var_pp);
  var if1581 = call1586;
  } else {
  lineNumber = 540
  lineNumber = 527
  lineNumber = 1
  lineNumber = 527
  lineNumber = 1
  lineNumber = 524
  var call1588 = callmethod(var_pp,"dtype", [0]);
  var call1589 = callmethod(call1588,"value", [0]);
  lineNumber = 527
  lineNumber = 1
  lineNumber = 524
  var call1590 = callmethod(var_typevar,"value", [0]);
  var opresult1592 = callmethod(call1589, "==", [1], call1590);
  if (Grace_isTrue(opresult1592)) {
  lineNumber = 525
  lineNumber = 1
  lineNumber = 525
  var call1593 = callmethod(var_pp,"value", [0]);
  lineNumber = 1
  lineNumber = 525
  var call1594 = callmethod(var_ast,"identifierNode", [0]);
  var call1595 = callmethod(call1594,"new", [2], call1593, var_concrete);
  var call1596 = callmethod(var_tmpparams,"push", [1], call1595);
  lineNumber = 527
  lineNumber = 526
  var bool1597 = new GraceBoolean(true)
  var_changed = bool1597;
  var if1587 = bool1597;
  } else {
  lineNumber = 540
  lineNumber = 527
  lineNumber = 539
  lineNumber = 1
  lineNumber = 539
  lineNumber = 1
  lineNumber = 527
  var call1599 = callmethod(var_pp,"dtype", [0]);
  var call1600 = callmethod(call1599,"value", [0]);
  var call1601 = callmethod(call1600,"at", [1], new GraceNum(1));
  var string1602 = new GraceString("<");
  var opresult1604 = callmethod(call1601, "==", [1], string1602);
  if (Grace_isTrue(opresult1604)) {
  lineNumber = 528
  lineNumber = 1
  lineNumber = 528
  var call1605 = callmethod(var_pp,"dtype", [0]);
  lineNumber = 529
  var call1606 = callmethod(this,"findType", [1], call1605);
  var var_otype = call1606;
  lineNumber = 530
  var call1607 = callmethod(this,"betaReduceType", [3], var_otype, var_typevar, var_concrete);
  var var_tryrep = call1607;
  lineNumber = 538
  lineNumber = 539
  lineNumber = 530
  var opresult1610 = callmethod(var_otype, "==", [1], var_tryrep);
  if (Grace_isTrue(opresult1610)) {
  lineNumber = 531
  var call1611 = callmethod(var_tmpparams,"push", [1], var_pp);
  var if1608 = call1611;
  } else {
  lineNumber = 535
  lineNumber = 534
  lineNumber = 1
  lineNumber = 533
  var call1612 = callmethod(var_tryrep,"value", [0]);
  lineNumber = 534
  var string1613 = new GraceString("<");
  lineNumber = 1
  lineNumber = 534
  var call1614 = callmethod(var_typevar,"value", [0]);
  var opresult1616 = callmethod(string1613, "++", [1], call1614);
  var string1617 = new GraceString("=");
  var opresult1619 = callmethod(opresult1616, "++", [1], string1617);
  lineNumber = 1
  lineNumber = 534
  var call1620 = callmethod(var_concrete,"value", [0]);
  var opresult1622 = callmethod(opresult1619, "++", [1], call1620);
  var string1623 = new GraceString(">");
  var opresult1625 = callmethod(opresult1622, "++", [1], string1623);
  var opresult1627 = callmethod(call1612, "++", [1], opresult1625);
  lineNumber = 535
  lineNumber = 1
  lineNumber = 535
  var call1628 = callmethod(var_tryrep,"methods", [0]);
  lineNumber = 536
  lineNumber = 1
  lineNumber = 533
  var call1629 = callmethod(var_ast,"typeNode", [0]);
  var call1630 = callmethod(call1629,"new", [2], opresult1627, call1628);
  var var_trynamed = call1630;
  lineNumber = 536
  lineNumber = 1
  lineNumber = 536
  var call1631 = callmethod(var_pp,"value", [0]);
  lineNumber = 1
  lineNumber = 536
  var call1632 = callmethod(var_ast,"identifierNode", [0]);
  var call1633 = callmethod(call1632,"new", [2], call1631, var_trynamed);
  var call1634 = callmethod(var_tmpparams,"push", [1], call1633);
  lineNumber = 538
  lineNumber = 537
  var bool1635 = new GraceBoolean(true)
  var_changed = bool1635;
  var if1608 = bool1635;
}
  var if1598 = if1608;
  } else {
  lineNumber = 540
  var call1636 = callmethod(var_tmpparams,"push", [1], var_pp);
  var if1598 = call1636;
}
  var if1587 = if1598;
}
  var if1581 = if1587;
}
  return if1581;
};
  var call1637 = callmethod(Grace_prelude,"for()do", [1, 1], call1579, block1580);
  lineNumber = 544
  lineNumber = 1
  lineNumber = 543
  var call1638 = callmethod(var_tmppart,"params:=", [1], var_tmpparams);
  lineNumber = 545
  lineNumber = 1
  lineNumber = 545
  lineNumber = 1
  lineNumber = 544
  var call1639 = callmethod(var_part,"vararg", [0]);
  var call1640 = callmethod(var_tmppart,"vararg:=", [1], call1639);
  lineNumber = 545
  var call1641 = callmethod(var_tmpsig,"push", [1], var_tmppart);
  return call1641;
};
  var call1642 = callmethod(Grace_prelude,"for()do", [1, 1], call1573, block1574);
  lineNumber = 547
  lineNumber = 1
  lineNumber = 547
  var call1643 = callmethod(var_m,"value", [0]);
  lineNumber = 1
  lineNumber = 547
  var call1644 = callmethod(var_ast,"methodTypeNode", [0]);
  var call1645 = callmethod(call1644,"new", [3], call1643, var_tmpsig, var_tmprt);
  var call1646 = callmethod(var_newmeth,"push", [1], call1645);
  return call1646;
};
  var call1647 = callmethod(Grace_prelude,"for()do", [1, 1], var_methods, block1548);
  lineNumber = 563
  lineNumber = 549
  if (Grace_isTrue(var_changed)) {
  lineNumber = 551
  var var_tmp;
  lineNumber = 555
  lineNumber = 551
  lineNumber = 557
  lineNumber = 1
  lineNumber = 551
  var call1650 = callmethod(var_tp,"value", [0]);
  var call1651 = callmethod(call1650,"substringFrom()to", [1, 1], new GraceNum(1), new GraceNum(11));
  var string1652 = new GraceString("InstanceOf<");
  var opresult1654 = callmethod(call1651, "==", [1], string1652);
  if (Grace_isTrue(opresult1654)) {
  lineNumber = 553
  lineNumber = 552
  var string1655 = new GraceString("");
  lineNumber = 1
  lineNumber = 552
  var call1656 = callmethod(var_tp,"value", [0]);
  var opresult1658 = callmethod(string1655, "++", [1], call1656);
  var string1659 = new GraceString("<");
  var opresult1661 = callmethod(opresult1658, "++", [1], string1659);
  lineNumber = 1
  lineNumber = 552
  var call1662 = callmethod(var_typevar,"value", [0]);
  var opresult1664 = callmethod(opresult1661, "++", [1], call1662);
  var string1665 = new GraceString("=");
  var opresult1667 = callmethod(opresult1664, "++", [1], string1665);
  lineNumber = 1
  lineNumber = 552
  var call1668 = callmethod(var_concrete,"value", [0]);
  var opresult1670 = callmethod(opresult1667, "++", [1], call1668);
  var string1671 = new GraceString(">");
  var opresult1673 = callmethod(opresult1670, "++", [1], string1671);
  lineNumber = 553
  lineNumber = 554
  lineNumber = 1
  lineNumber = 552
  var call1674 = callmethod(var_ast,"typeNode", [0]);
  var call1675 = callmethod(call1674,"new", [2], opresult1673, var_newmeth);
  var_tmp = call1675;
  var if1649 = call1675;
  } else {
  lineNumber = 555
  lineNumber = 1
  lineNumber = 555
  var call1676 = callmethod(var_tp,"value", [0]);
  lineNumber = 556
  lineNumber = 1
  lineNumber = 555
  var call1677 = callmethod(var_ast,"typeNode", [0]);
  var call1678 = callmethod(call1677,"new", [2], call1676, var_newmeth);
  var_tmp = call1678;
  var if1649 = call1678;
}
  lineNumber = 558
  lineNumber = 557
  var string1679 = new GraceString("");
  lineNumber = 1
  lineNumber = 557
  var call1680 = callmethod(var_tp,"value", [0]);
  var opresult1682 = callmethod(string1679, "++", [1], call1680);
  var string1683 = new GraceString("<");
  var opresult1685 = callmethod(opresult1682, "++", [1], string1683);
  lineNumber = 1
  lineNumber = 557
  var call1686 = callmethod(var_typevar,"value", [0]);
  var opresult1688 = callmethod(opresult1685, "++", [1], call1686);
  var string1689 = new GraceString("=");
  var opresult1691 = callmethod(opresult1688, "++", [1], string1689);
  lineNumber = 1
  lineNumber = 557
  var call1692 = callmethod(var_concrete,"value", [0]);
  var opresult1694 = callmethod(opresult1691, "++", [1], call1692);
  var string1695 = new GraceString(">");
  var opresult1697 = callmethod(opresult1694, "++", [1], string1695);
  lineNumber = 558
  lineNumber = 559
  lineNumber = 1
  lineNumber = 557
  var call1698 = callmethod(var_ast,"typeNode", [0]);
  var call1699 = callmethod(call1698,"new", [2], opresult1697, var_newmeth);
  var_tmp = call1699;
  lineNumber = 559
  var call1700 = callmethod(var_subtype,"addType", [1], var_tmp);
  lineNumber = 561
  lineNumber = 560
  return var_tmp
  var if1648 = undefined;
  } else {
  lineNumber = 563
  lineNumber = 562
  return var_tp
  var if1648 = undefined;
}
  return if1648
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["betaReduceType"] = func1544;
  lineNumber = 614
var func1701 = function(argcv) {
  var curarg = 1;
  var var_tp = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 568
  lineNumber = 569
  lineNumber = 566
  var bool1703 = new GraceBoolean(false)
  var opresult1705 = callmethod(var_tp, "==", [1], bool1703);
  if (Grace_isTrue(opresult1705)) {
  lineNumber = 568
  lineNumber = 567
  return var_DynamicType
  var if1702 = undefined;
}
  lineNumber = 571
  lineNumber = 572
  lineNumber = 1
  lineNumber = 569
  var call1707 = callmethod(var_tp,"kind", [0]);
  var string1708 = new GraceString("type");
  var opresult1710 = callmethod(call1707, "==", [1], string1708);
  if (Grace_isTrue(opresult1710)) {
  lineNumber = 571
  lineNumber = 570
  return var_tp
  var if1706 = undefined;
}
  lineNumber = 587
  lineNumber = 588
  lineNumber = 1
  lineNumber = 572
  var call1712 = callmethod(var_tp,"kind", [0]);
  var string1713 = new GraceString("identifier");
  var opresult1715 = callmethod(call1712, "==", [1], string1713);
  if (Grace_isTrue(opresult1715)) {
  lineNumber = 574
  lineNumber = 1
  lineNumber = 573
  var call1716 = callmethod(var_tp,"value", [0]);
  var var_tpnm = call1716;
  lineNumber = 574
  lineNumber = 575
  var call1717 = callmethod(this,"findName", [1], var_tpnm);
  var var_tpbd = call1717;
  lineNumber = 576
  lineNumber = 1
  lineNumber = 575
  var call1718 = callmethod(var_tpbd,"value", [0]);
  var var_gtp = call1718;
  lineNumber = 581
  lineNumber = 585
  lineNumber = 576
  var bool1720 = new GraceBoolean(false)
  var opresult1722 = callmethod(var_gtp, "/=", [1], bool1720);
  if (Grace_isTrue(opresult1722)) {
  lineNumber = 581
  lineNumber = 584
  lineNumber = 1
  lineNumber = 584
  lineNumber = 1
  lineNumber = 577
  var call1724 = callmethod(var_gtp,"generics", [0]);
  var call1725 = callmethod(call1724,"size", [0]);
  var opresult1727 = callmethod(call1725, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1727)) {
  lineNumber = 579
  var array1728 = new GraceList([
]);

  var var_gdyns = array1728;
  lineNumber = 581
  lineNumber = 579
  lineNumber = 1
  lineNumber = 579
  var call1729 = callmethod(var_gtp,"generics", [0]);
  lineNumber = 581
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
  block1730.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1730.receiver = this;
  block1730.className = 'block<typechecker:581>';
  block1730.real = function(
var_gdt
) {
  lineNumber = 580
  lineNumber = 581
  var call1731 = callmethod(this,"betaReduceType", [3], var_gtp, var_gdt, var_DynamicType);
  var_gtp = call1731;
  var call1732 = callmethod(var_gdyns,"push", [1], var_gdt);
  return call1732;
};
  var call1733 = callmethod(Grace_prelude,"for()do", [1, 1], call1729, block1730);
  var if1723 = call1733;
}
  var if1719 = if1723;
}
  lineNumber = 586
  lineNumber = 585
  return var_gtp
  lineNumber = 587
  lineNumber = 1
  lineNumber = 586
  var call1734 = callmethod(var_tpbd,"value", [0]);
  return call1734
  var if1711 = undefined;
}
  lineNumber = 612
  lineNumber = 613
  lineNumber = 1
  lineNumber = 588
  var call1736 = callmethod(var_tp,"kind", [0]);
  var string1737 = new GraceString("generic");
  var opresult1739 = callmethod(call1736, "==", [1], string1737);
  if (Grace_isTrue(opresult1739)) {
  lineNumber = 590
  lineNumber = 1
  lineNumber = 590
  lineNumber = 1
  lineNumber = 589
  var call1740 = callmethod(var_tp,"value", [0]);
  var call1741 = callmethod(call1740,"value", [0]);
  var var_gtnm = call1741;
  lineNumber = 590
  lineNumber = 591
  var call1742 = callmethod(this,"findName", [1], var_gtnm);
  var var_gtbd = call1742;
  lineNumber = 592
  lineNumber = 1
  lineNumber = 591
  var call1743 = callmethod(var_gtbd,"value", [0]);
  var var_gtg = call1743;
  lineNumber = 593
  lineNumber = 592
  var string1744 = new GraceString("<");
  var opresult1746 = callmethod(var_gtnm, "++", [1], string1744);
  var var_gnm = opresult1746;
  lineNumber = 594
  lineNumber = 596
  lineNumber = 593
  var bool1748 = new GraceBoolean(false)
  var opresult1750 = callmethod(var_gtg, "==", [1], bool1748);
  if (Grace_isTrue(opresult1750)) {
  lineNumber = 594
  var string1751 = new GraceString("could not find base type to instantiate: ");
  var opresult1753 = callmethod(string1751, "++", [1], var_gtnm);
  var string1754 = new GraceString("");
  var opresult1756 = callmethod(opresult1753, "++", [1], string1754);
  var call1757 = callmethod(var_util,"type_error", [1], opresult1756);
  var if1747 = call1757;
}
  lineNumber = 597
  lineNumber = 1
  lineNumber = 596
  var call1758 = callmethod(var_gtg,"methods", [0]);
  var var_methods = call1758;
  lineNumber = 598
  var var_tmprt;
  lineNumber = 599
  var var_tmpparams;
  lineNumber = 600
  lineNumber = 599
  var var_tmptp = var_gtg;
  lineNumber = 601
  var array1759 = new GraceList([
]);

  var var_gnms = array1759;
  lineNumber = 605
  lineNumber = 601
  lineNumber = 1
  lineNumber = 601
  lineNumber = 1
  lineNumber = 601
  var call1760 = callmethod(var_tp,"params", [0]);
  var call1761 = callmethod(call1760,"indices", [0]);
  lineNumber = 605
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
  block1762.className = 'block<typechecker:605>';
  block1762.real = function(
var_i
) {
  lineNumber = 602
  lineNumber = 603
  lineNumber = 1
  lineNumber = 602
  var call1763 = callmethod(var_gtg,"generics", [0]);
  var call1764 = callmethod(call1763,"at", [1], var_i);
  var var_tv = call1764;
  lineNumber = 603
  lineNumber = 1
  lineNumber = 603
  var call1765 = callmethod(var_tp,"params", [0]);
  var call1766 = callmethod(call1765,"at", [1], var_i);
  lineNumber = 604
  var call1767 = callmethod(this,"findType", [1], call1766);
  var var_ct = call1767;
  lineNumber = 1
  lineNumber = 604
  var call1768 = callmethod(var_ct,"value", [0]);
  var call1769 = callmethod(var_gnms,"push", [1], call1768);
  lineNumber = 605
  lineNumber = 606
  var call1770 = callmethod(this,"betaReduceType", [3], var_tmptp, var_tv, var_ct);
  var_tmptp = call1770;
  return call1770;
};
  var call1771 = callmethod(Grace_prelude,"for()do", [1, 1], call1761, block1762);
  lineNumber = 607
  var string1772 = new GraceString(",");
  var call1773 = callmethod(var_util,"join", [2], string1772, var_gnms);
  var opresult1775 = callmethod(var_gnm, "++", [1], call1773);
  var string1776 = new GraceString(">");
  var opresult1778 = callmethod(opresult1775, "++", [1], string1776);
  var_gnm = opresult1778;
  lineNumber = 608
  lineNumber = 1
  lineNumber = 608
  var call1779 = callmethod(var_tmptp,"methods", [0]);
  lineNumber = 609
  lineNumber = 1
  lineNumber = 608
  var call1780 = callmethod(var_ast,"typeNode", [0]);
  var call1781 = callmethod(call1780,"new", [2], var_gnm, call1779);
  var var_nt = call1781;
  lineNumber = 609
  var call1782 = callmethod(var_subtype,"addType", [1], var_nt);
  lineNumber = 610
  var call1783 = callmethod(var_subtype,"addType", [1], var_gtg);
  lineNumber = 612
  lineNumber = 611
  return var_nt
  var if1735 = undefined;
}
  lineNumber = 614
  lineNumber = 613
  return var_DynamicType
  return undefined
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["findType"] = func1701;
  lineNumber = 647
var func1784 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 618
  lineNumber = 619
  lineNumber = 1
  lineNumber = 616
  var call1786 = callmethod(var_node,"kind", [0]);
  var string1787 = new GraceString("identifier");
  var opresult1789 = callmethod(call1786, "/=", [1], string1787);
  if (Grace_isTrue(opresult1789)) {
  lineNumber = 618
  lineNumber = 617
  return var_node
  var if1785 = undefined;
}
  lineNumber = 620
  lineNumber = 1
  lineNumber = 619
  var call1790 = callmethod(var_node,"value", [0]);
  var var_nm = call1790;
  lineNumber = 621
  lineNumber = 620
  lineNumber = 1
  lineNumber = 620
  lineNumber = 623
  var call1792 = callmethod(this,"haveBinding", [1], var_nm);
  var call1793 = callmethod(call1792,"not", [0]);
  if (Grace_isTrue(call1793)) {
  lineNumber = 621
  var string1794 = new GraceString("use of undefined identifier ");
  var opresult1796 = callmethod(string1794, "++", [1], var_nm);
  var string1797 = new GraceString("");
  var opresult1799 = callmethod(opresult1796, "++", [1], string1797);
  var call1800 = callmethod(var_util,"syntax_error", [1], opresult1799);
  var if1791 = call1800;
}
  lineNumber = 624
  lineNumber = 626
  lineNumber = 623
  var string1802 = new GraceString("outer");
  var opresult1804 = callmethod(var_nm, "==", [1], string1802);
  if (Grace_isTrue(opresult1804)) {
  lineNumber = 624
  var string1805 = new GraceString("outer");
  var string1806 = new GraceString("self");
  var bool1807 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 624
  var call1808 = callmethod(var_ast,"identifierNode", [0]);
  var call1809 = callmethod(call1808,"new", [2], string1806, bool1807);
  lineNumber = 625
  lineNumber = 1
  lineNumber = 624
  var call1810 = callmethod(var_ast,"memberNode", [0]);
  var call1811 = callmethod(call1810,"new", [2], string1805, call1809);
  return call1811
  var if1801 = undefined;
}
  lineNumber = 629
  lineNumber = 630
  lineNumber = 626
  var string1813 = new GraceString("self");
  var opresult1815 = callmethod(var_nm, "==", [1], string1813);
  if (Grace_isTrue(opresult1815)) {
  lineNumber = 628
  lineNumber = 1
  lineNumber = 628
  lineNumber = 1
  lineNumber = 627
  var call1816 = callmethod(var_selftypes,"last", [0]);
  var call1817 = callmethod(var_node,"dtype:=", [1], call1816);
  lineNumber = 629
  lineNumber = 628
  return var_node
  var if1812 = undefined;
}
  lineNumber = 630
  lineNumber = 631
  var call1818 = callmethod(this,"findName", [1], var_nm);
  var var_b = call1818;
  lineNumber = 645
  lineNumber = 647
  lineNumber = 1
  lineNumber = 631
  var call1820 = callmethod(var_b,"kind", [0]);
  var string1821 = new GraceString("var");
  var opresult1823 = callmethod(call1820, "==", [1], string1821);
  if (Grace_isTrue(opresult1823)) {
  lineNumber = 632
  lineNumber = 1
  lineNumber = 632
  var call1824 = callmethod(var_b,"dtype", [0]);
  lineNumber = 633
  var call1825 = callmethod(this,"findType", [1], call1824);
  var var_vtp = call1825;
  lineNumber = 635
  lineNumber = 636
  lineNumber = 1
  lineNumber = 633
  var call1827 = callmethod(var_node,"dtype", [0]);
  var opresult1829 = callmethod(call1827, "/=", [1], var_vtp);
  if (Grace_isTrue(opresult1829)) {
  lineNumber = 635
  lineNumber = 1
  lineNumber = 634
  var call1830 = callmethod(var_node,"dtype:=", [1], var_vtp);
  var if1826 = call1830;
}
  lineNumber = 637
  lineNumber = 636
  return var_node
  var if1819 = undefined;
  } else {
  lineNumber = 645
  lineNumber = 643
  lineNumber = 1
  lineNumber = 637
  var call1832 = callmethod(var_b,"kind", [0]);
  var string1833 = new GraceString("def");
  var opresult1835 = callmethod(call1832, "==", [1], string1833);
  if (Grace_isTrue(opresult1835)) {
  lineNumber = 638
  lineNumber = 1
  lineNumber = 638
  var call1836 = callmethod(var_b,"dtype", [0]);
  lineNumber = 639
  var call1837 = callmethod(this,"findType", [1], call1836);
  var var_dtp = call1837;
  lineNumber = 641
  lineNumber = 642
  lineNumber = 1
  lineNumber = 639
  var call1839 = callmethod(var_node,"dtype", [0]);
  var opresult1841 = callmethod(call1839, "/=", [1], var_dtp);
  if (Grace_isTrue(opresult1841)) {
  lineNumber = 641
  lineNumber = 1
  lineNumber = 640
  var call1842 = callmethod(var_node,"dtype:=", [1], var_dtp);
  var if1838 = call1842;
}
  lineNumber = 643
  lineNumber = 642
  return var_node
  var if1831 = undefined;
  } else {
  lineNumber = 645
  lineNumber = 647
  lineNumber = 1
  lineNumber = 643
  var call1844 = callmethod(var_b,"kind", [0]);
  var string1845 = new GraceString("method");
  var opresult1847 = callmethod(call1844, "==", [1], string1845);
  if (Grace_isTrue(opresult1847)) {
  lineNumber = 644
  lineNumber = 645
  var call1848 = callmethod(this,"findDeepMethod", [1], var_nm);
  var var_meth = call1848;
  lineNumber = 1
  lineNumber = 645
  var call1850 = callmethod(var_meth,"value", [0]);
  lineNumber = 1
  lineNumber = 645
  var call1851 = callmethod(var_ast,"callWithPart", [0]);
  var call1852 = callmethod(call1851,"new", [1], call1850);
  var array1849 = new GraceList([
call1852,
]);

  lineNumber = 646
  lineNumber = 1
  lineNumber = 645
  var call1853 = callmethod(var_ast,"callNode", [0]);
  var call1854 = callmethod(call1853,"new", [2], var_meth, array1849);
  return call1854
  var if1843 = undefined;
}
  var if1831 = if1843;
}
  var if1819 = if1831;
}
  lineNumber = 647
  return var_node
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["resolveIdentifier"] = func1784;
  lineNumber = 720
var func1855 = function(argcv) {
  var curarg = 1;
  var var_arg = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 651
  lineNumber = 653
  lineNumber = 1
  lineNumber = 650
  var call1857 = callmethod(var_arg,"kind", [0]);
  var string1858 = new GraceString("num");
  var opresult1860 = callmethod(call1857, "==", [1], string1858);
  if (Grace_isTrue(opresult1860)) {
  lineNumber = 651
  var array1862 = new GraceList([
]);

  var array1861 = new GraceList([
var_arg,
array1862,
]);

  return array1861
  var if1856 = undefined;
}
  lineNumber = 654
  lineNumber = 656
  lineNumber = 1
  lineNumber = 653
  var call1864 = callmethod(var_arg,"kind", [0]);
  var string1865 = new GraceString("string");
  var opresult1867 = callmethod(call1864, "==", [1], string1865);
  if (Grace_isTrue(opresult1867)) {
  lineNumber = 654
  var array1869 = new GraceList([
]);

  var array1868 = new GraceList([
var_arg,
array1869,
]);

  return array1868
  var if1863 = undefined;
}
  lineNumber = 657
  lineNumber = 659
  lineNumber = 1
  lineNumber = 656
  var call1871 = callmethod(var_arg,"kind", [0]);
  var string1872 = new GraceString("boolean");
  var opresult1874 = callmethod(call1871, "==", [1], string1872);
  if (Grace_isTrue(opresult1874)) {
  lineNumber = 657
  var array1876 = new GraceList([
]);

  var array1875 = new GraceList([
var_arg,
array1876,
]);

  return array1875
  var if1870 = undefined;
}
  lineNumber = 680
  lineNumber = 682
  lineNumber = 1
  lineNumber = 659
  var call1878 = callmethod(var_arg,"kind", [0]);
  var string1879 = new GraceString("call");
  var opresult1881 = callmethod(call1878, "==", [1], string1879);
  if (Grace_isTrue(opresult1881)) {
  lineNumber = 661
  var array1882 = new GraceList([
]);

  var var_bindings = array1882;
  lineNumber = 662
  var array1883 = new GraceList([
]);

  var var_subpats = array1883;
  lineNumber = 667
  lineNumber = 662
  lineNumber = 1
  lineNumber = 662
  var call1884 = callmethod(var_arg,"with", [0]);
  lineNumber = 667
  var block1885 = Grace_allocObject();
  block1885.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1885.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1885.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1885.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1885.receiver = this;
  block1885.className = 'block<typechecker:667>';
  block1885.real = function(
var_part
) {
  lineNumber = 663
  lineNumber = 1
  lineNumber = 663
  var call1886 = callmethod(var_part,"args", [0]);
  lineNumber = 667
  var block1887 = Grace_allocObject();
  block1887.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1887.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1887.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1887.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1887.receiver = this;
  block1887.className = 'block<typechecker:667>';
  block1887.real = function(
var_a
) {
  lineNumber = 664
  lineNumber = 665
  var call1888 = callmethod(this,"rewritematchblockterm2", [1], var_a);
  var var_tmp = call1888;
  var idxres1889 = var_tmp.methods["[]"].call(var_tmp, [1], new GraceNum(1));
  var call1890 = callmethod(var_subpats,"push", [1], idxres1889);
  lineNumber = 667
  lineNumber = 666
  var idxres1891 = var_tmp.methods["[]"].call(var_tmp, [1], new GraceNum(2));
  lineNumber = 667
  var block1892 = Grace_allocObject();
  block1892.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1892.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1892.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1892.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1892.receiver = this;
  block1892.className = 'block<typechecker:667>';
  block1892.real = function(
var_b
) {
  var call1893 = callmethod(var_bindings,"push", [1], var_b);
  return call1893;
};
  var call1894 = callmethod(Grace_prelude,"for()do", [1, 1], idxres1891, block1892);
  return call1894;
};
  var call1895 = callmethod(Grace_prelude,"for()do", [1, 1], call1886, block1887);
  return call1895;
};
  var call1896 = callmethod(Grace_prelude,"for()do", [1, 1], call1884, block1885);
  lineNumber = 678
  lineNumber = 675
  lineNumber = 673
  var string1897 = new GraceString("new");
  lineNumber = 675
  lineNumber = 674
  var string1898 = new GraceString("MatchAndDestructuringPattern");
  lineNumber = 675
  var string1899 = new GraceString("prelude");
  var bool1900 = new GraceBoolean(false)
  lineNumber = 676
  lineNumber = 1
  lineNumber = 675
  var call1901 = callmethod(var_ast,"identifierNode", [0]);
  var call1902 = callmethod(call1901,"new", [2], string1899, bool1900);
  lineNumber = 677
  lineNumber = 1
  lineNumber = 674
  var call1903 = callmethod(var_ast,"memberNode", [0]);
  var call1904 = callmethod(call1903,"new", [2], string1898, call1902);
  lineNumber = 677
  lineNumber = 1
  lineNumber = 672
  var call1905 = callmethod(var_ast,"memberNode", [0]);
  var call1906 = callmethod(call1905,"new", [2], string1897, call1904);
  lineNumber = 678
  var string1908 = new GraceString("new");
  lineNumber = 1
  lineNumber = 678
  var call1910 = callmethod(var_arg,"value", [0]);
  lineNumber = 1
  lineNumber = 678
  var call1911 = callmethod(var_ast,"arrayNode", [0]);
  var call1912 = callmethod(call1911,"new", [1], var_subpats);
  var array1909 = new GraceList([
call1910,
call1912,
]);

  lineNumber = 1
  lineNumber = 678
  var call1913 = callmethod(var_ast,"callWithPart", [0]);
  var call1914 = callmethod(call1913,"new", [2], string1908, array1909);
  var array1907 = new GraceList([
call1914,
]);

  lineNumber = 680
  lineNumber = 1
  lineNumber = 671
  var call1915 = callmethod(var_ast,"callNode", [0]);
  var call1916 = callmethod(call1915,"new", [2], call1906, array1907);
  var var_callpat = call1916;
  lineNumber = 680
  var array1917 = new GraceList([
var_callpat,
var_bindings,
]);

  return array1917
  var if1877 = undefined;
}
  lineNumber = 720
  lineNumber = 722
  lineNumber = 1
  lineNumber = 682
  var call1919 = callmethod(var_arg,"kind", [0]);
  var string1920 = new GraceString("identifier");
  var opresult1922 = callmethod(call1919, "==", [1], string1920);
  if (Grace_isTrue(opresult1922)) {
  lineNumber = 690
  lineNumber = 687
  lineNumber = 685
  var string1923 = new GraceString("new");
  lineNumber = 687
  lineNumber = 686
  var string1924 = new GraceString("VariablePattern");
  lineNumber = 687
  var string1925 = new GraceString("prelude");
  var bool1926 = new GraceBoolean(false)
  lineNumber = 688
  lineNumber = 1
  lineNumber = 687
  var call1927 = callmethod(var_ast,"identifierNode", [0]);
  var call1928 = callmethod(call1927,"new", [2], string1925, bool1926);
  lineNumber = 689
  lineNumber = 1
  lineNumber = 686
  var call1929 = callmethod(var_ast,"memberNode", [0]);
  var call1930 = callmethod(call1929,"new", [2], string1924, call1928);
  lineNumber = 689
  lineNumber = 1
  lineNumber = 684
  var call1931 = callmethod(var_ast,"memberNode", [0]);
  var call1932 = callmethod(call1931,"new", [2], string1923, call1930);
  lineNumber = 690
  var string1934 = new GraceString("new");
  lineNumber = 1
  lineNumber = 690
  var call1936 = callmethod(var_arg,"value", [0]);
  lineNumber = 1
  lineNumber = 690
  var call1937 = callmethod(var_ast,"stringNode", [0]);
  var call1938 = callmethod(call1937,"new", [1], call1936);
  var array1935 = new GraceList([
call1938,
]);

  lineNumber = 1
  lineNumber = 690
  var call1939 = callmethod(var_ast,"callWithPart", [0]);
  var call1940 = callmethod(call1939,"new", [2], string1934, array1935);
  var array1933 = new GraceList([
call1940,
]);

  lineNumber = 692
  lineNumber = 1
  lineNumber = 683
  var call1941 = callmethod(var_ast,"callNode", [0]);
  var call1942 = callmethod(call1941,"new", [2], call1932, array1933);
  var var_varpat = call1942;
  lineNumber = 718
  lineNumber = 720
  lineNumber = 1
  lineNumber = 692
  var call1944 = callmethod(var_arg,"dtype", [0]);
  var bool1945 = new GraceBoolean(false)
  var opresult1947 = callmethod(call1944, "!=", [1], bool1945);
  if (Grace_isTrue(opresult1947)) {
  lineNumber = 702
  lineNumber = 704
  lineNumber = 1
  lineNumber = 704
  lineNumber = 1
  lineNumber = 693
  var call1949 = callmethod(var_arg,"dtype", [0]);
  var call1950 = callmethod(call1949,"kind", [0]);
  var string1951 = new GraceString("identifier");
  var opresult1953 = callmethod(call1950, "==", [1], string1951);
  if (Grace_isTrue(opresult1953)) {
  lineNumber = 702
  lineNumber = 701
  lineNumber = 698
  lineNumber = 696
  var string1955 = new GraceString("new");
  lineNumber = 698
  lineNumber = 697
  var string1956 = new GraceString("AndPattern");
  lineNumber = 698
  var string1957 = new GraceString("prelude");
  var bool1958 = new GraceBoolean(false)
  lineNumber = 699
  lineNumber = 1
  lineNumber = 698
  var call1959 = callmethod(var_ast,"identifierNode", [0]);
  var call1960 = callmethod(call1959,"new", [2], string1957, bool1958);
  lineNumber = 700
  lineNumber = 1
  lineNumber = 697
  var call1961 = callmethod(var_ast,"memberNode", [0]);
  var call1962 = callmethod(call1961,"new", [2], string1956, call1960);
  lineNumber = 700
  lineNumber = 1
  lineNumber = 695
  var call1963 = callmethod(var_ast,"memberNode", [0]);
  var call1964 = callmethod(call1963,"new", [2], string1955, call1962);
  lineNumber = 701
  var string1966 = new GraceString("new");
  lineNumber = 1
  lineNumber = 701
  var call1968 = callmethod(var_arg,"dtype", [0]);
  var array1967 = new GraceList([
var_varpat,
call1968,
]);

  lineNumber = 1
  lineNumber = 701
  var call1969 = callmethod(var_ast,"callWithPart", [0]);
  var call1970 = callmethod(call1969,"new", [2], string1966, array1967);
  var array1965 = new GraceList([
call1970,
]);

  lineNumber = 702
  lineNumber = 1
  lineNumber = 694
  var call1971 = callmethod(var_ast,"callNode", [0]);
  var call1972 = callmethod(call1971,"new", [2], call1964, array1965);
  lineNumber = 702
  var array1973 = new GraceList([
var_arg,
]);

  var array1954 = new GraceList([
call1972,
array1973,
]);

  return array1954
  var if1948 = undefined;
}
  lineNumber = 704
  lineNumber = 1
  lineNumber = 704
  var call1974 = callmethod(var_arg,"dtype", [0]);
  lineNumber = 705
  var call1975 = callmethod(this,"rewritematchblockterm2", [1], call1974);
  var var_tmp = call1975;
  var array1976 = new GraceList([
var_arg,
]);

  var var_bindings = array1976;
  lineNumber = 707
  lineNumber = 706
  var idxres1977 = var_tmp.methods["[]"].call(var_tmp, [1], new GraceNum(2));
  lineNumber = 707
  var block1978 = Grace_allocObject();
  block1978.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1978.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1978.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1978.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block1978.receiver = this;
  block1978.className = 'block<typechecker:707>';
  block1978.real = function(
var_b
) {
  var call1979 = callmethod(var_bindings,"push", [1], var_b);
  return call1979;
};
  var call1980 = callmethod(Grace_prelude,"for()do", [1, 1], idxres1977, block1978);
  lineNumber = 716
  lineNumber = 713
  lineNumber = 711
  var string1981 = new GraceString("new");
  lineNumber = 713
  lineNumber = 712
  var string1982 = new GraceString("AndPattern");
  lineNumber = 713
  var string1983 = new GraceString("prelude");
  var bool1984 = new GraceBoolean(false)
  lineNumber = 714
  lineNumber = 1
  lineNumber = 713
  var call1985 = callmethod(var_ast,"identifierNode", [0]);
  var call1986 = callmethod(call1985,"new", [2], string1983, bool1984);
  lineNumber = 715
  lineNumber = 1
  lineNumber = 712
  var call1987 = callmethod(var_ast,"memberNode", [0]);
  var call1988 = callmethod(call1987,"new", [2], string1982, call1986);
  lineNumber = 715
  lineNumber = 1
  lineNumber = 710
  var call1989 = callmethod(var_ast,"memberNode", [0]);
  var call1990 = callmethod(call1989,"new", [2], string1981, call1988);
  lineNumber = 716
  var string1992 = new GraceString("new");
  var idxres1994 = var_tmp.methods["[]"].call(var_tmp, [1], new GraceNum(1));
  var array1993 = new GraceList([
var_varpat,
idxres1994,
]);

  lineNumber = 1
  lineNumber = 716
  var call1995 = callmethod(var_ast,"callWithPart", [0]);
  var call1996 = callmethod(call1995,"new", [2], string1992, array1993);
  var array1991 = new GraceList([
call1996,
]);

  lineNumber = 718
  lineNumber = 1
  lineNumber = 709
  var call1997 = callmethod(var_ast,"callNode", [0]);
  var call1998 = callmethod(call1997,"new", [2], call1990, array1991);
  var var_bindingpat = call1998;
  lineNumber = 718
  var array1999 = new GraceList([
var_bindingpat,
var_bindings,
]);

  return array1999
  var if1943 = undefined;
}
  lineNumber = 720
  var array2001 = new GraceList([
var_arg,
]);

  var array2000 = new GraceList([
var_varpat,
array2001,
]);

  return array2000
  var if1918 = undefined;
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
  this.methods["rewritematchblockterm2"] = func1855;
  lineNumber = 778
var func2002 = function(argcv) {
  var curarg = 1;
  var var_blk = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 725
  lineNumber = 1
  lineNumber = 724
  var call2003 = callmethod(var_blk,"params", [0]);
  var idxres2004 = call2003.methods["[]"].call(call2003, [1], new GraceNum(1));
  var var_arg = idxres2004;
  lineNumber = 726
  lineNumber = 725
  var bool2005 = new GraceBoolean(false)
  var var_pattern = bool2005;
  lineNumber = 727
  lineNumber = 1
  lineNumber = 726
  var call2006 = callmethod(var_blk,"params", [0]);
  var var_newparams = call2006;
  lineNumber = 732
  lineNumber = 733
  lineNumber = 1
  lineNumber = 727
  var call2008 = callmethod(var_arg,"kind", [0]);
  var string2009 = new GraceString("num");
  var opresult2011 = callmethod(call2008, "==", [1], string2009);
  lineNumber = 733
  lineNumber = 1
  lineNumber = 727
  var call2012 = callmethod(var_arg,"kind", [0]);
  var string2013 = new GraceString("string");
  var opresult2015 = callmethod(call2012, "==", [1], string2013);
  var opresult2017 = callmethod(opresult2011, "||", [1], opresult2015);
  lineNumber = 733
  lineNumber = 1
  lineNumber = 728
  var call2018 = callmethod(var_arg,"kind", [0]);
  var string2019 = new GraceString("boolean");
  var opresult2021 = callmethod(call2018, "==", [1], string2019);
  var opresult2023 = callmethod(opresult2017, "||", [1], opresult2021);
  if (Grace_isTrue(opresult2023)) {
  lineNumber = 729
  lineNumber = 730
  var call2024 = callmethod(this,"rewritematchblockterm2", [1], var_arg);
  var var_tmp = call2024;
  lineNumber = 731
  lineNumber = 730
  var idxres2025 = var_tmp.methods["[]"].call(var_tmp, [1], new GraceNum(1));
  var_pattern = idxres2025;
  lineNumber = 732
  lineNumber = 731
  var idxres2026 = var_tmp.methods["[]"].call(var_tmp, [1], new GraceNum(2));
  var_newparams = idxres2026;
  var if2007 = idxres2026;
}
  lineNumber = 772
  lineNumber = 775
  lineNumber = 1
  lineNumber = 733
  var call2028 = callmethod(var_arg,"kind", [0]);
  var string2029 = new GraceString("identifier");
  var opresult2031 = callmethod(call2028, "==", [1], string2029);
  if (Grace_isTrue(opresult2031)) {
  lineNumber = 741
  lineNumber = 738
  lineNumber = 736
  var string2032 = new GraceString("new");
  lineNumber = 738
  lineNumber = 737
  var string2033 = new GraceString("VariablePattern");
  lineNumber = 738
  var string2034 = new GraceString("prelude");
  var bool2035 = new GraceBoolean(false)
  lineNumber = 739
  lineNumber = 1
  lineNumber = 738
  var call2036 = callmethod(var_ast,"identifierNode", [0]);
  var call2037 = callmethod(call2036,"new", [2], string2034, bool2035);
  lineNumber = 740
  lineNumber = 1
  lineNumber = 737
  var call2038 = callmethod(var_ast,"memberNode", [0]);
  var call2039 = callmethod(call2038,"new", [2], string2033, call2037);
  lineNumber = 740
  lineNumber = 1
  lineNumber = 735
  var call2040 = callmethod(var_ast,"memberNode", [0]);
  var call2041 = callmethod(call2040,"new", [2], string2032, call2039);
  lineNumber = 741
  var string2043 = new GraceString("new");
  lineNumber = 1
  lineNumber = 741
  var call2045 = callmethod(var_arg,"value", [0]);
  lineNumber = 1
  lineNumber = 741
  var call2046 = callmethod(var_ast,"stringNode", [0]);
  var call2047 = callmethod(call2046,"new", [1], call2045);
  var array2044 = new GraceList([
call2047,
]);

  lineNumber = 1
  lineNumber = 741
  var call2048 = callmethod(var_ast,"callWithPart", [0]);
  var call2049 = callmethod(call2048,"new", [2], string2043, array2044);
  var array2042 = new GraceList([
call2049,
]);

  lineNumber = 743
  lineNumber = 1
  lineNumber = 734
  var call2050 = callmethod(var_ast,"callNode", [0]);
  var call2051 = callmethod(call2050,"new", [2], call2041, array2042);
  var var_varpat = call2051;
  lineNumber = 772
  lineNumber = 774
  lineNumber = 1
  lineNumber = 743
  var call2053 = callmethod(var_arg,"dtype", [0]);
  var bool2054 = new GraceBoolean(false)
  var opresult2056 = callmethod(call2053, "!=", [1], bool2054);
  if (Grace_isTrue(opresult2056)) {
  lineNumber = 764
  lineNumber = 767
  lineNumber = 1
  lineNumber = 767
  lineNumber = 1
  lineNumber = 744
  var call2058 = callmethod(var_arg,"dtype", [0]);
  var call2059 = callmethod(call2058,"kind", [0]);
  var string2060 = new GraceString("identifier");
  var opresult2062 = callmethod(call2059, "==", [1], string2060);
  if (Grace_isTrue(opresult2062)) {
  lineNumber = 751
  lineNumber = 748
  lineNumber = 746
  var string2063 = new GraceString("new");
  lineNumber = 748
  lineNumber = 747
  var string2064 = new GraceString("AndPattern");
  lineNumber = 748
  var string2065 = new GraceString("prelude");
  var bool2066 = new GraceBoolean(false)
  lineNumber = 749
  lineNumber = 1
  lineNumber = 748
  var call2067 = callmethod(var_ast,"identifierNode", [0]);
  var call2068 = callmethod(call2067,"new", [2], string2065, bool2066);
  lineNumber = 750
  lineNumber = 1
  lineNumber = 747
  var call2069 = callmethod(var_ast,"memberNode", [0]);
  var call2070 = callmethod(call2069,"new", [2], string2064, call2068);
  lineNumber = 750
  lineNumber = 1
  lineNumber = 746
  var call2071 = callmethod(var_ast,"memberNode", [0]);
  var call2072 = callmethod(call2071,"new", [2], string2063, call2070);
  lineNumber = 751
  var string2074 = new GraceString("new");
  lineNumber = 1
  lineNumber = 751
  var call2076 = callmethod(var_arg,"dtype", [0]);
  var array2075 = new GraceList([
var_varpat,
call2076,
]);

  lineNumber = 1
  lineNumber = 751
  var call2077 = callmethod(var_ast,"callWithPart", [0]);
  var call2078 = callmethod(call2077,"new", [2], string2074, array2075);
  var array2073 = new GraceList([
call2078,
]);

  lineNumber = 752
  lineNumber = 1
  lineNumber = 745
  var call2079 = callmethod(var_ast,"callNode", [0]);
  var call2080 = callmethod(call2079,"new", [2], call2072, array2073);
  var_pattern = call2080;
  var if2057 = call2080;
  } else {
  lineNumber = 753
  lineNumber = 1
  lineNumber = 753
  var call2081 = callmethod(var_arg,"dtype", [0]);
  lineNumber = 754
  var call2082 = callmethod(this,"rewritematchblockterm2", [1], call2081);
  var var_tmp = call2082;
  lineNumber = 760
  lineNumber = 757
  lineNumber = 755
  var string2083 = new GraceString("new");
  lineNumber = 757
  lineNumber = 756
  var string2084 = new GraceString("AndPattern");
  lineNumber = 757
  var string2085 = new GraceString("prelude");
  var bool2086 = new GraceBoolean(false)
  lineNumber = 758
  lineNumber = 1
  lineNumber = 757
  var call2087 = callmethod(var_ast,"identifierNode", [0]);
  var call2088 = callmethod(call2087,"new", [2], string2085, bool2086);
  lineNumber = 759
  lineNumber = 1
  lineNumber = 756
  var call2089 = callmethod(var_ast,"memberNode", [0]);
  var call2090 = callmethod(call2089,"new", [2], string2084, call2088);
  lineNumber = 759
  lineNumber = 1
  lineNumber = 755
  var call2091 = callmethod(var_ast,"memberNode", [0]);
  var call2092 = callmethod(call2091,"new", [2], string2083, call2090);
  lineNumber = 760
  var string2094 = new GraceString("new");
  var idxres2096 = var_tmp.methods["[]"].call(var_tmp, [1], new GraceNum(1));
  var array2095 = new GraceList([
var_varpat,
idxres2096,
]);

  lineNumber = 1
  lineNumber = 760
  var call2097 = callmethod(var_ast,"callWithPart", [0]);
  var call2098 = callmethod(call2097,"new", [2], string2094, array2095);
  var array2093 = new GraceList([
call2098,
]);

  lineNumber = 762
  lineNumber = 1
  lineNumber = 754
  var call2099 = callmethod(var_ast,"callNode", [0]);
  var call2100 = callmethod(call2099,"new", [2], call2092, array2093);
  var var_bindingpat = call2100;
  lineNumber = 763
  lineNumber = 762
  var_pattern = var_bindingpat;
  lineNumber = 764
  lineNumber = 763
  var idxres2101 = var_tmp.methods["[]"].call(var_tmp, [1], new GraceNum(2));
  lineNumber = 764
  var block2102 = Grace_allocObject();
  block2102.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2102.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2102.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2102.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2102.receiver = this;
  block2102.className = 'block<typechecker:764>';
  block2102.real = function(
var_p
) {
  var call2103 = callmethod(var_newparams,"push", [1], var_p);
  return call2103;
};
  var call2104 = callmethod(Grace_prelude,"for()do", [1, 1], idxres2101, block2102);
  var if2057 = call2104;
}
  lineNumber = 767
  lineNumber = 768
  var call2105 = callmethod(this,"resolveIdentifiers", [1], var_pattern);
  var_pattern = call2105;
  var if2052 = call2105;
  } else {
  lineNumber = 772
  lineNumber = 773
  lineNumber = 1
  lineNumber = 769
  var call2107 = callmethod(var_blk,"matchingPattern", [0]);
  var opresult2109 = callmethod(call2107, "==", [1], var_arg);
  if (Grace_isTrue(opresult2109)) {
  lineNumber = 770
  lineNumber = 771
  var call2110 = callmethod(this,"resolveIdentifiers", [1], var_arg);
  var_pattern = call2110;
  lineNumber = 772
  var array2111 = new GraceList([
]);

  var_newparams = array2111;
  var if2106 = array2111;
}
  var if2052 = if2106;
}
  var if2027 = if2052;
}
  lineNumber = 775
  lineNumber = 1
  lineNumber = 775
  var call2112 = callmethod(var_blk,"body", [0]);
  lineNumber = 776
  lineNumber = 1
  lineNumber = 775
  var call2113 = callmethod(var_ast,"blockNode", [0]);
  var call2114 = callmethod(call2113,"new", [2], var_newparams, call2112);
  var var_newblk = call2114;
  lineNumber = 777
  lineNumber = 1
  lineNumber = 776
  var call2115 = callmethod(var_newblk,"matchingPattern:=", [1], var_pattern);
  lineNumber = 778
  lineNumber = 777
  return var_newblk
  return undefined
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["rewritematchblock2"] = func2002;
  lineNumber = 814
var func2116 = function(argcv) {
  var curarg = 1;
  var var_param = arguments[curarg];
  curarg++;
  var var_body = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 783
  lineNumber = 786
  lineNumber = 1
  lineNumber = 780
  var call2118 = callmethod(var_param,"kind", [0]);
  var string2119 = new GraceString("identifier");
  var opresult2121 = callmethod(call2118, "==", [1], string2119);
  if (Grace_isTrue(opresult2121)) {
  lineNumber = 781
  lineNumber = 782
  var call2122 = callmethod(this,"bindIdentifier", [1], var_param);
  lineNumber = 783
  lineNumber = 782
  lineNumber = 785
  lineNumber = 1
  lineNumber = 782
  var call2124 = callmethod(var_param,"dtype", [0]);
  var bool2125 = new GraceBoolean(false)
  var opresult2127 = callmethod(call2124, "==", [1], bool2125);
  var block2128 = Grace_allocObject();
  block2128.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2128.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2128.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2128.receiver = this;
  block2128.className = 'block<typechecker:782>';
  block2128.real = function(
) {
  lineNumber = 1
  lineNumber = 782
  lineNumber = 1
  lineNumber = 782
  var call2129 = callmethod(var_param,"dtype", [0]);
  var call2130 = callmethod(call2129,"kind", [0]);
  var string2131 = new GraceString("call");
  var opresult2133 = callmethod(call2130, "==", [1], string2131);
  return opresult2133;
};
  var opresult2135 = callmethod(opresult2127, "||", [1], block2128);
  if (Grace_isTrue(opresult2135)) {
  lineNumber = 783
  var array2136 = new GraceList([
var_param,
var_body,
]);

  return array2136
  var if2123 = undefined;
}
  var if2117 = if2123;
}
  lineNumber = 787
  lineNumber = 786
  var string2137 = new GraceString("__matchterm");
  var opresult2139 = callmethod(string2137, "++", [1], var_auto__95__count);
  lineNumber = 787
  var bool2140 = new GraceBoolean(false)
  lineNumber = 788
  lineNumber = 1
  lineNumber = 786
  var call2141 = callmethod(var_ast,"identifierNode", [0]);
  var call2142 = callmethod(call2141,"new", [2], opresult2139, bool2140);
  var var_newname = call2142;
  lineNumber = 789
  lineNumber = 788
  var opresult2144 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2144;
  lineNumber = 789
  lineNumber = 790
  var call2145 = callmethod(this,"bindIdentifier", [1], var_newname);
  lineNumber = 791
  lineNumber = 790
  var var_pat = var_param;
  lineNumber = 792
  var var_st;
  lineNumber = 811
  lineNumber = 814
  lineNumber = 1
  lineNumber = 792
  var call2147 = callmethod(var_pat,"kind", [0]);
  var string2148 = new GraceString("call");
  var opresult2150 = callmethod(call2147, "==", [1], string2148);
  if (Grace_isTrue(opresult2150)) {
  lineNumber = 800
  lineNumber = 798
  lineNumber = 797
  lineNumber = 796
  var string2151 = new GraceString("match");
  lineNumber = 797
  lineNumber = 1
  lineNumber = 797
  var call2152 = callmethod(var_pat,"value", [0]);
  lineNumber = 1
  lineNumber = 795
  var call2153 = callmethod(var_ast,"memberNode", [0]);
  var call2154 = callmethod(call2153,"new", [2], string2151, call2152);
  lineNumber = 798
  var string2156 = new GraceString("match");
  var array2157 = new GraceList([
var_newname,
]);

  lineNumber = 1
  lineNumber = 798
  var call2158 = callmethod(var_ast,"callWithPart", [0]);
  var call2159 = callmethod(call2158,"new", [2], string2156, array2157);
  var array2155 = new GraceList([
call2159,
]);

  lineNumber = 1
  lineNumber = 794
  var call2160 = callmethod(var_ast,"callNode", [0]);
  var call2161 = callmethod(call2160,"new", [2], call2154, array2155);
  lineNumber = 799
  lineNumber = 800
  var string2163 = new GraceString("MatchFailed");
  var bool2164 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 800
  var call2165 = callmethod(var_ast,"identifierNode", [0]);
  var call2166 = callmethod(call2165,"new", [2], string2163, bool2164);
  var array2162 = new GraceList([
call2166,
]);

  lineNumber = 802
  lineNumber = 1
  lineNumber = 793
  var call2167 = callmethod(var_ast,"ifNode", [0]);
  var call2168 = callmethod(call2167,"new", [3], call2161, var_body, array2162);
  var_st = call2168;
  var if2146 = call2168;
  } else {
  lineNumber = 811
  lineNumber = 807
  lineNumber = 1
  lineNumber = 802
  var call2170 = callmethod(var_pat,"kind", [0]);
  var string2171 = new GraceString("identifier");
  var opresult2173 = callmethod(call2170, "==", [1], string2171);
  if (Grace_isTrue(opresult2173)) {
  lineNumber = 804
  lineNumber = 1
  lineNumber = 803
  var call2174 = callmethod(var_pat,"dtype", [0]);
  var_pat = call2174;
  lineNumber = 805
  lineNumber = 1
  lineNumber = 804
  var bool2175 = new GraceBoolean(false)
  var call2176 = callmethod(var_param,"dtype:=", [1], bool2175);
  lineNumber = 806
  lineNumber = 805
  var string2177 = new GraceString("print");
  lineNumber = 1
  lineNumber = 805
  var call2178 = callmethod(var_ast,"identifierNode", [0]);
  var call2179 = callmethod(call2178,"new", [1], string2177);
  lineNumber = 806
  var string2181 = new GraceString("print");
  var string2183 = new GraceString("Recursively binding pattern matches unimplemented");
  lineNumber = 1
  lineNumber = 806
  var call2184 = callmethod(var_ast,"stringNode", [0]);
  var call2185 = callmethod(call2184,"new", [1], string2183);
  var array2182 = new GraceList([
call2185,
]);

  lineNumber = 1
  lineNumber = 806
  var call2186 = callmethod(var_ast,"callWithPart", [0]);
  var call2187 = callmethod(call2186,"new", [2], string2181, array2182);
  var array2180 = new GraceList([
call2187,
]);

  lineNumber = 807
  lineNumber = 1
  lineNumber = 805
  var call2188 = callmethod(var_ast,"callNode", [0]);
  var call2189 = callmethod(call2188,"new", [2], call2179, array2180);
  var_st = call2189;
  var if2169 = call2189;
  } else {
  lineNumber = 811
  lineNumber = 809
  var string2190 = new GraceString("==");
  lineNumber = 1
  lineNumber = 809
  var call2191 = callmethod(var_ast,"opNode", [0]);
  var call2192 = callmethod(call2191,"new", [3], string2190, var_pat, var_newname);
  lineNumber = 810
  lineNumber = 811
  var string2194 = new GraceString("MatchFailed");
  var bool2195 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 811
  var call2196 = callmethod(var_ast,"identifierNode", [0]);
  var call2197 = callmethod(call2196,"new", [2], string2194, bool2195);
  var array2193 = new GraceList([
call2197,
]);

  lineNumber = 813
  lineNumber = 1
  lineNumber = 808
  var call2198 = callmethod(var_ast,"ifNode", [0]);
  var call2199 = callmethod(call2198,"new", [3], call2192, var_body, array2193);
  var_st = call2199;
  var if2169 = call2199;
}
  var if2146 = if2169;
}
  lineNumber = 814
  var array2201 = new GraceList([
var_st,
]);

  var array2200 = new GraceList([
var_newname,
array2201,
]);

  return array2200
  return undefined
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["rewritematchblockterm"] = func2116;
  lineNumber = 959
var func2202 = function(argcv) {
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 819
  lineNumber = 1
  lineNumber = 818
  var call2203 = callmethod(var_o,"params", [0]);
  var var_params = call2203;
  lineNumber = 821
  lineNumber = 823
  lineNumber = 1
  lineNumber = 819
  var call2205 = callmethod(var_params,"size", [0]);
  var opresult2207 = callmethod(call2205, "/=", [1], new GraceNum(1));
  if (Grace_isTrue(opresult2207)) {
  lineNumber = 820
  lineNumber = 1
  lineNumber = 820
  var call2208 = callmethod(var_o,"body", [0]);
  lineNumber = 821
  var call2209 = callmethod(this,"resolveIdentifiersList", [1], call2208);
  var var_skipListBody = call2209;
  lineNumber = 1
  lineNumber = 821
  var call2210 = callmethod(var_o,"params", [0]);
  lineNumber = 822
  lineNumber = 1
  lineNumber = 821
  var call2211 = callmethod(var_ast,"blockNode", [0]);
  var call2212 = callmethod(call2211,"new", [2], call2210, var_skipListBody);
  return call2212
  var if2204 = undefined;
}
  lineNumber = 824
  lineNumber = 1
  lineNumber = 823
  var call2213 = callmethod(var_o,"body", [0]);
  var var_body = call2213;
  lineNumber = 825
  lineNumber = 824
  var var_inbody = var_body;
  lineNumber = 826
  var var_pat;
  lineNumber = 827
  var var_tmpp;
  lineNumber = 828
  var var_nparams;
  lineNumber = 829
  lineNumber = 828
  var string2214 = new GraceString("__matchvar");
  var opresult2216 = callmethod(string2214, "++", [1], var_auto__95__count);
  lineNumber = 829
  var bool2217 = new GraceBoolean(false)
  lineNumber = 830
  lineNumber = 1
  lineNumber = 828
  var call2218 = callmethod(var_ast,"identifierNode", [0]);
  var call2219 = callmethod(call2218,"new", [2], opresult2216, bool2217);
  var var_newname = call2219;
  lineNumber = 831
  lineNumber = 830
  var opresult2221 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2221;
  lineNumber = 831
  lineNumber = 832
  var call2222 = callmethod(this,"bindIdentifier", [1], var_newname);
  lineNumber = 833
  lineNumber = 1
  lineNumber = 832
  var call2223 = callmethod(var_params,"first", [0]);
  var var_fst = call2223;
  lineNumber = 955
  lineNumber = 957
  lineNumber = 1
  lineNumber = 833
  var call2225 = callmethod(var_fst,"kind", [0]);
  var string2226 = new GraceString("call");
  var opresult2228 = callmethod(call2225, "==", [1], string2226);
  if (Grace_isTrue(opresult2228)) {
  lineNumber = 835
  lineNumber = 834
  var_pat = var_fst;
  lineNumber = 836
  lineNumber = 835
  var_tmpp = var_fst;
  lineNumber = 836
  var array2229 = new GraceList([
var_newname,
]);

  var_params = array2229;
  lineNumber = 838
  var array2230 = new GraceList([
]);

  var_nparams = array2230;
  lineNumber = 844
  lineNumber = 838
  lineNumber = 1
  lineNumber = 838
  var call2231 = callmethod(var_pat,"with", [0]);
  lineNumber = 844
  var block2232 = Grace_allocObject();
  block2232.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2232.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2232.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2232.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2232.receiver = this;
  block2232.className = 'block<typechecker:844>';
  block2232.real = function(
var_part
) {
  lineNumber = 839
  lineNumber = 1
  lineNumber = 839
  lineNumber = 1
  lineNumber = 839
  var call2233 = callmethod(var_part,"args", [0]);
  var call2234 = callmethod(call2233,"indices", [0]);
  lineNumber = 844
  var block2235 = Grace_allocObject();
  block2235.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2235.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2235.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2235.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2235.receiver = this;
  block2235.className = 'block<typechecker:844>';
  block2235.real = function(
var_pwi
) {
  lineNumber = 841
  lineNumber = 1
  lineNumber = 840
  var call2236 = callmethod(var_part,"args", [0]);
  var idxres2237 = call2236.methods["[]"].call(call2236, [1], var_pwi);
  var var_pw = idxres2237;
  lineNumber = 841
  lineNumber = 842
  var call2238 = callmethod(this,"rewritematchblockterm", [2], var_pw, var_inbody);
  var var_rw2 = call2238;
  lineNumber = 843
  lineNumber = 1
  lineNumber = 842
  lineNumber = 843
  lineNumber = 842
  var idxres2239 = var_rw2.methods["[]"].call(var_rw2, [1], new GraceNum(1));
  lineNumber = 843
  lineNumber = 1
  lineNumber = 842
  var call2240 = callmethod(var_part,"args", [0]);
  var call2241 = callmethod(call2240,"[]:=", [2], var_pwi, idxres2239);
  lineNumber = 844
  lineNumber = 843
  var idxres2242 = var_rw2.methods["[]"].call(var_rw2, [1], new GraceNum(2));
  var_inbody = idxres2242;
  return idxres2242;
};
  var call2243 = callmethod(Grace_prelude,"for()do", [1, 1], call2234, block2235);
  return call2243;
};
  var call2244 = callmethod(Grace_prelude,"for()do", [1, 1], call2231, block2232);
  lineNumber = 846
  lineNumber = 847
  var call2245 = callmethod(this,"resolveIdentifiersList", [1], var_inbody);
  var_inbody = call2245;
  lineNumber = 848
  var array2246 = new GraceList([
]);

  var var_args = array2246;
  lineNumber = 850
  lineNumber = 848
  lineNumber = 1
  lineNumber = 848
  var call2247 = callmethod(var_pat,"with", [0]);
  lineNumber = 850
  var block2248 = Grace_allocObject();
  block2248.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2248.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2248.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2248.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2248.receiver = this;
  block2248.className = 'block<typechecker:850>';
  block2248.real = function(
var_part
) {
  lineNumber = 849
  lineNumber = 1
  lineNumber = 849
  var call2249 = callmethod(var_part,"args", [0]);
  lineNumber = 850
  var block2250 = Grace_allocObject();
  block2250.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2250.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2250.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2250.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2250.receiver = this;
  block2250.className = 'block<typechecker:850>';
  block2250.real = function(
var_arg
) {
  var call2251 = callmethod(var_args,"push", [1], var_arg);
  return call2251;
};
  var call2252 = callmethod(Grace_prelude,"for()do", [1, 1], call2249, block2250);
  return call2252;
};
  var call2253 = callmethod(Grace_prelude,"for()do", [1, 1], call2247, block2248);
  lineNumber = 869
  lineNumber = 858
  lineNumber = 857
  lineNumber = 856
  var string2255 = new GraceString("match");
  lineNumber = 857
  lineNumber = 1
  lineNumber = 857
  var call2256 = callmethod(var_pat,"value", [0]);
  lineNumber = 1
  lineNumber = 855
  var call2257 = callmethod(var_ast,"memberNode", [0]);
  var call2258 = callmethod(call2257,"new", [2], string2255, call2256);
  lineNumber = 858
  var string2260 = new GraceString("match");
  var array2261 = new GraceList([
var_newname,
]);

  lineNumber = 1
  lineNumber = 858
  var call2262 = callmethod(var_ast,"callWithPart", [0]);
  var call2263 = callmethod(call2262,"new", [2], string2260, array2261);
  var array2259 = new GraceList([
call2263,
]);

  lineNumber = 1
  lineNumber = 854
  var call2264 = callmethod(var_ast,"callNode", [0]);
  var call2265 = callmethod(call2264,"new", [2], call2258, array2259);
  lineNumber = 866
  lineNumber = 862
  lineNumber = 861
  var string2267 = new GraceString("applyIndirectly");
  lineNumber = 862
  lineNumber = 863
  lineNumber = 1
  lineNumber = 862
  var call2268 = callmethod(var_ast,"blockNode", [0]);
  var call2269 = callmethod(call2268,"new", [2], var_args, var_inbody);
  lineNumber = 863
  lineNumber = 1
  lineNumber = 861
  var call2270 = callmethod(var_ast,"memberNode", [0]);
  var call2271 = callmethod(call2270,"new", [2], string2267, call2269);
  lineNumber = 866
  lineNumber = 864
  var string2273 = new GraceString("applyIndirectly");
  lineNumber = 866
  lineNumber = 865
  var string2275 = new GraceString("try");
  lineNumber = 1
  lineNumber = 865
  var call2276 = callmethod(var_pat,"value", [0]);
  lineNumber = 1
  lineNumber = 865
  var call2277 = callmethod(var_ast,"memberNode", [0]);
  var call2278 = callmethod(call2277,"new", [2], string2275, call2276);
  lineNumber = 866
  var string2280 = new GraceString("try");
  var array2281 = new GraceList([
var_newname,
]);

  lineNumber = 1
  lineNumber = 866
  var call2282 = callmethod(var_ast,"callWithPart", [0]);
  var call2283 = callmethod(call2282,"new", [2], string2280, array2281);
  var array2279 = new GraceList([
call2283,
]);

  lineNumber = 867
  lineNumber = 1
  lineNumber = 864
  var call2284 = callmethod(var_ast,"callNode", [0]);
  var call2285 = callmethod(call2284,"new", [2], call2278, array2279);
  var array2274 = new GraceList([
call2285,
]);

  lineNumber = 867
  lineNumber = 1
  lineNumber = 864
  var call2286 = callmethod(var_ast,"callWithPart", [0]);
  var call2287 = callmethod(call2286,"new", [2], string2273, array2274);
  var array2272 = new GraceList([
call2287,
]);

  lineNumber = 868
  lineNumber = 1
  lineNumber = 860
  var call2288 = callmethod(var_ast,"callNode", [0]);
  var call2289 = callmethod(call2288,"new", [2], call2271, array2272);
  var array2266 = new GraceList([
call2289,
]);

  lineNumber = 869
  var string2291 = new GraceString("MatchFailed");
  var bool2292 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 869
  var call2293 = callmethod(var_ast,"identifierNode", [0]);
  var call2294 = callmethod(call2293,"new", [2], string2291, bool2292);
  var array2290 = new GraceList([
call2294,
]);

  lineNumber = 871
  lineNumber = 1
  lineNumber = 853
  var call2295 = callmethod(var_ast,"ifNode", [0]);
  var call2296 = callmethod(call2295,"new", [3], call2265, array2266, array2290);
  var array2254 = new GraceList([
call2296,
]);

  var_body = array2254;
  var if2224 = array2254;
  } else {
  lineNumber = 955
  lineNumber = 889
  lineNumber = 1
  lineNumber = 872
  var call2298 = callmethod(var_fst,"kind", [0]);
  var string2299 = new GraceString("identifier");
  var opresult2301 = callmethod(call2298, "/=", [1], string2299);
  if (Grace_isTrue(opresult2301)) {
  lineNumber = 874
  lineNumber = 873
  var opresult2303 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2303;
  lineNumber = 875
  lineNumber = 874
  var_pat = var_fst;
  lineNumber = 875
  var array2304 = new GraceList([
var_newname,
]);

  var_params = array2304;
  lineNumber = 876
  lineNumber = 877
  var call2305 = callmethod(this,"resolveIdentifiersList", [1], var_inbody);
  var_inbody = call2305;
  lineNumber = 886
  lineNumber = 878
  var string2307 = new GraceString("==");
  lineNumber = 1
  lineNumber = 878
  var call2308 = callmethod(var_ast,"opNode", [0]);
  var call2309 = callmethod(call2308,"new", [3], string2307, var_pat, var_newname);
  lineNumber = 884
  lineNumber = 882
  lineNumber = 881
  var string2311 = new GraceString("apply");
  lineNumber = 882
  var array2312 = new GraceList([
]);

  lineNumber = 883
  lineNumber = 1
  lineNumber = 882
  var call2313 = callmethod(var_ast,"blockNode", [0]);
  var call2314 = callmethod(call2313,"new", [2], array2312, var_inbody);
  lineNumber = 883
  lineNumber = 1
  lineNumber = 881
  var call2315 = callmethod(var_ast,"memberNode", [0]);
  var call2316 = callmethod(call2315,"new", [2], string2311, call2314);
  lineNumber = 884
  var string2318 = new GraceString("apply");
  lineNumber = 1
  lineNumber = 884
  var call2319 = callmethod(var_ast,"callWithPart", [0]);
  var call2320 = callmethod(call2319,"new", [1], string2318);
  var array2317 = new GraceList([
call2320,
]);

  lineNumber = 885
  lineNumber = 1
  lineNumber = 880
  var call2321 = callmethod(var_ast,"callNode", [0]);
  var call2322 = callmethod(call2321,"new", [2], call2316, array2317);
  var array2310 = new GraceList([
call2322,
]);

  lineNumber = 886
  var string2324 = new GraceString("MatchFailed");
  var bool2325 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 886
  var call2326 = callmethod(var_ast,"identifierNode", [0]);
  var call2327 = callmethod(call2326,"new", [2], string2324, bool2325);
  var array2323 = new GraceList([
call2327,
]);

  lineNumber = 888
  lineNumber = 1
  lineNumber = 877
  var call2328 = callmethod(var_ast,"ifNode", [0]);
  var call2329 = callmethod(call2328,"new", [3], call2309, array2310, array2323);
  var array2306 = new GraceList([
call2329,
]);

  var_body = array2306;
  var if2297 = array2306;
  } else {
  lineNumber = 955
  lineNumber = 954
  lineNumber = 1
  lineNumber = 889
  var call2331 = callmethod(var_fst,"dtype", [0]);
  var bool2332 = new GraceBoolean(false)
  var opresult2334 = callmethod(call2331, "/=", [1], bool2332);
  if (Grace_isTrue(opresult2334)) {
  lineNumber = 891
  lineNumber = 1
  lineNumber = 890
  var call2335 = callmethod(var_fst,"dtype", [0]);
  var_pat = call2335;
  lineNumber = 892
  lineNumber = 891
  var_tmpp = var_fst;
  lineNumber = 949
  lineNumber = 954
  lineNumber = 1
  lineNumber = 892
  var call2337 = callmethod(var_pat,"kind", [0]);
  var string2338 = new GraceString("call");
  var opresult2340 = callmethod(call2337, "==", [1], string2338);
  if (Grace_isTrue(opresult2340)) {
  lineNumber = 894
  var array2341 = new GraceList([
]);

  var_nparams = array2341;
  var array2342 = new GraceList([
var_newname,
]);

  var_params = array2342;
  lineNumber = 901
  lineNumber = 895
  lineNumber = 1
  lineNumber = 895
  var call2343 = callmethod(var_pat,"with", [0]);
  lineNumber = 901
  var block2344 = Grace_allocObject();
  block2344.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2344.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2344.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2344.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2344.receiver = this;
  block2344.className = 'block<typechecker:901>';
  block2344.real = function(
var_part
) {
  lineNumber = 896
  lineNumber = 1
  lineNumber = 896
  lineNumber = 1
  lineNumber = 896
  var call2345 = callmethod(var_part,"args", [0]);
  var call2346 = callmethod(call2345,"indices", [0]);
  lineNumber = 901
  var block2347 = Grace_allocObject();
  block2347.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2347.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2347.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2347.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2347.receiver = this;
  block2347.className = 'block<typechecker:901>';
  block2347.real = function(
var_pwi
) {
  lineNumber = 898
  lineNumber = 1
  lineNumber = 897
  var call2348 = callmethod(var_part,"args", [0]);
  var idxres2349 = call2348.methods["[]"].call(call2348, [1], var_pwi);
  var var_pw = idxres2349;
  lineNumber = 898
  lineNumber = 899
  var call2350 = callmethod(this,"rewritematchblockterm", [2], var_pw, var_inbody);
  var var_rw2 = call2350;
  lineNumber = 900
  lineNumber = 1
  lineNumber = 899
  lineNumber = 900
  lineNumber = 899
  var idxres2351 = var_rw2.methods["[]"].call(var_rw2, [1], new GraceNum(1));
  lineNumber = 900
  lineNumber = 1
  lineNumber = 899
  var call2352 = callmethod(var_part,"args", [0]);
  var call2353 = callmethod(call2352,"[]:=", [2], var_pwi, idxres2351);
  lineNumber = 901
  lineNumber = 900
  var idxres2354 = var_rw2.methods["[]"].call(var_rw2, [1], new GraceNum(2));
  var_inbody = idxres2354;
  return idxres2354;
};
  var call2355 = callmethod(Grace_prelude,"for()do", [1, 1], call2346, block2347);
  return call2355;
};
  var call2356 = callmethod(Grace_prelude,"for()do", [1, 1], call2343, block2344);
  lineNumber = 903
  lineNumber = 904
  var call2357 = callmethod(this,"resolveIdentifiersList", [1], var_inbody);
  var_inbody = call2357;
  lineNumber = 928
  lineNumber = 909
  lineNumber = 908
  lineNumber = 907
  var string2359 = new GraceString("match");
  lineNumber = 908
  lineNumber = 1
  lineNumber = 908
  var call2360 = callmethod(var_pat,"value", [0]);
  lineNumber = 1
  lineNumber = 906
  var call2361 = callmethod(var_ast,"memberNode", [0]);
  var call2362 = callmethod(call2361,"new", [2], string2359, call2360);
  lineNumber = 909
  var string2364 = new GraceString("match");
  var array2365 = new GraceList([
var_newname,
]);

  lineNumber = 1
  lineNumber = 909
  var call2366 = callmethod(var_ast,"callWithPart", [0]);
  var call2367 = callmethod(call2366,"new", [2], string2364, array2365);
  var array2363 = new GraceList([
call2367,
]);

  lineNumber = 1
  lineNumber = 905
  var call2368 = callmethod(var_ast,"callNode", [0]);
  var call2369 = callmethod(call2368,"new", [2], call2362, array2363);
  lineNumber = 924
  lineNumber = 914
  lineNumber = 912
  var string2371 = new GraceString("applyIndirectly");
  lineNumber = 914
  lineNumber = 913
  lineNumber = 1
  lineNumber = 913
  lineNumber = 1
  lineNumber = 913
  lineNumber = 1
  lineNumber = 913
  var call2372 = callmethod(var_pat,"with", [0]);
  var call2373 = callmethod(call2372,"args", [0]);
  var call2374 = callmethod(call2373,"first", [0]);
  var call2375 = callmethod(call2374,"prepended", [1], var_fst);
  lineNumber = 914
  lineNumber = 915
  lineNumber = 1
  lineNumber = 913
  var call2376 = callmethod(var_ast,"blockNode", [0]);
  var call2377 = callmethod(call2376,"new", [2], call2375, var_inbody);
  lineNumber = 915
  lineNumber = 1
  lineNumber = 912
  var call2378 = callmethod(var_ast,"memberNode", [0]);
  var call2379 = callmethod(call2378,"new", [2], string2371, call2377);
  lineNumber = 924
  lineNumber = 916
  var string2381 = new GraceString("applyIndirectly");
  lineNumber = 924
  lineNumber = 921
  lineNumber = 918
  var string2383 = new GraceString("prepended");
  lineNumber = 921
  lineNumber = 920
  var string2384 = new GraceString("try");
  lineNumber = 1
  lineNumber = 920
  var call2385 = callmethod(var_pat,"value", [0]);
  lineNumber = 1
  lineNumber = 920
  var call2386 = callmethod(var_ast,"memberNode", [0]);
  var call2387 = callmethod(call2386,"new", [2], string2384, call2385);
  lineNumber = 921
  var string2389 = new GraceString("try");
  var array2390 = new GraceList([
var_newname,
]);

  lineNumber = 1
  lineNumber = 921
  var call2391 = callmethod(var_ast,"callWithPart", [0]);
  var call2392 = callmethod(call2391,"new", [2], string2389, array2390);
  var array2388 = new GraceList([
call2392,
]);

  lineNumber = 923
  lineNumber = 1
  lineNumber = 919
  var call2393 = callmethod(var_ast,"callNode", [0]);
  var call2394 = callmethod(call2393,"new", [2], call2387, array2388);
  lineNumber = 923
  lineNumber = 1
  lineNumber = 917
  var call2395 = callmethod(var_ast,"memberNode", [0]);
  var call2396 = callmethod(call2395,"new", [2], string2383, call2394);
  lineNumber = 924
  var string2398 = new GraceString("prepended");
  var array2399 = new GraceList([
var_newname,
]);

  lineNumber = 1
  lineNumber = 924
  var call2400 = callmethod(var_ast,"callWithPart", [0]);
  var call2401 = callmethod(call2400,"new", [2], string2398, array2399);
  var array2397 = new GraceList([
call2401,
]);

  lineNumber = 926
  lineNumber = 1
  lineNumber = 916
  var call2402 = callmethod(var_ast,"callNode", [0]);
  var call2403 = callmethod(call2402,"new", [2], call2396, array2397);
  var array2382 = new GraceList([
call2403,
]);

  lineNumber = 926
  lineNumber = 1
  lineNumber = 916
  var call2404 = callmethod(var_ast,"callWithPart", [0]);
  var call2405 = callmethod(call2404,"new", [2], string2381, array2382);
  var array2380 = new GraceList([
call2405,
]);

  lineNumber = 927
  lineNumber = 1
  lineNumber = 911
  var call2406 = callmethod(var_ast,"callNode", [0]);
  var call2407 = callmethod(call2406,"new", [2], call2379, array2380);
  var array2370 = new GraceList([
call2407,
]);

  lineNumber = 928
  var string2409 = new GraceString("MatchFailed");
  var bool2410 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 928
  var call2411 = callmethod(var_ast,"identifierNode", [0]);
  var call2412 = callmethod(call2411,"new", [2], string2409, bool2410);
  var array2408 = new GraceList([
call2412,
]);

  lineNumber = 930
  lineNumber = 1
  lineNumber = 904
  var call2413 = callmethod(var_ast,"ifNode", [0]);
  var call2414 = callmethod(call2413,"new", [3], call2369, array2370, array2408);
  var array2358 = new GraceList([
call2414,
]);

  var_body = array2358;
  var if2336 = array2358;
  } else {
  lineNumber = 932
  lineNumber = 933
  var call2415 = callmethod(this,"resolveIdentifiersList", [1], var_inbody);
  var_inbody = call2415;
  lineNumber = 1
  lineNumber = 933
  var call2416 = callmethod(var_pat,"value", [0]);
  lineNumber = 934
  var call2417 = callmethod(this,"findName", [1], call2416);
  var var_binding = call2417;
  lineNumber = 949
  lineNumber = 953
  lineNumber = 1
  lineNumber = 934
  var call2419 = callmethod(var_binding,"kind", [0]);
  var string2420 = new GraceString("type");
  var opresult2422 = callmethod(call2419, "!=", [1], string2420);
  if (Grace_isTrue(opresult2422)) {
  lineNumber = 935
  var array2423 = new GraceList([
var_newname,
]);

  var_params = array2423;
  lineNumber = 949
  lineNumber = 941
  lineNumber = 940
  lineNumber = 939
  var string2425 = new GraceString("match");
  lineNumber = 940
  lineNumber = 1
  lineNumber = 938
  var call2426 = callmethod(var_ast,"memberNode", [0]);
  var call2427 = callmethod(call2426,"new", [2], string2425, var_pat);
  lineNumber = 941
  var string2429 = new GraceString("match");
  var array2430 = new GraceList([
var_newname,
]);

  lineNumber = 1
  lineNumber = 941
  var call2431 = callmethod(var_ast,"callWithPart", [0]);
  var call2432 = callmethod(call2431,"new", [2], string2429, array2430);
  var array2428 = new GraceList([
call2432,
]);

  lineNumber = 1
  lineNumber = 937
  var call2433 = callmethod(var_ast,"callNode", [0]);
  var call2434 = callmethod(call2433,"new", [2], call2427, array2428);
  lineNumber = 947
  lineNumber = 945
  lineNumber = 944
  var string2436 = new GraceString("apply");
  lineNumber = 945
  lineNumber = 1
  lineNumber = 945
  var call2437 = callmethod(var_o,"params", [0]);
  lineNumber = 946
  lineNumber = 1
  lineNumber = 945
  var call2438 = callmethod(var_ast,"blockNode", [0]);
  var call2439 = callmethod(call2438,"new", [2], call2437, var_inbody);
  lineNumber = 946
  lineNumber = 1
  lineNumber = 944
  var call2440 = callmethod(var_ast,"memberNode", [0]);
  var call2441 = callmethod(call2440,"new", [2], string2436, call2439);
  lineNumber = 947
  var string2443 = new GraceString("apply");
  var array2444 = new GraceList([
var_newname,
]);

  lineNumber = 1
  lineNumber = 947
  var call2445 = callmethod(var_ast,"callWithPart", [0]);
  var call2446 = callmethod(call2445,"new", [2], string2443, array2444);
  var array2442 = new GraceList([
call2446,
]);

  lineNumber = 948
  lineNumber = 1
  lineNumber = 943
  var call2447 = callmethod(var_ast,"callNode", [0]);
  var call2448 = callmethod(call2447,"new", [2], call2441, array2442);
  var array2435 = new GraceList([
call2448,
]);

  lineNumber = 949
  var string2450 = new GraceString("MatchFailed");
  var bool2451 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 949
  var call2452 = callmethod(var_ast,"identifierNode", [0]);
  var call2453 = callmethod(call2452,"new", [2], string2450, bool2451);
  var array2449 = new GraceList([
call2453,
]);

  lineNumber = 951
  lineNumber = 1
  lineNumber = 936
  var call2454 = callmethod(var_ast,"ifNode", [0]);
  var call2455 = callmethod(call2454,"new", [3], call2434, array2435, array2449);
  var array2424 = new GraceList([
call2455,
]);

  var_body = array2424;
  var if2418 = array2424;
}
  var if2336 = if2418;
}
  var if2330 = if2336;
  } else {
  lineNumber = 955
  lineNumber = 956
  var call2456 = callmethod(this,"resolveIdentifiersList", [1], var_body);
  var_body = call2456;
  var if2330 = call2456;
}
  var if2297 = if2330;
}
  var if2224 = if2297;
}
  lineNumber = 957
  lineNumber = 958
  lineNumber = 1
  lineNumber = 957
  var call2457 = callmethod(var_ast,"blockNode", [0]);
  var call2458 = callmethod(call2457,"new", [2], var_params, var_body);
  var_o = call2458;
  lineNumber = 959
  lineNumber = 958
  return var_o
  return undefined
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["rewritematchblock"] = func2202;
  lineNumber = 1376
var func2459 = function(argcv) {
  var curarg = 1;
  var var_node = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 963
  var var_l;
  lineNumber = 964
  var var_tmp;
  lineNumber = 965
  var var_tmp2;
  lineNumber = 966
  var var_tmp3;
  lineNumber = 967
  var var_tmp4;
  lineNumber = 969
  lineNumber = 970
  lineNumber = 967
  var bool2461 = new GraceBoolean(false)
  var opresult2463 = callmethod(var_node, "==", [1], bool2461);
  if (Grace_isTrue(opresult2463)) {
  lineNumber = 969
  lineNumber = 968
  return var_node
  var if2460 = undefined;
}
  lineNumber = 973
  lineNumber = 974
  lineNumber = 1
  lineNumber = 970
  var call2465 = callmethod(var_node,"kind", [0]);
  var string2466 = new GraceString("identifier");
  var opresult2468 = callmethod(call2465, "==", [1], string2466);
  if (Grace_isTrue(opresult2468)) {
  lineNumber = 971
  lineNumber = 972
  var call2469 = callmethod(this,"resolveIdentifier", [1], var_node);
  var_tmp = call2469;
  lineNumber = 973
  lineNumber = 972
  return var_tmp
  var if2464 = undefined;
}
  lineNumber = 977
  lineNumber = 979
  lineNumber = 1
  lineNumber = 974
  var call2471 = callmethod(var_node,"kind", [0]);
  var string2472 = new GraceString("generic");
  var opresult2474 = callmethod(call2471, "==", [1], string2472);
  if (Grace_isTrue(opresult2474)) {
  lineNumber = 975
  lineNumber = 1
  lineNumber = 975
  var call2475 = callmethod(var_node,"value", [0]);
  lineNumber = 976
  var call2476 = callmethod(this,"resolveIdentifier", [1], call2475);
  var_tmp = call2476;
  lineNumber = 1
  lineNumber = 976
  var call2477 = callmethod(var_node,"params", [0]);
  lineNumber = 977
  var call2478 = callmethod(this,"resolveIdentifiersList", [1], call2477);
  var_tmp2 = call2478;
  lineNumber = 978
  lineNumber = 1
  lineNumber = 977
  var call2479 = callmethod(var_ast,"genericNode", [0]);
  var call2480 = callmethod(call2479,"new", [2], var_tmp, var_tmp2);
  return call2480
  var if2470 = undefined;
}
  lineNumber = 981
  lineNumber = 983
  lineNumber = 1
  lineNumber = 979
  var call2482 = callmethod(var_node,"kind", [0]);
  var string2483 = new GraceString("op");
  var opresult2485 = callmethod(call2482, "==", [1], string2483);
  if (Grace_isTrue(opresult2485)) {
  lineNumber = 981
  lineNumber = 980
  lineNumber = 1
  lineNumber = 980
  var call2486 = callmethod(var_node,"value", [0]);
  lineNumber = 1
  lineNumber = 980
  var call2487 = callmethod(var_node,"left", [0]);
  var call2488 = callmethod(this,"resolveIdentifiers", [1], call2487);
  lineNumber = 981
  lineNumber = 1
  lineNumber = 981
  var call2489 = callmethod(var_node,"right", [0]);
  var call2490 = callmethod(this,"resolveIdentifiers", [1], call2489);
  lineNumber = 982
  lineNumber = 1
  lineNumber = 980
  var call2491 = callmethod(var_ast,"opNode", [0]);
  var call2492 = callmethod(call2491,"new", [3], call2486, call2488, call2490);
  return call2492
  var if2481 = undefined;
}
  lineNumber = 998
  lineNumber = 1000
  lineNumber = 1
  lineNumber = 983
  var call2494 = callmethod(var_node,"kind", [0]);
  var string2495 = new GraceString("call");
  var opresult2497 = callmethod(call2494, "==", [1], string2495);
  if (Grace_isTrue(opresult2497)) {
  lineNumber = 984
  lineNumber = 1
  lineNumber = 984
  var call2498 = callmethod(var_node,"value", [0]);
  lineNumber = 985
  var call2499 = callmethod(this,"resolveIdentifiers", [1], call2498);
  var var_p = call2499;
  lineNumber = 991
  lineNumber = 993
  lineNumber = 1
  lineNumber = 985
  var call2501 = callmethod(var_p,"kind", [0]);
  var string2502 = new GraceString("call");
  var opresult2504 = callmethod(call2501, "==", [1], string2502);
  if (Grace_isTrue(opresult2504)) {
  lineNumber = 987
  lineNumber = 1
  lineNumber = 986
  var call2505 = callmethod(var_node,"with", [0]);
  var_tmp = call2505;
  lineNumber = 989
  lineNumber = 987
  lineNumber = 1
  lineNumber = 987
  lineNumber = 1
  lineNumber = 987
  var call2506 = callmethod(var_node,"with", [0]);
  var call2507 = callmethod(call2506,"indices", [0]);
  lineNumber = 989
  var block2508 = Grace_allocObject();
  block2508.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2508.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2508.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2508.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2508.receiver = this;
  block2508.className = 'block<typechecker:989>';
  block2508.real = function(
var_partnr
) {
  lineNumber = 1
  lineNumber = 988
  var call2509 = callmethod(var_node,"with", [0]);
  var idxres2510 = call2509.methods["[]"].call(call2509, [1], var_partnr);
  var var_part = idxres2510;
  lineNumber = 989
  lineNumber = 1
  lineNumber = 989
  lineNumber = 1
  lineNumber = 989
  var call2511 = callmethod(var_part,"args", [0]);
  lineNumber = 990
  var call2512 = callmethod(this,"resolveIdentifiersList", [1], call2511);
  lineNumber = 989
  var idxres2513 = var_tmp.methods["[]"].call(var_tmp, [1], var_partnr);
  var call2514 = callmethod(idxres2513,"args:=", [1], call2512);
  return call2514;
};
  var call2515 = callmethod(Grace_prelude,"for()do", [1, 1], call2507, block2508);
  lineNumber = 991
  lineNumber = 1
  lineNumber = 991
  var call2516 = callmethod(var_p,"value", [0]);
  lineNumber = 992
  lineNumber = 1
  lineNumber = 991
  var call2517 = callmethod(var_ast,"callNode", [0]);
  var call2518 = callmethod(call2517,"new", [2], call2516, var_tmp);
  return call2518
  var if2500 = undefined;
}
  lineNumber = 994
  lineNumber = 1
  lineNumber = 993
  var call2519 = callmethod(var_node,"with", [0]);
  var_tmp = call2519;
  lineNumber = 996
  lineNumber = 994
  lineNumber = 1
  lineNumber = 994
  lineNumber = 1
  lineNumber = 994
  var call2520 = callmethod(var_node,"with", [0]);
  var call2521 = callmethod(call2520,"indices", [0]);
  lineNumber = 996
  var block2522 = Grace_allocObject();
  block2522.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2522.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2522.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2522.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2522.receiver = this;
  block2522.className = 'block<typechecker:996>';
  block2522.real = function(
var_partnr
) {
  lineNumber = 1
  lineNumber = 995
  var call2523 = callmethod(var_node,"with", [0]);
  var idxres2524 = call2523.methods["[]"].call(call2523, [1], var_partnr);
  var var_part = idxres2524;
  lineNumber = 996
  lineNumber = 1
  lineNumber = 996
  lineNumber = 1
  lineNumber = 996
  var call2525 = callmethod(var_part,"args", [0]);
  lineNumber = 997
  var call2526 = callmethod(this,"resolveIdentifiersList", [1], call2525);
  lineNumber = 996
  var idxres2527 = var_tmp.methods["[]"].call(var_tmp, [1], var_partnr);
  var call2528 = callmethod(idxres2527,"args:=", [1], call2526);
  return call2528;
};
  var call2529 = callmethod(Grace_prelude,"for()do", [1, 1], call2521, block2522);
  lineNumber = 998
  lineNumber = 999
  lineNumber = 1
  lineNumber = 998
  var call2530 = callmethod(var_ast,"callNode", [0]);
  var call2531 = callmethod(call2530,"new", [2], var_p, var_tmp);
  return call2531
  var if2493 = undefined;
}
  lineNumber = 1002
  lineNumber = 1004
  lineNumber = 1
  lineNumber = 1000
  var call2533 = callmethod(var_node,"kind", [0]);
  var string2534 = new GraceString("member");
  var opresult2536 = callmethod(call2533, "==", [1], string2534);
  if (Grace_isTrue(opresult2536)) {
  lineNumber = 1001
  lineNumber = 1
  lineNumber = 1001
  var call2537 = callmethod(var_node,"in", [0]);
  lineNumber = 1002
  var call2538 = callmethod(this,"resolveIdentifiers", [1], call2537);
  var_tmp = call2538;
  lineNumber = 1
  lineNumber = 1002
  var call2539 = callmethod(var_node,"value", [0]);
  lineNumber = 1003
  lineNumber = 1
  lineNumber = 1002
  var call2540 = callmethod(var_ast,"memberNode", [0]);
  var call2541 = callmethod(call2540,"new", [2], call2539, var_tmp);
  return call2541
  var if2532 = undefined;
}
  lineNumber = 1007
  lineNumber = 1010
  lineNumber = 1
  lineNumber = 1004
  var call2543 = callmethod(var_node,"kind", [0]);
  var string2544 = new GraceString("array");
  var opresult2546 = callmethod(call2543, "==", [1], string2544);
  if (Grace_isTrue(opresult2546)) {
  lineNumber = 1005
  lineNumber = 1
  lineNumber = 1005
  var call2547 = callmethod(var_node,"value", [0]);
  lineNumber = 1006
  var call2548 = callmethod(this,"resolveIdentifiersList", [1], call2547);
  var_tmp = call2548;
  lineNumber = 1007
  lineNumber = 1009
  lineNumber = 1
  lineNumber = 1006
  var call2550 = callmethod(var_node,"value", [0]);
  var opresult2552 = callmethod(call2550, "/=", [1], var_tmp);
  if (Grace_isTrue(opresult2552)) {
  lineNumber = 1007
  lineNumber = 1008
  lineNumber = 1
  lineNumber = 1007
  var call2553 = callmethod(var_ast,"arrayNode", [0]);
  var call2554 = callmethod(call2553,"new", [1], var_tmp);
  return call2554
  var if2549 = undefined;
}
  var if2542 = if2549;
}
  lineNumber = 1019
  lineNumber = 1020
  lineNumber = 1
  lineNumber = 1010
  var call2556 = callmethod(var_node,"kind", [0]);
  var string2557 = new GraceString("matchcase");
  var opresult2559 = callmethod(call2556, "==", [1], string2557);
  if (Grace_isTrue(opresult2559)) {
  lineNumber = 1011
  lineNumber = 1
  lineNumber = 1011
  var call2560 = callmethod(var_node,"value", [0]);
  lineNumber = 1012
  var call2561 = callmethod(this,"resolveIdentifiers", [1], call2560);
  var_tmp = call2561;
  lineNumber = 1
  lineNumber = 1012
  var call2562 = callmethod(var_node,"cases", [0]);
  lineNumber = 1013
  var call2563 = callmethod(this,"resolveIdentifiersList", [1], call2562);
  var_tmp2 = call2563;
  lineNumber = 1
  lineNumber = 1013
  var call2564 = callmethod(var_node,"elsecase", [0]);
  lineNumber = 1014
  var call2565 = callmethod(this,"resolveIdentifiers", [1], call2564);
  var_tmp3 = call2565;
  lineNumber = 1016
  lineNumber = 1018
  lineNumber = 1014
  lineNumber = 1018
  lineNumber = 1
  lineNumber = 1014
  var call2567 = callmethod(var_node,"value", [0]);
  var opresult2569 = callmethod(var_tmp, "!=", [1], call2567);
  lineNumber = 1018
  lineNumber = 1014
  lineNumber = 1018
  lineNumber = 1
  lineNumber = 1014
  var call2570 = callmethod(var_node,"cases", [0]);
  var opresult2572 = callmethod(var_tmp2, "!=", [1], call2570);
  var opresult2574 = callmethod(opresult2569, "|", [1], opresult2572);
  lineNumber = 1018
  lineNumber = 1015
  lineNumber = 1018
  lineNumber = 1
  lineNumber = 1015
  var call2575 = callmethod(var_node,"elsecase", [0]);
  var opresult2577 = callmethod(var_tmp3, "!=", [1], call2575);
  var opresult2579 = callmethod(opresult2574, "|", [1], opresult2577);
  if (Grace_isTrue(opresult2579)) {
  lineNumber = 1016
  lineNumber = 1017
  lineNumber = 1
  lineNumber = 1016
  var call2580 = callmethod(var_ast,"matchCaseNode", [0]);
  var call2581 = callmethod(call2580,"new", [3], var_tmp, var_tmp2, var_tmp3);
  return call2581
  var if2566 = undefined;
}
  lineNumber = 1019
  lineNumber = 1018
  return var_node
  var if2555 = undefined;
}
  lineNumber = 1066
  lineNumber = 1067
  lineNumber = 1
  lineNumber = 1020
  var call2583 = callmethod(var_node,"kind", [0]);
  var string2584 = new GraceString("method");
  var opresult2586 = callmethod(call2583, "==", [1], string2584);
  if (Grace_isTrue(opresult2586)) {
  lineNumber = 1021
  var call2587 = callmethod(this,"pushScope", [0]);
  lineNumber = 1034
  lineNumber = 1022
  lineNumber = 1
  lineNumber = 1022
  var call2588 = callmethod(var_node,"signature", [0]);
  lineNumber = 1034
  var block2589 = Grace_allocObject();
  block2589.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2589.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2589.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2589.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2589.receiver = this;
  block2589.className = 'block<typechecker:1034>';
  block2589.real = function(
var_part
) {
  lineNumber = 1031
  lineNumber = 1023
  lineNumber = 1
  lineNumber = 1023
  var call2590 = callmethod(var_part,"params", [0]);
  lineNumber = 1031
  var block2591 = Grace_allocObject();
  block2591.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2591.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2591.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2591.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2591.receiver = this;
  block2591.className = 'block<typechecker:1031>';
  block2591.real = function(
var_e
) {
  lineNumber = 1028
  lineNumber = 1031
  lineNumber = 1025
  var bool2593 = new GraceBoolean(false)
  lineNumber = 1031
  lineNumber = 1
  lineNumber = 1025
  var call2594 = callmethod(var_e,"dtype", [0]);
  var opresult2596 = callmethod(bool2593, "!=", [1], call2594);
  if (Grace_isTrue(opresult2596)) {
  lineNumber = 1026
  lineNumber = 1
  lineNumber = 1026
  lineNumber = 1
  lineNumber = 1026
  var call2597 = callmethod(var_e,"dtype", [0]);
  lineNumber = 1027
  var call2598 = callmethod(this,"resolveIdentifiers", [1], call2597);
  lineNumber = 1026
  var call2599 = callmethod(var_e,"dtype:=", [1], call2598);
  lineNumber = 1028
  lineNumber = 1030
  lineNumber = 1
  lineNumber = 1030
  lineNumber = 1
  lineNumber = 1027
  var call2601 = callmethod(var_e,"dtype", [0]);
  var call2602 = callmethod(call2601,"kind", [0]);
  var string2603 = new GraceString("generic");
  var opresult2605 = callmethod(call2602, "==", [1], string2603);
  if (Grace_isTrue(opresult2605)) {
  lineNumber = 1028
  lineNumber = 1
  lineNumber = 1028
  lineNumber = 1
  lineNumber = 1028
  var call2606 = callmethod(var_e,"dtype", [0]);
  lineNumber = 1029
  var call2607 = callmethod(this,"findType", [1], call2606);
  lineNumber = 1028
  var call2608 = callmethod(var_e,"dtype:=", [1], call2607);
  var if2600 = call2608;
}
  var if2592 = if2600;
}
  lineNumber = 1031
  lineNumber = 1032
  var call2609 = callmethod(this,"bindIdentifier", [1], var_e);
  return call2609;
};
  var call2610 = callmethod(Grace_prelude,"for()do", [1, 1], call2590, block2591);
  lineNumber = 1034
  lineNumber = 1036
  lineNumber = 1
  lineNumber = 1033
  var call2612 = callmethod(var_part,"vararg", [0]);
  var bool2613 = new GraceBoolean(false)
  var opresult2615 = callmethod(call2612, "!=", [1], bool2613);
  if (Grace_isTrue(opresult2615)) {
  lineNumber = 1034
  lineNumber = 1
  lineNumber = 1034
  var call2616 = callmethod(var_part,"vararg", [0]);
  lineNumber = 1035
  var call2617 = callmethod(this,"bindIdentifier", [1], call2616);
  var if2611 = call2617;
}
  return if2611;
};
  var call2618 = callmethod(Grace_prelude,"for()do", [1, 1], call2588, block2589);
  lineNumber = 1038
  lineNumber = 1
  lineNumber = 1037
  var call2619 = callmethod(var_node,"signature", [0]);
  var_tmp2 = call2619;
  lineNumber = 1040
  lineNumber = 1038
  lineNumber = 1
  lineNumber = 1038
  lineNumber = 1
  lineNumber = 1038
  var call2620 = callmethod(var_node,"signature", [0]);
  var call2621 = callmethod(call2620,"indices", [0]);
  lineNumber = 1040
  var block2622 = Grace_allocObject();
  block2622.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2622.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2622.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2622.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2622.receiver = this;
  block2622.className = 'block<typechecker:1040>';
  block2622.real = function(
var_partnr
) {
  lineNumber = 1
  lineNumber = 1039
  var call2623 = callmethod(var_node,"signature", [0]);
  var idxres2624 = call2623.methods["[]"].call(call2623, [1], var_partnr);
  var var_part = idxres2624;
  lineNumber = 1040
  lineNumber = 1
  lineNumber = 1040
  lineNumber = 1
  lineNumber = 1040
  var call2625 = callmethod(var_part,"params", [0]);
  lineNumber = 1041
  var call2626 = callmethod(this,"resolveIdentifiersList", [1], call2625);
  lineNumber = 1040
  var idxres2627 = var_tmp2.methods["[]"].call(var_tmp2, [1], var_partnr);
  var call2628 = callmethod(idxres2627,"params:=", [1], call2626);
  return call2628;
};
  var call2629 = callmethod(Grace_prelude,"for()do", [1, 1], call2621, block2622);
  lineNumber = 1042
  lineNumber = 1
  lineNumber = 1042
  var call2630 = callmethod(var_node,"dtype", [0]);
  lineNumber = 1043
  var call2631 = callmethod(this,"resolveIdentifiers", [1], call2630);
  var_tmp4 = call2631;
  lineNumber = 1044
  lineNumber = 1043
  var var_oldReturnType = var_currentReturnType;
  lineNumber = 1044
  lineNumber = 1045
  var call2632 = callmethod(this,"findType", [1], var_tmp4);
  var_currentReturnType = call2632;
  lineNumber = 1046
  lineNumber = 1048
  lineNumber = 1045
  var bool2634 = new GraceBoolean(false)
  var opresult2636 = callmethod(var_currentReturnType, "==", [1], bool2634);
  if (Grace_isTrue(opresult2636)) {
  lineNumber = 1046
  var string2637 = new GraceString("return type of method not defined as a type.");
  var call2638 = callmethod(var_util,"type_error", [1], string2637);
  var if2633 = call2638;
}
  lineNumber = 1048
  lineNumber = 1
  lineNumber = 1048
  var call2639 = callmethod(var_node,"body", [0]);
  lineNumber = 1049
  var call2640 = callmethod(this,"resolveIdentifiersList", [1], call2639);
  var_l = call2640;
  lineNumber = 1057
  lineNumber = 1060
  lineNumber = 1
  lineNumber = 1049
  var call2642 = callmethod(var_l,"size", [0]);
  var opresult2644 = callmethod(call2642, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2644)) {
  lineNumber = 1051
  lineNumber = 1
  lineNumber = 1050
  var call2645 = callmethod(var_l,"last", [0]);
  var var_lastStatement = call2645;
  lineNumber = 1051
  lineNumber = 1052
  var call2646 = callmethod(this,"expressionType", [1], var_lastStatement);
  var var_realType = call2646;
  lineNumber = 1057
  lineNumber = 1059
  lineNumber = 1
  lineNumber = 1052
  var call2648 = callmethod(var_lastStatement,"kind", [0]);
  var string2649 = new GraceString("return");
  var opresult2651 = callmethod(call2648, "==", [1], string2649);
  if (Grace_isTrue(opresult2651)) {
  var if2647 = undefined;
  } else {
  lineNumber = 1057
  lineNumber = 1054
  lineNumber = 1
  lineNumber = 1054
  lineNumber = 1059
  var call2653 = callmethod(this,"conformsType()to", [1, 1], var_realType, var_currentReturnType);
  var call2654 = callmethod(call2653,"not", [0]);
  if (Grace_isTrue(call2654)) {
  lineNumber = 1057
  lineNumber = 1055
  var string2655 = new GraceString("returning type ");
  lineNumber = 1057
  lineNumber = 1056
  var string2656 = new GraceString("");
  lineNumber = 1057
  lineNumber = 1
  lineNumber = 1056
  var call2657 = callmethod(var_realType,"value", [0]);
  var opresult2659 = callmethod(string2656, "++", [1], call2657);
  var string2660 = new GraceString(" from method of return type ");
  var opresult2662 = callmethod(opresult2659, "++", [1], string2660);
  var opresult2664 = callmethod(string2655, "++", [1], opresult2662);
  lineNumber = 1057
  lineNumber = 1
  lineNumber = 1057
  var call2665 = callmethod(var_currentReturnType,"value", [0]);
  var opresult2667 = callmethod(opresult2664, "++", [1], call2665);
  lineNumber = 1055
  var call2668 = callmethod(var_util,"type_error", [1], opresult2667);
  var if2652 = call2668;
}
  var if2647 = if2652;
}
  var if2641 = if2647;
}
  lineNumber = 1061
  lineNumber = 1060
  var_currentReturnType = var_oldReturnType;
  lineNumber = 1061
  var call2669 = callmethod(this,"popScope", [0]);
  lineNumber = 1063
  lineNumber = 1062
  lineNumber = 1
  lineNumber = 1062
  var call2670 = callmethod(var_node,"value", [0]);
  lineNumber = 1063
  lineNumber = 1064
  lineNumber = 1
  lineNumber = 1062
  var call2671 = callmethod(var_ast,"methodNode", [0]);
  var call2672 = callmethod(call2671,"new", [4], call2670, var_tmp2, var_l, var_tmp4);
  var_tmp = call2672;
  lineNumber = 1065
  lineNumber = 1
  lineNumber = 1065
  lineNumber = 1
  lineNumber = 1064
  var call2673 = callmethod(var_node,"varargs", [0]);
  var call2674 = callmethod(var_tmp,"varargs:=", [1], call2673);
  lineNumber = 1066
  lineNumber = 1065
  return var_tmp
  var if2582 = undefined;
}
  lineNumber = 1082
  lineNumber = 1083
  lineNumber = 1
  lineNumber = 1067
  var call2676 = callmethod(var_node,"kind", [0]);
  var string2677 = new GraceString("block");
  var opresult2679 = callmethod(call2676, "==", [1], string2677);
  if (Grace_isTrue(opresult2679)) {
  lineNumber = 1069
  lineNumber = 1071
  lineNumber = 1
  lineNumber = 1071
  lineNumber = 1
  lineNumber = 1068
  var call2681 = callmethod(var_node,"params", [0]);
  var call2682 = callmethod(call2681,"size", [0]);
  var opresult2684 = callmethod(call2682, "==", [1], new GraceNum(1));
  if (Grace_isTrue(opresult2684)) {
  lineNumber = 1069
  lineNumber = 1070
  var call2685 = callmethod(this,"rewritematchblock2", [1], var_node);
  var_node = call2685;
  var if2680 = call2685;
}
  lineNumber = 1071
  var call2686 = callmethod(this,"pushScope", [0]);
  lineNumber = 1074
  lineNumber = 1072
  lineNumber = 1
  lineNumber = 1072
  var call2687 = callmethod(var_node,"params", [0]);
  lineNumber = 1074
  var block2688 = Grace_allocObject();
  block2688.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2688.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2688.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2688.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2688.receiver = this;
  block2688.className = 'block<typechecker:1074>';
  block2688.real = function(
var_e
) {
  lineNumber = 1076
  lineNumber = 1
  lineNumber = 1073
  var call2690 = callmethod(var_e,"kind", [0]);
  var string2691 = new GraceString("identifier");
  var opresult2693 = callmethod(call2690, "==", [1], string2691);
  if (Grace_isTrue(opresult2693)) {
  lineNumber = 1074
  lineNumber = 1075
  var call2694 = callmethod(this,"bindIdentifier", [1], var_e);
  var if2689 = call2694;
}
  return if2689;
};
  var call2695 = callmethod(Grace_prelude,"for()do", [1, 1], call2687, block2688);
  lineNumber = 1077
  lineNumber = 1
  lineNumber = 1077
  var call2696 = callmethod(var_node,"body", [0]);
  lineNumber = 1078
  var call2697 = callmethod(this,"resolveIdentifiersList", [1], call2696);
  var_l = call2697;
  lineNumber = 1
  lineNumber = 1078
  var call2698 = callmethod(var_node,"params", [0]);
  lineNumber = 1079
  lineNumber = 1
  lineNumber = 1078
  var call2699 = callmethod(var_ast,"blockNode", [0]);
  var call2700 = callmethod(call2699,"new", [2], call2698, var_l);
  var_tmp = call2700;
  lineNumber = 1080
  lineNumber = 1
  lineNumber = 1080
  lineNumber = 1
  lineNumber = 1079
  var call2701 = callmethod(var_node,"matchingPattern", [0]);
  var call2702 = callmethod(var_tmp,"matchingPattern:=", [1], call2701);
  lineNumber = 1080
  var call2703 = callmethod(this,"popScope", [0]);
  lineNumber = 1082
  lineNumber = 1081
  return var_tmp
  var if2675 = undefined;
}
  lineNumber = 1098
  lineNumber = 1099
  lineNumber = 1
  lineNumber = 1083
  var call2705 = callmethod(var_node,"kind", [0]);
  var string2706 = new GraceString("object");
  var opresult2708 = callmethod(call2705, "==", [1], string2706);
  if (Grace_isTrue(opresult2708)) {
  lineNumber = 1084
  var string2709 = new GraceString("<Object_");
  lineNumber = 1
  lineNumber = 1084
  var call2710 = callmethod(var_node,"line", [0]);
  var opresult2712 = callmethod(string2709, "++", [1], call2710);
  var string2713 = new GraceString("_self>");
  var opresult2715 = callmethod(opresult2712, "++", [1], string2713);
  var array2716 = new GraceList([
var_outerMethod,
]);

  lineNumber = 1085
  lineNumber = 1
  lineNumber = 1084
  var call2717 = callmethod(var_ast,"typeNode", [0]);
  var call2718 = callmethod(call2717,"new", [2], opresult2715, array2716);
  var var_selftype = call2718;
  lineNumber = 1090
  var block2719 = Grace_allocObject();
  block2719.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2719.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2719.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2719.receiver = this;
  block2719.className = 'block<typechecker:1090>';
  block2719.real = function(
) {
  lineNumber = 1086
  var string2720 = new GraceString("___is_object");
  var string2721 = new GraceString("yes");
  var call2722 = callmethod(var_Binding,"new", [1], string2721);
  lineNumber = 1087
  lineNumber = 1
  lineNumber = 1086
  var call2723 = callmethod(var_scopes,"last", [0]);
  var call2724 = callmethod(call2723,"put", [2], string2720, call2722);
  lineNumber = 1087
  var string2725 = new GraceString("outer");
  var string2726 = new GraceString("method");
  var call2727 = callmethod(var_Binding,"new", [1], string2726);
  lineNumber = 1088
  lineNumber = 1
  lineNumber = 1087
  var call2728 = callmethod(var_scopes,"last", [0]);
  var call2729 = callmethod(call2728,"put", [2], string2725, call2727);
  lineNumber = 1088
  var string2730 = new GraceString("def");
  var call2731 = callmethod(var_Binding,"new", [1], string2730);
  var var_stb = call2731;
  lineNumber = 1090
  lineNumber = 1
  lineNumber = 1089
  var call2732 = callmethod(var_stb,"dtype:=", [1], var_selftype);
  lineNumber = 1090
  var string2733 = new GraceString("self");
  lineNumber = 1091
  lineNumber = 1
  lineNumber = 1090
  var call2734 = callmethod(var_scopes,"last", [0]);
  var call2735 = callmethod(call2734,"put", [2], string2733, var_stb);
  return call2735;
};
  var_tmp = block2719;
  lineNumber = 1092
  var call2736 = callmethod(var_selftypes,"push", [1], var_selftype);
  lineNumber = 1093
  lineNumber = 1
  lineNumber = 1093
  var call2737 = callmethod(var_node,"value", [0]);
  lineNumber = 1094
  var call2738 = callmethod(this,"resolveIdentifiersList()withBlock", [1, 1], call2737, var_tmp);
  var_l = call2738;
  lineNumber = 1095
  lineNumber = 1094
  lineNumber = 1095
  lineNumber = 1
  lineNumber = 1095
  var call2739 = callmethod(var_node,"superclass", [0]);
  var call2740 = callmethod(this,"resolveIdentifiers", [1], call2739);
  lineNumber = 1096
  lineNumber = 1
  lineNumber = 1094
  var call2741 = callmethod(var_ast,"objectNode", [0]);
  var call2742 = callmethod(call2741,"new", [2], var_l, call2740);
  var_tmp2 = call2742;
  lineNumber = 1096
  lineNumber = 1
  lineNumber = 1096
  var call2743 = callmethod(var_selftypes,"pop", [0]);
  lineNumber = 1098
  lineNumber = 1097
  return var_tmp2
  var if2704 = undefined;
}
  lineNumber = 1102
  lineNumber = 1105
  lineNumber = 1
  lineNumber = 1099
  var call2745 = callmethod(var_node,"kind", [0]);
  var string2746 = new GraceString("inherits");
  var opresult2748 = callmethod(call2745, "==", [1], string2746);
  if (Grace_isTrue(opresult2748)) {
  lineNumber = 1100
  lineNumber = 1
  lineNumber = 1100
  var call2749 = callmethod(var_node,"value", [0]);
  var call2750 = callmethod(this,"resolveIdentifiers", [1], call2749);
  lineNumber = 1101
  var call2751 = callmethod(this,"expressionType", [1], call2750);
  var var_csupertype = call2751;
  lineNumber = 1102
  lineNumber = 1101
  lineNumber = 1
  lineNumber = 1101
  var call2752 = callmethod(var_csupertype,"methods", [0]);
  lineNumber = 1102
  var block2753 = Grace_allocObject();
  block2753.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2753.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2753.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2753.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2753.receiver = this;
  block2753.className = 'block<typechecker:1102>';
  block2753.real = function(
var_m
) {
  lineNumber = 1
  lineNumber = 1102
  var call2754 = callmethod(var_m,"value", [0]);
  var string2755 = new GraceString("method");
  var call2756 = callmethod(var_Binding,"new", [1], string2755);
  lineNumber = 1103
  lineNumber = 1
  lineNumber = 1102
  var call2757 = callmethod(var_scopes,"last", [0]);
  var call2758 = callmethod(call2757,"put", [2], call2754, call2756);
  return call2758;
};
  var call2759 = callmethod(Grace_prelude,"for()do", [1, 1], call2752, block2753);
  var if2744 = call2759;
}
  lineNumber = 1152
  lineNumber = 1154
  lineNumber = 1
  lineNumber = 1105
  var call2761 = callmethod(var_node,"kind", [0]);
  var string2762 = new GraceString("class");
  var opresult2764 = callmethod(call2761, "==", [1], string2762);
  if (Grace_isTrue(opresult2764)) {
  lineNumber = 1106
  var call2765 = callmethod(this,"pushScope", [0]);
  lineNumber = 1108
  lineNumber = 1
  lineNumber = 1108
  lineNumber = 1
  lineNumber = 1107
  var call2766 = callmethod(var_node,"name", [0]);
  var call2767 = callmethod(call2766,"value", [0]);
  var var_nm = call2767;
  lineNumber = 1110
  lineNumber = 1111
  lineNumber = 1
  lineNumber = 1111
  lineNumber = 1
  lineNumber = 1108
  var call2769 = callmethod(var_node,"name", [0]);
  var call2770 = callmethod(call2769,"kind", [0]);
  var string2771 = new GraceString("generic");
  var opresult2773 = callmethod(call2770, "==", [1], string2771);
  if (Grace_isTrue(opresult2773)) {
  lineNumber = 1110
  lineNumber = 1
  lineNumber = 1110
  lineNumber = 1
  lineNumber = 1110
  lineNumber = 1
  lineNumber = 1109
  var call2774 = callmethod(var_node,"name", [0]);
  var call2775 = callmethod(call2774,"value", [0]);
  var call2776 = callmethod(call2775,"value", [0]);
  var_nm = call2776;
  var if2768 = call2776;
}
  lineNumber = 1111
  var string2777 = new GraceString("<");
  var opresult2779 = callmethod(string2777, "++", [1], var_nm);
  var string2780 = new GraceString("_");
  var opresult2782 = callmethod(opresult2779, "++", [1], string2780);
  lineNumber = 1
  lineNumber = 1111
  var call2783 = callmethod(var_node,"line", [0]);
  var opresult2785 = callmethod(opresult2782, "++", [1], call2783);
  var string2786 = new GraceString("_self>");
  var opresult2788 = callmethod(opresult2785, "++", [1], string2786);
  var array2789 = new GraceList([
var_outerMethod,
]);

  lineNumber = 1112
  lineNumber = 1
  lineNumber = 1111
  var call2790 = callmethod(var_ast,"typeNode", [0]);
  var call2791 = callmethod(call2790,"new", [2], opresult2788, array2789);
  var var_selftype = call2791;
  lineNumber = 1118
  var block2792 = Grace_allocObject();
  block2792.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2792.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2792.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2792.receiver = this;
  block2792.className = 'block<typechecker:1118>';
  block2792.real = function(
) {
  lineNumber = 1113
  var string2793 = new GraceString("___is_object");
  var string2794 = new GraceString("yes");
  var call2795 = callmethod(var_Binding,"new", [1], string2794);
  lineNumber = 1114
  lineNumber = 1
  lineNumber = 1113
  var call2796 = callmethod(var_scopes,"last", [0]);
  var call2797 = callmethod(call2796,"put", [2], string2793, call2795);
  lineNumber = 1114
  var string2798 = new GraceString("___is_class");
  var string2799 = new GraceString("yes");
  var call2800 = callmethod(var_Binding,"new", [1], string2799);
  lineNumber = 1115
  lineNumber = 1
  lineNumber = 1114
  var call2801 = callmethod(var_scopes,"last", [0]);
  var call2802 = callmethod(call2801,"put", [2], string2798, call2800);
  lineNumber = 1115
  var string2803 = new GraceString("outer");
  var string2804 = new GraceString("method");
  var call2805 = callmethod(var_Binding,"new", [1], string2804);
  lineNumber = 1116
  lineNumber = 1
  lineNumber = 1115
  var call2806 = callmethod(var_scopes,"last", [0]);
  var call2807 = callmethod(call2806,"put", [2], string2803, call2805);
  lineNumber = 1116
  var string2808 = new GraceString("def");
  var call2809 = callmethod(var_Binding,"new", [1], string2808);
  var var_stb = call2809;
  lineNumber = 1118
  lineNumber = 1
  lineNumber = 1117
  var call2810 = callmethod(var_stb,"dtype:=", [1], var_selftype);
  lineNumber = 1118
  var string2811 = new GraceString("self");
  lineNumber = 1119
  lineNumber = 1
  lineNumber = 1118
  var call2812 = callmethod(var_scopes,"last", [0]);
  var call2813 = callmethod(call2812,"put", [2], string2811, var_stb);
  return call2813;
};
  var_tmp = block2792;
  lineNumber = 1120
  var call2814 = callmethod(var_selftypes,"push", [1], var_selftype);
  lineNumber = 1129
  lineNumber = 1132
  lineNumber = 1
  lineNumber = 1132
  lineNumber = 1
  lineNumber = 1121
  var call2816 = callmethod(var_node,"name", [0]);
  var call2817 = callmethod(call2816,"kind", [0]);
  var string2818 = new GraceString("generic");
  var opresult2820 = callmethod(call2817, "==", [1], string2818);
  if (Grace_isTrue(opresult2820)) {
  lineNumber = 1129
  lineNumber = 1122
  lineNumber = 1
  lineNumber = 1122
  lineNumber = 1
  lineNumber = 1122
  var call2821 = callmethod(var_node,"name", [0]);
  var call2822 = callmethod(call2821,"params", [0]);
  lineNumber = 1129
  var block2823 = Grace_allocObject();
  block2823.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2823.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2823.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2823.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2823.receiver = this;
  block2823.className = 'block<typechecker:1129>';
  block2823.real = function(
var_gp
) {
  lineNumber = 1124
  lineNumber = 1
  lineNumber = 1123
  var call2824 = callmethod(var_gp,"value", [0]);
  var var_nomnm = call2824;
  lineNumber = 1124
  var array2825 = new GraceList([
]);

  lineNumber = 1125
  lineNumber = 1
  lineNumber = 1124
  var call2826 = callmethod(var_ast,"typeNode", [0]);
  var call2827 = callmethod(call2826,"new", [2], var_nomnm, array2825);
  var var_nom = call2827;
  lineNumber = 1126
  lineNumber = 1
  lineNumber = 1125
  var bool2828 = new GraceBoolean(true)
  var call2829 = callmethod(var_nom,"nominal:=", [1], bool2828);
  lineNumber = 1126
  var call2830 = callmethod(var_subtype,"addType", [1], var_nom);
  lineNumber = 1127
  var string2831 = new GraceString("type");
  var call2832 = callmethod(var_Binding,"new", [1], string2831);
  var var_tpb = call2832;
  lineNumber = 1129
  lineNumber = 1
  lineNumber = 1128
  var call2833 = callmethod(var_tpb,"value:=", [1], var_nom);
  lineNumber = 1129
  lineNumber = 1
  lineNumber = 1129
  var call2834 = callmethod(var_gp,"value", [0]);
  lineNumber = 1130
  var call2835 = callmethod(this,"bindName", [2], call2834, var_tpb);
  return call2835;
};
  var call2836 = callmethod(Grace_prelude,"for()do", [1, 1], call2822, block2823);
  var if2815 = call2836;
}
  lineNumber = 1140
  lineNumber = 1132
  lineNumber = 1
  lineNumber = 1132
  var call2837 = callmethod(var_node,"signature", [0]);
  lineNumber = 1140
  var block2838 = Grace_allocObject();
  block2838.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2838.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2838.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2838.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2838.receiver = this;
  block2838.className = 'block<typechecker:1140>';
  block2838.real = function(
var_part
) {
  lineNumber = 1136
  lineNumber = 1133
  lineNumber = 1
  lineNumber = 1133
  var call2839 = callmethod(var_part,"params", [0]);
  lineNumber = 1136
  var block2840 = Grace_allocObject();
  block2840.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2840.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2840.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2840.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2840.receiver = this;
  block2840.className = 'block<typechecker:1136>';
  block2840.real = function(
var_e
) {
  lineNumber = 1134
  lineNumber = 1135
  var call2841 = callmethod(this,"bindIdentifier", [1], var_e);
  lineNumber = 1136
  lineNumber = 1138
  lineNumber = 1135
  var bool2843 = new GraceBoolean(false)
  lineNumber = 1138
  lineNumber = 1
  lineNumber = 1135
  var call2844 = callmethod(var_e,"dtype", [0]);
  var opresult2846 = callmethod(bool2843, "!=", [1], call2844);
  if (Grace_isTrue(opresult2846)) {
  lineNumber = 1136
  lineNumber = 1
  lineNumber = 1136
  var call2847 = callmethod(var_e,"dtype", [0]);
  lineNumber = 1137
  var call2848 = callmethod(this,"resolveIdentifier", [1], call2847);
  var if2842 = call2848;
}
  return if2842;
};
  var call2849 = callmethod(Grace_prelude,"for()do", [1, 1], call2839, block2840);
  lineNumber = 1140
  lineNumber = 1142
  lineNumber = 1
  lineNumber = 1139
  var call2851 = callmethod(var_part,"vararg", [0]);
  var bool2852 = new GraceBoolean(false)
  var opresult2854 = callmethod(call2851, "!=", [1], bool2852);
  if (Grace_isTrue(opresult2854)) {
  lineNumber = 1140
  lineNumber = 1
  lineNumber = 1140
  var call2855 = callmethod(var_part,"vararg", [0]);
  lineNumber = 1141
  var call2856 = callmethod(this,"bindIdentifier", [1], call2855);
  var if2850 = call2856;
}
  return if2850;
};
  var call2857 = callmethod(Grace_prelude,"for()do", [1, 1], call2837, block2838);
  lineNumber = 1143
  lineNumber = 1
  lineNumber = 1143
  var call2858 = callmethod(var_node,"value", [0]);
  lineNumber = 1144
  var call2859 = callmethod(this,"resolveIdentifiersList()withBlock", [1, 1], call2858, var_tmp);
  var_tmp2 = call2859;
  lineNumber = 1145
  lineNumber = 1
  lineNumber = 1144
  var call2860 = callmethod(var_node,"signature", [0]);
  var_tmp3 = call2860;
  lineNumber = 1147
  lineNumber = 1145
  lineNumber = 1
  lineNumber = 1145
  lineNumber = 1
  lineNumber = 1145
  var call2861 = callmethod(var_node,"signature", [0]);
  var call2862 = callmethod(call2861,"indices", [0]);
  lineNumber = 1147
  var block2863 = Grace_allocObject();
  block2863.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2863.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2863.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2863.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2863.receiver = this;
  block2863.className = 'block<typechecker:1147>';
  block2863.real = function(
var_partnr
) {
  lineNumber = 1
  lineNumber = 1146
  var call2864 = callmethod(var_node,"signature", [0]);
  var idxres2865 = call2864.methods["[]"].call(call2864, [1], var_partnr);
  var var_part = idxres2865;
  lineNumber = 1147
  lineNumber = 1
  lineNumber = 1147
  lineNumber = 1
  lineNumber = 1147
  var call2866 = callmethod(var_part,"params", [0]);
  lineNumber = 1148
  var call2867 = callmethod(this,"resolveIdentifiersList", [1], call2866);
  lineNumber = 1147
  var idxres2868 = var_tmp3.methods["[]"].call(var_tmp3, [1], var_partnr);
  var call2869 = callmethod(idxres2868,"params:=", [1], call2867);
  return call2869;
};
  var call2870 = callmethod(Grace_prelude,"for()do", [1, 1], call2862, block2863);
  lineNumber = 1150
  lineNumber = 1149
  lineNumber = 1
  lineNumber = 1149
  var call2871 = callmethod(var_node,"name", [0]);
  lineNumber = 1150
  lineNumber = 1
  lineNumber = 1150
  var call2872 = callmethod(var_node,"superclass", [0]);
  var call2873 = callmethod(this,"resolveIdentifiers", [1], call2872);
  lineNumber = 1
  lineNumber = 1150
  var call2874 = callmethod(var_node,"constructor", [0]);
  lineNumber = 1151
  lineNumber = 1
  lineNumber = 1149
  var call2875 = callmethod(var_ast,"classNode", [0]);
  var call2876 = callmethod(call2875,"new", [5], call2871, var_tmp3, var_tmp2, call2873, call2874);
  var_node = call2876;
  lineNumber = 1151
  var call2877 = callmethod(this,"popScope", [0]);
  lineNumber = 1152
  lineNumber = 1
  lineNumber = 1152
  var call2878 = callmethod(var_selftypes,"pop", [0]);
  var if2760 = call2878;
}
  lineNumber = 1177
  lineNumber = 1180
  lineNumber = 1
  lineNumber = 1154
  var call2880 = callmethod(var_node,"kind", [0]);
  var string2881 = new GraceString("bind");
  var opresult2883 = callmethod(call2880, "==", [1], string2881);
  if (Grace_isTrue(opresult2883)) {
  lineNumber = 1155
  lineNumber = 1
  lineNumber = 1155
  var call2884 = callmethod(var_node,"dest", [0]);
  lineNumber = 1156
  var call2885 = callmethod(this,"resolveIdentifiers", [1], call2884);
  var_tmp = call2885;
  lineNumber = 1
  lineNumber = 1156
  var call2886 = callmethod(var_node,"value", [0]);
  lineNumber = 1157
  var call2887 = callmethod(this,"resolveIdentifiers", [1], call2886);
  var_tmp2 = call2887;
  lineNumber = 1175
  lineNumber = 1176
  lineNumber = 1
  lineNumber = 1157
  var call2889 = callmethod(var_tmp,"kind", [0]);
  var string2890 = new GraceString("identifier");
  var opresult2892 = callmethod(call2889, "==", [1], string2890);
  if (Grace_isTrue(opresult2892)) {
  lineNumber = 1158
  lineNumber = 1
  lineNumber = 1158
  var call2893 = callmethod(var_tmp,"value", [0]);
  lineNumber = 1159
  var call2894 = callmethod(this,"findName", [1], call2893);
  var_tmp3 = call2894;
  lineNumber = 1
  lineNumber = 1159
  var call2895 = callmethod(var_tmp,"dtype", [0]);
  lineNumber = 1160
  var call2896 = callmethod(this,"findType", [1], call2895);
  var_tmp4 = call2896;
  lineNumber = 1165
  lineNumber = 1167
  lineNumber = 1
  lineNumber = 1160
  var call2898 = callmethod(var_tmp3,"kind", [0]);
  var string2899 = new GraceString("def");
  var opresult2901 = callmethod(call2898, "==", [1], string2899);
  if (Grace_isTrue(opresult2901)) {
  lineNumber = 1161
  var string2902 = new GraceString("reassignment to constant ");
  lineNumber = 1
  lineNumber = 1161
  var call2903 = callmethod(var_tmp,"value", [0]);
  var opresult2905 = callmethod(string2902, "++", [1], call2903);
  var string2906 = new GraceString("");
  var opresult2908 = callmethod(opresult2905, "++", [1], string2906);
  var call2909 = callmethod(var_util,"syntax_error", [1], opresult2908);
  var if2897 = call2909;
  } else {
  lineNumber = 1165
  lineNumber = 1164
  lineNumber = 1
  lineNumber = 1162
  var call2911 = callmethod(var_tmp3,"kind", [0]);
  var string2912 = new GraceString("method");
  var opresult2914 = callmethod(call2911, "==", [1], string2912);
  if (Grace_isTrue(opresult2914)) {
  lineNumber = 1163
  var string2915 = new GraceString("assignment to method ");
  lineNumber = 1
  lineNumber = 1163
  lineNumber = 1
  lineNumber = 1163
  var call2916 = callmethod(var_node,"dest", [0]);
  var call2917 = callmethod(call2916,"value", [0]);
  var opresult2919 = callmethod(string2915, "++", [1], call2917);
  var string2920 = new GraceString("");
  var opresult2922 = callmethod(opresult2919, "++", [1], string2920);
  var call2923 = callmethod(var_util,"syntax_error", [1], opresult2922);
  var if2910 = call2923;
  } else {
  lineNumber = 1165
  lineNumber = 1167
  lineNumber = 1
  lineNumber = 1164
  var call2925 = callmethod(var_tmp3,"kind", [0]);
  var string2926 = new GraceString("undef");
  var opresult2928 = callmethod(call2925, "==", [1], string2926);
  if (Grace_isTrue(opresult2928)) {
  lineNumber = 1165
  var string2929 = new GraceString("assignment to undeclared ");
  lineNumber = 1
  lineNumber = 1165
  var call2930 = callmethod(var_tmp,"value", [0]);
  var opresult2932 = callmethod(string2929, "++", [1], call2930);
  var string2933 = new GraceString("");
  var opresult2935 = callmethod(opresult2932, "++", [1], string2933);
  var call2936 = callmethod(var_util,"syntax_error", [1], opresult2935);
  var if2924 = call2936;
}
  var if2910 = if2924;
}
  var if2897 = if2910;
}
  lineNumber = 1171
  lineNumber = 1167
  lineNumber = 1
  lineNumber = 1167
  var call2938 = callmethod(this,"expressionType", [1], var_tmp2);
  lineNumber = 1
  lineNumber = 1167
  var call2939 = callmethod(var_tmp,"dtype", [0]);
  lineNumber = 1173
  var call2940 = callmethod(this,"conformsType()to", [1, 1], call2938, call2939);
  var call2941 = callmethod(call2940,"not", [0]);
  if (Grace_isTrue(call2941)) {
  lineNumber = 1171
  lineNumber = 1169
  lineNumber = 1168
  var string2942 = new GraceString("assigning value of nonconforming type ");
  lineNumber = 1169
  var call2943 = callmethod(this,"expressionType", [1], var_tmp2);
  var call2944 = callmethod(var_subtype,"nicename", [1], call2943);
  var opresult2946 = callmethod(string2942, "++", [1], call2944);
  lineNumber = 1170
  var string2947 = new GraceString(" to var of type ");
  var opresult2949 = callmethod(opresult2946, "++", [1], string2947);
  lineNumber = 1171
  lineNumber = 1
  lineNumber = 1171
  var call2950 = callmethod(var_tmp,"dtype", [0]);
  var call2951 = callmethod(this,"findType", [1], call2950);
  var call2952 = callmethod(var_subtype,"nicename", [1], call2951);
  var opresult2954 = callmethod(opresult2949, "++", [1], call2952);
  lineNumber = 1168
  var call2955 = callmethod(var_util,"type_error", [1], opresult2954);
  var if2937 = call2955;
}
  var if2888 = if2937;
  } else {
  lineNumber = 1175
  lineNumber = 1176
  lineNumber = 1
  lineNumber = 1173
  var call2957 = callmethod(var_tmp,"kind", [0]);
  var string2958 = new GraceString("call");
  var opresult2960 = callmethod(call2957, "==", [1], string2958);
  lineNumber = 1176
  lineNumber = 1
  lineNumber = 1173
  var call2961 = callmethod(var_node,"kind", [0]);
  var string2962 = new GraceString("call");
  var opresult2964 = callmethod(call2961, "/=", [1], string2962);
  var opresult2966 = callmethod(opresult2960, "&", [1], opresult2964);
  if (Grace_isTrue(opresult2966)) {
  lineNumber = 1175
  lineNumber = 1
  lineNumber = 1174
  var call2967 = callmethod(var_tmp,"value", [0]);
  var_tmp = call2967;
  var if2956 = call2967;
}
  var if2888 = if2956;
}
  lineNumber = 1177
  lineNumber = 1179
  lineNumber = 1176
  lineNumber = 1179
  lineNumber = 1
  lineNumber = 1176
  var call2969 = callmethod(var_node,"dest", [0]);
  var opresult2971 = callmethod(var_tmp, "/=", [1], call2969);
  lineNumber = 1179
  lineNumber = 1176
  lineNumber = 1179
  lineNumber = 1
  lineNumber = 1176
  var call2972 = callmethod(var_node,"value", [0]);
  var opresult2974 = callmethod(var_tmp2, "/=", [1], call2972);
  var opresult2976 = callmethod(opresult2971, "|", [1], opresult2974);
  if (Grace_isTrue(opresult2976)) {
  lineNumber = 1177
  lineNumber = 1178
  lineNumber = 1
  lineNumber = 1177
  var call2977 = callmethod(var_ast,"bindNode", [0]);
  var call2978 = callmethod(call2977,"new", [2], var_tmp, var_tmp2);
  return call2978
  var if2968 = undefined;
}
  var if2879 = if2968;
}
  lineNumber = 1282
  lineNumber = 1283
  lineNumber = 1
  lineNumber = 1180
  var call2980 = callmethod(var_node,"kind", [0]);
  var string2981 = new GraceString("type");
  var opresult2983 = callmethod(call2980, "==", [1], string2981);
  if (Grace_isTrue(opresult2983)) {
  lineNumber = 1280
  lineNumber = 1281
  lineNumber = 1
  lineNumber = 1281
  lineNumber = 1
  lineNumber = 1181
  var call2985 = callmethod(var_node,"generics", [0]);
  var call2986 = callmethod(call2985,"size", [0]);
  var opresult2988 = callmethod(call2986, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2988)) {
  lineNumber = 1182
  var call2989 = callmethod(this,"pushScope", [0]);
  lineNumber = 1188
  lineNumber = 1183
  lineNumber = 1
  lineNumber = 1183
  var call2990 = callmethod(var_node,"generics", [0]);
  lineNumber = 1188
  var block2991 = Grace_allocObject();
  block2991.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2991.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2991.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2991.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block2991.receiver = this;
  block2991.className = 'block<typechecker:1188>';
  block2991.real = function(
var_g
) {
  lineNumber = 1184
  lineNumber = 1
  lineNumber = 1184
  var call2992 = callmethod(var_g,"value", [0]);
  var array2993 = new GraceList([
]);

  lineNumber = 1185
  lineNumber = 1
  lineNumber = 1184
  var call2994 = callmethod(var_ast,"typeNode", [0]);
  var call2995 = callmethod(call2994,"new", [2], call2992, array2993);
  var var_nom = call2995;
  lineNumber = 1186
  lineNumber = 1
  lineNumber = 1185
  var bool2996 = new GraceBoolean(true)
  var call2997 = callmethod(var_nom,"nominal:=", [1], bool2996);
  lineNumber = 1186
  var string2998 = new GraceString("type");
  var call2999 = callmethod(var_Binding,"new", [1], string2998);
  var var_tpb = call2999;
  lineNumber = 1188
  lineNumber = 1
  lineNumber = 1187
  var call3000 = callmethod(var_tpb,"value:=", [1], var_nom);
  lineNumber = 1188
  lineNumber = 1
  lineNumber = 1188
  var call3001 = callmethod(var_g,"value", [0]);
  lineNumber = 1189
  var call3002 = callmethod(this,"bindName", [2], call3001, var_tpb);
  return call3002;
};
  var call3003 = callmethod(Grace_prelude,"for()do", [1, 1], call2990, block2991);
  lineNumber = 1191
  var array3004 = new GraceList([
]);

  var_tmp = array3004;
  lineNumber = 1206
  lineNumber = 1191
  lineNumber = 1
  lineNumber = 1191
  var call3005 = callmethod(var_node,"methods", [0]);
  lineNumber = 1206
  var block3006 = Grace_allocObject();
  block3006.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3006.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3006.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3006.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3006.receiver = this;
  block3006.className = 'block<typechecker:1206>';
  block3006.real = function(
var_mt
) {
  lineNumber = 1192
  var call3007 = callmethod(this,"pushScope", [0]);
  lineNumber = 1194
  lineNumber = 1
  lineNumber = 1193
  var call3008 = callmethod(var_mt,"signature", [0]);
  var_tmp2 = call3008;
  lineNumber = 1203
  lineNumber = 1194
  lineNumber = 1
  lineNumber = 1194
  lineNumber = 1
  lineNumber = 1194
  var call3009 = callmethod(var_mt,"signature", [0]);
  var call3010 = callmethod(call3009,"indices", [0]);
  lineNumber = 1203
  var block3011 = Grace_allocObject();
  block3011.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3011.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3011.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3011.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3011.receiver = this;
  block3011.className = 'block<typechecker:1203>';
  block3011.real = function(
var_partnr
) {
  lineNumber = 1196
  lineNumber = 1
  lineNumber = 1195
  var call3012 = callmethod(var_mt,"signature", [0]);
  var idxres3013 = call3012.methods["[]"].call(call3012, [1], var_partnr);
  var var_part = idxres3013;
  lineNumber = 1197
  var array3014 = new GraceList([
]);

  var var_tmpparams = array3014;
  lineNumber = 1200
  lineNumber = 1197
  lineNumber = 1
  lineNumber = 1197
  var call3015 = callmethod(var_part,"params", [0]);
  lineNumber = 1200
  var block3016 = Grace_allocObject();
  block3016.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3016.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3016.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3016.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3016.receiver = this;
  block3016.className = 'block<typechecker:1200>';
  block3016.real = function(
var_e
) {
  lineNumber = 1198
  lineNumber = 1
  lineNumber = 1198
  lineNumber = 1
  lineNumber = 1198
  var call3017 = callmethod(var_e,"dtype", [0]);
  lineNumber = 1199
  var call3018 = callmethod(this,"resolveIdentifiers", [1], call3017);
  lineNumber = 1198
  var call3019 = callmethod(var_e,"dtype:=", [1], call3018);
  lineNumber = 1199
  lineNumber = 1200
  var call3020 = callmethod(this,"bindIdentifier", [1], var_e);
  var call3021 = callmethod(var_tmpparams,"push", [1], var_e);
  return call3021;
};
  var call3022 = callmethod(Grace_prelude,"for()do", [1, 1], call3015, block3016);
  lineNumber = 1203
  lineNumber = 1
  lineNumber = 1202
  var idxres3023 = var_tmp2.methods["[]"].call(var_tmp2, [1], var_partnr);
  var call3024 = callmethod(idxres3023,"params:=", [1], var_tmpparams);
  return call3024;
};
  var call3025 = callmethod(Grace_prelude,"for()do", [1, 1], call3010, block3011);
  lineNumber = 1204
  lineNumber = 1
  lineNumber = 1204
  var call3026 = callmethod(var_mt,"rtype", [0]);
  lineNumber = 1205
  var call3027 = callmethod(this,"resolveIdentifiers", [1], call3026);
  var_tmp3 = call3027;
  lineNumber = 1
  lineNumber = 1205
  var call3028 = callmethod(var_mt,"value", [0]);
  lineNumber = 1
  lineNumber = 1205
  var call3029 = callmethod(var_ast,"methodTypeNode", [0]);
  var call3030 = callmethod(call3029,"new", [3], call3028, var_tmp2, var_tmp3);
  var call3031 = callmethod(var_tmp,"push", [1], call3030);
  lineNumber = 1206
  var call3032 = callmethod(this,"popScope", [0]);
  return call3032;
};
  var call3033 = callmethod(Grace_prelude,"for()do", [1, 1], call3005, block3006);
  lineNumber = 1208
  var call3034 = callmethod(this,"popScope", [0]);
  lineNumber = 1209
  lineNumber = 1
  lineNumber = 1209
  var call3035 = callmethod(var_node,"value", [0]);
  lineNumber = 1210
  lineNumber = 1
  lineNumber = 1209
  var call3036 = callmethod(var_ast,"typeNode", [0]);
  var call3037 = callmethod(call3036,"new", [2], call3035, var_tmp);
  var_tmp = call3037;
  lineNumber = 1211
  lineNumber = 1
  lineNumber = 1211
  lineNumber = 1
  lineNumber = 1210
  var call3038 = callmethod(var_node,"generics", [0]);
  var call3039 = callmethod(var_tmp,"generics:=", [1], call3038);
  lineNumber = 1212
  lineNumber = 1
  lineNumber = 1212
  lineNumber = 1
  lineNumber = 1211
  var call3040 = callmethod(var_node,"nominal", [0]);
  var call3041 = callmethod(var_tmp,"nominal:=", [1], call3040);
  lineNumber = 1213
  lineNumber = 1212
  return var_tmp
  var if2984 = undefined;
  } else {
  lineNumber = 1280
  lineNumber = 1243
  lineNumber = 1
  lineNumber = 1243
  lineNumber = 1
  lineNumber = 1213
  var call3043 = callmethod(var_node,"unionTypes", [0]);
  var call3044 = callmethod(call3043,"size", [0]);
  var opresult3046 = callmethod(call3044, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult3046)) {
  lineNumber = 1214
  lineNumber = 1
  lineNumber = 1214
  var call3047 = callmethod(var_node,"unionTypes", [0]);
  lineNumber = 1215
  var call3048 = callmethod(this,"resolveIdentifiersList", [1], call3047);
  var_tmp = call3048;
  lineNumber = 1
  lineNumber = 1215
  var call3049 = callmethod(var_node,"value", [0]);
  lineNumber = 1
  lineNumber = 1215
  var call3050 = callmethod(var_node,"methods", [0]);
  lineNumber = 1216
  lineNumber = 1
  lineNumber = 1215
  var call3051 = callmethod(var_ast,"typeNode", [0]);
  var call3052 = callmethod(call3051,"new", [2], call3049, call3050);
  var_tmp2 = call3052;
  lineNumber = 1217
  lineNumber = 1216
  lineNumber = 1217
  var block3053 = Grace_allocObject();
  block3053.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3053.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3053.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3053.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3053.receiver = this;
  block3053.className = 'block<typechecker:1217>';
  block3053.real = function(
var_ut
) {
  var call3054 = callmethod(this,"findType", [1], var_ut);
  lineNumber = 1218
  lineNumber = 1
  lineNumber = 1217
  var call3055 = callmethod(var_tmp2,"unionTypes", [0]);
  var call3056 = callmethod(call3055,"push", [1], call3054);
  return call3056;
};
  var call3057 = callmethod(Grace_prelude,"for()do", [1, 1], var_tmp, block3053);
  lineNumber = 1220
  lineNumber = 1219
  var bool3058 = new GraceBoolean(false)
  var_tmp4 = bool3058;
  lineNumber = 1233
  lineNumber = 1220
  lineNumber = 1
  lineNumber = 1220
  var call3059 = callmethod(var_tmp2,"unionTypes", [0]);
  lineNumber = 1233
  var block3060 = Grace_allocObject();
  block3060.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3060.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3060.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3060.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3060.receiver = this;
  block3060.className = 'block<typechecker:1233>';
  block3060.real = function(
var_utt
) {
  lineNumber = 1234
  lineNumber = 1221
  var bool3062 = new GraceBoolean(false)
  var opresult3064 = callmethod(var_tmp4, "==", [1], bool3062);
  if (Grace_isTrue(opresult3064)) {
  lineNumber = 1223
  lineNumber = 1
  lineNumber = 1222
  var call3065 = callmethod(var_utt,"methods", [0]);
  var_tmp4 = call3065;
  var if3061 = call3065;
  } else {
  lineNumber = 1225
  var array3066 = new GraceList([
]);

  var_tmp3 = array3066;
  lineNumber = 1228
  lineNumber = 1225
  lineNumber = 1
  lineNumber = 1225
  var call3067 = callmethod(var_utt,"methods", [0]);
  lineNumber = 1228
  var block3068 = Grace_allocObject();
  block3068.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3068.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3068.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3068.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3068.receiver = this;
  block3068.className = 'block<typechecker:1228>';
  block3068.real = function(
var_utm
) {
  lineNumber = 1226
  lineNumber = 1228
  var block3069 = Grace_allocObject();
  block3069.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3069.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3069.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3069.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3069.receiver = this;
  block3069.className = 'block<typechecker:1228>';
  block3069.real = function(
var_existingmeth
) {
  lineNumber = 1230
  lineNumber = 1
  lineNumber = 1227
  var call3071 = callmethod(var_existingmeth,"value", [0]);
  lineNumber = 1230
  lineNumber = 1
  lineNumber = 1227
  var call3072 = callmethod(var_utm,"value", [0]);
  var opresult3074 = callmethod(call3071, "==", [1], call3072);
  if (Grace_isTrue(opresult3074)) {
  lineNumber = 1228
  var call3075 = callmethod(var_tmp3,"push", [1], var_existingmeth);
  var if3070 = call3075;
}
  return if3070;
};
  var call3076 = callmethod(Grace_prelude,"for()do", [1, 1], var_tmp4, block3069);
  return call3076;
};
  var call3077 = callmethod(Grace_prelude,"for()do", [1, 1], call3067, block3068);
  lineNumber = 1233
  lineNumber = 1232
  var_tmp4 = var_tmp3;
  var if3061 = var_tmp3;
}
  return if3061;
};
  var call3078 = callmethod(Grace_prelude,"for()do", [1, 1], call3059, block3060);
  lineNumber = 1241
  lineNumber = 1242
  lineNumber = 1235
  var bool3080 = new GraceBoolean(false)
  var opresult3082 = callmethod(var_tmp4, "/=", [1], bool3080);
  if (Grace_isTrue(opresult3082)) {
  lineNumber = 1236
  lineNumber = 1
  lineNumber = 1236
  var call3083 = callmethod(var_node,"value", [0]);
  lineNumber = 1237
  lineNumber = 1
  lineNumber = 1236
  var call3084 = callmethod(var_ast,"typeNode", [0]);
  var call3085 = callmethod(call3084,"new", [2], call3083, var_tmp4);
  var_tmp3 = call3085;
  lineNumber = 1238
  lineNumber = 1237
  lineNumber = 1
  lineNumber = 1237
  var call3086 = callmethod(var_tmp2,"unionTypes", [0]);
  lineNumber = 1238
  var block3087 = Grace_allocObject();
  block3087.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3087.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3087.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3087.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3087.receiver = this;
  block3087.className = 'block<typechecker:1238>';
  block3087.real = function(
var_ut
) {
  lineNumber = 1239
  lineNumber = 1
  lineNumber = 1238
  var call3088 = callmethod(var_tmp3,"unionTypes", [0]);
  var call3089 = callmethod(call3088,"push", [1], var_ut);
  return call3089;
};
  var call3090 = callmethod(Grace_prelude,"for()do", [1, 1], call3086, block3087);
  lineNumber = 1241
  lineNumber = 1240
  var_tmp2 = var_tmp3;
  var if3079 = var_tmp3;
}
  lineNumber = 1242
  var call3091 = callmethod(var_subtype,"resetType", [1], var_tmp2);
  var if3042 = call3091;
  } else {
  lineNumber = 1280
  lineNumber = 1278
  lineNumber = 1
  lineNumber = 1278
  lineNumber = 1
  lineNumber = 1243
  var call3093 = callmethod(var_node,"intersectionTypes", [0]);
  var call3094 = callmethod(call3093,"size", [0]);
  var opresult3096 = callmethod(call3094, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult3096)) {
  lineNumber = 1244
  lineNumber = 1
  lineNumber = 1244
  var call3097 = callmethod(var_node,"intersectionTypes", [0]);
  lineNumber = 1245
  var call3098 = callmethod(this,"resolveIdentifiersList", [1], call3097);
  var_tmp = call3098;
  lineNumber = 1
  lineNumber = 1245
  var call3099 = callmethod(var_node,"value", [0]);
  lineNumber = 1
  lineNumber = 1245
  var call3100 = callmethod(var_node,"methods", [0]);
  lineNumber = 1246
  lineNumber = 1
  lineNumber = 1245
  var call3101 = callmethod(var_ast,"typeNode", [0]);
  var call3102 = callmethod(call3101,"new", [2], call3099, call3100);
  var_tmp2 = call3102;
  lineNumber = 1247
  lineNumber = 1246
  lineNumber = 1247
  var block3103 = Grace_allocObject();
  block3103.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3103.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3103.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3103.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3103.receiver = this;
  block3103.className = 'block<typechecker:1247>';
  block3103.real = function(
var_it
) {
  var call3104 = callmethod(this,"findType", [1], var_it);
  lineNumber = 1248
  lineNumber = 1
  lineNumber = 1247
  var call3105 = callmethod(var_tmp2,"intersectionTypes", [0]);
  var call3106 = callmethod(call3105,"push", [1], call3104);
  return call3106;
};
  var call3107 = callmethod(Grace_prelude,"for()do", [1, 1], var_tmp, block3103);
  lineNumber = 1250
  lineNumber = 1249
  var bool3108 = new GraceBoolean(false)
  var_tmp4 = bool3108;
  lineNumber = 1265
  lineNumber = 1250
  lineNumber = 1
  lineNumber = 1250
  var call3109 = callmethod(var_tmp2,"intersectionTypes", [0]);
  lineNumber = 1265
  var block3110 = Grace_allocObject();
  block3110.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3110.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3110.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3110.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3110.receiver = this;
  block3110.className = 'block<typechecker:1265>';
  block3110.real = function(
var_utt
) {
  lineNumber = 1269
  lineNumber = 1251
  var bool3112 = new GraceBoolean(false)
  var opresult3114 = callmethod(var_tmp4, "==", [1], bool3112);
  if (Grace_isTrue(opresult3114)) {
  lineNumber = 1253
  var array3115 = new GraceList([
]);

  var_tmp4 = array3115;
  lineNumber = 1254
  lineNumber = 1253
  lineNumber = 1
  lineNumber = 1253
  var call3116 = callmethod(var_utt,"methods", [0]);
  lineNumber = 1254
  var block3117 = Grace_allocObject();
  block3117.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3117.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3117.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3117.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3117.receiver = this;
  block3117.className = 'block<typechecker:1254>';
  block3117.real = function(
var_tm
) {
  var call3118 = callmethod(var_tmp4,"push", [1], var_tm);
  return call3118;
};
  var call3119 = callmethod(Grace_prelude,"for()do", [1, 1], call3116, block3117);
  var if3111 = call3119;
  } else {
  lineNumber = 1265
  lineNumber = 1257
  lineNumber = 1
  lineNumber = 1257
  var call3120 = callmethod(var_utt,"methods", [0]);
  lineNumber = 1265
  var block3121 = Grace_allocObject();
  block3121.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3121.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3121.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3121.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3121.receiver = this;
  block3121.className = 'block<typechecker:1265>';
  block3121.real = function(
var_utm
) {
  lineNumber = 1259
  lineNumber = 1258
  var bool3122 = new GraceBoolean(false)
  var var_imfound = bool3122;
  lineNumber = 1262
  lineNumber = 1259
  lineNumber = 1262
  var block3123 = Grace_allocObject();
  block3123.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3123.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3123.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3123.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3123.receiver = this;
  block3123.className = 'block<typechecker:1262>';
  block3123.real = function(
var_existingmeth
) {
  lineNumber = 1263
  lineNumber = 1
  lineNumber = 1260
  var call3125 = callmethod(var_existingmeth,"value", [0]);
  lineNumber = 1263
  lineNumber = 1
  lineNumber = 1260
  var call3126 = callmethod(var_utm,"value", [0]);
  var opresult3128 = callmethod(call3125, "==", [1], call3126);
  if (Grace_isTrue(opresult3128)) {
  lineNumber = 1262
  lineNumber = 1261
  var bool3129 = new GraceBoolean(true)
  var_imfound = bool3129;
  var if3124 = bool3129;
}
  return if3124;
};
  var call3130 = callmethod(Grace_prelude,"for()do", [1, 1], var_tmp4, block3123);
  lineNumber = 1265
  lineNumber = 1267
  lineNumber = 1264
  var call3132 = callmethod(var_imfound,"prefix!", [0]);
  if (Grace_isTrue(call3132)) {
  lineNumber = 1265
  var call3133 = callmethod(var_tmp4,"push", [1], var_utm);
  var if3131 = call3133;
}
  return if3131;
};
  var call3134 = callmethod(Grace_prelude,"for()do", [1, 1], call3120, block3121);
  var if3111 = call3134;
}
  return if3111;
};
  var call3135 = callmethod(Grace_prelude,"for()do", [1, 1], call3109, block3110);
  lineNumber = 1276
  lineNumber = 1277
  lineNumber = 1270
  var bool3137 = new GraceBoolean(false)
  var opresult3139 = callmethod(var_tmp4, "/=", [1], bool3137);
  if (Grace_isTrue(opresult3139)) {
  lineNumber = 1271
  lineNumber = 1
  lineNumber = 1271
  var call3140 = callmethod(var_node,"value", [0]);
  lineNumber = 1272
  lineNumber = 1
  lineNumber = 1271
  var call3141 = callmethod(var_ast,"typeNode", [0]);
  var call3142 = callmethod(call3141,"new", [2], call3140, var_tmp4);
  var_tmp3 = call3142;
  lineNumber = 1273
  lineNumber = 1272
  lineNumber = 1
  lineNumber = 1272
  var call3143 = callmethod(var_tmp2,"intersectionTypes", [0]);
  lineNumber = 1273
  var block3144 = Grace_allocObject();
  block3144.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3144.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3144.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3144.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3144.receiver = this;
  block3144.className = 'block<typechecker:1273>';
  block3144.real = function(
var_ut
) {
  lineNumber = 1274
  lineNumber = 1
  lineNumber = 1273
  var call3145 = callmethod(var_tmp3,"intersectionTypes", [0]);
  var call3146 = callmethod(call3145,"push", [1], var_ut);
  return call3146;
};
  var call3147 = callmethod(Grace_prelude,"for()do", [1, 1], call3143, block3144);
  lineNumber = 1276
  lineNumber = 1275
  var_tmp2 = var_tmp3;
  var if3136 = var_tmp3;
}
  lineNumber = 1277
  var call3148 = callmethod(var_subtype,"resetType", [1], var_tmp2);
  var if3092 = call3148;
  } else {
  lineNumber = 1280
  lineNumber = 1279
  var_tmp2 = var_node;
  var if3092 = var_node;
}
  var if3042 = if3092;
}
  var if2984 = if3042;
}
  lineNumber = 1282
  lineNumber = 1281
  return var_tmp2
  var if2979 = undefined;
}
  lineNumber = 1299
  lineNumber = 1302
  lineNumber = 1
  lineNumber = 1283
  var call3150 = callmethod(var_node,"kind", [0]);
  var string3151 = new GraceString("vardec");
  var opresult3153 = callmethod(call3150, "==", [1], string3151);
  if (Grace_isTrue(opresult3153)) {
  lineNumber = 1285
  lineNumber = 1
  lineNumber = 1284
  var call3154 = callmethod(var_node,"value", [0]);
  var_tmp = call3154;
  lineNumber = 1285
  lineNumber = 1286
  var call3155 = callmethod(this,"resolveIdentifiers", [1], var_tmp);
  var_tmp2 = call3155;
  lineNumber = 1
  lineNumber = 1286
  var call3156 = callmethod(var_node,"dtype", [0]);
  lineNumber = 1287
  var call3157 = callmethod(this,"resolveIdentifiers", [1], call3156);
  var_tmp4 = call3157;
  lineNumber = 1294
  lineNumber = 1297
  lineNumber = 1287
  var bool3159 = new GraceBoolean(false)
  var opresult3161 = callmethod(var_tmp2, "/=", [1], bool3159);
  if (Grace_isTrue(opresult3161)) {
  lineNumber = 1288
  lineNumber = 1289
  var call3162 = callmethod(this,"findType", [1], var_tmp4);
  var_tmp3 = call3162;
  lineNumber = 1290
  lineNumber = 1289
  var_tmp4 = var_tmp3;
  lineNumber = 1294
  lineNumber = 1290
  lineNumber = 1
  lineNumber = 1290
  var call3164 = callmethod(this,"expressionType", [1], var_tmp2);
  lineNumber = 1296
  var call3165 = callmethod(this,"conformsType()to", [1, 1], call3164, var_tmp3);
  var call3166 = callmethod(call3165,"not", [0]);
  if (Grace_isTrue(call3166)) {
  lineNumber = 1294
  lineNumber = 1292
  lineNumber = 1291
  var string3167 = new GraceString("initialising var of type ");
  lineNumber = 1292
  var call3168 = callmethod(var_subtype,"nicename", [1], var_tmp3);
  var opresult3170 = callmethod(string3167, "++", [1], call3168);
  lineNumber = 1293
  var string3171 = new GraceString(" with expression of type ");
  var opresult3173 = callmethod(opresult3170, "++", [1], string3171);
  lineNumber = 1294
  var call3174 = callmethod(this,"expressionType", [1], var_tmp2);
  var call3175 = callmethod(var_subtype,"nicename", [1], call3174);
  var opresult3177 = callmethod(opresult3173, "++", [1], call3175);
  lineNumber = 1291
  var call3178 = callmethod(var_util,"type_error", [1], opresult3177);
  var if3163 = call3178;
}
  var if3158 = if3163;
}
  lineNumber = 1299
  lineNumber = 1301
  lineNumber = 1297
  var opresult3181 = callmethod(var_tmp2, "/=", [1], var_tmp);
  lineNumber = 1301
  lineNumber = 1297
  lineNumber = 1301
  lineNumber = 1
  lineNumber = 1297
  var call3182 = callmethod(var_node,"dtype", [0]);
  var opresult3184 = callmethod(var_tmp4, "/=", [1], call3182);
  var opresult3186 = callmethod(opresult3181, "|", [1], opresult3184);
  if (Grace_isTrue(opresult3186)) {
  lineNumber = 1298
  lineNumber = 1
  lineNumber = 1298
  lineNumber = 1
  lineNumber = 1298
  lineNumber = 1
  lineNumber = 1298
  var call3187 = callmethod(var_node,"name", [0]);
  var call3188 = callmethod(call3187,"value", [0]);
  lineNumber = 1299
  var call3189 = callmethod(this,"findName", [1], call3188);
  var call3190 = callmethod(call3189,"dtype:=", [1], var_tmp4);
  lineNumber = 1
  lineNumber = 1299
  var call3191 = callmethod(var_node,"name", [0]);
  lineNumber = 1300
  lineNumber = 1
  lineNumber = 1299
  var call3192 = callmethod(var_ast,"varDecNode", [0]);
  var call3193 = callmethod(call3192,"new", [3], call3191, var_tmp2, var_tmp4);
  return call3193
  var if3179 = undefined;
}
  var if3149 = if3179;
}
  lineNumber = 1319
  lineNumber = 1322
  lineNumber = 1
  lineNumber = 1302
  var call3195 = callmethod(var_node,"kind", [0]);
  var string3196 = new GraceString("defdec");
  var opresult3198 = callmethod(call3195, "==", [1], string3196);
  if (Grace_isTrue(opresult3198)) {
  lineNumber = 1304
  lineNumber = 1
  lineNumber = 1303
  var call3199 = callmethod(var_node,"value", [0]);
  var_tmp = call3199;
  lineNumber = 1304
  lineNumber = 1305
  var call3200 = callmethod(this,"resolveIdentifiers", [1], var_tmp);
  var_tmp2 = call3200;
  lineNumber = 1
  lineNumber = 1305
  var call3201 = callmethod(var_node,"dtype", [0]);
  lineNumber = 1306
  var call3202 = callmethod(this,"resolveIdentifiers", [1], call3201);
  var_tmp4 = call3202;
  lineNumber = 1307
  var call3203 = callmethod(this,"findType", [1], var_tmp4);
  var_tmp3 = call3203;
  lineNumber = 1308
  var call3204 = callmethod(this,"expressionType", [1], var_tmp2);
  var var_tmp5 = call3204;
  lineNumber = 1312
  lineNumber = 1308
  lineNumber = 1
  lineNumber = 1308
  lineNumber = 1314
  var call3206 = callmethod(this,"conformsType()to", [1, 1], var_tmp5, var_tmp3);
  var call3207 = callmethod(call3206,"not", [0]);
  if (Grace_isTrue(call3207)) {
  lineNumber = 1312
  lineNumber = 1310
  lineNumber = 1309
  var string3208 = new GraceString("initialising def of type ");
  lineNumber = 1310
  var call3209 = callmethod(var_subtype,"nicename", [1], var_tmp3);
  var opresult3211 = callmethod(string3208, "++", [1], call3209);
  lineNumber = 1311
  var string3212 = new GraceString(" with expression of type ");
  var opresult3214 = callmethod(opresult3211, "++", [1], string3212);
  lineNumber = 1312
  var call3215 = callmethod(var_subtype,"nicename", [1], var_tmp5);
  var opresult3217 = callmethod(opresult3214, "++", [1], call3215);
  lineNumber = 1309
  var call3218 = callmethod(var_util,"type_error", [1], opresult3217);
  var if3205 = call3218;
}
  lineNumber = 1315
  lineNumber = 1317
  lineNumber = 1
  lineNumber = 1314
  var call3220 = callmethod(var_node,"dtype", [0]);
  var bool3221 = new GraceBoolean(false)
  var opresult3223 = callmethod(call3220, "==", [1], bool3221);
  lineNumber = 1317
  lineNumber = 1
  lineNumber = 1314
  var call3224 = callmethod(var_tmp4,"value", [0]);
  var string3225 = new GraceString("Dynamic");
  var opresult3227 = callmethod(call3224, "==", [1], string3225);
  var opresult3229 = callmethod(opresult3223, "|", [1], opresult3227);
  if (Grace_isTrue(opresult3229)) {
  lineNumber = 1315
  lineNumber = 1316
  var call3230 = callmethod(this,"expressionType", [1], var_tmp2);
  var_tmp4 = call3230;
  var if3219 = call3230;
}
  lineNumber = 1319
  lineNumber = 1321
  lineNumber = 1317
  var opresult3233 = callmethod(var_tmp2, "/=", [1], var_tmp);
  lineNumber = 1321
  lineNumber = 1317
  lineNumber = 1321
  lineNumber = 1
  lineNumber = 1317
  var call3234 = callmethod(var_node,"dtype", [0]);
  var opresult3236 = callmethod(var_tmp4, "/=", [1], call3234);
  var opresult3238 = callmethod(opresult3233, "|", [1], opresult3236);
  if (Grace_isTrue(opresult3238)) {
  lineNumber = 1318
  lineNumber = 1
  lineNumber = 1318
  lineNumber = 1
  lineNumber = 1318
  lineNumber = 1
  lineNumber = 1318
  var call3239 = callmethod(var_node,"name", [0]);
  var call3240 = callmethod(call3239,"value", [0]);
  lineNumber = 1319
  var call3241 = callmethod(this,"findName", [1], call3240);
  var call3242 = callmethod(call3241,"dtype:=", [1], var_tmp4);
  lineNumber = 1
  lineNumber = 1319
  var call3243 = callmethod(var_node,"name", [0]);
  lineNumber = 1320
  lineNumber = 1
  lineNumber = 1319
  var call3244 = callmethod(var_ast,"defDecNode", [0]);
  var call3245 = callmethod(call3244,"new", [3], call3243, var_tmp2, var_tmp4);
  return call3245
  var if3231 = undefined;
}
  var if3194 = if3231;
}
  lineNumber = 1335
  lineNumber = 1338
  lineNumber = 1
  lineNumber = 1322
  var call3247 = callmethod(var_node,"kind", [0]);
  var string3248 = new GraceString("return");
  var opresult3250 = callmethod(call3247, "==", [1], string3248);
  if (Grace_isTrue(opresult3250)) {
  lineNumber = 1324
  lineNumber = 1326
  lineNumber = 1323
  var bool3252 = new GraceBoolean(false)
  var opresult3254 = callmethod(var_currentReturnType, "==", [1], bool3252);
  if (Grace_isTrue(opresult3254)) {
  lineNumber = 1324
  var string3255 = new GraceString("return statement with no surrounding method");
  var call3256 = callmethod(var_util,"syntax_error", [1], string3255);
  var if3251 = call3256;
}
  lineNumber = 1327
  lineNumber = 1
  lineNumber = 1326
  var call3257 = callmethod(var_node,"value", [0]);
  var_tmp = call3257;
  lineNumber = 1327
  lineNumber = 1328
  var call3258 = callmethod(this,"resolveIdentifiers", [1], var_tmp);
  var_tmp2 = call3258;
  lineNumber = 1329
  var call3259 = callmethod(this,"expressionType", [1], var_tmp2);
  var_tmp3 = call3259;
  lineNumber = 1332
  lineNumber = 1329
  lineNumber = 1
  lineNumber = 1329
  lineNumber = 1334
  var call3261 = callmethod(this,"conformsType()to", [1, 1], var_tmp3, var_currentReturnType);
  var call3262 = callmethod(call3261,"not", [0]);
  if (Grace_isTrue(call3262)) {
  lineNumber = 1332
  lineNumber = 1330
  var string3263 = new GraceString("returning type ");
  lineNumber = 1332
  lineNumber = 1331
  var string3264 = new GraceString("");
  lineNumber = 1332
  lineNumber = 1
  lineNumber = 1331
  var call3265 = callmethod(var_tmp3,"value", [0]);
  var opresult3267 = callmethod(string3264, "++", [1], call3265);
  var string3268 = new GraceString(" from method of return type ");
  var opresult3270 = callmethod(opresult3267, "++", [1], string3268);
  var opresult3272 = callmethod(string3263, "++", [1], opresult3270);
  lineNumber = 1332
  lineNumber = 1
  lineNumber = 1332
  var call3273 = callmethod(var_currentReturnType,"value", [0]);
  var opresult3275 = callmethod(opresult3272, "++", [1], call3273);
  lineNumber = 1330
  var call3276 = callmethod(var_util,"type_error", [1], opresult3275);
  var if3260 = call3276;
}
  lineNumber = 1335
  lineNumber = 1337
  lineNumber = 1334
  var opresult3279 = callmethod(var_tmp2, "/=", [1], var_tmp);
  if (Grace_isTrue(opresult3279)) {
  lineNumber = 1335
  lineNumber = 1336
  lineNumber = 1
  lineNumber = 1335
  var call3280 = callmethod(var_ast,"returnNode", [0]);
  var call3281 = callmethod(call3280,"new", [1], var_tmp2);
  return call3281
  var if3277 = undefined;
}
  var if3246 = if3277;
}
  lineNumber = 1343
  lineNumber = 1346
  lineNumber = 1
  lineNumber = 1338
  var call3283 = callmethod(var_node,"kind", [0]);
  var string3284 = new GraceString("index");
  var opresult3286 = callmethod(call3283, "==", [1], string3284);
  if (Grace_isTrue(opresult3286)) {
  lineNumber = 1340
  lineNumber = 1
  lineNumber = 1339
  var call3287 = callmethod(var_node,"value", [0]);
  var_tmp = call3287;
  lineNumber = 1340
  lineNumber = 1341
  var call3288 = callmethod(this,"resolveIdentifiers", [1], var_tmp);
  var_tmp2 = call3288;
  lineNumber = 1
  lineNumber = 1341
  var call3289 = callmethod(var_node,"index", [0]);
  lineNumber = 1342
  var call3290 = callmethod(this,"resolveIdentifiers", [1], call3289);
  var_tmp3 = call3290;
  lineNumber = 1343
  lineNumber = 1345
  lineNumber = 1342
  var opresult3293 = callmethod(var_tmp2, "/=", [1], var_tmp);
  lineNumber = 1345
  lineNumber = 1342
  lineNumber = 1345
  lineNumber = 1
  lineNumber = 1342
  var call3294 = callmethod(var_node,"index", [0]);
  var opresult3296 = callmethod(var_tmp3, "/=", [1], call3294);
  var opresult3298 = callmethod(opresult3293, "|", [1], opresult3296);
  if (Grace_isTrue(opresult3298)) {
  lineNumber = 1343
  lineNumber = 1344
  lineNumber = 1
  lineNumber = 1343
  var call3299 = callmethod(var_ast,"indexNode", [0]);
  var call3300 = callmethod(call3299,"new", [2], var_tmp2, var_tmp3);
  return call3300
  var if3291 = undefined;
}
  var if3282 = if3291;
}
  lineNumber = 1350
  lineNumber = 1353
  lineNumber = 1
  lineNumber = 1346
  var call3302 = callmethod(var_node,"kind", [0]);
  var string3303 = new GraceString("op");
  var opresult3305 = callmethod(call3302, "==", [1], string3303);
  if (Grace_isTrue(opresult3305)) {
  lineNumber = 1347
  lineNumber = 1
  lineNumber = 1347
  var call3306 = callmethod(var_node,"left", [0]);
  lineNumber = 1348
  var call3307 = callmethod(this,"resolveIdentifiers", [1], call3306);
  var_tmp = call3307;
  lineNumber = 1
  lineNumber = 1348
  var call3308 = callmethod(var_node,"right", [0]);
  lineNumber = 1349
  var call3309 = callmethod(this,"resolveIdentifiers", [1], call3308);
  var_tmp2 = call3309;
  lineNumber = 1350
  lineNumber = 1352
  lineNumber = 1349
  lineNumber = 1352
  lineNumber = 1
  lineNumber = 1349
  var call3311 = callmethod(var_node,"left", [0]);
  var opresult3313 = callmethod(var_tmp, "/=", [1], call3311);
  lineNumber = 1352
  lineNumber = 1349
  lineNumber = 1352
  lineNumber = 1
  lineNumber = 1349
  var call3314 = callmethod(var_node,"right", [0]);
  var opresult3316 = callmethod(var_tmp2, "/=", [1], call3314);
  var opresult3318 = callmethod(opresult3313, "|", [1], opresult3316);
  if (Grace_isTrue(opresult3318)) {
  lineNumber = 1350
  lineNumber = 1
  lineNumber = 1350
  var call3319 = callmethod(var_node,"value", [0]);
  lineNumber = 1351
  lineNumber = 1
  lineNumber = 1350
  var call3320 = callmethod(var_ast,"opNode", [0]);
  var call3321 = callmethod(call3320,"new", [3], call3319, var_tmp, var_tmp2);
  return call3321
  var if3310 = undefined;
}
  var if3301 = if3310;
}
  lineNumber = 1359
  lineNumber = 1362
  lineNumber = 1
  lineNumber = 1353
  var call3323 = callmethod(var_node,"kind", [0]);
  var string3324 = new GraceString("if");
  var opresult3326 = callmethod(call3323, "==", [1], string3324);
  if (Grace_isTrue(opresult3326)) {
  lineNumber = 1354
  lineNumber = 1
  lineNumber = 1354
  var call3327 = callmethod(var_node,"value", [0]);
  lineNumber = 1355
  var call3328 = callmethod(this,"resolveIdentifiers", [1], call3327);
  var_tmp = call3328;
  lineNumber = 1
  lineNumber = 1355
  var call3329 = callmethod(var_node,"thenblock", [0]);
  lineNumber = 1356
  var call3330 = callmethod(this,"resolveIdentifiersList", [1], call3329);
  var_tmp2 = call3330;
  lineNumber = 1
  lineNumber = 1356
  var call3331 = callmethod(var_node,"elseblock", [0]);
  lineNumber = 1357
  var call3332 = callmethod(this,"resolveIdentifiersList", [1], call3331);
  var_tmp3 = call3332;
  lineNumber = 1359
  lineNumber = 1361
  lineNumber = 1357
  lineNumber = 1361
  lineNumber = 1
  lineNumber = 1357
  var call3334 = callmethod(var_node,"value", [0]);
  var opresult3336 = callmethod(var_tmp, "/=", [1], call3334);
  lineNumber = 1361
  lineNumber = 1357
  lineNumber = 1361
  lineNumber = 1
  lineNumber = 1357
  var call3337 = callmethod(var_node,"thenblock", [0]);
  var opresult3339 = callmethod(var_tmp2, "/=", [1], call3337);
  var opresult3341 = callmethod(opresult3336, "|", [1], opresult3339);
  lineNumber = 1361
  lineNumber = 1358
  lineNumber = 1361
  lineNumber = 1
  lineNumber = 1358
  var call3342 = callmethod(var_node,"elseblock", [0]);
  var opresult3344 = callmethod(var_tmp3, "/=", [1], call3342);
  var opresult3346 = callmethod(opresult3341, "|", [1], opresult3344);
  if (Grace_isTrue(opresult3346)) {
  lineNumber = 1359
  lineNumber = 1360
  lineNumber = 1
  lineNumber = 1359
  var call3347 = callmethod(var_ast,"ifNode", [0]);
  var call3348 = callmethod(call3347,"new", [3], var_tmp, var_tmp2, var_tmp3);
  return call3348
  var if3333 = undefined;
}
  var if3322 = if3333;
}
  lineNumber = 1366
  lineNumber = 1369
  lineNumber = 1
  lineNumber = 1362
  var call3350 = callmethod(var_node,"kind", [0]);
  var string3351 = new GraceString("while");
  var opresult3353 = callmethod(call3350, "==", [1], string3351);
  if (Grace_isTrue(opresult3353)) {
  lineNumber = 1363
  lineNumber = 1
  lineNumber = 1363
  var call3354 = callmethod(var_node,"value", [0]);
  lineNumber = 1364
  var call3355 = callmethod(this,"resolveIdentifiers", [1], call3354);
  var_tmp = call3355;
  lineNumber = 1
  lineNumber = 1364
  var call3356 = callmethod(var_node,"body", [0]);
  lineNumber = 1365
  var call3357 = callmethod(this,"resolveIdentifiersList", [1], call3356);
  var_tmp2 = call3357;
  lineNumber = 1366
  lineNumber = 1368
  lineNumber = 1365
  lineNumber = 1368
  lineNumber = 1
  lineNumber = 1365
  var call3359 = callmethod(var_node,"value", [0]);
  var opresult3361 = callmethod(var_tmp, "/=", [1], call3359);
  lineNumber = 1368
  lineNumber = 1365
  lineNumber = 1368
  lineNumber = 1
  lineNumber = 1365
  var call3362 = callmethod(var_node,"body", [0]);
  var opresult3364 = callmethod(var_tmp2, "/=", [1], call3362);
  var opresult3366 = callmethod(opresult3361, "|", [1], opresult3364);
  if (Grace_isTrue(opresult3366)) {
  lineNumber = 1366
  lineNumber = 1367
  lineNumber = 1
  lineNumber = 1366
  var call3367 = callmethod(var_ast,"whileNode", [0]);
  var call3368 = callmethod(call3367,"new", [2], var_tmp, var_tmp2);
  return call3368
  var if3358 = undefined;
}
  var if3349 = if3358;
}
  lineNumber = 1373
  lineNumber = 1376
  lineNumber = 1
  lineNumber = 1369
  var call3370 = callmethod(var_node,"kind", [0]);
  var string3371 = new GraceString("for");
  var opresult3373 = callmethod(call3370, "==", [1], string3371);
  if (Grace_isTrue(opresult3373)) {
  lineNumber = 1370
  lineNumber = 1
  lineNumber = 1370
  var call3374 = callmethod(var_node,"value", [0]);
  lineNumber = 1371
  var call3375 = callmethod(this,"resolveIdentifiers", [1], call3374);
  var_tmp = call3375;
  lineNumber = 1
  lineNumber = 1371
  var call3376 = callmethod(var_node,"body", [0]);
  lineNumber = 1372
  var call3377 = callmethod(this,"resolveIdentifiers", [1], call3376);
  var_tmp2 = call3377;
  lineNumber = 1373
  lineNumber = 1375
  lineNumber = 1372
  lineNumber = 1375
  lineNumber = 1
  lineNumber = 1372
  var call3379 = callmethod(var_node,"value", [0]);
  var opresult3381 = callmethod(var_tmp, "/=", [1], call3379);
  lineNumber = 1375
  lineNumber = 1372
  lineNumber = 1375
  lineNumber = 1
  lineNumber = 1372
  var call3382 = callmethod(var_node,"body", [0]);
  var opresult3384 = callmethod(var_tmp2, "/=", [1], call3382);
  var opresult3386 = callmethod(opresult3381, "|", [1], opresult3384);
  if (Grace_isTrue(opresult3386)) {
  lineNumber = 1373
  lineNumber = 1374
  lineNumber = 1
  lineNumber = 1373
  var call3387 = callmethod(var_ast,"forNode", [0]);
  var call3388 = callmethod(call3387,"new", [2], var_tmp, var_tmp2);
  return call3388
  var if3378 = undefined;
}
  var if3369 = if3378;
}
  lineNumber = 1376
  return var_node
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["resolveIdentifiers"] = func2459;
  lineNumber = 1491
var func3389 = function(argcv) {
  var curarg = 1;
  var var_lst = arguments[curarg];
  curarg++;
  var var_bk = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1381
  var array3390 = new GraceList([
]);

  var var_nl = array3390;
  lineNumber = 1382
  lineNumber = 1381
  var bool3391 = new GraceBoolean(false)
  var var_isobj = bool3391;
  lineNumber = 1383
  var var_tpb;
  lineNumber = 1384
  lineNumber = 1383
  var bool3392 = new GraceBoolean(false)
  var var_tmp = bool3392;
  lineNumber = 1384
  var call3393 = callmethod(this,"pushScope", [0]);
  lineNumber = 1385
  lineNumber = 1
  lineNumber = 1385
  var call3394 = callmethod(var_bk,"apply", [0]);
  lineNumber = 1388
  lineNumber = 1386
  var string3396 = new GraceString("___is_object");
  lineNumber = 1389
  lineNumber = 1
  lineNumber = 1386
  var call3397 = callmethod(var_scopes,"last", [0]);
  var call3398 = callmethod(call3397,"contains", [1], string3396);
  if (Grace_isTrue(call3398)) {
  lineNumber = 1388
  lineNumber = 1387
  var bool3399 = new GraceBoolean(true)
  var_isobj = bool3399;
  var if3395 = bool3399;
}
  lineNumber = 1393
  lineNumber = 1389
  lineNumber = 1393
  var block3400 = Grace_allocObject();
  block3400.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3400.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3400.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3400.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3400.receiver = this;
  block3400.className = 'block<typechecker:1393>';
  block3400.real = function(
var_e
) {
  lineNumber = 1395
  lineNumber = 1
  lineNumber = 1390
  var call3402 = callmethod(var_e,"kind", [0]);
  var string3403 = new GraceString("type");
  var opresult3405 = callmethod(call3402, "==", [1], string3403);
  if (Grace_isTrue(opresult3405)) {
  lineNumber = 1391
  var string3406 = new GraceString("type");
  var call3407 = callmethod(var_Binding,"new", [1], string3406);
  var_tpb = call3407;
  lineNumber = 1393
  lineNumber = 1
  lineNumber = 1392
  var call3408 = callmethod(var_tpb,"value:=", [1], var_e);
  lineNumber = 1393
  lineNumber = 1
  lineNumber = 1393
  var call3409 = callmethod(var_e,"value", [0]);
  lineNumber = 1394
  var call3410 = callmethod(this,"bindName", [2], call3409, var_tpb);
  var if3401 = call3410;
}
  return if3401;
};
  var call3411 = callmethod(Grace_prelude,"for()do", [1, 1], var_lst, block3400);
  lineNumber = 1400
  lineNumber = 1396
  lineNumber = 1400
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
  block3412.className = 'block<typechecker:1400>';
  block3412.real = function(
var_e
) {
  lineNumber = 1402
  lineNumber = 1
  lineNumber = 1397
  var call3414 = callmethod(var_e,"kind", [0]);
  var string3415 = new GraceString("type");
  var opresult3417 = callmethod(call3414, "==", [1], string3415);
  if (Grace_isTrue(opresult3417)) {
  lineNumber = 1398
  lineNumber = 1
  lineNumber = 1398
  var call3418 = callmethod(var_e,"value", [0]);
  lineNumber = 1399
  var call3419 = callmethod(this,"findName", [1], call3418);
  var_tpb = call3419;
  lineNumber = 1
  lineNumber = 1399
  lineNumber = 1400
  var call3420 = callmethod(this,"resolveIdentifiers", [1], var_e);
  lineNumber = 1399
  var call3421 = callmethod(var_tpb,"value:=", [1], call3420);
  lineNumber = 1400
  lineNumber = 1
  lineNumber = 1400
  var call3422 = callmethod(var_tpb,"value", [0]);
  var call3423 = callmethod(var_subtype,"addType", [1], call3422);
  var if3413 = call3423;
}
  return if3413;
};
  var call3424 = callmethod(Grace_prelude,"for()do", [1, 1], var_lst, block3412);
  lineNumber = 1481
  lineNumber = 1403
  lineNumber = 1481
  var block3425 = Grace_allocObject();
  block3425.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3425.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3425.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3425.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3425.receiver = this;
  block3425.className = 'block<typechecker:1481>';
  block3425.real = function(
var_e
) {
  lineNumber = 1483
  lineNumber = 1404
  lineNumber = 1483
  lineNumber = 1
  lineNumber = 1404
  var call3427 = callmethod(var_e,"kind", [0]);
  var string3428 = new GraceString("vardec");
  var opresult3430 = callmethod(call3427, "==", [1], string3428);
  lineNumber = 1483
  lineNumber = 1
  lineNumber = 1404
  var call3431 = callmethod(var_e,"kind", [0]);
  var string3432 = new GraceString("defdec");
  var opresult3434 = callmethod(call3431, "==", [1], string3432);
  var opresult3436 = callmethod(opresult3430, "|", [1], opresult3434);
  var opresult3438 = callmethod(var_isobj, "&", [1], opresult3436);
  if (Grace_isTrue(opresult3438)) {
  lineNumber = 1405
  lineNumber = 1
  lineNumber = 1405
  lineNumber = 1
  lineNumber = 1405
  var call3439 = callmethod(var_e,"name", [0]);
  var call3440 = callmethod(call3439,"value", [0]);
  var string3441 = new GraceString("method");
  var call3442 = callmethod(var_Binding,"new", [1], string3441);
  lineNumber = 1406
  var call3443 = callmethod(this,"bindName", [2], call3440, call3442);
  lineNumber = 1407
  lineNumber = 1
  lineNumber = 1407
  lineNumber = 1
  lineNumber = 1407
  var call3444 = callmethod(var_e,"name", [0]);
  var call3445 = callmethod(call3444,"value", [0]);
  lineNumber = 1
  lineNumber = 1407
  lineNumber = 1
  lineNumber = 1407
  var call3447 = callmethod(var_e,"name", [0]);
  var call3448 = callmethod(call3447,"value", [0]);
  lineNumber = 1
  lineNumber = 1407
  var call3449 = callmethod(var_ast,"signaturePart", [0]);
  var call3450 = callmethod(call3449,"new", [1], call3448);
  var array3446 = new GraceList([
call3450,
]);

  lineNumber = 1
  lineNumber = 1407
  var call3451 = callmethod(var_e,"dtype", [0]);
  var call3452 = callmethod(this,"findType", [1], call3451);
  lineNumber = 1
  lineNumber = 1407
  var call3453 = callmethod(var_ast,"methodTypeNode", [0]);
  var call3454 = callmethod(call3453,"new", [3], call3445, array3446, call3452);
  lineNumber = 1408
  lineNumber = 1
  lineNumber = 1408
  lineNumber = 1
  lineNumber = 1406
  var call3455 = callmethod(var_selftypes,"last", [0]);
  var call3456 = callmethod(call3455,"methods", [0]);
  var call3457 = callmethod(call3456,"push", [1], call3454);
  var if3426 = call3457;
  } else {
  lineNumber = 1481
  lineNumber = 1416
  lineNumber = 1
  lineNumber = 1408
  var call3459 = callmethod(var_e,"kind", [0]);
  var string3460 = new GraceString("vardec");
  var opresult3462 = callmethod(call3459, "==", [1], string3460);
  if (Grace_isTrue(opresult3462)) {
  lineNumber = 1409
  lineNumber = 1
  lineNumber = 1409
  var call3463 = callmethod(var_e,"dtype", [0]);
  lineNumber = 1410
  var call3464 = callmethod(this,"findType", [1], call3463);
  var_tpb = call3464;
  lineNumber = 1411
  lineNumber = 1410
  lineNumber = 1413
  lineNumber = 1410
  var bool3466 = new GraceBoolean(false)
  var opresult3468 = callmethod(var_tpb, "==", [1], bool3466);
  var block3469 = Grace_allocObject();
  block3469.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3469.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3469.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3469.receiver = this;
  block3469.className = 'block<typechecker:1410>';
  block3469.real = function(
) {
  lineNumber = 1
  lineNumber = 1410
  var call3470 = callmethod(var_tpb,"kind", [0]);
  var string3471 = new GraceString("type");
  var opresult3473 = callmethod(call3470, "/=", [1], string3471);
  return opresult3473;
};
  var opresult3475 = callmethod(opresult3468, "||", [1], block3469);
  if (Grace_isTrue(opresult3475)) {
  lineNumber = 1411
  var string3476 = new GraceString("declared type of ");
  lineNumber = 1
  lineNumber = 1411
  lineNumber = 1
  lineNumber = 1411
  var call3477 = callmethod(var_e,"name", [0]);
  var call3478 = callmethod(call3477,"value", [0]);
  var opresult3480 = callmethod(string3476, "++", [1], call3478);
  var string3481 = new GraceString(", '");
  var opresult3483 = callmethod(opresult3480, "++", [1], string3481);
  lineNumber = 1
  lineNumber = 1411
  lineNumber = 1
  lineNumber = 1411
  var call3484 = callmethod(var_e,"dtype", [0]);
  var call3485 = callmethod(call3484,"value", [0]);
  var opresult3487 = callmethod(opresult3483, "++", [1], call3485);
  var string3488 = new GraceString("', not a type");
  var opresult3490 = callmethod(opresult3487, "++", [1], string3488);
  var call3491 = callmethod(var_util,"type_error", [1], opresult3490);
  var if3465 = call3491;
}
  lineNumber = 1413
  var string3492 = new GraceString("var");
  var call3493 = callmethod(var_Binding,"new", [1], string3492);
  var_tmp = call3493;
  lineNumber = 1415
  lineNumber = 1
  lineNumber = 1414
  var call3494 = callmethod(var_tmp,"dtype:=", [1], var_tpb);
  lineNumber = 1415
  lineNumber = 1
  lineNumber = 1415
  lineNumber = 1
  lineNumber = 1415
  var call3495 = callmethod(var_e,"name", [0]);
  var call3496 = callmethod(call3495,"value", [0]);
  lineNumber = 1416
  var call3497 = callmethod(this,"bindName", [2], call3496, var_tmp);
  var if3458 = call3497;
  } else {
  lineNumber = 1481
  lineNumber = 1424
  lineNumber = 1
  lineNumber = 1416
  var call3499 = callmethod(var_e,"kind", [0]);
  var string3500 = new GraceString("defdec");
  var opresult3502 = callmethod(call3499, "==", [1], string3500);
  if (Grace_isTrue(opresult3502)) {
  lineNumber = 1417
  lineNumber = 1
  lineNumber = 1417
  var call3503 = callmethod(var_e,"dtype", [0]);
  lineNumber = 1418
  var call3504 = callmethod(this,"findType", [1], call3503);
  var_tpb = call3504;
  lineNumber = 1419
  lineNumber = 1418
  lineNumber = 1421
  lineNumber = 1418
  var bool3506 = new GraceBoolean(false)
  var opresult3508 = callmethod(var_tpb, "==", [1], bool3506);
  var block3509 = Grace_allocObject();
  block3509.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3509.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3509.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3509.receiver = this;
  block3509.className = 'block<typechecker:1418>';
  block3509.real = function(
) {
  lineNumber = 1
  lineNumber = 1418
  var call3510 = callmethod(var_tpb,"kind", [0]);
  var string3511 = new GraceString("type");
  var opresult3513 = callmethod(call3510, "/=", [1], string3511);
  return opresult3513;
};
  var opresult3515 = callmethod(opresult3508, "||", [1], block3509);
  if (Grace_isTrue(opresult3515)) {
  lineNumber = 1419
  var string3516 = new GraceString("declared type of ");
  lineNumber = 1
  lineNumber = 1419
  lineNumber = 1
  lineNumber = 1419
  var call3517 = callmethod(var_e,"name", [0]);
  var call3518 = callmethod(call3517,"value", [0]);
  var opresult3520 = callmethod(string3516, "++", [1], call3518);
  var string3521 = new GraceString(", '");
  var opresult3523 = callmethod(opresult3520, "++", [1], string3521);
  lineNumber = 1
  lineNumber = 1419
  lineNumber = 1
  lineNumber = 1419
  var call3524 = callmethod(var_e,"dtype", [0]);
  var call3525 = callmethod(call3524,"value", [0]);
  var opresult3527 = callmethod(opresult3523, "++", [1], call3525);
  var string3528 = new GraceString("', not a type");
  var opresult3530 = callmethod(opresult3527, "++", [1], string3528);
  var call3531 = callmethod(var_util,"type_error", [1], opresult3530);
  var if3505 = call3531;
}
  lineNumber = 1421
  var string3532 = new GraceString("def");
  var call3533 = callmethod(var_Binding,"new", [1], string3532);
  var_tmp = call3533;
  lineNumber = 1423
  lineNumber = 1
  lineNumber = 1422
  var call3534 = callmethod(var_tmp,"dtype:=", [1], var_tpb);
  lineNumber = 1423
  lineNumber = 1
  lineNumber = 1423
  lineNumber = 1
  lineNumber = 1423
  var call3535 = callmethod(var_e,"name", [0]);
  var call3536 = callmethod(call3535,"value", [0]);
  lineNumber = 1424
  var call3537 = callmethod(this,"bindName", [2], call3536, var_tmp);
  var if3498 = call3537;
  } else {
  lineNumber = 1481
  lineNumber = 1430
  lineNumber = 1
  lineNumber = 1424
  var call3539 = callmethod(var_e,"kind", [0]);
  var string3540 = new GraceString("method");
  var opresult3542 = callmethod(call3539, "==", [1], string3540);
  if (Grace_isTrue(opresult3542)) {
  lineNumber = 1425
  var string3543 = new GraceString("method");
  var call3544 = callmethod(var_Binding,"new", [1], string3543);
  var var_mt = call3544;
  lineNumber = 1426
  lineNumber = 1
  lineNumber = 1426
  lineNumber = 1
  lineNumber = 1426
  var call3545 = callmethod(var_e,"dtype", [0]);
  lineNumber = 1427
  var call3546 = callmethod(this,"findType", [1], call3545);
  lineNumber = 1426
  var call3547 = callmethod(var_mt,"dtype:=", [1], call3546);
  lineNumber = 1427
  lineNumber = 1
  lineNumber = 1427
  lineNumber = 1
  lineNumber = 1427
  var call3548 = callmethod(var_e,"value", [0]);
  var call3549 = callmethod(call3548,"value", [0]);
  lineNumber = 1428
  var call3550 = callmethod(this,"bindName", [2], call3549, var_mt);
  lineNumber = 1429
  lineNumber = 1
  lineNumber = 1429
  lineNumber = 1
  lineNumber = 1429
  var call3551 = callmethod(var_e,"value", [0]);
  var call3552 = callmethod(call3551,"value", [0]);
  lineNumber = 1
  lineNumber = 1429
  var call3553 = callmethod(var_e,"signature", [0]);
  lineNumber = 1
  lineNumber = 1429
  var call3554 = callmethod(var_mt,"dtype", [0]);
  lineNumber = 1
  lineNumber = 1429
  var call3555 = callmethod(var_ast,"methodTypeNode", [0]);
  var call3556 = callmethod(call3555,"new", [3], call3552, call3553, call3554);
  lineNumber = 1430
  lineNumber = 1
  lineNumber = 1430
  lineNumber = 1
  lineNumber = 1428
  var call3557 = callmethod(var_selftypes,"last", [0]);
  var call3558 = callmethod(call3557,"methods", [0]);
  var call3559 = callmethod(call3558,"push", [1], call3556);
  var if3538 = call3559;
  } else {
  lineNumber = 1481
  lineNumber = 1436
  lineNumber = 1
  lineNumber = 1430
  var call3561 = callmethod(var_e,"kind", [0]);
  var string3562 = new GraceString("inherits");
  var opresult3564 = callmethod(call3561, "==", [1], string3562);
  if (Grace_isTrue(opresult3564)) {
  lineNumber = 1431
  lineNumber = 1
  lineNumber = 1431
  var call3565 = callmethod(var_e,"value", [0]);
  var call3566 = callmethod(this,"resolveIdentifiers", [1], call3565);
  lineNumber = 1432
  var call3567 = callmethod(this,"expressionType", [1], call3566);
  var var_stype = call3567;
  lineNumber = 1433
  lineNumber = 1
  lineNumber = 1433
  lineNumber = 1
  lineNumber = 1432
  var call3568 = callmethod(var_selftypes,"last", [0]);
  var call3569 = callmethod(call3568,"methods", [0]);
  var var_st = call3569;
  lineNumber = 1434
  lineNumber = 1433
  lineNumber = 1
  lineNumber = 1433
  var call3570 = callmethod(var_stype,"methods", [0]);
  lineNumber = 1434
  var block3571 = Grace_allocObject();
  block3571.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3571.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3571.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3571.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3571.receiver = this;
  block3571.className = 'block<typechecker:1434>';
  block3571.real = function(
var_m
) {
  var call3572 = callmethod(var_st,"push", [1], var_m);
  return call3572;
};
  var call3573 = callmethod(Grace_prelude,"for()do", [1, 1], call3570, block3571);
  var if3560 = call3573;
  } else {
  lineNumber = 1481
  lineNumber = 1478
  lineNumber = 1
  lineNumber = 1436
  var call3575 = callmethod(var_e,"kind", [0]);
  var string3576 = new GraceString("class");
  var opresult3578 = callmethod(call3575, "==", [1], string3576);
  if (Grace_isTrue(opresult3578)) {
  lineNumber = 1437
  var string3579 = new GraceString("def");
  var call3580 = callmethod(var_Binding,"new", [1], string3579);
  var_tmp = call3580;
  lineNumber = 1439
  var var_className;
  lineNumber = 1440
  var array3581 = new GraceList([
]);

  var var_classGenerics = array3581;
  var call3582 = callmethod(this,"pushScope", [0]);
  lineNumber = 1453
  lineNumber = 1456
  lineNumber = 1
  lineNumber = 1456
  lineNumber = 1
  lineNumber = 1441
  var call3584 = callmethod(var_e,"name", [0]);
  var call3585 = callmethod(call3584,"kind", [0]);
  var string3586 = new GraceString("identifier");
  var opresult3588 = callmethod(call3585, "==", [1], string3586);
  if (Grace_isTrue(opresult3588)) {
  lineNumber = 1443
  lineNumber = 1
  lineNumber = 1443
  lineNumber = 1
  lineNumber = 1442
  var call3589 = callmethod(var_e,"name", [0]);
  var call3590 = callmethod(call3589,"value", [0]);
  var_className = call3590;
  var if3583 = call3590;
  } else {
  lineNumber = 1445
  lineNumber = 1
  lineNumber = 1445
  lineNumber = 1
  lineNumber = 1445
  lineNumber = 1
  lineNumber = 1444
  var call3591 = callmethod(var_e,"name", [0]);
  var call3592 = callmethod(call3591,"value", [0]);
  var call3593 = callmethod(call3592,"value", [0]);
  var_className = call3593;
  lineNumber = 1446
  lineNumber = 1
  lineNumber = 1446
  lineNumber = 1
  lineNumber = 1445
  var call3594 = callmethod(var_e,"name", [0]);
  var call3595 = callmethod(call3594,"params", [0]);
  var_classGenerics = call3595;
  lineNumber = 1453
  lineNumber = 1446
  lineNumber = 1453
  var block3596 = Grace_allocObject();
  block3596.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3596.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3596.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3596.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3596.receiver = this;
  block3596.className = 'block<typechecker:1453>';
  block3596.real = function(
var_gp
) {
  lineNumber = 1448
  lineNumber = 1
  lineNumber = 1447
  var call3597 = callmethod(var_gp,"value", [0]);
  var var_nomnm = call3597;
  lineNumber = 1448
  var array3598 = new GraceList([
]);

  lineNumber = 1449
  lineNumber = 1
  lineNumber = 1448
  var call3599 = callmethod(var_ast,"typeNode", [0]);
  var call3600 = callmethod(call3599,"new", [2], var_nomnm, array3598);
  var var_nom = call3600;
  lineNumber = 1450
  lineNumber = 1
  lineNumber = 1449
  var bool3601 = new GraceBoolean(true)
  var call3602 = callmethod(var_nom,"nominal:=", [1], bool3601);
  lineNumber = 1450
  var call3603 = callmethod(var_subtype,"addType", [1], var_nom);
  lineNumber = 1451
  var string3604 = new GraceString("type");
  var call3605 = callmethod(var_Binding,"new", [1], string3604);
  var var_gtpb = call3605;
  lineNumber = 1453
  lineNumber = 1
  lineNumber = 1452
  var call3606 = callmethod(var_gtpb,"value:=", [1], var_nom);
  lineNumber = 1453
  lineNumber = 1
  lineNumber = 1453
  var call3607 = callmethod(var_gp,"value", [0]);
  lineNumber = 1454
  var call3608 = callmethod(this,"bindName", [2], call3607, var_gtpb);
  return call3608;
};
  var call3609 = callmethod(Grace_prelude,"for()do", [1, 1], var_classGenerics, block3596);
  var if3583 = call3609;
}
  lineNumber = 1461
  lineNumber = 1456
  lineNumber = 1
  lineNumber = 1456
  var call3610 = callmethod(var_e,"signature", [0]);
  lineNumber = 1461
  var block3611 = Grace_allocObject();
  block3611.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3611.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3611.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3611.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3611.receiver = this;
  block3611.className = 'block<typechecker:1461>';
  block3611.real = function(
var_part
) {
  lineNumber = 1458
  lineNumber = 1457
  lineNumber = 1
  lineNumber = 1457
  var call3612 = callmethod(var_part,"params", [0]);
  lineNumber = 1458
  var block3613 = Grace_allocObject();
  block3613.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3613.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3613.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3613.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3613.receiver = this;
  block3613.className = 'block<typechecker:1458>';
  block3613.real = function(
var_p
) {
  lineNumber = 1459
  var call3614 = callmethod(this,"bindIdentifier", [1], var_p);
  return call3614;
};
  var call3615 = callmethod(Grace_prelude,"for()do", [1, 1], call3612, block3613);
  lineNumber = 1461
  lineNumber = 1463
  lineNumber = 1
  lineNumber = 1460
  var call3617 = callmethod(var_part,"vararg", [0]);
  var bool3618 = new GraceBoolean(false)
  var opresult3620 = callmethod(call3617, "!=", [1], bool3618);
  if (Grace_isTrue(opresult3620)) {
  lineNumber = 1461
  lineNumber = 1
  lineNumber = 1461
  var call3621 = callmethod(var_part,"vararg", [0]);
  lineNumber = 1462
  var call3622 = callmethod(this,"bindIdentifier", [1], call3621);
  var if3616 = call3622;
}
  return if3616;
};
  var call3623 = callmethod(Grace_prelude,"for()do", [1, 1], call3610, block3611);
  lineNumber = 1465
  lineNumber = 1464
  lineNumber = 1
  lineNumber = 1464
  var call3624 = callmethod(var_e,"value", [0]);
  lineNumber = 1465
  lineNumber = 1
  lineNumber = 1465
  var call3625 = callmethod(var_e,"superclass", [0]);
  lineNumber = 1
  lineNumber = 1464
  var call3626 = callmethod(var_ast,"objectNode", [0]);
  var call3627 = callmethod(call3626,"new", [2], call3624, call3625);
  lineNumber = 1466
  var call3628 = callmethod(this,"expressionType", [1], call3627);
  var var_classInstanceType__39__ = call3628;
  var call3629 = callmethod(this,"popScope", [0]);
  lineNumber = 1468
  lineNumber = 1467
  var string3630 = new GraceString("InstanceOf<");
  var opresult3632 = callmethod(string3630, "++", [1], var_className);
  var string3633 = new GraceString(">");
  var opresult3635 = callmethod(opresult3632, "++", [1], string3633);
  lineNumber = 1468
  lineNumber = 1
  lineNumber = 1468
  var call3636 = callmethod(var_classInstanceType__39__,"methods", [0]);
  lineNumber = 1469
  lineNumber = 1
  lineNumber = 1467
  var call3637 = callmethod(var_ast,"typeNode", [0]);
  var call3638 = callmethod(call3637,"new", [2], opresult3635, call3636);
  var var_classInstanceType = call3638;
  lineNumber = 1471
  lineNumber = 1469
  var string3639 = new GraceString("ClassOf<");
  var opresult3641 = callmethod(string3639, "++", [1], var_className);
  var string3642 = new GraceString(">");
  var opresult3644 = callmethod(opresult3641, "++", [1], string3642);
  lineNumber = 1471
  lineNumber = 1470
  lineNumber = 1
  lineNumber = 1470
  lineNumber = 1
  lineNumber = 1470
  var call3646 = callmethod(var_e,"constructor", [0]);
  var call3647 = callmethod(call3646,"value", [0]);
  lineNumber = 1
  lineNumber = 1470
  var call3648 = callmethod(var_e,"signature", [0]);
  lineNumber = 1471
  lineNumber = 1472
  lineNumber = 1
  lineNumber = 1470
  var call3649 = callmethod(var_ast,"methodTypeNode", [0]);
  var call3650 = callmethod(call3649,"new", [3], call3647, call3648, var_classInstanceType);
  var array3645 = new GraceList([
call3650,
]);

  lineNumber = 1473
  lineNumber = 1
  lineNumber = 1469
  var call3651 = callmethod(var_ast,"typeNode", [0]);
  var call3652 = callmethod(call3651,"new", [2], opresult3644, array3645);
  var var_classItselfType = call3652;
  lineNumber = 1474
  lineNumber = 1
  lineNumber = 1473
  var call3653 = callmethod(var_classItselfType,"generics:=", [1], var_classGenerics);
  lineNumber = 1474
  var call3654 = callmethod(var_subtype,"addType", [1], var_classInstanceType);
  lineNumber = 1475
  var call3655 = callmethod(var_subtype,"addType", [1], var_classItselfType);
  lineNumber = 1477
  lineNumber = 1
  lineNumber = 1476
  var call3656 = callmethod(var_tmp,"dtype:=", [1], var_classItselfType);
  lineNumber = 1477
  lineNumber = 1478
  var call3657 = callmethod(this,"bindName", [2], var_className, var_tmp);
  var if3574 = call3657;
  } else {
  lineNumber = 1481
  lineNumber = 1483
  lineNumber = 1
  lineNumber = 1478
  var call3659 = callmethod(var_e,"kind", [0]);
  var string3660 = new GraceString("import");
  var opresult3662 = callmethod(call3659, "==", [1], string3660);
  if (Grace_isTrue(opresult3662)) {
  lineNumber = 1479
  var string3663 = new GraceString("def");
  var call3664 = callmethod(var_Binding,"new", [1], string3663);
  var_tmp = call3664;
  lineNumber = 1481
  lineNumber = 1
  lineNumber = 1480
  var call3665 = callmethod(var_tmp,"dtype:=", [1], var_DynamicType);
  lineNumber = 1481
  lineNumber = 1
  lineNumber = 1481
  lineNumber = 1
  lineNumber = 1481
  var call3666 = callmethod(var_e,"value", [0]);
  var call3667 = callmethod(call3666,"value", [0]);
  lineNumber = 1482
  var call3668 = callmethod(this,"bindName", [2], call3667, var_tmp);
  var if3658 = call3668;
}
  var if3574 = if3658;
}
  var if3560 = if3574;
}
  var if3538 = if3560;
}
  var if3498 = if3538;
}
  var if3458 = if3498;
}
  var if3426 = if3458;
}
  return if3426;
};
  var call3669 = callmethod(Grace_prelude,"for()do", [1, 1], var_lst, block3425);
  lineNumber = 1488
  lineNumber = 1484
  lineNumber = 1488
  var block3670 = Grace_allocObject();
  block3670.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3670.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3670.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3670.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3670.receiver = this;
  block3670.className = 'block<typechecker:1488>';
  block3670.real = function(
var_e
) {
  lineNumber = 1485
  lineNumber = 1
  lineNumber = 1485
  var call3671 = callmethod(var_e,"line", [0]);
  var call3672 = callmethod(var_util,"setline", [1], call3671);
  lineNumber = 1486
  lineNumber = 1487
  var call3673 = callmethod(this,"resolveIdentifiers", [1], var_e);
  var_tmp = call3673;
  lineNumber = 1488
  var call3674 = callmethod(this,"expressionType", [1], var_tmp);
  var call3675 = callmethod(var_nl,"push", [1], var_tmp);
  return call3675;
};
  var call3676 = callmethod(Grace_prelude,"for()do", [1, 1], var_lst, block3670);
  lineNumber = 1490
  var call3677 = callmethod(this,"popScope", [0]);
  lineNumber = 1491
  return var_nl
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["resolveIdentifiersList()withBlock"] = func3389;
  lineNumber = 1495
var func3678 = function(argcv) {
  var curarg = 1;
  var var_lst = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1494
  lineNumber = 1495
  var block3679 = Grace_allocObject();
  block3679.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3679.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3679.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3679.receiver = this;
  block3679.className = 'block<typechecker:1495>';
  block3679.real = function(
) {
  return undefined;
};
  var call3680 = callmethod(this,"resolveIdentifiersList()withBlock", [1, 1], var_lst, block3679);
  return call3680
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["resolveIdentifiersList"] = func3678;
  lineNumber = 1497
  var string3681 = new GraceString("while()do");
  var string3682 = new GraceString("method");
  var call3683 = callmethod(var_Binding,"new", [1], string3682);
  var call3684 = callmethod(var_preludeObj,"put", [2], string3681, call3683);
  lineNumber = 1498
  var string3685 = new GraceString("for()do");
  var string3686 = new GraceString("method");
  var call3687 = callmethod(var_Binding,"new", [1], string3686);
  var call3688 = callmethod(var_preludeObj,"put", [2], string3685, call3687);
  lineNumber = 1499
  var string3689 = new GraceString("octets");
  var string3690 = new GraceString("method");
  var call3691 = callmethod(var_Binding,"new", [1], string3690);
  var call3692 = callmethod(var_preludeObj,"put", [2], string3689, call3691);
  lineNumber = 1572
var func3693 = function(argcv) {
  var curarg = 1;
  var var_values = arguments[curarg];
  curarg++;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1501
  var string3694 = new GraceString("typechecking.");
  var call3695 = callmethod(var_util,"log_verbose", [1], string3694);
  lineNumber = 1509
  lineNumber = 1505
  var block3696 = Grace_allocObject();
  block3696.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3696.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3696.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3696.receiver = this;
  block3696.className = 'block<typechecker:1505>';
  block3696.real = function(
) {
  lineNumber = 1503
  var string3698 = new GraceString("NativePrelude");
  lineNumber = 1508
  lineNumber = 1
  lineNumber = 1503
  var call3699 = callmethod(var_util,"extensions", [0]);
  var call3700 = callmethod(call3699,"contains", [1], string3698);
  var call3701 = callmethod(call3700,"prefix!", [0]);
  if (Grace_isTrue(call3701)) {
  lineNumber = 1505
  lineNumber = 1504
  lineNumber = 1
  var call3702 = callmethod(Grace_prelude,"_methods", [0]);
  lineNumber = 1505
  var block3703 = Grace_allocObject();
  block3703.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3703.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3703.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3703.methods["match"] = function(argcv, o) {
    var args = Array.prototype.slice.call(arguments, 1);
    var r = this.real.apply(this.receiver, args);
    return new GraceSuccessfulMatch(r, []);
  }
  block3703.receiver = this;
  block3703.className = 'block<typechecker:1505>';
  block3703.real = function(
var_mn
) {
  var string3704 = new GraceString("method");
  var call3705 = callmethod(var_Binding,"new", [1], string3704);
  var call3706 = callmethod(var_preludeObj,"put", [2], var_mn, call3705);
  return call3706;
};
  var call3707 = callmethod(Grace_prelude,"for()do", [1, 1], call3702, block3703);
  var if3697 = call3707;
}
  return if3697;
};
  lineNumber = 1509
  var block3708 = Grace_allocObject();
  block3708.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3708.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3708.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3708.receiver = this;
  block3708.className = 'block<typechecker:1509>';
  block3708.real = function(
) {
  return undefined;
};
  lineNumber = 1502
  var call3709 = callmethod(var_util,"runOnNew()else", [1, 1], block3696, block3708);
  lineNumber = 1510
  var var_btmp;
  var string3710 = new GraceString("print");
  var string3711 = new GraceString("method");
  var call3712 = callmethod(var_Binding,"new", [1], string3711);
  lineNumber = 1511
  var call3713 = callmethod(this,"bindName", [2], string3710, call3712);
  var string3714 = new GraceString("length");
  var string3715 = new GraceString("method");
  var call3716 = callmethod(var_Binding,"new", [1], string3715);
  lineNumber = 1512
  var call3717 = callmethod(this,"bindName", [2], string3714, call3716);
  var string3718 = new GraceString("escapestring");
  var string3719 = new GraceString("method");
  var call3720 = callmethod(var_Binding,"new", [1], string3719);
  lineNumber = 1513
  var call3721 = callmethod(this,"bindName", [2], string3718, call3720);
  lineNumber = 1514
  lineNumber = 1
  lineNumber = 1513
  var call3722 = callmethod(var_selftypes,"last", [0]);
  var var_modtype = call3722;
  lineNumber = 1515
  lineNumber = 1514
  var string3723 = new GraceString("print");
  lineNumber = 1515
  var string3725 = new GraceString("print");
  var array3726 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 1515
  var call3727 = callmethod(var_ast,"signaturePart", [0]);
  var call3728 = callmethod(call3727,"new", [2], string3725, array3726);
  var array3724 = new GraceList([
call3728,
]);

  lineNumber = 1
  lineNumber = 1514
  var call3729 = callmethod(var_ast,"methodTypeNode", [0]);
  var call3730 = callmethod(call3729,"new", [3], string3723, array3724, var_NoneType);
  lineNumber = 1516
  lineNumber = 1
  lineNumber = 1514
  var call3731 = callmethod(var_modtype,"methods", [0]);
  var call3732 = callmethod(call3731,"push", [1], call3730);
  lineNumber = 1517
  lineNumber = 1516
  var string3733 = new GraceString("length");
  lineNumber = 1517
  var string3735 = new GraceString("length");
  var array3736 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 1517
  var call3737 = callmethod(var_ast,"signaturePart", [0]);
  var call3738 = callmethod(call3737,"new", [2], string3735, array3736);
  var array3734 = new GraceList([
call3738,
]);

  lineNumber = 1
  lineNumber = 1516
  var call3739 = callmethod(var_ast,"methodTypeNode", [0]);
  var call3740 = callmethod(call3739,"new", [3], string3733, array3734, var_NumberType);
  lineNumber = 1518
  lineNumber = 1
  lineNumber = 1516
  var call3741 = callmethod(var_modtype,"methods", [0]);
  var call3742 = callmethod(call3741,"push", [1], call3740);
  lineNumber = 1519
  lineNumber = 1518
  var string3743 = new GraceString("escapestring");
  lineNumber = 1519
  var string3745 = new GraceString("escapestring");
  var array3746 = new GraceList([
var_StringOther,
]);

  lineNumber = 1
  lineNumber = 1519
  var call3747 = callmethod(var_ast,"signaturePart", [0]);
  var call3748 = callmethod(call3747,"new", [2], string3745, array3746);
  var array3744 = new GraceList([
call3748,
]);

  lineNumber = 1
  lineNumber = 1518
  var call3749 = callmethod(var_ast,"methodTypeNode", [0]);
  var call3750 = callmethod(call3749,"new", [3], string3743, array3744, var_StringType);
  lineNumber = 1520
  lineNumber = 1
  lineNumber = 1518
  var call3751 = callmethod(var_modtype,"methods", [0]);
  var call3752 = callmethod(call3751,"push", [1], call3750);
  lineNumber = 1521
  lineNumber = 1520
  var string3753 = new GraceString("raise");
  lineNumber = 1521
  var string3755 = new GraceString("raise");
  var array3756 = new GraceList([
var_TopOther,
]);

  lineNumber = 1
  lineNumber = 1521
  var call3757 = callmethod(var_ast,"signaturePart", [0]);
  var call3758 = callmethod(call3757,"new", [2], string3755, array3756);
  var array3754 = new GraceList([
call3758,
]);

  lineNumber = 1
  lineNumber = 1520
  var call3759 = callmethod(var_ast,"methodTypeNode", [0]);
  var call3760 = callmethod(call3759,"new", [3], string3753, array3754, var_NoneType);
  lineNumber = 1522
  lineNumber = 1
  lineNumber = 1520
  var call3761 = callmethod(var_modtype,"methods", [0]);
  var call3762 = callmethod(call3761,"push", [1], call3760);
  lineNumber = 1522
  var string3763 = new GraceString("HashMap");
  var string3764 = new GraceString("def");
  var call3765 = callmethod(var_Binding,"new", [1], string3764);
  lineNumber = 1523
  var call3766 = callmethod(this,"bindName", [2], string3763, call3765);
  var string3767 = new GraceString("MatchFailed");
  var string3768 = new GraceString("def");
  var call3769 = callmethod(var_Binding,"new", [1], string3768);
  lineNumber = 1524
  var call3770 = callmethod(this,"bindName", [2], string3767, call3769);
  var string3771 = new GraceString("void");
  var string3772 = new GraceString("def");
  var call3773 = callmethod(var_Binding,"new", [1], string3772);
  lineNumber = 1525
  var call3774 = callmethod(this,"bindName", [2], string3771, call3773);
  var string3775 = new GraceString("def");
  var call3776 = callmethod(var_Binding,"new", [1], string3775);
  var_btmp = call3776;
  lineNumber = 1527
  lineNumber = 1
  lineNumber = 1526
  var call3777 = callmethod(var_btmp,"dtype:=", [1], var_NothingType);
  lineNumber = 1527
  var string3778 = new GraceString("nothing");
  lineNumber = 1528
  var call3779 = callmethod(this,"bindName", [2], string3778, var_btmp);
  var string3780 = new GraceString("true");
  var string3781 = new GraceString("def");
  var call3782 = callmethod(var_Binding,"new", [1], string3781);
  lineNumber = 1529
  var call3783 = callmethod(this,"bindName", [2], string3780, call3782);
  var string3784 = new GraceString("false");
  var string3785 = new GraceString("def");
  var call3786 = callmethod(var_Binding,"new", [1], string3785);
  lineNumber = 1530
  var call3787 = callmethod(this,"bindName", [2], string3784, call3786);
  var string3788 = new GraceString("...");
  var string3789 = new GraceString("def");
  var call3790 = callmethod(var_Binding,"new", [1], string3789);
  lineNumber = 1531
  var call3791 = callmethod(this,"bindName", [2], string3788, call3790);
  var string3792 = new GraceString("self");
  var string3793 = new GraceString("def");
  var call3794 = callmethod(var_Binding,"new", [1], string3793);
  lineNumber = 1532
  var call3795 = callmethod(this,"bindName", [2], string3792, call3794);
  var string3796 = new GraceString("super");
  var string3797 = new GraceString("def");
  var call3798 = callmethod(var_Binding,"new", [1], string3797);
  lineNumber = 1533
  var call3799 = callmethod(this,"bindName", [2], string3796, call3798);
  var string3800 = new GraceString("raise");
  var string3801 = new GraceString("method");
  var call3802 = callmethod(var_Binding,"new", [1], string3801);
  lineNumber = 1534
  var call3803 = callmethod(this,"bindName", [2], string3800, call3802);
  var string3804 = new GraceString("outer");
  var string3805 = new GraceString("method");
  var call3806 = callmethod(var_Binding,"new", [1], string3805);
  lineNumber = 1535
  var call3807 = callmethod(this,"bindName", [2], string3804, call3806);
  var string3808 = new GraceString("prelude");
  var string3809 = new GraceString("def");
  var call3810 = callmethod(var_Binding,"new", [1], string3809);
  lineNumber = 1536
  var call3811 = callmethod(this,"bindName", [2], string3808, call3810);
  var string3812 = new GraceString("_prelude");
  var string3813 = new GraceString("def");
  var call3814 = callmethod(var_Binding,"new", [1], string3813);
  lineNumber = 1537
  var call3815 = callmethod(this,"bindName", [2], string3812, call3814);
  var string3816 = new GraceString("type");
  var call3817 = callmethod(var_Binding,"new", [1], string3816);
  var_btmp = call3817;
  lineNumber = 1539
  lineNumber = 1
  lineNumber = 1538
  var call3818 = callmethod(var_btmp,"value:=", [1], var_DynamicType);
  lineNumber = 1539
  var string3819 = new GraceString("Dynamic");
  lineNumber = 1540
  var call3820 = callmethod(this,"bindName", [2], string3819, var_btmp);
  var string3821 = new GraceString("type");
  var call3822 = callmethod(var_Binding,"new", [1], string3821);
  var_btmp = call3822;
  lineNumber = 1542
  lineNumber = 1
  lineNumber = 1541
  var call3823 = callmethod(var_btmp,"value:=", [1], var_NumberType);
  lineNumber = 1542
  var string3824 = new GraceString("Number");
  lineNumber = 1543
  var call3825 = callmethod(this,"bindName", [2], string3824, var_btmp);
  var string3826 = new GraceString("type");
  var call3827 = callmethod(var_Binding,"new", [1], string3826);
  var_btmp = call3827;
  lineNumber = 1545
  lineNumber = 1
  lineNumber = 1544
  var call3828 = callmethod(var_btmp,"value:=", [1], var_StringType);
  lineNumber = 1545
  var string3829 = new GraceString("String");
  lineNumber = 1546
  var call3830 = callmethod(this,"bindName", [2], string3829, var_btmp);
  var string3831 = new GraceString("type");
  var call3832 = callmethod(var_Binding,"new", [1], string3831);
  var_btmp = call3832;
  lineNumber = 1548
  lineNumber = 1
  lineNumber = 1547
  var call3833 = callmethod(var_btmp,"value:=", [1], var_BooleanType);
  lineNumber = 1548
  var string3834 = new GraceString("Boolean");
  lineNumber = 1549
  var call3835 = callmethod(this,"bindName", [2], string3834, var_btmp);
  var string3836 = new GraceString("type");
  var call3837 = callmethod(var_Binding,"new", [1], string3836);
  var_btmp = call3837;
  lineNumber = 1551
  lineNumber = 1
  lineNumber = 1550
  var call3838 = callmethod(var_btmp,"value:=", [1], var_ListType);
  lineNumber = 1551
  var string3839 = new GraceString("List");
  lineNumber = 1552
  var call3840 = callmethod(this,"bindName", [2], string3839, var_btmp);
  var string3841 = new GraceString("type");
  var call3842 = callmethod(var_Binding,"new", [1], string3841);
  var_btmp = call3842;
  lineNumber = 1554
  lineNumber = 1
  lineNumber = 1553
  var call3843 = callmethod(var_btmp,"value:=", [1], var_VoidType);
  lineNumber = 1554
  var string3844 = new GraceString("Void");
  lineNumber = 1555
  var call3845 = callmethod(this,"bindName", [2], string3844, var_btmp);
  var string3846 = new GraceString("type");
  var call3847 = callmethod(var_Binding,"new", [1], string3846);
  var_btmp = call3847;
  lineNumber = 1557
  lineNumber = 1
  lineNumber = 1556
  var call3848 = callmethod(var_btmp,"value:=", [1], var_NothingType);
  lineNumber = 1557
  var string3849 = new GraceString("Nothing");
  lineNumber = 1558
  var call3850 = callmethod(this,"bindName", [2], string3849, var_btmp);
  var string3851 = new GraceString("type");
  var call3852 = callmethod(var_Binding,"new", [1], string3851);
  var_btmp = call3852;
  lineNumber = 1559
  var string3853 = new GraceString("None");
  lineNumber = 1560
  var call3854 = callmethod(this,"bindName", [2], string3853, var_btmp);
  var string3855 = new GraceString("type");
  var call3856 = callmethod(var_Binding,"new", [1], string3855);
  var_btmp = call3856;
  lineNumber = 1562
  lineNumber = 1
  lineNumber = 1561
  var call3857 = callmethod(var_btmp,"value:=", [1], var_BlockType);
  lineNumber = 1562
  var string3858 = new GraceString("Block");
  lineNumber = 1563
  var call3859 = callmethod(this,"bindName", [2], string3858, var_btmp);
  var call3860 = callmethod(var_subtype,"addType", [1], var_DynamicType);
  lineNumber = 1564
  var call3861 = callmethod(var_subtype,"addType", [1], var_NumberType);
  lineNumber = 1565
  var call3862 = callmethod(var_subtype,"addType", [1], var_StringType);
  lineNumber = 1566
  var call3863 = callmethod(var_subtype,"addType", [1], var_BooleanType);
  lineNumber = 1567
  var call3864 = callmethod(var_subtype,"addType", [1], var_ListType);
  lineNumber = 1568
  var call3865 = callmethod(var_subtype,"addType", [1], var_VoidType);
  lineNumber = 1569
  var call3866 = callmethod(var_subtype,"addType", [1], var_NoneType);
  lineNumber = 1570
  var call3867 = callmethod(var_subtype,"addType", [1], var_NothingType);
  lineNumber = 1571
  var call3868 = callmethod(var_subtype,"addType", [1], var_BlockType);
  lineNumber = 1572
  lineNumber = 1573
  var call3869 = callmethod(this,"resolveIdentifiersList", [1], var_values);
  return call3869
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["typecheck"] = func3693;
  return this;
}
