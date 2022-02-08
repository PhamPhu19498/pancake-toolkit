import { Colors } from "./types";

export const baseColors = {
  failure: "#FD6B8D",
  primary: "#1FC7D4",
  primaryBright: "#49A2F2",
  primaryDark: "#122B41",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
  bright: "#868787",
  redeem:"#56A9BB",
  secondaryDark:"#101133",
  PrimaryLight:"#49A2F2",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#F5F5F5",
  cardBorder: "#F5F5F5",
  contrast: "#191326",
  dropdown: "#F5F5F5",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#F5F5F5",
  inputSecondary: "#E4E7EB",
  tertiary: "rgba(73, 162, 242, 0.1)",
  text: "#202224",
  textDisabled: "#BDC2C4",
  textSubtle: "#000000",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "white",
    inverseBubblegum: "white",
    cardHeader: "linear-gradient(111.68deg, #101133 0%, #101133 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    backgroundContainer: "linear-gradient(180deg, #F8F8FF 0%, #F8F8FF 100%)",
    backgroundUpgrade:"linear-gradient(106.94deg, rgba(255, 255, 255, 0.17) 24.69%, rgba(255, 255, 255, 0.1) 82.76%)",
    backgroundUserInfor:"linear-gradient(151.53deg, #D9DAFF 8.5%, #CCDDFF 97.77%)",
    backgroundNftInfo: "#EFF0FF",
  },
  backgroundTab: '#F5F5F5',
  textTab: '#8A94A6',
  borderTab: '#E4E7EB',
  textDark: '#101133',
  borderLine: '#E2E2E2',
  membershipwrapperheaderbackground:"#101133",
  dipoMainBackground: '#FFFFFF',
  dipoContainerBackground: '#EFF0FF',
  homePrice: '#010571',
  upgradelevelContainer:"#fff",
  borderUpgradeTableHeader:"#e2e2e2",
  backgroundlight:"rgba(255, 255, 255, 0.1);",
  backgrounddark:"rgba(16, 17, 51, 0.04);",
  backgroundContainerMembership:"#E8E9FA",
  divider: "#e2e2e2",
  backgroundDark:"#fff",
  thirdDark:"#F8F8FF",
  textDarkSecondary:"#40415C",
  bgCardProject:"#F8F8FF",
  textSecondary:"#585870",
  textThird:"#101133",
  bgPaste:"#D8DAFB",
  containerInput:"#E8E9FA",
  backgroundListview:"#F8F8FF",
  backgroundAcionList:"#E8E9FA",
  backgroundHeaderModal:"#F5F5F5",
  backgroundModal:"#FFFFFF",
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9A6AFF",
  background: "#011226",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#182636",
  cardBorder: "#182636",
  contrast: "#FFFFFF",
  dropdown: "#182636",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#182636",
  inputSecondary: "#262130",
  tertiary: "rgba(73, 162, 242, 0.1)",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#fff",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    backgroundContainer: "linear-gradient(128.36deg, rgba(255, 255, 255, 0.091) 12.77%, rgba(255, 255, 255, 0.013) 86.37%)",
    backgroundUpgrade:"#393B57;",
    backgroundUserInfor:"linear-gradient(162.57deg, rgba(44, 46, 116, 0.5) 22.42%, rgba(75, 22, 107, 0.5) 82.74%)",
    backgroundNftInfo: "linear-gradient(190.03deg, rgba(44, 46, 116, 0.5) 17.62%, rgba(75, 22, 107, 0.5) 83.22%)",
  },
  backgroundTab: '#011226',
  textTab: '#8A94A6',
  borderTab: '#E4E7EB',
  textDark: '#101133',
  borderLine: '#FFF',
  dipoMainBackground: 'linear-gradient(128.36deg, rgba(255, 255, 255, 0.091) 12.77%, rgba(255, 255, 255, 0.013) 86.37%);',
  dipoContainerBackground: 'linear-gradient(109.64deg, rgba(255, 255, 255, 0.105) 13.69%, rgba(255, 255, 255, 0.015) 89.45%)',
  homePrice: '#fdb533',
  membershipwrapperheaderbackground:"#101133",
  upgradelevelContainer:"rgba(255, 255, 255, 0.06)",
  borderUpgradeTableHeader:"rgba(255, 255, 255, 0.3);",
  backgrounddark:"rgba(255, 255, 255, 0.01)",
  backgroundlight :"rgba(255, 255, 255, 0.1)",
  backgroundContainerMembership:"#101133",
  divider:"rgb(82 82 82 / 50%)",
  backgroundDark:"#282947",
  thirdDark:"#1C1D3D",
  textDarkSecondary:"#B7B8C2",
  bgCardProject:"#101133",
  textSecondary:"#B7B8C2",
  textThird:"#FFFFFF",
  bgPaste:"#282947",
  containerInput:"#101133",
  backgroundListview:"linear-gradient(180deg, rgba(81, 82, 102, 0.5) 24.4%, rgba(71, 71, 96, 0.5) 50%)",
  backgroundAcionList:"rgba(61, 62, 89, 0.02)",
  backgroundHeaderModal:"#182636",
  backgroundModal:"#011226",
};
