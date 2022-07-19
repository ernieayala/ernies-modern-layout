import * as THEME from './emu-theme.js';
import * as FONTS from './emu-fonts.js';
import * as SYSTEMS from './emu-systems.js';

const myRoot = document.querySelector(':root');
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

// Get REM value
function toRem(value) {
	return value / 16;
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
		fontFamilyCustom,
		fontSizeMD,
		fontSizeLG,
		fontSizeXL,
		fontSizeXXL,
		fontSizeSM,
		fontSizeXS,
		fontSizeChatRoll,
		imageBackground,
		imageBackgroundLightest,
		imageBackgroundLight,
		imageBackgroundDarkest,
		imageBackgroundControls,
		backgroundOpacityButtonPrimary,
		backgroundOpacityHotbar,
		backgroundOpacityHud,
		backgroundOpacityPlayers,
		backgroundOpacitySceneControls,
		backgroundOpacitySceneNavigation,
		backgroundOpacitySidebar,
		backgroundOpacityWindow,
		backgroundOpacityWindowContent,
		imageLogo,
		toggleLogo,
		toggleSceneThumbs,
		emuLayout
	} = settings;

	// Options
	emuLayout ? myHtml[0].classList.add('-emu-layout') : myHtml[0].classList.remove('-emu-layout');
	toggleLogo ? myHtml[0].classList.remove('-emu-logo') : myHtml[0].classList.add('-emu-logo');
	toggleSceneThumbs ? myHtml[0].classList.add('-emu-scene-thumbs') : myHtml[0].classList.remove('-emu-scene-thumbs');

	// Theme
	colorPrimary ? myRoot.style.setProperty('--color-primary', convertHexToRgb(colorPrimary)) : null;
	colorBackground ? myRoot.style.setProperty('--color-background', convertHexToRgb(colorBackground)) : null;
	colorBackgroundLightest ? myRoot.style.setProperty('--color-background-lightest', convertHexToRgb(colorBackgroundLightest)) : null;
	colorBackgroundLight ? myRoot.style.setProperty('--color-background-light', convertHexToRgb(colorBackgroundLight)) : null;
	colorBackgroundDarkest ? myRoot.style.setProperty('--color-background-darkest', convertHexToRgb(colorBackgroundDarkest)) : null;
	colorBackgroundButton ? myRoot.style.setProperty('--color-background-button', convertHexToRgb(colorBackgroundButton)) : null;
	colorBackgroundChatMessage ? myRoot.style.setProperty('--color-background-chat-message', convertHexToRgb(colorBackgroundChatMessage)) : null;
	colorBackgroundChatMessageWhisper ? myRoot.style.setProperty('--color-background-chat-message-whisper', convertHexToRgb(colorBackgroundChatMessageWhisper)) : null;
	colorBackgroundChatMessageBlind ? myRoot.style.setProperty('--color-background-chat-message-blind', convertHexToRgb(colorBackgroundChatMessageBlind)) : null;
	colorBorder ? myRoot.style.setProperty('--color-border', convertHexToRgb(colorBorder)) : null;
	colorBorderLighter ? myRoot.style.setProperty('--color-border-lighter', convertHexToRgb(colorBorderLighter)) : null;
	colorFolderHeader ? myRoot.style.setProperty('--color-folder-header', convertHexToRgb(colorFolderHeader)) : null;
	colorFolderDirectory ? myRoot.style.setProperty('--color-folder-directory', convertHexToRgb(colorFolderDirectory)) : null;
	colorFolderSubdirectory ? myRoot.style.setProperty('--color-folder-subdirectory', convertHexToRgb(colorFolderSubdirectory)) : null;
	colorText ? myRoot.style.setProperty('--color-text', convertHexToRgb(colorText)) : null;
	colorTextLightest ? myRoot.style.setProperty('--color-text-lightest', convertHexToRgb(colorTextLightest)) : null;
	colorTextDarker ? myRoot.style.setProperty('--color-text-darker', convertHexToRgb(colorTextDarker)) : null;

	// Design
	borderRadiusDefault ? myRoot.style.setProperty('--emu-border-radius-default', `${borderRadiusDefault}px`) : myRoot.style.setProperty('--emu-border-radius-default', `0px`);
	borderRadiusControls ? myRoot.style.setProperty('--emu-border-radius-controls', `${borderRadiusControls}px`) : myRoot.style.setProperty('--emu-border-radius-controls', `0px`);
	borderRadiusForms ? myRoot.style.setProperty('--emu-border-radius-forms', `${borderRadiusForms}px`) : myRoot.style.setProperty('--emu-border-radius-forms', `0px`);
	borderRadiusImages ? myRoot.style.setProperty('--emu-border-radius-images', `${borderRadiusImages}px`) : myRoot.style.setProperty('--emu-border-radius-images', `0px`);

	// Font Size
	fontSizeMD ? myRoot.style.setProperty('--emu-font-size-md', `${toRem(fontSizeMD)}rem`) : myRoot.style.setProperty('--emu-font-size-md', `${toRem(14)}rem`);
	fontSizeLG ? myRoot.style.setProperty('--emu-font-size-lg', `${toRem(fontSizeLG)}rem`) : myRoot.style.setProperty('--emu-font-size-lg', `${toRem(16)}rem`);
	fontSizeXL ? myRoot.style.setProperty('--emu-font-size-xl', `${toRem(fontSizeXL)}rem`) : myRoot.style.setProperty('--emu-font-size-xl', `${toRem(20)}rem`);
	fontSizeXXL ? myRoot.style.setProperty('--emu-font-size-xxl', `${toRem(fontSizeXXL)}rem`) : myRoot.style.setProperty('--emu-font-size-xxl', `${toRem(24)}rem`);
	fontSizeSM ? myRoot.style.setProperty('--emu-font-size-sm', `${toRem(fontSizeSM)}rem`) : myRoot.style.setProperty('--emu-font-size-sm', `${toRem(12)}rem`);
	fontSizeXS ? myRoot.style.setProperty('--emu-font-size-xs', `${toRem(fontSizeXS)}rem`) : myRoot.style.setProperty('--emu-font-size-xs', `${toRem(10)}rem`);
	fontSizeChatRoll ? myRoot.style.setProperty('--emu-font-size-chat-roll', `${toRem(fontSizeChatRoll)}rem`) : myRoot.style.setProperty('--emu-font-size-chat-roll', `${toRem(18)}rem`);

	// Backgrounds
	if(imageBackground != 'none' || imageBackground == null) {
		imageBackground === '' ? myRoot.style.setProperty('--emu-image-background', `none`) : myRoot.style.setProperty('--emu-image-background', `url('/${imageBackground})`);
	}

	if(imageBackgroundLightest != 'none' || imageBackgroundLightest == null) {
		imageBackgroundLightest === '' ? myRoot.style.setProperty('--emu-image-background-lightest', `none`) : myRoot.style.setProperty('--emu-image-background-lightest', `url('/${imageBackgroundLightest}')`);
	}

	if(imageBackgroundLight != 'none' || imageBackgroundLight == null) {
		imageBackgroundLight === '' ? myRoot.style.setProperty('--emu-image-background-light', `none`) : myRoot.style.setProperty('--emu-image-background-light', `url('/${imageBackgroundLight}')`);
	}

	if(imageBackgroundDarkest != 'none' || imageBackgroundDarkest == null) {
		imageBackgroundDarkest === '' ? myRoot.style.setProperty('--emu-image-background-darkest', `none`) : myRoot.style.setProperty('--emu-image-background-darkest', `url('/${imageBackgroundDarkest}')`);
	}

	if(imageBackgroundControls != 'none' || imageBackgroundControls == null) {
		imageBackgroundControls === '' ? myRoot.style.setProperty('--emu-image-background-controls', `none`) : myRoot.style.setProperty('--emu-image-background-controls', `url('/${imageBackgroundControls}')`);
	}

	if(imageLogo != 'none' || imageLogo == null) {
		imageLogo === '' ? null : document.getElementById('logo').setAttribute('src', `/${imageLogo}`);
	}

	// Background Color Opacity
	backgroundOpacityButtonPrimary ? myRoot.style.setProperty('--emu-background-opacity-button-primary', `${backgroundOpacityButtonPrimary}`) : myRoot.style.setProperty('--emu-background-opacity-button-primary', `1`);
	backgroundOpacityHotbar ? myRoot.style.setProperty('--emu-background-opacity-hotbar', `${backgroundOpacityHotbar}`) : myRoot.style.setProperty('--emu-background-opacity-hotbar', `0.8`);
	backgroundOpacityHud ? myRoot.style.setProperty('--emu-background-opacity-hud', `${backgroundOpacityHud}`) : myRoot.style.setProperty('--emu-background-opacity-hud', `0.8`);
	backgroundOpacityPlayers ? myRoot.style.setProperty('--emu-background-opacity-players', `${backgroundOpacityPlayers}`) : myRoot.style.setProperty('--emu-background-opacity-players', `0.8`);
	backgroundOpacitySceneControls ? myRoot.style.setProperty('--emu-background-opacity-scene-control', `${backgroundOpacitySceneControls}`) : myRoot.style.setProperty('--emu-background-opacity-scene-control', `0.8`);
	backgroundOpacitySceneNavigation ? myRoot.style.setProperty('--emu-background-opacity-scene-navigation', `${backgroundOpacitySceneNavigation}`) : myRoot.style.setProperty('--emu-background-opacity-scene-navigation', `0.8`);
	backgroundOpacitySidebar ? myRoot.style.setProperty('--emu-background-opacity-sidebar', `${backgroundOpacitySidebar}`) : myRoot.style.setProperty('--emu-background-opacity-sidebar', `0.8`);
	backgroundOpacityWindow ? myRoot.style.setProperty('--emu-background-opacity-window', `${backgroundOpacityWindow}`) : myRoot.style.setProperty('--emu-background-opacity-window', `1`);
	backgroundOpacityWindowContent ? myRoot.style.setProperty('--emu-background-opacity-window-content', `${backgroundOpacityWindowContent}`) : myRoot.style.setProperty('--emu-background-opacity-window-content', `1`);
}

