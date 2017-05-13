
	
	var questions=[{
		question: "In Which Anime is the character Goku the main Protagonist?",
		choices:["Dragon Ball Z", "Dragon Tales", "Pokemon", "Beserk"],
		answer: 0
	},

	{
		question:"What is Naruto Uzamakis favorite food to eat after a mission?",
		choices:["sushi", "Ramen", "Steak", "Tempura"],
		answer:1
	},
	 {
		question:"In the popular series Bleach, What is the name of the camptain of the 10th Division?", 
		choices:["Zarakai Kenpachi", "Toshiro Hitsugaya", "Sasuke Uchia", "Gon Freecs"],
		answer:1
	},
	 {
		question:"In What Anime do the main characters battle Chimera Ants with a leader named Meruem?",
		choices:["Darker Than Black", "Kill la Kill", "Fairy Tail", "Hunter x Hunter"],
		answer:3
	}];

	var questionNumber = 0;
	var correctAnswer = 0;//index number for question  
	var userChoice= [];//bubble selected
	var finished = false;
	var time = 60; 

	$(document).ready(function() {
		displayQuestion();
		$(this).find(".nextButton").on("click",function () {
			if(!finished) {
				value = $("input[type='radio']:checked").val();

				}
			else {
				if (value== questions[question].answer) {
					correctAnswer++
				}
				questionNumber++
				if(questionNumber<questions.lenght) {
					displayQustionNumber();
				}
				else {
					displayFinalScore();
				}
	function timer() {
	}
	function reset() {
		questionNumber=0;
		Answer=0;
		$("#remaining").html("01:00");
	}

	function displayQuestionNumber() {
		var question = questions[questionNumber].question;
		
		var choices = $(document).find(".Container >.choices");
		
		var questionClass = $(document).find(".Container >.question");
		
		var numChoices = questions[questionNumber].choices.length;

	}		
	$(questionClass).text(question);
	$(choices).find("li").remove();
		
		var choice;
			for (var i=0; i< numChoices.length; i++) {
				choice = questions[questionNumber].choices[i];
				  $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choices);
			}
		}







