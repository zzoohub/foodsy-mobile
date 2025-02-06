import { Spacing, Text, useFunnel, View } from "@/shared/ui";
import { StyleSheet } from "react-native";
import { Camera } from "./Camera";

export const CreatePostPage = () => {
  const [Funnel, state, setState] = useFunnel(["album", "camera", "form"]).withState({ im: "" });

  return (
    <>
      <Spacing height={50} />
      <Funnel>
        <Funnel.Step name="album">
          <View>
            <Text onPress={() => setState({ step: "camera" })}>앨범</Text>
          </View>
        </Funnel.Step>
        <Funnel.Step name="camera">
          <Camera onTakePicture={image => setState({ step: "form", image })} />
        </Funnel.Step>
        <Funnel.Step name="form">
          <View>
            <Text>폼</Text>
          </View>
        </Funnel.Step>
      </Funnel>
    </>
  );
};

const styles = StyleSheet.create({});
