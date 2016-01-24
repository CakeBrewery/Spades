Game = function(){
	var self = {
		current_phase: 'draw',	
		p1: Player(), 
		p2: Player(),
		mouseX: 0,
		mouseY: 0,
		entities: [],
		events: [], 
	}

	self.init = function(){
		//Player positions
		self.p1.x = 20; 
		self.p1.y = 10; 
		self.p2.x = 20; 
		self.p2.y = 490;

		//Get decks and shuffle
		self.p1.deck = Deck(); 
		self.p2.deck = Deck(); 
		self.p1.deck.shuffle(); 
		self.p2.deck.shuffle(); 

		//Initialize card slots
		self.p1.slots.push(Slot(0,100,90,50,70)); 
		self.p1.slots.push(Slot(0,180,90,50,70)); 
		self.p1.slots.push(Slot(0,100,180,50,70)); 
		self.p1.slots.push(Slot(0,180,180,50,70)); 

		self.p2.slots.push(Slot(0,100,320,50,70)); 
		self.p2.slots.push(Slot(0,180,320,50,70)); 
		self.p2.slots.push(Slot(0,100,410,50,70)); 
		self.p2.slots.push(Slot(0,180,410,50,70)); 

		self.p1.slots.forEach(function(slot){
			self.entities.push(slot); 
		});

		self.p2.slots.forEach(function(slot){
			self.entities.push(slot); 
		});
	}


	self.setPhase = function(phase){
		switch(phase){
			case 'initial': 
				self.p1.fillHand(5).forEach(function(card){
					self.entities.push(card);
				});

				self.p2.fillHand(5).forEach(function(card){
					self.entities.push(card);
				});
		//		self.entities.concat(self.p1.fillHand(5)); 
		//		self.entities.concat(self.p2.fillHand(5)); 
				break; 
		 	default: 
				break; 
		};
	};

	self.update = function(){
		for(var key in self.entities){
			self.entities[key].update(); 
		}
	}

	self.drawPlayers = function(){
		for(var key in self.p1.slots){
			self.p1.slots[key].update(); 
			self.p2.slots[key].update(); 
		}
	}

	

	return self; 
}


