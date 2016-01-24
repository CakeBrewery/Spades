Entity = function(type, id, x, y, spdX, spdY, width, height, img){
	var self = {
		type: type, 
		id: id, 
		x: x, 
		y: y, 
		spdX: spdX, 
		spdY: spdY, 
		width: width,
		height: height, 
		img: img || null, 
	}

	self.update = function(){
		self.updatePosition(); 
		self.draw(); 
	}

	self.draw = function(){
		ctx.save(); 
		var x = self.x; 
		var y = self.y;  

		x -= self.width/2; 
		x -= self.height/2; 

		ctx.drawImage(self.img, 0, 0, self.img.width, self.img.height, x, y, self.width, self.height); 
		ctx.restore(); 
	}

	self.getDistance = function(entity2){
		var vx = self.x - entity2.x; 
		var vy = self.y - entity2.y; 

		return Math.sqrt(vx*vx*vy*vy); 
	}

	self.testCollision = function(entity2){	//return if colliding (true/false)
		var rect1 = {
			x:self.x-self.width/2,
			y:self.y-self.height/2,
			width:self.width,
			height:self.height,
		}
		var rect2 = {
			x:entity2.x-entity2.width/2,
			y:entity2.y-entity2.height/2,
			width:entity2.width,
			height:entity2.height,
		}
		return testCollisionRect(rect1,rect2);
	}

	self.updatePosition = function(){
		self.x += self.spdX; 
		self.y += self.spdY; 
	}

	return self; 
}