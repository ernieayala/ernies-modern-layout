import * as THEME from './emu-theme.js';
import * as FONTS from './emu-fonts.js';
import * as SYSTEMS from './emu-systems.js';
import * as MODULES from './emu-modules.js';

const myRoot = document.querySelector(':root');
const myHtml = document.getElementsByTagName('html');
const myHead = document.getElementsByTagName('head')[0];
const myBody = document.getElementsByTagName('body');
const moduleName = 'ernies-modern-layout';

let importedTheme;

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
		colorPrimaryDarker,
		colorPrimaryDarkest,
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
		spacingBase,
		spacingLG,
		spacingMD,
		spacingSM,
		spacingXL,
		spacingXS,
		sizingButton,
		sizingButtonLG,
		sizingButtonSM,
		sizingButtonXL,
		sizingButtonXS,
		sizingSidebar,
		imageBackground,
		imageBackgroundLightest,
		imageBackgroundLight,
		imageBackgroundDarkest,
		imageBackgroundControls,
		backgroundOpacityButtonPrimary,
		backgroundOpacityFormField,
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
	colorPrimary ? myRoot.style.setProperty('--emu-color-primary', convertHexToRgb(colorPrimary)) : null;
	colorPrimaryDarker ? myRoot.style.setProperty('--emu-color-primary-darker', convertHexToRgb(colorPrimaryDarker)) : null;
	colorPrimaryDarkest ? myRoot.style.setProperty('--emu-color-primary-darkest', convertHexToRgb(colorPrimaryDarkest)) : null;
	colorBackground ? myRoot.style.setProperty('--emu-color-background', convertHexToRgb(colorBackground)) : null;
	colorBackgroundLightest ? myRoot.style.setProperty('--emu-color-background-lightest', convertHexToRgb(colorBackgroundLightest)) : null;
	colorBackgroundLight ? myRoot.style.setProperty('--emu-color-background-light', convertHexToRgb(colorBackgroundLight)) : null;
	colorBackgroundDarkest ? myRoot.style.setProperty('--emu-color-background-darkest', convertHexToRgb(colorBackgroundDarkest)) : null;
	colorBackgroundButton ? myRoot.style.setProperty('--emu-color-background-button', convertHexToRgb(colorBackgroundButton)) : null;
	colorBackgroundChatMessage ? myRoot.style.setProperty('--emu-color-background-chat-message', convertHexToRgb(colorBackgroundChatMessage)) : null;
	colorBackgroundChatMessageWhisper ? myRoot.style.setProperty('--emu-color-background-chat-message-whisper', convertHexToRgb(colorBackgroundChatMessageWhisper)) : null;
	colorBackgroundChatMessageBlind ? myRoot.style.setProperty('--emu-color-background-chat-message-blind', convertHexToRgb(colorBackgroundChatMessageBlind)) : null;
	colorBorder ? myRoot.style.setProperty('--emu-color-border', convertHexToRgb(colorBorder)) : null;
	colorBorderLighter ? myRoot.style.setProperty('--emu-color-border-lighter', convertHexToRgb(colorBorderLighter)) : null;
	colorFolderHeader ? myRoot.style.setProperty('--emu-color-folder-header', convertHexToRgb(colorFolderHeader)) : null;
	colorFolderDirectory ? myRoot.style.setProperty('--emu-color-folder-directory', convertHexToRgb(colorFolderDirectory)) : null;
	colorFolderSubdirectory ? myRoot.style.setProperty('--emu-color-folder-subdirectory', convertHexToRgb(colorFolderSubdirectory)) : null;
	colorText ? myRoot.style.setProperty('--emu-color-text', convertHexToRgb(colorText)) : null;
	colorTextLightest ? myRoot.style.setProperty('--emu-color-text-lightest', convertHexToRgb(colorTextLightest)) : null;
	colorTextDarker ? myRoot.style.setProperty('--emu-color-text-darker', convertHexToRgb(colorTextDarker)) : null;

	// Design
	borderRadiusDefault ? myRoot.style.setProperty('--emu-border-radius-default', `${borderRadiusDefault}px`) : myRoot.style.setProperty('--emu-border-radius-default', `0`);
	borderRadiusControls ? myRoot.style.setProperty('--emu-border-radius-controls', `${borderRadiusControls}px`) : myRoot.style.setProperty('--emu-border-radius-controls', `0`);
	borderRadiusForms ? myRoot.style.setProperty('--emu-border-radius-forms', `${borderRadiusForms}px`) : myRoot.style.setProperty('--emu-border-radius-forms', `0`);
	borderRadiusImages ? myRoot.style.setProperty('--emu-border-radius-images', `${borderRadiusImages}px`) : myRoot.style.setProperty('--emu-border-radius-images', `0`);

	// Font Size
	fontSizeMD ? myRoot.style.setProperty('--emu-font-size-md', `${fontSizeMD}px`) : myRoot.style.setProperty('--emu-font-size-md', `${14}px`);
	fontSizeLG ? myRoot.style.setProperty('--emu-font-size-lg', `${fontSizeLG}px`) : myRoot.style.setProperty('--emu-font-size-lg', `${16}px`);
	fontSizeXL ? myRoot.style.setProperty('--emu-font-size-xl', `${fontSizeXL}px`) : myRoot.style.setProperty('--emu-font-size-xl', `${20}px`);
	fontSizeXXL ? myRoot.style.setProperty('--emu-font-size-xxl', `${fontSizeXXL}px`) : myRoot.style.setProperty('--emu-font-size-xxl', `${24}px`);
	fontSizeSM ? myRoot.style.setProperty('--emu-font-size-sm', `${fontSizeSM}px`) : myRoot.style.setProperty('--emu-font-size-sm', `${12}px`);
	fontSizeXS ? myRoot.style.setProperty('--emu-font-size-xs', `${fontSizeXS}px`) : myRoot.style.setProperty('--emu-font-size-xs', `${10}px`);
	fontSizeChatRoll ? myRoot.style.setProperty('--emu-font-size-chat-roll', `${fontSizeChatRoll}px`) : myRoot.style.setProperty('--emu-font-size-chat-roll', `${18}px`);

	// Spacing
	spacingBase ? myRoot.style.setProperty('--emu-space-base', `${spacingBase}px`) : myRoot.style.setProperty('--emu-space-base', `${4}px`);
	spacingLG ? myRoot.style.setProperty('--emu-space-lg', `${spacingLG}px`) : myRoot.style.setProperty('--emu-space-lg', `${32}px`);
	spacingMD ? myRoot.style.setProperty('--emu-space-md', `${spacingMD}px`) : myRoot.style.setProperty('--emu-space-md', `${16}px`);
	spacingSM ? myRoot.style.setProperty('--emu-space-sm', `${spacingSM}px`) : myRoot.style.setProperty('--emu-space-sm', `${8}px`);
	spacingXL ? myRoot.style.setProperty('--emu-space-xl', `${spacingXL}px`) : myRoot.style.setProperty('--emu-space-xl', `${24}px`);
	spacingXS ? myRoot.style.setProperty('--emu-space-xs', `${spacingXS}px`) : myRoot.style.setProperty('--emu-space-xs', `${2}px`);

	// Sizing
	sizingButton ? myRoot.style.setProperty('--emu-space-button', `${sizingButton}px`) : myRoot.style.setProperty('--emu-space-button', `${32}px`);
	sizingButtonLG ? myRoot.style.setProperty('--emu-space-button-lg', `${sizingButtonLG}px`) : myRoot.style.setProperty('--emu-space-button-lg', `${40}px`);
	sizingButtonSM ? myRoot.style.setProperty('--emu-space-button-sm', `${sizingButtonSM}px`) : myRoot.style.setProperty('--emu-space-button-sm', `${24}px`);
	sizingButtonXL ? myRoot.style.setProperty('--emu-space-button-xl', `${sizingButtonXL}px`) : myRoot.style.setProperty('--emu-space-button-xl', `${56}px`);
	sizingButtonXS ? myRoot.style.setProperty('--emu-space-button-xs', `${sizingButtonXS}px`) : myRoot.style.setProperty('--emu-space-button-xs', `${20}px`);
	sizingSidebar ? myRoot.style.setProperty('--emu-space-sidebar', `${sizingSidebar}px`) : myRoot.style.setProperty('--emu-space-sidebar', `${320}px`);

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
	backgroundOpacityFormField ? myRoot.style.setProperty('--emu-background-opacity-form-field', `${backgroundOpacityFormField}`) : myRoot.style.setProperty('--emu-background-opacity-form-field', `1`);
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
			borderRadiusDefault: '4',
			borderRadiusControls: '4',
			borderRadiusForms: '4',
			borderRadiusImages: '4',
			colorPrimary: '#e57509',
			colorPrimaryDarker: '#a05108',
			colorPrimaryDarkest: '#723906',
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
			spacingBase: 4,
			spacingLG: 24,
			spacingMD: 16,
			spacingSM: 8,
			spacingXL: 32,
			spacingXS: 2,
			sizingButton: 32,
			sizingButtonLG: 40,
			sizingButtonSM: 24,
			sizingButtonXL: 56,
			sizingButtonXS: 20,
			sizingSidebar: 320,
			fontSizeChatRoll: 18,
			imageBackground: '',
			imageBackgroundLightest: '',
			imageBackgroundLight: '',
			imageBackgroundDarkest: '',
			imageBackgroundControls: '',
			backgroundOpacityButtonPrimary: 1,
			backgroundOpacityFormField: 1,
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
					'alien': game.i18n.localize('emu.theme-preset-alien'),
					'cyberpunk': game.i18n.localize('emu.theme-preset-cyberpunk'),
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
		html.find('button[name="export-theme"]').click(this.exportTheme.bind(this));
		html.find('button[name="import-theme"]').click(this.importTheme.bind(this, html));
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

		if($('select[name="themePreset"]').val() === 'cyberpunk') {
			for (const [key, value] of Object.entries(THEME.CYBERPUNK)) { $(`input[name="${key}"]`).prop('value', value); }
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

	exportTheme() {
		const currentSettings = game.settings.get(moduleName, 'settings');
		let theme = JSON.stringify(currentSettings);
		saveDataToFile(theme, 'application/json', 'ernieTheme.json');
	}

	importTheme(html) {
		const input = $('<input type="file">');
		input.on('change', function(e) {
			const file = this.files[0];
			if (!file) {
				return;
			}

			readTextFromFile(file).then(async (result) => {
				try {
					importedTheme = JSON.parse(result);

					for (const [key, value] of Object.entries(importedTheme)) {
						$(`input[name="${key}"]`).prop('value', value);
					}

					return __awaiter(this, void 0, void 0, function* () {
						let settings = mergeObject(emuSettings.settings, importedTheme, { insertKeys: false, insertValues: false });
						yield game.settings.set(moduleName, 'settings', settings);
						updateSettings(game.settings.get(moduleName, 'settings'));
					});
				} catch (e) {
					console.log(e);
				}
			});
		});
		input.trigger('click');
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

	const overlay = document.createElement('div');
	overlay.style.cssText += 'position: absolute;top:0;left:0;right:0;bottom:0;z-index:1000;background:black;transition: all ease-out 1s;opacity:1;';
	overlay.setAttribute('id','emu-overlay');
	document.body.appendChild(overlay);
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

	game.settings.register(moduleName, 'compactMode', {
		name: game.i18n.localize('emu.layout-compact'),
		hint: game.i18n.localize('emu.layout-compact-hint'),
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

	game.settings.register(moduleName, 'compactModeUILeft', {
		name: game.i18n.localize('emu.layout-compact-ui-left'),
		hint: game.i18n.localize('emu.layout-compact-ui-left-hint'),
		scope: 'user',
		config: emuLayoutStatus,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-emu-compact-ui-left') : myHtml[0].classList.remove('-emu-compact-ui-left');
		}
	});
	const compactModeUILeft = game.settings.get(moduleName, 'compactModeUILeft');
	compactModeUILeft ? myHtml[0].classList.add('-emu-compact-ui-left') : myHtml[0].classList.remove('-emu-compact-ui-left');

	game.settings.register(moduleName, 'compactModeUIRight', {
		name: game.i18n.localize('emu.layout-compact-ui-right'),
		hint: game.i18n.localize('emu.layout-compact-ui-right-hint'),
		scope: 'user',
		config: emuLayoutStatus,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-emu-compact-ui-right') : myHtml[0].classList.remove('-emu-compact-ui-right');
		}
	});
	const compactModeUIRight = game.settings.get(moduleName, 'compactModeUIRight');
	compactModeUIRight ? myHtml[0].classList.add('-emu-compact-ui-right') : myHtml[0].classList.remove('-emu-compact-ui-right');

	game.settings.register(moduleName, 'compactModeUITop', {
		name: game.i18n.localize('emu.layout-compact-ui-top'),
		hint: game.i18n.localize('emu.layout-compact-ui-top-hint'),
		scope: 'user',
		config: emuLayoutStatus,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-emu-compact-ui-top') : myHtml[0].classList.remove('-emu-compact-ui-top');
		}
	});
	const compactModeUITop = game.settings.get(moduleName, 'compactModeUITop');
	compactModeUITop ? myHtml[0].classList.add('-emu-compact-ui-top') : myHtml[0].classList.remove('-emu-compact-ui-top');

	game.settings.register(moduleName, 'compactModeUIBottom', {
		name: game.i18n.localize('emu.layout-compact-ui-bottom'),
		hint: game.i18n.localize('emu.layout-compact-ui-bottom-hint'),
		scope: 'user',
		config: emuLayoutStatus,
		default: false,
		type: Boolean,
		onChange: data => {
			data === true ? myHtml[0].classList.add('-emu-compact-ui-bottom') : myHtml[0].classList.remove('-emu-compact-ui-bottom');
		}
	});
	const compactModeUIBottom = game.settings.get(moduleName, 'compactModeUIBottom');
	compactModeUIBottom ? myHtml[0].classList.add('-emu-compact-ui-bottom') : myHtml[0].classList.remove('-emu-compact-ui-bottom');

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

	// Apply Module Sheets
	const currentModules = game.modules;
	console.log(currentModules);
	currentModules.forEach((mod) => {
		const moduleID = mod.id;
		if(mod.active === true && MODULES.MODULE.includes(moduleID)) {
			const moduleCSS = document.createElement('link');
			moduleCSS.rel = 'stylesheet';
			moduleCSS.type = 'text/css';
			moduleCSS.href = `modules/${moduleName}/css/module-compatibility/${moduleID}.css`;
			document.head.appendChild(moduleCSS);
		}
	});

	// Say Hello
	console.log('%cErnie\'s Modern UI Active', 'color: #ff0055;');

	const overlay = document.getElementById('emu-overlay');
	overlay.classList.add('-hide');
});

Hooks.on('renderActorSheet', (app, html) => {
	const sheet = html.find('id').prevObject[0];
	sheet.classList.add('-emu-clean-sheet');
});

Hooks.on('renderItemSheet', (app, html) => {
	const sheet = html.find('id').prevObject[0];
	sheet.classList.add('-emu-clean-sheet');
});
