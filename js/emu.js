import * as THEME from './emu-theme.js';
import * as FONTS from './emu-fonts.js';

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
		imageLogo,
		toggleLogo,
		toggleSceneThumbs,
		emuLayout
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
	borderRadiusDefault ? document.documentElement.style.setProperty('--emu-border-radius-default', `${borderRadiusDefault}px`) : document.documentElement.style.setProperty('--emu-border-radius-default', `0px`);
	borderRadiusControls ? document.documentElement.style.setProperty('--emu-border-radius-controls', `${borderRadiusControls}px`) : document.documentElement.style.setProperty('--emu-border-radius-controls', `0px`);
	borderRadiusForms ? document.documentElement.style.setProperty('--emu-border-radius-forms', `${borderRadiusForms}px`) : document.documentElement.style.setProperty('--emu-border-radius-forms', `0px`);
	borderRadiusImages ? document.documentElement.style.setProperty('--emu-border-radius-images', `${borderRadiusImages}px`) : document.documentElement.style.setProperty('--emu-border-radius-images', `0px`);
	imageBackground === '' ? document.documentElement.style.setProperty('--emu-image-background-controls', `none`) : document.documentElement.style.setProperty('--emu-image-background', `url(/${imageBackground})`);
	imageBackgroundLightest === '' ? document.documentElement.style.setProperty('--emu-image-background-controls', `none`) : document.documentElement.style.setProperty('--emu-image-background-lightest', `url('/${imageBackgroundLightest}')`);
	imageBackgroundLight === '' ? document.documentElement.style.setProperty('--emu-image-background-controls', `none`) : document.documentElement.style.setProperty('--emu-image-background-light', `url('/${imageBackgroundLight}')`);
	imageBackgroundDarkest === '' ? document.documentElement.style.setProperty('--emu-image-background-controls', `none`) : document.documentElement.style.setProperty('--emu-image-background-darkest', `url('/${imageBackgroundDarkest}')`);
	imageBackgroundControls === '' ? document.documentElement.style.setProperty('--emu-image-background-controls', `none`) : document.documentElement.style.setProperty('--emu-image-background-controls', `url('/${imageBackgroundControls}')`);
	imageLogo === '' ? null : document.getElementById('logo').setAttribute('src', `/${imageLogo}`);

	// Options
	toggleLogo ? myHtml[0].classList.remove('-emu-logo') : myHtml[0].classList.add('-emu-logo');
	toggleSceneThumbs ? myHtml[0].classList.add('-emu-scene-thumbs') : myHtml[0].classList.remove('-emu-scene-thumbs');
	emuLayout ? myHtml[0].classList.add('-emu-layout') : myHtml[0].classList.remove('-emu-layout');
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
			imageBackground: '',
			imageBackgroundLightest: '',
			imageBackgroundLight: '',
			imageBackgroundDarkest: '',
			imageBackgroundControls: '',
			imageLogo: '',
			toggleLogo: true,
			toggleSceneThumbs: true,
			emuLayout: true
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
				fontFamilyList: FONTS.GOOGLE_FONTS
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
	myBody[0].classList.add('-emu');

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
});

Hooks.once('ready', () => {
	updateSettings(game.settings.get(moduleName, 'settings'));

	// Google Fonts
	let googleFontPre  = document.createElement('link');
	googleFontPre.rel  = 'preconnect';
	googleFontPre.href = 'https://fonts.gstatic.com';
	myHead.appendChild(googleFontPre);

	// Layouts
	game.settings.register(moduleName, 'compactMode', {
		name: game.i18n.localize('emu.layout-compact'),
		scope: 'user',
		config: true,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-emu-compact') : myHtml[0].classList.remove('-emu-compact');
		}
	});
	const compactMode = game.settings.get(moduleName, 'compactMode');
	compactMode ? myHtml[0].classList.add('-emu-compact') : myHtml[0].classList.remove('-emu-compact');

	game.settings.register(moduleName, 'subtleLayout', {
		name: game.i18n.localize('emu.layout-subtle-layout'),
		scope: 'user',
		config: true,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-emu-subtle-layout') : myHtml[0].classList.remove('-emu-subtle-layout');
		}
	});
	const subtleLayout = game.settings.get(moduleName, 'subtleLayout');
	subtleLayout ? myHtml[0].classList.add('-emu-subtle-layout') : myHtml[0].classList.remove('-emu-subtle-layout');

	game.settings.register(moduleName, 'subtleLayoutOpacity', {
		name: game.i18n.localize('emu.layout-subtle-layout-opacity'),
		scope: 'user',
		config: true,
		default: 0.3,
		type: Number,
		range: {
			min: 0.01,
			max: 1,
			step: 0.01
		},
		onChange: data => {
			data ? document.documentElement.style.setProperty('--emu-subtle-opacity', `${data}`) : document.documentElement.style.setProperty('--emu-subtle-opacity', `0.3`);
		}
	});
	const subtleLayoutOpacity = game.settings.get(moduleName, 'subtleLayoutOpacity');
	subtleLayout ? document.documentElement.style.setProperty('--emu-subtle-opacity', `${subtleLayoutOpacity}`) : document.documentElement.style.setProperty('--emu-subtle-opacity', `0.3`);

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

	game.settings.register(moduleName, 'controlAlignTop', {
		name: game.i18n.localize('emu.layout-control-align'),
		hint: game.i18n.localize('emu.layout-control-align-hint'),
		scope: 'user',
		config: true,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-emu-control-align-top') : myHtml[0].classList.remove('-emu-control-align-top');
		}
	});
	const controlAlignTop = game.settings.get(moduleName, 'controlAlignTop');
	controlAlignTop ? myHtml[0].classList.add('-emu-control-align-top') : myHtml[0].classList.remove('-emu-control-align-top');

	// Check for other modules
	setTimeout(function() {
		document.getElementsByClassName('dice-tray').length >= 1 ? myHtml[0].classList.add('-emu-dice-tray-active') : myHtml[0].classList.remove('-emu-dice-tray-active');
		setFontFamily(game.settings.get(moduleName, 'settings').fontFamily);
	}, 2000);

	// Say Hello
	console.log('Ernie\'s Modern UI Active');
});
