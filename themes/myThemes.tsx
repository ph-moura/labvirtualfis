import { ThemeProvider, DefaultTheme } from 'styled-components'

const myBlueOne = '#0095B6';
const myBlue = '#3C79A6';
const myYellow = '#F2CA52';

const primary = '#74818C';
const secondary = '#101C26';
const tertiary = '#00a5c6';
const quaternary = '#25363d';
const bgMyDark = '#234';
const font = '#89a';

const primaryTest = '#4C5958';
const secondaryTest = '#ABCDEF';

const primaryLight = '#9ab';
const secondaryLight = '#cde';
const tertiaryLight = '#005576';
const quaternaryLight = '#25363d';
const bgLight = '#def';
const fontLight = '#101C26';

const primaryDark = '#9ab';
const secondaryDark = '#2d5d7b';
const tertiaryDark = '#33628a';
const quaternaryDark = '#25363d';
const bgDark = '#0f172a';
const fontDark = '#def';

const defaultTheme: DefaultTheme  = {
     colors: {
        headerfg: 'black',
        headerbg: '#8AA6A3',
        navbg: '#0F2026',
        navfg: '#C4EEF2',
        navabg:  '#4C5958',
        navafg: '#C4EEF2',
        navabghover: '#C4EEF2',
        navafghover: '#10403B',
        navabgactive: '#C4EEF2',
        navafgactive: '#10403B',
        foreground: 'black',
        background: '#C4EEF2',
        title: 'black',
        canvasbg: '#E4F0F2',
        cardbg: '#3E848C',
        cardfg: 'black',
        cardtitle: '#0f172a',
        carddate: '#0f172a',
        cardbghover: '#8AA6A3',
        cardfghover: 'black',
        cardtitlehover: tertiaryDark,
        carddatehover: tertiaryDark,
        footerbg: '#4C5958',
        footerfg: fontDark,
    },
}

const lightTheme: DefaultTheme  = {
     colors: {
        headerfg: fontLight,
        headerbg: '#9ab',
        navbg: tertiaryLight,
        navfg: secondaryLight,
        navabg: tertiaryLight,
        navafg: secondaryLight,
        navabghover: secondaryLight,
        navafghover: tertiaryLight,
        navabgactive: secondaryLight,
        navafgactive: tertiaryLight,
        background: bgLight,
        foreground: 'black',
        title: tertiaryLight,
        canvasbg:secondaryLight,
        cardbg: secondaryLight,
        cardfg: fontLight,
        cardtitle: tertiaryLight,
        carddate: tertiaryLight,
        cardbghover: primaryLight,
        cardfghover: 'black',
        cardtitlehover: tertiaryLight,
        carddatehover: tertiaryLight,
        footerbg: '#9ab',
        footerfg: fontLight,
    },
}

const darkTheme: DefaultTheme  = {
     colors: {
        headerfg: fontDark,
        headerbg: '#1e293b',
        navbg: tertiaryDark,
        navfg: '#cde',
        navabg: tertiaryDark,
        navafg: '#cde',
        navabghover: '#cde',
        navafghover: tertiaryDark,
        navabgactive: '#cde',
        navafgactive: tertiaryDark,
        background: bgDark,
        foreground: fontDark,
        title: tertiaryDark,
        canvasbg: tertiaryDark,
        cardbg: secondaryDark,
        cardfg: fontDark,
        cardtitle: '#0f172a',
        carddate: '#0f172a',
        cardbghover: primaryDark,
        cardfghover: 'black',
        cardtitlehover: tertiaryDark,
        carddatehover: tertiaryDark,
        footerbg: '#9ab',
        footerfg: fontDark,
    },
}

const testTheme: DefaultTheme  = {
     colors: {
        headerfg: font,
        headerbg: secondary,
        navbg: tertiary,
        navfg: secondary,
        navabg: tertiary,
        navafg: secondary,
        navabghover: secondary,
        navafghover: tertiary,
        navabgactive: secondary,
        navafgactive: tertiary,
        background: bgMyDark,
        foreground: '#cde',
        title: tertiary,
        canvasbg: '#cde',
        cardbg: secondary,
        cardfg: font,
        cardtitle: tertiary,
        carddate: tertiary,
        cardbghover: primary,
        cardfghover: 'black',
        cardtitlehover: secondary,
        carddatehover: secondary,
        footerbg: secondary,
        footerfg: font,
    },
}

export { defaultTheme, lightTheme, darkTheme }
