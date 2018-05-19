//constructor
function User (name,age) {
	this.name = name;
	this.age = age;
	this.isAdmin = false;
	this.foo = function(){
		console.log(this.name,this.age);
		//return 'console.log(this.name)';
	}
}

var user1 = new User('Hayk',20);
user1.foo2 = function(){}

var user2 = new User('Karen',21);



console.log(user1.name);
console.log(user2.name);
console.log(user1.constructor);