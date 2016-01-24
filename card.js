/* 
Card class is an instance of Entity. (Entities are basically drawable objects)
Overrides draw() method to print a card using canvas instead of drawing an image
*/

Card = function(rank, suit, name, id, x, y, width, height, img){
	var self = Entity('card', id, x, y, 0, 0, 50, 70, false); 

	self.name =  name || 'poker card'; 
	self.rank =  rank; 
	self.suit = suit, 

	self.draw = function(){
		ctx.save(); 
		ctx.fillStyle="#FFFFFF";
		ctx.beginPath();
		ctx.rect(self.x,self.y,this.width,this.height); 
		ctx.fillRect(self.x,self.y,this.width,this.height); 
		ctx.stroke(); 
		ctx.closePath(); 

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
