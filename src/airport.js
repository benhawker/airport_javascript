var Airport = function() {
	this.planes = []
	this.capacity = 3;
	this.weatherState = "Sunny";
};

Airport.prototype.instructLanding = function(plane) {
	if (this.planes.length === this.capacity) {
		throw new Error("The max capacity is 3. Please find another airport!"); 
	}
	else {
	this.planes.push(plane);
	}
};


Airport.prototype.instructTakeOff = function(plane) {
	if (this.weatherState === "Stormy") {
		throw new Error("Stormy weather alert. Take off not permitted!")
	}
	this.planes.splice(plane);
};


Airport.prototype.changeWeatherState = function() {
	if (this.weatherState === "Sunny") {
		this.weatherState = "Stormy";
	}
	else {
		this.weatherState = "Sunny";
	}
};














