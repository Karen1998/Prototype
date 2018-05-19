var o1 = {};
var o2 = new Object();
var arr1 = [];
var arr2 = new Array();

if(o1 == o2){
	console.log(true);
}else if(o1 != o2){
	console.log(false);
}

if(arr1 == arr2){
	console.log(true);
}else if(arr1 != arr2){
	console.log(false);
}
console.log(typeof o1);
console.log(typeof o2);
console.log(typeof arr1);
console.log(typeof arr2);