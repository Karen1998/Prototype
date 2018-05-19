//constructor
function User (name,age) {
	this.name = name;
	this.age = age;
	this.isAdmin = false;
	this.say = function (w){console.log(w + this.name);}
}

var u1 = new User('Hayk',20);
var u2 = new User('Karen',21);
u1.say('Hello ');
u2.say('Hello ');

User.prototype.x = 5;