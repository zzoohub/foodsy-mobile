import { TakePicture } from "@/domains/post";
import { useFunnel } from "@/components/utils";
import { useRouter } from "expo-router";
import { Text, StyleSheet } from "react-native";
import { CreatePostForm } from "@/domains/post";
import { useState } from "react";

export type CreatePostSteps = ["take-picture", "form"];
export interface CreatePostParams extends Record<string, unknown> {
  images: string[];
  location: {
    latitude: number;
    longitude: number;
  };
  price?: number;
  description?: string;
  rating?: number;
  calories?: number;
}
export default function CreatePostPage() {
  const router = useRouter();
  const [state, setState] = useState<CreatePostParams>({
    images: [],
    location: {
      latitude: 0,
      longitude: 0,
    },
  });

  return <TakePicture onClose={() => router.push("/")} setState={setState} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
