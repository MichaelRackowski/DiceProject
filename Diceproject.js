function runGame(){
	let player1Health = 100;
	let player2Health = 100;
	let playerTurn = 1;
	var dice;
	let sidesAttack = [20,8,4];
	let sidesHeal = [8];
	let sidesDefend =[12,10,6];
	let attack;
	let attackOne;
	let attackTwo;
	let resultTwo = "defense";
	let defense;
	let defenseOne;
	let defenseTwo;
	let heal;
	let resultAttackTwo;
	let resultMultiply;
	let resultDefenseTwo;
	let resultDodge;
	let resultDefenseThree;
	let minValue;
	let maxValue;
	let resultHeal;
	let didDamage1;
	let resultAttackThree;
	let didDamage2;
	let didDodge1;
	let didDodge2;

	while(player1Health >= 0 && player2Health >= 0){
	
	 if(playerTurn == 1){
		let result = prompt(" player 1: heal or attack?");

		if(result == "heal"){
			heal = roll(sidesHeal[0]);
		}
		else if(result == "attack"){
			attack = roll(sidesAttack[0]);
	 		attackOne = roll(sidesAttack[1]);
	  		attackTwo = roll(sidesAttack[2]);

	 		resultAttackTwo = (attack * attackTwo);
	  		resultMultiply = roll(sidesAttack[1]);
		}
	
		if(resultMultiply % 2 == 0){
	  		console.log("Its a hit!!!")
		}
		else if(resultMultiply % 2 ==1){
  			console.log("You missed your attack!!!")
  			didDamage1 = false;
		}

	  	
		resultTwo = "defense";
		defense = roll(sidesDefend[0]);
		defenseOne = roll(sidesDefend[1]);
		defenseTwo = roll(sidesDefend[2]);

		resultDodge = roll(sidesDefend[1]);
		resultDefenseTwo =(defense + defenseTwo);

		if(resultDodge % 2 == 0){
	  		console.log("You dodged there attack!")
	  		didDodge1 = true;
		}
		else if(resultDodge % 2 ==1){
	  		console.log("You weren't fast enough to dodge there attack!")
		}
		maxValue= max(resultAttackTwo, resultDefenseTwo);
		minValue = min(resultAttackTwo, resultDefenseTwo);
		if(didDamage1 == true){
		
		if(didDodge1 == false){

		

			resultDefenseThree = maxValue - minValue;
			player2Health -= resultDefenseThree;
		}
		}
		playerTurn++;
	}
	else if (playerTurn == 2){
		let result2 = prompt("player 2: heal or attack?");
	
		if(result2 == "heal"){
			heal = roll(sidesHeal[0]);
		}
		else if(resultAttackThree == "attack"){
			attack = roll(sidesAttack[0]);
			attackOne = roll(sidesAttack[1]);
			attackTwo = roll(sidesAttack[2]);

			resultAttackTwo = (attack * attackTwo);
			resultMultiply = roll(sidesAttack[1]);
		}

		if(resultMultiply % 2 == 0){
				console.log("Its a hit!!!")
		}
		else if(resultMultiply % 2 ==1){
				console.log("You missed your attack!!!")
				didDamage2 = false;
		}
		resultTwo = "defense";
		defense = roll(sidesDefend[0]);
		defenseOne = roll(sidesDefend[1]);
		defenseTwo = roll(sidesDefend[2]);
		resultDodge = roll(sidesDefend[1]);
		resultDefenseTwo =(defense + defenseTwo);

		if(resultDodge % 2 == 0){
		  	console.log("You dodged there attack!")
		  	didDodge2 =true;
		}
		else if(resultDodge % 2 ==1){
		  	console.log("You weren't fast enough to dodge there attack!")
		}
		maxValue= max(resultAttackTwo, resultDefenseTwo);
		minValue = min(resultAttackTwo, resultDefenseTwo);

		if(didDamage2 == true);{
		
		if(didDodge1 == false){
		
		resultDefenseThree = maxValue - minValue;
		player2Health -= resultDefenseThree;
		}
		}
		playerTurn--
	}
}

	  	}	
		



function roll(numOfSides){
			var randomNumber = Math.floor(Math.random()*numOfSides)+1;
			return randomNumber;
		}
function max(a, b){
	if(a > b)
		return a;
	else return b;
}
function min(a, b){
	if(a < b)
		return a;
	else return b;
}