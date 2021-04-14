import * as THEME from './emu-theme.js';

const myHtml = document.getElementsByTagName('html');
const myHead = document.getElementsByTagName('head')[0];
const myBody = document.getElementsByTagName('body');
const moduleName = 'ernies-modern-layout';

let __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
			function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
			function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
			step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
};

// Hex to RGB function
function convertHexToRgb(color) {
	const hex = color.replace('#','');
	const r = parseInt(hex.substring(0,2), 16);
	const g = parseInt(hex.substring(2,4), 16);
	const b = parseInt(hex.substring(4,6), 16);
	return `${r}, ${g}, ${b}`;
}

function updateSettings(settings) {
	const {
		borderRadiusDefault,
		borderRadiusControls,
		borderRadiusForms,
		borderRadiusImages,
		colorPrimary,
		colorBackground,
		colorBackgroundLightest,
		colorBackgroundLight,
		colorBackgroundDarkest,
		colorBackgroundButton,
		colorBackgroundChatMessage,
		colorBackgroundChatMessageWhisper,
		colorBackgroundChatMessageBlind,
		colorBorder,
		colorBorderLighter,
		colorFolderHeader,
		colorFolderDirectory,
		colorFolderSubdirectory,
		colorText,
		colorTextLightest,
		colorTextDarker,
		fontFamily,
		imageBackground,
		imageBackgroundLightest,
		imageBackgroundLight,
		imageBackgroundDarkest,
		imageBackgroundControls,
		toggleLogo,
		toggleSceneThumbs,
		toggleCombatSidebar
	} = settings;

	// Theme
	colorPrimary ? document.documentElement.style.setProperty('--color-primary', convertHexToRgb(colorPrimary)) : null;
	colorBackground ? document.documentElement.style.setProperty('--color-background', convertHexToRgb(colorBackground)) : null;
	colorBackgroundLightest ? document.documentElement.style.setProperty('--color-background-lightest', convertHexToRgb(colorBackgroundLightest)) : null;
	colorBackgroundLight ? document.documentElement.style.setProperty('--color-background-light', convertHexToRgb(colorBackgroundLight)) : null;
	colorBackgroundDarkest ? document.documentElement.style.setProperty('--color-background-darkest', convertHexToRgb(colorBackgroundDarkest)) : null;
	colorBackgroundButton ? document.documentElement.style.setProperty('--color-background-button', convertHexToRgb(colorBackgroundButton)) : null;
	colorBackgroundChatMessage ? document.documentElement.style.setProperty('--color-background-chat-message', convertHexToRgb(colorBackgroundChatMessage)) : null;
	colorBackgroundChatMessageWhisper ? document.documentElement.style.setProperty('--color-background-chat-message-whisper', convertHexToRgb(colorBackgroundChatMessageWhisper)) : null;
	colorBackgroundChatMessageBlind ? document.documentElement.style.setProperty('--color-background-chat-message-blind', convertHexToRgb(colorBackgroundChatMessageBlind)) : null;
	colorBorder ? document.documentElement.style.setProperty('--color-border', convertHexToRgb(colorBorder)) : null;
	colorBorderLighter ? document.documentElement.style.setProperty('--color-border-lighter', convertHexToRgb(colorBorderLighter)) : null;
	colorFolderHeader ? document.documentElement.style.setProperty('--color-folder-header', convertHexToRgb(colorFolderHeader)) : null;
	colorFolderDirectory ? document.documentElement.style.setProperty('--color-folder-directory', convertHexToRgb(colorFolderDirectory)) : null;
	colorFolderSubdirectory ? document.documentElement.style.setProperty('--color-folder-subdirectory', convertHexToRgb(colorFolderSubdirectory)) : null;
	colorText ? document.documentElement.style.setProperty('--color-text', convertHexToRgb(colorText)) : null;
	colorTextLightest ? document.documentElement.style.setProperty('--color-text-lightest', convertHexToRgb(colorTextLightest)) : null;
	colorTextDarker ? document.documentElement.style.setProperty('--color-text-darker', convertHexToRgb(colorTextDarker)) : null;

	// Design
	borderRadiusDefault ? document.documentElement.style.setProperty('--emu-border-radius-default', `${borderRadiusDefault}px`) : null;
	borderRadiusControls ? document.documentElement.style.setProperty('--emu-border-radius-controls', `${borderRadiusControls}px`) : null;
	borderRadiusForms ? document.documentElement.style.setProperty('--emu-border-radius-forms', `${borderRadiusForms}px`) : null;
	borderRadiusImages ? document.documentElement.style.setProperty('--emu-border-radius-images', `${borderRadiusImages}px`) : null;
	imageBackground ? document.documentElement.style.setProperty('--emu-image-background', `url(../backgrounds/${imageBackground}.webp)`) : null;
	imageBackgroundLightest ? document.documentElement.style.setProperty('--emu-image-background-lightest', `url('../backgrounds/${imageBackgroundLightest}.webp')`): null;
	imageBackgroundLight ? document.documentElement.style.setProperty('--emu-image-background-light', `url('../backgrounds/${imageBackgroundLight}.webp')`) : null;
	imageBackgroundDarkest ? document.documentElement.style.setProperty('--emu-image-background-darkest', `url('../backgrounds/${imageBackgroundDarkest}.webp')`) : null;
	imageBackgroundControls ? document.documentElement.style.setProperty('--emu-image-background-controls', `url('../backgrounds/${imageBackgroundControls}.webp')`) : null;

	// Options
	toggleLogo ? myHtml[0].classList.remove('-emu-logo') : myHtml[0].classList.add('-emu-logo');
	toggleSceneThumbs ? myHtml[0].classList.add('-emu-scene-thumbs') : myHtml[0].classList.remove('-emu-scene-thumbs');
	toggleCombatSidebar ? myHtml[0].classList.remove('-emu-sidebar-combat') : myHtml[0].classList.add('-emu-sidebar-combat');
}