function setFontFamily(family) {
	if (typeof family != 'string') {
		return;
	}

	let cleanString = family.replaceAll('+', ' ');
	let formattedLink = family.replaceAll(' ', '+');
	let googleFont  = document.createElement('link');
	googleFont.id = 'emu-font-family';
	googleFont.rel = 'stylesheet';
	googleFont.type = 'text/css';
	googleFont.media = 'all';
	googleFont.href = `https://fonts.googleapis.com/css2?family=${formattedLink}&display=swap`;
	myHead.appendChild(googleFont);
	myBody[0].style.fontFamily = cleanString;
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
			fontFamilyCustom: '',
			fontSizeMD: 14,
			fontSizeLG: 16,
			fontSizeXL: 20,
			fontSizeXXL: 24,
			fontSizeSM: 12,
			fontSizeXS: 10,
			fontSizeChatRoll: 18,
			imageBackground: '',
			imageBackgroundLightest: '',
			imageBackgroundLight: '',
			imageBackgroundDarkest: '',
			imageBackgroundControls: '',
			backgroundOpacityButtonPrimary: 1,
			backgroundOpacityHotbar: 0.8,
			backgroundOpacityHud: 0.8,
			backgroundOpacityPlayers: 0.8,
			backgroundOpacitySceneControls: 0.8,
			backgroundOpacitySceneNavigation: 0.8,
			backgroundOpacitySidebar: 0.8,
			backgroundOpacityWindow: 1,
			backgroundOpacityWindowContent: 1,
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
					'western': game.i18n.localize('emu.theme-preset-western'),
					'alien': game.i18n.localize('emu.theme-preset-alien')
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

		if($('select[name="themePreset"]').val() === 'alien') {
			for (const [key, value] of Object.entries(THEME.ALIEN)) { $(`input[name="${key}"]`).prop('value', value); }
		}
	}

	getFontFamily(formData) {
		if(document.getElementById('emu-font-family')){
			document.getElementById('emu-font-family').remove();
		}
		const _fontFamilyCustom = game.settings.get(moduleName, 'settings').fontFamilyCustom;
		_fontFamilyCustom != '' ? setFontFamily(_fontFamilyCustom) : setFontFamily($('select[name="fontFamily"]').val());
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

	// Status of Ernie's Layout
	const emuLayoutStatus = game.settings.get(moduleName, 'settings').emuLayout;

	// Layouts
	game.settings.register(moduleName, 'compactMode', {
		name: game.i18n.localize('emu.layout-compact'),
		scope: 'user',
		config: emuLayoutStatus,
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
		config: emuLayoutStatus,
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
		config: emuLayoutStatus,
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
	subtleLayoutOpacity ? document.documentElement.style.setProperty('--emu-subtle-opacity', `${subtleLayoutOpacity}`) : document.documentElement.style.setProperty('--emu-subtle-opacity', `0.3`);

	game.settings.register(moduleName, 'subtleLayoutLockSidebar', {
		name: game.i18n.localize('emu.layout-subtle-layout-sidebar-locked'),
		scope: 'user',
		config: emuLayoutStatus,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-emu-subtle-layout-sidebar-locked') : myHtml[0].classList.remove('-emu-subtle-layout-sidebar-locked');
		}
	});
	const subtleLayoutLockSidebar = game.settings.get(moduleName, 'subtleLayoutLockSidebar');
	subtleLayoutLockSidebar ? myHtml[0].classList.add('-emu-subtle-layout-sidebar-locked') : myHtml[0].classList.remove('-emu-subtle-layout-sidebar-locked');

	// Toggle
	game.settings.register(moduleName, 'togglePlayers', {
		name: game.i18n.localize('emu.toggle-players'),
		scope: 'user',
		config: emuLayoutStatus,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-emu-players') : myHtml[0].classList.remove('-emu-players');
		}
	});
	const togglePlayers = game.settings.get(moduleName, 'togglePlayers');
	togglePlayers ? myHtml[0].classList.add('-emu-players') : myHtml[0].classList.remove('-emu-players');

	// game.settings.register(moduleName, 'controlAlignTop', {
	// 	name: game.i18n.localize('emu.layout-control-align'),
	// 	hint: game.i18n.localize('emu.layout-control-align-hint'),
	// 	scope: 'user',
	// 	config: emuLayoutStatus,
	// 	default: false,
	// 	type: Boolean,
	// 	onChange: data => {
	// 		data === true ? myHtml[0].classList.add('-emu-control-align-top') : myHtml[0].classList.remove('-emu-control-align-top');
	// 	}
	// });
	// const controlAlignTop = game.settings.get(moduleName, 'controlAlignTop');
	// controlAlignTop ? myHtml[0].classList.add('-emu-control-align-top') : myHtml[0].classList.remove('-emu-control-align-top');

	// Timeout because i'm bad at javascript
	setTimeout(function() {
		// Set Font Family
		const _fontFamilyCustom = game.settings.get(moduleName, 'settings').fontFamilyCustom;
		_fontFamilyCustom != '' ? setFontFamily(_fontFamilyCustom) : setFontFamily(game.settings.get(moduleName, 'settings').fontFamily);

		// Sidebar Lock
		addLockElement();
	}, 1000);

	// Sidebar Lock Element
	function addLockElement () {
		const lockElement = document.createElement('div');
		lockElement.setAttribute('id', 'emu-sidebar-lock');

		const sideBarElement = document.getElementById('sidebar');
		sideBarElement.appendChild(lockElement);

		lockElement.onclick = function(){
			sideBarElement.classList.toggle('is-locked');
		};
	}

	// Apply System Sheets
	const currentSystem = game.system.id;
	if(SYSTEMS.SYSTEM.includes(currentSystem)) {
		const systemCSS = document.createElement('link');
		systemCSS.rel = 'stylesheet';
		systemCSS.type = 'text/css';
		systemCSS.href = `modules/${moduleName}/css/system-compatibility/${currentSystem}.css`;
		document.head.appendChild(systemCSS);
	}

	// Say Hello
	console.log('Ernie\'s Modern UI Active');
});
