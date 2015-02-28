// var time;
// var counter=0;
// function Timer(){
// 	document.getElementById("txt").value=counter;
// 	counter=counter+1;
// 	time=setTimeout(function(){ Timer() },1000);
// }

function StartGame(){
    var beggin= document.getElementById("starbtn");
    beggin.style.display = 'none';
    var game= document.getElementById("ingame");
    game.style.display = 'block';
    //Timer();
}

/*
<script>
var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    document.getElementById("timerPlacer").value = c;
    c = c + 1;
    t = setTimeout(function(){ timedCount() }, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}
</script>
*/
/*
<script>
  var	TIME_TO_GUESS	= 10;	//	seconds

  var	game	= new BookGame();
  var	book	= null;

  //	Start the game by selecting the first Book
  nextBook();

  /////////////////////////////////////////////////////////////////////////

  function	nextBook()
  {
    //	Hide all controls
    jsTimer.style.display		= "none";	//	Hide the counter
    jsTimerEnd.style.display	= "none";
    jsTryAgain.style.display	= "none";
    jsSuccess.style.display		= "none";
    jsFailed.style.display		= "none";	//	Hide the message

    //	Select a book and show it
    book	= game.selectBook();
    jsBrokenTitle.innerHTML	= book.getCryptedTitle();
    jsAuthor.innerHTML		= book.Author();

    startCounter();

    jsTitleEntry.focus();
  }
  /////////////////////////////////////////////////////////////////////////

  var	titleGuess	= 3;
  function	checkTitle()
  {
    jsSuccess.style.display		= "none";
    jsTryAgain.style.display	= "none";

    if( book.checkTitle( jsTitleEntry.value ) )
    {
      jsSuccess.style.display	= "block";
    }
    else
    {
      jsTryAgain.style.display	= "block";
      titleGuess--;
      if( titleGuess <= 0 )
      {
        jsFailed.style.display	= "block";	//	Show the message
        jsTimer.style.display	= "none";	//	Hide the counter
      }
    }
  }
  /////////////////////////////////////////////////////////////////////////

  var	seconds		= TIME_TO_GUESS;
  var	timerVar	= window.setInterval( secondElapsed, 1000 );
  function	startCounter()
  {
    seconds		= TIME_TO_GUESS;
    jsTimer.innerHTML	= seconds;

    jsTimer.style.display		= "block";	//	Show the counter
    jsTimerEnd.style.display	= "none";	//	Hide the "Time end" message
  }
  /////////////////////////////////////////////////////////////////////////

  function	secondElapsed()
  {
    if( seconds > 0 )
    {
      seconds--;
      jsTimer.innerHTML	= seconds;
    }

    if( seconds <= 0 )
    {
      jsTimer.style.display		= "none";
      jsTimerEnd.style.display	= "block";
    }
  }
  ///////////////////////////////////////////////////////////////////////
</script>
*/
