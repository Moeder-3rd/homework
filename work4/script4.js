Function.prototype._call = function (obj){
	obj.fn = this;
	obj.fn();
}

let obj = {
	myName:'object'
}

var myName = 'windows'
function fn(){
	console.log(this.myName);
}
fn();
fn._call(obj);
