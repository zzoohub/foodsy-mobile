import { StyleSheet } from "react-native";
import { View, Text, HeaderGoBack } from "@/shared/ui";

interface Props {
  title?: string;
  left?: (() => JSX.Element)[];
  right?: (() => JSX.Element)[];
}

export const Header = ({ title, left = [], right = [] }: Props) => {
  return (
    <View style={styles.header}>
      {/* 왼쪽 요소 */}
      <View style={styles.elements}>
        {left.map((Element, idx) => (
          <Element key={idx} />
        ))}
      </View>

      {title && (
        <View style={styles.titleBox}>
          <Text style={styles.title} type="subtitle">
            {title}
          </Text>
        </View>
      )}
      {/* 오른쪽 요소 */}
      <View style={styles.elements}>
        {right.map((Element, idx) => (
          <Element key={idx} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 65,
    paddingBottom: 20,
  },

  titleBox: {
    position: "absolute",
    left: "50%",
    top: 65,
    transform: [{ translateX: "-50%" }],
    width: "auto",
  },

  title: {
    textAlign: "center",
    width: "100%",
  },

  elements: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
  },
});
