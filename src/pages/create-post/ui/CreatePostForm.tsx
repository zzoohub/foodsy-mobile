import { Text, View } from "@/shared/ui";
import { FunnelSetState } from "@/shared/ui/toolkit/funnel/model/type";
import { CreatePostState, CreatePostSteps } from "./CreatePostPage";
import { StyleSheet } from "react-native";

interface Props {
  setState: FunnelSetState<CreatePostSteps, CreatePostState>;
  state: CreatePostState;
}

export const CreatePostForm = ({ setState, state }: Props) => {
  return (
    <View style={styles.container}>
      <Text>good</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CreatePostForm;
