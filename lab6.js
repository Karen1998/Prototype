function Book (title,pubYear,price) {
	this.title = title;
	this.pubYear = pubYear;
	this.price = price;
}

Book.prototype.show = function(){
	console.log(this.title,this.price);
}

var user1 = new Book('Samvel',1960,'16.000 dramm');
user1.show();