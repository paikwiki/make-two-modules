var useExports = require('./modules/useExports');
var useModuleExports = require('./modules/useModuleExports');
var ume = useModuleExports('Say yeh~');

var ueMsg = useExports.getMsg(); // Say ho~
var umeMsg = ume.getMsg(); // Say yeh~

console.log(ueMsg);
console.log(umeMsg);
console.log('It works well');