function checkForUploadFolders(root, folder) {
	FilePicker.browse('data', root).then(loc => {
		if(!loc.dirs.includes(`${root}/${folder}`)) {
			loc.target == FilePicker.createDirectory('data', `${root}/${folder}`, {});
		}
	}).catch(_ => {
		throw new Error(`${moduleName} could not access ${root}/${folder}`);
	});
}

function setFontFamily(family) {
	let formattedLink = family.replace(' ', '+');
	let googleFont  = document.createElement('link');
	googleFont.id = 'emu-font-family';
	googleFont.href = `https://fonts.googleapis.com/css2?family=${formattedLink}&display=swap`;
	googleFont.rel = 'stylesheet';
	myHead.appendChild(googleFont);
	myBody[0].style.fontFamily = family;
}

class emuSettings {
	static get settings() {
		return mergeObject(
			this.defaultSettings, game.settings.get(moduleName, 'settings')
		);
	}

	static get defaultSettings() {
		return {
			borderRadiusDefault: '0',
			borderRadiusControls: '0',
			borderRadiusForms: '0',
			borderRadiusImages: '0',
			colorPrimary: '#e57509',
			colorBackground: '#293e40',
			colorBackgroundLightest: '#e6e9eb',
			colorBackgroundLight: '#7d8a8c',
			colorBackgroundDarkest: '#090e10',
			colorBackgroundButton: '#7d7d7d',
			colorBackgroundChatMessage: '#e6e9eb',
			colorBackgroundChatMessageWhisper: '#ecf1fc',
			colorBackgroundChatMessageBlind: '#ffecf0',
			colorBorder: '#213234',
			colorBorderLighter: '#a7b0b2',
			colorFolderHeader: '#a7b0b2',
			colorFolderDirectory: '#536466',
			colorFolderSubdirectory: '#d1d6d8',
			colorText: '#090e10',
			colorTextLightest: '#ffffff',
			colorTextDarker: '#293e40',
			fontFamily: 'Signika',
			imageBackground: 'none',
			imageBackgroundLightest: 'none',
			imageBackgroundLight: 'none',
			imageBackgroundDarkest: 'none',
			imageBackgroundControls: 'none',
			toggleLogo: true,
			toggleSceneThumbs: false,
			toggleCombatSidebar: false,
			pathFonts: `worlds/${game.world.name}/${moduleName}/fonts`,
			pathImages: `worlds/${game.world.name}/${moduleName}/images`
		};
	}
}

