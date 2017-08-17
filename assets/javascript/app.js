 $(document).ready(function() {

// Global Varibles
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var startGame = false;
var endGame = false;
var currentQuestion = 0;
var audio = new Audio("assets/audio/gamesong.mp3");


var gameQuestions = [
    {
        question: "What is the name of Jon Snow's Direwolf?",
        answers: ['Grey Wind','Graham','Ghost','Gargamel'],
        correctAnswer: 2
        },
  
    {
        question: "Name the other Stark child: Robb, Brandon, Sansa, Arya. Jon Snow and…?",
        answers: ['Rickon','Dickon','Ramsay','Eddard'],
        correctAnswer: 0
    },
    {
        question: "What does Daenerys mean when she says 'Shekh ma shieraki anni' to Khal Drogo?",
        answers: ['"Moon of my life"','"Get in me wheelbarrow, love"','"Sound did silence me"','"My sun and stars"'],
        correctAnswer: 3
    },
    {
        question: "What piece of fencing advice did Jon Snow give to Arya Stark? Stick them with the…",
        answers: ['"…Prickly end"','"…Sharp end"','"…Futtocks End"','"…Pointy end"'],
        correctAnswer: 0
    },
    {
        question: "Who masterminded the plot to kill King Joffrey?",
        answers: ['Little Mix','Littlefinger','Olenna Tyrell','René Artois'],
        correctAnswer: 1
    }
];

	// Start the game & play music 
	$("#startGame").on("click", run);
        audio.play();


	// Start timer 
	
		var number = 30;
		var intervalId;

		function run(){
	     intervalId = setInterval(decrement, 1000);
	     $("#startGame").hide();
	     displayQuestions();
		}

		 //  The decrement function.
        function decrement() {

         //  Decrease number by one.
         number--;

         //  Show the number in the #show-number tag.
         $(".timer").html("Time remaining: " + "" + number + " Seconds");


         //  Once number hits zero...
         if (number === 0) {
        
         //  ...run the stop function.
         stop();
        }

	};
    	  //  The stop function
        function stop() {
      	clearInterval(intervalId);
    };

         // Get all questions to show with answers choices
		    function displayQuestions(){
		
          for (var i = 0; i < gameQuestions.length; i++) {
          
            $("#question1").append("<p>" + gameQuestions[i].question + "</p>" + "<p>" + gameQuestions[i].answers + "</p>");
            console.log(gameQuestions[i].question);
    }

}


    

});

    







