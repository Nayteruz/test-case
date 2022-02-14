

let toggleStart = document.querySelector('.start-animation');
let randomColor = document.querySelector('.change-color');
let iconAnimation = document.querySelector('.icon-container .icon');

toggleStart.addEventListener('click', toggleStartEvent);
randomColor.addEventListener('click', changeColor);

function toggleStartEvent(el){
	el.target.classList.toggle('start');
	iconAnimation.classList.toggle('animation');
}

function changeColor(){

	iconAnimation.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
}