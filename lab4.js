// Object.prototype.y = 5;
// number.prototype.z = 10;

function User (name,age) {
	this.name = name;
	this.age = age;
	this.foo = function(){console.log('Foo');}
}

//User.prototype.foo = 5;
//delete u1.foo 
User.prototype.x = 5;
var u1 = new User('Hayk',20);

for(var item in u1){
	// console.log(item +' - '+ u1[item]);
	if(u1.hasOwnProperty(item)){
		console.log(item,u1[item]);
	}
}