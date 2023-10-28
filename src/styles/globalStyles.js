// React-Core-AccessibilityResources
import { Dimensions } from 'react-native';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
};

export const colors = {
    primary: '#456CD0',
    secondary: '#8FA7E3',
    white: '#ffffff',
    dark: '#000000',
    light: '#b5b5b5',
    light2: '#d5d5d5',
    light3: '#e7e7e7',
    light4: '#eaeaea',
    light5: '#f3f3f3'
};

export const fontSizes = {
    fs10: 10,
    fs12: 12,
    fs14: 14,
    fs16: 16,
    fs18: 18,
    fs20: 20,
    fs22: 22,
    fs24: 24,
    fs26: 26,
    fs28: 28,
    fs30: 30,
    fs32: 32,
    fs36: 36,
    fs40: 40,
    fs50: 50,
    fs60: 60,
    fs70: 70,
};

export const fontWeights = {
    fw100: '100',
    fw200: '200',
    fw300: '300',
    fw400: '400',
    fw500: '500',
    fw600: '600',
    fw700: '700',
    fw800: '800',
};

export const styleGuide = {
    radius: 8,
    padding: 14,
    titleTextSize: fontSizes.fs16,
    titleTextWeight: fontWeights.fw400
}

export const DIVIDER_STYLE = {
    height: 1,
    width: dimensions.fullWidth - styleGuide.padding * 2,
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    marginVertical: styleGuide.padding / 2
}

export const SHADOW_STYLE = {
    shadowColor: colors.light,
    shadowOffset: {
        width: 4,
        height: 4,
    },
    shadowRadius: 4.4,
    shadowOpacity: 0.6,
    elevation: 3
}