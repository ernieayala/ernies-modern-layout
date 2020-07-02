// Used to create an ultra specific selector
Hooks.once('init', () => {
	let myHtml = document.getElementsByTagName('html');
	let myBody = document.getElementsByTagName('body');

	myHtml[0].classList.add('e-html');
	myBody[0].classList.add('e-body');

	// lets makes make this specificity stupid
	myBody[0].setAttribute('id', 'e-rd');
});
