Card = function(rank, suit, name, id, x, y, width, height, img){
	var self = Entity('card', id, x, y, 0, 0, width, height, false); 

	self.name =  name || 'poker card'; 
	self.rank =  rank; 
	self.suit = suit, 

	self.draw = function(){
		ctx.save(); 
		ctx.rect(self.x,self.y,50,70); 
		ctx.stroke(); 

		switch(self.suit){
			case 'diamonds': 
				ctx.fillStyle = 'red';
				ctx.fillText(self.rank, self.x+15, self.y+30);
				ctx.fillText('\u2666',self.x+15, self.y+60);
				break; 
			case 'clubs': 
				ctx.fillStyle = 'black';
				ctx.fillText(self.rank, self.x+15, self.y+30);
				ctx.fillText('\u2663', self.x+15, self.y+60);			
				break; 
			case 'hearts':
				ctx.fillStyle = 'red';
				ctx.fillText(self.rank, self.x+15, self.y+30);
				ctx.fillText('\u2665', self.x+15, self.y+60);
				break;
			case 'spades':
				ctx.fillStyle = 'black';
				ctx.fillText(self.rank, self.x+15, self.y+30);
				ctx.fillText('\u2660', self.x+15, self.y+60);
				break; 
			default: 
				break; 
		}

		ctx.restore(); 
	}

	return self; 
}
