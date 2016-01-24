Slot = function(id, x, y, width, height){
	var self = Entity('Slot', id, x, y, 0, 0, width, height); 

	self.x =  x;
	self.y = y; 
	self.width = width; 
	self.height = height;
	self.card = null;

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
		ctx.rect(self.x,self.y,50,70); 
		ctx.stroke();
		
		ctx.restore(); 
	}

	return self; 
}