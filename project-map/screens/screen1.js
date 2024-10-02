import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ToastAndroid } from "react-native";

const DOUBLE_PRESS_DELAY = 2000;

const Screen1 = () => {
  const [lastBackPressed, setLastBackPressed] = React.useState(0);

  useFocusEffect(
    React.useCallback(() => {
      const handleBackPress = () => {
        const now = Date.now();
        if (now - lastBackPressed < DOUBLE_PRESS_DELAY) {
          BackHandler.exitApp();
        } else {
          setLastBackPressed(now);
          ToastAndroid.show(
            "한 번 더 누르면 앱이 종료됩니다.",
            ToastAndroid.SHORT
          );
        }
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackPress
      );
      return () => backHandler.remove();
    }, [lastBackPressed])
  );

  return (
    <View style={Styles.container}>
      <Text style={Styles.HomeText}>Screen1</Text>
    </View>
  );
};

export default Screen1;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HomeText: {
    fontSize: 35,
    textAlign: "center",
    marginTop: 100,
  },
});
