// Time spent programming this game: 2/7/2017 : 47 Minutes
// Time spent on CSS: 2/10/2017: 1 Hour 31 Minutes

//Variables
	var screen = document.getElementById("scrollable");
	var playerPreviousMove = 'none';
	var computerPreviousMove = 'none';
	var ai = false;
	var attackButton = document.getElementById("attackbutton");
	var mainButton = document.getElementById("mainbutton");
	var playerTurnNumber = 0;
	mainButton.className = '';
	var textNum = 0;
	var computerTurnNumber = 0;

// Player Pokemon Selector
	var playerPokemonArray = ["Ho-Oh","Venusaur","Weedle"];
	var playerPokemonArrayRandom =  Math.floor((Math.random() * playerPokemonArray.length));
	var playerPokemon = playerPokemonArray[playerPokemonArrayRandom];
	document.getElementById("playerPokemon").innerHTML = 'Your Pokemon is: ' + playerPokemon;
	console.log('pPokemon Selected');
// Computer Pokemon Selector
	var computerPokemonArray = ["Pikachu","Charmander","Diglett"];
	var computerPokemonArrayRandom =  Math.floor((Math.random() * computerPokemonArray.length));
	var computerPokemon = computerPokemonArray[computerPokemonArrayRandom];
	document.getElementById("computerPokemon").innerHTML = 'The Computer\'s Pokemon is: ' + computerPokemon;
	console.log('cPokemon Selected');

// Change the name to be got by a input box
	var playerName = prompt('What is your name?');
	var turnArray = [playerName, 'The Computer'];
	var turnArrayRandom = Math.floor((Math.random() * turnArray.length));
	var turn = turnArray[turnArrayRandom];
	document.getElementById("currentTurn").innerHTML = 'It is ' + turn +'s' + ' turn!';

// Sets up stats based on Pokemon
	// Computer Pokemon
	if (computerPokemon === 'Pikachu') {
		var computerAttack = 30;
		var computerUlt = 60; // Does damage
		var computerHealth = 50;
		var computerSpeed = 20;
		var computerAgility = 10;
		console.log('cStats Set');
	}

	if (computerPokemon === 'Charmander') {
		var computerAttack = 10;
		var computerUlt = 0; 
		var computerHealth = 120;
		var computerSpeed = 10;
		var computerAgility = 2;
		console.log('cStats Set');
	}

	if (computerPokemon === 'Diglett') {
		var computerAttack = 30;
		var computerUlt = 0;
		var computerHealth = 100;
		var computerSpeed = 20;
		var computerAgility = 10;
		console.log('cStats Set');
	}
	// Player Pokemon
	if (playerPokemon === 'Ho-Oh') {
		var playerAttack = 70;
		var playerUlt = 10; // Buffs HP
		var playerHealth = 80;
		var playerSpeed = 35;
		var playerAgility = 12;
		console.log('pStats Set');
	}

	if (playerPokemon === 'Venusaur') {
		var playerAttack = 30;
		var playerUlt = 10; 
		var playerHealth = 110;
		var playerSpeed = 20;
		var playerAgility = 10;
		console.log('pStats Set');
	}

	if (playerPokemon === 'Weedle') {
		var playerAttack = 30;
		var playerUlt = 10; 
		var playerHealth = 110;
		var playerSpeed = 20;
		var playerAgility = 10;
		console.log('pStats Set');
	}

var renderStats = function() {
// Sets Stat Text
	//Player Stats
	document.getElementById("pHP").innerHTML = 'Health: ' + playerHealth;
	document.getElementById("pSpeed").innerHTML = 'Speed: ' + playerSpeed;
	document.getElementById("pAgility").innerHTML = 'Agility: ' + playerAgility;
	document.getElementById("pAttack").innerHTML = 'Attack Power: ' + playerAttack;
	//Computer Stats
	document.getElementById("cHP").innerHTML = 'Health: ' + computerHealth;
	document.getElementById("cAgility").innerHTML = 'Agility: ' + computerAgility;
	document.getElementById("cAttack").innerHTML = 'Attack Power: ' + computerAttack;
	document.getElementById("cSpeed").innerHTML = 'Speed: ' + computerSpeed;
} 
	setInterval(renderStats);

