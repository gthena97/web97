var userChoice = prompt("Do you choose rock, paper or scissors?");
console.log("user: " + userChoice);
var computerChoice = Math.random();
if (computerChoice >= 0 && computerChoice < 0.33) {
	computerChoice = "rock";
} else if(computerChoice >= 0.33 && computerChoice < 0.66) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);



var compare = function (Choice1,Choice2)

{
if (Choice1 === Choice2)
{
return "The result is a tie!";
console.log ("The result is a tie!");
}
else if(Choice1 === "rock") {

    if(Choice2 === "scissors") {
        return "rock wins";
		console.log ("rock wins");
    }
    else {
        return "paper wins";
		console.log ("paper wins");
    }
}
else if(Choice1 === "paper") {

    if(Choice2 === "rock") {
        return "paper wins";
		console.log ("paper wins");
    }
    else {
        return "scissors wins";
		console.log ("scissors wins");
    }
   
};
};
compare(userChoice, computerChoice);
