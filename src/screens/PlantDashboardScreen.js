import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PlantDashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Plant Dashboard Screen</Text>
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

export default PlantDashboardScreen;
