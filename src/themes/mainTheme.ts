const color = {
  primary120: '#D53C50',
  primary110: '#D53C50',
  primary100: '#ED4359',
  secondary100: '#AEBFC5',
  shade000: '#FFFFFF',
  shade005: '#F5F5F5',
  shade100: '#000000',
};

const shadow = {
  callToAction: {
    hOffset: 0,
    vOffset: 2,
    blur: 3,
    spread: 0,
    color: 'rgba(40, 42, 58, 0.1)',
  },
  none: {
    hOffset: 0,
    vOffset: 0,
    blur: 0,
    spread: 0,
    color: 'rgba(40, 42, 58, 0.1)',
  },
};

const animationTime = {
  normal: 0.3,
  fast: 0.1,
};

const typography = {
  header: {
    fontFamily: 'montserrat-semibold, sans-serif',
    fontFamilyBold: 'montserrat-semibold, sans-serif',
    fontSize: 24,
    lineHeight: 20,
  },
  textNormal: {
    fontFamily: 'noto-sans-jp-medium, sans-serif',
    fontFamilyBold: 'noto-sans-jp-bold, sans-serif',
    fontSize: 18,
    lineHeight: 20,
  },
  textSmall: {
    fontFamily: 'noto-sans-jp-regular, sans-serif',
    fontFamilyBold: 'noto-sans-jp-bold, sans-serif',
    fontSize: 16,
    lineHeight: 18,
  },
  button: {
    fontFamily: 'montserrat-medium, sans-serif',
    fontFamilyBold: 'montserrat-semibold, sans-serif',
    fontSize: 18,
    lineHeight: 20,
  },
};

const mainTheme = {
  color,
  shadow,
  animationTime,
  typography,
  button: {
    short: {
      padding: '10px 0',
      borderRadius: '8px',
      typography: typography.button,
      backgroundColor: color.primary100,
      color: color.shade000,
      border: 'none',
      shadow: shadow.callToAction,
      marginRight: 0,
      width: '140px',
      height: 'auto',
      iconSize: '',
      textAlign: 'center',
      hover: {
        border: 'none',
        backgroundColor: color.primary110,
        shadow: shadow.callToAction,
        color: color.shade000,
      },
      active: {
        backgroundColor: color.primary120,
        color: color.shade000,
        border: 'none',
        shadow: shadow.none,
        fill: color.shade000,
      },
    },
  },
  link: {
    padding: '24px 0 10px',
    underline: {
      height: 2,
      backgroundColor: color.shade000,
    },
  },
  input: {
    typography: typography.textNormal,
    typographyHeader: typography.header,
    padding: '10px 14px',
    backgroundColor: color.shade005,
  },
  mainView: {
    height: 600,
    borderRadius: 36,
    backgroundColor: color.shade000,
  },
  homeView: {
    header: {
      margin: '30px 0 40px',
    },
    scrollable: {
      height: 480,
    },
    workoutPlan: {
      height: 100,
      padding: '0 30px',
      marginBottom: 50,
    },
    workoutDetails: {
      marginRight: 16,
    },
  },
};

export default mainTheme;
