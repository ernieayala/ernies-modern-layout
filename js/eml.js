const myHtml = document.getElementsByTagName('html');
const myBody = document.getElementsByTagName('body');
const moduleName = 'ernies-modern-layout';

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
			function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
			function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
			step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
};

// Hex to RGB functio
function convertHexToRgb(color){
	const hex = color.replace('#','');
	const r = parseInt(hex.substring(0,2), 16);
	const g = parseInt(hex.substring(2,4), 16);
	const b = parseInt(hex.substring(4,6), 16);
	return `${r}, ${g}, ${b}`;
}

function updateSettings(settings) {
	const {
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

	// Visual
	toggleLogo ? myHtml[0].classList.remove('-emu-logo') : myHtml[0].classList.add('-emu-logo');
	toggleSceneThumbs ? myHtml[0].classList.add('-emu-scene-thumbs') : myHtml[0].classList.remove('-emu-scene-thumbs');
	toggleCombatSidebar ? myHtml[0].classList.remove('-emu-sidebar-combat') : myHtml[0].classList.add('-emu-sidebar-combat');
}

class emuSettings {
	static get settings() {
		return mergeObject(
			this.defaultSettings, game.settings.get(moduleName, 'settings')
		);
	}

	static get defaultSettings() {
		return {
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
			toggleLogo: true,
			toggleSceneThumbs: false,
			toggleCombatSidebar: false
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
			closeOnSubmit: true
		});
	}

	getData(options) {
		return mergeObject(
			{},
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
		html.find('select[name="themePreset"]').change(this.getThemePreset.bind(this));
		html.find('button[name="reset"]').click(this.onReset.bind(this));
		this.reset = false;
	}

	getThemePreset(formData) {
		if($('select[name="themePreset"]').val() === 'dark') {
			$('input[name="colorPrimary"]').prop('value', '#111a1c');
			$('input[name="colorBackground"]').prop('value', '#2e2e2e');
			$('input[name="colorBackgroundLightest"]').prop('value', '#666666');
			$('input[name="colorBackgroundLight"]').prop('value', '#4a4a4a');
			$('input[name="colorBackgroundDarkest"]').prop('value', '#151515');
			$('input[name="colorBackgroundButton"]').prop('value', '#111a1c');
			$('input[name="colorBackgroundChatMessage"]').prop('value', '#666666');
			$('input[name="colorBackgroundChatMessageWhisper"]').prop('value', '#193366');
			$('input[name="colorBackgroundChatMessageBlind"]').prop('value', '#b01030');
			$('input[name="colorBorder"]').prop('value', '#4a4a4a');
			$('input[name="colorBorderLighter"]').prop('value', '#7d7d7d');
			$('input[name="colorFolderHeader"]').prop('value', '#4a4a4a');
			$('input[name="colorFolderDirectory"]').prop('value', '#151515');
			$('input[name="colorFolderSubdirectory"]').prop('value', '#7d7d7d');
			$('input[name="colorText"]').prop('value', '#f1f1f1');
			$('input[name="colorTextLightest"]').prop('value', '#fafafa');
			$('input[name="colorTextDarker"]').prop('value', '#cbcbcb');
		}

		if($('select[name="themePreset"]').val() === 'foundry') {
			$('input[name="colorPrimary"]').prop('value', '#e57509');
			$('input[name="colorBackground"]').prop('value', '#293e40');
			$('input[name="colorBackgroundLightest"]').prop('value', '#e6e9eb');
			$('input[name="colorBackgroundLight"]').prop('value', '#7d8a8c');
			$('input[name="colorBackgroundDarkest"]').prop('value', '#090e10');
			$('input[name="colorBackgroundButton"]').prop('value', '#7d7d7d');
			$('input[name="colorBackgroundChatMessage"]').prop('value', '#e6e9eb');
			$('input[name="colorBackgroundChatMessageWhisper"]').prop('value', '#ecf1fc');
			$('input[name="colorBackgroundChatMessageBlind"]').prop('value', '#ffecf0');
			$('input[name="colorBorder"]').prop('value', '#213234');
			$('input[name="colorBorderLighter"]').prop('value', '#a7b0b2');
			$('input[name="colorFolderHeader"]').prop('value', '#a7b0b2');
			$('input[name="colorFolderDirectory"]').prop('value', '#536466');
			$('input[name="colorFolderSubdirectory"]').prop('value', '#d1d6d8');
			$('input[name="colorText"]').prop('value', '#090e10');
			$('input[name="colorTextLightest"]').prop('value', '#ffffff');
			$('input[name="colorTextDarker"]').prop('value', '#293e40');
		}
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
});

Hooks.once('ready', () => {
	updateSettings(game.settings.get(moduleName, 'settings'));

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
