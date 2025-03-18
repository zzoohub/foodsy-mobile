import { useThemeColor } from "@/shared/hooks";
import { PropsWithChildren, ReactNode } from "react";
import { GestureHandlerRootView as RNGestureHandlerRootView } from "react-native-gesture-handler";
import { View as ReactNativeView, type ViewProps } from "react-native";

export type Props = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export const GestureHandlerRootView = ({ children, lightColor, darkColor }: PropsWithChildren<Props>) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");
  return <RNGestureHandlerRootView style={{ backgroundColor }}>{children}</RNGestureHandlerRootView>;
};
