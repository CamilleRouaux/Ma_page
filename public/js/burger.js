let burger = document.querySelector('.burger');

burger.addEventListener('click', function(e){
	e.preventDefault();
	document.querySelector('.burger').classList.toggle('clicked');
	document.querySelector('.overlay').classList.toggle('show');
	document.querySelector('nav').classList.toggle('show');
	document.querySelector('body').classList.toggle('overflow');
})

// body.addEventListener('click', function(){
// 	document.querySelector('.nav-links').classList.remove("open");
// 	document.querySelector('.burger').classList.remove("open");
// })