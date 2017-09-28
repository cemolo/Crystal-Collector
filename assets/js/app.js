$(document).ready(function() {


compNumber = Math.floor((Math.random() * 100) + 15);

var gold = Math.floor(Math.random() * 8) + 1; 
var green = Math.floor(Math.random() * 8) + 1; 
var ruby = Math.floor(Math.random() * 8) + 1; 
var clear  = Math.floor(Math.random() * 8) + 1; 

var myNumber = 0;

var win = 0;
var losses = 0;

var name = ['', '', '', ''];

gameOver = false;

//Functions

function scoreTotal(sumTotal){
	myNumber = myNumber + sumTotal;
	console.log("", myNumber);
}

	function scoreTotal
(){

	if (myNumber === compNumber){
		wins++;
		$(".winCount").html("Wins: " +wins);
		$('#gameResult').text("You Win!")
		gameOver = true;
	}

	else if (myNumber > compNumber){
		losses++;
		$(".lossCounter").html("Losses: " +losses);
		$('.gameStatus').text("You LOST! Try Again?")
		gameOver = true;

	}

	
}
//name var for each crystal

  var goldCrystal = $("crystalOne");
  	 goldCrystal.each("data-let", gold);
  		console.log("crystalOne Value", gold);

  var greenCrystal = $("crystalTwo");
 	 greenCrystal.each("data-let", green);
  		console.log("crystalTwo Value", green);

  var rubyCrystal = $("crystalThree");
 	 rubyCrystal.attr("data-let", ruby);
 		 console.log("crystalThree Value", ruby);

  var clearCrystal = $("crystalFour");
  	 clearCrystal.each("data-let", clear);
  		console.log("crystalFour Value", clear);


  	//click functions for each crystal

 $(".crystalOne").on("click", function(){
  	scoreTotal
  (gold);
    console.log("crystalOne On-Click", gold);
    $(".myNumber").html(myNumber);
    scoreTotal
   ();
  });

 $(".crystalTwo").on("click", function(){
  	scoreTotal
  (green);
    console.log("crystalTwo On-Click", green);
    $(".myNumber").html(myNumber);
    scoreTotal
   ();
  });

 $(".crystalThree").on("click", function(){
  	scoreTotal
  (ruby);
    console.log("crystalThree On-Click", ruby);
    $(".myNumber").html(myNumber);
    scoreTotal
   ();
  });

 $(".crystalFour").on("click", function(){
  	scoreTotal
  (clear);
    console.log("crystalFour On-Click", clear);
    $(".myNumber").html(myNumber);
    scoreTotal
   ();
  });


function targetNumber(){

    $(".targetNumber").html(compNumber);
  console.log("Random Number: ", compNumber);
  } 

  targetNumber();

  function restartGame(){

    if(gameOver === true){

      compNumber = Math.floor((Math.random() * 102) + 19);
      gold = Math.floor((Math.random() * 12) + 1);
      green = Math.floor((Math.random() * 12) + 1);
      ruby = Math.floor((Math.random() * 12) + 1); 
      clear = Math.floor((Math.random() * 12) + 1);
      myNumber = 0; 
      gameOver = false;


      targetNumber();
      $(".myNumber").html(myNumber);

    }

  }








}); //DOCUMENT READY END