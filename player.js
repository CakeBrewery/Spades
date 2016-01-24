Player = function(){
	var self = {
		hand: [], 
		deck: [],
		score: 0,
		life: 100,
		slots: [],
		x: 0,
		y: 0,
	};

	self.drawCards = function(n){
		var newCards = self.deck.draw(n)

		newCards.forEach(function(card){
			self.hand[card.id] = card; 
		});

		self.updateHand(); 

		return newCards; 
	}

	self.fillHand = function(n){
		var current = self.hand.length; 
		var newCards = self.deck.draw(n-current)

		newCards.forEach(function(card){
			self.hand[card.id] = card; 
		});

		self.updateHand(); 

		return newCards;
	}

	self.updateHand = function(){
		var x = self.x;
		var y = self.y;
		for(var key in self.hand){
			self.hand[key].x = x; 
			self.hand[key].y = y; 
			x += 70;
		}

		return self.hand; 
	}

	return self; 
};