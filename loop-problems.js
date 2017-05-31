///////////////////////
// PROBLEM ONE
///////////////////////
const problemOne = document.querySelector('.one');
for (i=-10;i<=19;i++) {
  let iDiv = document.createElement('button');
  iDiv.classList.add("btn", "btn-sm");
  iDiv.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
  iDiv.style.color = '#'+Math.random().toString(16).substr(-6);
  iDiv.innerHTML = `${i}  `;
  problemOne.appendChild(iDiv);
}

///////////////////////
// PROBLEM TWO
///////////////////////
const problemTwo = document.querySelector('.two');
for (i=10;i<=40;i+=1) {
	if(i%2===0) {
		let iDiv = document.createElement('button');
		iDiv.classList.add("btn", "btn-sm");
		iDiv.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
		iDiv.style.color = '#'+Math.random().toString(16).substr(-6);
		iDiv.innerHTML = `${i}  `;
		problemTwo.appendChild(iDiv);
	}
}

///////////////////////
// PROBLEM THREE
///////////////////////
const problemThree = document.querySelector('.three');
for (i=333;i>=300;i-=2) {
  let iDiv = document.createElement('button');
  iDiv.classList.add("btn", "btn-sm");
  iDiv.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
  iDiv.style.color = '#'+Math.random().toString(16).substr(-6);
  iDiv.innerHTML = `${i}  `;
  problemThree.appendChild(iDiv);
}

///////////////////////
// PROBLEM FOUR
///////////////////////
const problemFour = document.querySelector('.four');
for (i=5;i<=50;i++) {
  if(i%15===0) {
    let iDiv = document.createElement('button');
    iDiv.classList.add("btn", "btn-sm");
    iDiv.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
    iDiv.style.color = '#'+Math.random().toString(16).substr(-6);
    iDiv.innerHTML = `${i}  `;
    problemFour.appendChild(iDiv); 
  }
}


///////////////////////
// PROBLEM FIVE
///////////////////////
const problemFive = document.querySelector('.five');

const annoyomatic = () => {
	let userInput = prompt("Are we there yet?").toLowerCase();
	// if (userInput.includes('yeah') || userInput.includes('yes')) {
	if (userInput.indexOf('yeah') > -1 || userInput.indexOf('yes') > -1) { 
		let iDiv = document.createElement('h5')
		iDiv.innerHTML = `<br>Yay, we finally made it!`;
    	problemFive.appendChild(iDiv);
	} else {
		annoyomatic();
	}
}

///////////////////////
// PROBLEM SIX
///////////////////////
const problemSix = document.querySelector('.six');

const textShine = () => {
	let loopText = document.querySelector('#loopText').value.replace(/\s/g, '');
	for(i=0;i<loopText.length;i++) {
		let iDiv = document.createElement('button');
	    iDiv.classList.add("btn", "btn-sm");
	    iDiv.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
	    iDiv.style.color = '#'+Math.random().toString(16).substr(-6);
	    iDiv.innerHTML = `${loopText[i]}  `;
	    problemSix.appendChild(iDiv); 
	}
}

































