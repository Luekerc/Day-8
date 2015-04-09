$(document).ready(function() {
	// Create a whole number between 1 and 100 inclusive
	var createdNumber = Math.ceil(Math.random()*100);
	console.log(createdNumber);
	// begin tracking the number of turns and score
	var score = 0;
	var turns = 0;
	// When the #guess-button is clicked the number in 
	// the "input" box is compared to createdNumber and 
	//provides appropriate feedback to the player to try 
	//again.
	$('#guess-button').click(function(event){
		//grab the value the user puts in the input box
		var value = $("#input-box").val();
		//increase the number of turns by 1 with every click
		turns++;
		//show the current number of turns taken
		$('#turn-box').html(turns);
		//validate that the input is not empty or a 
		//letter/special-character.
		//Note: I stole the isNan idea from Travis and Stackoverflow
		if (value === "" || isNaN(value)){
			$('.win-lose-box').html("You must enter a number.");
		}
		//compare the input value to the randomly created number
		else if(value > createdNumber){
			$('.win-lose-box').html("You're number is too high. Guess again.");
		}
		else if(value < createdNumber){
			$('.win-lose-box').html("You're number is too low. Guess again.");
		}
		else {
			//clear out unwanted html like 
			//the turns taken and messages
			$('.win-lose-box').html("");
			$('#turn-box').html("");
			$('h2').html("");
			//increase the score from 0 to 1
			score++;
			//Display a winning message along with the statistics
			//Note: I stole the Math.round idea from Stackoverflow
			$('.win-box').html("Congratulations!" +"<br>"+ 
				"You won at a rate of " + Math.round(score/turns*100) 
				+ "%!");
		}
	})	
});









  














  



