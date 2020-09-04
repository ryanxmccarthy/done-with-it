import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Inside me there are two wolves.</Text>
      <Text>One is bad at writing code.</Text>
      <Text>The other one is a wolf, so he also can't code.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
