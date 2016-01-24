Game = function(){
	var self = {
		current_phase: 'draw',	
		p1: Player(), 
		p2: Player(),
		mouse: {
			x: 0,
			y: 0, 
			width: 0,
			height: 0,
		},
		entities: [],
		events: [], 
	}

	self.init = function(){
		//Player positions
		self.p1.x = 140; 
		self.p1.y = 40; 
		self.p2.x = 140; 
		self.p2.y = 540;

		//Get decks and shuffle
		self.p1.deck = Deck(); 
		self.p2.deck = Deck(); 
		self.p1.deck.shuffle(); 
		self.p2.deck.shuffle(); 

		//Initialize card slots
		self.p1.slots.push(Slot(0,160,90,50,70)); 
		self.p1.slots.push(Slot(0,240,90,50,70)); 
		self.p1.slots.push(Slot(0,160,180,50,70)); 
		self.p1.slots.push(Slot(0,240,180,50,70)); 

		self.p2.slots.push(Slot(0,160,320,50,70)); 
		self.p2.slots.push(Slot(0,240,320,50,70)); 
		self.p2.slots.push(Slot(0,160,410,50,70)); 
		self.p2.slots.push(Slot(0,240,410,50,70)); 

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

			case 'p1_turn':
				ctx.canvas.addEventListener('click', function(event){
					game.entities.forEach(function(entity){
						if(entity.testCollision(game.mouse)){
							console.log(entity); 
						} 		
					}); 
				});
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


