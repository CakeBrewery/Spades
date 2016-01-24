Game = function(){
	var self = {
		current_phase: 'draw',	
		p1: Player(), 
		p2: Player(),
		mouse: {
			x: 0,
			y: 0, 
			width: 1,
			height: 1,
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
		self.p1.slots.push(Slot(genObjectId(),200,130,50,70,'p1')); 
		self.p1.slots.push(Slot(genObjectId(),280,130,50,70,'p1')); 
		self.p1.slots.push(Slot(genObjectId(),200,220,50,70,'p1')); 
		self.p1.slots.push(Slot(genObjectId(),280,220,50,70,'p1')); 

		self.p2.slots.push(Slot(genObjectId(),200,360,50,70,'p2')); 
		self.p2.slots.push(Slot(genObjectId(),280,360,50,70,'p2')); 
		self.p2.slots.push(Slot(genObjectId(),200,450,50,70,'p2')); 
		self.p2.slots.push(Slot(genObjectId(),280,450,50,70,'p2')); 

		self.p1.active_cards = []; 
		self.p2.active_cards = []; 

		self.p1.slots.forEach(function(slot){
			self.entities[slot.id] = slot; 
		});

		self.p2.slots.forEach(function(slot){
			self.entities[slot.id] = slot; 
		});
	}


	self.setPhase = function(phase){
		switch(phase){
			case 'initial': 
				self.p1.fillHand(5).forEach(function(card){
					card.owner = 'p1_hand';
					self.entities[card.id] = card;
				});

				self.p2.fillHand(5).forEach(function(card){
					card.owner = 'p2_hand'; 
					self.entities[card.id] = card;
				});

				break; 

			case 'p1_turn':
				ctx.canvas.addEventListener('click', function(event){
					for(var key in self.entities){
						if(self.entities[key].testCollision(game.mouse) && self.entities[key].owner === 'p1_hand' && self.entities[key].type === 'card'){
							if(self.p1.active_cards.length > 0){
								temp = self.p1.active_cards.pop(); 
								self.p1.hand[temp.id].active = false; 
							}

							self.entities[key].active = true; 
							self.p1.active_cards.push(self.entities[key]);

							console.log('clicked a card'); 
						}

						if(self.entities[key].testCollision(game.mouse) && self.entities[key].owner === 'p1' && self.entities[key].type === 'slot'){
							console.log('clicked a slot'); 
							if(self.p1.active_cards.length === 1){
								active_card = self.p1.active_cards.pop(); 
								delete self.p1.hand[active_card.id];
								active_card.active = false; 
								active_card.owner = 'p1_slot'; 
								self.entities[key].setCard(active_card); 
							}
						}
					}
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


	return self; 
}


