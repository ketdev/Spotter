import {DarkTheme} from 'react-native-paper';

// Customize Nagivator Theme
export const NavigatorTheme = {
	dark: true,
	colors: {
		primary: '#BB86FC',
		background: '#121212',
		card: '#000000',
		text: 'white',
		border: '#303030',
	},
};

// Customize Paper Theme
export const PaperTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
    }
};