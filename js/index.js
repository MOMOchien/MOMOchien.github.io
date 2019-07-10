const navBar = () =>{
	const nav_rwd = document.querySelector('.nav_rwd');
	const nav = document.querySelector('.ul_class');

	nav_rwd.addEventListener('click', () => {
		console.log(nav);
		nav.classList.toggle('ul-active');
	});
}

navBar();
