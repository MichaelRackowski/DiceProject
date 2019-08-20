function runGame(){
	let totalHp = 100
	while(totalHp >= 1){
	let result = prompt("heal or attack");
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

	 if(result == "heal"){
	heal = roll(sidesHeal[0]);
}



	else if(result == "attack"){
	
	attack = roll(sidesAttack[0]);
	 attackOne = roll(sidesAttack[1]);
	  attackTwo = roll(sidesAttack[2]);

	  resultAttackTwo = (attack * attackTwo)
	  resultMultiply = roll(sidesAttack[1])
	}

	 
	  

	  if(resultMultiply % 2 == 0){
	  	console.log("Its a hit!!!")
	  }

	  	else if(resultMultiply % 2 ==1){
	  		console.log("You missed your attack!!!")
	  	}
	


	

	


	
	 resultTwo = "defense";
	 defense = roll(sidesDefend[0]);
	 defenseOne = roll(sidesDefend[1]);
	 defenseTwo = roll(sidesDefend[2]);


	 resultDodge = roll(sidesDefend[1]);
	resultDefenseTwo =(defense + defenseTwo);

	 if(resultDodge % 2 == 0){
	  	console.log("You dodged there attack!")
	  }

	  	else if(resultDodge % 2 ==1){
	  		console.log("You weren't fast enough to dodge there attack!")
	  	}
	  	maxValue= max(resultAttackTwo, resultDefenseTwo);
	  	minValue = min(resultAttackTwo, resultDefenseTwo);


	  	resultDefenseThree = maxValue - minValue;
	  	totalHp -= resultDefenseThree;
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


runGame();