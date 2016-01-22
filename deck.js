getDefaultCards = function(){
	ranks = []; 
	for(var i = 2; i < 11; i++){
		ranks.push(i.toString());
	}
	ranks = ranks.concat("J Q K A".split(" ")); 
	suits = "spades diamonds clubs hearts".split(" "); 

	cards = []; 

	ranks.forEach(function(rank){
		suits.forEach(function(suit){
			var card = Card(rank, suit);
			cards.push(card); 
		});
	});

	return cards; 
};

Deck = function(cards){
	var self = {
		cards: cards || getDefaultCards(), 
	};  

	self.shuffle = function(){
		self.cards.sort(function(){
			return .5 - Math.random(); 
		});
	};

	self.draw = function(n){
		drawn = []; 
		for(var i = 0; i < n; i++){
			drawn.push(self.cards.pop()); 
		}; 

		return drawn; 
	};

	return self; 
};







