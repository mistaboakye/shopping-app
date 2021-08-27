import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ButtonNext() {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Add to cart");
      }}
      style={styles.buttonContainer}
    >
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    backgroundColor: "#5a33cc",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 70,
    borderRadius: 40,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    alignSelf: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
});
