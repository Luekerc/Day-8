$(document).ready(function() {

var numBer = Math.ceil(Math.random() * 100);
console.log(numBer);

function generateNum() {
	var randomNum = Math.ceil(Math.random() * 100);
	return randomNum;
}

function numberGame(value, randomNum) {
	
	value = $('input').val();
	var win = false;
	var score = 0;
	var turns = 0;

		if (isNaN(value)) {
			throw "You did not enter a number";
		}	

		if (value == numBer) {
			$('.win-lose-box').html('YOU WIN!');
			score++;
			$('#score-box').html(parseInt($('#score-box').html(), 10)+1);
			turns++;
			$('#turn-box').html(parseInt($('#turn-box').html(), 10)+1)
		}

		else if (value > numBer) {
			$('.win-lose-box').html('Too high, guess again'); 
			$('input').val('');
			turns++;
			$('#turn-box').html(parseInt($('#turn-box').html(), 10)+1)
		}

		else {
			$('.win-lose-box').html('Too low, guess again');
			$('input').val('');
			turns++;
			$('#turn-box').html(parseInt($('#turn-box').html(), 10)+1)
		}

	return score;
	return turns;
}

	$('#start-button').click(function(event) {
		var value = $('input').val();
		numberGame(value, numBer);
	});

	$('#play-again').click(function(event) {

		$('input').val('');
		numBer = generateNum();
		console.log(numBer);
	});	
	
});









  














  



