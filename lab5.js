function User (name,age) {
	this.name = name;
	this.age = age;
}

User.prototype.foo = function(){
	return new User(this.name,this.age);
}

var user1 = new User('Hayk',21);