 // /* eslint-disable */
function test () {
	   var ret = {};
	for (var i in arguments) {
		var m = arguments[i];
		for (var j in m) ret[j] = m[j];
		{}
	}
	  return ret;  
}
console.log("111");;
test();  
