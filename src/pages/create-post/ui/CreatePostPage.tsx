import { Spacing, Text, useFunnel, View } from "@/shared/ui";
import { StyleSheet } from "react-native";
import { ChooseImages } from "./ChooseImages";
import { CreatePostForm } from "./CreatePostForm";

export type CreatePostSteps = ("choose-images" | "form")[];
export interface CreatePostState extends Record<string, unknown> {
  images: string[];
}

export const CreatePostPage = () => {
  const [Funnel, state, setState] = useFunnel<CreatePostSteps, CreatePostState>(["choose-images", "form"]).withState({
    images: [],
  });

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
