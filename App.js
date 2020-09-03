import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Inside me there are two wolves.</Text>
      <Text style={{ color: "white" }}>One is bad at writing code.</Text>
      <Text style={{ color: "white" }}>
        The other one is a wolf, so he also can't code.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
