import { Spacing, Text, useFunnel, View } from "@/shared/ui";
import { StyleSheet } from "react-native";
import { ChooseImages } from "./ChooseImages";
import { CreatePostForm } from "./CreatePostForm";

export type CreatePostSteps = ("choose-images" | "form")[];
export interface CreatePostState extends Record<string, unknown> {
  images: string[];
  title: string;
  content: string;
  expense: number;
  calorie: number;
  rating: number;
  latitude: number;
  longitude: number;
}

const initState = () => ({
  images: [],
  title: "",
  content: "",
  expense: 0,
  calorie: 0,
  rating: 0,
  latitude: 0,
  longitude: 0,
});

export const CreatePostPage = () => {
  const [Funnel, state, setState] = useFunnel<CreatePostSteps, CreatePostState>(["choose-images", "form"]).withState(
    initState(),
  );

  return (
    <>
      <Spacing height={50} />
      <Funnel>
        <Funnel.Step name="choose-images">
          <ChooseImages setState={setState} state={state} />
        </Funnel.Step>
        <Funnel.Step name="form">
          <CreatePostForm setState={setState} state={state} />
        </Funnel.Step>
      </Funnel>
    </>
  );
};

const styles = StyleSheet.create({});