// Player Attack
function attack() {
			var basicAttackAlert = document.createElement('p');
			var basicAttackAlertNODE = document.createTextNode(playerPokemon + " Attacks!");
			basicAttackAlert.appendChild(basicAttackAlertNODE);
			screen.appendChild(basicAttackAlert);
	var playerBasicHitOdds = ['yes', 'yes', 'yes', 'no', 'no'];
	var PbasicHitOddsArrayRandom = Math.floor((Math.random() * playerBasicHitOdds.length));
	var playerBasicAttackHit = playerBasicHitOdds[PbasicHitOddsArrayRandom];

	if (playerBasicAttackHit === 'yes') {
		var basicAttackHitSuccess = document.createElement('p');
		var basicAttackHitSuccessNODE = document.createTextNode(playerPokemon + " Dealt " + playerAttack + ' Damage to the Enemy Pokemon!');
		basicAttackHitSuccess.appendChild(basicAttackHitSuccessNODE);
		screen.appendChild(basicAttackHitSuccess);
		computerHealth = computerHealth - (playerAttack + (playerAgility / 2));
	}
	if (playerBasicAttackHit === 'no') {
		var basicAttackFail = document.createElement('p');
		var basicAttackFailNODE = document.createTextNode(playerPokemon + ' Missed!');
		basicAttackFail.appendChild(basicAttackFailNODE);
		screen.appendChild(basicAttackFail);
	}
	if (computerHealth <= 0) {
		var playerWin = document.createElement('p');
		var playerWinNODE = document.createTextNode('YOU WIN!!!');
		playerWin.appendChild(playerWinNODE);
		screen.appendChild(playerWin);
	} else {
		turn = 'The Computer';
		startTurn();
	}
}

// Players Turn
function playerTurn() {
		// Setup
		playerTurnNumber += playerTurnNumber;
		mainButton.className = 'invisible';
		attackButton.className = '';	
		if (playerTurnNumber = 1) {
			sleep(2000);
			var textTurn1N1 = document.createElement('p');
			var textTurn1N1node = document.createTextNode("You use " + playerPokemon + '! What do you do?');
			textTurn1N1.appendChild(textTurn1N1node);
			screen.appendChild(textTurn1N1);
		}

		// Ho-Oh Boost
		if (playerPokemon === 'Ho-Oh') {
			sleep(1000);
			playerHealth += playerUlt;
			var HoOhBoostAlertText = document.createElement('p');
			var HoOhBoostAlertTextNODE = document.createTextNode("Ho-Oh's Health was boosted by: " + playerUlt + ' HP');
			HoOhBoostAlertText.appendChild(HoOhBoostAlertTextNODE);
			screen.appendChild(HoOhBoostAlertText);
		}
		turn = 'blank';
		console.log('that explains it');
		startTurn();
}

function computerTurn() {
		// Turn Setup
		computerTurnNumber += computerTurnNumber;
		mainbutton.className = 'invisible';
		attackButton.className = 'invisible';
		// Alert that computer is going
			var computerIsGoingText = document.createElement('p');
			var computerIsGoingTextNODE = document.createTextNode("The Computer is taking its turn!");
			computerIsGoingText.appendChild(computerIsGoingTextNODE);
			screen.appendChild(computerIsGoingText);

		// AI Attack 
		if (playerHealth >= computerHealth) {

			//Setup for battle
			var computerAttackMessage = document.createElement('p');
			var computerAttackMessageNODE = document.createTextNode(computerPokemon + ' Attacks!');
			computerAttackMessage.appendChild(computerAttackMessageNODE);
			screen.appendChild(computerAttackMessage);
			//Battle odds and math
			var computerHitOdds = ['yes', 'yes', 'yes', 'no', 'no'];
			var cHitOddsArrayRandom = Math.floor((Math.random() * computerHitOdds.length));
			var computerHit = computerHitOdds[cHitOddsArrayRandom];

			// IF SUCCESS
			if (computerHit === 'yes') {
				var computerAttackMessageHit = document.createElement('p');
				var computerAttackMessageHitNODE = document.createTextNode(computerPokemon + ' Hits!');
				computerAttackMessageHit.appendChild(computerAttackMessageHitNODE);
				screen.appendChild(computerAttackMessageHit);
				var computerAttackMessageDamageDealt = document.createElement('p');
				var computerAttackMessageDamageDealtNODE = document.createTextNode('You took ' + computerAttack + ' Damage!');
				computerAttackMessageDamageDealt.appendChild(computerAttackMessageDamageDealtNODE);
				screen.appendChild(computerAttackMessageDamageDealt);
				playerHealth = playerHealth - computerAttack;
				playerHealth = playerHealth + (playerAgility / 2);
			} 
			// IF FAIL
			if (computerHit === 'no') {
				var computerAttackMissAlert = document.createElement('p');
				var computerAttackMissAlertNODE = document.createTextNode(computerPokemon + ' Misses! You take 0 Damage!');
				computerAttackMissAlert.appendChild(computerAttackMissAlertNODE);
				screen.appendChild(computerAttackMissAlert);
			}
}

		// End Turn
		turn = playerName;
		startTurn();
		console.log('that doesnt');
	}

// Turn Selector
function startTurn () {
		if (turn === 'The Computer') {
			var computerTurnMessage = document.createElement('p');
			var computerTurnMessageNODE = document.createTextNode('It is The Computer\'s turn!');
			computerTurnMessage.appendChild(computerTurnMessageNODE);
			screen.appendChild(computerTurnMessage);
			computerTurn();
		}
		if (turn === playerName) {
			var playerTurnMessage = document.createElement('p');
			var playerTurnMessageNODE = document.createTextNode('It is your turn!');
			playerTurnMessage.appendChild(playerTurnMessageNODE);
			screen.appendChild(playerTurnMessage);
			playerTurn();
		} 
}

// Pulled from StackOverflow ...... Basically it's a wait function
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}