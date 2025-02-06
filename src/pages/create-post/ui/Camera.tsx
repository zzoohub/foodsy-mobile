import { Text, View } from "@/shared/ui";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { Button, Pressable, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  onTakePicture: (uri: string) => void;
}
export const Camera = ({ onTakePicture }: Props) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  const ref = useRef<CameraView>(null);

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    onTakePicture(photo?.uri ?? "");
  };

  if (!permission) {
    // Camera permissions are still loading.
    console.log("not permission");
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraView ref={ref} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>

        <Pressable onPress={takePicture}>
          {({ pressed }) => (
            <View
              style={[
                styles.shutterBtn,
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}
            >
              <View style={styles.shutterBtnInner} />
            </View>
          )}
        </Pressable>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  shutterBtn: {
    backgroundColor: "transparent",
    borderWidth: 5,
    borderColor: "white",
    width: 85,
    height: 85,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  shutterBtnInner: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
