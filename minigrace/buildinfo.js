function gracecode_buildinfo() {
  lineNumber = 1
var func0 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var string1 = new GraceString("8aa358c9fc2001d6b7035654ea18836771604f89");
  return string1
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["gitrevision"] = func0;
  lineNumber = 2
var func2 = function(argcv) {
  var curarg = 1;
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var string3 = new GraceString("1055");
  return string3
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  this.methods["gitgeneration"] = func2;
  return this;
}
