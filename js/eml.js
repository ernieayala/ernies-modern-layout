const myHtml = document.getElementsByTagName('html');
const myBody = document.getElementsByTagName('body');

// Hex to RGB function
function convertHex(color){
	const hex = color.replace('#','');
	const r = parseInt(hex.substring(0,2), 16);
	const g = parseInt(hex.substring(2,4), 16);
	const b = parseInt(hex.substring(4,6), 16);
	return `${r}, ${g}, ${b}`;
}

// Used to create an ultra specific selector
Hooks.once('init', () => {
	// lets makes make this specificity stupid
	myBody[0].classList.add('emu');
	myBody[0].classList.add('e-body');
	myBody[0].setAttribute('id', 'emu');
});

Hooks.once('ready', () => {
	let defaultColorPicker = true;

	// Theme
	if(defaultColorPicker) {
		game.settings.register('ernies-modern-layout', 'colorPrimary', {
			name: 'Primary Theme Color',
			hint: 'Default Value: #e57509 - Blue: #386acf - Green: #0fbd7d - Purple: #773edc - Red: #dc143c - Yellow: #edb950',
			scope: 'user',
			config: true,
			default: '#E57509',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-primary', convertHex(data));
			}
		});
		const colorPrimary = game.settings.get('ernies-modern-layout', 'colorPrimary');
		colorPrimary ? document.documentElement.style.setProperty('--color-primary', convertHex(colorPrimary)) : null;

		// Background Default
		game.settings.register('ernies-modern-layout', 'colorBackground', {
			name: 'Background Default',
			hint: 'Deault: #293e40',
			scope: 'user',
			config: true,
			default: '#293e40',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-background', convertHex(data));
			}
		});
		const colorBackground = game.settings.get('ernies-modern-layout', 'colorBackground');
		colorBackground ? document.documentElement.style.setProperty('--color-background', convertHex(colorBackground)) : null;

		// Background Lightest
		game.settings.register('ernies-modern-layout', 'colorBackgroundLightest', {
			name: 'Background Lightest',
			hint: 'Deault: #e6e9eb',
			scope: 'user',
			config: true,
			default: '#e6e9eb',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-background-lightest', convertHex(data));
			}
		});
		const colorBackgroundLightest = game.settings.get('ernies-modern-layout', 'colorBackgroundLightest');
		colorBackgroundLightest ? document.documentElement.style.setProperty('--color-background-lightest', convertHex(colorBackgroundLightest)) : null;

		// Background Light
		game.settings.register('ernies-modern-layout', 'colorBackgroundLight', {
			name: 'Background Light',
			hint: 'Deault: #7d8a8c',
			scope: 'user',
			config: true,
			default: '#7d8a8c',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-background-light', convertHex(data));
			}
		});
		const colorBackgroundLight = game.settings.get('ernies-modern-layout', 'colorBackgroundLight');
		colorBackgroundLight ? document.documentElement.style.setProperty('--color-background-light', convertHex(colorBackgroundLight)) : null;

		// Background Darkest
		game.settings.register('ernies-modern-layout', 'colorBackgroundDarkest', {
			name: 'Background Darkest',
			hint: 'Deault: #090e10',
			scope: 'user',
			config: true,
			default: '#090e10',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-background-darkest', convertHex(data));
			}
		});
		const colorBackgroundDarkest = game.settings.get('ernies-modern-layout', 'colorBackgroundDarkest');
		colorBackgroundDarkest ? document.documentElement.style.setProperty('--color-background-darkest', convertHex(colorBackgroundDarkest)) : null;

		// Background Button
		game.settings.register('ernies-modern-layout', 'colorBackgroundButton', {
			name: 'Background Button',
			hint: 'Deault: #7d7d7d',
			scope: 'user',
			config: true,
			default: '#7d7d7d',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-background-button', convertHex(data));
			}
		});
		const colorBackgroundButton = game.settings.get('ernies-modern-layout', 'colorBackgroundButton');
		colorBackgroundButton ? document.documentElement.style.setProperty('--color-background-button', convertHex(colorBackgroundButton)) : null;

		// Border
		game.settings.register('ernies-modern-layout', 'colorBorder', {
			name: 'Border',
			hint: 'Deault: #213234',
			scope: 'user',
			config: true,
			default: '#213234',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-border', convertHex(data));
			}
		});
		const colorBorder = game.settings.get('ernies-modern-layout', 'colorBorder');
		colorBorder ? document.documentElement.style.setProperty('--color-border', convertHex(colorBorder)) : null;

		// Folder Header
		game.settings.register('ernies-modern-layout', 'colorFolderHeader', {
			name: 'Folder Header',
			hint: 'Deault: #a7b0b2',
			scope: 'user',
			config: true,
			default: '#a7b0b2',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-folder-header', convertHex(data));
			}
		});
		const colorFolderHeader = game.settings.get('ernies-modern-layout', 'colorFolderHeader');
		colorFolderHeader ? document.documentElement.style.setProperty('--color-folder-header', convertHex(colorFolderHeader)) : null;

		// Folder Directory
		game.settings.register('ernies-modern-layout', 'colorFolderDirectory', {
			name: 'Folder Directory',
			hint: 'Deault: #536466',
			scope: 'user',
			config: true,
			default: '#536466',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-folder-directory', convertHex(data));
			}
		});
		const colorFolderDirectory = game.settings.get('ernies-modern-layout', 'colorFolderDirectory');
		colorFolderDirectory ? document.documentElement.style.setProperty('--color-folder-directory', convertHex(colorFolderDirectory)) : null;

		// Folder Subdirectory
		game.settings.register('ernies-modern-layout', 'colorFolderSubdirectory', {
			name: 'Folder Subdirectory',
			hint: 'Deault: #d1d6d8',
			scope: 'user',
			config: true,
			default: '#d1d6d8',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-folder-subdirectory', convertHex(data));
			}
		});
		const colorFolderSubdirectory = game.settings.get('ernies-modern-layout', 'colorFolderSubdirectory');
		colorFolderSubdirectory ? document.documentElement.style.setProperty('--color-folder-subdirectory', convertHex(colorFolderSubdirectory)) : null;

		// Text
		game.settings.register('ernies-modern-layout', 'colorText', {
			name: 'Text',
			hint: 'Deault: #090E10',
			scope: 'user',
			config: true,
			default: '#090E10',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-text', convertHex(data));
			}
		});
		const colorText = game.settings.get('ernies-modern-layout', 'colorText');
		colorText ? document.documentElement.style.setProperty('--color-text', convertHex(colorText)) : null;

		// Text Lightest
		game.settings.register('ernies-modern-layout', 'colorTextLightest', {
			name: 'Text Lightest',
			hint: 'Deault: #ffffff',
			scope: 'user',
			config: true,
			default: '#ffffff',
			type: String,
			onChange: data => {
				document.documentElement.style.setProperty('--color-text-lightest', convertHex(data));
			}
		});
		const colorTextLightest = game.settings.get('ernies-modern-layout', 'colorTextLightest');
		colorTextLightest ? document.documentElement.style.setProperty('--color-text-lightest', convertHex(colorTextLightest)) : null;
	} else {
		// new window.Ardittristan.ColorSetting('ernies-modern-layout', 'primaryColor', {
		// 	name: 'Primary Color',
		// 	hint: 'Default Value: #e57509',
		// 	label: 'Primary Color',
		// 	restricted: false,
		// 	defaultColor: '#E57509',
		// 	scope: 'client',
		// 	onChange: (value) => {
		// 		let rgbValue = convertHex(value);
		// 		rgbValue ? document.documentElement.style.setProperty('--color-primary', rgbValue) : null;
		// 	}
		// });
		// const primaryColor = game.settings.get('ernies-modern-layout', 'primaryColor');
		// if(primaryColor) {
		// 	let rgbValue = convertHex(primaryColor);
		// 	rgbValue ? document.documentElement.style.setProperty('--color-primary', rgbValue) : null;
		// }
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
