import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: 150, height: 70 }}
      ></View>
    </SafeAreaView>
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
