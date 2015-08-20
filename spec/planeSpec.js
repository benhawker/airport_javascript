describe("Plane", function() {

  beforeEach(function() {
    plane = new Plane();
  });

  describe("plane state", function() {
  	it("will be flying on creation", function() {
  		expect(plane.status).toEqual("flying");
  	});


  	it("can land", function() {
  		plane.land();
  		expect(plane.status).toEqual("landed")
  	});



  	it("can take off", function() {
  		plane.land();
  		plane.takeOff();
  		expect(plane.status).toEqual("flying");
  	});

	 });  

 });


