describe("Airport", function() {

	var airport
	var plane

  beforeEach(function() {
   airport = new Airport();
   plane = new Plane();
  });


  describe("landing and taking off planes", function() {
  	it("accepts a plane", function() {
	  	airport.instructLanding(plane);
	  	expect(airport.planes).toContain(plane);
  	});

  	it("releases a plane", function() {
  		airport.instructLanding(plane);
  		airport.instructTakeOff(plane);
  		expect(airport.planes).not.toContain(plane);
  	});
  });

  describe("airport capacity", function() {
  	it("throws an error if plane is instructed to land and capacity is reached", function() {
  		var times = 3;
			for(var i=0; i < times; i++){
    			airport.instructLanding(plane);
			}
			expect(airport.planes).toContain(plane, plane, plane)
  		expect( function(){airport.instructLanding(plane); } ).toThrow(new Error("The max capacity is 3. Please find another airport!"));
  	});
  });

  describe("weather state and plane behaviour due to weather", function () {
  	it("has a default state of sunny", function() {
  		expect(airport.weatherState).toEqual("Sunny");
  	});

  	it("will not instruct planes to take off if weather is stormy", function() {
  		airport.changeWeatherState();
  		expect(airport.weatherState).toEqual("Stormy");
  		expect( function(){airport.instructTakeOff(plane); } ).toThrow(new Error("Stormy weather alert. Take off not permitted!"));
  	});
  });



});




//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });





//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
