describe('Rock Paper Scissors', function () {

// // // // // // // GESTURES TEST // // // // // // //

	describe('Gestures', function () {

		it ('Rock', function () {
			rock = new Rock
			expect(rock.type).toEqual('Rock')
		});

		it ('Scissors', function (){
			scissors = new Scissors
			expect(scissors.type).toEqual('Scissors')
		});

		it ('Paper', function () {
			paper = new Paper
			expect(paper.type).toEqual('Paper')
		});

	});

// // // // // // //  RULES TEST // // // // // // //

	describe('Rules', function () {
	
	});


});