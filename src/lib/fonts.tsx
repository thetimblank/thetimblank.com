import localFont from 'next/font/local';

export const font_body = localFont({
    src: [
        {
            style: 'italic',
            path: '../../public/fonts/Satoshi-VariableItalic.ttf',
        },
        {
            style: 'normal',
            path: '../../public/fonts/Satoshi-Variable.ttf',
        },
    ],
    variable: '--font-body',
});

export const font_title = localFont({
    src: [
        {
            path: '../../public/fonts/Manrope-Variable.ttf',
        },
    ],

    variable: '--font-title',
});

export const font_accent = localFont({
    src: [
        {
            style: 'italic',
            path: '../../public/fonts/Zodiak-VariableItalic.ttf',
        },
        {
            style: 'normal',
            path: '../../public/fonts/Zodiak-Variable.ttf',
        },
    ],

    variable: '--font-accent',
});
