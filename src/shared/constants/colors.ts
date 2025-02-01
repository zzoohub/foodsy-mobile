export interface ThemeColors {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
}

export const Colors: { dark: ThemeColors; light: ThemeColors } = {
  light: {
    primary: "#6200ee", // 주요 색상
    primaryVariant: "#3700b3", // 주요 색상 변형
    secondary: "#03dac6", // 보조 색상
    secondaryVariant: "#018786", // 보조 색상 변형
    background: "#ffffff", // 배경색
    surface: "#ffffff", // 표면색
    error: "#b00020", // 에러 색상
    onPrimary: "#ffffff", // 주요 색상 위에 표시될 텍스트 등 반대 색상
    onSecondary: "#000000", // 보조 색상 위에 표시될 텍스트 등 반대 색상
    onBackground: "#000000", // 배경 위에 표시될 텍스트 등 반대 색상
    onSurface: "#000000", // 표면 위에 표시될 텍스트 등 반대 색상
    onError: "#ffffff", // 에러 색상 위에 표시될 텍스트 등 반대 색상
  },
  dark: {
    primary: "#bb86fc",
    primaryVariant: "#3700b3",
    secondary: "#03dac6",
    secondaryVariant: "#03dac6",
    background: "#121212",
    surface: "#121212",
    error: "#cf6679",
    onPrimary: "#000000",
    onSecondary: "#000000",
    onBackground: "#ffffff",
    onSurface: "#ffffff",
    onError: "#000000",
  },
};
