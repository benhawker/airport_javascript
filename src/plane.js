var Plane = function() {
	this.status = "flying";
};

Plane.prototype.land = function() {
	return this.status = "landed";
};

Plane.prototype.takeOff = function() {
	return this.status = "flying";
};