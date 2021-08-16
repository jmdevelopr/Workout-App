const color = {
  primary120: '#2549CB',
  primary100: '#2E5BFE',
  secondary110: '#0E2EC1',
  shade000: '#ffffff',
  shade100: '#000000',
};

const gradient = {
  gradientSecondary: 'linear-gradient(135deg, #2E5BFE 0%, #1033D6 100%)',
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
  textSmall: {
    fontFamily: 'noto-sans-jp-regular, sans-serif',
    fontFamilyBold: 'noto-sans-jp-bold, sans-serif',
    fontSize: 18,
    lineHeight: 12,
  },
  button: {
    fontFamily: 'noto-sans-jp-regular, sans-serif',
    fontFamilyBold: 'noto-sans-jp-bold, sans-serif',
    fontSize: 14,
    lineHeight: 12,
  },
};

const mainTheme = {
  color,
  shadow,
  animationTime,
  typography,
  gradient,
  button: {
    primary: {
      padding: '4px 24px',
      borderRadius: '8px',
      typography: typography.button,
      backgroundColor: color.primary100,
      color: color.shade000,
      border: 'none',
      shadow: shadow.callToAction,
      marginRight: 0,
      width: 'auto',
      height: 'auto',
      iconSize: '',
      hover: {
        border: 'none',
        backgroundColor: color.secondary110,
        shadow: shadow.callToAction,
        color: color.shade000,
      },
      active: {
        backgroundColor: color.primary120,
        color: color.shade000,
        padding: '4px 24px',
        border: 'none',
        borderRadius: '8px',
        shadow: shadow.none,
        fill: color.shade000,
      },
    },
  },
};

export default mainTheme;
