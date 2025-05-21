import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ARScannerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AR Scanner Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ARScannerScreen;
