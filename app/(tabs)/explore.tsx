import { StyleSheet, Image, Platform } from "react-native";

import { Text, View, ExternalLink } from "@/shared/ui";

export default function TabTwoScreen() {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text type="title">Explore</Text>
      </View>
      <Text>This app includes example code to help you get started.</Text>

      <Text>
        This app has two screens: <Text type="defaultSemiBold">app/(tabs)/index.tsx</Text> and{" "}
        <Text type="defaultSemiBold">app/(tabs)/explore.tsx</Text>
      </Text>
      <Text>
        The layout file in <Text type="defaultSemiBold">app/(tabs)/_layout.tsx</Text> sets up the tab navigator.
      </Text>
      <ExternalLink href="https://docs.expo.dev/router/introduction">
        <Text type="link">Learn more</Text>
      </ExternalLink>

      <Text>
        You can open this project on Android, iOS, and the web. To open the web version, press{" "}
        <Text type="defaultSemiBold">w</Text> in the terminal running this project.
      </Text>

      <Text>
        For static images, you can use the <Text type="defaultSemiBold">@2x</Text> and{" "}
        <Text type="defaultSemiBold">@3x</Text> suffixes to provide files for different screen densities
      </Text>
      <Image source={require("~/assets/images/react-logo.png")} style={{ alignSelf: "center" }} />
      <ExternalLink href="https://reactnative.dev/docs/images">
        <Text type="link">Learn more</Text>
      </ExternalLink>

      <Text>
        Open <Text type="defaultSemiBold">app/_layout.tsx</Text> to see how to load{" "}
        <Text style={{ fontFamily: "SpaceMono" }}>custom fonts such as this one.</Text>
      </Text>
      <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
        <Text type="link">Learn more</Text>
      </ExternalLink>

      <Text>
        This template has light and dark mode support. The <Text type="defaultSemiBold">useColorScheme()</Text> hook
        lets you inspect what the user's current color scheme is, and so you can adjust UI colors accordingly.
      </Text>
      <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
        <Text type="link">Learn more</Text>
      </ExternalLink>

      <Text>
        This template includes an example of an animated component. The{" "}
        <Text type="defaultSemiBold">components/HelloWave.tsx</Text> component uses the powerful{" "}
        <Text type="defaultSemiBold">react-native-reanimated</Text> library to create a waving hand animation.
      </Text>
      {Platform.select({
        ios: (
          <Text>
            The <Text type="defaultSemiBold">components/ParallaxScrollView.tsx</Text> component provides a parallax
            effect for the header image.
          </Text>
        ),
      })}
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
