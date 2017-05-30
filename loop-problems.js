const problemOne = document.querySelector('.one');
for (i=-10;i<=19;i++) {
  let iDiv = document.createElement('button');
  iDiv.classList.add("btn", "btn-sm");
  iDiv.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
  iDiv.style.color = '#'+Math.random().toString(16).substr(-6);
  iDiv.innerHTML = `${i}  `;
  problemOne.appendChild(iDiv);
}

const problemTwo = document.querySelector('.two');
for (i=10;i<=40;i+=2) {
  let iDiv = document.createElement('button');
  iDiv.classList.add("btn", "btn-sm");
  iDiv.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
  iDiv.style.color = '#'+Math.random().toString(16).substr(-6);
  iDiv.innerHTML = `${i}  `;
  problemTwo.appendChild(iDiv);
}

const problemThree = document.querySelector('.three');
for (i=333;i>=300;i-=2) {
  let iDiv = document.createElement('button');
  iDiv.classList.add("btn", "btn-sm");
  iDiv.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
  iDiv.style.color = '#'+Math.random().toString(16).substr(-6);
  iDiv.innerHTML = `${i}  `;
  problemThree.appendChild(iDiv);
}

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