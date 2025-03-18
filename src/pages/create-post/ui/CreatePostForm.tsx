import { Text, View } from "@/shared/ui";
import { FunnelSetState } from "@/shared/ui/toolkit/funnel/model/type";
import { CreatePostState, CreatePostSteps } from "./CreatePostPage";
import { Dimensions, Image, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";

interface Props {
  setState: FunnelSetState<CreatePostSteps, CreatePostState>;
  state: CreatePostState;
}

export const CreatePostForm = ({ setState, state }: Props) => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={width / (1 / 1)}
        data={state.images}
        panGestureHandlerProps={{
          // 수직 이동이 일정 임계치를 넘으면 제스처를 실패시키도록 합니다.
          failOffsetY: [-10, 10],
          // (선택사항) 수평 이동에 대한 활성 임계값도 조정해볼 수 있습니다.
          activeOffsetX: [-10, 10],
        }}
        renderItem={({ item, index }: { item: string; index: number }) => (
          <View style={[styles.images, { width }]} key={index}>
            <Image src={item} style={{ width: "100%", height: "100%", objectFit: "contain" }} resizeMode="contain" />
          </View>
        )}
      />

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  images: {},
});

export default CreatePostForm;
