import { DarkTheme } from 'react-native-paper';
import { processColor } from 'react-native';
import color from 'color';

export const COLOR_BACKGROUND = '#000000';
export const COLOR_SURFACE = '#000000';
export const COLOR_SURFACE_TOP = '#171717';
export const COLOR_PRIMARY = '#ff6464';
export const COLOR_TEXT = '#ffffff';
export const COLOR_BORDER = '#272727';

export const COLOR_INACTIVE = '#808080';

// Customize Nagivator Theme
export const NavigatorTheme = {
	dark: true,
	colors: {
		primary: COLOR_PRIMARY,
		background: COLOR_BACKGROUND,
		card: COLOR_SURFACE_TOP,
		text: COLOR_TEXT,
		border: COLOR_BORDER,
	},
};

// Customize Paper Theme
export const PaperTheme = {
	...DarkTheme,
	dark: true,
	mode: 'adaptive', // exact
	colors: {
		...DarkTheme.colors,
		primary: COLOR_PRIMARY,
		accent: '#03dac6',
		background: COLOR_BACKGROUND,
		surface: COLOR_SURFACE,
		error: '#CF6679',
		onBackground: '#FFFFFF',
		onSurface: '#FFFFFF',
		text: COLOR_TEXT,
		disabled: color(COLOR_TEXT)
			.alpha(0.38)
			.rgb()
			.string(),
		placeholder: color(COLOR_TEXT)
			.alpha(0.54)
			.rgb()
			.string(),
		backdrop: color('black')
			.alpha(0.5)
			.rgb()
			.string(),
		notification: '#ff80ab',
	},
};
