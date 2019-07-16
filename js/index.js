var NavBarChange = () => {
	var burger = document.querySelector('.burger');
	var nav_list = document.querySelector('.nav_list');
	burger.addEventListener('click', () => {
		burger.classList.toggle('burger-active');
		nav_list.classList.toggle('nav_list-active');
	});
}

NavBarChange();