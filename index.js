setTimeout(whoWins, 30000);
setInterval(tickDown, 999); // account for the difference in called functions.

var stillRunning = true;


var score = 0;
var seed = 1;
var time = 30;

function tickDown()
{
  if (stillRunning)
  {
  time--;
  document.getElementById('time').innerHTML = time;
  }
}




function rockClicked()
{

if (stillRunning)
{
  var numberPicked = Math.floor((Math.random() * 3));


  if (numberPicked == 0)
  {
    document.getElementById('title').innerHTML = "Opponent picked Rock. It's a tie!";
  }
  else if (numberPicked == 1)
  {
    document.getElementById('title').innerHTML = "Opponent picked Paper, you lose!";
    decrementScore();
  }
  else {
    document.getElementById('title').innerHTML = "Opponent picked Scissors, you win!";
    updateScore();

  }
}

}

function paperClicked()
{


if (stillRunning)
{
var numberPicked = Math.floor((Math.random() * 3));

  if (numberPicked == 0)
  {
    document.getElementById('title').innerHTML = "Opponent picked Rock, you win!";
    updateScore();
  }
  else if (numberPicked == 1)
  {
    document.getElementById('title').innerHTML = "Opponent picked Paper. It's a tie!";
  }
 else {
  document.getElementById('title').innerHTML = "Opponent picked Scissors, you lose!";
  decrementScore();
  }
}

}

function scissorsClicked()
{

if (stillRunning)
{


  var numberPicked = Math.floor((Math.random() * 3));



  if (numberPicked == 0)
  {
    document.getElementById('title').innerHTML = "Opponent picked Rock, you lose!";
    decrementScore();
  }
  else if (numberPicked == 1)
  {
    document.getElementById('title').innerHTML = "Opponent picked Paper, you win!";
    updateScore();
  }
  else {
    document.getElementById('title').innerHTML = "Opponent picked Scissors. It's a tie!";
  }
}
}

function updateScore()
{
  score++;
  document.getElementById('score').innerHTML = score;
}

function decrementScore()
{
  score--;
  document.getElementById('score').innerHTML = score;
}


function whoWins()
{
  stillRunning = false;

  if (score > 0)
  {
    document.getElementById('title').innerHTML = "You win!";
  }
  else if (score == 0) {
    document.getElementById('title').innerHTML = "It's a tie!";
  }
  else {
    document.getElementById('title').innerHTML = "You lose!";
  }
}
