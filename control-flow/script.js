const logic = document.querySelector('.logic');
const conditionals = document.querySelector('.conditionals');
const guessingGame = document.querySelector('.guessingGame');
const loopText = document.querySelector('.loops');

// Logic
logic.innerHTML = `
					   const x = 10;
					   <p>const y = 'a';</p>
					   <p>y === 'b' || x >= 10</p>
					   <p>True!</p>
					   <hr>
					   const x = 3;
					   <p>const y = 8;</p>
					   <p>!(x == '3' || x === y) && !(y != 8 && x <= y)</P>
					   <p>False!</p>
					   <hr>
					   const str = "";
					   <p>const msg = "haha!";</p>
					   <p style="margin-top:-17px;">const isFunny = "false";</p>
					   <p>!(( str || msg ) && isFunny)</p>
					   <p>False!</p>
				   `


// Conditionals
const getAge = () => {
	const ageForm = document.querySelector('#ageInput');
	const userAge = document.querySelector('#ageInput').value;
	const ageLabel = document.querySelector('label[for="ageInput"]');

	if(isNaN(userAge)) {
		ageLabel.innerHTML=`${userAge} is not a number (or is a word of a number but I'm working on that)!`;
		ageForm.value='';
		} else if(userAge < 18) {
			ageLabel.innerHTML='Sorry, you are not old enough to enter';
			ageForm.value='';
		} else if(userAge < 21) {
			ageLabel.innerHTML='You can enter but NO DRINKS!';
			ageForm.value='';
		} else if(userAge > 21) {
			ageLabel.innerHTML='Come on in and drink buddy!';
			ageForm.value='';
		2} 
	}

conditionals.innerHTML = `
						  	<p>if(age < 18) {</p>
						  	<p style="margin-top:-17px;">&emsp;alert('Sorry, you are not old enough to enter');<p>
						  	<p style="margin-top:-17px;">}</p>
						  	<p>else if (age < 21) {</P>
						  	<p style="margin-top:-17px;">&emsp;alert('You can enter, but cannot drink');</p>	
						  	<p style="margin-top:-17px;">}</p>
						  	<p>else(age > 21) {</p>
						  	<p style="margin-top:-17px;">&emsp;alert('Come on in and you can drink')</p>	
						  	<p style="margin-top:-17px;">}<p>
						  	<form onkeypress="return event.keyCode != 13;">
  								<div class="form-group">
    								<label for="ageInput">Enter Your Age</label>
    								<input type="text" class="form-control" id="ageInput" placeholder="Enter age">
    							</div>
    							<button type="button" onclick='getAge()' class="btn btn-secondary">Submit your Age</button>
    						</form>
						 `


// Guessing Game
guessingGame.innerHTML = `
						  	<h4 class="text-center" id="numberDisplay">I am thinking of a number between 1 and 10</h4>
						  	<form onkeypress="return event.keyCode != 13;">
  								<div class="form-group">
    								<label for="guessNumber">Guess the number!</label>
    								<input type="text" class="form-control" id="guessNumber" placeholder="Enter number">
    							</div>
    							<div class="numberDiv">
    								<button type="button" onclick='guessTheNumber()' id="numberButton" class="btn btn-secondary">Submit your guess</button>
    							</div>
    						</form>
			   			 `


const gameText = document.createElement("h5");
const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
const numberDiv = document.querySelector('.numberDiv');
const numberButton = document.querySelector("#numberButton");

const guessTheNumber = () => {
	const numberDisplay = document.querySelector('#numberDisplay');
	const guessForm = document.querySelector('#guessNumber');
	const guessNumber = document.querySelector('#guessNumber').value;
	const restartButton = document.createElement("button");

	if (isNaN(guessNumber)) {
		gameText.innerHTML=`${guessNumber} is not a number (or is a word of a number but I'm working on that)!`;
		guessForm.value='';
	} else if(guessNumber < randomNumber) {
		gameText.innerHTML=`${guessNumber} is too low. Try Again`;
		guessForm.value='';
	} else if (guessNumber > randomNumber) {
		gameText.innerHTML=`${guessNumber} is too high. Try Again`;
		guessForm.value='';
	} else {
		gameText.innerHTML=`${guessNumber} is right!`;
		guessForm.value='';
		numberDiv.removeChild(numberButton);
		numberDiv.appendChild(restartButton);
		restartButton.classList.add('btn','btn-success');
		restartButton.innerHTML = "Replay";
	}

	gameText.classList.add("text-center","mt-3")
	guessingGame.appendChild(gameText);
}


// LOOPS
loopText.innerHTML = `<h4 class="text-center">Enter a number to print loop (only working in console at the momemt)</h4>
						  	<form onkeypress="return event.keyCode != 13;">
  								<div class="form-group">
    								<label for="whileLoop">Enter a Number</label>
    								<input type="text" class="form-control" id="whileLoop" placeholder="Enter number">
    							</div>
    							<div class="numberDiv">
    								<button type="button" onclick="whileLoop()" class="btn btn-secondary">Submit your number</button>
    							</div>
    						</form>
    						<br>
    				  `
let loopPrint = document.createElement('p');
let userWhileNumber = document.querySelector('#whileLoop').value;

const whileLoop = () => {
	let count = 0;
	while(count < userWhileNumber) {
		loopPrint.innerHTML += count;
		loopText.appendChild(loopPrint);
		count++;
	};
}


// FIZZBUZZ
const fizzDiv = document.querySelector('.fizzbuzz');

fizzDiv.innerHTML = `
						<h4 class="text-center">My FizzBuzz</h4>
					`

const fizzbuzz = i => {
	if(i%15===0) {
		return "FizzBuzz";
	}
	if(i%3===0) {
		return "Fizz";
	}
	if(i%5===0) {
		return "Buzz";
	}
	return i.toString();
}

for(i=1;i<=200;i++) {
	let myFizz = document.createElement('button');
	myFizz.classList.add("btn", "btn-sm");
	myFizz.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
	myFizz.style.color = '#'+Math.random().toString(16).substr(-6);
	myFizz.innerHTML=fizzbuzz(i);
	fizzDiv.appendChild(myFizz);
}


 






































