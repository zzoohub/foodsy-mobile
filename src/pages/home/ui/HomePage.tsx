import { Text, View } from "@/shared/ui";
import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";

export const HomePage = () => {
  const router = useRouter();

  const items = new Array(100).fill(0).map((n, i) => i + 1);

  return (
    <View>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => (
          <View key={item} style={styles.item}>
            <Image source={require("~/assets/images/react-logo.png")} style={styles.img} />
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  item: {
    marginBottom: 10,
  },
  img: {
    width: "100%",
    objectFit: "contain",
    height: 100,
  },
});
