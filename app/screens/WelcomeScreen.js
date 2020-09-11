import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={{ color: "white" }}>One Rep Max Calculator</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.buttonText}>Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonText: {
    color: "white",
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "#9c0c0cbb",
    height: 70,
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    height: 200,
    width: 200,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 50,
  },
  registerButton: {
    alignItems: "center",
    backgroundColor: "#540505bb",
    height: 70,
    justifyContent: "center",
    width: "100%",
  },
});

export default WelcomeScreen;
