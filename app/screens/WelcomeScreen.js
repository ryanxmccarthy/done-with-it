import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={{ color: "white" }}>One Rep Max Calculator</Text>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    backgroundColor: "#9c0c0cbb",
    height: 70,
    width: "100%",
  },
  logo: {
    height: 200,
    position: "absolute",
    top: 70,
    width: 200,
  },
  registerButton: {
    backgroundColor: "#540505bb",
    height: 70,
    width: "100%",
  },
});

export default WelcomeScreen;
