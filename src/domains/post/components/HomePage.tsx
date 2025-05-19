import { StyleSheet, SafeAreaView } from "react-native";
import { PostFeed } from "./PostFeed";
import { View } from "@/components/core";

export function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <PostFeed />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
});
