var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//you can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting a round
    window.alert("Welcome to Robot Gladiator!");
    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter FIGHT or SKIP to choose");

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtractin the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

        //check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");            
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }

        // remove player health blah blah
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "health left. "
        );

        //check player health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        //if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to choose a valid option. Try Again!");
    }
};

fight();