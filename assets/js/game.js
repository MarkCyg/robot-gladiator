var playerName = window.prompt("What is you robot's name?");

//what is this?
console.log(playerName);

console.log("this logs a string, good for leaving yourself a message");
//this will do math
console.log(10 + 10);
//what is this?
console.log("our robot's name is" + playerName);

// note the lack of quotations around playerName
window.alert(playerName);

// this creates a function named "fight"

function fight() {
    window.alert("the fight has begun");
}

// fight();