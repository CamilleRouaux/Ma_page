let stars = document.getElementById('stars');
// let moon = document.getElementById('moon');
// let button = document.getElementById('button');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
	let value = window.scrollY;
	console.log(value);
	stars.style.left = value * 0.25 + 'px';
	// moon.style.top = (value == 0 ? 10 : value) * 1 + 'px';
	mountains_behind.style.top = value * 0.3 + 'px';
	mountains_front.style.top = value * 0 + 'px';
	// button.style.marginTop = value * 1.9 + 'px';
})