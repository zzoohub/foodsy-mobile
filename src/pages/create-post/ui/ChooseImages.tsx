"use client";

import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { FunnelSetState } from "@/shared/ui/toolkit/funnel/model/type";
import { CreatePostSteps, CreatePostState } from "./CreatePostPage";
import { Text, View } from "@/shared/ui";

interface Props {
  setState: FunnelSetState<CreatePostSteps, CreatePostState>;
  state: CreatePostState;
}
export const ChooseImages = ({ setState, state }: Props) => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsMultipleSelection: true,
      allowsEditing: false,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setState(prev => ({ ...prev, images: result.assets.map(asset => asset.uri), step: "form" }));
    }
  };

  const takePhoto = async () => {
    if (hasPermission) {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setState(prev => ({ ...prev, images: result.assets.map(asset => asset.uri), step: "form" }));
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    <View style={styles.permissionContainer}>
      <Text style={styles.permissionText}>카메라 접근 권한이 없습니다.</Text>
      <TouchableOpacity style={styles.permissionButton} onPress={requestPermissions}>
        <Text style={styles.permissionButtonText}>카메라 권한 허용</Text>
      </TouchableOpacity>
    </View>;
  }

  return (
    <View style={styles.container}>
      <Text type="subtitle" style={styles.title}>
        이미지 선택
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <MaterialIcons name="photo-library" size={40} />
          <Text style={styles.buttonText}>앨범에서 선택</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <MaterialIcons name="camera-alt" size={40} />
          <Text style={styles.buttonText}>카메라로 촬영</Text>
        </TouchableOpacity>
      </View>
      {/* {state.images.length > 0 && (
        <>
          {state.images.map((image, i) => (
            <Image key={i} source={{ uri: image }} style={styles.image} />
          ))}
        </>
      )} */}
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    backgroundColor: "#fff",
    shadowColor: "#666666",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    marginTop: 10,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 20,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  permissionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  permissionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  permissionButtonText: {
    fontSize: 16,
  },
});
