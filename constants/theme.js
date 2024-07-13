import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export const COLORS = {
    primary: '#2A4D50',
    secondary: '#DDF0FF',
    tertiary: '#FF7754',

    gray: "#83829A",
    white: '#ffffff',
    black: '#000000',
    red: '#e81C135',
    green: "#00C135",
    lightWhite: "#FAFAFC",
    frenGreen: '#4F7942',
};

export const SIZES = {
    xSmall: 10,
    samll: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
};

export const SHADOWS = {
    samll: {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};