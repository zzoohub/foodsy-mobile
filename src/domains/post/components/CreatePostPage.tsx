import { StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Spacing } from "@/components/core";

export function CreatePostPage() {
  const [content, setContent] = useState("");

  const handlePost = () => {
    // Implement post creation logic
    console.log("Post content:", content);
    setContent("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create Post</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="What's on your mind?"
          multiline
          value={content}
          onChangeText={setContent}
        />

        <View style={styles.imageSection}>
          <TouchableOpacity style={styles.addImageButton}>
            <FontAwesome name="image" size={24} color="#666" />
            <Spacing size={8} horizontal />
            <Text>Add Photos</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.postButton, !content ? styles.postButtonDisabled : {}]}
          disabled={!content}
          onPress={handlePost}
        >
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 150,
    borderWidth: 1,
    borderColor: "#e1e1e1",
    borderRadius: 8,
    padding: 12,
    textAlignVertical: "top",
  },
  imageSection: {
    marginTop: 16,
    marginBottom: 32,
  },
  addImageButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#e1e1e1",
    borderStyle: "dashed",
    borderRadius: 8,
    justifyContent: "center",
  },
  postButton: {
    backgroundColor: "#0066FF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  postButtonDisabled: {
    backgroundColor: "#cccccc",
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
