Slot = function(id, x, y, width, height, owner){
	var self = Entity('slot', id, x, y, 0, 0, width, height); 

	self.x =  x;
	self.y = y; 
	self.width = 50; 
	self.height = 70;
	self.card = null;
	self.owner = owner; 

	self.setCard = function(card){
		card.x = self.x; 
		card.y = self.y;
		card.width = self.width; 
		card.height = self.height; 
		self.card = card; 
	}; 

	self.draw = function(){
		ctx.save(); 

		ctx.beginPath();
		ctx.rect(self.x-self.width/2,self.y-self.height/2,self.width,self.height); 
		ctx.stroke();

		ctx.restore(); 
	}

	return self; 
}