import { useColorScheme as _useColorScheme } from "react-native";

export const useColorScheme = (): "light" | "dark" => {
  return _useColorScheme() ?? "light";
};
