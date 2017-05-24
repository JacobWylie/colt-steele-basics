"use-strict"

const logic = document.querySelector('.logic');
const conditionals = document.querySelector('.conditionals');

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

const getAge = () => {
	const ageForm = document.querySelector('#ageInput');
	const userAge = document.querySelector('#ageInput').value;
	const ageLabel = document.querySelector('label[for="age"]');

	if(isNaN(userAge)) {
		ageLabel.innerHTML=`${userAge} is not a number (or is a word of a number but I'm working on that)!`;
		ageForm.value='';
	} else if(userAge < 18) {
		ageLabel.innerHTML='Sorry, you are not old enough to enter';
	} else if(userAge < 21) {
		ageLabel.innerHTML='You can enter but NO DRINKS!';
	} else if(userAge > 21) {
		ageLabel.innerHTML='Come on in and drink buddy!';
	} 
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
    								<label for="age">Enter Your Age</label>
    								<input type="text" class="form-control" id="ageInput" placeholder="Enter age">
    							</div>
    							<button type="button" onclick='getAge()' class="btn btn-secondary">Submit your Age</button>
    						</form>
						 `
















