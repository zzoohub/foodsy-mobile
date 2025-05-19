import { FlatList, StyleSheet } from "react-native";
import { useRef } from "react";
import { NativeViewGestureHandler } from "react-native-gesture-handler";

import { GestureHandlerRootView } from "@/components/core";
import { PostCard } from "./PostCard";
import { usePosts, Post } from "../hooks/usePosts";
import { View } from "@/components/core";

export function PostFeed() {
  const nativeGestureRef = useRef<any>(null);
  const { posts, loading, refetch } = usePosts();

  return (
    <GestureHandlerRootView>
      <NativeViewGestureHandler ref={nativeGestureRef}>
        <FlatList
          style={styles.list}
          data={posts}
          nestedScrollEnabled
          keyExtractor={item => item.id}
          refreshing={loading}
          onRefresh={refetch}
          renderItem={({ item }) => (
            <PostCard
              username={item.username}
              likes={item.likes}
              content={item.content}
              images={item.images}
              nativeGestureRef={nativeGestureRef}
            />
          )}
          ListEmptyComponent={
            !loading ? (
              <View style={styles.emptyContainer}>
                <View style={styles.emptyContent} />
              </View>
            ) : null
          }
        />
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 50,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyContent: {
    width: "100%",
    height: 200,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
});
