import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/signin");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#22003d",
  },
});