class emuForm extends FormApplication {
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			title: game.i18n.localize('emu.modal-title'),
			id: 'emu-settings',
			template: `modules/${moduleName}/templates/emu-settings.html`,
			width: 420,
			closeOnSubmit: true,
			tabs: [{
				navSelector: '.tabs',
				contentSelector: '.content',
				initial: 'colors'
			}]
		});
	}

	getData(options) {
		return mergeObject(
			{
				themePresetList: {
					'custom': game.i18n.localize('emu.theme-preset-custom'),
					'foundry': 'Foundry',
					'dark': game.i18n.localize('emu.theme-preset-dark'),
					'western': game.i18n.localize('emu.theme-preset-western')
				},
				fontFamilyList: {
					'Signika': 'Default',
					'Cairo': 'Cairo',
					'Fjalla One': 'Fjalla One',
					'Lato': 'Lato',
					'Lobster': 'Lobster',
					'Nunito': 'Nunito',
					'Open Sans': 'Open Sans',
					'Roboto': 'Roboto',
					'Roboto Condensed': 'Roboto Condensed',
					'Source Code Pro': 'Source Code Pro',
					'Source Sans Pro': 'Source Sans Pro',
					'Teko': 'Teko',
					'Titillium Web': 'Titillium Web'
				},
				imageBackgroundList: {
					'none': 'None',
					'denim': 'Denim',
					'denim065': 'Denim 065',
					'denim075': 'Denim 075',
					'denim090': 'Denim 090',
					'denim-dark': 'Denim Dark',
					'denim-light': 'Denim Light',
					'parchment': 'Parchment',
					'parchment-white': 'Parchment White'
				}
			},
			this.reset ? emuSettings.defaultSettings :
			mergeObject(
				emuSettings.defaultSettings,
				game.settings.get(moduleName, 'settings')
			)
		);
	}

	activateListeners(html) {
		super.activateListeners(html);
		this.getThemePreset();
		this.getFontFamily();
		html.find('select[name="themePreset"]').change(this.getThemePreset.bind(this));
		html.find('select[name="fontFamily"]').change(this.getFontFamily.bind(this));
		html.find('button[name="reset"]').click(this.onReset.bind(this));
		this.reset = false;
	}

	getThemePreset(formData) {
		if($('select[name="themePreset"]').val() === 'foundry') {
			for (const [key, value] of Object.entries(THEME.FOUNDRY)) { $(`input[name="${key}"]`).prop('value', value); }
		}

		if($('select[name="themePreset"]').val() === 'dark') {
			for (const [key, value] of Object.entries(THEME.DARK)) { $(`input[name="${key}"]`).prop('value', value); }
		}

		if($('select[name="themePreset"]').val() === 'western') {
			for (const [key, value] of Object.entries(THEME.WESTERN)) { $(`input[name="${key}"]`).prop('value', value); }
		}
	}

	getFontFamily(formData) {
		document.getElementById('emu-font-family').remove();
		setFontFamily($('select[name="fontFamily"]').val());
	}

	onReset() {
		this.reset = true;
		this.render();
	}

	_updateObject(event, formData) {
		return __awaiter(this, void 0, void 0, function* () {
			let settings = mergeObject(emuSettings.settings, formData, { insertKeys: false, insertValues: false });
			yield game.settings.set(moduleName, 'settings', settings);
			updateSettings(game.settings.get(moduleName, 'settings'));
		});
	}
}

Hooks.once('init', () => {
	// lets makes make this specificity stupid
	myBody[0].classList.add('emu');
	myBody[0].classList.add('e-body');
	myBody[0].setAttribute('id', 'emu');

	game.settings.registerMenu(moduleName, moduleName, {
		name: game.i18n.localize('emu.settings-name'),
		label: game.i18n.localize('emu.settings-label'),
		type: emuForm,
		restricted: true
	});

	game.settings.register(moduleName, 'settings', {
		name: game.i18n.localize('emu.settings-name'),
		scope: 'world',
		default: emuSettings.defaultSettings,
		type: Object,
		config: false
	});

	// checkForUploadFolders(`worlds/${game.world.name}`, moduleName);
	// checkForUploadFolders(`worlds/${game.world.name}/${moduleName}`, 'fonts');
	// checkForUploadFolders(`worlds/${game.world.name}/${moduleName}`, 'images');
});

Hooks.once('ready', () => {
	updateSettings(game.settings.get(moduleName, 'settings'));

	// Google Fonts
	let googleFontPre  = document.createElement('link');
	googleFontPre.rel  = 'preconnect';
	googleFontPre.href = 'https://fonts.gstatic.com';
	myHead.appendChild(googleFontPre);

	setFontFamily(game.settings.get(moduleName, 'settings').fontFamily);

	// Toggle
	game.settings.register(moduleName, 'togglePlayers', {
		name: game.i18n.localize('emu.toggle-players'),
		scope: 'user',
		config: true,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-emu-players') : myHtml[0].classList.remove('-emu-players');
		}
	});
	const togglePlayers = game.settings.get(moduleName, 'togglePlayers');
	togglePlayers ? myHtml[0].classList.add('-emu-players') : myHtml[0].classList.remove('-emu-players');

	// Layouts
	game.settings.register(moduleName, 'compactMode', {
		name: game.i18n.localize('emu.layout-compact'),
		scope: 'user',
		config: true,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-compact') : myHtml[0].classList.remove('-compact');
		}
	});
	const compactMode = game.settings.get(moduleName, 'compactMode');
	compactMode ? myHtml[0].classList.add('-compact') : myHtml[0].classList.remove('-compact');

	game.settings.register(moduleName, 'controlAlignTop', {
		name: game.i18n.localize('emu.layout-control-align'),
		hint: game.i18n.localize('emu.layout-control-align-hint'),
		scope: 'user',
		config: true,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-control-align-tops') : myHtml[0].classList.remove('-control-align-tops');
		}
	});
	const controlAlignTop = game.settings.get(moduleName, 'controlAlignTop');
	controlAlignTop ? myHtml[0].classList.add('-control-align-tops') : myHtml[0].classList.remove('-control-align-tops');

	// Check for other modules
	setTimeout(function() {
		document.getElementsByClassName('dice-tray').length >= 1 ? myHtml[0].classList.add('-emu-dice-tray-active') : myHtml[0].classList.remove('-emu-dice-tray-active');
	}, 1000);

	// Say Hello
	console.log('Ernie\'s Modern UI');
});
