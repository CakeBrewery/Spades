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
			self.hand.push(card); 
		});

		return self.updateHand(); 
	}

	self.fillHand = function(n){
		var current = self.hand.length; 
		var newCards = self.deck.draw(n-current)

		newCards.forEach(function(card){
			self.hand.push(card); 
		});

		return self.updateHand();
	}

	self.updateHand = function(){
		var x = self.x;
		var y = self.y;
		self.hand.forEach(function(card){
			card.x = x; 	
			card.y = y; 
			x += 70; 
		});

		return self.hand; 
	}

	return self; 
};