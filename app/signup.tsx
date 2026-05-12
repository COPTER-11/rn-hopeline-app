import { router } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Signup() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo-content.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Create your Account</Text>
      <TextInput style={styles.tinput} placeholder="E-mail" />
      <TextInput style={styles.tinput} placeholder="Password" />
      <TextInput style={styles.tinput} placeholder="Confirm Password" />
      <TouchableOpacity style={styles.btsignin}>
        <Text style={styles.textbt}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.hr} />
      <Text style={styles.textsignin}>Or sign in witn</Text>
      <View style={styles.signin}>
        <View style={styles.iconsignin}>
          <Image source={require("@/assets/images/google.png")} />
        </View>
        <View style={styles.iconsignin}>
          <Image source={require("@/assets/images/facebook.png")} />
        </View>
        <View style={styles.iconsignin}>
          <Image source={require("@/assets/images/x.png")} />
        </View>
      </View>
      <View style={{ flex: 1 }} />
      <Text style={styles.textSignin}>
        Already have an account? {}
        <Text style={styles.textin} onPress={() => router.push("/signin")}>
          Sign In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textSignin: {
    fontSize: 17,
  },
  textin: {
    fontWeight: "bold",
    marginRight: 5,
  },
  iconsignin: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: 55,
    height: 55,
    borderRadius: 50,
    elevation: 9,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  signin: {
    marginBlock: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "53%",
  },
  textsignin: {
    fontSize: 16,
    fontWeight: "bold",
  },
  hr: {
    marginTop: 20,
    marginBottom: 10,
    height: 1,
    width: "65%",
    backgroundColor: "#000000",
  },
  textbt: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },
  btsignin: {
    alignItems: "center",
    backgroundColor: "#22003d",
    width: "100%",
    height: 50,
    borderRadius: 10,
    padding: 15,
    fontSize: 17,
    marginBlock: 15,
  },
  textforget: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  tinput: {
    backgroundColor: "#dbdbdb",
    width: "100%",
    height: 50,
    borderRadius: 10,
    padding: 15,
    fontSize: 17,
    marginBlock: 12,
  },
  content: {},
  container: {
    height: "100%",
    alignItems: "center",
    padding: 30,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
  },
});
