import { View } from "@/shared/ui";
import { FunnelSetState } from "@/shared/ui/toolkit/funnel/model/type";
import { CreatePostState, CreatePostSteps } from "./CreatePostPage";

interface Props {
  setState: FunnelSetState<CreatePostSteps, CreatePostState>;
  state: CreatePostState;
}
export const CreatePostForm = ({ setState, state }: Props) => {
  return (
    <View>
      <View></View>
    </View>
  );
};
