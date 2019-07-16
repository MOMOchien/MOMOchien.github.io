<<<<<<< HEAD
var NavBarChange = () => {
	var burger = document.querySelector('.burger');
	var nav_list = document.querySelector('.nav_list');
	burger.addEventListener('click', () => {
		burger.classList.toggle('burger-active');
		nav_list.classList.toggle('nav_list-active');
	});
}

NavBarChange();
=======
const navBar = () =>{
	const nav_rwd = document.querySelector('.nav_rwd');
	const nav = document.querySelector('.ul_class');

	nav_rwd.addEventListener('click', () => {
		console.log(nav);
		nav.classList.toggle('ul-active');
	});
}

navBar();
>>>>>>> b8c6016c45d23d0dfb710a1c9645f1a9bde084f5
