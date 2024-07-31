import localFont from 'next/font/local';

export const font_body = localFont({
	src: [
		{
			path: '../../public/fonts/Satoshi-VariableItalic.ttf',
		},
		{
			path: '../../public/fonts/Satoshi-Variable.ttf',
		},
	],
	variable: '--font-body',
});

export const font_special = localFont({
	src: [
		{
			path: '../../public/fonts/Rosaline-Regular.otf',
		},
	],
	variable: '--font-special',
});
