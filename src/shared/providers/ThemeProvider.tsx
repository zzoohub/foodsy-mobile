import { DarkTheme, DefaultTheme, ThemeProvider as RnThemeProvider } from "@react-navigation/native";
import { ReactNode } from "react";
import { useColorScheme } from "@/shared/hooks";
import "react-native-reanimated";

interface Props {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: Props) => {
  const colorScheme = useColorScheme();
  return <RnThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>{children}</RnThemeProvider>;
};
