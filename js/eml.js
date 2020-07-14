// Hex to RGB function
function convertHex(color){
	let hex = color.replace('#','');
	let r = parseInt(hex.substring(0,2), 16);
	let g = parseInt(hex.substring(2,4), 16);
	let b = parseInt(hex.substring(4,6), 16);

	return r+','+g+','+b;
}

// Used to create an ultra specific selector
Hooks.once('init', () => {
	let myHtml = document.getElementsByTagName('html');
	let myBody = document.getElementsByTagName('body');

	// lets makes make this specificity stupid
	myBody[0].classList.add('emu');
	myBody[0].classList.add('e-body');
	myBody[0].setAttribute('id', 'emu');

	// Theme
	game.settings.register('ernies-modern-layout', 'primaryColor', {
		name: 'Primary Theme Color',
		hint: 'Use a full length hex value. Will make it better later. Default Value: #e57509 - Blue: #386acf - Green: #0fbd7d - Purple: #773edc - Red: #dc143c - Yellow: #edb950',
		scope: 'user',
		config: true,
		default: '#E57509',
		type: String,
		onChange: data => {
			if(data.length === 7) {
				let rgbValue = convertHex(data);
				rgbValue ? document.documentElement.style.setProperty('--color-primary', rgbValue) : null;
			}
		}
	});
	const primaryColor = game.settings.get('ernies-modern-layout', 'primaryColor');
	if(primaryColor && primaryColor.length === 7) {
		let rgbValue = convertHex(primaryColor);
		rgbValue ? document.documentElement.style.setProperty('--color-primary', rgbValue): null;
	}

	// Layouts
	game.settings.register('ernies-modern-layout', 'compactMode', {
		name: 'Compact Mode',
		scope: 'user',
		config: true,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-compact') : myHtml[0].classList.remove('-compact');
		}
	});
	const compactMode = game.settings.get('ernies-modern-layout', 'compactMode');
	compactMode ? myHtml[0].classList.add('-compact') : myHtml[0].classList.remove('-compact');

	// Visual Toggles
	game.settings.register('ernies-modern-layout', 'toggleLogo', {
		name: 'Toggle Logo',
		scope: 'user',
		config: true,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.remove('-emu-logo') : myHtml[0].classList.add('-emu-logo');
		}
	});
	const toggleLogo = game.settings.get('ernies-modern-layout', 'toggleLogo');
	toggleLogo ? myHtml[0].classList.remove('-emu-logo') : myHtml[0].classList.add('-emu-logo');

	game.settings.register('ernies-modern-layout', 'toggleSceneThumbs', {
		name: 'Toggle Scene Thumbnails',
		scope: 'user',
		config: true,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-emu-scene-thumbs') : myHtml[0].classList.remove('-emu-scene-thumbs');
		}
	});
	const toggleSceneThumbs = game.settings.get('ernies-modern-layout', 'toggleSceneThumbs');
	toggleSceneThumbs ? myHtml[0].classList.add('-emu-scene-thumbs') : myHtml[0].classList.remove('-emu-scene-thumbs');

	// Turn off styling
	game.settings.register('ernies-modern-layout', 'toggleCombatSidebar', {
		name: 'Toggle Combat Sidebar Styles',
		hint: 'This will turn off -most- of the styling in the combat sidebar.',
		scope: 'user',
		config: true,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.remove('-emu-sidebar-combat') : myHtml[0].classList.add('-emu-sidebar-combat');
		}
	});
	const toggleCombatSidebar = game.settings.get('ernies-modern-layout', 'toggleCombatSidebar');
	toggleCombatSidebar ? myHtml[0].classList.remove('-emu-sidebar-combat') : myHtml[0].classList.add('-emu-sidebar-combat');

	// Check for other modules
	setTimeout(function() {
		document.getElementsByClassName('dice-tray').length >= 1 ? myHtml[0].classList.add('-emu-dice-tray-active') : myHtml[0].classList.remove('-emu-dice-tray-active');
	}, 1000);
});
